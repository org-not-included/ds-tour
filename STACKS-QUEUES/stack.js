// Stack class
class Stack {
  
    // Array is used to implement stack
    constructor() {
        this.items = [];
    }

    sort() {
       this.items.sort((a,b) => a - b)
       return this.items
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }

}

const createStack = () => {
    let s = new Stack()
    s.push(5)
    s.push(3)
    s.push(7)
    s.push(4)
    console.log('STACK IS: ', s)

    let sortedArray = s.sort()
    console.log('SORTED STACK: ', sortedArray)

}

createStack()