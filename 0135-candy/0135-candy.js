/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;

    const leftToRight = new Array(n).fill(1);
    for(let i = 1; i < n; i += 1) {
        if(ratings[i - 1] < ratings[i]) {
            leftToRight[i] = leftToRight[i-1] + 1;
        }
    }

    const rightToLeft = new Array(n).fill(1);
    for(let i = n - 2; i >= 0; i -= 1) {
        if(ratings[i] > ratings[i + 1]) {
            rightToLeft[i] = rightToLeft[i+1] + 1;
        }
    }

    const candies = new Array(n).fill(0);
    for(let i = 0; i < n; i += 1) {
        candies[i] = Math.max(leftToRight[i], rightToLeft[i]);
    }

    return candies.reduce((acc, c) => acc + c, 0);
};