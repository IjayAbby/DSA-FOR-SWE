/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    var result = 1, modulo = 1000000007;
    for(var i = 1; i<=n; i++) {
        result *= i;
        result %= modulo;
        result *= (2 * i - 1);
        result %= modulo;
    }
    return result % modulo;
};