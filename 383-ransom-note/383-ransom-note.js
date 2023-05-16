/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if(!magazine.includes(char)) return false;
        magazine = magazine.replace(char, '');
    }
    return true;
};
    