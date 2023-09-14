/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    tickets.sort((t1, t2) => t1[1].localeCompare(t2[1]));
    const adjList = new Map();
    for (let ticket of tickets) {
        const [src, dest] = ticket;
        if (!adjList.has(src)) adjList.set(src, []);
        adjList.get(src).push(dest)
    }
    
    const res = ['JFK'];
    function dfs(src) {
        if (res.length === tickets.length + 1) return true;
        if (!adjList.has(src)) return false;
        
        const destinations = [...adjList.get(src)];
        for (let i = 0; i < destinations.length; i++) {
            const dest = destinations[i];
            adjList.get(src).splice(i, 1)
            res.push(dest)
            if(dfs(dest)) return true;
            
            //backtrack
            adjList.get(src).splice(i, 0, dest);
            res.pop();
        }
        return false;
    }
    dfs("JFK");
    return res;
};