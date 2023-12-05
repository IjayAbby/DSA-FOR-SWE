/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let min=Number.MAX_SAFE_INTEGER, max=Number.MIN_SAFE_INTEGER,diff,ans=1;
let keepSearching=true;

    for(let i=0;i<nums.length && keepSearching===true ;i++){
        min=Number.MAX_SAFE_INTEGER;
        max=Number.MIN_SAFE_INTEGER;
        min = Math.min(min,nums[i]);
        max = Math.max(max,nums[i]);
        for(let j=i+1;j<nums.length;j++){
            if(nums.length-i+1<=ans){//We already have an answer which is greater than the maximum possible answer with the sub array starting from i
                keepSearching=false;
                break;
            }
            min = Math.min(min,nums[j]);
            max = Math.max(max,nums[j]);
            diff = max-min;
            if(diff<=limit){
                if(j-i+1>ans){
                    ans=j-i+1;
                }
            }else{
                break;
            }
        }
    }
    return ans;
};