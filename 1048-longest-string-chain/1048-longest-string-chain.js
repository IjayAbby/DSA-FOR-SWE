/**
 * @param {string[]} words
 * @return {number}
 */
function longestStrChain(words) {
    words.sort((a, b) => a.length - b.length);
    const dp = new Map();
    let maxLen = 0;
    for (const word of words) {
        let best = 0;
        for (let i = 0; i < word.length; i++) {
            const pred = word.slice(0, i) + word.slice(i + 1);
            best = Math.max(best, (dp.get(pred) || 0) + 1);
        }
        dp.set(word, best);
        maxLen = Math.max(maxLen, best)
    }
    return maxLen;
};