function getSubsets(s) {
    let allSubsets = [[]];
    for (let item of s) {
        let moreSubsets = [];
        for (let subset of allSubsets) {
            let newSubset = [];
            newSubset.push(...subset);
            newSubset.push(item);
            moreSubsets.push(newSubset)
        }
        allSubsets.push(...moreSubsets);
    }
    return allSubsets;
}

let s = [1,2,3];
let subsets = getSubsets(s);
console.log(subsets);