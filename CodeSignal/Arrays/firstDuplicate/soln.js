function solution(a) {
    let exists = new Set();
    for(let num of a) {
      if(exists.has(num)) {
          return num;
      } 
      exists.add(num);
    }
    return -1;
}