/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
    const str = s + s;
    return str.substring(1, str.length - 1).includes(s)
};