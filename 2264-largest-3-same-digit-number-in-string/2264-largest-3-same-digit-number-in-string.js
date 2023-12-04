/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    
    let maxNum;
    let previousNum = num[0];
    let count = 1;
    
    
    for (let i = 1; i < num.length; i++) {
        
        let currentNum = num[i];
        
        if (currentNum == previousNum) {
            
            count++;
            
            if (count == 3)
                if (maxNum === undefined || currentNum > maxNum)
                    maxNum = currentNum;
                                        
        } else
            count = 1;

        previousNum = currentNum;
            
    }
    
    return new Array(3).fill(maxNum).join("");
};