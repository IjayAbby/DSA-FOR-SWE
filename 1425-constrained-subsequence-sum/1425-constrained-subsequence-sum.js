/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (A, k) {
  const n = A.length;
  const dp = Array(n); // Select idx i, the res
  dp[n - 1] = A[n - 1];
  let res = dp[n - 1];
  const win = []; // Store the idx
  for (let i = n - 2; i >= 0; i--) {
    while (win.length > 0 && dp[win[win.length - 1]] <= dp[i + 1]) win.pop();
    win.push(i + 1);
    if (win[0] === i + k + 1) win.shift();
    dp[i] = A[i] + (dp[win[0]] > 0 ? dp[win[0]] : 0); // Doesn't have to pick

    // dp[i] = A[i] + Math.max(
    //   dp[i + 1],
    //   dp[i + 2],
    //   ...
    //   dp[i + k]
    // );

    res = Math.max(res, dp[i]);
  }
  return res;
};