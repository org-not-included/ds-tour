const searchRange = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    let firstOccurIdx = -1

    if (nums.length === 1 && nums[left] === target) return [left, left]

    // get the firstOccurIdx 
    while (left <= right) {
        let mid = parseInt((left + right)/2)
        if (nums[mid] === target) {
            if (nums[mid - 1] !== target) {
                firstOccurIdx = mid
                break
            }
            else right = mid - 1 
        }
        else if (nums[mid] < target) left = mid + 1
        else right = mid - 1
    }

    left = 0
    right = nums.length - 1
    let lastOccurIdx = -1

    // get the secondOccurIdx 
    while (left <= right) {
        let mid = parseInt((left + right)/2)
        if (nums[mid] === target) {
            if (nums[mid + 1] !== target) {
                lastOccurIdx = mid
                break
            }
            else left = mid + 1 
        }
        else if (nums[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return [firstOccurIdx, lastOccurIdx]
}   

// console.log(searchRange([5,7,7,8,8,10,11,11,12,13], 7))
// console.log(searchRange([], 0))
// console.log(searchRange([5,7,7,8,8,10], 6))
// console.log(searchRange([1, 0], 1))
console.log(searchRange([2, 7, 7, 7, 8, 9], 7))

