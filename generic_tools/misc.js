import { flatten, asyncIteratorToList, enumerate } from "https://deno.land/x/good@1.2.2.0/iterable.js"
/**
 * create onehot encoding
 *
 * @example
 *     const encodeing = createOneHot({ "A": { blah:1 }, "B": { blah: "stuff" } })
 *     encoding["A"] == [ 1, 0 ]
 *     encoding["B"] == [ 0, 1 ]
 */
export const createOneHot = (object)=>{
    const newObject = {}
    const numberOfPossibleValues = Object.keys(object).length
    const zerosArray = [...Array(numberOfPossibleValues)].map(each=>0)
    for (const [index, key] of enumerate(Object.keys(object))) {
        newObject[key] = [...zerosArray]
        newObject[key][index] = 1
        // convert to more efficient data type
        newObject[key] = new Uint8Array(newObject[key])
    }
    return newObject
}


export function* generateLinesFor(array) {
    console.debug(`writing file`)
    yield "[\n"
    let index = -1
    for (const each of array) {
        index += 1
        if (index % 1000) {
            console.debug(`    writing: ${(index/array.length)*100}%`)
        }
        yield JSON.stringify(each)+"\n"
    }
    yield "]"
}