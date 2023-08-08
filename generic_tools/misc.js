import { asyncIteratorToList, enumerate } from "https://deno.land/x/good@1.4.4.2/iterable.js"
/**
 * create onehot encoding
 *
 * @example
 *     const {objToOneHot, oneHotToObject} = createOneHot({ "A": { blah:1 }, "B": { blah: "stuff" } })
 *     objToOneHot["A"] == [ 1, 0 ]
 *     objToOneHot["B"] == [ 0, 1 ]
 */
export const createOneHot = (object)=>{
    const newObject = {}
    const oneHotToObject = new Map()
    const numberOfPossibleValues = Object.keys(object).length
    const zerosArray = [...Array(numberOfPossibleValues)].map(each=>0)
    for (const [index, key] of enumerate(Object.keys(object))) {
        newObject[key] = [...zerosArray]
        newObject[key][index] = 1
        // convert to more efficient data type
        newObject[key] = new Uint8Array(newObject[key])
        oneHotToObject.set(newObject[key], key)
    }
    return {objToOneHot: newObject, oneHotToObject: (key)=>oneHotToObject.get(key)}
}


export function* generateLinesFor(array) {
    console.debug(`writing file`)
    yield "[\n"
    let index = -1
    let prevPercentString = ""
    let percentString = "  0.0"
    let sendNext
    for (let each of array) {
        if (each instanceof Uint8Array) {
            each = [...each]
        }
        index += 1
        percentString = `${((index/array.length)*100).toFixed(1)}`.padStart(5," ")
        if (prevPercentString != percentString) {
            prevPercentString = percentString
            Deno.stdout.write(new TextEncoder().encode(`    writing: ${percentString}%\r`))
        }
        if (sendNext != null) {
            yield sendNext
        }
        sendNext = JSON.stringify(each)+",\n" 
    }
    if (sendNext != null) {
        yield sendNext.slice(0,-2)+"\n" // no comma on last value
    }
    console.log()
    yield "]"
}

export function frequencyCount(array) {
    const counts = {}
    for (const element of array) {
        counts[element] = (counts[element] || 0) + 1
    }
    return counts
}

export function hasLength(length, iterable) {
    iterable.length = length
    return iterable
}