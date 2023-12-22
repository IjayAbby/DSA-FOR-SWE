/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    const chars = [...s];
    oneCount = chars.reduce((acc, curr) => acc+(curr === '1'), 0);

    chars.pop();
    return chars.reduce((acc, curr) => {
        if(curr === '1') acc.ones++;
        else acc.zeros++;

        acc.ans = Math.max(acc.ans, oneCount - acc.ones + acc.zeros);

        return acc;
    }, {
        ones: 0,
        zeros: 0,
        ans: 0
    }).ans;
};