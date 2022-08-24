getClose = (bracket) => {
    switch (bracket) {
        case '{':
            return '}';
        case '(':
            return ')';
        case '[':
            return ']';
        default:
            return ' ';
    }
}
isClose = (bracket) => {
    return bracket == '}' || bracket == ')' || bracket == ']';
}

balancedBrackets = (brackets) => {
    var stack = []
    for (var i=0; i<brackets.length; i++){
        let c = brackets.charAt(i)
        if (stack.length > parseInt(brackets.length/2))
            return 'NO'
        if (!isClose(c))
            stack.push(c)
        else {
            if (stack.length === 0)
                return 'NO'
            if (getClose(stack.pop()) != c) {
                return 'NO'
            }
        }
    }
    if (stack.length === 0)
     return 'YES'
    else
     return 'NO'
}

console.log(balancedBrackets('{[()]}'))