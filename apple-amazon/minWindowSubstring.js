/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let map = new Map()
    // generate frequency map
    for (let letter of t) {
        if (!map.has(letter)) map.set(letter, 1)
        else map.set(letter, map.get(letter) + 1)
    }
    
    let left = 0
    let right = 0
    let len = Infinity
    let count = map.size
    let minWindow = ''
    
    while(right < s.length) {
        let rLetter = s[right]
        // find substring
        if (map.has(rLetter)) {
            map.set(rLetter, map.get(rLetter) - 1)
            if (map.get(rLetter) == 0) count--
        }
        right++
        // substring found
        while(count == 0) {
            // set minWidow to substring
            if (right - left < len){
                len = right - left
                minWindow = s.slice(left, right)
            }
            // sliding window
            let lLetter = s[left]
            if (map.has(lLetter)){
                map.set(lLetter, map.get(lLetter) + 1)
                if (map.get(lLetter) > 0) count ++
            }
            left ++
        }
    }
    return minWindow
};