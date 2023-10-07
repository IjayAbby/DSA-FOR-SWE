/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var numOfArrays = function(n, m, k) {
    var dp = new Array(n+1);
    var mod = 1000000007;
    for(var i=0;i<=n;i++){
        dp[i] = new Array(m+1);
        for(var j=0;j<=m;j++){
            dp[i][j] = new Array(k+1).fill(0);
        }
    }
    dp[0][0][0] = 1;
    for(var i = 1; i <= n; i++){
            for(var j = 1; j <= m; j++){
                for(var x = 1; x <= k; x++){
                    for(var y = 0; y < j; y++){
                        dp[i][j][x] = (dp[i][j][x] % mod + dp[i - 1][y][x - 1] % mod) % mod;
                    }
                    dp[i][j][x] = (dp[i][j][x] % mod + (dp[i - 1][j][x] *(j))% mod) % mod;
                }
            }
        }
    var res = 0
    for(var i = 1; i <= m; i++){
        res = (dp[n][i][k] % mod + res % mod) % mod;
    }
    return res
};