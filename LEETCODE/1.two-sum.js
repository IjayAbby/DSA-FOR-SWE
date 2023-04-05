/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for(let i = 0; i<nums.length; i++){
        if(hash[nums[i]]>=0){
            return [hash[nums[i]], i]
        }
        hash[target-nums[i]] = i
    }
};
// @lc code=end

