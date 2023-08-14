/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    let minHeap = new MinHeap();
    for (let num of nums) {
        minHeap.add(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    return minHeap.peek();
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    add(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    poll() {
        let max = this.heap[0];
        let end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    bubbleDown() {
        let index = 0;
        let length = this.heap.length;
        while (true) {
            let left = null;
            let right = null;
            let swap = null;
            if (index * 2 + 1 < length) {
                left = index * 2 + 1;
                if (this.heap[left] < this.heap[index]) swap = left;
            }
            if (index * 2 + 2 < length) {
                right = index * 2 + 2;
                if ((swap === null && this.heap[right] < this.heap[index]) || (swap !== null && this.heap[right] < this.heap[left])) swap = right;
            }
            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}
