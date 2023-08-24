/**
 * @param {string} s
 * @return {string}
 */
function reorganizeString(s) {
    let n = s.length;
    let count = {};
    for (let char of s) {
        if (char in count) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }
    let maxCount = Math.max(...Object.values(count));

    if (maxCount > Math.floor((n + 1) / 2)) {
        return '';
    }

    let maxLetter = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
    let ans;
    let i;

    if (maxCount === Math.floor((n + 1) / 2)) {
        ans = Array.from({length: n}, (_, i) => i % 2 === 0 ? maxLetter : '');
        delete count[maxLetter];
        i = 1;
    } else {
        ans = Array.from({length: n}, () => '');
        i = 0;
    }

    for (let c in count) {
        for (let _ = 0; _ < count[c]; _++) {
            ans[i] = c;
            i += 2;
            if (i >= n) {
                i = 1;
            }
        }
    }

    return ans.join('');
}

