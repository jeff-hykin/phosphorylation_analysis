#!/usr/bin/env sh
"\"",`$(echo --% ' |out-null)" >$null;function :{};function dv{<#${/*'>/dev/null )` 2>/dev/null;dv() { #>
echo "1.31.3"; : --% ' |out-null <#';};v="$(dv)";d="$HOME/.deno/$v/bin/deno";if [ -x "$d" ];then exec "$d" run -q -A "$0" "$@";elif [ -f "$d" ];then chmod +x "$d" && exec "$d" run -q -A "$0" "$@";fi;bin_dir="$HOME/.deno/$v/bin";exe="$bin_dir/deno";has() { command -v "$1" >/dev/null; };if ! has unzip;then :;if ! has apt-get;then has brew && brew install unzip;else if [ "$(whoami)" = "root" ];then apt-get install unzip -y;elif has sudo;then echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;if [ "$ANSWER" =~ ^[Yy] ];then sudo apt-get install unzip -y;fi;elif has doas;then echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;if [ "$ANSWER" =~ ^[Yy] ];then doas apt-get install unzip -y;fi;fi;fi;fi;if ! has unzip;then echo "";echo "So I couldn't find an 'unzip' command";echo "And I tried to auto install it, but it seems that failed";echo "(This script needs unzip and either curl or wget)";echo "Please install the unzip command manually then re-run this script";exit 1;fi;if [ "$OS" = "Windows_NT" ];then target="x86_64-pc-windows-msvc";else :; case $(uname -sm) in "Darwin x86_64") target="x86_64-apple-darwin" ;; "Darwin arm64") target="aarch64-apple-darwin" ;; *) target="x86_64-unknown-linux-gnu" ;; esac;fi;deno_uri="https://github.com/denoland/deno/releases/download/v$v/deno-$target.zip";if [ ! -d "$bin_dir" ];then mkdir -p "$bin_dir";fi;if has curl;then curl --fail --location --progress-bar --output "$exe.zip" "$deno_uri";elif has wget;then wget --output-document="$exe.zip" "$deno_uri";else echo "Howdy! I looked for the 'curl' and for 'wget' commands but I didn't see either of them.";echo "Please install one of them";echo "Otherwise I have no way to install the missing deno version needed to run this code";fi;unzip -d "$bin_dir" -o "$exe.zip";chmod +x "$exe";rm "$exe.zip";exec "$d" run -q -A "$0" "$@"; #>}; $DenoInstall = "${HOME}/.deno/$(dv)"; $BinDir = "$DenoInstall/bin"; $DenoExe = "$BinDir/deno.exe"; if (-not(Test-Path -Path "$DenoExe" -PathType Leaf)) { $DenoZip = "$BinDir/deno.zip"; $DenoUri = "https://github.com/denoland/deno/releases/download/v$(dv)/deno-x86_64-pc-windows-msvc.zip"; [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; if (!(Test-Path $BinDir)) { New-Item $BinDir -ItemType Directory | Out-Null; } Function Test-CommandExists { Param ($command); $oldPreference = $ErrorActionPreference; $ErrorActionPreference = "stop"; try {if(Get-Command "$command"){RETURN $true}} Catch {Write-Host "$command does not exist"; RETURN $false} Finally {$ErrorActionPreference=$oldPreference}; } if (Test-CommandExists curl) { curl -Lo $DenoZip $DenoUri; } else { curl.exe -Lo $DenoZip $DenoUri; } if (Test-CommandExists curl) { tar xf $DenoZip -C $BinDir; } else { tar.exe   xf $DenoZip -C $BinDir; } Remove-Item $DenoZip; $User = [EnvironmentVariableTarget]::User; $Path = [Environment]::GetEnvironmentVariable('Path', $User); if (!(";$Path;".ToLower() -like "*;$BinDir;*".ToLower())) { [Environment]::SetEnvironmentVariable('Path', "$Path;$BinDir", $User); $Env:Path += ";$BinDir"; } }; & "$DenoExe" run -q -A "$PSCommandPath" @args; Exit $LastExitCode; <#
# */0}`;

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

import { parseCsv, createCsv } from "https://deno.land/x/good@1.2.2.0/csv.js"
import { intersection } from "https://deno.land/x/good@1.2.2.0/set.js"
import { flatten, asyncIteratorToList } from "https://deno.land/x/good@1.2.2.0/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.2.2.0/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.28/main/file_system.js"
import { parseFasta } from "./generic_tools/fasta_parser.js"

// 
// human genome
// 
    var humanString = await FileSystem.read(`${FileSystem.thisFolder}/data/human_genome.small.fasta.txt`)

    // 
    // process fasta
    // 
        function getWindows(string, seqSize=10) {
            let output = []
            const windowSize = (seqSize*2)+1
            for (const each of findAll(/T|S|V/,string)) {
                const min = each.index-seqSize >= 0 ? each.index-seqSize : 0
                const slice = string.slice(min,each.index+seqSize+1)
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
        var restrictedHumanGeneNames = humanRecords.map(each=>each.ncbiIdentifiers[0].args.name)

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
        var mappedStuff = humanRecords.map(
                eachGene=>{
                    return eachGene.phosWindows.map(
                        ({index, slice})=>({
                            indexRelativeToGene: index,
                            amnioAcids: slice,
                            geneInfo: eachGene,
                        })
                    )
                }
            )
        var negativeExamples = [...flatten({
            iterable: humanRecords.map(
                eachGene=>
                    eachGene.phosWindows.map(
                        ({index, slice})=>({
                            indexRelativeToGene: index,
                            amnioAcids: slice,
                            geneInfo: eachGene,
                        })
                    )
            )
        })]

        console.debug(`negativeExamples[0] is:`,negativeExamples[0])

        // FileSystem.write({
        //     path: "human.json",
        //     data: JSON.stringify(humanRecords,0,4),
        // })
        


// 
// phosphorylation data
// 
    var geneData = {}
    var haveSeenPhosSite = new Set()
    var phos = (
        parseCsv({
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
        // remove bad lines with no data
        .filter(
            each=>each.aminoAcidsString
        )
        // add siteId
        .map(each=>{
            each.siteId = `${each.abbreviatedGeneSpecies}|${each.indexRelativeToGene}`
            return each
        })
        // remove matches near end/start
        .filter(
            each=>!each.aminoAcidsString.match(/-/)
        )
        // remove duplicate entries (same geneId and indexRelativeToGene), probably a variant (different sequence) but on the safe side, remove it
        .filter(
            each=>{
                if (!haveSeenPhosSite.has(each.siteId)) {
                    haveSeenPhosSite.add(each.siteId)
                    return true
                } else {
                    return false
                }
            }
        )
        .map(
            each=>{
                // add to gene data
                geneData[each.abbreviatedGeneSpecies] = (geneData[each.abbreviatedGeneSpecies] || [])
                geneData[each.abbreviatedGeneSpecies].push(each)
                each.pubmedIdForRelatedReferences = `${each.pubmedIdForRelatedReferences}`.split(";")
                return each
            }
        )
    )

    

    // 
    // process phos
    // 
        
        phos = await 	(phos)
        phos.humanGeneNames = []
        phos.humanKeyCount = 0
        for (let each of Object.keys(geneData)) {
            if (each.endsWith("_HUMAN")) {
                phos.humanKeyCount++
                phos.humanGeneNames.push(each)
            }
        }
        const commonHumanGeneNames = intersection(Object.keys(geneData), restrictedHumanGeneNames)

        phos.frequencyPerHumanGene = {}
        for (const eachHumanGeneName of commonHumanGeneNames) {
            phos.frequencyPerHumanGene[geneData[eachHumanGeneName].length] = phos.frequencyPerHumanGene[geneData[eachHumanGeneName].length] ? phos.frequencyPerHumanGene[geneData[eachHumanGeneName].length]+1 : 1
        }

        var positiveExamples = []
        for (const each of phos) {
            positiveExamples.push({
                indexRelativeToGene: each.indexRelativeToGene,
                aminoAcids: each.aminoAcidsString,
                phosData: each,
            })
        }
        console.debug(`positiveExamples[0] is:`,positiveExamples[0])



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

// (this comment is part of deno-guillotine, dont remove) #>