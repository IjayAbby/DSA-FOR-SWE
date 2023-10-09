/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    function findFirst(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (nums[mid] < target) left = mid + 1;
            else right = mid;
        }
        return nums[left] === target ? left : -1;
    }

    function findLast(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2 + 1);
            if (nums[mid] > target) right = mid - 1;
            else left = mid;
        }
        return nums[left] === target ? left : -1;
    }

    if (!nums.length) return [-1, -1];
    let first = findFirst(nums, target), last = findLast(nums, target);
    return [first, last];
}
