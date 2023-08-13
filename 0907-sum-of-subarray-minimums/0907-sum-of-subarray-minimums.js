/**
 * @param {number[]} arr
 * @return {number}
 */

var sumSubarrayMins = function(arr) {
    const MOD = 1000000007;
    let n = arr.length;
    let stack = [];
    let prev = new Array(n);
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        prev[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(i)
    }
    stack = [];
    let next = new Array(n)
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        next[i] = stack.length > 0 ? stack[stack.length - 1] : n;
        stack.push(i);
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += (i - prev[i]) * (next[i] - i) * arr[i];
        ans %= MOD;
    }
    return ans;
};