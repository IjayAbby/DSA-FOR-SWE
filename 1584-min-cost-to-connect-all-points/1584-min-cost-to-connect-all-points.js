/**
 * @param {number[][]} points
 * @return {number}
 */
class PseudoMinHeap {
    constructor() {
        this.nodes = [];
    }

    findIndex(node) {
        for(let i = 0; i < this.nodes.length; i += 1) {
            if(this.nodes[i].node === node) {
                return i;
            }
        }

        return -1;
    }

    add(node, weight) {
        const index = this.findIndex(node);
        if(index !== -1) {
            if(this.nodes[index].weight < weight) {
                return;
            }

            this.nodes.splice(index, 1);
        }

        let low = 0;
        let high = this.nodes.length - 1;
        while(low <= high) {
            const mid = low + Math.floor((high - low) / 2);
            const weightMid = this.nodes[mid].weight;
            if(weightMid < weight) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        this.nodes.splice(low, 0, { node, weight });
    }

    poll() {
        return this.nodes.pop();
    }
}

var minCostConnectPoints = function(points) {
    let result = 0;
    let n = points.length;

    const minHeap = new PseudoMinHeap();
    minHeap.add(0, 0);
    const visited = {};

    let nodesUsed = 0;
    while(nodesUsed < n) {
        const { weight: minWeight, node: minNode } = minHeap.poll();
        if(visited[minNode]) continue;

        nodesUsed += 1;
        visited[minNode] = true;
        result += minWeight;

        const [x1, y1] = points[minNode];
        for(let i = 0; i < n; i += 1) {
            if(visited[i]) continue;

            const [x2, y2] = points[i];
            const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            minHeap.add(i, distance);
        }
    }

    return result;
};