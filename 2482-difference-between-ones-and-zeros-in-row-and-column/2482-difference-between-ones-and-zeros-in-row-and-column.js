/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    const rows = new Array(grid.length).fill(0)
    const cols = new Array(grid[0].length).fill(0)
    let diff = new Array(grid.length).fill(0).map(_ => new Array(grid[0].length).fill(0))
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            rows[i] += (grid[i][j] ? 1 : -1)
            cols[j] += (grid[i][j] ? 1 : -1)
        }
    }
    for (let i = 0; i < diff.length; i++) {
        for (let j = 0; j < diff[0].length; j++) {
            diff[i][j] = rows[i] + cols[j]
        }
    }
    return diff
};