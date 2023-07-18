#!/usr/bin/env sh
"\"",`$(echo --% ' |out-null)" >$null;function :{};function dv{<#${/*'>/dev/null )` 2>/dev/null;dv() { #>
echo "1.31.3"; : --% ' |out-null <#';};v="$(dv)";d="$HOME/.deno/$v/bin/deno";if [ -x "$d" ];then exec "$d" run --v8-flags=--max-old-space-size=8192 -q -A "$0" "$@";elif [ -f "$d" ];then chmod +x "$d" && exec "$d" run --v8-flags=--max-old-space-size=8192 -q -A "$0" "$@";fi;bin_dir="$HOME/.deno/$v/bin";exe="$bin_dir/deno";has() { command -v "$1" >/dev/null; };if ! has unzip;then :;if ! has apt-get;then has brew && brew install unzip;else if [ "$(whoami)" = "root" ];then apt-get install unzip -y;elif has sudo;then echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;if [ "$ANSWER" =~ ^[Yy] ];then sudo apt-get install unzip -y;fi;elif has doas;then echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;if [ "$ANSWER" =~ ^[Yy] ];then doas apt-get install unzip -y;fi;fi;fi;fi;if ! has unzip;then echo "";echo "So I couldn't find an 'unzip' command";echo "And I tried to auto install it, but it seems that failed";echo "(This script needs unzip and either curl or wget)";echo "Please install the unzip command manually then re-run this script";exit 1;fi;if [ "$OS" = "Windows_NT" ];then target="x86_64-pc-windows-msvc";else :; case $(uname -sm) in "Darwin x86_64") target="x86_64-apple-darwin" ;; "Darwin arm64") target="aarch64-apple-darwin" ;; *) target="x86_64-unknown-linux-gnu" ;; esac;fi;deno_uri="https://github.com/denoland/deno/releases/download/v$v/deno-$target.zip";if [ ! -d "$bin_dir" ];then mkdir -p "$bin_dir";fi;if has curl;then curl --fail --location --progress-bar --output "$exe.zip" "$deno_uri";elif has wget;then wget --output-document="$exe.zip" "$deno_uri";else echo "Howdy! I looked for the 'curl' and for 'wget' commands but I didn't see either of them.";echo "Please install one of them";echo "Otherwise I have no way to install the missing deno version needed to run this code";fi;unzip -d "$bin_dir" -o "$exe.zip";chmod +x "$exe";rm "$exe.zip";exec "$d" run --v8-flags=--max-old-space-size=8192 -q -A "$0" "$@"; #>}; $DenoInstall = "${HOME}/.deno/$(dv)"; $BinDir = "$DenoInstall/bin"; $DenoExe = "$BinDir/deno.exe"; if (-not(Test-Path -Path "$DenoExe" -PathType Leaf)) { $DenoZip = "$BinDir/deno.zip"; $DenoUri = "https://github.com/denoland/deno/releases/download/v$(dv)/deno-x86_64-pc-windows-msvc.zip"; [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; if (!(Test-Path $BinDir)) { New-Item $BinDir -ItemType Directory | Out-Null; } Function Test-CommandExists { Param ($command); $oldPreference = $ErrorActionPreference; $ErrorActionPreference = "stop"; try {if(Get-Command "$command"){RETURN $true}} Catch {Write-Host "$command does not exist"; RETURN $false} Finally {$ErrorActionPreference=$oldPreference}; } if (Test-CommandExists curl) { curl -Lo $DenoZip $DenoUri; } else { curl.exe -Lo $DenoZip $DenoUri; } if (Test-CommandExists curl) { tar xf $DenoZip -C $BinDir; } else { tar.exe   xf $DenoZip -C $BinDir; } Remove-Item $DenoZip; $User = [EnvironmentVariableTarget]::User; $Path = [Environment]::GetEnvironmentVariable('Path', $User); if (!(";$Path;".ToLower() -like "*;$BinDir;*".ToLower())) { [Environment]::SetEnvironmentVariable('Path', "$Path;$BinDir", $User); $Env:Path += ";$BinDir"; } }; & "$DenoExe" run --v8-flags=--max-old-space-size=8192 -q -A "$PSCommandPath" @args; Exit $LastExitCode; <#
# */0}`;

    // split -l 200 --numeric-suffixes --additional-suffix=".txt" toSplit.txt splited

// import { RandomForest } from "./generic_tools/random_forest.js"
import { RandomForestClassifier } from "../generic_tools/random_forest.js"
import { crossValidation } from "../generic_tools/cross_validation.js"
import { frequencyCount, generateLinesFor, createOneHot } from "../generic_tools/misc.js"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.3.0.4/csv.js"
import { intersection } from "https://deno.land/x/good@1.3.0.4/set.js"
import { flatten, asyncIteratorToList, enumerate, zip, Iterable } from "https://deno.land/x/good@1.3.0.4/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.3.0.4/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.35/main/file_system.js"
import { loadMixedExamples } from "../specific_tools/load_mixed_examples.js"
import { loadPositiveExamples } from "../specific_tools/load_positive_examples.js"
import { amnioEncoding, aminoAcidSimplifier, aminoToOneHot,physicochemicalCategories } from "../specific_tools/amino_acid_to_feature_vector.js"
import { HuffmanCoder } from "../generic_tools/huffman_code.js"
import { encode, decode, NotSerializable } from 'https://raw.githubusercontent.com/jeff-hykin/es-codec/0523dfcff5c95ef52cc12f5eb6eeb8d2b07b4839/es-codec.js'
const _ = (await import('https://cdn.skypack.dev/lodash@4.17.21'))

import * as yaml from "https://deno.land/std@0.168.0/encoding/yaml.ts"
const configData = yaml.parse(await FileSystem.read(`${FileSystem.thisFolder}/../config.yaml`))

const project = configData["(project)"]
const pathTo = project["(path_to)"]
const config = project["(profiles)"]["(default)"]


const parameters = config["generate_data"]
const pathToHuffmanCoder = pathTo["huffman_coder"]
parameters.aminoMatchPattern = new RegExp(parameters.aminoMatchPattern)

// 
// human genome
// 
    let { mixedExamples, summaryData, geneIds, geneData } = await loadMixedExamples({
        filePath: `./data/human_genome.fasta.txt`,
        aminoMatchPattern: parameters.aminoMatchPattern,
        windowPadding: parameters.windowPadding,
        skipEntryIf: ({ uniprotGeneId, aminoAcidsString, ...otherData })=>false, // false=keep
    })
    console.debug(`mixedExamples[0] is:`,mixedExamples[0])

// 
// phosphorylation data
// 
    let {
        positiveExamples,
        commonGeneIds,
    } = await loadPositiveExamples({
        filePath: /.\/data\/phosphorylation@0\d+.tsv/,
        skipEntryIf: ({ uniprotGeneId, aminoAcidsString, })=>(
            !geneIds.has(uniprotGeneId)
            || !aminoAcidsString[parameters.windowPadding].match(parameters.aminoMatchPattern)
            || aminoAcidsString.match(/SSS+/) // done to improve huffman code, eliminates a few outliers
        ),
        geneData,
    })
    console.debug(`positiveExamples[0] is:`,positiveExamples[0])

// 
// remove any positiveExamples that appear in mixedExamples
// 
    const siteIdMapping = {}
    for (const [ index, each ] of enumerate(mixedExamples)) {
        siteIdMapping[each] = index
    }
    const mixedExampleIndiciesToDelete = []
    for (const each of positiveExamples) {
        const indexInMixedExamples = siteIdMapping[each.siteId]
        if (typeof indexInMixedExamples == 'number') {
            mixedExampleIndiciesToDelete.push(indexInMixedExamples)
        }
    }
    // biggest index comes first
    mixedExampleIndiciesToDelete.sort().reverse()
    for (const eachIndex of mixedExampleIndiciesToDelete) {
        mixedExamples = mixedExamples.splice(eachIndex, 1)
    }
    let negativeExamples = mixedExamples

// 
// 
// shrink
// 
// 
    // const maxCommonSize = Math.min(positiveExamples.length, negativeExamples.length)
    positiveExamples = positiveExamples.slice(-parameters.datasetSize)
    negativeExamples = negativeExamples.slice(-parameters.datasetSize)
    if (negativeExamples.length != positiveExamples.length) {
        let max = Math.min(positiveExamples.length, negativeExamples.length)
        console.error(`parameters.datasetSize was too big needs to be: ${max}`)
        positiveExamples = positiveExamples.slice(0, max)
        negativeExamples = negativeExamples.slice(0, max)
    }
    console.debug(`negativeExamples.length is:`,negativeExamples.length)
    console.debug(`positiveExamples.length is:`,positiveExamples.length)

// 
// preprocessing
// 
    if (parameters.preprocessing.shouldUseSimplifier) {
        // remove the ones that will get simplified
        for (const [key, value] of Object.entries(aminoAcidSimplifier)) {
            delete amnioEncoding[key]
        }
    }
    function* preprocess(examples) {
        let count = 0
        for (let { aminoAcids } of examples) {
            // 
            // simplify amino encodings
            // 
            if (parameters.preprocessing.shouldUseSimplifier) {
                for (const [key, value] of Object.entries(aminoAcidSimplifier)) {
                    aminoAcids = aminoAcids.replace(new RegExp(key, "g"), value)
                }
            }
            // 
            // get 
            // 
            const [ before, after ] = [ aminoAcids.slice(0,parameters.windowPadding), aminoAcids.slice(parameters.windowPadding+1,) ]
            yield [ coder.encode(before), coder.encode(after), aminoAcids ]
        }
    }

// 
// "train" HuffmanCoder and save it
// 
    if (parameters.useHuffmanEncoding) {
        // 
        // build
        // 
        const coder = new HuffmanCoder({ softCap: parameters.huffmanEncoderCap })
        console.debug(`building huffman coder`)
        let count = 0
        // edgecase making sure both "U" and "B" are seen at least once
        coder.addData("UGBTEVNYT".slice(0,parameters.windowPadding))
        for (const [ start, end, aminoAcidString ] of preprocess(positiveExamples)) {
            count += 1
            if (count % 2000 == 0) {
                console.log(`    on ${count}/${parameters.datasetSize*2}: ${Math.round(count/(parameters.datasetSize*2)*100)}%`)
            }
            // text before
            coder.addData(start)
            // text after
            coder.addData(end)
        }
        coder.freeze()
        const numberToVector = createOneHot(coder.numberToSubstring)

        // 
        // analyze encoded lengths
        // 
            // count = 0
            // console.debug(`building frequency count`)
            // const encodedLengths = frequencyCount(
            //     Iterable(
            //         preprocess(positiveExamples.concat(negativeExamples))
            //     ).map(
            //         ([before, after])=>[before.length, after.length]
            //     ).flattened
            // )
            // const smallestEncodingLength = Math.min(...Object.keys(encodedLengths).map(each=>each-0))
            // coder.encodedLengths = encodedLengths
            // coder.smallestEncodingLength = smallestEncodingLength

        // 
        // save
        // 
        console.debug(`saving huffman coder`)
        FileSystem.write({ path: pathToHuffmanCoder, data: JSON.stringify(coder,0,2) }).then(()=>console.debug(`saved huffman coder`))

        // 
        // apply 
        // 
        
        // direct encoding
            // function *encodeExamples(examples) {
            //     for (const [before, after] of preprocess(examples)) {
            //         // skip encodings that are too small
            //         if (before.length < parameters.minOneSideEncodedLength || after.length < parameters.minOneSideEncodedLength) {
            //             continue
            //         }
            //         const featureVectorBefore = before.slice(-parameters.minOneSideEncodedLength).map(each=>[...numberToVector[each]]).flat()
            //         const featureVectorAfter  = after.slice(0,parameters.minOneSideEncodedLength).map(each=>[...numberToVector[each]]).flat()
            //         const output = new Uint8Array(featureVectorBefore.concat(featureVectorAfter))
            //         yield output
            //     }
            // }
    }

// 
// select features
// 
    function *encodeExamples(examples) {
        for (const [acidsBefore, acidsAfter, aminoAcidString] of preprocess(examples)) {
            let featureVector = []
            
            // 
            // huffman position-invariant
            // 
            if (parameters.useHuffmanEncoding) {
                // skip encodings that are too small
                if (acidsBefore.length < parameters.minOneSideEncodedLength || acidsAfter.length < parameters.minOneSideEncodedLength) {
                    continue
                }
                
                const beforeVector = []
                const afterVector = []
                for (const [substringNumber, vector] of Object.entries(numberToVector)) {
                    beforeVector[substringNumber] = 255 // e.g. far away
                    afterVector[substringNumber]  = 255 // e.g. far away
                }

                // what features were present
                for (const [distance, substringNumber] of [...enumerate(acidsBefore.reverse())].reverse()) {
                    beforeVector[substringNumber] = distance
                }
                for (const [distance, substringNumber] of [...enumerate(acidsAfter)].reverse()) {
                    afterVector[substringNumber] = distance
                }

                featureVector = featureVector.concat(beforeVector, afterVector)
            }

            // 
            // normal positional data (20x20)
            // 
            if (parameters.featureToInclude.normalPositionalData) {
                const centerIndex = (aminoAcidString.length-1)/2
                for (const [index, eachAminoChar] of enumerate(aminoAcidString)) {
                    // skip the one we are trying to predict
                    if (index == centerIndex) {
                        continue
                    }
                    for (const eachBool of aminoToOneHot[eachAminoChar]) {
                        featureVector.push(eachBool)
                    }
                }
            }

            // 
            // positionInvariantPhysicochemicalCategories
            // 
            if (parameters.featureToInclude.positionInvariantPhysicochemicalCategories) {
                for (const [key, qualities] of Object.entries(physicochemicalCategories)) {
                    let featureMagnitude = 0
                    let beforeFeatureMagnitude = 0
                    let afterFeatureMagnitude = 0
                    for (const eachAcid of acidsBefore) {
                        featureMagnitude += 1
                        beforeFeatureMagnitude += 1
                    }
                    for (const eachAcid of acidsAfter) {
                        featureMagnitude += 1
                        afterFeatureMagnitude += 1
                    }
                    featureVector.push(featureMagnitude)
                    featureVector.push(beforeFeatureMagnitude)
                    featureVector.push(afterFeatureMagnitude)
                }
            }

            yield new Uint8Array(featureVector)
        }
    }
    
    // 
    // save examples
    // 
    await Promise.all([
        FileSystem.write({ path: "positive_examples.json", data: generateLinesFor(   encodeExamples(positiveExamples)   ), }),
        FileSystem.write({ path: "negative_examples.json", data: generateLinesFor(   encodeExamples(negativeExamples)   ), }),
    ])
    

    // record most recent parameters 
    await FileSystem.write({
        data: JSON.stringify(
            parameters,
            (key,value)=>value instanceof RegExp ? value.toString() : value,
            4,
        ),
        path: "prev_parameters.json",
    })
    

// 
// create the feature vector and save it
// 
    if (!parameters.useHuffmanEncoding) {
        await FileSystem.write({ path: "positive_examples.json", data: generateLinesFor(    positiveExamples.map(  ({aminoAcids})=>aminoAcidToFeatureVector({ aminoAcidString: aminoAcids })  )    ), })
        await FileSystem.write({ path: "negative_examples.json", data: generateLinesFor(    negativeExamples.map(  ({aminoAcids})=>aminoAcidToFeatureVector({ aminoAcidString: aminoAcids })  )    ), })
    }