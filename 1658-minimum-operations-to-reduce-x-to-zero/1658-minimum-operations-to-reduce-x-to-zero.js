/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    const target = sum - x;
    
    if(target < 0) return -1;
    if(!target) return nums.length;
    
    let start = 0, runningSum = 0, maxLen = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        while(runningSum > target) runningSum -= nums[start++];
        if(runningSum === target) maxLen = Math.max(maxLen, i-start+1);
    }
    return maxLen === -Infinity ? -1 : nums.length-maxLen;
};

