/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    const length = arr.length;
    let pointer1 = 0;
    let pointer2 = 1;
    let count = 0;
    
    while (count < k) {
        if (arr[pointer1 % length] >= arr[pointer2 % length]) {
            if (count > length) return arr[pointer1 % length]
            count++
            pointer2++
        } else {
            [pointer1, pointer2] = [pointer2, pointer2 + 1]
            count = 1;
        }
    }
    return arr[pointer1 % length]
};