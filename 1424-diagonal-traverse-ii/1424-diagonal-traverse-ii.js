/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const queue = [];
    const res = [];
    
    queue.push([0, 0, nums[0][0]])
    
    while (queue.length > 0) {
        const [currRow, currCol, currVal] = queue.shift();
       
        res.push(currVal);
        
        let bottomRow = currRow + 1;
        let rightCol = currCol + 1;
       
        if (nums[bottomRow] != null && nums[bottomRow][currCol] != null && nums[bottomRow][currCol] != -1) {
            const nextVal = nums[bottomRow][currCol];
            nums[bottomRow][currCol] = -1;
            
            queue.push([bottomRow, currCol, nextVal]);     
        }
        
        if (nums[currRow][rightCol] != null && nums[currRow][rightCol] != -1) {
            const nextVal = nums[currRow][rightCol];
            nums[currRow][rightCol] = -1;
            
            queue.push([currRow, rightCol, nextVal]);
        }
    }
    
    return res;
};