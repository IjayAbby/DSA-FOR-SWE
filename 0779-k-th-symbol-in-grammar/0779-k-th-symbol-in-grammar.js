/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function kthGrammar(n, k) {
    if (n === 1) {
        return 0;
    } else {
        var parent = kthGrammar(n - 1, Math.ceil(k / 2));
        var is_k_odd = (k % 2) === 1;
        if (parent === 0) {
            return is_k_odd ? 0 : 1;
        } else {
            return is_k_odd ? 1 : 0;
        }
    }
}
