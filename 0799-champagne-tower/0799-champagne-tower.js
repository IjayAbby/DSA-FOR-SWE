/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    const total_rows = 101;
    const total_columns = 101;
    const matrix = [];

    for (let i = 0; i < total_rows; i++) {
    const row = new Array(total_columns).fill(0);
    matrix.push(row);
    }
    matrix[0][0] = poured
    for (let i =0; i<100;i++){
        for(let j=0;j<=i;j++){
            if(matrix[i][j] >= 1){
                matrix[i+1][j] += ((matrix[i][j] - 1) / 2.0)
                matrix[i+1][j+1] += ((matrix[i][j] - 1) / 2.0)
                matrix[i][j] = 1
            }
        }
    }
    return matrix[query_row][query_glass]
};