/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let output = 0;
    let mondays = 1;
    let deposit = 1;
    
    for (let i = 1; i <= n; i++) {
        output += deposit;
        deposit++;
        if (i % 7 === 0) {
            mondays++;
            deposit = mondays;
        }
    }
    return output;
};