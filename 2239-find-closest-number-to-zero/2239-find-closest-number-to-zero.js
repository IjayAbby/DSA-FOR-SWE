/**
 * @param {number[]} nums
 * @return {number}
 */
function findClosestNumber(nums) {
  let closest = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(closest) || (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest)) {
            closest = nums[i];
        }
    }
    return closest;
};