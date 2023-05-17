/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    let magazineLetters = {};
    for (let i = 0; i < magazine.length; i++) {
        let letter = magazine[i];
        if (magazineLetters[letter]) {
            magazineLetters[letter]++;
        } else {
            magazineLetters[letter] = 1;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i];
        if (magazineLetters[letter]) {
            magazineLetters[letter]--;
        } else {
            return false;
        }
    }
    return true;
};