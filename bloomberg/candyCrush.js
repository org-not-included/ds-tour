// Adding peek method to the Array
// prototype chain
Array.prototype.peek = function () {
    if (this.length === 0) {
      throw new Error("out of bounds");
    }
    return this[this.length - 1];
  };

const candyCrush = (str) => {
    let stack = []
    // let counter = 0
    for (var i=0 ; i<str.length ; i++) {
        let candy = str.charAt(i);
        if (stack.length === 0 || stack.peek()[0] !== candy) 
            stack.push([candy, 1])
        else {
            pop_candy = stack.pop()
            pop_candy[1] += 1
            if (pop_candy[1] < 3) stack.push([candy, pop_candy[1]])
        }
    }
    console.log(stack)
}

candyCrush("aabbbacd")