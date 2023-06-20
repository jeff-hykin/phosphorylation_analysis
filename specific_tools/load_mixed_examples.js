import { RandomForestClassifier } from "https://esm.sh/random-forest-classifier@0.6.0"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.2.2.0/csv.js"
import { intersection } from "https://deno.land/x/good@1.2.2.0/set.js"
import { flatten, asyncIteratorToList } from "https://deno.land/x/good@1.2.2.0/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.2.2.0/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.28/main/file_system.js"
import { parseFasta } from "../generic_tools/fasta_parser.js"
import { aminoAcidToFeatureVector } from "./amino_acid_to_feature_vector.js"

export async function loadMixedExamples({ filePath, windowPadding, skipEntryIf }) {
    
    const mixedString = await FileSystem.read(filePath)

    function getWindows(string) {
        let output = []
        const windowSize = (windowPadding*2)+1
        for (const each of findAll(/T|S|V/,string)) {
            const min = each.index-windowPadding >= 0 ? each.index-windowPadding : 0
            const slice = string.slice(min,each.index+windowPadding+1)
            if (slice.length === windowSize) {
                output.push({index: min, slice})
            }
        }
        return output
    }
    
    // S counts
    const summaryData = {
        sCounts: 0,
        aminoAcidCount: 0,
        styCounts: 0,
    }
    const geneNames = new Set()
    const geneList = parseFasta(mixedString)
    const geneData = {}
    const mixedExamples = []
    for (const eachGene of geneList) {
        // 
        // add attributes
        // 
        const geneName = eachGene.ncbiIdentifiers[0].args.name
        eachGene.name = geneName
        eachGene.phosWindows = getWindows(eachGene.aminoAcidsString)
        
        // custom filter
        if (skipEntryIf({...eachGene, geneName})) {
            continue
        }

        // 
        // track names and data
        // 
        geneNames.add(geneName)
        geneData[geneName] = eachGene

        // 
        // counts
        // 
        summaryData.aminoAcidCount += eachGene.aminoAcidsString.length
        if (eachGene.aminoAcidsString.match(/S/g)) {
            summaryData.sCounts += eachGene.aminoAcidsString.match(/S/g).length
        }
        if (eachGene.aminoAcidsString.match(/S|T|Y/g)) {
            summaryData.styCounts += eachGene.aminoAcidsString.match(/S|T|Y/g).length
        }
        
        // 
        // mixedExamples
        // 
        for (const { index, slice, } of eachGene.phosWindows) {
            mixedExamples.push({
                siteId: `${index}|${geneName}`,
                indexRelativeToGene: index,
                amnioAcids: slice,
                isPhosSite: 0,
                geneInfo: eachGene,
                inputs: aminoAcidToFeatureVector({
                    aminoAcidString: slice,
                }),
            })
        }
    }
    
    return {
        mixedExamples,
        summaryData,
        geneNames,
        geneData,
    }
}
