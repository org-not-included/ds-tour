// Heap replacement in javascript
function minHeapify (array, index) {
    const temp = array[index]
    let childIndex
  
    for (; index * 2 < array.length; index = childIndex) {
      childIndex = index * 2
  
      // Choose the smaller of the two (left, right) children
      if (childIndex != array.length - 1 && array[childIndex] > array[childIndex + 1]) {
        childIndex ++
      }
  
      if (temp > array[childIndex]) {
        array[index] = array[childIndex]
      } else {
        break
      }
    }
  
    array[index] = temp
  }

  const kthsmallest = (array, k) => {
      // index starts at 1 due to the array-heap implementation
    for (let i = 1; i < k; i++) {
    minHeapify(array, i) // O( log(n) ) runtime
    popMin(array) // O( 1 ) runtime
    }
    return input[1] // index starts at 1 due to the array-heap implementation 
  }