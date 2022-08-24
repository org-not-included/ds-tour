// const str = "abc's test#s";
// console.log(str.replace(/[^a-zA-Z ]/g, ""));

helper = (low, high, str) => {
    if (low >= high) {
        return 
    }
    var tmp = str[low]
    str[low] = str[high]
    str[high] = tmp
    helper(low + 1, high - 1, str)
}

reverseString = (str) => {
    helper(0, str.length - 1, str)
    return str
}

var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z]/g, "")
    console.log(str)
    let revStr = reverseString(str.toLowerCase())
    if (str.toLowerCase() === revStr)
        return true
    return false
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"))