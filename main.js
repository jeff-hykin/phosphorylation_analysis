import { RandomForestClassifier } from "https://esm.sh/random-forest-classifier@0.6.0"

// todo:
    // test random forest code
    // encode positive/negative as bit array
    // cross validate the output

    // features
        // allow amino acid substitues/groups
    // answer some questions:
        // how many have no phos sites
        // whats the ratio
        // intersection between human genome set and the phos human genome set
        // if trained on phos-human how well does it transfer to phos-plant names end with "_ARATH" 
    
    // ask: 
        //if it doesn't work on plants isnt that interesting 

    // other:
        // "KD modal logic"

import { parseCsv, createCsv } from "https://deno.land/x/good@1.2.1.0/csv.js"
import { flatten, asyncIterableToList } from "https://deno.land/x/good@1.2.1.0/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes } from "https://deno.land/x/good@1.2.1.0/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.28/main/file_system.js"
import { parseFasta } from "./generic_tools/fasta_parser.js"

// 
// human genome
// 
    var humanString = await FileSystem.read(`${FileSystem.thisFolder}/data/human_genome.fasta.txt`)

    // 
    // process fasta
    // 
        function getWindows(string, seqSize=10) {
            let output = []
            const windowSize = (seqSize*2)+1
            for (const each of findAll(/T|S|V/,string)) {
                const min = each.index-seqSize >= 0 ? each.index-seqSize : 0
                const slice = string.slice(min,each.index+seqSize)
                if (slice.length === windowSize) {
                    output.push({index: min, slice})
                }
            }
            return output
        }

        var humanRecords = (
            parseFasta(humanString).map(
                each=>({
                    ...each,
                    phosWindows: getWindows(each.aminoAcidsString),
                })
            )
        )
        var restrictedHumanNames = humanRecords.map(
            each=>each.ncbiIdentifiers[0].args.name
        )

        // S counts
        var sCounts = 0
        var aminoAcidCount = 0
        var styCounts = 0
        for (const eachHumanRecord of humanRecords) {
            if (eachHumanRecord.aminoAcidsString.match(/S/g)) {
                sCounts += eachHumanRecord.aminoAcidsString.match(/S/g).length
            }
            if (eachHumanRecord.aminoAcidsString.match(/S|T|Y/g)) {
                styCounts += eachHumanRecord.aminoAcidsString.match(/S|T|Y/g).length
            }
            aminoAcidCount += eachHumanRecord.aminoAcidsString.length
        }
        
        // creates:
        // [
        //     {
        //         indexRelativeToGene: ,
        //         amnioAcids: ,
        //         geneInfo: ,
        //     }
        // ]
        var negativeExamples = [...flatten({
            iterable: humanRecords.map(
                eachGene=>
                    each.phosWindows.map(
                        ({index, slice})=>({
                            indexRelativeToGene: index,
                            amnioAcids: slice,
                            geneInfo: eachGene,
                        })
                    )
            )
        })]

        // FileSystem.write({
        //     path: "human.json",
        //     data: JSON.stringify(humanRecords,0,4),
        // })
        


// 
// phosphorylation data
// 
    // var geneData = {}
    // var haveSeenPhosSite = new Set()
    // var phos = (
    //     parseCsv({
    //         input: FileSystem.readLinesIteratively("./phos.tsv"),
    //         separator: "\t",
    //         columnNames: [
    //             "abbreviatedGeneSpecies",
    //             "uniprotGeneId",
    //             "indexRelativeToGene",
    //             "typeOfSite",
    //             "pubmedIdForRelatedReferences",
    //             "aminoAcidsString",
    //         ],
    //     })
    //     .map(each=>{
    //         each.siteId = `${each.abbreviatedGeneSpecies}|${each.indexRelativeToGene}`
    //         return each
    //     })
    //     // remove matches near end/start
    //     .filter(
    //         each=>!each.aminoAcidsString.match(/-/)
    //     )
    //     // remove duplicate entries (same geneId and indexRelativeToGene), probably a variant (different sequence) but on the safe side, remove it
    //     .filter(
    //         each=>{
    //             if (!haveSeenPhosSite.has(each.siteId)) {
    //                 haveSeenPhosSite.add(each.siteId)
    //                 return true
    //             } else {
    //                 return false
    //             }
    //         }
    //     )
    //     .map(
    //         each=>{
    //             // add to gene data
    //             geneData[each.abbreviatedGeneSpecies] = (geneData[each.abbreviatedGeneSpecies] || [])
    //             geneData[each.abbreviatedGeneSpecies].push(each)
    //             each.pubmedIdForRelatedReferences = `${each.pubmedIdForRelatedReferences}`.split(";")
    //             return each
    //         }
    //     )
    // )

    

    // // 
    // // process phos
    // // 
        
    //     phos = await asyncIterableToList(phos)
    //     phos.humanGeneNames = []
    //     phos.humanKeyCount = 0
    //     for (let each of Object.keys(geneData)) {
    //         if (each.endsWith("_HUMAN")) {
    //             phos.humanKeyCount++
    //             phos.humanGeneNames.push(each)
    //         }
    //     }

    //     phos.frequencyPerHumanGene = {}
    //     for (let eachHumanGeneName of humanGeneNames) {
    //         phos.frequencyPerHumanGene[geneData[eachHumanGeneName].length] = phos.frequencyPerHumanGene[geneData[eachHumanGeneName].length] ? phos.frequencyPerHumanGene[geneData[eachHumanGeneName].length]+1 : 1
    //     }

    //     var postiveExamples = []
    //     for (const each of phos) {
    //         positiveExampels.push({
    //             indexRelativeToGene: each.indexRelativeToGene,
    //             aminoAcids: each.aminoAcidsString,
    //             phosData: each,
    //         })
    //     }



// var phos = await phosPromise
// // phos = phos.slice(0,10)
// function* generateLines() {
//     console.debug(`testing:`)
//     yield "[\n"
//     let index = 0
//     const encoder = new TextEncoder()
//     const encode = encoder.encode.bind(encoder)
//     for (const each of phos) {
//         Deno.stdout.write(encode(`writing packet ${Math.round((++index/phos.length)*100)}%\r`))
//         each.pubmedIdForRelatedReferences = `${each.pubmedIdForRelatedReferences}`.split(";")
//         each.windows = (each.aminoAcidsString.match(/.{0,10}(T|S|Y).{0,10}/g) || [])
//         yield indent({string:JSON.stringify({...each}, 0, 4),})+",\n"
//     }
//     yield "]"
// }

// FileSystem.write({
//     path: "phos.json",
//     data: generateLines(),
// })