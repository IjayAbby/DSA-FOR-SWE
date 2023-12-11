/**
 * @param {number[]} arr
 * @return {number}
 */

function findSpecialInteger(arr) {
    const threshold = arr.length / 4;
    let currentCount = 1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
            if (currentCount > threshold) {
                return arr[i];
            }
        } else {
            currentCount = 1;
        }
    }
    return arr[0];
}