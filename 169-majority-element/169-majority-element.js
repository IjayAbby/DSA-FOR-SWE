/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    const occuranceOfElement = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(occuranceOfElement.has(nums[i])) {
            let occurance = occuranceOfElement.get(nums[i]);
            occuranceOfElement.set(nums[i], occurance+1);
        } else {
            occuranceOfElement.set(nums[i], 1);
        }
    }

    for(let [key,value] of occuranceOfElement) {
        if(value > nums.length / 2) return key;
    }
    
    
    
    
    // // Finding majority candidate
    // var count = 0;
    // candidate = -1;
    // for(var index = 0; index < nums.length; index++) {
    //     if(count == 0) {
    //         candidate = nums[index]
    //         count = 1;
    //     } else {
    //         if(nums[index] == candidate)
    //             count++;
    //             else 
    //                 count --;
    //     }
    // }
    // // Checking if majority candidate occurs more than
    // // n/2 times
    //     count = 0;
    //     for(var index = 0; index < nums.length; index++) {
    //         if(nums[index] == candidate)
    //             count++;
    //     }
    //     if(count > (nums.length / 2))
    //         return candidate;
    //         return -1;
};