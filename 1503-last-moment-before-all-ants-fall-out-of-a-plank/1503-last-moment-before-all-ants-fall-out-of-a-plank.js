/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    let max = 0
    for(let ele of left){
        max = Math.max(ele,max)
    }
    for(let ele of right){
        max = Math.max(n-ele,max)
    }
    return max
};