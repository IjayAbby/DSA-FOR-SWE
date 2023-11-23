/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const checkArithmeticSubarrays = (nums, l, r) => {
    const answer = [];
    for(let i = 0; i < l.length; i++)
        answer.push(check(nums.slice(l[i],r[i]+1)));
    function check(arr){
        arr.sort((a,b) => a - b);
        const diff = arr[1] - arr[0];
        for(let i = 2; i < arr.length; i++)
            if(diff != arr[i] - arr[i-1]) return false;
        return true;
    }
    return answer;
};