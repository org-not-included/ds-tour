helper = (low, high, str) => {
    if (low >= high) {
        return 
    }
    var tmp = str[low]
    str[low] = str[high]
    str[high] = tmp
    helper(low + 1, high - 1, str)
}

reverseString2 = (str) => {
    helper(0, str.length - 1, str)
    return str
}

var str = reverseString2(["h", "e", "l", "l", "o"])

console.log(str)