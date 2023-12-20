/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);
    let sum = prices[0] + prices[1];
    return sum > money ? money : money - sum;
};