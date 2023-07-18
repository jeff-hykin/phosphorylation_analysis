import { RandomForestClassifier } from "https://esm.sh/random-forest-classifier@0.6.0"
import { parseCsv, createCsv } from "https://deno.land/x/good@1.3.0.1/csv.js"
import { intersection } from "https://deno.land/x/good@1.3.0.1/set.js"
import { flatten, asyncIteratorToList, enumerate } from "https://deno.land/x/good@1.3.0.1/iterable.js"
import { indent, findAll, extractFirst, stringToUtf8Bytes,  } from "https://deno.land/x/good@1.3.0.1/string.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.32/main/file_system.js"
import { parseFasta } from "../generic_tools/fasta_parser.js"
import { createOneHot } from "../generic_tools/misc.js"

const shouldUseSiplifier = false
const shouldIncludePhysicochemicalCategories = true

// 
// setup the one-hot encoding
// 
    export const amnioEncoding = {
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
    export const aminoAcidSimplifier = {
        "I": "J",
        "L": "J",
        
        "Q": "Z",
        "E": "Z",
        
        "D": "B",
        "N": "B",
    }
    export const aminoToOneHot = createOneHot(amnioEncoding)

// 
// additional features
// 
    export const physicochemicalCategories = {
        polar: [..."NQSDECTKRHYW"],
        positive: [..."KHR"],
        negative: [..."DE"],
        charged: [..."KHRDE"],
        hydrophobic: [..."AGCTIVLKHFYWM"],
        aliphatic: [..."IVL"],
        aromatic: [..."FYWH"],
        small: [..."PNDTCAGSV"],
        tiny: [..."ASGC"],
    }
    // what is the charge amount (negatives and postives)