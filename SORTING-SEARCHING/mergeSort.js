const merge = (left, right) => {
    let arr = []

    while(left.length && right.length){
        if (left[0] < right[0])
            arr.push(left.shift())
        else
            arr.push(right.shift())
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}


const mergeSort = (array) => {
    const half = (array.length/2)

    if (array.length < 2){
        return array
    }

    const left = array.splice(0, half)

    return merge(mergeSort(left), mergeSort(array))
}

let array = [4, 8, 7, 2, 11, 1, 3];

console.log(mergeSort(array));