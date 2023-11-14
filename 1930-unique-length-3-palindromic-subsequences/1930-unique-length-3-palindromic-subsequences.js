/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
  const firstLastIdx = {};

  let total = 0;

  // first
  for (let i=0; i<s.length; i++) {
    if (!firstLastIdx[s[i]]) firstLastIdx[s[i]] = [i];
  }
  
  for (let j=s.length-1; j>= 0; j--) {
    // find 'last' idx and at least 2 steps from 'first' idx
    if (firstLastIdx[s[j]]?.length === 1 && firstLastIdx[s[j]][0] + 1 < j) {
      firstLastIdx[s[j]].push(j);
    }
  }

  for (let char in firstLastIdx) {
    // deal with all possibles
    if (firstLastIdx[char].length === 2) {
      const [start, end] = firstLastIdx[char];
      const counted = {};

      for (let i=start+1; i<end; i++) {
        if (!counted[s[i]]) {
          counted[s[i]] = true;
          total += 1;
        }
      }
    }
  }

  return total;
};