/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    if(paths.length === 1) return paths[0][1]
    let graph = {}
    for(let path of paths){
        const [a,b] = path
        graph[a] = b
    }
    return graph[Object.keys(graph).filter((ele)=>!(graph[ele] in graph))]
};