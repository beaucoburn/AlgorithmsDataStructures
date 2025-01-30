/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = nums.concat(nums)
    return ans
};

var getConcatenation(nums) {
    let ans = [];
    for (let i = 0; i < 2; i++) {
        for (let num of nums) {
            ans.push(num);
        }
    }
    return ans;
}
