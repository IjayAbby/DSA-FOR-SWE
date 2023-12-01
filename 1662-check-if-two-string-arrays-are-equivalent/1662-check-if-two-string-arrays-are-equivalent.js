/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    //let result = word1.concat(word2);
    let firstArray = word1.join('')
    let secondArray = word2.join('')
    if (firstArray === secondArray) {
        return true;
    } else {
        return false;
    }
};