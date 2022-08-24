const longestSubstring = (str) => {
    let map = new Map()
    let subStr = ''
    let subStrLength = 0
    for (var i=0; i<str.length; i++){
        if (map.has(str.charAt(i))) {
            subStr = ''
            map.set(str.charAt(i), map.get(str.charAt(i)) + 1)
        }
        subStr = subStr + str.charAt(i)
        subStrLength = Math.max(subStrLength, subStr.length)
        map.set(str.charAt(i), 1)
    }
    return subStrLength
}

console.log(longestSubstring('abcedbchijklmnoppe'))