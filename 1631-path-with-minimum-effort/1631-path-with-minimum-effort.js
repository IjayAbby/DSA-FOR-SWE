/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(matrix) {
    const rowC = matrix.length, colC = matrix[0].length
    if (rowC === 1 && colC === 1)   return 0
    
    
    function Node(i, j) {
        this.val = matrix[i][j]
        this.effort = Infinity
        
        // neighNode => abs
        this.neighs = new Map()
    }
    Node.table = new Array(rowC)
    for (const i of Node.table.keys())
        Node.table[i] = new Array(colC)
        
        
    for (const [i, row] of matrix.entries()) {
        for (const [j, val] of row.entries()) {
            Node.table[i][j] = new Node(i, j)
        }
    }
    
    for (const [i, row] of matrix.entries()) {
        for (const [j, val] of row.entries()) {
            let node = Node.table[i][j], rightNode, downNode
            
            if (j + 1 < colC) {
                rightNode = Node.table[i][j + 1]
                const rightDiff = Math.abs(node.val - rightNode.val)
                node.neighs.set(rightNode, rightDiff)
                rightNode.neighs.set(node, rightDiff)
            }
            
            if (i + 1 < rowC) {
                downNode = Node.table[i + 1][j]
                const downDiff = Math.abs(node.val - downNode.val)
                node.neighs.set(downNode, downDiff)
                downNode.neighs.set(node, downDiff)
            }
        }
    }

    
    const startNode = Node.table[0][0], endNode = Node.table[-1 + rowC][-1 + colC]
    startNode.effort = 0
    const set = new Set([startNode])
    
    while (true) {
        let bestEffort = Infinity, bestNeigh = null
        
        for (const node of set.values()) {
            const nodeEffort = node.effort
            for (const [neigh, diff] of node.neighs.entries()) {
                const effort = Math.max(diff, nodeEffort)
                if (effort < bestEffort) {
                    bestEffort = effort
                    bestNeigh = neigh
                }
            }
        }
        if (bestNeigh === endNode)  return bestEffort

        for (const existing of bestNeigh.neighs.keys()) {
            if (set.has(existing)) {
                existing.neighs.delete(bestNeigh)
                bestNeigh.neighs.delete(existing)
                
                if (!existing.neighs.size)
                    set.delete(existing)
            }
        }
        
        bestNeigh.effort = bestEffort
        if (bestNeigh.neighs.size)
            set.add(bestNeigh)
    }
};