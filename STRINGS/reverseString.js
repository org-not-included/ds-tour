reverseString = (index, str) => {
    let res = ''
    if (str === null || index >= str.length)
        return
    reverseString(index + 1, str)
    console.log(str.charAt(index))
}

reverseString(0, "abcdef")
