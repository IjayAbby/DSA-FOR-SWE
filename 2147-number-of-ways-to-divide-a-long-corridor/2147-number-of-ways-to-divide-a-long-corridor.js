/**
 * @param {string} corridor
 * @return {number}
 */
const M = 1e9 + 7
const shouldCount = (countSeat) => countSeat > 1 && countSeat % 2 === 0
var numberOfWays = function(corridor) {
    let countSeat = 0;
    let currentPlant = 0;
    let count = 1;
    for(let i = 0; i < corridor.length; i++) {
        if(corridor[i] == 'S') {
            countSeat++
            if(shouldCount(countSeat)) {
                count = (count * (currentPlant + 1)) % M // 1 is the case without plant such as | Seat Seat |
                currentPlant = 0
            }
        } else if (shouldCount(countSeat)) {
            currentPlant++
        }
    }
    return shouldCount(countSeat) ? count : 0
};