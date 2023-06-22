
/**
 * Represents a node in the Huffman tree.
 * @class
 * @param {string|null} value - The character value associated with the node.
 * @param {number} frequency - The frequency of the character.
 */
class HuffmanNode {
    constructor(value, frequency) {
        this.value = value
        this.frequency = frequency
        this.left = null
        this.right = null
    }
}

/**
 * Builds a frequency table for the given data.
 * @param {string} data - The input data.
 * @returns {Object} The frequency table.
 */
function buildFrequencyTable(data) {
    const frequencyTable = {}

    for (const character of data) {
        if (frequencyTable[character]) {
            frequencyTable[character]++
        } else {
            frequencyTable[character] = 1
        }
    }

    return frequencyTable
}

/**
 * Builds the Huffman tree based on the frequency table.
 * @param {Object} frequencyTable - The frequency table.
 * @returns {HuffmanNode} The root node of the Huffman tree.
 */
function buildHuffmanTree(frequencyTable) {
    const priorityQueue = []

    for (const [character, frequency] of Object.entries(frequencyTable)) {
        const node = new HuffmanNode(character, frequency)
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
function buildCodeMap(tree) {
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

/**
 * Encodes the input data using the provided code map.
 * @param {string} data - The input data.
 * @param {Object} codeMap - The code map.
 * @returns {[string]} a list of codes
 */
function encodeData(data, codeMap) {
    const codes = []
    for (const character of data) {
        codes.push(codeMap[character])
    }
    return codes
}

/**
 * Decodes the encoded data using the provided Huffman tree.
 * @param {string|[string]} encodedData - The encoded data.
 * @param {HuffmanNode} tree - The Huffman tree.
 * @returns {string} The decoded data.
 */
function decodeData(encodedData, tree) {
    let decodedData = ""
    let currentNode = tree
    if (encodedData instanceof Array) {
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
            currentNode = tree
        }
    }

    return decodedData
}

// Example usage
const data = "Hello, world!"
const frequencyTable = buildFrequencyTable(data)
const huffmanTree = buildHuffmanTree(frequencyTable)
const codeMap = buildCodeMap(huffmanTree)
const encodedData = encodeData(data, codeMap)
const decodedData = decodeData(encodedData, huffmanTree)

console.log("Original data:", data)
console.log("Encoded data:", encodedData) // Encoded data: 101010110101100110011011110100111101000001
console.log("Decoded data:", decodedData)
