/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const res = [];
    let len = 0;
    
    for(let i = 1; i <= n && len < target.length; i++) {
        res.push('Push');
        if(target[len] === i) len++;
        else res.push('Pop');
    }
    return res;
}; 