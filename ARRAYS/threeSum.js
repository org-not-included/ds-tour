var threeSum = function(nums) {
    var solutions = []
    nums.sort((a, b) => a - b);
    for(var i = 0; i < nums.length - 2; i++) {
        if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            var lo = i + 1
            var hi = nums.length - 1
            var sum = - nums[i]
            while(lo < hi) {
                if(nums[lo] + nums[hi] === sum) {
                    solutions.push([nums[i],nums[lo],nums[hi]])
                    while (lo < hi && nums[lo] === nums[lo + 1]) lo++
                    while (lo < hi && nums[hi] == nums[hi-1]) hi--
                    lo++
                    hi--
                }else if (nums[lo] + nums[hi] > sum) hi--
                else lo++;
            }
        }
    }
    return solutions
}