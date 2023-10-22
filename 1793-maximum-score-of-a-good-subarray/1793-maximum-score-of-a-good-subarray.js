/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    // from the position `k` to expand the range
    let score = nums[k];
    let l=k, r=k;
    let min = nums[k];

    while (l > 0 && r < nums.length-1) {
        // select the bigger one as next step
        if (nums[l-1] > nums[r+1]) {
            min = Math.min(min, nums[--l]);
        } else {
            min = Math.min(min, nums[++r]);
        }
        score = Math.max(score, min * (r - l + 1));
    }

    // if there's remaining on the left, move and compare
    while (l > 0) {
        min = Math.min(min, nums[--l]);
        score = Math.max(score, min * (r - l + 1));
    }
    // if there's remaining on the right, move and compare
    while (r < nums.length-1) {
        min = Math.min(min, nums[++r]);
        score = Math.max(score, min * (r - l + 1));
    }

    return score;
};