/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let i = 0
    for (var j=1; j<nums.length; j++){
        if(nums[j] != nums[i]){
            console.log('nums[j]', nums[j])
            console.log('nums[i]', nums[i])
            console.log('i before', i)
            i++
            console.log('i after', i)
            nums[i] = nums[j]
        }
    }
    console.log(nums)
    return i + 1
};

// const duplicates = removeDuplicates([1,1,2])

// const duplicates2 = removeDuplicates([0,0,1,1,1,2,2,3,3,4])

const duplicates3 = removeDuplicates([1,1,2,3,4])

console.log(duplicates3)