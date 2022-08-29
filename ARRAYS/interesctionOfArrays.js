/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {

    let nums3 = []
    let map = new Map()
    if (nums1.length > nums2.length) {
        for(var i = 0; i<nums1.length; i++) {
            if (map.has(nums1[i])) map.set(nums1[i], map.get(nums1[i]) + 1)
            else map.set(nums1[i], 1)
        }
        var k = 0
        for (var i = 0 ; i<nums2.length; i++) {
            if (map.has(nums2[i]) && map.get(nums2[i]) > 0){
                nums3[k] = nums2[i]
                k++
                map.set(nums2[i], map.get(nums2[i]) - 1)
            }
        }
    } else {
        for(var i = 0; i<nums2.length; i++) {
            if (map.has(nums2[i])) map.set(nums2[i], map.get(nums2[i]) + 1)
            else map.set(nums2[i], 1)
        }
        console.log(map)
        var k = 0
        for (var i = 0 ; i<nums1.length; i++) {
            if (map.has(nums1[i]) && map.get(nums1[i]) > 0){
                nums3[k] = nums1[i]
                k++
                map.set(nums1[i], map.get(nums1[i]) - 1)
            }
        }
    }

    return nums3
    
};

console.log(intersect([1,2], [2,1]))