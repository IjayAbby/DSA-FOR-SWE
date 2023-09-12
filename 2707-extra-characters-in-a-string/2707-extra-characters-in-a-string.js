/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
function minExtraChar(s, dictionary) {
    const dp = Array(s.length + 1).fill(Infinity);
    dp[0] = 0;
    
    for(let i = 1; i <= s.length; i++) {
        dp[i] = dp[i - 1] + 1;
        
        for(const word of dictionary) {
            if(i >= word.length && s.slice(i - word.length, i) === word) {
                dp[i] = Math.min(dp[i], dp[i - word.length])
            } 
        }
    }
    return dp[s.length];
};