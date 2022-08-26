function partition(arr, start, end, pivotIndex){
    // Taking the last element as the pivot
    const pivotValue = arr[pivotIndex];
    // let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        // pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 

    return pivotIndex;
};

function quickSelect(arr, start, end, kthlargest) {
    // Base case or terminating case
    if (start === end) 
      return array[start];
    
    // select a random pivot_index
    // let random_num = new Random();
    let pivot_index = start + Math.floor(Math.random() * (end - start));
    pivot_index = partition(arr, start, end, pivot_index);

    if (pivot_index === kthlargest) 
        return arr[kthlargest]
    
    if (kthlargest < pivot_index)
        quickSelect(arr, start, pivot_index - 1, kthlargest);
    else 
        quickSelect(arr, pivot_index + 1, end, kthlargest);

    
}

var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k) 
};

let array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
let k = 2
const kthlargest = findKthLargest(array, 0, array.length - 1, k)
console.log(kthlargest)

