#!/usr/bin/env sh
"\"",`$(echo --% ' |out-null)" >$null;function :{};function dv{<#${/*'>/dev/null )` 2>/dev/null;dv() { #>
echo "1.31.3"; : --% ' |out-null <#';};v="$(dv)";d="$HOME/.deno/$v/bin/deno";if [ -x "$d" ];then exec "$d" run --v8-flags=--max-old-space-size=8192 -q -A "$0" "$@";elif [ -f "$d" ];then chmod +x "$d" && exec "$d" run --v8-flags=--max-old-space-size=8192 -q -A "$0" "$@";fi;bin_dir="$HOME/.deno/$v/bin";exe="$bin_dir/deno";has() { command -v "$1" >/dev/null; };if ! has unzip;then :;if ! has apt-get;then has brew && brew install unzip;else if [ "$(whoami)" = "root" ];then apt-get install unzip -y;elif has sudo;then echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;if [ "$ANSWER" =~ ^[Yy] ];then sudo apt-get install unzip -y;fi;elif has doas;then echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;if [ "$ANSWER" =~ ^[Yy] ];then doas apt-get install unzip -y;fi;fi;fi;fi;if ! has unzip;then echo "";echo "So I couldn't find an 'unzip' command";echo "And I tried to auto install it, but it seems that failed";echo "(This script needs unzip and either curl or wget)";echo "Please install the unzip command manually then re-run this script";exit 1;fi;if [ "$OS" = "Windows_NT" ];then target="x86_64-pc-windows-msvc";else :; case $(uname -sm) in "Darwin x86_64") target="x86_64-apple-darwin" ;; "Darwin arm64") target="aarch64-apple-darwin" ;; *) target="x86_64-unknown-linux-gnu" ;; esac;fi;deno_uri="https://github.com/denoland/deno/releases/download/v$v/deno-$target.zip";if [ ! -d "$bin_dir" ];then mkdir -p "$bin_dir";fi;if has curl;then curl --fail --location --progress-bar --output "$exe.zip" "$deno_uri";elif has wget;then wget --output-document="$exe.zip" "$deno_uri";else echo "Howdy! I looked for the 'curl' and for 'wget' commands but I didn't see either of them.";echo "Please install one of them";echo "Otherwise I have no way to install the missing deno version needed to run this code";fi;unzip -d "$bin_dir" -o "$exe.zip";chmod +x "$exe";rm "$exe.zip";exec "$d" run --v8-flags=--max-old-space-size=8192 -q -A "$0" "$@"; #>}; $DenoInstall = "${HOME}/.deno/$(dv)"; $BinDir = "$DenoInstall/bin"; $DenoExe = "$BinDir/deno.exe"; if (-not(Test-Path -Path "$DenoExe" -PathType Leaf)) { $DenoZip = "$BinDir/deno.zip"; $DenoUri = "https://github.com/denoland/deno/releases/download/v$(dv)/deno-x86_64-pc-windows-msvc.zip"; [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; if (!(Test-Path $BinDir)) { New-Item $BinDir -ItemType Directory | Out-Null; } Function Test-CommandExists { Param ($command); $oldPreference = $ErrorActionPreference; $ErrorActionPreference = "stop"; try {if(Get-Command "$command"){RETURN $true}} Catch {Write-Host "$command does not exist"; RETURN $false} Finally {$ErrorActionPreference=$oldPreference}; } if (Test-CommandExists curl) { curl -Lo $DenoZip $DenoUri; } else { curl.exe -Lo $DenoZip $DenoUri; } if (Test-CommandExists curl) { tar xf $DenoZip -C $BinDir; } else { tar.exe   xf $DenoZip -C $BinDir; } Remove-Item $DenoZip; $User = [EnvironmentVariableTarget]::User; $Path = [Environment]::GetEnvironmentVariable('Path', $User); if (!(";$Path;".ToLower() -like "*;$BinDir;*".ToLower())) { [Environment]::SetEnvironmentVariable('Path', "$Path;$BinDir", $User); $Env:Path += ";$BinDir"; } }; & "$DenoExe" run --v8-flags=--max-old-space-size=8192 -q -A "$PSCommandPath" @args; Exit $LastExitCode; <#
# */0}`;

    // split -l 200 --numeric-suffixes --additional-suffix=".txt" toSplit.txt splited

// todo:
    // DONE: test random forest code
    // DONE: encode positive/negative as bit array
    // DONE: remove any positive values from the negative examples dataset
    // DONE: cross validate the output

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

// import { RandomForest } from "./generic_tools/random_forest.js"
import { RandomForestClassifier } from "./generic_tools/random_forest.js"
import { crossValidation } from "./generic_tools/cross_validation.js"
import { frequencyCount, generateLinesFor } from "./generic_tools/misc.js"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.3.0.1/csv.js"
import { intersection } from "https://deno.land/x/good@1.3.0.1/set.js"
import { flatten, asyncIteratorToList, enumerate, zip } from "https://deno.land/x/good@1.3.0.1/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.3.0.1/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.32/main/file_system.js"
import { parseFasta } from "./generic_tools/fasta_parser.js"
import { loadMixedExamples } from "./specific_tools/load_mixed_examples.js"
import { loadPositiveExamples } from "./specific_tools/load_positive_examples.js"
import { aminoAcidToFeatureVector } from "./specific_tools/amino_acid_to_feature_vector.js"
import { pathToHuffmanCoder } from "./config.js"
import { HuffmanCoder } from "./generic_tools/huffman_code.js"

const _ = (await import('https://cdn.skypack.dev/lodash@4.17.21'))

const windowPadding = 10 // + or - 10 amino acids
const aminoMatchPattern = /S/
// 
// human genome
// 
    let { mixedExamples, summaryData, geneNames, geneData } = await loadMixedExamples({
        filePath: `${FileSystem.thisFolder}/data/human_genome.fasta.txt`,
        aminoMatchPattern: aminoMatchPattern,
        windowPadding,
        skipEntryIf: ({geneName, aminoAcidsString, ...otherData})=>false, // false=keep
    })
    console.debug(`mixedExamples[0] is:`,mixedExamples[0])

// 
// phosphorylation data
// 
    let {
        positiveExamples,
        commonGeneNames,
    } = await loadPositiveExamples({
        filePath: /.\/data\/phosphorylation@0\d+.tsv/,
        skipEntryIf: ({ geneName, aminoAcidsString, })=>!geneNames.has(geneName)||!aminoAcidsString[windowPadding].match(aminoMatchPattern),
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
    // const commonSize = Math.min(positiveExamples.length, negativeExamples.length)
    const commonSize = 50_000
    positiveExamples = positiveExamples.slice(0,commonSize)
    negativeExamples = negativeExamples.slice(0,commonSize)

// 
// "train" HuffmanCoder and save it
// 
    const coder = new HuffmanCoder()
    console.debug(`building huffman coder`)
    let count = 0
    for (const {aminoAcids, ...otherData} of positiveExamples.concat(negativeExamples)) {
        count += 1
        if (count % 2000 == 0) {
            console.log(`        on ${count}/${commonSize*2}: ${count/(commonSize*2)*100}`)
        }
        // text before
        coder.addData(aminoAcids.slice(0,windowPadding))
        // text after
        coder.addData(aminoAcids.slice(windowPadding+1,))
    }
    coder.freeze()
    count = 0
    console.debug(`building frequency count`)
    console.debug(`coder.substringToNumber is:`,coder.substringToNumber)
    const encodedLengths = frequencyCount([...(function*(){
        for (const {aminoAcids} of positiveExamples.concat(negativeExamples)) {
            count += 1
            const [ before, after ] = [ aminoAcids.slice(0,windowPadding), aminoAcids.slice(windowPadding+1,) ]
            if ((count-1) % 2000 == 0) {
                console.log(`        on ${count}/${commonSize*2}: ${count/(commonSize*2)*100}`)
            }
            // text before
            yield coder.encode(before).length
            // text after
            yield coder.encode(after).length
        }
    })()])
    
    console.debug(`encodedLengths is:`, encodedLengths)
    const smallestEncodingLength = Math.min(...Object.keys(encodedLengths).map(each=>each-0))
    coder.smallestEncodingLength = smallestEncodingLength
    
    await FileSystem.write({ path: pathToHuffmanCoder, data: JSON.stringify(coder,0,2) })

// 
// create the feature vector and save it
// 
    await FileSystem.write({ path: "positive_examples.json", data: generateLinesFor(    positiveExamples.map(  ({aminoAcids})=>aminoAcidToFeatureVector({ aminoAcidString: aminoAcids })  )    ), })
    await FileSystem.write({ path: "negative_examples.json", data: generateLinesFor(    negativeExamples.map(  ({aminoAcids})=>aminoAcidToFeatureVector({ aminoAcidString: aminoAcids })  )    ), })