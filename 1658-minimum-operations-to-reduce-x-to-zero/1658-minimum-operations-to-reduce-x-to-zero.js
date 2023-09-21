/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let target = nums.reduce((a,b) => a + b) - x;
    let left = 0;
    let sum = 0;
    let max = 0;
    if (target === 0) return nums.length;
        
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while(sum > target) {
            sum -= nums[left];
            left++;
        }
        if(sum === target) {
            max = Math.max(max, i - left + 1);
        }
    }
    return max === 0 ? -1 : nums.length - max;
};

