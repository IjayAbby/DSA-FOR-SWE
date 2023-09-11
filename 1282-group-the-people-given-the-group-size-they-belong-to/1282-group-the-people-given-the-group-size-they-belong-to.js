/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const result = [];
    const hash = {};
    
    for(let i = 0; i < groupSizes.length; i++) {
        const num = groupSizes[i]
        
        if(hash[num]) {
            hash[num].push(i)
        } else {
            hash[num] = [i]
        }
        
        if(hash[num].length === num) {
            result.push(hash[num])
            delete hash[num]
        }
    }
    return result
};