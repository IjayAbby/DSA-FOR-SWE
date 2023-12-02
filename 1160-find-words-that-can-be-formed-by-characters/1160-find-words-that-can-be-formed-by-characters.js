/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) { 
    let count = 0
    const makeHash = (word) => {
        let hash = {}
        for (let i = 0; i < word.length; i++){
            hash[word[i]] ? hash[word[i]]++ : hash[word[i]] = 1
        }
        return hash
    }
    let hash = makeHash(chars)    
    for (let i = 0; i < words.length; i++){
        let bool = true
        let temp = makeHash(words[i])
        for(let key in temp){
            if (!hash[key] || hash[key] < temp[key]){
                bool = false
            }
        }
        bool && (count += words[i].length)
    }
    return count
};