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
    // naieve bayes approach
    // encoding position as a float 

    // features
        // allow amino acid substitues/groups
        // take a look at these features: https://ieeexplore.ieee.org/document/7837721
    // answer some questions:
        // what is the most common root split in the trees
        // how many have no phos sites
        // whats the ratio
        // intersection between human genome set and the phos human genome set
        // if trained on phos-human how well does it transfer to phos-plant names end with "_ARATH" 
        // check the number of exact sequence matches between positive and negative data
    
    // ask: 
        //if it doesn't work on plants isnt that interesting 

    // other:
        // "KD modal logic"

// import { RandomForest } from "./generic_tools/random_forest.js"
import { RandomForestClassifier } from "./generic_tools/random_forest.js"
import { crossValidation } from "./generic_tools/cross_validation.js"
import { generateLinesFor } from "./generic_tools/misc.js"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.3.0.1/csv.js"
import { intersection } from "https://deno.land/x/good@1.3.0.1/set.js"
import { flatten, asyncIteratorToList, enumerate, zip } from "https://deno.land/x/good@1.3.0.1/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.3.0.1/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.32/main/file_system.js"
import { parseFasta } from "./generic_tools/fasta_parser.js"
import { loadMixedExamples } from "./specific_tools/load_mixed_examples.js"
import { loadPositiveExamples } from "./specific_tools/load_positive_examples.js"
const _ = (await import('https://cdn.skypack.dev/lodash@4.17.21'))

// 
// 
// training
// 
// 
    console.log(`loading data from file`)
    let [positiveInputs, negativeInputs] = await Promise.all([
        FileSystem.read("positive_examples.json").then(JSON.parse),
        FileSystem.read("negative_examples.json").then(JSON.parse),
    ])
    console.log(`file data loaded`)
    // const examples = _.shuffle(positiveExamples.concat(negativeExamples))
    const inputs = positiveInputs.concat(negativeInputs)
    const labels = new Int8Array(  positiveInputs.map(each=>1).concat( negativeInputs.map(each=>0) )  )
    const folds = crossValidation({
        inputs,
        outputs: labels,
        numberOfFolds: 3,
    })
    
    for (const {train, test} of folds) {
        const classifier = new RandomForestClassifier({ numberOfTrees: 150, maxDepth: 50 }).fit({
            inputs: [...train.inputs],
            outputs: new Int8Array(train.outputs),
        })
        
        let numberTotal = test.outputs.length
        let numberCorrect = 0
        let negativesCount = 0
        let positivesCount = 0
        let negativesCorrectCount = 0
        let positivesCorrectCount = 0
        for (const [correctAnswer, givenAnswer] of zip(test.outputs, classifier.predictMajorityForMany(test.inputs))) {
            if (correctAnswer == givenAnswer) {
                numberCorrect += 1
                if (correctAnswer == 0) {
                    negativesCorrectCount += 1
                } else {
                    positivesCorrectCount += 1
                }
            }
            if (correctAnswer == 0) {
                negativesCount += 1
            } else {
                positivesCount += 1
            }
        }
        console.debug(`accuracy is              : ${numberCorrect}/${numberTotal}`)
        console.debug(`accuracy for negatives is: ${negativesCorrectCount}/${negativesCount}`)
        console.debug(`accuracy for positives is: ${positivesCorrectCount}/${positivesCount}`)
    }