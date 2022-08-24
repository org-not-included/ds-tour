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

console.log(getTriangleRow(6))