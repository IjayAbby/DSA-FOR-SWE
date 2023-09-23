/**
 * @param {string[]} words
 * @return {number}
 */

//top-down dynamic programming approach with memoization

function longestStrChain(words) {
    const memo = {};
    const wordSet = new Set(words);
    let longest = 0;
    
    function dfs(word) {
        // If the result is in the memo, return it
        if (memo[word] !== undefined) {
            return memo[word];
        }
        
        let maxLen = 1;
        
        // Try removing each letter from the word and do a dfs
        for (let i = 0; i < word.length; i++) {
            const nextWord = word.slice(0, i) + word.slice(i + 1);
            if (wordSet.has(nextWord)) {
                maxLen = Math.max(maxLen, 1 + dfs(nextWord));
            }
        }
        
        // Store the result in the memo before returning
        memo[word] = maxLen;
        return maxLen;
    }
    
    // Do a dfs for each word
    for (const word of words) {
        longest = Math.max(longest, dfs(word));
    }
    
    return longest;
}


// bottom-up dynamic programming approach.


// function longestStrChain(words) {
//     words.sort((a, b) => a.length - b.length);
//     const dp = new Map();
//     let maxLen = 0;
//     for (const word of words) {
//         let best = 0;
//         for (let i = 0; i < word.length; i++) {
//             const pred = word.slice(0, i) + word.slice(i + 1);
//             best = Math.max(best, (dp.get(pred) || 0) + 1);
//         }
//         dp.set(word, best);
//         maxLen = Math.max(maxLen, best)
//     }
//     return maxLen;
// };