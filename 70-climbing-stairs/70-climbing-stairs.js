/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    let a = 1, b = 1;
    for (let i = 0; i < n; i++) {
    let temp = a;
        a = b;
        b = temp + b;
    }
    return a;
}