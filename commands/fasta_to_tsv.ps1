#!/usr/bin/env sh
"\"",`$(echo --% ' |out-null)" >$null;function :{};function dv{<#${/*'>/dev/null )` 2>/dev/null;dv() { #>
echo "1.36.1"; : --% ' |out-null <#'; }; version="$(dv)"; deno="$HOME/.deno/$version/bin/deno"; if [ -x "$deno" ]; then  exec "$deno" run -q -A "$0" "$@";  elif [ -f "$deno" ]; then  chmod +x "$deno" && exec "$deno" run -q -A "$0" "$@";  fi; bin_dir="$HOME/.deno/$version/bin"; exe="$bin_dir/deno"; has () { command -v "$1" >/dev/null; } ;  if ! has unzip; then if ! has apt-get; then  has brew && brew install unzip; else  if [ "$(whoami)" = "root" ]; then  apt-get install unzip -y; elif has sudo; then  echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;  if [ "$ANSWER" =~ ^[Yy] ]; then  sudo apt-get install unzip -y; fi; elif has doas; then  echo "Can I install unzip for you? (its required for this command to work) ";read ANSWER;echo;  if [ "$ANSWER" =~ ^[Yy] ]; then  doas apt-get install unzip -y; fi; fi;  fi;  fi;  if ! has unzip; then  echo ""; echo "So I couldn't find an 'unzip' command"; echo "And I tried to auto install it, but it seems that failed"; echo "(This script needs unzip and either curl or wget)"; echo "Please install the unzip command manually then re-run this script"; exit 1;  fi;  repo="denoland/deno"; if [ "$OS" = "Windows_NT" ]; then target="x86_64-pc-windows-msvc"; else :;  case $(uname -sm) in "Darwin x86_64") target="x86_64-apple-darwin" ;; "Darwin arm64") target="aarch64-apple-darwin" ;; "Linux aarch64") repo="LukeChannings/deno-arm64" target="linux-arm64" ;; "Linux armhf") echo "deno sadly doesn't support 32-bit ARM. Please check your hardware and possibly install a 64-bit operating system." exit 1 ;; *) target="x86_64-unknown-linux-gnu" ;; esac; fi; deno_uri="https://github.com/$repo/releases/download/v$version/deno-$target.zip"; exe="$bin_dir/deno"; if [ ! -d "$bin_dir" ]; then mkdir -p "$bin_dir"; fi;  if ! curl --fail --location --progress-bar --output "$exe.zip" "$deno_uri"; then if ! wget --output-document="$exe.zip" "$deno_uri"; then echo "Howdy! I looked for the 'curl' and for 'wget' commands but I didn't see either of them. Please install one of them, otherwise I have no way to install the missing deno version needed to run this code"; exit 1; fi; fi; unzip -d "$bin_dir" -o "$exe.zip"; chmod +x "$exe"; rm "$exe.zip"; exec "$deno" run -q -A "$0" "$@"; #>}; $DenoInstall = "${HOME}/.deno/$(dv)"; $BinDir = "$DenoInstall/bin"; $DenoExe = "$BinDir/deno.exe"; if (-not(Test-Path -Path "$DenoExe" -PathType Leaf)) { $DenoZip = "$BinDir/deno.zip"; $DenoUri = "https://github.com/denoland/deno/releases/download/v$(dv)/deno-x86_64-pc-windows-msvc.zip";  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12;  if (!(Test-Path $BinDir)) { New-Item $BinDir -ItemType Directory | Out-Null; };  Function Test-CommandExists { Param ($command); $oldPreference = $ErrorActionPreference; $ErrorActionPreference = "stop"; try {if(Get-Command "$command"){RETURN $true}} Catch {Write-Host "$command does not exist"; RETURN $false}; Finally {$ErrorActionPreference=$oldPreference}; };  if (Test-CommandExists curl) { curl -Lo $DenoZip $DenoUri; } else { curl.exe -Lo $DenoZip $DenoUri; };  if (Test-CommandExists curl) { tar xf $DenoZip -C $BinDir; } else { tar -Lo $DenoZip $DenoUri; };  Remove-Item $DenoZip;  $User = [EnvironmentVariableTarget]::User; $Path = [Environment]::GetEnvironmentVariable('Path', $User); if (!(";$Path;".ToLower() -like "*;$BinDir;*".ToLower())) { [Environment]::SetEnvironmentVariable('Path', "$Path;$BinDir", $User); $Env:Path += ";$BinDir"; } }; & "$DenoExe" run -q -A "$PSCommandPath" @args; Exit $LastExitCode; <# 
# */0}`;
import { asyncIteratorToList } from "https://deno.land/x/good@1.4.4.2/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.4.4.2/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.47/main/file_system.js"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.4.4.2/csv.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.4.4.2/string.js"


// https://en.wikipedia.org/wiki/FASTA_format
function parseFasta(incomingString) {
    const accession         = `(?<accession>[^\\| ]+)` // equiv to abbreviatedGeneSpecies
    const name              = `(?<name>[^\\| ]+)`
    const integer           = `(?<integer>-?\\d+)`
    const sequenceNumber    = `(?<sequenceNumber>[^\\| ]+)`
    const applicationNumber = `(?<applicationNumber>[^\\| ]+)`
    const database          = `(?<database>[^\\| ]+)`
    const country           = `(?<country>[^\\| ]+)`
    const locus             = `(?<locus>[^\\| ]+)`
    const entry             = `(?<entry>[^\\| ]+)`
    const chain             = `(?<chain>[^\\| ]+)`
    const patent            = `(?<patent>[^\\| ]+)`
    const string            = `(?<string>[^\\| ]+)`
    const ncbiIdentifierDefinitions = {
        [`tr\\|${accession}\\|${name}`]:                                       { name: "TrEMBL                                                                        " , example: [ "tr|Q90RT2|Q90RT2_9HIV1" ],          },
        [`tpg\\|${accession}\\|${name}`]:                                      { name: "third-party GenBank https://www.ncbi.nlm.nih.gov/Genbank/index.html           " , example: [ "tpg|BK003456|" ],                   },
        [`tpe\\|${accession}\\|${name}`]:                                      { name: "third-party EMBL http://www.embl-heidelberg.de                                " , example: [ "tpe|BN000123|" ],                   },
        [`tpd\\|${accession}\\|${name}`]:                                      { name: "third-party DDBJ http://www.ddbj.nig.ac.jp                                    " , example: [ "tpd|FAA00017|" ],                   },
        [`sp\\|${accession}\\|${name}`]:                                       { name: "SWISS-PROT http://www.ebi.ac.uk/swissprot                                     " , example: [ "sp|P01013|OVAX_CHICK" ],            },
        [`ref\\|${accession}\\|${name}`]:                                      { name: "RefSeq https://www.ncbi.nlm.nih.gov/projects/RefSeq                           " , example: [ "ref|NM_010450.1|" ],                },
        [`prf\\|${accession}\\|${name}`]:                                      { name: "PRF http://www.prf.or.jp                                                      " , example: [ "prf||0806162C" ],                   },
        [`pir\\|${accession}\\|${name}`]:                                      { name: "PIR https://web.archive.org/web/20140312021627/http://pir.georgetown.edu/     " , example: [ "pir||G36364" ],                     },
        [`pgp\\|${country}\\|${applicationNumber}\\|${sequenceNumber}`]:       { name: "pre-grant patent                                                              " , example: [ "pgp|EP|0238993|7" ],                },
        [`pdb\\|${entry}\\|${chain}`]:                                         { name: "PDB https://web.archive.org/web/20080828002005/http://www.rcsb.org./pdb       " , example: [ "pdb|1I4L|D" ],                      },
        [`pat\\|${country}\\|${patent}\\|${sequenceNumber}`]:                  { name: "patent                                                                        " , example: [ "pat|US|RE33188|1" ],                },
        [`lcl\\|(${integer}|${string})`]:                                      { name: "local (i.e. no database reference)                                            " , example: [ "lcl|123", "lcl|hmm271" ],           },
        [`gnl\\|${database}\\|(${integer}|${string})`]:                        { name: "general database reference(a reference to a database that's not in this list) " , example: [ "gnl|taxon|9606", "gnl|PID|e1632" ], },
        [`gim\\|${integer}`]:                                                  { name: "GenInfo import ID                                                             " , example: [ "gim|123" ],                         },
        [`gi\\|${integer}`]:                                                   { name: "GenInfo integrated database                                                   " , example: [ "gi|21434723" ],                     },
        [`gb\\|${accession}\\|${locus}`]:                                      { name: "GenBank https://www.ncbi.nlm.nih.gov/Genbank/index.html                       " , example: [ "gb|M73307|AGMA13GT" ],              },
        [`emb\\|${accession}\\|${locus}`]:                                     { name: "EMBL http://www.embl-heidelberg.de                                            " , example: [ "emb|CAM43271.1|" ],                 },
        [`dbj\\|${accession}\\|${locus}`]:                                     { name: "DDBJ http://www.ddbj.nig.ac.jp                                                " , example: [ "dbj|BAC85684.1|" ],                 },
        [`bbs\\|${integer}`]:                                                  { name: "GenInfo backbone seqid                                                        " , example: [ "bbs|123" ],                         },
        [`bbm\\|${integer}`]:                                                  { name: "GenInfo backbone moltype                                                      " , example: [ "bbm|123" ],                         },
    }
    const oneOfNcbiIdentifiers = `(${Object.keys(ncbiIdentifierDefinitions).join("|")})`.replace(/\(\?\<\w+>/g,"(")
    const prefixPattern = new RegExp(`^${oneOfNcbiIdentifiers}+`)
    // var prefixPattern = /^(tr\|([^\| ]+)\|([^\| ]+)|tpg\|([^\| ]+)\|([^\| ]+)|tpe\|([^\| ]+)\|([^\| ]+)|tpd\|([^\| ]+)\|([^\| ]+)|sp\|([^\| ]+)\|([^\| ]+)|ref\|([^\| ]+)\|([^\| ]+)|prf\|([^\| ]+)\|([^\| ]+)|pir\|([^\| ]+)\|([^\| ]+)|pgp\|([^\| ]+)\|([^\| ]+)\|([^\| ]+)|pdb\|([^\| ]+)\|([^\| ]+)|pat\|([^\| ]+)\|([^\| ]+)\|([^\| ]+)|lcl\|((-?\d+)|([^\| ]+))|gnl\|([^\| ]+)\|((-?\d+)|([^\| ]+))|gim\|(-?\d+)|gi\|(-?\d+)|gb\|([^\| ]+)\|([^\| ]+)|emb\|([^\| ]+)\|([^\| ]+)|dbj\|([^\| ]+)\|([^\| ]+)|bbs\|(-?\d+)|bbm\|(-?\d+))+/

    const recordStrings = incomingString.split(/(^|\r?\n)>/g)
    const records = []
    let index = 0
    for (const each of recordStrings) {
        const isBlankLine = !each.trim()
        if (isBlankLine) {
            continue
        }
        const record = {
            index: index++,
            hasIdentifiers: false,
            comment: "",
            rawComment: "",
            aminoAcidsString: "",
            ncbiIdentifiers: [],
        }
        var [ rawComment, ...aminoAcidsStrings ] = each.split(/\n/g) // intentionally no global flag on the regex
        record.comment = rawComment
        record.rawComment = rawComment
        record.aminoAcidsString = aminoAcidsStrings.join("")
        
        const ncbiIdentifiersMatch = rawComment.match(prefixPattern)
        if (ncbiIdentifiersMatch) {
            record.comment = rawComment.slice(ncbiIdentifiersMatch[0].length).trim()
            record.hasIdentifiers = true
            var remaining = ncbiIdentifiersMatch[0]
            var extraction = true
            while (extraction && (remaining.length > 0)) {
                var { remaining, extraction } = extractFirst({pattern: new RegExp(oneOfNcbiIdentifiers), from: remaining })
                // figure out which ncbi identifier it was
                for (const [key, value] of Object.entries(ncbiIdentifierDefinitions)) {
                    const pattern = new RegExp(key)
                    const match = extraction.match(pattern)
                    if (match) {
                        record.ncbiIdentifiers.push({
                            args: match.groups,
                            info: value, // link to ncbi information
                        })
                        break
                    }
                }

            }
        }
        records.push(record)
    }
    return records
}

function fastAToCsv({string, ...options}) {
    let rows = []
    for (let { hasIdentifiers, comment, aminoAcidsString, ncbiIdentifiers } of parseFasta(string)) {
        rows.push([hasIdentifiers, ncbiIdentifiers, aminoAcidsString, comment ])
    }
    return createCsv({
        columnNames: [ "hasIdentifiers", "ncbiIdentifiers", "aminoAcidsString", "comment"  ],
        rows: rows,
        separator: ",",
        alignColumns: false,
        ...options,
    }) 
}

await FileSystem.write({
    path: Deno.args[0]+".tsv",
    data: fastAToCsv({
        string: await FileSystem.read(Deno.args[0]),
        separator: '\t',
    })
})
// (this comment is part of deno-guillotine, dont remove) #>