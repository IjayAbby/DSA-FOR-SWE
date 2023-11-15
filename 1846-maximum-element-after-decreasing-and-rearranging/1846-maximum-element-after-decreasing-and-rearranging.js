/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    const n = arr.length;
    
    arr.sort((a, b) => a - b);
    
    arr[0] = 1;
    
    for (let i = 1; i < n; i++) {
        const currNum = arr[i];
        const prevNum = arr[i - 1];
        
        if (currNum === prevNum) continue;
        arr[i] = prevNum + 1;
    }
    
    return arr[n - 1];
};