function binarySearch(nums, target){
    if(nums === null || nums.length === 0) 
      return -1;
  
    var left = 0
    var right = nums.length - 1
    while(left <= right){
      // Prevent (left + right) overflow
      var mid = parseInt((left + right) / 2)
      if(nums[mid] == target){ return mid; }
      else if(nums[mid] < target) { left = mid + 1; }
      else { right = mid - 1; }
    }
  
    // End Condition: left > right
    return -1;
  }

  console.log(binarySearch([-1,0,3,5,9,12], 9))