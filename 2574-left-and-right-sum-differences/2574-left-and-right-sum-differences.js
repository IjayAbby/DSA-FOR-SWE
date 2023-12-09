/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let result = [];
    let right = 0;
    let left = 0;
     
    for (var i = 0; i < nums.length; i++) {
        right += nums[i]
    }
    
    for (var i = 0; i < nums.length; i++) {
        right -= nums[i];
        result.push(Math.abs(left - right));
        left += nums[i];
    }
    return result;
};