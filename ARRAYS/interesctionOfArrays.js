/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {

    let nums3 = []
    if (nums1.length >= nums2.length) {
        for(var i = 0; i<nums2.length; i++) {
            if(nums1.includes(nums2[i]))
                nums3.push(nums2[i])
        }
    } else {
        for(var i = 0; i<nums1.length; i++) {
            if(nums2.includes(nums1[i]))
                nums3.push(nums1[i])
        }
    }

    console.log('Array intersection is: ', nums3)
    
};

var intersect2 = function(nums1, nums2) {

    let nums3 = []
    let map = new Map()
    if (nums1.length >= nums2.length) {
        for(var i = 0; i<nums1.length; i++) {
            map.set(nums1[i], i)
        }
        for (var i = 0 ; i<nums2.length; i++) {
            if (map.has(nums2[i])){
                nums3.push(nums2[i])
                // map.delete(nums2[i])
            }
        }
    } else {
        for(var i = 0; i<nums2.length; i++) {
            map.set(nums2[i], i)
        }
        for (var i = 0 ; i<nums1.length; i++) {
            if (map.has(nums1[i])){
                nums3.push(nums1[i])
                map.delete(nums1[i])
            }
        }
    }

    console.log('Array intersection is: ', nums3)
    
};

intersect2([1,2,2,1], [2,2])