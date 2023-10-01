/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let word = s.split(" ");
    let reverseWord = word .map(element => element.split("").reverse().join(""));
    return reverseWord.join(" ");
};