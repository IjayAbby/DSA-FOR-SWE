/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let result = 0
    const modMe = (10 ** 9) + 7
    
    const reg = /([a-z])(\1)*/g
    s.replace(reg, function(subtext) {
        const sublen = subtext.length
        const addMe = sublen * (1 + sublen) / 2
        result += addMe
        result %= modMe
        
        return ''
    })
    
    
    return result
};