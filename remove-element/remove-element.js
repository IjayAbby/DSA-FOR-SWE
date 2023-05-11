/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     let count = 0;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === null) {
//             return count;
//         }
//         if(nums[i] === val) {
//             nums.splice(i, 1);
//             i--;
//         } else {
//             count++;
//         }
//     }
//     return count;
// };
var removeElement = function(nums, val) {
    let counter = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[counter] = nums[i];
            counter++;
        }
    }
    return counter;
};