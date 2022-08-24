// two pass hashtable
twoSum = (nums, target) => {
    let map = new Map()
    for (var i=0 ; i<nums.length ; i++) {
        map.set(nums[i], i)
    }
    console.log(map)
    for (var i=0 ; i<nums.length ; i++) {
        let k = target - nums[i]
        if (map.has(k) && map.get(k) != i)
            var secondIndex = map.get(k)
            console.log('k', k)
            console.log(map.get(k))
            return { i, secondIndex }
    }
    return null
}

// one pass hash table
onePass = (nums, target) => {
    let map = new Map()
    for (var i=0 ; i<nums.length ; i++) {
        let k = target - nums[i]
        if (map.has(k)) {
            var secondIndex = map.get(k)
            return { i, secondIndex }
        }
        map.set(nums[i], i)
    }
    return null
}

var answer = onePass([2,7,11,15], 9)

console.log(answer)