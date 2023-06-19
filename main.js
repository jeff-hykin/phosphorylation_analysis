#!/usr/bin/env sh
"\"",`$(echo --% ' |out-null)" >$null;function :{};function dv{<#${/*'>/dev/null )` 2>/dev/null;dv() { #>
echo "1.31.3"; : --% ' |out-null <#';};v="$(dv)";d="$HOME/.deno/$v/bin/deno";if [ -x "$d" ];then exec "$d" run -q -A "$0" "$@";elif [ -f "$d" ];then chmod +x "$d" && exec "$d" run -q -A "$0" "$@";fi;bin_dir="$HOME/.deno/$v/bin";exe="$bin_dir/deno";has() { command -v "$1" >/dev/null; };if ! has unzip;then :;if ! has apt-get;then has brew && brew install unzip;else if [ "$(whoami)" = "root" ];then apt-get install unzip -y;elif has sudo;then echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;if [ "$ANSWER" =~ ^[Yy] ];then sudo apt-get install unzip -y;fi;elif has doas;then echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;if [ "$ANSWER" =~ ^[Yy] ];then doas apt-get install unzip -y;fi;fi;fi;fi;if ! has unzip;then echo "";echo "So I couldn't find an 'unzip' command";echo "And I tried to auto install it, but it seems that failed";echo "(This script needs unzip and either curl or wget)";echo "Please install the unzip command manually then re-run this script";exit 1;fi;if [ "$OS" = "Windows_NT" ];then target="x86_64-pc-windows-msvc";else :; case $(uname -sm) in "Darwin x86_64") target="x86_64-apple-darwin" ;; "Darwin arm64") target="aarch64-apple-darwin" ;; *) target="x86_64-unknown-linux-gnu" ;; esac;fi;deno_uri="https://github.com/denoland/deno/releases/download/v$v/deno-$target.zip";if [ ! -d "$bin_dir" ];then mkdir -p "$bin_dir";fi;if has curl;then curl --fail --location --progress-bar --output "$exe.zip" "$deno_uri";elif has wget;then wget --output-document="$exe.zip" "$deno_uri";else echo "Howdy! I looked for the 'curl' and for 'wget' commands but I didn't see either of them.";echo "Please install one of them";echo "Otherwise I have no way to install the missing deno version needed to run this code";fi;unzip -d "$bin_dir" -o "$exe.zip";chmod +x "$exe";rm "$exe.zip";exec "$d" run -q -A "$0" "$@"; #>}; $DenoInstall = "${HOME}/.deno/$(dv)"; $BinDir = "$DenoInstall/bin"; $DenoExe = "$BinDir/deno.exe"; if (-not(Test-Path -Path "$DenoExe" -PathType Leaf)) { $DenoZip = "$BinDir/deno.zip"; $DenoUri = "https://github.com/denoland/deno/releases/download/v$(dv)/deno-x86_64-pc-windows-msvc.zip"; [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; if (!(Test-Path $BinDir)) { New-Item $BinDir -ItemType Directory | Out-Null; } Function Test-CommandExists { Param ($command); $oldPreference = $ErrorActionPreference; $ErrorActionPreference = "stop"; try {if(Get-Command "$command"){RETURN $true}} Catch {Write-Host "$command does not exist"; RETURN $false} Finally {$ErrorActionPreference=$oldPreference}; } if (Test-CommandExists curl) { curl -Lo $DenoZip $DenoUri; } else { curl.exe -Lo $DenoZip $DenoUri; } if (Test-CommandExists curl) { tar xf $DenoZip -C $BinDir; } else { tar.exe   xf $DenoZip -C $BinDir; } Remove-Item $DenoZip; $User = [EnvironmentVariableTarget]::User; $Path = [Environment]::GetEnvironmentVariable('Path', $User); if (!(";$Path;".ToLower() -like "*;$BinDir;*".ToLower())) { [Environment]::SetEnvironmentVariable('Path', "$Path;$BinDir", $User); $Env:Path += ";$BinDir"; } }; & "$DenoExe" run -q -A "$PSCommandPath" @args; Exit $LastExitCode; <#
# */0}`;

    // split -l 200 --numeric-suffixes --additional-suffix=".txt" toSplit.txt splited

// todo:
    // test random forest code
    // encode positive/negative as bit array
    // remove any positive values from the negative examples dataset
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

// import { RandomForest } from "./generic_tools/random_forest.js"
import { forestjs } from "./generic_tools/random_forest.js"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.2.2.0/csv.js"
import { intersection } from "https://deno.land/x/good@1.2.2.0/set.js"
import { flatten, asyncIteratorToList } from "https://deno.land/x/good@1.2.2.0/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.2.2.0/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.28/main/file_system.js"
import { parseFasta } from "./generic_tools/fasta_parser.js"
import { loadNegativeExamples } from "./specific_tools/load_negative_examples.js"
import { loadPositiveExamples } from "./specific_tools/load_positive_examples.js"
const _ = (await import('https://cdn.skypack.dev/lodash'))

const windowPadding = 10 // + or - 10 amino acids
// 
// human genome
// 
    let { negativeExamples, summaryData, geneNames, geneData } = await loadNegativeExamples({
        filePath: `${FileSystem.thisFolder}/data/human_genome.small.fasta.txt`,
        windowPadding,
        skipEntryIf: ({geneName, aminoAcidsString, ...otherData})=>false, // false=keep
    })
    console.debug(`negativeExamples[0] is:`,negativeExamples[0])

// 
// phosphorylation data
// 
    let {
        positiveExamples,
        commonGeneNames,
    } = await loadPositiveExamples({
        filePath: "./data/phosphorylation@00.tsv",
        skipEntryIf: ({ geneName, aminoAcidsString, })=>!geneNames.has(geneName), 
        geneData,
    })
    console.debug(`positiveExamples[0] is:`,positiveExamples[0])

// 
// 
// training
// 
// 
    const featureKeys = [...Array(windowPadding*2+1)].map((_,index)=>`_${index}`)
    const data = _.shuffle(positiveExamples.slice(0,500).concat(negativeExamples.slice(0,500))).slice(0,1000)
    
    const inputs = data.map(each=>each.inputs)
    const labels =  data.map(each=>each.isPhosSite)
    const numberOfSamples = data.length
    var forest = new forestjs.RandomForest();
    // data is 2D array of size NxNumberOfSamples. Labels is 1D array of length NumberOfSamples
    forest.train(inputs, labels) 
    // testInstance is 1D array of length NumberOfSamples. Returns probability
    var labelProbability = forest.predictOne(positiveExamples.slice(0,5).map(each=>each.inputs));
    console.debug(`labelProbability for positiveExamples is:`,labelProbability)
    var labelProbability = forest.predictOne(negativeExamples.slice(0,5).map(each=>each.inputs));
    console.debug(`labelProbability for negativeExamples is:`,labelProbability)
    // testData is 2D array of size MxNumberOfSamples. Returns array of probabilities of length M
    // var labelProbabilities = forest.predict(testData);
    // console.debug(`labelProbabilities is:`,labelProbabilities)


    // console.debug(`data is:`,data)
    // const randomForest = await (
    //     new RandomForest({
    //         numberOfTrees: 10
    //     }).fit({
    //         data,
    //         // inputAttributes: featureKeys.slice(0,2),
    //         attributeToPredict: "isPhosSite",
    //     })
    // )
    // const labels = randomForest.predict(negativeExamples.slice(0,10))
    // console.debug(`labels is:`,labels)