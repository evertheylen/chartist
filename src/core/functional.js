/**
 * Helps to simplify functional style code
 *
 * @memberof Chartist.Core
 * @param {*} n This exact value will be returned by the noop function
 * @return {*} The same value that was provided to the n parameter
 */
export const noop = (n) => n;

/**
 * Functional style helper to produce array with given length initialized with undefined values
 *
 * @memberof Chartist.Core
 * @param length
 * @return {Array}
 */
export const times = (length) => Array.from({length});

/**
 * Sum helper to be used in reduce functions
 *
 * @memberof Chartist.Core
 * @param previous
 * @param current
 * @return {*}
 */
export const sum = (previous, current) => previous + (current ? current : 0);

/**
 * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
 *
 * For example:
 * @example
 * ```javascript
 * const data = [[1, 2], [3], []];
 * serialMap(data, cb);
 *
 * // where cb will be called 2 times
 * // 1. call arguments: (1, 3, undefined)
 * // 2. call arguments: (2, undefined, undefined)
 * ```
 *
 * @memberof Chartist.Core
 * @param arr
 * @param cb
 * @return {Array}
 */
export const serialMap = (arr, cb) =>
  times(Math.max(...arr.map((e) => e.length)))
    .map((e, index) => cb(...arr.map((e) => e[index])));
