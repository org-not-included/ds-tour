function dvd(name, year, director) {
    this.name = name
    this.year = year
    this.director = director
}

const jaws = new dvd("jaws", "96", "sid")
const znmd = new dvd("znmd", "2011", "zoya")
const kank = new dvd("kank", "2008", "karan")

let dvdBox = new Array(jaws, znmd, kank)

console.log('dvdBox', dvdBox)

dvdBox.pop()

console.log('dvdBox pop last element', dvdBox)

dvdBox.push(new dvd("godfather", "2004", "legend"))

console.log('dvdBox after inserting element', dvdBox)

delete dvdBox[1]

console.log('dvdBox after deleting first element', dvdBox)

let dvdBox2 = new Array(5)

dvdBox2[1] = jaws
dvdBox2[3] = znmd
dvdBox2[5] = kank

console.log('dvdBox 2', dvdBox2)


// Array search algorithms:

// 1) Linear search this is obvious. Traverse the array and equate to find the element and return it

// 2) Binary search:

const binarySearch = (arr, target) => {
    if (arr === null || arr.length === 0)
        return null
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = left + (right - left)/2
        if (arr[mid] === target)
            return arr[mid]
        if (arr[mid] < target)
            left = mid + 1
        else
            right = mid - 1
    }
    return null
}

console.log('Binary Search output', binarySearch([1,3,6,8,9], 8))

