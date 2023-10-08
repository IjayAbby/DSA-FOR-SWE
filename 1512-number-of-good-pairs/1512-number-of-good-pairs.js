/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let freq = {};
    for (let num of nums) {
        if (num in freq) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }
    
    let result = 0;
    for (let count of Object.values(freq)) {
        result += count * (count - 1) / 2;
    }
    return result;
};