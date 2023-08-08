import { createOneHot } from "../generic_tools/misc.js"

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
    const { objToOneHot: aminoToOneHot, oneHotToObject: oneHotToAmino } = createOneHot(amnioEncoding)
    export { aminoToOneHot, oneHotToAmino }

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
    export const aminoToPhysicochemical = (amino)=>{
        const output = {}
        for (const [key, value] of Object.entries(physicochemicalCategories)) {
            output[key] = value.includes(amino)
        }
        return output
    }
    const { objToOneHot: physicochemicalToOneHot, oneHotToObject: oneHotToPhysicochemical } = createOneHot(amnioEncoding)
    export { physicochemicalToOneHot, oneHotToPhysicochemical }
    // what is the charge amount (negatives and postives)