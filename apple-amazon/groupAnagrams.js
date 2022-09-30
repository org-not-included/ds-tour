const groupAnagrams = (strs) => {
    let map = new Map()

    for (var i=0 ; i<strs.length; i++){
        let strArr = [...strs[i]]
        strArr.sort()
        let str = JSON.stringify(strArr)
        if (!map.has(str))
            map.set(str, new Array())
        map.get(str).push(strs[i])
    }
    return new Array(map.values())
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))