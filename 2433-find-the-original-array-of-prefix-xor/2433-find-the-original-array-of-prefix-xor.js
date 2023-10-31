/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    const res = [pref[0]];

    for(let i=1; i<pref.length; i++) {
        res.push(pref[i] ^ pref[i - 1]);
    }

    return res;
};