/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let k = Math.ceil(minutesToTest / minutesToDie); // max number of steps the can be taken
    let total = 1;
    let res = 0;
    while (total < buckets) {
    total = total * (k + 1); // each pig represents this increase in possible combos
    res++;
    }

    return res;
};