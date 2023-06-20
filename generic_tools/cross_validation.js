const makeIterable = (generator)=>{
    generator[Symbol.iterator] = ()=>generator()
    return generator
}

/**
 * Perform cross-validation by partitioning the data into all possible combinations.
 * 
 * @example
 *     const numberOfFolds = crossValidation({
 *         inputs: [
 *             [1, 2],
 *             [2, 3],
 *             [3, 4],
 *             [4, 5],
 *             [5, 6],
 *         ],
 *         outputs: [0, 0, 1, 1, 1],
 *         numberOfFolds: 3,
 *     })
 *     console.log(foldIndices)
 *     // the "inputs" and "outputs" below 
 *     // are generators rather than arrays
 *     [
 *       {
 *         train: { inputs: [...], outputs: [...] },
 *         test:  { inputs: [...], outputs: [...] },
 *       },
 *       {
 *         train: { inputs: [...], outputs: [...] },
 *         test:  { inputs: [...], outputs: [...] },
 *       },
 *       {
 *         train: { inputs: [...], outputs: [...] },
 *         test:  { inputs: [...], outputs: [...] },
 *       }
 *     ]
 * @param {Array<Array>} inputs - The samples [0]= first sample input
 * @param {Array} outputs 
 * @param {number} numberOfFolds - The number of numberOfFolds for cross-validation.
 * @returns {Array<Object>} An array of fold objects containing train and test data indices.
 */
export function crossValidation({inputs, outputs, numberOfFolds}) {
    const numberOfSamples = inputs.length
    const foldSize = Math.floor(numberOfSamples / numberOfFolds)
    const folds = []

    for (let i = 0; i < numberOfFolds; i++) {
        const start = i * foldSize
        const end = i === numberOfFolds - 1 ? numberOfSamples : (i + 1) * foldSize
        const trainIndices = []
        const testIndices = []

        for (let j = 0; j < numberOfSamples; j++) {
            if (j >= start && j < end) {
                testIndices.push(j)
            } else {
                trainIndices.push(j)
            }
        }
        
        // 
        // uses iterators to avoid memory usage and up-front computation
        // 
        folds.push({
            train: {
                inputs: makeIterable(function *() {
                    for (const each of trainIndices) {
                        yield inputs[each]
                    }
                }),
                outputs: makeIterable(function *() {
                    for (const each of trainIndices) {
                        yield outputs[each]
                    }
                }),
            },
            test: {
                inputs: makeIterable(function *() {
                    for (const each of testIndices) {
                        yield inputs[each]
                    }
                }),
                outputs: makeIterable(function *() {
                    for (const each of testIndices) {
                        yield outputs[each]
                    }
                }),
            },
        })
    }

    return folds
}