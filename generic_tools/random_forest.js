import { capitalize, indent, toCamelCase, digitsToEnglishArray, toPascalCase, toKebabCase, toSnakeCase, toScreamingtoKebabCase, toScreamingtoSnakeCase, toRepresentation, toString, regex, escapeRegexMatch, escapeRegexReplace, extractFirst, isValidIdentifier } from "https://deno.land/x/good@1.3.0.4/string.js"
import { enumerate, zip } from "https://deno.land/x/good@1.3.0.4/iterable.js"
import { frequencyCount } from "../generic_tools/misc.js"

const _ = (await import('https://cdn.skypack.dev/lodash@4.17.21'))
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Random Forest Classifier
export class RandomForestClassifier {
    /**
     * Create a Random Forest Classifier.
     *
     * @example
     *     const classifier = new RandomForestClassifier({numberOfTrees: 3, maxDepth: 2})
     *     // note: maxDepth: Infinity is valid
     *     const inputs = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]]
     *     const outputs = [0, 0, 1, 1, 1]
     *     classifier.fit({inputs, outputs})
     *     
     *     const sample1 = [1, 1]
     *     const prediction1 = classifier.predictMajorityForOne(sample1)
     *     // returns: 0
     *     const sample2 = [1, 1]
     *     const prediction2 = classifier.predictMajorityForMany([sample1, sample2])
     *     // returns: [0, 1]
     *
     * @param {number} arg1.numberOfTrees - The number of decision trees in the random forest.
     * @param {number} arg1.maxDepth - The maximum depth of each decision tree.
     * @returns {RandomForestClassifier} output
     *
     */
    constructor({numberOfTrees, maxDepth}) {
        this.numberOfTrees = numberOfTrees
        this.maxDepth = maxDepth
        this.trees = []
    }

    /**
     * Fit the Random Forest Classifier to the training data.
     * 
     * @example
     *      classifier.fit({ inputs: [  [1,1], [2,2],  ], outputs: [ 100, 500 ], })
     * @param {Array<Array<number>>} arg1.inputs - The feature matrix of shape (numberOfSamples, numberOfFeatures).
     * @param {Array<number>} arg1.outputs - The target array of shape (numberOfSamples).
     * @throws {Error} If inputs or outputs fails a sanity check
     */
    fit({inputs, outputs}) {
        const inputsIsAnArray = inputs instanceof Array
        const inputsIsNonEmpty = inputsIsAnArray && inputs.length > 0
        const inputsIsAnArrayOfArrays = inputsIsNonEmpty && inputs[0] != null && typeof outputs.length == 'number'
        const inputValuesAreNonEmpty = inputsIsAnArrayOfArrays && inputs[0].length > 0
        const inputValuesAreNumbers = inputValuesAreNonEmpty && typeof inputs[0][0] == 'number' && (inputs[0][0] === inputs[0][0])
        const outputsIsAnArray = outputs != null && typeof outputs.length == 'number'
        const outputsHaveSameLengthAsInputs = outputsIsAnArray && inputsIsNonEmpty && outputs.length == inputs.length
        const outputValuesAreNumbers = outputsHaveSameLengthAsInputs && typeof outputs[0] == 'number' && (outputs[0] === outputs[0])
        if (
                !inputsIsAnArray
             || !inputsIsNonEmpty
             || !inputsIsAnArrayOfArrays
             || !inputValuesAreNonEmpty
             || !inputValuesAreNumbers
             || !outputsIsAnArray
             || !outputsHaveSameLengthAsInputs
        ) {
            throw new Error(`\n\n
                When calling the .fit({ inputs:[ [], ], outputs:[], }) on a RandomForestClassifier
                there was a problem with some of the arguments. All of the following need to be true:
                    inputsIsAnArray: ${inputsIsAnArray}
                    inputsIsNonEmpty: ${inputsIsNonEmpty}
                    inputsIsAnArrayOfArrays: ${inputsIsAnArrayOfArrays}
                    inputValuesAreNonEmpty: ${inputValuesAreNonEmpty}
                    inputValuesAreNumbers: ${inputValuesAreNumbers}
                    outputsIsAnArray: ${outputsIsAnArray}
                    outputsHaveSameLengthAsInputs: ${outputsHaveSameLengthAsInputs}
                
                Here are the input and output arguments that caused the problem:
                    inputs: ${indent({string:toRepresentation(inputs), by:"                        ", noLead:true}).slice(0,500)} ...
                    outputs: ${indent({string:toRepresentation(outputs), by:"                        ", noLead:true}).slice(0,500)} ...
            `.replace(/\n                /g,"\n    "))
        }
        try {
            this._distributionTemplate = {}
            for (const eachOutput of new Set(outputs)) {
                this._distributionTemplate[eachOutput] = 0
            }
            for (let i = 0; i < this.numberOfTrees; i++) {
                console.log(`    training tree: ${i+1}/${this.numberOfTrees}`)
                const tree = new DecisionTree({maxDepth:this.maxDepth})
                const bootstrapSample = this._bootstrapSample(inputs, outputs)
                tree.fit(bootstrapSample.inputs, bootstrapSample.outputs)
                this.trees.push(tree)
            }
        } catch (error) {
            // 
            // additional sanity checks to analyze what went wrong
            // (computationally expensive, but doesn't matter because were in an error state)
            // 
            const lengthFrequencyMapping = {}
            for (const [index, each] of enumerate(inputs)) {
                if (each == null) {
                    throw Error(`\n\nWhen calling fit, the inputs contained a null entry at index ${index}. (Each entry should be an array with a length equal to numberOfFeatures)`)
                } else if (typeof each.length != 'number') {
                    throw Error(`\n\nWhen calling fit, the inputs contained an entry at index ${index} which didn't have a length. (Each entry should be an array or array-like with a length equal to numberOfFeatures)`)
                } else {
                    lengthFrequencyMapping[each.length] = (lengthFrequencyMapping[each.length] || []).concat([ index ])
                }
            }
            // additional sanity checks
            for (const [index, each] of enumerate(outputs)) {
                if (each == null) {
                    throw Error(`\n\nWhen calling fit, the inputs contained a null entry at index ${index}. (Each entry should be an array with a length equal to numberOfFeatures)`)
                }
            }
            const inputSizes = Object.keys(lengthFrequencyMapping).map(each=>each-0)
            // there should be one size (e.g. size == numberOfFeatures)
            if (inputSizes.length !== 1) {
                const quantites = Object.values(lengthFrequencyMapping).map(each=>each.length)
                const highestCount = Math.max(...quantites)
                const thereIsADominantSize = quantites.filter(each=>each.length == highestCount).length == 1
                if (thereIsADominantSize) {
                    let theMostCommonSize = null
                    for (let [index, each] of enumerate(quantites)) {
                        if (each == highestCount) {
                            theMostCommonSize = inputSizes[index]
                        } 
                    }
                    throw Error(`The sizes of input values was inconsistent. The most commmon size is: ${theMostCommonSize}\nThe other sizes were: ${[...new Set(quantites)]}, here's a mapping with sizes as the key and indicies as the values:\n${JSON.stringify(lengthFrequencyMapping)}`)
                } else {
                    throw Error(`The sizes of input values was inconsistent. There was no "most common" size\nThe sizes were: ${[...new Set(quantites)]}, here's a mapping with sizes as the key and indicies as the values:\n${JSON.stringify(lengthFrequencyMapping)}`)
                }
            }
            
            // passed the checks, so throw the normal error
            throw error
        }
        return this
    }

    predictDistributionForOne(input) {
        const treePredictions = []
        for (const eachTree of this.trees) {
            treePredictions.push(
                eachTree.predict(input)
            )
        }
        const voteCounts = frequencyCount(treePredictions)
        const distribution = Object.assign({}, this._distributionTemplate)
        for (const [key, value] of Object.entries(voteCounts)) {
            distribution[key] = value/treePredictions.length
        }
        return distribution
    }

    /**
     * predict the outcome 
     * 
     * @example
     *      classifier.fit({ inputs: [  [1,1], [2,2],  ], outputs: [ 100, 500 ], })
     *      classifier.predictDistributionForMany([  [1,1], [2,2],  ])
     *      // returns somthing like [
     *      //    { 100: 0.99, 500: 0.01 }, // distribution for [1,1]
     *      //    { 100: 0.01, 500: 0.99 }, // distribution for [2,2]
     *      // ]
     * @param {Array<Array<number>>} inputs - The feature matrix of shape (numberOfSamples, numberOfFeatures).
     */
    predictDistributionForMany(inputs) {
        const predictions = []
        for (const eachInput of inputs) {
            predictions.push(
                this.predictDistributionForOne(input)
            )
        }
        return predictions
    }

    predictMajorityForOne(input) {
        const treePredictions = []
        for (const eachTree of this.trees) {
            treePredictions.push(
                eachTree.predict(input)
            )
        }
        return this._majorityVote(
            frequencyCount(treePredictions)
        )
    }
    
    
    /**
     * Fit the Random Forest Classifier to the training data.
     * 
     * @example
     *      classifier.fit({ inputs: [  [1,1], [2,2],  ], outputs: [ 100, 500 ], })
     *      classifier.predictMajorityForMany([  [1,1], [2,2],  ])
     *      // returns [ 100, 500 ]
     * @param {Array<Array<number>>} inputs - The feature matrix of shape (numberOfSamples, numberOfFeatures).
     */
    predictMajorityForMany(inputs) {
        const predictions = []
        for (const eachInput of inputs) {
            predictions.push(
                this.predictMajorityForOne(eachInput)
            )
        }
        return predictions
    }

    get featureImportance() {
        let frequencyCountingPerFeature = {}
        for (const eachTree of this.trees) {
            const featureRanking = eachTree._featureRanking(eachTree.tree)
            for (const [rank, featureIndices] of Object.entries(featureRanking)) {
                for (let featureIndex of featureIndices) {
                    if (!frequencyCountingPerFeature[featureIndex]) {
                        frequencyCountingPerFeature[featureIndex] = 0
                    }
                    // first rank is 1, then importance tapers off
                    frequencyCountingPerFeature[featureIndex] += 1/(+rank)
                    if (Object.keys(frequencyCountingPerFeature).includes("undefined")) {
                        throw Error(`${featureIndex}: featureIndex`)
                    }
                }
            }
        }
        return frequencyCountingPerFeature
    }
    
    /**
     * randomize (but not a shuffle)
     *
     * @note
     *     return value has same length as the
     *     input length, however entries
     *     might be entirely missing and
     *     there may be duplicate entries
     *     (e.g. repeated random sample, not shuffle)
     *
     */
    _bootstrapSample(inputs, outputs) {
        const sampleX = []
        const sampleY = []
        const numberOfSamples = inputs.length
        for (let i = 0; i < numberOfSamples; i++) {
            const index = getRandomInt(0, numberOfSamples-1)
            sampleX.push(inputs[index])
            sampleY.push(outputs[index])
        }
        return { inputs: sampleX, outputs: sampleY }
    }

    _majorityVote(voteCounts) {
        let majorityVote = null
        let maxCount = -Infinity
        for (const prediction in voteCounts) {
            if (voteCounts[prediction] > maxCount) {
                maxCount = voteCounts[prediction]
                majorityVote = prediction
            }
        }
        return majorityVote
    }
}

// Decision Tree
export class DecisionTree {
    constructor({maxDepth}) {
        this.maxDepth = maxDepth
        this.tree = null
    }

    fit(inputs, outputs) {
        this.tree = this._buildTree(inputs, outputs, 0)
    }

    predict(sample) {
        return this._traverseTree(sample, this.tree)
    }

    _buildTree(inputs, outputs, depth) {
        const numberOfSamples = inputs.length
        const numberOfFeatures = inputs[0].length
        // Stopping conditions
        if (depth >= this.maxDepth || this._isPure(outputs)) {
            return this._createLeafNode(outputs)
        }

        let bestFeature
        let bestThreshold
        let bestGain = -Infinity

        // Randomly select features for splitting
        const featureIndices = [...Array(numberOfFeatures)].map((_,i)=>i)
        const randomFeatureIndices = _.shuffle(featureIndices).slice(0, Math.sqrt(numberOfFeatures))

        for (const featureIndex of randomFeatureIndices) {
            const featureValues = new Set()
            for (const sample of inputs) {
                featureValues.add(sample[featureIndex])
            }
            
            for (const value of featureValues) {
                const [leftX, rightX, leftY, rightY] = this._splitDataset(inputs, outputs, featureIndex, value)
                const infoGain = this._informationGain(outputs, leftY, rightY)

                if (infoGain > bestGain) {
                    bestFeature = featureIndex
                    bestThreshold = value
                    bestGain = infoGain
                }
            }
        }

        // Stopping condition if no significant information gain
        if (bestGain === 0) {
            return this._createLeafNode(outputs)
        }
        
        const [leftX, rightX, leftY, rightY] = this._splitDataset(inputs, outputs, bestFeature, bestThreshold)
        
        const notEnoughData = leftX.length == 0 || rightX.length == 0
        if (notEnoughData) {
            return this._createLeafNode(outputs)
        }
        
        const leftSubtree = this._buildTree(leftX, leftY, depth + 1)
        const rightSubtree = this._buildTree(rightX, rightY, depth + 1)
        
        return {
            featureIndex: bestFeature,
            threshold: bestThreshold,
            leftChild: leftSubtree,
            rightChild: rightSubtree,
        }
    }

    _traverseTree(sample, node) {
        if (node.isLeaf) {
            return node.value
        }

        if (sample[node.featureIndex] <= node.threshold) {
            return this._traverseTree(sample, node.leftChild)
        } else {
            return this._traverseTree(sample, node.rightChild)
        }
    }
    
    _featureRanking(node, ranking={}, depth=1) {
        if (ranking[depth] == null) {
            ranking[depth] = []
        }
        if (node.isLeaf) {
            return
        }
        ranking[depth].push(node.featureIndex)
        this._featureRanking(node.leftChild, ranking, (depth-0)+1)
        this._featureRanking(node.rightChild, ranking, (depth-0)+1)
        return ranking
    }

    _isPure(outputs) {
        const firstValue = outputs[0]
        for (const eachOutput of outputs) {
            if (eachOutput !== firstValue) {
                return false
            }
        }
        return true
    }

    _createLeafNode(outputs) {
        const voteCounts = frequencyCount(outputs)
        const majorityVote = this._majorityVote(voteCounts)
        return { isLeaf: true, value: majorityVote }
    }

    _splitDataset(inputs, outputs, featureIndex, threshold) {
        const leftX  = []
        const rightX = []
        const leftY  = []
        const rightY = []
        for (const [sample, label] of zip(inputs, outputs)) {
            if (sample[featureIndex] <= threshold) {
                leftX.push(sample)
                leftY.push(label)
            } else {
                rightX.push(sample)
                rightY.push(label)
            }
        }

        return [
            leftX,
            rightX,
            leftY,
            rightY
        ]
    }

    _informationGain(parentY, leftY, rightY) {
        const parentEntropy = this._entropy(parentY)
        const leftEntropy = (leftY.length / parentY.length) * this._entropy(leftY)
        const rightEntropy = (rightY.length / parentY.length) * this._entropy(rightY)
        return parentEntropy - leftEntropy - rightEntropy
    }

    _entropy(outputs) {
        const valueCounts = frequencyCount(outputs)
        let entropy = 0
        for (const label in valueCounts) {
            const probability = valueCounts[label] / outputs.length
            entropy -= probability * Math.log2(probability)
        }
        return entropy
    }

    _majorityVote(voteCounts) {
        let majorityVote = null
        let maxCount = -Infinity
        for (const [prediction, numberOfVotes] of Object.entries(voteCounts)) {
            if (numberOfVotes > maxCount) {
                maxCount = numberOfVotes
                majorityVote = prediction
            }
        }
        return majorityVote
    }
}