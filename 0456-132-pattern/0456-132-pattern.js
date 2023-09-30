/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = []
    let min = Infinity
    let eachMin = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < min)
            min = nums[i]
        
        eachMin[i] = min
    }
    
    for(let i = nums.length - 1; i >= 1; i--) {
        if(!stack.length || nums[i] <= nums[stack[stack.length - 1]])
            stack.push(i)
        else {
            let top = stack[stack.length - 1]
            while(stack.length && nums[i] >= nums[top] && eachMin[i] >= nums[top]){
                stack.pop()
                top = stack[stack.length - 1]
            }
            
            if(stack.length && nums[i] > nums[top] && eachMin[i] < nums[top])
                return true
            
            stack.push(i)
        }
    }
    
    return false
};