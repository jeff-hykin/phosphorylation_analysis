class Node {
    constructor(value, frequency) {
        this.value = value
        this.frequency = frequency
        this.left = null
        this.right = null
    }
}

function buildFrequencyTable(data) {
    const frequencyTable = {}

    for (let i = 0; i < data.length; i++) {
        const character = data[i]
        if (frequencyTable[character]) {
            frequencyTable[character]++
        } else {
            frequencyTable[character] = 1
        }
    }

    return frequencyTable
}

function buildHuffmanTree(frequencyTable) {
    const priorityQueue = []

    for (const [character, frequency] of Object.entries(frequencyTable)) {
        const node = new Node(character, frequency)
        priorityQueue.push(node)
    }

    while (priorityQueue.length > 1) {
        priorityQueue.sort((a, b) => a.frequency - b.frequency)
        const leftChild = priorityQueue.shift()
        const rightChild = priorityQueue.shift()
        const parent = new Node(null, leftChild.frequency + rightChild.frequency)
        parent.left = leftChild
        parent.right = rightChild
        priorityQueue.push(parent)
    }

    return priorityQueue[0]
}

function buildCodeMap(tree) {
    const codeMap = {}

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

function encodeData(data, codeMap) {
    let encodedData = ""

    for (let i = 0; i < data.length; i++) {
        const character = data[i]
        encodedData += codeMap[character]
    }

    return encodedData
}

function decodeData(encodedData, tree) {
    let decodedData = ""
    let currentNode = tree

    for (let i = 0; i < encodedData.length; i++) {
        if (encodedData[i] === "0") {
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
console.log("Encoded data:", encodedData)
console.log("Decoded data:", decodedData)
