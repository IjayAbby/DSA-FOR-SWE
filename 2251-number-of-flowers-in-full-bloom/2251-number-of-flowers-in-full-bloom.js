/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, persons) {
  // flowers with earlier end times are given higher priority
  const heap = new MinPriorityQueue({
    compare: (a, b) => a[1] - b[1]
  });
  
  // sort flowers by start time
  flowers.sort((a, b) => a[0] - b[0]);
  
  // sort persons by arrival time
  const sortedPersons = persons.slice().sort((a, b) => a - b);
  
  const map = {};
  
  let i = 0;
  
  for (const person of sortedPersons) {
    // if a flower has bloomed prior to or at the same time the
    // person has arrived we push [start, end] to the heap
    while (i < flowers.length && flowers[i][0] <= person) {
      heap.enqueue(flowers[i]);
      ++i;      
    }

    // remove from the heap any flower that has finished blooming
    // before the person arrived
    while (heap.size() && heap.front()[1] < person) {
      heap.dequeue();
    }
    
    // heap.size() represents the number of flowers in bloom when the
    // person arrived
    map[person] = heap.size();
  }
  
  return persons.map(person => map[person]);
};