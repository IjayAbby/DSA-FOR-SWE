/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while(i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if(i >= 0) {
            sum += parseInt(a[i--]);
        }
        if(j >= 0) {
            sum += parseInt(b[j--]);
        }
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    return result;
};