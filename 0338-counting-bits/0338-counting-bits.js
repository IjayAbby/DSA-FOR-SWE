/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
    let result = Array(n + 1).fill(0);
    let offset = 1;
    for (let i = 1; i < n + 1; i++) {
        if (offset * 2 === i) {
            offset = i;
        }
        result[i] = 1 + result[i - offset];
    }
    return result;
};