/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
const findInMountainArray = (target, mountainArr) => {
  const len = mountainArr.length();

  // Find the index of peak
  let peakIdx = 0;
  let l = 0;
  let r = len;
  while (l < r) {
    const m = ~~((l + r) / 2);
    if (mountainArr.get(m) < mountainArr.get(m + 1)) l = peakIdx = m + 1;
    else r = m;
  }

  // Find the target on the left side of peak
  l = 0;
  r = peakIdx - 1;
  while (l <= r) {
    const m = ~~((l + r) / 2);
    if (mountainArr.get(m) === target) return m;
    else if (mountainArr.get(m) < target) l = m + 1;
    else r = m - 1;
  }

  // Find the target on the right side of peak
  l = peakIdx;
  r = len - 1;
  while (l <= r) {
    const m = ~~((l + r) / 2);
    if (mountainArr.get(m) === target) return m;
    else if (mountainArr.get(m) > target) l = m + 1;
    else r = m - 1;
  }
  return -1;
};
