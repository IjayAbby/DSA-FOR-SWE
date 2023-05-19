/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
    let charCounts = {}
    for (let char of s) {
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }
    let result = 0;
    let oddCount = 0;
    for (let count of Object.values(charCounts)) {
        if(count % 2 === 0) {
            result += count;
        } else {
            result += count - 1;
            oddCount++;
        }
    }
    if(oddCount > 0) {
        result++;
    }
    return result;
}