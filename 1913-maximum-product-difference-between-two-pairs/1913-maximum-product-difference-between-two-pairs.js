/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = (nums) => {
    let maxArr = [];
    let minArr = [];
    let sortedArr = nums.sort((a, b) => a - b);
    for (let i = 0; i < 2; i++) {
        maxArr.push(sortedArr.pop());
        minArr.push(sortedArr.shift());
    }
    return (maxArr[0] * maxArr[1]) - (minArr[0] * minArr[1]);
};