/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let nums2 = new Array(nums.length)
    for(var i=0 ; i<nums.length ; i++){
        nums2[(i+k) % nums.length] = nums[i]
    }
    for(var i=0 ; i<nums.length ; i++){
        nums[i] = nums2[i]
    }
    console.log('Rotatated array is', nums)
};

rotate([1,2,3,4,5,6,7], 3)
