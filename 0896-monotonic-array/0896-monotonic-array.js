/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let map = {
       up: 0,
       down: 0,
       same: 0
    }
    
    for (let i = 1; i < nums.length; i++) {
        const prev = nums[i - 1];
        const item = nums[i];
            if(item > prev) {
                map.up += 1;
            } else if (item < prev) {
                map.down += 1;
            } else if (item === prev) {
                map.same += 1;
            }
    }
    
    if (nums.length < 2) return true;
    
    if (map.up > 0 && map.down === 0) {
        return true;
    } else if (map.down > 0 && map.up === 0) {
        return true;
    } else if (map.same > 0 && map.down === 0 && map.up === 0) {
        return true;
    } else {
        return false;
    }
};