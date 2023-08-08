import { parseCsv } from "https://deno.land/x/good@1.4.4.2/csv.js"
import { intersection } from "https://deno.land/x/good@1.4.4.2/set.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.38/main/file_system.js"

export async function loadPositiveExamples({ filePath, geneData, skipEntryIf }) {
    const geneIdsFromNegativeData = new Set(Object.keys(geneData))
    
    const summaryData = {
        frequencyPerHumanGene: {},
    }
    const geneIds = new Set()
    const haveSeenPhosSite = new Set()
    const positiveExamples = []
    for (const eachPath of await glob(filePath)) {
        const csvData = parseCsv({
            input: await FileSystem.readLinesIteratively(eachPath),
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
            const uniprotGeneId = eachPhosSite.uniprotGeneId
            eachPhosSite.siteId = `${uniprotGeneId}|${eachPhosSite.indexRelativeToGene}`
            
            // remove duplicate entries (same geneId and indexRelativeToGene), probably a variant (different sequence) but on the safe side, remove it
            if (haveSeenPhosSite.has(eachPhosSite.siteId)) {
                continue
            }
            haveSeenPhosSite.add(eachPhosSite.siteId)
            
            // split up pubmedIdForRelatedReferences
            eachPhosSite.pubmedIdForRelatedReferences = `${eachPhosSite.pubmedIdForRelatedReferences}`.split(";")
            
            // custom filter
            if (skipEntryIf({...eachPhosSite, uniprotGeneId})) {
                continue
            }

            // add to gene data
            geneData[uniprotGeneId] = geneData[uniprotGeneId]||{}
            geneData[uniprotGeneId].name = uniprotGeneId
            geneData[uniprotGeneId].phosSites = geneData[uniprotGeneId].phosSites||[]
            geneData[uniprotGeneId].phosSites.push(eachPhosSite)

            // 
            // track names and data
            // 
            geneIds.add(uniprotGeneId)
            
            positiveExamples.push({
                siteId: `${uniprotGeneId}|${eachPhosSite.indexRelativeToGene}`,
                indexRelativeToGene: eachPhosSite.indexRelativeToGene,
                aminoAcids: eachPhosSite.aminoAcidsString,
                isPhosSite: 1,
                geneInfo: geneData[uniprotGeneId],
            })
        }
    }

    // 
    // process phos
    // 
        const commonGeneIds = intersection(
            geneIdsFromNegativeData, 
            new Set(geneIds),
        )

        for (const eachGeneId of commonGeneIds) {
            const numberOfPhosSites = geneData[eachGeneId]?.phosSites?.length || 0
            summaryData.frequencyPerHumanGene[numberOfPhosSites] = (summaryData.frequencyPerHumanGene[numberOfPhosSites]||0) + 1
        }

    return {
        positiveExamples,
        summaryData,
        geneIds,
        commonGeneIds,
        geneData,
    }
}
