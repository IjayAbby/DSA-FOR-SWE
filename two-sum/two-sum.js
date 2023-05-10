/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash_table = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (hash_table[target - num] !== undefined) {
            return [hash_table[target - num], i]
        }
        hash_table[num] = i;
    }
    return [];
};
