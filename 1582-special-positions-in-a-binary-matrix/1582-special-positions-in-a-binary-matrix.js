/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let sp = 0;
    
    const m = mat.length;
    const n = mat[0].length;
    
    const scanRow = row => mat[row].reduce((c, e) => e ? ++c : c, 0) === 1;
    
    const scanColumn = col => {
        let count = 0;
        
        for (let i = 0; i < m; i++)
            mat[i][col] && ++count;
        
        return count === 1;
    };
    
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            mat[i][j] === 1 && scanRow(i) && scanColumn(j) && ++sp 
    
    return sp;
};