/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
    let n = cost.length;
    let dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for(let i = 0; i < n; i++){
      for(let j =n; j >= 1; j--){
        dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
      }
    }

    return dp[n];
};