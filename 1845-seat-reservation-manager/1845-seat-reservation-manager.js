/**
 * @param {number} n
 */
var SeatManager = function (n) {
  // start at 0 since we'll increment first before returning
  this.nextAvailable = 0;
  this.heap = [];
};

SeatManager.prototype.reserve = function () {
  if (this.heap.length) {
    return pop(this.heap);
  }
  this.nextAvailable += 1;
  return this.nextAvailable;
};

SeatManager.prototype.unreserve = function (seatNumber) {
  push(seatNumber, this.heap);
};


// min-heap
const push = (val, heap) => {
  heap.push(val);
  siftUp(heap);
}

const siftUp = (heap) => {
  let current = heap.length - 1;
  
  while (current > 0) {
    const parent = Math.ceil(current / 2) - 1;

    if (heap[current] < heap[parent]) {
      [heap[current], heap[parent]] = [heap[parent], heap[current]];
      current = parent;
    } else break;
  }
}

const pop = (heap) => {
  const last = heap.length - 1;
  [heap[0], heap[last]] = [heap[last], heap[0]];
  const seat = heap.pop();
  siftDown(heap);
  return seat;
}

const siftDown = (heap) => {
  let current = 0;

  while (true) {
    const left = current * 2 + 1;
    const right = left + 1;
    let next = current;

    if (heap[left] && heap[left] < heap[next]) next = left;
    if (heap[right] && heap[right] < heap[next]) next = right;

    if (next !== current) {
      [heap[current], heap[next]] = [heap[next], heap[current]];
      current = next;
    } else break;
  }
}

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */