/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let map = new Map()
    for (var i=0 ; i<nums.length; i++){
        if(map.has(nums[i]))
            map.delete(nums[i])
        else
            map.set(nums[i], i)
    }
    return map.keys().next().value
};

const number = singleNumber([2, 2, 1, 3, 3, 5,8,5,8])
console.log(number)