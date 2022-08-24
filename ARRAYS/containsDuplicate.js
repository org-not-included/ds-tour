/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b)

    for (var i = 0; i < nums.length ; i ++) {
        if (nums[i] === nums[i + 1])
            return true
    }
    return false
};

const answer = containsDuplicate([1,0,8,6,5,4,3,5])
console.log(answer)

var hashMapImplementation = function (nums) {
    let map = new Map()
    for (var i = 0 ; i < nums.length ; i++) {
        if(map.has(nums[i])) {
            console.log(map)
            return true
        }
        map.set(nums[i], i)
    }
}

const answer2 = hashMapImplementation([1,0,8,6,5,4,3,5])
console.log(answer2)