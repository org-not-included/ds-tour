function mergeTwoArrays(nums1, m, nums2, n){
    for (var i = 0; i < n; i++) {
        nums1[i + m] = nums2[i];
    }
    nums1.sort()
    console.log(nums1)
}

//Space complexity O(m), Time complexity O(m + n)
function twoPointer(nums1, m, nums2, n) {
    // Make a copy of the first m elements of nums1.
    let nums1_copy = new Array(m)
    for (var i=0; i<m; i++) nums1_copy[i] = nums1[i]
    
    // Read pointers for nums1Copy and nums2 respectively.
    let p1=0
    let p2=0
    
    // Compare elements from nums1Copy and nums2 and write the smallest to nums1.
    for (var i=0; i<m+n; i++){
        if (p2 >= n || (p1 < m && nums1_copy[p1] < nums2[p2]))
            nums1[i] = nums1_copy[p1++]
        else 
            nums1[i] = nums2[p2++]
    }
    
    return nums1
}

//Space complexity O(1), Time complexity O(m + n)
function twoPointer2(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1 

    for (var p = m + n - 1; p >= 0; p--) {
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2])
            nums1[p] = nums1[p1--]
        else
            nums1[p] = nums2[p2--]
    }

    return nums1

}



// mergeTwoArrays([1,2,3,0,0,0], 3, [2,5,6], 3)
// twoPointer([0], 0, [1], 1)
console.log(twoPointer([2,5,6,0,0,0], 3, [1,2,3], 3))
