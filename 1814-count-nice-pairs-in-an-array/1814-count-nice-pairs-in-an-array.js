/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    function rev(num) {
        return parseInt(num.toString().split('').reverse().join(''), 10);
    }
    
    const MOD = 10**9 + 7;
    const freq = {};
    for (num of nums) {
        let diff = num - rev(num);
        if (!freq[diff]) {
            freq[diff] = 0;
        }
        freq[diff]++;
    }
    return Object.values(freq).reduce((sum, f) => (sum + f * (f - 1)/2) % MOD, 0)
};