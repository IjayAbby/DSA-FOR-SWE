/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    let map = Array.from({ length: n }, () => []);
    let max = 0
    for (let i = 0; i < roads.length; i++){
        map[roads[i][0]].push(roads[i][1])
        map[roads[i][1]].push(roads[i][0])
    }

    for (let i = 0; i < n - 1; i++){
        for (let j = i + 1;  j < n; j++){
            let sum = map[i].includes(j) ? map[i].length + map[j].length - 1 : map[i].length + map[j].length
            if (sum > max) max = sum
        }
    }
    return max
};