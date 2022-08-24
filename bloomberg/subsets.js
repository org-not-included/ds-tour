
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
    console.log(results)
    return arr
}

console.log(subsets("abc"));
