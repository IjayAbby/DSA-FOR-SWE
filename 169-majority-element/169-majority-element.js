/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Finding majority candidate
    var count = 0;
    candidate = -1;
    for(var index = 0; index < nums.length; index++) {
        if(count == 0) {
            candidate = nums[index]
            count = 1;
        } else {
            if(nums[index] == candidate)
                count++;
                else 
                    count --;
        }
    }
    // Checking if majority candidate occurs more than
    // n/2 times
        count = 0;
        for(var index = 0; index < nums.length; index++) {
            if(nums[index] == candidate)
                count++;
        }
        if(count > (nums.length / 2))
            return candidate;
            return -1;
};