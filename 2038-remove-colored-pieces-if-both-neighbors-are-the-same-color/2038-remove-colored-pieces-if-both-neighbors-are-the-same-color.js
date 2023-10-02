/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    const n = colors.length
    if(n <= 2) return false
    let countOfRemovableA = 0
    let countOfRemovableB = 0
    for(let i = 1; i < n - 1; i++) {
        if(colors[i] === 'A' && colors[i - 1] === 'A' && colors[i + 1] === 'A') {
            countOfRemovableA++
        } else if(colors[i] === 'B' && colors[i - 1] === 'B' && colors[i + 1] === 'B') {
            countOfRemovableB++
        }
    }
    return countOfRemovableA > countOfRemovableB 
};