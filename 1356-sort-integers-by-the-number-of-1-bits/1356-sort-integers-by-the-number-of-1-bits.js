/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort(customSort);
};

function customSort(a, b) {
  if (countOneBits(a) !== countOneBits(b)) {
    return countOneBits(a) - countOneBits(b);
  }
  return a - b;
}

function countOneBits(num) {
  let ans = 0;
  while (num > 0) {
    if ((num & 1) === 1) ans++;
    num >>= 1;
  }
  return ans;
}
