/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Step 1
const find_rotate_index = (nums, left, right) => {
    var pivot = -1
    //find the pivotIndex of the smallest element
    while(left <= right){
      // Prevent (left + right) overflow
      pivot = parseInt((left + right) / 2)
      if(nums[pivot] > nums[pivot + 1]) {
        return pivot + 1
      } else { 
          if (nums[pivot] < nums[left]) right = pivot - 1
          else left = pivot + 1
      }
    }
    return 0
}

//Step 3
const binary_search = (nums, left, right, target) => {
    /*
    Binary search
    */
    while (left <= right) {
      let pivot = parseInt((left + right) / 2);
      if (nums[pivot] == target)
        return pivot;
      else {
        if (target < nums[pivot])
          right = pivot - 1;
        else
          left = pivot + 1;
      }
    }
    return -1;
}

//Step 2
var search = function(nums, target) {

    if (nums.length === 1) return nums[0] === target ? 0 : -1
    
    const rotate_index = find_rotate_index(nums, 0, nums.length - 1)
    
    // if target is the smallest element
    if (nums[rotate_index] === target) return rotate_index 
    
    // if array is not rotated
    if (rotate_index === 0) return binary_search(nums, 0, nums.length - 1, target)
          
    // search in the right side
    if (target < nums[0]) return binary_search(nums, rotate_index, nums.length - 1, target);
    
    // search in the left side
    return binary_search(nums, 0, rotate_index, target);

};

let nums = [4,5,6,7,0,1,2], target = 0

console.log(search(nums, target))