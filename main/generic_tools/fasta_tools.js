import { hasIn } from "https://cdn.skypack.dev/lodash@4.17.21"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.4.4.2/csv.js"
import { asyncIteratorToList } from "https://deno.land/x/good@1.4.4.2/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.4.4.2/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.32/main/file_system.js"

// https://en.wikipedia.org/wiki/FASTA_format
export function parseFasta(incomingString) {
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

export function fastAToCsv({string, ...options}) {
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