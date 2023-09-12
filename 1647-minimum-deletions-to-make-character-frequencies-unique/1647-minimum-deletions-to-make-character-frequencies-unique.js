/**
 * @param {string} s
 * @return {number}
 */
function minDeletions(s) {
    const n = s.length;
    const count = new Array(26).fill(0);
    
    for (const char of s) {
        const index = char.charCodeAt(0) - 97;
        count[index]++;
    }
    
    const set = new Set();
    let removed = 0;
    
    for(let i = 0; i < 26; i++) {
        let freq = count[i]
        
        if (freq == 0) continue;
        
        let current = freq;
        
        while(current > 0 && set.has(current)) {
            current--;
        }
        set.add(current)
        removed += (freq - current)
    }
    return removed;
};