
function calender() {
    var rows = 7
    var cols = 7
    var days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    var array = new Array(rows)
    
    // Initialize 7x7 2d array
    for (var i=0; i<array.length; i++) array[i] = new Array(7)

    // Set first row with days
    for (var i=0; i<cols; i++) array[0][i] = days[i]
    
    // Set dates
    let k = 1
    for (var m=1; m<rows; m++){
        for(var j=0; j<cols; j++){
            array[m][j] = k
            k++
        }
    }

    return array
}

console.log(calender())
