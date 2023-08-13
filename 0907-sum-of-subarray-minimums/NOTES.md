The time complexity of the solution to the “Sum of Subarray Minimums” problem using a monotonic stack is O(n), where n is the length of the input array arr. This is because each element is pushed onto and popped from the stack exactly once, resulting in a linear time complexity.
​
The space complexity of this solution is also O(n), where n is the length of the input array arr. This is because we need to use two additional arrays prev and next of length n to keep track of the previous and next smaller elements for each element in arr. We also need to use a stack data structure, which can have a maximum size of n in the worst case.
​
In summary, the time and space complexity of the solution to the “Sum of Subarray Minimums” problem using a monotonic stack is O(n).