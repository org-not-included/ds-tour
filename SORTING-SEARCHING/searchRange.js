const searchRange = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    let firstOccurIdx = -1

    if (nums.length === 1 && nums[left] === target) return [left, left]

    while (left <= right) {
        let mid = parseInt((left + right)/2)
        if (nums[mid] === target) {
            (nums[mid - 1] === target) ? firstOccurIdx = mid - 1 : firstOccurIdx = mid
            if (nums[firstOccurIdx + 1] === target) return [firstOccurIdx, firstOccurIdx + 1]
            else return [firstOccurIdx, firstOccurIdx]
        }
        else if (nums[mid] < target) left = mid + 1
        else right = mid - 1
    }

    return [-1, -1]
}   

console.log(searchRange([5,7,7,8,8,10,11,11,12,13], 7))
console.log(searchRange([], 0))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([1, 0], 1))

