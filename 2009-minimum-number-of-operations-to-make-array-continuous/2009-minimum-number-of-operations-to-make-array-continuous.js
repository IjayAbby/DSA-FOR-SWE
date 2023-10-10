/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    nums.sort((a, b) => a - b);
    let maxLength = 1;
    let length = 1;
    let left = 0;
    
    for (let right = 1; right < nums.length; right++) {
        while(nums[right] === nums[right - 1]) {
            right++;
            if (right === nums.length) 
                return nums.length - maxLength;
        }
        length++;
        while(nums[right] - nums[left] > nums.length - 1) {
            left++;
            if (nums[left] !== nums[left - 1]) length--;
        }
        maxLength = Math.max(maxLength, length);
    }
    return nums.length - maxLength;
};