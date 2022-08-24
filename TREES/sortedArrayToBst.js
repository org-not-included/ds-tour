function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

class Solution {
    constructor(nums){
        this.nums = nums===undefined? null : nums
    }

    helper = (left, right) => {
        if (left > right)
            return null
    
        let p = parseInt((left + right)/2)
        const root = new Node(this.nums[p])
        root.left = this.helper(left, p - 1)
        root.right = this.helper(p + 1, right)
        return root
    
    }
    
    sortedArrayToBst = (nums) => {
        this.nums = nums
        return this.helper(0, nums.length - 1)
    }
}

let s = new Solution()

console.log(s.sortedArrayToBst([-10,-3,0,5,9]))