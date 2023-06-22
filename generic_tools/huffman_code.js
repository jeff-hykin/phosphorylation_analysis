import { frequencyCount } from "./misc.js"
import { recursivelyAllKeysOf, get, set, remove, merge, compareProperty, compare } from "https://deno.land/x/good@1.3.0.1/object.js"

// TODO: Hykin encoding
// worst = size of alphabet * number of chars
// eval:
    // for every token, try basically a binary huffman_code
        // 0 => token
        // 1+alphabet => other thing
    // find the token that is most helpful in reducing the total amount of code
    // instantiate that token
    // rebuild the frequencyCount with those tokens remove
    // restart the evaluation
    // repeat until compression does not improve

// TODO:
    // when putting items the tree
    // for all the items (including the one being compared against)
        // get their substrings, check if the current substring is within any of them
        // if it is, subtract the frequency of the bigger substring from the current substring, then re-compare
/**
 * Represents a node in the Huffman tree.
 * @class
 * @param {string|null} value - The character value associated with the node.
 * @param {number} frequency - The frequency of the character.
 */
export class HuffmanNode {
    constructor(value, frequency) {
        this.value = value
        this.frequency = frequency
        this.left = null
        this.right = null
    }
}

export class HuffmanCoder {
    /**
     * coder
     *
     * @example
     *     const data = "Hello, world!"
     *     const coder = new HuffmanCoder()
     *     coder.addData(data)
     *     
     *     console.log("Original data:", data)
     *     console.log("Encoded data:", coder.encode(data)) // Encoded data: 101010110101100110011011110100111101000001
     *     console.log("Decoded data:", coder.decode(encodedData))
     *
     * @param arg1 - description
     * @param arg1.parameter - description
     * @returns {Object} output - description
     * @returns output.x - description
     *
     */
    constructor(values) {
        this.frequencyTable = {}
        this.isFrozen = false
        // for importing data
        Object.assign(this, values)
    }
    
    addData(string) {
        if (this.isFrozen) {
            throw Error(`Sorry, this coder has been frozen. Data can only be added BEFORE freezeing`)
        }
        const stringLength = string.length
        // add all chars but also all substrings
        let startIndex = -1
        while (startIndex < stringLength-1) {
            startIndex++
            let substring = ""
            for (const character of string.slice(startIndex)) {
                substring += character
                this.frequencyTable[substring] = (this.frequencyTable[substring] || 0) + 1
            }
        }
        return this
    }

    toJSON() {
        if (!this.isFrozen) {
            this.tree = this._buildHuffmanTree()
            this.codeMap = this._buildCodeMap(this.tree)
            const { encodingToNumber, substringToNumber, numberToSubstring } = this._buildEnumerationMapping(this.codeMap)
            this.encodingToNumber = encodingToNumber
            this.numberToSubstring = numberToSubstring
            this.substringToNumber = substringToNumber
        }
        return {
            ...this
        }
    }

    static fromJSON(object) {
        const coder = new HuffmanCoder()
        Object.assign(coder, object)
        return coder
    }

    freeze() {
        this.isFrozen = true
        this.tree = this._buildHuffmanTree()
        this.codeMap = this._buildCodeMap(this.tree)
        const { encodingToNumber, numberToSubstring } = this._buildEnumerationMapping(this.codeMap)
        this.encodingToNumber = encodingToNumber
        this.numberToSubstring = numberToSubstring
        return this
    }

    /**
     * Encodes the input data using the provided code map.
     * @param {string} data - The input data.
     * @returns {[string]} a list of codes
     */
    encode(data) {
        if (!this.isFrozen) {
            this.freeze()
        }
        const codes = []
        let remainingData = data
        while (remainingData.length > 0) {
            for (const [substring, number] of Object.entries(this.substringToNumber)) {
                if (remainingData.startsWith(substring)) {
                    remainingData = remainingData.slice(substring.length,)
                    codes.push(number)
                    // need to go to outer loop to make sure biggest-substrings are attempted first
                    break
                }
            }
        }
        return codes
    }

    /**
     * Decodes the encoded data using the provided Huffman tree.
     * @param {string|[string]} encodedData - The encoded data.
     * @returns {string} The decoded data.
     */
    decode(encodedData) {
        if (!this.isFrozen) {
            this.freeze()
        }
        let decodedData = ""
        let currentNode = this.tree
        if (encodedData instanceof Array) {
            if (encodedData.length > 0) {
                if (typeof encodedData[0] == 'number') {
                    return encodedData.map(each=>this.numberToSubstring[each]).join("")
                }
            }
            // else
            encodedData = encodedData.join("")
        }
        for (const each of encodedData) {
            if (each === "0") {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }

            if (currentNode.value) {
                decodedData += currentNode.value
                currentNode = this.tree
            }
        }

        return decodedData
    }

    /**
     * Builds the Huffman tree based on the frequency table.
     * @returns {HuffmanNode} The root node of the Huffman tree.
     */
    _buildHuffmanTree() {
        const priorityQueue = []

        for (const [substring, frequency] of Object.entries(this.frequencyTable)) {
            const effectiveFrequency = frequency *substring.length // maybe this would be more correct: frequency * Math.log2(substring.length+1)
            const node = new HuffmanNode(substring, effectiveFrequency)
            priorityQueue.push(node)
        }

        while (priorityQueue.length > 1) {
            priorityQueue.sort((a, b) => a.frequency - b.frequency)
            const leftChild = priorityQueue.shift()
            const rightChild = priorityQueue.shift()
            const parent = new HuffmanNode(null, leftChild.frequency + rightChild.frequency)
            parent.left = leftChild
            parent.right = rightChild
            priorityQueue.push(parent)
        }

        return priorityQueue[0]
    }
    
    /**
     * Builds a map of characters to their corresponding Huffman codes.
     * @param {HuffmanNode} tree - The Huffman tree.
     * @returns {Object} The code map.
     */
    _buildCodeMap(tree) {
        const codeMap = {}

        /**
         * Traverses the Huffman tree and assigns codes to each character.
         * @param {HuffmanNode} node - The current node being traversed.
         * @param {string} code - The code generated so far.
         */
        function traverse(node, code) {
            if (node.value) {
                codeMap[node.value] = code
            } else {
                traverse(node.left, code + "0")
                traverse(node.right, code + "1")
            }
        }

        traverse(tree, "")

        return codeMap
    }

    _buildEnumerationMapping(codeMap) {
        const encodings = Object.entries(codeMap)
        encodings.sort(
            compare({
                elementToNumber: ([eachChar, eachEncoding])=>eachEncoding.length,
                largestFirst:false 
            }),
        )
        let index = -1
        const substringToNumberUnsorted = {}
        const encodingToNumber = {}
        const numberToSubstring = {}
        for (const [eachSubstring, eachEncoding] of encodings) {
            ++index
            substringToNumberUnsorted[eachSubstring] = index
            encodingToNumber[eachEncoding] = index
            numberToSubstring[index] = eachSubstring
        }
        
        const substrings = Object.keys(substringToNumberUnsorted)
        substrings.sort(
            compare({
                elementToNumber: (each)=>each.length,
                largestFirst: true,
            }),
        )
        // need to sort the substring attributes in order of length
        const substringToNumber = {}
        for (const substring of substrings) {
            substringToNumber[substring] = substringToNumberUnsorted[substring]
        }

        return { encodingToNumber, substringToNumber, numberToSubstring }
    }
}