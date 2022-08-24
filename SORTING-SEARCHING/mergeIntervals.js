const mergeIntervals = (intervals) => {
    // Array.sort(intervals, (a, b))
    intervals.sort((a, b) => a[0] - b[0])
    console.log(intervals)
    let result = []
    for (let interval of intervals) {
        let l = result.length
        if (result.length === 0 || result[l - 1][1] < interval[0])
            result.push(interval)
        else 
            result[l - 1][1] = Math.max(result[l - 1][1], interval[1])
        console.log(result)
    }
    return result
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))