/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n =>
    n.toString(2).match(/1/g)?.length ?? 0;