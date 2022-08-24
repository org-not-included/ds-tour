/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = x.toString()
    let arr = str.split('')
    let rev = arr.reverse()
    return rev.join('') === str
};

console.log(isPalindrome(121))