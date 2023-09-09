/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 nums = [20,10,2,15,11,7], target = 9
               i   
                  j 
 
 
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++)
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
    }
};