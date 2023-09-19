/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let tortoise = nums[0];
    let hare = nums[0];
    
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]]
    } while (tortoise != hare)
        tortoise = nums[0]
    while (tortoise != hare) {
        tortoise = nums[tortoise]
        hare = nums[hare]
    }
    return hare;
};