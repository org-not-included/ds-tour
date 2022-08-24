
const subsets = (str) => {
    let arr = str.split('')
    let results = []
    results.push('')
    arr = arr.reduce((subsets, value) => {
        return subsets.concat(
         subsets.map(set => {
             results.push([...set, value].join(''))
             return [...set, value]
            })
        )},
        [[]]);
    return arr
}

console.log(subsets("abc"));

// console.log(subsets("abc"))