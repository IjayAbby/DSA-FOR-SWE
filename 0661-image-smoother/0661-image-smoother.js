/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    // path to 8 surrouding cells
    let row = [-1, -1, -1, 0, 0, 1, 1, 1];
    let col = [-1, 0, 1, -1, 1, -1, 0, 1];
    let res = [], counter, total;
    
    for(let i = 0; i < M.length; i++){
        res[i] = [];
        for(let j = 0; j < M[0].length;j++){
            counter = 1, total = M[i][j];
            for(let k = 0; k < row.length;k++){
                let newRow = i + row[k];
                let newCol = j + col[k];
                
                if(newRow >= 0 && newCol >= 0 && newRow < M.length && newCol < M[0].length){
                    counter++;
                    total += M[newRow][newCol];
                }
            }
            res[i][j] = Math.floor(total/counter);
        } 
    }
    return res;
};