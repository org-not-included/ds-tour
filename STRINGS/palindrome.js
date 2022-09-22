// const str = "abc's test#s";
// console.log(str.replace(/[^a-zA-Z ]/g, ""));

var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, "")
    let revStr = str.split("").reverse().join("");
    if (str.toLowerCase() === revStr.toLowerCase())
        return true
    return false 
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"))