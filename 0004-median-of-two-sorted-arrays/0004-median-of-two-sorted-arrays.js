/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = [...nums1, ...nums2].sort((a,b) => a-b);
    if(mergedArr.length % 2 === 0) {
        let mid = Math.floor((0+mergedArr.length-1)/2);
        return ((mergedArr[mid] + mergedArr[mid+1])/2);
    } else {
        let mid = Math.floor((0+mergedArr.length-1)/2);
        return mergedArr[mid];
    }
}

// method - 2
// using merge function 

function merge(arr1, arr2) {
    let result = [];
    let i = 0,
        j = 0;
    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    while(i<arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    
    while(j<arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}

var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = merge(nums1, nums2);
    if(mergedArr.length % 2 === 0) {
        let mid = Math.floor((0+mergedArr.length-1)/2);
        return ((mergedArr[mid] + mergedArr[mid+1])/2);
    } else {
        let mid = Math.floor((0+mergedArr.length-1)/2);
        return mergedArr[mid];
    }
};