/**
 * @param {string} s
 * @return {boolean}
 s = "A man, a plan, a canal: Panama"
   =  amanaplanacanalpanama
   =  amanaplanacanalpanama

   race a car
   raceacar
   racaecar //false
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^0-9a-z]/g,'');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};