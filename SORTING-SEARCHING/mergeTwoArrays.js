function mergeTwoArrays(nums1, m, nums2, n){
    for (var i = 0; i < n; i++) {
        nums1[i + m] = nums2[i];
    }
    nums1.sort()
    console.log(nums1)
}

function twoPointer(nums1, m, nums2, n) {
    if (m === 0 && n === 1){
       nums1[0] = nums2[0]
       console.log(nums1)
       return nums1
    } else if(m === 1 && n === 0) {
        console.log(nums1)
        return nums1
    }

    var p1 = 0;
    var p2 = 0;
    var numsCopy = new Array(m)

    for (var i = 0; i < m; i++) {
        numsCopy[i] = nums1[i];
    }

    for (var i=0 ; i<m+n; i++){
        if (numsCopy[p1] < nums2[p2]) {
            nums1[i] = numsCopy[p1]
            p1++
        } else {
            nums1[i] = nums2[p2]
            p2++
        }
    }
    console.log(nums1)
}

// mergeTwoArrays([1,2,3,0,0,0], 3, [2,5,6], 3)
twoPointer([0], 0, [1], 1)