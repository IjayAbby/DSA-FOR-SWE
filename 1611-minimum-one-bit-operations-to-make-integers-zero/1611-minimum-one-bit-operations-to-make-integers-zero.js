/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function (n = 0) {
    var res = 0, flag = false;
    for (var mask = 1 << 29; mask > 0; mask >>= 1) {
        if (n & mask) {
            flag = !flag;
            flag ? (res += mask) : (res -= mask);
        }
    }
    return (res << 1) - flag;
};