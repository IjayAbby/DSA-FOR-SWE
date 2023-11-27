/**
 * @param {number} n
 * @return {number}
 */
function knightDialer(N) {
  let moves = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];
  let dp = new Array(10).fill(1);
  while (N > 1) {
    let next = new Array(10).fill(0);
    for (let i = 0; i < dp.length; i++) {
      for (let neighbor of moves[i]) {
        next[i] += dp[neighbor];
        next[i] %= (Math.pow(10, 9) + 7);
      }
    }
    N--;
    dp = next;
  }
  return dp.reduce((acc, val) => acc + val, 0) % (Math.pow(10, 9) + 7);
};