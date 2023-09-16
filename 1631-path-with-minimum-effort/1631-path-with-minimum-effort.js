/**
 * @param {number[][]} heights
 * @return {number}
 */

function minimumEffortPath(heights) {
    const m = heights.length, n = heights[0].length;
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const dist = Array.from({length: m}, () => new Array(n).fill(Infinity));
    dist[0][0] = 0;
    const heap = [[0, 0, 0]]; // [distance, row, col]
    
    while (heap.length) {
        const [d, r, c] = heap.pop();
        if (r === m - 1 && c === n - 1) return d;
        for (let [dr, dc] of dir) {
            const nr = r + dr, nc = c + dc;
            if (nr < 0 || nc < 0 || nr === m || nc === n) continue;
            const nd = Math.max(d, Math.abs(heights[nr][nc] - heights[r][c]));
            if (nd < dist[nr][nc]) {
                dist[nr][nc] = nd;
                heap.push([nd, nr, nc]);
                heap.sort((a, b) => b[0] - a[0]); // sort in descending order
            }
        }
    }
}
