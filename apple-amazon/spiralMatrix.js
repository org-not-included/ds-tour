/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let result = []
    let rows = matrix.length
    let columns = matrix[0].length
    let left = 0
    let right = columns - 1
    let down = rows - 1
    let up = 0
    while (result.length < (rows * columns)) {
        //left to right
        for (var col = left; col<=right; col++) result.push(matrix[up][col])
        // down
        for (var row = up + 1; row<=down; row++) result.push(matrix[row][right])
        // make sure we are on different columns
        if (up != down) {
            for (var col = right - 1; col >= left; col--) result.push(matrix[down][col])
        }
        
        // make sure we are on different columns
        if (left != right) {
            for (var row = down - 1; row>up; row--) result.push(matrix[row][left])
        }
        right --
        down --
        up++
        left++
    }
       return result
       
   };