#!/usr/bin/env sh
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// esbuild_serve:http-import:https://cdn.skypack.dev/-/lodash@v4.17.21-K6GEbP02mWFnLA45zAmi/dist=es2019,mode=imports/optimized/lodash.js
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path4, base) {
      return commonjsRequire(path4, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var commonjsGlobal, lodash, VERSION, _, add, after, ary, assign, assignIn, assignInWith, assignWith, at, attempt, before, bind, bindAll, bindKey, camelCase, capitalize, castArray, ceil, chain, chunk, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, compact, concat, cond, conforms, conformsTo, constant, countBy, create, curry, curryRight, debounce, deburr, lodash_default, defaultTo, defaults, defaultsDeep, defer, delay, difference, differenceBy, differenceWith, divide, drop, dropRight, dropRightWhile, dropWhile, each2, eachRight, endsWith, entries, entriesIn, eq, escape, escapeRegExp, every, extend, extendWith, fill, filter, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, floor, flow, flowRight, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, fromPairs, functions, functionsIn, get, groupBy, gt, gte, has, hasIn, head, identity, inRange, includes, indexOf, initial, intersection, intersectionBy, intersectionWith, invert, invertBy, invoke, invokeMap, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN2, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol, isTypedArray, isUndefined, isWeakMap, isWeakSet, iteratee, join, kebabCase, keyBy, keys, keysIn, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, map, mapKeys, mapValues, matches, matchesProperty, max, maxBy, mean, meanBy, memoize, merge, mergeWith, method, methodOf, min, minBy, mixin, multiply, negate, noConflict, noop, now, nth, nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, pad, padEnd, padStart, parseInt$1, partial, partialRight, partition, pick, pickBy, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt, random, range, rangeRight, rearg, reduce, reduceRight, reject, remove, repeat, replace, rest, result, reverse, round, runInContext, sample, sampleSize, set, setWith, shuffle, size, slice, snakeCase, some, sortBy, sortedIndex, sortedIndexBy, sortedIndexOf, sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, split, spread, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, tail, take, takeRight, takeRightWhile, takeWhile, tap, template, templateSettings, throttle, thru, times, toArray, toFinite, toInteger, toLength, toLower, toNumber, toPairs, toPairsIn, toPath, toPlainObject, toSafeInteger, toString2, toUpper, transform, trim, trimEnd, trimStart, truncate, unary, unescape, union, unionBy, unionWith, uniq, uniqBy, uniqWith, uniqueId, unset, unzip, unzipWith, update, updateWith, upperCase, upperFirst, values, valuesIn, without, words, wrap, xor, xorBy, xorWith, zip2, zipObject, zipObjectDeep, zipWith;
var init_lodash = __esm({
  "esbuild_serve:http-import:https://cdn.skypack.dev/-/lodash@v4.17.21-K6GEbP02mWFnLA45zAmi/dist=es2019,mode=imports/optimized/lodash.js"() {
    commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    lodash = createCommonjsModule(function(module, exports) {
      (function() {
        var undefined$1;
        var VERSION2 = "4.17.21";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          \u00C0: "A",
          \u00C1: "A",
          \u00C2: "A",
          \u00C3: "A",
          \u00C4: "A",
          \u00C5: "A",
          \u00E0: "a",
          \u00E1: "a",
          \u00E2: "a",
          \u00E3: "a",
          \u00E4: "a",
          \u00E5: "a",
          \u00C7: "C",
          \u00E7: "c",
          \u00D0: "D",
          \u00F0: "d",
          \u00C8: "E",
          \u00C9: "E",
          \u00CA: "E",
          \u00CB: "E",
          \u00E8: "e",
          \u00E9: "e",
          \u00EA: "e",
          \u00EB: "e",
          \u00CC: "I",
          \u00CD: "I",
          \u00CE: "I",
          \u00CF: "I",
          \u00EC: "i",
          \u00ED: "i",
          \u00EE: "i",
          \u00EF: "i",
          \u00D1: "N",
          \u00F1: "n",
          \u00D2: "O",
          \u00D3: "O",
          \u00D4: "O",
          \u00D5: "O",
          \u00D6: "O",
          \u00D8: "O",
          \u00F2: "o",
          \u00F3: "o",
          \u00F4: "o",
          \u00F5: "o",
          \u00F6: "o",
          \u00F8: "o",
          \u00D9: "U",
          \u00DA: "U",
          \u00DB: "U",
          \u00DC: "U",
          \u00F9: "u",
          \u00FA: "u",
          \u00FB: "u",
          \u00FC: "u",
          \u00DD: "Y",
          \u00FD: "y",
          \u00FF: "y",
          \u00C6: "Ae",
          \u00E6: "ae",
          \u00DE: "Th",
          \u00FE: "th",
          \u00DF: "ss",
          \u0100: "A",
          \u0102: "A",
          \u0104: "A",
          \u0101: "a",
          \u0103: "a",
          \u0105: "a",
          \u0106: "C",
          \u0108: "C",
          \u010A: "C",
          \u010C: "C",
          \u0107: "c",
          \u0109: "c",
          \u010B: "c",
          \u010D: "c",
          \u010E: "D",
          \u0110: "D",
          \u010F: "d",
          \u0111: "d",
          \u0112: "E",
          \u0114: "E",
          \u0116: "E",
          \u0118: "E",
          \u011A: "E",
          \u0113: "e",
          \u0115: "e",
          \u0117: "e",
          \u0119: "e",
          \u011B: "e",
          \u011C: "G",
          \u011E: "G",
          \u0120: "G",
          \u0122: "G",
          \u011D: "g",
          \u011F: "g",
          \u0121: "g",
          \u0123: "g",
          \u0124: "H",
          \u0126: "H",
          \u0125: "h",
          \u0127: "h",
          \u0128: "I",
          \u012A: "I",
          \u012C: "I",
          \u012E: "I",
          \u0130: "I",
          \u0129: "i",
          \u012B: "i",
          \u012D: "i",
          \u012F: "i",
          \u0131: "i",
          \u0134: "J",
          \u0135: "j",
          \u0136: "K",
          \u0137: "k",
          \u0138: "k",
          \u0139: "L",
          \u013B: "L",
          \u013D: "L",
          \u013F: "L",
          \u0141: "L",
          \u013A: "l",
          \u013C: "l",
          \u013E: "l",
          \u0140: "l",
          \u0142: "l",
          \u0143: "N",
          \u0145: "N",
          \u0147: "N",
          \u014A: "N",
          \u0144: "n",
          \u0146: "n",
          \u0148: "n",
          \u014B: "n",
          \u014C: "O",
          \u014E: "O",
          \u0150: "O",
          \u014D: "o",
          \u014F: "o",
          \u0151: "o",
          \u0154: "R",
          \u0156: "R",
          \u0158: "R",
          \u0155: "r",
          \u0157: "r",
          \u0159: "r",
          \u015A: "S",
          \u015C: "S",
          \u015E: "S",
          \u0160: "S",
          \u015B: "s",
          \u015D: "s",
          \u015F: "s",
          \u0161: "s",
          \u0162: "T",
          \u0164: "T",
          \u0166: "T",
          \u0163: "t",
          \u0165: "t",
          \u0167: "t",
          \u0168: "U",
          \u016A: "U",
          \u016C: "U",
          \u016E: "U",
          \u0170: "U",
          \u0172: "U",
          \u0169: "u",
          \u016B: "u",
          \u016D: "u",
          \u016F: "u",
          \u0171: "u",
          \u0173: "u",
          \u0174: "W",
          \u0175: "w",
          \u0176: "Y",
          \u0177: "y",
          \u0178: "Y",
          \u0179: "Z",
          \u017B: "Z",
          \u017D: "Z",
          \u017A: "z",
          \u017C: "z",
          \u017E: "z",
          \u0132: "IJ",
          \u0133: "ij",
          \u0152: "Oe",
          \u0153: "oe",
          \u0149: "'n",
          \u017F: "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = exports && !exports.nodeType && exports;
        var freeModule = freeExports && true && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        }();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee2, accumulator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee2(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee2) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee2(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee2) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee2(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (comparator(value, array[index])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee2) {
          var index = -1, length = array == null ? 0 : array.length, result2 = Array(length);
          while (++index < length) {
            result2[index] = iteratee2(array[index], index, array);
          }
          return result2;
        }
        function arrayPush(array, values2) {
          var index = -1, length = values2.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values2[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee2, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee2(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee2, accumulator, initAccum) {
          var length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee2(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string2) {
          return string2.split("");
        }
        function asciiWords(string2) {
          return string2.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result2;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result2 = key;
              return false;
            }
          });
          return result2;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (comparator(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee2) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee2) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined$1 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined$1 : object[key];
          };
        }
        function baseReduce(collection, iteratee2, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee2(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee2) {
          var result2, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee2(array[index]);
            if (current !== undefined$1) {
              result2 = result2 === undefined$1 ? current : result2 + current;
            }
          }
          return result2;
        }
        function baseTimes(n, iteratee2) {
          var index = -1, result2 = Array(n);
          while (++index < n) {
            result2[index] = iteratee2(index);
          }
          return result2;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string2) {
          return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache4, key) {
          return cache4.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result2 = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result2;
            }
          }
          return result2;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return object == null ? undefined$1 : object[key];
        }
        function hasUnicode(string2) {
          return reHasUnicode.test(string2);
        }
        function hasUnicodeWord(string2) {
          return reHasUnicodeWord.test(string2);
        }
        function iteratorToArray(iterator) {
          var data, result2 = [];
          while (!(data = iterator.next()).done) {
            result2.push(data.value);
          }
          return result2;
        }
        function mapToArray(map22) {
          var index = -1, result2 = Array(map22.size);
          map22.forEach(function(value, key) {
            result2[++index] = [key, value];
          });
          return result2;
        }
        function overArg(func, transform2) {
          return function(arg) {
            return func(transform2(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result2[resIndex++] = index;
            }
          }
          return result2;
        }
        function setToArray(set22) {
          var index = -1, result2 = Array(set22.size);
          set22.forEach(function(value) {
            result2[++index] = value;
          });
          return result2;
        }
        function setToPairs(set22) {
          var index = -1, result2 = Array(set22.size);
          set22.forEach(function(value) {
            result2[++index] = [value, value];
          });
          return result2;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return index;
        }
        function stringSize(string2) {
          return hasUnicode(string2) ? unicodeSize(string2) : asciiSize(string2);
        }
        function stringToArray(string2) {
          return hasUnicode(string2) ? unicodeToArray(string2) : asciiToArray(string2);
        }
        function trimmedEndIndex(string2) {
          var index = string2.length;
          while (index-- && reWhitespace.test(string2.charAt(index))) {
          }
          return index;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string2) {
          var result2 = reUnicode.lastIndex = 0;
          while (reUnicode.test(string2)) {
            ++result2;
          }
          return result2;
        }
        function unicodeToArray(string2) {
          return string2.match(reUnicode) || [];
        }
        function unicodeWords(string2) {
          return string2.match(reUnicodeWord) || [];
        }
        var runInContext2 = function runInContext3(context) {
          context = context == null ? root : _22.defaults(root.Object(), context, _22.pick(root, contextProps));
          var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
          var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object2);
          var oldDash = root._;
          var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          var Buffer3 = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer3 ? Buffer3.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
          var defineProperty = function() {
            try {
              var func = getNative(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e) {
            }
          }();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer3 ? Buffer3.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
          var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap2 && new WeakMap2();
          var realNames = {};
          var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
          var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
          function lodash2(value) {
            if (isObjectLike2(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = function() {
            function object() {
            }
            return function(proto) {
              if (!isObject22(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result3 = new object();
              object.prototype = undefined$1;
              return result3;
            };
          }();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined$1;
          }
          lodash2.templateSettings = {
            escape: reEscape,
            evaluate: reEvaluate,
            interpolate: reInterpolate,
            variable: "",
            imports: {
              _: lodash2
            }
          };
          lodash2.prototype = baseLodash.prototype;
          lodash2.prototype.constructor = lodash2;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result3 = new LazyWrapper(this.__wrapped__);
            result3.__actions__ = copyArray(this.__actions__);
            result3.__dir__ = this.__dir__;
            result3.__filtered__ = this.__filtered__;
            result3.__iteratees__ = copyArray(this.__iteratees__);
            result3.__takeCount__ = this.__takeCount__;
            result3.__views__ = copyArray(this.__views__);
            return result3;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result3 = new LazyWrapper(this);
              result3.__dir__ = -1;
              result3.__filtered__ = true;
            } else {
              result3 = this.clone();
              result3.__dir__ *= -1;
            }
            return result3;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result3 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee3 = data.iteratee, type = data.type, computed = iteratee3(value);
                  if (type == LAZY_MAP_FLAG) {
                    value = computed;
                  } else if (!computed) {
                    if (type == LAZY_FILTER_FLAG) {
                      continue outer;
                    } else {
                      break outer;
                    }
                  }
                }
                result3[resIndex++] = value;
              }
            return result3;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash(entries2) {
            var index = -1, length = entries2 == null ? 0 : entries2.length;
            this.clear();
            while (++index < length) {
              var entry = entries2[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result3 = this.has(key) && delete this.__data__[key];
            this.size -= result3 ? 1 : 0;
            return result3;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result3 = data[key];
              return result3 === HASH_UNDEFINED ? undefined$1 : result3;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
            return this;
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function ListCache(entries2) {
            var index = -1, length = entries2 == null ? 0 : entries2.length;
            this.clear();
            while (++index < length) {
              var entry = entries2[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            --this.size;
            return true;
          }
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined$1 : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries2) {
            var index = -1, length = entries2 == null ? 0 : entries2.length;
            this.clear();
            while (++index < length) {
              var entry = entries2[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              hash: new Hash(),
              map: new (Map2 || ListCache)(),
              string: new Hash()
            };
          }
          function mapCacheDelete(key) {
            var result3 = getMapData(this, key)["delete"](key);
            this.size -= result3 ? 1 : 0;
            return result3;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size3 = data.size;
            data.set(key, value);
            this.size += data.size == size3 ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values3) {
            var index = -1, length = values3 == null ? 0 : values3.length;
            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values3[index]);
            }
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries2) {
            var data = this.__data__ = new ListCache(entries2);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result3 = data["delete"](key);
            this.size = data.size;
            return result3;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs2 = data.__data__;
              if (!Map2 || pairs2.length < LARGE_ARRAY_SIZE - 1) {
                pairs2.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs2);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result3 = skipIndexes ? baseTimes(value.length, String2) : [], length = result3.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
                result3.push(key);
              }
            }
            return result3;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined$1;
          }
          function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined$1 && !eq2(object[key], value) || value === undefined$1 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq2(objValue, value)) || value === undefined$1 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq2(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          function baseAggregator(collection, setter, iteratee3, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee3(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys2(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn2(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) {
              defineProperty(object, key, {
                configurable: true,
                enumerable: true,
                value,
                writable: true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result3 = Array2(length), skip = object == null;
            while (++index < length) {
              result3[index] = skip ? undefined$1 : get22(object, paths[index]);
            }
            return result3;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined$1) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined$1) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result3, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result3 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result3 !== undefined$1) {
              return result3;
            }
            if (!isObject22(value)) {
              return value;
            }
            var isArr = isArray2(value);
            if (isArr) {
              result3 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result3);
              }
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer2(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result3 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result3, value)) : copySymbols(value, baseAssign(result3, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result3 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result3);
            if (isSet2(value)) {
              value.forEach(function(subValue) {
                result3.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap2(value)) {
              value.forEach(function(subValue, key2) {
                result3.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn2 : keys2;
            var props = isArr ? undefined$1 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result3, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result3;
          }
          function baseConforms(source) {
            var props = keys2(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined$1 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return setTimeout2(function() {
              func.apply(undefined$1, args);
            }, wait);
          }
          function baseDifference(array, values3, iteratee3, comparator) {
            var index = -1, includes3 = arrayIncludes, isCommon = true, length = array.length, result3 = [], valuesLength = values3.length;
            if (!length) {
              return result3;
            }
            if (iteratee3) {
              values3 = arrayMap(values3, baseUnary(iteratee3));
            }
            if (comparator) {
              includes3 = arrayIncludesWith;
              isCommon = false;
            } else if (values3.length >= LARGE_ARRAY_SIZE) {
              includes3 = cacheHas;
              isCommon = false;
              values3 = new SetCache(values3);
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee3 == null ? value : iteratee3(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values3[valuesIndex] === computed) {
                      continue outer;
                    }
                  }
                  result3.push(value);
                } else if (!includes3(values3, computed, comparator)) {
                  result3.push(value);
                }
              }
            return result3;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result3 = true;
            baseEach(collection, function(value, index, collection2) {
              result3 = !!predicate(value, index, collection2);
              return result3;
            });
            return result3;
          }
          function baseExtremum(array, iteratee3, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee3(value);
              if (current != null && (computed === undefined$1 ? current === current && !isSymbol2(current) : comparator(current, computed))) {
                var computed = current, result3 = value;
              }
            }
            return result3;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger2(start);
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end === undefined$1 || end > length ? length : toInteger2(end);
            if (end < 0) {
              end += length;
            }
            end = start > end ? 0 : toLength2(end);
            while (start < end) {
              array[start++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result3 = [];
            baseEach(collection, function(value, index, collection2) {
              if (predicate(value, index, collection2)) {
                result3.push(value);
              }
            });
            return result3;
          }
          function baseFlatten(array, depth, predicate, isStrict, result3) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result3 || (result3 = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result3);
                } else {
                  arrayPush(result3, value);
                }
              } else if (!isStrict) {
                result3[result3.length] = value;
              }
            }
            return result3;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee3) {
            return object && baseFor(object, iteratee3, keys2);
          }
          function baseForOwnRight(object, iteratee3) {
            return object && baseForRight(object, iteratee3, keys2);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction2(object[key]);
            });
          }
          function baseGet(object, path4) {
            path4 = castPath(path4, object);
            var index = 0, length = path4.length;
            while (object != null && index < length) {
              object = object[toKey(path4[index++])];
            }
            return index && index == length ? object : undefined$1;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result3 = keysFunc(object);
            return isArray2(object) ? result3 : arrayPush(result3, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined$1 ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee3, comparator) {
            var includes3 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength2 = Infinity, result3 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee3) {
                array = arrayMap(array, baseUnary(iteratee3));
              }
              maxLength2 = nativeMin(array.length, maxLength2);
              caches[othIndex] = !comparator && (iteratee3 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
              while (++index < length && result3.length < maxLength2) {
                var value = array[index], computed = iteratee3 ? iteratee3(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes3(result3, computed, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache4 = caches[othIndex];
                    if (!(cache4 ? cacheHas(cache4, computed) : includes3(arrays[othIndex], computed, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed);
                  }
                  result3.push(value);
                }
              }
            return result3;
          }
          function baseInverter(object, setter, iteratee3, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee3(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path4, args) {
            path4 = castPath(path4, object);
            object = parent(object, path4);
            var func = object == null ? object : object[toKey(last2(path4))];
            return func == null ? undefined$1 : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike2(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike2(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike2(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer2(object)) {
              if (!isBuffer2(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray2(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike2(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined$1 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result3 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result3 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result3)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject22(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike2(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike2(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity2;
            }
            if (typeof value == "object") {
              return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property2(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result3 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty.call(object, key) && key != "constructor") {
                result3.push(key);
              }
            }
            return result3;
          }
          function baseKeysIn(object) {
            if (!isObject22(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result3 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                result3.push(key);
              }
            }
            return result3;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee3) {
            var index = -1, result3 = isArrayLike2(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result3[++index] = iteratee3(value, key, collection2);
            });
            return result3;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path4, srcValue) {
            if (isKey(path4) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path4), srcValue);
            }
            return function(object) {
              var objValue = get22(object, path4);
              return objValue === undefined$1 && objValue === srcValue ? hasIn2(object, path4) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack());
              if (isObject22(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
                if (newValue === undefined$1) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn2);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
            var isCommon = newValue === undefined$1;
            if (isCommon) {
              var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray2(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray2(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject2(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject2(srcValue) || isArguments2(srcValue)) {
                newValue = objValue;
                if (isArguments2(objValue)) {
                  newValue = toPlainObject2(objValue);
                } else if (!isObject22(objValue) || isFunction2(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n) {
            var length = array.length;
            if (!length) {
              return;
            }
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined$1;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee3) {
                if (isArray2(iteratee3)) {
                  return function(value) {
                    return baseGet(value, iteratee3.length === 1 ? iteratee3[0] : iteratee3);
                  };
                }
                return iteratee3;
              });
            } else {
              iteratees = [identity2];
            }
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result3 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee3) {
                return iteratee3(value);
              });
              return { criteria, index: ++index, value };
            });
            return baseSortBy(result3, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path4) {
              return hasIn2(object, path4);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result3 = {};
            while (++index < length) {
              var path4 = paths[index], value = baseGet(object, path4);
              if (predicate(value, path4)) {
                baseSet(result3, castPath(path4, object), value);
              }
            }
            return result3;
          }
          function basePropertyDeep(path4) {
            return function(object) {
              return baseGet(object, path4);
            };
          }
          function basePullAll(array, values3, iteratee3, comparator) {
            var indexOf3 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values3.length, seen = array;
            if (array === values3) {
              values3 = copyArray(values3);
            }
            if (iteratee3) {
              seen = arrayMap(array, baseUnary(iteratee3));
            }
            while (++index < length) {
              var fromIndex = 0, value = values3[index], computed = iteratee3 ? iteratee3(value) : value;
              while ((fromIndex = indexOf3(seen, computed, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice.call(seen, fromIndex, 1);
                }
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index = indexes[length];
              if (length == lastIndex || index !== previous) {
                var previous = index;
                if (isIndex(index)) {
                  splice.call(array, index, 1);
                } else {
                  baseUnset(array, index);
                }
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result3 = Array2(length);
            while (length--) {
              result3[fromRight ? length : ++index] = start;
              start += step;
            }
            return result3;
          }
          function baseRepeat(string2, n) {
            var result3 = "";
            if (!string2 || n < 1 || n > MAX_SAFE_INTEGER) {
              return result3;
            }
            do {
              if (n % 2) {
                result3 += string2;
              }
              n = nativeFloor(n / 2);
              if (n) {
                string2 += string2;
              }
            } while (n);
            return result3;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity2), func + "");
          }
          function baseSample(collection) {
            return arraySample(values2(collection));
          }
          function baseSampleSize(collection, n) {
            var array = values2(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
          }
          function baseSet(object, path4, value, customizer) {
            if (!isObject22(object)) {
              return object;
            }
            path4 = castPath(path4, object);
            var index = -1, length = path4.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
              var key = toKey(path4[index]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
                if (newValue === undefined$1) {
                  newValue = isObject22(objValue) ? objValue : isIndex(path4[index + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity2 : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty ? identity2 : function(func, string2) {
            return defineProperty(func, "toString", {
              configurable: true,
              enumerable: false,
              value: constant2(string2),
              writable: true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values2(collection));
          }
          function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result3 = Array2(length);
            while (++index < length) {
              result3[index] = array[index + start];
            }
            return result3;
          }
          function baseSome(collection, predicate) {
            var result3;
            baseEach(collection, function(value, index, collection2) {
              result3 = predicate(value, index, collection2);
              return !result3;
            });
            return !!result3;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                if (computed !== null && !isSymbol2(computed) && (retHighest ? computed <= value : computed < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity2, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee3, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee3(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol2(value), valIsUndefined = value === undefined$1;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee3(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol2(computed);
              if (valIsNaN) {
                var setLow = retHighest || othIsReflexive;
              } else if (valIsUndefined) {
                setLow = othIsReflexive && (retHighest || othIsDefined);
              } else if (valIsNull) {
                setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
              } else if (valIsSymbol) {
                setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
              } else if (othIsNull || othIsSymbol) {
                setLow = false;
              } else {
                setLow = retHighest ? computed <= value : computed < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee3) {
            var index = -1, length = array.length, resIndex = 0, result3 = [];
            while (++index < length) {
              var value = array[index], computed = iteratee3 ? iteratee3(value) : value;
              if (!index || !eq2(computed, seen)) {
                var seen = computed;
                result3[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result3;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol2(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray2(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol2(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result3 = value + "";
            return result3 == "0" && 1 / value == -INFINITY ? "-0" : result3;
          }
          function baseUniq(array, iteratee3, comparator) {
            var index = -1, includes3 = arrayIncludes, length = array.length, isCommon = true, result3 = [], seen = result3;
            if (comparator) {
              isCommon = false;
              includes3 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set32 = iteratee3 ? null : createSet(array);
              if (set32) {
                return setToArray(set32);
              }
              isCommon = false;
              includes3 = cacheHas;
              seen = new SetCache();
            } else {
              seen = iteratee3 ? [] : result3;
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee3 ? iteratee3(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                      continue outer;
                    }
                  }
                  if (iteratee3) {
                    seen.push(computed);
                  }
                  result3.push(value);
                } else if (!includes3(seen, computed, comparator)) {
                  if (seen !== result3) {
                    seen.push(computed);
                  }
                  result3.push(value);
                }
              }
            return result3;
          }
          function baseUnset(object, path4) {
            path4 = castPath(path4, object);
            object = parent(object, path4);
            return object == null || delete object[toKey(last2(path4))];
          }
          function baseUpdate(object, path4, updater, customizer) {
            return baseSet(object, path4, updater(baseGet(object, path4)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result3 = value;
            if (result3 instanceof LazyWrapper) {
              result3 = result3.value();
            }
            return arrayReduce(actions, function(result4, action) {
              return action.func.apply(action.thisArg, arrayPush([result4], action.args));
            }, result3);
          }
          function baseXor(arrays, iteratee3, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result3 = Array2(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index) {
                  result3[index] = baseDifference(result3[index] || array, arrays[othIndex], iteratee3, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result3, 1), iteratee3, comparator);
          }
          function baseZipObject(props, values3, assignFunc) {
            var index = -1, length = props.length, valsLength = values3.length, result3 = {};
            while (++index < length) {
              var value = index < valsLength ? values3[index] : undefined$1;
              assignFunc(result3, props[index], value);
            }
            return result3;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject2(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity2;
          }
          function castPath(value, object) {
            if (isArray2(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString22(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined$1 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result3 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result3);
            return result3;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result3 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array2(result3).set(new Uint8Array2(arrayBuffer));
            return result3;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result3 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result3.lastIndex = regexp.lastIndex;
            return result3;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol2(value);
              var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol2(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result3 = compareAscending(objCriteria[index], othCriteria[index]);
              if (result3) {
                if (index >= ordersLength) {
                  return result3;
                }
                var order = orders[index];
                return result3 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result3 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result3[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result3[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result3[leftIndex++] = args[argsIndex++];
            }
            return result3;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result3 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result3[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
              result3[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result3[offset + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result3;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array2(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
              if (newValue === undefined$1) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee3) {
              var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee3, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined$1 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee3) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike2(collection)) {
                return eachFunc(collection, iteratee3);
              }
              var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee3(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee3, keysFunc) {
              var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee3(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string2) {
              string2 = toString22(string2);
              var strSymbols = hasUnicode(string2) ? stringToArray(string2) : undefined$1;
              var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string2.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string2) {
              return arrayReduce(words2(deburr2(string2).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result3 = Ctor.apply(thisBinding, args);
              return isObject22(result3) ? result3 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
              while (index--) {
                args[index] = arguments[index];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
              }
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike2(collection)) {
                var iteratee3 = getIteratee(predicate, 3);
                collection = keys2(collection);
                predicate = function(key) {
                  return iteratee3(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee3 ? collection[index] : index] : undefined$1;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index--) {
                var func = funcs[index];
                if (typeof func != "function") {
                  throw new TypeError2(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray2(value)) {
                  return wrapper.plant(value).value();
                }
                var index2 = 0, result3 = length ? funcs[index2].apply(this, args) : value;
                while (++index2 < length) {
                  result3 = funcs[index2].call(this, result3);
                }
                return result3;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary3, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length;
              while (index--) {
                args[index] = arguments[index];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              }
              if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
              }
              if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
              }
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary3, arity - length);
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary3 < length) {
                args.length = ary3;
              }
              if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
              }
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee3) {
              return baseInverter(object, setter, toIteratee(iteratee3), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result3;
              if (value === undefined$1 && other === undefined$1) {
                return defaultValue;
              }
              if (value !== undefined$1) {
                result3 = value;
              }
              if (other !== undefined$1) {
                if (result3 === undefined$1) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result3 = operator(value, other);
              }
              return result3;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee3) {
                  return apply(iteratee3, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined$1 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result3 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result3), 0, length).join("") : result3.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
                end = step = undefined$1;
              }
              start = toFinite2(start);
              if (end === undefined$1) {
                end = start;
                start = 0;
              } else {
                end = toFinite2(end);
              }
              step = step === undefined$1 ? start < end ? 1 : -1 : toFinite2(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber2(value);
                other = toNumber2(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary3, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary3,
              arity
            ];
            var result3 = wrapFunc.apply(undefined$1, newData);
            if (isLaziable(func)) {
              setData(result3, newData);
            }
            result3.placeholder = placeholder;
            return setWrapToString(result3, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math2[methodName];
            return function(number, precision) {
              number = toNumber2(number);
              precision = precision == null ? 0 : nativeMin(toInteger2(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString22(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString22(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop2 : function(values3) {
            return new Set2(values3);
          };
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag(object);
              if (tag == mapTag) {
                return mapToArray(object);
              }
              if (tag == setTag) {
                return setToPairs(object);
              }
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary3, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined$1;
            }
            ary3 = ary3 === undefined$1 ? ary3 : nativeMax(toInteger2(ary3), 0);
            arity = arity === undefined$1 ? arity : toInteger2(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined$1;
            }
            var data = isBindKey ? undefined$1 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary3,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result3 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result3 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result3 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result3 = createHybrid.apply(undefined$1, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result3, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined$1 || eq2(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject22(objValue) && isObject22(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject2(value) ? undefined$1 : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index = -1, result3 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined$1) {
                if (compared) {
                  continue;
                }
                result3 = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue2, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result3 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result3 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result3;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                  return false;
                }
                return true;
              case boolTag:
              case dateTag:
              case numberTag:
                return eq2(+object, +other);
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case regexpTag:
              case stringTag:
                return object == other + "";
              case mapTag:
                var convert = mapToArray;
              case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result3 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result3;
              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result3 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result3 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result3 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result3 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result3;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined$1, flatten2), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys2, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn2, getSymbolsIn);
          }
          var getData = !metaMap ? noop2 : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result3 = func.name + "", array = realNames[result3], length = hasOwnProperty.call(realNames, result3) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result3;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result3 = lodash2.iteratee || iteratee2;
            result3 = result3 === iteratee2 ? baseIteratee : result3;
            return arguments.length ? result3(arguments[0], arguments[1]) : result3;
          }
          function getMapData(map3, key) {
            var data = map3.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result3 = keys2(object), length = result3.length;
            while (length--) {
              var key = result3[length], value = object[key];
              result3[length] = [key, value, isStrictComparable(value)];
            }
            return result3;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined$1;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined$1;
              var unmasked = true;
            } catch (e) {
            }
            var result3 = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result3;
          }
          var getSymbols = !nativeGetSymbols ? stubArray2 : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols ? stubArray2 : function(object) {
            var result3 = [];
            while (object) {
              arrayPush(result3, getSymbols(object));
              object = getPrototype(object);
            }
            return result3;
          };
          var getTag = baseGetTag;
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
            getTag = function(value) {
              var result3 = baseGetTag(value), Ctor = result3 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result3;
            };
          }
          function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size3 = data.size;
              switch (data.type) {
                case "drop":
                  start += size3;
                  break;
                case "dropRight":
                  end -= size3;
                  break;
                case "take":
                  end = nativeMin(end, start + size3);
                  break;
                case "takeRight":
                  start = nativeMax(start, end - size3);
                  break;
              }
            }
            return { start, end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path4, hasFunc) {
            path4 = castPath(path4, object);
            var index = -1, length = path4.length, result3 = false;
            while (++index < length) {
              var key = toKey(path4[index]);
              if (!(result3 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result3 || ++index != length) {
              return result3;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength2(length) && isIndex(key, length) && (isArray2(object) || isArguments2(object));
          }
          function initCloneArray(array) {
            var length = array.length, result3 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
              result3.index = array.index;
              result3.input = array.input;
            }
            return result3;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
              case arrayBufferTag:
                return cloneArrayBuffer(object);
              case boolTag:
              case dateTag:
                return new Ctor(+object);
              case dataViewTag:
                return cloneDataView(object, isDeep);
              case float32Tag:
              case float64Tag:
              case int8Tag:
              case int16Tag:
              case int32Tag:
              case uint8Tag:
              case uint8ClampedTag:
              case uint16Tag:
              case uint32Tag:
                return cloneTypedArray(object, isDeep);
              case mapTag:
                return new Ctor();
              case numberTag:
              case stringTag:
                return new Ctor(object);
              case regexpTag:
                return cloneRegExp(object);
              case setTag:
                return new Ctor();
              case symbolTag:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray2(value) || isArguments2(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index, object) {
            if (!isObject22(object)) {
              return false;
            }
            var type = typeof index;
            if (type == "number" ? isArrayLike2(object) && isIndex(index, object.length) : type == "string" && index in object) {
              return eq2(object[index], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray2(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol2(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash2[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction2 : stubFalse2;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject22(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result3 = memoize2(func, function(key) {
              if (cache4.size === MAX_MEMOIZE_SIZE) {
                cache4.clear();
              }
              return key;
            });
            var cache4 = result3.cache;
            return result3;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result3 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result3.push(key);
              }
            }
            return result3;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start, transform3) {
            start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array2(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = transform3(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path4) {
            return path4.length < 2 ? object : baseGet(object, baseSlice(path4, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout2 = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count2 = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count2 >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count2 = 0;
              }
              return func.apply(undefined$1, arguments);
            };
          }
          function shuffleSelf(array, size3) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size3 = size3 === undefined$1 ? length : size3;
            while (++index < size3) {
              var rand = baseRandom(index, lastIndex), value = array[rand];
              array[rand] = array[index];
              array[index] = value;
            }
            array.length = size3;
            return array;
          }
          var stringToPath = memoizeCapped(function(string2) {
            var result3 = [];
            if (string2.charCodeAt(0) === 46) {
              result3.push("");
            }
            string2.replace(rePropName, function(match, number, quote, subString) {
              result3.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result3;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol2(value)) {
              return value;
            }
            var result3 = value + "";
            return result3 == "0" && 1 / value == -INFINITY ? "-0" : result3;
          }
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {
              }
              try {
                return func + "";
              } catch (e) {
              }
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result3 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result3.__actions__ = copyArray(wrapper.__actions__);
            result3.__index__ = wrapper.__index__;
            result3.__values__ = wrapper.__values__;
            return result3;
          }
          function chunk2(array, size3, guard) {
            if (guard ? isIterateeCall(array, size3, guard) : size3 === undefined$1) {
              size3 = 1;
            } else {
              size3 = nativeMax(toInteger2(size3), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size3 < 1) {
              return [];
            }
            var index = 0, resIndex = 0, result3 = Array2(nativeCeil(length / size3));
            while (index < length) {
              result3[resIndex++] = baseSlice(array, index, index += size3);
            }
            return result3;
          }
          function compact2(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result3 = [];
            while (++index < length) {
              var value = array[index];
              if (value) {
                result3[resIndex++] = value;
              }
            }
            return result3;
          }
          function concat22() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index = length;
            while (index--) {
              args[index - 1] = arguments[index];
            }
            return arrayPush(isArray2(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference2 = baseRest(function(array, values3) {
            return isArrayLikeObject2(array) ? baseDifference(array, baseFlatten(values3, 1, isArrayLikeObject2, true)) : [];
          });
          var differenceBy2 = baseRest(function(array, values3) {
            var iteratee3 = last2(values3);
            if (isArrayLikeObject2(iteratee3)) {
              iteratee3 = undefined$1;
            }
            return isArrayLikeObject2(array) ? baseDifference(array, baseFlatten(values3, 1, isArrayLikeObject2, true), getIteratee(iteratee3, 2)) : [];
          });
          var differenceWith2 = baseRest(function(array, values3) {
            var comparator = last2(values3);
            if (isArrayLikeObject2(comparator)) {
              comparator = undefined$1;
            }
            return isArrayLikeObject2(array) ? baseDifference(array, baseFlatten(values3, 1, isArrayLikeObject2, true), undefined$1, comparator) : [];
          });
          function drop2(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger2(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function dropRight2(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger2(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function dropRightWhile2(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile2(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill2(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
          function findIndex2(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger2(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
          function findLastIndex2(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined$1) {
              index = toInteger2(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten2(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep2(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth2(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined$1 ? 1 : toInteger2(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs2(pairs2) {
            var index = -1, length = pairs2 == null ? 0 : pairs2.length, result3 = {};
            while (++index < length) {
              var pair = pairs2[index];
              result3[pair[0]] = pair[1];
            }
            return result3;
          }
          function head2(array) {
            return array && array.length ? array[0] : undefined$1;
          }
          function indexOf2(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger2(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
          }
          function initial2(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection22 = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy2 = baseRest(function(arrays) {
            var iteratee3 = last2(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee3 === last2(mapped)) {
              iteratee3 = undefined$1;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee3, 2)) : [];
          });
          var intersectionWith2 = baseRest(function(arrays) {
            var comparator = last2(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
          });
          function join22(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last2(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined$1;
          }
          function lastIndexOf2(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length;
            if (fromIndex !== undefined$1) {
              index = toInteger2(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth2(array, n) {
            return array && array.length ? baseNth(array, toInteger2(n)) : undefined$1;
          }
          var pull2 = baseRest(pullAll2);
          function pullAll2(array, values3) {
            return array && array.length && values3 && values3.length ? basePullAll(array, values3) : array;
          }
          function pullAllBy2(array, values3, iteratee3) {
            return array && array.length && values3 && values3.length ? basePullAll(array, values3, getIteratee(iteratee3, 2)) : array;
          }
          function pullAllWith2(array, values3, comparator) {
            return array && array.length && values3 && values3.length ? basePullAll(array, values3, undefined$1, comparator) : array;
          }
          var pullAt2 = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result3 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result3;
          });
          function remove22(array, predicate) {
            var result3 = [];
            if (!(array && array.length)) {
              return result3;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result3.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result3;
          }
          function reverse2(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice2(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = start == null ? 0 : toInteger2(start);
              end = end === undefined$1 ? length : toInteger2(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex2(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy2(array, value, iteratee3) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee3, 2));
          }
          function sortedIndexOf2(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value);
              if (index < length && eq2(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedLastIndex2(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy2(array, value, iteratee3) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee3, 2), true);
          }
          function sortedLastIndexOf2(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value, true) - 1;
              if (eq2(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedUniq2(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy2(array, iteratee3) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee3, 2)) : [];
          }
          function tail2(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take2(array, n, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger2(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function takeRight2(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined$1 ? 1 : toInteger2(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function takeRightWhile2(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile2(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union2 = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject2, true));
          });
          var unionBy2 = baseRest(function(arrays) {
            var iteratee3 = last2(arrays);
            if (isArrayLikeObject2(iteratee3)) {
              iteratee3 = undefined$1;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject2, true), getIteratee(iteratee3, 2));
          });
          var unionWith2 = baseRest(function(arrays) {
            var comparator = last2(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject2, true), undefined$1, comparator);
          });
          function uniq2(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy2(array, iteratee3) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee3, 2)) : [];
          }
          function uniqWith2(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
          }
          function unzip2(array) {
            if (!(array && array.length)) {
              return [];
            }
            var length = 0;
            array = arrayFilter(array, function(group) {
              if (isArrayLikeObject2(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes(length, function(index) {
              return arrayMap(array, baseProperty(index));
            });
          }
          function unzipWith2(array, iteratee3) {
            if (!(array && array.length)) {
              return [];
            }
            var result3 = unzip2(array);
            if (iteratee3 == null) {
              return result3;
            }
            return arrayMap(result3, function(group) {
              return apply(iteratee3, undefined$1, group);
            });
          }
          var without2 = baseRest(function(array, values3) {
            return isArrayLikeObject2(array) ? baseDifference(array, values3) : [];
          });
          var xor2 = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject2));
          });
          var xorBy2 = baseRest(function(arrays) {
            var iteratee3 = last2(arrays);
            if (isArrayLikeObject2(iteratee3)) {
              iteratee3 = undefined$1;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject2), getIteratee(iteratee3, 2));
          });
          var xorWith2 = baseRest(function(arrays) {
            var comparator = last2(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined$1;
            return baseXor(arrayFilter(arrays, isArrayLikeObject2), undefined$1, comparator);
          });
          var zip22 = baseRest(unzip2);
          function zipObject2(props, values3) {
            return baseZipObject(props || [], values3 || [], assignValue);
          }
          function zipObjectDeep2(props, values3) {
            return baseZipObject(props || [], values3 || [], baseSet);
          }
          var zipWith2 = baseRest(function(arrays) {
            var length = arrays.length, iteratee3 = length > 1 ? arrays[length - 1] : undefined$1;
            iteratee3 = typeof iteratee3 == "function" ? (arrays.pop(), iteratee3) : undefined$1;
            return unzipWith2(arrays, iteratee3);
          });
          function chain2(value) {
            var result3 = lodash2(value);
            result3.__chain__ = true;
            return result3;
          }
          function tap2(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru2(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
              return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              func: thru2,
              args: [interceptor],
              thisArg: undefined$1
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined$1);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain2(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined$1) {
              this.__values__ = toArray2(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
            return { done, value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result3, parent2 = this;
            while (parent2 instanceof baseLodash) {
              var clone3 = wrapperClone(parent2);
              clone3.__index__ = 0;
              clone3.__values__ = undefined$1;
              if (result3) {
                previous.__wrapped__ = clone3;
              } else {
                result3 = clone3;
              }
              var previous = clone3;
              parent2 = parent2.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result3;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                func: thru2,
                args: [reverse2],
                thisArg: undefined$1
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse2);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy2 = createAggregator(function(result3, value, key) {
            if (hasOwnProperty.call(result3, key)) {
              ++result3[key];
            } else {
              baseAssignValue(result3, key, 1);
            }
          });
          function every2(collection, predicate, guard) {
            var func = isArray2(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined$1;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter2(collection, predicate) {
            var func = isArray2(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find2 = createFind(findIndex2);
          var findLast2 = createFind(findLastIndex2);
          function flatMap2(collection, iteratee3) {
            return baseFlatten(map22(collection, iteratee3), 1);
          }
          function flatMapDeep2(collection, iteratee3) {
            return baseFlatten(map22(collection, iteratee3), INFINITY);
          }
          function flatMapDepth2(collection, iteratee3, depth) {
            depth = depth === undefined$1 ? 1 : toInteger2(depth);
            return baseFlatten(map22(collection, iteratee3), depth);
          }
          function forEach2(collection, iteratee3) {
            var func = isArray2(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee3, 3));
          }
          function forEachRight2(collection, iteratee3) {
            var func = isArray2(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee3, 3));
          }
          var groupBy2 = createAggregator(function(result3, value, key) {
            if (hasOwnProperty.call(result3, key)) {
              result3[key].push(value);
            } else {
              baseAssignValue(result3, key, [value]);
            }
          });
          function includes2(collection, value, fromIndex, guard) {
            collection = isArrayLike2(collection) ? collection : values2(collection);
            fromIndex = fromIndex && !guard ? toInteger2(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString2(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap2 = baseRest(function(collection, path4, args) {
            var index = -1, isFunc = typeof path4 == "function", result3 = isArrayLike2(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result3[++index] = isFunc ? apply(path4, value, args) : baseInvoke(value, path4, args);
            });
            return result3;
          });
          var keyBy2 = createAggregator(function(result3, value, key) {
            baseAssignValue(result3, key, value);
          });
          function map22(collection, iteratee3) {
            var func = isArray2(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee3, 3));
          }
          function orderBy2(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray2(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined$1 : orders;
            if (!isArray2(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition2 = createAggregator(function(result3, value, key) {
            result3[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce2(collection, iteratee3, accumulator) {
            var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee3, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight2(collection, iteratee3, accumulator) {
            var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee3, 4), accumulator, initAccum, baseEachRight);
          }
          function reject2(collection, predicate) {
            var func = isArray2(collection) ? arrayFilter : baseFilter;
            return func(collection, negate2(getIteratee(predicate, 3)));
          }
          function sample2(collection) {
            var func = isArray2(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize2(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
              n = 1;
            } else {
              n = toInteger2(n);
            }
            var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
          }
          function shuffle2(collection) {
            var func = isArray2(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size2(collection) {
            if (collection == null) {
              return 0;
            }
            if (isArrayLike2(collection)) {
              return isString2(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
            return baseKeys(collection).length;
          }
          function some2(collection, predicate, guard) {
            var func = isArray2(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined$1;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy2 = baseRest(function(collection, iteratees) {
            if (collection == null) {
              return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
              iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
              iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now2 = ctxNow || function() {
            return root.Date.now();
          };
          function after2(n, func) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger2(n);
            return function() {
              if (--n < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary2(func, n, guard) {
            n = guard ? undefined$1 : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
          }
          function before2(n, func) {
            var result3;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger2(n);
            return function() {
              if (--n > 0) {
                result3 = func.apply(this, arguments);
              }
              if (n <= 1) {
                func = undefined$1;
              }
              return result3;
            };
          }
          var bind2 = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind2));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey2 = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey2));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry2(func, arity, guard) {
            arity = guard ? undefined$1 : arity;
            var result3 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
            result3.placeholder = curry2.placeholder;
            return result3;
          }
          function curryRight2(func, arity, guard) {
            arity = guard ? undefined$1 : arity;
            var result3 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
            result3.placeholder = curryRight2.placeholder;
            return result3;
          }
          function debounce2(func, wait, options) {
            var lastArgs, lastThis, maxWait, result3, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            wait = toNumber2(wait) || 0;
            if (isObject22(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber2(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined$1;
              lastInvokeTime = time;
              result3 = func.apply(thisArg, args);
              return result3;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout2(timerExpired, wait);
              return leading ? invokeFunc(time) : result3;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now2();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              timerId = setTimeout2(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined$1;
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined$1;
              return result3;
            }
            function cancel() {
              if (timerId !== undefined$1) {
                clearTimeout(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined$1;
            }
            function flush() {
              return timerId === undefined$1 ? result3 : trailingEdge(now2());
            }
            function debounced() {
              var time = now2(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined$1) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout(timerId);
                  timerId = setTimeout2(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined$1) {
                timerId = setTimeout2(timerExpired, wait);
              }
              return result3;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer2 = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay2 = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber2(wait) || 0, args);
          });
          function flip2(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize2(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache4 = memoized.cache;
              if (cache4.has(key)) {
                return cache4.get(key);
              }
              var result3 = func.apply(this, args);
              memoized.cache = cache4.set(key, result3) || cache4;
              return result3;
            };
            memoized.cache = new (memoize2.Cache || MapCache)();
            return memoized;
          }
          memoize2.Cache = MapCache;
          function negate2(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once2(func) {
            return before2(2, func);
          }
          var overArgs2 = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) {
                args[index] = transforms[index].call(this, args[index]);
              }
              return apply(func, this, args);
            });
          });
          var partial2 = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial2));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
          });
          var partialRight2 = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight2));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
          });
          var rearg2 = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
          });
          function rest2(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start === undefined$1 ? start : toInteger2(start);
            return baseRest(func, start);
          }
          function spread2(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger2(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              if (array) {
                arrayPush(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle2(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (isObject22(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce2(func, wait, {
              leading,
              maxWait: wait,
              trailing
            });
          }
          function unary2(func) {
            return ary2(func, 1);
          }
          function wrap2(value, wrapper) {
            return partial2(castFunction(wrapper), value);
          }
          function castArray2() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray2(value) ? value : [value];
          }
          function clone2(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith2(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep2(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith2(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo2(object, source) {
            return source == null || baseConformsTo(object, source, keys2(source));
          }
          function eq2(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt2 = createRelationalOperation(baseGt);
          var gte2 = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments2 = baseIsArguments(function() {
            return arguments;
          }()) ? baseIsArguments : function(value) {
            return isObjectLike2(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray2 = Array2.isArray;
          var isArrayBuffer2 = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike2(value) {
            return value != null && isLength2(value.length) && !isFunction2(value);
          }
          function isArrayLikeObject2(value) {
            return isObjectLike2(value) && isArrayLike2(value);
          }
          function isBoolean22(value) {
            return value === true || value === false || isObjectLike2(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer2 = nativeIsBuffer || stubFalse2;
          var isDate2 = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement2(value) {
            return isObjectLike2(value) && value.nodeType === 1 && !isPlainObject2(value);
          }
          function isEmpty2(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike2(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer2(value) || isTypedArray2(value) || isArguments2(value))) {
              return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
            if (isPrototype(value)) {
              return !baseKeys(value).length;
            }
            for (var key in value) {
              if (hasOwnProperty.call(value, key)) {
                return false;
              }
            }
            return true;
          }
          function isEqual2(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith2(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            var result3 = customizer ? customizer(value, other) : undefined$1;
            return result3 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result3;
          }
          function isError2(value) {
            if (!isObjectLike2(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject2(value);
          }
          function isFinite2(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction2(value) {
            if (!isObject22(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger22(value) {
            return typeof value == "number" && value == toInteger2(value);
          }
          function isLength2(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject22(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike2(value) {
            return value != null && typeof value == "object";
          }
          var isMap2 = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch2(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith2(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN22(value) {
            return isNumber2(value) && value != +value;
          }
          function isNative2(value) {
            if (isMaskable(value)) {
              throw new Error2(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
          }
          function isNull22(value) {
            return value === null;
          }
          function isNil2(value) {
            return value == null;
          }
          function isNumber2(value) {
            return typeof value == "number" || isObjectLike2(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject2(value) {
            if (!isObjectLike2(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp2 = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger2(value) {
            return isInteger22(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet2 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString2(value) {
            return typeof value == "string" || !isArray2(value) && isObjectLike2(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol2(value) {
            return typeof value == "symbol" || isObjectLike2(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined2(value) {
            return value === undefined$1;
          }
          function isWeakMap2(value) {
            return isObjectLike2(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet2(value) {
            return isObjectLike2(value) && baseGetTag(value) == weakSetTag;
          }
          var lt2 = createRelationalOperation(baseLt);
          var lte2 = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray2(value) {
            if (!value) {
              return [];
            }
            if (isArrayLike2(value)) {
              return isString2(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
              return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values2;
            return func(value);
          }
          function toFinite2(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber2(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger2(value) {
            var result3 = toFinite2(value), remainder = result3 % 1;
            return result3 === result3 ? remainder ? result3 - remainder : result3 : 0;
          }
          function toLength2(value) {
            return value ? baseClamp(toInteger2(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber2(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol2(value)) {
              return NAN;
            }
            if (isObject22(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject22(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary2 = reIsBinary.test(value);
            return isBinary2 || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary2 ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject2(value) {
            return copyObject(value, keysIn2(value));
          }
          function toSafeInteger2(value) {
            return value ? baseClamp(toInteger2(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
          }
          function toString22(value) {
            return value == null ? "" : baseToString(value);
          }
          var assign2 = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike2(source)) {
              copyObject(source, keys2(source), object);
              return;
            }
            for (var key in source) {
              if (hasOwnProperty.call(source, key)) {
                assignValue(object, key, source[key]);
              }
            }
          });
          var assignIn2 = createAssigner(function(object, source) {
            copyObject(source, keysIn2(source), object);
          });
          var assignInWith2 = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn2(source), object, customizer);
          });
          var assignWith2 = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys2(source), object, customizer);
          });
          var at2 = flatRest(baseAt);
          function create2(prototype, properties) {
            var result3 = baseCreate(prototype);
            return properties == null ? result3 : baseAssign(result3, properties);
          }
          var defaults2 = baseRest(function(object, sources) {
            object = Object2(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined$1;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              var props = keysIn2(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined$1 || eq2(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep2 = baseRest(function(args) {
            args.push(undefined$1, customDefaultsMerge);
            return apply(mergeWith2, undefined$1, args);
          });
          function findKey2(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey2(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn2(object, iteratee3) {
            return object == null ? object : baseFor(object, getIteratee(iteratee3, 3), keysIn2);
          }
          function forInRight2(object, iteratee3) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee3, 3), keysIn2);
          }
          function forOwn2(object, iteratee3) {
            return object && baseForOwn(object, getIteratee(iteratee3, 3));
          }
          function forOwnRight2(object, iteratee3) {
            return object && baseForOwnRight(object, getIteratee(iteratee3, 3));
          }
          function functions2(object) {
            return object == null ? [] : baseFunctions(object, keys2(object));
          }
          function functionsIn2(object) {
            return object == null ? [] : baseFunctions(object, keysIn2(object));
          }
          function get22(object, path4, defaultValue) {
            var result3 = object == null ? undefined$1 : baseGet(object, path4);
            return result3 === undefined$1 ? defaultValue : result3;
          }
          function has2(object, path4) {
            return object != null && hasPath(object, path4, baseHas);
          }
          function hasIn2(object, path4) {
            return object != null && hasPath(object, path4, baseHasIn);
          }
          var invert2 = createInverter(function(result3, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            result3[value] = key;
          }, constant2(identity2));
          var invertBy2 = createInverter(function(result3, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result3, value)) {
              result3[value].push(key);
            } else {
              result3[value] = [key];
            }
          }, getIteratee);
          var invoke2 = baseRest(baseInvoke);
          function keys2(object) {
            return isArrayLike2(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn2(object) {
            return isArrayLike2(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys2(object, iteratee3) {
            var result3 = {};
            iteratee3 = getIteratee(iteratee3, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result3, iteratee3(value, key, object2), value);
            });
            return result3;
          }
          function mapValues2(object, iteratee3) {
            var result3 = {};
            iteratee3 = getIteratee(iteratee3, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result3, key, iteratee3(value, key, object2));
            });
            return result3;
          }
          var merge22 = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith2 = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit2 = flatRest(function(object, paths) {
            var result3 = {};
            if (object == null) {
              return result3;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path4) {
              path4 = castPath(path4, object);
              isDeep || (isDeep = path4.length > 1);
              return path4;
            });
            copyObject(object, getAllKeysIn(object), result3);
            if (isDeep) {
              result3 = baseClone(result3, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result3, paths[length]);
            }
            return result3;
          });
          function omitBy2(object, predicate) {
            return pickBy2(object, negate2(getIteratee(predicate)));
          }
          var pick2 = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
          function pickBy2(object, predicate) {
            if (object == null) {
              return {};
            }
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path4) {
              return predicate(value, path4[0]);
            });
          }
          function result2(object, path4, defaultValue) {
            path4 = castPath(path4, object);
            var index = -1, length = path4.length;
            if (!length) {
              length = 1;
              object = undefined$1;
            }
            while (++index < length) {
              var value = object == null ? undefined$1 : object[toKey(path4[index])];
              if (value === undefined$1) {
                index = length;
                value = defaultValue;
              }
              object = isFunction2(value) ? value.call(object) : value;
            }
            return object;
          }
          function set22(object, path4, value) {
            return object == null ? object : baseSet(object, path4, value);
          }
          function setWith2(object, path4, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return object == null ? object : baseSet(object, path4, value, customizer);
          }
          var toPairs2 = createToPairs(keys2);
          var toPairsIn2 = createToPairs(keysIn2);
          function transform2(object, iteratee3, accumulator) {
            var isArr = isArray2(object), isArrLike = isArr || isBuffer2(object) || isTypedArray2(object);
            iteratee3 = getIteratee(iteratee3, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject22(object)) {
                accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
              return iteratee3(accumulator, value, index, object2);
            });
            return accumulator;
          }
          function unset2(object, path4) {
            return object == null ? true : baseUnset(object, path4);
          }
          function update2(object, path4, updater) {
            return object == null ? object : baseUpdate(object, path4, castFunction(updater));
          }
          function updateWith2(object, path4, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined$1;
            return object == null ? object : baseUpdate(object, path4, castFunction(updater), customizer);
          }
          function values2(object) {
            return object == null ? [] : baseValues(object, keys2(object));
          }
          function valuesIn2(object) {
            return object == null ? [] : baseValues(object, keysIn2(object));
          }
          function clamp2(number, lower, upper) {
            if (upper === undefined$1) {
              upper = lower;
              lower = undefined$1;
            }
            if (upper !== undefined$1) {
              upper = toNumber2(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined$1) {
              lower = toNumber2(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber2(number), lower, upper);
          }
          function inRange2(number, start, end) {
            start = toFinite2(start);
            if (end === undefined$1) {
              end = start;
              start = 0;
            } else {
              end = toFinite2(end);
            }
            number = toNumber2(number);
            return baseInRange(number, start, end);
          }
          function random2(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined$1;
            }
            if (floating === undefined$1) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined$1;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined$1;
              }
            }
            if (lower === undefined$1 && upper === undefined$1) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite2(lower);
              if (upper === undefined$1) {
                upper = lower;
                lower = 0;
              } else {
                upper = toFinite2(upper);
              }
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand = nativeRandom();
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase2 = createCompounder(function(result3, word, index) {
            word = word.toLowerCase();
            return result3 + (index ? capitalize22(word) : word);
          });
          function capitalize22(string2) {
            return upperFirst2(toString22(string2).toLowerCase());
          }
          function deburr2(string2) {
            string2 = toString22(string2);
            return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith2(string2, target, position) {
            string2 = toString22(string2);
            target = baseToString(target);
            var length = string2.length;
            position = position === undefined$1 ? length : baseClamp(toInteger2(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string2.slice(position, end) == target;
          }
          function escape2(string2) {
            string2 = toString22(string2);
            return string2 && reHasUnescapedHtml.test(string2) ? string2.replace(reUnescapedHtml, escapeHtmlChar) : string2;
          }
          function escapeRegExp2(string2) {
            string2 = toString22(string2);
            return string2 && reHasRegExpChar.test(string2) ? string2.replace(reRegExpChar, "\\$&") : string2;
          }
          var kebabCase2 = createCompounder(function(result3, word, index) {
            return result3 + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase2 = createCompounder(function(result3, word, index) {
            return result3 + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst2 = createCaseFirst("toLowerCase");
          function pad2(string2, length, chars) {
            string2 = toString22(string2);
            length = toInteger2(length);
            var strLength = length ? stringSize(string2) : 0;
            if (!length || strLength >= length) {
              return string2;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string2 + createPadding(nativeCeil(mid), chars);
          }
          function padEnd2(string2, length, chars) {
            string2 = toString22(string2);
            length = toInteger2(length);
            var strLength = length ? stringSize(string2) : 0;
            return length && strLength < length ? string2 + createPadding(length - strLength, chars) : string2;
          }
          function padStart2(string2, length, chars) {
            string2 = toString22(string2);
            length = toInteger2(length);
            var strLength = length ? stringSize(string2) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string2 : string2;
          }
          function parseInt2(string2, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString22(string2).replace(reTrimStart, ""), radix || 0);
          }
          function repeat22(string2, n, guard) {
            if (guard ? isIterateeCall(string2, n, guard) : n === undefined$1) {
              n = 1;
            } else {
              n = toInteger2(n);
            }
            return baseRepeat(toString22(string2), n);
          }
          function replace2() {
            var args = arguments, string2 = toString22(args[0]);
            return args.length < 3 ? string2 : string2.replace(args[1], args[2]);
          }
          var snakeCase2 = createCompounder(function(result3, word, index) {
            return result3 + (index ? "_" : "") + word.toLowerCase();
          });
          function split2(string2, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string2, separator, limit)) {
              separator = limit = undefined$1;
            }
            limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string2 = toString22(string2);
            if (string2 && (typeof separator == "string" || separator != null && !isRegExp2(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string2)) {
                return castSlice(stringToArray(string2), 0, limit);
              }
            }
            return string2.split(separator, limit);
          }
          var startCase2 = createCompounder(function(result3, word, index) {
            return result3 + (index ? " " : "") + upperFirst2(word);
          });
          function startsWith2(string2, target, position) {
            string2 = toString22(string2);
            position = position == null ? 0 : baseClamp(toInteger2(position), 0, string2.length);
            target = baseToString(target);
            return string2.slice(position, position + target.length) == target;
          }
          function template2(string2, options, guard) {
            var settings = lodash2.templateSettings;
            if (guard && isIterateeCall(string2, options, guard)) {
              options = undefined$1;
            }
            string2 = toString22(string2);
            options = assignInWith2({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith2({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys2(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string2.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string2.slice(index, offset).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              if (interpolateValue) {
                source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
              }
              index = offset + match.length;
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result3 = attempt2(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
            });
            result3.source = source;
            if (isError2(result3)) {
              throw result3;
            }
            return result3;
          }
          function toLower2(value) {
            return toString22(value).toLowerCase();
          }
          function toUpper2(value) {
            return toString22(value).toUpperCase();
          }
          function trim2(string2, chars, guard) {
            string2 = toString22(string2);
            if (string2 && (guard || chars === undefined$1)) {
              return baseTrim(string2);
            }
            if (!string2 || !(chars = baseToString(chars))) {
              return string2;
            }
            var strSymbols = stringToArray(string2), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd2(string2, chars, guard) {
            string2 = toString22(string2);
            if (string2 && (guard || chars === undefined$1)) {
              return string2.slice(0, trimmedEndIndex(string2) + 1);
            }
            if (!string2 || !(chars = baseToString(chars))) {
              return string2;
            }
            var strSymbols = stringToArray(string2), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart2(string2, chars, guard) {
            string2 = toString22(string2);
            if (string2 && (guard || chars === undefined$1)) {
              return string2.replace(reTrimStart, "");
            }
            if (!string2 || !(chars = baseToString(chars))) {
              return string2;
            }
            var strSymbols = stringToArray(string2), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate2(string2, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject22(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger2(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string2 = toString22(string2);
            var strLength = string2.length;
            if (hasUnicode(string2)) {
              var strSymbols = stringToArray(string2);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string2;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result3 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string2.slice(0, end);
            if (separator === undefined$1) {
              return result3 + omission;
            }
            if (strSymbols) {
              end += result3.length - end;
            }
            if (isRegExp2(separator)) {
              if (string2.slice(end).search(separator)) {
                var match, substring = result3;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString22(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result3 = result3.slice(0, newEnd === undefined$1 ? end : newEnd);
              }
            } else if (string2.indexOf(baseToString(separator), end) != end) {
              var index = result3.lastIndexOf(separator);
              if (index > -1) {
                result3 = result3.slice(0, index);
              }
            }
            return result3 + omission;
          }
          function unescape2(string2) {
            string2 = toString22(string2);
            return string2 && reHasEscapedHtml.test(string2) ? string2.replace(reEscapedHtml, unescapeHtmlChar) : string2;
          }
          var upperCase2 = createCompounder(function(result3, word, index) {
            return result3 + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst2 = createCaseFirst("toUpperCase");
          function words2(string2, pattern, guard) {
            string2 = toString22(string2);
            pattern = guard ? undefined$1 : pattern;
            if (pattern === undefined$1) {
              return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
            }
            return string2.match(pattern) || [];
          }
          var attempt2 = baseRest(function(func, args) {
            try {
              return apply(func, undefined$1, args);
            } catch (e) {
              return isError2(e) ? e : new Error2(e);
            }
          });
          var bindAll2 = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind2(object[key], object));
            });
            return object;
          });
          function cond2(pairs2) {
            var length = pairs2 == null ? 0 : pairs2.length, toIteratee = getIteratee();
            pairs2 = !length ? [] : arrayMap(pairs2, function(pair) {
              if (typeof pair[1] != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function(args) {
              var index = -1;
              while (++index < length) {
                var pair = pairs2[index];
                if (apply(pair[0], this, args)) {
                  return apply(pair[1], this, args);
                }
              }
            });
          }
          function conforms2(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant2(value) {
            return function() {
              return value;
            };
          }
          function defaultTo2(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow2 = createFlow();
          var flowRight2 = createFlow(true);
          function identity2(value) {
            return value;
          }
          function iteratee2(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches2(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty2(path4, srcValue) {
            return baseMatchesProperty(path4, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method2 = baseRest(function(path4, args) {
            return function(object) {
              return baseInvoke(object, path4, args);
            };
          });
          var methodOf2 = baseRest(function(object, args) {
            return function(path4) {
              return baseInvoke(object, path4, args);
            };
          });
          function mixin2(object, source, options) {
            var props = keys2(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject22(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys2(source));
            }
            var chain3 = !(isObject22(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain3 || chainAll) {
                    var result3 = object(this.__wrapped__), actions = result3.__actions__ = copyArray(this.__actions__);
                    actions.push({ func, args: arguments, thisArg: object });
                    result3.__chain__ = chainAll;
                    return result3;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict2() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop2() {
          }
          function nthArg2(n) {
            n = toInteger2(n);
            return baseRest(function(args) {
              return baseNth(args, n);
            });
          }
          var over2 = createOver(arrayMap);
          var overEvery2 = createOver(arrayEvery);
          var overSome2 = createOver(arraySome);
          function property2(path4) {
            return isKey(path4) ? baseProperty(toKey(path4)) : basePropertyDeep(path4);
          }
          function propertyOf2(object) {
            return function(path4) {
              return object == null ? undefined$1 : baseGet(object, path4);
            };
          }
          var range2 = createRange();
          var rangeRight2 = createRange(true);
          function stubArray2() {
            return [];
          }
          function stubFalse2() {
            return false;
          }
          function stubObject2() {
            return {};
          }
          function stubString2() {
            return "";
          }
          function stubTrue2() {
            return true;
          }
          function times2(n, iteratee3) {
            n = toInteger2(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) {
              return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee3 = getIteratee(iteratee3);
            n -= MAX_ARRAY_LENGTH;
            var result3 = baseTimes(length, iteratee3);
            while (++index < n) {
              iteratee3(index);
            }
            return result3;
          }
          function toPath2(value) {
            if (isArray2(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol2(value) ? [value] : copyArray(stringToPath(toString22(value)));
          }
          function uniqueId2(prefix) {
            var id = ++idCounter;
            return toString22(prefix) + id;
          }
          var add2 = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil2 = createRound("ceil");
          var divide2 = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor2 = createRound("floor");
          function max2(array) {
            return array && array.length ? baseExtremum(array, identity2, baseGt) : undefined$1;
          }
          function maxBy2(array, iteratee3) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee3, 2), baseGt) : undefined$1;
          }
          function mean2(array) {
            return baseMean(array, identity2);
          }
          function meanBy2(array, iteratee3) {
            return baseMean(array, getIteratee(iteratee3, 2));
          }
          function min2(array) {
            return array && array.length ? baseExtremum(array, identity2, baseLt) : undefined$1;
          }
          function minBy2(array, iteratee3) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee3, 2), baseLt) : undefined$1;
          }
          var multiply2 = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round2 = createRound("round");
          var subtract2 = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum2(array) {
            return array && array.length ? baseSum(array, identity2) : 0;
          }
          function sumBy2(array, iteratee3) {
            return array && array.length ? baseSum(array, getIteratee(iteratee3, 2)) : 0;
          }
          lodash2.after = after2;
          lodash2.ary = ary2;
          lodash2.assign = assign2;
          lodash2.assignIn = assignIn2;
          lodash2.assignInWith = assignInWith2;
          lodash2.assignWith = assignWith2;
          lodash2.at = at2;
          lodash2.before = before2;
          lodash2.bind = bind2;
          lodash2.bindAll = bindAll2;
          lodash2.bindKey = bindKey2;
          lodash2.castArray = castArray2;
          lodash2.chain = chain2;
          lodash2.chunk = chunk2;
          lodash2.compact = compact2;
          lodash2.concat = concat22;
          lodash2.cond = cond2;
          lodash2.conforms = conforms2;
          lodash2.constant = constant2;
          lodash2.countBy = countBy2;
          lodash2.create = create2;
          lodash2.curry = curry2;
          lodash2.curryRight = curryRight2;
          lodash2.debounce = debounce2;
          lodash2.defaults = defaults2;
          lodash2.defaultsDeep = defaultsDeep2;
          lodash2.defer = defer2;
          lodash2.delay = delay2;
          lodash2.difference = difference2;
          lodash2.differenceBy = differenceBy2;
          lodash2.differenceWith = differenceWith2;
          lodash2.drop = drop2;
          lodash2.dropRight = dropRight2;
          lodash2.dropRightWhile = dropRightWhile2;
          lodash2.dropWhile = dropWhile2;
          lodash2.fill = fill2;
          lodash2.filter = filter2;
          lodash2.flatMap = flatMap2;
          lodash2.flatMapDeep = flatMapDeep2;
          lodash2.flatMapDepth = flatMapDepth2;
          lodash2.flatten = flatten2;
          lodash2.flattenDeep = flattenDeep2;
          lodash2.flattenDepth = flattenDepth2;
          lodash2.flip = flip2;
          lodash2.flow = flow2;
          lodash2.flowRight = flowRight2;
          lodash2.fromPairs = fromPairs2;
          lodash2.functions = functions2;
          lodash2.functionsIn = functionsIn2;
          lodash2.groupBy = groupBy2;
          lodash2.initial = initial2;
          lodash2.intersection = intersection22;
          lodash2.intersectionBy = intersectionBy2;
          lodash2.intersectionWith = intersectionWith2;
          lodash2.invert = invert2;
          lodash2.invertBy = invertBy2;
          lodash2.invokeMap = invokeMap2;
          lodash2.iteratee = iteratee2;
          lodash2.keyBy = keyBy2;
          lodash2.keys = keys2;
          lodash2.keysIn = keysIn2;
          lodash2.map = map22;
          lodash2.mapKeys = mapKeys2;
          lodash2.mapValues = mapValues2;
          lodash2.matches = matches2;
          lodash2.matchesProperty = matchesProperty2;
          lodash2.memoize = memoize2;
          lodash2.merge = merge22;
          lodash2.mergeWith = mergeWith2;
          lodash2.method = method2;
          lodash2.methodOf = methodOf2;
          lodash2.mixin = mixin2;
          lodash2.negate = negate2;
          lodash2.nthArg = nthArg2;
          lodash2.omit = omit2;
          lodash2.omitBy = omitBy2;
          lodash2.once = once2;
          lodash2.orderBy = orderBy2;
          lodash2.over = over2;
          lodash2.overArgs = overArgs2;
          lodash2.overEvery = overEvery2;
          lodash2.overSome = overSome2;
          lodash2.partial = partial2;
          lodash2.partialRight = partialRight2;
          lodash2.partition = partition2;
          lodash2.pick = pick2;
          lodash2.pickBy = pickBy2;
          lodash2.property = property2;
          lodash2.propertyOf = propertyOf2;
          lodash2.pull = pull2;
          lodash2.pullAll = pullAll2;
          lodash2.pullAllBy = pullAllBy2;
          lodash2.pullAllWith = pullAllWith2;
          lodash2.pullAt = pullAt2;
          lodash2.range = range2;
          lodash2.rangeRight = rangeRight2;
          lodash2.rearg = rearg2;
          lodash2.reject = reject2;
          lodash2.remove = remove22;
          lodash2.rest = rest2;
          lodash2.reverse = reverse2;
          lodash2.sampleSize = sampleSize2;
          lodash2.set = set22;
          lodash2.setWith = setWith2;
          lodash2.shuffle = shuffle2;
          lodash2.slice = slice2;
          lodash2.sortBy = sortBy2;
          lodash2.sortedUniq = sortedUniq2;
          lodash2.sortedUniqBy = sortedUniqBy2;
          lodash2.split = split2;
          lodash2.spread = spread2;
          lodash2.tail = tail2;
          lodash2.take = take2;
          lodash2.takeRight = takeRight2;
          lodash2.takeRightWhile = takeRightWhile2;
          lodash2.takeWhile = takeWhile2;
          lodash2.tap = tap2;
          lodash2.throttle = throttle2;
          lodash2.thru = thru2;
          lodash2.toArray = toArray2;
          lodash2.toPairs = toPairs2;
          lodash2.toPairsIn = toPairsIn2;
          lodash2.toPath = toPath2;
          lodash2.toPlainObject = toPlainObject2;
          lodash2.transform = transform2;
          lodash2.unary = unary2;
          lodash2.union = union2;
          lodash2.unionBy = unionBy2;
          lodash2.unionWith = unionWith2;
          lodash2.uniq = uniq2;
          lodash2.uniqBy = uniqBy2;
          lodash2.uniqWith = uniqWith2;
          lodash2.unset = unset2;
          lodash2.unzip = unzip2;
          lodash2.unzipWith = unzipWith2;
          lodash2.update = update2;
          lodash2.updateWith = updateWith2;
          lodash2.values = values2;
          lodash2.valuesIn = valuesIn2;
          lodash2.without = without2;
          lodash2.words = words2;
          lodash2.wrap = wrap2;
          lodash2.xor = xor2;
          lodash2.xorBy = xorBy2;
          lodash2.xorWith = xorWith2;
          lodash2.zip = zip22;
          lodash2.zipObject = zipObject2;
          lodash2.zipObjectDeep = zipObjectDeep2;
          lodash2.zipWith = zipWith2;
          lodash2.entries = toPairs2;
          lodash2.entriesIn = toPairsIn2;
          lodash2.extend = assignIn2;
          lodash2.extendWith = assignInWith2;
          mixin2(lodash2, lodash2);
          lodash2.add = add2;
          lodash2.attempt = attempt2;
          lodash2.camelCase = camelCase2;
          lodash2.capitalize = capitalize22;
          lodash2.ceil = ceil2;
          lodash2.clamp = clamp2;
          lodash2.clone = clone2;
          lodash2.cloneDeep = cloneDeep2;
          lodash2.cloneDeepWith = cloneDeepWith2;
          lodash2.cloneWith = cloneWith2;
          lodash2.conformsTo = conformsTo2;
          lodash2.deburr = deburr2;
          lodash2.defaultTo = defaultTo2;
          lodash2.divide = divide2;
          lodash2.endsWith = endsWith2;
          lodash2.eq = eq2;
          lodash2.escape = escape2;
          lodash2.escapeRegExp = escapeRegExp2;
          lodash2.every = every2;
          lodash2.find = find2;
          lodash2.findIndex = findIndex2;
          lodash2.findKey = findKey2;
          lodash2.findLast = findLast2;
          lodash2.findLastIndex = findLastIndex2;
          lodash2.findLastKey = findLastKey2;
          lodash2.floor = floor2;
          lodash2.forEach = forEach2;
          lodash2.forEachRight = forEachRight2;
          lodash2.forIn = forIn2;
          lodash2.forInRight = forInRight2;
          lodash2.forOwn = forOwn2;
          lodash2.forOwnRight = forOwnRight2;
          lodash2.get = get22;
          lodash2.gt = gt2;
          lodash2.gte = gte2;
          lodash2.has = has2;
          lodash2.hasIn = hasIn2;
          lodash2.head = head2;
          lodash2.identity = identity2;
          lodash2.includes = includes2;
          lodash2.indexOf = indexOf2;
          lodash2.inRange = inRange2;
          lodash2.invoke = invoke2;
          lodash2.isArguments = isArguments2;
          lodash2.isArray = isArray2;
          lodash2.isArrayBuffer = isArrayBuffer2;
          lodash2.isArrayLike = isArrayLike2;
          lodash2.isArrayLikeObject = isArrayLikeObject2;
          lodash2.isBoolean = isBoolean22;
          lodash2.isBuffer = isBuffer2;
          lodash2.isDate = isDate2;
          lodash2.isElement = isElement2;
          lodash2.isEmpty = isEmpty2;
          lodash2.isEqual = isEqual2;
          lodash2.isEqualWith = isEqualWith2;
          lodash2.isError = isError2;
          lodash2.isFinite = isFinite2;
          lodash2.isFunction = isFunction2;
          lodash2.isInteger = isInteger22;
          lodash2.isLength = isLength2;
          lodash2.isMap = isMap2;
          lodash2.isMatch = isMatch2;
          lodash2.isMatchWith = isMatchWith2;
          lodash2.isNaN = isNaN22;
          lodash2.isNative = isNative2;
          lodash2.isNil = isNil2;
          lodash2.isNull = isNull22;
          lodash2.isNumber = isNumber2;
          lodash2.isObject = isObject22;
          lodash2.isObjectLike = isObjectLike2;
          lodash2.isPlainObject = isPlainObject2;
          lodash2.isRegExp = isRegExp2;
          lodash2.isSafeInteger = isSafeInteger2;
          lodash2.isSet = isSet2;
          lodash2.isString = isString2;
          lodash2.isSymbol = isSymbol2;
          lodash2.isTypedArray = isTypedArray2;
          lodash2.isUndefined = isUndefined2;
          lodash2.isWeakMap = isWeakMap2;
          lodash2.isWeakSet = isWeakSet2;
          lodash2.join = join22;
          lodash2.kebabCase = kebabCase2;
          lodash2.last = last2;
          lodash2.lastIndexOf = lastIndexOf2;
          lodash2.lowerCase = lowerCase2;
          lodash2.lowerFirst = lowerFirst2;
          lodash2.lt = lt2;
          lodash2.lte = lte2;
          lodash2.max = max2;
          lodash2.maxBy = maxBy2;
          lodash2.mean = mean2;
          lodash2.meanBy = meanBy2;
          lodash2.min = min2;
          lodash2.minBy = minBy2;
          lodash2.stubArray = stubArray2;
          lodash2.stubFalse = stubFalse2;
          lodash2.stubObject = stubObject2;
          lodash2.stubString = stubString2;
          lodash2.stubTrue = stubTrue2;
          lodash2.multiply = multiply2;
          lodash2.nth = nth2;
          lodash2.noConflict = noConflict2;
          lodash2.noop = noop2;
          lodash2.now = now2;
          lodash2.pad = pad2;
          lodash2.padEnd = padEnd2;
          lodash2.padStart = padStart2;
          lodash2.parseInt = parseInt2;
          lodash2.random = random2;
          lodash2.reduce = reduce2;
          lodash2.reduceRight = reduceRight2;
          lodash2.repeat = repeat22;
          lodash2.replace = replace2;
          lodash2.result = result2;
          lodash2.round = round2;
          lodash2.runInContext = runInContext3;
          lodash2.sample = sample2;
          lodash2.size = size2;
          lodash2.snakeCase = snakeCase2;
          lodash2.some = some2;
          lodash2.sortedIndex = sortedIndex2;
          lodash2.sortedIndexBy = sortedIndexBy2;
          lodash2.sortedIndexOf = sortedIndexOf2;
          lodash2.sortedLastIndex = sortedLastIndex2;
          lodash2.sortedLastIndexBy = sortedLastIndexBy2;
          lodash2.sortedLastIndexOf = sortedLastIndexOf2;
          lodash2.startCase = startCase2;
          lodash2.startsWith = startsWith2;
          lodash2.subtract = subtract2;
          lodash2.sum = sum2;
          lodash2.sumBy = sumBy2;
          lodash2.template = template2;
          lodash2.times = times2;
          lodash2.toFinite = toFinite2;
          lodash2.toInteger = toInteger2;
          lodash2.toLength = toLength2;
          lodash2.toLower = toLower2;
          lodash2.toNumber = toNumber2;
          lodash2.toSafeInteger = toSafeInteger2;
          lodash2.toString = toString22;
          lodash2.toUpper = toUpper2;
          lodash2.trim = trim2;
          lodash2.trimEnd = trimEnd2;
          lodash2.trimStart = trimStart2;
          lodash2.truncate = truncate2;
          lodash2.unescape = unescape2;
          lodash2.uniqueId = uniqueId2;
          lodash2.upperCase = upperCase2;
          lodash2.upperFirst = upperFirst2;
          lodash2.each = forEach2;
          lodash2.eachRight = forEachRight2;
          lodash2.first = head2;
          mixin2(lodash2, function() {
            var source = {};
            baseForOwn(lodash2, function(func, methodName) {
              if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { chain: false });
          lodash2.VERSION = VERSION2;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash2[methodName].placeholder = lodash2;
          });
          arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
              n = n === undefined$1 ? 1 : nativeMax(toInteger2(n), 0);
              var result3 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              if (result3.__filtered__) {
                result3.__takeCount__ = nativeMin(n, result3.__takeCount__);
              } else {
                result3.__views__.push({
                  size: nativeMin(n, MAX_ARRAY_LENGTH),
                  type: methodName + (result3.__dir__ < 0 ? "Right" : "")
                });
              }
              return result3;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
              return this.reverse()[methodName](n).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee3) {
              var result3 = this.clone();
              result3.__iteratees__.push({
                iteratee: getIteratee(iteratee3, 3),
                type
              });
              result3.__filtered__ = result3.__filtered__ || isFilter;
              return result3;
            };
          });
          arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity2);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path4, args) {
            if (typeof path4 == "function") {
              return new LazyWrapper(this);
            }
            return this.map(function(value) {
              return baseInvoke(value, path4, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate2(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger2(start);
            var result3 = this;
            if (result3.__filtered__ && (start > 0 || end < 0)) {
              return new LazyWrapper(result3);
            }
            if (start < 0) {
              result3 = result3.takeRight(-start);
            } else if (start) {
              result3 = result3.drop(start);
            }
            if (end !== undefined$1) {
              end = toInteger2(end);
              result3 = end < 0 ? result3.dropRight(-end) : result3.take(end - start);
            }
            return result3;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash2.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee3 = args[0], useLazy = isLazy || isArray2(value);
              var interceptor = function(value2) {
                var result4 = lodashFunc.apply(lodash2, arrayPush([value2], args));
                return isTaker && chainAll ? result4[0] : result4;
              };
              if (useLazy && checkIteratee && typeof iteratee3 == "function" && iteratee3.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result3 = func.apply(value, args);
                result3.__actions__.push({ func: thru2, args: [interceptor], thisArg: undefined$1 });
                return new LodashWrapper(result3, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result3 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result3.value()[0] : result3.value() : result3;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash2.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray2(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray2(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash2[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ name: methodName, func: lodashFunc });
            }
          });
          realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
            name: "wrapper",
            func: undefined$1
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash2.prototype.at = wrapperAt;
          lodash2.prototype.chain = wrapperChain;
          lodash2.prototype.commit = wrapperCommit;
          lodash2.prototype.next = wrapperNext;
          lodash2.prototype.plant = wrapperPlant;
          lodash2.prototype.reverse = wrapperReverse;
          lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
          lodash2.prototype.first = lodash2.prototype.head;
          if (symIterator) {
            lodash2.prototype[symIterator] = wrapperToIterator;
          }
          return lodash2;
        };
        var _22 = runInContext2();
        if (freeModule) {
          (freeModule.exports = _22)._ = _22;
          freeExports._ = _22;
        } else {
          root._ = _22;
        }
      }).call(commonjsGlobal);
    });
    VERSION = lodash.VERSION;
    _ = lodash._;
    add = lodash.add;
    after = lodash.after;
    ary = lodash.ary;
    assign = lodash.assign;
    assignIn = lodash.assignIn;
    assignInWith = lodash.assignInWith;
    assignWith = lodash.assignWith;
    at = lodash.at;
    attempt = lodash.attempt;
    before = lodash.before;
    bind = lodash.bind;
    bindAll = lodash.bindAll;
    bindKey = lodash.bindKey;
    camelCase = lodash.camelCase;
    capitalize = lodash.capitalize;
    castArray = lodash.castArray;
    ceil = lodash.ceil;
    chain = lodash.chain;
    chunk = lodash.chunk;
    clamp = lodash.clamp;
    clone = lodash.clone;
    cloneDeep = lodash.cloneDeep;
    cloneDeepWith = lodash.cloneDeepWith;
    cloneWith = lodash.cloneWith;
    compact = lodash.compact;
    concat = lodash.concat;
    cond = lodash.cond;
    conforms = lodash.conforms;
    conformsTo = lodash.conformsTo;
    constant = lodash.constant;
    countBy = lodash.countBy;
    create = lodash.create;
    curry = lodash.curry;
    curryRight = lodash.curryRight;
    debounce = lodash.debounce;
    deburr = lodash.deburr;
    lodash_default = lodash;
    defaultTo = lodash.defaultTo;
    defaults = lodash.defaults;
    defaultsDeep = lodash.defaultsDeep;
    defer = lodash.defer;
    delay = lodash.delay;
    difference = lodash.difference;
    differenceBy = lodash.differenceBy;
    differenceWith = lodash.differenceWith;
    divide = lodash.divide;
    drop = lodash.drop;
    dropRight = lodash.dropRight;
    dropRightWhile = lodash.dropRightWhile;
    dropWhile = lodash.dropWhile;
    each2 = lodash.each;
    eachRight = lodash.eachRight;
    endsWith = lodash.endsWith;
    entries = lodash.entries;
    entriesIn = lodash.entriesIn;
    eq = lodash.eq;
    escape = lodash.escape;
    escapeRegExp = lodash.escapeRegExp;
    every = lodash.every;
    extend = lodash.extend;
    extendWith = lodash.extendWith;
    fill = lodash.fill;
    filter = lodash.filter;
    find = lodash.find;
    findIndex = lodash.findIndex;
    findKey = lodash.findKey;
    findLast = lodash.findLast;
    findLastIndex = lodash.findLastIndex;
    findLastKey = lodash.findLastKey;
    first = lodash.first;
    flatMap = lodash.flatMap;
    flatMapDeep = lodash.flatMapDeep;
    flatMapDepth = lodash.flatMapDepth;
    flatten = lodash.flatten;
    flattenDeep = lodash.flattenDeep;
    flattenDepth = lodash.flattenDepth;
    flip = lodash.flip;
    floor = lodash.floor;
    flow = lodash.flow;
    flowRight = lodash.flowRight;
    forEach = lodash.forEach;
    forEachRight = lodash.forEachRight;
    forIn = lodash.forIn;
    forInRight = lodash.forInRight;
    forOwn = lodash.forOwn;
    forOwnRight = lodash.forOwnRight;
    fromPairs = lodash.fromPairs;
    functions = lodash.functions;
    functionsIn = lodash.functionsIn;
    get = lodash.get;
    groupBy = lodash.groupBy;
    gt = lodash.gt;
    gte = lodash.gte;
    has = lodash.has;
    hasIn = lodash.hasIn;
    head = lodash.head;
    identity = lodash.identity;
    inRange = lodash.inRange;
    includes = lodash.includes;
    indexOf = lodash.indexOf;
    initial = lodash.initial;
    intersection = lodash.intersection;
    intersectionBy = lodash.intersectionBy;
    intersectionWith = lodash.intersectionWith;
    invert = lodash.invert;
    invertBy = lodash.invertBy;
    invoke = lodash.invoke;
    invokeMap = lodash.invokeMap;
    isArguments = lodash.isArguments;
    isArray = lodash.isArray;
    isArrayBuffer = lodash.isArrayBuffer;
    isArrayLike = lodash.isArrayLike;
    isArrayLikeObject = lodash.isArrayLikeObject;
    isBoolean = lodash.isBoolean;
    isBuffer = lodash.isBuffer;
    isDate = lodash.isDate;
    isElement = lodash.isElement;
    isEmpty = lodash.isEmpty;
    isEqual = lodash.isEqual;
    isEqualWith = lodash.isEqualWith;
    isError = lodash.isError;
    isFinite = lodash.isFinite;
    isFunction = lodash.isFunction;
    isInteger = lodash.isInteger;
    isLength = lodash.isLength;
    isMap = lodash.isMap;
    isMatch = lodash.isMatch;
    isMatchWith = lodash.isMatchWith;
    isNaN2 = lodash.isNaN;
    isNative = lodash.isNative;
    isNil = lodash.isNil;
    isNull = lodash.isNull;
    isNumber = lodash.isNumber;
    isObject = lodash.isObject;
    isObjectLike = lodash.isObjectLike;
    isPlainObject = lodash.isPlainObject;
    isRegExp = lodash.isRegExp;
    isSafeInteger = lodash.isSafeInteger;
    isSet = lodash.isSet;
    isString = lodash.isString;
    isSymbol = lodash.isSymbol;
    isTypedArray = lodash.isTypedArray;
    isUndefined = lodash.isUndefined;
    isWeakMap = lodash.isWeakMap;
    isWeakSet = lodash.isWeakSet;
    iteratee = lodash.iteratee;
    join = lodash.join;
    kebabCase = lodash.kebabCase;
    keyBy = lodash.keyBy;
    keys = lodash.keys;
    keysIn = lodash.keysIn;
    last = lodash.last;
    lastIndexOf = lodash.lastIndexOf;
    lowerCase = lodash.lowerCase;
    lowerFirst = lodash.lowerFirst;
    lt = lodash.lt;
    lte = lodash.lte;
    map = lodash.map;
    mapKeys = lodash.mapKeys;
    mapValues = lodash.mapValues;
    matches = lodash.matches;
    matchesProperty = lodash.matchesProperty;
    max = lodash.max;
    maxBy = lodash.maxBy;
    mean = lodash.mean;
    meanBy = lodash.meanBy;
    memoize = lodash.memoize;
    merge = lodash.merge;
    mergeWith = lodash.mergeWith;
    method = lodash.method;
    methodOf = lodash.methodOf;
    min = lodash.min;
    minBy = lodash.minBy;
    mixin = lodash.mixin;
    multiply = lodash.multiply;
    negate = lodash.negate;
    noConflict = lodash.noConflict;
    noop = lodash.noop;
    now = lodash.now;
    nth = lodash.nth;
    nthArg = lodash.nthArg;
    omit = lodash.omit;
    omitBy = lodash.omitBy;
    once = lodash.once;
    orderBy = lodash.orderBy;
    over = lodash.over;
    overArgs = lodash.overArgs;
    overEvery = lodash.overEvery;
    overSome = lodash.overSome;
    pad = lodash.pad;
    padEnd = lodash.padEnd;
    padStart = lodash.padStart;
    parseInt$1 = lodash.parseInt;
    partial = lodash.partial;
    partialRight = lodash.partialRight;
    partition = lodash.partition;
    pick = lodash.pick;
    pickBy = lodash.pickBy;
    property = lodash.property;
    propertyOf = lodash.propertyOf;
    pull = lodash.pull;
    pullAll = lodash.pullAll;
    pullAllBy = lodash.pullAllBy;
    pullAllWith = lodash.pullAllWith;
    pullAt = lodash.pullAt;
    random = lodash.random;
    range = lodash.range;
    rangeRight = lodash.rangeRight;
    rearg = lodash.rearg;
    reduce = lodash.reduce;
    reduceRight = lodash.reduceRight;
    reject = lodash.reject;
    remove = lodash.remove;
    repeat = lodash.repeat;
    replace = lodash.replace;
    rest = lodash.rest;
    result = lodash.result;
    reverse = lodash.reverse;
    round = lodash.round;
    runInContext = lodash.runInContext;
    sample = lodash.sample;
    sampleSize = lodash.sampleSize;
    set = lodash.set;
    setWith = lodash.setWith;
    shuffle = lodash.shuffle;
    size = lodash.size;
    slice = lodash.slice;
    snakeCase = lodash.snakeCase;
    some = lodash.some;
    sortBy = lodash.sortBy;
    sortedIndex = lodash.sortedIndex;
    sortedIndexBy = lodash.sortedIndexBy;
    sortedIndexOf = lodash.sortedIndexOf;
    sortedLastIndex = lodash.sortedLastIndex;
    sortedLastIndexBy = lodash.sortedLastIndexBy;
    sortedLastIndexOf = lodash.sortedLastIndexOf;
    sortedUniq = lodash.sortedUniq;
    sortedUniqBy = lodash.sortedUniqBy;
    split = lodash.split;
    spread = lodash.spread;
    startCase = lodash.startCase;
    startsWith = lodash.startsWith;
    stubArray = lodash.stubArray;
    stubFalse = lodash.stubFalse;
    stubObject = lodash.stubObject;
    stubString = lodash.stubString;
    stubTrue = lodash.stubTrue;
    subtract = lodash.subtract;
    sum = lodash.sum;
    sumBy = lodash.sumBy;
    tail = lodash.tail;
    take = lodash.take;
    takeRight = lodash.takeRight;
    takeRightWhile = lodash.takeRightWhile;
    takeWhile = lodash.takeWhile;
    tap = lodash.tap;
    template = lodash.template;
    templateSettings = lodash.templateSettings;
    throttle = lodash.throttle;
    thru = lodash.thru;
    times = lodash.times;
    toArray = lodash.toArray;
    toFinite = lodash.toFinite;
    toInteger = lodash.toInteger;
    toLength = lodash.toLength;
    toLower = lodash.toLower;
    toNumber = lodash.toNumber;
    toPairs = lodash.toPairs;
    toPairsIn = lodash.toPairsIn;
    toPath = lodash.toPath;
    toPlainObject = lodash.toPlainObject;
    toSafeInteger = lodash.toSafeInteger;
    toString2 = lodash.toString;
    toUpper = lodash.toUpper;
    transform = lodash.transform;
    trim = lodash.trim;
    trimEnd = lodash.trimEnd;
    trimStart = lodash.trimStart;
    truncate = lodash.truncate;
    unary = lodash.unary;
    unescape = lodash.unescape;
    union = lodash.union;
    unionBy = lodash.unionBy;
    unionWith = lodash.unionWith;
    uniq = lodash.uniq;
    uniqBy = lodash.uniqBy;
    uniqWith = lodash.uniqWith;
    uniqueId = lodash.uniqueId;
    unset = lodash.unset;
    unzip = lodash.unzip;
    unzipWith = lodash.unzipWith;
    update = lodash.update;
    updateWith = lodash.updateWith;
    upperCase = lodash.upperCase;
    upperFirst = lodash.upperFirst;
    values = lodash.values;
    valuesIn = lodash.valuesIn;
    without = lodash.without;
    words = lodash.words;
    wrap = lodash.wrap;
    xor = lodash.xor;
    xorBy = lodash.xorBy;
    xorWith = lodash.xorWith;
    zip2 = lodash.zip;
    zipObject = lodash.zipObject;
    zipObjectDeep = lodash.zipObjectDeep;
    zipWith = lodash.zipWith;
  }
});

// esbuild_serve:http-import:https://cdn.skypack.dev/lodash@4.17.21
var lodash_4_17_exports = {};
__export(lodash_4_17_exports, {
  VERSION: () => VERSION,
  _: () => _,
  __moduleExports: () => lodash,
  add: () => add,
  after: () => after,
  ary: () => ary,
  assign: () => assign,
  assignIn: () => assignIn,
  assignInWith: () => assignInWith,
  assignWith: () => assignWith,
  at: () => at,
  attempt: () => attempt,
  before: () => before,
  bind: () => bind,
  bindAll: () => bindAll,
  bindKey: () => bindKey,
  camelCase: () => camelCase,
  capitalize: () => capitalize,
  castArray: () => castArray,
  ceil: () => ceil,
  chain: () => chain,
  chunk: () => chunk,
  clamp: () => clamp,
  clone: () => clone,
  cloneDeep: () => cloneDeep,
  cloneDeepWith: () => cloneDeepWith,
  cloneWith: () => cloneWith,
  compact: () => compact,
  concat: () => concat,
  cond: () => cond,
  conforms: () => conforms,
  conformsTo: () => conformsTo,
  constant: () => constant,
  countBy: () => countBy,
  create: () => create,
  curry: () => curry,
  curryRight: () => curryRight,
  debounce: () => debounce,
  deburr: () => deburr,
  default: () => lodash_default,
  defaultTo: () => defaultTo,
  defaults: () => defaults,
  defaultsDeep: () => defaultsDeep,
  defer: () => defer,
  delay: () => delay,
  difference: () => difference,
  differenceBy: () => differenceBy,
  differenceWith: () => differenceWith,
  divide: () => divide,
  drop: () => drop,
  dropRight: () => dropRight,
  dropRightWhile: () => dropRightWhile,
  dropWhile: () => dropWhile,
  each: () => each2,
  eachRight: () => eachRight,
  endsWith: () => endsWith,
  entries: () => entries,
  entriesIn: () => entriesIn,
  eq: () => eq,
  escape: () => escape,
  escapeRegExp: () => escapeRegExp,
  every: () => every,
  extend: () => extend,
  extendWith: () => extendWith,
  fill: () => fill,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex,
  findKey: () => findKey,
  findLast: () => findLast,
  findLastIndex: () => findLastIndex,
  findLastKey: () => findLastKey,
  first: () => first,
  flatMap: () => flatMap,
  flatMapDeep: () => flatMapDeep,
  flatMapDepth: () => flatMapDepth,
  flatten: () => flatten,
  flattenDeep: () => flattenDeep,
  flattenDepth: () => flattenDepth,
  flip: () => flip,
  floor: () => floor,
  flow: () => flow,
  flowRight: () => flowRight,
  forEach: () => forEach,
  forEachRight: () => forEachRight,
  forIn: () => forIn,
  forInRight: () => forInRight,
  forOwn: () => forOwn,
  forOwnRight: () => forOwnRight,
  fromPairs: () => fromPairs,
  functions: () => functions,
  functionsIn: () => functionsIn,
  get: () => get,
  groupBy: () => groupBy,
  gt: () => gt,
  gte: () => gte,
  has: () => has,
  hasIn: () => hasIn,
  head: () => head,
  identity: () => identity,
  inRange: () => inRange,
  includes: () => includes,
  indexOf: () => indexOf,
  initial: () => initial,
  intersection: () => intersection,
  intersectionBy: () => intersectionBy,
  intersectionWith: () => intersectionWith,
  invert: () => invert,
  invertBy: () => invertBy,
  invoke: () => invoke,
  invokeMap: () => invokeMap,
  isArguments: () => isArguments,
  isArray: () => isArray,
  isArrayBuffer: () => isArrayBuffer,
  isArrayLike: () => isArrayLike,
  isArrayLikeObject: () => isArrayLikeObject,
  isBoolean: () => isBoolean,
  isBuffer: () => isBuffer,
  isDate: () => isDate,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isEqualWith: () => isEqualWith,
  isError: () => isError,
  isFinite: () => isFinite,
  isFunction: () => isFunction,
  isInteger: () => isInteger,
  isLength: () => isLength,
  isMap: () => isMap,
  isMatch: () => isMatch,
  isMatchWith: () => isMatchWith,
  isNaN: () => isNaN2,
  isNative: () => isNative,
  isNil: () => isNil,
  isNull: () => isNull,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isObjectLike: () => isObjectLike,
  isPlainObject: () => isPlainObject,
  isRegExp: () => isRegExp,
  isSafeInteger: () => isSafeInteger,
  isSet: () => isSet,
  isString: () => isString,
  isSymbol: () => isSymbol,
  isTypedArray: () => isTypedArray,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap,
  isWeakSet: () => isWeakSet,
  iteratee: () => iteratee,
  join: () => join,
  kebabCase: () => kebabCase,
  keyBy: () => keyBy,
  keys: () => keys,
  keysIn: () => keysIn,
  last: () => last,
  lastIndexOf: () => lastIndexOf,
  lowerCase: () => lowerCase,
  lowerFirst: () => lowerFirst,
  lt: () => lt,
  lte: () => lte,
  map: () => map,
  mapKeys: () => mapKeys,
  mapValues: () => mapValues,
  matches: () => matches,
  matchesProperty: () => matchesProperty,
  max: () => max,
  maxBy: () => maxBy,
  mean: () => mean,
  meanBy: () => meanBy,
  memoize: () => memoize,
  merge: () => merge,
  mergeWith: () => mergeWith,
  method: () => method,
  methodOf: () => methodOf,
  min: () => min,
  minBy: () => minBy,
  mixin: () => mixin,
  multiply: () => multiply,
  negate: () => negate,
  noConflict: () => noConflict,
  noop: () => noop,
  now: () => now,
  nth: () => nth,
  nthArg: () => nthArg,
  omit: () => omit,
  omitBy: () => omitBy,
  once: () => once,
  orderBy: () => orderBy,
  over: () => over,
  overArgs: () => overArgs,
  overEvery: () => overEvery,
  overSome: () => overSome,
  pad: () => pad,
  padEnd: () => padEnd,
  padStart: () => padStart,
  parseInt: () => parseInt$1,
  partial: () => partial,
  partialRight: () => partialRight,
  partition: () => partition,
  pick: () => pick,
  pickBy: () => pickBy,
  property: () => property,
  propertyOf: () => propertyOf,
  pull: () => pull,
  pullAll: () => pullAll,
  pullAllBy: () => pullAllBy,
  pullAllWith: () => pullAllWith,
  pullAt: () => pullAt,
  random: () => random,
  range: () => range,
  rangeRight: () => rangeRight,
  rearg: () => rearg,
  reduce: () => reduce,
  reduceRight: () => reduceRight,
  reject: () => reject,
  remove: () => remove,
  repeat: () => repeat,
  replace: () => replace,
  rest: () => rest,
  result: () => result,
  reverse: () => reverse,
  round: () => round,
  runInContext: () => runInContext,
  sample: () => sample,
  sampleSize: () => sampleSize,
  set: () => set,
  setWith: () => setWith,
  shuffle: () => shuffle,
  size: () => size,
  slice: () => slice,
  snakeCase: () => snakeCase,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  sortedIndexBy: () => sortedIndexBy,
  sortedIndexOf: () => sortedIndexOf,
  sortedLastIndex: () => sortedLastIndex,
  sortedLastIndexBy: () => sortedLastIndexBy,
  sortedLastIndexOf: () => sortedLastIndexOf,
  sortedUniq: () => sortedUniq,
  sortedUniqBy: () => sortedUniqBy,
  split: () => split,
  spread: () => spread,
  startCase: () => startCase,
  startsWith: () => startsWith,
  stubArray: () => stubArray,
  stubFalse: () => stubFalse,
  stubObject: () => stubObject,
  stubString: () => stubString,
  stubTrue: () => stubTrue,
  subtract: () => subtract,
  sum: () => sum,
  sumBy: () => sumBy,
  tail: () => tail,
  take: () => take,
  takeRight: () => takeRight,
  takeRightWhile: () => takeRightWhile,
  takeWhile: () => takeWhile,
  tap: () => tap,
  template: () => template,
  templateSettings: () => templateSettings,
  throttle: () => throttle,
  thru: () => thru,
  times: () => times,
  toArray: () => toArray,
  toFinite: () => toFinite,
  toInteger: () => toInteger,
  toLength: () => toLength,
  toLower: () => toLower,
  toNumber: () => toNumber,
  toPairs: () => toPairs,
  toPairsIn: () => toPairsIn,
  toPath: () => toPath,
  toPlainObject: () => toPlainObject,
  toSafeInteger: () => toSafeInteger,
  toString: () => toString2,
  toUpper: () => toUpper,
  transform: () => transform,
  trim: () => trim,
  trimEnd: () => trimEnd,
  trimStart: () => trimStart,
  truncate: () => truncate,
  unary: () => unary,
  unescape: () => unescape,
  union: () => union,
  unionBy: () => unionBy,
  unionWith: () => unionWith,
  uniq: () => uniq,
  uniqBy: () => uniqBy,
  uniqWith: () => uniqWith,
  uniqueId: () => uniqueId,
  unset: () => unset,
  unzip: () => unzip,
  unzipWith: () => unzipWith,
  update: () => update,
  updateWith: () => updateWith,
  upperCase: () => upperCase,
  upperFirst: () => upperFirst,
  values: () => values,
  valuesIn: () => valuesIn,
  without: () => without,
  words: () => words,
  wrap: () => wrap,
  xor: () => xor,
  xorBy: () => xorBy,
  xorWith: () => xorWith,
  zip: () => zip2,
  zipObject: () => zipObject,
  zipObjectDeep: () => zipObjectDeep,
  zipWith: () => zipWith
});
var init_lodash_4_17 = __esm({
  "esbuild_serve:http-import:https://cdn.skypack.dev/lodash@4.17.21"() {
    init_lodash();
    init_lodash();
  }
});

// esbuild_serve:http-import:https://deno.land/x/good@1.4.4.2/value.js
var typedArrayClasses = [
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
].filter((each3) => each3);
var copyableClasses = /* @__PURE__ */ new Set([RegExp, Date, URL, ...typedArrayClasses, globalThis.ArrayBuffer, globalThis.DataView]);
var IteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
var ArrayIterator = Object.getPrototypeOf([][Symbol.iterator]);
var MapIterator = Object.getPrototypeOf((/* @__PURE__ */ new Map())[Symbol.iterator]);
var SetIterator = Object.getPrototypeOf((/* @__PURE__ */ new Set())[Symbol.iterator]);
var AsyncFunction = class {
};
var GeneratorFunction = class {
};
var AsyncGeneratorFunction = class {
};
var SyncGenerator = class {
};
var AsyncGenerator = class {
};
try {
  AsyncFunction = eval("(async function(){}).constructor");
  GeneratorFunction = eval("(function*(){}).constructor");
  AsyncGeneratorFunction = eval("(async function*(){}).constructor");
  SyncGenerator = eval("((function*(){})()).constructor");
  AsyncGenerator = eval("((async function*(){})()).constructor");
} catch (error) {
}
var isPrimitive = (value) => !(value instanceof Object);
var isPureObject = (value) => value instanceof Object && Object.getPrototypeOf(value).constructor == Object;
var isPracticallyPrimitive = (value) => isPrimitive(value) || value instanceof Date || value instanceof RegExp || value instanceof URL;
var isBuiltInIterator = (value) => IteratorPrototype.isPrototypeOf(value);
var isGeneratorType = (value) => {
  if (value instanceof Object) {
    if (isBuiltInIterator(value)) {
      return true;
    }
    const constructor = value.constructor;
    return constructor == SyncGenerator || constructor == AsyncGenerator;
  }
  return false;
};
var isAsyncIterable = function(value) {
  return value && typeof value[Symbol.asyncIterator] === "function";
};
var isSyncIterable = function(value) {
  return value && typeof value[Symbol.iterator] === "function";
};
var isIterableObjectOrContainer = function(value) {
  return value instanceof Object && (typeof value[Symbol.iterator] == "function" || typeof value[Symbol.asyncIterator] === "function");
};
var isTechnicallyIterable = function(value) {
  return value instanceof Object || typeof value == "string";
};
var isSyncIterableObjectOrContainer = function(value) {
  return value instanceof Object && typeof value[Symbol.iterator] == "function";
};
var deepCopySymbol = Symbol.for("deepCopy");
var clonedFromSymbol = Symbol();
var getThis = Symbol();
Object.getPrototypeOf(function() {
})[getThis] = function() {
  return this;
};
function deepCopyInner(value, valueChain = [], originalToCopyMap = /* @__PURE__ */ new Map()) {
  valueChain.push(value);
  if (value == null) {
    return value;
  }
  if (!(value instanceof Object)) {
    return value;
  }
  if (originalToCopyMap.has(value)) {
    return originalToCopyMap.get(value);
  }
  if (value[deepCopySymbol] instanceof Function) {
    const clonedValue = value[deepCopySymbol](originalToCopyMap);
    originalToCopyMap.set(value, clonedValue);
    return clonedValue;
  }
  if (isGeneratorType(value)) {
    throw Error(`Sadly built-in generators cannot be deep copied.
And I found a generator along this path:
${valueChain.reverse().map((each3) => `${each3},
`)}`);
  }
  let object, theThis, thisCopy;
  if (value instanceof Date) {
    object = new Date(value.getTime());
  } else if (value instanceof RegExp) {
    object = new RegExp(value);
  } else if (value instanceof URL) {
    object = new URL(value);
  } else if (value instanceof Function) {
    theThis = value[getThis]();
    object = value.bind(theThis);
  } else if (copyableClasses.has(value.constructor)) {
    object = new value.constructor(value);
  } else if (value instanceof Array) {
    object = [];
  } else if (value instanceof Set) {
    object = /* @__PURE__ */ new Set();
  } else if (value instanceof Map) {
    object = /* @__PURE__ */ new Map();
  }
  originalToCopyMap.set(value, object);
  if (object instanceof Function) {
    thisCopy = deepCopyInner(theThis, valueChain, originalToCopyMap);
    object = object.bind(thisCopy);
  }
  const output2 = object;
  try {
    output2.constructor = value.constructor;
  } catch (error) {
  }
  Object.setPrototypeOf(output2, Object.getPrototypeOf(value));
  const propertyDefinitions = {};
  for (const [key, description] of Object.entries(Object.getOwnPropertyDescriptors(value))) {
    const { value: value2, get: get3, set: set4, ...options } = description;
    const getIsFunc = get3 instanceof Function;
    const setIsFunc = set4 instanceof Function;
    if (getIsFunc || setIsFunc) {
      propertyDefinitions[key] = {
        ...options,
        get: get3 ? function(...args) {
          return get3.apply(output2, args);
        } : void 0,
        set: set4 ? function(...args) {
          return set4.apply(output2, args);
        } : void 0
      };
    } else {
      if (key == "length" && output2 instanceof Array) {
        continue;
      }
      propertyDefinitions[key] = {
        ...options,
        value: deepCopyInner(value2, valueChain, originalToCopyMap)
      };
    }
  }
  Object.defineProperties(output2, propertyDefinitions);
  return output2;
}
var deepCopy = (value) => deepCopyInner(value);
var shallowSortObject = (obj) => {
  return Object.keys(obj).sort().reduce(
    (newObj, key) => {
      newObj[key] = obj[key];
      return newObj;
    },
    {}
  );
};
var deepSortObject = (obj, seen = /* @__PURE__ */ new Map()) => {
  if (!(obj instanceof Object)) {
    return obj;
  } else if (seen.has(obj)) {
    return seen.get(obj);
  } else {
    if (obj instanceof Array) {
      const sortedChildren = [];
      seen.set(obj, sortedChildren);
      for (const each3 of obj) {
        sortedChildren.push(deepSortObject(each3, seen));
      }
      return sortedChildren;
    } else {
      const sorted = {};
      seen.set(obj, sorted);
      for (const eachKey of Object.keys(obj).sort()) {
        sorted[eachKey] = deepSortObject(obj[eachKey], seen);
      }
      return sorted;
    }
  }
};
var stableStringify = (value, ...args) => {
  return JSON.stringify(deepSortObject(value), ...args);
};
var allKeys = function(obj) {
  let keys2 = [];
  if (obj == null) {
    return [];
  }
  if (!(obj instanceof Object)) {
    obj = Object.getPrototypeOf(obj);
  }
  while (obj) {
    keys2 = keys2.concat(Reflect.ownKeys(obj));
    obj = Object.getPrototypeOf(obj);
  }
  return keys2;
};
var ownKeyDescriptions = Object.getOwnPropertyDescriptors;
var allKeyDescriptions = function(value, options = { includingBuiltin: false }) {
  var { includingBuiltin } = { ...options };
  let descriptions = [];
  if (value == null) {
    return {};
  }
  if (!(value instanceof Object)) {
    value = Object.getPrototypeOf(value);
  }
  const rootPrototype = Object.getPrototypeOf({});
  let prevObj;
  while (value && value != prevObj) {
    if (!includingBuiltin && value == rootPrototype) {
      break;
    }
    descriptions = descriptions.concat(Object.entries(Object.getOwnPropertyDescriptors(value)));
    prevObj = value;
    value = Object.getPrototypeOf(value);
  }
  descriptions.reverse();
  return Object.fromEntries(descriptions);
};

// esbuild_serve:http-import:https://deno.land/x/good@1.4.4.2/async.js
function deferredPromise() {
  let methods;
  let state = "pending";
  const promise = new Promise((resolve9, reject2) => {
    methods = {
      async resolve(value) {
        await value;
        state = "fulfilled";
        resolve9(value);
      },
      reject(reason) {
        state = "rejected";
        reject2(reason);
      }
    };
  });
  Object.defineProperty(promise, "state", {
    get: () => state
  });
  return Object.assign(promise, methods);
}
var objectPrototype = Object.getPrototypeOf({});

// esbuild_serve:http-import:https://deno.land/x/good@1.4.4.2/iterable.js
var emptyIterator = /* @__PURE__ */ function* () {
}();
var makeIterable = (object) => {
  if (object == null) {
    return emptyIterator;
  }
  if (object[Symbol.iterator] instanceof Function || object[Symbol.asyncIterator] instanceof Function) {
    return object;
  }
  if (Object.getPrototypeOf(object).constructor == Object) {
    return Object.entries(object);
  }
  return emptyIterator;
};
var Stop = Symbol("iterationStop");
var iter = (object) => {
  const iterable = makeIterable(object);
  if (iterable[Symbol.asyncIterator]) {
    return iterable[Symbol.asyncIterator]();
  } else {
    return iterable[Symbol.iterator]();
  }
};
var handleResult = ({ value, done }) => done ? Stop : value;
var next = (object) => {
  if (object.next instanceof Function) {
    const result2 = object.next();
    if (result2 instanceof Promise) {
      return result2.then(handleResult);
    } else {
      return handleResult(result2);
    }
  } else {
    throw Error(`can't call next(object) on the following object as there is no object.next() method`, object);
  }
};
function flattened({ iterable, depth = Infinity, asyncsInsideSyncIterable = false }) {
  if (depth <= 0) {
    return iterable;
  }
  iterable = makeIterable(iterable);
  if (asyncsInsideSyncIterable || iterable[Symbol.asyncIterator]) {
    return async function* () {
      for await (const each3 of iterable) {
        if (isAsyncIterable(each3) || isSyncIterableObjectOrContainer(each3)) {
          for await (const eachChild of flattened({ iterable: each3, depth: depth - 1, asyncsInsideSyncIterable })) {
            yield eachChild;
          }
        } else {
          yield each3;
        }
      }
    }();
  } else {
    return function* () {
      for (const each3 of iterable) {
        if (isSyncIterableObjectOrContainer(each3)) {
          for (const eachChild of flattened({ iterable: each3, depth: depth - 1 })) {
            yield eachChild;
          }
        } else {
          yield each3;
        }
      }
    }();
  }
}
function forkBy({ data, filters, outputArrays = false }) {
  let isAsync = isAsyncIterable(data);
  const conditionHandlers = {};
  const iterator = iter(data);
  for (const [key, check] of Object.entries(filters)) {
    const que = [];
    let index = 0;
    if (isAsync || check instanceof AsyncFunction) {
      conditionHandlers[key] = new Iterable(async function* () {
        while (1) {
          if (conditionHandlers[key].hitError) {
            throw conditionHandlers[key].hitError;
          }
          if (que.length == 0) {
            const nextValue = await next(iterator);
            if (nextValue == Stop) {
              break;
            }
            for (const [key2, generator] of Object.entries(conditionHandlers)) {
              let shouldPush = false;
              try {
                shouldPush = await generator.check(nextValue, index++);
              } catch (error) {
                generator.hitError = error;
              }
              if (shouldPush) {
                generator.que.push(nextValue);
              }
            }
          }
          if (que.length != 0) {
            yield que.shift();
          }
        }
      }());
    } else {
      conditionHandlers[key] = new Iterable(function* () {
        while (1) {
          if (conditionHandlers[key].hitError) {
            throw conditionHandlers[key].hitError;
          }
          if (que.length == 0) {
            const nextValue = next(iterator);
            if (nextValue == Stop) {
              break;
            }
            for (const [key2, generator] of Object.entries(conditionHandlers)) {
              let shouldPush = false;
              try {
                shouldPush = generator.check(nextValue, index++);
              } catch (error) {
                generator.hitError = error;
              }
              if (shouldPush) {
                generator.que.push(nextValue);
              }
            }
          }
          if (que.length != 0) {
            yield que.shift();
          }
        }
      }());
    }
    conditionHandlers[key].check = check;
    conditionHandlers[key].hitError = false;
    conditionHandlers[key].que = que;
  }
  if (outputArrays) {
    for (const [key, value] of Object.entries(conditionHandlers)) {
      if (isAsyncIterable(value)) {
        conditionHandlers[key] = asyncIteratorToList(value);
      } else {
        conditionHandlers[key] = [...value];
      }
    }
  }
  return conditionHandlers;
}
function Iterable(value, options = { length: null, _createEmpty: false }) {
  const { length, _createEmpty } = { length: null, _createEmpty: false, ...options };
  if (_createEmpty) {
    return this;
  }
  const self2 = this === void 0 || this === globalThis ? new Iterable(null, { _createEmpty: true }) : this;
  if (value instanceof Array) {
    self2.length = value.length;
  } else if (value instanceof Set) {
    self2.length = value.size;
  } else if (typeof length == "number") {
    self2.length = length;
  }
  self2._source = makeIterable(value);
  if (self2._source[Symbol.iterator]) {
    self2[Symbol.iterator] = self2._source[Symbol.iterator].bind(self2._source);
  }
  if (self2._source[Symbol.asyncIterator]) {
    self2[Symbol.asyncIterator] = self2._source[Symbol.asyncIterator].bind(self2._source);
  }
  self2[Symbol.isConcatSpreadable] = true;
  self2.lengthIs = function(length2) {
    self2.length = length2;
    return self2;
  };
  self2.map = function(func) {
    const output2 = {
      ...self2._source,
      [Symbol.iterator]: () => {
        const iterator = iter(self2._source);
        let index = 0;
        return {
          next() {
            const { value: value2, done } = iterator.next();
            return {
              value: done || func(value2, index++),
              done
            };
          }
        };
      }
    };
    const includeAsyncIterator = isAsyncIterable(self2._source) || func instanceof AsyncFunction;
    if (includeAsyncIterator) {
      output2[Symbol.asyncIterator] = () => {
        const iterator = iter(self2._source);
        let index = 0;
        return {
          async next() {
            const { value: value2, done } = await iterator.next();
            return {
              value: done || await func(value2, index++),
              done
            };
          }
        };
      };
    }
    return new Iterable(output2);
  };
  self2.filter = function(func) {
    const output2 = {
      ...self2._source,
      [Symbol.iterator]: () => {
        const iterator = iter(self2._source);
        let index = 0;
        return {
          next() {
            while (1) {
              const result2 = iterator.next();
              if (result2.done || func(result2.value, index++)) {
                return result2;
              }
            }
          }
        };
      }
    };
    const includeAsyncIterator = isAsyncIterable(self2._source) || func instanceof AsyncFunction;
    if (includeAsyncIterator) {
      output2[Symbol.asyncIterator] = () => {
        const iterator = iter(self2._source);
        let index = 0;
        return {
          async next() {
            while (1) {
              const result2 = await iterator.next();
              if (result2.done || await func(result2.value, index++)) {
                return result2;
              }
            }
          }
        };
      };
    }
    return new Iterable(output2);
  };
  self2.forkBy = ({ ...args }, ...other) => forkBy({ ...args, data: self2 }, ...other);
  self2.flat = (depth = 1, asyncsInsideSyncIterable = false) => {
    return new Iterable(
      flattened({ iterable: self2, depth, asyncsInsideSyncIterable })
    );
  };
  self2.then = (func) => {
    const output2 = {
      ...self2._source,
      [Symbol.iterator]: () => {
        const iterator = iter(self2._source);
        let index = -1;
        return {
          next() {
            const output3 = iterator.next();
            index++;
            if (output3.done) {
              func(self2, index);
            }
            return output3;
          }
        };
      }
    };
    const includeAsyncIterator = isAsyncIterable(self2._source);
    if (includeAsyncIterator) {
      output2[Symbol.asyncIterator] = () => {
        const iterator = iter(self2._source);
        let index = -1;
        return {
          async next() {
            const output3 = await iterator.next();
            index++;
            if (output3.done) {
              await func(self2, index);
            }
            return output3;
          }
        };
      };
    }
    return new Iterable(output2);
  };
  self2.finally = (func) => {
    const output2 = {
      ...self2._source,
      [Symbol.iterator]: () => {
        const iterator = iter(self2._source);
        let index = -1;
        return {
          next() {
            let output3 = { value: null, done: true };
            try {
              output3 = iterator.next();
              index++;
            } finally {
              if (output3.done) {
                func(self2, index);
              }
            }
          }
        };
      }
    };
    const includeAsyncIterator = isAsyncIterable(self2._source);
    if (includeAsyncIterator) {
      output2[Symbol.asyncIterator] = () => {
        const iterator = iter(self2._source);
        let index = 0;
        return {
          async next() {
            let output3 = { value: null, done: true };
            try {
              output3 = await iterator.next();
              index++;
            } finally {
              if (output3.done) {
                await func(self2, index);
              }
            }
          }
        };
      };
    }
    return new Iterable(output2);
  };
  Object.defineProperties(self2, {
    toArray: {
      get() {
        if (self2[Symbol.asyncIterator]) {
          return (async () => {
            const iterator = self2[Symbol.asyncIterator]();
            const output2 = [];
            while (1) {
              const { value: value2, done } = await iterator.next();
              if (done) {
                break;
              }
              output2.push(value2);
            }
            return output2;
          })();
        } else {
          return [...self2];
        }
      }
    },
    flattened: {
      get() {
        return self2.flat(Infinity);
      }
    }
  });
  return self2;
}
async function asyncIteratorToList(asyncIterator) {
  const results = [];
  for await (const each3 of asyncIterator) {
    results.push(each3);
  }
  return results;
}
var zip = function* (...iterables) {
  iterables = iterables.map((each3) => iter(each3));
  while (true) {
    const nexts = iterables.map((each3) => each3.next());
    if (nexts.every((each3) => each3.done)) {
      break;
    }
    yield nexts.map((each3) => each3.value);
  }
};
var enumerate = function* (...iterables) {
  let index = 0;
  for (const each3 of zip(...iterables)) {
    yield [index++, ...each3];
  }
};
var ERROR_WHILE_MAPPING_MESSAGE = "Threw while mapping.";
function concurrentlyTransform({ iterator, transformFunction, poolLimit = null, awaitAll = false }) {
  poolLimit = poolLimit || concurrentlyTransform.defaultPoolLimit;
  const res = new TransformStream({
    async transform(p, controller) {
      try {
        const s = await p;
        controller.enqueue(s);
      } catch (e) {
        if (e instanceof AggregateError && e.message == ERROR_WHILE_MAPPING_MESSAGE) {
          controller.error(e);
        }
      }
    }
  });
  const mainPromise = (async () => {
    const writer = res.writable.getWriter();
    const executing = [];
    try {
      let index = 0;
      for await (const item of iterator) {
        const p = Promise.resolve().then(() => transformFunction(item, index));
        index++;
        writer.write(p);
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        if (executing.length >= poolLimit) {
          await Promise.race(executing);
        }
      }
      await Promise.all(executing);
      writer.close();
    } catch {
      const errors = [];
      for (const result2 of await Promise.allSettled(executing)) {
        if (result2.status == "rejected") {
          errors.push(result2.reason);
        }
      }
      writer.write(Promise.reject(
        new AggregateError(errors, ERROR_WHILE_MAPPING_MESSAGE)
      )).catch(() => {
      });
    }
  })();
  const asyncIterator = res.readable[Symbol.asyncIterator]();
  if (!awaitAll) {
    return asyncIterator;
  } else {
    return mainPromise.then(() => asyncIteratorToList(asyncIterator));
  }
}
concurrentlyTransform.defaultPoolLimit = 40;

// esbuild_serve:http-import:https://deno.land/x/good@1.4.4.2/string.js
var indent = ({ string: string2, by = "    ", noLead = false }) => (noLead ? "" : by) + string2.replace(/\n/g, "\n" + by);
var toString = (value) => {
  if (typeof value == "symbol") {
    return toRepresentation(value);
  } else if (!(value instanceof Object)) {
    return value != null ? value.toString() : `${value}`;
  } else {
    return toRepresentation(value);
  }
};
var reprSymbol = Symbol.for("representation");
var denoInspectSymbol = Symbol.for("Deno.customInspect");
var toRepresentation = (item) => {
  const alreadySeen = /* @__PURE__ */ new Set();
  const recursionWrapper = (item2) => {
    if (item2 instanceof Object) {
      if (alreadySeen.has(item2)) {
        return `[Self Reference]`;
      } else {
        alreadySeen.add(item2);
      }
    }
    let output2;
    if (item2 === void 0) {
      output2 = "undefined";
    } else if (item2 === null) {
      output2 = "null";
    } else if (typeof item2 == "string") {
      output2 = JSON.stringify(item2);
    } else if (typeof item2 == "symbol") {
      if (!item2.description) {
        output2 = "Symbol()";
      } else {
        const globalVersion = Symbol.for(item2.description);
        if (globalVersion == item2) {
          output2 = `Symbol.for(${JSON.stringify(item2.description)})`;
        } else {
          output2 = `Symbol(${JSON.stringify(item2.description)})`;
        }
      }
    } else if (item2 instanceof Date) {
      output2 = `new Date(${item2.getTime()})`;
    } else if (item2 instanceof Array) {
      output2 = `[${item2.map((each3) => recursionWrapper(each3)).join(",")}]`;
    } else if (item2 instanceof Set) {
      output2 = `new Set(${[...item2].map((each3) => recursionWrapper(each3)).join(",")})`;
    } else if (item2 instanceof Object && item2.constructor == Object) {
      output2 = pureObjectRepr(item2);
    } else if (item2 instanceof Map) {
      let string2 = "new Map(";
      for (const [key, value] of item2.entries()) {
        const stringKey = recursionWrapper(key);
        const stringValue = recursionWrapper(value);
        if (!stringKey.match(/\n/g)) {
          string2 += `
  [${stringKey}, ${indent({ string: stringValue, by: "  ", noLead: true })}],`;
        } else {
          string2 += `
  [${indent({ string: stringKey, by: "  ", noLead: true })},
  ${indent({ string: stringValue, by: "    ", noLead: true })}],`;
        }
      }
      string2 += "\n)";
      output2 = string2;
    } else {
      if (item2[reprSymbol] instanceof Function) {
        try {
          output2 = item2[reprSymbol]();
          return output2;
        } catch (error) {
        }
      }
      if (item2[denoInspectSymbol] instanceof Function) {
        try {
          output2 = item2[denoInspectSymbol]();
          return output2;
        } catch (error) {
        }
      }
      try {
        output2 = item2.toString();
        if (output2 !== "[object Object]") {
          return output2;
        }
      } catch (error) {
      }
      try {
        if (item2.constructor instanceof Function && item2.prototype && typeof item2.name == "string") {
          output2 = `class ${item2.name} { /*...*/ }`;
          return output2;
        }
      } catch (error) {
      }
      try {
        if (item2.constructor instanceof Function && typeof item2.constructor.name == "string") {
          output2 = `new ${item2.constructor.name}(${pureObjectRepr(item2)})`;
          return output2;
        }
      } catch (error) {
      }
      return pureObjectRepr(item2);
    }
    return output2;
  };
  const pureObjectRepr = (item2) => {
    let string2 = "{";
    for (const [key, value] of Object.entries(item2)) {
      const stringKey = recursionWrapper(key);
      const stringValue = recursionWrapper(value);
      string2 += `
  ${stringKey}: ${indent({ string: stringValue, by: "  ", noLead: true })},`;
    }
    string2 += "\n}";
    return string2;
  };
  return recursionWrapper(item);
};
function extractFirst({ pattern, from }) {
  pattern = !pattern.global ? pattern : new RegExp(pattern, pattern.flags.replace("g", ""));
  const match = from.match(pattern);
  return {
    get preText() {
      return !match ? "" : from.slice(0, match.index);
    },
    match,
    extraction: match && match[0],
    get postText() {
      return !match ? from : from.slice(match.index + match[0].length);
    },
    get remaining() {
      return !match ? from : from.slice(0, match.index) + from.slice(match.index + match[0].length);
    }
  };
}
var reservedCharMap = {
  "&": "\\x26",
  "!": "\\x21",
  "#": "\\x23",
  "$": "\\$",
  "%": "\\x25",
  "*": "\\*",
  "+": "\\+",
  ",": "\\x2c",
  ".": "\\.",
  ":": "\\x3a",
  ";": "\\x3b",
  "<": "\\x3c",
  "=": "\\x3d",
  ">": "\\x3e",
  "?": "\\?",
  "@": "\\x40",
  "^": "\\^",
  "`": "\\x60",
  "~": "\\x7e",
  "(": "\\(",
  ")": "\\)",
  "[": "\\[",
  "]": "\\]",
  "{": "\\{",
  "}": "\\}",
  "/": "\\/",
  "-": "\\x2d",
  "\\": "\\\\",
  "|": "\\|"
};
var RX_REGEXP_ESCAPE = new RegExp(
  `[${Object.values(reservedCharMap).join("")}]`,
  "gu"
);
function escapeRegexMatch(str2) {
  return str2.replaceAll(
    RX_REGEXP_ESCAPE,
    (m) => reservedCharMap[m]
  );
}
var regexpProxy = Symbol("regexpProxy");
var realExec = RegExp.prototype.exec;
RegExp.prototype.exec = function(...args) {
  if (this[regexpProxy]) {
    return realExec.apply(this[regexpProxy], args);
  }
  return realExec.apply(this, args);
};
var proxyRegExp;
var regexProxyOptions = Object.freeze({
  get(original, key) {
    if (typeof key == "string" && key.match(/^[igmusyv]+$/)) {
      return proxyRegExp(original, key);
    }
    if (key == regexpProxy) {
      return original;
    }
    return original[key];
  },
  set(original, key, value) {
    original[key] = value;
    return true;
  }
});
proxyRegExp = (parent, flags) => {
  const regex3 = new RegExp(parent, flags);
  const output2 = new Proxy(regex3, regexProxyOptions);
  Object.setPrototypeOf(output2, Object.getPrototypeOf(regex3));
  return output2;
};
function regexWithStripWarning(shouldStrip) {
  return (strings, ...values2) => {
    let newRegexString = "";
    for (const [string2, value] of zip(strings, values2)) {
      newRegexString += string2;
      if (value instanceof RegExp) {
        if (!shouldStrip && value.flags.replace(/g/, "").length > 0) {
          console.warn(`Warning: flags inside of regex:
    The RegExp trigging this warning is: ${value}
    When calling the regex interpolater (e.g. regex\`something\${stuff}\`)
    one of the \${} values (the one above) was a RegExp with a flag enabled
    e.g. /stuff/i  <- i = ignoreCase flag enabled
    When the /stuff/i gets interpolated, its going to loose its flags
    (thats what I'm warning you about)
    
    To disable/ignore this warning do:
        regex.stripFlags\`something\${/stuff/i}\`
    If you want to add flags to the output of regex\`something\${stuff}\` do:
        regex\`something\${stuff}\`.i   // ignoreCase
        regex\`something\${stuff}\`.ig  // ignoreCase and global
        regex\`something\${stuff}\`.gi  // functionally equivlent
`);
        }
        newRegexString += `(?:${value.source})`;
      } else if (value != null) {
        newRegexString += escapeRegexMatch(toString(value));
      }
    }
    return proxyRegExp(newRegexString, "");
  };
}
var regex = regexWithStripWarning(false);
regex.stripFlags = regexWithStripWarning(true);
function levenshteinDistanceBetween(str1, str2) {
  if (str1.length > str2.length) {
    ;
    [str1, str2] = [str2, str1];
  }
  let distances = Array.from({ length: str1.length + 1 }, (_4, i) => +i);
  for (let str2Index = 0; str2Index < str2.length; str2Index++) {
    const tempDistances = [str2Index + 1];
    for (let str1Index = 0; str1Index < str1.length; str1Index++) {
      let char1 = str1[str1Index];
      let char2 = str2[str2Index];
      if (char1 === char2) {
        tempDistances.push(distances[str1Index]);
      } else {
        tempDistances.push(1 + Math.min(distances[str1Index], distances[str1Index + 1], tempDistances[tempDistances.length - 1]));
      }
    }
    distances = tempDistances;
  }
  return distances[distances.length - 1];
}
function levenshteinDistanceOrdering({ word, otherWords }) {
  word = word.toLowerCase();
  let prioritized = [...otherWords].sort((a, b) => levenshteinDistanceBetween(word, a) - levenshteinDistanceBetween(word, b));
  return prioritized;
}
var textDecoder = new TextDecoder("utf-8");
var textEncoder = new TextEncoder("utf-8");
var utf8BytesToString = textDecoder.decode.bind(textDecoder);
var stringToUtf8Bytes = textEncoder.encode.bind(textEncoder);

// generic_tools/misc.js
var createOneHot = (object) => {
  const newObject = {};
  const oneHotToObject = /* @__PURE__ */ new Map();
  const numberOfPossibleValues = Object.keys(object).length;
  const zerosArray = [...Array(numberOfPossibleValues)].map((each3) => 0);
  for (const [index, key] of enumerate(Object.keys(object))) {
    newObject[key] = [...zerosArray];
    newObject[key][index] = 1;
    newObject[key] = new Uint8Array(newObject[key]);
    oneHotToObject.set(newObject[key], key);
  }
  return { objToOneHot: newObject, oneHotToObject: (key) => oneHotToObject.get(key) };
};
function* generateLinesFor(array) {
  console.debug(`writing file`);
  yield "[\n";
  let index = -1;
  let prevPercentString = "";
  let percentString = "  0.0";
  let sendNext;
  for (let each3 of array) {
    if (each3 instanceof Uint8Array) {
      each3 = [...each3];
    }
    index += 1;
    percentString = `${(index / array.length * 100).toFixed(1)}`.padStart(5, " ");
    if (prevPercentString != percentString) {
      prevPercentString = percentString;
      Deno.stdout.write(new TextEncoder().encode(`    writing: ${percentString}%\r`));
    }
    if (sendNext != null) {
      yield sendNext;
    }
    sendNext = JSON.stringify(each3) + ",\n";
  }
  if (sendNext != null) {
    yield sendNext.slice(0, -2) + "\n";
  }
  console.log();
  yield "]";
}

// generic_tools/random_forest.js
var _2 = await Promise.resolve().then(() => (init_lodash_4_17(), lodash_4_17_exports));

// generic_tools/cross_validation.js
var _3 = await Promise.resolve().then(() => (init_lodash_4_17(), lodash_4_17_exports));

// esbuild_serve:http-import:https://deno.land/x/good@1.4.4.2/array.js
var NamedArray = class extends Array {
  toJSON() {
    return { ...this };
  }
  toString() {
    return { ...this };
  }
  [Symbol.for("customInspect")]() {
    return { ...this };
  }
  [Symbol.for("Deno.customInspect")]() {
    return { ...this };
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return { ...this };
  }
};

// esbuild_serve:http-import:https://deno.land/x/good@1.4.4.2/csv.js
var argumentNames = [
  "input",
  "separator",
  "lineSeparator",
  "firstRowIsColumnNames",
  "columnNames",
  "skipEmptyLines",
  "commentSymbol"
];
function parseCsv({
  input: input2 = null,
  separator = ",",
  lineSeparator = /\r?\n/g,
  firstRowIsColumnNames = false,
  columnNames = null,
  skipEmptyLines = true,
  commentSymbol = null,
  returnRowsAs = null,
  ...other
}) {
  if (Object.keys(other).length > 0) {
    const keys2 = Object.keys(other);
    const spellingHelp = keys2.map(
      (each3) => `for ${JSON.stringify(each3)} maybe you meant: ${levenshteinDistanceOrdering({ word: each3, otherWords: argumentNames })[0]}`
    ).join("\n        ");
    throw Error(`
            When calling parseCsv() some unrecognized arguments were given
            so I'm guessing you may have misspelled something:
                ${spellingHelp}
            
        `.replace(/\n            /g, "\n"));
  }
  let columnNamesForParsing = columnNames;
  const isAComment = (line) => commentSymbol && line.startsWith(commentSymbol);
  const getCells = (eachLine, ...args) => {
    const cells = eachLine.split(separator);
    const cellsWithTypes = [];
    let skipTo = 0;
    let index = -1;
    for (let eachCell of cells) {
      index += 1;
      if (index < skipTo) {
        continue;
      }
      const stripped = eachCell.trim();
      if (stripped.length == 0) {
        cellsWithTypes.push("");
      } else {
        const firstChar = stripped[0];
        if (!(firstChar == '"' || firstChar == "[" || firstChar == "{")) {
          try {
            cellsWithTypes.push(JSON.parse(stripped));
          } catch (error) {
            cellsWithTypes.push(stripped);
          }
        } else {
          const remainingEndIndicies = [];
          let remainingIndex = index;
          while (remainingIndex <= cells.length) {
            remainingEndIndicies.unshift(remainingIndex);
            remainingIndex++;
          }
          skipTo = 0;
          for (let eachRemainingEndIndex of remainingEndIndicies) {
            try {
              cellsWithTypes.push(
                JSON.parse(
                  cells.slice(index, eachRemainingEndIndex).join(separator)
                )
              );
              skipTo = eachRemainingEndIndex;
              break;
            } catch (error) {
            }
          }
          if (skipTo != 0) {
            continue;
          } else {
            cellsWithTypes.push(eachCell);
          }
        }
      }
    }
    if (columnNamesForParsing) {
      const namedArray = new NamedArray(cellsWithTypes.length);
      for (const [eachIndex, eachName, eachValue] of enumerate(columnNames, cellsWithTypes)) {
        namedArray[eachIndex] = eachValue;
        namedArray[eachName] = eachValue;
      }
      return namedArray;
    }
    return cellsWithTypes;
  };
  const isNonEmptyLine = skipEmptyLines ? () => true : (line) => line.trim().length != 0;
  var { comments, rows } = Iterable(
    typeof input2 == "string" ? input2.split(lineSeparator) : input2
  ).map(
    (eachLine) => {
      if (typeof eachLine != "string") {
        eachLine = utf8BytesToString(eachLine);
      }
      return eachLine.replace(lineSeparator, "");
    }
  ).flat(
    1
  ).filter(
    isNonEmptyLine
  ).forkBy({
    filters: {
      comments: isAComment,
      rows: (line) => !isAComment(line)
    }
  });
  rows = rows.map(getCells);
  if (!firstRowIsColumnNames) {
    const shouldReturnArray = returnRowsAs == "array" || returnRowsAs == null && input2 instanceof Array;
    if (shouldReturnArray) {
      if (!isAsyncIterable(input2)) {
        rows = [...rows];
        rows.comments = [...comments];
        rows.columnNames = columnNames || [];
      } else {
        return new Promise(async (resolve9, reject2) => {
          try {
            const outputValue = [];
            for await (const each3 of rows) {
              outputValue.push(each3);
            }
            const outputComments = [];
            for await (const each3 of comments) {
              outputComments.push(each3);
            }
            outputValue.rows = rows;
            outputValue.comments = outputComments;
            outputValue.columnNames = columnNames || [];
          } catch (error) {
            reject2(error);
          }
        });
      }
    } else {
      rows.rows = rows;
      rows.comments = comments;
      rows.columnNames = columnNames || [];
      return rows;
    }
  } else {
    const shouldReturnArray = returnRowsAs == "array" || returnRowsAs == null && input2 instanceof Array;
    if (isAsyncIterable(input2)) {
      if (!shouldReturnArray) {
        var { iteratorForFirst, rows } = rows.forkBy({
          filters: {
            firstElement: (line, index) => index === 0,
            rows: (line, index) => index !== 0
          }
        });
        const promiseOutput = new Promise(async (resolve9, reject2) => {
          try {
            const firstValue = await next(iteratorForFirst);
            if (firstValue == Stop) {
              const output2 = [];
              output2.rows = output2;
              output2.comments = comments;
              output2.columnNames = columnNames || [];
              return resolve9(output2);
            }
            const columnNamesFromInput = firstValue.map((each3) => `${each3}`);
            const columnNamesForReturning = columnNamesFromInput || columnNames;
            columnNamesForParsing = columnNames || columnNamesFromInput;
            rows.rows = rows;
            rows.comments = comments;
            rows.columnNames = columnNamesForReturning;
            promiseOutput.columnNames.resolve(columnNamesForReturning);
            resolve9(rows);
          } catch (error) {
            promiseOutput.columnNames.reject(error);
            reject2(error);
          }
        });
        promiseOutput.rows = rows;
        promiseOutput.comments = comments;
        promiseOutput.columnNames = deferredPromise();
        Object.assign(promiseOutput, rows);
        return promiseOutput;
      } else {
        return new Promise(async (resolve9, reject2) => {
          try {
            const firstValue = await next(rows);
            const output2 = [];
            if (firstValue == Stop) {
              output2.rows = output2;
              output2.comments = comments;
              output2.columnNames = columnNames || [];
              return resolve9(output2);
            }
            const columnNamesFromInput = firstValue.map((each3) => `${each3}`);
            const columnNamesForReturning = columnNamesFromInput || columnNames;
            columnNamesForParsing = columnNames || columnNamesFromInput;
            for await (const each3 of rows) {
              output2.push(each3);
            }
            output2.rows = output2;
            output2.comments = comments;
            output2.columnNames = columnNamesForReturning;
            resolve9(rows);
          } catch (error) {
            reject2(error);
          }
        });
      }
    } else {
      var { iteratorForFirst, rows } = rows.forkBy({
        filters: {
          firstElement: (line, index) => index === 0,
          rows: (line, index) => index !== 0
        }
      });
      const firstValue = next(rows);
      if (firstValue == Stop) {
        const output2 = [];
        output2.rows = output2;
        output2.comments = comments;
        output2.columnNames = columnNames || [];
        return output2;
      }
      const columnNamesFromInput = firstValue.map((each3) => `${each3}`);
      const columnNamesForReturning = columnNamesFromInput || columnNames;
      columnNamesForParsing = columnNames || columnNamesFromInput;
      if (shouldReturnArray) {
        rows = [...rows];
      }
      rows.rows = rows;
      rows.comments = comments;
      rows.columnNames = columnNamesForReturning;
      return rows;
    }
  }
}

// esbuild_serve:http-import:https://deno.land/x/good@1.4.4.2/set.js
function intersection2(...sets) {
  const sortedSets = sets.sort((a, b) => (a.size || a.length) - (b.size || b.length));
  const smallestCopy = new Set(sortedSets.shift());
  for (const eachSet of sortedSets) {
    if (smallestCopy.size == 0) {
      break;
    } else {
      for (const eachCommonElement of smallestCopy) {
        if (!eachSet.has(eachCommonElement)) {
          smallestCopy.delete(eachCommonElement);
        }
      }
    }
  }
  return smallestCopy;
}

// esbuild_serve:http-import:https://deno.land/x/ensure/src/compare.ts
function isOutdated(minimumVersion, actualVersion) {
  const minimumVersionArr = minimumVersion.split(".");
  const actualVersionArr = actualVersion.split(".");
  versionCategoryEnumeration:
    for (let i = 0; i < minimumVersionArr.length; ++i) {
      const minimumVersionCategoryNum = parseInt(minimumVersionArr[i]);
      const actualVersionCategoryNum = parseInt(actualVersionArr[i]);
      if (minimumVersionCategoryNum > actualVersionCategoryNum) {
        return true;
      } else if (minimumVersionCategoryNum === actualVersionCategoryNum) {
        continue versionCategoryEnumeration;
      } else {
        break versionCategoryEnumeration;
      }
    }
  return false;
}

// esbuild_serve:http-import:https://deno.land/x/ensure/src/main.ts
var warn = (type, current, expected) => `Your ${type} version is ${current}, but at least version ${expected} is required. Please update to a later version of Deno. Thankies!`;
function ensure(ensureOptions) {
  const { deno: currentDeno, v8: currentV8, typescript: currentTypescript } = Deno.version;
  const {
    denoVersion: expectedDeno,
    v8Version: expectedV8,
    typescriptVersion: expectedTypescript
  } = ensureOptions;
  let atLeastOneOutdated = false;
  const ensureCategories = [
    ["Deno", currentDeno, expectedDeno],
    ["V8", currentV8, expectedV8],
    ["Typescript", currentTypescript, expectedTypescript]
  ];
  for (const [categoryName, currentVersion, expectedVersion] of ensureCategories) {
    if (!expectedVersion)
      continue;
    const isCategoryOutdated = isOutdated(expectedVersion, currentVersion);
    if (isCategoryOutdated) {
      console.info(warn(categoryName, currentVersion, expectedVersion));
      atLeastOneOutdated = true;
    }
  }
  if (atLeastOneOutdated) {
    Deno.exit(1);
  }
}

// esbuild_serve:http-import:https://deno.land/std@0.128.0/_util/os.ts
var osType = (() => {
  const { Deno: Deno2 } = globalThis;
  if (typeof Deno2?.build?.os === "string") {
    return Deno2.build.os;
  }
  const { navigator } = globalThis;
  if (navigator?.appVersion?.includes?.("Win") ?? false) {
    return "windows";
  }
  return "linux";
})();
var isWindows = osType === "windows";

// esbuild_serve:http-import:https://deno.land/std@0.128.0/path/win32.ts
var win32_exports = {};
__export(win32_exports, {
  basename: () => basename,
  delimiter: () => delimiter,
  dirname: () => dirname,
  extname: () => extname,
  format: () => format,
  fromFileUrl: () => fromFileUrl,
  isAbsolute: () => isAbsolute,
  join: () => join2,
  normalize: () => normalize,
  parse: () => parse,
  relative: () => relative,
  resolve: () => resolve,
  sep: () => sep,
  toFileUrl: () => toFileUrl,
  toNamespacedPath: () => toNamespacedPath
});

// esbuild_serve:http-import:https://deno.land/std@0.128.0/path/_constants.ts
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;
var CHAR_QUESTION_MARK = 63;

// esbuild_serve:http-import:https://deno.land/std@0.128.0/path/_util.ts
function assertPath(path4) {
  if (typeof path4 !== "string") {
    throw new TypeError(
      `Path must be a string. Received ${JSON.stringify(path4)}`
    );
  }
}
function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}
function isPathSeparator(code) {
  return isPosixPathSeparator(code) || code === CHAR_BACKWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
  return code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z || code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z;
}
function normalizeString(path4, allowAboveRoot, separator, isPathSeparator4) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code;
  for (let i = 0, len = path4.length; i <= len; ++i) {
    if (i < len)
      code = path4.charCodeAt(i);
    else if (isPathSeparator4(code))
      break;
    else
      code = CHAR_FORWARD_SLASH;
    if (isPathSeparator4(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += `${separator}..`;
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += separator + path4.slice(lastSlash + 1, i);
        else
          res = path4.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep9, pathObject) {
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir)
    return base;
  if (dir === pathObject.root)
    return dir + base;
  return dir + sep9 + base;
}
var WHITESPACE_ENCODINGS = {
  "	": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20"
};
function encodeWhitespace(string2) {
  return string2.replaceAll(/[\s]/g, (c) => {
    return WHITESPACE_ENCODINGS[c] ?? c;
  });
}

// esbuild_serve:http-import:https://deno.land/std@0.128.0/_util/assert.ts
var DenoStdInternalError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "DenoStdInternalError";
  }
};
function assert(expr, msg = "") {
  if (!expr) {
    throw new DenoStdInternalError(msg);
  }
}

// esbuild_serve:http-import:https://deno.land/std@0.128.0/path/win32.ts
var sep = "\\";
var delimiter = ";";
function resolve(...pathSegments) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1; i--) {
    let path4;
    const { Deno: Deno2 } = globalThis;
    if (i >= 0) {
      path4 = pathSegments[i];
    } else if (!resolvedDevice) {
      if (typeof Deno2?.cwd !== "function") {
        throw new TypeError("Resolved a drive-letter-less path without a CWD.");
      }
      path4 = Deno2.cwd();
    } else {
      if (typeof Deno2?.env?.get !== "function" || typeof Deno2?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path4 = Deno2.cwd();
      if (path4 === void 0 || path4.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path4 = `${resolvedDevice}\\`;
      }
    }
    assertPath(path4);
    const len = path4.length;
    if (len === 0)
      continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute9 = false;
    const code = path4.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator(code)) {
        isAbsolute9 = true;
        if (isPathSeparator(path4.charCodeAt(1))) {
          let j = 2;
          let last2 = j;
          for (; j < len; ++j) {
            if (isPathSeparator(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            const firstPart = path4.slice(last2, j);
            last2 = j;
            for (; j < len; ++j) {
              if (!isPathSeparator(path4.charCodeAt(j)))
                break;
            }
            if (j < len && j !== last2) {
              last2 = j;
              for (; j < len; ++j) {
                if (isPathSeparator(path4.charCodeAt(j)))
                  break;
              }
              if (j === len) {
                device = `\\\\${firstPart}\\${path4.slice(last2)}`;
                rootEnd = j;
              } else if (j !== last2) {
                device = `\\\\${firstPart}\\${path4.slice(last2, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code)) {
        if (path4.charCodeAt(1) === CHAR_COLON) {
          device = path4.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator(path4.charCodeAt(2))) {
              isAbsolute9 = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator(code)) {
      rootEnd = 1;
      isAbsolute9 = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path4.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute9;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0)
      break;
  }
  resolvedTail = normalizeString(
    resolvedTail,
    !resolvedAbsolute,
    "\\",
    isPathSeparator
  );
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize(path4) {
  assertPath(path4);
  const len = path4.length;
  if (len === 0)
    return ".";
  let rootEnd = 0;
  let device;
  let isAbsolute9 = false;
  const code = path4.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      isAbsolute9 = true;
      if (isPathSeparator(path4.charCodeAt(1))) {
        let j = 2;
        let last2 = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path4.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last2) {
          const firstPart = path4.slice(last2, j);
          last2 = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            last2 = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path4.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path4.slice(last2)}\\`;
            } else if (j !== last2) {
              device = `\\\\${firstPart}\\${path4.slice(last2, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path4.charCodeAt(1) === CHAR_COLON) {
        device = path4.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path4.charCodeAt(2))) {
            isAbsolute9 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return "\\";
  }
  let tail2;
  if (rootEnd < len) {
    tail2 = normalizeString(
      path4.slice(rootEnd),
      !isAbsolute9,
      "\\",
      isPathSeparator
    );
  } else {
    tail2 = "";
  }
  if (tail2.length === 0 && !isAbsolute9)
    tail2 = ".";
  if (tail2.length > 0 && isPathSeparator(path4.charCodeAt(len - 1))) {
    tail2 += "\\";
  }
  if (device === void 0) {
    if (isAbsolute9) {
      if (tail2.length > 0)
        return `\\${tail2}`;
      else
        return "\\";
    } else if (tail2.length > 0) {
      return tail2;
    } else {
      return "";
    }
  } else if (isAbsolute9) {
    if (tail2.length > 0)
      return `${device}\\${tail2}`;
    else
      return `${device}\\`;
  } else if (tail2.length > 0) {
    return device + tail2;
  } else {
    return device;
  }
}
function isAbsolute(path4) {
  assertPath(path4);
  const len = path4.length;
  if (len === 0)
    return false;
  const code = path4.charCodeAt(0);
  if (isPathSeparator(code)) {
    return true;
  } else if (isWindowsDeviceRoot(code)) {
    if (len > 2 && path4.charCodeAt(1) === CHAR_COLON) {
      if (isPathSeparator(path4.charCodeAt(2)))
        return true;
    }
  }
  return false;
}
function join2(...paths) {
  const pathsCount = paths.length;
  if (pathsCount === 0)
    return ".";
  let joined;
  let firstPart = null;
  for (let i = 0; i < pathsCount; ++i) {
    const path4 = paths[i];
    assertPath(path4);
    if (path4.length > 0) {
      if (joined === void 0)
        joined = firstPart = path4;
      else
        joined += `\\${path4}`;
    }
  }
  if (joined === void 0)
    return ".";
  let needsReplace = true;
  let slashCount = 0;
  assert(firstPart != null);
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount)))
        break;
    }
    if (slashCount >= 2)
      joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize(joined);
}
function relative(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
  const fromOrig = resolve(from);
  const toOrig = resolve(to);
  if (fromOrig === toOrig)
    return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to)
    return "";
  let fromStart = 0;
  let fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; fromEnd - 1 > fromStart; --fromEnd) {
    if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          return toOrig.slice(toStart + i + 1);
        } else if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_BACKWARD_SLASH)
      lastCommonSep = i;
  }
  if (i !== length && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1)
    lastCommonSep = 0;
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
      if (out.length === 0)
        out += "..";
      else
        out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
function toNamespacedPath(path4) {
  if (typeof path4 !== "string")
    return path4;
  if (path4.length === 0)
    return "";
  const resolvedPath = resolve(path4);
  if (resolvedPath.length >= 3) {
    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
      if (resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
        return `\\\\?\\${resolvedPath}`;
      }
    }
  }
  return path4;
}
function dirname(path4) {
  assertPath(path4);
  const len = path4.length;
  if (len === 0)
    return ".";
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code = path4.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path4.charCodeAt(1))) {
        let j = 2;
        let last2 = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path4.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last2) {
          last2 = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            last2 = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path4.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return path4;
            }
            if (j !== last2) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path4.charCodeAt(1) === CHAR_COLON) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator(path4.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return path4;
  }
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator(path4.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1)
      return ".";
    else
      end = rootEnd;
  }
  return path4.slice(0, end);
}
function basename(path4, ext = "") {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path4);
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  let i;
  if (path4.length >= 2) {
    const drive = path4.charCodeAt(0);
    if (isWindowsDeviceRoot(drive)) {
      if (path4.charCodeAt(1) === CHAR_COLON)
        start = 2;
    }
  }
  if (ext !== void 0 && ext.length > 0 && ext.length <= path4.length) {
    if (ext.length === path4.length && ext === path4)
      return "";
    let extIdx = ext.length - 1;
    let firstNonSlashEnd = -1;
    for (i = path4.length - 1; i >= start; --i) {
      const code = path4.charCodeAt(i);
      if (isPathSeparator(code)) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === ext.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end)
      end = firstNonSlashEnd;
    else if (end === -1)
      end = path4.length;
    return path4.slice(start, end);
  } else {
    for (i = path4.length - 1; i >= start; --i) {
      if (isPathSeparator(path4.charCodeAt(i))) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1)
      return "";
    return path4.slice(start, end);
  }
}
function extname(path4) {
  assertPath(path4);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path4.length >= 2 && path4.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path4.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path4.length - 1; i >= start; --i) {
    const code = path4.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path4.slice(startDot, end);
}
function format(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format("\\", pathObject);
}
function parse(path4) {
  assertPath(path4);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  const len = path4.length;
  if (len === 0)
    return ret;
  let rootEnd = 0;
  let code = path4.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = 1;
      if (isPathSeparator(path4.charCodeAt(1))) {
        let j = 2;
        let last2 = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path4.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last2) {
          last2 = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            last2 = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path4.charCodeAt(j)))
                break;
            }
            if (j === len) {
              rootEnd = j;
            } else if (j !== last2) {
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path4.charCodeAt(1) === CHAR_COLON) {
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path4.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path4;
              return ret;
            }
            rootEnd = 3;
          }
        } else {
          ret.root = ret.dir = path4;
          return ret;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    ret.root = ret.dir = path4;
    return ret;
  }
  if (rootEnd > 0)
    ret.root = path4.slice(0, rootEnd);
  let startDot = -1;
  let startPart = rootEnd;
  let end = -1;
  let matchedSlash = true;
  let i = path4.length - 1;
  let preDotState = 0;
  for (; i >= rootEnd; --i) {
    code = path4.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      ret.base = ret.name = path4.slice(startPart, end);
    }
  } else {
    ret.name = path4.slice(startPart, startDot);
    ret.base = path4.slice(startPart, end);
    ret.ext = path4.slice(startDot, end);
  }
  if (startPart > 0 && startPart !== rootEnd) {
    ret.dir = path4.slice(0, startPart - 1);
  } else
    ret.dir = ret.root;
  return ret;
}
function fromFileUrl(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  let path4 = decodeURIComponent(
    url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  ).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname != "") {
    path4 = `\\\\${url.hostname}${path4}`;
  }
  return path4;
}
function toFileUrl(path4) {
  if (!isAbsolute(path4)) {
    throw new TypeError("Must be an absolute path.");
  }
  const [, hostname, pathname] = path4.match(
    /^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/
  );
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
  if (hostname != null && hostname != "localhost") {
    url.hostname = hostname;
    if (!url.hostname) {
      throw new TypeError("Invalid hostname.");
    }
  }
  return url;
}

// esbuild_serve:http-import:https://deno.land/std@0.128.0/path/posix.ts
var posix_exports = {};
__export(posix_exports, {
  basename: () => basename2,
  delimiter: () => delimiter2,
  dirname: () => dirname2,
  extname: () => extname2,
  format: () => format2,
  fromFileUrl: () => fromFileUrl2,
  isAbsolute: () => isAbsolute2,
  join: () => join3,
  normalize: () => normalize2,
  parse: () => parse2,
  relative: () => relative2,
  resolve: () => resolve2,
  sep: () => sep2,
  toFileUrl: () => toFileUrl2,
  toNamespacedPath: () => toNamespacedPath2
});
var sep2 = "/";
var delimiter2 = ":";
function resolve2(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    let path4;
    if (i >= 0)
      path4 = pathSegments[i];
    else {
      const { Deno: Deno2 } = globalThis;
      if (typeof Deno2?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path4 = Deno2.cwd();
    }
    assertPath(path4);
    if (path4.length === 0) {
      continue;
    }
    resolvedPath = `${path4}/${resolvedPath}`;
    resolvedAbsolute = path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
  }
  resolvedPath = normalizeString(
    resolvedPath,
    !resolvedAbsolute,
    "/",
    isPosixPathSeparator
  );
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return `/${resolvedPath}`;
    else
      return "/";
  } else if (resolvedPath.length > 0)
    return resolvedPath;
  else
    return ".";
}
function normalize2(path4) {
  assertPath(path4);
  if (path4.length === 0)
    return ".";
  const isAbsolute9 = path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
  const trailingSeparator = path4.charCodeAt(path4.length - 1) === CHAR_FORWARD_SLASH;
  path4 = normalizeString(path4, !isAbsolute9, "/", isPosixPathSeparator);
  if (path4.length === 0 && !isAbsolute9)
    path4 = ".";
  if (path4.length > 0 && trailingSeparator)
    path4 += "/";
  if (isAbsolute9)
    return `/${path4}`;
  return path4;
}
function isAbsolute2(path4) {
  assertPath(path4);
  return path4.length > 0 && path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
}
function join3(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  for (let i = 0, len = paths.length; i < len; ++i) {
    const path4 = paths[i];
    assertPath(path4);
    if (path4.length > 0) {
      if (!joined)
        joined = path4;
      else
        joined += `/${path4}`;
    }
  }
  if (!joined)
    return ".";
  return normalize2(joined);
}
function relative2(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
  from = resolve2(from);
  to = resolve2(to);
  if (from === to)
    return "";
  let fromStart = 1;
  const fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_FORWARD_SLASH)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_FORWARD_SLASH)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
          return to.slice(toStart + i + 1);
        } else if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_FORWARD_SLASH)
      lastCommonSep = i;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (out.length === 0)
        out += "..";
      else
        out += "/..";
    }
  }
  if (out.length > 0)
    return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (to.charCodeAt(toStart) === CHAR_FORWARD_SLASH)
      ++toStart;
    return to.slice(toStart);
  }
}
function toNamespacedPath2(path4) {
  return path4;
}
function dirname2(path4) {
  assertPath(path4);
  if (path4.length === 0)
    return ".";
  const hasRoot = path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let end = -1;
  let matchedSlash = true;
  for (let i = path4.length - 1; i >= 1; --i) {
    if (path4.charCodeAt(i) === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1)
    return hasRoot ? "/" : ".";
  if (hasRoot && end === 1)
    return "//";
  return path4.slice(0, end);
}
function basename2(path4, ext = "") {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path4);
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  let i;
  if (ext !== void 0 && ext.length > 0 && ext.length <= path4.length) {
    if (ext.length === path4.length && ext === path4)
      return "";
    let extIdx = ext.length - 1;
    let firstNonSlashEnd = -1;
    for (i = path4.length - 1; i >= 0; --i) {
      const code = path4.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === ext.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end)
      end = firstNonSlashEnd;
    else if (end === -1)
      end = path4.length;
    return path4.slice(start, end);
  } else {
    for (i = path4.length - 1; i >= 0; --i) {
      if (path4.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1)
      return "";
    return path4.slice(start, end);
  }
}
function extname2(path4) {
  assertPath(path4);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path4.length - 1; i >= 0; --i) {
    const code = path4.charCodeAt(i);
    if (code === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path4.slice(startDot, end);
}
function format2(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format("/", pathObject);
}
function parse2(path4) {
  assertPath(path4);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  if (path4.length === 0)
    return ret;
  const isAbsolute9 = path4.charCodeAt(0) === CHAR_FORWARD_SLASH;
  let start;
  if (isAbsolute9) {
    ret.root = "/";
    start = 1;
  } else {
    start = 0;
  }
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let i = path4.length - 1;
  let preDotState = 0;
  for (; i >= start; --i) {
    const code = path4.charCodeAt(i);
    if (code === CHAR_FORWARD_SLASH) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      if (startPart === 0 && isAbsolute9) {
        ret.base = ret.name = path4.slice(1, end);
      } else {
        ret.base = ret.name = path4.slice(startPart, end);
      }
    }
  } else {
    if (startPart === 0 && isAbsolute9) {
      ret.name = path4.slice(1, startDot);
      ret.base = path4.slice(1, end);
    } else {
      ret.name = path4.slice(startPart, startDot);
      ret.base = path4.slice(startPart, end);
    }
    ret.ext = path4.slice(startDot, end);
  }
  if (startPart > 0)
    ret.dir = path4.slice(0, startPart - 1);
  else if (isAbsolute9)
    ret.dir = "/";
  return ret;
}
function fromFileUrl2(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  return decodeURIComponent(
    url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  );
}
function toFileUrl2(path4) {
  if (!isAbsolute2(path4)) {
    throw new TypeError("Must be an absolute path.");
  }
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(
    path4.replace(/%/g, "%25").replace(/\\/g, "%5C")
  );
  return url;
}

// esbuild_serve:http-import:https://deno.land/std@0.128.0/path/mod.ts
var path = isWindows ? win32_exports : posix_exports;
var {
  basename: basename3,
  delimiter: delimiter3,
  dirname: dirname3,
  extname: extname3,
  format: format3,
  fromFileUrl: fromFileUrl3,
  isAbsolute: isAbsolute3,
  join: join4,
  normalize: normalize3,
  parse: parse3,
  relative: relative3,
  resolve: resolve3,
  sep: sep3,
  toFileUrl: toFileUrl3,
  toNamespacedPath: toNamespacedPath3
} = path;

// esbuild_serve:http-import:https://deno.land/std@0.133.0/_util/os.ts
var osType2 = (() => {
  const { Deno: Deno2 } = globalThis;
  if (typeof Deno2?.build?.os === "string") {
    return Deno2.build.os;
  }
  const { navigator } = globalThis;
  if (navigator?.appVersion?.includes?.("Win") ?? false) {
    return "windows";
  }
  return "linux";
})();
var isWindows2 = osType2 === "windows";

// esbuild_serve:http-import:https://deno.land/std@0.133.0/path/win32.ts
var win32_exports2 = {};
__export(win32_exports2, {
  basename: () => basename4,
  delimiter: () => delimiter4,
  dirname: () => dirname4,
  extname: () => extname4,
  format: () => format4,
  fromFileUrl: () => fromFileUrl4,
  isAbsolute: () => isAbsolute4,
  join: () => join5,
  normalize: () => normalize4,
  parse: () => parse4,
  relative: () => relative4,
  resolve: () => resolve4,
  sep: () => sep4,
  toFileUrl: () => toFileUrl4,
  toNamespacedPath: () => toNamespacedPath4
});

// esbuild_serve:http-import:https://deno.land/std@0.133.0/path/_constants.ts
var CHAR_UPPERCASE_A2 = 65;
var CHAR_LOWERCASE_A2 = 97;
var CHAR_UPPERCASE_Z2 = 90;
var CHAR_LOWERCASE_Z2 = 122;
var CHAR_DOT2 = 46;
var CHAR_FORWARD_SLASH2 = 47;
var CHAR_BACKWARD_SLASH2 = 92;
var CHAR_COLON2 = 58;
var CHAR_QUESTION_MARK2 = 63;

// esbuild_serve:http-import:https://deno.land/std@0.133.0/path/_util.ts
function assertPath2(path4) {
  if (typeof path4 !== "string") {
    throw new TypeError(
      `Path must be a string. Received ${JSON.stringify(path4)}`
    );
  }
}
function isPosixPathSeparator2(code) {
  return code === CHAR_FORWARD_SLASH2;
}
function isPathSeparator2(code) {
  return isPosixPathSeparator2(code) || code === CHAR_BACKWARD_SLASH2;
}
function isWindowsDeviceRoot2(code) {
  return code >= CHAR_LOWERCASE_A2 && code <= CHAR_LOWERCASE_Z2 || code >= CHAR_UPPERCASE_A2 && code <= CHAR_UPPERCASE_Z2;
}
function normalizeString2(path4, allowAboveRoot, separator, isPathSeparator4) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code;
  for (let i = 0, len = path4.length; i <= len; ++i) {
    if (i < len)
      code = path4.charCodeAt(i);
    else if (isPathSeparator4(code))
      break;
    else
      code = CHAR_FORWARD_SLASH2;
    if (isPathSeparator4(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT2 || res.charCodeAt(res.length - 2) !== CHAR_DOT2) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += `${separator}..`;
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += separator + path4.slice(lastSlash + 1, i);
        else
          res = path4.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT2 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format2(sep9, pathObject) {
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir)
    return base;
  if (dir === pathObject.root)
    return dir + base;
  return dir + sep9 + base;
}
var WHITESPACE_ENCODINGS2 = {
  "	": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20"
};
function encodeWhitespace2(string2) {
  return string2.replaceAll(/[\s]/g, (c) => {
    return WHITESPACE_ENCODINGS2[c] ?? c;
  });
}

// esbuild_serve:http-import:https://deno.land/std@0.133.0/_util/assert.ts
var DenoStdInternalError2 = class extends Error {
  constructor(message) {
    super(message);
    this.name = "DenoStdInternalError";
  }
};
function assert2(expr, msg = "") {
  if (!expr) {
    throw new DenoStdInternalError2(msg);
  }
}

// esbuild_serve:http-import:https://deno.land/std@0.133.0/path/win32.ts
var sep4 = "\\";
var delimiter4 = ";";
function resolve4(...pathSegments) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1; i--) {
    let path4;
    const { Deno: Deno2 } = globalThis;
    if (i >= 0) {
      path4 = pathSegments[i];
    } else if (!resolvedDevice) {
      if (typeof Deno2?.cwd !== "function") {
        throw new TypeError("Resolved a drive-letter-less path without a CWD.");
      }
      path4 = Deno2.cwd();
    } else {
      if (typeof Deno2?.env?.get !== "function" || typeof Deno2?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path4 = Deno2.cwd();
      if (path4 === void 0 || path4.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path4 = `${resolvedDevice}\\`;
      }
    }
    assertPath2(path4);
    const len = path4.length;
    if (len === 0)
      continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute9 = false;
    const code = path4.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator2(code)) {
        isAbsolute9 = true;
        if (isPathSeparator2(path4.charCodeAt(1))) {
          let j = 2;
          let last2 = j;
          for (; j < len; ++j) {
            if (isPathSeparator2(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            const firstPart = path4.slice(last2, j);
            last2 = j;
            for (; j < len; ++j) {
              if (!isPathSeparator2(path4.charCodeAt(j)))
                break;
            }
            if (j < len && j !== last2) {
              last2 = j;
              for (; j < len; ++j) {
                if (isPathSeparator2(path4.charCodeAt(j)))
                  break;
              }
              if (j === len) {
                device = `\\\\${firstPart}\\${path4.slice(last2)}`;
                rootEnd = j;
              } else if (j !== last2) {
                device = `\\\\${firstPart}\\${path4.slice(last2, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot2(code)) {
        if (path4.charCodeAt(1) === CHAR_COLON2) {
          device = path4.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator2(path4.charCodeAt(2))) {
              isAbsolute9 = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator2(code)) {
      rootEnd = 1;
      isAbsolute9 = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path4.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute9;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0)
      break;
  }
  resolvedTail = normalizeString2(
    resolvedTail,
    !resolvedAbsolute,
    "\\",
    isPathSeparator2
  );
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize4(path4) {
  assertPath2(path4);
  const len = path4.length;
  if (len === 0)
    return ".";
  let rootEnd = 0;
  let device;
  let isAbsolute9 = false;
  const code = path4.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator2(code)) {
      isAbsolute9 = true;
      if (isPathSeparator2(path4.charCodeAt(1))) {
        let j = 2;
        let last2 = j;
        for (; j < len; ++j) {
          if (isPathSeparator2(path4.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last2) {
          const firstPart = path4.slice(last2, j);
          last2 = j;
          for (; j < len; ++j) {
            if (!isPathSeparator2(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            last2 = j;
            for (; j < len; ++j) {
              if (isPathSeparator2(path4.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path4.slice(last2)}\\`;
            } else if (j !== last2) {
              device = `\\\\${firstPart}\\${path4.slice(last2, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot2(code)) {
      if (path4.charCodeAt(1) === CHAR_COLON2) {
        device = path4.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator2(path4.charCodeAt(2))) {
            isAbsolute9 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator2(code)) {
    return "\\";
  }
  let tail2;
  if (rootEnd < len) {
    tail2 = normalizeString2(
      path4.slice(rootEnd),
      !isAbsolute9,
      "\\",
      isPathSeparator2
    );
  } else {
    tail2 = "";
  }
  if (tail2.length === 0 && !isAbsolute9)
    tail2 = ".";
  if (tail2.length > 0 && isPathSeparator2(path4.charCodeAt(len - 1))) {
    tail2 += "\\";
  }
  if (device === void 0) {
    if (isAbsolute9) {
      if (tail2.length > 0)
        return `\\${tail2}`;
      else
        return "\\";
    } else if (tail2.length > 0) {
      return tail2;
    } else {
      return "";
    }
  } else if (isAbsolute9) {
    if (tail2.length > 0)
      return `${device}\\${tail2}`;
    else
      return `${device}\\`;
  } else if (tail2.length > 0) {
    return device + tail2;
  } else {
    return device;
  }
}
function isAbsolute4(path4) {
  assertPath2(path4);
  const len = path4.length;
  if (len === 0)
    return false;
  const code = path4.charCodeAt(0);
  if (isPathSeparator2(code)) {
    return true;
  } else if (isWindowsDeviceRoot2(code)) {
    if (len > 2 && path4.charCodeAt(1) === CHAR_COLON2) {
      if (isPathSeparator2(path4.charCodeAt(2)))
        return true;
    }
  }
  return false;
}
function join5(...paths) {
  const pathsCount = paths.length;
  if (pathsCount === 0)
    return ".";
  let joined;
  let firstPart = null;
  for (let i = 0; i < pathsCount; ++i) {
    const path4 = paths[i];
    assertPath2(path4);
    if (path4.length > 0) {
      if (joined === void 0)
        joined = firstPart = path4;
      else
        joined += `\\${path4}`;
    }
  }
  if (joined === void 0)
    return ".";
  let needsReplace = true;
  let slashCount = 0;
  assert2(firstPart != null);
  if (isPathSeparator2(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator2(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator2(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator2(joined.charCodeAt(slashCount)))
        break;
    }
    if (slashCount >= 2)
      joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize4(joined);
}
function relative4(from, to) {
  assertPath2(from);
  assertPath2(to);
  if (from === to)
    return "";
  const fromOrig = resolve4(from);
  const toOrig = resolve4(to);
  if (fromOrig === toOrig)
    return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to)
    return "";
  let fromStart = 0;
  let fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH2)
      break;
  }
  for (; fromEnd - 1 > fromStart; --fromEnd) {
    if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH2)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH2)
      break;
  }
  for (; toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH2)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH2) {
          return toOrig.slice(toStart + i + 1);
        } else if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH2) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_BACKWARD_SLASH2)
      lastCommonSep = i;
  }
  if (i !== length && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1)
    lastCommonSep = 0;
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH2) {
      if (out.length === 0)
        out += "..";
      else
        out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH2)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
function toNamespacedPath4(path4) {
  if (typeof path4 !== "string")
    return path4;
  if (path4.length === 0)
    return "";
  const resolvedPath = resolve4(path4);
  if (resolvedPath.length >= 3) {
    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH2) {
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH2) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== CHAR_QUESTION_MARK2 && code !== CHAR_DOT2) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot2(resolvedPath.charCodeAt(0))) {
      if (resolvedPath.charCodeAt(1) === CHAR_COLON2 && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH2) {
        return `\\\\?\\${resolvedPath}`;
      }
    }
  }
  return path4;
}
function dirname4(path4) {
  assertPath2(path4);
  const len = path4.length;
  if (len === 0)
    return ".";
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code = path4.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator2(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator2(path4.charCodeAt(1))) {
        let j = 2;
        let last2 = j;
        for (; j < len; ++j) {
          if (isPathSeparator2(path4.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last2) {
          last2 = j;
          for (; j < len; ++j) {
            if (!isPathSeparator2(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            last2 = j;
            for (; j < len; ++j) {
              if (isPathSeparator2(path4.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return path4;
            }
            if (j !== last2) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot2(code)) {
      if (path4.charCodeAt(1) === CHAR_COLON2) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator2(path4.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator2(code)) {
    return path4;
  }
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator2(path4.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1)
      return ".";
    else
      end = rootEnd;
  }
  return path4.slice(0, end);
}
function basename4(path4, ext = "") {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath2(path4);
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  let i;
  if (path4.length >= 2) {
    const drive = path4.charCodeAt(0);
    if (isWindowsDeviceRoot2(drive)) {
      if (path4.charCodeAt(1) === CHAR_COLON2)
        start = 2;
    }
  }
  if (ext !== void 0 && ext.length > 0 && ext.length <= path4.length) {
    if (ext.length === path4.length && ext === path4)
      return "";
    let extIdx = ext.length - 1;
    let firstNonSlashEnd = -1;
    for (i = path4.length - 1; i >= start; --i) {
      const code = path4.charCodeAt(i);
      if (isPathSeparator2(code)) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === ext.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end)
      end = firstNonSlashEnd;
    else if (end === -1)
      end = path4.length;
    return path4.slice(start, end);
  } else {
    for (i = path4.length - 1; i >= start; --i) {
      if (isPathSeparator2(path4.charCodeAt(i))) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1)
      return "";
    return path4.slice(start, end);
  }
}
function extname4(path4) {
  assertPath2(path4);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path4.length >= 2 && path4.charCodeAt(1) === CHAR_COLON2 && isWindowsDeviceRoot2(path4.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path4.length - 1; i >= start; --i) {
    const code = path4.charCodeAt(i);
    if (isPathSeparator2(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT2) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path4.slice(startDot, end);
}
function format4(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format2("\\", pathObject);
}
function parse4(path4) {
  assertPath2(path4);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  const len = path4.length;
  if (len === 0)
    return ret;
  let rootEnd = 0;
  let code = path4.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator2(code)) {
      rootEnd = 1;
      if (isPathSeparator2(path4.charCodeAt(1))) {
        let j = 2;
        let last2 = j;
        for (; j < len; ++j) {
          if (isPathSeparator2(path4.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last2) {
          last2 = j;
          for (; j < len; ++j) {
            if (!isPathSeparator2(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            last2 = j;
            for (; j < len; ++j) {
              if (isPathSeparator2(path4.charCodeAt(j)))
                break;
            }
            if (j === len) {
              rootEnd = j;
            } else if (j !== last2) {
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot2(code)) {
      if (path4.charCodeAt(1) === CHAR_COLON2) {
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator2(path4.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path4;
              return ret;
            }
            rootEnd = 3;
          }
        } else {
          ret.root = ret.dir = path4;
          return ret;
        }
      }
    }
  } else if (isPathSeparator2(code)) {
    ret.root = ret.dir = path4;
    return ret;
  }
  if (rootEnd > 0)
    ret.root = path4.slice(0, rootEnd);
  let startDot = -1;
  let startPart = rootEnd;
  let end = -1;
  let matchedSlash = true;
  let i = path4.length - 1;
  let preDotState = 0;
  for (; i >= rootEnd; --i) {
    code = path4.charCodeAt(i);
    if (isPathSeparator2(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT2) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      ret.base = ret.name = path4.slice(startPart, end);
    }
  } else {
    ret.name = path4.slice(startPart, startDot);
    ret.base = path4.slice(startPart, end);
    ret.ext = path4.slice(startDot, end);
  }
  if (startPart > 0 && startPart !== rootEnd) {
    ret.dir = path4.slice(0, startPart - 1);
  } else
    ret.dir = ret.root;
  return ret;
}
function fromFileUrl4(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  let path4 = decodeURIComponent(
    url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  ).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname != "") {
    path4 = `\\\\${url.hostname}${path4}`;
  }
  return path4;
}
function toFileUrl4(path4) {
  if (!isAbsolute4(path4)) {
    throw new TypeError("Must be an absolute path.");
  }
  const [, hostname, pathname] = path4.match(
    /^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/
  );
  const url = new URL("file:///");
  url.pathname = encodeWhitespace2(pathname.replace(/%/g, "%25"));
  if (hostname != null && hostname != "localhost") {
    url.hostname = hostname;
    if (!url.hostname) {
      throw new TypeError("Invalid hostname.");
    }
  }
  return url;
}

// esbuild_serve:http-import:https://deno.land/std@0.133.0/path/posix.ts
var posix_exports2 = {};
__export(posix_exports2, {
  basename: () => basename5,
  delimiter: () => delimiter5,
  dirname: () => dirname5,
  extname: () => extname5,
  format: () => format5,
  fromFileUrl: () => fromFileUrl5,
  isAbsolute: () => isAbsolute5,
  join: () => join6,
  normalize: () => normalize5,
  parse: () => parse5,
  relative: () => relative5,
  resolve: () => resolve5,
  sep: () => sep5,
  toFileUrl: () => toFileUrl5,
  toNamespacedPath: () => toNamespacedPath5
});
var sep5 = "/";
var delimiter5 = ":";
function resolve5(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    let path4;
    if (i >= 0)
      path4 = pathSegments[i];
    else {
      const { Deno: Deno2 } = globalThis;
      if (typeof Deno2?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path4 = Deno2.cwd();
    }
    assertPath2(path4);
    if (path4.length === 0) {
      continue;
    }
    resolvedPath = `${path4}/${resolvedPath}`;
    resolvedAbsolute = path4.charCodeAt(0) === CHAR_FORWARD_SLASH2;
  }
  resolvedPath = normalizeString2(
    resolvedPath,
    !resolvedAbsolute,
    "/",
    isPosixPathSeparator2
  );
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return `/${resolvedPath}`;
    else
      return "/";
  } else if (resolvedPath.length > 0)
    return resolvedPath;
  else
    return ".";
}
function normalize5(path4) {
  assertPath2(path4);
  if (path4.length === 0)
    return ".";
  const isAbsolute9 = path4.charCodeAt(0) === CHAR_FORWARD_SLASH2;
  const trailingSeparator = path4.charCodeAt(path4.length - 1) === CHAR_FORWARD_SLASH2;
  path4 = normalizeString2(path4, !isAbsolute9, "/", isPosixPathSeparator2);
  if (path4.length === 0 && !isAbsolute9)
    path4 = ".";
  if (path4.length > 0 && trailingSeparator)
    path4 += "/";
  if (isAbsolute9)
    return `/${path4}`;
  return path4;
}
function isAbsolute5(path4) {
  assertPath2(path4);
  return path4.length > 0 && path4.charCodeAt(0) === CHAR_FORWARD_SLASH2;
}
function join6(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  for (let i = 0, len = paths.length; i < len; ++i) {
    const path4 = paths[i];
    assertPath2(path4);
    if (path4.length > 0) {
      if (!joined)
        joined = path4;
      else
        joined += `/${path4}`;
    }
  }
  if (!joined)
    return ".";
  return normalize5(joined);
}
function relative5(from, to) {
  assertPath2(from);
  assertPath2(to);
  if (from === to)
    return "";
  from = resolve5(from);
  to = resolve5(to);
  if (from === to)
    return "";
  let fromStart = 1;
  const fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_FORWARD_SLASH2)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_FORWARD_SLASH2)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH2) {
          return to.slice(toStart + i + 1);
        } else if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH2) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_FORWARD_SLASH2)
      lastCommonSep = i;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH2) {
      if (out.length === 0)
        out += "..";
      else
        out += "/..";
    }
  }
  if (out.length > 0)
    return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (to.charCodeAt(toStart) === CHAR_FORWARD_SLASH2)
      ++toStart;
    return to.slice(toStart);
  }
}
function toNamespacedPath5(path4) {
  return path4;
}
function dirname5(path4) {
  assertPath2(path4);
  if (path4.length === 0)
    return ".";
  const hasRoot = path4.charCodeAt(0) === CHAR_FORWARD_SLASH2;
  let end = -1;
  let matchedSlash = true;
  for (let i = path4.length - 1; i >= 1; --i) {
    if (path4.charCodeAt(i) === CHAR_FORWARD_SLASH2) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1)
    return hasRoot ? "/" : ".";
  if (hasRoot && end === 1)
    return "//";
  return path4.slice(0, end);
}
function basename5(path4, ext = "") {
  if (ext !== void 0 && typeof ext !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath2(path4);
  let start = 0;
  let end = -1;
  let matchedSlash = true;
  let i;
  if (ext !== void 0 && ext.length > 0 && ext.length <= path4.length) {
    if (ext.length === path4.length && ext === path4)
      return "";
    let extIdx = ext.length - 1;
    let firstNonSlashEnd = -1;
    for (i = path4.length - 1; i >= 0; --i) {
      const code = path4.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH2) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else {
        if (firstNonSlashEnd === -1) {
          matchedSlash = false;
          firstNonSlashEnd = i + 1;
        }
        if (extIdx >= 0) {
          if (code === ext.charCodeAt(extIdx)) {
            if (--extIdx === -1) {
              end = i;
            }
          } else {
            extIdx = -1;
            end = firstNonSlashEnd;
          }
        }
      }
    }
    if (start === end)
      end = firstNonSlashEnd;
    else if (end === -1)
      end = path4.length;
    return path4.slice(start, end);
  } else {
    for (i = path4.length - 1; i >= 0; --i) {
      if (path4.charCodeAt(i) === CHAR_FORWARD_SLASH2) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1)
      return "";
    return path4.slice(start, end);
  }
}
function extname5(path4) {
  assertPath2(path4);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path4.length - 1; i >= 0; --i) {
    const code = path4.charCodeAt(i);
    if (code === CHAR_FORWARD_SLASH2) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT2) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path4.slice(startDot, end);
}
function format5(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format2("/", pathObject);
}
function parse5(path4) {
  assertPath2(path4);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  if (path4.length === 0)
    return ret;
  const isAbsolute9 = path4.charCodeAt(0) === CHAR_FORWARD_SLASH2;
  let start;
  if (isAbsolute9) {
    ret.root = "/";
    start = 1;
  } else {
    start = 0;
  }
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let i = path4.length - 1;
  let preDotState = 0;
  for (; i >= start; --i) {
    const code = path4.charCodeAt(i);
    if (code === CHAR_FORWARD_SLASH2) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT2) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      if (startPart === 0 && isAbsolute9) {
        ret.base = ret.name = path4.slice(1, end);
      } else {
        ret.base = ret.name = path4.slice(startPart, end);
      }
    }
  } else {
    if (startPart === 0 && isAbsolute9) {
      ret.name = path4.slice(1, startDot);
      ret.base = path4.slice(1, end);
    } else {
      ret.name = path4.slice(startPart, startDot);
      ret.base = path4.slice(startPart, end);
    }
    ret.ext = path4.slice(startDot, end);
  }
  if (startPart > 0)
    ret.dir = path4.slice(0, startPart - 1);
  else if (isAbsolute9)
    ret.dir = "/";
  return ret;
}
function fromFileUrl5(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  return decodeURIComponent(
    url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  );
}
function toFileUrl5(path4) {
  if (!isAbsolute5(path4)) {
    throw new TypeError("Must be an absolute path.");
  }
  const url = new URL("file:///");
  url.pathname = encodeWhitespace2(
    path4.replace(/%/g, "%25").replace(/\\/g, "%5C")
  );
  return url;
}

// esbuild_serve:http-import:https://deno.land/std@0.133.0/path/mod.ts
var path2 = isWindows2 ? win32_exports2 : posix_exports2;
var {
  basename: basename6,
  delimiter: delimiter6,
  dirname: dirname6,
  extname: extname6,
  format: format6,
  fromFileUrl: fromFileUrl6,
  isAbsolute: isAbsolute6,
  join: join7,
  normalize: normalize6,
  parse: parse6,
  relative: relative6,
  resolve: resolve6,
  sep: sep6,
  toFileUrl: toFileUrl6,
  toNamespacedPath: toNamespacedPath6
} = path2;

// esbuild_serve:http-import:https://deno.land/std@0.133.0/fs/_util.ts
function isSubdir(src, dest, sep9 = sep6) {
  if (src === dest) {
    return false;
  }
  const srcArray = src.split(sep9);
  const destArray = dest.split(sep9);
  return srcArray.every((current, i) => destArray[i] === current);
}
function getFileInfoType(fileInfo) {
  return fileInfo.isFile ? "file" : fileInfo.isDirectory ? "dir" : fileInfo.isSymlink ? "symlink" : void 0;
}

// esbuild_serve:http-import:https://deno.land/std@0.133.0/fs/ensure_dir.ts
async function ensureDir(dir) {
  try {
    const fileInfo = await Deno.lstat(dir);
    if (!fileInfo.isDirectory) {
      throw new Error(
        `Ensure path exists, expected 'dir', got '${getFileInfoType(fileInfo)}'`
      );
    }
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      await Deno.mkdir(dir, { recursive: true });
      return;
    }
    throw err;
  }
}

// esbuild_serve:http-import:https://deno.land/std@0.133.0/fs/exists.ts
async function exists(filePath) {
  try {
    await Deno.lstat(filePath);
    return true;
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return false;
    }
    throw err;
  }
}
function existsSync(filePath) {
  try {
    Deno.lstatSync(filePath);
    return true;
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return false;
    }
    throw err;
  }
}

// esbuild_serve:http-import:https://deno.land/std@0.133.0/fs/move.ts
async function move(src, dest, { overwrite = false } = {}) {
  const srcStat = await Deno.stat(src);
  if (srcStat.isDirectory && isSubdir(src, dest)) {
    throw new Error(
      `Cannot move '${src}' to a subdirectory of itself, '${dest}'.`
    );
  }
  if (overwrite) {
    if (await exists(dest)) {
      await Deno.remove(dest, { recursive: true });
    }
  } else {
    if (await exists(dest)) {
      throw new Error("dest already exists.");
    }
  }
  await Deno.rename(src, dest);
  return;
}
function moveSync(src, dest, { overwrite = false } = {}) {
  const srcStat = Deno.statSync(src);
  if (srcStat.isDirectory && isSubdir(src, dest)) {
    throw new Error(
      `Cannot move '${src}' to a subdirectory of itself, '${dest}'.`
    );
  }
  if (overwrite) {
    if (existsSync(dest)) {
      Deno.removeSync(dest, { recursive: true });
    }
  } else {
    if (existsSync(dest)) {
      throw new Error("dest already exists.");
    }
  }
  Deno.renameSync(src, dest);
}

// esbuild_serve:http-import:https://deno.land/std@0.133.0/_deno_unstable.ts
function utime(...args) {
  if (typeof Deno.utime == "function") {
    return Deno.utime(...args);
  } else {
    return Promise.reject(new TypeError("Requires --unstable"));
  }
}

// esbuild_serve:http-import:https://deno.land/std@0.133.0/fs/copy.ts
async function ensureValidCopy(src, dest, options) {
  let destStat;
  try {
    destStat = await Deno.lstat(dest);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return;
    }
    throw err;
  }
  if (options.isFolder && !destStat.isDirectory) {
    throw new Error(
      `Cannot overwrite non-directory '${dest}' with directory '${src}'.`
    );
  }
  if (!options.overwrite) {
    throw new Error(`'${dest}' already exists.`);
  }
  return destStat;
}
async function copyFile(src, dest, options) {
  await ensureValidCopy(src, dest, options);
  await Deno.copyFile(src, dest);
  if (options.preserveTimestamps) {
    const statInfo = await Deno.stat(src);
    assert2(statInfo.atime instanceof Date, `statInfo.atime is unavailable`);
    assert2(statInfo.mtime instanceof Date, `statInfo.mtime is unavailable`);
    await utime(dest, statInfo.atime, statInfo.mtime);
  }
}
async function copySymLink(src, dest, options) {
  await ensureValidCopy(src, dest, options);
  const originSrcFilePath = await Deno.readLink(src);
  const type = getFileInfoType(await Deno.lstat(src));
  if (isWindows2) {
    await Deno.symlink(originSrcFilePath, dest, {
      type: type === "dir" ? "dir" : "file"
    });
  } else {
    await Deno.symlink(originSrcFilePath, dest);
  }
  if (options.preserveTimestamps) {
    const statInfo = await Deno.lstat(src);
    assert2(statInfo.atime instanceof Date, `statInfo.atime is unavailable`);
    assert2(statInfo.mtime instanceof Date, `statInfo.mtime is unavailable`);
    await utime(dest, statInfo.atime, statInfo.mtime);
  }
}
async function copyDir(src, dest, options) {
  const destStat = await ensureValidCopy(src, dest, {
    ...options,
    isFolder: true
  });
  if (!destStat) {
    await ensureDir(dest);
  }
  if (options.preserveTimestamps) {
    const srcStatInfo = await Deno.stat(src);
    assert2(srcStatInfo.atime instanceof Date, `statInfo.atime is unavailable`);
    assert2(srcStatInfo.mtime instanceof Date, `statInfo.mtime is unavailable`);
    await utime(dest, srcStatInfo.atime, srcStatInfo.mtime);
  }
  for await (const entry of Deno.readDir(src)) {
    const srcPath = join7(src, entry.name);
    const destPath = join7(dest, basename6(srcPath));
    if (entry.isSymlink) {
      await copySymLink(srcPath, destPath, options);
    } else if (entry.isDirectory) {
      await copyDir(srcPath, destPath, options);
    } else if (entry.isFile) {
      await copyFile(srcPath, destPath, options);
    }
  }
}
async function copy(src, dest, options = {}) {
  src = resolve6(src);
  dest = resolve6(dest);
  if (src === dest) {
    throw new Error("Source and destination cannot be the same.");
  }
  const srcStat = await Deno.lstat(src);
  if (srcStat.isDirectory && isSubdir(src, dest)) {
    throw new Error(
      `Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`
    );
  }
  if (srcStat.isSymlink) {
    await copySymLink(src, dest, options);
  } else if (srcStat.isDirectory) {
    await copyDir(src, dest, options);
  } else if (srcStat.isFile) {
    await copyFile(src, dest, options);
  }
}

// esbuild_serve:http-import:https://deno.land/x/good@1.1.1.2/string.js
var findAll2 = (regexPattern, sourceString) => {
  var output2 = [];
  var match;
  var regexPatternWithGlobal = regexPattern.global ? regexPattern : RegExp(regexPattern, regexPattern.flags + "g");
  while (match = regexPatternWithGlobal.exec(sourceString)) {
    output2.push(match);
    if (match[0].length == 0) {
      regexPatternWithGlobal.lastIndex += 1;
    }
  }
  return output2;
};

// esbuild_serve:http-import:https://deno.land/x/good@1.1.1.2/value.js
var typedArrayClasses2 = [
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
].filter((each3) => each3);
var copyableClasses2 = /* @__PURE__ */ new Set([RegExp, Date, URL, ...typedArrayClasses2, globalThis.ArrayBuffer, globalThis.DataView]);
var IteratorPrototype2 = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
var ArrayIterator2 = Object.getPrototypeOf([][Symbol.iterator]);
var MapIterator2 = Object.getPrototypeOf((/* @__PURE__ */ new Map())[Symbol.iterator]);
var SetIterator2 = Object.getPrototypeOf((/* @__PURE__ */ new Set())[Symbol.iterator]);
var AsyncFunction2 = class {
};
var GeneratorFunction2 = class {
};
var AsyncGeneratorFunction2 = class {
};
var SyncGenerator2 = class {
};
var AsyncGenerator2 = class {
};
try {
  AsyncFunction2 = eval("(async function(){}).constructor");
  GeneratorFunction2 = eval("(function*(){}).constructor");
  AsyncGeneratorFunction2 = eval("(async function*(){}).constructor");
  SyncGenerator2 = eval("((function*(){})()).constructor");
  AsyncGenerator2 = eval("((async function*(){})()).constructor");
} catch (error) {
}
var isPrimitive2 = (value) => !(value instanceof Object);
var isPureObject2 = (value) => value instanceof Object && Object.getPrototypeOf(value).constructor == Object;
var isPracticallyPrimitive2 = (value) => isPrimitive2(value) || value instanceof Date || value instanceof RegExp || value instanceof URL;
var isBuiltInIterator2 = (value) => IteratorPrototype2.isPrototypeOf(value);
var isGeneratorType2 = (value) => {
  if (value instanceof Object) {
    if (isBuiltInIterator2(value)) {
      return true;
    }
    const constructor = value.constructor;
    return constructor == SyncGenerator2 || constructor == AsyncGenerator2;
  }
  return false;
};
var isAsyncIterable2 = function(value) {
  return value && typeof value[Symbol.asyncIterator] === "function";
};
var isSyncIterable2 = function(value) {
  return value && typeof value[Symbol.iterator] === "function";
};
var isTechnicallyIterable2 = function(value) {
  return value instanceof Object || typeof value == "string";
};
var isSyncIterableObjectOrContainer2 = function(value) {
  return value instanceof Object && typeof value[Symbol.iterator] == "function";
};
var deepCopySymbol2 = Symbol.for("deepCopy");
var clonedFromSymbol2 = Symbol();
var getThis2 = Symbol();
Object.getPrototypeOf(function() {
})[getThis2] = function() {
  return this;
};
function deepCopyInner2(value, valueChain = [], originalToCopyMap = /* @__PURE__ */ new Map()) {
  valueChain.push(value);
  if (value == null) {
    return value;
  }
  if (!(value instanceof Object)) {
    return value;
  }
  if (originalToCopyMap.has(value)) {
    return originalToCopyMap.get(value);
  }
  if (value[deepCopySymbol2] instanceof Function) {
    const clonedValue = value[deepCopySymbol2](originalToCopyMap);
    originalToCopyMap.set(value, clonedValue);
    return clonedValue;
  }
  if (isGeneratorType2(value)) {
    throw Error(`Sadly built-in generators cannot be deep copied.
And I found a generator along this path:
${valueChain.reverse().map((each3) => `${each3},
`)}`);
  }
  let object, theThis, thisCopy;
  if (value instanceof Date) {
    object = new Date(value.getTime());
  } else if (value instanceof RegExp) {
    object = new RegExp(value);
  } else if (value instanceof URL) {
    object = new URL(value);
  } else if (value instanceof Function) {
    theThis = value[getThis2]();
    object = value.bind(theThis);
  } else if (copyableClasses2.has(value.constructor)) {
    object = new value.constructor(value);
  } else if (value instanceof Array) {
    object = [];
  } else if (value instanceof Set) {
    object = /* @__PURE__ */ new Set();
  } else if (value instanceof Map) {
    object = /* @__PURE__ */ new Map();
  }
  originalToCopyMap.set(value, object);
  if (object instanceof Function) {
    thisCopy = deepCopyInner2(theThis, valueChain, originalToCopyMap);
    object = object.bind(thisCopy);
  }
  const output2 = object;
  try {
    output2.constructor = value.constructor;
  } catch (error) {
  }
  Object.setPrototypeOf(output2, Object.getPrototypeOf(value));
  const propertyDefinitions = {};
  for (const [key, description] of Object.entries(Object.getOwnPropertyDescriptors(value))) {
    const { value: value2, get: get3, set: set4, ...options } = description;
    const getIsFunc = get3 instanceof Function;
    const setIsFunc = set4 instanceof Function;
    if (getIsFunc || setIsFunc) {
      propertyDefinitions[key] = {
        ...options,
        get: get3 ? function(...args) {
          return get3.apply(output2, args);
        } : void 0,
        set: set4 ? function(...args) {
          return set4.apply(output2, args);
        } : void 0
      };
    } else {
      if (key == "length" && output2 instanceof Array) {
        continue;
      }
      propertyDefinitions[key] = {
        ...options,
        value: deepCopyInner2(value2, valueChain, originalToCopyMap)
      };
    }
  }
  Object.defineProperties(output2, propertyDefinitions);
  return output2;
}
var deepCopy2 = (value) => deepCopyInner2(value);
var shallowSortObject2 = (obj) => {
  return Object.keys(obj).sort().reduce(
    (newObj, key) => {
      newObj[key] = obj[key];
      return newObj;
    },
    {}
  );
};
var deepSortObject2 = (obj, seen = /* @__PURE__ */ new Map()) => {
  if (!(obj instanceof Object)) {
    return obj;
  } else if (seen.has(obj)) {
    return seen.get(obj);
  } else {
    if (obj instanceof Array) {
      const sortedChildren = [];
      seen.set(obj, sortedChildren);
      for (const each3 of obj) {
        sortedChildren.push(deepSortObject2(each3, seen));
      }
      return sortedChildren;
    } else {
      const sorted = {};
      seen.set(obj, sorted);
      for (const eachKey of Object.keys(obj).sort()) {
        sorted[eachKey] = deepSortObject2(obj[eachKey], seen);
      }
      return sorted;
    }
  }
};
var stableStringify2 = (value, ...args) => {
  return JSON.stringify(deepSortObject2(value), ...args);
};
var allKeys2 = function(obj) {
  let keys2 = [];
  if (obj == null) {
    return [];
  }
  if (!(obj instanceof Object)) {
    obj = Object.getPrototypeOf(obj);
  }
  while (obj) {
    keys2 = keys2.concat(Reflect.ownKeys(obj));
    obj = Object.getPrototypeOf(obj);
  }
  return keys2;
};
var ownKeyDescriptions2 = Object.getOwnPropertyDescriptors;
var allKeyDescriptions2 = function(value, options = { includingBuiltin: false }) {
  var { includingBuiltin } = { ...options };
  let descriptions = [];
  if (value == null) {
    return {};
  }
  if (!(value instanceof Object)) {
    value = Object.getPrototypeOf(value);
  }
  const rootPrototype = Object.getPrototypeOf({});
  let prevObj;
  while (value && value != prevObj) {
    if (!includingBuiltin && value == rootPrototype) {
      break;
    }
    descriptions = descriptions.concat(Object.entries(Object.getOwnPropertyDescriptors(value)));
    prevObj = value;
    value = Object.getPrototypeOf(value);
  }
  descriptions.reverse();
  return Object.fromEntries(descriptions);
};

// esbuild_serve:http-import:https://deno.land/x/good@1.1.1.2/iterable.js
var Stop2 = Symbol("iterationStop");
async function asyncIteratorToList2(asyncIterator) {
  const results = [];
  for await (const each3 of asyncIterator) {
    results.push(each3);
  }
  return results;
}
var ERROR_WHILE_MAPPING_MESSAGE2 = "Threw while mapping.";
function concurrentlyTransform2({ iterator, transformFunction, poolLimit = null, awaitAll = false }) {
  poolLimit = poolLimit || concurrentlyTransform2.defaultPoolLimit;
  const res = new TransformStream({
    async transform(p, controller) {
      try {
        const s = await p;
        controller.enqueue(s);
      } catch (e) {
        if (e instanceof AggregateError && e.message == ERROR_WHILE_MAPPING_MESSAGE2) {
          controller.error(e);
        }
      }
    }
  });
  const mainPromise = (async () => {
    const writer = res.writable.getWriter();
    const executing = [];
    try {
      let index = 0;
      for await (const item of iterator) {
        const p = Promise.resolve().then(() => transformFunction(item, index));
        index++;
        writer.write(p);
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        if (executing.length >= poolLimit) {
          await Promise.race(executing);
        }
      }
      await Promise.all(executing);
      writer.close();
    } catch {
      const errors = [];
      for (const result2 of await Promise.allSettled(executing)) {
        if (result2.status == "rejected") {
          errors.push(result2.reason);
        }
      }
      writer.write(Promise.reject(
        new AggregateError(errors, ERROR_WHILE_MAPPING_MESSAGE2)
      )).catch(() => {
      });
    }
  })();
  const asyncIterator = res.readable[Symbol.asyncIterator]();
  if (!awaitAll) {
    return asyncIterator;
  } else {
    return mainPromise.then(() => asyncIteratorToList2(asyncIterator));
  }
}
concurrentlyTransform2.defaultPoolLimit = 40;

// esbuild_serve:http-import:https://deno.land/std@0.191.0/_util/os.ts
var osType3 = (() => {
  const { Deno: Deno2 } = globalThis;
  if (typeof Deno2?.build?.os === "string") {
    return Deno2.build.os;
  }
  const { navigator } = globalThis;
  if (navigator?.appVersion?.includes?.("Win")) {
    return "windows";
  }
  return "linux";
})();
var isWindows3 = osType3 === "windows";

// esbuild_serve:http-import:https://deno.land/std@0.191.0/path/win32.ts
var win32_exports3 = {};
__export(win32_exports3, {
  basename: () => basename7,
  delimiter: () => delimiter7,
  dirname: () => dirname7,
  extname: () => extname7,
  format: () => format7,
  fromFileUrl: () => fromFileUrl7,
  isAbsolute: () => isAbsolute7,
  join: () => join8,
  normalize: () => normalize7,
  parse: () => parse7,
  relative: () => relative7,
  resolve: () => resolve7,
  sep: () => sep7,
  toFileUrl: () => toFileUrl7,
  toNamespacedPath: () => toNamespacedPath7
});

// esbuild_serve:http-import:https://deno.land/std@0.191.0/path/_constants.ts
var CHAR_UPPERCASE_A3 = 65;
var CHAR_LOWERCASE_A3 = 97;
var CHAR_UPPERCASE_Z3 = 90;
var CHAR_LOWERCASE_Z3 = 122;
var CHAR_DOT3 = 46;
var CHAR_FORWARD_SLASH3 = 47;
var CHAR_BACKWARD_SLASH3 = 92;
var CHAR_COLON3 = 58;
var CHAR_QUESTION_MARK3 = 63;

// esbuild_serve:http-import:https://deno.land/std@0.191.0/path/_util.ts
function assertPath3(path4) {
  if (typeof path4 !== "string") {
    throw new TypeError(
      `Path must be a string. Received ${JSON.stringify(path4)}`
    );
  }
}
function isPosixPathSeparator3(code) {
  return code === CHAR_FORWARD_SLASH3;
}
function isPathSeparator3(code) {
  return isPosixPathSeparator3(code) || code === CHAR_BACKWARD_SLASH3;
}
function isWindowsDeviceRoot3(code) {
  return code >= CHAR_LOWERCASE_A3 && code <= CHAR_LOWERCASE_Z3 || code >= CHAR_UPPERCASE_A3 && code <= CHAR_UPPERCASE_Z3;
}
function normalizeString3(path4, allowAboveRoot, separator, isPathSeparator4) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code;
  for (let i = 0, len = path4.length; i <= len; ++i) {
    if (i < len)
      code = path4.charCodeAt(i);
    else if (isPathSeparator4(code))
      break;
    else
      code = CHAR_FORWARD_SLASH3;
    if (isPathSeparator4(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT3 || res.charCodeAt(res.length - 2) !== CHAR_DOT3) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += `${separator}..`;
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += separator + path4.slice(lastSlash + 1, i);
        else
          res = path4.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT3 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format3(sep9, pathObject) {
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir)
    return base;
  if (base === sep9)
    return dir;
  if (dir === pathObject.root)
    return dir + base;
  return dir + sep9 + base;
}
var WHITESPACE_ENCODINGS3 = {
  "	": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20"
};
function encodeWhitespace3(string2) {
  return string2.replaceAll(/[\s]/g, (c) => {
    return WHITESPACE_ENCODINGS3[c] ?? c;
  });
}
function lastPathSegment(path4, isSep, start = 0) {
  let matchedNonSeparator = false;
  let end = path4.length;
  for (let i = path4.length - 1; i >= start; --i) {
    if (isSep(path4.charCodeAt(i))) {
      if (matchedNonSeparator) {
        start = i + 1;
        break;
      }
    } else if (!matchedNonSeparator) {
      matchedNonSeparator = true;
      end = i + 1;
    }
  }
  return path4.slice(start, end);
}
function stripTrailingSeparators(segment, isSep) {
  if (segment.length <= 1) {
    return segment;
  }
  let end = segment.length;
  for (let i = segment.length - 1; i > 0; i--) {
    if (isSep(segment.charCodeAt(i))) {
      end = i;
    } else {
      break;
    }
  }
  return segment.slice(0, end);
}
function stripSuffix(name, suffix) {
  if (suffix.length >= name.length) {
    return name;
  }
  const lenDiff = name.length - suffix.length;
  for (let i = suffix.length - 1; i >= 0; --i) {
    if (name.charCodeAt(lenDiff + i) !== suffix.charCodeAt(i)) {
      return name;
    }
  }
  return name.slice(0, -suffix.length);
}

// esbuild_serve:http-import:https://deno.land/std@0.191.0/_util/asserts.ts
var DenoStdInternalError3 = class extends Error {
  constructor(message) {
    super(message);
    this.name = "DenoStdInternalError";
  }
};
function assert3(expr, msg = "") {
  if (!expr) {
    throw new DenoStdInternalError3(msg);
  }
}

// esbuild_serve:http-import:https://deno.land/std@0.191.0/path/win32.ts
var sep7 = "\\";
var delimiter7 = ";";
function resolve7(...pathSegments) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1; i--) {
    let path4;
    const { Deno: Deno2 } = globalThis;
    if (i >= 0) {
      path4 = pathSegments[i];
    } else if (!resolvedDevice) {
      if (typeof Deno2?.cwd !== "function") {
        throw new TypeError("Resolved a drive-letter-less path without a CWD.");
      }
      path4 = Deno2.cwd();
    } else {
      if (typeof Deno2?.env?.get !== "function" || typeof Deno2?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path4 = Deno2.cwd();
      if (path4 === void 0 || path4.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path4 = `${resolvedDevice}\\`;
      }
    }
    assertPath3(path4);
    const len = path4.length;
    if (len === 0)
      continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute9 = false;
    const code = path4.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator3(code)) {
        isAbsolute9 = true;
        if (isPathSeparator3(path4.charCodeAt(1))) {
          let j = 2;
          let last2 = j;
          for (; j < len; ++j) {
            if (isPathSeparator3(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            const firstPart = path4.slice(last2, j);
            last2 = j;
            for (; j < len; ++j) {
              if (!isPathSeparator3(path4.charCodeAt(j)))
                break;
            }
            if (j < len && j !== last2) {
              last2 = j;
              for (; j < len; ++j) {
                if (isPathSeparator3(path4.charCodeAt(j)))
                  break;
              }
              if (j === len) {
                device = `\\\\${firstPart}\\${path4.slice(last2)}`;
                rootEnd = j;
              } else if (j !== last2) {
                device = `\\\\${firstPart}\\${path4.slice(last2, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot3(code)) {
        if (path4.charCodeAt(1) === CHAR_COLON3) {
          device = path4.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator3(path4.charCodeAt(2))) {
              isAbsolute9 = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator3(code)) {
      rootEnd = 1;
      isAbsolute9 = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path4.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute9;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0)
      break;
  }
  resolvedTail = normalizeString3(
    resolvedTail,
    !resolvedAbsolute,
    "\\",
    isPathSeparator3
  );
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize7(path4) {
  assertPath3(path4);
  const len = path4.length;
  if (len === 0)
    return ".";
  let rootEnd = 0;
  let device;
  let isAbsolute9 = false;
  const code = path4.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator3(code)) {
      isAbsolute9 = true;
      if (isPathSeparator3(path4.charCodeAt(1))) {
        let j = 2;
        let last2 = j;
        for (; j < len; ++j) {
          if (isPathSeparator3(path4.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last2) {
          const firstPart = path4.slice(last2, j);
          last2 = j;
          for (; j < len; ++j) {
            if (!isPathSeparator3(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            last2 = j;
            for (; j < len; ++j) {
              if (isPathSeparator3(path4.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path4.slice(last2)}\\`;
            } else if (j !== last2) {
              device = `\\\\${firstPart}\\${path4.slice(last2, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot3(code)) {
      if (path4.charCodeAt(1) === CHAR_COLON3) {
        device = path4.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator3(path4.charCodeAt(2))) {
            isAbsolute9 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator3(code)) {
    return "\\";
  }
  let tail2;
  if (rootEnd < len) {
    tail2 = normalizeString3(
      path4.slice(rootEnd),
      !isAbsolute9,
      "\\",
      isPathSeparator3
    );
  } else {
    tail2 = "";
  }
  if (tail2.length === 0 && !isAbsolute9)
    tail2 = ".";
  if (tail2.length > 0 && isPathSeparator3(path4.charCodeAt(len - 1))) {
    tail2 += "\\";
  }
  if (device === void 0) {
    if (isAbsolute9) {
      if (tail2.length > 0)
        return `\\${tail2}`;
      else
        return "\\";
    } else if (tail2.length > 0) {
      return tail2;
    } else {
      return "";
    }
  } else if (isAbsolute9) {
    if (tail2.length > 0)
      return `${device}\\${tail2}`;
    else
      return `${device}\\`;
  } else if (tail2.length > 0) {
    return device + tail2;
  } else {
    return device;
  }
}
function isAbsolute7(path4) {
  assertPath3(path4);
  const len = path4.length;
  if (len === 0)
    return false;
  const code = path4.charCodeAt(0);
  if (isPathSeparator3(code)) {
    return true;
  } else if (isWindowsDeviceRoot3(code)) {
    if (len > 2 && path4.charCodeAt(1) === CHAR_COLON3) {
      if (isPathSeparator3(path4.charCodeAt(2)))
        return true;
    }
  }
  return false;
}
function join8(...paths) {
  const pathsCount = paths.length;
  if (pathsCount === 0)
    return ".";
  let joined;
  let firstPart = null;
  for (let i = 0; i < pathsCount; ++i) {
    const path4 = paths[i];
    assertPath3(path4);
    if (path4.length > 0) {
      if (joined === void 0)
        joined = firstPart = path4;
      else
        joined += `\\${path4}`;
    }
  }
  if (joined === void 0)
    return ".";
  let needsReplace = true;
  let slashCount = 0;
  assert3(firstPart != null);
  if (isPathSeparator3(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator3(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator3(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator3(joined.charCodeAt(slashCount)))
        break;
    }
    if (slashCount >= 2)
      joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize7(joined);
}
function relative7(from, to) {
  assertPath3(from);
  assertPath3(to);
  if (from === to)
    return "";
  const fromOrig = resolve7(from);
  const toOrig = resolve7(to);
  if (fromOrig === toOrig)
    return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to)
    return "";
  let fromStart = 0;
  let fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH3)
      break;
  }
  for (; fromEnd - 1 > fromStart; --fromEnd) {
    if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH3)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH3)
      break;
  }
  for (; toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH3)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH3) {
          return toOrig.slice(toStart + i + 1);
        } else if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH3) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_BACKWARD_SLASH3)
      lastCommonSep = i;
  }
  if (i !== length && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1)
    lastCommonSep = 0;
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH3) {
      if (out.length === 0)
        out += "..";
      else
        out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH3)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
function toNamespacedPath7(path4) {
  if (typeof path4 !== "string")
    return path4;
  if (path4.length === 0)
    return "";
  const resolvedPath = resolve7(path4);
  if (resolvedPath.length >= 3) {
    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH3) {
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH3) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== CHAR_QUESTION_MARK3 && code !== CHAR_DOT3) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot3(resolvedPath.charCodeAt(0))) {
      if (resolvedPath.charCodeAt(1) === CHAR_COLON3 && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH3) {
        return `\\\\?\\${resolvedPath}`;
      }
    }
  }
  return path4;
}
function dirname7(path4) {
  assertPath3(path4);
  const len = path4.length;
  if (len === 0)
    return ".";
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code = path4.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator3(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator3(path4.charCodeAt(1))) {
        let j = 2;
        let last2 = j;
        for (; j < len; ++j) {
          if (isPathSeparator3(path4.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last2) {
          last2 = j;
          for (; j < len; ++j) {
            if (!isPathSeparator3(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            last2 = j;
            for (; j < len; ++j) {
              if (isPathSeparator3(path4.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return path4;
            }
            if (j !== last2) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot3(code)) {
      if (path4.charCodeAt(1) === CHAR_COLON3) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator3(path4.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator3(code)) {
    return path4;
  }
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator3(path4.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1)
      return ".";
    else
      end = rootEnd;
  }
  return stripTrailingSeparators(path4.slice(0, end), isPosixPathSeparator3);
}
function basename7(path4, suffix = "") {
  assertPath3(path4);
  if (path4.length === 0)
    return path4;
  if (typeof suffix !== "string") {
    throw new TypeError(
      `Suffix must be a string. Received ${JSON.stringify(suffix)}`
    );
  }
  let start = 0;
  if (path4.length >= 2) {
    const drive = path4.charCodeAt(0);
    if (isWindowsDeviceRoot3(drive)) {
      if (path4.charCodeAt(1) === CHAR_COLON3)
        start = 2;
    }
  }
  const lastSegment = lastPathSegment(path4, isPathSeparator3, start);
  const strippedSegment = stripTrailingSeparators(lastSegment, isPathSeparator3);
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function extname7(path4) {
  assertPath3(path4);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path4.length >= 2 && path4.charCodeAt(1) === CHAR_COLON3 && isWindowsDeviceRoot3(path4.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path4.length - 1; i >= start; --i) {
    const code = path4.charCodeAt(i);
    if (isPathSeparator3(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT3) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path4.slice(startDot, end);
}
function format7(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format3("\\", pathObject);
}
function parse7(path4) {
  assertPath3(path4);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  const len = path4.length;
  if (len === 0)
    return ret;
  let rootEnd = 0;
  let code = path4.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator3(code)) {
      rootEnd = 1;
      if (isPathSeparator3(path4.charCodeAt(1))) {
        let j = 2;
        let last2 = j;
        for (; j < len; ++j) {
          if (isPathSeparator3(path4.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last2) {
          last2 = j;
          for (; j < len; ++j) {
            if (!isPathSeparator3(path4.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last2) {
            last2 = j;
            for (; j < len; ++j) {
              if (isPathSeparator3(path4.charCodeAt(j)))
                break;
            }
            if (j === len) {
              rootEnd = j;
            } else if (j !== last2) {
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot3(code)) {
      if (path4.charCodeAt(1) === CHAR_COLON3) {
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator3(path4.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path4;
              ret.base = "\\";
              return ret;
            }
            rootEnd = 3;
          }
        } else {
          ret.root = ret.dir = path4;
          return ret;
        }
      }
    }
  } else if (isPathSeparator3(code)) {
    ret.root = ret.dir = path4;
    ret.base = "\\";
    return ret;
  }
  if (rootEnd > 0)
    ret.root = path4.slice(0, rootEnd);
  let startDot = -1;
  let startPart = rootEnd;
  let end = -1;
  let matchedSlash = true;
  let i = path4.length - 1;
  let preDotState = 0;
  for (; i >= rootEnd; --i) {
    code = path4.charCodeAt(i);
    if (isPathSeparator3(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT3) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      ret.base = ret.name = path4.slice(startPart, end);
    }
  } else {
    ret.name = path4.slice(startPart, startDot);
    ret.base = path4.slice(startPart, end);
    ret.ext = path4.slice(startDot, end);
  }
  ret.base = ret.base || "\\";
  if (startPart > 0 && startPart !== rootEnd) {
    ret.dir = path4.slice(0, startPart - 1);
  } else
    ret.dir = ret.root;
  return ret;
}
function fromFileUrl7(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  let path4 = decodeURIComponent(
    url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  ).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname != "") {
    path4 = `\\\\${url.hostname}${path4}`;
  }
  return path4;
}
function toFileUrl7(path4) {
  if (!isAbsolute7(path4)) {
    throw new TypeError("Must be an absolute path.");
  }
  const [, hostname, pathname] = path4.match(
    /^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/
  );
  const url = new URL("file:///");
  url.pathname = encodeWhitespace3(pathname.replace(/%/g, "%25"));
  if (hostname != null && hostname != "localhost") {
    url.hostname = hostname;
    if (!url.hostname) {
      throw new TypeError("Invalid hostname.");
    }
  }
  return url;
}

// esbuild_serve:http-import:https://deno.land/std@0.191.0/path/posix.ts
var posix_exports3 = {};
__export(posix_exports3, {
  basename: () => basename8,
  delimiter: () => delimiter8,
  dirname: () => dirname8,
  extname: () => extname8,
  format: () => format8,
  fromFileUrl: () => fromFileUrl8,
  isAbsolute: () => isAbsolute8,
  join: () => join9,
  normalize: () => normalize8,
  parse: () => parse8,
  relative: () => relative8,
  resolve: () => resolve8,
  sep: () => sep8,
  toFileUrl: () => toFileUrl8,
  toNamespacedPath: () => toNamespacedPath8
});
var sep8 = "/";
var delimiter8 = ":";
function resolve8(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    let path4;
    if (i >= 0)
      path4 = pathSegments[i];
    else {
      const { Deno: Deno2 } = globalThis;
      if (typeof Deno2?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path4 = Deno2.cwd();
    }
    assertPath3(path4);
    if (path4.length === 0) {
      continue;
    }
    resolvedPath = `${path4}/${resolvedPath}`;
    resolvedAbsolute = isPosixPathSeparator3(path4.charCodeAt(0));
  }
  resolvedPath = normalizeString3(
    resolvedPath,
    !resolvedAbsolute,
    "/",
    isPosixPathSeparator3
  );
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return `/${resolvedPath}`;
    else
      return "/";
  } else if (resolvedPath.length > 0)
    return resolvedPath;
  else
    return ".";
}
function normalize8(path4) {
  assertPath3(path4);
  if (path4.length === 0)
    return ".";
  const isAbsolute9 = isPosixPathSeparator3(path4.charCodeAt(0));
  const trailingSeparator = isPosixPathSeparator3(
    path4.charCodeAt(path4.length - 1)
  );
  path4 = normalizeString3(path4, !isAbsolute9, "/", isPosixPathSeparator3);
  if (path4.length === 0 && !isAbsolute9)
    path4 = ".";
  if (path4.length > 0 && trailingSeparator)
    path4 += "/";
  if (isAbsolute9)
    return `/${path4}`;
  return path4;
}
function isAbsolute8(path4) {
  assertPath3(path4);
  return path4.length > 0 && isPosixPathSeparator3(path4.charCodeAt(0));
}
function join9(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  for (let i = 0, len = paths.length; i < len; ++i) {
    const path4 = paths[i];
    assertPath3(path4);
    if (path4.length > 0) {
      if (!joined)
        joined = path4;
      else
        joined += `/${path4}`;
    }
  }
  if (!joined)
    return ".";
  return normalize8(joined);
}
function relative8(from, to) {
  assertPath3(from);
  assertPath3(to);
  if (from === to)
    return "";
  from = resolve8(from);
  to = resolve8(to);
  if (from === to)
    return "";
  let fromStart = 1;
  const fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (!isPosixPathSeparator3(from.charCodeAt(fromStart)))
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (!isPosixPathSeparator3(to.charCodeAt(toStart)))
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (isPosixPathSeparator3(to.charCodeAt(toStart + i))) {
          return to.slice(toStart + i + 1);
        } else if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (isPosixPathSeparator3(from.charCodeAt(fromStart + i))) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (isPosixPathSeparator3(fromCode))
      lastCommonSep = i;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || isPosixPathSeparator3(from.charCodeAt(i))) {
      if (out.length === 0)
        out += "..";
      else
        out += "/..";
    }
  }
  if (out.length > 0)
    return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (isPosixPathSeparator3(to.charCodeAt(toStart)))
      ++toStart;
    return to.slice(toStart);
  }
}
function toNamespacedPath8(path4) {
  return path4;
}
function dirname8(path4) {
  if (path4.length === 0)
    return ".";
  let end = -1;
  let matchedNonSeparator = false;
  for (let i = path4.length - 1; i >= 1; --i) {
    if (isPosixPathSeparator3(path4.charCodeAt(i))) {
      if (matchedNonSeparator) {
        end = i;
        break;
      }
    } else {
      matchedNonSeparator = true;
    }
  }
  if (end === -1) {
    return isPosixPathSeparator3(path4.charCodeAt(0)) ? "/" : ".";
  }
  return stripTrailingSeparators(
    path4.slice(0, end),
    isPosixPathSeparator3
  );
}
function basename8(path4, suffix = "") {
  assertPath3(path4);
  if (path4.length === 0)
    return path4;
  if (typeof suffix !== "string") {
    throw new TypeError(
      `Suffix must be a string. Received ${JSON.stringify(suffix)}`
    );
  }
  const lastSegment = lastPathSegment(path4, isPosixPathSeparator3);
  const strippedSegment = stripTrailingSeparators(
    lastSegment,
    isPosixPathSeparator3
  );
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function extname8(path4) {
  assertPath3(path4);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path4.length - 1; i >= 0; --i) {
    const code = path4.charCodeAt(i);
    if (isPosixPathSeparator3(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT3) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path4.slice(startDot, end);
}
function format8(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format3("/", pathObject);
}
function parse8(path4) {
  assertPath3(path4);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  if (path4.length === 0)
    return ret;
  const isAbsolute9 = isPosixPathSeparator3(path4.charCodeAt(0));
  let start;
  if (isAbsolute9) {
    ret.root = "/";
    start = 1;
  } else {
    start = 0;
  }
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let i = path4.length - 1;
  let preDotState = 0;
  for (; i >= start; --i) {
    const code = path4.charCodeAt(i);
    if (isPosixPathSeparator3(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT3) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      if (startPart === 0 && isAbsolute9) {
        ret.base = ret.name = path4.slice(1, end);
      } else {
        ret.base = ret.name = path4.slice(startPart, end);
      }
    }
    ret.base = ret.base || "/";
  } else {
    if (startPart === 0 && isAbsolute9) {
      ret.name = path4.slice(1, startDot);
      ret.base = path4.slice(1, end);
    } else {
      ret.name = path4.slice(startPart, startDot);
      ret.base = path4.slice(startPart, end);
    }
    ret.ext = path4.slice(startDot, end);
  }
  if (startPart > 0) {
    ret.dir = stripTrailingSeparators(
      path4.slice(0, startPart - 1),
      isPosixPathSeparator3
    );
  } else if (isAbsolute9)
    ret.dir = "/";
  return ret;
}
function fromFileUrl8(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  return decodeURIComponent(
    url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  );
}
function toFileUrl8(path4) {
  if (!isAbsolute8(path4)) {
    throw new TypeError("Must be an absolute path.");
  }
  const url = new URL("file:///");
  url.pathname = encodeWhitespace3(
    path4.replace(/%/g, "%25").replace(/\\/g, "%5C")
  );
  return url;
}

// esbuild_serve:http-import:https://deno.land/std@0.191.0/path/glob.ts
var path3 = isWindows3 ? win32_exports3 : posix_exports3;
var { join: join10, normalize: normalize9 } = path3;
var regExpEscapeChars = [
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
var rangeEscapeChars = ["-", "\\", "]"];
function globToRegExp(glob4, {
  extended = true,
  globstar: globstarOption = true,
  os = osType3,
  caseInsensitive = false
} = {}) {
  if (glob4 == "") {
    return /(?!)/;
  }
  const sep9 = os == "windows" ? "(?:\\\\|/)+" : "/+";
  const sepMaybe = os == "windows" ? "(?:\\\\|/)*" : "/*";
  const seps = os == "windows" ? ["\\", "/"] : ["/"];
  const globstar = os == "windows" ? "(?:[^\\\\/]*(?:\\\\|/|$)+)*" : "(?:[^/]*(?:/|$)+)*";
  const wildcard = os == "windows" ? "[^\\\\/]*" : "[^/]*";
  const escapePrefix = os == "windows" ? "`" : "\\";
  let newLength = glob4.length;
  for (; newLength > 1 && seps.includes(glob4[newLength - 1]); newLength--)
    ;
  glob4 = glob4.slice(0, newLength);
  let regExpString = "";
  for (let j = 0; j < glob4.length; ) {
    let segment = "";
    const groupStack = [];
    let inRange2 = false;
    let inEscape = false;
    let endsWithSep = false;
    let i = j;
    for (; i < glob4.length && !seps.includes(glob4[i]); i++) {
      if (inEscape) {
        inEscape = false;
        const escapeChars = inRange2 ? rangeEscapeChars : regExpEscapeChars;
        segment += escapeChars.includes(glob4[i]) ? `\\${glob4[i]}` : glob4[i];
        continue;
      }
      if (glob4[i] == escapePrefix) {
        inEscape = true;
        continue;
      }
      if (glob4[i] == "[") {
        if (!inRange2) {
          inRange2 = true;
          segment += "[";
          if (glob4[i + 1] == "!") {
            i++;
            segment += "^";
          } else if (glob4[i + 1] == "^") {
            i++;
            segment += "\\^";
          }
          continue;
        } else if (glob4[i + 1] == ":") {
          let k = i + 1;
          let value = "";
          while (glob4[k + 1] != null && glob4[k + 1] != ":") {
            value += glob4[k + 1];
            k++;
          }
          if (glob4[k + 1] == ":" && glob4[k + 2] == "]") {
            i = k + 2;
            if (value == "alnum")
              segment += "\\dA-Za-z";
            else if (value == "alpha")
              segment += "A-Za-z";
            else if (value == "ascii")
              segment += "\0-\x7F";
            else if (value == "blank")
              segment += "	 ";
            else if (value == "cntrl")
              segment += "\0-\x7F";
            else if (value == "digit")
              segment += "\\d";
            else if (value == "graph")
              segment += "!-~";
            else if (value == "lower")
              segment += "a-z";
            else if (value == "print")
              segment += " -~";
            else if (value == "punct") {
              segment += `!"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_\u2018{|}~`;
            } else if (value == "space")
              segment += "\\s\v";
            else if (value == "upper")
              segment += "A-Z";
            else if (value == "word")
              segment += "\\w";
            else if (value == "xdigit")
              segment += "\\dA-Fa-f";
            continue;
          }
        }
      }
      if (glob4[i] == "]" && inRange2) {
        inRange2 = false;
        segment += "]";
        continue;
      }
      if (inRange2) {
        if (glob4[i] == "\\") {
          segment += `\\\\`;
        } else {
          segment += glob4[i];
        }
        continue;
      }
      if (glob4[i] == ")" && groupStack.length > 0 && groupStack[groupStack.length - 1] != "BRACE") {
        segment += ")";
        const type = groupStack.pop();
        if (type == "!") {
          segment += wildcard;
        } else if (type != "@") {
          segment += type;
        }
        continue;
      }
      if (glob4[i] == "|" && groupStack.length > 0 && groupStack[groupStack.length - 1] != "BRACE") {
        segment += "|";
        continue;
      }
      if (glob4[i] == "+" && extended && glob4[i + 1] == "(") {
        i++;
        groupStack.push("+");
        segment += "(?:";
        continue;
      }
      if (glob4[i] == "@" && extended && glob4[i + 1] == "(") {
        i++;
        groupStack.push("@");
        segment += "(?:";
        continue;
      }
      if (glob4[i] == "?") {
        if (extended && glob4[i + 1] == "(") {
          i++;
          groupStack.push("?");
          segment += "(?:";
        } else {
          segment += ".";
        }
        continue;
      }
      if (glob4[i] == "!" && extended && glob4[i + 1] == "(") {
        i++;
        groupStack.push("!");
        segment += "(?!";
        continue;
      }
      if (glob4[i] == "{") {
        groupStack.push("BRACE");
        segment += "(?:";
        continue;
      }
      if (glob4[i] == "}" && groupStack[groupStack.length - 1] == "BRACE") {
        groupStack.pop();
        segment += ")";
        continue;
      }
      if (glob4[i] == "," && groupStack[groupStack.length - 1] == "BRACE") {
        segment += "|";
        continue;
      }
      if (glob4[i] == "*") {
        if (extended && glob4[i + 1] == "(") {
          i++;
          groupStack.push("*");
          segment += "(?:";
        } else {
          const prevChar = glob4[i - 1];
          let numStars = 1;
          while (glob4[i + 1] == "*") {
            i++;
            numStars++;
          }
          const nextChar = glob4[i + 1];
          if (globstarOption && numStars == 2 && [...seps, void 0].includes(prevChar) && [...seps, void 0].includes(nextChar)) {
            segment += globstar;
            endsWithSep = true;
          } else {
            segment += wildcard;
          }
        }
        continue;
      }
      segment += regExpEscapeChars.includes(glob4[i]) ? `\\${glob4[i]}` : glob4[i];
    }
    if (groupStack.length > 0 || inRange2 || inEscape) {
      segment = "";
      for (const c of glob4.slice(j, i)) {
        segment += regExpEscapeChars.includes(c) ? `\\${c}` : c;
        endsWithSep = false;
      }
    }
    regExpString += segment;
    if (!endsWithSep) {
      regExpString += i < glob4.length ? sep9 : sepMaybe;
      endsWithSep = true;
    }
    while (seps.includes(glob4[i]))
      i++;
    if (!(i > j)) {
      throw new Error("Assertion failure: i > j (potential infinite loop)");
    }
    j = i;
  }
  regExpString = `^${regExpString}$`;
  return new RegExp(regExpString, caseInsensitive ? "i" : "");
}

// esbuild_serve:http-import:https://deno.land/std@0.191.0/bytes/copy.ts
function copy2(src, dst, off = 0) {
  off = Math.max(0, Math.min(off, dst.byteLength));
  const dstBytesAvailable = dst.byteLength - off;
  if (src.byteLength > dstBytesAvailable) {
    src = src.subarray(0, dstBytesAvailable);
  }
  dst.set(src, off);
  return src.byteLength;
}

// esbuild_serve:http-import:https://deno.land/std@0.191.0/io/buf_reader.ts
var DEFAULT_BUF_SIZE = 4096;
var MIN_BUF_SIZE = 16;
var MAX_CONSECUTIVE_EMPTY_READS = 100;
var CR = "\r".charCodeAt(0);
var LF = "\n".charCodeAt(0);
var BufferFullError = class extends Error {
  constructor(partial2) {
    super("Buffer full");
    this.partial = partial2;
  }
  name = "BufferFullError";
};
var PartialReadError = class extends Error {
  name = "PartialReadError";
  partial;
  constructor() {
    super("Encountered UnexpectedEof, data only partially read");
  }
};
var BufReader = class _BufReader {
  #buf;
  #rd;
  // Reader provided by caller.
  #r = 0;
  // buf read position.
  #w = 0;
  // buf write position.
  #eof = false;
  // private lastByte: number;
  // private lastCharSize: number;
  /** return new BufReader unless r is BufReader */
  static create(r, size2 = DEFAULT_BUF_SIZE) {
    return r instanceof _BufReader ? r : new _BufReader(r, size2);
  }
  constructor(rd, size2 = DEFAULT_BUF_SIZE) {
    if (size2 < MIN_BUF_SIZE) {
      size2 = MIN_BUF_SIZE;
    }
    this.#reset(new Uint8Array(size2), rd);
  }
  /** Returns the size of the underlying buffer in bytes. */
  size() {
    return this.#buf.byteLength;
  }
  buffered() {
    return this.#w - this.#r;
  }
  // Reads a new chunk into the buffer.
  #fill = async () => {
    if (this.#r > 0) {
      this.#buf.copyWithin(0, this.#r, this.#w);
      this.#w -= this.#r;
      this.#r = 0;
    }
    if (this.#w >= this.#buf.byteLength) {
      throw Error("bufio: tried to fill full buffer");
    }
    for (let i = MAX_CONSECUTIVE_EMPTY_READS; i > 0; i--) {
      const rr = await this.#rd.read(this.#buf.subarray(this.#w));
      if (rr === null) {
        this.#eof = true;
        return;
      }
      assert3(rr >= 0, "negative read");
      this.#w += rr;
      if (rr > 0) {
        return;
      }
    }
    throw new Error(
      `No progress after ${MAX_CONSECUTIVE_EMPTY_READS} read() calls`
    );
  };
  /** Discards any buffered data, resets all state, and switches
   * the buffered reader to read from r.
   */
  reset(r) {
    this.#reset(this.#buf, r);
  }
  #reset = (buf, rd) => {
    this.#buf = buf;
    this.#rd = rd;
    this.#eof = false;
  };
  /** reads data into p.
   * It returns the number of bytes read into p.
   * The bytes are taken from at most one Read on the underlying Reader,
   * hence n may be less than len(p).
   * To read exactly len(p) bytes, use io.ReadFull(b, p).
   */
  async read(p) {
    let rr = p.byteLength;
    if (p.byteLength === 0)
      return rr;
    if (this.#r === this.#w) {
      if (p.byteLength >= this.#buf.byteLength) {
        const rr2 = await this.#rd.read(p);
        const nread = rr2 ?? 0;
        assert3(nread >= 0, "negative read");
        return rr2;
      }
      this.#r = 0;
      this.#w = 0;
      rr = await this.#rd.read(this.#buf);
      if (rr === 0 || rr === null)
        return rr;
      assert3(rr >= 0, "negative read");
      this.#w += rr;
    }
    const copied = copy2(this.#buf.subarray(this.#r, this.#w), p, 0);
    this.#r += copied;
    return copied;
  }
  /** reads exactly `p.length` bytes into `p`.
   *
   * If successful, `p` is returned.
   *
   * If the end of the underlying stream has been reached, and there are no more
   * bytes available in the buffer, `readFull()` returns `null` instead.
   *
   * An error is thrown if some bytes could be read, but not enough to fill `p`
   * entirely before the underlying stream reported an error or EOF. Any error
   * thrown will have a `partial` property that indicates the slice of the
   * buffer that has been successfully filled with data.
   *
   * Ported from https://golang.org/pkg/io/#ReadFull
   */
  async readFull(p) {
    let bytesRead = 0;
    while (bytesRead < p.length) {
      try {
        const rr = await this.read(p.subarray(bytesRead));
        if (rr === null) {
          if (bytesRead === 0) {
            return null;
          } else {
            throw new PartialReadError();
          }
        }
        bytesRead += rr;
      } catch (err) {
        if (err instanceof PartialReadError) {
          err.partial = p.subarray(0, bytesRead);
        }
        throw err;
      }
    }
    return p;
  }
  /** Returns the next byte [0, 255] or `null`. */
  async readByte() {
    while (this.#r === this.#w) {
      if (this.#eof)
        return null;
      await this.#fill();
    }
    const c = this.#buf[this.#r];
    this.#r++;
    return c;
  }
  /** readString() reads until the first occurrence of delim in the input,
   * returning a string containing the data up to and including the delimiter.
   * If ReadString encounters an error before finding a delimiter,
   * it returns the data read before the error and the error itself
   * (often `null`).
   * ReadString returns err != nil if and only if the returned data does not end
   * in delim.
   * For simple uses, a Scanner may be more convenient.
   */
  async readString(delim) {
    if (delim.length !== 1) {
      throw new Error("Delimiter should be a single character");
    }
    const buffer = await this.readSlice(delim.charCodeAt(0));
    if (buffer === null)
      return null;
    return new TextDecoder().decode(buffer);
  }
  /** `readLine()` is a low-level line-reading primitive. Most callers should
   * use `readString('\n')` instead or use a Scanner.
   *
   * `readLine()` tries to return a single line, not including the end-of-line
   * bytes. If the line was too long for the buffer then `more` is set and the
   * beginning of the line is returned. The rest of the line will be returned
   * from future calls. `more` will be false when returning the last fragment
   * of the line. The returned buffer is only valid until the next call to
   * `readLine()`.
   *
   * The text returned from ReadLine does not include the line end ("\r\n" or
   * "\n").
   *
   * When the end of the underlying stream is reached, the final bytes in the
   * stream are returned. No indication or error is given if the input ends
   * without a final line end. When there are no more trailing bytes to read,
   * `readLine()` returns `null`.
   *
   * Calling `unreadByte()` after `readLine()` will always unread the last byte
   * read (possibly a character belonging to the line end) even if that byte is
   * not part of the line returned by `readLine()`.
   */
  async readLine() {
    let line = null;
    try {
      line = await this.readSlice(LF);
    } catch (err) {
      let partial2;
      if (err instanceof PartialReadError) {
        partial2 = err.partial;
        assert3(
          partial2 instanceof Uint8Array,
          "bufio: caught error from `readSlice()` without `partial` property"
        );
      }
      if (!(err instanceof BufferFullError)) {
        throw err;
      }
      partial2 = err.partial;
      if (!this.#eof && partial2 && partial2.byteLength > 0 && partial2[partial2.byteLength - 1] === CR) {
        assert3(this.#r > 0, "bufio: tried to rewind past start of buffer");
        this.#r--;
        partial2 = partial2.subarray(0, partial2.byteLength - 1);
      }
      if (partial2) {
        return { line: partial2, more: !this.#eof };
      }
    }
    if (line === null) {
      return null;
    }
    if (line.byteLength === 0) {
      return { line, more: false };
    }
    if (line[line.byteLength - 1] == LF) {
      let drop2 = 1;
      if (line.byteLength > 1 && line[line.byteLength - 2] === CR) {
        drop2 = 2;
      }
      line = line.subarray(0, line.byteLength - drop2);
    }
    return { line, more: false };
  }
  /** `readSlice()` reads until the first occurrence of `delim` in the input,
   * returning a slice pointing at the bytes in the buffer. The bytes stop
   * being valid at the next read.
   *
   * If `readSlice()` encounters an error before finding a delimiter, or the
   * buffer fills without finding a delimiter, it throws an error with a
   * `partial` property that contains the entire buffer.
   *
   * If `readSlice()` encounters the end of the underlying stream and there are
   * any bytes left in the buffer, the rest of the buffer is returned. In other
   * words, EOF is always treated as a delimiter. Once the buffer is empty,
   * it returns `null`.
   *
   * Because the data returned from `readSlice()` will be overwritten by the
   * next I/O operation, most clients should use `readString()` instead.
   */
  async readSlice(delim) {
    let s = 0;
    let slice2;
    while (true) {
      let i = this.#buf.subarray(this.#r + s, this.#w).indexOf(delim);
      if (i >= 0) {
        i += s;
        slice2 = this.#buf.subarray(this.#r, this.#r + i + 1);
        this.#r += i + 1;
        break;
      }
      if (this.#eof) {
        if (this.#r === this.#w) {
          return null;
        }
        slice2 = this.#buf.subarray(this.#r, this.#w);
        this.#r = this.#w;
        break;
      }
      if (this.buffered() >= this.#buf.byteLength) {
        this.#r = this.#w;
        const oldbuf = this.#buf;
        const newbuf = this.#buf.slice(0);
        this.#buf = newbuf;
        throw new BufferFullError(oldbuf);
      }
      s = this.#w - this.#r;
      try {
        await this.#fill();
      } catch (err) {
        if (err instanceof PartialReadError) {
          err.partial = slice2;
        }
        throw err;
      }
    }
    return slice2;
  }
  /** `peek()` returns the next `n` bytes without advancing the reader. The
   * bytes stop being valid at the next read call.
   *
   * When the end of the underlying stream is reached, but there are unread
   * bytes left in the buffer, those bytes are returned. If there are no bytes
   * left in the buffer, it returns `null`.
   *
   * If an error is encountered before `n` bytes are available, `peek()` throws
   * an error with the `partial` property set to a slice of the buffer that
   * contains the bytes that were available before the error occurred.
   */
  async peek(n) {
    if (n < 0) {
      throw Error("negative count");
    }
    let avail = this.#w - this.#r;
    while (avail < n && avail < this.#buf.byteLength && !this.#eof) {
      try {
        await this.#fill();
      } catch (err) {
        if (err instanceof PartialReadError) {
          err.partial = this.#buf.subarray(this.#r, this.#w);
        }
        throw err;
      }
      avail = this.#w - this.#r;
    }
    if (avail === 0 && this.#eof) {
      return null;
    } else if (avail < n && this.#eof) {
      return this.#buf.subarray(this.#r, this.#r + avail);
    } else if (avail < n) {
      throw new BufferFullError(this.#buf.subarray(this.#r, this.#w));
    }
    return this.#buf.subarray(this.#r, this.#r + n);
  }
};

// esbuild_serve:http-import:https://deno.land/std@0.191.0/bytes/concat.ts
function concat2(...buf) {
  let length = 0;
  for (const b of buf) {
    length += b.length;
  }
  const output2 = new Uint8Array(length);
  let index = 0;
  for (const b of buf) {
    output2.set(b, index);
    index += b.length;
  }
  return output2;
}

// esbuild_serve:http-import:https://deno.land/std@0.191.0/io/read_lines.ts
async function* readLines(reader, decoderOpts) {
  const bufReader = new BufReader(reader);
  let chunks = [];
  const decoder = new TextDecoder(decoderOpts?.encoding, decoderOpts);
  while (true) {
    const res = await bufReader.readLine();
    if (!res) {
      if (chunks.length > 0) {
        yield decoder.decode(concat2(...chunks));
      }
      break;
    }
    chunks.push(res.line);
    if (!res.more) {
      yield decoder.decode(concat2(...chunks));
      chunks = [];
    }
  }
}

// esbuild_serve:http-import:https://deno.land/x/quickr@0.6.35/main/file_system.js
ensure({ denoVersion: "1.17.1" });
var cache = {};
var ItemInfo = class {
  constructor({ path: path4, _lstatData, _statData }) {
    this.path = path4;
    this._lstat = _lstatData;
    this._data = _statData;
  }
  // 
  // core data sources
  // 
  refresh() {
    this._lstat = null;
    this._data = null;
  }
  get lstat() {
    if (!this._lstat) {
      try {
        this._lstat = Deno.lstatSync(this.path);
      } catch (error) {
        this._lstat = { doesntExist: true };
      }
    }
    return this._lstat;
  }
  get stat() {
    if (!this._stat) {
      const lstat = this.lstat;
      if (!lstat.isSymlink) {
        this._stat = {
          isBrokenLink: false,
          isLoopOfLinks: false
        };
      } else {
        try {
          this._stat = Deno.statSync(this.path);
        } catch (error) {
          this._stat = {};
          if (error.message.match(/^Too many levels of symbolic links/)) {
            this._stat.isBrokenLink = true;
            this._stat.isLoopOfLinks = true;
          } else if (error.message.match(/^No such file or directory/)) {
            this._stat.isBrokenLink = true;
          } else {
            throw error;
          }
        }
      }
    }
    return this._stat;
  }
  // 
  // main attributes
  // 
  get exists() {
    const lstat = this.lstat;
    return !lstat.doesntExist;
  }
  get name() {
    return parse3(this.path).name;
  }
  get extension() {
    return parse3(this.path).ext;
  }
  get basename() {
    return this.path && basename3(this.path);
  }
  get parentPath() {
    return this.path && dirname3(this.path);
  }
  relativePathFrom(parentPath) {
    return relative3(parentPath, this.path);
  }
  get link() {
    const lstat = this.lstat;
    if (lstat.isSymlink) {
      return Deno.readLinkSync(this.path);
    } else {
      return null;
    }
  }
  get isSymlink() {
    const lstat = this.lstat;
    return !!lstat.isSymlink;
  }
  get isRelativeSymlink() {
    const lstat = this.lstat;
    const isNotSymlink = !lstat.isSymlink;
    if (isNotSymlink) {
      return false;
    }
    const relativeOrAbsolutePath = Deno.readLinkSync(this.path);
    return !isAbsolute3(relativeOrAbsolutePath);
  }
  get isAbsoluteSymlink() {
    const lstat = this.lstat;
    const isNotSymlink = !lstat.isSymlink;
    if (isNotSymlink) {
      return false;
    }
    const relativeOrAbsolutePath = Deno.readLinkSync(this.path);
    return isAbsolute3(relativeOrAbsolutePath);
  }
  get isBrokenLink() {
    const stat = this.stat;
    return !!stat.isBrokenLink;
  }
  get isLoopOfLinks() {
    const stat = this.stat;
    return !!stat.isLoopOfLinks;
  }
  get isFile() {
    const lstat = this.lstat;
    if (lstat.doesntExist) {
      return false;
    }
    if (!lstat.isSymlink) {
      return lstat.isFile;
    } else {
      return !!this.stat.isFile;
    }
  }
  get isFolder() {
    const lstat = this.lstat;
    if (lstat.doesntExist) {
      return false;
    }
    if (!lstat.isSymlink) {
      return lstat.isDirectory;
    } else {
      return !!this.stat.isDirectory;
    }
  }
  get sizeInBytes() {
    const lstat = this.lstat;
    return lstat.size;
  }
  get permissions() {
    const { mode } = this.lstat;
    return {
      owner: {
        //          rwxrwxrwx
        canRead: !!(256 & mode),
        canWrite: !!(128 & mode),
        canExecute: !!(64 & mode)
      },
      group: {
        canRead: !!(32 & mode),
        canWrite: !!(16 & mode),
        canExecute: !!(8 & mode)
      },
      others: {
        canRead: !!(4 & mode),
        canWrite: !!(2 & mode),
        canExecute: !!(1 & mode)
      }
    };
  }
  // aliases
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
};
var defaultOptionsHelper = (options) => ({
  renameExtension: options.renameExtension || FileSystem.defaultRenameExtension,
  overwrite: options.overwrite
});
var fileLockSymbol = Symbol.for("fileLock");
var locker = globalThis[fileLockSymbol] || {};
var grabPathLock = async (path4) => {
  while (locker[path4]) {
    await new Promise((resolve9) => setTimeout(resolve9, 70));
  }
  locker[path4] = true;
};
var pathStandardize = (path4) => {
  path4 = path4.path || path4;
  if (typeof path4 == "string" && path4.startsWith("file:///")) {
    path4 = fromFileUrl3(path4);
  }
  return path4;
};
var FileSystem = {
  denoExecutablePath: Deno.execPath(),
  parentPath: dirname3,
  dirname: dirname3,
  basename: basename3,
  extname: extname3,
  join: join4,
  defaultRenameExtension: ".old",
  get home() {
    if (!cache.home) {
      if (Deno.build.os != "windows") {
        cache.home = Deno.env.get("HOME");
      } else {
        cache.home = Deno.env.get("HOMEPATH");
      }
    }
    return cache.home;
  },
  get workingDirectory() {
    return Deno.cwd();
  },
  set workingDirectory(value) {
    Deno.chdir(value);
  },
  get cwd() {
    return FileSystem.workingDirectory;
  },
  set cwd(value) {
    return FileSystem.workingDirectory = value;
  },
  get pwd() {
    return FileSystem.cwd;
  },
  set pwd(value) {
    return FileSystem.cwd = value;
  },
  cd(path4) {
    Deno.chdir(path4);
  },
  changeDirectory(path4) {
    Deno.chdir(path4);
  },
  get thisFile() {
    const err = new Error();
    const filePaths = findAll2(/^.+file:\/\/(\/[\w\W]*?):/gm, err.stack).map((each3) => each3[1]);
    const firstPath = filePaths[0];
    if (firstPath) {
      try {
        if (Deno.statSync(firstPath).isFile) {
          return firstPath;
        }
      } catch (error) {
      }
    }
    return ":<interpreter>:";
  },
  get thisFolder() {
    const err = new Error();
    const filePaths = findAll2(/^.+file:\/\/(\/[\w\W]*?):/gm, err.stack).map((each3) => each3[1]);
    const firstPath = filePaths[0];
    if (firstPath) {
      try {
        if (Deno.statSync(firstPath).isFile) {
          return dirname3(firstPath);
        }
      } catch (error) {
      }
    }
    return Deno.cwd();
  },
  async read(path4) {
    path4 = pathStandardize(path4);
    await grabPathLock(path4);
    let output2;
    try {
      output2 = await Deno.readTextFile(path4);
    } catch (error) {
    }
    delete locker[path4];
    return output2;
  },
  async readBytes(path4) {
    path4 = pathStandardize(path4);
    await grabPathLock(path4);
    let output2;
    try {
      output2 = await Deno.readFile(path4);
    } catch (error) {
    }
    delete locker[path4];
    return output2;
  },
  async *readLinesIteratively(path4) {
    path4 = pathStandardize(path4);
    await grabPathLock(path4);
    try {
      const file = await Deno.open(path4);
      try {
        yield* readLines(file);
      } finally {
        Deno.close(file.rid);
      }
    } finally {
      delete locker[path4];
    }
  },
  async info(fileOrFolderPath, _cachedLstat = null) {
    fileOrFolderPath = pathStandardize(fileOrFolderPath);
    await grabPathLock(fileOrFolderPath);
    try {
      const lstat = _cachedLstat || await Deno.lstat(fileOrFolderPath).catch(() => ({ doesntExist: true }));
      let stat = {};
      if (!lstat.isSymlink) {
        stat = {
          isBrokenLink: false,
          isLoopOfLinks: false
        };
      } else {
        try {
          stat = await Deno.stat(fileOrFolderPath);
        } catch (error) {
          if (error.message.match(/^Too many levels of symbolic links/)) {
            stat.isBrokenLink = true;
            stat.isLoopOfLinks = true;
          } else if (error.message.match(/^No such file or directory/)) {
            stat.isBrokenLink = true;
          } else {
            if (!error.message.match(/^PermissionDenied:/)) {
              return { doesntExist: true, permissionDenied: true };
            }
            throw error;
          }
        }
      }
      return new ItemInfo({ path: fileOrFolderPath, _lstatData: lstat, _statData: stat });
    } finally {
      delete locker[fileOrFolderPath];
    }
  },
  async move({ item, newParentFolder, newName, force = true, overwrite = false, renameExtension = null }) {
    const oldPath = item.path || item;
    const oldName = FileSystem.basename(oldPath);
    const itemInfo = item instanceof Object || await FileSystem.info(oldPath);
    const newPath = `${newParentFolder}/${newName || oldName}`;
    if (itemInfo.isSymlink && !item.isBrokenLink) {
      const link = Deno.readLinkSync(itemInfo.path);
      if (!isAbsolute3(link)) {
        const linkTargetBeforeMove = `${FileSystem.parentPath(itemInfo.path)}/${link}`;
        await FileSystem.relativeLink({
          existingItem: linkTargetBeforeMove,
          newItem: newPath,
          force,
          overwrite,
          renameExtension
        });
        await FileSystem.remove(itemInfo);
      }
    }
    if (force) {
      FileSystem.sync.clearAPathFor(newPath, { overwrite, renameExtension });
    }
    await move(oldPath, newPath);
  },
  async remove(fileOrFolder) {
    fileOrFolder = pathStandardize(fileOrFolder);
    if (fileOrFolder instanceof Array) {
      return Promise.all(fileOrFolder.map(FileSystem.remove));
    }
    fileOrFolder = fileOrFolder.path || fileOrFolder;
    const itemInfo = await FileSystem.info(fileOrFolder);
    if (itemInfo.isFile || itemInfo.isSymlink) {
      return Deno.remove(itemInfo.path.replace(/\/+$/, ""));
    } else if (itemInfo.exists) {
      return Deno.remove(itemInfo.path.replace(/\/+$/, ""), { recursive: true });
    }
  },
  normalize: (path4) => normalize3(pathStandardize(path4)).replace(/\/$/, ""),
  isAbsolutePath: isAbsolute3,
  isRelativePath: (...args) => !isAbsolute3(...args),
  makeRelativePath: ({ from, to }) => relative3(from.path || from, to.path || to),
  makeAbsolutePath: (path4) => {
    if (!isAbsolute3(path4)) {
      return normalize3(join4(Deno.cwd(), path4));
    } else {
      return normalize3(path4);
    }
  },
  async finalTargetOf(path4, options = {}) {
    const { _parentsHaveBeenChecked, cache: cache4 } = { _parentsHaveBeenChecked: false, cache: {}, ...options };
    const originalWasItem = path4 instanceof ItemInfo;
    path4 = path4.path || path4;
    let result2 = await Deno.lstat(path4).catch(() => ({ doesntExist: true }));
    if (result2.doesntExist) {
      return null;
    }
    path4 = await FileSystem.makeHardPathTo(path4, { cache: cache4 });
    const pathChain = [];
    while (result2.isSymlink) {
      const relativeOrAbsolutePath = await Deno.readLink(path4);
      if (isAbsolute3(relativeOrAbsolutePath)) {
        path4 = relativeOrAbsolutePath;
      } else {
        path4 = `${FileSystem.parentPath(path4)}/${relativeOrAbsolutePath}`;
      }
      result2 = await Deno.lstat(path4).catch(() => ({ doesntExist: true }));
      if (result2.doesntExist) {
        return null;
      }
      path4 = await FileSystem.makeHardPathTo(path4, { cache: cache4 });
      if (pathChain.includes(path4)) {
        return null;
      }
      pathChain.push(path4);
    }
    path4 = FileSystem.normalize(path4);
    if (originalWasItem) {
      return new ItemInfo({ path: path4 });
    } else {
      return path4;
    }
  },
  async nextTargetOf(path4, options = {}) {
    const originalWasItem = path4 instanceof ItemInfo;
    const item = originalWasItem ? path4 : new ItemInfo({ path: path4 });
    const lstat = item.lstat;
    if (lstat.isSymlink) {
      const relativeOrAbsolutePath = Deno.readLinkSync(item.path);
      if (isAbsolute3(relativeOrAbsolutePath)) {
        if (originalWasItem) {
          return new ItemInfo({ path: relativeOrAbsolutePath });
        } else {
          return relativeOrAbsolutePath;
        }
      } else {
        const path5 = `${await FileSystem.makeHardPathTo(dirname3(item.path))}/${relativeOrAbsolutePath}`;
        if (originalWasItem) {
          return new ItemInfo({ path: path5 });
        } else {
          return path5;
        }
      }
    } else {
      if (originalWasItem) {
        return item;
      } else {
        return item.path;
      }
    }
  },
  async ensureIsFile(path4, options = { overwrite: false, renameExtension: null }) {
    const { overwrite, renameExtension } = defaultOptionsHelper(options);
    await FileSystem.ensureIsFolder(FileSystem.parentPath(path4), { overwrite, renameExtension });
    path4 = path4.path || path4;
    const pathInfo = await FileSystem.info(path4);
    if (pathInfo.isFile && !pathInfo.isDirectory) {
      return path4;
    } else {
      await FileSystem.write({ path: path4, data: "" });
      return path4;
    }
  },
  async ensureIsFolder(path4, options = { overwrite: false, renameExtension: null }) {
    const { overwrite, renameExtension } = defaultOptionsHelper(options);
    path4 = path4.path || path4;
    path4 = FileSystem.makeAbsolutePath(path4);
    const parentPath = dirname3(path4);
    if (parentPath == path4) {
      return;
    }
    const parent = await FileSystem.info(parentPath);
    if (!parent.isDirectory) {
      FileSystem.sync.ensureIsFolder(parentPath, { overwrite, renameExtension });
    }
    let pathInfo = FileSystem.sync.info(path4);
    if (pathInfo.exists && !pathInfo.isDirectory) {
      if (overwrite) {
        await FileSystem.remove(path4);
      } else {
        await FileSystem.moveOutOfTheWay(eachPath, { extension: renameExtension });
      }
    }
    await Deno.mkdir(path4, { recursive: true });
    return path4;
  },
  /**
   * Move/Remove everything and Ensure parent folders
   *
   * @param path
   * @param options.overwrite - if false, then things in the way will be moved instead of deleted
   * @param options.renameExtension - the string to append when renaming files to get them out of the way
   * 
   * @note
   *     very agressive: will change whatever is necessary to make sure a parent exists
   * 
   * @example
   *     await FileSystem.clearAPathFor("./something")
   */
  async clearAPathFor(path4, options = { overwrite: false, renameExtension: null }) {
    const { overwrite, renameExtension } = defaultOptionsHelper(options);
    const originalPath = path4;
    const paths = [];
    while (dirname3(path4) !== path4) {
      paths.push(path4);
      path4 = dirname3(path4);
    }
    for (const eachPath2 of paths.reverse()) {
      const info = await FileSystem.info(eachPath2);
      if (!info.exists) {
        break;
      } else if (info.isFile) {
        if (overwrite) {
          await FileSystem.remove(eachPath2);
        } else {
          await FileSystem.moveOutOfTheWay(eachPath2, { extension: renameExtension });
        }
      }
    }
    await Deno.mkdir(dirname3(originalPath), { recursive: true });
    return originalPath;
  },
  async moveOutOfTheWay(path4, options = { extension: null }) {
    const extension = options?.extension || FileSystem.defaultRenameExtension;
    const info = await FileSystem.info(path4);
    if (info.exists) {
      const newPath = path4 + extension;
      await FileSystem.moveOutOfTheWay(newPath, { extension });
      await move(path4, newPath);
    }
  },
  /**
   * All Parent Paths
   *
   * @param {String} path - path doesnt need to exist
   * @return {[String]} longest to shortest parent path
   */
  allParentPaths(path4) {
    const pathStartsWithDotSlash = path4.startsWith("./");
    path4 = FileSystem.normalize(path4);
    if (path4 === ".") {
      return [];
    }
    const dotGotRemoved = pathStartsWithDotSlash && !path4.startsWith("./");
    let previousPath = null;
    let allPaths = [];
    while (1) {
      previousPath = path4;
      path4 = FileSystem.parentPath(path4);
      if (previousPath === path4) {
        break;
      }
      allPaths.push(path4);
    }
    allPaths.reverse();
    allPaths = allPaths.filter((each3) => each3 != ".");
    if (dotGotRemoved) {
      allPaths.push(".");
    }
    return allPaths;
  },
  async walkUpUntil(fileToFind, startPath = null) {
    let here = startPath || Deno.cwd();
    if (!isAbsolute3(here)) {
      here = join4(cwd, fileToFind);
    }
    while (1) {
      let checkPath = join4(here, fileToFind);
      const pathInfo = await Deno.lstat(checkPath).catch(() => ({ doesntExist: true }));
      if (!pathInfo.doesntExist) {
        return here;
      }
      if (here == dirname3(here)) {
        return null;
      } else {
        here = dirname3(here);
      }
    }
  },
  // FIXME: make this work for folders with many options for how to handle symlinks
  async copy({ from, to, preserveTimestamps = true, force = true, overwrite = false, renameExtension = null }) {
    const existingItemDoesntExist = (await Deno.stat(from).catch(() => ({ doesntExist: true }))).doesntExist;
    if (existingItemDoesntExist) {
      throw Error(`
Tried to copy from:${from}, to:${to}
but "from" didn't seem to exist

`);
    }
    if (force) {
      FileSystem.sync.clearAPathFor(to, { overwrite, renameExtension });
    }
    const fromInfo = await FileSystem.info(from);
    return copy(from, to, { force, preserveTimestamps: true });
  },
  async relativeLink({ existingItem, newItem, force = true, overwrite = false, allowNonExistingTarget = false, renameExtension = null }) {
    const existingItemPath = (existingItem.path || existingItem).replace(/\/+$/, "");
    const newItemPath = FileSystem.normalize((newItem.path || newItem).replace(/\/+$/, ""));
    const existingItemDoesntExist = (await Deno.lstat(existingItemPath).catch(() => ({ doesntExist: true }))).doesntExist;
    if (!allowNonExistingTarget && existingItemDoesntExist) {
      throw Error(`
Tried to create a relativeLink between existingItem:${existingItemPath}, newItem:${newItemPath}
but existingItem didn't actually exist`);
    } else {
      const parentOfNewItem = FileSystem.parentPath(newItemPath);
      await FileSystem.ensureIsFolder(parentOfNewItem, { overwrite, renameExtension });
      const hardPathToNewItem = `${await FileSystem.makeHardPathTo(parentOfNewItem)}/${FileSystem.basename(newItemPath)}`;
      const hardPathToExistingItem = await FileSystem.makeHardPathTo(existingItemPath);
      const pathFromNewToExisting = relative3(hardPathToNewItem, hardPathToExistingItem).replace(/^\.\.\//, "");
      if (force) {
        FileSystem.sync.clearAPathFor(hardPathToNewItem, { overwrite, renameExtension });
      }
      return Deno.symlink(
        pathFromNewToExisting,
        hardPathToNewItem
      );
    }
  },
  async absoluteLink({ existingItem, newItem, force = true, allowNonExistingTarget = false, overwrite = false, renameExtension = null }) {
    existingItem = (existingItem.path || existingItem).replace(/\/+$/, "");
    const newItemPath = FileSystem.normalize(newItem.path || newItem).replace(/\/+$/, "");
    const existingItemDoesntExist = (await Deno.lstat(existingItem).catch(() => ({ doesntExist: true }))).doesntExist;
    if (!allowNonExistingTarget && existingItemDoesntExist) {
      throw Error(`
Tried to create a relativeLink between existingItem:${existingItem}, newItemPath:${newItemPath}
but existingItem didn't actually exist`);
    } else {
      const parentOfNewItem = FileSystem.parentPath(newItemPath);
      await FileSystem.ensureIsFolder(parentOfNewItem, { overwrite, renameExtension });
      const hardPathToNewItem = `${await FileSystem.makeHardPathTo(parentOfNewItem)}/${FileSystem.basename(newItemPath)}`;
      if (force) {
        FileSystem.sync.clearAPathFor(hardPathToNewItem, { overwrite, renameExtension });
      }
      return Deno.symlink(
        FileSystem.makeAbsolutePath(existingItem),
        newItemPath
      );
    }
  },
  pathPieces(path4) {
    path4 = path4.path || path4;
    const result2 = parse3(path4);
    const folderList = [];
    let dirname9 = result2.dir;
    while (true) {
      folderList.push(basename3(dirname9));
      if (dirname9 == dirname3(dirname9)) {
        break;
      }
      dirname9 = dirname3(dirname9);
    }
    folderList.reverse();
    return [folderList, result2.name, result2.ext];
  },
  async *iterateBasenamesIn(pathOrFileInfo) {
    const info = pathOrFileInfo instanceof ItemInfo ? pathOrFileInfo : await FileSystem.info(pathOrFileInfo);
    if (info.isFolder) {
      for await (const each3 of Deno.readDir(pathOrFileInfo.path)) {
        yield dirEntry.name;
      }
    }
  },
  listBasenamesIn(pathOrFileInfo) {
    return asyncIteratorToList2(FileSystem.iterateBasenamesIn(pathOrFileInfo));
  },
  async *iteratePathsIn(pathOrFileInfo, options = { recursively: false, shouldntInclude: null, shouldntExplore: null, searchOrder: "breadthFirstSearch", maxDepth: Infinity, dontFollowSymlinks: false, dontReturnSymlinks: false }) {
    let info;
    try {
      info = pathOrFileInfo instanceof ItemInfo ? pathOrFileInfo : await FileSystem.info(pathOrFileInfo);
    } catch (error) {
      if (!error.message.match(/^PermissionDenied:/)) {
        throw error;
      }
    }
    const path4 = info.path;
    if (!options.recursively) {
      if (info.isFolder) {
        if (!options.shouldntInclude) {
          for await (const each3 of Deno.readDir(path4)) {
            if (options.dontReturnSymlinks && each3.isSymlink) {
              continue;
            }
            yield join4(path4, each3.name);
          }
        } else {
          const shouldntInclude = options.shouldntInclude;
          for await (const each3 of Deno.readDir(path4)) {
            const eachPath2 = join4(path4, each3.name);
            if (options.dontReturnSymlinks && each3.isSymlink) {
              continue;
            }
            const shouldntIncludeThis = shouldntInclude && await shouldntInclude(eachPath2);
            if (!shouldntIncludeThis) {
              yield eachPath2;
            }
          }
        }
      }
    } else {
      options = { exclude: /* @__PURE__ */ new Set(), searchOrder: "breadthFirstSearch", maxDepth: Infinity, ...options };
      options.searchOrder = options.searchOrder || "breadthFirstSearch";
      const { shouldntExplore, shouldntInclude } = options;
      if (!["breadthFirstSearch", "depthFirstSearch"].includes(options.searchOrder)) {
        throw Error(`when calling FileSystem.iterateItemsIn('${path4}', { searchOrder: ${options.searchOrder} })

    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'
    However, it was not either of those: ${options.searchOrder}`);
      }
      const useBreadthFirstSearch = options.searchOrder == "breadthFirstSearch";
      const shouldntExploreThis = shouldntExplore && await shouldntExplore(info.path, info);
      if (!shouldntExploreThis && options.maxDepth > 0 && info.isFolder) {
        options.exclude = options.exclude instanceof Set ? options.exclude : new Set(options.exclude);
        if (!options.exclude.has(path4)) {
          const followSymlinks = !options.dontFollowSymlinks;
          const absolutePathVersion = FileSystem.makeAbsolutePath(path4);
          options.exclude.add(absolutePathVersion);
          options.maxDepth -= 1;
          const searchAfterwords = [];
          for await (const entry of Deno.readDir(path4)) {
            const eachPath2 = join4(path4, entry.name);
            if (options.dontReturnSymlinks && each.isSymlink) {
              continue;
            }
            const shouldntIncludeThis = shouldntInclude && await shouldntInclude(eachPath2);
            if (!shouldntIncludeThis) {
              yield eachPath2;
            }
            if (entry.isFile) {
              continue;
            }
            if (followSymlinks && !entry.isDirectory) {
              let isSymlinkToDirectory = false;
              try {
                isSymlinkToDirectory = (await Deno.stat(eachPath2)).isDirectory;
              } catch (error) {
              }
              if (!isSymlinkToDirectory) {
                continue;
              }
            }
            if (useBreadthFirstSearch) {
              searchAfterwords.push(eachPath2);
            } else {
              for await (const eachSubPath of FileSystem.iteratePathsIn(eachPath2, options)) {
                yield eachSubPath;
              }
            }
          }
          for (const eachParentItem of searchAfterwords) {
            for await (const eachSubPath of FileSystem.iteratePathsIn(eachParentItem, options)) {
              yield eachSubPath;
            }
          }
        }
      }
    }
  },
  listPathsIn(pathOrFileInfo, options) {
    return asyncIteratorToList2(FileSystem.iteratePathsIn(pathOrFileInfo, options));
  },
  async *iterateItemsIn(pathOrFileInfo, options = { recursively: false, shouldntInclude: null, shouldntExplore: null, searchOrder: "breadthFirstSearch", maxDepth: Infinity }) {
    options = { exclude: /* @__PURE__ */ new Set(), searchOrder: "breadthFirstSearch", maxDepth: Infinity, ...options };
    options.searchOrder = options.searchOrder || "breadthFirstSearch";
    const { shouldntExplore, shouldntInclude } = options;
    const info = pathOrFileInfo instanceof ItemInfo ? pathOrFileInfo : await FileSystem.info(pathOrFileInfo);
    const path4 = info.path;
    if (!["breadthFirstSearch", "depthFirstSearch"].includes(options.searchOrder)) {
      throw Error(`when calling FileSystem.iterateItemsIn('${path4}', { searchOrder: ${options.searchOrder} })

    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'
    However, it was not either of those: ${options.searchOrder}`);
    }
    const useBreadthFirstSearch = options.searchOrder == "breadthFirstSearch";
    const shouldntExploreThis = shouldntExplore && await shouldntExplore(info);
    if (!shouldntExploreThis && options.maxDepth > 0 && info.isFolder) {
      options.exclude = options.exclude instanceof Set ? options.exclude : new Set(options.exclude);
      if (!options.exclude.has(path4)) {
        const absolutePathVersion = FileSystem.makeAbsolutePath(path4);
        options.exclude.add(absolutePathVersion);
        options.maxDepth -= 1;
        const searchAfterwords = [];
        for await (const entry of Deno.readDir(path4)) {
          const eachItem = await FileSystem.info(join4(path4, entry.name));
          const shouldntIncludeThis = shouldntInclude && await shouldntInclude(eachItem);
          if (!shouldntIncludeThis) {
            yield eachItem;
          }
          if (options.recursively) {
            if (eachItem.isFolder) {
              if (useBreadthFirstSearch) {
                searchAfterwords.push(eachItem);
              } else {
                for await (const eachSubPath of FileSystem.iterateItemsIn(eachItem, options)) {
                  yield eachSubPath;
                }
              }
            }
          }
        }
        for (const eachParentItem of searchAfterwords) {
          for await (const eachSubPath of FileSystem.iterateItemsIn(eachParentItem, options)) {
            yield eachSubPath;
          }
        }
      }
    }
  },
  async listItemsIn(pathOrFileInfo, options) {
    const outputPromises = [];
    for await (const eachPath2 of FileSystem.iteratePathsIn(pathOrFileInfo, options)) {
      outputPromises.push(FileSystem.info(eachPath2));
    }
    return Promise.all(outputPromises);
  },
  // includes symlinks if they link to files and pipes
  async listFileItemsIn(pathOrFileInfo, options = { treatAllSymlinksAsFiles: false }) {
    const { treatAllSymlinksAsFiles } = { treatAllSymlinksAsFiles: false, ...options };
    const items = await FileSystem.listItemsIn(pathOrFileInfo, options);
    if (treatAllSymlinksAsFiles) {
      return items.filter((eachItem) => eachItem.isFile || treatAllSymlinksAsFiles && eachItem.isSymlink);
    } else {
      return items.filter((eachItem) => eachItem.isFile);
    }
  },
  async listFilePathsIn(pathOrFileInfo, options = { treatAllSymlinksAsFiles: false }) {
    return (await FileSystem.listFileItemsIn(pathOrFileInfo, options)).map((each3) => each3.path);
  },
  async listFileBasenamesIn(pathOrFileInfo, options = { treatAllSymlinksAsFiles: false }) {
    return (await FileSystem.listFileItemsIn(pathOrFileInfo, options)).map((each3) => each3.basename);
  },
  async listFolderItemsIn(pathOrFileInfo, options = { ignoreSymlinks: false }) {
    const { ignoreSymlinks } = { ignoreSymlinks: false, ...options };
    const items = await FileSystem.listItemsIn(pathOrFileInfo, options);
    if (ignoreSymlinks) {
      return items.filter((eachItem) => eachItem.isFolder && !eachItem.isSymlink);
    } else {
      return items.filter((eachItem) => eachItem.isFolder);
    }
  },
  async listFolderPathsIn(pathOrFileInfo, options = { ignoreSymlinks: false }) {
    return (await FileSystem.listFolderItemsIn(pathOrFileInfo, options)).map((each3) => each3.path);
  },
  async listFolderBasenamesIn(pathOrFileInfo, options = { ignoreSymlinks: false }) {
    return (await FileSystem.listFolderItemsIn(pathOrFileInfo, options)).map((each3) => each3.basename);
  },
  recursivelyIterateItemsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    options.recursively = true;
    if (options.onlyHardlinks) {
      if (options.shouldntInclude) {
        const originalshouldntInclude = options.shouldntInclude;
        options.shouldntInclude = (each3) => each3.isSymlink || originalshouldntInclude(each3);
      } else {
        options.shouldntInclude = (each3) => each3.isSymlink;
      }
    }
    if (options.dontFollowSymlinks) {
      if (options.shouldntExplore) {
        const originalShouldntExplore = options.shouldntInclude;
        options.shouldntExplore = (each3) => each3.isSymlink || originalShouldntExplore(each3);
      } else {
        options.shouldntExplore = (each3) => each3.isSymlink;
      }
    }
    return FileSystem.iterateItemsIn(pathOrFileInfo, options);
  },
  recursivelyIteratePathsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    options.recursively = true;
    if (options.onlyHardlinks) {
      if (options.shouldntInclude) {
        const originalshouldntInclude = options.shouldntInclude;
        options.shouldntInclude = (each3) => each3.isSymlink || originalshouldntInclude(each3);
      } else {
        options.shouldntInclude = (each3) => each3.isSymlink;
      }
    }
    return FileSystem.iteratePathsIn(pathOrFileInfo, options);
  },
  recursivelyListPathsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    return asyncIteratorToList2(FileSystem.recursivelyIteratePathsIn(pathOrFileInfo, options));
  },
  recursivelyListItemsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    return asyncIteratorToList2(FileSystem.recursivelyIterateItemsIn(pathOrFileInfo, options));
  },
  async *globIterator(pattern, options = { startPath: null }) {
    var { startPath, ...iteratePathsOptions } = options;
    startPath = startPath || ".";
    const regex3 = pattern instanceof RegExp ? pattern : globToRegExp(pattern);
    for await (const eachPath2 of FileSystem.iteratePathsIn(startPath, { recursively: true, ...iteratePathsOptions })) {
      if (eachPath2.match(regex3) || FileSystem.makeAbsolutePath(eachPath2).match(regex3)) {
        yield FileSystem.makeRelativePath({
          from: startPath,
          to: eachPath2
        });
      }
    }
  },
  glob(pattern, options = { startPath: null }) {
    return asyncIteratorToList2(FileSystem.globIterator(pattern, options));
  },
  async getPermissions({ path: path4 }) {
    const { mode } = await Deno.lstat(path4);
    return {
      owner: {
        //          rwxrwxrwx
        canRead: !!(256 & mode),
        canWrite: !!(128 & mode),
        canExecute: !!(64 & mode)
      },
      group: {
        canRead: !!(32 & mode),
        canWrite: !!(16 & mode),
        canExecute: !!(8 & mode)
      },
      others: {
        canRead: !!(4 & mode),
        canWrite: !!(2 & mode),
        canExecute: !!(1 & mode)
      }
    };
  },
  /**
  * Add/set file permissions
  *
  * @param {String} args.path - 
  * @param {Object|Boolean} args.recursively - 
  * @param {Object} args.permissions - 
  * @param {Object} args.permissions.owner - 
  * @param {Boolean} args.permissions.owner.canRead - 
  * @param {Boolean} args.permissions.owner.canWrite - 
  * @param {Boolean} args.permissions.owner.canExecute - 
  * @param {Object} args.permissions.group - 
  * @param {Boolean} args.permissions.group.canRead - 
  * @param {Boolean} args.permissions.group.canWrite - 
  * @param {Boolean} args.permissions.group.canExecute - 
  * @param {Object} args.permissions.others - 
  * @param {Boolean} args.permissions.others.canRead - 
  * @param {Boolean} args.permissions.others.canWrite - 
  * @param {Boolean} args.permissions.others.canExecute - 
  * @return {null} 
  *
  * @example
  *  await FileSystem.addPermissions({
  *      path: fileOrFolderPath,
  *      permissions: {
  *          owner: {
  *              canExecute: true,
  *          },
  *      }
  *  })
  */
  async addPermissions({ path: path4, permissions = { owner: {}, group: {}, others: {} }, recursively = false }) {
    permissions = { owner: {}, group: {}, others: {}, ...permissions };
    let permissionNumber = 0;
    let fileInfo;
    if (!(Object.keys(permissions.owner).length === Object.keys(permissions.group).length === Object.keys(permissions.others).length === 3)) {
      fileInfo = await FileSystem.info(path4);
      permissionNumber = fileInfo.lstat.mode & 511;
    }
    if (permissions.owner.canRead != null) {
      if (permissions.owner.canRead) {
        permissionNumber |= 256;
      } else {
        permissionNumber &= 767;
      }
    }
    if (permissions.owner.canWrite != null) {
      if (permissions.owner.canWrite) {
        permissionNumber |= 128;
      } else {
        permissionNumber &= 895;
      }
    }
    if (permissions.owner.canExecute != null) {
      if (permissions.owner.canExecute) {
        permissionNumber |= 64;
      } else {
        permissionNumber &= 959;
      }
    }
    if (permissions.group.canRead != null) {
      if (permissions.group.canRead) {
        permissionNumber |= 32;
      } else {
        permissionNumber &= 991;
      }
    }
    if (permissions.group.canWrite != null) {
      if (permissions.group.canWrite) {
        permissionNumber |= 16;
      } else {
        permissionNumber &= 1007;
      }
    }
    if (permissions.group.canExecute != null) {
      if (permissions.group.canExecute) {
        permissionNumber |= 8;
      } else {
        permissionNumber &= 1015;
      }
    }
    if (permissions.others.canRead != null) {
      if (permissions.others.canRead) {
        permissionNumber |= 4;
      } else {
        permissionNumber &= 1019;
      }
    }
    if (permissions.others.canWrite != null) {
      if (permissions.others.canWrite) {
        permissionNumber |= 2;
      } else {
        permissionNumber &= 1021;
      }
    }
    if (permissions.others.canExecute != null) {
      if (permissions.others.canExecute) {
        permissionNumber |= 1;
      } else {
        permissionNumber &= 1022;
      }
    }
    if (recursively == false || fileInfo instanceof Object && fileInfo.isFile || !(fileInfo instanceof Object) && (await FileSystem.info(path4)).isFile) {
      return Deno.chmod(path4.path || path4, permissionNumber);
    } else {
      const promises = [];
      const paths = await FileSystem.recursivelyListPathsIn(path4, { onlyHardlinks: false, dontFollowSymlinks: false, ...recursively });
      for (const eachPath2 of paths) {
        promises.push(
          Deno.chmod(eachPath2, permissionNumber).catch(console.error)
        );
      }
      return new Promise(async (resolve9, reject2) => {
        for (const each3 of promises) {
          await each3;
        }
        resolve9();
      });
    }
  },
  // alias
  setPermissions(...args) {
    return FileSystem.addPermissions(...args);
  },
  async write({ path: path4, data, force = true, overwrite = false, renameExtension = null }) {
    path4 = pathStandardize(path4);
    await grabPathLock(path4);
    if (force) {
      FileSystem.sync.ensureIsFolder(FileSystem.parentPath(path4), { overwrite, renameExtension });
      const info = FileSystem.sync.info(path4);
      if (info.isDirectory) {
        FileSystem.sync.remove(path4);
      }
    }
    let output2;
    if (isGeneratorType2(data) || data[Symbol.iterator] || data[Symbol.asyncIterator]) {
      const file = await Deno.open(path4, { read: true, write: true, create: true, truncate: true });
      const encoder = new TextEncoder();
      const encode = encoder.encode.bind(encoder);
      try {
        let index = 0;
        for await (let packet of data) {
          if (typeof packet == "string") {
            packet = encode(packet);
          }
          await Deno.write(file.rid, packet);
        }
      } finally {
        Deno.close(file.rid);
      }
    } else if (typeof data == "string") {
      output2 = await Deno.writeTextFile(path4, data);
    } else {
      output2 = await Deno.writeFile(path4, data);
    }
    delete locker[path4];
    return output2;
  },
  async append({ path: path4, data, force = true, overwrite = false, renameExtension = null }) {
    path4 = pathStandardize(path4);
    await grabPathLock(path4);
    if (force) {
      FileSystem.sync.ensureIsFolder(FileSystem.parentPath(path4), { overwrite, renameExtension });
      const info = await FileSystem.info(path4);
      if (info.isDirectory) {
        await FileSystem.remove(path4);
      }
    }
    const file = await Deno.open(path4, { read: true, write: true, create: true });
    await file.seek(0, Deno.SeekMode.End);
    if (typeof data == "string") {
      await file.write(new TextEncoder().encode(data));
    } else {
      await file.write(data);
    }
    await file.close();
    delete locker[path4];
  },
  async makeHardPathTo(path4, options = {}) {
    var { cache: cache4 } = { cache: {}, ...options };
    if (cache4[path4]) {
      return cache4[path4];
    }
    const [folders, name, extension] = FileSystem.pathPieces(FileSystem.makeAbsolutePath(path4));
    let topDownPath = ``;
    for (const eachFolderName of folders) {
      topDownPath += `/${eachFolderName}`;
      if (cache4[topDownPath]) {
        topDownPath = cache4[topDownPath];
        continue;
      }
      const unchangedPath = topDownPath;
      const info = await FileSystem.info(topDownPath);
      if (info.isSymlink) {
        const absolutePathToIntermediate = await FileSystem.finalTargetOf(info.path, { _parentsHaveBeenChecked: true, cache: cache4 });
        if (absolutePathToIntermediate == null) {
          return null;
        }
        topDownPath = topDownPath.slice(0, -(eachFolderName.length + 1));
        const relativePath = FileSystem.makeRelativePath({
          from: topDownPath,
          to: absolutePathToIntermediate
        });
        topDownPath += `/${relativePath}`;
        topDownPath = normalize3(topDownPath);
      }
      cache4[unchangedPath] = topDownPath;
    }
    const hardPath = normalize3(`${topDownPath}/${name}${extension}`);
    cache4[path4] = hardPath;
    return hardPath;
  },
  async walkUpImport(path4, start) {
    const startPath = start || FileSystem.pathOfCaller(1);
    const nearestPath = await FileSystem.walkUpUntil(path4, startPath);
    if (nearestPath) {
      const absolutePath = FileSystem.makeAbsolutePath(`${nearestPath}/${path4}`);
      return import(toFileUrl3(absolutePath).href);
    } else {
      throw Error(`Tried to walkUpImport ${path4}, starting at ${startPath}, but was unable to find any files`);
    }
  },
  pathOfCaller(callerNumber = void 0) {
    const err = new Error();
    let filePaths = findAll2(/^.+file:\/\/(\/[\w\W]*?):/gm, err.stack).map((each3) => each3[1]);
    if (callerNumber) {
      filePaths = filePaths.slice(callerNumber);
    }
    try {
      const secondPath = filePaths[1];
      if (secondPath) {
        try {
          if (Deno.statSync(secondPath).isFile) {
            return secondPath;
          }
        } catch (error) {
        }
      }
    } catch (error) {
    }
    return Deno.cwd();
  },
  sync: {
    info(fileOrFolderPath, _cachedLstat = null) {
      let lstat = _cachedLstat;
      try {
        lstat = Deno.lstatSync(fileOrFolderPath);
      } catch (error) {
        lstat = { doesntExist: true };
      }
      let stat = {};
      if (!lstat.isSymlink) {
        stat = {
          isBrokenLink: false,
          isLoopOfLinks: false
        };
      } else {
        try {
          stat = Deno.statSync(fileOrFolderPath);
        } catch (error) {
          if (error.message.match(/^Too many levels of symbolic links/)) {
            stat.isBrokenLink = true;
            stat.isLoopOfLinks = true;
          } else if (error.message.match(/^No such file or directory/)) {
            stat.isBrokenLink = true;
          } else {
            throw error;
          }
        }
      }
      return new ItemInfo({ path: fileOrFolderPath, _lstatData: lstat, _statData: stat });
    },
    remove(fileOrFolder) {
      if (fileOrFolder instanceof Array) {
        return fileOrFolder.map(FileSystem.sync.remove);
      }
      fileOrFolder = fileOrFolder.path || fileOrFolder;
      let exists2 = false;
      let item;
      try {
        item = Deno.lstatSync(fileOrFolder);
        exists2 = true;
      } catch (error) {
      }
      if (exists2) {
        if (item.isFile || item.isSymlink) {
          return Deno.removeSync(fileOrFolder.replace(/\/+$/, ""));
        } else {
          return Deno.removeSync(fileOrFolder.replace(/\/+$/, ""), { recursive: true });
        }
      }
    },
    moveOutOfTheWay(path4, options = { extension: null }) {
      path4 = pathStandardize(path4);
      const extension = options?.extension || FileSystem.defaultRenameExtension;
      const info = FileSystem.sync.info(path4);
      if (info.exists) {
        const newPath = path4 + extension;
        FileSystem.sync.moveOutOfTheWay(newPath, { extension });
        moveSync(path4, newPath);
      }
    },
    ensureIsFolder(path4, options = { overwrite: false, renameExtension: null }) {
      path4 = pathStandardize(path4);
      const { overwrite, renameExtension } = defaultOptionsHelper(options);
      path4 = path4.path || path4;
      path4 = FileSystem.makeAbsolutePath(path4);
      const parentPath = dirname3(path4);
      if (parentPath == path4) {
        return;
      }
      const parent = FileSystem.sync.info(parentPath);
      if (!parent.isDirectory) {
        FileSystem.sync.ensureIsFolder(parentPath, { overwrite, renameExtension });
      }
      let pathInfo = FileSystem.sync.info(path4);
      if (pathInfo.exists && !pathInfo.isDirectory) {
        if (overwrite) {
          FileSystem.sync.remove(path4);
        } else {
          FileSystem.sync.moveOutOfTheWay(path4, { extension: renameExtension });
        }
      }
      Deno.mkdirSync(path4, { recursive: true });
      return path4;
    },
    /**
     * Move/Remove everything and Ensure parent folders
     *
     * @param path
     * @param options.overwrite - if false, then things in the way will be moved instead of deleted
     * @param options.extension - the string to append when renaming files to get them out of the way
     * 
     * @example
     *     FileSystem.sync.clearAPathFor("./something")
     */
    clearAPathFor(path4, options = { overwrite: false, renameExtension: null }) {
      const { overwrite, renameExtension } = defaultOptionsHelper(options);
      const originalPath = path4;
      const paths = [];
      while (dirname3(path4) !== path4) {
        paths.push(path4);
        path4 = dirname3(path4);
      }
      for (const eachPath2 of paths.reverse()) {
        const info = FileSystem.sync.info(eachPath2);
        if (!info.exists) {
          break;
        } else if (info.isFile) {
          if (overwrite) {
            FileSystem.sync.remove(eachPath2);
          } else {
            FileSystem.sync.moveOutOfTheWay(eachPath2, { extension: renameExtension });
          }
        }
      }
      Deno.mkdirSync(dirname3(originalPath), { recursive: true });
      return originalPath;
    },
    append({ path: path4, data, force = true, overwrite = false, renameExtension = null }) {
      path4 = pathStandardize(path4);
      if (force) {
        FileSystem.sync.ensureIsFolder(FileSystem.parentPath(path4), { overwrite, renameExtension });
        const info = FileSystem.sync.info(path4);
        if (info.isDirectory) {
          FileSystem.sync.remove(path4);
        }
      }
      const file = Deno.openSync(path4, { read: true, write: true, create: true });
      file.seekSync(0, Deno.SeekMode.End);
      if (typeof data == "string") {
        file.writeSync(new TextEncoder().encode(data));
      } else {
        file.writeSync(data);
      }
      file.close();
    }
  }
};
var glob = FileSystem.glob;

// esbuild_serve:http-import:https://deno.land/x/good@1.3.0.1/iterable.js
var emptyIterator2 = /* @__PURE__ */ function* () {
}();
var makeIterable3 = (object) => {
  if (object == null) {
    return emptyIterator2;
  }
  if (object[Symbol.iterator] instanceof Function || object[Symbol.asyncIterator] instanceof Function) {
    return object;
  }
  if (Object.getPrototypeOf(object).constructor == Object) {
    return Object.entries(object);
  }
  return emptyIterator2;
};
var iter2 = (object) => {
  const iterable = makeIterable3(object);
  if (iterable[Symbol.asyncIterator]) {
    return iterable[Symbol.asyncIterator]();
  } else {
    return iterable[Symbol.iterator]();
  }
};
var Stop3 = Symbol("iterationStop");
var zip3 = function* (...iterables) {
  iterables = iterables.map((each3) => iter2(each3));
  while (true) {
    const nexts = iterables.map((each3) => each3.next());
    if (nexts.every((each3) => each3.done)) {
      break;
    }
    yield nexts.map((each3) => each3.value);
  }
};
async function asyncIteratorToList3(asyncIterator) {
  const results = [];
  for await (const each3 of asyncIterator) {
    results.push(each3);
  }
  return results;
}
var ERROR_WHILE_MAPPING_MESSAGE3 = "Threw while mapping.";
function concurrentlyTransform3({ iterator, transformFunction, poolLimit = null, awaitAll = false }) {
  poolLimit = poolLimit || concurrentlyTransform3.defaultPoolLimit;
  const res = new TransformStream({
    async transform(p, controller) {
      try {
        const s = await p;
        controller.enqueue(s);
      } catch (e) {
        if (e instanceof AggregateError && e.message == ERROR_WHILE_MAPPING_MESSAGE3) {
          controller.error(e);
        }
      }
    }
  });
  const mainPromise = (async () => {
    const writer = res.writable.getWriter();
    const executing = [];
    try {
      let index = 0;
      for await (const item of iterator) {
        const p = Promise.resolve().then(() => transformFunction(item, index));
        index++;
        writer.write(p);
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        if (executing.length >= poolLimit) {
          await Promise.race(executing);
        }
      }
      await Promise.all(executing);
      writer.close();
    } catch {
      const errors = [];
      for (const result2 of await Promise.allSettled(executing)) {
        if (result2.status == "rejected") {
          errors.push(result2.reason);
        }
      }
      writer.write(Promise.reject(
        new AggregateError(errors, ERROR_WHILE_MAPPING_MESSAGE3)
      )).catch(() => {
      });
    }
  })();
  const asyncIterator = res.readable[Symbol.asyncIterator]();
  if (!awaitAll) {
    return asyncIterator;
  } else {
    return mainPromise.then(() => asyncIteratorToList3(asyncIterator));
  }
}
concurrentlyTransform3.defaultPoolLimit = 40;

// esbuild_serve:http-import:https://deno.land/x/good@1.3.0.1/string.js
var indent2 = ({ string: string2, by = "    ", noLead = false }) => (noLead ? "" : by) + string2.replace(/\n/g, "\n" + by);
var toString3 = (value) => {
  if (typeof value == "symbol") {
    return toRepresentation2(value);
  } else if (!(value instanceof Object)) {
    return value != null ? value.toString() : `${value}`;
  } else {
    return toRepresentation2(value);
  }
};
var reprSymbol2 = Symbol.for("representation");
var denoInspectSymbol2 = Symbol.for("Deno.customInspect");
var toRepresentation2 = (item) => {
  const alreadySeen = /* @__PURE__ */ new Set();
  const recursionWrapper = (item2) => {
    if (item2 instanceof Object) {
      if (alreadySeen.has(item2)) {
        return `[Self Reference]`;
      } else {
        alreadySeen.add(item2);
      }
    }
    let output2;
    if (item2 === void 0) {
      output2 = "undefined";
    } else if (item2 === null) {
      output2 = "null";
    } else if (typeof item2 == "string") {
      output2 = JSON.stringify(item2);
    } else if (typeof item2 == "symbol") {
      if (!item2.description) {
        output2 = "Symbol()";
      } else {
        const globalVersion = Symbol.for(item2.description);
        if (globalVersion == item2) {
          output2 = `Symbol.for(${JSON.stringify(item2.description)})`;
        } else {
          output2 = `Symbol(${JSON.stringify(item2.description)})`;
        }
      }
    } else if (item2 instanceof Date) {
      output2 = `new Date(${item2.getTime()})`;
    } else if (item2 instanceof Array) {
      output2 = `[${item2.map((each3) => recursionWrapper(each3)).join(",")}]`;
    } else if (item2 instanceof Set) {
      output2 = `new Set(${[...item2].map((each3) => recursionWrapper(each3)).join(",")})`;
    } else if (item2 instanceof Object && item2.constructor == Object) {
      output2 = pureObjectRepr(string);
    } else if (item2 instanceof Map) {
      let string2 = "new Map(";
      for (const [key, value] of item2.entries()) {
        const stringKey = recursionWrapper(key);
        const stringValue = recursionWrapper(value);
        if (!stringKey.match(/\n/g)) {
          string2 += `
  [${stringKey}, ${indent2({ string: stringValue, by: "  ", noLead: true })}],`;
        } else {
          string2 += `
  [${indent2({ string: stringKey, by: "  ", noLead: true })},
  ${indent2({ string: stringValue, by: "    ", noLead: true })}],`;
        }
      }
      string2 += "\n)";
      output2 = string2;
    } else {
      if (item2[reprSymbol2] instanceof Function) {
        try {
          output2 = item2[reprSymbol2]();
          return output2;
        } catch (error) {
        }
      }
      if (item2[denoInspectSymbol2] instanceof Function) {
        try {
          output2 = item2[denoInspectSymbol2]();
          return output2;
        } catch (error) {
        }
      }
      try {
        output2 = item2.toString();
        if (output2 !== "[object Object]") {
          return output2;
        }
      } catch (error) {
      }
      try {
        if (item2.constructor instanceof Function && item2.prototype && typeof item2.name == "string") {
          output2 = `class ${item2.name} { /*...*/ }`;
          return output2;
        }
      } catch (error) {
      }
      try {
        if (item2.constructor instanceof Function && typeof item2.constructor.name == "string") {
          output2 = `new ${item2.constructor.name}(${pureObjectRepr(item2)})`;
          return output2;
        }
      } catch (error) {
      }
      return pureObjectRepr(item2);
    }
    return output2;
  };
  const pureObjectRepr = (item2) => {
    let string2 = "{";
    for (const [key, value] of Object.entries(item2)) {
      const stringKey = recursionWrapper(key);
      const stringValue = recursionWrapper(value);
      string2 += `
  ${stringKey}: ${indent2({ string: stringValue, by: "  ", noLead: true })},`;
    }
    string2 += "\n}";
    return string2;
  };
  return recursionWrapper(item);
};
var findAll3 = (regexPattern, sourceString) => {
  var output2 = [];
  var match;
  var regexPatternWithGlobal = regexPattern.global ? regexPattern : RegExp(regexPattern, regexPattern.flags + "g");
  while (match = regexPatternWithGlobal.exec(sourceString)) {
    output2.push(match);
    if (match[0].length == 0) {
      regexPatternWithGlobal.lastIndex += 1;
    }
  }
  return output2;
};
function escapeRegexMatch2(string2) {
  return string2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var proxyRegExp2;
var regexProxyOptions2 = Object.freeze({
  get(original, key) {
    if (typeof key == "string" && key.match(/^[igymu]+$/)) {
      return proxyRegExp2(original, key);
    }
    return original[key];
  },
  set(original, key, value) {
    return original[key] = value;
  }
});
proxyRegExp2 = (parent, flags) => {
  const regex3 = new RegExp(parent, flags);
  const output2 = new Proxy(regex3, regexProxyOptions2);
  Object.setPrototypeOf(output2, Object.getPrototypeOf(regex3));
  return output2;
};
function regexWithStripWarning2(shouldStrip) {
  return (strings, ...values2) => {
    let newRegexString = "";
    for (const [string2, value] of zip3(strings, values2)) {
      newRegexString += string2;
      if (value instanceof RegExp) {
        if (!shouldStrip && (value.ignoreCase || value.sticky || value.multiline || value.unicode)) {
          console.warn(`Warning: flags inside of regex:
    The RegExp trigging this warning is: ${value}
    When calling the regex interpolater (e.g. regex\`something\${stuff}\`)
    one of the \${} values (the one above) was a RegExp with a flag enabled
    e.g. /stuff/i  <- i = ignoreCase flag enabled
    When the /stuff/i gets interpolated, its going to loose its flags
    (thats what I'm warning you about)
    
    To disable/ignore this warning do:
        regex.stripFlags\`something\${/stuff/i}\`
    If you want to add flags to the output of regex\`something\${stuff}\` do:
        regex\`something\${stuff}\`.i   // ignoreCase
        regex\`something\${stuff}\`.ig  // ignoreCase and global
        regex\`something\${stuff}\`.gi  // functionally equivlent
`);
        }
        const regexContent = `${value}`.slice(1).replace(/\/.*$/, "");
        newRegexString += `(?:${regexContent})`;
      } else if (value != null) {
        newRegexString += escapeRegexMatch2(toString3(value));
      }
    }
    return proxyRegExp2(newRegexString, "");
  };
}
var regex2 = regexWithStripWarning2(false);
regex2.stripFlags = regexWithStripWarning2(true);
var textDecoder2 = new TextDecoder("utf-8");
var textEncoder2 = new TextEncoder("utf-8");
var utf8BytesToString2 = textDecoder2.decode.bind(textDecoder2);
var stringToUtf8Bytes2 = textEncoder2.encode.bind(textEncoder2);

// esbuild_serve:http-import:https://deno.land/x/quickr@0.6.32/main/file_system.js
ensure({ denoVersion: "1.17.1" });
var cache2 = {};
var ItemInfo2 = class {
  constructor({ path: path4, _lstatData, _statData }) {
    this.path = path4;
    this._lstat = _lstatData;
    this._data = _statData;
  }
  // 
  // core data sources
  // 
  refresh() {
    this._lstat = null;
    this._data = null;
  }
  get lstat() {
    if (!this._lstat) {
      try {
        this._lstat = Deno.lstatSync(this.path);
      } catch (error) {
        this._lstat = { doesntExist: true };
      }
    }
    return this._lstat;
  }
  get stat() {
    if (!this._stat) {
      const lstat = this.lstat;
      if (!lstat.isSymlink) {
        this._stat = {
          isBrokenLink: false,
          isLoopOfLinks: false
        };
      } else {
        try {
          this._stat = Deno.statSync(this.path);
        } catch (error) {
          this._stat = {};
          if (error.message.match(/^Too many levels of symbolic links/)) {
            this._stat.isBrokenLink = true;
            this._stat.isLoopOfLinks = true;
          } else if (error.message.match(/^No such file or directory/)) {
            this._stat.isBrokenLink = true;
          } else {
            throw error;
          }
        }
      }
    }
    return this._stat;
  }
  // 
  // main attributes
  // 
  get exists() {
    const lstat = this.lstat;
    return !lstat.doesntExist;
  }
  get name() {
    return parse3(this.path).name;
  }
  get extension() {
    return parse3(this.path).ext;
  }
  get basename() {
    return this.path && basename3(this.path);
  }
  get parentPath() {
    return this.path && dirname3(this.path);
  }
  relativePathFrom(parentPath) {
    return relative3(parentPath, this.path);
  }
  get link() {
    const lstat = this.lstat;
    if (lstat.isSymlink) {
      return Deno.readLinkSync(this.path);
    } else {
      return null;
    }
  }
  get isSymlink() {
    const lstat = this.lstat;
    return !!lstat.isSymlink;
  }
  get isRelativeSymlink() {
    const lstat = this.lstat;
    const isNotSymlink = !lstat.isSymlink;
    if (isNotSymlink) {
      return false;
    }
    const relativeOrAbsolutePath = Deno.readLinkSync(this.path);
    return !isAbsolute3(relativeOrAbsolutePath);
  }
  get isAbsoluteSymlink() {
    const lstat = this.lstat;
    const isNotSymlink = !lstat.isSymlink;
    if (isNotSymlink) {
      return false;
    }
    const relativeOrAbsolutePath = Deno.readLinkSync(this.path);
    return isAbsolute3(relativeOrAbsolutePath);
  }
  get isBrokenLink() {
    const stat = this.stat;
    return !!stat.isBrokenLink;
  }
  get isLoopOfLinks() {
    const stat = this.stat;
    return !!stat.isLoopOfLinks;
  }
  get isFile() {
    const lstat = this.lstat;
    if (lstat.doesntExist) {
      return false;
    }
    if (!lstat.isSymlink) {
      return lstat.isFile;
    } else {
      return !!this.stat.isFile;
    }
  }
  get isFolder() {
    const lstat = this.lstat;
    if (lstat.doesntExist) {
      return false;
    }
    if (!lstat.isSymlink) {
      return lstat.isDirectory;
    } else {
      return !!this.stat.isDirectory;
    }
  }
  get sizeInBytes() {
    const lstat = this.lstat;
    return lstat.size;
  }
  get permissions() {
    const { mode } = this.lstat;
    return {
      owner: {
        //          rwxrwxrwx
        canRead: !!(256 & mode),
        canWrite: !!(128 & mode),
        canExecute: !!(64 & mode)
      },
      group: {
        canRead: !!(32 & mode),
        canWrite: !!(16 & mode),
        canExecute: !!(8 & mode)
      },
      others: {
        canRead: !!(4 & mode),
        canWrite: !!(2 & mode),
        canExecute: !!(1 & mode)
      }
    };
  }
  // aliases
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
};
var defaultOptionsHelper2 = (options) => ({
  renameExtension: options.renameExtension || FileSystem2.defaultRenameExtension,
  overwrite: options.overwrite
});
var fileLockSymbol2 = Symbol.for("fileLock");
var locker2 = globalThis[fileLockSymbol2] || {};
var grabPathLock2 = async (path4) => {
  while (locker2[path4]) {
    await new Promise((resolve9) => setTimeout(resolve9, 70));
  }
  locker2[path4] = true;
};
var FileSystem2 = {
  denoExecutablePath: Deno.execPath(),
  parentPath: dirname3,
  dirname: dirname3,
  basename: basename3,
  extname: extname3,
  join: join4,
  defaultRenameExtension: ".old",
  get home() {
    if (!cache2.home) {
      if (Deno.build.os != "windows") {
        cache2.home = Deno.env.get("HOME");
      } else {
        cache2.home = Deno.env.get("HOMEPATH");
      }
    }
    return cache2.home;
  },
  get workingDirectory() {
    return Deno.cwd();
  },
  set workingDirectory(value) {
    Deno.chdir(value);
  },
  get cwd() {
    return FileSystem2.workingDirectory;
  },
  set cwd(value) {
    return FileSystem2.workingDirectory = value;
  },
  get pwd() {
    return FileSystem2.cwd;
  },
  set pwd(value) {
    return FileSystem2.cwd = value;
  },
  cd(path4) {
    Deno.chdir(path4);
  },
  changeDirectory(path4) {
    Deno.chdir(path4);
  },
  get thisFile() {
    const err = new Error();
    const filePaths = findAll2(/^.+file:\/\/(\/[\w\W]*?):/gm, err.stack).map((each3) => each3[1]);
    const firstPath = filePaths[0];
    if (firstPath) {
      try {
        if (Deno.statSync(firstPath).isFile) {
          return firstPath;
        }
      } catch (error) {
      }
    }
    return ":<interpreter>:";
  },
  get thisFolder() {
    const err = new Error();
    const filePaths = findAll2(/^.+file:\/\/(\/[\w\W]*?):/gm, err.stack).map((each3) => each3[1]);
    const firstPath = filePaths[0];
    if (firstPath) {
      try {
        if (Deno.statSync(firstPath).isFile) {
          return dirname3(firstPath);
        }
      } catch (error) {
      }
    }
    return Deno.cwd();
  },
  async read(path4) {
    await grabPathLock2(path4);
    let output2;
    try {
      output2 = await Deno.readTextFile(path4);
    } catch (error) {
    }
    delete locker2[path4];
    return output2;
  },
  async readBytes(path4) {
    await grabPathLock2(path4);
    let output2;
    try {
      output2 = await Deno.readFile(path4);
    } catch (error) {
    }
    delete locker2[path4];
    return output2;
  },
  async *readLinesIteratively(path4) {
    await grabPathLock2(path4);
    try {
      const file = await Deno.open(path4);
      try {
        yield* readLines(file);
      } finally {
        Deno.close(file.rid);
      }
    } finally {
      delete locker2[path4];
    }
  },
  async info(fileOrFolderPath, _cachedLstat = null) {
    const lstat = _cachedLstat || await Deno.lstat(fileOrFolderPath).catch(() => ({ doesntExist: true }));
    let stat = {};
    if (!lstat.isSymlink) {
      stat = {
        isBrokenLink: false,
        isLoopOfLinks: false
      };
    } else {
      try {
        stat = await Deno.stat(fileOrFolderPath);
      } catch (error) {
        if (error.message.match(/^Too many levels of symbolic links/)) {
          stat.isBrokenLink = true;
          stat.isLoopOfLinks = true;
        } else if (error.message.match(/^No such file or directory/)) {
          stat.isBrokenLink = true;
        } else {
          if (!error.message.match(/^PermissionDenied:/)) {
            return { doesntExist: true, permissionDenied: true };
          }
          throw error;
        }
      }
    }
    return new ItemInfo2({ path: fileOrFolderPath, _lstatData: lstat, _statData: stat });
  },
  async move({ item, newParentFolder, newName, force = true, overwrite = false, renameExtension = null }) {
    const oldPath = item.path || item;
    const oldName = FileSystem2.basename(oldPath);
    const itemInfo = item instanceof Object || await FileSystem2.info(oldPath);
    const newPath = `${newParentFolder}/${newName || oldName}`;
    if (itemInfo.isSymlink && !item.isBrokenLink) {
      const link = Deno.readLinkSync(itemInfo.path);
      if (!isAbsolute3(link)) {
        const linkTargetBeforeMove = `${FileSystem2.parentPath(itemInfo.path)}/${link}`;
        await FileSystem2.relativeLink({
          existingItem: linkTargetBeforeMove,
          newItem: newPath,
          force,
          overwrite,
          renameExtension
        });
        await FileSystem2.remove(itemInfo);
      }
    }
    if (force) {
      FileSystem2.sync.clearAPathFor(newPath, { overwrite, renameExtension });
    }
    await move(oldPath, newPath);
  },
  async remove(fileOrFolder) {
    if (fileOrFolder instanceof Array) {
      return Promise.all(fileOrFolder.map(FileSystem2.remove));
    }
    fileOrFolder = fileOrFolder.path || fileOrFolder;
    const itemInfo = await FileSystem2.info(fileOrFolder);
    if (itemInfo.isFile || itemInfo.isSymlink) {
      return Deno.remove(itemInfo.path.replace(/\/+$/, ""));
    } else if (itemInfo.exists) {
      return Deno.remove(itemInfo.path.replace(/\/+$/, ""), { recursive: true });
    }
  },
  normalize: (path4) => normalize3(path4.path || path4).replace(/\/$/, ""),
  isAbsolutePath: isAbsolute3,
  isRelativePath: (...args) => !isAbsolute3(...args),
  makeRelativePath: ({ from, to }) => relative3(from.path || from, to.path || to),
  makeAbsolutePath: (path4) => {
    if (!isAbsolute3(path4)) {
      return normalize3(join4(Deno.cwd(), path4));
    } else {
      return normalize3(path4);
    }
  },
  async finalTargetOf(path4, options = {}) {
    const { _parentsHaveBeenChecked, cache: cache4 } = { _parentsHaveBeenChecked: false, cache: {}, ...options };
    const originalWasItem = path4 instanceof ItemInfo2;
    path4 = path4.path || path4;
    let result2 = await Deno.lstat(path4).catch(() => ({ doesntExist: true }));
    if (result2.doesntExist) {
      return null;
    }
    path4 = await FileSystem2.makeHardPathTo(path4, { cache: cache4 });
    const pathChain = [];
    while (result2.isSymlink) {
      const relativeOrAbsolutePath = await Deno.readLink(path4);
      if (isAbsolute3(relativeOrAbsolutePath)) {
        path4 = relativeOrAbsolutePath;
      } else {
        path4 = `${FileSystem2.parentPath(path4)}/${relativeOrAbsolutePath}`;
      }
      result2 = await Deno.lstat(path4).catch(() => ({ doesntExist: true }));
      if (result2.doesntExist) {
        return null;
      }
      path4 = await FileSystem2.makeHardPathTo(path4, { cache: cache4 });
      if (pathChain.includes(path4)) {
        return null;
      }
      pathChain.push(path4);
    }
    path4 = FileSystem2.normalize(path4);
    if (originalWasItem) {
      return new ItemInfo2({ path: path4 });
    } else {
      return path4;
    }
  },
  async nextTargetOf(path4, options = {}) {
    const originalWasItem = path4 instanceof ItemInfo2;
    const item = originalWasItem ? path4 : new ItemInfo2({ path: path4 });
    const lstat = item.lstat;
    if (lstat.isSymlink) {
      const relativeOrAbsolutePath = Deno.readLinkSync(item.path);
      if (isAbsolute3(relativeOrAbsolutePath)) {
        if (originalWasItem) {
          return new ItemInfo2({ path: relativeOrAbsolutePath });
        } else {
          return relativeOrAbsolutePath;
        }
      } else {
        const path5 = `${await FileSystem2.makeHardPathTo(dirname3(item.path))}/${relativeOrAbsolutePath}`;
        if (originalWasItem) {
          return new ItemInfo2({ path: path5 });
        } else {
          return path5;
        }
      }
    } else {
      if (originalWasItem) {
        return item;
      } else {
        return item.path;
      }
    }
  },
  async ensureIsFile(path4, options = { overwrite: false, renameExtension: null }) {
    const { overwrite, renameExtension } = defaultOptionsHelper2(options);
    await FileSystem2.ensureIsFolder(FileSystem2.parentPath(path4), { overwrite, renameExtension });
    path4 = path4.path || path4;
    const pathInfo = await FileSystem2.info(path4);
    if (pathInfo.isFile && !pathInfo.isDirectory) {
      return path4;
    } else {
      await FileSystem2.write({ path: path4, data: "" });
      return path4;
    }
  },
  async ensureIsFolder(path4, options = { overwrite: false, renameExtension: null }) {
    const { overwrite, renameExtension } = defaultOptionsHelper2(options);
    path4 = path4.path || path4;
    path4 = FileSystem2.makeAbsolutePath(path4);
    const parentPath = dirname3(path4);
    if (parentPath == path4) {
      return;
    }
    const parent = await FileSystem2.info(parentPath);
    if (!parent.isDirectory) {
      FileSystem2.sync.ensureIsFolder(parentPath, { overwrite, renameExtension });
    }
    let pathInfo = FileSystem2.sync.info(path4);
    if (pathInfo.exists && !pathInfo.isDirectory) {
      if (overwrite) {
        await FileSystem2.remove(path4);
      } else {
        await FileSystem2.moveOutOfTheWay(eachPath, { extension: renameExtension });
      }
    }
    await Deno.mkdir(path4, { recursive: true });
    return path4;
  },
  /**
   * Move/Remove everything and Ensure parent folders
   *
   * @param path
   * @param options.overwrite - if false, then things in the way will be moved instead of deleted
   * @param options.renameExtension - the string to append when renaming files to get them out of the way
   * 
   * @note
   *     very agressive: will change whatever is necessary to make sure a parent exists
   * 
   * @example
   *     await FileSystem.clearAPathFor("./something")
   */
  async clearAPathFor(path4, options = { overwrite: false, renameExtension: null }) {
    const { overwrite, renameExtension } = defaultOptionsHelper2(options);
    const originalPath = path4;
    const paths = [];
    while (dirname3(path4) !== path4) {
      paths.push(path4);
      path4 = dirname3(path4);
    }
    for (const eachPath2 of paths.reverse()) {
      const info = await FileSystem2.info(eachPath2);
      if (!info.exists) {
        break;
      } else if (info.isFile) {
        if (overwrite) {
          await FileSystem2.remove(eachPath2);
        } else {
          await FileSystem2.moveOutOfTheWay(eachPath2, { extension: renameExtension });
        }
      }
    }
    await Deno.mkdir(dirname3(originalPath), { recursive: true });
    return originalPath;
  },
  async moveOutOfTheWay(path4, options = { extension: null }) {
    const extension = options?.extension || FileSystem2.defaultRenameExtension;
    const info = await FileSystem2.info(path4);
    if (info.exists) {
      const newPath = path4 + extension;
      await FileSystem2.moveOutOfTheWay(newPath, { extension });
      await move(path4, newPath);
    }
  },
  /**
   * All Parent Paths
   *
   * @param {String} path - path doesnt need to exist
   * @return {[String]} longest to shortest parent path
   */
  allParentPaths(path4) {
    const pathStartsWithDotSlash = path4.startsWith("./");
    path4 = FileSystem2.normalize(path4);
    if (path4 === ".") {
      return [];
    }
    const dotGotRemoved = pathStartsWithDotSlash && !path4.startsWith("./");
    let previousPath = null;
    let allPaths = [];
    while (1) {
      previousPath = path4;
      path4 = FileSystem2.parentPath(path4);
      if (previousPath === path4) {
        break;
      }
      allPaths.push(path4);
    }
    allPaths.reverse();
    allPaths = allPaths.filter((each3) => each3 != ".");
    if (dotGotRemoved) {
      allPaths.push(".");
    }
    return allPaths;
  },
  async walkUpUntil(fileToFind, startPath = null) {
    let here = startPath || Deno.cwd();
    if (!isAbsolute3(here)) {
      here = join4(cwd, fileToFind);
    }
    while (1) {
      let checkPath = join4(here, fileToFind);
      const pathInfo = await Deno.lstat(checkPath).catch(() => ({ doesntExist: true }));
      if (!pathInfo.doesntExist) {
        return here;
      }
      if (here == dirname3(here)) {
        return null;
      } else {
        here = dirname3(here);
      }
    }
  },
  // FIXME: make this work for folders with many options for how to handle symlinks
  async copy({ from, to, preserveTimestamps = true, force = true, overwrite = false, renameExtension = null }) {
    const existingItemDoesntExist = (await Deno.stat(from).catch(() => ({ doesntExist: true }))).doesntExist;
    if (existingItemDoesntExist) {
      throw Error(`
Tried to copy from:${from}, to:${to}
but "from" didn't seem to exist

`);
    }
    if (force) {
      FileSystem2.sync.clearAPathFor(to, { overwrite, renameExtension });
    }
    const fromInfo = await FileSystem2.info(from);
    return copy(from, to, { force, preserveTimestamps: true });
  },
  async relativeLink({ existingItem, newItem, force = true, overwrite = false, allowNonExistingTarget = false, renameExtension = null }) {
    const existingItemPath = (existingItem.path || existingItem).replace(/\/+$/, "");
    const newItemPath = FileSystem2.normalize((newItem.path || newItem).replace(/\/+$/, ""));
    const existingItemDoesntExist = (await Deno.lstat(existingItemPath).catch(() => ({ doesntExist: true }))).doesntExist;
    if (!allowNonExistingTarget && existingItemDoesntExist) {
      throw Error(`
Tried to create a relativeLink between existingItem:${existingItemPath}, newItem:${newItemPath}
but existingItem didn't actually exist`);
    } else {
      const parentOfNewItem = FileSystem2.parentPath(newItemPath);
      await FileSystem2.ensureIsFolder(parentOfNewItem, { overwrite, renameExtension });
      const hardPathToNewItem = `${await FileSystem2.makeHardPathTo(parentOfNewItem)}/${FileSystem2.basename(newItemPath)}`;
      const hardPathToExistingItem = await FileSystem2.makeHardPathTo(existingItemPath);
      const pathFromNewToExisting = relative3(hardPathToNewItem, hardPathToExistingItem).replace(/^\.\.\//, "");
      if (force) {
        FileSystem2.sync.clearAPathFor(hardPathToNewItem, { overwrite, renameExtension });
      }
      return Deno.symlink(
        pathFromNewToExisting,
        hardPathToNewItem
      );
    }
  },
  async absoluteLink({ existingItem, newItem, force = true, allowNonExistingTarget = false, overwrite = false, renameExtension = null }) {
    existingItem = (existingItem.path || existingItem).replace(/\/+$/, "");
    const newItemPath = FileSystem2.normalize(newItem.path || newItem).replace(/\/+$/, "");
    const existingItemDoesntExist = (await Deno.lstat(existingItem).catch(() => ({ doesntExist: true }))).doesntExist;
    if (!allowNonExistingTarget && existingItemDoesntExist) {
      throw Error(`
Tried to create a relativeLink between existingItem:${existingItem}, newItemPath:${newItemPath}
but existingItem didn't actually exist`);
    } else {
      const parentOfNewItem = FileSystem2.parentPath(newItemPath);
      await FileSystem2.ensureIsFolder(parentOfNewItem, { overwrite, renameExtension });
      const hardPathToNewItem = `${await FileSystem2.makeHardPathTo(parentOfNewItem)}/${FileSystem2.basename(newItemPath)}`;
      if (force) {
        FileSystem2.sync.clearAPathFor(hardPathToNewItem, { overwrite, renameExtension });
      }
      return Deno.symlink(
        FileSystem2.makeAbsolutePath(existingItem),
        newItemPath
      );
    }
  },
  pathPieces(path4) {
    path4 = path4.path || path4;
    const result2 = parse3(path4);
    const folderList = [];
    let dirname9 = result2.dir;
    while (true) {
      folderList.push(basename3(dirname9));
      if (dirname9 == dirname3(dirname9)) {
        break;
      }
      dirname9 = dirname3(dirname9);
    }
    folderList.reverse();
    return [folderList, result2.name, result2.ext];
  },
  async *iterateBasenamesIn(pathOrFileInfo) {
    const info = pathOrFileInfo instanceof ItemInfo2 ? pathOrFileInfo : await FileSystem2.info(pathOrFileInfo);
    if (info.isFolder) {
      for await (const each3 of Deno.readDir(pathOrFileInfo.path)) {
        yield dirEntry.name;
      }
    }
  },
  listBasenamesIn(pathOrFileInfo) {
    return asyncIteratorToList2(FileSystem2.iterateBasenamesIn(pathOrFileInfo));
  },
  async *iteratePathsIn(pathOrFileInfo, options = { recursively: false, shouldntInclude: null, shouldntExplore: null, searchOrder: "breadthFirstSearch", maxDepth: Infinity, dontFollowSymlinks: false, dontReturnSymlinks: false }) {
    let info;
    try {
      info = pathOrFileInfo instanceof ItemInfo2 ? pathOrFileInfo : await FileSystem2.info(pathOrFileInfo);
    } catch (error) {
      if (!error.message.match(/^PermissionDenied:/)) {
        throw error;
      }
    }
    const path4 = info.path;
    if (!options.recursively) {
      if (info.isFolder) {
        if (!options.shouldntInclude) {
          for await (const each3 of Deno.readDir(path4)) {
            if (options.dontReturnSymlinks && each3.isSymlink) {
              continue;
            }
            yield join4(path4, each3.name);
          }
        } else {
          const shouldntInclude = options.shouldntInclude;
          for await (const each3 of Deno.readDir(path4)) {
            const eachPath2 = join4(path4, each3.name);
            if (options.dontReturnSymlinks && each3.isSymlink) {
              continue;
            }
            const shouldntIncludeThis = shouldntInclude && await shouldntInclude(eachPath2);
            if (!shouldntIncludeThis) {
              yield eachPath2;
            }
          }
        }
      }
    } else {
      options = { exclude: /* @__PURE__ */ new Set(), searchOrder: "breadthFirstSearch", maxDepth: Infinity, ...options };
      options.searchOrder = options.searchOrder || "breadthFirstSearch";
      const { shouldntExplore, shouldntInclude } = options;
      if (!["breadthFirstSearch", "depthFirstSearch"].includes(options.searchOrder)) {
        throw Error(`when calling FileSystem.iterateItemsIn('${path4}', { searchOrder: ${options.searchOrder} })

    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'
    However, it was not either of those: ${options.searchOrder}`);
      }
      const useBreadthFirstSearch = options.searchOrder == "breadthFirstSearch";
      const shouldntExploreThis = shouldntExplore && await shouldntExplore(info.path, info);
      if (!shouldntExploreThis && options.maxDepth > 0 && info.isFolder) {
        options.exclude = options.exclude instanceof Set ? options.exclude : new Set(options.exclude);
        if (!options.exclude.has(path4)) {
          const followSymlinks = !options.dontFollowSymlinks;
          const absolutePathVersion = FileSystem2.makeAbsolutePath(path4);
          options.exclude.add(absolutePathVersion);
          options.maxDepth -= 1;
          const searchAfterwords = [];
          for await (const entry of Deno.readDir(path4)) {
            const eachPath2 = join4(path4, entry.name);
            if (options.dontReturnSymlinks && each.isSymlink) {
              continue;
            }
            const shouldntIncludeThis = shouldntInclude && await shouldntInclude(eachPath2);
            if (!shouldntIncludeThis) {
              yield eachPath2;
            }
            if (entry.isFile) {
              continue;
            }
            if (followSymlinks && !entry.isDirectory) {
              let isSymlinkToDirectory = false;
              try {
                isSymlinkToDirectory = (await Deno.stat(eachPath2)).isDirectory;
              } catch (error) {
              }
              if (!isSymlinkToDirectory) {
                continue;
              }
            }
            if (useBreadthFirstSearch) {
              searchAfterwords.push(eachPath2);
            } else {
              for await (const eachSubPath of FileSystem2.iteratePathsIn(eachPath2, options)) {
                yield eachSubPath;
              }
            }
          }
          for (const eachParentItem of searchAfterwords) {
            for await (const eachSubPath of FileSystem2.iteratePathsIn(eachParentItem, options)) {
              yield eachSubPath;
            }
          }
        }
      }
    }
  },
  listPathsIn(pathOrFileInfo, options) {
    return asyncIteratorToList2(FileSystem2.iteratePathsIn(pathOrFileInfo, options));
  },
  async *iterateItemsIn(pathOrFileInfo, options = { recursively: false, shouldntInclude: null, shouldntExplore: null, searchOrder: "breadthFirstSearch", maxDepth: Infinity }) {
    options = { exclude: /* @__PURE__ */ new Set(), searchOrder: "breadthFirstSearch", maxDepth: Infinity, ...options };
    options.searchOrder = options.searchOrder || "breadthFirstSearch";
    const { shouldntExplore, shouldntInclude } = options;
    const info = pathOrFileInfo instanceof ItemInfo2 ? pathOrFileInfo : await FileSystem2.info(pathOrFileInfo);
    const path4 = info.path;
    if (!["breadthFirstSearch", "depthFirstSearch"].includes(options.searchOrder)) {
      throw Error(`when calling FileSystem.iterateItemsIn('${path4}', { searchOrder: ${options.searchOrder} })

    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'
    However, it was not either of those: ${options.searchOrder}`);
    }
    const useBreadthFirstSearch = options.searchOrder == "breadthFirstSearch";
    const shouldntExploreThis = shouldntExplore && await shouldntExplore(info);
    if (!shouldntExploreThis && options.maxDepth > 0 && info.isFolder) {
      options.exclude = options.exclude instanceof Set ? options.exclude : new Set(options.exclude);
      if (!options.exclude.has(path4)) {
        const absolutePathVersion = FileSystem2.makeAbsolutePath(path4);
        options.exclude.add(absolutePathVersion);
        options.maxDepth -= 1;
        const searchAfterwords = [];
        for await (const entry of Deno.readDir(path4)) {
          const eachItem = await FileSystem2.info(join4(path4, entry.name));
          const shouldntIncludeThis = shouldntInclude && await shouldntInclude(eachItem);
          if (!shouldntIncludeThis) {
            yield eachItem;
          }
          if (options.recursively) {
            if (eachItem.isFolder) {
              if (useBreadthFirstSearch) {
                searchAfterwords.push(eachItem);
              } else {
                for await (const eachSubPath of FileSystem2.iterateItemsIn(eachItem, options)) {
                  yield eachSubPath;
                }
              }
            }
          }
        }
        for (const eachParentItem of searchAfterwords) {
          for await (const eachSubPath of FileSystem2.iterateItemsIn(eachParentItem, options)) {
            yield eachSubPath;
          }
        }
      }
    }
  },
  async listItemsIn(pathOrFileInfo, options) {
    const outputPromises = [];
    for await (const eachPath2 of FileSystem2.iteratePathsIn(pathOrFileInfo, options)) {
      outputPromises.push(FileSystem2.info(eachPath2));
    }
    return Promise.all(outputPromises);
  },
  // includes symlinks if they link to files and pipes
  async listFileItemsIn(pathOrFileInfo, options = { treatAllSymlinksAsFiles: false }) {
    const { treatAllSymlinksAsFiles } = { treatAllSymlinksAsFiles: false, ...options };
    const items = await FileSystem2.listItemsIn(pathOrFileInfo, options);
    if (treatAllSymlinksAsFiles) {
      return items.filter((eachItem) => eachItem.isFile || treatAllSymlinksAsFiles && eachItem.isSymlink);
    } else {
      return items.filter((eachItem) => eachItem.isFile);
    }
  },
  async listFilePathsIn(pathOrFileInfo, options = { treatAllSymlinksAsFiles: false }) {
    return (await FileSystem2.listFileItemsIn(pathOrFileInfo, options)).map((each3) => each3.path);
  },
  async listFileBasenamesIn(pathOrFileInfo, options = { treatAllSymlinksAsFiles: false }) {
    return (await FileSystem2.listFileItemsIn(pathOrFileInfo, options)).map((each3) => each3.basename);
  },
  async listFolderItemsIn(pathOrFileInfo, options = { ignoreSymlinks: false }) {
    const { ignoreSymlinks } = { ignoreSymlinks: false, ...options };
    const items = await FileSystem2.listItemsIn(pathOrFileInfo, options);
    if (ignoreSymlinks) {
      return items.filter((eachItem) => eachItem.isFolder && !eachItem.isSymlink);
    } else {
      return items.filter((eachItem) => eachItem.isFolder);
    }
  },
  async listFolderPathsIn(pathOrFileInfo, options = { ignoreSymlinks: false }) {
    return (await FileSystem2.listFolderItemsIn(pathOrFileInfo, options)).map((each3) => each3.path);
  },
  async listFolderBasenamesIn(pathOrFileInfo, options = { ignoreSymlinks: false }) {
    return (await FileSystem2.listFolderItemsIn(pathOrFileInfo, options)).map((each3) => each3.basename);
  },
  recursivelyIterateItemsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    options.recursively = true;
    if (options.onlyHardlinks) {
      if (options.shouldntInclude) {
        const originalshouldntInclude = options.shouldntInclude;
        options.shouldntInclude = (each3) => each3.isSymlink || originalshouldntInclude(each3);
      } else {
        options.shouldntInclude = (each3) => each3.isSymlink;
      }
    }
    if (options.dontFollowSymlinks) {
      if (options.shouldntExplore) {
        const originalShouldntExplore = options.shouldntInclude;
        options.shouldntExplore = (each3) => each3.isSymlink || originalShouldntExplore(each3);
      } else {
        options.shouldntExplore = (each3) => each3.isSymlink;
      }
    }
    return FileSystem2.iterateItemsIn(pathOrFileInfo, options);
  },
  recursivelyIteratePathsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    options.recursively = true;
    if (options.onlyHardlinks) {
      if (options.shouldntInclude) {
        const originalshouldntInclude = options.shouldntInclude;
        options.shouldntInclude = (each3) => each3.isSymlink || originalshouldntInclude(each3);
      } else {
        options.shouldntInclude = (each3) => each3.isSymlink;
      }
    }
    return FileSystem2.iteratePathsIn(pathOrFileInfo, options);
  },
  recursivelyListPathsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    return asyncIteratorToList2(FileSystem2.recursivelyIteratePathsIn(pathOrFileInfo, options));
  },
  recursivelyListItemsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    return asyncIteratorToList2(FileSystem2.recursivelyIterateItemsIn(pathOrFileInfo, options));
  },
  async *globIterator(pattern, options = { startPath: null }) {
    var { startPath, ...iteratePathsOptions } = options;
    startPath = startPath || ".";
    const regex3 = pattern instanceof RegExp ? pattern : globToRegExp(pattern);
    for await (const eachPath2 of FileSystem2.iteratePathsIn(startPath, { recursively: true, ...iteratePathsOptions })) {
      if (eachPath2.match(regex3) || FileSystem2.makeAbsolutePath(eachPath2).match(regex3)) {
        yield FileSystem2.makeRelativePath({
          from: startPath,
          to: eachPath2
        });
      }
    }
  },
  glob(pattern, options = { startPath: null }) {
    return asyncIteratorToList2(FileSystem2.globIterator(pattern, options));
  },
  async getPermissions({ path: path4 }) {
    const { mode } = await Deno.lstat(path4);
    return {
      owner: {
        //          rwxrwxrwx
        canRead: !!(256 & mode),
        canWrite: !!(128 & mode),
        canExecute: !!(64 & mode)
      },
      group: {
        canRead: !!(32 & mode),
        canWrite: !!(16 & mode),
        canExecute: !!(8 & mode)
      },
      others: {
        canRead: !!(4 & mode),
        canWrite: !!(2 & mode),
        canExecute: !!(1 & mode)
      }
    };
  },
  /**
  * Add/set file permissions
  *
  * @param {String} args.path - 
  * @param {Object|Boolean} args.recursively - 
  * @param {Object} args.permissions - 
  * @param {Object} args.permissions.owner - 
  * @param {Boolean} args.permissions.owner.canRead - 
  * @param {Boolean} args.permissions.owner.canWrite - 
  * @param {Boolean} args.permissions.owner.canExecute - 
  * @param {Object} args.permissions.group - 
  * @param {Boolean} args.permissions.group.canRead - 
  * @param {Boolean} args.permissions.group.canWrite - 
  * @param {Boolean} args.permissions.group.canExecute - 
  * @param {Object} args.permissions.others - 
  * @param {Boolean} args.permissions.others.canRead - 
  * @param {Boolean} args.permissions.others.canWrite - 
  * @param {Boolean} args.permissions.others.canExecute - 
  * @return {null} 
  *
  * @example
  *  await FileSystem.addPermissions({
  *      path: fileOrFolderPath,
  *      permissions: {
  *          owner: {
  *              canExecute: true,
  *          },
  *      }
  *  })
  */
  async addPermissions({ path: path4, permissions = { owner: {}, group: {}, others: {} }, recursively = false }) {
    permissions = { owner: {}, group: {}, others: {}, ...permissions };
    let permissionNumber = 0;
    let fileInfo;
    if (!(Object.keys(permissions.owner).length === Object.keys(permissions.group).length === Object.keys(permissions.others).length === 3)) {
      fileInfo = await FileSystem2.info(path4);
      permissionNumber = fileInfo.lstat.mode & 511;
    }
    if (permissions.owner.canRead != null) {
      if (permissions.owner.canRead) {
        permissionNumber |= 256;
      } else {
        permissionNumber &= 767;
      }
    }
    if (permissions.owner.canWrite != null) {
      if (permissions.owner.canWrite) {
        permissionNumber |= 128;
      } else {
        permissionNumber &= 895;
      }
    }
    if (permissions.owner.canExecute != null) {
      if (permissions.owner.canExecute) {
        permissionNumber |= 64;
      } else {
        permissionNumber &= 959;
      }
    }
    if (permissions.group.canRead != null) {
      if (permissions.group.canRead) {
        permissionNumber |= 32;
      } else {
        permissionNumber &= 991;
      }
    }
    if (permissions.group.canWrite != null) {
      if (permissions.group.canWrite) {
        permissionNumber |= 16;
      } else {
        permissionNumber &= 1007;
      }
    }
    if (permissions.group.canExecute != null) {
      if (permissions.group.canExecute) {
        permissionNumber |= 8;
      } else {
        permissionNumber &= 1015;
      }
    }
    if (permissions.others.canRead != null) {
      if (permissions.others.canRead) {
        permissionNumber |= 4;
      } else {
        permissionNumber &= 1019;
      }
    }
    if (permissions.others.canWrite != null) {
      if (permissions.others.canWrite) {
        permissionNumber |= 2;
      } else {
        permissionNumber &= 1021;
      }
    }
    if (permissions.others.canExecute != null) {
      if (permissions.others.canExecute) {
        permissionNumber |= 1;
      } else {
        permissionNumber &= 1022;
      }
    }
    if (recursively == false || fileInfo instanceof Object && fileInfo.isFile || !(fileInfo instanceof Object) && (await FileSystem2.info(path4)).isFile) {
      return Deno.chmod(path4.path || path4, permissionNumber);
    } else {
      const promises = [];
      const paths = await FileSystem2.recursivelyListPathsIn(path4, { onlyHardlinks: false, dontFollowSymlinks: false, ...recursively });
      for (const eachPath2 of paths) {
        promises.push(
          Deno.chmod(eachPath2, permissionNumber).catch(console.error)
        );
      }
      return new Promise(async (resolve9, reject2) => {
        for (const each3 of promises) {
          await each3;
        }
        resolve9();
      });
    }
  },
  // alias
  setPermissions(...args) {
    return FileSystem2.addPermissions(...args);
  },
  async write({ path: path4, data, force = true, overwrite = false, renameExtension = null }) {
    await grabPathLock2(path4);
    if (force) {
      await FileSystem2.ensureIsFolder(FileSystem2.parentPath(path4), { overwrite, renameExtension });
      const info = await FileSystem2.info(path4);
      if (info.isDirectory) {
        await FileSystem2.remove(path4);
      }
    }
    let output2;
    if (isGeneratorType2(data) || data[Symbol.iterator] || data[Symbol.asyncIterator]) {
      const file = await Deno.open(path4, { read: true, write: true, create: true, truncate: true });
      const encoder = new TextEncoder();
      const encode = encoder.encode.bind(encoder);
      try {
        let index = 0;
        for await (let packet of data) {
          if (typeof packet == "string") {
            packet = encode(packet);
          }
          await Deno.write(file.rid, packet);
        }
      } finally {
        Deno.close(file.rid);
      }
    } else if (typeof data == "string") {
      output2 = await Deno.writeTextFile(path4, data);
    } else {
      output2 = await Deno.writeFile(path4, data);
    }
    delete locker2[path4];
    return output2;
  },
  async append({ path: path4, data, force = true, overwrite = false, renameExtension = null }) {
    await grabPathLock2(path4);
    if (force) {
      FileSystem2.sync.ensureIsFolder(FileSystem2.parentPath(path4), { overwrite, renameExtension });
      const info = await FileSystem2.info(path4);
      if (info.isDirectory) {
        await FileSystem2.remove(path4);
      }
    }
    const file = await Deno.open(path4, { read: true, write: true, create: true });
    await file.seek(0, Deno.SeekMode.End);
    if (typeof data == "string") {
      await file.write(new TextEncoder().encode(data));
    } else {
      await file.write(data);
    }
    await file.close();
    delete locker2[path4];
  },
  async makeHardPathTo(path4, options = {}) {
    var { cache: cache4 } = { cache: {}, ...options };
    if (cache4[path4]) {
      return cache4[path4];
    }
    const [folders, name, extension] = FileSystem2.pathPieces(FileSystem2.makeAbsolutePath(path4));
    let topDownPath = ``;
    for (const eachFolderName of folders) {
      topDownPath += `/${eachFolderName}`;
      if (cache4[topDownPath]) {
        topDownPath = cache4[topDownPath];
        continue;
      }
      const unchangedPath = topDownPath;
      const info = await FileSystem2.info(topDownPath);
      if (info.isSymlink) {
        const absolutePathToIntermediate = await FileSystem2.finalTargetOf(info.path, { _parentsHaveBeenChecked: true, cache: cache4 });
        if (absolutePathToIntermediate == null) {
          return null;
        }
        topDownPath = topDownPath.slice(0, -(eachFolderName.length + 1));
        const relativePath = FileSystem2.makeRelativePath({
          from: topDownPath,
          to: absolutePathToIntermediate
        });
        topDownPath += `/${relativePath}`;
        topDownPath = normalize3(topDownPath);
      }
      cache4[unchangedPath] = topDownPath;
    }
    const hardPath = normalize3(`${topDownPath}/${name}${extension}`);
    cache4[path4] = hardPath;
    return hardPath;
  },
  async walkUpImport(path4, start) {
    const startPath = start || FileSystem2.pathOfCaller(1);
    const nearestPath = await FileSystem2.walkUpUntil(path4, startPath);
    if (nearestPath) {
      const absolutePath = FileSystem2.makeAbsolutePath(`${nearestPath}/${path4}`);
      return import(toFileUrl3(absolutePath).href);
    } else {
      throw Error(`Tried to walkUpImport ${path4}, starting at ${startPath}, but was unable to find any files`);
    }
  },
  pathOfCaller(callerNumber = void 0) {
    const err = new Error();
    let filePaths = findAll2(/^.+file:\/\/(\/[\w\W]*?):/gm, err.stack).map((each3) => each3[1]);
    if (callerNumber) {
      filePaths = filePaths.slice(callerNumber);
    }
    try {
      const secondPath = filePaths[1];
      if (secondPath) {
        try {
          if (Deno.statSync(secondPath).isFile) {
            return secondPath;
          }
        } catch (error) {
        }
      }
    } catch (error) {
    }
    return Deno.cwd();
  },
  sync: {
    info(fileOrFolderPath, _cachedLstat = null) {
      let lstat = _cachedLstat;
      try {
        lstat = Deno.lstatSync(fileOrFolderPath);
      } catch (error) {
        lstat = { doesntExist: true };
      }
      let stat = {};
      if (!lstat.isSymlink) {
        stat = {
          isBrokenLink: false,
          isLoopOfLinks: false
        };
      } else {
        try {
          stat = Deno.statSync(fileOrFolderPath);
        } catch (error) {
          if (error.message.match(/^Too many levels of symbolic links/)) {
            stat.isBrokenLink = true;
            stat.isLoopOfLinks = true;
          } else if (error.message.match(/^No such file or directory/)) {
            stat.isBrokenLink = true;
          } else {
            throw error;
          }
        }
      }
      return new ItemInfo2({ path: fileOrFolderPath, _lstatData: lstat, _statData: stat });
    },
    remove(fileOrFolder) {
      if (fileOrFolder instanceof Array) {
        return fileOrFolder.map(FileSystem2.sync.remove);
      }
      fileOrFolder = fileOrFolder.path || fileOrFolder;
      let exists2 = false;
      let item;
      try {
        item = Deno.lstatSync(fileOrFolder);
        exists2 = true;
      } catch (error) {
      }
      if (exists2) {
        if (item.isFile || item.isSymlink) {
          return Deno.removeSync(fileOrFolder.replace(/\/+$/, ""));
        } else {
          return Deno.removeSync(fileOrFolder.replace(/\/+$/, ""), { recursive: true });
        }
      }
    },
    moveOutOfTheWay(path4, options = { extension: null }) {
      const extension = options?.extension || FileSystem2.defaultRenameExtension;
      const info = FileSystem2.sync.info(path4);
      if (info.exists) {
        const newPath = path4 + extension;
        FileSystem2.sync.moveOutOfTheWay(newPath, { extension });
        moveSync(path4, newPath);
      }
    },
    ensureIsFolder(path4, options = { overwrite: false, renameExtension: null }) {
      const { overwrite, renameExtension } = defaultOptionsHelper2(options);
      path4 = path4.path || path4;
      path4 = FileSystem2.makeAbsolutePath(path4);
      const parentPath = dirname3(path4);
      if (parentPath == path4) {
        return;
      }
      const parent = FileSystem2.sync.info(parentPath);
      if (!parent.isDirectory) {
        FileSystem2.sync.ensureIsFolder(parentPath, { overwrite, renameExtension });
      }
      let pathInfo = FileSystem2.sync.info(path4);
      if (pathInfo.exists && !pathInfo.isDirectory) {
        if (overwrite) {
          FileSystem2.sync.remove(path4);
        } else {
          FileSystem2.sync.moveOutOfTheWay(path4, { extension: renameExtension });
        }
      }
      Deno.mkdirSync(path4, { recursive: true });
      return path4;
    },
    /**
     * Move/Remove everything and Ensure parent folders
     *
     * @param path
     * @param options.overwrite - if false, then things in the way will be moved instead of deleted
     * @param options.extension - the string to append when renaming files to get them out of the way
     * 
     * @example
     *     FileSystem.sync.clearAPathFor("./something")
     */
    clearAPathFor(path4, options = { overwrite: false, renameExtension: null }) {
      const { overwrite, renameExtension } = defaultOptionsHelper2(options);
      const originalPath = path4;
      const paths = [];
      while (dirname3(path4) !== path4) {
        paths.push(path4);
        path4 = dirname3(path4);
      }
      for (const eachPath2 of paths.reverse()) {
        const info = FileSystem2.sync.info(eachPath2);
        if (!info.exists) {
          break;
        } else if (info.isFile) {
          if (overwrite) {
            FileSystem2.sync.remove(eachPath2);
          } else {
            FileSystem2.sync.moveOutOfTheWay(eachPath2, { extension: renameExtension });
          }
        }
      }
      Deno.mkdirSync(dirname3(originalPath), { recursive: true });
      return originalPath;
    },
    append({ path: path4, data, force = true, overwrite = false, renameExtension = null }) {
      if (force) {
        FileSystem2.sync.ensureIsFolder(FileSystem2.parentPath(path4), { overwrite, renameExtension });
        const info = FileSystem2.sync.info(path4);
        if (info.isDirectory) {
          FileSystem2.sync.remove(path4);
        }
      }
      const file = Deno.openSync(path4, { read: true, write: true, create: true });
      file.seekSync(0, Deno.SeekMode.End);
      if (typeof data == "string") {
        file.writeSync(new TextEncoder().encode(data));
      } else {
        file.writeSync(data);
      }
      file.close();
    }
  }
};
var glob2 = FileSystem2.glob;

// generic_tools/fasta_parser.js
function parseFasta(incomingString) {
  const accession = `(?<accession>[^\\| ]+)`;
  const name = `(?<name>[^\\| ]+)`;
  const integer = `(?<integer>-?\\d+)`;
  const sequenceNumber = `(?<sequenceNumber>[^\\| ]+)`;
  const applicationNumber = `(?<applicationNumber>[^\\| ]+)`;
  const database = `(?<database>[^\\| ]+)`;
  const country = `(?<country>[^\\| ]+)`;
  const locus = `(?<locus>[^\\| ]+)`;
  const entry = `(?<entry>[^\\| ]+)`;
  const chain2 = `(?<chain>[^\\| ]+)`;
  const patent = `(?<patent>[^\\| ]+)`;
  const string2 = `(?<string>[^\\| ]+)`;
  const ncbiIdentifierDefinitions = {
    [`tr\\|${accession}\\|${name}`]: { name: "TrEMBL                                                                        ", example: ["tr|Q90RT2|Q90RT2_9HIV1"] },
    [`tpg\\|${accession}\\|${name}`]: { name: "third-party GenBank https://www.ncbi.nlm.nih.gov/Genbank/index.html           ", example: ["tpg|BK003456|"] },
    [`tpe\\|${accession}\\|${name}`]: { name: "third-party EMBL http://www.embl-heidelberg.de                                ", example: ["tpe|BN000123|"] },
    [`tpd\\|${accession}\\|${name}`]: { name: "third-party DDBJ http://www.ddbj.nig.ac.jp                                    ", example: ["tpd|FAA00017|"] },
    [`sp\\|${accession}\\|${name}`]: { name: "SWISS-PROT http://www.ebi.ac.uk/swissprot                                     ", example: ["sp|P01013|OVAX_CHICK"] },
    [`ref\\|${accession}\\|${name}`]: { name: "RefSeq https://www.ncbi.nlm.nih.gov/projects/RefSeq                           ", example: ["ref|NM_010450.1|"] },
    [`prf\\|${accession}\\|${name}`]: { name: "PRF http://www.prf.or.jp                                                      ", example: ["prf||0806162C"] },
    [`pir\\|${accession}\\|${name}`]: { name: "PIR https://web.archive.org/web/20140312021627/http://pir.georgetown.edu/     ", example: ["pir||G36364"] },
    [`pgp\\|${country}\\|${applicationNumber}\\|${sequenceNumber}`]: { name: "pre-grant patent                                                              ", example: ["pgp|EP|0238993|7"] },
    [`pdb\\|${entry}\\|${chain2}`]: { name: "PDB https://web.archive.org/web/20080828002005/http://www.rcsb.org./pdb       ", example: ["pdb|1I4L|D"] },
    [`pat\\|${country}\\|${patent}\\|${sequenceNumber}`]: { name: "patent                                                                        ", example: ["pat|US|RE33188|1"] },
    [`lcl\\|(${integer}|${string2})`]: { name: "local (i.e. no database reference)                                            ", example: ["lcl|123", "lcl|hmm271"] },
    [`gnl\\|${database}\\|(${integer}|${string2})`]: { name: "general database reference(a reference to a database that's not in this list) ", example: ["gnl|taxon|9606", "gnl|PID|e1632"] },
    [`gim\\|${integer}`]: { name: "GenInfo import ID                                                             ", example: ["gim|123"] },
    [`gi\\|${integer}`]: { name: "GenInfo integrated database                                                   ", example: ["gi|21434723"] },
    [`gb\\|${accession}\\|${locus}`]: { name: "GenBank https://www.ncbi.nlm.nih.gov/Genbank/index.html                       ", example: ["gb|M73307|AGMA13GT"] },
    [`emb\\|${accession}\\|${locus}`]: { name: "EMBL http://www.embl-heidelberg.de                                            ", example: ["emb|CAM43271.1|"] },
    [`dbj\\|${accession}\\|${locus}`]: { name: "DDBJ http://www.ddbj.nig.ac.jp                                                ", example: ["dbj|BAC85684.1|"] },
    [`bbs\\|${integer}`]: { name: "GenInfo backbone seqid                                                        ", example: ["bbs|123"] },
    [`bbm\\|${integer}`]: { name: "GenInfo backbone moltype                                                      ", example: ["bbm|123"] }
  };
  const oneOfNcbiIdentifiers = `(${Object.keys(ncbiIdentifierDefinitions).join("|")})`.replace(/\(\?\<\w+>/g, "(");
  const prefixPattern = new RegExp(`^${oneOfNcbiIdentifiers}+`);
  const recordStrings = incomingString.split(/(^|\r?\n)>/g);
  const records = [];
  let index = 0;
  for (const each3 of recordStrings) {
    const isBlankLine = !each3.trim();
    if (isBlankLine) {
      continue;
    }
    const record = {
      index: index++,
      hasIdentifiers: false,
      comment: "",
      rawComment: "",
      aminoAcidsString: "",
      ncbiIdentifiers: []
    };
    var [rawComment, ...aminoAcidsStrings] = each3.split(/\n/g);
    record.comment = rawComment;
    record.rawComment = rawComment;
    record.aminoAcidsString = aminoAcidsStrings.join("");
    const ncbiIdentifiersMatch = rawComment.match(prefixPattern);
    if (ncbiIdentifiersMatch) {
      record.comment = rawComment.slice(ncbiIdentifiersMatch[0].length).trim();
      record.hasIdentifiers = true;
      var remaining = ncbiIdentifiersMatch[0];
      var extraction = true;
      while (extraction && remaining.length > 0) {
        var { remaining, extraction } = extractFirst({ pattern: new RegExp(oneOfNcbiIdentifiers), from: remaining });
        for (const [key, value] of Object.entries(ncbiIdentifierDefinitions)) {
          const pattern = new RegExp(key);
          const match = extraction.match(pattern);
          if (match) {
            record.ncbiIdentifiers.push({
              args: match.groups,
              info: value
              // link to ncbi information
            });
            break;
          }
        }
      }
    }
    records.push(record);
  }
  return records;
}

// specific_tools/load_mixed_examples.js
async function loadMixedExamples({ filePath, aminoMatchPattern, windowPadding, skipEntryIf }) {
  const mixedString = await FileSystem2.read(filePath);
  function getWindows(string2) {
    let output2 = [];
    const windowSize = windowPadding * 2 + 1;
    for (const each3 of findAll3(aminoMatchPattern, string2)) {
      const min2 = each3.index - windowPadding >= 0 ? each3.index - windowPadding : 0;
      const slice2 = string2.slice(min2, each3.index + windowPadding + 1);
      if (slice2.length === windowSize) {
        output2.push({ index: min2, slice: slice2 });
      }
    }
    return output2;
  }
  const summaryData2 = {
    sCounts: 0,
    aminoAcidCount: 0,
    styCounts: 0
  };
  const geneIds2 = /* @__PURE__ */ new Set();
  const geneList = parseFasta(mixedString);
  const geneData2 = {};
  const mixedExamples2 = [];
  for (const eachGene of geneList) {
    const geneName = eachGene.ncbiIdentifiers[0].args.name;
    const uniprotGeneId = eachGene.ncbiIdentifiers[0].args.accession;
    eachGene.abbreviatedGeneSpecies = geneName;
    eachGene.uniprotGeneId = uniprotGeneId;
    eachGene.phosWindows = getWindows(eachGene.aminoAcidsString);
    if (skipEntryIf({ ...eachGene, uniprotGeneId })) {
      continue;
    }
    geneIds2.add(uniprotGeneId);
    geneData2[uniprotGeneId] = eachGene;
    summaryData2.aminoAcidCount += eachGene.aminoAcidsString.length;
    if (eachGene.aminoAcidsString.match(/S/g)) {
      summaryData2.sCounts += eachGene.aminoAcidsString.match(/S/g).length;
    }
    if (eachGene.aminoAcidsString.match(/S|T|Y/g)) {
      summaryData2.styCounts += eachGene.aminoAcidsString.match(/S|T|Y/g).length;
    }
    for (const { index, slice: slice2 } of eachGene.phosWindows) {
      mixedExamples2.push({
        siteId: `${uniprotGeneId}|${index}`,
        indexRelativeToGene: index,
        aminoAcids: slice2,
        isPhosSite: 0,
        geneInfo: eachGene
      });
    }
  }
  return {
    mixedExamples: mixedExamples2,
    summaryData: summaryData2,
    geneIds: geneIds2,
    geneData: geneData2
  };
}

// esbuild_serve:http-import:https://deno.land/x/quickr@0.6.38/main/file_system.js
ensure({ denoVersion: "1.17.1" });
var cache3 = {};
var ItemInfo3 = class {
  constructor({ path: path4, _lstatData, _statData }) {
    this.path = path4;
    this._lstat = _lstatData;
    this._data = _statData;
  }
  // 
  // core data sources
  // 
  refresh() {
    this._lstat = null;
    this._data = null;
  }
  get lstat() {
    if (!this._lstat) {
      try {
        this._lstat = Deno.lstatSync(this.path);
      } catch (error) {
        this._lstat = { doesntExist: true };
      }
    }
    return this._lstat;
  }
  get stat() {
    if (!this._stat) {
      const lstat = this.lstat;
      if (!lstat.isSymlink) {
        this._stat = {
          isBrokenLink: false,
          isLoopOfLinks: false
        };
      } else {
        try {
          this._stat = Deno.statSync(this.path);
        } catch (error) {
          this._stat = {};
          if (error.message.match(/^Too many levels of symbolic links/)) {
            this._stat.isBrokenLink = true;
            this._stat.isLoopOfLinks = true;
          } else if (error.message.match(/^No such file or directory/)) {
            this._stat.isBrokenLink = true;
          } else {
            throw error;
          }
        }
      }
    }
    return this._stat;
  }
  // 
  // main attributes
  // 
  get exists() {
    const lstat = this.lstat;
    return !lstat.doesntExist;
  }
  get name() {
    return parse3(this.path).name;
  }
  get extension() {
    return parse3(this.path).ext;
  }
  get basename() {
    return this.path && basename3(this.path);
  }
  get parentPath() {
    return this.path && dirname3(this.path);
  }
  relativePathFrom(parentPath) {
    return relative3(parentPath, this.path);
  }
  get link() {
    const lstat = this.lstat;
    if (lstat.isSymlink) {
      return Deno.readLinkSync(this.path);
    } else {
      return null;
    }
  }
  get isSymlink() {
    const lstat = this.lstat;
    return !!lstat.isSymlink;
  }
  get isRelativeSymlink() {
    const lstat = this.lstat;
    const isNotSymlink = !lstat.isSymlink;
    if (isNotSymlink) {
      return false;
    }
    const relativeOrAbsolutePath = Deno.readLinkSync(this.path);
    return !isAbsolute3(relativeOrAbsolutePath);
  }
  get isAbsoluteSymlink() {
    const lstat = this.lstat;
    const isNotSymlink = !lstat.isSymlink;
    if (isNotSymlink) {
      return false;
    }
    const relativeOrAbsolutePath = Deno.readLinkSync(this.path);
    return isAbsolute3(relativeOrAbsolutePath);
  }
  get isBrokenLink() {
    const stat = this.stat;
    return !!stat.isBrokenLink;
  }
  get isLoopOfLinks() {
    const stat = this.stat;
    return !!stat.isLoopOfLinks;
  }
  get isFile() {
    const lstat = this.lstat;
    if (lstat.doesntExist) {
      return false;
    }
    if (!lstat.isSymlink) {
      return lstat.isFile;
    } else {
      return !!this.stat.isFile;
    }
  }
  get isFolder() {
    const lstat = this.lstat;
    if (lstat.doesntExist) {
      return false;
    }
    if (!lstat.isSymlink) {
      return lstat.isDirectory;
    } else {
      return !!this.stat.isDirectory;
    }
  }
  get sizeInBytes() {
    const lstat = this.lstat;
    return lstat.size;
  }
  get permissions() {
    const { mode } = this.lstat;
    return {
      owner: {
        //          rwxrwxrwx
        canRead: !!(256 & mode),
        canWrite: !!(128 & mode),
        canExecute: !!(64 & mode)
      },
      group: {
        canRead: !!(32 & mode),
        canWrite: !!(16 & mode),
        canExecute: !!(8 & mode)
      },
      others: {
        canRead: !!(4 & mode),
        canWrite: !!(2 & mode),
        canExecute: !!(1 & mode)
      }
    };
  }
  // aliases
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
};
var defaultOptionsHelper3 = (options) => ({
  renameExtension: options.renameExtension || FileSystem3.defaultRenameExtension,
  overwrite: options.overwrite
});
var fileLockSymbol3 = Symbol.for("fileLock");
var locker3 = globalThis[fileLockSymbol3] || {};
var grabPathLock3 = async (path4) => {
  while (locker3[path4]) {
    await new Promise((resolve9) => setTimeout(resolve9, 70));
  }
  locker3[path4] = true;
};
var pathStandardize2 = (path4) => {
  path4 = path4.path || path4;
  if (typeof path4 == "string" && path4.startsWith("file:///")) {
    path4 = fromFileUrl3(path4);
  }
  return path4;
};
var FileSystem3 = {
  denoExecutablePath: Deno.execPath(),
  parentPath: dirname3,
  dirname: dirname3,
  basename: basename3,
  extname: extname3,
  join: join4,
  defaultRenameExtension: ".old",
  get home() {
    if (!cache3.home) {
      if (Deno.build.os != "windows") {
        cache3.home = Deno.env.get("HOME");
      } else {
        cache3.home = Deno.env.get("HOMEPATH");
      }
    }
    return cache3.home;
  },
  get workingDirectory() {
    return Deno.cwd();
  },
  set workingDirectory(value) {
    Deno.chdir(value);
  },
  get cwd() {
    return FileSystem3.workingDirectory;
  },
  set cwd(value) {
    return FileSystem3.workingDirectory = value;
  },
  get pwd() {
    return FileSystem3.cwd;
  },
  set pwd(value) {
    return FileSystem3.cwd = value;
  },
  cd(path4) {
    Deno.chdir(path4);
  },
  changeDirectory(path4) {
    Deno.chdir(path4);
  },
  get thisFile() {
    const err = new Error();
    const filePaths = findAll2(/^.+file:\/\/(\/[\w\W]*?):/gm, err.stack).map((each3) => each3[1]);
    const firstPath = filePaths[0];
    if (firstPath) {
      try {
        if (Deno.statSync(firstPath).isFile) {
          return firstPath;
        }
      } catch (error) {
      }
    }
    return ":<interpreter>:";
  },
  get thisFolder() {
    const err = new Error();
    const filePaths = findAll2(/^.+file:\/\/(\/[\w\W]*?):/gm, err.stack).map((each3) => each3[1]);
    const firstPath = filePaths[0];
    if (firstPath) {
      try {
        if (Deno.statSync(firstPath).isFile) {
          return dirname3(firstPath);
        }
      } catch (error) {
      }
    }
    return Deno.cwd();
  },
  async read(path4) {
    path4 = pathStandardize2(path4);
    await grabPathLock3(path4);
    let output2;
    try {
      output2 = await Deno.readTextFile(path4);
    } catch (error) {
    }
    delete locker3[path4];
    return output2;
  },
  async readBytes(path4) {
    path4 = pathStandardize2(path4);
    await grabPathLock3(path4);
    let output2;
    try {
      output2 = await Deno.readFile(path4);
    } catch (error) {
    }
    delete locker3[path4];
    return output2;
  },
  async *readLinesIteratively(path4) {
    path4 = pathStandardize2(path4);
    await grabPathLock3(path4);
    try {
      const file = await Deno.open(path4);
      try {
        yield* readLines(file);
      } finally {
        Deno.close(file.rid);
      }
    } finally {
      delete locker3[path4];
    }
  },
  async info(fileOrFolderPath, _cachedLstat = null) {
    fileOrFolderPath = pathStandardize2(fileOrFolderPath);
    await grabPathLock3(fileOrFolderPath);
    try {
      const lstat = _cachedLstat || await Deno.lstat(fileOrFolderPath).catch(() => ({ doesntExist: true }));
      let stat = {};
      if (!lstat.isSymlink) {
        stat = {
          isBrokenLink: false,
          isLoopOfLinks: false
        };
      } else {
        try {
          stat = await Deno.stat(fileOrFolderPath);
        } catch (error) {
          if (error.message.match(/^Too many levels of symbolic links/)) {
            stat.isBrokenLink = true;
            stat.isLoopOfLinks = true;
          } else if (error.message.match(/^No such file or directory/)) {
            stat.isBrokenLink = true;
          } else {
            if (!error.message.match(/^PermissionDenied:/)) {
              return { doesntExist: true, permissionDenied: true };
            }
            throw error;
          }
        }
      }
      return new ItemInfo3({ path: fileOrFolderPath, _lstatData: lstat, _statData: stat });
    } finally {
      delete locker3[fileOrFolderPath];
    }
  },
  async move({ item, newParentFolder, newName, force = true, overwrite = false, renameExtension = null }) {
    const oldPath = item.path || item;
    const oldName = FileSystem3.basename(oldPath);
    const itemInfo = item instanceof Object || await FileSystem3.info(oldPath);
    const newPath = `${newParentFolder}/${newName || oldName}`;
    if (itemInfo.isSymlink && !item.isBrokenLink) {
      const link = Deno.readLinkSync(itemInfo.path);
      if (!isAbsolute3(link)) {
        const linkTargetBeforeMove = `${FileSystem3.parentPath(itemInfo.path)}/${link}`;
        await FileSystem3.relativeLink({
          existingItem: linkTargetBeforeMove,
          newItem: newPath,
          force,
          overwrite,
          renameExtension
        });
        await FileSystem3.remove(itemInfo);
      }
    }
    if (force) {
      FileSystem3.sync.clearAPathFor(newPath, { overwrite, renameExtension });
    }
    await move(oldPath, newPath);
  },
  async remove(fileOrFolder) {
    fileOrFolder = pathStandardize2(fileOrFolder);
    if (fileOrFolder instanceof Array) {
      return Promise.all(fileOrFolder.map(FileSystem3.remove));
    }
    fileOrFolder = fileOrFolder.path || fileOrFolder;
    const itemInfo = await FileSystem3.info(fileOrFolder);
    if (itemInfo.isFile || itemInfo.isSymlink) {
      return Deno.remove(itemInfo.path.replace(/\/+$/, ""));
    } else if (itemInfo.exists) {
      return Deno.remove(itemInfo.path.replace(/\/+$/, ""), { recursive: true });
    }
  },
  normalize: (path4) => normalize3(pathStandardize2(path4)).replace(/\/$/, ""),
  isAbsolutePath: isAbsolute3,
  isRelativePath: (...args) => !isAbsolute3(...args),
  makeRelativePath: ({ from, to }) => relative3(from.path || from, to.path || to),
  makeAbsolutePath: (path4) => {
    if (!isAbsolute3(path4)) {
      return normalize3(join4(Deno.cwd(), path4));
    } else {
      return normalize3(path4);
    }
  },
  async finalTargetOf(path4, options = {}) {
    const { _parentsHaveBeenChecked, cache: cache4 } = { _parentsHaveBeenChecked: false, cache: {}, ...options };
    const originalWasItem = path4 instanceof ItemInfo3;
    path4 = path4.path || path4;
    let result2 = await Deno.lstat(path4).catch(() => ({ doesntExist: true }));
    if (result2.doesntExist) {
      return null;
    }
    path4 = await FileSystem3.makeHardPathTo(path4, { cache: cache4 });
    const pathChain = [];
    while (result2.isSymlink) {
      const relativeOrAbsolutePath = await Deno.readLink(path4);
      if (isAbsolute3(relativeOrAbsolutePath)) {
        path4 = relativeOrAbsolutePath;
      } else {
        path4 = `${FileSystem3.parentPath(path4)}/${relativeOrAbsolutePath}`;
      }
      result2 = await Deno.lstat(path4).catch(() => ({ doesntExist: true }));
      if (result2.doesntExist) {
        return null;
      }
      path4 = await FileSystem3.makeHardPathTo(path4, { cache: cache4 });
      if (pathChain.includes(path4)) {
        return null;
      }
      pathChain.push(path4);
    }
    path4 = FileSystem3.normalize(path4);
    if (originalWasItem) {
      return new ItemInfo3({ path: path4 });
    } else {
      return path4;
    }
  },
  async nextTargetOf(path4, options = {}) {
    const originalWasItem = path4 instanceof ItemInfo3;
    const item = originalWasItem ? path4 : new ItemInfo3({ path: path4 });
    const lstat = item.lstat;
    if (lstat.isSymlink) {
      const relativeOrAbsolutePath = Deno.readLinkSync(item.path);
      if (isAbsolute3(relativeOrAbsolutePath)) {
        if (originalWasItem) {
          return new ItemInfo3({ path: relativeOrAbsolutePath });
        } else {
          return relativeOrAbsolutePath;
        }
      } else {
        const path5 = `${await FileSystem3.makeHardPathTo(dirname3(item.path))}/${relativeOrAbsolutePath}`;
        if (originalWasItem) {
          return new ItemInfo3({ path: path5 });
        } else {
          return path5;
        }
      }
    } else {
      if (originalWasItem) {
        return item;
      } else {
        return item.path;
      }
    }
  },
  async ensureIsFile(path4, options = { overwrite: false, renameExtension: null }) {
    const { overwrite, renameExtension } = defaultOptionsHelper3(options);
    await FileSystem3.ensureIsFolder(FileSystem3.parentPath(path4), { overwrite, renameExtension });
    path4 = path4.path || path4;
    const pathInfo = await FileSystem3.info(path4);
    if (pathInfo.isFile && !pathInfo.isDirectory) {
      return path4;
    } else {
      await FileSystem3.write({ path: path4, data: "" });
      return path4;
    }
  },
  async ensureIsFolder(path4, options = { overwrite: false, renameExtension: null }) {
    const { overwrite, renameExtension } = defaultOptionsHelper3(options);
    path4 = path4.path || path4;
    path4 = FileSystem3.makeAbsolutePath(path4);
    const parentPath = dirname3(path4);
    if (parentPath == path4) {
      return;
    }
    const parent = await FileSystem3.info(parentPath);
    if (!parent.isDirectory) {
      FileSystem3.sync.ensureIsFolder(parentPath, { overwrite, renameExtension });
    }
    let pathInfo = FileSystem3.sync.info(path4);
    if (pathInfo.exists && !pathInfo.isDirectory) {
      if (overwrite) {
        await FileSystem3.remove(path4);
      } else {
        await FileSystem3.moveOutOfTheWay(eachPath, { extension: renameExtension });
      }
    }
    await Deno.mkdir(path4, { recursive: true });
    return path4;
  },
  /**
   * Move/Remove everything and Ensure parent folders
   *
   * @param path
   * @param options.overwrite - if false, then things in the way will be moved instead of deleted
   * @param options.renameExtension - the string to append when renaming files to get them out of the way
   * 
   * @note
   *     very agressive: will change whatever is necessary to make sure a parent exists
   * 
   * @example
   *     await FileSystem.clearAPathFor("./something")
   */
  async clearAPathFor(path4, options = { overwrite: false, renameExtension: null }) {
    const { overwrite, renameExtension } = defaultOptionsHelper3(options);
    const originalPath = path4;
    const paths = [];
    while (dirname3(path4) !== path4) {
      paths.push(path4);
      path4 = dirname3(path4);
    }
    for (const eachPath2 of paths.reverse()) {
      const info = await FileSystem3.info(eachPath2);
      if (!info.exists) {
        break;
      } else if (info.isFile) {
        if (overwrite) {
          await FileSystem3.remove(eachPath2);
        } else {
          await FileSystem3.moveOutOfTheWay(eachPath2, { extension: renameExtension });
        }
      }
    }
    await Deno.mkdir(dirname3(originalPath), { recursive: true });
    return originalPath;
  },
  async moveOutOfTheWay(path4, options = { extension: null }) {
    const extension = options?.extension || FileSystem3.defaultRenameExtension;
    const info = await FileSystem3.info(path4);
    if (info.exists) {
      const newPath = path4 + extension;
      await FileSystem3.moveOutOfTheWay(newPath, { extension });
      await move(path4, newPath);
    }
  },
  /**
   * All Parent Paths
   *
   * @param {String} path - path doesnt need to exist
   * @return {[String]} longest to shortest parent path
   */
  allParentPaths(path4) {
    const pathStartsWithDotSlash = path4.startsWith("./");
    path4 = FileSystem3.normalize(path4);
    if (path4 === ".") {
      return [];
    }
    const dotGotRemoved = pathStartsWithDotSlash && !path4.startsWith("./");
    let previousPath = null;
    let allPaths = [];
    while (1) {
      previousPath = path4;
      path4 = FileSystem3.parentPath(path4);
      if (previousPath === path4) {
        break;
      }
      allPaths.push(path4);
    }
    allPaths.reverse();
    allPaths = allPaths.filter((each3) => each3 != ".");
    if (dotGotRemoved) {
      allPaths.push(".");
    }
    return allPaths;
  },
  async walkUpUntil(fileToFind, startPath = null) {
    let here = startPath || Deno.cwd();
    if (!isAbsolute3(here)) {
      here = join4(cwd, fileToFind);
    }
    while (1) {
      let checkPath = join4(here, fileToFind);
      const pathInfo = await Deno.lstat(checkPath).catch(() => ({ doesntExist: true }));
      if (!pathInfo.doesntExist) {
        return here;
      }
      if (here == dirname3(here)) {
        return null;
      } else {
        here = dirname3(here);
      }
    }
  },
  // FIXME: make this work for folders with many options for how to handle symlinks
  async copy({ from, to, preserveTimestamps = true, force = true, overwrite = false, renameExtension = null }) {
    const existingItemDoesntExist = (await Deno.stat(from).catch(() => ({ doesntExist: true }))).doesntExist;
    if (existingItemDoesntExist) {
      throw Error(`
Tried to copy from:${from}, to:${to}
but "from" didn't seem to exist

`);
    }
    if (force) {
      FileSystem3.sync.clearAPathFor(to, { overwrite, renameExtension });
    }
    const fromInfo = await FileSystem3.info(from);
    return copy(from, to, { force, preserveTimestamps: true });
  },
  async relativeLink({ existingItem, newItem, force = true, overwrite = false, allowNonExistingTarget = false, renameExtension = null }) {
    const existingItemPath = (existingItem.path || existingItem).replace(/\/+$/, "");
    const newItemPath = FileSystem3.normalize((newItem.path || newItem).replace(/\/+$/, ""));
    const existingItemDoesntExist = (await Deno.lstat(existingItemPath).catch(() => ({ doesntExist: true }))).doesntExist;
    if (!allowNonExistingTarget && existingItemDoesntExist) {
      throw Error(`
Tried to create a relativeLink between existingItem:${existingItemPath}, newItem:${newItemPath}
but existingItem didn't actually exist`);
    } else {
      const parentOfNewItem = FileSystem3.parentPath(newItemPath);
      await FileSystem3.ensureIsFolder(parentOfNewItem, { overwrite, renameExtension });
      const hardPathToNewItem = `${await FileSystem3.makeHardPathTo(parentOfNewItem)}/${FileSystem3.basename(newItemPath)}`;
      const hardPathToExistingItem = await FileSystem3.makeHardPathTo(existingItemPath);
      const pathFromNewToExisting = relative3(hardPathToNewItem, hardPathToExistingItem).replace(/^\.\.\//, "");
      if (force) {
        FileSystem3.sync.clearAPathFor(hardPathToNewItem, { overwrite, renameExtension });
      }
      return Deno.symlink(
        pathFromNewToExisting,
        hardPathToNewItem
      );
    }
  },
  async absoluteLink({ existingItem, newItem, force = true, allowNonExistingTarget = false, overwrite = false, renameExtension = null }) {
    existingItem = (existingItem.path || existingItem).replace(/\/+$/, "");
    const newItemPath = FileSystem3.normalize(newItem.path || newItem).replace(/\/+$/, "");
    const existingItemDoesntExist = (await Deno.lstat(existingItem).catch(() => ({ doesntExist: true }))).doesntExist;
    if (!allowNonExistingTarget && existingItemDoesntExist) {
      throw Error(`
Tried to create a relativeLink between existingItem:${existingItem}, newItemPath:${newItemPath}
but existingItem didn't actually exist`);
    } else {
      const parentOfNewItem = FileSystem3.parentPath(newItemPath);
      await FileSystem3.ensureIsFolder(parentOfNewItem, { overwrite, renameExtension });
      const hardPathToNewItem = `${await FileSystem3.makeHardPathTo(parentOfNewItem)}/${FileSystem3.basename(newItemPath)}`;
      if (force) {
        FileSystem3.sync.clearAPathFor(hardPathToNewItem, { overwrite, renameExtension });
      }
      return Deno.symlink(
        FileSystem3.makeAbsolutePath(existingItem),
        newItemPath
      );
    }
  },
  pathPieces(path4) {
    path4 = path4.path || path4;
    const result2 = parse3(path4);
    const folderList = [];
    let dirname9 = result2.dir;
    while (true) {
      folderList.push(basename3(dirname9));
      if (dirname9 == dirname3(dirname9)) {
        break;
      }
      dirname9 = dirname3(dirname9);
    }
    folderList.reverse();
    return [folderList, result2.name, result2.ext];
  },
  async *iterateBasenamesIn(pathOrFileInfo) {
    const info = pathOrFileInfo instanceof ItemInfo3 ? pathOrFileInfo : await FileSystem3.info(pathOrFileInfo);
    if (info.isFolder) {
      for await (const each3 of Deno.readDir(pathOrFileInfo.path)) {
        yield dirEntry.name;
      }
    }
  },
  listBasenamesIn(pathOrFileInfo) {
    return asyncIteratorToList2(FileSystem3.iterateBasenamesIn(pathOrFileInfo));
  },
  async *iteratePathsIn(pathOrFileInfo, options = { recursively: false, shouldntInclude: null, shouldntExplore: null, searchOrder: "breadthFirstSearch", maxDepth: Infinity, dontFollowSymlinks: false, dontReturnSymlinks: false }) {
    let info;
    try {
      info = pathOrFileInfo instanceof ItemInfo3 ? pathOrFileInfo : await FileSystem3.info(pathOrFileInfo);
    } catch (error) {
      if (!error.message.match(/^PermissionDenied:/)) {
        throw error;
      }
    }
    const path4 = info.path;
    if (!options.recursively) {
      if (info.isFolder) {
        if (!options.shouldntInclude) {
          for await (const each3 of Deno.readDir(path4)) {
            if (options.dontReturnSymlinks && each3.isSymlink) {
              continue;
            }
            yield join4(path4, each3.name);
          }
        } else {
          const shouldntInclude = options.shouldntInclude;
          for await (const each3 of Deno.readDir(path4)) {
            const eachPath2 = join4(path4, each3.name);
            if (options.dontReturnSymlinks && each3.isSymlink) {
              continue;
            }
            const shouldntIncludeThis = shouldntInclude && await shouldntInclude(eachPath2);
            if (!shouldntIncludeThis) {
              yield eachPath2;
            }
          }
        }
      }
    } else {
      options = { exclude: /* @__PURE__ */ new Set(), searchOrder: "breadthFirstSearch", maxDepth: Infinity, ...options };
      options.searchOrder = options.searchOrder || "breadthFirstSearch";
      const { shouldntExplore, shouldntInclude } = options;
      if (!["breadthFirstSearch", "depthFirstSearch"].includes(options.searchOrder)) {
        throw Error(`when calling FileSystem.iterateItemsIn('${path4}', { searchOrder: ${options.searchOrder} })

    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'
    However, it was not either of those: ${options.searchOrder}`);
      }
      const useBreadthFirstSearch = options.searchOrder == "breadthFirstSearch";
      const shouldntExploreThis = shouldntExplore && await shouldntExplore(info.path, info);
      if (!shouldntExploreThis && options.maxDepth > 0 && info.isFolder) {
        options.exclude = options.exclude instanceof Set ? options.exclude : new Set(options.exclude);
        if (!options.exclude.has(path4)) {
          const followSymlinks = !options.dontFollowSymlinks;
          const absolutePathVersion = FileSystem3.makeAbsolutePath(path4);
          options.exclude.add(absolutePathVersion);
          options.maxDepth -= 1;
          const searchAfterwords = [];
          for await (const entry of Deno.readDir(path4)) {
            const eachPath2 = join4(path4, entry.name);
            if (options.dontReturnSymlinks && each.isSymlink) {
              continue;
            }
            const shouldntIncludeThis = shouldntInclude && await shouldntInclude(eachPath2);
            if (!shouldntIncludeThis) {
              yield eachPath2;
            }
            if (entry.isFile) {
              continue;
            }
            if (followSymlinks && !entry.isDirectory) {
              let isSymlinkToDirectory = false;
              try {
                isSymlinkToDirectory = (await Deno.stat(eachPath2)).isDirectory;
              } catch (error) {
              }
              if (!isSymlinkToDirectory) {
                continue;
              }
            }
            if (useBreadthFirstSearch) {
              searchAfterwords.push(eachPath2);
            } else {
              for await (const eachSubPath of FileSystem3.iteratePathsIn(eachPath2, options)) {
                yield eachSubPath;
              }
            }
          }
          for (const eachParentItem of searchAfterwords) {
            for await (const eachSubPath of FileSystem3.iteratePathsIn(eachParentItem, options)) {
              yield eachSubPath;
            }
          }
        }
      }
    }
  },
  listPathsIn(pathOrFileInfo, options) {
    return asyncIteratorToList2(FileSystem3.iteratePathsIn(pathOrFileInfo, options));
  },
  async *iterateItemsIn(pathOrFileInfo, options = { recursively: false, shouldntInclude: null, shouldntExplore: null, searchOrder: "breadthFirstSearch", maxDepth: Infinity }) {
    options = { exclude: /* @__PURE__ */ new Set(), searchOrder: "breadthFirstSearch", maxDepth: Infinity, ...options };
    options.searchOrder = options.searchOrder || "breadthFirstSearch";
    const { shouldntExplore, shouldntInclude } = options;
    const info = pathOrFileInfo instanceof ItemInfo3 ? pathOrFileInfo : await FileSystem3.info(pathOrFileInfo);
    const path4 = info.path;
    if (!["breadthFirstSearch", "depthFirstSearch"].includes(options.searchOrder)) {
      throw Error(`when calling FileSystem.iterateItemsIn('${path4}', { searchOrder: ${options.searchOrder} })

    The searchOrder currently can only be 'depthFirstSearch' or 'breadthFirstSearch'
    However, it was not either of those: ${options.searchOrder}`);
    }
    const useBreadthFirstSearch = options.searchOrder == "breadthFirstSearch";
    const shouldntExploreThis = shouldntExplore && await shouldntExplore(info);
    if (!shouldntExploreThis && options.maxDepth > 0 && info.isFolder) {
      options.exclude = options.exclude instanceof Set ? options.exclude : new Set(options.exclude);
      if (!options.exclude.has(path4)) {
        const absolutePathVersion = FileSystem3.makeAbsolutePath(path4);
        options.exclude.add(absolutePathVersion);
        options.maxDepth -= 1;
        const searchAfterwords = [];
        for await (const entry of Deno.readDir(path4)) {
          const eachItem = await FileSystem3.info(join4(path4, entry.name));
          const shouldntIncludeThis = shouldntInclude && await shouldntInclude(eachItem);
          if (!shouldntIncludeThis) {
            yield eachItem;
          }
          if (options.recursively) {
            if (eachItem.isFolder) {
              if (useBreadthFirstSearch) {
                searchAfterwords.push(eachItem);
              } else {
                for await (const eachSubPath of FileSystem3.iterateItemsIn(eachItem, options)) {
                  yield eachSubPath;
                }
              }
            }
          }
        }
        for (const eachParentItem of searchAfterwords) {
          for await (const eachSubPath of FileSystem3.iterateItemsIn(eachParentItem, options)) {
            yield eachSubPath;
          }
        }
      }
    }
  },
  async listItemsIn(pathOrFileInfo, options) {
    const outputPromises = [];
    for await (const eachPath2 of FileSystem3.iteratePathsIn(pathOrFileInfo, options)) {
      outputPromises.push(FileSystem3.info(eachPath2));
    }
    return Promise.all(outputPromises);
  },
  // includes symlinks if they link to files and pipes
  async listFileItemsIn(pathOrFileInfo, options = { treatAllSymlinksAsFiles: false }) {
    const { treatAllSymlinksAsFiles } = { treatAllSymlinksAsFiles: false, ...options };
    const items = await FileSystem3.listItemsIn(pathOrFileInfo, options);
    if (treatAllSymlinksAsFiles) {
      return items.filter((eachItem) => eachItem.isFile || treatAllSymlinksAsFiles && eachItem.isSymlink);
    } else {
      return items.filter((eachItem) => eachItem.isFile);
    }
  },
  async listFilePathsIn(pathOrFileInfo, options = { treatAllSymlinksAsFiles: false }) {
    return (await FileSystem3.listFileItemsIn(pathOrFileInfo, options)).map((each3) => each3.path);
  },
  async listFileBasenamesIn(pathOrFileInfo, options = { treatAllSymlinksAsFiles: false }) {
    return (await FileSystem3.listFileItemsIn(pathOrFileInfo, options)).map((each3) => each3.basename);
  },
  async listFolderItemsIn(pathOrFileInfo, options = { ignoreSymlinks: false }) {
    const { ignoreSymlinks } = { ignoreSymlinks: false, ...options };
    const items = await FileSystem3.listItemsIn(pathOrFileInfo, options);
    if (ignoreSymlinks) {
      return items.filter((eachItem) => eachItem.isFolder && !eachItem.isSymlink);
    } else {
      return items.filter((eachItem) => eachItem.isFolder);
    }
  },
  async listFolderPathsIn(pathOrFileInfo, options = { ignoreSymlinks: false }) {
    return (await FileSystem3.listFolderItemsIn(pathOrFileInfo, options)).map((each3) => each3.path);
  },
  async listFolderBasenamesIn(pathOrFileInfo, options = { ignoreSymlinks: false }) {
    return (await FileSystem3.listFolderItemsIn(pathOrFileInfo, options)).map((each3) => each3.basename);
  },
  recursivelyIterateItemsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    options.recursively = true;
    if (options.onlyHardlinks) {
      if (options.shouldntInclude) {
        const originalshouldntInclude = options.shouldntInclude;
        options.shouldntInclude = (each3) => each3.isSymlink || originalshouldntInclude(each3);
      } else {
        options.shouldntInclude = (each3) => each3.isSymlink;
      }
    }
    if (options.dontFollowSymlinks) {
      if (options.shouldntExplore) {
        const originalShouldntExplore = options.shouldntInclude;
        options.shouldntExplore = (each3) => each3.isSymlink || originalShouldntExplore(each3);
      } else {
        options.shouldntExplore = (each3) => each3.isSymlink;
      }
    }
    return FileSystem3.iterateItemsIn(pathOrFileInfo, options);
  },
  recursivelyIteratePathsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    options.recursively = true;
    if (options.onlyHardlinks) {
      if (options.shouldntInclude) {
        const originalshouldntInclude = options.shouldntInclude;
        options.shouldntInclude = (each3) => each3.isSymlink || originalshouldntInclude(each3);
      } else {
        options.shouldntInclude = (each3) => each3.isSymlink;
      }
    }
    return FileSystem3.iteratePathsIn(pathOrFileInfo, options);
  },
  recursivelyListPathsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    return asyncIteratorToList2(FileSystem3.recursivelyIteratePathsIn(pathOrFileInfo, options));
  },
  recursivelyListItemsIn(pathOrFileInfo, options = { onlyHardlinks: false, dontFollowSymlinks: false, searchOrder: "breadthFirstSearch", maxDepth: Infinity, shouldntExplore: null, shouldntInclude: null }) {
    return asyncIteratorToList2(FileSystem3.recursivelyIterateItemsIn(pathOrFileInfo, options));
  },
  async *globIterator(pattern, options = { startPath: null }) {
    var { startPath, ...iteratePathsOptions } = options;
    startPath = startPath || ".";
    const regex3 = pattern instanceof RegExp ? pattern : globToRegExp(pattern);
    for await (const eachPath2 of FileSystem3.iteratePathsIn(startPath, { recursively: true, ...iteratePathsOptions })) {
      if (eachPath2.match(regex3) || FileSystem3.makeAbsolutePath(eachPath2).match(regex3)) {
        yield FileSystem3.makeRelativePath({
          from: startPath,
          to: eachPath2
        });
      }
    }
  },
  glob(pattern, options = { startPath: null }) {
    return asyncIteratorToList2(FileSystem3.globIterator(pattern, options));
  },
  async getPermissions({ path: path4 }) {
    const { mode } = await Deno.lstat(path4);
    return {
      owner: {
        //          rwxrwxrwx
        canRead: !!(256 & mode),
        canWrite: !!(128 & mode),
        canExecute: !!(64 & mode)
      },
      group: {
        canRead: !!(32 & mode),
        canWrite: !!(16 & mode),
        canExecute: !!(8 & mode)
      },
      others: {
        canRead: !!(4 & mode),
        canWrite: !!(2 & mode),
        canExecute: !!(1 & mode)
      }
    };
  },
  /**
  * Add/set file permissions
  *
  * @param {String} args.path - 
  * @param {Object|Boolean} args.recursively - 
  * @param {Object} args.permissions - 
  * @param {Object} args.permissions.owner - 
  * @param {Boolean} args.permissions.owner.canRead - 
  * @param {Boolean} args.permissions.owner.canWrite - 
  * @param {Boolean} args.permissions.owner.canExecute - 
  * @param {Object} args.permissions.group - 
  * @param {Boolean} args.permissions.group.canRead - 
  * @param {Boolean} args.permissions.group.canWrite - 
  * @param {Boolean} args.permissions.group.canExecute - 
  * @param {Object} args.permissions.others - 
  * @param {Boolean} args.permissions.others.canRead - 
  * @param {Boolean} args.permissions.others.canWrite - 
  * @param {Boolean} args.permissions.others.canExecute - 
  * @return {null} 
  *
  * @example
  *  await FileSystem.addPermissions({
  *      path: fileOrFolderPath,
  *      permissions: {
  *          owner: {
  *              canExecute: true,
  *          },
  *      }
  *  })
  */
  async addPermissions({ path: path4, permissions = { owner: {}, group: {}, others: {} }, recursively = false }) {
    permissions = { owner: {}, group: {}, others: {}, ...permissions };
    let permissionNumber = 0;
    let fileInfo;
    if (!(Object.keys(permissions.owner).length === Object.keys(permissions.group).length === Object.keys(permissions.others).length === 3)) {
      fileInfo = await FileSystem3.info(path4);
      permissionNumber = fileInfo.lstat.mode & 511;
    }
    if (permissions.owner.canRead != null) {
      if (permissions.owner.canRead) {
        permissionNumber |= 256;
      } else {
        permissionNumber &= 767;
      }
    }
    if (permissions.owner.canWrite != null) {
      if (permissions.owner.canWrite) {
        permissionNumber |= 128;
      } else {
        permissionNumber &= 895;
      }
    }
    if (permissions.owner.canExecute != null) {
      if (permissions.owner.canExecute) {
        permissionNumber |= 64;
      } else {
        permissionNumber &= 959;
      }
    }
    if (permissions.group.canRead != null) {
      if (permissions.group.canRead) {
        permissionNumber |= 32;
      } else {
        permissionNumber &= 991;
      }
    }
    if (permissions.group.canWrite != null) {
      if (permissions.group.canWrite) {
        permissionNumber |= 16;
      } else {
        permissionNumber &= 1007;
      }
    }
    if (permissions.group.canExecute != null) {
      if (permissions.group.canExecute) {
        permissionNumber |= 8;
      } else {
        permissionNumber &= 1015;
      }
    }
    if (permissions.others.canRead != null) {
      if (permissions.others.canRead) {
        permissionNumber |= 4;
      } else {
        permissionNumber &= 1019;
      }
    }
    if (permissions.others.canWrite != null) {
      if (permissions.others.canWrite) {
        permissionNumber |= 2;
      } else {
        permissionNumber &= 1021;
      }
    }
    if (permissions.others.canExecute != null) {
      if (permissions.others.canExecute) {
        permissionNumber |= 1;
      } else {
        permissionNumber &= 1022;
      }
    }
    if (recursively == false || fileInfo instanceof Object && fileInfo.isFile || !(fileInfo instanceof Object) && (await FileSystem3.info(path4)).isFile) {
      return Deno.chmod(path4.path || path4, permissionNumber);
    } else {
      const promises = [];
      const paths = await FileSystem3.recursivelyListPathsIn(path4, { onlyHardlinks: false, dontFollowSymlinks: false, ...recursively });
      for (const eachPath2 of paths) {
        promises.push(
          Deno.chmod(eachPath2, permissionNumber).catch(console.error)
        );
      }
      return new Promise(async (resolve9, reject2) => {
        for (const each3 of promises) {
          await each3;
        }
        resolve9();
      });
    }
  },
  // alias
  setPermissions(...args) {
    return FileSystem3.addPermissions(...args);
  },
  async write({ path: path4, data, force = true, overwrite = false, renameExtension = null }) {
    path4 = pathStandardize2(path4);
    await grabPathLock3(path4);
    if (force) {
      FileSystem3.sync.ensureIsFolder(FileSystem3.parentPath(path4), { overwrite, renameExtension });
      const info = FileSystem3.sync.info(path4);
      if (info.isDirectory) {
        FileSystem3.sync.remove(path4);
      }
    }
    let output2;
    if (isGeneratorType2(data) || data[Symbol.iterator] || data[Symbol.asyncIterator]) {
      const file = await Deno.open(path4, { read: true, write: true, create: true, truncate: true });
      const encoder = new TextEncoder();
      const encode = encoder.encode.bind(encoder);
      try {
        let index = 0;
        for await (let packet of data) {
          if (typeof packet == "string") {
            packet = encode(packet);
          }
          await Deno.write(file.rid, packet);
        }
      } finally {
        Deno.close(file.rid);
      }
    } else if (typeof data == "string") {
      output2 = await Deno.writeTextFile(path4, data);
    } else {
      output2 = await Deno.writeFile(path4, data);
    }
    delete locker3[path4];
    return output2;
  },
  async append({ path: path4, data, force = true, overwrite = false, renameExtension = null }) {
    path4 = pathStandardize2(path4);
    await grabPathLock3(path4);
    if (force) {
      FileSystem3.sync.ensureIsFolder(FileSystem3.parentPath(path4), { overwrite, renameExtension });
      const info = await FileSystem3.info(path4);
      if (info.isDirectory) {
        await FileSystem3.remove(path4);
      }
    }
    const file = await Deno.open(path4, { read: true, write: true, create: true });
    await file.seek(0, Deno.SeekMode.End);
    if (typeof data == "string") {
      await file.write(new TextEncoder().encode(data));
    } else {
      await file.write(data);
    }
    await file.close();
    delete locker3[path4];
  },
  async makeHardPathTo(path4, options = {}) {
    var { cache: cache4 } = { cache: {}, ...options };
    if (cache4[path4]) {
      return cache4[path4];
    }
    const [folders, name, extension] = FileSystem3.pathPieces(FileSystem3.makeAbsolutePath(path4));
    let topDownPath = ``;
    for (const eachFolderName of folders) {
      topDownPath += `/${eachFolderName}`;
      if (cache4[topDownPath]) {
        topDownPath = cache4[topDownPath];
        continue;
      }
      const unchangedPath = topDownPath;
      const info = await FileSystem3.info(topDownPath);
      if (info.isSymlink) {
        const absolutePathToIntermediate = await FileSystem3.finalTargetOf(info.path, { _parentsHaveBeenChecked: true, cache: cache4 });
        if (absolutePathToIntermediate == null) {
          return null;
        }
        topDownPath = topDownPath.slice(0, -(eachFolderName.length + 1));
        const relativePath = FileSystem3.makeRelativePath({
          from: topDownPath,
          to: absolutePathToIntermediate
        });
        topDownPath += `/${relativePath}`;
        topDownPath = normalize3(topDownPath);
      }
      cache4[unchangedPath] = topDownPath;
    }
    const hardPath = normalize3(`${topDownPath}/${name}${extension}`);
    cache4[path4] = hardPath;
    return hardPath;
  },
  async walkUpImport(path4, start) {
    const startPath = start || FileSystem3.pathOfCaller(1);
    const nearestPath = await FileSystem3.walkUpUntil(path4, startPath);
    if (nearestPath) {
      const absolutePath = FileSystem3.makeAbsolutePath(`${nearestPath}/${path4}`);
      return import(toFileUrl3(absolutePath).href);
    } else {
      throw Error(`Tried to walkUpImport ${path4}, starting at ${startPath}, but was unable to find any files`);
    }
  },
  pathOfCaller(callerNumber = void 0) {
    const err = new Error();
    let filePaths = findAll2(/^.+file:\/\/(\/[\w\W]*?):/gm, err.stack).map((each3) => each3[1]);
    if (callerNumber) {
      filePaths = filePaths.slice(callerNumber);
    }
    try {
      const secondPath = filePaths[1];
      if (secondPath) {
        try {
          if (Deno.statSync(secondPath).isFile) {
            return secondPath;
          }
        } catch (error) {
        }
      }
    } catch (error) {
    }
    return Deno.cwd();
  },
  sync: {
    info(fileOrFolderPath, _cachedLstat = null) {
      let lstat = _cachedLstat;
      try {
        lstat = Deno.lstatSync(fileOrFolderPath);
      } catch (error) {
        lstat = { doesntExist: true };
      }
      let stat = {};
      if (!lstat.isSymlink) {
        stat = {
          isBrokenLink: false,
          isLoopOfLinks: false
        };
      } else {
        try {
          stat = Deno.statSync(fileOrFolderPath);
        } catch (error) {
          if (error.message.match(/^Too many levels of symbolic links/)) {
            stat.isBrokenLink = true;
            stat.isLoopOfLinks = true;
          } else if (error.message.match(/^No such file or directory/)) {
            stat.isBrokenLink = true;
          } else {
            throw error;
          }
        }
      }
      return new ItemInfo3({ path: fileOrFolderPath, _lstatData: lstat, _statData: stat });
    },
    remove(fileOrFolder) {
      if (fileOrFolder instanceof Array) {
        return fileOrFolder.map(FileSystem3.sync.remove);
      }
      fileOrFolder = fileOrFolder.path || fileOrFolder;
      let exists2 = false;
      let item;
      try {
        item = Deno.lstatSync(fileOrFolder);
        exists2 = true;
      } catch (error) {
      }
      if (exists2) {
        if (item.isFile || item.isSymlink) {
          return Deno.removeSync(fileOrFolder.replace(/\/+$/, ""));
        } else {
          return Deno.removeSync(fileOrFolder.replace(/\/+$/, ""), { recursive: true });
        }
      }
    },
    moveOutOfTheWay(path4, options = { extension: null }) {
      path4 = pathStandardize2(path4);
      const extension = options?.extension || FileSystem3.defaultRenameExtension;
      const info = FileSystem3.sync.info(path4);
      if (info.exists) {
        const newPath = path4 + extension;
        FileSystem3.sync.moveOutOfTheWay(newPath, { extension });
        moveSync(path4, newPath);
      }
    },
    ensureIsFolder(path4, options = { overwrite: false, renameExtension: null }) {
      path4 = pathStandardize2(path4);
      const { overwrite, renameExtension } = defaultOptionsHelper3(options);
      path4 = path4.path || path4;
      path4 = FileSystem3.makeAbsolutePath(path4);
      const parentPath = dirname3(path4);
      if (parentPath == path4) {
        return;
      }
      const parent = FileSystem3.sync.info(parentPath);
      if (!parent.isDirectory) {
        FileSystem3.sync.ensureIsFolder(parentPath, { overwrite, renameExtension });
      }
      let pathInfo = FileSystem3.sync.info(path4);
      if (pathInfo.exists && !pathInfo.isDirectory) {
        if (overwrite) {
          FileSystem3.sync.remove(path4);
        } else {
          FileSystem3.sync.moveOutOfTheWay(path4, { extension: renameExtension });
        }
      }
      Deno.mkdirSync(path4, { recursive: true });
      return path4;
    },
    /**
     * Move/Remove everything and Ensure parent folders
     *
     * @param path
     * @param options.overwrite - if false, then things in the way will be moved instead of deleted
     * @param options.extension - the string to append when renaming files to get them out of the way
     * 
     * @example
     *     FileSystem.sync.clearAPathFor("./something")
     */
    clearAPathFor(path4, options = { overwrite: false, renameExtension: null }) {
      const { overwrite, renameExtension } = defaultOptionsHelper3(options);
      const originalPath = path4;
      const paths = [];
      while (dirname3(path4) !== path4) {
        paths.push(path4);
        path4 = dirname3(path4);
      }
      for (const eachPath2 of paths.reverse()) {
        const info = FileSystem3.sync.info(eachPath2);
        if (!info.exists) {
          break;
        } else if (info.isFile) {
          if (overwrite) {
            FileSystem3.sync.remove(eachPath2);
          } else {
            FileSystem3.sync.moveOutOfTheWay(eachPath2, { extension: renameExtension });
          }
        }
      }
      Deno.mkdirSync(dirname3(originalPath), { recursive: true });
      return originalPath;
    },
    append({ path: path4, data, force = true, overwrite = false, renameExtension = null }) {
      path4 = pathStandardize2(path4);
      if (force) {
        FileSystem3.sync.ensureIsFolder(FileSystem3.parentPath(path4), { overwrite, renameExtension });
        const info = FileSystem3.sync.info(path4);
        if (info.isDirectory) {
          FileSystem3.sync.remove(path4);
        }
      }
      const file = Deno.openSync(path4, { read: true, write: true, create: true });
      file.seekSync(0, Deno.SeekMode.End);
      if (typeof data == "string") {
        file.writeSync(new TextEncoder().encode(data));
      } else {
        file.writeSync(data);
      }
      file.close();
    },
    write({ path: path4, data, force = true, overwrite = false, renameExtension = null, _isInternalCall = false }) {
      path4 = pathStandardize2(path4);
      if (force) {
        FileSystem3.sync.ensureIsFolder(FileSystem3.parentPath(path4), { overwrite, renameExtension });
        const info = FileSystem3.sync.info(path4);
        if (info.isDirectory) {
          FileSystem3.sync.remove(path4);
        }
      }
      let output2;
      if (isGeneratorType2(data) || data[Symbol.iterator]) {
        const file = Deno.openSync(path4, { read: true, write: true, create: true, truncate: true });
        const encoder = new TextEncoder();
        const encode = encoder.encode.bind(encoder);
        try {
          let index = 0;
          for (let packet of data) {
            if (typeof packet == "string") {
              packet = encode(packet);
            }
            Deno.writeSync(file.rid, packet);
          }
        } finally {
          Deno.close(file.rid);
        }
      } else if (typeof data == "string") {
        output2 = Deno.writeTextFileSync(path4, data);
      } else {
        output2 = Deno.writeFileSync(path4, data);
      }
      return output2;
    }
  }
};
var glob3 = FileSystem3.glob;

// specific_tools/load_positive_examples.js
async function loadPositiveExamples({ filePath, geneData: geneData2, skipEntryIf }) {
  const geneIdsFromNegativeData = new Set(Object.keys(geneData2));
  const summaryData2 = {
    frequencyPerHumanGene: {}
  };
  const geneIds2 = /* @__PURE__ */ new Set();
  const haveSeenPhosSite = /* @__PURE__ */ new Set();
  const positiveExamples2 = [];
  for (const eachPath2 of await glob3(filePath)) {
    const csvData = parseCsv({
      input: await FileSystem3.readLinesIteratively(eachPath2),
      separator: "	",
      columnNames: [
        "abbreviatedGeneSpecies",
        "uniprotGeneId",
        "indexRelativeToGene",
        "typeOfSite",
        "pubmedIdForRelatedReferences",
        "aminoAcidsString"
      ]
    });
    for await (const eachPhosSite of csvData) {
      if (!eachPhosSite.aminoAcidsString) {
        continue;
      }
      if (eachPhosSite.aminoAcidsString.match(/-/)) {
        continue;
      }
      const geneName = eachPhosSite.abbreviatedGeneSpecies;
      const uniprotGeneId = eachPhosSite.uniprotGeneId;
      eachPhosSite.siteId = `${uniprotGeneId}|${eachPhosSite.indexRelativeToGene}`;
      if (haveSeenPhosSite.has(eachPhosSite.siteId)) {
        continue;
      }
      haveSeenPhosSite.add(eachPhosSite.siteId);
      eachPhosSite.pubmedIdForRelatedReferences = `${eachPhosSite.pubmedIdForRelatedReferences}`.split(";");
      if (skipEntryIf({ ...eachPhosSite, uniprotGeneId })) {
        continue;
      }
      geneData2[uniprotGeneId] = geneData2[uniprotGeneId] || {};
      geneData2[uniprotGeneId].name = uniprotGeneId;
      geneData2[uniprotGeneId].phosSites = geneData2[uniprotGeneId].phosSites || [];
      geneData2[uniprotGeneId].phosSites.push(eachPhosSite);
      geneIds2.add(uniprotGeneId);
      positiveExamples2.push({
        siteId: `${uniprotGeneId}|${eachPhosSite.indexRelativeToGene}`,
        indexRelativeToGene: eachPhosSite.indexRelativeToGene,
        aminoAcids: eachPhosSite.aminoAcidsString,
        isPhosSite: 1,
        geneInfo: geneData2[uniprotGeneId]
      });
    }
  }
  const commonGeneIds2 = intersection2(
    geneIdsFromNegativeData,
    new Set(geneIds2)
  );
  for (const eachGeneId of commonGeneIds2) {
    const numberOfPhosSites = geneData2[eachGeneId]?.phosSites?.length || 0;
    summaryData2.frequencyPerHumanGene[numberOfPhosSites] = (summaryData2.frequencyPerHumanGene[numberOfPhosSites] || 0) + 1;
  }
  return {
    positiveExamples: positiveExamples2,
    summaryData: summaryData2,
    geneIds: geneIds2,
    commonGeneIds: commonGeneIds2,
    geneData: geneData2
  };
}

// specific_tools/amino_acid_to_feature_vector.js
var amnioEncoding = {
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
  // "*": "translation stop",
  // "-": "gap of indeterminate length ",
};
var aminoAcidSimplifier = {
  "I": "J",
  "L": "J",
  "Q": "Z",
  "E": "Z",
  "D": "B",
  "N": "B"
};
var { objToOneHot: aminoToOneHot, oneHotToObject: oneHotToAmino } = createOneHot(amnioEncoding);
var physicochemicalCategories = {
  polar: [..."NQSDECTKRHYW"],
  positive: [..."KHR"],
  negative: [..."DE"],
  charged: [..."KHRDE"],
  hydrophobic: [..."AGCTIVLKHFYWM"],
  aliphatic: [..."IVL"],
  aromatic: [..."FYWH"],
  small: [..."PNDTCAGSV"],
  tiny: [..."ASGC"]
};
var aminoToPhysicochemical = (amino) => {
  const output2 = {};
  for (const [key, value] of Object.entries(physicochemicalCategories)) {
    output2[key] = value.includes(amino);
  }
  return output2;
};
var { objToOneHot: physicochemicalToOneHot, oneHotToObject: oneHotToPhysicochemical } = createOneHot(amnioEncoding);

// esbuild_serve:http-import:https://deno.land/x/good@1.4.4.2/object.js
var compare = ({ elementToNumber, largestFirst = false }) => {
  let comparison = (a, b) => {
    const aValue = elementToNumber(a);
    const bValue = elementToNumber(b);
    if (typeof aValue == "number") {
      return aValue - bValue;
    } else {
      return aValue.localeCompare(bValue);
    }
  };
  if (largestFirst) {
    let oldComparison = comparison;
    comparison = (b, a) => oldComparison(a, b);
  }
  return comparison;
};

// esbuild_serve:http-import:https://deno.land/std@0.192.0/collections/_comparators.ts
function ascend(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function descend(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

// esbuild_serve:http-import:https://deno.land/std@0.192.0/collections/binary_heap.ts
function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
function getParentIndex(index) {
  return Math.floor((index + 1) / 2) - 1;
}
var BinaryHeap = class _BinaryHeap {
  constructor(compare2 = descend) {
    this.compare = compare2;
  }
  #data = [];
  /** Returns the underlying cloned array in arbitrary order without sorting */
  toArray() {
    return Array.from(this.#data);
  }
  static from(collection, options) {
    let result2;
    let unmappedValues = [];
    if (collection instanceof _BinaryHeap) {
      result2 = new _BinaryHeap(
        options?.compare ?? collection.compare
      );
      if (options?.compare || options?.map) {
        unmappedValues = collection.#data;
      } else {
        result2.#data = Array.from(collection.#data);
      }
    } else {
      result2 = options?.compare ? new _BinaryHeap(options.compare) : new _BinaryHeap();
      unmappedValues = collection;
    }
    const values2 = options?.map ? Array.from(unmappedValues, options.map, options.thisArg) : unmappedValues;
    result2.push(...values2);
    return result2;
  }
  /** The amount of values stored in the binary heap. */
  get length() {
    return this.#data.length;
  }
  /** Returns the greatest value in the binary heap, or undefined if it is empty. */
  peek() {
    return this.#data[0];
  }
  /** Removes the greatest value from the binary heap and returns it, or null if it is empty. */
  pop() {
    const size2 = this.#data.length - 1;
    swap(this.#data, 0, size2);
    let parent = 0;
    let right = 2 * (parent + 1);
    let left = right - 1;
    while (left < size2) {
      const greatestChild = right === size2 || this.compare(this.#data[left], this.#data[right]) <= 0 ? left : right;
      if (this.compare(this.#data[greatestChild], this.#data[parent]) < 0) {
        swap(this.#data, parent, greatestChild);
        parent = greatestChild;
      } else {
        break;
      }
      right = 2 * (parent + 1);
      left = right - 1;
    }
    return this.#data.pop();
  }
  /** Adds values to the binary heap. */
  push(...values2) {
    for (const value of values2) {
      let index = this.#data.length;
      let parent = getParentIndex(index);
      this.#data.push(value);
      while (index !== 0 && this.compare(this.#data[index], this.#data[parent]) < 0) {
        swap(this.#data, parent, index);
        index = parent;
        parent = getParentIndex(index);
      }
    }
    return this.#data.length;
  }
  /** Removes all values from the binary heap. */
  clear() {
    this.#data = [];
  }
  /** Checks if the binary heap is empty. */
  isEmpty() {
    return this.#data.length === 0;
  }
  /** Returns an iterator for retrieving and removing values from the binary heap. */
  *drain() {
    while (!this.isEmpty()) {
      yield this.pop();
    }
  }
  *[Symbol.iterator]() {
    yield* this.drain();
  }
};

// generic_tools/huffman_code.js
var HuffmanNode = class {
  constructor(value, frequency) {
    this.value = value;
    this.frequency = frequency;
    this.left = null;
    this.right = null;
  }
};
var HuffmanCoder = class _HuffmanCoder {
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
   * @note
   *     the cap is a softCap because single-char encodings will always be kept
   *
   * @param arg1.softCap - the max size of the encoding
   * @param arg1.values - values that were loaded from a file
   * @returns {Object} output - description
   * @returns output.x - description
   *
   */
  constructor({ values: values2 = {}, softCap = Infinity }) {
    this.cap = softCap;
    this.effectiveFrequencyTable = {};
    this.isFrozen = false;
    Object.assign(this, values2);
  }
  addData(string2) {
    if (this.isFrozen) {
      throw Error(`Sorry, this coder has been frozen. Data can only be added BEFORE freezeing`);
    }
    const stringLength = string2.length;
    let startIndex = -1;
    while (startIndex < stringLength - 1) {
      startIndex++;
      let substring = "";
      for (const character of string2.slice(startIndex)) {
        substring += character;
        this.effectiveFrequencyTable[substring] = (this.effectiveFrequencyTable[substring] || 0) + 1;
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
  static fromJSON(object) {
    const coder2 = new _HuffmanCoder();
    Object.assign(coder2, object);
    return coder2;
  }
  freeze() {
    this.isFrozen = true;
    this.tree = this._buildHuffmanTree();
    this.codeMap = this._buildCodeMap(this.tree);
    const { encodingToNumber, substringToNumber, numberToSubstring } = this._buildEnumerationMapping(this.codeMap, this.cap);
    this.encodingToNumber = encodingToNumber;
    this.numberToSubstring = numberToSubstring;
    this.substringToNumber = substringToNumber;
    return this;
  }
  /**
   * Encodes the input data using the provided code map.
   * @param {string} data - The input data.
   * @returns {[string]} a list of codes
   */
  encode(data) {
    if (!this.isFrozen) {
      this.freeze();
    }
    const codes = [];
    let remainingData = data;
    outer:
      while (remainingData.length > 0) {
        for (const [substring, number] of Object.entries(this.substringToNumber)) {
          if (substring.length == 0) {
            continue;
          }
          if (remainingData.startsWith(substring)) {
            remainingData = remainingData.slice(substring.length);
            codes.push(number);
            continue outer;
          }
        }
        throw Error(`Unable to encode remaining string: ${remainingData}
Using: ${toRepresentation(this.substringToNumber)}`);
      }
    return codes;
  }
  /**
   * Decodes the encoded data using the provided Huffman tree.
   * @param {string|[string]} encodedData - The encoded data.
   * @returns {string} The decoded data.
   */
  decode(encodedData) {
    if (!this.isFrozen) {
      this.freeze();
    }
    let decodedData = "";
    let currentNode = this.tree;
    if (encodedData instanceof Array) {
      if (encodedData.length > 0) {
        if (typeof encodedData[0] == "number") {
          return encodedData.map((each3) => this.numberToSubstring[each3]).join("");
        }
      }
      encodedData = encodedData.join("");
    }
    for (const each3 of encodedData) {
      if (each3 === "0") {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if (currentNode.value) {
        decodedData += currentNode.value;
        currentNode = this.tree;
      }
    }
    return decodedData;
  }
  /**
   * Builds the Huffman tree based on the frequency table.
   * @returns {HuffmanNode} The root node of the Huffman tree.
   */
  _buildHuffmanTree() {
    let numberOfEntries = Object.keys(this.effectiveFrequencyTable).length;
    for (const [substring, effectiveFrequency] of Object.entries(this.effectiveFrequencyTable)) {
      if (substring.length > 1) {
        const frequency = effectiveFrequency / substring.length;
        if (frequency * Math.log2(substring.length) < Math.log2(numberOfEntries)) {
          numberOfEntries -= 1;
          delete this.effectiveFrequencyTable[substring];
        }
      }
    }
    const priorityQueue = new BinaryHeap((a, b) => ascend(a.frequency, b.frequency));
    for (const [substring, frequency] of Object.entries(this.effectiveFrequencyTable)) {
      const effectiveFrequency = frequency * substring.length;
      const node = new HuffmanNode(substring, effectiveFrequency);
      priorityQueue.push(node);
    }
    let iterCount = 0;
    while (priorityQueue.length > 1) {
      iterCount += 1;
      if ((iterCount - 1) % 1e3 == 0) {
        console.log(`    on iteration ${iterCount}, priorityQueue.length:${priorityQueue.length}`);
      }
      const leftChild = priorityQueue.pop();
      const rightChild = priorityQueue.pop();
      const parent = new HuffmanNode(null, leftChild.frequency + rightChild.frequency);
      parent.left = leftChild;
      parent.right = rightChild;
      priorityQueue.push(parent);
    }
    return priorityQueue.pop();
  }
  /**
   * Builds a map of characters to their corresponding Huffman codes.
   * @param {HuffmanNode} tree - The Huffman tree.
   * @returns {Object} The code map.
   */
  _buildCodeMap(tree) {
    const codeMap = {};
    function traverse(node, code) {
      if (node.value) {
        codeMap[node.value] = code;
      } else {
        traverse(node.left, code + "0");
        traverse(node.right, code + "1");
      }
    }
    traverse(tree, "");
    return codeMap;
  }
  _buildEnumerationMapping(codeMap, cap) {
    const encodings = Object.entries(codeMap);
    encodings.sort(
      compare({
        elementToNumber: ([eachSubstring, eachEncoding]) => eachEncoding.length,
        largestFirst: false
      })
    );
    const thresholdElement = encodings.slice(0, cap).slice(-1)[0];
    const threshold = thresholdElement[1].length;
    const truncatedEncodings = encodings.filter(([eachSubstring, eachEncoding]) => eachSubstring.length == 1 || eachEncoding.length <= threshold);
    const truncatedCodeMap = Object.fromEntries(truncatedEncodings);
    let index = -1;
    const substringToNumberUnsorted = {};
    const encodingToNumber = {};
    const numberToSubstring = {};
    for (const [eachSubstring, eachEncoding] of truncatedEncodings) {
      ++index;
      substringToNumberUnsorted[eachSubstring] = index;
      encodingToNumber[eachEncoding] = index;
      numberToSubstring[index] = eachSubstring;
    }
    const substrings = Object.keys(substringToNumberUnsorted);
    substrings.sort(
      compare({
        elementToNumber: (each3) => each3.length,
        largestFirst: true
      })
    );
    const substringToNumber = {};
    for (const substring of substrings) {
      substringToNumber[substring] = substringToNumberUnsorted[substring];
    }
    return { encodingToNumber, substringToNumber, numberToSubstring };
  }
};

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/error.ts
var YAMLError = class extends Error {
  constructor(message = "(unknown reason)", mark = "") {
    super(`${message} ${mark}`);
    this.mark = mark;
    this.name = this.constructor.name;
  }
  toString(_compact) {
    return `${this.name}: ${this.message} ${this.mark}`;
  }
};

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/utils.ts
function isBoolean2(value) {
  return typeof value === "boolean" || value instanceof Boolean;
}
function isObject2(value) {
  return value !== null && typeof value === "object";
}
function repeat2(str2, count2) {
  let result2 = "";
  for (let cycle = 0; cycle < count2; cycle++) {
    result2 += str2;
  }
  return result2;
}
function isNegativeZero(i) {
  return i === 0 && Number.NEGATIVE_INFINITY === 1 / i;
}

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/mark.ts
var Mark = class {
  constructor(name, buffer, position, line, column) {
    this.name = name;
    this.buffer = buffer;
    this.position = position;
    this.line = line;
    this.column = column;
  }
  getSnippet(indent3 = 4, maxLength2 = 75) {
    if (!this.buffer)
      return null;
    let head2 = "";
    let start = this.position;
    while (start > 0 && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1) {
      start -= 1;
      if (this.position - start > maxLength2 / 2 - 1) {
        head2 = " ... ";
        start += 5;
        break;
      }
    }
    let tail2 = "";
    let end = this.position;
    while (end < this.buffer.length && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1) {
      end += 1;
      if (end - this.position > maxLength2 / 2 - 1) {
        tail2 = " ... ";
        end -= 5;
        break;
      }
    }
    const snippet = this.buffer.slice(start, end);
    return `${repeat2(" ", indent3)}${head2}${snippet}${tail2}
${repeat2(
      " ",
      indent3 + this.position - start + head2.length
    )}^`;
  }
  toString(compact2) {
    let snippet, where = "";
    if (this.name) {
      where += `in "${this.name}" `;
    }
    where += `at line ${this.line + 1}, column ${this.column + 1}`;
    if (!compact2) {
      snippet = this.getSnippet();
      if (snippet) {
        where += `:
${snippet}`;
      }
    }
    return where;
  }
};

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/schema.ts
function compileList(schema, name, result2) {
  const exclude = [];
  for (const includedSchema of schema.include) {
    result2 = compileList(includedSchema, name, result2);
  }
  for (const currentType of schema[name]) {
    for (let previousIndex = 0; previousIndex < result2.length; previousIndex++) {
      const previousType = result2[previousIndex];
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
        exclude.push(previousIndex);
      }
    }
    result2.push(currentType);
  }
  return result2.filter((_type, index) => !exclude.includes(index));
}
function compileMap(...typesList) {
  const result2 = {
    fallback: {},
    mapping: {},
    scalar: {},
    sequence: {}
  };
  for (const types of typesList) {
    for (const type of types) {
      if (type.kind !== null) {
        result2[type.kind][type.tag] = result2["fallback"][type.tag] = type;
      }
    }
  }
  return result2;
}
var Schema = class _Schema {
  static SCHEMA_DEFAULT;
  implicit;
  explicit;
  include;
  compiledImplicit;
  compiledExplicit;
  compiledTypeMap;
  constructor(definition) {
    this.explicit = definition.explicit || [];
    this.implicit = definition.implicit || [];
    this.include = definition.include || [];
    for (const type of this.implicit) {
      if (type.loadKind && type.loadKind !== "scalar") {
        throw new YAMLError(
          "There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported."
        );
      }
    }
    this.compiledImplicit = compileList(this, "implicit", []);
    this.compiledExplicit = compileList(this, "explicit", []);
    this.compiledTypeMap = compileMap(
      this.compiledImplicit,
      this.compiledExplicit
    );
  }
  /* Returns a new extended schema from current schema */
  extend(definition) {
    return new _Schema({
      implicit: [
        .../* @__PURE__ */ new Set([...this.implicit, ...definition?.implicit ?? []])
      ],
      explicit: [
        .../* @__PURE__ */ new Set([...this.explicit, ...definition?.explicit ?? []])
      ],
      include: [.../* @__PURE__ */ new Set([...this.include, ...definition?.include ?? []])]
    });
  }
  static create() {
  }
};

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type.ts
var DEFAULT_RESOLVE = () => true;
var DEFAULT_CONSTRUCT = (data) => data;
function checkTagFormat(tag) {
  return tag;
}
var Type = class {
  tag;
  kind = null;
  instanceOf;
  predicate;
  represent;
  defaultStyle;
  styleAliases;
  loadKind;
  constructor(tag, options) {
    this.tag = checkTagFormat(tag);
    if (options) {
      this.kind = options.kind;
      this.resolve = options.resolve || DEFAULT_RESOLVE;
      this.construct = options.construct || DEFAULT_CONSTRUCT;
      this.instanceOf = options.instanceOf;
      this.predicate = options.predicate;
      this.represent = options.represent;
      this.defaultStyle = options.defaultStyle;
      this.styleAliases = options.styleAliases;
    }
  }
  resolve = () => true;
  construct = (data) => data;
};

// esbuild_serve:http-import:https://deno.land/std@0.168.0/_util/asserts.ts
var DenoStdInternalError4 = class extends Error {
  constructor(message) {
    super(message);
    this.name = "DenoStdInternalError";
  }
};
function assert4(expr, msg = "") {
  if (!expr) {
    throw new DenoStdInternalError4(msg);
  }
}

// esbuild_serve:http-import:https://deno.land/std@0.168.0/bytes/copy.ts
function copy3(src, dst, off = 0) {
  off = Math.max(0, Math.min(off, dst.byteLength));
  const dstBytesAvailable = dst.byteLength - off;
  if (src.byteLength > dstBytesAvailable) {
    src = src.subarray(0, dstBytesAvailable);
  }
  dst.set(src, off);
  return src.byteLength;
}

// esbuild_serve:http-import:https://deno.land/std@0.168.0/io/buffer.ts
var MIN_READ = 32 * 1024;
var MAX_SIZE = 2 ** 32 - 2;
var Buffer2 = class {
  #buf;
  // contents are the bytes buf[off : len(buf)]
  #off = 0;
  // read at buf[off], write at buf[buf.byteLength]
  constructor(ab) {
    this.#buf = ab === void 0 ? new Uint8Array(0) : new Uint8Array(ab);
  }
  /** Returns a slice holding the unread portion of the buffer.
   *
   * The slice is valid for use only until the next buffer modification (that
   * is, only until the next call to a method like `read()`, `write()`,
   * `reset()`, or `truncate()`). If `options.copy` is false the slice aliases the buffer content at
   * least until the next buffer modification, so immediate changes to the
   * slice will affect the result of future reads.
   * @param [options={ copy: true }]
   */
  bytes(options = { copy: true }) {
    if (options.copy === false)
      return this.#buf.subarray(this.#off);
    return this.#buf.slice(this.#off);
  }
  /** Returns whether the unread portion of the buffer is empty. */
  empty() {
    return this.#buf.byteLength <= this.#off;
  }
  /** A read only number of bytes of the unread portion of the buffer. */
  get length() {
    return this.#buf.byteLength - this.#off;
  }
  /** The read only capacity of the buffer's underlying byte slice, that is,
   * the total space allocated for the buffer's data. */
  get capacity() {
    return this.#buf.buffer.byteLength;
  }
  /** Discards all but the first `n` unread bytes from the buffer but
   * continues to use the same allocated storage. It throws if `n` is
   * negative or greater than the length of the buffer. */
  truncate(n) {
    if (n === 0) {
      this.reset();
      return;
    }
    if (n < 0 || n > this.length) {
      throw Error("bytes.Buffer: truncation out of range");
    }
    this.#reslice(this.#off + n);
  }
  reset() {
    this.#reslice(0);
    this.#off = 0;
  }
  #tryGrowByReslice(n) {
    const l = this.#buf.byteLength;
    if (n <= this.capacity - l) {
      this.#reslice(l + n);
      return l;
    }
    return -1;
  }
  #reslice(len) {
    assert4(len <= this.#buf.buffer.byteLength);
    this.#buf = new Uint8Array(this.#buf.buffer, 0, len);
  }
  /** Reads the next `p.length` bytes from the buffer or until the buffer is
   * drained. Returns the number of bytes read. If the buffer has no data to
   * return, the return is EOF (`null`). */
  readSync(p) {
    if (this.empty()) {
      this.reset();
      if (p.byteLength === 0) {
        return 0;
      }
      return null;
    }
    const nread = copy3(this.#buf.subarray(this.#off), p);
    this.#off += nread;
    return nread;
  }
  /** Reads the next `p.length` bytes from the buffer or until the buffer is
   * drained. Resolves to the number of bytes read. If the buffer has no
   * data to return, resolves to EOF (`null`).
   *
   * NOTE: This methods reads bytes synchronously; it's provided for
   * compatibility with `Reader` interfaces.
   */
  read(p) {
    const rr = this.readSync(p);
    return Promise.resolve(rr);
  }
  writeSync(p) {
    const m = this.#grow(p.byteLength);
    return copy3(p, this.#buf, m);
  }
  /** NOTE: This methods writes bytes synchronously; it's provided for
   * compatibility with `Writer` interface. */
  write(p) {
    const n = this.writeSync(p);
    return Promise.resolve(n);
  }
  #grow(n) {
    const m = this.length;
    if (m === 0 && this.#off !== 0) {
      this.reset();
    }
    const i = this.#tryGrowByReslice(n);
    if (i >= 0) {
      return i;
    }
    const c = this.capacity;
    if (n <= Math.floor(c / 2) - m) {
      copy3(this.#buf.subarray(this.#off), this.#buf);
    } else if (c + n > MAX_SIZE) {
      throw new Error("The buffer cannot be grown beyond the maximum size.");
    } else {
      const buf = new Uint8Array(Math.min(2 * c + n, MAX_SIZE));
      copy3(this.#buf.subarray(this.#off), buf);
      this.#buf = buf;
    }
    this.#off = 0;
    this.#reslice(Math.min(m + n, MAX_SIZE));
    return m;
  }
  /** Grows the buffer's capacity, if necessary, to guarantee space for
   * another `n` bytes. After `.grow(n)`, at least `n` bytes can be written to
   * the buffer without another allocation. If `n` is negative, `.grow()` will
   * throw. If the buffer can't grow it will throw an error.
   *
   * Based on Go Lang's
   * [Buffer.Grow](https://golang.org/pkg/bytes/#Buffer.Grow). */
  grow(n) {
    if (n < 0) {
      throw Error("Buffer.grow: negative count");
    }
    const m = this.#grow(n);
    this.#reslice(m);
  }
  /** Reads data from `r` until EOF (`null`) and appends it to the buffer,
   * growing the buffer as needed. It resolves to the number of bytes read.
   * If the buffer becomes too large, `.readFrom()` will reject with an error.
   *
   * Based on Go Lang's
   * [Buffer.ReadFrom](https://golang.org/pkg/bytes/#Buffer.ReadFrom). */
  async readFrom(r) {
    let n = 0;
    const tmp = new Uint8Array(MIN_READ);
    while (true) {
      const shouldGrow = this.capacity - this.length < MIN_READ;
      const buf = shouldGrow ? tmp : new Uint8Array(this.#buf.buffer, this.length);
      const nread = await r.read(buf);
      if (nread === null) {
        return n;
      }
      if (shouldGrow)
        this.writeSync(buf.subarray(0, nread));
      else
        this.#reslice(this.length + nread);
      n += nread;
    }
  }
  /** Reads data from `r` until EOF (`null`) and appends it to the buffer,
   * growing the buffer as needed. It returns the number of bytes read. If the
   * buffer becomes too large, `.readFromSync()` will throw an error.
   *
   * Based on Go Lang's
   * [Buffer.ReadFrom](https://golang.org/pkg/bytes/#Buffer.ReadFrom). */
  readFromSync(r) {
    let n = 0;
    const tmp = new Uint8Array(MIN_READ);
    while (true) {
      const shouldGrow = this.capacity - this.length < MIN_READ;
      const buf = shouldGrow ? tmp : new Uint8Array(this.#buf.buffer, this.length);
      const nread = r.readSync(buf);
      if (nread === null) {
        return n;
      }
      if (shouldGrow)
        this.writeSync(buf.subarray(0, nread));
      else
        this.#reslice(this.length + nread);
      n += nread;
    }
  }
};

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/binary.ts
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
  if (data === null)
    return false;
  let code;
  let bitlen = 0;
  const max2 = data.length;
  const map3 = BASE64_MAP;
  for (let idx = 0; idx < max2; idx++) {
    code = map3.indexOf(data.charAt(idx));
    if (code > 64)
      continue;
    if (code < 0)
      return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
  const input2 = data.replace(/[\r\n=]/g, "");
  const max2 = input2.length;
  const map3 = BASE64_MAP;
  const result2 = [];
  let bits = 0;
  for (let idx = 0; idx < max2; idx++) {
    if (idx % 4 === 0 && idx) {
      result2.push(bits >> 16 & 255);
      result2.push(bits >> 8 & 255);
      result2.push(bits & 255);
    }
    bits = bits << 6 | map3.indexOf(input2.charAt(idx));
  }
  const tailbits = max2 % 4 * 6;
  if (tailbits === 0) {
    result2.push(bits >> 16 & 255);
    result2.push(bits >> 8 & 255);
    result2.push(bits & 255);
  } else if (tailbits === 18) {
    result2.push(bits >> 10 & 255);
    result2.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result2.push(bits >> 4 & 255);
  }
  return new Buffer2(new Uint8Array(result2));
}
function representYamlBinary(object) {
  const max2 = object.length;
  const map3 = BASE64_MAP;
  let result2 = "";
  let bits = 0;
  for (let idx = 0; idx < max2; idx++) {
    if (idx % 3 === 0 && idx) {
      result2 += map3[bits >> 18 & 63];
      result2 += map3[bits >> 12 & 63];
      result2 += map3[bits >> 6 & 63];
      result2 += map3[bits & 63];
    }
    bits = (bits << 8) + object[idx];
  }
  const tail2 = max2 % 3;
  if (tail2 === 0) {
    result2 += map3[bits >> 18 & 63];
    result2 += map3[bits >> 12 & 63];
    result2 += map3[bits >> 6 & 63];
    result2 += map3[bits & 63];
  } else if (tail2 === 2) {
    result2 += map3[bits >> 10 & 63];
    result2 += map3[bits >> 4 & 63];
    result2 += map3[bits << 2 & 63];
    result2 += map3[64];
  } else if (tail2 === 1) {
    result2 += map3[bits >> 2 & 63];
    result2 += map3[bits << 4 & 63];
    result2 += map3[64];
    result2 += map3[64];
  }
  return result2;
}
function isBinary(obj) {
  if (typeof obj?.readSync !== "function") {
    return false;
  }
  const buf = new Buffer2();
  try {
    if (0 > buf.readFromSync(obj))
      return true;
    return false;
  } catch {
    return false;
  } finally {
    buf.reset();
  }
}
var binary = new Type("tag:yaml.org,2002:binary", {
  construct: constructYamlBinary,
  kind: "scalar",
  predicate: isBinary,
  represent: representYamlBinary,
  resolve: resolveYamlBinary
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/bool.ts
function resolveYamlBoolean(data) {
  const max2 = data.length;
  return max2 === 4 && (data === "true" || data === "True" || data === "TRUE") || max2 === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
  return data === "true" || data === "True" || data === "TRUE";
}
var bool = new Type("tag:yaml.org,2002:bool", {
  construct: constructYamlBoolean,
  defaultStyle: "lowercase",
  kind: "scalar",
  predicate: isBoolean2,
  represent: {
    lowercase(object) {
      return object ? "true" : "false";
    },
    uppercase(object) {
      return object ? "TRUE" : "FALSE";
    },
    camelcase(object) {
      return object ? "True" : "False";
    }
  },
  resolve: resolveYamlBoolean
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/float.ts
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(data) {
  if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  data[data.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  let value = data.replace(/_/g, "").toLowerCase();
  const sign = value[0] === "-" ? -1 : 1;
  const digits = [];
  if ("+-".indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === ".inf") {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  }
  if (value === ".nan") {
    return NaN;
  }
  if (value.indexOf(":") >= 0) {
    value.split(":").forEach((v) => {
      digits.unshift(parseFloat(v));
    });
    let valueNb = 0;
    let base = 1;
    digits.forEach((d) => {
      valueNb += d * base;
      base *= 60;
    });
    return sign * valueNb;
  }
  return sign * parseFloat(value);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
  if (isNaN(object)) {
    switch (style) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (isNegativeZero(object)) {
    return "-0.0";
  }
  const res = object.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || isNegativeZero(object));
}
var float = new Type("tag:yaml.org,2002:float", {
  construct: constructYamlFloat,
  defaultStyle: "lowercase",
  kind: "scalar",
  predicate: isFloat,
  represent: representYamlFloat,
  resolve: resolveYamlFloat
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/int.ts
function isHexCode(c) {
  return 48 <= /* 0 */
  c && c <= 57 || 65 <= /* A */
  c && c <= 70 || 97 <= /* a */
  c && c <= 102;
}
function isOctCode(c) {
  return 48 <= /* 0 */
  c && c <= 55;
}
function isDecCode(c) {
  return 48 <= /* 0 */
  c && c <= 57;
}
function resolveYamlInteger(data) {
  const max2 = data.length;
  let index = 0;
  let hasDigits = false;
  if (!max2)
    return false;
  let ch = data[index];
  if (ch === "-" || ch === "+") {
    ch = data[++index];
  }
  if (ch === "0") {
    if (index + 1 === max2)
      return true;
    ch = data[++index];
    if (ch === "b") {
      index++;
      for (; index < max2; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (ch !== "0" && ch !== "1")
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index++;
      for (; index < max2; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (!isHexCode(data.charCodeAt(index)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    for (; index < max2; index++) {
      ch = data[index];
      if (ch === "_")
        continue;
      if (!isOctCode(data.charCodeAt(index)))
        return false;
      hasDigits = true;
    }
    return hasDigits && ch !== "_";
  }
  if (ch === "_")
    return false;
  for (; index < max2; index++) {
    ch = data[index];
    if (ch === "_")
      continue;
    if (ch === ":")
      break;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_")
    return false;
  if (ch !== ":")
    return true;
  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}
function constructYamlInteger(data) {
  let value = data;
  const digits = [];
  if (value.indexOf("_") !== -1) {
    value = value.replace(/_/g, "");
  }
  let sign = 1;
  let ch = value[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-")
      sign = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === "0")
    return 0;
  if (ch === "0") {
    if (value[1] === "b")
      return sign * parseInt(value.slice(2), 2);
    if (value[1] === "x")
      return sign * parseInt(value, 16);
    return sign * parseInt(value, 8);
  }
  if (value.indexOf(":") !== -1) {
    value.split(":").forEach((v) => {
      digits.unshift(parseInt(v, 10));
    });
    let valueInt = 0;
    let base = 1;
    digits.forEach((d) => {
      valueInt += d * base;
      base *= 60;
    });
    return sign * valueInt;
  }
  return sign * parseInt(value, 10);
}
function isInteger2(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && object % 1 === 0 && !isNegativeZero(object);
}
var int = new Type("tag:yaml.org,2002:int", {
  construct: constructYamlInteger,
  defaultStyle: "decimal",
  kind: "scalar",
  predicate: isInteger2,
  represent: {
    binary(obj) {
      return obj >= 0 ? `0b${obj.toString(2)}` : `-0b${obj.toString(2).slice(1)}`;
    },
    octal(obj) {
      return obj >= 0 ? `0${obj.toString(8)}` : `-0${obj.toString(8).slice(1)}`;
    },
    decimal(obj) {
      return obj.toString(10);
    },
    hexadecimal(obj) {
      return obj >= 0 ? `0x${obj.toString(16).toUpperCase()}` : `-0x${obj.toString(16).toUpperCase().slice(1)}`;
    }
  },
  resolve: resolveYamlInteger,
  styleAliases: {
    binary: [2, "bin"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"],
    octal: [8, "oct"]
  }
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/map.ts
var map2 = new Type("tag:yaml.org,2002:map", {
  construct(data) {
    return data !== null ? data : {};
  },
  kind: "mapping"
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/merge.ts
function resolveYamlMerge(data) {
  return data === "<<" || data === null;
}
var merge3 = new Type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/nil.ts
function resolveYamlNull(data) {
  const max2 = data.length;
  return max2 === 1 && data === "~" || max2 === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull2(object) {
  return object === null;
}
var nil = new Type("tag:yaml.org,2002:null", {
  construct: constructYamlNull,
  defaultStyle: "lowercase",
  kind: "scalar",
  predicate: isNull2,
  represent: {
    canonical() {
      return "~";
    },
    lowercase() {
      return "null";
    },
    uppercase() {
      return "NULL";
    },
    camelcase() {
      return "Null";
    }
  },
  resolve: resolveYamlNull
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/omap.ts
var { hasOwn } = Object;
var _toString = Object.prototype.toString;
function resolveYamlOmap(data) {
  const objectKeys = [];
  let pairKey = "";
  let pairHasKey = false;
  for (const pair of data) {
    pairHasKey = false;
    if (_toString.call(pair) !== "[object Object]")
      return false;
    for (pairKey in pair) {
      if (hasOwn(pair, pairKey)) {
        if (!pairHasKey)
          pairHasKey = true;
        else
          return false;
      }
    }
    if (!pairHasKey)
      return false;
    if (objectKeys.indexOf(pairKey) === -1)
      objectKeys.push(pairKey);
    else
      return false;
  }
  return true;
}
function constructYamlOmap(data) {
  return data !== null ? data : [];
}
var omap = new Type("tag:yaml.org,2002:omap", {
  construct: constructYamlOmap,
  kind: "sequence",
  resolve: resolveYamlOmap
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/pairs.ts
var _toString2 = Object.prototype.toString;
function resolveYamlPairs(data) {
  const result2 = Array.from({ length: data.length });
  for (let index = 0; index < data.length; index++) {
    const pair = data[index];
    if (_toString2.call(pair) !== "[object Object]")
      return false;
    const keys2 = Object.keys(pair);
    if (keys2.length !== 1)
      return false;
    result2[index] = [keys2[0], pair[keys2[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  if (data === null)
    return [];
  const result2 = Array.from({ length: data.length });
  for (let index = 0; index < data.length; index += 1) {
    const pair = data[index];
    const keys2 = Object.keys(pair);
    result2[index] = [keys2[0], pair[keys2[0]]];
  }
  return result2;
}
var pairs = new Type("tag:yaml.org,2002:pairs", {
  construct: constructYamlPairs,
  kind: "sequence",
  resolve: resolveYamlPairs
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/seq.ts
var seq = new Type("tag:yaml.org,2002:seq", {
  construct(data) {
    return data !== null ? data : [];
  },
  kind: "sequence"
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/set.ts
var { hasOwn: hasOwn2 } = Object;
function resolveYamlSet(data) {
  if (data === null)
    return true;
  for (const key in data) {
    if (hasOwn2(data, key)) {
      if (data[key] !== null)
        return false;
    }
  }
  return true;
}
function constructYamlSet(data) {
  return data !== null ? data : {};
}
var set3 = new Type("tag:yaml.org,2002:set", {
  construct: constructYamlSet,
  kind: "mapping",
  resolve: resolveYamlSet
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/str.ts
var str = new Type("tag:yaml.org,2002:str", {
  construct(data) {
    return data !== null ? data : "";
  },
  kind: "scalar"
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/type/timestamp.ts
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
  // [3] day
);
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
  // [11] tz_minute
);
function resolveYamlTimestamp(data) {
  if (data === null)
    return false;
  if (YAML_DATE_REGEXP.exec(data) !== null)
    return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
    return true;
  return false;
}
function constructYamlTimestamp(data) {
  let match = YAML_DATE_REGEXP.exec(data);
  if (match === null)
    match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null)
    throw new Error("Date resolve error");
  const year = +match[1];
  const month = +match[2] - 1;
  const day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  const hour = +match[4];
  const minute = +match[5];
  const second = +match[6];
  let fraction = 0;
  if (match[7]) {
    let partFraction = match[7].slice(0, 3);
    while (partFraction.length < 3) {
      partFraction += "0";
    }
    fraction = +partFraction;
  }
  let delta = null;
  if (match[9]) {
    const tzHour = +match[10];
    const tzMinute = +(match[11] || 0);
    delta = (tzHour * 60 + tzMinute) * 6e4;
    if (match[9] === "-")
      delta = -delta;
  }
  const date = new Date(
    Date.UTC(year, month, day, hour, minute, second, fraction)
  );
  if (delta)
    date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(date) {
  return date.toISOString();
}
var timestamp = new Type("tag:yaml.org,2002:timestamp", {
  construct: constructYamlTimestamp,
  instanceOf: Date,
  kind: "scalar",
  represent: representYamlTimestamp,
  resolve: resolveYamlTimestamp
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/schema/failsafe.ts
var failsafe = new Schema({
  explicit: [str, seq, map2]
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/schema/json.ts
var json = new Schema({
  implicit: [nil, bool, int, float],
  include: [failsafe]
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/schema/core.ts
var core = new Schema({
  include: [json]
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/schema/default.ts
var def = new Schema({
  explicit: [binary, omap, pairs, set3],
  implicit: [timestamp, merge3],
  include: [core]
});

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/state.ts
var State = class {
  constructor(schema = def) {
    this.schema = schema;
  }
};

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/loader/loader_state.ts
var LoaderState = class extends State {
  constructor(input2, {
    filename,
    schema,
    onWarning,
    legacy = false,
    json: json2 = false,
    listener = null
  }) {
    super(schema);
    this.input = input2;
    this.filename = filename;
    this.onWarning = onWarning;
    this.legacy = legacy;
    this.json = json2;
    this.listener = listener;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input2.length;
  }
  documents = [];
  length;
  lineIndent = 0;
  lineStart = 0;
  position = 0;
  line = 0;
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
  result = "";
};

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/loader/loader.ts
var { hasOwn: hasOwn3 } = Object;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = (
  // deno-lint-ignore no-control-regex
  /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
);
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isEOL(c) {
  return c === 10 || /* LF */
  c === 13;
}
function isWhiteSpace(c) {
  return c === 9 || /* Tab */
  c === 32;
}
function isWsOrEol(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function isFlowIndicator(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  if (48 <= /* 0 */
  c && c <= 57) {
    return c - 48;
  }
  const lc = c | 32;
  if (97 <= /* a */
  lc && lc <= 102) {
    return lc - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= /* 0 */
  c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode(
    (c - 65536 >> 10) + 55296,
    (c - 65536 & 1023) + 56320
  );
}
var simpleEscapeCheck = Array.from({ length: 256 });
var simpleEscapeMap = Array.from({ length: 256 });
for (let i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function generateError(state, message) {
  return new YAMLError(
    message,
    new Mark(
      state.filename,
      state.input,
      state.position,
      state.line,
      state.position - state.lineStart
    )
  );
}
function throwError(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}
var directiveHandlers = {
  YAML(state, _name, ...args) {
    if (state.version !== null) {
      return throwError(state, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      return throwError(state, "YAML directive accepts exactly one argument");
    }
    const match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      return throwError(state, "ill-formed argument of the YAML directive");
    }
    const major = parseInt(match[1], 10);
    const minor = parseInt(match[2], 10);
    if (major !== 1) {
      return throwError(state, "unacceptable YAML version of the document");
    }
    state.version = args[0];
    state.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      return throwWarning(state, "unsupported YAML version of the document");
    }
  },
  TAG(state, _name, ...args) {
    if (args.length !== 2) {
      return throwError(state, "TAG directive accepts exactly two arguments");
    }
    const handle = args[0];
    const prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      return throwError(
        state,
        "ill-formed tag handle (first argument) of the TAG directive"
      );
    }
    if (state.tagMap && hasOwn3(state.tagMap, handle)) {
      return throwError(
        state,
        `there is a previously declared suffix for "${handle}" tag handle`
      );
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      return throwError(
        state,
        "ill-formed tag prefix (second argument) of the TAG directive"
      );
    }
    if (typeof state.tagMap === "undefined") {
      state.tagMap = {};
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  let result2;
  if (start < end) {
    result2 = state.input.slice(start, end);
    if (checkJson) {
      for (let position = 0, length = result2.length; position < length; position++) {
        const character = result2.charCodeAt(position);
        if (!(character === 9 || 32 <= character && character <= 1114111)) {
          return throwError(state, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(result2)) {
      return throwError(state, "the stream contains non-printable characters");
    }
    state.result += result2;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  if (!isObject2(source)) {
    return throwError(
      state,
      "cannot merge mappings; the provided source object is unacceptable"
    );
  }
  const keys2 = Object.keys(source);
  for (let i = 0, len = keys2.length; i < len; i++) {
    const key = keys2[i];
    if (!hasOwn3(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, result2, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (let index = 0, quantity = keyNode.length; index < quantity; index++) {
      if (Array.isArray(keyNode[index])) {
        return throwError(state, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
        keyNode[index] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (result2 === null) {
    result2 = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (let index = 0, quantity = valueNode.length; index < quantity; index++) {
        mergeMappings(state, result2, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, result2, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !hasOwn3(overridableKeys, keyNode) && hasOwn3(result2, keyNode)) {
      state.line = startLine || state.line;
      state.position = startPos || state.position;
      return throwError(state, "duplicated mapping key");
    }
    result2[keyNode] = valueNode;
    delete overridableKeys[keyNode];
  }
  return result2;
}
function readLineBreak(state) {
  const ch = state.input.charCodeAt(state.position);
  if (ch === 10) {
    state.position++;
  } else if (ch === 13) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) {
      state.position++;
    }
  } else {
    return throwError(state, "a line break is expected");
  }
  state.line += 1;
  state.lineStart = state.position;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  let lineBreaks = 0, ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (isWhiteSpace(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 10 && /* LF */
      ch !== 13 && /* CR */
      ch !== 0);
    }
    if (isEOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  let _position = state.position;
  let ch = state.input.charCodeAt(_position);
  if ((ch === 45 || /* - */
  ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || isWsOrEol(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count2) {
  if (count2 === 1) {
    state.result += " ";
  } else if (count2 > 1) {
    state.result += repeat2("\n", count2 - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  const kind = state.kind;
  const result2 = state.result;
  let ch = state.input.charCodeAt(state.position);
  if (isWsOrEol(ch) || isFlowIndicator(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  let following;
  if (ch === 63 || /* ? */
  ch === 45) {
    following = state.input.charCodeAt(state.position + 1);
    if (isWsOrEol(following) || withinFlowCollection && isFlowIndicator(following)) {
      return false;
    }
  }
  state.kind = "scalar";
  state.result = "";
  let captureEnd, captureStart = captureEnd = state.position;
  let hasPendingContent = false;
  let line = 0;
  while (ch !== 0) {
    if (ch === 58) {
      following = state.input.charCodeAt(state.position + 1);
      if (isWsOrEol(following) || withinFlowCollection && isFlowIndicator(following)) {
        break;
      }
    } else if (ch === 35) {
      const preceding = state.input.charCodeAt(state.position - 1);
      if (isWsOrEol(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && isFlowIndicator(ch)) {
      break;
    } else if (isEOL(ch)) {
      line = state.line;
      const lineStart = state.lineStart;
      const lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = line;
        state.lineStart = lineStart;
        state.lineIndent = lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!isWhiteSpace(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = kind;
  state.result = result2;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  let ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 39) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 39) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (isEOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      return throwError(
        state,
        "unexpected end of the document within a single quoted scalar"
      );
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  return throwError(
    state,
    "unexpected end of the stream within a single quoted scalar"
  );
}
function readDoubleQuotedScalar(state, nodeIndent) {
  let ch = state.input.charCodeAt(state.position);
  if (ch !== 34) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  let captureEnd, captureStart = captureEnd = state.position;
  let tmp;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    }
    if (ch === 92) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (isEOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        let hexLength = tmp;
        let hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            return throwError(state, "expected hexadecimal character");
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        return throwError(state, "unknown escape sequence");
      }
      captureStart = captureEnd = state.position;
    } else if (isEOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      return throwError(
        state,
        "unexpected end of the document within a double quoted scalar"
      );
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  return throwError(
    state,
    "unexpected end of the stream within a double quoted scalar"
  );
}
function readFlowCollection(state, nodeIndent) {
  let ch = state.input.charCodeAt(state.position);
  let terminator;
  let isMapping = true;
  let result2 = {};
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    result2 = [];
  } else if (ch === 123) {
    terminator = 125;
  } else {
    return false;
  }
  if (state.anchor !== null && typeof state.anchor != "undefined" && typeof state.anchorMap != "undefined") {
    state.anchorMap[state.anchor] = result2;
  }
  ch = state.input.charCodeAt(++state.position);
  const tag = state.tag, anchor = state.anchor;
  let readNext = true;
  let valueNode, keyNode, keyTag = keyNode = valueNode = null, isExplicitPair, isPair = isExplicitPair = false;
  let following = 0, line = 0;
  const overridableKeys = {};
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = tag;
      state.anchor = anchor;
      state.kind = isMapping ? "mapping" : "sequence";
      state.result = result2;
      return true;
    }
    if (!readNext) {
      return throwError(state, "missed comma between flow collection entries");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state.input.charCodeAt(state.position + 1);
      if (isWsOrEol(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag || null;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === line) && ch === 58) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(
        state,
        result2,
        overridableKeys,
        keyTag,
        keyNode,
        valueNode
      );
    } else if (isPair) {
      result2.push(
        storeMappingPair(
          state,
          null,
          overridableKeys,
          keyTag,
          keyNode,
          valueNode
        )
      );
    } else {
      result2.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 44) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  return throwError(
    state,
    "unexpected end of the stream within a flow collection"
  );
}
function readBlockScalar(state, nodeIndent) {
  let chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false;
  let ch = state.input.charCodeAt(state.position);
  let folding = false;
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  let tmp = 0;
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 43 || /* + */
    ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        return throwError(state, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        return throwError(
          state,
          "bad explicit indentation width of a block scalar; it cannot be less than one"
        );
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        return throwError(state, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (isWhiteSpace(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (isWhiteSpace(ch));
    if (ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!isEOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (isEOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += repeat2(
          "\n",
          didReadContent ? 1 + emptyLines : emptyLines
        );
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += "\n";
        }
      }
      break;
    }
    if (folding) {
      if (isWhiteSpace(ch)) {
        atMoreIndented = true;
        state.result += repeat2(
          "\n",
          didReadContent ? 1 + emptyLines : emptyLines
        );
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += repeat2("\n", emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += " ";
        }
      } else {
        state.result += repeat2("\n", emptyLines);
      }
    } else {
      state.result += repeat2(
        "\n",
        didReadContent ? 1 + emptyLines : emptyLines
      );
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    const captureStart = state.position;
    while (!isEOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  let line, following, detected = false, ch;
  const tag = state.tag, anchor = state.anchor, result2 = [];
  if (state.anchor !== null && typeof state.anchor !== "undefined" && typeof state.anchorMap !== "undefined") {
    state.anchorMap[state.anchor] = result2;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (ch !== 45) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!isWsOrEol(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        result2.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    result2.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === line || state.lineIndent > nodeIndent) && ch !== 0) {
      return throwError(state, "bad indentation of a sequence entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = tag;
    state.anchor = anchor;
    state.kind = "sequence";
    state.result = result2;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  const tag = state.tag, anchor = state.anchor, result2 = {}, overridableKeys = {};
  let following, allowCompact = false, line, pos, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state.anchor !== null && typeof state.anchor !== "undefined" && typeof state.anchorMap !== "undefined") {
    state.anchorMap[state.anchor] = result2;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    following = state.input.charCodeAt(state.position + 1);
    line = state.line;
    pos = state.position;
    if ((ch === 63 || /* ? */
    ch === 58) && /* : */
    isWsOrEol(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(
            state,
            result2,
            overridableKeys,
            keyTag,
            keyNode,
            null
          );
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        return throwError(
          state,
          "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"
        );
      }
      state.position += 1;
      ch = following;
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
      if (state.line === line) {
        ch = state.input.charCodeAt(state.position);
        while (isWhiteSpace(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!isWsOrEol(ch)) {
            return throwError(
              state,
              "a whitespace character is expected after the key-value separator within a block mapping"
            );
          }
          if (atExplicitKey) {
            storeMappingPair(
              state,
              result2,
              overridableKeys,
              keyTag,
              keyNode,
              null
            );
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          return throwError(
            state,
            "can not read an implicit mapping pair; a colon is missed"
          );
        } else {
          state.tag = tag;
          state.anchor = anchor;
          return true;
        }
      } else if (detected) {
        return throwError(
          state,
          "can not read a block mapping entry; a multiline key may not be an implicit key"
        );
      } else {
        state.tag = tag;
        state.anchor = anchor;
        return true;
      }
    } else {
      break;
    }
    if (state.line === line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(
          state,
          result2,
          overridableKeys,
          keyTag,
          keyNode,
          valueNode,
          line,
          pos
        );
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if (state.lineIndent > nodeIndent && ch !== 0) {
      return throwError(state, "bad indentation of a mapping entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(
      state,
      result2,
      overridableKeys,
      keyTag,
      keyNode,
      null
    );
  }
  if (detected) {
    state.tag = tag;
    state.anchor = anchor;
    state.kind = "mapping";
    state.result = result2;
  }
  return detected;
}
function readTagProperty(state) {
  let position, isVerbatim = false, isNamed = false, tagHandle = "", tagName, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 33)
    return false;
  if (state.tag !== null) {
    return throwError(state, "duplication of a tag property");
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = "!";
  }
  position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 62);
    if (state.position < state.length) {
      tagName = state.input.slice(position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      return throwError(
        state,
        "unexpected end of the stream within a verbatim tag"
      );
    }
  } else {
    while (ch !== 0 && !isWsOrEol(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            return throwError(
              state,
              "named tag handle cannot contain such characters"
            );
          }
          isNamed = true;
          position = state.position + 1;
        } else {
          return throwError(
            state,
            "tag suffix cannot contain exclamation marks"
          );
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      return throwError(
        state,
        "tag suffix cannot contain flow indicator characters"
      );
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    return throwError(
      state,
      `tag name cannot contain such characters: ${tagName}`
    );
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (typeof state.tagMap !== "undefined" && hasOwn3(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state.tag = `!${tagName}`;
  } else if (tagHandle === "!!") {
    state.tag = `tag:yaml.org,2002:${tagName}`;
  } else {
    return throwError(state, `undeclared tag handle "${tagHandle}"`);
  }
  return true;
}
function readAnchorProperty(state) {
  let ch = state.input.charCodeAt(state.position);
  if (ch !== 38)
    return false;
  if (state.anchor !== null) {
    return throwError(state, "duplication of an anchor property");
  }
  ch = state.input.charCodeAt(++state.position);
  const position = state.position;
  while (ch !== 0 && !isWsOrEol(ch) && !isFlowIndicator(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === position) {
    return throwError(
      state,
      "name of an anchor node must contain at least one character"
    );
  }
  state.anchor = state.input.slice(position, state.position);
  return true;
}
function readAlias(state) {
  let ch = state.input.charCodeAt(state.position);
  if (ch !== 42)
    return false;
  ch = state.input.charCodeAt(++state.position);
  const _position = state.position;
  while (ch !== 0 && !isWsOrEol(ch) && !isFlowIndicator(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    return throwError(
      state,
      "name of an alias node must contain at least one character"
    );
  }
  const alias = state.input.slice(_position, state.position);
  if (typeof state.anchorMap !== "undefined" && !hasOwn3(state.anchorMap, alias)) {
    return throwError(state, `unidentified alias "${alias}"`);
  }
  if (typeof state.anchorMap !== "undefined") {
    state.result = state.anchorMap[alias];
  }
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  let allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, type, flowIndent, blockIndent;
  if (state.listener && state.listener !== null) {
    state.listener("open", state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  const allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    const cond2 = CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext;
    flowIndent = cond2 ? parentIndent : parentIndent + 1;
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            return throwError(
              state,
              "alias node should not have Any properties"
            );
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = "?";
          }
        }
        if (state.anchor !== null && typeof state.anchorMap !== "undefined") {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag !== null && state.tag !== "!") {
    if (state.tag === "?") {
      for (let typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex++) {
        type = state.implicitTypes[typeIndex];
        if (type.resolve(state.result)) {
          state.result = type.construct(state.result);
          state.tag = type.tag;
          if (state.anchor !== null && typeof state.anchorMap !== "undefined") {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (hasOwn3(state.typeMap[state.kind || "fallback"], state.tag)) {
      type = state.typeMap[state.kind || "fallback"][state.tag];
      if (state.result !== null && type.kind !== state.kind) {
        return throwError(
          state,
          `unacceptable node kind for !<${state.tag}> tag; it should be "${type.kind}", not "${state.kind}"`
        );
      }
      if (!type.resolve(state.result)) {
        return throwError(
          state,
          `cannot resolve a node with !<${state.tag}> explicit tag`
        );
      } else {
        state.result = type.construct(state.result);
        if (state.anchor !== null && typeof state.anchorMap !== "undefined") {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      return throwError(state, `unknown tag !<${state.tag}>`);
    }
  }
  if (state.listener && state.listener !== null) {
    state.listener("close", state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  const documentStart = state.position;
  let position, directiveName, directiveArgs, hasDirectives = false, ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    position = state.position;
    while (ch !== 0 && !isWsOrEol(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      return throwError(
        state,
        "directive name must not be less than one character in length"
      );
    }
    while (ch !== 0) {
      while (isWhiteSpace(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !isEOL(ch));
        break;
      }
      if (isEOL(ch))
        break;
      position = state.position;
      while (ch !== 0 && !isWsOrEol(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(position, state.position));
    }
    if (ch !== 0)
      readLineBreak(state);
    if (hasOwn3(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, ...directiveArgs);
    } else {
      throwWarning(state, `unknown document directive "${directiveName}"`);
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    return throwError(state, "directives end mark is expected");
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(
    state.input.slice(documentStart, state.position)
  )) {
    throwWarning(state, "non-ASCII line breaks are interpreted as content");
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 46) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    return throwError(
      state,
      "end of the stream or a document separator is expected"
    );
  } else {
    return;
  }
}
function loadDocuments(input2, options) {
  input2 = String(input2);
  options = options || {};
  if (input2.length !== 0) {
    if (input2.charCodeAt(input2.length - 1) !== 10 && input2.charCodeAt(input2.length - 1) !== 13) {
      input2 += "\n";
    }
    if (input2.charCodeAt(0) === 65279) {
      input2 = input2.slice(1);
    }
  }
  const state = new LoaderState(input2, options);
  state.input += "\0";
  while (state.input.charCodeAt(state.position) === 32) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function load(input2, options) {
  const documents = loadDocuments(input2, options);
  if (documents.length === 0) {
    return;
  }
  if (documents.length === 1) {
    return documents[0];
  }
  throw new YAMLError(
    "expected a single document in the stream, but found more"
  );
}

// esbuild_serve:http-import:https://deno.land/std@0.168.0/encoding/_yaml/parse.ts
function parse9(content, options) {
  return load(content, options);
}

// main/generate_data.js
var configData = parse9(await FileSystem.read(`${FileSystem.thisFolder}/../config.yaml`));
var project = configData["(project)"];
var pathTo = project["(path_to)"];
var config = project["(profiles)"]["(default)"];
var parameters = config["generate_data"];
var infoForAllData = await FileSystem.info(pathTo.all_negative_examples);
var shouldGenerateAllDataFile = !infoForAllData.isFile;
var pathToHuffmanCoder = pathTo["huffman_coder"];
parameters.aminoMatchPattern = new RegExp(parameters.aminoMatchPattern);
var { mixedExamples, summaryData, geneIds, geneData } = await loadMixedExamples({
  filePath: `./data/human_genome.fasta.txt`,
  aminoMatchPattern: parameters.aminoMatchPattern,
  windowPadding: parameters.windowPadding,
  skipEntryIf: ({ uniprotGeneId, aminoAcidsString, ...otherData }) => false
  // false=keep
});
console.debug(`mixedExamples[0] is:`, mixedExamples[0]);
var {
  positiveExamples,
  commonGeneIds
} = await loadPositiveExamples({
  filePath: /.\/data\/phosphorylation@0\d+.tsv/,
  skipEntryIf: ({ uniprotGeneId, aminoAcidsString }) => !geneIds.has(uniprotGeneId) || !aminoAcidsString[parameters.windowPadding].match(parameters.aminoMatchPattern) || parameters.useHuffmanEncoding && aminoAcidsString.match(/SSS+/),
  geneData
});
console.debug(`positiveExamples[0] is:`, positiveExamples[0]);
var siteIdMapping = {};
for (const [index, each3] of enumerate(mixedExamples)) {
  siteIdMapping[each3] = index;
}
var mixedExampleIndiciesToDelete = [];
for (const each3 of positiveExamples) {
  const indexInMixedExamples = siteIdMapping[each3.siteId];
  if (typeof indexInMixedExamples == "number") {
    mixedExampleIndiciesToDelete.push(indexInMixedExamples);
  }
}
mixedExampleIndiciesToDelete.sort().reverse();
for (const eachIndex of mixedExampleIndiciesToDelete) {
  mixedExamples = mixedExamples.splice(eachIndex, 1);
}
var negativeExamples = mixedExamples;
if (!shouldGenerateAllDataFile) {
  const maxCommonSize = Math.min(positiveExamples.length, negativeExamples.length);
  positiveExamples = positiveExamples.slice(-parameters.datasetSize);
  negativeExamples = negativeExamples.slice(-parameters.datasetSize);
  if (negativeExamples.length != positiveExamples.length) {
    let max2 = Math.min(positiveExamples.length, negativeExamples.length);
    console.error(`parameters.datasetSize was too big needs to be: ${max2}`);
    positiveExamples = positiveExamples.slice(0, max2);
    negativeExamples = negativeExamples.slice(0, max2);
  }
} else {
  console.log(`generating an "all data" dump because it is necessary and missing`);
  parameters.featureToInclude = { normalPositionalData: true };
}
console.debug(`negativeExamples.length is:`, negativeExamples.length);
console.debug(`positiveExamples.length is:`, positiveExamples.length);
if (parameters.preprocessing.shouldUseSimplifier) {
  for (const [key, value] of Object.entries(aminoAcidSimplifier)) {
    delete amnioEncoding[key];
  }
}
function* preprocess(examples) {
  let count2 = 0;
  for (let { aminoAcids } of examples) {
    if (parameters.preprocessing.shouldUseSimplifier) {
      for (const [key, value] of Object.entries(aminoAcidSimplifier)) {
        aminoAcids = aminoAcids.replace(new RegExp(key, "g"), value);
      }
    }
    yield [aminoAcids.slice(0, parameters.windowPadding), aminoAcids.slice(parameters.windowPadding + 1), aminoAcids];
  }
}
var coder;
if (parameters.useHuffmanEncoding) {
  coder = new HuffmanCoder({ softCap: parameters.huffmanEncoderCap });
  console.debug(`building huffman coder`);
  let count2 = 0;
  coder.addData("UGBTEVNYT".slice(0, parameters.windowPadding));
  for (const [start, end, aminoAcidString] of preprocess(positiveExamples)) {
    count2 += 1;
    if (count2 % 2e3 == 0) {
      console.log(`    on ${count2}/${parameters.datasetSize * 2}: ${Math.round(count2 / (parameters.datasetSize * 2) * 100)}%`);
    }
    coder.addData(start);
    coder.addData(end);
  }
  coder.freeze();
  coder.numberToVector = createOneHot(coder.numberToSubstring).objToOneHot;
  console.debug(`saving huffman coder`);
  FileSystem.write({ path: pathToHuffmanCoder, data: JSON.stringify(coder, 0, 2) }).then(() => console.debug(`saved huffman coder`));
}
var featureNames = [];
function* encodeExamples(examples) {
  for (const [acidsBefore, acidsAfter, aminoAcidString] of preprocess(examples)) {
    featureNames.length = 0;
    let featureVector = [];
    if (parameters.useHuffmanEncoding && parameters.featureToInclude.positionInvariantHuffman) {
      const encodedBefore = coder.encode(acidsBefore).slice(-parameters.minOneSideEncodedLength, acidsBefore.length);
      const encodedAfter = coder.encode(acidsAfter).slice(0, parameters.minOneSideEncodedLength);
      if (encodedBefore.length < parameters.minOneSideEncodedLength || encodedAfter.length < parameters.minOneSideEncodedLength) {
        continue;
      }
      const beforeVector = [];
      const afterVector = [];
      for (const [substringNumber, vector] of Object.entries(coder.numberToVector)) {
        beforeVector[substringNumber] = parameters.positionInvariantFarAwayValue;
        afterVector[substringNumber] = parameters.positionInvariantFarAwayValue;
      }
      for (const [distance, substringNumber] of [...enumerate(encodedBefore.reverse())].reverse()) {
        beforeVector[substringNumber] = distance;
      }
      for (const [distance, substringNumber] of [...enumerate(encodedAfter)].reverse()) {
        afterVector[substringNumber] = distance;
      }
      featureVector = featureVector.concat(beforeVector, afterVector);
      for (const [index, each3] of enumerate(beforeVector)) {
        featureNames.push(`huffman:before:${index}`);
      }
      for (const [index, each3] of enumerate(afterVector)) {
        featureNames.push(`huffman:after:${index}`);
      }
    }
    if (parameters.featureToInclude.normalPositionalData) {
      const centerIndex = (aminoAcidString.length - 1) / 2;
      for (const [index, eachAminoChar] of enumerate(aminoAcidString)) {
        if (index == centerIndex) {
          continue;
        }
        for (const [eachBool, aminoAcidName] of zip(aminoToOneHot[eachAminoChar], Object.keys(amnioEncoding))) {
          featureNames.push(`${aminoAcidName}@${index}`);
          featureVector.push(eachBool);
        }
      }
    }
    if (parameters.featureToInclude.positionInvariantPhysicochemicalCategories) {
      for (const [key, qualities] of Object.entries(physicochemicalCategories)) {
        let featureMagnitude = 0;
        let beforeFeatureMagnitude = 0;
        let afterFeatureMagnitude = 0;
        for (const eachAcid of acidsBefore) {
          featureMagnitude += 1;
          beforeFeatureMagnitude += 1;
        }
        for (const eachAcid of acidsAfter) {
          featureMagnitude += 1;
          afterFeatureMagnitude += 1;
        }
        featureVector.push(featureMagnitude);
        featureNames.push(`physicochemical:${key}`);
        featureVector.push(beforeFeatureMagnitude);
        featureNames.push(`physicochemicalBefore:${key}`);
        featureVector.push(afterFeatureMagnitude);
        featureNames.push(`physicochemicalAfter:${key}`);
      }
    }
    if (parameters.featureToInclude.physicochemicalCategories) {
      const centerIndex = (aminoAcidString.length - 1) / 2;
      for (const [index, eachAminoChar] of enumerate(aminoAcidString)) {
        if (index == centerIndex) {
          continue;
        }
        for (const [key, eachBool] of Object.entries(aminoToPhysicochemical(eachAminoChar))) {
          featureNames.push(`is_${key}@${index}`);
          featureVector.push(eachBool);
        }
      }
    }
    if (parameters.featureToInclude.handCodedMotifs) {
      featureNames.push(`handCodedMotifs:1`);
      featureVector.push(
        aminoAcidString.match(/..........S........../) ? 1 : 0
      );
    }
    yield new Uint8Array(featureVector);
  }
}
function* getGenes(examples) {
  for (const each3 of examples) {
    yield each3.geneInfo.uniprotGeneId;
  }
}
if (shouldGenerateAllDataFile) {
  await Promise.all([
    FileSystem.write({ path: pathTo.all_positive_examples, data: generateLinesFor(encodeExamples(positiveExamples)) }),
    FileSystem.write({ path: pathTo.all_positive_examples_genes, data: generateLinesFor(getGenes(positiveExamples)) }),
    FileSystem.write({ path: pathTo.all_negative_examples, data: generateLinesFor(encodeExamples(negativeExamples)) }),
    FileSystem.write({ path: pathTo.all_negative_examples_genes, data: generateLinesFor(getGenes(negativeExamples)) })
  ]);
} else {
  await Promise.all([
    FileSystem.write({ path: "positive_examples.json", data: generateLinesFor(encodeExamples(positiveExamples)) }),
    FileSystem.write({ path: "positive_examples_genes.json", data: generateLinesFor(getGenes(positiveExamples)) }),
    FileSystem.write({ path: "negative_examples.json", data: generateLinesFor(encodeExamples(negativeExamples)) }),
    FileSystem.write({ path: "negative_examples_genes.json", data: generateLinesFor(getGenes(negativeExamples)) })
  ]);
}
console.log("done writing data");
await FileSystem.write({
  data: JSON.stringify(
    {
      featureNames,
      parameters
    },
    (key, value) => value instanceof RegExp ? value.toString() : value,
    4
  ),
  path: pathTo.prev_parameters
});
