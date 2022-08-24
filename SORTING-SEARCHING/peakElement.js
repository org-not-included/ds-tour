function peakElement(nums){
    if(nums === null || nums.length === 0) 
      return -1;
  
    var left = 0
    var right = nums.length - 1
    while(left < right){
      // Prevent (left + right) overflow
      var mid = parseInt((left + right) / 2)
      if(nums[mid] < nums[mid + 1]) left = mid + 1
      else right = mid 
    }
  
    // End Condition: left > right
    return left;
  }

  console.log(peakElement([1,2,3,1]))