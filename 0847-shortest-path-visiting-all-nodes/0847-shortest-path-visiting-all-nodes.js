/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    let len = graph.length;
    let queue = []
    let visited_all = (1<<len)-1;
    let visited = new Set();
    for (let i=0;i<len;i++) {
        let mask = 1<<i; // initialising the bit mask as we can start from any source
        visited.add(`${mask}#${i}`); 
        queue.push([mask, i]);
    }
    let count = 0;
    while(queue.length) {
        let size = queue.length;
        while(size--) {
            let [ele, idx] = queue.shift();
            if (ele===visited_all) // if visited all the nodes 
                return count;
            for (let node of graph[idx]) {
                let newMask = ele|1<<node; // to set the next neighbour bit
                if (!visited.has(`${newMask}#${node}`)) {
                    visited.add(`${newMask}#${node}`);
                    queue.push([newMask, node])
                }
            }
        }
        count++;
    }
};