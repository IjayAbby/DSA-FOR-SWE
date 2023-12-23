/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfFour = function(n) {
//    return n > 0 && (n & (n - 1)) === 0 && (n & 0xAAAAAAAA) === 0;
// };

// var reverseList = function(head, prev = null) {
//     if(head === null) return prev;
//     var next = head.next;
//     head.next = prev;
//     return reverseList(next, head);
// }

function isPowerOfFour(n) {
    if (n <= 0) {
        return false;
    }
    while (n % 4 === 0) {
        n = n / 4;
    }
    return n === 1;
}
 