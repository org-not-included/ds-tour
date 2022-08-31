var moveZeroes = function(nums) {
    let lastFoundZero = 0
    for (var i=0 ; i<nums.length; i++){
        if (nums[i] != 0)
            nums[lastFoundZero++] = nums[i]
    }
    for (var i=lastFoundZero; i<nums.length; i++)
        nums[i] = 0
    
    return nums
};



console.log([1,2,3,1])