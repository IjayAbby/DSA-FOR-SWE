/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let len = nums.length;
    
    let i = 0;
    for (let j = 0; j < len; j++) {
		// if already is even, skip exchange
        if (nums[i] % 2 == 0) {
            i++;
		// if is odd & next j is even, exchange
        } else if (nums[j] % 2 == 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    
    return nums;
};