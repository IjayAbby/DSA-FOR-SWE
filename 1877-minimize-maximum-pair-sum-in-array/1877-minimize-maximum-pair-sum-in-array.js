/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    // sort
    nums.sort((a, b) => a-b);
    let res = -Infinity;
    while(nums.length){
        res= Math.max(nums.pop() + nums.shift(), res);
    }
    return res;
};