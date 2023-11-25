/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    const result = [];
    
    let started = 0;
    
    for(let i=1;  i<nums.length; i++){
        started += Math.abs(nums[i]-nums[0]);
    }
    
    result[0] = started;
    
    for(let i=1;  i<nums.length; i++){
        const diff = nums[i]-nums[i-1];
        
        result[i] = result[i-1] - (nums.length-(2*i)) * diff;
    }
    
    return result;
};