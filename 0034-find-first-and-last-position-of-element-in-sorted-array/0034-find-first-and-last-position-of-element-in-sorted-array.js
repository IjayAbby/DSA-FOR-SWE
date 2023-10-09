/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    let result = [-1, -1];

    // First binary search to find the first occurrence
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // If the target is not found, return [-1, -1]
    if (left >= nums.length || nums[left] != target) {
        return result;
    }

    result[0] = left;

    // Second binary search to find the last occurrence
    right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    result[1] = right;

    return result;
}
