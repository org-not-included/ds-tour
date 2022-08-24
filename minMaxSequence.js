var numSubseq = function(nums, target) {
    let left = 0 
    let m = 10**9 + 7
    console.log('m is', m)
    let right = nums.length - 1
    let res = 0
    while (left <= right) {
        if (nums[left] + nums[right] > target) 
            right = right - 1
        else {
            num_inside = right - left
            res = (res + Math.pow(2, num_inside, m)) % m
            console.log('res', res)
            left += 1
        }
    }
    console.log(res)
};

nums = [3,3,6,8], target = 10

numSubseq([3,3,6,8], 10)