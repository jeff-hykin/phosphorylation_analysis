import { RandomForestClassifier } from "https://esm.sh/random-forest-classifier@0.6.0"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.2.2.0/csv.js"
import { intersection } from "https://deno.land/x/good@1.2.2.0/set.js"
import { flatten, asyncIteratorToList, enumerate } from "https://deno.land/x/good@1.2.2.0/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.2.2.0/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.31/main/file_system.js"
import { parseFasta } from "../generic_tools/fasta_parser.js"
import { createOneHot } from "../generic_tools/misc.js"


// 
// setup the one-hot encoding
// 
    const amnioEncoding = {
        "A": "Alanine",
        "B": "Aspartic acid (D) or Asparagine (N)",
        "C": "Cysteine",
        "D": "Aspartic acid",
        "E": "Glutamic acid",
        "F": "Phenylalanine",
        "G": "Glycine",
        "H": "Histidine",
        "I": "Isoleucine",
        "J": "Leucine (L) or Isoleucine (I)",
        "K": "Lysine",
        "L": "Leucine",
        "M": "Methionine/Start codon",
        "N": "Asparagine",
        "O": "Pyrrolysine (rare)",
        "P": "Proline",
        "Q": "Glutamine",
        "R": "Arginine",
        "S": "Serine",
        "T": "Threonine",
        "U": "Selenocysteine (rare)",
        "V": "Valine",
        "W": "Tryptophan",
        "Y": "Tyrosine",
        "Z": "Glutamic acid (E) or Glutamine (Q)",
        "X": "any",
        // "*": "translation stop",
        // "-": "gap of indeterminate length ",
    }
    
    const aminoToOneHot = createOneHot(amnioEncoding)

export function aminoAcidToFeatureVector({aminoAcidString}) {
    const evenNumberOfChars = aminoAcidString.length % 2 == 0
    if (evenNumberOfChars) {
        throw Error(`This aminoAcid string doesnt have an odd of characters (e.g. no center): ${aminoAcidString}`)
    }
    const oneHot = []
    const centerIndex = (aminoAcidString.length-1)/2
    for (const [index, eachAminoChar] of enumerate(aminoAcidString)) {
        // skip the one we are trying to predict
        if (index == centerIndex) {
            continue
        }
        for (const eachBool of aminoToOneHot[eachAminoChar]) {
            oneHot.push(eachBool)
        }
    }
    return new Uint8Array(oneHot)
}
