import { indent, findAll, extractFirst, stringToUtf8Bytes, toRepresentation } from "https://deno.land/x/good@1.3.0.0/string.js"

const _ = (await import('https://cdn.skypack.dev/lodash@4.17.21'))

const makeIterable = (generator, length)=>{
    generator[Symbol.iterator] = ()=>generator()
    Object.defineProperties(generator, {
        length: {
            get() { return length }
        }
    })
    // generator.length = length
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
export function crossValidation({inputs, outputs, numberOfFolds, shouldRandomize=true}) {
    const numberOfSamples = inputs.length
    const foldSize = Math.floor(numberOfSamples / numberOfFolds)
    const folds = []
    if (typeof numberOfFolds != "number") {
        throw Error(`crossValidation({ numberOfFolds: }), numberOfFolds needs to be a number, instead I got: ${toRepresentation(numberOfFolds)}`)
    }

    for (let i = 0; i < numberOfFolds; i++) {
        const start = i * foldSize
        const end = i === numberOfFolds - 1 ? numberOfSamples : (i + 1) * foldSize
        const trainIndices = []
        const testIndices = []
        
        if (shouldRandomize) {
            const indicies = _.shuffle([...Array(numberOfSamples-1)].map((e,i)=>i))

            for (let j = 0; j < numberOfSamples; j++) {
                if (j >= start && j < end) {
                    testIndices.push(indicies.pop())
                } else {
                    trainIndices.push(indicies.pop())
                }
            }
        } else {
            for (let j = 0; j < numberOfSamples; j++) {
                if (j >= start && j < end) {
                    testIndices.push(j)
                } else {
                    trainIndices.push(j)
                }
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
                },trainIndices.length),
                outputs: makeIterable(function *() {
                    for (const each of trainIndices) {
                        yield outputs[each]
                    }
                },trainIndices.length)
            },
            test: {
                inputs: makeIterable(function *() {
                    for (const each of testIndices) {
                        yield inputs[each]
                    }
                }, testIndices.length),
                outputs: makeIterable(function *() {
                    for (const each of testIndices) {
                        yield outputs[each]
                    }
                }, testIndices.length),
            },
        })
    }

    return folds
}