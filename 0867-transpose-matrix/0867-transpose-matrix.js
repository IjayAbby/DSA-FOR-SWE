/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const results = [];
    
    for(let i=0;i<matrix.length;i++){
        const item = matrix[i];
        for(let j=0;j<item.length;j++){
            if(!results[j]) results[j] = [];
            results[j].push(item[j]);
        }
    }
    
    return results;
};