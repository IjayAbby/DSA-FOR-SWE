/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let temp=[];
    for(let i=0;i<points.length;i++){
        temp.push(points[i][0])
    }
    temp.sort(function(a,b){return a-b})
    let max=0
    for(let i=0;i<temp.length-1;i++){
        if(temp[i+1]-temp[i]>max){
         max=temp[i+1]-temp[i]
        }
    }
    return max
};