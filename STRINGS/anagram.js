var isAnagram = (s, t) => {
    if (s.length != t.length) {
        return false;
    }
    let str1 = [...s]
    let str2 = [...t]
    str1.sort();
    str2.sort();
    return (JSON.stringify(str1) === JSON.stringify(str2))
}

var isAnagram2 = (s, t) => {
    if (s.length != t.length) {
        return false;
    }
    let str1 = [...s]
    let str2 = [...t]
    let map1 = new Map()
    // let map2 = new Map()
    for (var i=0 ; i<str1.length ; i ++){
        map1.set(str1[i], map1.get(str1[i]) ? map1.get(str1[i]) + 1 : 1)
        map1.set(str2[i], map1.get(str2[i]) ? map1.get(str2[i]) - 1 : -1)
    }
    for (const key of map1.keys()) {
        if (map1.get(key) !== 0)
            return false
      }
    return true
}

// console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram2('anagram', 'nagarae'))