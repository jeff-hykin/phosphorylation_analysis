import { RandomForestClassifier } from "https://esm.sh/random-forest-classifier@0.6.0"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.2.2.0/csv.js"
import { intersection } from "https://deno.land/x/good@1.2.2.0/set.js"
import { flatten, asyncIteratorToList } from "https://deno.land/x/good@1.2.2.0/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.2.2.0/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.28/main/file_system.js"
import { parseFasta } from "../generic_tools/fasta_parser.js"

export async function loadPositiveExamples({ filePath, geneData, skipEntryIf }) {
    const csvData = parseCsv({
        input: await FileSystem.read("./data/phosphorylation@00.tsv"),
        separator: "\t",
        columnNames: [
            "abbreviatedGeneSpecies",
            "uniprotGeneId",
            "indexRelativeToGene",
            "typeOfSite",
            "pubmedIdForRelatedReferences",
            "aminoAcidsString",
        ],
    })

    const geneNamesFromNegativeData = new Set(Object.keys(geneData))
    
    const summaryData = {
        frequencyPerHumanGene: {},
    }
    const geneNames = new Set()
    const haveSeenPhosSite = new Set()
    const positiveExamples = []
    for await (const eachPhosSite of csvData) {
        // skip any bad data (trailing newline most likely)
        if (!eachPhosSite.aminoAcidsString) {
            continue
        }
        // remove any sites near the start/end
        if (eachPhosSite.aminoAcidsString.match(/-/)) {
            continue
        }
        
        // add siteId
        const geneName = eachPhosSite.abbreviatedGeneSpecies
        eachPhosSite.siteId = `${geneName}|${eachPhosSite.indexRelativeToGene}`
        
        // remove duplicate entries (same geneId and indexRelativeToGene), probably a variant (different sequence) but on the safe side, remove it
        if (haveSeenPhosSite.has(eachPhosSite.siteId)) {
            continue
        }
        haveSeenPhosSite.add(eachPhosSite.siteId)
        
        // split up pubmedIdForRelatedReferences
        eachPhosSite.pubmedIdForRelatedReferences = `${eachPhosSite.pubmedIdForRelatedReferences}`.split(";")
        
        // custom filter
        if (skipEntryIf({...eachPhosSite, geneName})) {
            continue
        }

        // add to gene data
        geneData[geneName] = geneData[geneName]||{}
        geneData[geneName].phosSites = geneData[geneName].phosSites||[]
        geneData[geneName].phosSites.push(eachPhosSite)

        // 
        // track names and data
        // 
        geneNames.add(geneName)
        
        positiveExamples.push({
            indexRelativeToGene: eachPhosSite.indexRelativeToGene,
            aminoAcids: eachPhosSite.aminoAcidsString,
            label: 1,
            geneInfo: geneData[geneName],
        })
    }

    // 
    // process phos
    // 
        const commonGeneNames = intersection(
            geneNamesFromNegativeData, 
            new Set(geneNames),
        )

        for (const eachGeneName of commonGeneNames) {
            const numberOfPhosSites = geneData[eachGeneName]?.phosSites?.length || 0
            summaryData.frequencyPerHumanGene[numberOfPhosSites] = (summaryData.frequencyPerHumanGene[numberOfPhosSites]||0) + 1
        }

    return {
        positiveExamples,
        summaryData,
        geneNames,
        commonGeneNames,
        geneData,
    }
}
