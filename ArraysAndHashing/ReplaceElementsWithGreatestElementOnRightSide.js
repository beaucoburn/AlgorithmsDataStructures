
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = new Array(arr.length);
    let rightMax = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        result[i] = rightMax;
        rightMax = Math.max(rightMax, arr[i]);
    }
    return result
};
