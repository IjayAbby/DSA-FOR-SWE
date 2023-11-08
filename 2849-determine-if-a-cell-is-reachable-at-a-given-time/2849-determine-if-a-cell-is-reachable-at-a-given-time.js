/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
function isReachableAtTime(sx, sy, fx, fy, t) {
    if (sx === fx && sy === fy && t === 1) return false;

    const width = Math.abs(fx - sx);
    const height = Math.abs(fy - sy);

    if (width > height) return width <= t;
    return height <= t;
};