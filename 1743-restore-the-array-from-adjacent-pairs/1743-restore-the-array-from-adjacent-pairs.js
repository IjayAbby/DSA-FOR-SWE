/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
function restoreArray (adjacentPairs) {
  const graph = new Map(),
        start = new Set(),
        nums = new Set()
  for (let [u, v] of adjacentPairs) {
    if (start.has(u)) start.delete(u)
    else start.add(u)
    if (start.has(v)) start.delete(v)
    else start.add(v)
    if (!graph.has(u)) graph.set(u, new Set())
    if (!graph.has(v)) graph.set(v, new Set())
    graph.get(u).add(v)
    graph.get(v).add(u)
  }
  traverse(start.values().next().value)
  return [...nums]
  function traverse (u) {
    if (nums.has(u)) return
    nums.add(u)
    for (let v of graph.get(u)) {
      traverse(v)
    }
  }
}