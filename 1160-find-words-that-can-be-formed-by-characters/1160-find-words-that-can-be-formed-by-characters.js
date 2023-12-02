/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    var res = 0;
    words.forEach(word=>{
        var isMatch = true;
        var tempChars = chars;
        for(let i = 0;i<word.length; i++) {
            let l = word[i];
            var ii = tempChars.indexOf(l);
            if (ii>-1) {
                // match 
                tempChars = tempChars.substring(-1,ii) + tempChars.substring(ii+1,);
            }else {
                // not match
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            res+= word.length;
        }
    })
    return res
};