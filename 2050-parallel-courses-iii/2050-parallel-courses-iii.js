/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    // array to calculate max time to complete prerequisite courses
    let pre = [...time]
    let inorder = {};
    let graph ={};
    
    for(let i=1;i<=n;i++){
        inorder[i]=0;
        graph[i]=[];
    }
    
    for(let [s,d] of relations){
        inorder[d]++;
        graph[s].push(d);
    }
    let q=[];
    for(let node in inorder){
        // push the courses which don't have prerequiste
        if(inorder[node]===0) {
            q.push(+node);
        }
    }
    while(q.length){
        let size = q.length;

        for(let i=0;i<size;i++){
            let cur=q.shift();
            for(let next of graph[cur]){
                // calclating max prerequisite
                pre[next-1]= Math.max(pre[next-1],pre[cur-1]+time[next-1]);
                inorder[next]--;
                if(inorder[next]===0) q.push(next);
            }
        }
    }
    
    return Math.max(...pre);
    
};