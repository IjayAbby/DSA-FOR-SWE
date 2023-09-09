/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 nums = [20,10,2,15,11,7], target = 9
                       i  
    object {key: value } 
           d =  {20 :  0, 10: 1, 2: 2,15: 3, 11: 4} 
            return [i, d[target-nums[i]]]
 */
var twoSum = function(nums, target) {
    let hashmap = {};
    for(let i = 0; i < nums.length; i++) {
        let key = target - nums[i];
        if(key in hashmap) {
            return [i, hashmap[key]]
        } else {
            hashmap[nums[i]] = i;
        }
    }
};