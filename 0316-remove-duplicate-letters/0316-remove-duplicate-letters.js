/**
 * @param {string} s
 * @return {string}
 */
// Monotonically increasing stack approach
function removeDuplicateLetters(s) {
    const freq = [];

    // count the frequency of each char in string
    for (let i = 0; i < s.length; i++) {
        const charCode = s[i].charCodeAt(0);
        if (!freq[charCode]) freq[charCode] = 0;

        freq[charCode]++;
    }

    const visited = []; // keep track of chars already added in final result
    const monoStack = []; // holds the final result

    for (let i = 0; i < s.length; i++) {
        const charCode = s[i].charCodeAt(0);
        const char = s[i].charAt(0);
        let len = monoStack.length - 1;

        freq[charCode]--;
        if (visited[charCode]) continue;

        while (monoStack.length > 0 && monoStack[len] > char && freq[monoStack[len].charCodeAt(0)] > 0) {
            let topChar = monoStack[len];
            let topCharCode = topChar.charCodeAt(0);
            monoStack.pop();
            visited[topCharCode] = false;
            len = monoStack.length - 1;
        }

        monoStack.push(char);
        visited[charCode] = true;
    }
    return monoStack.join('');
}



function main() {
    const s = "bcabc";
    // const s = "bbcaac";
    // const s = "cbacdcbc";
    // const s = "cbacdcbc";
    console.log(removeDuplicateLetters(s));
    // console.log(freqCounter(s));
}

main();