/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    
    const set = new Set();
    
    for (const num of nums) {
        set.add(parseInt(num, 2));
    }

    for (let num = 0; num <= 1 << n; ++num) {
        if (!set.has(num)) return toBin(num, n);
    }
  
    
    function toBin(num, len) {
        const stack = [];
        
        for (let i = 0; i < len; ++i) {
            const rem = num % 2;
            stack.push(rem);
            num >>= 1;
        }
       
        let res = "";
        
        while (stack.length > 0) {
            res += stack.pop();
        }
        
        return res;
    }
};