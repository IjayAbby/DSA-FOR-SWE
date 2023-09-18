/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
class MaxHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        // Insert the new value at the end of the heap
        this.heap.push(value);

        // Bubble up to maintain heap property
        this.bubbleUp(this.size() - 1);
    }

    pop() {
        // Replace the root with the last value in the heap
        const root = this.peek();
        const last = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = last;

            // Bubble down to maintain heap property
            this.bubbleDown(0);
        }

        return root;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[index], this.heap[parentIndex]) <= 0) {
                break;
            }

            // Swap the current node with its parent
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;

            let largestIndex = index;

            if (leftIndex < this.size() && this.compare(this.heap[leftIndex], this.heap[largestIndex]) > 0) {
                largestIndex = leftIndex;
            }

            if (rightIndex < this.size() && this.compare(this.heap[rightIndex], this.heap[largestIndex]) > 0) {
                largestIndex = rightIndex;
            }

            if (largestIndex === index) {
                break;
            }

            // Swap the current node with the largest child
            [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];
            index = largestIndex;
        }
    }
}

function kWeakestRows(mat, k) {
    let maxHeap = new MaxHeap((a, b) => {
        if (a.soldiers !== b.soldiers) {
            return a.soldiers - b.soldiers;
        } else {
            return a.index - b.index;
        }
    });

    for (let i = 0; i < mat.length; i++) {
        let soldiers = binarySearch(mat[i]);

        if (maxHeap.size() < k || soldiers < maxHeap.peek().soldiers) {
            if (maxHeap.size() === k) {
                maxHeap.pop();
            }

            maxHeap.push({index: i, soldiers: soldiers});
        }
    }

    let result = [];
    while (!maxHeap.isEmpty()) {
        result.push(maxHeap.pop().index);
    }
    
    result.reverse();

    return result;
}

function binarySearch(row) {
    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (row[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}
