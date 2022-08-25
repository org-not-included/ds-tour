function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

function helper(arr, start, end, kthsmallest) {
    // Base case or terminating case
    if (start > end) return -1
    if (start === end) return arr[start]
    
    // Returns pivotIndex
    let index = partition(arr, start, end);

    if (index === kthsmallest) return arr[index]
    else if (index > kthsmallest) return helper(arr, start, index - 1, kthsmallest)
    else return helper(arr, index + 1, end, kthsmallest)
}

function quickSelect(arr, k) {
    return helper(arr, 0, arr.length - 1, arr.length - k)
}


// base case test
// const kthlargest = quickSelect([1],1)

let array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
const k = 2
const kthlargest = quickSelect(array, k)

console.log('Kthlargest is: ', kthlargest)