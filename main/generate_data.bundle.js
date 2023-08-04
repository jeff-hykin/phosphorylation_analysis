#!/usr/bin/env sh
// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const typedArrayClasses = [
    Uint16Array,
    Uint32Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Int32Array,
    Int8Array,
    Float32Array,
    Float64Array,
    globalThis.BigInt64Array,
    globalThis.BigUint64Array
].filter((each11)=>each11);
new Set([
    RegExp,
    Date,
    URL,
    ...typedArrayClasses,
    globalThis.ArrayBuffer,
    globalThis.DataView
]);
Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
Object.getPrototypeOf([][Symbol.iterator]);
Object.getPrototypeOf(new Map()[Symbol.iterator]);
Object.getPrototypeOf(new Set()[Symbol.iterator]);
let AsyncFunction = class {
};
let GeneratorFunction = class {
};
let AsyncGeneratorFunction = class {
};
let SyncGenerator = class {
};
let AsyncGenerator = class {
};
try {
    AsyncFunction = eval("(async function(){}).constructor");
    GeneratorFunction = eval("(function*(){}).constructor");
    AsyncGeneratorFunction = eval("(async function*(){}).constructor");
    SyncGenerator = eval("((function*(){})()).constructor");
    AsyncGenerator = eval("((async function*(){})()).constructor");
} catch (error) {}
const isAsyncIterable = function(value11) {
    return value11 && typeof value11[Symbol.asyncIterator] === 'function';
};
const isSyncIterableObjectOrContainer = function(value11) {
    return value11 instanceof Object && typeof value11[Symbol.iterator] == 'function';
};
Symbol.for("deepCopy");
Symbol();
const getThis = Symbol();
Object.getPrototypeOf(function() {})[getThis] = function() {
    return this;
};
const deepSortObject = (obj11, seen11 = new Map())=>{
    if (!(obj11 instanceof Object)) {
        return obj11;
    } else if (seen11.has(obj11)) {
        return seen11.get(obj11);
    } else {
        if (obj11 instanceof Array) {
            const sortedChildren11 = [];
            seen11.set(obj11, sortedChildren11);
            for (const each11 of obj11){
                sortedChildren11.push(deepSortObject(each11, seen11));
            }
            return sortedChildren11;
        } else {
            const sorted11 = {};
            seen11.set(obj11, sorted11);
            for (const eachKey11 of Object.keys(obj11).sort()){
                sorted11[eachKey11] = deepSortObject(obj11[eachKey11], seen11);
            }
            return sorted11;
        }
    }
};
Object.getOwnPropertyDescriptors;
function Iterable(value2, options1 = {
    length: null,
    _createEmpty: false
}) {
    const { length: length1 , _createEmpty: _createEmpty1  } = {
        length: null,
        _createEmpty: false,
        ...options1
    };
    if (_createEmpty1) {
        return this;
    }
    const self1 = this === undefined || this === globalThis ? new Iterable(null, {
        _createEmpty: true
    }) : this;
    if (value2 instanceof Array) {
        self1.length = value2.length;
    } else if (value2 instanceof Set) {
        self1.length = value2.size;
    } else {
        self1.length = length1;
    }
    self1._source = makeIterable(value2);
    if (self1._source[Symbol.iterator]) {
        self1[Symbol.iterator] = self1._source[Symbol.iterator].bind(self1._source);
    }
    if (self1._source[Symbol.asyncIterator]) {
        self1[Symbol.asyncIterator] = self1._source[Symbol.asyncIterator].bind(self1._source);
    }
    self1[Symbol.isConcatSpreadable] = true;
    self1.map = function(func1) {
        const output2 = {
            ...self1._source,
            [Symbol.iterator]: ()=>{
                const iterator1 = iter(self1._source);
                let index1 = 0;
                return {
                    next () {
                        const { value: value2 , done: done1  } = iterator1.next();
                        return {
                            value: done1 || func1(value2, index1++),
                            done: done1
                        };
                    }
                };
            }
        };
        const includeAsyncIterator1 = isAsyncIterable(self1._source) || func1 instanceof AsyncFunction;
        if (includeAsyncIterator1) {
            output2[Symbol.asyncIterator] = ()=>{
                const iterator1 = iter(self1._source);
                let index1 = 0;
                return {
                    async next () {
                        const { value: value2 , done: done1  } = await iterator1.next();
                        return {
                            value: done1 || await func1(value2, index1++),
                            done: done1
                        };
                    }
                };
            };
        }
        return new Iterable(output2);
    };
    self1.filter = function(func1) {
        const output2 = {
            ...self1._source,
            [Symbol.iterator]: ()=>{
                const iterator1 = iter(self1._source);
                let index1 = 0;
                return {
                    next () {
                        while(1){
                            const result1 = iterator1.next();
                            if (result1.done || func1(result1.value, index1++)) {
                                return result1;
                            }
                        }
                    }
                };
            }
        };
        const includeAsyncIterator1 = isAsyncIterable(self1._source) || func1 instanceof AsyncFunction;
        if (includeAsyncIterator1) {
            output2[Symbol.asyncIterator] = ()=>{
                const iterator1 = iter(self1._source);
                let index1 = 0;
                return {
                    async next () {
                        while(1){
                            const result1 = await iterator1.next();
                            if (result1.done || await func1(result1.value, index1++)) {
                                return result1;
                            }
                        }
                    }
                };
            };
        }
        return new Iterable(output2);
    };
    self1.forkAndFilter = ({ ...args1 }, ...other1)=>forkAndFilter({
            ...args1,
            data: self1
        }, ...other1);
    self1.flat = (depth1 = 1, asyncsInsideSyncIterable1 = false)=>{
        return new Iterable(flatten({
            iterable: self1,
            depth: depth1,
            asyncsInsideSyncIterable: asyncsInsideSyncIterable1
        }));
    };
    Object.defineProperties(self1, {
        toArray: {
            get () {
                if (self1[Symbol.asyncIterator]) {
                    return (async ()=>{
                        const iterator1 = self1[Symbol.asyncIterator]();
                        const output2 = [];
                        while(1){
                            const { value: value2 , done: done1  } = await iterator1.next();
                            if (done1) {
                                break;
                            }
                            output2.push(value2);
                        }
                        return output2;
                    })();
                } else {
                    return [
                        ...self1
                    ];
                }
            }
        },
        flattened: {
            get () {
                return self1.flat(Infinity);
            }
        }
    });
    return self1;
}
function flatten({ iterable: iterable1 , depth: depth1 = Infinity , asyncsInsideSyncIterable: asyncsInsideSyncIterable1 = false  }) {
    if (depth1 <= 0) {
        return iterable1;
    }
    iterable1 = makeIterable(iterable1);
    if (asyncsInsideSyncIterable1 || iterable1[Symbol.asyncIterator]) {
        return async function*() {
            for await (const each2 of iterable1){
                if (isAsyncIterable(each2) || isSyncIterableObjectOrContainer(each2)) {
                    for await (const eachChild1 of flatten({
                        iterable: each2,
                        depth: depth1 - 1,
                        asyncsInsideSyncIterable: asyncsInsideSyncIterable1
                    })){
                        yield eachChild1;
                    }
                } else {
                    yield each2;
                }
            }
        }();
    } else {
        return function*() {
            for (const each2 of iterable1){
                if (isSyncIterableObjectOrContainer(each2)) {
                    for (const eachChild1 of flatten({
                        iterable: each2,
                        depth: depth1 - 1
                    })){
                        yield eachChild1;
                    }
                } else {
                    yield each2;
                }
            }
        }();
    }
}
const emptyIterator = function*() {}();
const makeIterable = (object1)=>{
    if (object1 == null) {
        return emptyIterator;
    }
    if (object1[Symbol.iterator] instanceof Function || object1[Symbol.asyncIterator] instanceof Function) {
        return object1;
    }
    if (Object.getPrototypeOf(object1).constructor == Object) {
        return Object.entries(object1);
    }
    return emptyIterator;
};
const iter = (object1)=>{
    const iterable1 = makeIterable(object1);
    if (iterable1[Symbol.asyncIterator]) {
        return iterable1[Symbol.asyncIterator]();
    } else {
        return iterable1[Symbol.iterator]();
    }
};
const Stop = Symbol("iterationStop");
const handleResult = ({ value: value2 , done: done1  })=>done1 ? Stop : value2;
const next = (object1)=>{
    if (object1.next instanceof Function) {
        const result1 = object1.next();
        if (result1 instanceof Promise) {
            return result1.then(handleResult);
        } else {
            return handleResult(result1);
        }
    } else {
        throw Error(`can't call next(object) on the following object as there is no object.next() method`, object1);
    }
};
const zip = function*(...iterables1) {
    iterables1 = iterables1.map((each2)=>iter(each2));
    while(true){
        const nexts1 = iterables1.map((each2)=>each2.next());
        if (nexts1.every((each2)=>each2.done)) {
            break;
        }
        yield nexts1.map((each2)=>each2.value);
    }
};
const enumerate = function*(...iterables1) {
    let index1 = 0;
    for (const each2 of zip(...iterables1)){
        yield [
            index1++,
            ...each2
        ];
    }
};
const combinations = function*(elements1, maxLength1, minLength1) {
    if (maxLength1 === minLength1 && minLength1 === undefined) {
        minLength1 = 1;
        maxLength1 = elements1.length;
    } else {
        maxLength1 = maxLength1 || elements1.length;
        minLength1 = minLength1 === undefined ? maxLength1 : minLength1;
    }
    if (minLength1 !== maxLength1) {
        for(let i3 = minLength1; i3 <= maxLength1; i3++){
            yield* combinations(elements1, i3, i3);
        }
    } else {
        if (maxLength1 === 1) {
            yield* elements1.map((each2)=>[
                    each2
                ]);
        } else {
            for(let i3 = 0; i3 < elements1.length; i3++){
                for (const next1 of combinations(elements1.slice(i3 + 1, elements1.length), maxLength1 - 1, maxLength1 - 1)){
                    yield [
                        elements1[i3],
                        ...next1
                    ];
                }
            }
        }
    }
};
function forkAndFilter({ data: data1 , filters: filters1 , outputArrays: outputArrays1 = false  }) {
    let isAsync1 = isAsyncIterable(data1);
    const conditionHandlers1 = {};
    const iterator1 = iter(data1);
    for (const [key1, check1] of Object.entries(filters1)){
        const que1 = [];
        let index1 = 0;
        if (isAsync1 || check1 instanceof AsyncFunction) {
            conditionHandlers1[key1] = new Iterable(async function*() {
                while(1){
                    if (conditionHandlers1[key1].hitError) {
                        throw conditionHandlers1[key1].hitError;
                    }
                    if (que1.length == 0) {
                        const nextValue1 = await next(iterator1);
                        if (nextValue1 == Stop) {
                            break;
                        }
                        for (const [key1, generator1] of Object.entries(conditionHandlers1)){
                            let shouldPush1 = false;
                            try {
                                shouldPush1 = await generator1.check(nextValue1, index1++);
                            } catch (error1) {
                                generator1.hitError = error1;
                            }
                            if (shouldPush1) {
                                generator1.que.push(nextValue1);
                            }
                        }
                    }
                    if (que1.length != 0) {
                        yield que1.shift();
                    }
                }
            }());
        } else {
            conditionHandlers1[key1] = new Iterable(function*() {
                while(1){
                    if (conditionHandlers1[key1].hitError) {
                        throw conditionHandlers1[key1].hitError;
                    }
                    if (que1.length == 0) {
                        const nextValue1 = next(iterator1);
                        if (nextValue1 == Stop) {
                            break;
                        }
                        for (const [key1, generator1] of Object.entries(conditionHandlers1)){
                            let shouldPush1 = false;
                            try {
                                shouldPush1 = generator1.check(nextValue1, index1++);
                            } catch (error1) {
                                generator1.hitError = error1;
                            }
                            if (shouldPush1) {
                                generator1.que.push(nextValue1);
                            }
                        }
                    }
                    if (que1.length != 0) {
                        yield que1.shift();
                    }
                }
            }());
        }
        conditionHandlers1[key1].check = check1;
        conditionHandlers1[key1].hitError = false;
        conditionHandlers1[key1].que = que1;
    }
    if (outputArrays1) {
        for (const [key1, value2] of Object.entries(conditionHandlers1)){
            if (isAsyncIterable(value2)) {
                conditionHandlers1[key1] = asyncIteratorToList(value2);
            } else {
                conditionHandlers1[key1] = [
                    ...value2
                ];
            }
        }
    }
    return conditionHandlers1;
}
async function asyncIteratorToList(asyncIterator1) {
    const results1 = [];
    for await (const each2 of asyncIterator1){
        results1.push(each2);
    }
    return results1;
}
const ERROR_WHILE_MAPPING_MESSAGE = "Threw while mapping.";
function concurrentlyTransform({ iterator: iterator1 , transformFunction: transformFunction1 , poolLimit: poolLimit1 = null , awaitAll: awaitAll1 = false  }) {
    poolLimit1 = poolLimit1 || concurrentlyTransform.defaultPoolLimit;
    const res1 = new TransformStream({
        async transform (p1, controller1) {
            try {
                const s3 = await p1;
                controller1.enqueue(s3);
            } catch (e1) {
                if (e1 instanceof AggregateError && e1.message == ERROR_WHILE_MAPPING_MESSAGE) {
                    controller1.error(e1);
                }
            }
        }
    });
    const mainPromise1 = (async ()=>{
        const writer1 = res1.writable.getWriter();
        const executing1 = [];
        try {
            let index1 = 0;
            for await (const item1 of iterator1){
                const p1 = Promise.resolve().then(()=>transformFunction1(item1, index1));
                index1++;
                writer1.write(p1);
                const e1 = p1.then(()=>executing1.splice(executing1.indexOf(e1), 1));
                executing1.push(e1);
                if (executing1.length >= poolLimit1) {
                    await Promise.race(executing1);
                }
            }
            await Promise.all(executing1);
            writer1.close();
        } catch  {
            const errors1 = [];
            for (const result1 of (await Promise.allSettled(executing1))){
                if (result1.status == "rejected") {
                    errors1.push(result1.reason);
                }
            }
            writer1.write(Promise.reject(new AggregateError(errors1, ERROR_WHILE_MAPPING_MESSAGE))).catch(()=>{});
        }
    })();
    const asyncIterator1 = res1.readable[Symbol.asyncIterator]();
    if (!awaitAll1) {
        return asyncIterator1;
    } else {
        return mainPromise1.then(()=>asyncIteratorToList(asyncIterator1));
    }
}
concurrentlyTransform.defaultPoolLimit = 40;
const createOneHot = (object1)=>{
    const newObject1 = {};
    const oneHotToObject1 = new Map();
    const numberOfPossibleValues1 = Object.keys(object1).length;
    const zerosArray1 = [
        ...Array(numberOfPossibleValues1)
    ].map((each2)=>0);
    for (const [index1, key1] of enumerate(Object.keys(object1))){
        newObject1[key1] = [
            ...zerosArray1
        ];
        newObject1[key1][index1] = 1;
        newObject1[key1] = new Uint8Array(newObject1[key1]);
        oneHotToObject1.set(newObject1[key1], key1);
    }
    return {
        objToOneHot: newObject1,
        oneHotToObject: (key1)=>oneHotToObject1.get(key1)
    };
};
function* generateLinesFor(array1) {
    console.debug(`writing file`);
    yield "[\n";
    let index1 = -1;
    let prevPercentString1 = "";
    let percentString1 = "  0.0";
    let sendNext1;
    for (let each2 of array1){
        if (each2 instanceof Uint8Array) {
            each2 = [
                ...each2
            ];
        }
        index1 += 1;
        percentString1 = `${(index1 / array1.length * 100).toFixed(1)}`.padStart(5, " ");
        if (prevPercentString1 != percentString1) {
            prevPercentString1 = percentString1;
            Deno.stdout.write(new TextEncoder().encode(`    writing: ${percentString1}%\r`));
        }
        if (sendNext1 != null) {
            yield sendNext1;
        }
        sendNext1 = JSON.stringify(each2) + ",\n";
    }
    if (sendNext1 != null) {
        yield sendNext1.slice(0, -2) + "\n";
    }
    console.log();
    yield "]";
}
const typedArrayClasses = [
    Uint16Array,
    Uint32Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Int32Array,
    Int8Array,
    Float32Array,
    Float64Array,
    globalThis.BigInt64Array,
    globalThis.BigUint64Array
].filter((each11)=>each11);
new Set([
    RegExp,
    Date,
    URL,
    ...typedArrayClasses,
    globalThis.ArrayBuffer,
    globalThis.DataView
]);
Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
Object.getPrototypeOf([][Symbol.iterator]);
Object.getPrototypeOf(new Map()[Symbol.iterator]);
Object.getPrototypeOf(new Set()[Symbol.iterator]);
let AsyncFunction = class {
};
let GeneratorFunction = class {
};
let AsyncGeneratorFunction = class {
};
let SyncGenerator = class {
};
let AsyncGenerator = class {
};
try {
    AsyncFunction = eval("(async function(){}).constructor");
    GeneratorFunction = eval("(function*(){}).constructor");
    AsyncGeneratorFunction = eval("(async function*(){}).constructor");
    SyncGenerator = eval("((function*(){})()).constructor");
    AsyncGenerator = eval("((async function*(){})()).constructor");
} catch (error) {}
Symbol.for("deepCopy");
Symbol();
const getThis = Symbol();
Object.getPrototypeOf(function() {})[getThis] = function() {
    return this;
};
const deepSortObject = (obj11, seen11 = new Map())=>{
    if (!(obj11 instanceof Object)) {
        return obj11;
    } else if (seen11.has(obj11)) {
        return seen11.get(obj11);
    } else {
        if (obj11 instanceof Array) {
            const sortedChildren11 = [];
            seen11.set(obj11, sortedChildren11);
            for (const each11 of obj11){
                sortedChildren11.push(deepSortObject(each11, seen11));
            }
            return sortedChildren11;
        } else {
            const sorted11 = {};
            seen11.set(obj11, sorted11);
            for (const eachKey11 of Object.keys(obj11).sort()){
                sorted11[eachKey11] = deepSortObject(obj11[eachKey11], seen11);
            }
            return sorted11;
        }
    }
};
Object.getOwnPropertyDescriptors;
const emptyIterator = function*() {}();
const makeIterable = (object1)=>{
    if (object1 == null) {
        return emptyIterator;
    }
    if (object1[Symbol.iterator] instanceof Function || object1[Symbol.asyncIterator] instanceof Function) {
        return object1;
    }
    if (Object.getPrototypeOf(object1).constructor == Object) {
        return Object.entries(object1);
    }
    return emptyIterator;
};
const iter = (object1)=>{
    const iterable1 = makeIterable(object1);
    if (iterable1[Symbol.asyncIterator]) {
        return iterable1[Symbol.asyncIterator]();
    } else {
        return iterable1[Symbol.iterator]();
    }
};
Symbol("iterationStop");
const zip = function*(...iterables1) {
    iterables1 = iterables1.map((each2)=>iter(each2));
    while(true){
        const nexts1 = iterables1.map((each2)=>each2.next());
        if (nexts1.every((each2)=>each2.done)) {
            break;
        }
        yield nexts1.map((each2)=>each2.value);
    }
};
const enumerate = function*(...iterables1) {
    let index1 = 0;
    for (const each2 of zip(...iterables1)){
        yield [
            index1++,
            ...each2
        ];
    }
};
const combinations = function*(elements1, maxLength1, minLength1) {
    if (maxLength1 === minLength1 && minLength1 === undefined) {
        minLength1 = 1;
        maxLength1 = elements1.length;
    } else {
        maxLength1 = maxLength1 || elements1.length;
        minLength1 = minLength1 === undefined ? maxLength1 : minLength1;
    }
    if (minLength1 !== maxLength1) {
        for(let i3 = minLength1; i3 <= maxLength1; i3++){
            yield* combinations(elements1, i3, i3);
        }
    } else {
        if (maxLength1 === 1) {
            yield* elements1.map((each2)=>[
                    each2
                ]);
        } else {
            for(let i3 = 0; i3 < elements1.length; i3++){
                for (const next1 of combinations(elements1.slice(i3 + 1, elements1.length), maxLength1 - 1, maxLength1 - 1)){
                    yield [
                        elements1[i3],
                        ...next1
                    ];
                }
            }
        }
    }
};
async function asyncIteratorToList(asyncIterator1) {
    const results1 = [];
    for await (const each2 of asyncIterator1){
        results1.push(each2);
    }
    return results1;
}
const ERROR_WHILE_MAPPING_MESSAGE = "Threw while mapping.";
function concurrentlyTransform({ iterator: iterator1 , transformFunction: transformFunction1 , poolLimit: poolLimit1 = null , awaitAll: awaitAll1 = false  }) {
    poolLimit1 = poolLimit1 || concurrentlyTransform.defaultPoolLimit;
    const res1 = new TransformStream({
        async transform (p1, controller1) {
            try {
                const s3 = await p1;
                controller1.enqueue(s3);
            } catch (e1) {
                if (e1 instanceof AggregateError && e1.message == ERROR_WHILE_MAPPING_MESSAGE) {
                    controller1.error(e1);
                }
            }
        }
    });
    const mainPromise1 = (async ()=>{
        const writer1 = res1.writable.getWriter();
        const executing1 = [];
        try {
            let index1 = 0;
            for await (const item1 of iterator1){
                const p1 = Promise.resolve().then(()=>transformFunction1(item1, index1));
                index1++;
                writer1.write(p1);
                const e1 = p1.then(()=>executing1.splice(executing1.indexOf(e1), 1));
                executing1.push(e1);
                if (executing1.length >= poolLimit1) {
                    await Promise.race(executing1);
                }
            }
            await Promise.all(executing1);
            writer1.close();
        } catch  {
            const errors1 = [];
            for (const result1 of (await Promise.allSettled(executing1))){
                if (result1.status == "rejected") {
                    errors1.push(result1.reason);
                }
            }
            writer1.write(Promise.reject(new AggregateError(errors1, ERROR_WHILE_MAPPING_MESSAGE))).catch(()=>{});
        }
    })();
    const asyncIterator1 = res1.readable[Symbol.asyncIterator]();
    if (!awaitAll1) {
        return asyncIterator1;
    } else {
        return mainPromise1.then(()=>asyncIteratorToList(asyncIterator1));
    }
}
concurrentlyTransform.defaultPoolLimit = 40;
function isOutdated(minimumVersion1, actualVersion1) {
    const minimumVersionArr1 = minimumVersion1.split(".");
    const actualVersionArr1 = actualVersion1.split(".");
    versionCategoryEnumeration: for(let i3 = 0; i3 < minimumVersionArr1.length; ++i3){
        const minimumVersionCategoryNum1 = parseInt(minimumVersionArr1[i3]);
        const actualVersionCategoryNum1 = parseInt(actualVersionArr1[i3]);
        if (minimumVersionCategoryNum1 > actualVersionCategoryNum1) {
            return true;
        } else if (minimumVersionCategoryNum1 === actualVersionCategoryNum1) {
            continue versionCategoryEnumeration;
        } else {
            break versionCategoryEnumeration;
        }
    }
    return false;
}
const warn = (type1, current1, expected1)=>`Your ${type1} version is ${current1}, but at least version ${expected1} is required. Please update to a later version of Deno. Thankies!`;
function ensure(ensureOptions1) {
    const { deno: currentDeno1 , v8: currentV81 , typescript: currentTypescript1  } = Deno.version;
    const { denoVersion: expectedDeno1 , v8Version: expectedV81 , typescriptVersion: expectedTypescript1  } = ensureOptions1;
    let atLeastOneOutdated1 = false;
    const ensureCategories1 = [
        [
            "Deno",
            currentDeno1,
            expectedDeno1
        ],
        [
            "V8",
            currentV81,
            expectedV81
        ],
        [
            "Typescript",
            currentTypescript1,
            expectedTypescript1
        ]
    ];
    for (const [categoryName1, currentVersion1, expectedVersion1] of ensureCategories1){
        if (!expectedVersion1) continue;
        const isCategoryOutdated1 = isOutdated(expectedVersion1, currentVersion1);
        if (isCategoryOutdated1) {
            console.info(warn(categoryName1, currentVersion1, expectedVersion1));
            atLeastOneOutdated1 = true;
        }
    }
    if (atLeastOneOutdated1) {
        Deno.exit(1);
    }
}
const osType = (()=>{
    const { Deno: Deno1  } = globalThis;
    if (typeof Deno1?.build?.os === "string") {
        return Deno1.build.os;
    }
    const { navigator: navigator1  } = globalThis;
    if (navigator1?.appVersion?.includes?.("Win") ?? false) {
        return "windows";
    }
    return "linux";
})();
const isWindows = osType === "windows";
const CHAR_FORWARD_SLASH = 47;
function assertPath(path1) {
    if (typeof path1 !== "string") {
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(path1)}`);
    }
}
function isPosixPathSeparator(code1) {
    return code1 === 47;
}
function isPathSeparator(code1) {
    return isPosixPathSeparator(code1) || code1 === 92;
}
function isWindowsDeviceRoot(code1) {
    return code1 >= 97 && code1 <= 122 || code1 >= 65 && code1 <= 90;
}
function normalizeString(path1, allowAboveRoot1, separator1, isPathSeparator1) {
    let res1 = "";
    let lastSegmentLength1 = 0;
    let lastSlash1 = -1;
    let dots1 = 0;
    let code1;
    for(let i3 = 0, len1 = path1.length; i3 <= len1; ++i3){
        if (i3 < len1) code1 = path1.charCodeAt(i3);
        else if (isPathSeparator1(code1)) break;
        else code1 = CHAR_FORWARD_SLASH;
        if (isPathSeparator1(code1)) {
            if (lastSlash1 === i3 - 1 || dots1 === 1) {} else if (lastSlash1 !== i3 - 1 && dots1 === 2) {
                if (res1.length < 2 || lastSegmentLength1 !== 2 || res1.charCodeAt(res1.length - 1) !== 46 || res1.charCodeAt(res1.length - 2) !== 46) {
                    if (res1.length > 2) {
                        const lastSlashIndex1 = res1.lastIndexOf(separator1);
                        if (lastSlashIndex1 === -1) {
                            res1 = "";
                            lastSegmentLength1 = 0;
                        } else {
                            res1 = res1.slice(0, lastSlashIndex1);
                            lastSegmentLength1 = res1.length - 1 - res1.lastIndexOf(separator1);
                        }
                        lastSlash1 = i3;
                        dots1 = 0;
                        continue;
                    } else if (res1.length === 2 || res1.length === 1) {
                        res1 = "";
                        lastSegmentLength1 = 0;
                        lastSlash1 = i3;
                        dots1 = 0;
                        continue;
                    }
                }
                if (allowAboveRoot1) {
                    if (res1.length > 0) res1 += `${separator1}..`;
                    else res1 = "..";
                    lastSegmentLength1 = 2;
                }
            } else {
                if (res1.length > 0) res1 += separator1 + path1.slice(lastSlash1 + 1, i3);
                else res1 = path1.slice(lastSlash1 + 1, i3);
                lastSegmentLength1 = i3 - lastSlash1 - 1;
            }
            lastSlash1 = i3;
            dots1 = 0;
        } else if (code1 === 46 && dots1 !== -1) {
            ++dots1;
        } else {
            dots1 = -1;
        }
    }
    return res1;
}
function _format(sep1, pathObject1) {
    const dir1 = pathObject1.dir || pathObject1.root;
    const base1 = pathObject1.base || (pathObject1.name || "") + (pathObject1.ext || "");
    if (!dir1) return base1;
    if (dir1 === pathObject1.root) return dir1 + base1;
    return dir1 + sep1 + base1;
}
const WHITESPACE_ENCODINGS = {
    "\u0009": "%09",
    "\u000A": "%0A",
    "\u000B": "%0B",
    "\u000C": "%0C",
    "\u000D": "%0D",
    "\u0020": "%20"
};
function encodeWhitespace(string2) {
    return string2.replaceAll(/[\s]/g, (c3)=>{
        return WHITESPACE_ENCODINGS[c3] ?? c3;
    });
}
class DenoStdInternalError extends Error {
    constructor(message1){
        super(message1);
        this.name = "DenoStdInternalError";
    }
}
function assert(expr1, msg1 = "") {
    if (!expr1) {
        throw new DenoStdInternalError(msg1);
    }
}
const sep = "\\";
const delimiter = ";";
function resolve(...pathSegments1) {
    let resolvedDevice1 = "";
    let resolvedTail1 = "";
    let resolvedAbsolute1 = false;
    for(let i3 = pathSegments1.length - 1; i3 >= -1; i3--){
        let path1;
        const { Deno: Deno1  } = globalThis;
        if (i3 >= 0) {
            path1 = pathSegments1[i3];
        } else if (!resolvedDevice1) {
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a drive-letter-less path without a CWD.");
            }
            path1 = Deno1.cwd();
        } else {
            if (typeof Deno1?.env?.get !== "function" || typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path1 = Deno1.cwd();
            if (path1 === undefined || path1.slice(0, 3).toLowerCase() !== `${resolvedDevice1.toLowerCase()}\\`) {
                path1 = `${resolvedDevice1}\\`;
            }
        }
        assertPath(path1);
        const len1 = path1.length;
        if (len1 === 0) continue;
        let rootEnd1 = 0;
        let device1 = "";
        let isAbsolute1 = false;
        const code1 = path1.charCodeAt(0);
        if (len1 > 1) {
            if (isPathSeparator(code1)) {
                isAbsolute1 = true;
                if (isPathSeparator(path1.charCodeAt(1))) {
                    let j1 = 2;
                    let last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        const firstPart1 = path1.slice(last1, j1);
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (!isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 < len1 && j1 !== last1) {
                            last1 = j1;
                            for(; j1 < len1; ++j1){
                                if (isPathSeparator(path1.charCodeAt(j1))) break;
                            }
                            if (j1 === len1) {
                                device1 = `\\\\${firstPart1}\\${path1.slice(last1)}`;
                                rootEnd1 = j1;
                            } else if (j1 !== last1) {
                                device1 = `\\\\${firstPart1}\\${path1.slice(last1, j1)}`;
                                rootEnd1 = j1;
                            }
                        }
                    }
                } else {
                    rootEnd1 = 1;
                }
            } else if (isWindowsDeviceRoot(code1)) {
                if (path1.charCodeAt(1) === 58) {
                    device1 = path1.slice(0, 2);
                    rootEnd1 = 2;
                    if (len1 > 2) {
                        if (isPathSeparator(path1.charCodeAt(2))) {
                            isAbsolute1 = true;
                            rootEnd1 = 3;
                        }
                    }
                }
            }
        } else if (isPathSeparator(code1)) {
            rootEnd1 = 1;
            isAbsolute1 = true;
        }
        if (device1.length > 0 && resolvedDevice1.length > 0 && device1.toLowerCase() !== resolvedDevice1.toLowerCase()) {
            continue;
        }
        if (resolvedDevice1.length === 0 && device1.length > 0) {
            resolvedDevice1 = device1;
        }
        if (!resolvedAbsolute1) {
            resolvedTail1 = `${path1.slice(rootEnd1)}\\${resolvedTail1}`;
            resolvedAbsolute1 = isAbsolute1;
        }
        if (resolvedAbsolute1 && resolvedDevice1.length > 0) break;
    }
    resolvedTail1 = normalizeString(resolvedTail1, !resolvedAbsolute1, "\\", isPathSeparator);
    return resolvedDevice1 + (resolvedAbsolute1 ? "\\" : "") + resolvedTail1 || ".";
}
function normalize(path1) {
    assertPath(path1);
    const len1 = path1.length;
    if (len1 === 0) return ".";
    let rootEnd1 = 0;
    let device1;
    let isAbsolute1 = false;
    const code1 = path1.charCodeAt(0);
    if (len1 > 1) {
        if (isPathSeparator(code1)) {
            isAbsolute1 = true;
            if (isPathSeparator(path1.charCodeAt(1))) {
                let j1 = 2;
                let last1 = j1;
                for(; j1 < len1; ++j1){
                    if (isPathSeparator(path1.charCodeAt(j1))) break;
                }
                if (j1 < len1 && j1 !== last1) {
                    const firstPart1 = path1.slice(last1, j1);
                    last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (!isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 === len1) {
                            return `\\\\${firstPart1}\\${path1.slice(last1)}\\`;
                        } else if (j1 !== last1) {
                            device1 = `\\\\${firstPart1}\\${path1.slice(last1, j1)}`;
                            rootEnd1 = j1;
                        }
                    }
                }
            } else {
                rootEnd1 = 1;
            }
        } else if (isWindowsDeviceRoot(code1)) {
            if (path1.charCodeAt(1) === 58) {
                device1 = path1.slice(0, 2);
                rootEnd1 = 2;
                if (len1 > 2) {
                    if (isPathSeparator(path1.charCodeAt(2))) {
                        isAbsolute1 = true;
                        rootEnd1 = 3;
                    }
                }
            }
        }
    } else if (isPathSeparator(code1)) {
        return "\\";
    }
    let tail1;
    if (rootEnd1 < len1) {
        tail1 = normalizeString(path1.slice(rootEnd1), !isAbsolute1, "\\", isPathSeparator);
    } else {
        tail1 = "";
    }
    if (tail1.length === 0 && !isAbsolute1) tail1 = ".";
    if (tail1.length > 0 && isPathSeparator(path1.charCodeAt(len1 - 1))) {
        tail1 += "\\";
    }
    if (device1 === undefined) {
        if (isAbsolute1) {
            if (tail1.length > 0) return `\\${tail1}`;
            else return "\\";
        } else if (tail1.length > 0) {
            return tail1;
        } else {
            return "";
        }
    } else if (isAbsolute1) {
        if (tail1.length > 0) return `${device1}\\${tail1}`;
        else return `${device1}\\`;
    } else if (tail1.length > 0) {
        return device1 + tail1;
    } else {
        return device1;
    }
}
function isAbsolute(path1) {
    assertPath(path1);
    const len1 = path1.length;
    if (len1 === 0) return false;
    const code1 = path1.charCodeAt(0);
    if (isPathSeparator(code1)) {
        return true;
    } else if (isWindowsDeviceRoot(code1)) {
        if (len1 > 2 && path1.charCodeAt(1) === 58) {
            if (isPathSeparator(path1.charCodeAt(2))) return true;
        }
    }
    return false;
}
function join(...paths1) {
    const pathsCount1 = paths1.length;
    if (pathsCount1 === 0) return ".";
    let joined1;
    let firstPart1 = null;
    for(let i3 = 0; i3 < pathsCount1; ++i3){
        const path1 = paths1[i3];
        assertPath(path1);
        if (path1.length > 0) {
            if (joined1 === undefined) joined1 = firstPart1 = path1;
            else joined1 += `\\${path1}`;
        }
    }
    if (joined1 === undefined) return ".";
    let needsReplace1 = true;
    let slashCount1 = 0;
    assert(firstPart1 != null);
    if (isPathSeparator(firstPart1.charCodeAt(0))) {
        ++slashCount1;
        const firstLen1 = firstPart1.length;
        if (firstLen1 > 1) {
            if (isPathSeparator(firstPart1.charCodeAt(1))) {
                ++slashCount1;
                if (firstLen1 > 2) {
                    if (isPathSeparator(firstPart1.charCodeAt(2))) ++slashCount1;
                    else {
                        needsReplace1 = false;
                    }
                }
            }
        }
    }
    if (needsReplace1) {
        for(; slashCount1 < joined1.length; ++slashCount1){
            if (!isPathSeparator(joined1.charCodeAt(slashCount1))) break;
        }
        if (slashCount1 >= 2) joined1 = `\\${joined1.slice(slashCount1)}`;
    }
    return normalize(joined1);
}
function relative(from1, to1) {
    assertPath(from1);
    assertPath(to1);
    if (from1 === to1) return "";
    const fromOrig1 = resolve(from1);
    const toOrig1 = resolve(to1);
    if (fromOrig1 === toOrig1) return "";
    from1 = fromOrig1.toLowerCase();
    to1 = toOrig1.toLowerCase();
    if (from1 === to1) return "";
    let fromStart1 = 0;
    let fromEnd1 = from1.length;
    for(; fromStart1 < fromEnd1; ++fromStart1){
        if (from1.charCodeAt(fromStart1) !== 92) break;
    }
    for(; fromEnd1 - 1 > fromStart1; --fromEnd1){
        if (from1.charCodeAt(fromEnd1 - 1) !== 92) break;
    }
    const fromLen1 = fromEnd1 - fromStart1;
    let toStart1 = 0;
    let toEnd1 = to1.length;
    for(; toStart1 < toEnd1; ++toStart1){
        if (to1.charCodeAt(toStart1) !== 92) break;
    }
    for(; toEnd1 - 1 > toStart1; --toEnd1){
        if (to1.charCodeAt(toEnd1 - 1) !== 92) break;
    }
    const toLen1 = toEnd1 - toStart1;
    const length1 = fromLen1 < toLen1 ? fromLen1 : toLen1;
    let lastCommonSep1 = -1;
    let i3 = 0;
    for(; i3 <= length1; ++i3){
        if (i3 === length1) {
            if (toLen1 > length1) {
                if (to1.charCodeAt(toStart1 + i3) === 92) {
                    return toOrig1.slice(toStart1 + i3 + 1);
                } else if (i3 === 2) {
                    return toOrig1.slice(toStart1 + i3);
                }
            }
            if (fromLen1 > length1) {
                if (from1.charCodeAt(fromStart1 + i3) === 92) {
                    lastCommonSep1 = i3;
                } else if (i3 === 2) {
                    lastCommonSep1 = 3;
                }
            }
            break;
        }
        const fromCode1 = from1.charCodeAt(fromStart1 + i3);
        const toCode1 = to1.charCodeAt(toStart1 + i3);
        if (fromCode1 !== toCode1) break;
        else if (fromCode1 === 92) lastCommonSep1 = i3;
    }
    if (i3 !== length1 && lastCommonSep1 === -1) {
        return toOrig1;
    }
    let out1 = "";
    if (lastCommonSep1 === -1) lastCommonSep1 = 0;
    for(i3 = fromStart1 + lastCommonSep1 + 1; i3 <= fromEnd1; ++i3){
        if (i3 === fromEnd1 || from1.charCodeAt(i3) === 92) {
            if (out1.length === 0) out1 += "..";
            else out1 += "\\..";
        }
    }
    if (out1.length > 0) {
        return out1 + toOrig1.slice(toStart1 + lastCommonSep1, toEnd1);
    } else {
        toStart1 += lastCommonSep1;
        if (toOrig1.charCodeAt(toStart1) === 92) ++toStart1;
        return toOrig1.slice(toStart1, toEnd1);
    }
}
function toNamespacedPath(path1) {
    if (typeof path1 !== "string") return path1;
    if (path1.length === 0) return "";
    const resolvedPath1 = resolve(path1);
    if (resolvedPath1.length >= 3) {
        if (resolvedPath1.charCodeAt(0) === 92) {
            if (resolvedPath1.charCodeAt(1) === 92) {
                const code1 = resolvedPath1.charCodeAt(2);
                if (code1 !== 63 && code1 !== 46) {
                    return `\\\\?\\UNC\\${resolvedPath1.slice(2)}`;
                }
            }
        } else if (isWindowsDeviceRoot(resolvedPath1.charCodeAt(0))) {
            if (resolvedPath1.charCodeAt(1) === 58 && resolvedPath1.charCodeAt(2) === 92) {
                return `\\\\?\\${resolvedPath1}`;
            }
        }
    }
    return path1;
}
function dirname(path1) {
    assertPath(path1);
    const len1 = path1.length;
    if (len1 === 0) return ".";
    let rootEnd1 = -1;
    let end1 = -1;
    let matchedSlash1 = true;
    let offset1 = 0;
    const code1 = path1.charCodeAt(0);
    if (len1 > 1) {
        if (isPathSeparator(code1)) {
            rootEnd1 = offset1 = 1;
            if (isPathSeparator(path1.charCodeAt(1))) {
                let j1 = 2;
                let last1 = j1;
                for(; j1 < len1; ++j1){
                    if (isPathSeparator(path1.charCodeAt(j1))) break;
                }
                if (j1 < len1 && j1 !== last1) {
                    last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (!isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 === len1) {
                            return path1;
                        }
                        if (j1 !== last1) {
                            rootEnd1 = offset1 = j1 + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code1)) {
            if (path1.charCodeAt(1) === 58) {
                rootEnd1 = offset1 = 2;
                if (len1 > 2) {
                    if (isPathSeparator(path1.charCodeAt(2))) rootEnd1 = offset1 = 3;
                }
            }
        }
    } else if (isPathSeparator(code1)) {
        return path1;
    }
    for(let i3 = len1 - 1; i3 >= offset1; --i3){
        if (isPathSeparator(path1.charCodeAt(i3))) {
            if (!matchedSlash1) {
                end1 = i3;
                break;
            }
        } else {
            matchedSlash1 = false;
        }
    }
    if (end1 === -1) {
        if (rootEnd1 === -1) return ".";
        else end1 = rootEnd1;
    }
    return path1.slice(0, end1);
}
function basename(path1, ext1 = "") {
    if (ext1 !== undefined && typeof ext1 !== "string") {
        throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path1);
    let start1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3;
    if (path1.length >= 2) {
        const drive1 = path1.charCodeAt(0);
        if (isWindowsDeviceRoot(drive1)) {
            if (path1.charCodeAt(1) === 58) start1 = 2;
        }
    }
    if (ext1 !== undefined && ext1.length > 0 && ext1.length <= path1.length) {
        if (ext1.length === path1.length && ext1 === path1) return "";
        let extIdx1 = ext1.length - 1;
        let firstNonSlashEnd1 = -1;
        for(i3 = path1.length - 1; i3 >= start1; --i3){
            const code1 = path1.charCodeAt(i3);
            if (isPathSeparator(code1)) {
                if (!matchedSlash1) {
                    start1 = i3 + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd1 === -1) {
                    matchedSlash1 = false;
                    firstNonSlashEnd1 = i3 + 1;
                }
                if (extIdx1 >= 0) {
                    if (code1 === ext1.charCodeAt(extIdx1)) {
                        if (--extIdx1 === -1) {
                            end1 = i3;
                        }
                    } else {
                        extIdx1 = -1;
                        end1 = firstNonSlashEnd1;
                    }
                }
            }
        }
        if (start1 === end1) end1 = firstNonSlashEnd1;
        else if (end1 === -1) end1 = path1.length;
        return path1.slice(start1, end1);
    } else {
        for(i3 = path1.length - 1; i3 >= start1; --i3){
            if (isPathSeparator(path1.charCodeAt(i3))) {
                if (!matchedSlash1) {
                    start1 = i3 + 1;
                    break;
                }
            } else if (end1 === -1) {
                matchedSlash1 = false;
                end1 = i3 + 1;
            }
        }
        if (end1 === -1) return "";
        return path1.slice(start1, end1);
    }
}
function extname(path1) {
    assertPath(path1);
    let start1 = 0;
    let startDot1 = -1;
    let startPart1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let preDotState1 = 0;
    if (path1.length >= 2 && path1.charCodeAt(1) === 58 && isWindowsDeviceRoot(path1.charCodeAt(0))) {
        start1 = startPart1 = 2;
    }
    for(let i3 = path1.length - 1; i3 >= start1; --i3){
        const code1 = path1.charCodeAt(i3);
        if (isPathSeparator(code1)) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        return "";
    }
    return path1.slice(startDot1, end1);
}
function format(pathObject1) {
    if (pathObject1 === null || typeof pathObject1 !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject1}`);
    }
    return _format("\\", pathObject1);
}
function parse(path1) {
    assertPath(path1);
    const ret1 = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    const len1 = path1.length;
    if (len1 === 0) return ret1;
    let rootEnd1 = 0;
    let code1 = path1.charCodeAt(0);
    if (len1 > 1) {
        if (isPathSeparator(code1)) {
            rootEnd1 = 1;
            if (isPathSeparator(path1.charCodeAt(1))) {
                let j1 = 2;
                let last1 = j1;
                for(; j1 < len1; ++j1){
                    if (isPathSeparator(path1.charCodeAt(j1))) break;
                }
                if (j1 < len1 && j1 !== last1) {
                    last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (!isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 === len1) {
                            rootEnd1 = j1;
                        } else if (j1 !== last1) {
                            rootEnd1 = j1 + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code1)) {
            if (path1.charCodeAt(1) === 58) {
                rootEnd1 = 2;
                if (len1 > 2) {
                    if (isPathSeparator(path1.charCodeAt(2))) {
                        if (len1 === 3) {
                            ret1.root = ret1.dir = path1;
                            return ret1;
                        }
                        rootEnd1 = 3;
                    }
                } else {
                    ret1.root = ret1.dir = path1;
                    return ret1;
                }
            }
        }
    } else if (isPathSeparator(code1)) {
        ret1.root = ret1.dir = path1;
        return ret1;
    }
    if (rootEnd1 > 0) ret1.root = path1.slice(0, rootEnd1);
    let startDot1 = -1;
    let startPart1 = rootEnd1;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3 = path1.length - 1;
    let preDotState1 = 0;
    for(; i3 >= rootEnd1; --i3){
        code1 = path1.charCodeAt(i3);
        if (isPathSeparator(code1)) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        if (end1 !== -1) {
            ret1.base = ret1.name = path1.slice(startPart1, end1);
        }
    } else {
        ret1.name = path1.slice(startPart1, startDot1);
        ret1.base = path1.slice(startPart1, end1);
        ret1.ext = path1.slice(startDot1, end1);
    }
    if (startPart1 > 0 && startPart1 !== rootEnd1) {
        ret1.dir = path1.slice(0, startPart1 - 1);
    } else ret1.dir = ret1.root;
    return ret1;
}
function fromFileUrl(url1) {
    url1 = url1 instanceof URL ? url1 : new URL(url1);
    if (url1.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    let path1 = decodeURIComponent(url1.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
    if (url1.hostname != "") {
        path1 = `\\\\${url1.hostname}${path1}`;
    }
    return path1;
}
function toFileUrl(path1) {
    if (!isAbsolute(path1)) {
        throw new TypeError("Must be an absolute path.");
    }
    const [, hostname1, pathname1] = path1.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/);
    const url1 = new URL("file:///");
    url1.pathname = encodeWhitespace(pathname1.replace(/%/g, "%25"));
    if (hostname1 != null && hostname1 != "localhost") {
        url1.hostname = hostname1;
        if (!url1.hostname) {
            throw new TypeError("Invalid hostname.");
        }
    }
    return url1;
}
const mod = {
    sep: sep,
    delimiter: delimiter,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join,
    relative: relative,
    toNamespacedPath: toNamespacedPath,
    dirname: dirname,
    basename: basename,
    extname: extname,
    format: format,
    parse: parse,
    fromFileUrl: fromFileUrl,
    toFileUrl: toFileUrl
};
const sep = "/";
const delimiter = ":";
function resolve(...pathSegments1) {
    let resolvedPath1 = "";
    let resolvedAbsolute1 = false;
    for(let i3 = pathSegments1.length - 1; i3 >= -1 && !resolvedAbsolute1; i3--){
        let path1;
        if (i3 >= 0) path1 = pathSegments1[i3];
        else {
            const { Deno: Deno1  } = globalThis;
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path1 = Deno1.cwd();
        }
        assertPath(path1);
        if (path1.length === 0) {
            continue;
        }
        resolvedPath1 = `${path1}/${resolvedPath1}`;
        resolvedAbsolute1 = path1.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }
    resolvedPath1 = normalizeString(resolvedPath1, !resolvedAbsolute1, "/", isPosixPathSeparator);
    if (resolvedAbsolute1) {
        if (resolvedPath1.length > 0) return `/${resolvedPath1}`;
        else return "/";
    } else if (resolvedPath1.length > 0) return resolvedPath1;
    else return ".";
}
function normalize(path1) {
    assertPath(path1);
    if (path1.length === 0) return ".";
    const isAbsolute1 = path1.charCodeAt(0) === 47;
    const trailingSeparator1 = path1.charCodeAt(path1.length - 1) === 47;
    path1 = normalizeString(path1, !isAbsolute1, "/", isPosixPathSeparator);
    if (path1.length === 0 && !isAbsolute1) path1 = ".";
    if (path1.length > 0 && trailingSeparator1) path1 += "/";
    if (isAbsolute1) return `/${path1}`;
    return path1;
}
function isAbsolute(path1) {
    assertPath(path1);
    return path1.length > 0 && path1.charCodeAt(0) === 47;
}
function join(...paths1) {
    if (paths1.length === 0) return ".";
    let joined1;
    for(let i3 = 0, len1 = paths1.length; i3 < len1; ++i3){
        const path1 = paths1[i3];
        assertPath(path1);
        if (path1.length > 0) {
            if (!joined1) joined1 = path1;
            else joined1 += `/${path1}`;
        }
    }
    if (!joined1) return ".";
    return normalize(joined1);
}
function relative(from1, to1) {
    assertPath(from1);
    assertPath(to1);
    if (from1 === to1) return "";
    from1 = resolve(from1);
    to1 = resolve(to1);
    if (from1 === to1) return "";
    let fromStart1 = 1;
    const fromEnd1 = from1.length;
    for(; fromStart1 < fromEnd1; ++fromStart1){
        if (from1.charCodeAt(fromStart1) !== 47) break;
    }
    const fromLen1 = fromEnd1 - fromStart1;
    let toStart1 = 1;
    const toEnd1 = to1.length;
    for(; toStart1 < toEnd1; ++toStart1){
        if (to1.charCodeAt(toStart1) !== 47) break;
    }
    const toLen1 = toEnd1 - toStart1;
    const length1 = fromLen1 < toLen1 ? fromLen1 : toLen1;
    let lastCommonSep1 = -1;
    let i3 = 0;
    for(; i3 <= length1; ++i3){
        if (i3 === length1) {
            if (toLen1 > length1) {
                if (to1.charCodeAt(toStart1 + i3) === 47) {
                    return to1.slice(toStart1 + i3 + 1);
                } else if (i3 === 0) {
                    return to1.slice(toStart1 + i3);
                }
            } else if (fromLen1 > length1) {
                if (from1.charCodeAt(fromStart1 + i3) === 47) {
                    lastCommonSep1 = i3;
                } else if (i3 === 0) {
                    lastCommonSep1 = 0;
                }
            }
            break;
        }
        const fromCode1 = from1.charCodeAt(fromStart1 + i3);
        const toCode1 = to1.charCodeAt(toStart1 + i3);
        if (fromCode1 !== toCode1) break;
        else if (fromCode1 === 47) lastCommonSep1 = i3;
    }
    let out1 = "";
    for(i3 = fromStart1 + lastCommonSep1 + 1; i3 <= fromEnd1; ++i3){
        if (i3 === fromEnd1 || from1.charCodeAt(i3) === 47) {
            if (out1.length === 0) out1 += "..";
            else out1 += "/..";
        }
    }
    if (out1.length > 0) return out1 + to1.slice(toStart1 + lastCommonSep1);
    else {
        toStart1 += lastCommonSep1;
        if (to1.charCodeAt(toStart1) === 47) ++toStart1;
        return to1.slice(toStart1);
    }
}
function toNamespacedPath(path1) {
    return path1;
}
function dirname(path1) {
    assertPath(path1);
    if (path1.length === 0) return ".";
    const hasRoot1 = path1.charCodeAt(0) === 47;
    let end1 = -1;
    let matchedSlash1 = true;
    for(let i3 = path1.length - 1; i3 >= 1; --i3){
        if (path1.charCodeAt(i3) === 47) {
            if (!matchedSlash1) {
                end1 = i3;
                break;
            }
        } else {
            matchedSlash1 = false;
        }
    }
    if (end1 === -1) return hasRoot1 ? "/" : ".";
    if (hasRoot1 && end1 === 1) return "//";
    return path1.slice(0, end1);
}
function basename(path1, ext1 = "") {
    if (ext1 !== undefined && typeof ext1 !== "string") {
        throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path1);
    let start1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3;
    if (ext1 !== undefined && ext1.length > 0 && ext1.length <= path1.length) {
        if (ext1.length === path1.length && ext1 === path1) return "";
        let extIdx1 = ext1.length - 1;
        let firstNonSlashEnd1 = -1;
        for(i3 = path1.length - 1; i3 >= 0; --i3){
            const code1 = path1.charCodeAt(i3);
            if (code1 === 47) {
                if (!matchedSlash1) {
                    start1 = i3 + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd1 === -1) {
                    matchedSlash1 = false;
                    firstNonSlashEnd1 = i3 + 1;
                }
                if (extIdx1 >= 0) {
                    if (code1 === ext1.charCodeAt(extIdx1)) {
                        if (--extIdx1 === -1) {
                            end1 = i3;
                        }
                    } else {
                        extIdx1 = -1;
                        end1 = firstNonSlashEnd1;
                    }
                }
            }
        }
        if (start1 === end1) end1 = firstNonSlashEnd1;
        else if (end1 === -1) end1 = path1.length;
        return path1.slice(start1, end1);
    } else {
        for(i3 = path1.length - 1; i3 >= 0; --i3){
            if (path1.charCodeAt(i3) === 47) {
                if (!matchedSlash1) {
                    start1 = i3 + 1;
                    break;
                }
            } else if (end1 === -1) {
                matchedSlash1 = false;
                end1 = i3 + 1;
            }
        }
        if (end1 === -1) return "";
        return path1.slice(start1, end1);
    }
}
function extname(path1) {
    assertPath(path1);
    let startDot1 = -1;
    let startPart1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let preDotState1 = 0;
    for(let i3 = path1.length - 1; i3 >= 0; --i3){
        const code1 = path1.charCodeAt(i3);
        if (code1 === 47) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        return "";
    }
    return path1.slice(startDot1, end1);
}
function format(pathObject1) {
    if (pathObject1 === null || typeof pathObject1 !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject1}`);
    }
    return _format("/", pathObject1);
}
function parse(path1) {
    assertPath(path1);
    const ret1 = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    if (path1.length === 0) return ret1;
    const isAbsolute1 = path1.charCodeAt(0) === 47;
    let start1;
    if (isAbsolute1) {
        ret1.root = "/";
        start1 = 1;
    } else {
        start1 = 0;
    }
    let startDot1 = -1;
    let startPart1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3 = path1.length - 1;
    let preDotState1 = 0;
    for(; i3 >= start1; --i3){
        const code1 = path1.charCodeAt(i3);
        if (code1 === 47) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        if (end1 !== -1) {
            if (startPart1 === 0 && isAbsolute1) {
                ret1.base = ret1.name = path1.slice(1, end1);
            } else {
                ret1.base = ret1.name = path1.slice(startPart1, end1);
            }
        }
    } else {
        if (startPart1 === 0 && isAbsolute1) {
            ret1.name = path1.slice(1, startDot1);
            ret1.base = path1.slice(1, end1);
        } else {
            ret1.name = path1.slice(startPart1, startDot1);
            ret1.base = path1.slice(startPart1, end1);
        }
        ret1.ext = path1.slice(startDot1, end1);
    }
    if (startPart1 > 0) ret1.dir = path1.slice(0, startPart1 - 1);
    else if (isAbsolute1) ret1.dir = "/";
    return ret1;
}
function fromFileUrl(url1) {
    url1 = url1 instanceof URL ? url1 : new URL(url1);
    if (url1.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    return decodeURIComponent(url1.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function toFileUrl(path1) {
    if (!isAbsolute(path1)) {
        throw new TypeError("Must be an absolute path.");
    }
    const url1 = new URL("file:///");
    url1.pathname = encodeWhitespace(path1.replace(/%/g, "%25").replace(/\\/g, "%5C"));
    return url1;
}
const mod = {
    sep: sep,
    delimiter: delimiter,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join,
    relative: relative,
    toNamespacedPath: toNamespacedPath,
    dirname: dirname,
    basename: basename,
    extname: extname,
    format: format,
    parse: parse,
    fromFileUrl: fromFileUrl,
    toFileUrl: toFileUrl
};
const path = isWindows ? mod : mod;
const { join , normalize  } = path;
const path = isWindows ? mod : mod;
const { basename , delimiter , dirname , extname , format , fromFileUrl , isAbsolute , join , normalize , parse , relative , resolve , sep , toFileUrl , toNamespacedPath  } = path;
const osType = (()=>{
    const { Deno: Deno1  } = globalThis;
    if (typeof Deno1?.build?.os === "string") {
        return Deno1.build.os;
    }
    const { navigator: navigator1  } = globalThis;
    if (navigator1?.appVersion?.includes?.("Win") ?? false) {
        return "windows";
    }
    return "linux";
})();
const isWindows = osType === "windows";
const CHAR_FORWARD_SLASH = 47;
function assertPath(path1) {
    if (typeof path1 !== "string") {
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(path1)}`);
    }
}
function isPosixPathSeparator(code1) {
    return code1 === 47;
}
function isPathSeparator(code1) {
    return isPosixPathSeparator(code1) || code1 === 92;
}
function isWindowsDeviceRoot(code1) {
    return code1 >= 97 && code1 <= 122 || code1 >= 65 && code1 <= 90;
}
function normalizeString(path1, allowAboveRoot1, separator1, isPathSeparator1) {
    let res1 = "";
    let lastSegmentLength1 = 0;
    let lastSlash1 = -1;
    let dots1 = 0;
    let code1;
    for(let i3 = 0, len1 = path1.length; i3 <= len1; ++i3){
        if (i3 < len1) code1 = path1.charCodeAt(i3);
        else if (isPathSeparator1(code1)) break;
        else code1 = CHAR_FORWARD_SLASH;
        if (isPathSeparator1(code1)) {
            if (lastSlash1 === i3 - 1 || dots1 === 1) {} else if (lastSlash1 !== i3 - 1 && dots1 === 2) {
                if (res1.length < 2 || lastSegmentLength1 !== 2 || res1.charCodeAt(res1.length - 1) !== 46 || res1.charCodeAt(res1.length - 2) !== 46) {
                    if (res1.length > 2) {
                        const lastSlashIndex1 = res1.lastIndexOf(separator1);
                        if (lastSlashIndex1 === -1) {
                            res1 = "";
                            lastSegmentLength1 = 0;
                        } else {
                            res1 = res1.slice(0, lastSlashIndex1);
                            lastSegmentLength1 = res1.length - 1 - res1.lastIndexOf(separator1);
                        }
                        lastSlash1 = i3;
                        dots1 = 0;
                        continue;
                    } else if (res1.length === 2 || res1.length === 1) {
                        res1 = "";
                        lastSegmentLength1 = 0;
                        lastSlash1 = i3;
                        dots1 = 0;
                        continue;
                    }
                }
                if (allowAboveRoot1) {
                    if (res1.length > 0) res1 += `${separator1}..`;
                    else res1 = "..";
                    lastSegmentLength1 = 2;
                }
            } else {
                if (res1.length > 0) res1 += separator1 + path1.slice(lastSlash1 + 1, i3);
                else res1 = path1.slice(lastSlash1 + 1, i3);
                lastSegmentLength1 = i3 - lastSlash1 - 1;
            }
            lastSlash1 = i3;
            dots1 = 0;
        } else if (code1 === 46 && dots1 !== -1) {
            ++dots1;
        } else {
            dots1 = -1;
        }
    }
    return res1;
}
function _format(sep1, pathObject1) {
    const dir1 = pathObject1.dir || pathObject1.root;
    const base1 = pathObject1.base || (pathObject1.name || "") + (pathObject1.ext || "");
    if (!dir1) return base1;
    if (dir1 === pathObject1.root) return dir1 + base1;
    return dir1 + sep1 + base1;
}
const WHITESPACE_ENCODINGS = {
    "\u0009": "%09",
    "\u000A": "%0A",
    "\u000B": "%0B",
    "\u000C": "%0C",
    "\u000D": "%0D",
    "\u0020": "%20"
};
function encodeWhitespace(string2) {
    return string2.replaceAll(/[\s]/g, (c3)=>{
        return WHITESPACE_ENCODINGS[c3] ?? c3;
    });
}
class DenoStdInternalError extends Error {
    constructor(message1){
        super(message1);
        this.name = "DenoStdInternalError";
    }
}
function assert(expr1, msg1 = "") {
    if (!expr1) {
        throw new DenoStdInternalError(msg1);
    }
}
const sep = "\\";
const delimiter = ";";
function resolve(...pathSegments1) {
    let resolvedDevice1 = "";
    let resolvedTail1 = "";
    let resolvedAbsolute1 = false;
    for(let i3 = pathSegments1.length - 1; i3 >= -1; i3--){
        let path1;
        const { Deno: Deno1  } = globalThis;
        if (i3 >= 0) {
            path1 = pathSegments1[i3];
        } else if (!resolvedDevice1) {
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a drive-letter-less path without a CWD.");
            }
            path1 = Deno1.cwd();
        } else {
            if (typeof Deno1?.env?.get !== "function" || typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path1 = Deno1.cwd();
            if (path1 === undefined || path1.slice(0, 3).toLowerCase() !== `${resolvedDevice1.toLowerCase()}\\`) {
                path1 = `${resolvedDevice1}\\`;
            }
        }
        assertPath(path1);
        const len1 = path1.length;
        if (len1 === 0) continue;
        let rootEnd1 = 0;
        let device1 = "";
        let isAbsolute1 = false;
        const code1 = path1.charCodeAt(0);
        if (len1 > 1) {
            if (isPathSeparator(code1)) {
                isAbsolute1 = true;
                if (isPathSeparator(path1.charCodeAt(1))) {
                    let j1 = 2;
                    let last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        const firstPart1 = path1.slice(last1, j1);
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (!isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 < len1 && j1 !== last1) {
                            last1 = j1;
                            for(; j1 < len1; ++j1){
                                if (isPathSeparator(path1.charCodeAt(j1))) break;
                            }
                            if (j1 === len1) {
                                device1 = `\\\\${firstPart1}\\${path1.slice(last1)}`;
                                rootEnd1 = j1;
                            } else if (j1 !== last1) {
                                device1 = `\\\\${firstPart1}\\${path1.slice(last1, j1)}`;
                                rootEnd1 = j1;
                            }
                        }
                    }
                } else {
                    rootEnd1 = 1;
                }
            } else if (isWindowsDeviceRoot(code1)) {
                if (path1.charCodeAt(1) === 58) {
                    device1 = path1.slice(0, 2);
                    rootEnd1 = 2;
                    if (len1 > 2) {
                        if (isPathSeparator(path1.charCodeAt(2))) {
                            isAbsolute1 = true;
                            rootEnd1 = 3;
                        }
                    }
                }
            }
        } else if (isPathSeparator(code1)) {
            rootEnd1 = 1;
            isAbsolute1 = true;
        }
        if (device1.length > 0 && resolvedDevice1.length > 0 && device1.toLowerCase() !== resolvedDevice1.toLowerCase()) {
            continue;
        }
        if (resolvedDevice1.length === 0 && device1.length > 0) {
            resolvedDevice1 = device1;
        }
        if (!resolvedAbsolute1) {
            resolvedTail1 = `${path1.slice(rootEnd1)}\\${resolvedTail1}`;
            resolvedAbsolute1 = isAbsolute1;
        }
        if (resolvedAbsolute1 && resolvedDevice1.length > 0) break;
    }
    resolvedTail1 = normalizeString(resolvedTail1, !resolvedAbsolute1, "\\", isPathSeparator);
    return resolvedDevice1 + (resolvedAbsolute1 ? "\\" : "") + resolvedTail1 || ".";
}
function normalize(path1) {
    assertPath(path1);
    const len1 = path1.length;
    if (len1 === 0) return ".";
    let rootEnd1 = 0;
    let device1;
    let isAbsolute1 = false;
    const code1 = path1.charCodeAt(0);
    if (len1 > 1) {
        if (isPathSeparator(code1)) {
            isAbsolute1 = true;
            if (isPathSeparator(path1.charCodeAt(1))) {
                let j1 = 2;
                let last1 = j1;
                for(; j1 < len1; ++j1){
                    if (isPathSeparator(path1.charCodeAt(j1))) break;
                }
                if (j1 < len1 && j1 !== last1) {
                    const firstPart1 = path1.slice(last1, j1);
                    last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (!isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 === len1) {
                            return `\\\\${firstPart1}\\${path1.slice(last1)}\\`;
                        } else if (j1 !== last1) {
                            device1 = `\\\\${firstPart1}\\${path1.slice(last1, j1)}`;
                            rootEnd1 = j1;
                        }
                    }
                }
            } else {
                rootEnd1 = 1;
            }
        } else if (isWindowsDeviceRoot(code1)) {
            if (path1.charCodeAt(1) === 58) {
                device1 = path1.slice(0, 2);
                rootEnd1 = 2;
                if (len1 > 2) {
                    if (isPathSeparator(path1.charCodeAt(2))) {
                        isAbsolute1 = true;
                        rootEnd1 = 3;
                    }
                }
            }
        }
    } else if (isPathSeparator(code1)) {
        return "\\";
    }
    let tail1;
    if (rootEnd1 < len1) {
        tail1 = normalizeString(path1.slice(rootEnd1), !isAbsolute1, "\\", isPathSeparator);
    } else {
        tail1 = "";
    }
    if (tail1.length === 0 && !isAbsolute1) tail1 = ".";
    if (tail1.length > 0 && isPathSeparator(path1.charCodeAt(len1 - 1))) {
        tail1 += "\\";
    }
    if (device1 === undefined) {
        if (isAbsolute1) {
            if (tail1.length > 0) return `\\${tail1}`;
            else return "\\";
        } else if (tail1.length > 0) {
            return tail1;
        } else {
            return "";
        }
    } else if (isAbsolute1) {
        if (tail1.length > 0) return `${device1}\\${tail1}`;
        else return `${device1}\\`;
    } else if (tail1.length > 0) {
        return device1 + tail1;
    } else {
        return device1;
    }
}
function isAbsolute(path1) {
    assertPath(path1);
    const len1 = path1.length;
    if (len1 === 0) return false;
    const code1 = path1.charCodeAt(0);
    if (isPathSeparator(code1)) {
        return true;
    } else if (isWindowsDeviceRoot(code1)) {
        if (len1 > 2 && path1.charCodeAt(1) === 58) {
            if (isPathSeparator(path1.charCodeAt(2))) return true;
        }
    }
    return false;
}
function join(...paths1) {
    const pathsCount1 = paths1.length;
    if (pathsCount1 === 0) return ".";
    let joined1;
    let firstPart1 = null;
    for(let i3 = 0; i3 < pathsCount1; ++i3){
        const path1 = paths1[i3];
        assertPath(path1);
        if (path1.length > 0) {
            if (joined1 === undefined) joined1 = firstPart1 = path1;
            else joined1 += `\\${path1}`;
        }
    }
    if (joined1 === undefined) return ".";
    let needsReplace1 = true;
    let slashCount1 = 0;
    assert(firstPart1 != null);
    if (isPathSeparator(firstPart1.charCodeAt(0))) {
        ++slashCount1;
        const firstLen1 = firstPart1.length;
        if (firstLen1 > 1) {
            if (isPathSeparator(firstPart1.charCodeAt(1))) {
                ++slashCount1;
                if (firstLen1 > 2) {
                    if (isPathSeparator(firstPart1.charCodeAt(2))) ++slashCount1;
                    else {
                        needsReplace1 = false;
                    }
                }
            }
        }
    }
    if (needsReplace1) {
        for(; slashCount1 < joined1.length; ++slashCount1){
            if (!isPathSeparator(joined1.charCodeAt(slashCount1))) break;
        }
        if (slashCount1 >= 2) joined1 = `\\${joined1.slice(slashCount1)}`;
    }
    return normalize(joined1);
}
function relative(from1, to1) {
    assertPath(from1);
    assertPath(to1);
    if (from1 === to1) return "";
    const fromOrig1 = resolve(from1);
    const toOrig1 = resolve(to1);
    if (fromOrig1 === toOrig1) return "";
    from1 = fromOrig1.toLowerCase();
    to1 = toOrig1.toLowerCase();
    if (from1 === to1) return "";
    let fromStart1 = 0;
    let fromEnd1 = from1.length;
    for(; fromStart1 < fromEnd1; ++fromStart1){
        if (from1.charCodeAt(fromStart1) !== 92) break;
    }
    for(; fromEnd1 - 1 > fromStart1; --fromEnd1){
        if (from1.charCodeAt(fromEnd1 - 1) !== 92) break;
    }
    const fromLen1 = fromEnd1 - fromStart1;
    let toStart1 = 0;
    let toEnd1 = to1.length;
    for(; toStart1 < toEnd1; ++toStart1){
        if (to1.charCodeAt(toStart1) !== 92) break;
    }
    for(; toEnd1 - 1 > toStart1; --toEnd1){
        if (to1.charCodeAt(toEnd1 - 1) !== 92) break;
    }
    const toLen1 = toEnd1 - toStart1;
    const length1 = fromLen1 < toLen1 ? fromLen1 : toLen1;
    let lastCommonSep1 = -1;
    let i3 = 0;
    for(; i3 <= length1; ++i3){
        if (i3 === length1) {
            if (toLen1 > length1) {
                if (to1.charCodeAt(toStart1 + i3) === 92) {
                    return toOrig1.slice(toStart1 + i3 + 1);
                } else if (i3 === 2) {
                    return toOrig1.slice(toStart1 + i3);
                }
            }
            if (fromLen1 > length1) {
                if (from1.charCodeAt(fromStart1 + i3) === 92) {
                    lastCommonSep1 = i3;
                } else if (i3 === 2) {
                    lastCommonSep1 = 3;
                }
            }
            break;
        }
        const fromCode1 = from1.charCodeAt(fromStart1 + i3);
        const toCode1 = to1.charCodeAt(toStart1 + i3);
        if (fromCode1 !== toCode1) break;
        else if (fromCode1 === 92) lastCommonSep1 = i3;
    }
    if (i3 !== length1 && lastCommonSep1 === -1) {
        return toOrig1;
    }
    let out1 = "";
    if (lastCommonSep1 === -1) lastCommonSep1 = 0;
    for(i3 = fromStart1 + lastCommonSep1 + 1; i3 <= fromEnd1; ++i3){
        if (i3 === fromEnd1 || from1.charCodeAt(i3) === 92) {
            if (out1.length === 0) out1 += "..";
            else out1 += "\\..";
        }
    }
    if (out1.length > 0) {
        return out1 + toOrig1.slice(toStart1 + lastCommonSep1, toEnd1);
    } else {
        toStart1 += lastCommonSep1;
        if (toOrig1.charCodeAt(toStart1) === 92) ++toStart1;
        return toOrig1.slice(toStart1, toEnd1);
    }
}
function toNamespacedPath(path1) {
    if (typeof path1 !== "string") return path1;
    if (path1.length === 0) return "";
    const resolvedPath1 = resolve(path1);
    if (resolvedPath1.length >= 3) {
        if (resolvedPath1.charCodeAt(0) === 92) {
            if (resolvedPath1.charCodeAt(1) === 92) {
                const code1 = resolvedPath1.charCodeAt(2);
                if (code1 !== 63 && code1 !== 46) {
                    return `\\\\?\\UNC\\${resolvedPath1.slice(2)}`;
                }
            }
        } else if (isWindowsDeviceRoot(resolvedPath1.charCodeAt(0))) {
            if (resolvedPath1.charCodeAt(1) === 58 && resolvedPath1.charCodeAt(2) === 92) {
                return `\\\\?\\${resolvedPath1}`;
            }
        }
    }
    return path1;
}
function dirname(path1) {
    assertPath(path1);
    const len1 = path1.length;
    if (len1 === 0) return ".";
    let rootEnd1 = -1;
    let end1 = -1;
    let matchedSlash1 = true;
    let offset1 = 0;
    const code1 = path1.charCodeAt(0);
    if (len1 > 1) {
        if (isPathSeparator(code1)) {
            rootEnd1 = offset1 = 1;
            if (isPathSeparator(path1.charCodeAt(1))) {
                let j1 = 2;
                let last1 = j1;
                for(; j1 < len1; ++j1){
                    if (isPathSeparator(path1.charCodeAt(j1))) break;
                }
                if (j1 < len1 && j1 !== last1) {
                    last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (!isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 === len1) {
                            return path1;
                        }
                        if (j1 !== last1) {
                            rootEnd1 = offset1 = j1 + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code1)) {
            if (path1.charCodeAt(1) === 58) {
                rootEnd1 = offset1 = 2;
                if (len1 > 2) {
                    if (isPathSeparator(path1.charCodeAt(2))) rootEnd1 = offset1 = 3;
                }
            }
        }
    } else if (isPathSeparator(code1)) {
        return path1;
    }
    for(let i3 = len1 - 1; i3 >= offset1; --i3){
        if (isPathSeparator(path1.charCodeAt(i3))) {
            if (!matchedSlash1) {
                end1 = i3;
                break;
            }
        } else {
            matchedSlash1 = false;
        }
    }
    if (end1 === -1) {
        if (rootEnd1 === -1) return ".";
        else end1 = rootEnd1;
    }
    return path1.slice(0, end1);
}
function basename(path1, ext1 = "") {
    if (ext1 !== undefined && typeof ext1 !== "string") {
        throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path1);
    let start1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3;
    if (path1.length >= 2) {
        const drive1 = path1.charCodeAt(0);
        if (isWindowsDeviceRoot(drive1)) {
            if (path1.charCodeAt(1) === 58) start1 = 2;
        }
    }
    if (ext1 !== undefined && ext1.length > 0 && ext1.length <= path1.length) {
        if (ext1.length === path1.length && ext1 === path1) return "";
        let extIdx1 = ext1.length - 1;
        let firstNonSlashEnd1 = -1;
        for(i3 = path1.length - 1; i3 >= start1; --i3){
            const code1 = path1.charCodeAt(i3);
            if (isPathSeparator(code1)) {
                if (!matchedSlash1) {
                    start1 = i3 + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd1 === -1) {
                    matchedSlash1 = false;
                    firstNonSlashEnd1 = i3 + 1;
                }
                if (extIdx1 >= 0) {
                    if (code1 === ext1.charCodeAt(extIdx1)) {
                        if (--extIdx1 === -1) {
                            end1 = i3;
                        }
                    } else {
                        extIdx1 = -1;
                        end1 = firstNonSlashEnd1;
                    }
                }
            }
        }
        if (start1 === end1) end1 = firstNonSlashEnd1;
        else if (end1 === -1) end1 = path1.length;
        return path1.slice(start1, end1);
    } else {
        for(i3 = path1.length - 1; i3 >= start1; --i3){
            if (isPathSeparator(path1.charCodeAt(i3))) {
                if (!matchedSlash1) {
                    start1 = i3 + 1;
                    break;
                }
            } else if (end1 === -1) {
                matchedSlash1 = false;
                end1 = i3 + 1;
            }
        }
        if (end1 === -1) return "";
        return path1.slice(start1, end1);
    }
}
function extname(path1) {
    assertPath(path1);
    let start1 = 0;
    let startDot1 = -1;
    let startPart1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let preDotState1 = 0;
    if (path1.length >= 2 && path1.charCodeAt(1) === 58 && isWindowsDeviceRoot(path1.charCodeAt(0))) {
        start1 = startPart1 = 2;
    }
    for(let i3 = path1.length - 1; i3 >= start1; --i3){
        const code1 = path1.charCodeAt(i3);
        if (isPathSeparator(code1)) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        return "";
    }
    return path1.slice(startDot1, end1);
}
function format(pathObject1) {
    if (pathObject1 === null || typeof pathObject1 !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject1}`);
    }
    return _format("\\", pathObject1);
}
function parse(path1) {
    assertPath(path1);
    const ret1 = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    const len1 = path1.length;
    if (len1 === 0) return ret1;
    let rootEnd1 = 0;
    let code1 = path1.charCodeAt(0);
    if (len1 > 1) {
        if (isPathSeparator(code1)) {
            rootEnd1 = 1;
            if (isPathSeparator(path1.charCodeAt(1))) {
                let j1 = 2;
                let last1 = j1;
                for(; j1 < len1; ++j1){
                    if (isPathSeparator(path1.charCodeAt(j1))) break;
                }
                if (j1 < len1 && j1 !== last1) {
                    last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (!isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 === len1) {
                            rootEnd1 = j1;
                        } else if (j1 !== last1) {
                            rootEnd1 = j1 + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code1)) {
            if (path1.charCodeAt(1) === 58) {
                rootEnd1 = 2;
                if (len1 > 2) {
                    if (isPathSeparator(path1.charCodeAt(2))) {
                        if (len1 === 3) {
                            ret1.root = ret1.dir = path1;
                            return ret1;
                        }
                        rootEnd1 = 3;
                    }
                } else {
                    ret1.root = ret1.dir = path1;
                    return ret1;
                }
            }
        }
    } else if (isPathSeparator(code1)) {
        ret1.root = ret1.dir = path1;
        return ret1;
    }
    if (rootEnd1 > 0) ret1.root = path1.slice(0, rootEnd1);
    let startDot1 = -1;
    let startPart1 = rootEnd1;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3 = path1.length - 1;
    let preDotState1 = 0;
    for(; i3 >= rootEnd1; --i3){
        code1 = path1.charCodeAt(i3);
        if (isPathSeparator(code1)) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        if (end1 !== -1) {
            ret1.base = ret1.name = path1.slice(startPart1, end1);
        }
    } else {
        ret1.name = path1.slice(startPart1, startDot1);
        ret1.base = path1.slice(startPart1, end1);
        ret1.ext = path1.slice(startDot1, end1);
    }
    if (startPart1 > 0 && startPart1 !== rootEnd1) {
        ret1.dir = path1.slice(0, startPart1 - 1);
    } else ret1.dir = ret1.root;
    return ret1;
}
function fromFileUrl(url1) {
    url1 = url1 instanceof URL ? url1 : new URL(url1);
    if (url1.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    let path1 = decodeURIComponent(url1.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
    if (url1.hostname != "") {
        path1 = `\\\\${url1.hostname}${path1}`;
    }
    return path1;
}
function toFileUrl(path1) {
    if (!isAbsolute(path1)) {
        throw new TypeError("Must be an absolute path.");
    }
    const [, hostname1, pathname1] = path1.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/);
    const url1 = new URL("file:///");
    url1.pathname = encodeWhitespace(pathname1.replace(/%/g, "%25"));
    if (hostname1 != null && hostname1 != "localhost") {
        url1.hostname = hostname1;
        if (!url1.hostname) {
            throw new TypeError("Invalid hostname.");
        }
    }
    return url1;
}
const mod = {
    sep: sep,
    delimiter: delimiter,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join,
    relative: relative,
    toNamespacedPath: toNamespacedPath,
    dirname: dirname,
    basename: basename,
    extname: extname,
    format: format,
    parse: parse,
    fromFileUrl: fromFileUrl,
    toFileUrl: toFileUrl
};
const sep = "/";
const delimiter = ":";
function resolve(...pathSegments1) {
    let resolvedPath1 = "";
    let resolvedAbsolute1 = false;
    for(let i3 = pathSegments1.length - 1; i3 >= -1 && !resolvedAbsolute1; i3--){
        let path1;
        if (i3 >= 0) path1 = pathSegments1[i3];
        else {
            const { Deno: Deno1  } = globalThis;
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path1 = Deno1.cwd();
        }
        assertPath(path1);
        if (path1.length === 0) {
            continue;
        }
        resolvedPath1 = `${path1}/${resolvedPath1}`;
        resolvedAbsolute1 = path1.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }
    resolvedPath1 = normalizeString(resolvedPath1, !resolvedAbsolute1, "/", isPosixPathSeparator);
    if (resolvedAbsolute1) {
        if (resolvedPath1.length > 0) return `/${resolvedPath1}`;
        else return "/";
    } else if (resolvedPath1.length > 0) return resolvedPath1;
    else return ".";
}
function normalize(path1) {
    assertPath(path1);
    if (path1.length === 0) return ".";
    const isAbsolute1 = path1.charCodeAt(0) === 47;
    const trailingSeparator1 = path1.charCodeAt(path1.length - 1) === 47;
    path1 = normalizeString(path1, !isAbsolute1, "/", isPosixPathSeparator);
    if (path1.length === 0 && !isAbsolute1) path1 = ".";
    if (path1.length > 0 && trailingSeparator1) path1 += "/";
    if (isAbsolute1) return `/${path1}`;
    return path1;
}
function isAbsolute(path1) {
    assertPath(path1);
    return path1.length > 0 && path1.charCodeAt(0) === 47;
}
function join(...paths1) {
    if (paths1.length === 0) return ".";
    let joined1;
    for(let i3 = 0, len1 = paths1.length; i3 < len1; ++i3){
        const path1 = paths1[i3];
        assertPath(path1);
        if (path1.length > 0) {
            if (!joined1) joined1 = path1;
            else joined1 += `/${path1}`;
        }
    }
    if (!joined1) return ".";
    return normalize(joined1);
}
function relative(from1, to1) {
    assertPath(from1);
    assertPath(to1);
    if (from1 === to1) return "";
    from1 = resolve(from1);
    to1 = resolve(to1);
    if (from1 === to1) return "";
    let fromStart1 = 1;
    const fromEnd1 = from1.length;
    for(; fromStart1 < fromEnd1; ++fromStart1){
        if (from1.charCodeAt(fromStart1) !== 47) break;
    }
    const fromLen1 = fromEnd1 - fromStart1;
    let toStart1 = 1;
    const toEnd1 = to1.length;
    for(; toStart1 < toEnd1; ++toStart1){
        if (to1.charCodeAt(toStart1) !== 47) break;
    }
    const toLen1 = toEnd1 - toStart1;
    const length1 = fromLen1 < toLen1 ? fromLen1 : toLen1;
    let lastCommonSep1 = -1;
    let i3 = 0;
    for(; i3 <= length1; ++i3){
        if (i3 === length1) {
            if (toLen1 > length1) {
                if (to1.charCodeAt(toStart1 + i3) === 47) {
                    return to1.slice(toStart1 + i3 + 1);
                } else if (i3 === 0) {
                    return to1.slice(toStart1 + i3);
                }
            } else if (fromLen1 > length1) {
                if (from1.charCodeAt(fromStart1 + i3) === 47) {
                    lastCommonSep1 = i3;
                } else if (i3 === 0) {
                    lastCommonSep1 = 0;
                }
            }
            break;
        }
        const fromCode1 = from1.charCodeAt(fromStart1 + i3);
        const toCode1 = to1.charCodeAt(toStart1 + i3);
        if (fromCode1 !== toCode1) break;
        else if (fromCode1 === 47) lastCommonSep1 = i3;
    }
    let out1 = "";
    for(i3 = fromStart1 + lastCommonSep1 + 1; i3 <= fromEnd1; ++i3){
        if (i3 === fromEnd1 || from1.charCodeAt(i3) === 47) {
            if (out1.length === 0) out1 += "..";
            else out1 += "/..";
        }
    }
    if (out1.length > 0) return out1 + to1.slice(toStart1 + lastCommonSep1);
    else {
        toStart1 += lastCommonSep1;
        if (to1.charCodeAt(toStart1) === 47) ++toStart1;
        return to1.slice(toStart1);
    }
}
function toNamespacedPath(path1) {
    return path1;
}
function dirname(path1) {
    assertPath(path1);
    if (path1.length === 0) return ".";
    const hasRoot1 = path1.charCodeAt(0) === 47;
    let end1 = -1;
    let matchedSlash1 = true;
    for(let i3 = path1.length - 1; i3 >= 1; --i3){
        if (path1.charCodeAt(i3) === 47) {
            if (!matchedSlash1) {
                end1 = i3;
                break;
            }
        } else {
            matchedSlash1 = false;
        }
    }
    if (end1 === -1) return hasRoot1 ? "/" : ".";
    if (hasRoot1 && end1 === 1) return "//";
    return path1.slice(0, end1);
}
function basename(path1, ext1 = "") {
    if (ext1 !== undefined && typeof ext1 !== "string") {
        throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path1);
    let start1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3;
    if (ext1 !== undefined && ext1.length > 0 && ext1.length <= path1.length) {
        if (ext1.length === path1.length && ext1 === path1) return "";
        let extIdx1 = ext1.length - 1;
        let firstNonSlashEnd1 = -1;
        for(i3 = path1.length - 1; i3 >= 0; --i3){
            const code1 = path1.charCodeAt(i3);
            if (code1 === 47) {
                if (!matchedSlash1) {
                    start1 = i3 + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd1 === -1) {
                    matchedSlash1 = false;
                    firstNonSlashEnd1 = i3 + 1;
                }
                if (extIdx1 >= 0) {
                    if (code1 === ext1.charCodeAt(extIdx1)) {
                        if (--extIdx1 === -1) {
                            end1 = i3;
                        }
                    } else {
                        extIdx1 = -1;
                        end1 = firstNonSlashEnd1;
                    }
                }
            }
        }
        if (start1 === end1) end1 = firstNonSlashEnd1;
        else if (end1 === -1) end1 = path1.length;
        return path1.slice(start1, end1);
    } else {
        for(i3 = path1.length - 1; i3 >= 0; --i3){
            if (path1.charCodeAt(i3) === 47) {
                if (!matchedSlash1) {
                    start1 = i3 + 1;
                    break;
                }
            } else if (end1 === -1) {
                matchedSlash1 = false;
                end1 = i3 + 1;
            }
        }
        if (end1 === -1) return "";
        return path1.slice(start1, end1);
    }
}
function extname(path1) {
    assertPath(path1);
    let startDot1 = -1;
    let startPart1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let preDotState1 = 0;
    for(let i3 = path1.length - 1; i3 >= 0; --i3){
        const code1 = path1.charCodeAt(i3);
        if (code1 === 47) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        return "";
    }
    return path1.slice(startDot1, end1);
}
function format(pathObject1) {
    if (pathObject1 === null || typeof pathObject1 !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject1}`);
    }
    return _format("/", pathObject1);
}
function parse(path1) {
    assertPath(path1);
    const ret1 = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    if (path1.length === 0) return ret1;
    const isAbsolute1 = path1.charCodeAt(0) === 47;
    let start1;
    if (isAbsolute1) {
        ret1.root = "/";
        start1 = 1;
    } else {
        start1 = 0;
    }
    let startDot1 = -1;
    let startPart1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3 = path1.length - 1;
    let preDotState1 = 0;
    for(; i3 >= start1; --i3){
        const code1 = path1.charCodeAt(i3);
        if (code1 === 47) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        if (end1 !== -1) {
            if (startPart1 === 0 && isAbsolute1) {
                ret1.base = ret1.name = path1.slice(1, end1);
            } else {
                ret1.base = ret1.name = path1.slice(startPart1, end1);
            }
        }
    } else {
        if (startPart1 === 0 && isAbsolute1) {
            ret1.name = path1.slice(1, startDot1);
            ret1.base = path1.slice(1, end1);
        } else {
            ret1.name = path1.slice(startPart1, startDot1);
            ret1.base = path1.slice(startPart1, end1);
        }
        ret1.ext = path1.slice(startDot1, end1);
    }
    if (startPart1 > 0) ret1.dir = path1.slice(0, startPart1 - 1);
    else if (isAbsolute1) ret1.dir = "/";
    return ret1;
}
function fromFileUrl(url1) {
    url1 = url1 instanceof URL ? url1 : new URL(url1);
    if (url1.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    return decodeURIComponent(url1.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function toFileUrl(path1) {
    if (!isAbsolute(path1)) {
        throw new TypeError("Must be an absolute path.");
    }
    const url1 = new URL("file:///");
    url1.pathname = encodeWhitespace(path1.replace(/%/g, "%25").replace(/\\/g, "%5C"));
    return url1;
}
const mod = {
    sep: sep,
    delimiter: delimiter,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join,
    relative: relative,
    toNamespacedPath: toNamespacedPath,
    dirname: dirname,
    basename: basename,
    extname: extname,
    format: format,
    parse: parse,
    fromFileUrl: fromFileUrl,
    toFileUrl: toFileUrl
};
const path = isWindows ? mod : mod;
const { join , normalize  } = path;
const path = isWindows ? mod : mod;
const { basename , delimiter , dirname , extname , format , fromFileUrl , isAbsolute , join , normalize , parse , relative , resolve , sep , toFileUrl , toNamespacedPath  } = path;
function isSubdir(src1, dest1, sep1 = sep) {
    if (src1 === dest1) {
        return false;
    }
    const srcArray1 = src1.split(sep1);
    const destArray1 = dest1.split(sep1);
    return srcArray1.every((current1, i3)=>destArray1[i3] === current1);
}
function getFileInfoType(fileInfo1) {
    return fileInfo1.isFile ? "file" : fileInfo1.isDirectory ? "dir" : fileInfo1.isSymlink ? "symlink" : undefined;
}
async function ensureDir(dir1) {
    try {
        const fileInfo1 = await Deno.lstat(dir1);
        if (!fileInfo1.isDirectory) {
            throw new Error(`Ensure path exists, expected 'dir', got '${getFileInfoType(fileInfo1)}'`);
        }
    } catch (err1) {
        if (err1 instanceof Deno.errors.NotFound) {
            await Deno.mkdir(dir1, {
                recursive: true
            });
            return;
        }
        throw err1;
    }
}
async function exists(filePath1) {
    try {
        await Deno.lstat(filePath1);
        return true;
    } catch (err1) {
        if (err1 instanceof Deno.errors.NotFound) {
            return false;
        }
        throw err1;
    }
}
function existsSync(filePath1) {
    try {
        Deno.lstatSync(filePath1);
        return true;
    } catch (err1) {
        if (err1 instanceof Deno.errors.NotFound) {
            return false;
        }
        throw err1;
    }
}
async function move(src1, dest1, { overwrite: overwrite1 = false  } = {}) {
    const srcStat1 = await Deno.stat(src1);
    if (srcStat1.isDirectory && isSubdir(src1, dest1)) {
        throw new Error(`Cannot move '${src1}' to a subdirectory of itself, '${dest1}'.`);
    }
    if (overwrite1) {
        if (await exists(dest1)) {
            await Deno.remove(dest1, {
                recursive: true
            });
        }
    } else {
        if (await exists(dest1)) {
            throw new Error("dest already exists.");
        }
    }
    await Deno.rename(src1, dest1);
    return;
}
function moveSync(src1, dest1, { overwrite: overwrite1 = false  } = {}) {
    const srcStat1 = Deno.statSync(src1);
    if (srcStat1.isDirectory && isSubdir(src1, dest1)) {
        throw new Error(`Cannot move '${src1}' to a subdirectory of itself, '${dest1}'.`);
    }
    if (overwrite1) {
        if (existsSync(dest1)) {
            Deno.removeSync(dest1, {
                recursive: true
            });
        }
    } else {
        if (existsSync(dest1)) {
            throw new Error("dest already exists.");
        }
    }
    Deno.renameSync(src1, dest1);
}
function utime(...args1) {
    if (typeof Deno.utime == "function") {
        return Deno.utime(...args1);
    } else {
        return Promise.reject(new TypeError("Requires --unstable"));
    }
}
async function ensureValidCopy(src1, dest1, options1) {
    let destStat1;
    try {
        destStat1 = await Deno.lstat(dest1);
    } catch (err1) {
        if (err1 instanceof Deno.errors.NotFound) {
            return;
        }
        throw err1;
    }
    if (options1.isFolder && !destStat1.isDirectory) {
        throw new Error(`Cannot overwrite non-directory '${dest1}' with directory '${src1}'.`);
    }
    if (!options1.overwrite) {
        throw new Error(`'${dest1}' already exists.`);
    }
    return destStat1;
}
async function copyFile(src1, dest1, options1) {
    await ensureValidCopy(src1, dest1, options1);
    await Deno.copyFile(src1, dest1);
    if (options1.preserveTimestamps) {
        const statInfo1 = await Deno.stat(src1);
        assert(statInfo1.atime instanceof Date, `statInfo.atime is unavailable`);
        assert(statInfo1.mtime instanceof Date, `statInfo.mtime is unavailable`);
        await utime(dest1, statInfo1.atime, statInfo1.mtime);
    }
}
async function copySymLink(src1, dest1, options1) {
    await ensureValidCopy(src1, dest1, options1);
    const originSrcFilePath1 = await Deno.readLink(src1);
    const type1 = getFileInfoType(await Deno.lstat(src1));
    if (isWindows) {
        await Deno.symlink(originSrcFilePath1, dest1, {
            type: type1 === "dir" ? "dir" : "file"
        });
    } else {
        await Deno.symlink(originSrcFilePath1, dest1);
    }
    if (options1.preserveTimestamps) {
        const statInfo1 = await Deno.lstat(src1);
        assert(statInfo1.atime instanceof Date, `statInfo.atime is unavailable`);
        assert(statInfo1.mtime instanceof Date, `statInfo.mtime is unavailable`);
        await utime(dest1, statInfo1.atime, statInfo1.mtime);
    }
}
async function copyDir(src1, dest1, options1) {
    const destStat1 = await ensureValidCopy(src1, dest1, {
        ...options1,
        isFolder: true
    });
    if (!destStat1) {
        await ensureDir(dest1);
    }
    if (options1.preserveTimestamps) {
        const srcStatInfo1 = await Deno.stat(src1);
        assert(srcStatInfo1.atime instanceof Date, `statInfo.atime is unavailable`);
        assert(srcStatInfo1.mtime instanceof Date, `statInfo.mtime is unavailable`);
        await utime(dest1, srcStatInfo1.atime, srcStatInfo1.mtime);
    }
    for await (const entry1 of Deno.readDir(src1)){
        const srcPath1 = join(src1, entry1.name);
        const destPath1 = join(dest1, basename(srcPath1));
        if (entry1.isSymlink) {
            await copySymLink(srcPath1, destPath1, options1);
        } else if (entry1.isDirectory) {
            await copyDir(srcPath1, destPath1, options1);
        } else if (entry1.isFile) {
            await copyFile(srcPath1, destPath1, options1);
        }
    }
}
async function copy(src1, dest1, options1 = {}) {
    src1 = resolve(src1);
    dest1 = resolve(dest1);
    if (src1 === dest1) {
        throw new Error("Source and destination cannot be the same.");
    }
    const srcStat1 = await Deno.lstat(src1);
    if (srcStat1.isDirectory && isSubdir(src1, dest1)) {
        throw new Error(`Cannot copy '${src1}' to a subdirectory of itself, '${dest1}'.`);
    }
    if (srcStat1.isSymlink) {
        await copySymLink(src1, dest1, options1);
    } else if (srcStat1.isDirectory) {
        await copyDir(src1, dest1, options1);
    } else if (srcStat1.isFile) {
        await copyFile(src1, dest1, options1);
    }
}
var EOL;
(function(EOL1) {
    EOL1["LF"] = "\n";
    EOL1["CRLF"] = "\r\n";
})(EOL || (EOL = {}));
const indent = ({ string: string2 , by: by1 = "    " , noLead: noLead1 = false  })=>(noLead1 ? "" : by1) + string2.replace(/\n/g, "\n" + by1);
const toString = (value2)=>{
    if (typeof value2 == 'symbol') {
        return `Symbol(${toRepresentation(value2.description)})`;
    } else if (!(value2 instanceof Object)) {
        return value2 != null ? value2.toString() : `${value2}`;
    } else {
        return toRepresentation(value2);
    }
};
const digitsToEnglishArray = (value2)=>{
    value2 = toString(value2);
    if (value2.length > 1) {
        return [].concat(...[
            ...value2
        ].map((each2)=>digitsToEnglishArray(each2)));
    }
    if (value2 === "-") {
        return [
            "negative"
        ];
    } else if (value2 === ".") {
        return [
            "point"
        ];
    } else if (value2 === "0") {
        return [
            "zero"
        ];
    } else if (value2 === "1") {
        return [
            "one"
        ];
    } else if (value2 === "2") {
        return [
            "two"
        ];
    } else if (value2 === "3") {
        return [
            "three"
        ];
    } else if (value2 === "4") {
        return [
            "four"
        ];
    } else if (value2 === "5") {
        return [
            "five"
        ];
    } else if (value2 === "6") {
        return [
            "six"
        ];
    } else if (value2 === "7") {
        return [
            "seven"
        ];
    } else if (value2 === "8") {
        return [
            "eight"
        ];
    } else if (value2 === "9") {
        return [
            "nine"
        ];
    } else {
        return "";
    }
};
const toRepresentation = (item1)=>{
    const alreadySeen1 = new Set();
    const recursionWrapper1 = (item1)=>{
        if (item1 instanceof Object) {
            if (alreadySeen1.has(item1)) {
                return `[Self Reference]`;
            } else {
                alreadySeen1.add(item1);
            }
        }
        let output11;
        if (typeof item1 == 'string') {
            output11 = `"${item1.replace(/"|\n|\t|\r|\\/g, (__char1)=>{
                switch(__char1){
                    case '"':
                        return '\\"';
                    case '\n':
                        return '\\n';
                    case '\t':
                        return '\\t';
                    case '\r':
                        return '\\r';
                    case '\\':
                        return '\\\\';
                }
            })}"`;
        } else if (item1 instanceof Array) {
            output11 = `[${item1.map((each2)=>recursionWrapper1(each2)).join(",")}]`;
        } else if (item1 instanceof Set) {
            output11 = `{${[
                ...item1
            ].map((each2)=>recursionWrapper1(each2)).join(",")}}`;
        } else if (item1 instanceof Object && item1.constructor == Object) {
            let string2 = "{";
            for (const [key1, value2] of Object.entries(item1)){
                const stringKey1 = recursionWrapper1(key1);
                const stringValue1 = recursionWrapper1(value2);
                string2 += `\n  ${stringKey1}: ${indent({
                    string: stringValue1,
                    by: "  ",
                    noLead: true
                })},`;
            }
            string2 += "\n}";
            output11 = string2;
        } else if (item1 instanceof Map) {
            let string2 = "Map {";
            for (const [key1, value2] of item1.entries()){
                const stringKey1 = recursionWrapper1(key1);
                const stringValue1 = recursionWrapper1(value2);
                if (!stringKey1.match(/\n/g)) {
                    string2 += `\n  ${stringKey1} => ${indent({
                        string: stringValue1,
                        by: "  ",
                        noLead: true
                    })},`;
                } else {
                    string2 += `\n  ${indent({
                        string: stringKey1,
                        by: "  ",
                        noLead: true
                    })}\n    => ${indent({
                        string: stringValue1,
                        by: "    ",
                        noLead: true
                    })},`;
                }
            }
            string2 += "\n}";
            output11 = string2;
        } else {
            output11 = item1 != null ? item1.toString() : `${item1}`;
        }
        return output11;
    };
    return recursionWrapper1(item1);
};
const findAll = (regexPattern1, sourceString1)=>{
    var output11 = [];
    var match1;
    var regexPatternWithGlobal1 = regexPattern1.global ? regexPattern1 : RegExp(regexPattern1, regexPattern1.flags + "g");
    while(match1 = regexPatternWithGlobal1.exec(sourceString1)){
        output11.push(match1);
        if (match1[0].length == 0) {
            regexPatternWithGlobal1.lastIndex += 1;
        }
    }
    return output11;
};
const typedArrayClasses = [
    Uint16Array,
    Uint32Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Int32Array,
    Int8Array,
    Float32Array,
    Float64Array,
    globalThis.BigInt64Array,
    globalThis.BigUint64Array
].filter((each11)=>each11);
new Set([
    RegExp,
    Date,
    URL,
    ...typedArrayClasses,
    globalThis.ArrayBuffer,
    globalThis.DataView
]);
const IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
Object.getPrototypeOf([][Symbol.iterator]);
Object.getPrototypeOf(new Map()[Symbol.iterator]);
Object.getPrototypeOf(new Set()[Symbol.iterator]);
let AsyncFunction = class {
};
let GeneratorFunction = class {
};
let AsyncGeneratorFunction = class {
};
let SyncGenerator = class {
};
let AsyncGenerator = class {
};
try {
    AsyncFunction = eval("(async function(){}).constructor");
    GeneratorFunction = eval("(function*(){}).constructor");
    AsyncGeneratorFunction = eval("(async function*(){}).constructor");
    SyncGenerator = eval("((function*(){})()).constructor");
    AsyncGenerator = eval("((async function*(){})()).constructor");
} catch (error) {}
const isBuiltInIterator = (value11)=>IteratorPrototype.isPrototypeOf(value11);
const isGeneratorType = (value11)=>{
    if (value11 instanceof Object) {
        if (isBuiltInIterator(value11)) {
            return true;
        }
        const constructor11 = value11.constructor;
        return constructor11 == SyncGenerator || constructor11 == AsyncGenerator;
    }
    return false;
};
Symbol.for("deepCopy");
Symbol();
const getThis = Symbol();
Object.getPrototypeOf(function() {})[getThis] = function() {
    return this;
};
const deepSortObject = (obj11, seen11 = new Map())=>{
    if (!(obj11 instanceof Object)) {
        return obj11;
    } else if (seen11.has(obj11)) {
        return seen11.get(obj11);
    } else {
        if (obj11 instanceof Array) {
            const sortedChildren11 = [];
            seen11.set(obj11, sortedChildren11);
            for (const each11 of obj11){
                sortedChildren11.push(deepSortObject(each11, seen11));
            }
            return sortedChildren11;
        } else {
            const sorted11 = {};
            seen11.set(obj11, sorted11);
            for (const eachKey11 of Object.keys(obj11).sort()){
                sorted11[eachKey11] = deepSortObject(obj11[eachKey11], seen11);
            }
            return sorted11;
        }
    }
};
Object.getOwnPropertyDescriptors;
Symbol("iterationStop");
const combinations = function*(elements1, maxLength1, minLength1) {
    if (maxLength1 === minLength1 && minLength1 === undefined) {
        minLength1 = 1;
        maxLength1 = elements1.length;
    } else {
        maxLength1 = maxLength1 || elements1.length;
        minLength1 = minLength1 === undefined ? maxLength1 : minLength1;
    }
    if (minLength1 !== maxLength1) {
        for(let i3 = minLength1; i3 <= maxLength1; i3++){
            yield* combinations(elements1, i3, i3);
        }
    } else {
        if (maxLength1 === 1) {
            yield* elements1.map((each2)=>[
                    each2
                ]);
        } else {
            for(let i3 = 0; i3 < elements1.length; i3++){
                for (const next1 of combinations(elements1.slice(i3 + 1, elements1.length), maxLength1 - 1, maxLength1 - 1)){
                    yield [
                        elements1[i3],
                        ...next1
                    ];
                }
            }
        }
    }
};
async function asyncIteratorToList(asyncIterator1) {
    const results1 = [];
    for await (const each2 of asyncIterator1){
        results1.push(each2);
    }
    return results1;
}
const ERROR_WHILE_MAPPING_MESSAGE = "Threw while mapping.";
function concurrentlyTransform({ iterator: iterator1 , transformFunction: transformFunction1 , poolLimit: poolLimit1 = null , awaitAll: awaitAll1 = false  }) {
    poolLimit1 = poolLimit1 || concurrentlyTransform.defaultPoolLimit;
    const res1 = new TransformStream({
        async transform (p1, controller1) {
            try {
                const s3 = await p1;
                controller1.enqueue(s3);
            } catch (e1) {
                if (e1 instanceof AggregateError && e1.message == ERROR_WHILE_MAPPING_MESSAGE) {
                    controller1.error(e1);
                }
            }
        }
    });
    const mainPromise1 = (async ()=>{
        const writer1 = res1.writable.getWriter();
        const executing1 = [];
        try {
            let index1 = 0;
            for await (const item1 of iterator1){
                const p1 = Promise.resolve().then(()=>transformFunction1(item1, index1));
                index1++;
                writer1.write(p1);
                const e1 = p1.then(()=>executing1.splice(executing1.indexOf(e1), 1));
                executing1.push(e1);
                if (executing1.length >= poolLimit1) {
                    await Promise.race(executing1);
                }
            }
            await Promise.all(executing1);
            writer1.close();
        } catch  {
            const errors1 = [];
            for (const result1 of (await Promise.allSettled(executing1))){
                if (result1.status == "rejected") {
                    errors1.push(result1.reason);
                }
            }
            writer1.write(Promise.reject(new AggregateError(errors1, ERROR_WHILE_MAPPING_MESSAGE))).catch(()=>{});
        }
    })();
    const asyncIterator1 = res1.readable[Symbol.asyncIterator]();
    if (!awaitAll1) {
        return asyncIterator1;
    } else {
        return mainPromise1.then(()=>asyncIteratorToList(asyncIterator1));
    }
}
concurrentlyTransform.defaultPoolLimit = 40;
const osType = (()=>{
    const { Deno: Deno1  } = globalThis;
    if (typeof Deno1?.build?.os === "string") {
        return Deno1.build.os;
    }
    const { navigator: navigator1  } = globalThis;
    if (navigator1?.appVersion?.includes?.("Win")) {
        return "windows";
    }
    return "linux";
})();
const isWindows = osType === "windows";
const CHAR_FORWARD_SLASH = 47;
function assertPath(path1) {
    if (typeof path1 !== "string") {
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(path1)}`);
    }
}
function isPosixPathSeparator(code1) {
    return code1 === 47;
}
function isPathSeparator(code1) {
    return isPosixPathSeparator(code1) || code1 === 92;
}
function isWindowsDeviceRoot(code1) {
    return code1 >= 97 && code1 <= 122 || code1 >= 65 && code1 <= 90;
}
function normalizeString(path1, allowAboveRoot1, separator1, isPathSeparator1) {
    let res1 = "";
    let lastSegmentLength1 = 0;
    let lastSlash1 = -1;
    let dots1 = 0;
    let code1;
    for(let i3 = 0, len1 = path1.length; i3 <= len1; ++i3){
        if (i3 < len1) code1 = path1.charCodeAt(i3);
        else if (isPathSeparator1(code1)) break;
        else code1 = CHAR_FORWARD_SLASH;
        if (isPathSeparator1(code1)) {
            if (lastSlash1 === i3 - 1 || dots1 === 1) {} else if (lastSlash1 !== i3 - 1 && dots1 === 2) {
                if (res1.length < 2 || lastSegmentLength1 !== 2 || res1.charCodeAt(res1.length - 1) !== 46 || res1.charCodeAt(res1.length - 2) !== 46) {
                    if (res1.length > 2) {
                        const lastSlashIndex1 = res1.lastIndexOf(separator1);
                        if (lastSlashIndex1 === -1) {
                            res1 = "";
                            lastSegmentLength1 = 0;
                        } else {
                            res1 = res1.slice(0, lastSlashIndex1);
                            lastSegmentLength1 = res1.length - 1 - res1.lastIndexOf(separator1);
                        }
                        lastSlash1 = i3;
                        dots1 = 0;
                        continue;
                    } else if (res1.length === 2 || res1.length === 1) {
                        res1 = "";
                        lastSegmentLength1 = 0;
                        lastSlash1 = i3;
                        dots1 = 0;
                        continue;
                    }
                }
                if (allowAboveRoot1) {
                    if (res1.length > 0) res1 += `${separator1}..`;
                    else res1 = "..";
                    lastSegmentLength1 = 2;
                }
            } else {
                if (res1.length > 0) res1 += separator1 + path1.slice(lastSlash1 + 1, i3);
                else res1 = path1.slice(lastSlash1 + 1, i3);
                lastSegmentLength1 = i3 - lastSlash1 - 1;
            }
            lastSlash1 = i3;
            dots1 = 0;
        } else if (code1 === 46 && dots1 !== -1) {
            ++dots1;
        } else {
            dots1 = -1;
        }
    }
    return res1;
}
function _format(sep1, pathObject1) {
    const dir1 = pathObject1.dir || pathObject1.root;
    const base1 = pathObject1.base || (pathObject1.name || "") + (pathObject1.ext || "");
    if (!dir1) return base1;
    if (base1 === sep1) return dir1;
    if (dir1 === pathObject1.root) return dir1 + base1;
    return dir1 + sep1 + base1;
}
const WHITESPACE_ENCODINGS = {
    "\u0009": "%09",
    "\u000A": "%0A",
    "\u000B": "%0B",
    "\u000C": "%0C",
    "\u000D": "%0D",
    "\u0020": "%20"
};
function encodeWhitespace(string2) {
    return string2.replaceAll(/[\s]/g, (c3)=>{
        return WHITESPACE_ENCODINGS[c3] ?? c3;
    });
}
function lastPathSegment(path1, isSep1, start1 = 0) {
    let matchedNonSeparator1 = false;
    let end1 = path1.length;
    for(let i3 = path1.length - 1; i3 >= start1; --i3){
        if (isSep1(path1.charCodeAt(i3))) {
            if (matchedNonSeparator1) {
                start1 = i3 + 1;
                break;
            }
        } else if (!matchedNonSeparator1) {
            matchedNonSeparator1 = true;
            end1 = i3 + 1;
        }
    }
    return path1.slice(start1, end1);
}
function stripTrailingSeparators(segment1, isSep1) {
    if (segment1.length <= 1) {
        return segment1;
    }
    let end1 = segment1.length;
    for(let i3 = segment1.length - 1; i3 > 0; i3--){
        if (isSep1(segment1.charCodeAt(i3))) {
            end1 = i3;
        } else {
            break;
        }
    }
    return segment1.slice(0, end1);
}
function stripSuffix(name1, suffix1) {
    if (suffix1.length >= name1.length) {
        return name1;
    }
    const lenDiff1 = name1.length - suffix1.length;
    for(let i3 = suffix1.length - 1; i3 >= 0; --i3){
        if (name1.charCodeAt(lenDiff1 + i3) !== suffix1.charCodeAt(i3)) {
            return name1;
        }
    }
    return name1.slice(0, -suffix1.length);
}
class DenoStdInternalError extends Error {
    constructor(message1){
        super(message1);
        this.name = "DenoStdInternalError";
    }
}
function assert(expr1, msg1 = "") {
    if (!expr1) {
        throw new DenoStdInternalError(msg1);
    }
}
const sep = "\\";
const delimiter = ";";
function resolve(...pathSegments1) {
    let resolvedDevice1 = "";
    let resolvedTail1 = "";
    let resolvedAbsolute1 = false;
    for(let i3 = pathSegments1.length - 1; i3 >= -1; i3--){
        let path1;
        const { Deno: Deno1  } = globalThis;
        if (i3 >= 0) {
            path1 = pathSegments1[i3];
        } else if (!resolvedDevice1) {
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a drive-letter-less path without a CWD.");
            }
            path1 = Deno1.cwd();
        } else {
            if (typeof Deno1?.env?.get !== "function" || typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path1 = Deno1.cwd();
            if (path1 === undefined || path1.slice(0, 3).toLowerCase() !== `${resolvedDevice1.toLowerCase()}\\`) {
                path1 = `${resolvedDevice1}\\`;
            }
        }
        assertPath(path1);
        const len1 = path1.length;
        if (len1 === 0) continue;
        let rootEnd1 = 0;
        let device1 = "";
        let isAbsolute1 = false;
        const code1 = path1.charCodeAt(0);
        if (len1 > 1) {
            if (isPathSeparator(code1)) {
                isAbsolute1 = true;
                if (isPathSeparator(path1.charCodeAt(1))) {
                    let j1 = 2;
                    let last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        const firstPart1 = path1.slice(last1, j1);
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (!isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 < len1 && j1 !== last1) {
                            last1 = j1;
                            for(; j1 < len1; ++j1){
                                if (isPathSeparator(path1.charCodeAt(j1))) break;
                            }
                            if (j1 === len1) {
                                device1 = `\\\\${firstPart1}\\${path1.slice(last1)}`;
                                rootEnd1 = j1;
                            } else if (j1 !== last1) {
                                device1 = `\\\\${firstPart1}\\${path1.slice(last1, j1)}`;
                                rootEnd1 = j1;
                            }
                        }
                    }
                } else {
                    rootEnd1 = 1;
                }
            } else if (isWindowsDeviceRoot(code1)) {
                if (path1.charCodeAt(1) === 58) {
                    device1 = path1.slice(0, 2);
                    rootEnd1 = 2;
                    if (len1 > 2) {
                        if (isPathSeparator(path1.charCodeAt(2))) {
                            isAbsolute1 = true;
                            rootEnd1 = 3;
                        }
                    }
                }
            }
        } else if (isPathSeparator(code1)) {
            rootEnd1 = 1;
            isAbsolute1 = true;
        }
        if (device1.length > 0 && resolvedDevice1.length > 0 && device1.toLowerCase() !== resolvedDevice1.toLowerCase()) {
            continue;
        }
        if (resolvedDevice1.length === 0 && device1.length > 0) {
            resolvedDevice1 = device1;
        }
        if (!resolvedAbsolute1) {
            resolvedTail1 = `${path1.slice(rootEnd1)}\\${resolvedTail1}`;
            resolvedAbsolute1 = isAbsolute1;
        }
        if (resolvedAbsolute1 && resolvedDevice1.length > 0) break;
    }
    resolvedTail1 = normalizeString(resolvedTail1, !resolvedAbsolute1, "\\", isPathSeparator);
    return resolvedDevice1 + (resolvedAbsolute1 ? "\\" : "") + resolvedTail1 || ".";
}
function normalize(path1) {
    assertPath(path1);
    const len1 = path1.length;
    if (len1 === 0) return ".";
    let rootEnd1 = 0;
    let device1;
    let isAbsolute1 = false;
    const code1 = path1.charCodeAt(0);
    if (len1 > 1) {
        if (isPathSeparator(code1)) {
            isAbsolute1 = true;
            if (isPathSeparator(path1.charCodeAt(1))) {
                let j1 = 2;
                let last1 = j1;
                for(; j1 < len1; ++j1){
                    if (isPathSeparator(path1.charCodeAt(j1))) break;
                }
                if (j1 < len1 && j1 !== last1) {
                    const firstPart1 = path1.slice(last1, j1);
                    last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (!isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 === len1) {
                            return `\\\\${firstPart1}\\${path1.slice(last1)}\\`;
                        } else if (j1 !== last1) {
                            device1 = `\\\\${firstPart1}\\${path1.slice(last1, j1)}`;
                            rootEnd1 = j1;
                        }
                    }
                }
            } else {
                rootEnd1 = 1;
            }
        } else if (isWindowsDeviceRoot(code1)) {
            if (path1.charCodeAt(1) === 58) {
                device1 = path1.slice(0, 2);
                rootEnd1 = 2;
                if (len1 > 2) {
                    if (isPathSeparator(path1.charCodeAt(2))) {
                        isAbsolute1 = true;
                        rootEnd1 = 3;
                    }
                }
            }
        }
    } else if (isPathSeparator(code1)) {
        return "\\";
    }
    let tail1;
    if (rootEnd1 < len1) {
        tail1 = normalizeString(path1.slice(rootEnd1), !isAbsolute1, "\\", isPathSeparator);
    } else {
        tail1 = "";
    }
    if (tail1.length === 0 && !isAbsolute1) tail1 = ".";
    if (tail1.length > 0 && isPathSeparator(path1.charCodeAt(len1 - 1))) {
        tail1 += "\\";
    }
    if (device1 === undefined) {
        if (isAbsolute1) {
            if (tail1.length > 0) return `\\${tail1}`;
            else return "\\";
        } else if (tail1.length > 0) {
            return tail1;
        } else {
            return "";
        }
    } else if (isAbsolute1) {
        if (tail1.length > 0) return `${device1}\\${tail1}`;
        else return `${device1}\\`;
    } else if (tail1.length > 0) {
        return device1 + tail1;
    } else {
        return device1;
    }
}
function isAbsolute(path1) {
    assertPath(path1);
    const len1 = path1.length;
    if (len1 === 0) return false;
    const code1 = path1.charCodeAt(0);
    if (isPathSeparator(code1)) {
        return true;
    } else if (isWindowsDeviceRoot(code1)) {
        if (len1 > 2 && path1.charCodeAt(1) === 58) {
            if (isPathSeparator(path1.charCodeAt(2))) return true;
        }
    }
    return false;
}
function join(...paths1) {
    const pathsCount1 = paths1.length;
    if (pathsCount1 === 0) return ".";
    let joined1;
    let firstPart1 = null;
    for(let i3 = 0; i3 < pathsCount1; ++i3){
        const path1 = paths1[i3];
        assertPath(path1);
        if (path1.length > 0) {
            if (joined1 === undefined) joined1 = firstPart1 = path1;
            else joined1 += `\\${path1}`;
        }
    }
    if (joined1 === undefined) return ".";
    let needsReplace1 = true;
    let slashCount1 = 0;
    assert(firstPart1 != null);
    if (isPathSeparator(firstPart1.charCodeAt(0))) {
        ++slashCount1;
        const firstLen1 = firstPart1.length;
        if (firstLen1 > 1) {
            if (isPathSeparator(firstPart1.charCodeAt(1))) {
                ++slashCount1;
                if (firstLen1 > 2) {
                    if (isPathSeparator(firstPart1.charCodeAt(2))) ++slashCount1;
                    else {
                        needsReplace1 = false;
                    }
                }
            }
        }
    }
    if (needsReplace1) {
        for(; slashCount1 < joined1.length; ++slashCount1){
            if (!isPathSeparator(joined1.charCodeAt(slashCount1))) break;
        }
        if (slashCount1 >= 2) joined1 = `\\${joined1.slice(slashCount1)}`;
    }
    return normalize(joined1);
}
function relative(from1, to1) {
    assertPath(from1);
    assertPath(to1);
    if (from1 === to1) return "";
    const fromOrig1 = resolve(from1);
    const toOrig1 = resolve(to1);
    if (fromOrig1 === toOrig1) return "";
    from1 = fromOrig1.toLowerCase();
    to1 = toOrig1.toLowerCase();
    if (from1 === to1) return "";
    let fromStart1 = 0;
    let fromEnd1 = from1.length;
    for(; fromStart1 < fromEnd1; ++fromStart1){
        if (from1.charCodeAt(fromStart1) !== 92) break;
    }
    for(; fromEnd1 - 1 > fromStart1; --fromEnd1){
        if (from1.charCodeAt(fromEnd1 - 1) !== 92) break;
    }
    const fromLen1 = fromEnd1 - fromStart1;
    let toStart1 = 0;
    let toEnd1 = to1.length;
    for(; toStart1 < toEnd1; ++toStart1){
        if (to1.charCodeAt(toStart1) !== 92) break;
    }
    for(; toEnd1 - 1 > toStart1; --toEnd1){
        if (to1.charCodeAt(toEnd1 - 1) !== 92) break;
    }
    const toLen1 = toEnd1 - toStart1;
    const length1 = fromLen1 < toLen1 ? fromLen1 : toLen1;
    let lastCommonSep1 = -1;
    let i3 = 0;
    for(; i3 <= length1; ++i3){
        if (i3 === length1) {
            if (toLen1 > length1) {
                if (to1.charCodeAt(toStart1 + i3) === 92) {
                    return toOrig1.slice(toStart1 + i3 + 1);
                } else if (i3 === 2) {
                    return toOrig1.slice(toStart1 + i3);
                }
            }
            if (fromLen1 > length1) {
                if (from1.charCodeAt(fromStart1 + i3) === 92) {
                    lastCommonSep1 = i3;
                } else if (i3 === 2) {
                    lastCommonSep1 = 3;
                }
            }
            break;
        }
        const fromCode1 = from1.charCodeAt(fromStart1 + i3);
        const toCode1 = to1.charCodeAt(toStart1 + i3);
        if (fromCode1 !== toCode1) break;
        else if (fromCode1 === 92) lastCommonSep1 = i3;
    }
    if (i3 !== length1 && lastCommonSep1 === -1) {
        return toOrig1;
    }
    let out1 = "";
    if (lastCommonSep1 === -1) lastCommonSep1 = 0;
    for(i3 = fromStart1 + lastCommonSep1 + 1; i3 <= fromEnd1; ++i3){
        if (i3 === fromEnd1 || from1.charCodeAt(i3) === 92) {
            if (out1.length === 0) out1 += "..";
            else out1 += "\\..";
        }
    }
    if (out1.length > 0) {
        return out1 + toOrig1.slice(toStart1 + lastCommonSep1, toEnd1);
    } else {
        toStart1 += lastCommonSep1;
        if (toOrig1.charCodeAt(toStart1) === 92) ++toStart1;
        return toOrig1.slice(toStart1, toEnd1);
    }
}
function toNamespacedPath(path1) {
    if (typeof path1 !== "string") return path1;
    if (path1.length === 0) return "";
    const resolvedPath1 = resolve(path1);
    if (resolvedPath1.length >= 3) {
        if (resolvedPath1.charCodeAt(0) === 92) {
            if (resolvedPath1.charCodeAt(1) === 92) {
                const code1 = resolvedPath1.charCodeAt(2);
                if (code1 !== 63 && code1 !== 46) {
                    return `\\\\?\\UNC\\${resolvedPath1.slice(2)}`;
                }
            }
        } else if (isWindowsDeviceRoot(resolvedPath1.charCodeAt(0))) {
            if (resolvedPath1.charCodeAt(1) === 58 && resolvedPath1.charCodeAt(2) === 92) {
                return `\\\\?\\${resolvedPath1}`;
            }
        }
    }
    return path1;
}
function dirname(path1) {
    assertPath(path1);
    const len1 = path1.length;
    if (len1 === 0) return ".";
    let rootEnd1 = -1;
    let end1 = -1;
    let matchedSlash1 = true;
    let offset1 = 0;
    const code1 = path1.charCodeAt(0);
    if (len1 > 1) {
        if (isPathSeparator(code1)) {
            rootEnd1 = offset1 = 1;
            if (isPathSeparator(path1.charCodeAt(1))) {
                let j1 = 2;
                let last1 = j1;
                for(; j1 < len1; ++j1){
                    if (isPathSeparator(path1.charCodeAt(j1))) break;
                }
                if (j1 < len1 && j1 !== last1) {
                    last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (!isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 === len1) {
                            return path1;
                        }
                        if (j1 !== last1) {
                            rootEnd1 = offset1 = j1 + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code1)) {
            if (path1.charCodeAt(1) === 58) {
                rootEnd1 = offset1 = 2;
                if (len1 > 2) {
                    if (isPathSeparator(path1.charCodeAt(2))) rootEnd1 = offset1 = 3;
                }
            }
        }
    } else if (isPathSeparator(code1)) {
        return path1;
    }
    for(let i3 = len1 - 1; i3 >= offset1; --i3){
        if (isPathSeparator(path1.charCodeAt(i3))) {
            if (!matchedSlash1) {
                end1 = i3;
                break;
            }
        } else {
            matchedSlash1 = false;
        }
    }
    if (end1 === -1) {
        if (rootEnd1 === -1) return ".";
        else end1 = rootEnd1;
    }
    return stripTrailingSeparators(path1.slice(0, end1), isPosixPathSeparator);
}
function basename(path1, suffix1 = "") {
    assertPath(path1);
    if (path1.length === 0) return path1;
    if (typeof suffix1 !== "string") {
        throw new TypeError(`Suffix must be a string. Received ${JSON.stringify(suffix1)}`);
    }
    let start1 = 0;
    if (path1.length >= 2) {
        const drive1 = path1.charCodeAt(0);
        if (isWindowsDeviceRoot(drive1)) {
            if (path1.charCodeAt(1) === 58) start1 = 2;
        }
    }
    const lastSegment1 = lastPathSegment(path1, isPathSeparator, start1);
    const strippedSegment1 = stripTrailingSeparators(lastSegment1, isPathSeparator);
    return suffix1 ? stripSuffix(strippedSegment1, suffix1) : strippedSegment1;
}
function extname(path1) {
    assertPath(path1);
    let start1 = 0;
    let startDot1 = -1;
    let startPart1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let preDotState1 = 0;
    if (path1.length >= 2 && path1.charCodeAt(1) === 58 && isWindowsDeviceRoot(path1.charCodeAt(0))) {
        start1 = startPart1 = 2;
    }
    for(let i3 = path1.length - 1; i3 >= start1; --i3){
        const code1 = path1.charCodeAt(i3);
        if (isPathSeparator(code1)) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        return "";
    }
    return path1.slice(startDot1, end1);
}
function format(pathObject1) {
    if (pathObject1 === null || typeof pathObject1 !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject1}`);
    }
    return _format("\\", pathObject1);
}
function parse(path1) {
    assertPath(path1);
    const ret1 = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    const len1 = path1.length;
    if (len1 === 0) return ret1;
    let rootEnd1 = 0;
    let code1 = path1.charCodeAt(0);
    if (len1 > 1) {
        if (isPathSeparator(code1)) {
            rootEnd1 = 1;
            if (isPathSeparator(path1.charCodeAt(1))) {
                let j1 = 2;
                let last1 = j1;
                for(; j1 < len1; ++j1){
                    if (isPathSeparator(path1.charCodeAt(j1))) break;
                }
                if (j1 < len1 && j1 !== last1) {
                    last1 = j1;
                    for(; j1 < len1; ++j1){
                        if (!isPathSeparator(path1.charCodeAt(j1))) break;
                    }
                    if (j1 < len1 && j1 !== last1) {
                        last1 = j1;
                        for(; j1 < len1; ++j1){
                            if (isPathSeparator(path1.charCodeAt(j1))) break;
                        }
                        if (j1 === len1) {
                            rootEnd1 = j1;
                        } else if (j1 !== last1) {
                            rootEnd1 = j1 + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code1)) {
            if (path1.charCodeAt(1) === 58) {
                rootEnd1 = 2;
                if (len1 > 2) {
                    if (isPathSeparator(path1.charCodeAt(2))) {
                        if (len1 === 3) {
                            ret1.root = ret1.dir = path1;
                            ret1.base = "\\";
                            return ret1;
                        }
                        rootEnd1 = 3;
                    }
                } else {
                    ret1.root = ret1.dir = path1;
                    return ret1;
                }
            }
        }
    } else if (isPathSeparator(code1)) {
        ret1.root = ret1.dir = path1;
        ret1.base = "\\";
        return ret1;
    }
    if (rootEnd1 > 0) ret1.root = path1.slice(0, rootEnd1);
    let startDot1 = -1;
    let startPart1 = rootEnd1;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3 = path1.length - 1;
    let preDotState1 = 0;
    for(; i3 >= rootEnd1; --i3){
        code1 = path1.charCodeAt(i3);
        if (isPathSeparator(code1)) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        if (end1 !== -1) {
            ret1.base = ret1.name = path1.slice(startPart1, end1);
        }
    } else {
        ret1.name = path1.slice(startPart1, startDot1);
        ret1.base = path1.slice(startPart1, end1);
        ret1.ext = path1.slice(startDot1, end1);
    }
    ret1.base = ret1.base || "\\";
    if (startPart1 > 0 && startPart1 !== rootEnd1) {
        ret1.dir = path1.slice(0, startPart1 - 1);
    } else ret1.dir = ret1.root;
    return ret1;
}
function fromFileUrl(url1) {
    url1 = url1 instanceof URL ? url1 : new URL(url1);
    if (url1.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    let path1 = decodeURIComponent(url1.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
    if (url1.hostname != "") {
        path1 = `\\\\${url1.hostname}${path1}`;
    }
    return path1;
}
function toFileUrl(path1) {
    if (!isAbsolute(path1)) {
        throw new TypeError("Must be an absolute path.");
    }
    const [, hostname1, pathname1] = path1.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/);
    const url1 = new URL("file:///");
    url1.pathname = encodeWhitespace(pathname1.replace(/%/g, "%25"));
    if (hostname1 != null && hostname1 != "localhost") {
        url1.hostname = hostname1;
        if (!url1.hostname) {
            throw new TypeError("Invalid hostname.");
        }
    }
    return url1;
}
const mod = {
    sep: sep,
    delimiter: delimiter,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join,
    relative: relative,
    toNamespacedPath: toNamespacedPath,
    dirname: dirname,
    basename: basename,
    extname: extname,
    format: format,
    parse: parse,
    fromFileUrl: fromFileUrl,
    toFileUrl: toFileUrl
};
const sep = "/";
const delimiter = ":";
function resolve(...pathSegments1) {
    let resolvedPath1 = "";
    let resolvedAbsolute1 = false;
    for(let i3 = pathSegments1.length - 1; i3 >= -1 && !resolvedAbsolute1; i3--){
        let path1;
        if (i3 >= 0) path1 = pathSegments1[i3];
        else {
            const { Deno: Deno1  } = globalThis;
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path1 = Deno1.cwd();
        }
        assertPath(path1);
        if (path1.length === 0) {
            continue;
        }
        resolvedPath1 = `${path1}/${resolvedPath1}`;
        resolvedAbsolute1 = isPosixPathSeparator(path1.charCodeAt(0));
    }
    resolvedPath1 = normalizeString(resolvedPath1, !resolvedAbsolute1, "/", isPosixPathSeparator);
    if (resolvedAbsolute1) {
        if (resolvedPath1.length > 0) return `/${resolvedPath1}`;
        else return "/";
    } else if (resolvedPath1.length > 0) return resolvedPath1;
    else return ".";
}
function normalize(path1) {
    assertPath(path1);
    if (path1.length === 0) return ".";
    const isAbsolute1 = isPosixPathSeparator(path1.charCodeAt(0));
    const trailingSeparator1 = isPosixPathSeparator(path1.charCodeAt(path1.length - 1));
    path1 = normalizeString(path1, !isAbsolute1, "/", isPosixPathSeparator);
    if (path1.length === 0 && !isAbsolute1) path1 = ".";
    if (path1.length > 0 && trailingSeparator1) path1 += "/";
    if (isAbsolute1) return `/${path1}`;
    return path1;
}
function isAbsolute(path1) {
    assertPath(path1);
    return path1.length > 0 && isPosixPathSeparator(path1.charCodeAt(0));
}
function join(...paths1) {
    if (paths1.length === 0) return ".";
    let joined1;
    for(let i3 = 0, len1 = paths1.length; i3 < len1; ++i3){
        const path1 = paths1[i3];
        assertPath(path1);
        if (path1.length > 0) {
            if (!joined1) joined1 = path1;
            else joined1 += `/${path1}`;
        }
    }
    if (!joined1) return ".";
    return normalize(joined1);
}
function relative(from1, to1) {
    assertPath(from1);
    assertPath(to1);
    if (from1 === to1) return "";
    from1 = resolve(from1);
    to1 = resolve(to1);
    if (from1 === to1) return "";
    let fromStart1 = 1;
    const fromEnd1 = from1.length;
    for(; fromStart1 < fromEnd1; ++fromStart1){
        if (!isPosixPathSeparator(from1.charCodeAt(fromStart1))) break;
    }
    const fromLen1 = fromEnd1 - fromStart1;
    let toStart1 = 1;
    const toEnd1 = to1.length;
    for(; toStart1 < toEnd1; ++toStart1){
        if (!isPosixPathSeparator(to1.charCodeAt(toStart1))) break;
    }
    const toLen1 = toEnd1 - toStart1;
    const length1 = fromLen1 < toLen1 ? fromLen1 : toLen1;
    let lastCommonSep1 = -1;
    let i3 = 0;
    for(; i3 <= length1; ++i3){
        if (i3 === length1) {
            if (toLen1 > length1) {
                if (isPosixPathSeparator(to1.charCodeAt(toStart1 + i3))) {
                    return to1.slice(toStart1 + i3 + 1);
                } else if (i3 === 0) {
                    return to1.slice(toStart1 + i3);
                }
            } else if (fromLen1 > length1) {
                if (isPosixPathSeparator(from1.charCodeAt(fromStart1 + i3))) {
                    lastCommonSep1 = i3;
                } else if (i3 === 0) {
                    lastCommonSep1 = 0;
                }
            }
            break;
        }
        const fromCode1 = from1.charCodeAt(fromStart1 + i3);
        const toCode1 = to1.charCodeAt(toStart1 + i3);
        if (fromCode1 !== toCode1) break;
        else if (isPosixPathSeparator(fromCode1)) lastCommonSep1 = i3;
    }
    let out1 = "";
    for(i3 = fromStart1 + lastCommonSep1 + 1; i3 <= fromEnd1; ++i3){
        if (i3 === fromEnd1 || isPosixPathSeparator(from1.charCodeAt(i3))) {
            if (out1.length === 0) out1 += "..";
            else out1 += "/..";
        }
    }
    if (out1.length > 0) return out1 + to1.slice(toStart1 + lastCommonSep1);
    else {
        toStart1 += lastCommonSep1;
        if (isPosixPathSeparator(to1.charCodeAt(toStart1))) ++toStart1;
        return to1.slice(toStart1);
    }
}
function toNamespacedPath(path1) {
    return path1;
}
function dirname(path1) {
    if (path1.length === 0) return ".";
    let end1 = -1;
    let matchedNonSeparator1 = false;
    for(let i3 = path1.length - 1; i3 >= 1; --i3){
        if (isPosixPathSeparator(path1.charCodeAt(i3))) {
            if (matchedNonSeparator1) {
                end1 = i3;
                break;
            }
        } else {
            matchedNonSeparator1 = true;
        }
    }
    if (end1 === -1) {
        return isPosixPathSeparator(path1.charCodeAt(0)) ? "/" : ".";
    }
    return stripTrailingSeparators(path1.slice(0, end1), isPosixPathSeparator);
}
function basename(path1, suffix1 = "") {
    assertPath(path1);
    if (path1.length === 0) return path1;
    if (typeof suffix1 !== "string") {
        throw new TypeError(`Suffix must be a string. Received ${JSON.stringify(suffix1)}`);
    }
    const lastSegment1 = lastPathSegment(path1, isPosixPathSeparator);
    const strippedSegment1 = stripTrailingSeparators(lastSegment1, isPosixPathSeparator);
    return suffix1 ? stripSuffix(strippedSegment1, suffix1) : strippedSegment1;
}
function extname(path1) {
    assertPath(path1);
    let startDot1 = -1;
    let startPart1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let preDotState1 = 0;
    for(let i3 = path1.length - 1; i3 >= 0; --i3){
        const code1 = path1.charCodeAt(i3);
        if (isPosixPathSeparator(code1)) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        return "";
    }
    return path1.slice(startDot1, end1);
}
function format(pathObject1) {
    if (pathObject1 === null || typeof pathObject1 !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject1}`);
    }
    return _format("/", pathObject1);
}
function parse(path1) {
    assertPath(path1);
    const ret1 = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    if (path1.length === 0) return ret1;
    const isAbsolute1 = isPosixPathSeparator(path1.charCodeAt(0));
    let start1;
    if (isAbsolute1) {
        ret1.root = "/";
        start1 = 1;
    } else {
        start1 = 0;
    }
    let startDot1 = -1;
    let startPart1 = 0;
    let end1 = -1;
    let matchedSlash1 = true;
    let i3 = path1.length - 1;
    let preDotState1 = 0;
    for(; i3 >= start1; --i3){
        const code1 = path1.charCodeAt(i3);
        if (isPosixPathSeparator(code1)) {
            if (!matchedSlash1) {
                startPart1 = i3 + 1;
                break;
            }
            continue;
        }
        if (end1 === -1) {
            matchedSlash1 = false;
            end1 = i3 + 1;
        }
        if (code1 === 46) {
            if (startDot1 === -1) startDot1 = i3;
            else if (preDotState1 !== 1) preDotState1 = 1;
        } else if (startDot1 !== -1) {
            preDotState1 = -1;
        }
    }
    if (startDot1 === -1 || end1 === -1 || preDotState1 === 0 || preDotState1 === 1 && startDot1 === end1 - 1 && startDot1 === startPart1 + 1) {
        if (end1 !== -1) {
            if (startPart1 === 0 && isAbsolute1) {
                ret1.base = ret1.name = path1.slice(1, end1);
            } else {
                ret1.base = ret1.name = path1.slice(startPart1, end1);
            }
        }
        ret1.base = ret1.base || "/";
    } else {
        if (startPart1 === 0 && isAbsolute1) {
            ret1.name = path1.slice(1, startDot1);
            ret1.base = path1.slice(1, end1);
        } else {
            ret1.name = path1.slice(startPart1, startDot1);
            ret1.base = path1.slice(startPart1, end1);
        }
        ret1.ext = path1.slice(startDot1, end1);
    }
    if (startPart1 > 0) {
        ret1.dir = stripTrailingSeparators(path1.slice(0, startPart1 - 1), isPosixPathSeparator);
    } else if (isAbsolute1) ret1.dir = "/";
    return ret1;
}
function fromFileUrl(url1) {
    url1 = url1 instanceof URL ? url1 : new URL(url1);
    if (url1.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    return decodeURIComponent(url1.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function toFileUrl(path1) {
    if (!isAbsolute(path1)) {
        throw new TypeError("Must be an absolute path.");
    }
    const url1 = new URL("file:///");
    url1.pathname = encodeWhitespace(path1.replace(/%/g, "%25").replace(/\\/g, "%5C"));
    return url1;
}
const mod = {
    sep: sep,
    delimiter: delimiter,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join,
    relative: relative,
    toNamespacedPath: toNamespacedPath,
    dirname: dirname,
    basename: basename,
    extname: extname,
    format: format,
    parse: parse,
    fromFileUrl: fromFileUrl,
    toFileUrl: toFileUrl
};
const path = isWindows ? mod : mod;
const { join , normalize  } = path;
const regExpEscapeChars = [
    "!",
    "$",
    "(",
    ")",
    "*",
    "+",
    ".",
    "=",
    "?",
    "[",
    "\\",
    "^",
    "{",
    "|"
];
const rangeEscapeChars = [
    "-",
    "\\",
    "]"
];
function globToRegExp(glob1, { extended: extended1 = true , globstar: globstarOption1 = true , os: os1 = osType , caseInsensitive: caseInsensitive1 = false  } = {}) {
    if (glob1 == "") {
        return /(?!)/;
    }
    const sep1 = os1 == "windows" ? "(?:\\\\|/)+" : "/+";
    const sepMaybe1 = os1 == "windows" ? "(?:\\\\|/)*" : "/*";
    const seps1 = os1 == "windows" ? [
        "\\",
        "/"
    ] : [
        "/"
    ];
    const globstar1 = os1 == "windows" ? "(?:[^\\\\/]*(?:\\\\|/|$)+)*" : "(?:[^/]*(?:/|$)+)*";
    const wildcard1 = os1 == "windows" ? "[^\\\\/]*" : "[^/]*";
    const escapePrefix1 = os1 == "windows" ? "`" : "\\";
    let newLength1 = glob1.length;
    for(; newLength1 > 1 && seps1.includes(glob1[newLength1 - 1]); newLength1--);
    glob1 = glob1.slice(0, newLength1);
    let regExpString1 = "";
    for(let j1 = 0; j1 < glob1.length;){
        let segment1 = "";
        const groupStack1 = [];
        let inRange1 = false;
        let inEscape1 = false;
        let endsWithSep1 = false;
        let i3 = j1;
        for(; i3 < glob1.length && !seps1.includes(glob1[i3]); i3++){
            if (inEscape1) {
                inEscape1 = false;
                const escapeChars1 = inRange1 ? rangeEscapeChars : regExpEscapeChars;
                segment1 += escapeChars1.includes(glob1[i3]) ? `\\${glob1[i3]}` : glob1[i3];
                continue;
            }
            if (glob1[i3] == escapePrefix1) {
                inEscape1 = true;
                continue;
            }
            if (glob1[i3] == "[") {
                if (!inRange1) {
                    inRange1 = true;
                    segment1 += "[";
                    if (glob1[i3 + 1] == "!") {
                        i3++;
                        segment1 += "^";
                    } else if (glob1[i3 + 1] == "^") {
                        i3++;
                        segment1 += "\\^";
                    }
                    continue;
                } else if (glob1[i3 + 1] == ":") {
                    let k1 = i3 + 1;
                    let value2 = "";
                    while(glob1[k1 + 1] != null && glob1[k1 + 1] != ":"){
                        value2 += glob1[k1 + 1];
                        k1++;
                    }
                    if (glob1[k1 + 1] == ":" && glob1[k1 + 2] == "]") {
                        i3 = k1 + 2;
                        if (value2 == "alnum") segment1 += "\\dA-Za-z";
                        else if (value2 == "alpha") segment1 += "A-Za-z";
                        else if (value2 == "ascii") segment1 += "\x00-\x7F";
                        else if (value2 == "blank") segment1 += "\t ";
                        else if (value2 == "cntrl") segment1 += "\x00-\x1F\x7F";
                        else if (value2 == "digit") segment1 += "\\d";
                        else if (value2 == "graph") segment1 += "\x21-\x7E";
                        else if (value2 == "lower") segment1 += "a-z";
                        else if (value2 == "print") segment1 += "\x20-\x7E";
                        else if (value2 == "punct") {
                            segment1 += "!\"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_‘{|}~";
                        } else if (value2 == "space") segment1 += "\\s\v";
                        else if (value2 == "upper") segment1 += "A-Z";
                        else if (value2 == "word") segment1 += "\\w";
                        else if (value2 == "xdigit") segment1 += "\\dA-Fa-f";
                        continue;
                    }
                }
            }
            if (glob1[i3] == "]" && inRange1) {
                inRange1 = false;
                segment1 += "]";
                continue;
            }
            if (inRange1) {
                if (glob1[i3] == "\\") {
                    segment1 += `\\\\`;
                } else {
                    segment1 += glob1[i3];
                }
                continue;
            }
            if (glob1[i3] == ")" && groupStack1.length > 0 && groupStack1[groupStack1.length - 1] != "BRACE") {
                segment1 += ")";
                const type1 = groupStack1.pop();
                if (type1 == "!") {
                    segment1 += wildcard1;
                } else if (type1 != "@") {
                    segment1 += type1;
                }
                continue;
            }
            if (glob1[i3] == "|" && groupStack1.length > 0 && groupStack1[groupStack1.length - 1] != "BRACE") {
                segment1 += "|";
                continue;
            }
            if (glob1[i3] == "+" && extended1 && glob1[i3 + 1] == "(") {
                i3++;
                groupStack1.push("+");
                segment1 += "(?:";
                continue;
            }
            if (glob1[i3] == "@" && extended1 && glob1[i3 + 1] == "(") {
                i3++;
                groupStack1.push("@");
                segment1 += "(?:";
                continue;
            }
            if (glob1[i3] == "?") {
                if (extended1 && glob1[i3 + 1] == "(") {
                    i3++;
                    groupStack1.push("?");
                    segment1 += "(?:";
                } else {
                    segment1 += ".";
                }
                continue;
            }
            if (glob1[i3] == "!" && extended1 && glob1[i3 + 1] == "(") {
                i3++;
                groupStack1.push("!");
                segment1 += "(?!";
                continue;
            }
            if (glob1[i3] == "{") {
                groupStack1.push("BRACE");
                segment1 += "(?:";
                continue;
            }
            if (glob1[i3] == "}" && groupStack1[groupStack1.length - 1] == "BRACE") {
                groupStack1.pop();
                segment1 += ")";
                continue;
            }
            if (glob1[i3] == "," && groupStack1[groupStack1.length - 1] == "BRACE") {
                segment1 += "|";
                continue;
            }
            if (glob1[i3] == "*") {
                if (extended1 && glob1[i3 + 1] == "(") {
                    i3++;
                    groupStack1.push("*");
                    segment1 += "(?:";
                } else {
                    const prevChar1 = glob1[i3 - 1];
                    let numStars1 = 1;
                    while(glob1[i3 + 1] == "*"){
                        i3++;
                        numStars1++;
                    }
                    const nextChar1 = glob1[i3 + 1];
                    if (globstarOption1 && numStars1 == 2 && [
                        ...seps1,
                        undefined
                    ].includes(prevChar1) && [
                        ...seps1,
                        undefined
                    ].includes(nextChar1)) {
                        segment1 += globstar1;
                        endsWithSep1 = true;
                    } else {
                        segment1 += wildcard1;
                    }
                }
                continue;
            }
            segment1 += regExpEscapeChars.includes(glob1[i3]) ? `\\${glob1[i3]}` : glob1[i3];
        }
        if (groupStack1.length > 0 || inRange1 || inEscape1) {
            segment1 = "";
            for (const c3 of glob1.slice(j1, i3)){
                segment1 += regExpEscapeChars.includes(c3) ? `\\${c3}` : c3;
                endsWithSep1 = false;
            }
        }
        regExpString1 += segment1;
        if (!endsWithSep1) {
            regExpString1 += i3 < glob1.length ? sep1 : sepMaybe1;
            endsWithSep1 = true;
        }
        while(seps1.includes(glob1[i3]))i3++;
        if (!(i3 > j1)) {
            throw new Error("Assertion failure: i > j (potential infinite loop)");
        }
        j1 = i3;
    }
    regExpString1 = `^${regExpString1}$`;
    return new RegExp(regExpString1, caseInsensitive1 ? "i" : "");
}
function copy(src1, dst1, off1 = 0) {
    off1 = Math.max(0, Math.min(off1, dst1.byteLength));
    const dstBytesAvailable1 = dst1.byteLength - off1;
    if (src1.byteLength > dstBytesAvailable1) {
        src1 = src1.subarray(0, dstBytesAvailable1);
    }
    dst1.set(src1, off1);
    return src1.byteLength;
}
const MIN_BUF_SIZE = 16;
const CR = "\r".charCodeAt(0);
const LF = "\n".charCodeAt(0);
class BufferFullError extends Error {
    partial;
    name;
    constructor(partial1){
        super("Buffer full");
        this.partial = partial1;
        this.name = "BufferFullError";
    }
}
class PartialReadError extends Error {
    name = "PartialReadError";
    partial;
    constructor(){
        super("Encountered UnexpectedEof, data only partially read");
    }
}
class BufReader {
    #buf;
    #rd;
    #r = 0;
    #w = 0;
    #eof = false;
    static create(r1, size1 = 4096) {
        return r1 instanceof BufReader ? r1 : new BufReader(r1, size1);
    }
    constructor(rd1, size1 = 4096){
        if (size1 < 16) {
            size1 = MIN_BUF_SIZE;
        }
        this.#reset(new Uint8Array(size1), rd1);
    }
    size() {
        return this.#buf.byteLength;
    }
    buffered() {
        return this.#w - this.#r;
    }
    #fill = async ()=>{
        if (this.#r > 0) {
            this.#buf.copyWithin(0, this.#r, this.#w);
            this.#w -= this.#r;
            this.#r = 0;
        }
        if (this.#w >= this.#buf.byteLength) {
            throw Error("bufio: tried to fill full buffer");
        }
        for(let i3 = 100; i3 > 0; i3--){
            const rr1 = await this.#rd.read(this.#buf.subarray(this.#w));
            if (rr1 === null) {
                this.#eof = true;
                return;
            }
            assert(rr1 >= 0, "negative read");
            this.#w += rr1;
            if (rr1 > 0) {
                return;
            }
        }
        throw new Error(`No progress after ${100} read() calls`);
    };
    reset(r1) {
        this.#reset(this.#buf, r1);
    }
    #reset = (buf1, rd1)=>{
        this.#buf = buf1;
        this.#rd = rd1;
        this.#eof = false;
    };
    async read(p1) {
        let rr1 = p1.byteLength;
        if (p1.byteLength === 0) return rr1;
        if (this.#r === this.#w) {
            if (p1.byteLength >= this.#buf.byteLength) {
                const rr1 = await this.#rd.read(p1);
                const nread1 = rr1 ?? 0;
                assert(nread1 >= 0, "negative read");
                return rr1;
            }
            this.#r = 0;
            this.#w = 0;
            rr1 = await this.#rd.read(this.#buf);
            if (rr1 === 0 || rr1 === null) return rr1;
            assert(rr1 >= 0, "negative read");
            this.#w += rr1;
        }
        const copied1 = copy(this.#buf.subarray(this.#r, this.#w), p1, 0);
        this.#r += copied1;
        return copied1;
    }
    async readFull(p1) {
        let bytesRead1 = 0;
        while(bytesRead1 < p1.length){
            try {
                const rr1 = await this.read(p1.subarray(bytesRead1));
                if (rr1 === null) {
                    if (bytesRead1 === 0) {
                        return null;
                    } else {
                        throw new PartialReadError();
                    }
                }
                bytesRead1 += rr1;
            } catch (err1) {
                if (err1 instanceof PartialReadError) {
                    err1.partial = p1.subarray(0, bytesRead1);
                }
                throw err1;
            }
        }
        return p1;
    }
    async readByte() {
        while(this.#r === this.#w){
            if (this.#eof) return null;
            await this.#fill();
        }
        const c3 = this.#buf[this.#r];
        this.#r++;
        return c3;
    }
    async readString(delim1) {
        if (delim1.length !== 1) {
            throw new Error("Delimiter should be a single character");
        }
        const buffer1 = await this.readSlice(delim1.charCodeAt(0));
        if (buffer1 === null) return null;
        return new TextDecoder().decode(buffer1);
    }
    async readLine() {
        let line1 = null;
        try {
            line1 = await this.readSlice(LF);
        } catch (err1) {
            let partial1;
            if (err1 instanceof PartialReadError) {
                partial1 = err1.partial;
                assert(partial1 instanceof Uint8Array, "bufio: caught error from `readSlice()` without `partial` property");
            }
            if (!(err1 instanceof BufferFullError)) {
                throw err1;
            }
            partial1 = err1.partial;
            if (!this.#eof && partial1 && partial1.byteLength > 0 && partial1[partial1.byteLength - 1] === CR) {
                assert(this.#r > 0, "bufio: tried to rewind past start of buffer");
                this.#r--;
                partial1 = partial1.subarray(0, partial1.byteLength - 1);
            }
            if (partial1) {
                return {
                    line: partial1,
                    more: !this.#eof
                };
            }
        }
        if (line1 === null) {
            return null;
        }
        if (line1.byteLength === 0) {
            return {
                line: line1,
                more: false
            };
        }
        if (line1[line1.byteLength - 1] == LF) {
            let drop1 = 1;
            if (line1.byteLength > 1 && line1[line1.byteLength - 2] === CR) {
                drop1 = 2;
            }
            line1 = line1.subarray(0, line1.byteLength - drop1);
        }
        return {
            line: line1,
            more: false
        };
    }
    async readSlice(delim1) {
        let s3 = 0;
        let slice1;
        while(true){
            let i3 = this.#buf.subarray(this.#r + s3, this.#w).indexOf(delim1);
            if (i3 >= 0) {
                i3 += s3;
                slice1 = this.#buf.subarray(this.#r, this.#r + i3 + 1);
                this.#r += i3 + 1;
                break;
            }
            if (this.#eof) {
                if (this.#r === this.#w) {
                    return null;
                }
                slice1 = this.#buf.subarray(this.#r, this.#w);
                this.#r = this.#w;
                break;
            }
            if (this.buffered() >= this.#buf.byteLength) {
                this.#r = this.#w;
                const oldbuf1 = this.#buf;
                const newbuf1 = this.#buf.slice(0);
                this.#buf = newbuf1;
                throw new BufferFullError(oldbuf1);
            }
            s3 = this.#w - this.#r;
            try {
                await this.#fill();
            } catch (err1) {
                if (err1 instanceof PartialReadError) {
                    err1.partial = slice1;
                }
                throw err1;
            }
        }
        return slice1;
    }
    async peek(n1) {
        if (n1 < 0) {
            throw Error("negative count");
        }
        let avail1 = this.#w - this.#r;
        while(avail1 < n1 && avail1 < this.#buf.byteLength && !this.#eof){
            try {
                await this.#fill();
            } catch (err1) {
                if (err1 instanceof PartialReadError) {
                    err1.partial = this.#buf.subarray(this.#r, this.#w);
                }
                throw err1;
            }
            avail1 = this.#w - this.#r;
        }
        if (avail1 === 0 && this.#eof) {
            return null;
        } else if (avail1 < n1 && this.#eof) {
            return this.#buf.subarray(this.#r, this.#r + avail1);
        } else if (avail1 < n1) {
            throw new BufferFullError(this.#buf.subarray(this.#r, this.#w));
        }
        return this.#buf.subarray(this.#r, this.#r + n1);
    }
}
function concat(...buf1) {
    let length1 = 0;
    for (const b1 of buf1){
        length1 += b1.length;
    }
    const output2 = new Uint8Array(length1);
    let index1 = 0;
    for (const b1 of buf1){
        output2.set(b1, index1);
        index1 += b1.length;
    }
    return output2;
}
async function* readLines(reader1, decoderOpts1) {
    const bufReader1 = new BufReader(reader1);
    let chunks1 = [];
    const decoder1 = new TextDecoder(decoderOpts1?.encoding, decoderOpts1);
    while(true){
        const res1 = await bufReader1.readLine();
        if (!res1) {
            if (chunks1.length > 0) {
                yield decoder1.decode(concat(...chunks1));
            }
            break;
        }
        chunks1.push(res1.line);
        if (!res1.more) {
            yield decoder1.decode(concat(...chunks1));
            chunks1 = [];
        }
    }
}
ensure({
    denoVersion: "1.17.1"
});
const cache = {};
class ItemInfo {
    constructor({ path: path1 , _lstatData: _lstatData1 , _statData: _statData1  }){
        this.path = path1;
        this._lstat = _lstatData1;
        this._data = _statData1;
    }
    refresh() {
        this._lstat = null;
        this._data = null;
    }
    get lstat() {
        if (!this._lstat) {
            try {
                this._lstat = Deno.lstatSync(this.path);
            } catch (error1) {
                this._lstat = {
                    doesntExist: true
                };
            }
        }
        return this._lstat;
    }
    get stat() {
        if (!this._stat) {
            const lstat1 = this.lstat;
            if (!lstat1.isSymlink) {
                this._stat = {
                    isBrokenLink: false,
                    isLoopOfLinks: false
                };
            } else {
                try {
                    this._stat = Deno.statSync(this.path);
                } catch (error1) {
                    this._stat = {};
                    if (error1.message.match(/^Too many levels of symbolic links/)) {
                        this._stat.isBrokenLink = true;
                        this._stat.isLoopOfLinks = true;
                    } else if (error1.message.match(/^No such file or directory/)) {
                        this._stat.isBrokenLink = true;
                    } else {
                        throw error1;
                    }
                }
            }
        }
        return this._stat;
    }
    get exists() {
        const lstat1 = this.lstat;
        return !lstat1.doesntExist;
    }
    get name() {
        return parse(this.path).name;
    }
    get extension() {
        return parse(this.path).ext;
    }
    get basename() {
        return this.path && basename(this.path);
    }
    get parentPath() {
        return this.path && dirname(this.path);
    }
    relativePathFrom(parentPath1) {
        return relative(parentPath1, this.path);
    }
    get link() {
        const lstat1 = this.lstat;
        if (lstat1.isSymlink) {
            return Deno.readLinkSync(this.path);
        } else {
            return null;
        }
    }
    get isSymlink() {
        const lstat1 = this.lstat;
        return !!lstat1.isSymlink;
    }
    get isRelativeSymlink() {
        const lstat1 = this.lstat;
        const isNotSymlink1 = !lstat1.isSymlink;
        if (isNotSymlink1) {
            return false;
        }
        const relativeOrAbsolutePath1 = Deno.readLinkSync(this.path);
        return !isAbsolute(relativeOrAbsolutePath1);
    }
    get isAbsoluteSymlink() {
        const lstat1 = this.lstat;
        const isNotSymlink1 = !lstat1.isSymlink;
        if (isNotSymlink1) {
            return false;
        }
        const relativeOrAbsolutePath1 = Deno.readLinkSync(this.path);
        return isAbsolute(relativeOrAbsolutePath1);
    }
    get isBrokenLink() {
        const stat1 = this.stat;
        return !!stat1.isBrokenLink;
    }
    get isLoopOfLinks() {
        const stat1 = this.stat;
        return !!stat1.isLoopOfLinks;
    }
    get isFile() {
        const lstat1 = this.lstat;
        if (lstat1.doesntExist) {
            return false;
        }
        if (!lstat1.isSymlink) {
            return lstat1.isFile;
        } else {
            return !!this.stat.isFile;
        }
    }
    get isFolder() {
        const lstat1 = this.lstat;
        if (lstat1.doesntExist) {
            return false;
        }
        if (!lstat1.isSymlink) {
            return lstat1.isDirectory;
        } else {
            return !!this.stat.isDirectory;
        }
    }
    get sizeInBytes() {
        const lstat1 = this.lstat;
        return lstat1.size;
    }
    get permissions() {
        const { mode: mode1  } = this.lstat;
        return {
            owner: {
                canRead: !!(0b0000000100000000 & mode1),
                canWrite: !!(0b0000000010000000 & mode1),
                canExecute: !!(0b0000000001000000 & mode1)
            },
            group: {
                canRead: !!(0b0000000000100000 & mode1),
                canWrite: !!(0b0000000000010000 & mode1),
                canExecute: !!(0b0000000000001000 & mode1)
            },
            others: {
                canRead: !!(0b0000000000000100 & mode1),
                canWrite: !!(0b0000000000000010 & mode1),
                canExecute: !!(0b0000000000000001 & mode1)
            }
        };
    }
    get isDirectory() {
        return this.isFolder;
    }
    get dirname() {
        return this.parentPath;
    }
    toJSON() {
        return {
            exists: this.exists,
            name: this.name,
            extension: this.extension,
            basename: this.basename,
            parentPath: this.parentPath,
            isSymlink: this.isSymlink,
            isBrokenLink: this.isBrokenLink,
            isLoopOfLinks: this.isLoopOfLinks,
            isFile: this.isFile,
            isFolder: this.isFolder,
            sizeInBytes: this.sizeInBytes,
            permissions: this.permissions,
            isDirectory: this.isDirectory,
            dirname: this.dirname
        };
    }
}
const defaultOptionsHelper = (options1)=>({
        renameExtension: options1.renameExtension || FileSystem.defaultRenameExtension,
        overwrite: options1.overwrite
    });
const fileLockSymbol = Symbol.for("fileLock");
const locker = globalThis[fileLockSymbol] || {};
const grabPathLock = async (path1)=>{
    while(locker[path1]){
        await new Promise((resolve1)=>setTimeout(resolve1, 70));
    }
    locker[path1] = true;
};
const pathStandardize = (path1)=>{
    path1 = path1.path || path1;
    if (typeof path1 == 'string' && path1.startsWith("file:///")) {
        path1 = fromFileUrl(path1);
    }
    return path1;
};
const FileSystem = {
    denoExecutablePath: Deno.execPath(),
    parentPath: dirname,
    dirname: dirname,
    basename: basename,
    extname: extname,
    join: join,
    defaultRenameExtension: ".old",
    get home () {
        if (!cache.home) {
            if (Deno.build.os != "windows") {
                cache.home = Deno.env.get("HOME");
            } else {
                cache.home = Deno.env.get("HOMEPATH");
            }
        }
        return cache.home;
    },
    get workingDirectory () {
        return Deno.cwd();
    },
    set workingDirectory (value){
        Deno.chdir(value);
    },
    get cwd () {
        return FileSystem.workingDirectory;
    },
    set cwd (value){
        return FileSystem.workingDirectory = value;
    },
    get pwd () {
        return FileSystem.cwd;
    },
    set pwd (value){
        return FileSystem.cwd = value;
    },
    cd (path1) {
        Deno.chdir(path1);
    },
    changeDirectory (path1) {
        Deno.chdir(path1);
    },
    get thisFile () {
        const err1 = new Error();
        const filePaths1 = findAll(/^.+file:\/\/(\/[\w\W]*?):/gm, err1.stack).map((each11)=>each11[1]);
        const firstPath1 = filePaths1[0];
        if (firstPath1) {
            try {
                if (Deno.statSync(firstPath1).isFile) {
                    return firstPath1;
                }
            } catch (error1) {}
        }
        return ':<interpreter>:';
    },
    get thisFolder () {
        const err1 = new Error();
        const filePaths1 = findAll(/^.+file:\/\/(\/[\w\W]*?):/gm, err1.stack).map((each11)=>each11[1]);
        const firstPath1 = filePaths1[0];
        if (firstPath1) {
            try {
                if (Deno.statSync(firstPath1).isFile) {
                    return dirname(firstPath1);
                }
            } catch (error1) {}
        }
        return Deno.cwd();
    },
    async read (path1) {
        path1 = pathStandardize(path1);
        await grabPathLock(path1);
        let output2;
        try {
            output2 = await Deno.readTextFile(path1);
        } catch (error1) {}
        delete locker[path1];
        return output2;
    },
    async readBytes (path1) {
        path1 = pathStandardize(path1);
        await grabPathLock(path1);
        let output2;
        try {
            output2 = await Deno.readFile(path1);
        } catch (error1) {}
        delete locker[path1];
        return output2;
    },
    async *readLinesIteratively (path1) {
        path1 = pathStandardize(path1);
        await grabPathLock(path1);
        try {
            const file1 = await Deno.open(path1);
            try {
                yield* readLines(file1);
            } finally{
                Deno.close(file1.rid);
            }
        } finally{
            delete locker[path1];
        }
    },
    async info (fileOrFolderPath1, _cachedLstat1 = null) {
        fileOrFolderPath1 = pathStandardize(fileOrFolderPath1);
        await grabPathLock(fileOrFolderPath1);
        try {
            const lstat1 = _cachedLstat1 || await Deno.lstat(fileOrFolderPath1).catch(()=>({
                    doesntExist: true
                }));
            let stat1 = {};
            if (!lstat1.isSymlink) {
                stat1 = {
                    isBrokenLink: false,
                    isLoopOfLinks: false
                };
            } else {
                try {
                    stat1 = await Deno.stat(fileOrFolderPath1);
                } catch (error1) {
                    if (error1.message.match(/^Too many levels of symbolic links/)) {
                        stat1.isBrokenLink = true;
                        stat1.isLoopOfLinks = true;
                    } else if (error1.message.match(/^No such file or directory/)) {
                        stat1.isBrokenLink = true;
                    } else {
                        if (!error1.message.match(/^PermissionDenied:/)) {
                            return {
                                doesntExist: true,
                                permissionDenied: true
                            };
                        }
                        throw error1;
                    }
                }
            }
            return new ItemInfo({
                path: fileOrFolderPath1,
                _lstatData: lstat1,
                _statData: stat1
            });
        } finally{
            delete locker[fileOrFolderPath1];
        }
    },
    async move ({ item: item1 , newParentFolder: newParentFolder1 , newName: newName1 , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        const oldPath1 = item1.path || item1;
        const oldName1 = FileSystem.basename(oldPath1);
        const itemInfo1 = item1 instanceof Object || await FileSystem.info(oldPath1);
        const newPath1 = `${newParentFolder1}/${newName1 || oldName1}`;
        if (itemInfo1.isSymlink && !item1.isBrokenLink) {
            const link1 = Deno.readLinkSync(itemInfo1.path);
            if (!isAbsolute(link1)) {
                const linkTargetBeforeMove1 = `${FileSystem.parentPath(itemInfo1.path)}/${link1}`;
                await FileSystem.relativeLink({
                    existingItem: linkTargetBeforeMove1,
                    newItem: newPath1,
                    force: force1,
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
                await FileSystem.remove(itemInfo1);
            }
        }
        if (force1) {
            FileSystem.sync.clearAPathFor(newPath1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
        }
        await move(oldPath1, newPath1);
    },
    async remove (fileOrFolder1) {
        fileOrFolder1 = pathStandardize(fileOrFolder1);
        if (fileOrFolder1 instanceof Array) {
            return Promise.all(fileOrFolder1.map(FileSystem.remove));
        }
        fileOrFolder1 = fileOrFolder1.path || fileOrFolder1;
        const itemInfo1 = await FileSystem.info(fileOrFolder1);
        if (itemInfo1.isFile || itemInfo1.isSymlink) {
            return Deno.remove(itemInfo1.path.replace(/\/+$/, ""));
        } else if (itemInfo1.exists) {
            return Deno.remove(itemInfo1.path.replace(/\/+$/, ""), {
                recursive: true
            });
        }
    },
    normalize: (path1)=>normalize(pathStandardize(path1)).replace(/\/$/, ""),
    isAbsolutePath: isAbsolute,
    isRelativePath: (...args1)=>!isAbsolute(...args1),
    makeRelativePath: ({ from: from1 , to: to1  })=>relative(from1.path || from1, to1.path || to1),
    makeAbsolutePath: (path1)=>{
        if (!isAbsolute(path1)) {
            return normalize(join(Deno.cwd(), path1));
        } else {
            return normalize(path1);
        }
    },
    async finalTargetOf (path1, options1 = {}) {
        const { _parentsHaveBeenChecked: _parentsHaveBeenChecked1 , cache: cache1  } = {
            _parentsHaveBeenChecked: false,
            cache: {},
            ...options1
        };
        const originalWasItem1 = path1 instanceof ItemInfo;
        path1 = path1.path || path1;
        let result1 = await Deno.lstat(path1).catch(()=>({
                doesntExist: true
            }));
        if (result1.doesntExist) {
            return null;
        }
        path1 = await FileSystem.makeHardPathTo(path1, {
            cache: cache1
        });
        const pathChain1 = [];
        while(result1.isSymlink){
            const relativeOrAbsolutePath1 = await Deno.readLink(path1);
            if (isAbsolute(relativeOrAbsolutePath1)) {
                path1 = relativeOrAbsolutePath1;
            } else {
                path1 = `${FileSystem.parentPath(path1)}/${relativeOrAbsolutePath1}`;
            }
            result1 = await Deno.lstat(path1).catch(()=>({
                    doesntExist: true
                }));
            if (result1.doesntExist) {
                return null;
            }
            path1 = await FileSystem.makeHardPathTo(path1, {
                cache: cache1
            });
            if (pathChain1.includes(path1)) {
                return null;
            }
            pathChain1.push(path1);
        }
        path1 = FileSystem.normalize(path1);
        if (originalWasItem1) {
            return new ItemInfo({
                path: path1
            });
        } else {
            return path1;
        }
    },
    async nextTargetOf (path1, options1 = {}) {
        const originalWasItem1 = path1 instanceof ItemInfo;
        const item1 = originalWasItem1 ? path1 : new ItemInfo({
            path: path1
        });
        const lstat1 = item1.lstat;
        if (lstat1.isSymlink) {
            const relativeOrAbsolutePath1 = Deno.readLinkSync(item1.path);
            if (isAbsolute(relativeOrAbsolutePath1)) {
                if (originalWasItem1) {
                    return new ItemInfo({
                        path: relativeOrAbsolutePath1
                    });
                } else {
                    return relativeOrAbsolutePath1;
                }
            } else {
                const path1 = `${await FileSystem.makeHardPathTo(dirname(item1.path))}/${relativeOrAbsolutePath1}`;
                if (originalWasItem1) {
                    return new ItemInfo({
                        path: path1
                    });
                } else {
                    return path1;
                }
            }
        } else {
            if (originalWasItem1) {
                return item1;
            } else {
                return item1.path;
            }
        }
    },
    async ensureIsFile (path1, options1 = {
        overwrite: false,
        renameExtension: null
    }) {
        const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
        await FileSystem.ensureIsFolder(FileSystem.parentPath(path1), {
            overwrite: overwrite1,
            renameExtension: renameExtension1
        });
        path1 = path1.path || path1;
        const pathInfo1 = await FileSystem.info(path1);
        if (pathInfo1.isFile && !pathInfo1.isDirectory) {
            return path1;
        } else {
            await FileSystem.write({
                path: path1,
                data: ""
            });
            return path1;
        }
    },
    async ensureIsFolder (path1, options1 = {
        overwrite: false,
        renameExtension: null
    }) {
        const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
        path1 = path1.path || path1;
        path1 = FileSystem.makeAbsolutePath(path1);
        const parentPath1 = dirname(path1);
        if (parentPath1 == path1) {
            return;
        }
        const parent1 = await FileSystem.info(parentPath1);
        if (!parent1.isDirectory) {
            FileSystem.sync.ensureIsFolder(parentPath1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
        }
        let pathInfo1 = FileSystem.sync.info(path1);
        if (pathInfo1.exists && !pathInfo1.isDirectory) {
            if (overwrite1) {
                await FileSystem.remove(path1);
            } else {
                await FileSystem.moveOutOfTheWay(eachPath, {
                    extension: renameExtension1
                });
            }
        }
        await Deno.mkdir(path1, {
            recursive: true
        });
        return path1;
    },
    async clearAPathFor (path1, options1 = {
        overwrite: false,
        renameExtension: null
    }) {
        const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
        const originalPath1 = path1;
        const paths1 = [];
        while(dirname(path1) !== path1){
            paths1.push(path1);
            path1 = dirname(path1);
        }
        for (const eachPath11 of paths1.reverse()){
            const info1 = await FileSystem.info(eachPath11);
            if (!info1.exists) {
                break;
            } else if (info1.isFile) {
                if (overwrite1) {
                    await FileSystem.remove(eachPath11);
                } else {
                    await FileSystem.moveOutOfTheWay(eachPath11, {
                        extension: renameExtension1
                    });
                }
            }
        }
        await Deno.mkdir(dirname(originalPath1), {
            recursive: true
        });
        return originalPath1;
    },
    async moveOutOfTheWay (path1, options1 = {
        extension: null
    }) {
        const extension1 = options1?.extension || FileSystem.defaultRenameExtension;
        const info1 = await FileSystem.info(path1);
        if (info1.exists) {
            const newPath1 = path1 + extension1;
            await FileSystem.moveOutOfTheWay(newPath1, {
                extension: extension1
            });
            await move(path1, newPath1);
        }
    },
    allParentPaths (path1) {
        const pathStartsWithDotSlash1 = path1.startsWith("./");
        path1 = FileSystem.normalize(path1);
        if (path1 === ".") {
            return [];
        }
        const dotGotRemoved1 = pathStartsWithDotSlash1 && !path1.startsWith("./");
        let previousPath1 = null;
        let allPaths1 = [];
        while(1){
            previousPath1 = path1;
            path1 = FileSystem.parentPath(path1);
            if (previousPath1 === path1) {
                break;
            }
            allPaths1.push(path1);
        }
        allPaths1.reverse();
        allPaths1 = allPaths1.filter((each11)=>each11 != ".");
        if (dotGotRemoved1) {
            allPaths1.push(".");
        }
        return allPaths1;
    },
    async walkUpUntil (fileToFind1, startPath1 = null) {
        let here1 = startPath1 || Deno.cwd();
        if (!isAbsolute(here1)) {
            here1 = join(cwd, fileToFind1);
        }
        while(1){
            let checkPath1 = join(here1, fileToFind1);
            const pathInfo1 = await Deno.lstat(checkPath1).catch(()=>({
                    doesntExist: true
                }));
            if (!pathInfo1.doesntExist) {
                return here1;
            }
            if (here1 == dirname(here1)) {
                return null;
            } else {
                here1 = dirname(here1);
            }
        }
    },
    async copy ({ from: from1 , to: to1 , preserveTimestamps: preserveTimestamps1 = true , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        const existingItemDoesntExist1 = (await Deno.stat(from1).catch(()=>({
                doesntExist: true
            }))).doesntExist;
        if (existingItemDoesntExist1) {
            throw Error(`\nTried to copy from:${from1}, to:${to1}\nbut "from" didn't seem to exist\n\n`);
        }
        if (force1) {
            FileSystem.sync.clearAPathFor(to1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
        }
        await FileSystem.info(from1);
        return copy(from1, to1, {
            force: force1,
            preserveTimestamps: true
        });
    },
    async relativeLink ({ existingItem: existingItem1 , newItem: newItem1 , force: force1 = true , overwrite: overwrite1 = false , allowNonExistingTarget: allowNonExistingTarget1 = false , renameExtension: renameExtension1 = null  }) {
        const existingItemPath1 = (existingItem1.path || existingItem1).replace(/\/+$/, "");
        const newItemPath1 = FileSystem.normalize((newItem1.path || newItem1).replace(/\/+$/, ""));
        const existingItemDoesntExist1 = (await Deno.lstat(existingItemPath1).catch(()=>({
                doesntExist: true
            }))).doesntExist;
        if (!allowNonExistingTarget1 && existingItemDoesntExist1) {
            throw Error(`\nTried to create a relativeLink between existingItem:${existingItemPath1}, newItem:${newItemPath1}\nbut existingItem didn't actually exist`);
        } else {
            const parentOfNewItem1 = FileSystem.parentPath(newItemPath1);
            await FileSystem.ensureIsFolder(parentOfNewItem1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
            const hardPathToNewItem1 = `${await FileSystem.makeHardPathTo(parentOfNewItem1)}/${FileSystem.basename(newItemPath1)}`;
            const hardPathToExistingItem1 = await FileSystem.makeHardPathTo(existingItemPath1);
            const pathFromNewToExisting1 = relative(hardPathToNewItem1, hardPathToExistingItem1).replace(/^\.\.\//, "");
            if (force1) {
                FileSystem.sync.clearAPathFor(hardPathToNewItem1, {
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
            }
            return Deno.symlink(pathFromNewToExisting1, hardPathToNewItem1);
        }
    },
    async absoluteLink ({ existingItem: existingItem1 , newItem: newItem1 , force: force1 = true , allowNonExistingTarget: allowNonExistingTarget1 = false , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        existingItem1 = (existingItem1.path || existingItem1).replace(/\/+$/, "");
        const newItemPath1 = FileSystem.normalize(newItem1.path || newItem1).replace(/\/+$/, "");
        const existingItemDoesntExist1 = (await Deno.lstat(existingItem1).catch(()=>({
                doesntExist: true
            }))).doesntExist;
        if (!allowNonExistingTarget1 && existingItemDoesntExist1) {
            throw Error(`\nTried to create a relativeLink between existingItem:${existingItem1}, newItemPath:${newItemPath1}\nbut existingItem didn't actually exist`);
        } else {
            const parentOfNewItem1 = FileSystem.parentPath(newItemPath1);
            await FileSystem.ensureIsFolder(parentOfNewItem1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
            const hardPathToNewItem1 = `${await FileSystem.makeHardPathTo(parentOfNewItem1)}/${FileSystem.basename(newItemPath1)}`;
            if (force1) {
                FileSystem.sync.clearAPathFor(hardPathToNewItem1, {
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
            }
            return Deno.symlink(FileSystem.makeAbsolutePath(existingItem1), newItemPath1);
        }
    },
    pathPieces (path1) {
        path1 = path1.path || path1;
        const result1 = parse(path1);
        const folderList1 = [];
        let dirname1 = result1.dir;
        while(true){
            folderList1.push(basename(dirname1));
            if (dirname1 == dirname(dirname1)) {
                break;
            }
            dirname1 = dirname(dirname1);
        }
        folderList1.reverse();
        return [
            folderList1,
            result1.name,
            result1.ext
        ];
    },
    async *iterateBasenamesIn (pathOrFileInfo1) {
        const info1 = pathOrFileInfo1 instanceof ItemInfo ? pathOrFileInfo1 : await FileSystem.info(pathOrFileInfo1);
        if (info1.isFolder) {
            for await (const each11 of Deno.readDir(pathOrFileInfo1.path)){
                yield dirEntry.name;
            }
        }
    },
    listBasenamesIn (pathOrFileInfo1) {
        return asyncIteratorToList(FileSystem.iterateBasenamesIn(pathOrFileInfo1));
    },
    async *iteratePathsIn (pathOrFileInfo1, options1 = {
        recursively: false,
        shouldntInclude: null,
        shouldntExplore: null,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        dontFollowSymlinks: false,
        dontReturnSymlinks: false
    }) {
        let info1;
        try {
            info1 = pathOrFileInfo1 instanceof ItemInfo ? pathOrFileInfo1 : await FileSystem.info(pathOrFileInfo1);
        } catch (error1) {
            if (!error1.message.match(/^PermissionDenied:/)) {
                throw error1;
            }
        }
        const path1 = info1.path;
        if (!options1.recursively) {
            if (info1.isFolder) {
                if (!options1.shouldntInclude) {
                    for await (const each11 of Deno.readDir(path1)){
                        if (options1.dontReturnSymlinks && each11.isSymlink) {
                            continue;
                        }
                        yield join(path1, each11.name);
                    }
                } else {
                    const shouldntInclude1 = options1.shouldntInclude;
                    for await (const each11 of Deno.readDir(path1)){
                        const eachPath11 = join(path1, each11.name);
                        if (options1.dontReturnSymlinks && each11.isSymlink) {
                            continue;
                        }
                        const shouldntIncludeThis1 = shouldntInclude1 && await shouldntInclude1(eachPath11);
                        if (!shouldntIncludeThis1) {
                            yield eachPath11;
                        }
                    }
                }
            }
        } else {
            options1 = {
                exclude: new Set(),
                searchOrder: 'breadthFirstSearch',
                maxDepth: Infinity,
                ...options1
            };
            options1.searchOrder = options1.searchOrder || 'breadthFirstSearch';
            const { shouldntExplore: shouldntExplore1 , shouldntInclude: shouldntInclude1  } = options1;
            if (![
                'breadthFirstSearch',
                'depthFirstSearch'
            ].includes(options1.searchOrder)) {
                throw Error(`when calling FileSystem.iterateItemsIn('${path1}', { searchOrder: ${options1.searchOrder} })\n\n    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'\n    However, it was not either of those: ${options1.searchOrder}`);
            }
            const useBreadthFirstSearch1 = options1.searchOrder == 'breadthFirstSearch';
            const shouldntExploreThis1 = shouldntExplore1 && await shouldntExplore1(info1.path, info1);
            if (!shouldntExploreThis1 && options1.maxDepth > 0 && info1.isFolder) {
                options1.exclude = options1.exclude instanceof Set ? options1.exclude : new Set(options1.exclude);
                if (!options1.exclude.has(path1)) {
                    const followSymlinks1 = !options1.dontFollowSymlinks;
                    const absolutePathVersion1 = FileSystem.makeAbsolutePath(path1);
                    options1.exclude.add(absolutePathVersion1);
                    options1.maxDepth -= 1;
                    const searchAfterwords1 = [];
                    for await (const entry1 of Deno.readDir(path1)){
                        const eachPath11 = join(path1, entry1.name);
                        if (options1.dontReturnSymlinks && each.isSymlink) {
                            continue;
                        }
                        const shouldntIncludeThis1 = shouldntInclude1 && await shouldntInclude1(eachPath11);
                        if (!shouldntIncludeThis1) {
                            yield eachPath11;
                        }
                        if (entry1.isFile) {
                            continue;
                        }
                        if (followSymlinks1 && !entry1.isDirectory) {
                            let isSymlinkToDirectory1 = false;
                            try {
                                isSymlinkToDirectory1 = (await Deno.stat(eachPath11)).isDirectory;
                            } catch (error1) {}
                            if (!isSymlinkToDirectory1) {
                                continue;
                            }
                        }
                        if (useBreadthFirstSearch1) {
                            searchAfterwords1.push(eachPath11);
                        } else {
                            for await (const eachSubPath1 of FileSystem.iteratePathsIn(eachPath11, options1)){
                                yield eachSubPath1;
                            }
                        }
                    }
                    for (const eachParentItem1 of searchAfterwords1){
                        for await (const eachSubPath1 of FileSystem.iteratePathsIn(eachParentItem1, options1)){
                            yield eachSubPath1;
                        }
                    }
                }
            }
        }
    },
    listPathsIn (pathOrFileInfo1, options1) {
        return asyncIteratorToList(FileSystem.iteratePathsIn(pathOrFileInfo1, options1));
    },
    async *iterateItemsIn (pathOrFileInfo1, options1 = {
        recursively: false,
        shouldntInclude: null,
        shouldntExplore: null,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity
    }) {
        options1 = {
            exclude: new Set(),
            searchOrder: 'breadthFirstSearch',
            maxDepth: Infinity,
            ...options1
        };
        options1.searchOrder = options1.searchOrder || 'breadthFirstSearch';
        const { shouldntExplore: shouldntExplore1 , shouldntInclude: shouldntInclude1  } = options1;
        const info1 = pathOrFileInfo1 instanceof ItemInfo ? pathOrFileInfo1 : await FileSystem.info(pathOrFileInfo1);
        const path1 = info1.path;
        if (![
            'breadthFirstSearch',
            'depthFirstSearch'
        ].includes(options1.searchOrder)) {
            throw Error(`when calling FileSystem.iterateItemsIn('${path1}', { searchOrder: ${options1.searchOrder} })\n\n    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'\n    However, it was not either of those: ${options1.searchOrder}`);
        }
        const useBreadthFirstSearch1 = options1.searchOrder == 'breadthFirstSearch';
        const shouldntExploreThis1 = shouldntExplore1 && await shouldntExplore1(info1);
        if (!shouldntExploreThis1 && options1.maxDepth > 0 && info1.isFolder) {
            options1.exclude = options1.exclude instanceof Set ? options1.exclude : new Set(options1.exclude);
            if (!options1.exclude.has(path1)) {
                const absolutePathVersion1 = FileSystem.makeAbsolutePath(path1);
                options1.exclude.add(absolutePathVersion1);
                options1.maxDepth -= 1;
                const searchAfterwords1 = [];
                for await (const entry1 of Deno.readDir(path1)){
                    const eachItem1 = await FileSystem.info(join(path1, entry1.name));
                    const shouldntIncludeThis1 = shouldntInclude1 && await shouldntInclude1(eachItem1);
                    if (!shouldntIncludeThis1) {
                        yield eachItem1;
                    }
                    if (options1.recursively) {
                        if (eachItem1.isFolder) {
                            if (useBreadthFirstSearch1) {
                                searchAfterwords1.push(eachItem1);
                            } else {
                                for await (const eachSubPath1 of FileSystem.iterateItemsIn(eachItem1, options1)){
                                    yield eachSubPath1;
                                }
                            }
                        }
                    }
                }
                for (const eachParentItem1 of searchAfterwords1){
                    for await (const eachSubPath1 of FileSystem.iterateItemsIn(eachParentItem1, options1)){
                        yield eachSubPath1;
                    }
                }
            }
        }
    },
    async listItemsIn (pathOrFileInfo1, options1) {
        const outputPromises1 = [];
        for await (const eachPath11 of FileSystem.iteratePathsIn(pathOrFileInfo1, options1)){
            outputPromises1.push(FileSystem.info(eachPath11));
        }
        return Promise.all(outputPromises1);
    },
    async listFileItemsIn (pathOrFileInfo1, options1 = {
        treatAllSymlinksAsFiles: false
    }) {
        const { treatAllSymlinksAsFiles: treatAllSymlinksAsFiles1  } = {
            treatAllSymlinksAsFiles: false,
            ...options1
        };
        const items1 = await FileSystem.listItemsIn(pathOrFileInfo1, options1);
        if (treatAllSymlinksAsFiles1) {
            return items1.filter((eachItem1)=>eachItem1.isFile || treatAllSymlinksAsFiles1 && eachItem1.isSymlink);
        } else {
            return items1.filter((eachItem1)=>eachItem1.isFile);
        }
    },
    async listFilePathsIn (pathOrFileInfo1, options1 = {
        treatAllSymlinksAsFiles: false
    }) {
        return (await FileSystem.listFileItemsIn(pathOrFileInfo1, options1)).map((each11)=>each11.path);
    },
    async listFileBasenamesIn (pathOrFileInfo1, options1 = {
        treatAllSymlinksAsFiles: false
    }) {
        return (await FileSystem.listFileItemsIn(pathOrFileInfo1, options1)).map((each11)=>each11.basename);
    },
    async listFolderItemsIn (pathOrFileInfo1, options1 = {
        ignoreSymlinks: false
    }) {
        const { ignoreSymlinks: ignoreSymlinks1  } = {
            ignoreSymlinks: false,
            ...options1
        };
        const items1 = await FileSystem.listItemsIn(pathOrFileInfo1, options1);
        if (ignoreSymlinks1) {
            return items1.filter((eachItem1)=>eachItem1.isFolder && !eachItem1.isSymlink);
        } else {
            return items1.filter((eachItem1)=>eachItem1.isFolder);
        }
    },
    async listFolderPathsIn (pathOrFileInfo1, options1 = {
        ignoreSymlinks: false
    }) {
        return (await FileSystem.listFolderItemsIn(pathOrFileInfo1, options1)).map((each11)=>each11.path);
    },
    async listFolderBasenamesIn (pathOrFileInfo1, options1 = {
        ignoreSymlinks: false
    }) {
        return (await FileSystem.listFolderItemsIn(pathOrFileInfo1, options1)).map((each11)=>each11.basename);
    },
    recursivelyIterateItemsIn (pathOrFileInfo1, options1 = {
        onlyHardlinks: false,
        dontFollowSymlinks: false,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        shouldntExplore: null,
        shouldntInclude: null
    }) {
        options1.recursively = true;
        if (options1.onlyHardlinks) {
            if (options1.shouldntInclude) {
                const originalshouldntInclude1 = options1.shouldntInclude;
                options1.shouldntInclude = (each11)=>each11.isSymlink || originalshouldntInclude1(each11);
            } else {
                options1.shouldntInclude = (each11)=>each11.isSymlink;
            }
        }
        if (options1.dontFollowSymlinks) {
            if (options1.shouldntExplore) {
                const originalShouldntExplore1 = options1.shouldntInclude;
                options1.shouldntExplore = (each11)=>each11.isSymlink || originalShouldntExplore1(each11);
            } else {
                options1.shouldntExplore = (each11)=>each11.isSymlink;
            }
        }
        return FileSystem.iterateItemsIn(pathOrFileInfo1, options1);
    },
    recursivelyIteratePathsIn (pathOrFileInfo1, options1 = {
        onlyHardlinks: false,
        dontFollowSymlinks: false,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        shouldntExplore: null,
        shouldntInclude: null
    }) {
        options1.recursively = true;
        if (options1.onlyHardlinks) {
            if (options1.shouldntInclude) {
                const originalshouldntInclude1 = options1.shouldntInclude;
                options1.shouldntInclude = (each11)=>each11.isSymlink || originalshouldntInclude1(each11);
            } else {
                options1.shouldntInclude = (each11)=>each11.isSymlink;
            }
        }
        return FileSystem.iteratePathsIn(pathOrFileInfo1, options1);
    },
    recursivelyListPathsIn (pathOrFileInfo1, options1 = {
        onlyHardlinks: false,
        dontFollowSymlinks: false,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        shouldntExplore: null,
        shouldntInclude: null
    }) {
        return asyncIteratorToList(FileSystem.recursivelyIteratePathsIn(pathOrFileInfo1, options1));
    },
    recursivelyListItemsIn (pathOrFileInfo1, options1 = {
        onlyHardlinks: false,
        dontFollowSymlinks: false,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        shouldntExplore: null,
        shouldntInclude: null
    }) {
        return asyncIteratorToList(FileSystem.recursivelyIterateItemsIn(pathOrFileInfo1, options1));
    },
    async *globIterator (pattern1, options1 = {
        startPath: null
    }) {
        var { startPath: startPath1 , ...iteratePathsOptions1 } = options1;
        startPath1 = startPath1 || ".";
        const regex1 = pattern1 instanceof RegExp ? pattern1 : globToRegExp(pattern1);
        for await (const eachPath11 of FileSystem.iteratePathsIn(startPath1, {
            recursively: true,
            ...iteratePathsOptions1
        })){
            if (eachPath11.match(regex1) || FileSystem.makeAbsolutePath(eachPath11).match(regex1)) {
                yield FileSystem.makeRelativePath({
                    from: startPath1,
                    to: eachPath11
                });
            }
        }
    },
    glob (pattern1, options1 = {
        startPath: null
    }) {
        return asyncIteratorToList(FileSystem.globIterator(pattern1, options1));
    },
    async getPermissions ({ path: path1  }) {
        const { mode: mode1  } = await Deno.lstat(path1);
        return {
            owner: {
                canRead: !!(0b0000000100000000 & mode1),
                canWrite: !!(0b0000000010000000 & mode1),
                canExecute: !!(0b0000000001000000 & mode1)
            },
            group: {
                canRead: !!(0b0000000000100000 & mode1),
                canWrite: !!(0b0000000000010000 & mode1),
                canExecute: !!(0b0000000000001000 & mode1)
            },
            others: {
                canRead: !!(0b0000000000000100 & mode1),
                canWrite: !!(0b0000000000000010 & mode1),
                canExecute: !!(0b0000000000000001 & mode1)
            }
        };
    },
    async addPermissions ({ path: path1 , permissions: permissions1 = {
        owner: {},
        group: {},
        others: {}
    } , recursively: recursively1 = false  }) {
        permissions1 = {
            owner: {},
            group: {},
            others: {},
            ...permissions1
        };
        let permissionNumber1 = 0b000000000;
        let fileInfo1;
        if (!(Object.keys(permissions1.owner).length === Object.keys(permissions1.group).length === Object.keys(permissions1.others).length === 3)) {
            fileInfo1 = await FileSystem.info(path1);
            permissionNumber1 = fileInfo1.lstat.mode & 0b0000000111111111;
        }
        if (permissions1.owner.canRead != null) {
            if (permissions1.owner.canRead) {
                permissionNumber1 |= 0b0100000000;
            } else {
                permissionNumber1 &= 0b1011111111;
            }
        }
        if (permissions1.owner.canWrite != null) {
            if (permissions1.owner.canWrite) {
                permissionNumber1 |= 0b0010000000;
            } else {
                permissionNumber1 &= 0b1101111111;
            }
        }
        if (permissions1.owner.canExecute != null) {
            if (permissions1.owner.canExecute) {
                permissionNumber1 |= 0b0001000000;
            } else {
                permissionNumber1 &= 0b1110111111;
            }
        }
        if (permissions1.group.canRead != null) {
            if (permissions1.group.canRead) {
                permissionNumber1 |= 0b0000100000;
            } else {
                permissionNumber1 &= 0b1111011111;
            }
        }
        if (permissions1.group.canWrite != null) {
            if (permissions1.group.canWrite) {
                permissionNumber1 |= 0b0000010000;
            } else {
                permissionNumber1 &= 0b1111101111;
            }
        }
        if (permissions1.group.canExecute != null) {
            if (permissions1.group.canExecute) {
                permissionNumber1 |= 0b0000001000;
            } else {
                permissionNumber1 &= 0b1111110111;
            }
        }
        if (permissions1.others.canRead != null) {
            if (permissions1.others.canRead) {
                permissionNumber1 |= 0b0000000100;
            } else {
                permissionNumber1 &= 0b1111111011;
            }
        }
        if (permissions1.others.canWrite != null) {
            if (permissions1.others.canWrite) {
                permissionNumber1 |= 0b0000000010;
            } else {
                permissionNumber1 &= 0b1111111101;
            }
        }
        if (permissions1.others.canExecute != null) {
            if (permissions1.others.canExecute) {
                permissionNumber1 |= 0b0000000001;
            } else {
                permissionNumber1 &= 0b1111111110;
            }
        }
        if (recursively1 == false || fileInfo1 instanceof Object && fileInfo1.isFile || !(fileInfo1 instanceof Object) && (await FileSystem.info(path1)).isFile) {
            return Deno.chmod(path1.path || path1, permissionNumber1);
        } else {
            const promises1 = [];
            const paths1 = await FileSystem.recursivelyListPathsIn(path1, {
                onlyHardlinks: false,
                dontFollowSymlinks: false,
                ...recursively1
            });
            for (const eachPath11 of paths1){
                promises1.push(Deno.chmod(eachPath11, permissionNumber1).catch(console.error));
            }
            return new Promise(async (resolve1, reject1)=>{
                for (const each11 of promises1){
                    await each11;
                }
                resolve1();
            });
        }
    },
    setPermissions (...args1) {
        return FileSystem.addPermissions(...args1);
    },
    async write ({ path: path1 , data: data1 , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        path1 = pathStandardize(path1);
        await grabPathLock(path1);
        if (force1) {
            FileSystem.sync.ensureIsFolder(FileSystem.parentPath(path1), {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
            const info1 = FileSystem.sync.info(path1);
            if (info1.isDirectory) {
                FileSystem.sync.remove(path1);
            }
        }
        let output2;
        if (isGeneratorType(data1) || data1[Symbol.iterator] || data1[Symbol.asyncIterator]) {
            const file1 = await Deno.open(path1, {
                read: true,
                write: true,
                create: true,
                truncate: true
            });
            const encoder1 = new TextEncoder();
            const encode1 = encoder1.encode.bind(encoder1);
            try {
                for await (let packet1 of data1){
                    if (typeof packet1 == 'string') {
                        packet1 = encode1(packet1);
                    }
                    await Deno.write(file1.rid, packet1);
                }
            } finally{
                Deno.close(file1.rid);
            }
        } else if (typeof data1 == 'string') {
            output2 = await Deno.writeTextFile(path1, data1);
        } else {
            output2 = await Deno.writeFile(path1, data1);
        }
        delete locker[path1];
        return output2;
    },
    async append ({ path: path1 , data: data1 , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        path1 = pathStandardize(path1);
        await grabPathLock(path1);
        if (force1) {
            FileSystem.sync.ensureIsFolder(FileSystem.parentPath(path1), {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
            const info1 = await FileSystem.info(path1);
            if (info1.isDirectory) {
                await FileSystem.remove(path1);
            }
        }
        const file1 = await Deno.open(path1, {
            read: true,
            write: true,
            create: true
        });
        await file1.seek(0, Deno.SeekMode.End);
        if (typeof data1 == 'string') {
            await file1.write(new TextEncoder().encode(data1));
        } else {
            await file1.write(data1);
        }
        await file1.close();
        delete locker[path1];
    },
    async makeHardPathTo (path1, options1 = {}) {
        var { cache: cache1  } = {
            cache: {},
            ...options1
        };
        if (cache1[path1]) {
            return cache1[path1];
        }
        const [folders1, name1, extension1] = FileSystem.pathPieces(FileSystem.makeAbsolutePath(path1));
        let topDownPath1 = ``;
        for (const eachFolderName1 of folders1){
            topDownPath1 += `/${eachFolderName1}`;
            if (cache1[topDownPath1]) {
                topDownPath1 = cache1[topDownPath1];
                continue;
            }
            const unchangedPath1 = topDownPath1;
            const info1 = await FileSystem.info(topDownPath1);
            if (info1.isSymlink) {
                const absolutePathToIntermediate1 = await FileSystem.finalTargetOf(info1.path, {
                    _parentsHaveBeenChecked: true,
                    cache: cache1
                });
                if (absolutePathToIntermediate1 == null) {
                    return null;
                }
                topDownPath1 = topDownPath1.slice(0, -(eachFolderName1.length + 1));
                const relativePath1 = FileSystem.makeRelativePath({
                    from: topDownPath1,
                    to: absolutePathToIntermediate1
                });
                topDownPath1 += `/${relativePath1}`;
                topDownPath1 = normalize(topDownPath1);
            }
            cache1[unchangedPath1] = topDownPath1;
        }
        const hardPath1 = normalize(`${topDownPath1}/${name1}${extension1}`);
        cache1[path1] = hardPath1;
        return hardPath1;
    },
    async walkUpImport (path1, start1) {
        const startPath1 = start1 || FileSystem.pathOfCaller(1);
        const nearestPath1 = await FileSystem.walkUpUntil(path1, startPath1);
        if (nearestPath1) {
            const absolutePath1 = FileSystem.makeAbsolutePath(`${nearestPath1}/${path1}`);
            return import(toFileUrl(absolutePath1).href);
        } else {
            throw Error(`Tried to walkUpImport ${path1}, starting at ${startPath1}, but was unable to find any files`);
        }
    },
    pathOfCaller (callerNumber1 = undefined) {
        const err1 = new Error();
        let filePaths1 = findAll(/^.+file:\/\/(\/[\w\W]*?):/gm, err1.stack).map((each11)=>each11[1]);
        if (callerNumber1) {
            filePaths1 = filePaths1.slice(callerNumber1);
        }
        try {
            const secondPath1 = filePaths1[1];
            if (secondPath1) {
                try {
                    if (Deno.statSync(secondPath1).isFile) {
                        return secondPath1;
                    }
                } catch (error1) {}
            }
        } catch (error1) {}
        return Deno.cwd();
    },
    sync: {
        info (fileOrFolderPath1, _cachedLstat1 = null) {
            let lstat1 = _cachedLstat1;
            try {
                lstat1 = Deno.lstatSync(fileOrFolderPath1);
            } catch (error1) {
                lstat1 = {
                    doesntExist: true
                };
            }
            let stat1 = {};
            if (!lstat1.isSymlink) {
                stat1 = {
                    isBrokenLink: false,
                    isLoopOfLinks: false
                };
            } else {
                try {
                    stat1 = Deno.statSync(fileOrFolderPath1);
                } catch (error1) {
                    if (error1.message.match(/^Too many levels of symbolic links/)) {
                        stat1.isBrokenLink = true;
                        stat1.isLoopOfLinks = true;
                    } else if (error1.message.match(/^No such file or directory/)) {
                        stat1.isBrokenLink = true;
                    } else {
                        throw error1;
                    }
                }
            }
            return new ItemInfo({
                path: fileOrFolderPath1,
                _lstatData: lstat1,
                _statData: stat1
            });
        },
        remove (fileOrFolder1) {
            if (fileOrFolder1 instanceof Array) {
                return fileOrFolder1.map(FileSystem.sync.remove);
            }
            fileOrFolder1 = fileOrFolder1.path || fileOrFolder1;
            let exists1 = false;
            let item1;
            try {
                item1 = Deno.lstatSync(fileOrFolder1);
                exists1 = true;
            } catch (error1) {}
            if (exists1) {
                if (item1.isFile || item1.isSymlink) {
                    return Deno.removeSync(fileOrFolder1.replace(/\/+$/, ""));
                } else {
                    return Deno.removeSync(fileOrFolder1.replace(/\/+$/, ""), {
                        recursive: true
                    });
                }
            }
        },
        moveOutOfTheWay (path1, options1 = {
            extension: null
        }) {
            path1 = pathStandardize(path1);
            const extension1 = options1?.extension || FileSystem.defaultRenameExtension;
            const info1 = FileSystem.sync.info(path1);
            if (info1.exists) {
                const newPath1 = path1 + extension1;
                FileSystem.sync.moveOutOfTheWay(newPath1, {
                    extension: extension1
                });
                moveSync(path1, newPath1);
            }
        },
        ensureIsFolder (path1, options1 = {
            overwrite: false,
            renameExtension: null
        }) {
            path1 = pathStandardize(path1);
            const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
            path1 = path1.path || path1;
            path1 = FileSystem.makeAbsolutePath(path1);
            const parentPath1 = dirname(path1);
            if (parentPath1 == path1) {
                return;
            }
            const parent1 = FileSystem.sync.info(parentPath1);
            if (!parent1.isDirectory) {
                FileSystem.sync.ensureIsFolder(parentPath1, {
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
            }
            let pathInfo1 = FileSystem.sync.info(path1);
            if (pathInfo1.exists && !pathInfo1.isDirectory) {
                if (overwrite1) {
                    FileSystem.sync.remove(path1);
                } else {
                    FileSystem.sync.moveOutOfTheWay(path1, {
                        extension: renameExtension1
                    });
                }
            }
            Deno.mkdirSync(path1, {
                recursive: true
            });
            return path1;
        },
        clearAPathFor (path1, options1 = {
            overwrite: false,
            renameExtension: null
        }) {
            const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
            const originalPath1 = path1;
            const paths1 = [];
            while(dirname(path1) !== path1){
                paths1.push(path1);
                path1 = dirname(path1);
            }
            for (const eachPath11 of paths1.reverse()){
                const info1 = FileSystem.sync.info(eachPath11);
                if (!info1.exists) {
                    break;
                } else if (info1.isFile) {
                    if (overwrite1) {
                        FileSystem.sync.remove(eachPath11);
                    } else {
                        FileSystem.sync.moveOutOfTheWay(eachPath11, {
                            extension: renameExtension1
                        });
                    }
                }
            }
            Deno.mkdirSync(dirname(originalPath1), {
                recursive: true
            });
            return originalPath1;
        },
        append ({ path: path1 , data: data1 , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
            path1 = pathStandardize(path1);
            if (force1) {
                FileSystem.sync.ensureIsFolder(FileSystem.parentPath(path1), {
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
                const info1 = FileSystem.sync.info(path1);
                if (info1.isDirectory) {
                    FileSystem.sync.remove(path1);
                }
            }
            const file1 = Deno.openSync(path1, {
                read: true,
                write: true,
                create: true
            });
            file1.seekSync(0, Deno.SeekMode.End);
            if (typeof data1 == 'string') {
                file1.writeSync(new TextEncoder().encode(data1));
            } else {
                file1.writeSync(data1);
            }
            file1.close();
        }
    }
};
FileSystem.glob;
const indent = ({ string: string11 , by: by1 = "    " , noLead: noLead1 = false  })=>(noLead1 ? "" : by1) + string11.replace(/\n/g, "\n" + by1);
const toString = (value2)=>{
    if (typeof value2 == 'symbol') {
        return toRepresentation(value2);
    } else if (!(value2 instanceof Object)) {
        return value2 != null ? value2.toString() : `${value2}`;
    } else {
        return toRepresentation(value2);
    }
};
const digitsToEnglishArray = (value2)=>{
    value2 = toString(value2);
    if (value2.length > 1) {
        return [].concat(...[
            ...value2
        ].map((each2)=>digitsToEnglishArray(each2)));
    }
    if (value2 === "-") {
        return [
            "negative"
        ];
    } else if (value2 === ".") {
        return [
            "point"
        ];
    } else if (value2 === "0") {
        return [
            "zero"
        ];
    } else if (value2 === "1") {
        return [
            "one"
        ];
    } else if (value2 === "2") {
        return [
            "two"
        ];
    } else if (value2 === "3") {
        return [
            "three"
        ];
    } else if (value2 === "4") {
        return [
            "four"
        ];
    } else if (value2 === "5") {
        return [
            "five"
        ];
    } else if (value2 === "6") {
        return [
            "six"
        ];
    } else if (value2 === "7") {
        return [
            "seven"
        ];
    } else if (value2 === "8") {
        return [
            "eight"
        ];
    } else if (value2 === "9") {
        return [
            "nine"
        ];
    } else {
        return "";
    }
};
const reprSymbol = Symbol.for("representation");
const denoInspectSymbol = Symbol.for("Deno.customInspect");
const toRepresentation = (item1)=>{
    const alreadySeen1 = new Set();
    const recursionWrapper1 = (item1)=>{
        if (item1 instanceof Object) {
            if (alreadySeen1.has(item1)) {
                return `[Self Reference]`;
            } else {
                alreadySeen1.add(item1);
            }
        }
        let output11;
        if (item1 === undefined) {
            output11 = "undefined";
        } else if (item1 === null) {
            output11 = "null";
        } else if (typeof item1 == 'string') {
            output11 = JSON.stringify(item1);
        } else if (typeof item1 == 'symbol') {
            if (!item1.description) {
                output11 = "Symbol()";
            } else {
                const globalVersion1 = Symbol.for(item1.description);
                if (globalVersion1 == item1) {
                    output11 = `Symbol.for(${JSON.stringify(item1.description)})`;
                } else {
                    output11 = `Symbol(${JSON.stringify(item1.description)})`;
                }
            }
        } else if (item1 instanceof Date) {
            output11 = `new Date(${item1.getTime()})`;
        } else if (item1 instanceof Array) {
            output11 = `[${item1.map((each2)=>recursionWrapper1(each2)).join(",")}]`;
        } else if (item1 instanceof Set) {
            output11 = `new Set(${[
                ...item1
            ].map((each2)=>recursionWrapper1(each2)).join(",")})`;
        } else if (item1 instanceof Object && item1.constructor == Object) {
            output11 = pureObjectRepr1(string);
        } else if (item1 instanceof Map) {
            let string11 = "new Map(";
            for (const [key1, value2] of item1.entries()){
                const stringKey1 = recursionWrapper1(key1);
                const stringValue1 = recursionWrapper1(value2);
                if (!stringKey1.match(/\n/g)) {
                    string11 += `\n  [${stringKey1}, ${indent({
                        string: stringValue1,
                        by: "  ",
                        noLead: true
                    })}],`;
                } else {
                    string11 += `\n  [${indent({
                        string: stringKey1,
                        by: "  ",
                        noLead: true
                    })},\n  ${indent({
                        string: stringValue1,
                        by: "    ",
                        noLead: true
                    })}],`;
                }
            }
            string11 += "\n)";
            output11 = string11;
        } else {
            if (item1[reprSymbol] instanceof Function) {
                try {
                    output11 = item1[reprSymbol]();
                    return output11;
                } catch (error1) {}
            }
            if (item1[denoInspectSymbol] instanceof Function) {
                try {
                    output11 = item1[denoInspectSymbol]();
                    return output11;
                } catch (error1) {}
            }
            try {
                output11 = item1.toString();
                if (output11 !== "[object Object]") {
                    return output11;
                }
            } catch (error1) {}
            try {
                if (item1.constructor instanceof Function && item1.prototype && typeof item1.name == 'string') {
                    output11 = `class ${item1.name} { /*...*/ }`;
                    return output11;
                }
            } catch (error1) {}
            try {
                if (item1.constructor instanceof Function && typeof item1.constructor.name == 'string') {
                    output11 = `new ${item1.constructor.name}(${pureObjectRepr1(item1)})`;
                    return output11;
                }
            } catch (error1) {}
            return pureObjectRepr1(item1);
        }
        return output11;
    };
    const pureObjectRepr1 = (item1)=>{
        let string11 = "{";
        for (const [key1, value2] of Object.entries(item1)){
            const stringKey1 = recursionWrapper1(key1);
            const stringValue1 = recursionWrapper1(value2);
            string11 += `\n  ${stringKey1}: ${indent({
                string: stringValue1,
                by: "  ",
                noLead: true
            })},`;
        }
        string11 += "\n}";
        return string11;
    };
    return recursionWrapper1(item1);
};
const findAll = (regexPattern1, sourceString1)=>{
    var output11 = [];
    var match1;
    var regexPatternWithGlobal1 = regexPattern1.global ? regexPattern1 : RegExp(regexPattern1, regexPattern1.flags + "g");
    while(match1 = regexPatternWithGlobal1.exec(sourceString1)){
        output11.push(match1);
        if (match1[0].length == 0) {
            regexPatternWithGlobal1.lastIndex += 1;
        }
    }
    return output11;
};
function escapeRegexMatch(string11) {
    return string11.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
let proxyRegExp;
const regexProxyOptions = Object.freeze({
    get (original1, key1) {
        if (typeof key1 == 'string' && key1.match(/^[igymu]+$/)) {
            return proxyRegExp(original1, key1);
        }
        return original1[key1];
    },
    set (original1, key1, value2) {
        return original1[key1] = value2;
    }
});
proxyRegExp = (parent1, flags1)=>{
    const regex1 = new RegExp(parent1, flags1);
    const output11 = new Proxy(regex1, regexProxyOptions);
    Object.setPrototypeOf(output11, Object.getPrototypeOf(regex1));
    return output11;
};
function regexWithStripWarning(shouldStrip1) {
    return (strings1, ...values1)=>{
        let newRegexString1 = "";
        for (const [string11, value2] of zip(strings1, values1)){
            newRegexString1 += string11;
            if (value2 instanceof RegExp) {
                if (!shouldStrip1 && (value2.ignoreCase || value2.sticky || value2.multiline || value2.unicode)) {
                    console.warn(`Warning: flags inside of regex:\n    The RegExp trigging this warning is: ${value2}\n    When calling the regex interpolater (e.g. regex\`something\${stuff}\`)\n    one of the \${} values (the one above) was a RegExp with a flag enabled\n    e.g. /stuff/i  <- i = ignoreCase flag enabled\n    When the /stuff/i gets interpolated, its going to loose its flags\n    (thats what I'm warning you about)\n    \n    To disable/ignore this warning do:\n        regex.stripFlags\`something\${/stuff/i}\`\n    If you want to add flags to the output of regex\`something\${stuff}\` do:\n        regex\`something\${stuff}\`.i   // ignoreCase\n        regex\`something\${stuff}\`.ig  // ignoreCase and global\n        regex\`something\${stuff}\`.gi  // functionally equivlent\n`);
                }
                const regexContent1 = `${value2}`.slice(1).replace(/\/.*$/, "");
                newRegexString1 += `(?:${regexContent1})`;
            } else if (value2 != null) {
                newRegexString1 += escapeRegexMatch(toString(value2));
            }
        }
        return proxyRegExp(newRegexString1, "");
    };
}
const regex = regexWithStripWarning(false);
regex.stripFlags = regexWithStripWarning(true);
function levenshteinDistanceBetween(s11, s21) {
    if (s11.length > s21.length) {
        [s11, s21] = [
            s21,
            s11
        ];
    }
    let distances1 = Array.from({
        length: s11.length + 1
    }, (_1, i3)=>i3);
    for(let i21 = 0; i21 < s21.length; i21++){
        let distances_1 = [
            i21 + 1
        ];
        for(let i11 = 0; i11 < s11.length; i11++){
            let c11 = s11[i11];
            let c21 = s21[i21];
            if (c11 === c21) {
                distances_1.push(distances1[i11]);
            } else {
                distances_1.push(1 + Math.min(distances1[i11], distances1[i11 + 1], distances_1[distances_1.length - 1]));
            }
        }
        distances1 = distances_1;
    }
    return distances1[distances1.length - 1];
}
function levenshteinDistanceOrdering({ word: word1 , otherWords: otherWords1  }) {
    word1 = word1.toLowerCase();
    let prioritized1 = [
        ...otherWords1
    ].sort((a1, b1)=>levenshteinDistanceBetween(word1, a1) - levenshteinDistanceBetween(word1, b1));
    return prioritized1;
}
const textDecoder = new TextDecoder('utf-8');
const textEncoder = new TextEncoder('utf-8');
const utf8BytesToString = textDecoder.decode.bind(textDecoder);
textEncoder.encode.bind(textEncoder);
ensure({
    denoVersion: "1.17.1"
});
const cache = {};
class ItemInfo {
    constructor({ path: path1 , _lstatData: _lstatData1 , _statData: _statData1  }){
        this.path = path1;
        this._lstat = _lstatData1;
        this._data = _statData1;
    }
    refresh() {
        this._lstat = null;
        this._data = null;
    }
    get lstat() {
        if (!this._lstat) {
            try {
                this._lstat = Deno.lstatSync(this.path);
            } catch (error1) {
                this._lstat = {
                    doesntExist: true
                };
            }
        }
        return this._lstat;
    }
    get stat() {
        if (!this._stat) {
            const lstat1 = this.lstat;
            if (!lstat1.isSymlink) {
                this._stat = {
                    isBrokenLink: false,
                    isLoopOfLinks: false
                };
            } else {
                try {
                    this._stat = Deno.statSync(this.path);
                } catch (error1) {
                    this._stat = {};
                    if (error1.message.match(/^Too many levels of symbolic links/)) {
                        this._stat.isBrokenLink = true;
                        this._stat.isLoopOfLinks = true;
                    } else if (error1.message.match(/^No such file or directory/)) {
                        this._stat.isBrokenLink = true;
                    } else {
                        throw error1;
                    }
                }
            }
        }
        return this._stat;
    }
    get exists() {
        const lstat1 = this.lstat;
        return !lstat1.doesntExist;
    }
    get name() {
        return parse(this.path).name;
    }
    get extension() {
        return parse(this.path).ext;
    }
    get basename() {
        return this.path && basename(this.path);
    }
    get parentPath() {
        return this.path && dirname(this.path);
    }
    relativePathFrom(parentPath1) {
        return relative(parentPath1, this.path);
    }
    get link() {
        const lstat1 = this.lstat;
        if (lstat1.isSymlink) {
            return Deno.readLinkSync(this.path);
        } else {
            return null;
        }
    }
    get isSymlink() {
        const lstat1 = this.lstat;
        return !!lstat1.isSymlink;
    }
    get isRelativeSymlink() {
        const lstat1 = this.lstat;
        const isNotSymlink1 = !lstat1.isSymlink;
        if (isNotSymlink1) {
            return false;
        }
        const relativeOrAbsolutePath1 = Deno.readLinkSync(this.path);
        return !isAbsolute(relativeOrAbsolutePath1);
    }
    get isAbsoluteSymlink() {
        const lstat1 = this.lstat;
        const isNotSymlink1 = !lstat1.isSymlink;
        if (isNotSymlink1) {
            return false;
        }
        const relativeOrAbsolutePath1 = Deno.readLinkSync(this.path);
        return isAbsolute(relativeOrAbsolutePath1);
    }
    get isBrokenLink() {
        const stat1 = this.stat;
        return !!stat1.isBrokenLink;
    }
    get isLoopOfLinks() {
        const stat1 = this.stat;
        return !!stat1.isLoopOfLinks;
    }
    get isFile() {
        const lstat1 = this.lstat;
        if (lstat1.doesntExist) {
            return false;
        }
        if (!lstat1.isSymlink) {
            return lstat1.isFile;
        } else {
            return !!this.stat.isFile;
        }
    }
    get isFolder() {
        const lstat1 = this.lstat;
        if (lstat1.doesntExist) {
            return false;
        }
        if (!lstat1.isSymlink) {
            return lstat1.isDirectory;
        } else {
            return !!this.stat.isDirectory;
        }
    }
    get sizeInBytes() {
        const lstat1 = this.lstat;
        return lstat1.size;
    }
    get permissions() {
        const { mode: mode1  } = this.lstat;
        return {
            owner: {
                canRead: !!(0b0000000100000000 & mode1),
                canWrite: !!(0b0000000010000000 & mode1),
                canExecute: !!(0b0000000001000000 & mode1)
            },
            group: {
                canRead: !!(0b0000000000100000 & mode1),
                canWrite: !!(0b0000000000010000 & mode1),
                canExecute: !!(0b0000000000001000 & mode1)
            },
            others: {
                canRead: !!(0b0000000000000100 & mode1),
                canWrite: !!(0b0000000000000010 & mode1),
                canExecute: !!(0b0000000000000001 & mode1)
            }
        };
    }
    get isDirectory() {
        return this.isFolder;
    }
    get dirname() {
        return this.parentPath;
    }
    toJSON() {
        return {
            exists: this.exists,
            name: this.name,
            extension: this.extension,
            basename: this.basename,
            parentPath: this.parentPath,
            isSymlink: this.isSymlink,
            isBrokenLink: this.isBrokenLink,
            isLoopOfLinks: this.isLoopOfLinks,
            isFile: this.isFile,
            isFolder: this.isFolder,
            sizeInBytes: this.sizeInBytes,
            permissions: this.permissions,
            isDirectory: this.isDirectory,
            dirname: this.dirname
        };
    }
}
const defaultOptionsHelper = (options1)=>({
        renameExtension: options1.renameExtension || FileSystem.defaultRenameExtension,
        overwrite: options1.overwrite
    });
const fileLockSymbol = Symbol.for("fileLock");
const locker = globalThis[fileLockSymbol] || {};
const grabPathLock = async (path1)=>{
    while(locker[path1]){
        await new Promise((resolve1)=>setTimeout(resolve1, 70));
    }
    locker[path1] = true;
};
const FileSystem = {
    denoExecutablePath: Deno.execPath(),
    parentPath: dirname,
    dirname: dirname,
    basename: basename,
    extname: extname,
    join: join,
    defaultRenameExtension: ".old",
    get home () {
        if (!cache.home) {
            if (Deno.build.os != "windows") {
                cache.home = Deno.env.get("HOME");
            } else {
                cache.home = Deno.env.get("HOMEPATH");
            }
        }
        return cache.home;
    },
    get workingDirectory () {
        return Deno.cwd();
    },
    set workingDirectory (value){
        Deno.chdir(value);
    },
    get cwd () {
        return FileSystem.workingDirectory;
    },
    set cwd (value){
        return FileSystem.workingDirectory = value;
    },
    get pwd () {
        return FileSystem.cwd;
    },
    set pwd (value){
        return FileSystem.cwd = value;
    },
    cd (path1) {
        Deno.chdir(path1);
    },
    changeDirectory (path1) {
        Deno.chdir(path1);
    },
    get thisFile () {
        const err1 = new Error();
        const filePaths1 = findAll(/^.+file:\/\/(\/[\w\W]*?):/gm, err1.stack).map((each11)=>each11[1]);
        const firstPath1 = filePaths1[0];
        if (firstPath1) {
            try {
                if (Deno.statSync(firstPath1).isFile) {
                    return firstPath1;
                }
            } catch (error1) {}
        }
        return ':<interpreter>:';
    },
    get thisFolder () {
        const err1 = new Error();
        const filePaths1 = findAll(/^.+file:\/\/(\/[\w\W]*?):/gm, err1.stack).map((each11)=>each11[1]);
        const firstPath1 = filePaths1[0];
        if (firstPath1) {
            try {
                if (Deno.statSync(firstPath1).isFile) {
                    return dirname(firstPath1);
                }
            } catch (error1) {}
        }
        return Deno.cwd();
    },
    async read (path1) {
        await grabPathLock(path1);
        let output2;
        try {
            output2 = await Deno.readTextFile(path1);
        } catch (error1) {}
        delete locker[path1];
        return output2;
    },
    async readBytes (path1) {
        await grabPathLock(path1);
        let output2;
        try {
            output2 = await Deno.readFile(path1);
        } catch (error1) {}
        delete locker[path1];
        return output2;
    },
    async *readLinesIteratively (path1) {
        await grabPathLock(path1);
        try {
            const file1 = await Deno.open(path1);
            try {
                yield* readLines(file1);
            } finally{
                Deno.close(file1.rid);
            }
        } finally{
            delete locker[path1];
        }
    },
    async info (fileOrFolderPath1, _cachedLstat1 = null) {
        const lstat1 = _cachedLstat1 || await Deno.lstat(fileOrFolderPath1).catch(()=>({
                doesntExist: true
            }));
        let stat1 = {};
        if (!lstat1.isSymlink) {
            stat1 = {
                isBrokenLink: false,
                isLoopOfLinks: false
            };
        } else {
            try {
                stat1 = await Deno.stat(fileOrFolderPath1);
            } catch (error1) {
                if (error1.message.match(/^Too many levels of symbolic links/)) {
                    stat1.isBrokenLink = true;
                    stat1.isLoopOfLinks = true;
                } else if (error1.message.match(/^No such file or directory/)) {
                    stat1.isBrokenLink = true;
                } else {
                    if (!error1.message.match(/^PermissionDenied:/)) {
                        return {
                            doesntExist: true,
                            permissionDenied: true
                        };
                    }
                    throw error1;
                }
            }
        }
        return new ItemInfo({
            path: fileOrFolderPath1,
            _lstatData: lstat1,
            _statData: stat1
        });
    },
    async move ({ item: item1 , newParentFolder: newParentFolder1 , newName: newName1 , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        const oldPath1 = item1.path || item1;
        const oldName1 = FileSystem.basename(oldPath1);
        const itemInfo1 = item1 instanceof Object || await FileSystem.info(oldPath1);
        const newPath1 = `${newParentFolder1}/${newName1 || oldName1}`;
        if (itemInfo1.isSymlink && !item1.isBrokenLink) {
            const link1 = Deno.readLinkSync(itemInfo1.path);
            if (!isAbsolute(link1)) {
                const linkTargetBeforeMove1 = `${FileSystem.parentPath(itemInfo1.path)}/${link1}`;
                await FileSystem.relativeLink({
                    existingItem: linkTargetBeforeMove1,
                    newItem: newPath1,
                    force: force1,
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
                await FileSystem.remove(itemInfo1);
            }
        }
        if (force1) {
            FileSystem.sync.clearAPathFor(newPath1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
        }
        await move(oldPath1, newPath1);
    },
    async remove (fileOrFolder1) {
        if (fileOrFolder1 instanceof Array) {
            return Promise.all(fileOrFolder1.map(FileSystem.remove));
        }
        fileOrFolder1 = fileOrFolder1.path || fileOrFolder1;
        const itemInfo1 = await FileSystem.info(fileOrFolder1);
        if (itemInfo1.isFile || itemInfo1.isSymlink) {
            return Deno.remove(itemInfo1.path.replace(/\/+$/, ""));
        } else if (itemInfo1.exists) {
            return Deno.remove(itemInfo1.path.replace(/\/+$/, ""), {
                recursive: true
            });
        }
    },
    normalize: (path1)=>normalize(path1.path || path1).replace(/\/$/, ""),
    isAbsolutePath: isAbsolute,
    isRelativePath: (...args1)=>!isAbsolute(...args1),
    makeRelativePath: ({ from: from1 , to: to1  })=>relative(from1.path || from1, to1.path || to1),
    makeAbsolutePath: (path1)=>{
        if (!isAbsolute(path1)) {
            return normalize(join(Deno.cwd(), path1));
        } else {
            return normalize(path1);
        }
    },
    async finalTargetOf (path1, options1 = {}) {
        const { _parentsHaveBeenChecked: _parentsHaveBeenChecked1 , cache: cache1  } = {
            _parentsHaveBeenChecked: false,
            cache: {},
            ...options1
        };
        const originalWasItem1 = path1 instanceof ItemInfo;
        path1 = path1.path || path1;
        let result1 = await Deno.lstat(path1).catch(()=>({
                doesntExist: true
            }));
        if (result1.doesntExist) {
            return null;
        }
        path1 = await FileSystem.makeHardPathTo(path1, {
            cache: cache1
        });
        const pathChain1 = [];
        while(result1.isSymlink){
            const relativeOrAbsolutePath1 = await Deno.readLink(path1);
            if (isAbsolute(relativeOrAbsolutePath1)) {
                path1 = relativeOrAbsolutePath1;
            } else {
                path1 = `${FileSystem.parentPath(path1)}/${relativeOrAbsolutePath1}`;
            }
            result1 = await Deno.lstat(path1).catch(()=>({
                    doesntExist: true
                }));
            if (result1.doesntExist) {
                return null;
            }
            path1 = await FileSystem.makeHardPathTo(path1, {
                cache: cache1
            });
            if (pathChain1.includes(path1)) {
                return null;
            }
            pathChain1.push(path1);
        }
        path1 = FileSystem.normalize(path1);
        if (originalWasItem1) {
            return new ItemInfo({
                path: path1
            });
        } else {
            return path1;
        }
    },
    async nextTargetOf (path1, options1 = {}) {
        const originalWasItem1 = path1 instanceof ItemInfo;
        const item1 = originalWasItem1 ? path1 : new ItemInfo({
            path: path1
        });
        const lstat1 = item1.lstat;
        if (lstat1.isSymlink) {
            const relativeOrAbsolutePath1 = Deno.readLinkSync(item1.path);
            if (isAbsolute(relativeOrAbsolutePath1)) {
                if (originalWasItem1) {
                    return new ItemInfo({
                        path: relativeOrAbsolutePath1
                    });
                } else {
                    return relativeOrAbsolutePath1;
                }
            } else {
                const path1 = `${await FileSystem.makeHardPathTo(dirname(item1.path))}/${relativeOrAbsolutePath1}`;
                if (originalWasItem1) {
                    return new ItemInfo({
                        path: path1
                    });
                } else {
                    return path1;
                }
            }
        } else {
            if (originalWasItem1) {
                return item1;
            } else {
                return item1.path;
            }
        }
    },
    async ensureIsFile (path1, options1 = {
        overwrite: false,
        renameExtension: null
    }) {
        const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
        await FileSystem.ensureIsFolder(FileSystem.parentPath(path1), {
            overwrite: overwrite1,
            renameExtension: renameExtension1
        });
        path1 = path1.path || path1;
        const pathInfo1 = await FileSystem.info(path1);
        if (pathInfo1.isFile && !pathInfo1.isDirectory) {
            return path1;
        } else {
            await FileSystem.write({
                path: path1,
                data: ""
            });
            return path1;
        }
    },
    async ensureIsFolder (path1, options1 = {
        overwrite: false,
        renameExtension: null
    }) {
        const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
        path1 = path1.path || path1;
        path1 = FileSystem.makeAbsolutePath(path1);
        const parentPath1 = dirname(path1);
        if (parentPath1 == path1) {
            return;
        }
        const parent1 = await FileSystem.info(parentPath1);
        if (!parent1.isDirectory) {
            FileSystem.sync.ensureIsFolder(parentPath1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
        }
        let pathInfo1 = FileSystem.sync.info(path1);
        if (pathInfo1.exists && !pathInfo1.isDirectory) {
            if (overwrite1) {
                await FileSystem.remove(path1);
            } else {
                await FileSystem.moveOutOfTheWay(eachPath, {
                    extension: renameExtension1
                });
            }
        }
        await Deno.mkdir(path1, {
            recursive: true
        });
        return path1;
    },
    async clearAPathFor (path1, options1 = {
        overwrite: false,
        renameExtension: null
    }) {
        const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
        const originalPath1 = path1;
        const paths1 = [];
        while(dirname(path1) !== path1){
            paths1.push(path1);
            path1 = dirname(path1);
        }
        for (const eachPath11 of paths1.reverse()){
            const info1 = await FileSystem.info(eachPath11);
            if (!info1.exists) {
                break;
            } else if (info1.isFile) {
                if (overwrite1) {
                    await FileSystem.remove(eachPath11);
                } else {
                    await FileSystem.moveOutOfTheWay(eachPath11, {
                        extension: renameExtension1
                    });
                }
            }
        }
        await Deno.mkdir(dirname(originalPath1), {
            recursive: true
        });
        return originalPath1;
    },
    async moveOutOfTheWay (path1, options1 = {
        extension: null
    }) {
        const extension1 = options1?.extension || FileSystem.defaultRenameExtension;
        const info1 = await FileSystem.info(path1);
        if (info1.exists) {
            const newPath1 = path1 + extension1;
            await FileSystem.moveOutOfTheWay(newPath1, {
                extension: extension1
            });
            await move(path1, newPath1);
        }
    },
    allParentPaths (path1) {
        const pathStartsWithDotSlash1 = path1.startsWith("./");
        path1 = FileSystem.normalize(path1);
        if (path1 === ".") {
            return [];
        }
        const dotGotRemoved1 = pathStartsWithDotSlash1 && !path1.startsWith("./");
        let previousPath1 = null;
        let allPaths1 = [];
        while(1){
            previousPath1 = path1;
            path1 = FileSystem.parentPath(path1);
            if (previousPath1 === path1) {
                break;
            }
            allPaths1.push(path1);
        }
        allPaths1.reverse();
        allPaths1 = allPaths1.filter((each11)=>each11 != ".");
        if (dotGotRemoved1) {
            allPaths1.push(".");
        }
        return allPaths1;
    },
    async walkUpUntil (fileToFind1, startPath1 = null) {
        let here1 = startPath1 || Deno.cwd();
        if (!isAbsolute(here1)) {
            here1 = join(cwd, fileToFind1);
        }
        while(1){
            let checkPath1 = join(here1, fileToFind1);
            const pathInfo1 = await Deno.lstat(checkPath1).catch(()=>({
                    doesntExist: true
                }));
            if (!pathInfo1.doesntExist) {
                return here1;
            }
            if (here1 == dirname(here1)) {
                return null;
            } else {
                here1 = dirname(here1);
            }
        }
    },
    async copy ({ from: from1 , to: to1 , preserveTimestamps: preserveTimestamps1 = true , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        const existingItemDoesntExist1 = (await Deno.stat(from1).catch(()=>({
                doesntExist: true
            }))).doesntExist;
        if (existingItemDoesntExist1) {
            throw Error(`\nTried to copy from:${from1}, to:${to1}\nbut "from" didn't seem to exist\n\n`);
        }
        if (force1) {
            FileSystem.sync.clearAPathFor(to1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
        }
        await FileSystem.info(from1);
        return copy(from1, to1, {
            force: force1,
            preserveTimestamps: true
        });
    },
    async relativeLink ({ existingItem: existingItem1 , newItem: newItem1 , force: force1 = true , overwrite: overwrite1 = false , allowNonExistingTarget: allowNonExistingTarget1 = false , renameExtension: renameExtension1 = null  }) {
        const existingItemPath1 = (existingItem1.path || existingItem1).replace(/\/+$/, "");
        const newItemPath1 = FileSystem.normalize((newItem1.path || newItem1).replace(/\/+$/, ""));
        const existingItemDoesntExist1 = (await Deno.lstat(existingItemPath1).catch(()=>({
                doesntExist: true
            }))).doesntExist;
        if (!allowNonExistingTarget1 && existingItemDoesntExist1) {
            throw Error(`\nTried to create a relativeLink between existingItem:${existingItemPath1}, newItem:${newItemPath1}\nbut existingItem didn't actually exist`);
        } else {
            const parentOfNewItem1 = FileSystem.parentPath(newItemPath1);
            await FileSystem.ensureIsFolder(parentOfNewItem1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
            const hardPathToNewItem1 = `${await FileSystem.makeHardPathTo(parentOfNewItem1)}/${FileSystem.basename(newItemPath1)}`;
            const hardPathToExistingItem1 = await FileSystem.makeHardPathTo(existingItemPath1);
            const pathFromNewToExisting1 = relative(hardPathToNewItem1, hardPathToExistingItem1).replace(/^\.\.\//, "");
            if (force1) {
                FileSystem.sync.clearAPathFor(hardPathToNewItem1, {
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
            }
            return Deno.symlink(pathFromNewToExisting1, hardPathToNewItem1);
        }
    },
    async absoluteLink ({ existingItem: existingItem1 , newItem: newItem1 , force: force1 = true , allowNonExistingTarget: allowNonExistingTarget1 = false , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        existingItem1 = (existingItem1.path || existingItem1).replace(/\/+$/, "");
        const newItemPath1 = FileSystem.normalize(newItem1.path || newItem1).replace(/\/+$/, "");
        const existingItemDoesntExist1 = (await Deno.lstat(existingItem1).catch(()=>({
                doesntExist: true
            }))).doesntExist;
        if (!allowNonExistingTarget1 && existingItemDoesntExist1) {
            throw Error(`\nTried to create a relativeLink between existingItem:${existingItem1}, newItemPath:${newItemPath1}\nbut existingItem didn't actually exist`);
        } else {
            const parentOfNewItem1 = FileSystem.parentPath(newItemPath1);
            await FileSystem.ensureIsFolder(parentOfNewItem1, {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
            const hardPathToNewItem1 = `${await FileSystem.makeHardPathTo(parentOfNewItem1)}/${FileSystem.basename(newItemPath1)}`;
            if (force1) {
                FileSystem.sync.clearAPathFor(hardPathToNewItem1, {
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
            }
            return Deno.symlink(FileSystem.makeAbsolutePath(existingItem1), newItemPath1);
        }
    },
    pathPieces (path1) {
        path1 = path1.path || path1;
        const result1 = parse(path1);
        const folderList1 = [];
        let dirname1 = result1.dir;
        while(true){
            folderList1.push(basename(dirname1));
            if (dirname1 == dirname(dirname1)) {
                break;
            }
            dirname1 = dirname(dirname1);
        }
        folderList1.reverse();
        return [
            folderList1,
            result1.name,
            result1.ext
        ];
    },
    async *iterateBasenamesIn (pathOrFileInfo1) {
        const info1 = pathOrFileInfo1 instanceof ItemInfo ? pathOrFileInfo1 : await FileSystem.info(pathOrFileInfo1);
        if (info1.isFolder) {
            for await (const each11 of Deno.readDir(pathOrFileInfo1.path)){
                yield dirEntry.name;
            }
        }
    },
    listBasenamesIn (pathOrFileInfo1) {
        return asyncIteratorToList(FileSystem.iterateBasenamesIn(pathOrFileInfo1));
    },
    async *iteratePathsIn (pathOrFileInfo1, options1 = {
        recursively: false,
        shouldntInclude: null,
        shouldntExplore: null,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        dontFollowSymlinks: false,
        dontReturnSymlinks: false
    }) {
        let info1;
        try {
            info1 = pathOrFileInfo1 instanceof ItemInfo ? pathOrFileInfo1 : await FileSystem.info(pathOrFileInfo1);
        } catch (error1) {
            if (!error1.message.match(/^PermissionDenied:/)) {
                throw error1;
            }
        }
        const path1 = info1.path;
        if (!options1.recursively) {
            if (info1.isFolder) {
                if (!options1.shouldntInclude) {
                    for await (const each11 of Deno.readDir(path1)){
                        if (options1.dontReturnSymlinks && each11.isSymlink) {
                            continue;
                        }
                        yield join(path1, each11.name);
                    }
                } else {
                    const shouldntInclude1 = options1.shouldntInclude;
                    for await (const each11 of Deno.readDir(path1)){
                        const eachPath11 = join(path1, each11.name);
                        if (options1.dontReturnSymlinks && each11.isSymlink) {
                            continue;
                        }
                        const shouldntIncludeThis1 = shouldntInclude1 && await shouldntInclude1(eachPath11);
                        if (!shouldntIncludeThis1) {
                            yield eachPath11;
                        }
                    }
                }
            }
        } else {
            options1 = {
                exclude: new Set(),
                searchOrder: 'breadthFirstSearch',
                maxDepth: Infinity,
                ...options1
            };
            options1.searchOrder = options1.searchOrder || 'breadthFirstSearch';
            const { shouldntExplore: shouldntExplore1 , shouldntInclude: shouldntInclude1  } = options1;
            if (![
                'breadthFirstSearch',
                'depthFirstSearch'
            ].includes(options1.searchOrder)) {
                throw Error(`when calling FileSystem.iterateItemsIn('${path1}', { searchOrder: ${options1.searchOrder} })\n\n    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'\n    However, it was not either of those: ${options1.searchOrder}`);
            }
            const useBreadthFirstSearch1 = options1.searchOrder == 'breadthFirstSearch';
            const shouldntExploreThis1 = shouldntExplore1 && await shouldntExplore1(info1.path, info1);
            if (!shouldntExploreThis1 && options1.maxDepth > 0 && info1.isFolder) {
                options1.exclude = options1.exclude instanceof Set ? options1.exclude : new Set(options1.exclude);
                if (!options1.exclude.has(path1)) {
                    const followSymlinks1 = !options1.dontFollowSymlinks;
                    const absolutePathVersion1 = FileSystem.makeAbsolutePath(path1);
                    options1.exclude.add(absolutePathVersion1);
                    options1.maxDepth -= 1;
                    const searchAfterwords1 = [];
                    for await (const entry1 of Deno.readDir(path1)){
                        const eachPath11 = join(path1, entry1.name);
                        if (options1.dontReturnSymlinks && each.isSymlink) {
                            continue;
                        }
                        const shouldntIncludeThis1 = shouldntInclude1 && await shouldntInclude1(eachPath11);
                        if (!shouldntIncludeThis1) {
                            yield eachPath11;
                        }
                        if (entry1.isFile) {
                            continue;
                        }
                        if (followSymlinks1 && !entry1.isDirectory) {
                            let isSymlinkToDirectory1 = false;
                            try {
                                isSymlinkToDirectory1 = (await Deno.stat(eachPath11)).isDirectory;
                            } catch (error1) {}
                            if (!isSymlinkToDirectory1) {
                                continue;
                            }
                        }
                        if (useBreadthFirstSearch1) {
                            searchAfterwords1.push(eachPath11);
                        } else {
                            for await (const eachSubPath1 of FileSystem.iteratePathsIn(eachPath11, options1)){
                                yield eachSubPath1;
                            }
                        }
                    }
                    for (const eachParentItem1 of searchAfterwords1){
                        for await (const eachSubPath1 of FileSystem.iteratePathsIn(eachParentItem1, options1)){
                            yield eachSubPath1;
                        }
                    }
                }
            }
        }
    },
    listPathsIn (pathOrFileInfo1, options1) {
        return asyncIteratorToList(FileSystem.iteratePathsIn(pathOrFileInfo1, options1));
    },
    async *iterateItemsIn (pathOrFileInfo1, options1 = {
        recursively: false,
        shouldntInclude: null,
        shouldntExplore: null,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity
    }) {
        options1 = {
            exclude: new Set(),
            searchOrder: 'breadthFirstSearch',
            maxDepth: Infinity,
            ...options1
        };
        options1.searchOrder = options1.searchOrder || 'breadthFirstSearch';
        const { shouldntExplore: shouldntExplore1 , shouldntInclude: shouldntInclude1  } = options1;
        const info1 = pathOrFileInfo1 instanceof ItemInfo ? pathOrFileInfo1 : await FileSystem.info(pathOrFileInfo1);
        const path1 = info1.path;
        if (![
            'breadthFirstSearch',
            'depthFirstSearch'
        ].includes(options1.searchOrder)) {
            throw Error(`when calling FileSystem.iterateItemsIn('${path1}', { searchOrder: ${options1.searchOrder} })\n\n    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'\n    However, it was not either of those: ${options1.searchOrder}`);
        }
        const useBreadthFirstSearch1 = options1.searchOrder == 'breadthFirstSearch';
        const shouldntExploreThis1 = shouldntExplore1 && await shouldntExplore1(info1);
        if (!shouldntExploreThis1 && options1.maxDepth > 0 && info1.isFolder) {
            options1.exclude = options1.exclude instanceof Set ? options1.exclude : new Set(options1.exclude);
            if (!options1.exclude.has(path1)) {
                const absolutePathVersion1 = FileSystem.makeAbsolutePath(path1);
                options1.exclude.add(absolutePathVersion1);
                options1.maxDepth -= 1;
                const searchAfterwords1 = [];
                for await (const entry1 of Deno.readDir(path1)){
                    const eachItem1 = await FileSystem.info(join(path1, entry1.name));
                    const shouldntIncludeThis1 = shouldntInclude1 && await shouldntInclude1(eachItem1);
                    if (!shouldntIncludeThis1) {
                        yield eachItem1;
                    }
                    if (options1.recursively) {
                        if (eachItem1.isFolder) {
                            if (useBreadthFirstSearch1) {
                                searchAfterwords1.push(eachItem1);
                            } else {
                                for await (const eachSubPath1 of FileSystem.iterateItemsIn(eachItem1, options1)){
                                    yield eachSubPath1;
                                }
                            }
                        }
                    }
                }
                for (const eachParentItem1 of searchAfterwords1){
                    for await (const eachSubPath1 of FileSystem.iterateItemsIn(eachParentItem1, options1)){
                        yield eachSubPath1;
                    }
                }
            }
        }
    },
    async listItemsIn (pathOrFileInfo1, options1) {
        const outputPromises1 = [];
        for await (const eachPath11 of FileSystem.iteratePathsIn(pathOrFileInfo1, options1)){
            outputPromises1.push(FileSystem.info(eachPath11));
        }
        return Promise.all(outputPromises1);
    },
    async listFileItemsIn (pathOrFileInfo1, options1 = {
        treatAllSymlinksAsFiles: false
    }) {
        const { treatAllSymlinksAsFiles: treatAllSymlinksAsFiles1  } = {
            treatAllSymlinksAsFiles: false,
            ...options1
        };
        const items1 = await FileSystem.listItemsIn(pathOrFileInfo1, options1);
        if (treatAllSymlinksAsFiles1) {
            return items1.filter((eachItem1)=>eachItem1.isFile || treatAllSymlinksAsFiles1 && eachItem1.isSymlink);
        } else {
            return items1.filter((eachItem1)=>eachItem1.isFile);
        }
    },
    async listFilePathsIn (pathOrFileInfo1, options1 = {
        treatAllSymlinksAsFiles: false
    }) {
        return (await FileSystem.listFileItemsIn(pathOrFileInfo1, options1)).map((each11)=>each11.path);
    },
    async listFileBasenamesIn (pathOrFileInfo1, options1 = {
        treatAllSymlinksAsFiles: false
    }) {
        return (await FileSystem.listFileItemsIn(pathOrFileInfo1, options1)).map((each11)=>each11.basename);
    },
    async listFolderItemsIn (pathOrFileInfo1, options1 = {
        ignoreSymlinks: false
    }) {
        const { ignoreSymlinks: ignoreSymlinks1  } = {
            ignoreSymlinks: false,
            ...options1
        };
        const items1 = await FileSystem.listItemsIn(pathOrFileInfo1, options1);
        if (ignoreSymlinks1) {
            return items1.filter((eachItem1)=>eachItem1.isFolder && !eachItem1.isSymlink);
        } else {
            return items1.filter((eachItem1)=>eachItem1.isFolder);
        }
    },
    async listFolderPathsIn (pathOrFileInfo1, options1 = {
        ignoreSymlinks: false
    }) {
        return (await FileSystem.listFolderItemsIn(pathOrFileInfo1, options1)).map((each11)=>each11.path);
    },
    async listFolderBasenamesIn (pathOrFileInfo1, options1 = {
        ignoreSymlinks: false
    }) {
        return (await FileSystem.listFolderItemsIn(pathOrFileInfo1, options1)).map((each11)=>each11.basename);
    },
    recursivelyIterateItemsIn (pathOrFileInfo1, options1 = {
        onlyHardlinks: false,
        dontFollowSymlinks: false,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        shouldntExplore: null,
        shouldntInclude: null
    }) {
        options1.recursively = true;
        if (options1.onlyHardlinks) {
            if (options1.shouldntInclude) {
                const originalshouldntInclude1 = options1.shouldntInclude;
                options1.shouldntInclude = (each11)=>each11.isSymlink || originalshouldntInclude1(each11);
            } else {
                options1.shouldntInclude = (each11)=>each11.isSymlink;
            }
        }
        if (options1.dontFollowSymlinks) {
            if (options1.shouldntExplore) {
                const originalShouldntExplore1 = options1.shouldntInclude;
                options1.shouldntExplore = (each11)=>each11.isSymlink || originalShouldntExplore1(each11);
            } else {
                options1.shouldntExplore = (each11)=>each11.isSymlink;
            }
        }
        return FileSystem.iterateItemsIn(pathOrFileInfo1, options1);
    },
    recursivelyIteratePathsIn (pathOrFileInfo1, options1 = {
        onlyHardlinks: false,
        dontFollowSymlinks: false,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        shouldntExplore: null,
        shouldntInclude: null
    }) {
        options1.recursively = true;
        if (options1.onlyHardlinks) {
            if (options1.shouldntInclude) {
                const originalshouldntInclude1 = options1.shouldntInclude;
                options1.shouldntInclude = (each11)=>each11.isSymlink || originalshouldntInclude1(each11);
            } else {
                options1.shouldntInclude = (each11)=>each11.isSymlink;
            }
        }
        return FileSystem.iteratePathsIn(pathOrFileInfo1, options1);
    },
    recursivelyListPathsIn (pathOrFileInfo1, options1 = {
        onlyHardlinks: false,
        dontFollowSymlinks: false,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        shouldntExplore: null,
        shouldntInclude: null
    }) {
        return asyncIteratorToList(FileSystem.recursivelyIteratePathsIn(pathOrFileInfo1, options1));
    },
    recursivelyListItemsIn (pathOrFileInfo1, options1 = {
        onlyHardlinks: false,
        dontFollowSymlinks: false,
        searchOrder: 'breadthFirstSearch',
        maxDepth: Infinity,
        shouldntExplore: null,
        shouldntInclude: null
    }) {
        return asyncIteratorToList(FileSystem.recursivelyIterateItemsIn(pathOrFileInfo1, options1));
    },
    async *globIterator (pattern1, options1 = {
        startPath: null
    }) {
        var { startPath: startPath1 , ...iteratePathsOptions1 } = options1;
        startPath1 = startPath1 || ".";
        const regex1 = pattern1 instanceof RegExp ? pattern1 : globToRegExp(pattern1);
        for await (const eachPath11 of FileSystem.iteratePathsIn(startPath1, {
            recursively: true,
            ...iteratePathsOptions1
        })){
            if (eachPath11.match(regex1) || FileSystem.makeAbsolutePath(eachPath11).match(regex1)) {
                yield FileSystem.makeRelativePath({
                    from: startPath1,
                    to: eachPath11
                });
            }
        }
    },
    glob (pattern1, options1 = {
        startPath: null
    }) {
        return asyncIteratorToList(FileSystem.globIterator(pattern1, options1));
    },
    async getPermissions ({ path: path1  }) {
        const { mode: mode1  } = await Deno.lstat(path1);
        return {
            owner: {
                canRead: !!(0b0000000100000000 & mode1),
                canWrite: !!(0b0000000010000000 & mode1),
                canExecute: !!(0b0000000001000000 & mode1)
            },
            group: {
                canRead: !!(0b0000000000100000 & mode1),
                canWrite: !!(0b0000000000010000 & mode1),
                canExecute: !!(0b0000000000001000 & mode1)
            },
            others: {
                canRead: !!(0b0000000000000100 & mode1),
                canWrite: !!(0b0000000000000010 & mode1),
                canExecute: !!(0b0000000000000001 & mode1)
            }
        };
    },
    async addPermissions ({ path: path1 , permissions: permissions1 = {
        owner: {},
        group: {},
        others: {}
    } , recursively: recursively1 = false  }) {
        permissions1 = {
            owner: {},
            group: {},
            others: {},
            ...permissions1
        };
        let permissionNumber1 = 0b000000000;
        let fileInfo1;
        if (!(Object.keys(permissions1.owner).length === Object.keys(permissions1.group).length === Object.keys(permissions1.others).length === 3)) {
            fileInfo1 = await FileSystem.info(path1);
            permissionNumber1 = fileInfo1.lstat.mode & 0b0000000111111111;
        }
        if (permissions1.owner.canRead != null) {
            if (permissions1.owner.canRead) {
                permissionNumber1 |= 0b0100000000;
            } else {
                permissionNumber1 &= 0b1011111111;
            }
        }
        if (permissions1.owner.canWrite != null) {
            if (permissions1.owner.canWrite) {
                permissionNumber1 |= 0b0010000000;
            } else {
                permissionNumber1 &= 0b1101111111;
            }
        }
        if (permissions1.owner.canExecute != null) {
            if (permissions1.owner.canExecute) {
                permissionNumber1 |= 0b0001000000;
            } else {
                permissionNumber1 &= 0b1110111111;
            }
        }
        if (permissions1.group.canRead != null) {
            if (permissions1.group.canRead) {
                permissionNumber1 |= 0b0000100000;
            } else {
                permissionNumber1 &= 0b1111011111;
            }
        }
        if (permissions1.group.canWrite != null) {
            if (permissions1.group.canWrite) {
                permissionNumber1 |= 0b0000010000;
            } else {
                permissionNumber1 &= 0b1111101111;
            }
        }
        if (permissions1.group.canExecute != null) {
            if (permissions1.group.canExecute) {
                permissionNumber1 |= 0b0000001000;
            } else {
                permissionNumber1 &= 0b1111110111;
            }
        }
        if (permissions1.others.canRead != null) {
            if (permissions1.others.canRead) {
                permissionNumber1 |= 0b0000000100;
            } else {
                permissionNumber1 &= 0b1111111011;
            }
        }
        if (permissions1.others.canWrite != null) {
            if (permissions1.others.canWrite) {
                permissionNumber1 |= 0b0000000010;
            } else {
                permissionNumber1 &= 0b1111111101;
            }
        }
        if (permissions1.others.canExecute != null) {
            if (permissions1.others.canExecute) {
                permissionNumber1 |= 0b0000000001;
            } else {
                permissionNumber1 &= 0b1111111110;
            }
        }
        if (recursively1 == false || fileInfo1 instanceof Object && fileInfo1.isFile || !(fileInfo1 instanceof Object) && (await FileSystem.info(path1)).isFile) {
            return Deno.chmod(path1.path || path1, permissionNumber1);
        } else {
            const promises1 = [];
            const paths1 = await FileSystem.recursivelyListPathsIn(path1, {
                onlyHardlinks: false,
                dontFollowSymlinks: false,
                ...recursively1
            });
            for (const eachPath11 of paths1){
                promises1.push(Deno.chmod(eachPath11, permissionNumber1).catch(console.error));
            }
            return new Promise(async (resolve1, reject1)=>{
                for (const each11 of promises1){
                    await each11;
                }
                resolve1();
            });
        }
    },
    setPermissions (...args1) {
        return FileSystem.addPermissions(...args1);
    },
    async write ({ path: path1 , data: data1 , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        await grabPathLock(path1);
        if (force1) {
            await FileSystem.ensureIsFolder(FileSystem.parentPath(path1), {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
            const info1 = await FileSystem.info(path1);
            if (info1.isDirectory) {
                await FileSystem.remove(path1);
            }
        }
        let output2;
        if (isGeneratorType(data1) || data1[Symbol.iterator] || data1[Symbol.asyncIterator]) {
            const file1 = await Deno.open(path1, {
                read: true,
                write: true,
                create: true,
                truncate: true
            });
            const encoder1 = new TextEncoder();
            const encode1 = encoder1.encode.bind(encoder1);
            try {
                for await (let packet1 of data1){
                    if (typeof packet1 == 'string') {
                        packet1 = encode1(packet1);
                    }
                    await Deno.write(file1.rid, packet1);
                }
            } finally{
                Deno.close(file1.rid);
            }
        } else if (typeof data1 == 'string') {
            output2 = await Deno.writeTextFile(path1, data1);
        } else {
            output2 = await Deno.writeFile(path1, data1);
        }
        delete locker[path1];
        return output2;
    },
    async append ({ path: path1 , data: data1 , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
        await grabPathLock(path1);
        if (force1) {
            FileSystem.sync.ensureIsFolder(FileSystem.parentPath(path1), {
                overwrite: overwrite1,
                renameExtension: renameExtension1
            });
            const info1 = await FileSystem.info(path1);
            if (info1.isDirectory) {
                await FileSystem.remove(path1);
            }
        }
        const file1 = await Deno.open(path1, {
            read: true,
            write: true,
            create: true
        });
        await file1.seek(0, Deno.SeekMode.End);
        if (typeof data1 == 'string') {
            await file1.write(new TextEncoder().encode(data1));
        } else {
            await file1.write(data1);
        }
        await file1.close();
        delete locker[path1];
    },
    async makeHardPathTo (path1, options1 = {}) {
        var { cache: cache1  } = {
            cache: {},
            ...options1
        };
        if (cache1[path1]) {
            return cache1[path1];
        }
        const [folders1, name1, extension1] = FileSystem.pathPieces(FileSystem.makeAbsolutePath(path1));
        let topDownPath1 = ``;
        for (const eachFolderName1 of folders1){
            topDownPath1 += `/${eachFolderName1}`;
            if (cache1[topDownPath1]) {
                topDownPath1 = cache1[topDownPath1];
                continue;
            }
            const unchangedPath1 = topDownPath1;
            const info1 = await FileSystem.info(topDownPath1);
            if (info1.isSymlink) {
                const absolutePathToIntermediate1 = await FileSystem.finalTargetOf(info1.path, {
                    _parentsHaveBeenChecked: true,
                    cache: cache1
                });
                if (absolutePathToIntermediate1 == null) {
                    return null;
                }
                topDownPath1 = topDownPath1.slice(0, -(eachFolderName1.length + 1));
                const relativePath1 = FileSystem.makeRelativePath({
                    from: topDownPath1,
                    to: absolutePathToIntermediate1
                });
                topDownPath1 += `/${relativePath1}`;
                topDownPath1 = normalize(topDownPath1);
            }
            cache1[unchangedPath1] = topDownPath1;
        }
        const hardPath1 = normalize(`${topDownPath1}/${name1}${extension1}`);
        cache1[path1] = hardPath1;
        return hardPath1;
    },
    async walkUpImport (path1, start1) {
        const startPath1 = start1 || FileSystem.pathOfCaller(1);
        const nearestPath1 = await FileSystem.walkUpUntil(path1, startPath1);
        if (nearestPath1) {
            const absolutePath1 = FileSystem.makeAbsolutePath(`${nearestPath1}/${path1}`);
            return import(toFileUrl(absolutePath1).href);
        } else {
            throw Error(`Tried to walkUpImport ${path1}, starting at ${startPath1}, but was unable to find any files`);
        }
    },
    pathOfCaller (callerNumber1 = undefined) {
        const err1 = new Error();
        let filePaths1 = findAll(/^.+file:\/\/(\/[\w\W]*?):/gm, err1.stack).map((each11)=>each11[1]);
        if (callerNumber1) {
            filePaths1 = filePaths1.slice(callerNumber1);
        }
        try {
            const secondPath1 = filePaths1[1];
            if (secondPath1) {
                try {
                    if (Deno.statSync(secondPath1).isFile) {
                        return secondPath1;
                    }
                } catch (error1) {}
            }
        } catch (error1) {}
        return Deno.cwd();
    },
    sync: {
        info (fileOrFolderPath1, _cachedLstat1 = null) {
            let lstat1 = _cachedLstat1;
            try {
                lstat1 = Deno.lstatSync(fileOrFolderPath1);
            } catch (error1) {
                lstat1 = {
                    doesntExist: true
                };
            }
            let stat1 = {};
            if (!lstat1.isSymlink) {
                stat1 = {
                    isBrokenLink: false,
                    isLoopOfLinks: false
                };
            } else {
                try {
                    stat1 = Deno.statSync(fileOrFolderPath1);
                } catch (error1) {
                    if (error1.message.match(/^Too many levels of symbolic links/)) {
                        stat1.isBrokenLink = true;
                        stat1.isLoopOfLinks = true;
                    } else if (error1.message.match(/^No such file or directory/)) {
                        stat1.isBrokenLink = true;
                    } else {
                        throw error1;
                    }
                }
            }
            return new ItemInfo({
                path: fileOrFolderPath1,
                _lstatData: lstat1,
                _statData: stat1
            });
        },
        remove (fileOrFolder1) {
            if (fileOrFolder1 instanceof Array) {
                return fileOrFolder1.map(FileSystem.sync.remove);
            }
            fileOrFolder1 = fileOrFolder1.path || fileOrFolder1;
            let exists1 = false;
            let item1;
            try {
                item1 = Deno.lstatSync(fileOrFolder1);
                exists1 = true;
            } catch (error1) {}
            if (exists1) {
                if (item1.isFile || item1.isSymlink) {
                    return Deno.removeSync(fileOrFolder1.replace(/\/+$/, ""));
                } else {
                    return Deno.removeSync(fileOrFolder1.replace(/\/+$/, ""), {
                        recursive: true
                    });
                }
            }
        },
        moveOutOfTheWay (path1, options1 = {
            extension: null
        }) {
            const extension1 = options1?.extension || FileSystem.defaultRenameExtension;
            const info1 = FileSystem.sync.info(path1);
            if (info1.exists) {
                const newPath1 = path1 + extension1;
                FileSystem.sync.moveOutOfTheWay(newPath1, {
                    extension: extension1
                });
                moveSync(path1, newPath1);
            }
        },
        ensureIsFolder (path1, options1 = {
            overwrite: false,
            renameExtension: null
        }) {
            const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
            path1 = path1.path || path1;
            path1 = FileSystem.makeAbsolutePath(path1);
            const parentPath1 = dirname(path1);
            if (parentPath1 == path1) {
                return;
            }
            const parent1 = FileSystem.sync.info(parentPath1);
            if (!parent1.isDirectory) {
                FileSystem.sync.ensureIsFolder(parentPath1, {
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
            }
            let pathInfo1 = FileSystem.sync.info(path1);
            if (pathInfo1.exists && !pathInfo1.isDirectory) {
                if (overwrite1) {
                    FileSystem.sync.remove(path1);
                } else {
                    FileSystem.sync.moveOutOfTheWay(path1, {
                        extension: renameExtension1
                    });
                }
            }
            Deno.mkdirSync(path1, {
                recursive: true
            });
            return path1;
        },
        clearAPathFor (path1, options1 = {
            overwrite: false,
            renameExtension: null
        }) {
            const { overwrite: overwrite1 , renameExtension: renameExtension1  } = defaultOptionsHelper(options1);
            const originalPath1 = path1;
            const paths1 = [];
            while(dirname(path1) !== path1){
                paths1.push(path1);
                path1 = dirname(path1);
            }
            for (const eachPath11 of paths1.reverse()){
                const info1 = FileSystem.sync.info(eachPath11);
                if (!info1.exists) {
                    break;
                } else if (info1.isFile) {
                    if (overwrite1) {
                        FileSystem.sync.remove(eachPath11);
                    } else {
                        FileSystem.sync.moveOutOfTheWay(eachPath11, {
                            extension: renameExtension1
                        });
                    }
                }
            }
            Deno.mkdirSync(dirname(originalPath1), {
                recursive: true
            });
            return originalPath1;
        },
        append ({ path: path1 , data: data1 , force: force1 = true , overwrite: overwrite1 = false , renameExtension: renameExtension1 = null  }) {
            if (force1) {
                FileSystem.sync.ensureIsFolder(FileSystem.parentPath(path1), {
                    overwrite: overwrite1,
                    renameExtension: renameExtension1
                });
                const info1 = FileSystem.sync.info(path1);
                if (info1.isDirectory) {
                    FileSystem.sync.remove(path1);
                }
            }
            const file1 = Deno.openSync(path1, {
                read: true,
                write: true,
                create: true
            });
            file1.seekSync(0, Deno.SeekMode.End);
            if (typeof data1 == 'string') {
                file1.writeSync(new TextEncoder().encode(data1));
            } else {
                file1.writeSync(data1);
            }
            file1.close();
        }
    }
};
const glob = FileSystem.glob;
const typedArrayClasses = [
    Uint16Array,
    Uint32Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Int32Array,
    Int8Array,
    Float32Array,
    Float64Array,
    globalThis.BigInt64Array,
    globalThis.BigUint64Array
].filter((each11)=>each11);
new Set([
    RegExp,
    Date,
    URL,
    ...typedArrayClasses,
    globalThis.ArrayBuffer,
    globalThis.DataView
]);
Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
Object.getPrototypeOf([][Symbol.iterator]);
Object.getPrototypeOf(new Map()[Symbol.iterator]);
Object.getPrototypeOf(new Set()[Symbol.iterator]);
let AsyncFunction = class {
};
let GeneratorFunction = class {
};
let AsyncGeneratorFunction = class {
};
let SyncGenerator = class {
};
let AsyncGenerator = class {
};
try {
    AsyncFunction = eval("(async function(){}).constructor");
    GeneratorFunction = eval("(function*(){}).constructor");
    AsyncGeneratorFunction = eval("(async function*(){}).constructor");
    SyncGenerator = eval("((function*(){})()).constructor");
    AsyncGenerator = eval("((async function*(){})()).constructor");
} catch (error) {}
Symbol.for("deepCopy");
Symbol();
const getThis = Symbol();
Object.getPrototypeOf(function() {})[getThis] = function() {
    return this;
};
const deepSortObject = (obj11, seen11 = new Map())=>{
    if (!(obj11 instanceof Object)) {
        return obj11;
    } else if (seen11.has(obj11)) {
        return seen11.get(obj11);
    } else {
        if (obj11 instanceof Array) {
            const sortedChildren11 = [];
            seen11.set(obj11, sortedChildren11);
            for (const each11 of obj11){
                sortedChildren11.push(deepSortObject(each11, seen11));
            }
            return sortedChildren11;
        } else {
            const sorted11 = {};
            seen11.set(obj11, sorted11);
            for (const eachKey11 of Object.keys(obj11).sort()){
                sorted11[eachKey11] = deepSortObject(obj11[eachKey11], seen11);
            }
            return sorted11;
        }
    }
};
Object.getOwnPropertyDescriptors;
const emptyIterator = function*() {}();
const makeIterable = (object1)=>{
    if (object1 == null) {
        return emptyIterator;
    }
    if (object1[Symbol.iterator] instanceof Function || object1[Symbol.asyncIterator] instanceof Function) {
        return object1;
    }
    if (Object.getPrototypeOf(object1).constructor == Object) {
        return Object.entries(object1);
    }
    return emptyIterator;
};
const iter = (object1)=>{
    const iterable1 = makeIterable(object1);
    if (iterable1[Symbol.asyncIterator]) {
        return iterable1[Symbol.asyncIterator]();
    } else {
        return iterable1[Symbol.iterator]();
    }
};
Symbol("iterationStop");
const zip = function*(...iterables1) {
    iterables1 = iterables1.map((each2)=>iter(each2));
    while(true){
        const nexts1 = iterables1.map((each2)=>each2.next());
        if (nexts1.every((each2)=>each2.done)) {
            break;
        }
        yield nexts1.map((each2)=>each2.value);
    }
};
const combinations = function*(elements1, maxLength1, minLength1) {
    if (maxLength1 === minLength1 && minLength1 === undefined) {
        minLength1 = 1;
        maxLength1 = elements1.length;
    } else {
        maxLength1 = maxLength1 || elements1.length;
        minLength1 = minLength1 === undefined ? maxLength1 : minLength1;
    }
    if (minLength1 !== maxLength1) {
        for(let i3 = minLength1; i3 <= maxLength1; i3++){
            yield* combinations(elements1, i3, i3);
        }
    } else {
        if (maxLength1 === 1) {
            yield* elements1.map((each2)=>[
                    each2
                ]);
        } else {
            for(let i3 = 0; i3 < elements1.length; i3++){
                for (const next1 of combinations(elements1.slice(i3 + 1, elements1.length), maxLength1 - 1, maxLength1 - 1)){
                    yield [
                        elements1[i3],
                        ...next1
                    ];
                }
            }
        }
    }
};
async function asyncIteratorToList(asyncIterator1) {
    const results1 = [];
    for await (const each2 of asyncIterator1){
        results1.push(each2);
    }
    return results1;
}
const ERROR_WHILE_MAPPING_MESSAGE = "Threw while mapping.";
function concurrentlyTransform({ iterator: iterator1 , transformFunction: transformFunction1 , poolLimit: poolLimit1 = null , awaitAll: awaitAll1 = false  }) {
    poolLimit1 = poolLimit1 || concurrentlyTransform.defaultPoolLimit;
    const res1 = new TransformStream({
        async transform (p1, controller1) {
            try {
                const s3 = await p1;
                controller1.enqueue(s3);
            } catch (e1) {
                if (e1 instanceof AggregateError && e1.message == ERROR_WHILE_MAPPING_MESSAGE) {
                    controller1.error(e1);
                }
            }
        }
    });
    const mainPromise1 = (async ()=>{
        const writer1 = res1.writable.getWriter();
        const executing1 = [];
        try {
            let index1 = 0;
            for await (const item1 of iterator1){
                const p1 = Promise.resolve().then(()=>transformFunction1(item1, index1));
                index1++;
                writer1.write(p1);
                const e1 = p1.then(()=>executing1.splice(executing1.indexOf(e1), 1));
                executing1.push(e1);
                if (executing1.length >= poolLimit1) {
                    await Promise.race(executing1);
                }
            }
            await Promise.all(executing1);
            writer1.close();
        } catch  {
            const errors1 = [];
            for (const result1 of (await Promise.allSettled(executing1))){
                if (result1.status == "rejected") {
                    errors1.push(result1.reason);
                }
            }
            writer1.write(Promise.reject(new AggregateError(errors1, ERROR_WHILE_MAPPING_MESSAGE))).catch(()=>{});
        }
    })();
    const asyncIterator1 = res1.readable[Symbol.asyncIterator]();
    if (!awaitAll1) {
        return asyncIterator1;
    } else {
        return mainPromise1.then(()=>asyncIteratorToList(asyncIterator1));
    }
}
concurrentlyTransform.defaultPoolLimit = 40;
const indent = ({ string: string2 , by: by1 = "    " , noLead: noLead1 = false  })=>(noLead1 ? "" : by1) + string2.replace(/\n/g, "\n" + by1);
const toString = (value2)=>{
    if (typeof value2 == 'symbol') {
        return `Symbol(${toRepresentation(value2.description)})`;
    } else if (!(value2 instanceof Object)) {
        return value2 != null ? value2.toString() : `${value2}`;
    } else {
        return toRepresentation(value2);
    }
};
const digitsToEnglishArray = (value2)=>{
    value2 = toString(value2);
    if (value2.length > 1) {
        return [].concat(...[
            ...value2
        ].map((each2)=>digitsToEnglishArray(each2)));
    }
    if (value2 === "-") {
        return [
            "negative"
        ];
    } else if (value2 === ".") {
        return [
            "point"
        ];
    } else if (value2 === "0") {
        return [
            "zero"
        ];
    } else if (value2 === "1") {
        return [
            "one"
        ];
    } else if (value2 === "2") {
        return [
            "two"
        ];
    } else if (value2 === "3") {
        return [
            "three"
        ];
    } else if (value2 === "4") {
        return [
            "four"
        ];
    } else if (value2 === "5") {
        return [
            "five"
        ];
    } else if (value2 === "6") {
        return [
            "six"
        ];
    } else if (value2 === "7") {
        return [
            "seven"
        ];
    } else if (value2 === "8") {
        return [
            "eight"
        ];
    } else if (value2 === "9") {
        return [
            "nine"
        ];
    } else {
        return "";
    }
};
const toRepresentation = (item1)=>{
    const alreadySeen1 = new Set();
    const recursionWrapper1 = (item1)=>{
        if (item1 instanceof Object) {
            if (alreadySeen1.has(item1)) {
                return `[Self Reference]`;
            } else {
                alreadySeen1.add(item1);
            }
        }
        let output11;
        if (typeof item1 == 'string') {
            output11 = `"${item1.replace(/"|\n|\t|\r|\\/g, (__char1)=>{
                switch(__char1){
                    case '"':
                        return '\\"';
                    case '\n':
                        return '\\n';
                    case '\t':
                        return '\\t';
                    case '\r':
                        return '\\r';
                    case '\\':
                        return '\\\\';
                }
            })}"`;
        } else if (item1 instanceof Array) {
            output11 = `[${item1.map((each2)=>recursionWrapper1(each2)).join(",")}]`;
        } else if (item1 instanceof Set) {
            output11 = `{${[
                ...item1
            ].map((each2)=>recursionWrapper1(each2)).join(",")}}`;
        } else if (item1 instanceof Object && item1.constructor == Object) {
            let string2 = "{";
            for (const [key1, value2] of Object.entries(item1)){
                const stringKey1 = recursionWrapper1(key1);
                const stringValue1 = recursionWrapper1(value2);
                string2 += `\n  ${stringKey1}: ${indent({
                    string: stringValue1,
                    by: "  ",
                    noLead: true
                })},`;
            }
            string2 += "\n}";
            output11 = string2;
        } else if (item1 instanceof Map) {
            let string2 = "Map {";
            for (const [key1, value2] of item1.entries()){
                const stringKey1 = recursionWrapper1(key1);
                const stringValue1 = recursionWrapper1(value2);
                if (!stringKey1.match(/\n/g)) {
                    string2 += `\n  ${stringKey1} => ${indent({
                        string: stringValue1,
                        by: "  ",
                        noLead: true
                    })},`;
                } else {
                    string2 += `\n  ${indent({
                        string: stringKey1,
                        by: "  ",
                        noLead: true
                    })}\n    => ${indent({
                        string: stringValue1,
                        by: "    ",
                        noLead: true
                    })},`;
                }
            }
            string2 += "\n}";
            output11 = string2;
        } else {
            output11 = item1 != null ? item1.toString() : `${item1}`;
        }
        return output11;
    };
    return recursionWrapper1(item1);
};
function extractFirst({ pattern: pattern1 , from: from1  }) {
    pattern1 = !pattern1.global ? pattern1 : new RegExp(pattern1, pattern1.flags.replace("g", ""));
    const match1 = from1.match(pattern1);
    return {
        get preText () {
            return !match1 ? "" : from1.slice(0, match1.index);
        },
        match: match1,
        extraction: match1 && match1[0],
        get postText () {
            return !match1 ? from1 : from1.slice(match1.index + match1[0].length);
        },
        get remaining () {
            return !match1 ? from1 : from1.slice(0, match1.index) + from1.slice(match1.index + match1[0].length);
        }
    };
}
function escapeRegexMatch(string2) {
    return string2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
let proxyRegExp;
const regexProxyOptions = Object.freeze({
    get (original1, key1) {
        if (key1.match(/^[igymu]+$/)) {
            return proxyRegExp(original1, key1);
        }
        return original1[key1];
    },
    set (original1, key1, value2) {
        return original1[key1] = value2;
    }
});
proxyRegExp = (parent1, flags1)=>{
    const regex1 = new RegExp(parent1, flags1);
    const output11 = new Proxy(regex1, regexProxyOptions);
    Object.setPrototypeOf(output11, Object.getPrototypeOf(regex1));
    return output11;
};
function regexWithStripWarning(shouldStrip1) {
    return (strings1, ...values1)=>{
        let newRegexString1 = "";
        for (const [string2, value2] of zip(strings1, values1)){
            newRegexString1 += string2;
            if (value2 instanceof RegExp) {
                if (!shouldStrip1 && (value2.ignoreCase || value2.sticky || value2.multiline || value2.unicode)) {
                    console.warn(`Warning: flags inside of regex:\n    The RegExp trigging this warning is: ${value2}\n    When calling the regex interpolater (e.g. regex\`something\${stuff}\`)\n    one of the \${} values (the one above) was a RegExp with a flag enabled\n    e.g. /stuff/i  <- i = ignoreCase flag enabled\n    When the /stuff/i gets interpolated, its going to loose its flags\n    (thats what I'm warning you about)\n    \n    To disable/ignore this warning do:\n        regex.stripFlags\`something\${/stuff/i}\`\n    If you want to add flags to the output of regex\`something\${stuff}\` do:\n        regex\`something\${stuff}\`.i   // ignoreCase\n        regex\`something\${stuff}\`.ig  // ignoreCase and global\n        regex\`something\${stuff}\`.gi  // functionally equivlent\n`);
                }
                const regexContent1 = `${value2}`.slice(1).replace(/\/.*$/, "");
                newRegexString1 += `(?:${regexContent1})`;
            } else if (value2 != null) {
                newRegexString1 += escapeRegexMatch(toString(value2));
            }
        }
        return proxyRegExp(newRegexString1, "");
    };
}
const regex = regexWithStripWarning(false);
regex.stripFlags = regexWithStripWarning(true);
const textDecoder = new TextDecoder('utf-8');
const textEncoder = new TextEncoder('utf-8');
textDecoder.decode.bind(textDecoder);
textEncoder.encode.bind(textEncoder);
function parseFasta(incomingString1) {
    const accession1 = `(?<accession>[^\\| ]+)`;
    const name1 = `(?<name>[^\\| ]+)`;
    const integer1 = `(?<integer>-?\\d+)`;
    const sequenceNumber1 = `(?<sequenceNumber>[^\\| ]+)`;
    const applicationNumber1 = `(?<applicationNumber>[^\\| ]+)`;
    const database1 = `(?<database>[^\\| ]+)`;
    const country1 = `(?<country>[^\\| ]+)`;
    const locus1 = `(?<locus>[^\\| ]+)`;
    const entry1 = `(?<entry>[^\\| ]+)`;
    const chain1 = `(?<chain>[^\\| ]+)`;
    const patent1 = `(?<patent>[^\\| ]+)`;
    const string2 = `(?<string>[^\\| ]+)`;
    const ncbiIdentifierDefinitions1 = {
        [`tr\\|${accession1}\\|${name1}`]: {
            name: "TrEMBL                                                                        ",
            example: [
                "tr|Q90RT2|Q90RT2_9HIV1"
            ]
        },
        [`tpg\\|${accession1}\\|${name1}`]: {
            name: "third-party GenBank https://www.ncbi.nlm.nih.gov/Genbank/index.html           ",
            example: [
                "tpg|BK003456|"
            ]
        },
        [`tpe\\|${accession1}\\|${name1}`]: {
            name: "third-party EMBL http://www.embl-heidelberg.de                                ",
            example: [
                "tpe|BN000123|"
            ]
        },
        [`tpd\\|${accession1}\\|${name1}`]: {
            name: "third-party DDBJ http://www.ddbj.nig.ac.jp                                    ",
            example: [
                "tpd|FAA00017|"
            ]
        },
        [`sp\\|${accession1}\\|${name1}`]: {
            name: "SWISS-PROT http://www.ebi.ac.uk/swissprot                                     ",
            example: [
                "sp|P01013|OVAX_CHICK"
            ]
        },
        [`ref\\|${accession1}\\|${name1}`]: {
            name: "RefSeq https://www.ncbi.nlm.nih.gov/projects/RefSeq                           ",
            example: [
                "ref|NM_010450.1|"
            ]
        },
        [`prf\\|${accession1}\\|${name1}`]: {
            name: "PRF http://www.prf.or.jp                                                      ",
            example: [
                "prf||0806162C"
            ]
        },
        [`pir\\|${accession1}\\|${name1}`]: {
            name: "PIR https://web.archive.org/web/20140312021627/http://pir.georgetown.edu/     ",
            example: [
                "pir||G36364"
            ]
        },
        [`pgp\\|${country1}\\|${applicationNumber1}\\|${sequenceNumber1}`]: {
            name: "pre-grant patent                                                              ",
            example: [
                "pgp|EP|0238993|7"
            ]
        },
        [`pdb\\|${entry1}\\|${chain1}`]: {
            name: "PDB https://web.archive.org/web/20080828002005/http://www.rcsb.org./pdb       ",
            example: [
                "pdb|1I4L|D"
            ]
        },
        [`pat\\|${country1}\\|${patent1}\\|${sequenceNumber1}`]: {
            name: "patent                                                                        ",
            example: [
                "pat|US|RE33188|1"
            ]
        },
        [`lcl\\|(${integer1}|${string2})`]: {
            name: "local (i.e. no database reference)                                            ",
            example: [
                "lcl|123",
                "lcl|hmm271"
            ]
        },
        [`gnl\\|${database1}\\|(${integer1}|${string2})`]: {
            name: "general database reference(a reference to a database that's not in this list) ",
            example: [
                "gnl|taxon|9606",
                "gnl|PID|e1632"
            ]
        },
        [`gim\\|${integer1}`]: {
            name: "GenInfo import ID                                                             ",
            example: [
                "gim|123"
            ]
        },
        [`gi\\|${integer1}`]: {
            name: "GenInfo integrated database                                                   ",
            example: [
                "gi|21434723"
            ]
        },
        [`gb\\|${accession1}\\|${locus1}`]: {
            name: "GenBank https://www.ncbi.nlm.nih.gov/Genbank/index.html                       ",
            example: [
                "gb|M73307|AGMA13GT"
            ]
        },
        [`emb\\|${accession1}\\|${locus1}`]: {
            name: "EMBL http://www.embl-heidelberg.de                                            ",
            example: [
                "emb|CAM43271.1|"
            ]
        },
        [`dbj\\|${accession1}\\|${locus1}`]: {
            name: "DDBJ http://www.ddbj.nig.ac.jp                                                ",
            example: [
                "dbj|BAC85684.1|"
            ]
        },
        [`bbs\\|${integer1}`]: {
            name: "GenInfo backbone seqid                                                        ",
            example: [
                "bbs|123"
            ]
        },
        [`bbm\\|${integer1}`]: {
            name: "GenInfo backbone moltype                                                      ",
            example: [
                "bbm|123"
            ]
        }
    };
    const oneOfNcbiIdentifiers1 = `(${Object.keys(ncbiIdentifierDefinitions1).join("|")})`.replace(/\(\?\<\w+>/g, "(");
    const prefixPattern1 = new RegExp(`^${oneOfNcbiIdentifiers1}+`);
    const recordStrings1 = incomingString1.split(/(^|\r?\n)>/g);
    const records1 = [];
    let index1 = 0;
    for (const each2 of recordStrings1){
        const isBlankLine1 = !each2.trim();
        if (isBlankLine1) {
            continue;
        }
        const record1 = {
            index: index1++,
            hasIdentifiers: false,
            comment: "",
            rawComment: "",
            aminoAcidsString: "",
            ncbiIdentifiers: []
        };
        var [rawComment1, ...aminoAcidsStrings1] = each2.split(/\n/g);
        record1.comment = rawComment1;
        record1.rawComment = rawComment1;
        record1.aminoAcidsString = aminoAcidsStrings1.join("");
        const ncbiIdentifiersMatch1 = rawComment1.match(prefixPattern1);
        if (ncbiIdentifiersMatch1) {
            record1.comment = rawComment1.slice(ncbiIdentifiersMatch1[0].length).trim();
            record1.hasIdentifiers = true;
            var remaining1 = ncbiIdentifiersMatch1[0];
            var extraction1 = true;
            while(extraction1 && remaining1.length > 0){
                var { remaining: remaining1 , extraction: extraction1  } = extractFirst({
                    pattern: new RegExp(oneOfNcbiIdentifiers1),
                    from: remaining1
                });
                for (const [key1, value2] of Object.entries(ncbiIdentifierDefinitions1)){
                    const pattern1 = new RegExp(key1);
                    const match1 = extraction1.match(pattern1);
                    if (match1) {
                        record1.ncbiIdentifiers.push({
                            args: match1.groups,
                            info: value2
                        });
                        break;
                    }
                }
            }
        }
        records1.push(record1);
    }
    return records1;
}
async function loadMixedExamples({ filePath: filePath1 , aminoMatchPattern: aminoMatchPattern1 , windowPadding: windowPadding1 , skipEntryIf: skipEntryIf1  }) {
    const mixedString1 = await FileSystem.read(filePath1);
    function getWindows1(string2) {
        let output2 = [];
        const windowSize1 = windowPadding1 * 2 + 1;
        for (const each2 of findAll(aminoMatchPattern1, string2)){
            const min1 = each2.index - windowPadding1 >= 0 ? each2.index - windowPadding1 : 0;
            const slice1 = string2.slice(min1, each2.index + windowPadding1 + 1);
            if (slice1.length === windowSize1) {
                output2.push({
                    index: min1,
                    slice: slice1
                });
            }
        }
        return output2;
    }
    const summaryData1 = {
        sCounts: 0,
        aminoAcidCount: 0,
        styCounts: 0
    };
    const geneIds1 = new Set();
    const geneList1 = parseFasta(mixedString1);
    const geneData1 = {};
    const mixedExamples1 = [];
    for (const eachGene1 of geneList1){
        const geneName1 = eachGene1.ncbiIdentifiers[0].args.name;
        const uniprotGeneId1 = eachGene1.ncbiIdentifiers[0].args.accession;
        eachGene1.abbreviatedGeneSpecies = geneName1;
        eachGene1.uniprotGeneId = uniprotGeneId1;
        eachGene1.phosWindows = getWindows1(eachGene1.aminoAcidsString);
        if (skipEntryIf1({
            ...eachGene1,
            uniprotGeneId: uniprotGeneId1
        })) {
            continue;
        }
        geneIds1.add(uniprotGeneId1);
        geneData1[uniprotGeneId1] = eachGene1;
        summaryData1.aminoAcidCount += eachGene1.aminoAcidsString.length;
        if (eachGene1.aminoAcidsString.match(/S/g)) {
            summaryData1.sCounts += eachGene1.aminoAcidsString.match(/S/g).length;
        }
        if (eachGene1.aminoAcidsString.match(/S|T|Y/g)) {
            summaryData1.styCounts += eachGene1.aminoAcidsString.match(/S|T|Y/g).length;
        }
        for (const { index: index1 , slice: slice1  } of eachGene1.phosWindows){
            mixedExamples1.push({
                siteId: `${uniprotGeneId1}|${index1}`,
                indexRelativeToGene: index1,
                aminoAcids: slice1,
                isPhosSite: 0,
                geneInfo: eachGene1
            });
        }
    }
    return {
        mixedExamples: mixedExamples1,
        summaryData: summaryData1,
        geneIds: geneIds1,
        geneData: geneData1
    };
}
function deferredPromise() {
    let methods1;
    let state1 = "pending";
    const promise1 = new Promise((resolve1, reject1)=>{
        methods1 = {
            async resolve (value2) {
                await value2;
                state1 = "fulfilled";
                resolve1(value2);
            },
            reject (reason1) {
                state1 = "rejected";
                reject1(reason1);
            }
        };
    });
    Object.defineProperty(promise1, "state", {
        get: ()=>state1
    });
    return Object.assign(promise1, methods1);
}
const objectPrototype = Object.getPrototypeOf({});
const recursivePromiseAll = (object1, alreadySeen1 = new Map())=>{
    if (alreadySeen1.has(object1)) {
        return alreadySeen1.get(object1);
    }
    if (object1 instanceof Promise) {
        return object1;
    } else if (object1 instanceof Array) {
        const resolveLink1 = deferredPromise();
        alreadySeen1.set(object1, resolveLink1);
        Promise.all(object1.map((each2)=>recursivePromiseAll(each2, alreadySeen1))).catch(resolveLink1.reject).then(resolveLink1.resolve);
        return resolveLink1;
    } else if (Object.getPrototypeOf(object1) == objectPrototype) {
        const resolveLink1 = deferredPromise();
        alreadySeen1.set(object1, resolveLink1);
        (async ()=>{
            try {
                const keysAndValues1 = await Promise.all(Object.entries(object1).map((keyAndValue1)=>recursivePromiseAll(keyAndValue1, alreadySeen1)));
                resolveLink1.resolve(Object.fromEntries(keysAndValues1));
            } catch (error1) {
                resolveLink1.reject(error1);
            }
        })();
        return resolveLink1;
    } else {
        return object1;
    }
};
class NamedArray extends Array {
    toJSON() {
        return {
            ...this
        };
    }
    toString() {
        return {
            ...this
        };
    }
    [Symbol.for("customInspect")]() {
        return {
            ...this
        };
    }
    [Symbol.for("Deno.customInspect")]() {
        return {
            ...this
        };
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return {
            ...this
        };
    }
}
const argumentNames = [
    "input",
    "separator",
    "lineSeparator",
    "firstRowIsColumnNames",
    "columnNames",
    "skipEmptyLines",
    "commentSymbol"
];
function parseCsv({ input: input1 = null , separator: separator1 = "," , lineSeparator: lineSeparator1 = /\r?\n/g , firstRowIsColumnNames: firstRowIsColumnNames1 = false , columnNames: columnNames1 = null , skipEmptyLines: skipEmptyLines1 = true , commentSymbol: commentSymbol1 = null , returnRowsAs: returnRowsAs1 = null , ...other1 }) {
    if (Object.keys(other1).length > 0) {
        const keys1 = Object.keys(other1);
        const spellingHelp1 = keys1.map((each2)=>`for ${JSON.stringify(each2)} maybe you meant: ${levenshteinDistanceOrdering({
                word: each2,
                otherWords: argumentNames
            })[0]}`).join("\n        ");
        throw Error(`
            When calling parseCsv() some unrecognized arguments were given
            so I'm guessing you may have misspelled something:
                ${spellingHelp1}
            
        `.replace(/\n            /g, "\n"));
    }
    let columnNamesForParsing1 = columnNames1;
    const isAComment1 = (line1)=>commentSymbol1 && line1.startsWith(commentSymbol1);
    const getCells1 = (eachLine1, ...args1)=>{
        const cells1 = eachLine1.split(separator1);
        const cellsWithTypes1 = [];
        let skipTo1 = 0;
        let index1 = -1;
        for (let eachCell1 of cells1){
            index1 += 1;
            if (index1 < skipTo1) {
                continue;
            }
            const stripped1 = eachCell1.trim();
            if (stripped1.length == 0) {
                cellsWithTypes1.push("");
            } else {
                const firstChar1 = stripped1[0];
                if (!(firstChar1 == '"' || firstChar1 == '[' || firstChar1 == '{')) {
                    try {
                        cellsWithTypes1.push(JSON.parse(stripped1));
                    } catch (error1) {
                        cellsWithTypes1.push(stripped1);
                    }
                } else {
                    const remainingEndIndicies1 = [];
                    let remainingIndex1 = index1;
                    while(remainingIndex1 <= cells1.length){
                        remainingEndIndicies1.unshift(remainingIndex1);
                        remainingIndex1++;
                    }
                    skipTo1 = 0;
                    for (let eachRemainingEndIndex1 of remainingEndIndicies1){
                        try {
                            cellsWithTypes1.push(JSON.parse(cells1.slice(index1, eachRemainingEndIndex1).join(separator1)));
                            skipTo1 = eachRemainingEndIndex1;
                            break;
                        } catch (error1) {}
                    }
                    if (skipTo1 != 0) {
                        continue;
                    } else {
                        cellsWithTypes1.push(eachCell1);
                    }
                }
            }
        }
        if (columnNamesForParsing1) {
            const namedArray1 = new NamedArray(cellsWithTypes1.length);
            for (const [eachIndex1, eachName1, eachValue1] of enumerate(columnNames1, cellsWithTypes1)){
                namedArray1[eachIndex1] = eachValue1;
                namedArray1[eachName1] = eachValue1;
            }
            return namedArray1;
        }
        return cellsWithTypes1;
    };
    const isNonEmptyLine1 = skipEmptyLines1 ? ()=>true : (line1)=>line1.trim().length != 0;
    var { comments: comments1 , rows: rows1  } = Iterable(typeof input1 == "string" ? input1.split(lineSeparator1) : input1).map((eachLine1)=>{
        if (typeof eachLine1 != 'string') {
            eachLine1 = utf8BytesToString(eachLine1);
        }
        return eachLine1.replace(lineSeparator1, "");
    }).flat(1).filter(isNonEmptyLine1).forkAndFilter({
        filters: {
            comments: isAComment1,
            rows: (line1)=>!isAComment1(line1)
        }
    });
    rows1 = rows1.map(getCells1);
    if (!firstRowIsColumnNames1) {
        const shouldReturnArray1 = returnRowsAs1 == "array" || returnRowsAs1 == null && input1 instanceof Array;
        if (shouldReturnArray1) {
            if (!isAsyncIterable(input1)) {
                rows1 = [
                    ...rows1
                ];
                rows1.comments = [
                    ...comments1
                ];
                rows1.columnNames = columnNames1 || [];
            } else {
                return new Promise(async (resolve1, reject1)=>{
                    try {
                        const outputValue1 = [];
                        for await (const each2 of rows1){
                            outputValue1.push(each2);
                        }
                        const outputComments1 = [];
                        for await (const each2 of comments1){
                            outputComments1.push(each2);
                        }
                        outputValue1.rows = rows1;
                        outputValue1.comments = outputComments1;
                        outputValue1.columnNames = columnNames1 || [];
                    } catch (error1) {
                        reject1(error1);
                    }
                });
            }
        } else {
            rows1.rows = rows1;
            rows1.comments = comments1;
            rows1.columnNames = columnNames1 || [];
            return rows1;
        }
    } else {
        const shouldReturnArray1 = returnRowsAs1 == "array" || returnRowsAs1 == null && input1 instanceof Array;
        if (isAsyncIterable(input1)) {
            if (!shouldReturnArray1) {
                var { iteratorForFirst: iteratorForFirst1 , rows: rows1  } = rows1.forkAndFilter({
                    filters: {
                        firstElement: (line1, index1)=>index1 === 0,
                        rows: (line1, index1)=>index1 !== 0
                    }
                });
                const promiseOutput1 = new Promise(async (resolve1, reject1)=>{
                    try {
                        const firstValue1 = await next(iteratorForFirst1);
                        if (firstValue1 == Stop) {
                            const output2 = [];
                            output2.rows = output2;
                            output2.comments = comments1;
                            output2.columnNames = columnNames1 || [];
                            return resolve1(output2);
                        }
                        const columnNamesFromInput1 = firstValue1.map((each2)=>`${each2}`);
                        const columnNamesForReturning1 = columnNamesFromInput1 || columnNames1;
                        columnNamesForParsing1 = columnNames1 || columnNamesFromInput1;
                        rows1.rows = rows1;
                        rows1.comments = comments1;
                        rows1.columnNames = columnNamesForReturning1;
                        promiseOutput1.columnNames.resolve(columnNamesForReturning1);
                        resolve1(rows1);
                    } catch (error1) {
                        promiseOutput1.columnNames.reject(error1);
                        reject1(error1);
                    }
                });
                promiseOutput1.rows = rows1;
                promiseOutput1.comments = comments1;
                promiseOutput1.columnNames = deferredPromise();
                Object.assign(promiseOutput1, rows1);
                return promiseOutput1;
            } else {
                return new Promise(async (resolve1, reject1)=>{
                    try {
                        const firstValue1 = await next(rows1);
                        const output2 = [];
                        if (firstValue1 == Stop) {
                            output2.rows = output2;
                            output2.comments = comments1;
                            output2.columnNames = columnNames1 || [];
                            return resolve1(output2);
                        }
                        const columnNamesFromInput1 = firstValue1.map((each2)=>`${each2}`);
                        const columnNamesForReturning1 = columnNamesFromInput1 || columnNames1;
                        columnNamesForParsing1 = columnNames1 || columnNamesFromInput1;
                        for await (const each2 of rows1){
                            output2.push(each2);
                        }
                        output2.rows = output2;
                        output2.comments = comments1;
                        output2.columnNames = columnNamesForReturning1;
                        resolve1(rows1);
                    } catch (error1) {
                        reject1(error1);
                    }
                });
            }
        } else {
            var { iteratorForFirst: iteratorForFirst1 , rows: rows1  } = rows1.forkAndFilter({
                filters: {
                    firstElement: (line1, index1)=>index1 === 0,
                    rows: (line1, index1)=>index1 !== 0
                }
            });
            const firstValue1 = next(rows1);
            if (firstValue1 == Stop) {
                const output2 = [];
                output2.rows = output2;
                output2.comments = comments1;
                output2.columnNames = columnNames1 || [];
                return output2;
            }
            const columnNamesFromInput1 = firstValue1.map((each2)=>`${each2}`);
            const columnNamesForReturning1 = columnNamesFromInput1 || columnNames1;
            columnNamesForParsing1 = columnNames1 || columnNamesFromInput1;
            if (shouldReturnArray1) {
                rows1 = [
                    ...rows1
                ];
            }
            rows1.rows = rows1;
            rows1.comments = comments1;
            rows1.columnNames = columnNamesForReturning1;
            return rows1;
        }
    }
}
function intersection(...sets1) {
    const sortedSets1 = sets1.sort((a1, b1)=>(a1.size || a1.length) - (b1.size || b1.length));
    const smallestCopy1 = new Set(sortedSets1.shift());
    for (const eachSet1 of sortedSets1){
        if (smallestCopy1.size == 0) {
            break;
        } else {
            for (const eachCommonElement1 of smallestCopy1){
                if (!eachSet1.has(eachCommonElement1)) {
                    smallestCopy1.delete(eachCommonElement1);
                }
            }
        }
    }
    return smallestCopy1;
}
async function loadPositiveExamples({ filePath: filePath1 , geneData: geneData1 , skipEntryIf: skipEntryIf1  }) {
    const geneIdsFromNegativeData1 = new Set(Object.keys(geneData1));
    const summaryData1 = {
        frequencyPerHumanGene: {}
    };
    const geneIds1 = new Set();
    const haveSeenPhosSite1 = new Set();
    const positiveExamples1 = [];
    for (const eachPath2 of (await glob(filePath1))){
        const csvData1 = parseCsv({
            input: await FileSystem.readLinesIteratively(eachPath2),
            separator: "\t",
            columnNames: [
                "abbreviatedGeneSpecies",
                "uniprotGeneId",
                "indexRelativeToGene",
                "typeOfSite",
                "pubmedIdForRelatedReferences",
                "aminoAcidsString"
            ]
        });
        for await (const eachPhosSite1 of csvData1){
            if (!eachPhosSite1.aminoAcidsString) {
                continue;
            }
            if (eachPhosSite1.aminoAcidsString.match(/-/)) {
                continue;
            }
            eachPhosSite1.abbreviatedGeneSpecies;
            const uniprotGeneId1 = eachPhosSite1.uniprotGeneId;
            eachPhosSite1.siteId = `${uniprotGeneId1}|${eachPhosSite1.indexRelativeToGene}`;
            if (haveSeenPhosSite1.has(eachPhosSite1.siteId)) {
                continue;
            }
            haveSeenPhosSite1.add(eachPhosSite1.siteId);
            eachPhosSite1.pubmedIdForRelatedReferences = `${eachPhosSite1.pubmedIdForRelatedReferences}`.split(";");
            if (skipEntryIf1({
                ...eachPhosSite1,
                uniprotGeneId: uniprotGeneId1
            })) {
                continue;
            }
            geneData1[uniprotGeneId1] = geneData1[uniprotGeneId1] || {};
            geneData1[uniprotGeneId1].name = uniprotGeneId1;
            geneData1[uniprotGeneId1].phosSites = geneData1[uniprotGeneId1].phosSites || [];
            geneData1[uniprotGeneId1].phosSites.push(eachPhosSite1);
            geneIds1.add(uniprotGeneId1);
            positiveExamples1.push({
                siteId: `${uniprotGeneId1}|${eachPhosSite1.indexRelativeToGene}`,
                indexRelativeToGene: eachPhosSite1.indexRelativeToGene,
                aminoAcids: eachPhosSite1.aminoAcidsString,
                isPhosSite: 1,
                geneInfo: geneData1[uniprotGeneId1]
            });
        }
    }
    const commonGeneIds1 = intersection(geneIdsFromNegativeData1, new Set(geneIds1));
    for (const eachGeneId1 of commonGeneIds1){
        const numberOfPhosSites1 = geneData1[eachGeneId1]?.phosSites?.length || 0;
        summaryData1.frequencyPerHumanGene[numberOfPhosSites1] = (summaryData1.frequencyPerHumanGene[numberOfPhosSites1] || 0) + 1;
    }
    return {
        positiveExamples: positiveExamples1,
        summaryData: summaryData1,
        geneIds: geneIds1,
        commonGeneIds: commonGeneIds1,
        geneData: geneData1
    };
}
const amnioEncoding = {
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
    "X": "any"
};
const aminoAcidSimplifier = {
    "I": "J",
    "L": "J",
    "Q": "Z",
    "E": "Z",
    "D": "B",
    "N": "B"
};
const { objToOneHot: aminoToOneHot , oneHotToObject: oneHotToAmino  } = createOneHot(amnioEncoding);
const physicochemicalCategories = {
    polar: [
        ..."NQSDECTKRHYW"
    ],
    positive: [
        ..."KHR"
    ],
    negative: [
        ..."DE"
    ],
    charged: [
        ..."KHRDE"
    ],
    hydrophobic: [
        ..."AGCTIVLKHFYWM"
    ],
    aliphatic: [
        ..."IVL"
    ],
    aromatic: [
        ..."FYWH"
    ],
    small: [
        ..."PNDTCAGSV"
    ],
    tiny: [
        ..."ASGC"
    ]
};
const aminoToPhysicochemical = (amino1)=>{
    const output2 = {};
    for (const [key1, value2] of Object.entries(physicochemicalCategories)){
        output2[key1] = value2.includes(amino1);
    }
    return output2;
};
const { objToOneHot: physicochemicalToOneHot , oneHotToObject: oneHotToPhysicochemical  } = createOneHot(amnioEncoding);
const get = ({ from: from1 , keyList: keyList1 , failValue: failValue1  })=>{
    try {
        for (var each2 of keyList1){
            if (from1 instanceof Object && each2 in from1) {
                from1 = from1[each2];
            } else {
                return failValue1;
            }
        }
    } catch (error1) {
        return failValue1;
    }
    return from1;
};
const remove = ({ keyList: keyList1 , from: from1  })=>{
    if (keyList1.length == 1) {
        try {
            delete from1[keyList1[0]];
        } catch (error1) {
            return false;
        }
    } else if (keyList1.length > 1) {
        keyList1 = [
            ...keyList1
        ];
        let last1 = keyList1.pop();
        let parentObj1 = get({
            keyList: keyList1,
            from: from1
        });
        return remove({
            keyList: [
                last1
            ],
            from: parentObj1
        });
    }
};
const merge = ({ oldData: oldData1 , newData: newData1  })=>{
    if (!(newData1 instanceof Object) || !(oldData1 instanceof Object)) {
        return newData1;
    }
    let output2 = {};
    if (newData1 instanceof Array) {
        output2 = [];
    }
    Object.assign(output2, oldData1);
    for(const key1 in newData1){
        if (!(key1 in output2)) {
            output2[key1] = newData1[key1];
        } else {
            output2[key1] = merge(oldData1[key1], newData1[key1]);
        }
    }
    return output2;
};
const compare = ({ elementToNumber: elementToNumber1 , largestFirst: largestFirst1 = false  })=>{
    let comparison1 = (a1, b1)=>{
        const aValue1 = elementToNumber1(a1);
        const bValue1 = elementToNumber1(b1);
        if (typeof aValue1 == "number") {
            return aValue1 - bValue1;
        } else {
            return aValue1.localeCompare(bValue1);
        }
    };
    if (largestFirst1) {
        let oldComparison1 = comparison1;
        comparison1 = (b1, a1)=>oldComparison1(a1, b1);
    }
    return comparison1;
};
const recursivelyAllKeysOf = (obj2)=>{
    if (!(obj2 instanceof Object)) {
        return [];
    }
    const output2 = [];
    for (let eachKey2 of Object.keys(obj2)){
        output2.push([
            eachKey2
        ]);
        let newAttributes1 = recursivelyAllKeysOf(obj2[eachKey2]);
        for (let eachNewAttributeList1 of newAttributes1){
            eachNewAttributeList1.unshift(eachKey2);
            output2.push(eachNewAttributeList1);
        }
    }
    return output2;
};
Array.isArray || function(obj2) {
    return Object.prototype.toString.call(obj2) === "[object Array]";
};
Object.keys || function(obj2) {
    const keys1 = [];
    for(const key1 in obj2){
        if (Object.prototype.hasOwnProperty.call(obj2, key1)) keys1.push(key1);
    }
    return keys1;
};
const indent = ({ string: string2 , by: by1 = "    " , noLead: noLead1 = false  })=>(noLead1 ? "" : by1) + string2.replace(/\n/g, "\n" + by1);
const toString = (value2)=>{
    if (typeof value2 == 'symbol') {
        return toRepresentation(value2);
    } else if (!(value2 instanceof Object)) {
        return value2 != null ? value2.toString() : `${value2}`;
    } else {
        return toRepresentation(value2);
    }
};
const digitsToEnglishArray = (value2)=>{
    value2 = toString(value2);
    if (value2.length > 1) {
        return [].concat(...[
            ...value2
        ].map((each2)=>digitsToEnglishArray(each2)));
    }
    if (value2 === "-") {
        return [
            "negative"
        ];
    } else if (value2 === ".") {
        return [
            "point"
        ];
    } else if (value2 === "0") {
        return [
            "zero"
        ];
    } else if (value2 === "1") {
        return [
            "one"
        ];
    } else if (value2 === "2") {
        return [
            "two"
        ];
    } else if (value2 === "3") {
        return [
            "three"
        ];
    } else if (value2 === "4") {
        return [
            "four"
        ];
    } else if (value2 === "5") {
        return [
            "five"
        ];
    } else if (value2 === "6") {
        return [
            "six"
        ];
    } else if (value2 === "7") {
        return [
            "seven"
        ];
    } else if (value2 === "8") {
        return [
            "eight"
        ];
    } else if (value2 === "9") {
        return [
            "nine"
        ];
    } else {
        return "";
    }
};
const reprSymbol = Symbol.for("representation");
const denoInspectSymbol = Symbol.for("Deno.customInspect");
const toRepresentation = (item1)=>{
    const alreadySeen1 = new Set();
    const recursionWrapper1 = (item1)=>{
        if (item1 instanceof Object) {
            if (alreadySeen1.has(item1)) {
                return `[Self Reference]`;
            } else {
                alreadySeen1.add(item1);
            }
        }
        let output11;
        if (item1 === undefined) {
            output11 = "undefined";
        } else if (item1 === null) {
            output11 = "null";
        } else if (typeof item1 == 'string') {
            output11 = JSON.stringify(item1);
        } else if (typeof item1 == 'symbol') {
            if (!item1.description) {
                output11 = "Symbol()";
            } else {
                const globalVersion1 = Symbol.for(item1.description);
                if (globalVersion1 == item1) {
                    output11 = `Symbol.for(${JSON.stringify(item1.description)})`;
                } else {
                    output11 = `Symbol(${JSON.stringify(item1.description)})`;
                }
            }
        } else if (item1 instanceof Date) {
            output11 = `new Date(${item1.getTime()})`;
        } else if (item1 instanceof Array) {
            output11 = `[${item1.map((each2)=>recursionWrapper1(each2)).join(",")}]`;
        } else if (item1 instanceof Set) {
            output11 = `new Set(${[
                ...item1
            ].map((each2)=>recursionWrapper1(each2)).join(",")})`;
        } else if (item1 instanceof Object && item1.constructor == Object) {
            output11 = pureObjectRepr1(item1);
        } else if (item1 instanceof Map) {
            let string2 = "new Map(";
            for (const [key1, value2] of item1.entries()){
                const stringKey1 = recursionWrapper1(key1);
                const stringValue1 = recursionWrapper1(value2);
                if (!stringKey1.match(/\n/g)) {
                    string2 += `\n  [${stringKey1}, ${indent({
                        string: stringValue1,
                        by: "  ",
                        noLead: true
                    })}],`;
                } else {
                    string2 += `\n  [${indent({
                        string: stringKey1,
                        by: "  ",
                        noLead: true
                    })},\n  ${indent({
                        string: stringValue1,
                        by: "    ",
                        noLead: true
                    })}],`;
                }
            }
            string2 += "\n)";
            output11 = string2;
        } else {
            if (item1[reprSymbol] instanceof Function) {
                try {
                    output11 = item1[reprSymbol]();
                    return output11;
                } catch (error1) {}
            }
            if (item1[denoInspectSymbol] instanceof Function) {
                try {
                    output11 = item1[denoInspectSymbol]();
                    return output11;
                } catch (error1) {}
            }
            try {
                output11 = item1.toString();
                if (output11 !== "[object Object]") {
                    return output11;
                }
            } catch (error1) {}
            try {
                if (item1.constructor instanceof Function && item1.prototype && typeof item1.name == 'string') {
                    output11 = `class ${item1.name} { /*...*/ }`;
                    return output11;
                }
            } catch (error1) {}
            try {
                if (item1.constructor instanceof Function && typeof item1.constructor.name == 'string') {
                    output11 = `new ${item1.constructor.name}(${pureObjectRepr1(item1)})`;
                    return output11;
                }
            } catch (error1) {}
            return pureObjectRepr1(item1);
        }
        return output11;
    };
    const pureObjectRepr1 = (item1)=>{
        let string2 = "{";
        for (const [key1, value2] of Object.entries(item1)){
            const stringKey1 = recursionWrapper1(key1);
            const stringValue1 = recursionWrapper1(value2);
            string2 += `\n  ${stringKey1}: ${indent({
                string: stringValue1,
                by: "  ",
                noLead: true
            })},`;
        }
        string2 += "\n}";
        return string2;
    };
    return recursionWrapper1(item1);
};
function escapeRegexMatch(string2) {
    return string2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const regexpProxy = Symbol('regexpProxy');
const realExec = RegExp.prototype.exec;
RegExp.prototype.exec = function(...args1) {
    if (this[regexpProxy]) {
        return realExec.apply(this[regexpProxy], args1);
    }
    return realExec.apply(this, args1);
};
let proxyRegExp;
const regexProxyOptions = Object.freeze({
    get (original1, key1) {
        if (typeof key1 == 'string' && key1.match(/^[igymu]+$/)) {
            return proxyRegExp(original1, key1);
        }
        if (key1 == regexpProxy) {
            return original1;
        }
        return original1[key1];
    },
    set (original1, key1, value2) {
        original1[key1] = value2;
        return true;
    }
});
proxyRegExp = (parent1, flags1)=>{
    const regex1 = new RegExp(parent1, flags1);
    const output11 = new Proxy(regex1, regexProxyOptions);
    Object.setPrototypeOf(output11, Object.getPrototypeOf(regex1));
    return output11;
};
function regexWithStripWarning(shouldStrip1) {
    return (strings1, ...values1)=>{
        let newRegexString1 = "";
        for (const [string2, value2] of zip(strings1, values1)){
            newRegexString1 += string2;
            if (value2 instanceof RegExp) {
                if (!shouldStrip1 && (value2.ignoreCase || value2.sticky || value2.multiline || value2.unicode)) {
                    console.warn(`Warning: flags inside of regex:\n    The RegExp trigging this warning is: ${value2}\n    When calling the regex interpolater (e.g. regex\`something\${stuff}\`)\n    one of the \${} values (the one above) was a RegExp with a flag enabled\n    e.g. /stuff/i  <- i = ignoreCase flag enabled\n    When the /stuff/i gets interpolated, its going to loose its flags\n    (thats what I'm warning you about)\n    \n    To disable/ignore this warning do:\n        regex.stripFlags\`something\${/stuff/i}\`\n    If you want to add flags to the output of regex\`something\${stuff}\` do:\n        regex\`something\${stuff}\`.i   // ignoreCase\n        regex\`something\${stuff}\`.ig  // ignoreCase and global\n        regex\`something\${stuff}\`.gi  // functionally equivlent\n`);
                }
                const regexContent1 = `${value2}`.slice(1).replace(/\/.*$/, "");
                newRegexString1 += `(?:${regexContent1})`;
            } else if (value2 != null) {
                newRegexString1 += escapeRegexMatch(toString(value2));
            }
        }
        return proxyRegExp(newRegexString1, "");
    };
}
const regex = regexWithStripWarning(false);
regex.stripFlags = regexWithStripWarning(true);
const textDecoder = new TextDecoder('utf-8');
const textEncoder = new TextEncoder('utf-8');
textDecoder.decode.bind(textDecoder);
textEncoder.encode.bind(textEncoder);
function ascend(a1, b1) {
    return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
}
function descend(a1, b1) {
    return a1 < b1 ? 1 : a1 > b1 ? -1 : 0;
}
function swap(array1, a1, b1) {
    const temp1 = array1[a1];
    array1[a1] = array1[b1];
    array1[b1] = temp1;
}
function getParentIndex(index1) {
    return Math.floor((index1 + 1) / 2) - 1;
}
class BinaryHeap {
    compare;
    #data;
    constructor(compare1 = descend){
        this.compare = compare1;
        this.#data = [];
    }
    toArray() {
        return Array.from(this.#data);
    }
    static from(collection1, options1) {
        let result1;
        let unmappedValues1 = [];
        if (collection1 instanceof BinaryHeap) {
            result1 = new BinaryHeap(options1?.compare ?? collection1.compare);
            if (options1?.compare || options1?.map) {
                unmappedValues1 = collection1.#data;
            } else {
                result1.#data = Array.from(collection1.#data);
            }
        } else {
            result1 = options1?.compare ? new BinaryHeap(options1.compare) : new BinaryHeap();
            unmappedValues1 = collection1;
        }
        const values1 = options1?.map ? Array.from(unmappedValues1, options1.map, options1.thisArg) : unmappedValues1;
        result1.push(...values1);
        return result1;
    }
    get length() {
        return this.#data.length;
    }
    peek() {
        return this.#data[0];
    }
    pop() {
        const size1 = this.#data.length - 1;
        swap(this.#data, 0, size1);
        let parent1 = 0;
        let right1 = 2 * (parent1 + 1);
        let left1 = right1 - 1;
        while(left1 < size1){
            const greatestChild1 = right1 === size1 || this.compare(this.#data[left1], this.#data[right1]) <= 0 ? left1 : right1;
            if (this.compare(this.#data[greatestChild1], this.#data[parent1]) < 0) {
                swap(this.#data, parent1, greatestChild1);
                parent1 = greatestChild1;
            } else {
                break;
            }
            right1 = 2 * (parent1 + 1);
            left1 = right1 - 1;
        }
        return this.#data.pop();
    }
    push(...values1) {
        for (const value2 of values1){
            let index1 = this.#data.length;
            let parent1 = getParentIndex(index1);
            this.#data.push(value2);
            while(index1 !== 0 && this.compare(this.#data[index1], this.#data[parent1]) < 0){
                swap(this.#data, parent1, index1);
                index1 = parent1;
                parent1 = getParentIndex(index1);
            }
        }
        return this.#data.length;
    }
    clear() {
        this.#data = [];
    }
    isEmpty() {
        return this.#data.length === 0;
    }
    *drain() {
        while(!this.isEmpty()){
            yield this.pop();
        }
    }
    *[Symbol.iterator]() {
        yield* this.drain();
    }
}
class HuffmanNode {
    constructor(value2, frequency1){
        this.value = value2;
        this.frequency = frequency1;
        this.left = null;
        this.right = null;
    }
}
class HuffmanCoder {
    constructor({ values: values1 = {} , softCap: softCap1 = Infinity  }){
        this.cap = softCap1;
        this.effectiveFrequencyTable = {};
        this.isFrozen = false;
        Object.assign(this, values1);
    }
    addData(string2) {
        if (this.isFrozen) {
            throw Error(`Sorry, this coder has been frozen. Data can only be added BEFORE freezeing`);
        }
        const stringLength1 = string2.length;
        let startIndex1 = -1;
        while(startIndex1 < stringLength1 - 1){
            startIndex1++;
            let substring1 = "";
            for (const character1 of string2.slice(startIndex1)){
                substring1 += character1;
                this.effectiveFrequencyTable[substring1] = (this.effectiveFrequencyTable[substring1] || 0) + 1;
            }
        }
        return this;
    }
    toJSON() {
        if (!this.isFrozen) {
            this.freeze();
            this.isFrozen = false;
        }
        return {
            ...this
        };
    }
    static fromJSON(object1) {
        const coder1 = new HuffmanCoder();
        Object.assign(coder1, object1);
        return coder1;
    }
    freeze() {
        this.isFrozen = true;
        this.tree = this._buildHuffmanTree();
        this.codeMap = this._buildCodeMap(this.tree);
        const { encodingToNumber: encodingToNumber1 , substringToNumber: substringToNumber1 , numberToSubstring: numberToSubstring1  } = this._buildEnumerationMapping(this.codeMap, this.cap);
        this.encodingToNumber = encodingToNumber1;
        this.numberToSubstring = numberToSubstring1;
        this.substringToNumber = substringToNumber1;
        return this;
    }
    encode(data1) {
        if (!this.isFrozen) {
            this.freeze();
        }
        const codes1 = [];
        let remainingData1 = data1;
        outer: while(remainingData1.length > 0){
            for (const [substring1, number1] of Object.entries(this.substringToNumber)){
                if (substring1.length == 0) {
                    continue;
                }
                if (remainingData1.startsWith(substring1)) {
                    remainingData1 = remainingData1.slice(substring1.length);
                    codes1.push(number1);
                    continue outer;
                }
            }
            throw Error(`Unable to encode remaining string: ${remainingData1}\nUsing: ${toRepresentation(this.substringToNumber)}`);
        }
        return codes1;
    }
    decode(encodedData1) {
        if (!this.isFrozen) {
            this.freeze();
        }
        let decodedData1 = "";
        let currentNode1 = this.tree;
        if (encodedData1 instanceof Array) {
            if (encodedData1.length > 0) {
                if (typeof encodedData1[0] == 'number') {
                    return encodedData1.map((each2)=>this.numberToSubstring[each2]).join("");
                }
            }
            encodedData1 = encodedData1.join("");
        }
        for (const each2 of encodedData1){
            if (each2 === "0") {
                currentNode1 = currentNode1.left;
            } else {
                currentNode1 = currentNode1.right;
            }
            if (currentNode1.value) {
                decodedData1 += currentNode1.value;
                currentNode1 = this.tree;
            }
        }
        return decodedData1;
    }
    _buildHuffmanTree() {
        let numberOfEntries1 = Object.keys(this.effectiveFrequencyTable).length;
        for (const [substring1, effectiveFrequency1] of Object.entries(this.effectiveFrequencyTable)){
            if (substring1.length > 1) {
                const frequency1 = effectiveFrequency1 / substring1.length;
                if (frequency1 * Math.log2(substring1.length) < Math.log2(numberOfEntries1)) {
                    numberOfEntries1 -= 1;
                    delete this.effectiveFrequencyTable[substring1];
                }
            }
        }
        const priorityQueue1 = new BinaryHeap((a1, b1)=>ascend(a1.frequency, b1.frequency));
        for (const [substring1, frequency1] of Object.entries(this.effectiveFrequencyTable)){
            const effectiveFrequency1 = frequency1 * substring1.length;
            const node1 = new HuffmanNode(substring1, effectiveFrequency1);
            priorityQueue1.push(node1);
        }
        let iterCount1 = 0;
        while(priorityQueue1.length > 1){
            iterCount1 += 1;
            if ((iterCount1 - 1) % 1000 == 0) {
                console.log(`    on iteration ${iterCount1}, priorityQueue.length:${priorityQueue1.length}`);
            }
            const leftChild1 = priorityQueue1.pop();
            const rightChild1 = priorityQueue1.pop();
            const parent1 = new HuffmanNode(null, leftChild1.frequency + rightChild1.frequency);
            parent1.left = leftChild1;
            parent1.right = rightChild1;
            priorityQueue1.push(parent1);
        }
        return priorityQueue1.pop();
    }
    _buildCodeMap(tree1) {
        const codeMap1 = {};
        function traverse1(node1, code1) {
            if (node1.value) {
                codeMap1[node1.value] = code1;
            } else {
                traverse1(node1.left, code1 + "0");
                traverse1(node1.right, code1 + "1");
            }
        }
        traverse1(tree1, "");
        return codeMap1;
    }
    _buildEnumerationMapping(codeMap1, cap1) {
        const encodings1 = Object.entries(codeMap1);
        encodings1.sort(compare({
            elementToNumber: ([eachSubstring1, eachEncoding1])=>eachEncoding1.length,
            largestFirst: false
        }));
        const thresholdElement1 = encodings1.slice(0, cap1).slice(-1)[0];
        const threshold1 = thresholdElement1[1].length;
        const truncatedEncodings1 = encodings1.filter(([eachSubstring1, eachEncoding1])=>eachSubstring1.length == 1 || eachEncoding1.length <= threshold1);
        Object.fromEntries(truncatedEncodings1);
        let index1 = -1;
        const substringToNumberUnsorted1 = {};
        const encodingToNumber1 = {};
        const numberToSubstring1 = {};
        for (const [eachSubstring1, eachEncoding1] of truncatedEncodings1){
            ++index1;
            substringToNumberUnsorted1[eachSubstring1] = index1;
            encodingToNumber1[eachEncoding1] = index1;
            numberToSubstring1[index1] = eachSubstring1;
        }
        const substrings1 = Object.keys(substringToNumberUnsorted1);
        substrings1.sort(compare({
            elementToNumber: (each2)=>each2.length,
            largestFirst: true
        }));
        const substringToNumber1 = {};
        for (const substring1 of substrings1){
            substringToNumber1[substring1] = substringToNumberUnsorted1[substring1];
        }
        return {
            encodingToNumber: encodingToNumber1,
            substringToNumber: substringToNumber1,
            numberToSubstring: numberToSubstring1
        };
    }
}
class YAMLError extends Error {
    mark;
    constructor(message1 = "(unknown reason)", mark1 = ""){
        super(`${message1} ${mark1}`);
        this.mark = mark1;
        this.name = this.constructor.name;
    }
    toString(_compact1) {
        return `${this.name}: ${this.message} ${this.mark}`;
    }
}
function isBoolean(value2) {
    return typeof value2 === "boolean" || value2 instanceof Boolean;
}
function isObject(value2) {
    return value2 !== null && typeof value2 === "object";
}
function repeat(str1, count1) {
    let result1 = "";
    for(let cycle1 = 0; cycle1 < count1; cycle1++){
        result1 += str1;
    }
    return result1;
}
function isNegativeZero(i3) {
    return i3 === 0 && Number.NEGATIVE_INFINITY === 1 / i3;
}
class Mark {
    name;
    buffer;
    position;
    line;
    column;
    constructor(name1, buffer1, position1, line1, column1){
        this.name = name1;
        this.buffer = buffer1;
        this.position = position1;
        this.line = line1;
        this.column = column1;
    }
    getSnippet(indent1 = 4, maxLength1 = 75) {
        if (!this.buffer) return null;
        let head1 = "";
        let start1 = this.position;
        while(start1 > 0 && "\x00\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start1 - 1)) === -1){
            start1 -= 1;
            if (this.position - start1 > maxLength1 / 2 - 1) {
                head1 = " ... ";
                start1 += 5;
                break;
            }
        }
        let tail1 = "";
        let end1 = this.position;
        while(end1 < this.buffer.length && "\x00\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end1)) === -1){
            end1 += 1;
            if (end1 - this.position > maxLength1 / 2 - 1) {
                tail1 = " ... ";
                end1 -= 5;
                break;
            }
        }
        const snippet1 = this.buffer.slice(start1, end1);
        return `${repeat(" ", indent1)}${head1}${snippet1}${tail1}\n${repeat(" ", indent1 + this.position - start1 + head1.length)}^`;
    }
    toString(compact1) {
        let snippet1, where1 = "";
        if (this.name) {
            where1 += `in "${this.name}" `;
        }
        where1 += `at line ${this.line + 1}, column ${this.column + 1}`;
        if (!compact1) {
            snippet1 = this.getSnippet();
            if (snippet1) {
                where1 += `:\n${snippet1}`;
            }
        }
        return where1;
    }
}
function compileList(schema1, name1, result1) {
    const exclude1 = [];
    for (const includedSchema1 of schema1.include){
        result1 = compileList(includedSchema1, name1, result1);
    }
    for (const currentType1 of schema1[name1]){
        for(let previousIndex1 = 0; previousIndex1 < result1.length; previousIndex1++){
            const previousType1 = result1[previousIndex1];
            if (previousType1.tag === currentType1.tag && previousType1.kind === currentType1.kind) {
                exclude1.push(previousIndex1);
            }
        }
        result1.push(currentType1);
    }
    return result1.filter((_type1, index1)=>!exclude1.includes(index1));
}
function compileMap(...typesList1) {
    const result1 = {
        fallback: {},
        mapping: {},
        scalar: {},
        sequence: {}
    };
    for (const types1 of typesList1){
        for (const type1 of types1){
            if (type1.kind !== null) {
                result1[type1.kind][type1.tag] = result1["fallback"][type1.tag] = type1;
            }
        }
    }
    return result1;
}
class Schema {
    static SCHEMA_DEFAULT;
    implicit;
    explicit;
    include;
    compiledImplicit;
    compiledExplicit;
    compiledTypeMap;
    constructor(definition1){
        this.explicit = definition1.explicit || [];
        this.implicit = definition1.implicit || [];
        this.include = definition1.include || [];
        for (const type1 of this.implicit){
            if (type1.loadKind && type1.loadKind !== "scalar") {
                throw new YAMLError("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
            }
        }
        this.compiledImplicit = compileList(this, "implicit", []);
        this.compiledExplicit = compileList(this, "explicit", []);
        this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
    }
    extend(definition1) {
        return new Schema({
            implicit: [
                ...new Set([
                    ...this.implicit,
                    ...definition1?.implicit ?? []
                ])
            ],
            explicit: [
                ...new Set([
                    ...this.explicit,
                    ...definition1?.explicit ?? []
                ])
            ],
            include: [
                ...new Set([
                    ...this.include,
                    ...definition1?.include ?? []
                ])
            ]
        });
    }
    static create() {}
}
const DEFAULT_RESOLVE = ()=>true;
const DEFAULT_CONSTRUCT = (data1)=>data1;
function checkTagFormat(tag1) {
    return tag1;
}
class Type {
    tag;
    kind = null;
    instanceOf;
    predicate;
    represent;
    defaultStyle;
    styleAliases;
    loadKind;
    constructor(tag1, options1){
        this.tag = checkTagFormat(tag1);
        if (options1) {
            this.kind = options1.kind;
            this.resolve = options1.resolve || DEFAULT_RESOLVE;
            this.construct = options1.construct || DEFAULT_CONSTRUCT;
            this.instanceOf = options1.instanceOf;
            this.predicate = options1.predicate;
            this.represent = options1.represent;
            this.defaultStyle = options1.defaultStyle;
            this.styleAliases = options1.styleAliases;
        }
    }
    resolve = ()=>true;
    construct = (data1)=>data1;
}
class DenoStdInternalError extends Error {
    constructor(message1){
        super(message1);
        this.name = "DenoStdInternalError";
    }
}
function assert(expr1, msg1 = "") {
    if (!expr1) {
        throw new DenoStdInternalError(msg1);
    }
}
function copy(src1, dst1, off1 = 0) {
    off1 = Math.max(0, Math.min(off1, dst1.byteLength));
    const dstBytesAvailable1 = dst1.byteLength - off1;
    if (src1.byteLength > dstBytesAvailable1) {
        src1 = src1.subarray(0, dstBytesAvailable1);
    }
    dst1.set(src1, off1);
    return src1.byteLength;
}
const MIN_READ = 32 * 1024;
const MAX_SIZE = 2 ** 32 - 2;
class Buffer {
    #buf;
    #off = 0;
    constructor(ab1){
        this.#buf = ab1 === undefined ? new Uint8Array(0) : new Uint8Array(ab1);
    }
    bytes(options1 = {
        copy: true
    }) {
        if (options1.copy === false) return this.#buf.subarray(this.#off);
        return this.#buf.slice(this.#off);
    }
    empty() {
        return this.#buf.byteLength <= this.#off;
    }
    get length() {
        return this.#buf.byteLength - this.#off;
    }
    get capacity() {
        return this.#buf.buffer.byteLength;
    }
    truncate(n1) {
        if (n1 === 0) {
            this.reset();
            return;
        }
        if (n1 < 0 || n1 > this.length) {
            throw Error("bytes.Buffer: truncation out of range");
        }
        this.#reslice(this.#off + n1);
    }
    reset() {
        this.#reslice(0);
        this.#off = 0;
    }
    #tryGrowByReslice(n1) {
        const l1 = this.#buf.byteLength;
        if (n1 <= this.capacity - l1) {
            this.#reslice(l1 + n1);
            return l1;
        }
        return -1;
    }
    #reslice(len1) {
        assert(len1 <= this.#buf.buffer.byteLength);
        this.#buf = new Uint8Array(this.#buf.buffer, 0, len1);
    }
    readSync(p1) {
        if (this.empty()) {
            this.reset();
            if (p1.byteLength === 0) {
                return 0;
            }
            return null;
        }
        const nread1 = copy(this.#buf.subarray(this.#off), p1);
        this.#off += nread1;
        return nread1;
    }
    read(p1) {
        const rr1 = this.readSync(p1);
        return Promise.resolve(rr1);
    }
    writeSync(p1) {
        const m1 = this.#grow(p1.byteLength);
        return copy(p1, this.#buf, m1);
    }
    write(p1) {
        const n1 = this.writeSync(p1);
        return Promise.resolve(n1);
    }
    #grow(n1) {
        const m1 = this.length;
        if (m1 === 0 && this.#off !== 0) {
            this.reset();
        }
        const i3 = this.#tryGrowByReslice(n1);
        if (i3 >= 0) {
            return i3;
        }
        const c3 = this.capacity;
        if (n1 <= Math.floor(c3 / 2) - m1) {
            copy(this.#buf.subarray(this.#off), this.#buf);
        } else if (c3 + n1 > MAX_SIZE) {
            throw new Error("The buffer cannot be grown beyond the maximum size.");
        } else {
            const buf1 = new Uint8Array(Math.min(2 * c3 + n1, MAX_SIZE));
            copy(this.#buf.subarray(this.#off), buf1);
            this.#buf = buf1;
        }
        this.#off = 0;
        this.#reslice(Math.min(m1 + n1, MAX_SIZE));
        return m1;
    }
    grow(n1) {
        if (n1 < 0) {
            throw Error("Buffer.grow: negative count");
        }
        const m1 = this.#grow(n1);
        this.#reslice(m1);
    }
    async readFrom(r1) {
        let n1 = 0;
        const tmp1 = new Uint8Array(MIN_READ);
        while(true){
            const shouldGrow1 = this.capacity - this.length < MIN_READ;
            const buf1 = shouldGrow1 ? tmp1 : new Uint8Array(this.#buf.buffer, this.length);
            const nread1 = await r1.read(buf1);
            if (nread1 === null) {
                return n1;
            }
            if (shouldGrow1) this.writeSync(buf1.subarray(0, nread1));
            else this.#reslice(this.length + nread1);
            n1 += nread1;
        }
    }
    readFromSync(r1) {
        let n1 = 0;
        const tmp1 = new Uint8Array(MIN_READ);
        while(true){
            const shouldGrow1 = this.capacity - this.length < MIN_READ;
            const buf1 = shouldGrow1 ? tmp1 : new Uint8Array(this.#buf.buffer, this.length);
            const nread1 = r1.readSync(buf1);
            if (nread1 === null) {
                return n1;
            }
            if (shouldGrow1) this.writeSync(buf1.subarray(0, nread1));
            else this.#reslice(this.length + nread1);
            n1 += nread1;
        }
    }
}
const BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data1) {
    if (data1 === null) return false;
    let code1;
    let bitlen1 = 0;
    const max1 = data1.length;
    const map1 = BASE64_MAP;
    for(let idx1 = 0; idx1 < max1; idx1++){
        code1 = map1.indexOf(data1.charAt(idx1));
        if (code1 > 64) continue;
        if (code1 < 0) return false;
        bitlen1 += 6;
    }
    return bitlen1 % 8 === 0;
}
function constructYamlBinary(data1) {
    const input1 = data1.replace(/[\r\n=]/g, "");
    const max1 = input1.length;
    const map1 = BASE64_MAP;
    const result1 = [];
    let bits1 = 0;
    for(let idx1 = 0; idx1 < max1; idx1++){
        if (idx1 % 4 === 0 && idx1) {
            result1.push(bits1 >> 16 & 0xff);
            result1.push(bits1 >> 8 & 0xff);
            result1.push(bits1 & 0xff);
        }
        bits1 = bits1 << 6 | map1.indexOf(input1.charAt(idx1));
    }
    const tailbits1 = max1 % 4 * 6;
    if (tailbits1 === 0) {
        result1.push(bits1 >> 16 & 0xff);
        result1.push(bits1 >> 8 & 0xff);
        result1.push(bits1 & 0xff);
    } else if (tailbits1 === 18) {
        result1.push(bits1 >> 10 & 0xff);
        result1.push(bits1 >> 2 & 0xff);
    } else if (tailbits1 === 12) {
        result1.push(bits1 >> 4 & 0xff);
    }
    return new Buffer(new Uint8Array(result1));
}
function representYamlBinary(object1) {
    const max1 = object1.length;
    const map1 = BASE64_MAP;
    let result1 = "";
    let bits1 = 0;
    for(let idx1 = 0; idx1 < max1; idx1++){
        if (idx1 % 3 === 0 && idx1) {
            result1 += map1[bits1 >> 18 & 0x3f];
            result1 += map1[bits1 >> 12 & 0x3f];
            result1 += map1[bits1 >> 6 & 0x3f];
            result1 += map1[bits1 & 0x3f];
        }
        bits1 = (bits1 << 8) + object1[idx1];
    }
    const tail1 = max1 % 3;
    if (tail1 === 0) {
        result1 += map1[bits1 >> 18 & 0x3f];
        result1 += map1[bits1 >> 12 & 0x3f];
        result1 += map1[bits1 >> 6 & 0x3f];
        result1 += map1[bits1 & 0x3f];
    } else if (tail1 === 2) {
        result1 += map1[bits1 >> 10 & 0x3f];
        result1 += map1[bits1 >> 4 & 0x3f];
        result1 += map1[bits1 << 2 & 0x3f];
        result1 += map1[64];
    } else if (tail1 === 1) {
        result1 += map1[bits1 >> 2 & 0x3f];
        result1 += map1[bits1 << 4 & 0x3f];
        result1 += map1[64];
        result1 += map1[64];
    }
    return result1;
}
function isBinary(obj2) {
    if (typeof obj2?.readSync !== "function") {
        return false;
    }
    const buf1 = new Buffer();
    try {
        if (0 > buf1.readFromSync(obj2)) return true;
        return false;
    } catch  {
        return false;
    } finally{
        buf1.reset();
    }
}
const binary = new Type("tag:yaml.org,2002:binary", {
    construct: constructYamlBinary,
    kind: "scalar",
    predicate: isBinary,
    represent: representYamlBinary,
    resolve: resolveYamlBinary
});
function resolveYamlBoolean(data1) {
    const max1 = data1.length;
    return max1 === 4 && (data1 === "true" || data1 === "True" || data1 === "TRUE") || max1 === 5 && (data1 === "false" || data1 === "False" || data1 === "FALSE");
}
function constructYamlBoolean(data1) {
    return data1 === "true" || data1 === "True" || data1 === "TRUE";
}
const bool = new Type("tag:yaml.org,2002:bool", {
    construct: constructYamlBoolean,
    defaultStyle: "lowercase",
    kind: "scalar",
    predicate: isBoolean,
    represent: {
        lowercase (object1) {
            return object1 ? "true" : "false";
        },
        uppercase (object1) {
            return object1 ? "TRUE" : "FALSE";
        },
        camelcase (object1) {
            return object1 ? "True" : "False";
        }
    },
    resolve: resolveYamlBoolean
});
const YAML_FLOAT_PATTERN = new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?" + "|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?" + "|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*" + "|[-+]?\\.(?:inf|Inf|INF)" + "|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(data1) {
    if (!YAML_FLOAT_PATTERN.test(data1) || data1[data1.length - 1] === "_") {
        return false;
    }
    return true;
}
function constructYamlFloat(data1) {
    let value2 = data1.replace(/_/g, "").toLowerCase();
    const sign1 = value2[0] === "-" ? -1 : 1;
    const digits1 = [];
    if ("+-".indexOf(value2[0]) >= 0) {
        value2 = value2.slice(1);
    }
    if (value2 === ".inf") {
        return sign1 === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    }
    if (value2 === ".nan") {
        return NaN;
    }
    if (value2.indexOf(":") >= 0) {
        value2.split(":").forEach((v1)=>{
            digits1.unshift(parseFloat(v1));
        });
        let valueNb1 = 0.0;
        let base1 = 1;
        digits1.forEach((d1)=>{
            valueNb1 += d1 * base1;
            base1 *= 60;
        });
        return sign1 * valueNb1;
    }
    return sign1 * parseFloat(value2);
}
const SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object1, style1) {
    if (isNaN(object1)) {
        switch(style1){
            case "lowercase":
                return ".nan";
            case "uppercase":
                return ".NAN";
            case "camelcase":
                return ".NaN";
        }
    } else if (Number.POSITIVE_INFINITY === object1) {
        switch(style1){
            case "lowercase":
                return ".inf";
            case "uppercase":
                return ".INF";
            case "camelcase":
                return ".Inf";
        }
    } else if (Number.NEGATIVE_INFINITY === object1) {
        switch(style1){
            case "lowercase":
                return "-.inf";
            case "uppercase":
                return "-.INF";
            case "camelcase":
                return "-.Inf";
        }
    } else if (isNegativeZero(object1)) {
        return "-0.0";
    }
    const res1 = object1.toString(10);
    return SCIENTIFIC_WITHOUT_DOT.test(res1) ? res1.replace("e", ".e") : res1;
}
function isFloat(object1) {
    return Object.prototype.toString.call(object1) === "[object Number]" && (object1 % 1 !== 0 || isNegativeZero(object1));
}
const __float = new Type("tag:yaml.org,2002:float", {
    construct: constructYamlFloat,
    defaultStyle: "lowercase",
    kind: "scalar",
    predicate: isFloat,
    represent: representYamlFloat,
    resolve: resolveYamlFloat
});
function reconstructFunction(code1) {
    const func1 = new Function(`return ${code1}`)();
    if (!(func1 instanceof Function)) {
        throw new TypeError(`Expected function but got ${typeof func1}: ${code1}`);
    }
    return func1;
}
new Type("tag:yaml.org,2002:js/function", {
    kind: "scalar",
    resolve (data1) {
        if (data1 === null) {
            return false;
        }
        try {
            reconstructFunction(`${data1}`);
            return true;
        } catch (_err1) {
            return false;
        }
    },
    construct (data1) {
        return reconstructFunction(data1);
    },
    predicate (object1) {
        return object1 instanceof Function;
    },
    represent (object1) {
        return object1.toString();
    }
});
function isHexCode(c3) {
    return 0x30 <= c3 && c3 <= 0x39 || 0x41 <= c3 && c3 <= 0x46 || 0x61 <= c3 && c3 <= 0x66;
}
function isOctCode(c3) {
    return 0x30 <= c3 && c3 <= 0x37;
}
function isDecCode(c3) {
    return 0x30 <= c3 && c3 <= 0x39;
}
function resolveYamlInteger(data1) {
    const max1 = data1.length;
    let index1 = 0;
    let hasDigits1 = false;
    if (!max1) return false;
    let ch1 = data1[index1];
    if (ch1 === "-" || ch1 === "+") {
        ch1 = data1[++index1];
    }
    if (ch1 === "0") {
        if (index1 + 1 === max1) return true;
        ch1 = data1[++index1];
        if (ch1 === "b") {
            index1++;
            for(; index1 < max1; index1++){
                ch1 = data1[index1];
                if (ch1 === "_") continue;
                if (ch1 !== "0" && ch1 !== "1") return false;
                hasDigits1 = true;
            }
            return hasDigits1 && ch1 !== "_";
        }
        if (ch1 === "x") {
            index1++;
            for(; index1 < max1; index1++){
                ch1 = data1[index1];
                if (ch1 === "_") continue;
                if (!isHexCode(data1.charCodeAt(index1))) return false;
                hasDigits1 = true;
            }
            return hasDigits1 && ch1 !== "_";
        }
        for(; index1 < max1; index1++){
            ch1 = data1[index1];
            if (ch1 === "_") continue;
            if (!isOctCode(data1.charCodeAt(index1))) return false;
            hasDigits1 = true;
        }
        return hasDigits1 && ch1 !== "_";
    }
    if (ch1 === "_") return false;
    for(; index1 < max1; index1++){
        ch1 = data1[index1];
        if (ch1 === "_") continue;
        if (ch1 === ":") break;
        if (!isDecCode(data1.charCodeAt(index1))) {
            return false;
        }
        hasDigits1 = true;
    }
    if (!hasDigits1 || ch1 === "_") return false;
    if (ch1 !== ":") return true;
    return /^(:[0-5]?[0-9])+$/.test(data1.slice(index1));
}
function constructYamlInteger(data1) {
    let value2 = data1;
    const digits1 = [];
    if (value2.indexOf("_") !== -1) {
        value2 = value2.replace(/_/g, "");
    }
    let sign1 = 1;
    let ch1 = value2[0];
    if (ch1 === "-" || ch1 === "+") {
        if (ch1 === "-") sign1 = -1;
        value2 = value2.slice(1);
        ch1 = value2[0];
    }
    if (value2 === "0") return 0;
    if (ch1 === "0") {
        if (value2[1] === "b") return sign1 * parseInt(value2.slice(2), 2);
        if (value2[1] === "x") return sign1 * parseInt(value2, 16);
        return sign1 * parseInt(value2, 8);
    }
    if (value2.indexOf(":") !== -1) {
        value2.split(":").forEach((v1)=>{
            digits1.unshift(parseInt(v1, 10));
        });
        let valueInt1 = 0;
        let base1 = 1;
        digits1.forEach((d1)=>{
            valueInt1 += d1 * base1;
            base1 *= 60;
        });
        return sign1 * valueInt1;
    }
    return sign1 * parseInt(value2, 10);
}
function isInteger(object1) {
    return Object.prototype.toString.call(object1) === "[object Number]" && object1 % 1 === 0 && !isNegativeZero(object1);
}
const __int = new Type("tag:yaml.org,2002:int", {
    construct: constructYamlInteger,
    defaultStyle: "decimal",
    kind: "scalar",
    predicate: isInteger,
    represent: {
        binary (obj2) {
            return obj2 >= 0 ? `0b${obj2.toString(2)}` : `-0b${obj2.toString(2).slice(1)}`;
        },
        octal (obj2) {
            return obj2 >= 0 ? `0${obj2.toString(8)}` : `-0${obj2.toString(8).slice(1)}`;
        },
        decimal (obj2) {
            return obj2.toString(10);
        },
        hexadecimal (obj2) {
            return obj2 >= 0 ? `0x${obj2.toString(16).toUpperCase()}` : `-0x${obj2.toString(16).toUpperCase().slice(1)}`;
        }
    },
    resolve: resolveYamlInteger,
    styleAliases: {
        binary: [
            2,
            "bin"
        ],
        decimal: [
            10,
            "dec"
        ],
        hexadecimal: [
            16,
            "hex"
        ],
        octal: [
            8,
            "oct"
        ]
    }
});
const map = new Type("tag:yaml.org,2002:map", {
    construct (data1) {
        return data1 !== null ? data1 : {};
    },
    kind: "mapping"
});
function resolveYamlMerge(data1) {
    return data1 === "<<" || data1 === null;
}
const merge = new Type("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: resolveYamlMerge
});
function resolveYamlNull(data1) {
    const max1 = data1.length;
    return max1 === 1 && data1 === "~" || max1 === 4 && (data1 === "null" || data1 === "Null" || data1 === "NULL");
}
function constructYamlNull() {
    return null;
}
function isNull(object1) {
    return object1 === null;
}
const nil = new Type("tag:yaml.org,2002:null", {
    construct: constructYamlNull,
    defaultStyle: "lowercase",
    kind: "scalar",
    predicate: isNull,
    represent: {
        canonical () {
            return "~";
        },
        lowercase () {
            return "null";
        },
        uppercase () {
            return "NULL";
        },
        camelcase () {
            return "Null";
        }
    },
    resolve: resolveYamlNull
});
const { hasOwn  } = Object;
const _toString = Object.prototype.toString;
function resolveYamlOmap(data1) {
    const objectKeys1 = [];
    let pairKey1 = "";
    let pairHasKey1 = false;
    for (const pair1 of data1){
        pairHasKey1 = false;
        if (_toString.call(pair1) !== "[object Object]") return false;
        for(pairKey1 in pair1){
            if (hasOwn(pair1, pairKey1)) {
                if (!pairHasKey1) pairHasKey1 = true;
                else return false;
            }
        }
        if (!pairHasKey1) return false;
        if (objectKeys1.indexOf(pairKey1) === -1) objectKeys1.push(pairKey1);
        else return false;
    }
    return true;
}
function constructYamlOmap(data1) {
    return data1 !== null ? data1 : [];
}
const omap = new Type("tag:yaml.org,2002:omap", {
    construct: constructYamlOmap,
    kind: "sequence",
    resolve: resolveYamlOmap
});
const _toString = Object.prototype.toString;
function resolveYamlPairs(data1) {
    const result1 = Array.from({
        length: data1.length
    });
    for(let index1 = 0; index1 < data1.length; index1++){
        const pair1 = data1[index1];
        if (_toString.call(pair1) !== "[object Object]") return false;
        const keys1 = Object.keys(pair1);
        if (keys1.length !== 1) return false;
        result1[index1] = [
            keys1[0],
            pair1[keys1[0]]
        ];
    }
    return true;
}
function constructYamlPairs(data1) {
    if (data1 === null) return [];
    const result1 = Array.from({
        length: data1.length
    });
    for(let index1 = 0; index1 < data1.length; index1 += 1){
        const pair1 = data1[index1];
        const keys1 = Object.keys(pair1);
        result1[index1] = [
            keys1[0],
            pair1[keys1[0]]
        ];
    }
    return result1;
}
const pairs = new Type("tag:yaml.org,2002:pairs", {
    construct: constructYamlPairs,
    kind: "sequence",
    resolve: resolveYamlPairs
});
const REGEXP = /^\/(?<regexp>[\s\S]+)\/(?<modifiers>[gismuy]*)$/;
const regexp = new Type("tag:yaml.org,2002:js/regexp", {
    kind: "scalar",
    resolve (data1) {
        if (data1 === null || !data1.length) {
            return false;
        }
        const regexp1 = `${data1}`;
        if (regexp1.charAt(0) === "/") {
            if (!REGEXP.test(data1)) {
                return false;
            }
            const modifiers1 = [
                ...regexp1.match(REGEXP)?.groups?.modifiers ?? ""
            ];
            if (new Set(modifiers1).size < modifiers1.length) {
                return false;
            }
        }
        return true;
    },
    construct (data1) {
        const { regexp: regexp1 = `${data1}` , modifiers: modifiers1 = ""  } = `${data1}`.match(REGEXP)?.groups ?? {};
        return new RegExp(regexp1, modifiers1);
    },
    predicate (object1) {
        return object1 instanceof RegExp;
    },
    represent (object1) {
        return object1.toString();
    }
});
const seq = new Type("tag:yaml.org,2002:seq", {
    construct (data1) {
        return data1 !== null ? data1 : [];
    },
    kind: "sequence"
});
const { hasOwn  } = Object;
function resolveYamlSet(data1) {
    if (data1 === null) return true;
    for(const key1 in data1){
        if (hasOwn(data1, key1)) {
            if (data1[key1] !== null) return false;
        }
    }
    return true;
}
function constructYamlSet(data1) {
    return data1 !== null ? data1 : {};
}
const set = new Type("tag:yaml.org,2002:set", {
    construct: constructYamlSet,
    kind: "mapping",
    resolve: resolveYamlSet
});
const str = new Type("tag:yaml.org,2002:str", {
    construct (data1) {
        return data1 !== null ? data1 : "";
    },
    kind: "scalar"
});
const YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9])" + "-([0-9][0-9])$");
const YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9]?)" + "-([0-9][0-9]?)" + "(?:[Tt]|[ \\t]+)" + "([0-9][0-9]?)" + ":([0-9][0-9])" + ":([0-9][0-9])" + "(?:\\.([0-9]*))?" + "(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + "(?::([0-9][0-9]))?))?$");
function resolveYamlTimestamp(data1) {
    if (data1 === null) return false;
    if (YAML_DATE_REGEXP.exec(data1) !== null) return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data1) !== null) return true;
    return false;
}
function constructYamlTimestamp(data1) {
    let match1 = YAML_DATE_REGEXP.exec(data1);
    if (match1 === null) match1 = YAML_TIMESTAMP_REGEXP.exec(data1);
    if (match1 === null) throw new Error("Date resolve error");
    const year1 = +match1[1];
    const month1 = +match1[2] - 1;
    const day1 = +match1[3];
    if (!match1[4]) {
        return new Date(Date.UTC(year1, month1, day1));
    }
    const hour1 = +match1[4];
    const minute1 = +match1[5];
    const second1 = +match1[6];
    let fraction1 = 0;
    if (match1[7]) {
        let partFraction1 = match1[7].slice(0, 3);
        while(partFraction1.length < 3){
            partFraction1 += "0";
        }
        fraction1 = +partFraction1;
    }
    let delta1 = null;
    if (match1[9]) {
        const tzHour1 = +match1[10];
        const tzMinute1 = +(match1[11] || 0);
        delta1 = (tzHour1 * 60 + tzMinute1) * 60000;
        if (match1[9] === "-") delta1 = -delta1;
    }
    const date1 = new Date(Date.UTC(year1, month1, day1, hour1, minute1, second1, fraction1));
    if (delta1) date1.setTime(date1.getTime() - delta1);
    return date1;
}
function representYamlTimestamp(date1) {
    return date1.toISOString();
}
const timestamp = new Type("tag:yaml.org,2002:timestamp", {
    construct: constructYamlTimestamp,
    instanceOf: Date,
    kind: "scalar",
    represent: representYamlTimestamp,
    resolve: resolveYamlTimestamp
});
const undefinedType = new Type("tag:yaml.org,2002:js/undefined", {
    kind: "scalar",
    resolve () {
        return true;
    },
    construct () {
        return undefined;
    },
    predicate (object1) {
        return typeof object1 === "undefined";
    },
    represent () {
        return "";
    }
});
const failsafe = new Schema({
    explicit: [
        str,
        seq,
        map
    ]
});
const json = new Schema({
    implicit: [
        nil,
        bool,
        __int,
        __float
    ],
    include: [
        failsafe
    ]
});
const core = new Schema({
    include: [
        json
    ]
});
const def = new Schema({
    explicit: [
        binary,
        omap,
        pairs,
        set
    ],
    implicit: [
        timestamp,
        merge
    ],
    include: [
        core
    ]
});
new Schema({
    explicit: [
        regexp,
        undefinedType
    ],
    include: [
        def
    ]
});
class State {
    schema;
    constructor(schema1 = def){
        this.schema = schema1;
    }
}
class LoaderState extends State {
    input;
    documents;
    length;
    lineIndent;
    lineStart;
    position;
    line;
    filename;
    onWarning;
    legacy;
    json;
    listener;
    implicitTypes;
    typeMap;
    version;
    checkLineBreaks;
    tagMap;
    anchorMap;
    tag;
    anchor;
    kind;
    result;
    constructor(input1, { filename: filename1 , schema: schema1 , onWarning: onWarning1 , legacy: legacy1 = false , json: json1 = false , listener: listener1 = null  }){
        super(schema1);
        this.input = input1;
        this.documents = [];
        this.lineIndent = 0;
        this.lineStart = 0;
        this.position = 0;
        this.line = 0;
        this.result = "";
        this.filename = filename1;
        this.onWarning = onWarning1;
        this.legacy = legacy1;
        this.json = json1;
        this.listener = listener1;
        this.implicitTypes = this.schema.compiledImplicit;
        this.typeMap = this.schema.compiledTypeMap;
        this.length = input1.length;
    }
}
const { hasOwn  } = Object;
const CONTEXT_BLOCK_IN = 3;
const CONTEXT_BLOCK_OUT = 4;
const CHOMPING_STRIP = 2;
const CHOMPING_KEEP = 3;
const PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
const PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
const PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
const PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
const PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj2) {
    return Object.prototype.toString.call(obj2);
}
function isEOL(c3) {
    return c3 === 0x0a || c3 === 0x0d;
}
function isWhiteSpace(c3) {
    return c3 === 0x09 || c3 === 0x20;
}
function isWsOrEol(c3) {
    return c3 === 0x09 || c3 === 0x20 || c3 === 0x0a || c3 === 0x0d;
}
function isFlowIndicator(c3) {
    return c3 === 0x2c || c3 === 0x5b || c3 === 0x5d || c3 === 0x7b || c3 === 0x7d;
}
function fromHexCode(c3) {
    if (0x30 <= c3 && c3 <= 0x39) {
        return c3 - 0x30;
    }
    const lc1 = c3 | 0x20;
    if (0x61 <= lc1 && lc1 <= 0x66) {
        return lc1 - 0x61 + 10;
    }
    return -1;
}
function escapedHexLen(c3) {
    if (c3 === 0x78) {
        return 2;
    }
    if (c3 === 0x75) {
        return 4;
    }
    if (c3 === 0x55) {
        return 8;
    }
    return 0;
}
function fromDecimalCode(c3) {
    if (0x30 <= c3 && c3 <= 0x39) {
        return c3 - 0x30;
    }
    return -1;
}
function simpleEscapeSequence(c3) {
    return c3 === 0x30 ? "\x00" : c3 === 0x61 ? "\x07" : c3 === 0x62 ? "\x08" : c3 === 0x74 ? "\x09" : c3 === 0x09 ? "\x09" : c3 === 0x6e ? "\x0A" : c3 === 0x76 ? "\x0B" : c3 === 0x66 ? "\x0C" : c3 === 0x72 ? "\x0D" : c3 === 0x65 ? "\x1B" : c3 === 0x20 ? " " : c3 === 0x22 ? "\x22" : c3 === 0x2f ? "/" : c3 === 0x5c ? "\x5C" : c3 === 0x4e ? "\x85" : c3 === 0x5f ? "\xA0" : c3 === 0x4c ? "\u2028" : c3 === 0x50 ? "\u2029" : "";
}
function charFromCodepoint(c3) {
    if (c3 <= 0xffff) {
        return String.fromCharCode(c3);
    }
    return String.fromCharCode((c3 - 0x010000 >> 10) + 0xd800, (c3 - 0x010000 & 0x03ff) + 0xdc00);
}
const simpleEscapeCheck = Array.from({
    length: 256
});
const simpleEscapeMap = Array.from({
    length: 256
});
for(let i = 0; i < 256; i++){
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function generateError(state1, message1) {
    return new YAMLError(message1, new Mark(state1.filename, state1.input, state1.position, state1.line, state1.position - state1.lineStart));
}
function throwError(state1, message1) {
    throw generateError(state1, message1);
}
function throwWarning(state1, message1) {
    if (state1.onWarning) {
        state1.onWarning.call(null, generateError(state1, message1));
    }
}
const directiveHandlers = {
    YAML (state1, _name1, ...args1) {
        if (state1.version !== null) {
            return throwError(state1, "duplication of %YAML directive");
        }
        if (args1.length !== 1) {
            return throwError(state1, "YAML directive accepts exactly one argument");
        }
        const match1 = /^([0-9]+)\.([0-9]+)$/.exec(args1[0]);
        if (match1 === null) {
            return throwError(state1, "ill-formed argument of the YAML directive");
        }
        const major1 = parseInt(match1[1], 10);
        const minor1 = parseInt(match1[2], 10);
        if (major1 !== 1) {
            return throwError(state1, "unacceptable YAML version of the document");
        }
        state1.version = args1[0];
        state1.checkLineBreaks = minor1 < 2;
        if (minor1 !== 1 && minor1 !== 2) {
            return throwWarning(state1, "unsupported YAML version of the document");
        }
    },
    TAG (state1, _name1, ...args1) {
        if (args1.length !== 2) {
            return throwError(state1, "TAG directive accepts exactly two arguments");
        }
        const handle1 = args1[0];
        const prefix1 = args1[1];
        if (!PATTERN_TAG_HANDLE.test(handle1)) {
            return throwError(state1, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (state1.tagMap && hasOwn(state1.tagMap, handle1)) {
            return throwError(state1, `there is a previously declared suffix for "${handle1}" tag handle`);
        }
        if (!PATTERN_TAG_URI.test(prefix1)) {
            return throwError(state1, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        if (typeof state1.tagMap === "undefined") {
            state1.tagMap = {};
        }
        state1.tagMap[handle1] = prefix1;
    }
};
function captureSegment(state1, start1, end1, checkJson1) {
    let result1;
    if (start1 < end1) {
        result1 = state1.input.slice(start1, end1);
        if (checkJson1) {
            for(let position1 = 0, length1 = result1.length; position1 < length1; position1++){
                const character1 = result1.charCodeAt(position1);
                if (!(character1 === 0x09 || 0x20 <= character1 && character1 <= 0x10ffff)) {
                    return throwError(state1, "expected valid JSON character");
                }
            }
        } else if (PATTERN_NON_PRINTABLE.test(result1)) {
            return throwError(state1, "the stream contains non-printable characters");
        }
        state1.result += result1;
    }
}
function mergeMappings(state1, destination1, source1, overridableKeys1) {
    if (!isObject(source1)) {
        return throwError(state1, "cannot merge mappings; the provided source object is unacceptable");
    }
    const keys1 = Object.keys(source1);
    for(let i3 = 0, len1 = keys1.length; i3 < len1; i3++){
        const key1 = keys1[i3];
        if (!hasOwn(destination1, key1)) {
            destination1[key1] = source1[key1];
            overridableKeys1[key1] = true;
        }
    }
}
function storeMappingPair(state1, result1, overridableKeys1, keyTag1, keyNode1, valueNode1, startLine1, startPos1) {
    if (Array.isArray(keyNode1)) {
        keyNode1 = Array.prototype.slice.call(keyNode1);
        for(let index1 = 0, quantity1 = keyNode1.length; index1 < quantity1; index1++){
            if (Array.isArray(keyNode1[index1])) {
                return throwError(state1, "nested arrays are not supported inside keys");
            }
            if (typeof keyNode1 === "object" && _class(keyNode1[index1]) === "[object Object]") {
                keyNode1[index1] = "[object Object]";
            }
        }
    }
    if (typeof keyNode1 === "object" && _class(keyNode1) === "[object Object]") {
        keyNode1 = "[object Object]";
    }
    keyNode1 = String(keyNode1);
    if (result1 === null) {
        result1 = {};
    }
    if (keyTag1 === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode1)) {
            for(let index1 = 0, quantity1 = valueNode1.length; index1 < quantity1; index1++){
                mergeMappings(state1, result1, valueNode1[index1], overridableKeys1);
            }
        } else {
            mergeMappings(state1, result1, valueNode1, overridableKeys1);
        }
    } else {
        if (!state1.json && !hasOwn(overridableKeys1, keyNode1) && hasOwn(result1, keyNode1)) {
            state1.line = startLine1 || state1.line;
            state1.position = startPos1 || state1.position;
            return throwError(state1, "duplicated mapping key");
        }
        result1[keyNode1] = valueNode1;
        delete overridableKeys1[keyNode1];
    }
    return result1;
}
function readLineBreak(state1) {
    const ch1 = state1.input.charCodeAt(state1.position);
    if (ch1 === 0x0a) {
        state1.position++;
    } else if (ch1 === 0x0d) {
        state1.position++;
        if (state1.input.charCodeAt(state1.position) === 0x0a) {
            state1.position++;
        }
    } else {
        return throwError(state1, "a line break is expected");
    }
    state1.line += 1;
    state1.lineStart = state1.position;
}
function skipSeparationSpace(state1, allowComments1, checkIndent1) {
    let lineBreaks1 = 0, ch1 = state1.input.charCodeAt(state1.position);
    while(ch1 !== 0){
        while(isWhiteSpace(ch1)){
            ch1 = state1.input.charCodeAt(++state1.position);
        }
        if (allowComments1 && ch1 === 0x23) {
            do {
                ch1 = state1.input.charCodeAt(++state1.position);
            }while (ch1 !== 0x0a && ch1 !== 0x0d && ch1 !== 0)
        }
        if (isEOL(ch1)) {
            readLineBreak(state1);
            ch1 = state1.input.charCodeAt(state1.position);
            lineBreaks1++;
            state1.lineIndent = 0;
            while(ch1 === 0x20){
                state1.lineIndent++;
                ch1 = state1.input.charCodeAt(++state1.position);
            }
        } else {
            break;
        }
    }
    if (checkIndent1 !== -1 && lineBreaks1 !== 0 && state1.lineIndent < checkIndent1) {
        throwWarning(state1, "deficient indentation");
    }
    return lineBreaks1;
}
function testDocumentSeparator(state1) {
    let _position1 = state1.position;
    let ch1 = state1.input.charCodeAt(_position1);
    if ((ch1 === 0x2d || ch1 === 0x2e) && ch1 === state1.input.charCodeAt(_position1 + 1) && ch1 === state1.input.charCodeAt(_position1 + 2)) {
        _position1 += 3;
        ch1 = state1.input.charCodeAt(_position1);
        if (ch1 === 0 || isWsOrEol(ch1)) {
            return true;
        }
    }
    return false;
}
function writeFoldedLines(state1, count1) {
    if (count1 === 1) {
        state1.result += " ";
    } else if (count1 > 1) {
        state1.result += repeat("\n", count1 - 1);
    }
}
function readPlainScalar(state1, nodeIndent1, withinFlowCollection1) {
    const kind1 = state1.kind;
    const result1 = state1.result;
    let ch1 = state1.input.charCodeAt(state1.position);
    if (isWsOrEol(ch1) || isFlowIndicator(ch1) || ch1 === 0x23 || ch1 === 0x26 || ch1 === 0x2a || ch1 === 0x21 || ch1 === 0x7c || ch1 === 0x3e || ch1 === 0x27 || ch1 === 0x22 || ch1 === 0x25 || ch1 === 0x40 || ch1 === 0x60) {
        return false;
    }
    let following1;
    if (ch1 === 0x3f || ch1 === 0x2d) {
        following1 = state1.input.charCodeAt(state1.position + 1);
        if (isWsOrEol(following1) || withinFlowCollection1 && isFlowIndicator(following1)) {
            return false;
        }
    }
    state1.kind = "scalar";
    state1.result = "";
    let captureEnd1, captureStart1 = captureEnd1 = state1.position;
    let hasPendingContent1 = false;
    let line1 = 0;
    while(ch1 !== 0){
        if (ch1 === 0x3a) {
            following1 = state1.input.charCodeAt(state1.position + 1);
            if (isWsOrEol(following1) || withinFlowCollection1 && isFlowIndicator(following1)) {
                break;
            }
        } else if (ch1 === 0x23) {
            const preceding1 = state1.input.charCodeAt(state1.position - 1);
            if (isWsOrEol(preceding1)) {
                break;
            }
        } else if (state1.position === state1.lineStart && testDocumentSeparator(state1) || withinFlowCollection1 && isFlowIndicator(ch1)) {
            break;
        } else if (isEOL(ch1)) {
            line1 = state1.line;
            const lineStart1 = state1.lineStart;
            const lineIndent1 = state1.lineIndent;
            skipSeparationSpace(state1, false, -1);
            if (state1.lineIndent >= nodeIndent1) {
                hasPendingContent1 = true;
                ch1 = state1.input.charCodeAt(state1.position);
                continue;
            } else {
                state1.position = captureEnd1;
                state1.line = line1;
                state1.lineStart = lineStart1;
                state1.lineIndent = lineIndent1;
                break;
            }
        }
        if (hasPendingContent1) {
            captureSegment(state1, captureStart1, captureEnd1, false);
            writeFoldedLines(state1, state1.line - line1);
            captureStart1 = captureEnd1 = state1.position;
            hasPendingContent1 = false;
        }
        if (!isWhiteSpace(ch1)) {
            captureEnd1 = state1.position + 1;
        }
        ch1 = state1.input.charCodeAt(++state1.position);
    }
    captureSegment(state1, captureStart1, captureEnd1, false);
    if (state1.result) {
        return true;
    }
    state1.kind = kind1;
    state1.result = result1;
    return false;
}
function readSingleQuotedScalar(state1, nodeIndent1) {
    let ch1, captureStart1, captureEnd1;
    ch1 = state1.input.charCodeAt(state1.position);
    if (ch1 !== 0x27) {
        return false;
    }
    state1.kind = "scalar";
    state1.result = "";
    state1.position++;
    captureStart1 = captureEnd1 = state1.position;
    while((ch1 = state1.input.charCodeAt(state1.position)) !== 0){
        if (ch1 === 0x27) {
            captureSegment(state1, captureStart1, state1.position, true);
            ch1 = state1.input.charCodeAt(++state1.position);
            if (ch1 === 0x27) {
                captureStart1 = state1.position;
                state1.position++;
                captureEnd1 = state1.position;
            } else {
                return true;
            }
        } else if (isEOL(ch1)) {
            captureSegment(state1, captureStart1, captureEnd1, true);
            writeFoldedLines(state1, skipSeparationSpace(state1, false, nodeIndent1));
            captureStart1 = captureEnd1 = state1.position;
        } else if (state1.position === state1.lineStart && testDocumentSeparator(state1)) {
            return throwError(state1, "unexpected end of the document within a single quoted scalar");
        } else {
            state1.position++;
            captureEnd1 = state1.position;
        }
    }
    return throwError(state1, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state1, nodeIndent1) {
    let ch1 = state1.input.charCodeAt(state1.position);
    if (ch1 !== 0x22) {
        return false;
    }
    state1.kind = "scalar";
    state1.result = "";
    state1.position++;
    let captureEnd1, captureStart1 = captureEnd1 = state1.position;
    let tmp1;
    while((ch1 = state1.input.charCodeAt(state1.position)) !== 0){
        if (ch1 === 0x22) {
            captureSegment(state1, captureStart1, state1.position, true);
            state1.position++;
            return true;
        }
        if (ch1 === 0x5c) {
            captureSegment(state1, captureStart1, state1.position, true);
            ch1 = state1.input.charCodeAt(++state1.position);
            if (isEOL(ch1)) {
                skipSeparationSpace(state1, false, nodeIndent1);
            } else if (ch1 < 256 && simpleEscapeCheck[ch1]) {
                state1.result += simpleEscapeMap[ch1];
                state1.position++;
            } else if ((tmp1 = escapedHexLen(ch1)) > 0) {
                let hexLength1 = tmp1;
                let hexResult1 = 0;
                for(; hexLength1 > 0; hexLength1--){
                    ch1 = state1.input.charCodeAt(++state1.position);
                    if ((tmp1 = fromHexCode(ch1)) >= 0) {
                        hexResult1 = (hexResult1 << 4) + tmp1;
                    } else {
                        return throwError(state1, "expected hexadecimal character");
                    }
                }
                state1.result += charFromCodepoint(hexResult1);
                state1.position++;
            } else {
                return throwError(state1, "unknown escape sequence");
            }
            captureStart1 = captureEnd1 = state1.position;
        } else if (isEOL(ch1)) {
            captureSegment(state1, captureStart1, captureEnd1, true);
            writeFoldedLines(state1, skipSeparationSpace(state1, false, nodeIndent1));
            captureStart1 = captureEnd1 = state1.position;
        } else if (state1.position === state1.lineStart && testDocumentSeparator(state1)) {
            return throwError(state1, "unexpected end of the document within a double quoted scalar");
        } else {
            state1.position++;
            captureEnd1 = state1.position;
        }
    }
    return throwError(state1, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state1, nodeIndent1) {
    let ch1 = state1.input.charCodeAt(state1.position);
    let terminator1;
    let isMapping1 = true;
    let result1 = {};
    if (ch1 === 0x5b) {
        terminator1 = 0x5d;
        isMapping1 = false;
        result1 = [];
    } else if (ch1 === 0x7b) {
        terminator1 = 0x7d;
    } else {
        return false;
    }
    if (state1.anchor !== null && typeof state1.anchor != "undefined" && typeof state1.anchorMap != "undefined") {
        state1.anchorMap[state1.anchor] = result1;
    }
    ch1 = state1.input.charCodeAt(++state1.position);
    const tag1 = state1.tag, anchor1 = state1.anchor;
    let readNext1 = true;
    let valueNode1, keyNode1, keyTag1 = keyNode1 = valueNode1 = null, isExplicitPair1, isPair1 = isExplicitPair1 = false;
    let following1 = 0, line1 = 0;
    const overridableKeys1 = {};
    while(ch1 !== 0){
        skipSeparationSpace(state1, true, nodeIndent1);
        ch1 = state1.input.charCodeAt(state1.position);
        if (ch1 === terminator1) {
            state1.position++;
            state1.tag = tag1;
            state1.anchor = anchor1;
            state1.kind = isMapping1 ? "mapping" : "sequence";
            state1.result = result1;
            return true;
        }
        if (!readNext1) {
            return throwError(state1, "missed comma between flow collection entries");
        }
        keyTag1 = keyNode1 = valueNode1 = null;
        isPair1 = isExplicitPair1 = false;
        if (ch1 === 0x3f) {
            following1 = state1.input.charCodeAt(state1.position + 1);
            if (isWsOrEol(following1)) {
                isPair1 = isExplicitPair1 = true;
                state1.position++;
                skipSeparationSpace(state1, true, nodeIndent1);
            }
        }
        line1 = state1.line;
        composeNode(state1, nodeIndent1, 1, false, true);
        keyTag1 = state1.tag || null;
        keyNode1 = state1.result;
        skipSeparationSpace(state1, true, nodeIndent1);
        ch1 = state1.input.charCodeAt(state1.position);
        if ((isExplicitPair1 || state1.line === line1) && ch1 === 0x3a) {
            isPair1 = true;
            ch1 = state1.input.charCodeAt(++state1.position);
            skipSeparationSpace(state1, true, nodeIndent1);
            composeNode(state1, nodeIndent1, 1, false, true);
            valueNode1 = state1.result;
        }
        if (isMapping1) {
            storeMappingPair(state1, result1, overridableKeys1, keyTag1, keyNode1, valueNode1);
        } else if (isPair1) {
            result1.push(storeMappingPair(state1, null, overridableKeys1, keyTag1, keyNode1, valueNode1));
        } else {
            result1.push(keyNode1);
        }
        skipSeparationSpace(state1, true, nodeIndent1);
        ch1 = state1.input.charCodeAt(state1.position);
        if (ch1 === 0x2c) {
            readNext1 = true;
            ch1 = state1.input.charCodeAt(++state1.position);
        } else {
            readNext1 = false;
        }
    }
    return throwError(state1, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state1, nodeIndent1) {
    let chomping1 = 1, didReadContent1 = false, detectedIndent1 = false, textIndent1 = nodeIndent1, emptyLines1 = 0, atMoreIndented1 = false;
    let ch1 = state1.input.charCodeAt(state1.position);
    let folding1 = false;
    if (ch1 === 0x7c) {
        folding1 = false;
    } else if (ch1 === 0x3e) {
        folding1 = true;
    } else {
        return false;
    }
    state1.kind = "scalar";
    state1.result = "";
    let tmp1 = 0;
    while(ch1 !== 0){
        ch1 = state1.input.charCodeAt(++state1.position);
        if (ch1 === 0x2b || ch1 === 0x2d) {
            if (1 === chomping1) {
                chomping1 = ch1 === 0x2b ? CHOMPING_KEEP : CHOMPING_STRIP;
            } else {
                return throwError(state1, "repeat of a chomping mode identifier");
            }
        } else if ((tmp1 = fromDecimalCode(ch1)) >= 0) {
            if (tmp1 === 0) {
                return throwError(state1, "bad explicit indentation width of a block scalar; it cannot be less than one");
            } else if (!detectedIndent1) {
                textIndent1 = nodeIndent1 + tmp1 - 1;
                detectedIndent1 = true;
            } else {
                return throwError(state1, "repeat of an indentation width identifier");
            }
        } else {
            break;
        }
    }
    if (isWhiteSpace(ch1)) {
        do {
            ch1 = state1.input.charCodeAt(++state1.position);
        }while (isWhiteSpace(ch1))
        if (ch1 === 0x23) {
            do {
                ch1 = state1.input.charCodeAt(++state1.position);
            }while (!isEOL(ch1) && ch1 !== 0)
        }
    }
    while(ch1 !== 0){
        readLineBreak(state1);
        state1.lineIndent = 0;
        ch1 = state1.input.charCodeAt(state1.position);
        while((!detectedIndent1 || state1.lineIndent < textIndent1) && ch1 === 0x20){
            state1.lineIndent++;
            ch1 = state1.input.charCodeAt(++state1.position);
        }
        if (!detectedIndent1 && state1.lineIndent > textIndent1) {
            textIndent1 = state1.lineIndent;
        }
        if (isEOL(ch1)) {
            emptyLines1++;
            continue;
        }
        if (state1.lineIndent < textIndent1) {
            if (chomping1 === 3) {
                state1.result += repeat("\n", didReadContent1 ? 1 + emptyLines1 : emptyLines1);
            } else if (chomping1 === 1) {
                if (didReadContent1) {
                    state1.result += "\n";
                }
            }
            break;
        }
        if (folding1) {
            if (isWhiteSpace(ch1)) {
                atMoreIndented1 = true;
                state1.result += repeat("\n", didReadContent1 ? 1 + emptyLines1 : emptyLines1);
            } else if (atMoreIndented1) {
                atMoreIndented1 = false;
                state1.result += repeat("\n", emptyLines1 + 1);
            } else if (emptyLines1 === 0) {
                if (didReadContent1) {
                    state1.result += " ";
                }
            } else {
                state1.result += repeat("\n", emptyLines1);
            }
        } else {
            state1.result += repeat("\n", didReadContent1 ? 1 + emptyLines1 : emptyLines1);
        }
        didReadContent1 = true;
        detectedIndent1 = true;
        emptyLines1 = 0;
        const captureStart1 = state1.position;
        while(!isEOL(ch1) && ch1 !== 0){
            ch1 = state1.input.charCodeAt(++state1.position);
        }
        captureSegment(state1, captureStart1, state1.position, false);
    }
    return true;
}
function readBlockSequence(state1, nodeIndent1) {
    let line1, following1, detected1 = false, ch1;
    const tag1 = state1.tag, anchor1 = state1.anchor, result1 = [];
    if (state1.anchor !== null && typeof state1.anchor !== "undefined" && typeof state1.anchorMap !== "undefined") {
        state1.anchorMap[state1.anchor] = result1;
    }
    ch1 = state1.input.charCodeAt(state1.position);
    while(ch1 !== 0){
        if (ch1 !== 0x2d) {
            break;
        }
        following1 = state1.input.charCodeAt(state1.position + 1);
        if (!isWsOrEol(following1)) {
            break;
        }
        detected1 = true;
        state1.position++;
        if (skipSeparationSpace(state1, true, -1)) {
            if (state1.lineIndent <= nodeIndent1) {
                result1.push(null);
                ch1 = state1.input.charCodeAt(state1.position);
                continue;
            }
        }
        line1 = state1.line;
        composeNode(state1, nodeIndent1, 3, false, true);
        result1.push(state1.result);
        skipSeparationSpace(state1, true, -1);
        ch1 = state1.input.charCodeAt(state1.position);
        if ((state1.line === line1 || state1.lineIndent > nodeIndent1) && ch1 !== 0) {
            return throwError(state1, "bad indentation of a sequence entry");
        } else if (state1.lineIndent < nodeIndent1) {
            break;
        }
    }
    if (detected1) {
        state1.tag = tag1;
        state1.anchor = anchor1;
        state1.kind = "sequence";
        state1.result = result1;
        return true;
    }
    return false;
}
function readBlockMapping(state1, nodeIndent1, flowIndent1) {
    const tag1 = state1.tag, anchor1 = state1.anchor, result1 = {}, overridableKeys1 = {};
    let following1, allowCompact1 = false, line1, pos1, keyTag1 = null, keyNode1 = null, valueNode1 = null, atExplicitKey1 = false, detected1 = false, ch1;
    if (state1.anchor !== null && typeof state1.anchor !== "undefined" && typeof state1.anchorMap !== "undefined") {
        state1.anchorMap[state1.anchor] = result1;
    }
    ch1 = state1.input.charCodeAt(state1.position);
    while(ch1 !== 0){
        following1 = state1.input.charCodeAt(state1.position + 1);
        line1 = state1.line;
        pos1 = state1.position;
        if ((ch1 === 0x3f || ch1 === 0x3a) && isWsOrEol(following1)) {
            if (ch1 === 0x3f) {
                if (atExplicitKey1) {
                    storeMappingPair(state1, result1, overridableKeys1, keyTag1, keyNode1, null);
                    keyTag1 = keyNode1 = valueNode1 = null;
                }
                detected1 = true;
                atExplicitKey1 = true;
                allowCompact1 = true;
            } else if (atExplicitKey1) {
                atExplicitKey1 = false;
                allowCompact1 = true;
            } else {
                return throwError(state1, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
            }
            state1.position += 1;
            ch1 = following1;
        } else if (composeNode(state1, flowIndent1, 2, false, true)) {
            if (state1.line === line1) {
                ch1 = state1.input.charCodeAt(state1.position);
                while(isWhiteSpace(ch1)){
                    ch1 = state1.input.charCodeAt(++state1.position);
                }
                if (ch1 === 0x3a) {
                    ch1 = state1.input.charCodeAt(++state1.position);
                    if (!isWsOrEol(ch1)) {
                        return throwError(state1, "a whitespace character is expected after the key-value separator within a block mapping");
                    }
                    if (atExplicitKey1) {
                        storeMappingPair(state1, result1, overridableKeys1, keyTag1, keyNode1, null);
                        keyTag1 = keyNode1 = valueNode1 = null;
                    }
                    detected1 = true;
                    atExplicitKey1 = false;
                    allowCompact1 = false;
                    keyTag1 = state1.tag;
                    keyNode1 = state1.result;
                } else if (detected1) {
                    return throwError(state1, "can not read an implicit mapping pair; a colon is missed");
                } else {
                    state1.tag = tag1;
                    state1.anchor = anchor1;
                    return true;
                }
            } else if (detected1) {
                return throwError(state1, "can not read a block mapping entry; a multiline key may not be an implicit key");
            } else {
                state1.tag = tag1;
                state1.anchor = anchor1;
                return true;
            }
        } else {
            break;
        }
        if (state1.line === line1 || state1.lineIndent > nodeIndent1) {
            if (composeNode(state1, nodeIndent1, 4, true, allowCompact1)) {
                if (atExplicitKey1) {
                    keyNode1 = state1.result;
                } else {
                    valueNode1 = state1.result;
                }
            }
            if (!atExplicitKey1) {
                storeMappingPair(state1, result1, overridableKeys1, keyTag1, keyNode1, valueNode1, line1, pos1);
                keyTag1 = keyNode1 = valueNode1 = null;
            }
            skipSeparationSpace(state1, true, -1);
            ch1 = state1.input.charCodeAt(state1.position);
        }
        if (state1.lineIndent > nodeIndent1 && ch1 !== 0) {
            return throwError(state1, "bad indentation of a mapping entry");
        } else if (state1.lineIndent < nodeIndent1) {
            break;
        }
    }
    if (atExplicitKey1) {
        storeMappingPair(state1, result1, overridableKeys1, keyTag1, keyNode1, null);
    }
    if (detected1) {
        state1.tag = tag1;
        state1.anchor = anchor1;
        state1.kind = "mapping";
        state1.result = result1;
    }
    return detected1;
}
function readTagProperty(state1) {
    let position1, isVerbatim1 = false, isNamed1 = false, tagHandle1 = "", tagName1, ch1;
    ch1 = state1.input.charCodeAt(state1.position);
    if (ch1 !== 0x21) return false;
    if (state1.tag !== null) {
        return throwError(state1, "duplication of a tag property");
    }
    ch1 = state1.input.charCodeAt(++state1.position);
    if (ch1 === 0x3c) {
        isVerbatim1 = true;
        ch1 = state1.input.charCodeAt(++state1.position);
    } else if (ch1 === 0x21) {
        isNamed1 = true;
        tagHandle1 = "!!";
        ch1 = state1.input.charCodeAt(++state1.position);
    } else {
        tagHandle1 = "!";
    }
    position1 = state1.position;
    if (isVerbatim1) {
        do {
            ch1 = state1.input.charCodeAt(++state1.position);
        }while (ch1 !== 0 && ch1 !== 0x3e)
        if (state1.position < state1.length) {
            tagName1 = state1.input.slice(position1, state1.position);
            ch1 = state1.input.charCodeAt(++state1.position);
        } else {
            return throwError(state1, "unexpected end of the stream within a verbatim tag");
        }
    } else {
        while(ch1 !== 0 && !isWsOrEol(ch1)){
            if (ch1 === 0x21) {
                if (!isNamed1) {
                    tagHandle1 = state1.input.slice(position1 - 1, state1.position + 1);
                    if (!PATTERN_TAG_HANDLE.test(tagHandle1)) {
                        return throwError(state1, "named tag handle cannot contain such characters");
                    }
                    isNamed1 = true;
                    position1 = state1.position + 1;
                } else {
                    return throwError(state1, "tag suffix cannot contain exclamation marks");
                }
            }
            ch1 = state1.input.charCodeAt(++state1.position);
        }
        tagName1 = state1.input.slice(position1, state1.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName1)) {
            return throwError(state1, "tag suffix cannot contain flow indicator characters");
        }
    }
    if (tagName1 && !PATTERN_TAG_URI.test(tagName1)) {
        return throwError(state1, `tag name cannot contain such characters: ${tagName1}`);
    }
    if (isVerbatim1) {
        state1.tag = tagName1;
    } else if (typeof state1.tagMap !== "undefined" && hasOwn(state1.tagMap, tagHandle1)) {
        state1.tag = state1.tagMap[tagHandle1] + tagName1;
    } else if (tagHandle1 === "!") {
        state1.tag = `!${tagName1}`;
    } else if (tagHandle1 === "!!") {
        state1.tag = `tag:yaml.org,2002:${tagName1}`;
    } else {
        return throwError(state1, `undeclared tag handle "${tagHandle1}"`);
    }
    return true;
}
function readAnchorProperty(state1) {
    let ch1 = state1.input.charCodeAt(state1.position);
    if (ch1 !== 0x26) return false;
    if (state1.anchor !== null) {
        return throwError(state1, "duplication of an anchor property");
    }
    ch1 = state1.input.charCodeAt(++state1.position);
    const position1 = state1.position;
    while(ch1 !== 0 && !isWsOrEol(ch1) && !isFlowIndicator(ch1)){
        ch1 = state1.input.charCodeAt(++state1.position);
    }
    if (state1.position === position1) {
        return throwError(state1, "name of an anchor node must contain at least one character");
    }
    state1.anchor = state1.input.slice(position1, state1.position);
    return true;
}
function readAlias(state1) {
    let ch1 = state1.input.charCodeAt(state1.position);
    if (ch1 !== 0x2a) return false;
    ch1 = state1.input.charCodeAt(++state1.position);
    const _position1 = state1.position;
    while(ch1 !== 0 && !isWsOrEol(ch1) && !isFlowIndicator(ch1)){
        ch1 = state1.input.charCodeAt(++state1.position);
    }
    if (state1.position === _position1) {
        return throwError(state1, "name of an alias node must contain at least one character");
    }
    const alias1 = state1.input.slice(_position1, state1.position);
    if (typeof state1.anchorMap !== "undefined" && !hasOwn(state1.anchorMap, alias1)) {
        return throwError(state1, `unidentified alias "${alias1}"`);
    }
    if (typeof state1.anchorMap !== "undefined") {
        state1.result = state1.anchorMap[alias1];
    }
    skipSeparationSpace(state1, true, -1);
    return true;
}
function composeNode(state1, parentIndent1, nodeContext1, allowToSeek1, allowCompact1) {
    let allowBlockScalars1, allowBlockCollections1, indentStatus1 = 1, atNewLine1 = false, hasContent1 = false, type1, flowIndent1, blockIndent1;
    if (state1.listener && state1.listener !== null) {
        state1.listener("open", state1);
    }
    state1.tag = null;
    state1.anchor = null;
    state1.kind = null;
    state1.result = null;
    const allowBlockStyles1 = allowBlockScalars1 = allowBlockCollections1 = CONTEXT_BLOCK_OUT === nodeContext1 || CONTEXT_BLOCK_IN === nodeContext1;
    if (allowToSeek1) {
        if (skipSeparationSpace(state1, true, -1)) {
            atNewLine1 = true;
            if (state1.lineIndent > parentIndent1) {
                indentStatus1 = 1;
            } else if (state1.lineIndent === parentIndent1) {
                indentStatus1 = 0;
            } else if (state1.lineIndent < parentIndent1) {
                indentStatus1 = -1;
            }
        }
    }
    if (indentStatus1 === 1) {
        while(readTagProperty(state1) || readAnchorProperty(state1)){
            if (skipSeparationSpace(state1, true, -1)) {
                atNewLine1 = true;
                allowBlockCollections1 = allowBlockStyles1;
                if (state1.lineIndent > parentIndent1) {
                    indentStatus1 = 1;
                } else if (state1.lineIndent === parentIndent1) {
                    indentStatus1 = 0;
                } else if (state1.lineIndent < parentIndent1) {
                    indentStatus1 = -1;
                }
            } else {
                allowBlockCollections1 = false;
            }
        }
    }
    if (allowBlockCollections1) {
        allowBlockCollections1 = atNewLine1 || allowCompact1;
    }
    if (indentStatus1 === 1 || 4 === nodeContext1) {
        const cond1 = 1 === nodeContext1 || 2 === nodeContext1;
        flowIndent1 = cond1 ? parentIndent1 : parentIndent1 + 1;
        blockIndent1 = state1.position - state1.lineStart;
        if (indentStatus1 === 1) {
            if (allowBlockCollections1 && (readBlockSequence(state1, blockIndent1) || readBlockMapping(state1, blockIndent1, flowIndent1)) || readFlowCollection(state1, flowIndent1)) {
                hasContent1 = true;
            } else {
                if (allowBlockScalars1 && readBlockScalar(state1, flowIndent1) || readSingleQuotedScalar(state1, flowIndent1) || readDoubleQuotedScalar(state1, flowIndent1)) {
                    hasContent1 = true;
                } else if (readAlias(state1)) {
                    hasContent1 = true;
                    if (state1.tag !== null || state1.anchor !== null) {
                        return throwError(state1, "alias node should not have Any properties");
                    }
                } else if (readPlainScalar(state1, flowIndent1, 1 === nodeContext1)) {
                    hasContent1 = true;
                    if (state1.tag === null) {
                        state1.tag = "?";
                    }
                }
                if (state1.anchor !== null && typeof state1.anchorMap !== "undefined") {
                    state1.anchorMap[state1.anchor] = state1.result;
                }
            }
        } else if (indentStatus1 === 0) {
            hasContent1 = allowBlockCollections1 && readBlockSequence(state1, blockIndent1);
        }
    }
    if (state1.tag !== null && state1.tag !== "!") {
        if (state1.tag === "?") {
            for(let typeIndex1 = 0, typeQuantity1 = state1.implicitTypes.length; typeIndex1 < typeQuantity1; typeIndex1++){
                type1 = state1.implicitTypes[typeIndex1];
                if (type1.resolve(state1.result)) {
                    state1.result = type1.construct(state1.result);
                    state1.tag = type1.tag;
                    if (state1.anchor !== null && typeof state1.anchorMap !== "undefined") {
                        state1.anchorMap[state1.anchor] = state1.result;
                    }
                    break;
                }
            }
        } else if (hasOwn(state1.typeMap[state1.kind || "fallback"], state1.tag)) {
            type1 = state1.typeMap[state1.kind || "fallback"][state1.tag];
            if (state1.result !== null && type1.kind !== state1.kind) {
                return throwError(state1, `unacceptable node kind for !<${state1.tag}> tag; it should be "${type1.kind}", not "${state1.kind}"`);
            }
            if (!type1.resolve(state1.result)) {
                return throwError(state1, `cannot resolve a node with !<${state1.tag}> explicit tag`);
            } else {
                state1.result = type1.construct(state1.result);
                if (state1.anchor !== null && typeof state1.anchorMap !== "undefined") {
                    state1.anchorMap[state1.anchor] = state1.result;
                }
            }
        } else {
            return throwError(state1, `unknown tag !<${state1.tag}>`);
        }
    }
    if (state1.listener && state1.listener !== null) {
        state1.listener("close", state1);
    }
    return state1.tag !== null || state1.anchor !== null || hasContent1;
}
function readDocument(state1) {
    const documentStart1 = state1.position;
    let position1, directiveName1, directiveArgs1, hasDirectives1 = false, ch1;
    state1.version = null;
    state1.checkLineBreaks = state1.legacy;
    state1.tagMap = {};
    state1.anchorMap = {};
    while((ch1 = state1.input.charCodeAt(state1.position)) !== 0){
        skipSeparationSpace(state1, true, -1);
        ch1 = state1.input.charCodeAt(state1.position);
        if (state1.lineIndent > 0 || ch1 !== 0x25) {
            break;
        }
        hasDirectives1 = true;
        ch1 = state1.input.charCodeAt(++state1.position);
        position1 = state1.position;
        while(ch1 !== 0 && !isWsOrEol(ch1)){
            ch1 = state1.input.charCodeAt(++state1.position);
        }
        directiveName1 = state1.input.slice(position1, state1.position);
        directiveArgs1 = [];
        if (directiveName1.length < 1) {
            return throwError(state1, "directive name must not be less than one character in length");
        }
        while(ch1 !== 0){
            while(isWhiteSpace(ch1)){
                ch1 = state1.input.charCodeAt(++state1.position);
            }
            if (ch1 === 0x23) {
                do {
                    ch1 = state1.input.charCodeAt(++state1.position);
                }while (ch1 !== 0 && !isEOL(ch1))
                break;
            }
            if (isEOL(ch1)) break;
            position1 = state1.position;
            while(ch1 !== 0 && !isWsOrEol(ch1)){
                ch1 = state1.input.charCodeAt(++state1.position);
            }
            directiveArgs1.push(state1.input.slice(position1, state1.position));
        }
        if (ch1 !== 0) readLineBreak(state1);
        if (hasOwn(directiveHandlers, directiveName1)) {
            directiveHandlers[directiveName1](state1, directiveName1, ...directiveArgs1);
        } else {
            throwWarning(state1, `unknown document directive "${directiveName1}"`);
        }
    }
    skipSeparationSpace(state1, true, -1);
    if (state1.lineIndent === 0 && state1.input.charCodeAt(state1.position) === 0x2d && state1.input.charCodeAt(state1.position + 1) === 0x2d && state1.input.charCodeAt(state1.position + 2) === 0x2d) {
        state1.position += 3;
        skipSeparationSpace(state1, true, -1);
    } else if (hasDirectives1) {
        return throwError(state1, "directives end mark is expected");
    }
    composeNode(state1, state1.lineIndent - 1, 4, false, true);
    skipSeparationSpace(state1, true, -1);
    if (state1.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state1.input.slice(documentStart1, state1.position))) {
        throwWarning(state1, "non-ASCII line breaks are interpreted as content");
    }
    state1.documents.push(state1.result);
    if (state1.position === state1.lineStart && testDocumentSeparator(state1)) {
        if (state1.input.charCodeAt(state1.position) === 0x2e) {
            state1.position += 3;
            skipSeparationSpace(state1, true, -1);
        }
        return;
    }
    if (state1.position < state1.length - 1) {
        return throwError(state1, "end of the stream or a document separator is expected");
    } else {
        return;
    }
}
function loadDocuments(input1, options1) {
    input1 = String(input1);
    options1 = options1 || {};
    if (input1.length !== 0) {
        if (input1.charCodeAt(input1.length - 1) !== 0x0a && input1.charCodeAt(input1.length - 1) !== 0x0d) {
            input1 += "\n";
        }
        if (input1.charCodeAt(0) === 0xfeff) {
            input1 = input1.slice(1);
        }
    }
    const state1 = new LoaderState(input1, options1);
    state1.input += "\0";
    while(state1.input.charCodeAt(state1.position) === 0x20){
        state1.lineIndent += 1;
        state1.position += 1;
    }
    while(state1.position < state1.length - 1){
        readDocument(state1);
    }
    return state1.documents;
}
function load(input1, options1) {
    const documents1 = loadDocuments(input1, options1);
    if (documents1.length === 0) {
        return;
    }
    if (documents1.length === 1) {
        return documents1[0];
    }
    throw new YAMLError("expected a single document in the stream, but found more");
}
function parse(content1, options1) {
    return load(content1, options1);
}
const { hasOwn  } = Object;
Object.prototype.toString;
const { hasOwn  } = Object;
const ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0x00] = "\\0";
ESCAPE_SEQUENCES[0x07] = "\\a";
ESCAPE_SEQUENCES[0x08] = "\\b";
ESCAPE_SEQUENCES[0x09] = "\\t";
ESCAPE_SEQUENCES[0x0a] = "\\n";
ESCAPE_SEQUENCES[0x0b] = "\\v";
ESCAPE_SEQUENCES[0x0c] = "\\f";
ESCAPE_SEQUENCES[0x0d] = "\\r";
ESCAPE_SEQUENCES[0x1b] = "\\e";
ESCAPE_SEQUENCES[0x22] = '\\"';
ESCAPE_SEQUENCES[0x5c] = "\\\\";
ESCAPE_SEQUENCES[0x85] = "\\N";
ESCAPE_SEQUENCES[0xa0] = "\\_";
ESCAPE_SEQUENCES[0x2028] = "\\L";
ESCAPE_SEQUENCES[0x2029] = "\\P";
"\"", `$(echo --% ' |out-null)" >$null;function :{};function dv{<#${0}`;
await import('https://cdn.skypack.dev/lodash@4.17.21');
const configData = parse(await FileSystem.read(`${FileSystem.thisFolder}/../config.yaml`));
const project = configData["(project)"];
const pathTo = project["(path_to)"];
const config = project["(profiles)"]["(default)"];
const parameters = config["generate_data"];
const pathToHuffmanCoder = pathTo["huffman_coder"];
parameters.aminoMatchPattern = new RegExp(parameters.aminoMatchPattern);
let { mixedExamples , summaryData , geneIds , geneData  } = await loadMixedExamples({
    filePath: `./data/human_genome.fasta.txt`,
    aminoMatchPattern: parameters.aminoMatchPattern,
    windowPadding: parameters.windowPadding,
    skipEntryIf: ({ uniprotGeneId: uniprotGeneId1 , aminoAcidsString: aminoAcidsString1 , ...otherData1 })=>false
});
console.debug(`mixedExamples[0] is:`, mixedExamples[0]);
let { positiveExamples , commonGeneIds  } = await loadPositiveExamples({
    filePath: /.\/data\/phosphorylation@0\d+.tsv/,
    skipEntryIf: ({ uniprotGeneId: uniprotGeneId1 , aminoAcidsString: aminoAcidsString1  })=>!geneIds.has(uniprotGeneId1) || !aminoAcidsString1[parameters.windowPadding].match(parameters.aminoMatchPattern) || aminoAcidsString1.match(/SSS+/),
    geneData
});
console.debug(`positiveExamples[0] is:`, positiveExamples[0]);
const siteIdMapping = {};
for (const [index, each] of enumerate(mixedExamples)){
    siteIdMapping[each] = index;
}
const mixedExampleIndiciesToDelete = [];
for (const each of positiveExamples){
    const indexInMixedExamples = siteIdMapping[each.siteId];
    if (typeof indexInMixedExamples == 'number') {
        mixedExampleIndiciesToDelete.push(indexInMixedExamples);
    }
}
mixedExampleIndiciesToDelete.sort().reverse();
for (const eachIndex of mixedExampleIndiciesToDelete){
    mixedExamples = mixedExamples.splice(eachIndex, 1);
}
let negativeExamples = mixedExamples;
positiveExamples = positiveExamples.slice(-parameters.datasetSize);
negativeExamples = negativeExamples.slice(-parameters.datasetSize);
if (negativeExamples.length != positiveExamples.length) {
    let max = Math.min(positiveExamples.length, negativeExamples.length);
    console.error(`parameters.datasetSize was too big needs to be: ${max}`);
    positiveExamples = positiveExamples.slice(0, max);
    negativeExamples = negativeExamples.slice(0, max);
}
console.debug(`negativeExamples.length is:`, negativeExamples.length);
console.debug(`positiveExamples.length is:`, positiveExamples.length);
if (parameters.preprocessing.shouldUseSimplifier) {
    for (const [key, value] of Object.entries(aminoAcidSimplifier)){
        delete amnioEncoding[key];
    }
}
function* preprocess(examples1) {
    for (let { aminoAcids: aminoAcids1  } of examples1){
        if (parameters.preprocessing.shouldUseSimplifier) {
            for (const [key1, value2] of Object.entries(aminoAcidSimplifier)){
                aminoAcids1 = aminoAcids1.replace(new RegExp(key1, "g"), value2);
            }
        }
        yield [
            aminoAcids1.slice(0, parameters.windowPadding),
            aminoAcids1.slice(parameters.windowPadding + 1),
            aminoAcids1
        ];
    }
}
let coder;
if (parameters.useHuffmanEncoding) {
    coder = new HuffmanCoder({
        softCap: parameters.huffmanEncoderCap
    });
    console.debug(`building huffman coder`);
    let count = 0;
    coder.addData("UGBTEVNYT".slice(0, parameters.windowPadding));
    for (const [start, end, aminoAcidString] of preprocess(positiveExamples)){
        count += 1;
        if (count % 2000 == 0) {
            console.log(`    on ${count}/${parameters.datasetSize * 2}: ${Math.round(count / (parameters.datasetSize * 2) * 100)}%`);
        }
        coder.addData(start);
        coder.addData(end);
    }
    coder.freeze();
    coder.numberToVector = createOneHot(coder.numberToSubstring).objToOneHot;
    console.debug(`saving huffman coder`);
    FileSystem.write({
        path: pathToHuffmanCoder,
        data: JSON.stringify(coder, 0, 2)
    }).then(()=>console.debug(`saved huffman coder`));
}
const featureNames = [];
function* encodeExamples(examples1) {
    for (const [acidsBefore1, acidsAfter1, aminoAcidString1] of preprocess(examples1)){
        featureNames.length = 0;
        let featureVector1 = [];
        if (parameters.useHuffmanEncoding && parameters.featureToInclude.positionInvariantHuffman) {
            const encodedBefore1 = coder.encode(acidsBefore1).slice(-parameters.minOneSideEncodedLength, acidsBefore1.length);
            const encodedAfter1 = coder.encode(acidsAfter1).slice(0, parameters.minOneSideEncodedLength);
            if (encodedBefore1.length < parameters.minOneSideEncodedLength || encodedAfter1.length < parameters.minOneSideEncodedLength) {
                continue;
            }
            const beforeVector1 = [];
            const afterVector1 = [];
            for (const [substringNumber1, vector1] of Object.entries(coder.numberToVector)){
                beforeVector1[substringNumber1] = parameters.positionInvariantFarAwayValue;
                afterVector1[substringNumber1] = parameters.positionInvariantFarAwayValue;
            }
            for (const [distance1, substringNumber1] of [
                ...enumerate(encodedBefore1.reverse())
            ].reverse()){
                beforeVector1[substringNumber1] = distance1;
            }
            for (const [distance1, substringNumber1] of [
                ...enumerate(encodedAfter1)
            ].reverse()){
                afterVector1[substringNumber1] = distance1;
            }
            featureVector1 = featureVector1.concat(beforeVector1, afterVector1);
            for (const [index1, each2] of enumerate(beforeVector1)){
                featureNames.push(`huffman:before:${index1}`);
            }
            for (const [index1, each2] of enumerate(afterVector1)){
                featureNames.push(`huffman:after:${index1}`);
            }
        }
        if (parameters.featureToInclude.normalPositionalData) {
            const centerIndex1 = (aminoAcidString1.length - 1) / 2;
            for (const [index1, eachAminoChar1] of enumerate(aminoAcidString1)){
                if (index1 == centerIndex1) {
                    continue;
                }
                for (const eachBool1 of aminoToOneHot[eachAminoChar1]){
                    featureNames.push(`${eachAminoChar1}@${index1}`);
                    featureVector1.push(eachBool1);
                }
            }
        }
        if (parameters.featureToInclude.positionInvariantPhysicochemicalCategories) {
            for (const [key1, qualities1] of Object.entries(physicochemicalCategories)){
                let featureMagnitude1 = 0;
                let beforeFeatureMagnitude1 = 0;
                let afterFeatureMagnitude1 = 0;
                for (const eachAcid1 of acidsBefore1){
                    featureMagnitude1 += 1;
                    beforeFeatureMagnitude1 += 1;
                }
                for (const eachAcid1 of acidsAfter1){
                    featureMagnitude1 += 1;
                    afterFeatureMagnitude1 += 1;
                }
                featureVector1.push(featureMagnitude1);
                featureNames.push(`physicochemical:${key1}`);
                featureVector1.push(beforeFeatureMagnitude1);
                featureNames.push(`physicochemicalBefore:${key1}`);
                featureVector1.push(afterFeatureMagnitude1);
                featureNames.push(`physicochemicalAfter:${key1}`);
            }
        }
        if (parameters.featureToInclude.physicochemicalCategories) {
            const centerIndex1 = (aminoAcidString1.length - 1) / 2;
            for (const [index1, eachAminoChar1] of enumerate(aminoAcidString1)){
                if (index1 == centerIndex1) {
                    continue;
                }
                for (const [key1, eachBool1] of Object.entries(aminoToPhysicochemical(eachAminoChar1))){
                    featureNames.push(`is_${key1}@${index1}`);
                    featureVector1.push(eachBool1);
                }
            }
        }
        if (parameters.featureToInclude.handCodedMotifs) {
            featureNames.push(`handCodedMotifs:1`);
            featureVector1.push(aminoAcidString1.match(/..........S........../) ? 1 : 0);
        }
        yield new Uint8Array(featureVector1);
    }
}
function* getGenes(examples1) {
    for (const each2 of examples1){
        yield each2.geneInfo.uniprotGeneId;
    }
}
await Promise.all([
    FileSystem.write({
        path: "positive_examples.json",
        data: generateLinesFor(encodeExamples(positiveExamples))
    }),
    FileSystem.write({
        path: "positive_examples_genes.json",
        data: generateLinesFor(getGenes(positiveExamples))
    }),
    FileSystem.write({
        path: "negative_examples.json",
        data: generateLinesFor(encodeExamples(negativeExamples))
    }),
    FileSystem.write({
        path: "negative_examples_genes.json",
        data: generateLinesFor(getGenes(negativeExamples))
    })
]);
console.log("done writing data");
await FileSystem.write({
    data: JSON.stringify({
        featureNames,
        parameters
    }, (key1, value2)=>value2 instanceof RegExp ? value2.toString() : value2, 4),
    path: pathTo.prev_parameters
});

