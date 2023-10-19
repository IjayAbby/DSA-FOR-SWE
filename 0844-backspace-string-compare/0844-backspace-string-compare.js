/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   let i = s.length - 1, j = t.length - 1;
    
    while (i >= 0 || j >= 0) {
        i = nextChar(s, i);
        j = nextChar(t, j);
        
        if (i < 0 && j < 0) return true;
        if (i < 0 || j < 0 || s[i] !== t[j])
            return false;
        i--; 
        j--;
    }
    return true;
};

function nextChar(str, index) {
    let backspaceCount = 0;
    
    while (index >= 0) {
        if (str[index] === '#') {
            backspaceCount++;
        } else if (backspaceCount > 0) {
            backspaceCount--;
        } else {
            break;
        }
        index--;
    }
    return index;
}