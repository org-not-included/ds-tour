/**
 * @param {string} 
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    let stack = []
    let indexesToRemove = []
    for (var i=0; i<s.length; i++) {
        if (s.charAt(i) === '(') {
            stack.push(i)
        } if(s.charAt(i) === ')') {
            if(stack.length === 0 )
                indexesToRemove.push(i)
            else
                stack.pop()
        }
    }
        
    while (stack.length !== 0) indexesToRemove.push(stack.pop())
    
    let sArray = []
    for (var i=0; i<s.length; i++){
        if(!indexesToRemove.includes(i))
            sArray.push(s.charAt(i))
    }
        
    return sArray.join('')
}

console.log(minRemoveToMakeValid("lee(t(c)o)de)"))