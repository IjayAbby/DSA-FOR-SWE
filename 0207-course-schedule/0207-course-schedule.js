/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
    let graph = new Array(numCourses).fill(0).map(() => new Array());
    let visited = new Array(numCourses).fill(0);
    //create graph
    for (let i = 0; i < prerequisites.length; i++) {
        let pair = prerequisites[i];
        let x = pair[0];
        let y = pair[1];
        graph[x].push(y);
    }
    //visit each node
    function dfs(i) {
        if (visited[i] === -1) { //cycle detected
            return false;
        }
        if (visited[i] === 1) {
            return true; //finished and beeb added to stack
        }
        visited[i] = -1; //mark as visited
        for (let j = 0; j < graph[i].length; j++) {
            if (!dfs(graph[i][j])) {
                return false;
            }
        }
        visited[i] = 1; //makr as finished
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
    
};