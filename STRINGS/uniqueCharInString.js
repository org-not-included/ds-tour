/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let map = new Map()
    for (var i=0; i<s.length; i++){
        if(map.has(s.charAt(i)))
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
        else
            map.set(s.charAt(i), 1)
    }
    console.log(map)
    for (var i=0; i<s.length; i++){
        if(map.get(s.charAt(i)) === 1){
            return i
        }
    }
    return -1
}
    // for (var i=0; i<s.length; i++)

    const answer = firstUniqChar("loveleetcode")
    const answer2 = firstUniqChar("aabb")
    console.log(answer)
    console.log(answer2)