import { capitalize, indent, toCamelCase, digitsToEnglishArray, toPascalCase, toKebabCase, toSnakeCase, toScreamingtoKebabCase, toScreamingtoSnakeCase, toRepresentation, toString, regex, escapeRegexMatch, escapeRegexReplace, extractFirst, isValidIdentifier } from "https://deno.land/x/good@1.3.0.0/string.js"

// Random Forest Classifier
export class RandomForestClassifier {
    /**
     * Create a Random Forest Classifier.
     *
     * @example
     *     // Example usage
     *     const inputs = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]]
     *     const outputs = [0, 0, 1, 1, 1]
     *     
     *     const classifier = new RandomForestClassifier({numberOfTrees: 3, maxDepth: 2}).fit({inputs, outputs})
     *     // note: maxDepth: Infinity is valid
     *     
     *     const sample1 = [1, 1]
     *     const prediction1 = classifier.predictOne(sample1)
     *     // returns: 0
     *     const sample2 = [1, 1]
     *     const prediction2 = classifier.predictMany([sample1, sample2])
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
        const inputsIsAnArrayOfArrays = inputsIsNonEmpty && inputs[0] instanceof Array
        const inputValuesAreNonEmpty = inputsIsAnArrayOfArrays && inputs[0].length > 0
        const inputValuesAreNumbers = inputValuesAreNonEmpty && typeof inputs[0][0] == 'number' && (inputs[0][0] === inputs[0][0])
        const outputsIsAnArray = outputs instanceof Array
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
                    inputs: ${indent({string:toRepresentation(inputs), by:"                        ", noLead:true})}
                    inputs: ${indent({string:toRepresentation(outputs), by:"                        ", noLead:true})}
            `.replace(/\n                /g,"\n    "))
        }
        for (let i = 0; i < this.numberOfTrees; i++) {
            const tree = new DecisionTree({maxDepth:this.maxDepth})
            const bootstrapSample = this._bootstrapSample(inputs, outputs)
            tree.fit(bootstrapSample.inputs, bootstrapSample.outputs)
            this.trees.push(tree)
        }
        return this
    }
    
    /**
     * Fit the Random Forest Classifier to the training data.
     * 
     * @example
     *      classifier.fit({ inputs: [  [1,1], [2,2],  ], outputs: [ 100, 500 ], })
     *      classifier.predictMany([  [1,1], [2,2],  ])
     *      // returns [ 100, 500 ]
     * @param {Array<Array<number>>} inputs - The feature matrix of shape (numberOfSamples, numberOfFeatures).
     */
    predictMany(inputs) {
        const predictions = []
        for (const eachInput of inputs) {
            const treePredictions = []
            for (const eachTree of this.trees) {
                const treePrediction = eachTree.predict(eachInput)
                treePredictions.push(treePrediction)
            }
            predictions.push(this._majorityVote(treePredictions))
        }
        return predictions
    }
    
    predictOne(input) {
        return this.predictMany([input])[0]
    }

    _bootstrapSample(inputs, outputs) {
        const sampleX = []
        const sampleY = []
        const numberOfSamples = inputs.length
        for (let i = 0; i < numberOfSamples; i++) {
            const index = Math.floor(Math.random() * numberOfSamples)
            sampleX.push(inputs[index])
            sampleY.push(outputs[index])
        }
        return { inputs: sampleX, outputs: sampleY }
    }

    _majorityVote(predictions) {
        const voteCounts = {}
        for (let i = 0; i < predictions.length; i++) {
            const prediction = predictions[i]
            console.debug(`prediction is:`, prediction)
            voteCounts[prediction] = (voteCounts[prediction] || 0) + 1
        }
        console.debug(`voteCounts is:`, voteCounts)
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
        const featureIndices = Array.from({ length: numberOfFeatures }, (_, i) => i)
        const randomFeatureIndices = this._randomSubset(featureIndices, Math.sqrt(numberOfFeatures))

        for (const featureIndex of randomFeatureIndices) {
            const featureValues = inputs.map((sample) => sample[featureIndex])
            const uniqueValues = [...new Set(featureValues)]

            for (const value of uniqueValues) {
                const [leftY, rightY] = this._splitDataset(inputs, outputs, featureIndex, value)
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
        console.debug(`sample is:`, sample)
        console.debug(`node is:`, node)
        if (node.isLeaf) {
            return node.value
        }

        if (sample[node.featureIndex] <= node.threshold) {
            return this._traverseTree(sample, node.leftChild)
        } else {
            return this._traverseTree(sample, node.rightChild)
        }
    }

    _isPure(outputs) {
        const firstValue = outputs[0]
        for (let i = 1; i < outputs.length; i++) {
            if (outputs[i] !== firstValue) {
                return false
            }
        }
        return true
    }

    _createLeafNode(outputs) {
        const voteCounts = {}
        for (const eachLabel of outputs) {
            voteCounts[eachLabel] = (voteCounts[eachLabel] || 0) + 1
        }
        console.debug(`voteCounts is:`, voteCounts)
        const majorityVote = this._majorityVote(voteCounts)
        return { isLeaf: true, value: majorityVote }
    }

    _splitDataset(inputs, outputs, featureIndex, threshold) {
        const leftX = []
        const rightX = []
        const leftY = []
        const rightY = []

        for (let i = 0; i < inputs.length; i++) {
            const sample = inputs[i]
            if (sample[featureIndex] <= threshold) {
                leftX.push(sample)
                leftY.push(outputs[i])
            } else {
                rightX.push(sample)
                rightY.push(outputs[i])
            }
        }

        return [leftX, rightX, leftY, rightY]
    }

    _informationGain(parentY, leftY, rightY) {
        const parentEntropy = this._entropy(parentY)
        const leftEntropy = (leftY.length / parentY.length) * this._entropy(leftY)
        const rightEntropy = (rightY.length / parentY.length) * this._entropy(rightY)
        return parentEntropy - leftEntropy - rightEntropy
    }

    _entropy(outputs) {
        const valueCounts = {}
        for (let i = 0; i < outputs.length; i++) {
            const label = outputs[i]
            valueCounts[label] = (valueCounts[label] || 0) + 1
        }
        let entropy = 0
        for (const label in valueCounts) {
            const probability = valueCounts[label] / outputs.length
            entropy -= probability * Math.log2(probability)
        }
        return entropy
    }

    _randomSubset(array, size) {
        const shuffledArray = array.slice() // Create a shallow copy of the array
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
        }
        return shuffledArray.slice(0, size)
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