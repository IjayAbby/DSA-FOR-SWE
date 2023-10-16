/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];
    for (let i = 0; i < rowIndex; i++) {
        row.unshift(0);
        for (let j = 0; j<i+1; j++) {
            row[j] = row[j] + row[j+1];
        }
    }
    return row;
};