/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let a = 1
    let e = 1
    let i = 1
    let o = 1
    let u = 1
    let mod = 10**9 + 7
    while(--n) {
        let num1, num2, num3, num4, num5;
        num1 = (e + i + u) % mod
        num2 = (a + i) % mod
        num3 = (e + o) % mod
        num4 = i % mod
        num5 = (i + o) % mod
        a = num1
        e = num2
        i = num3
        o = num4
        u = num5
    }
    return (a + e + i + o + u) % mod
};