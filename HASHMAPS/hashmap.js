let firstMap = new Map()

let secondMap = new Map([
    [1, "first"],
    [2, "second"],
    [3, "third"]
])

console.log('Second hashmap ', secondMap)

console.log('Hashmap size ', secondMap.size)

console.log('Hasmap get', secondMap.get(1))

console.log('Hashmap set')
secondMap.set(4, "fourth")
console.log('Second hashmap ', secondMap)

console.log('Hasmap has ', secondMap.has(4))

secondMap.delete(4) 
console.log('Second hashmap delete', secondMap)

secondMap.clear()
console.log('Second hashmap clear', secondMap)

