class Solution {
    constructor(nums){
        this.nums = nums === undefined ? null : nums
        this.numsCopy = this.nums.slice(0)
    }
    shuffle(){
        for (var i=0 ; i<this.nums.length; i++){
            let randomIndex = Math.floor(Math.random(i+1))
            let tmp = this.nums[i]
            this.nums[i] = this.nums[randomIndex]
            this.nums[randomIndex] = tmp
        }
        return this.nums
    }

    reset(){
        this.nums = this.numsCopy
        return this.nums
    }
}

let solution = new Solution([1, 2, 3])
console.log(solution.shuffle())
console.log(solution.reset())