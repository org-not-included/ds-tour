function getTriangleRow(row) {
    let map = new Map()
    map.set(0, [1])
    map.set(1, [1, 1])
    for (var i=2; i <= row; i++) {
        map.set(i, new Array(i + 1))
        map.get(i)[0] = 1
        map.get(i)[map.get(i).length - 1] = 1
        for (var j=1; j<=map.get(i).length - 2 ; j++){
            map.get(i)[j] = map.get(i - 1)[j-1] + map.get(i - 1)[j]
        }
    }
    console.log('TRIANGLE ROW IS:')
    console.log(map)
    return map.get(row)
}

var generate = function(numRows) {
    if (numRows === 1) return [[1]]
    let array = new Array(numRows)
    array[0] = new Array(1)
    array[1] = new Array(2)
    array[0] = [1]
    array[1] = [1, 1]
    for (var i=2; i<numRows; i++) {
        array[i] = new Array(i+1)
        array[i][0] = 1
        array[i][i] = 1
        for (var j = 1; j<i; j++) 
            array[i][j] = array[i-1][j-1] + array[i-1][j]
    }
    return array
};

// console.log(getTriangleRow(6))

console.log(generate(6))