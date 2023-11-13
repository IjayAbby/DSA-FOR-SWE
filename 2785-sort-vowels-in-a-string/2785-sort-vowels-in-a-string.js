/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    var idx = [], j=0, vovels = new Set(['A','E','I','O','U','a','e','i','o','u']);
    s = s.split("");
    for(var i=0; i<s.length; ++i) if(vovels.has(s[i])) idx.push(s[i]);
    sort(idx);
    for(var i=0; i<s.length; ++i) if(vovels.has(s[i])) s[i] = idx[j++];
    return s.join("");
};

// Counting Sort
var sort = function(arr) {
    var j=0; idx = new Uint32Array(57);
    for(var x of arr) ++idx[x.charCodeAt(0)-65];
    for(var i=0; i<57; ++i) while(idx[i]--) arr[j++] = String.fromCharCode(i+65);
};