### How the solution works.
This function uses the Boyer-Moore Voting Algorithm to find the majority element in the input array nums. The algorithm works by maintaining a count of the current candidate for the majority element and updating it as it iterates over the elements in the input array. If the count reaches 0, the algorithm updates the candidate to the current element. At the end of the iteration, the candidate is guaranteed to be the majority element because it appears more than ⌊n / 2⌋ times in the input array.
​
### Time and Space complexity.
​
The time complexity of both the Boyer-Moore Voting Algorithm solution is O(n), where n is the length of the input array nums. This is because the solution iterate over the elements in the input array once.
​
In terms of space complexity, the Boyer-Moore Voting Algorithm solution has a space complexity of O(1) because it uses a constant amount of extra space to store the count and candidate variables.