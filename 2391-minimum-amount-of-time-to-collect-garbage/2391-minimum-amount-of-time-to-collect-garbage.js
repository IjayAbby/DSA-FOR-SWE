/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
function garbageCollection(garbage, travel) {
  const visitIndex = {
    M: 0,
    P: 0,
    G: 0,
  }
  const prefixSumTravel = Array(travel.length)
  let cost = garbage[0].length
  prefixSumTravel[0] = travel[0]
  for (let i = 1; i < garbage.length; i++) {
    prefixSumTravel[i] = prefixSumTravel[i - 1] + travel[i]
    cost += garbage[i].length
    for (let char of garbage[i]) visitIndex[char] = i
  }
  for (let char in visitIndex) {
    if (visitIndex[char] > 0) {
      cost += prefixSumTravel[visitIndex[char] - 1]
    }
  }
  return cost
}