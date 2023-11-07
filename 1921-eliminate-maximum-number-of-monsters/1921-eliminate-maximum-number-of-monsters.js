/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    var n = dist.length, cur = 0;

    dist.forEach((x,i) => dist[i] = Math.ceil(x / speed[i]));
    speed.fill(0);
    dist.forEach(x => x<n && ++speed[x]);

    for (var i=1; i<n; ++i) {
        cur += speed[i];
        if (cur > i) return i;
    }

    return n;
};