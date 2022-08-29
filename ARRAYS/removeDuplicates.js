/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let i = 0
    for (var j=1; j<nums.length; j++){
        if(nums[j] != nums[i]){
            i++
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