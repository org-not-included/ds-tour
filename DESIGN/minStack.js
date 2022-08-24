class MinStack {
    constructor(){
        this.stack = []
    }

    push = (e) => {
        if (this.stack.length === 0)
            this.stack.push([e, e])
        else {
            const stackIndex = this.stack.length - 1
            if(this.stack[stackIndex][1] < e)
                this.stack.push([e, this.stack[stackIndex][1]])
            else {
                for (var i=0; i<this.stack.length; i++)
                    this.stack[i][1] = e
                this.stack.push([e, e])
            }
        }
    }

    pop = () => {
        this.stack.pop()
        let min = this.stack && this.stack.length > 0 && this.stack[0][0]
        for(var i=0 ; i<this.stack.length; i++){
            if(this.stack[i+1]) {
                if (this.stack[i][0] < this.stack[i+1][0])
                    min = this.stack[i][0]
                else
                    min = this.stack[i+1][0]
            }
        }
        this.stack.map((e, i) => this.stack[i][1] = min)
    }

    top = () => {
        return this.stack[this.stack.length - 1][0]
    }

    getMin = () => {
        if (this.stack.length === 0)
            return this.stack
        else {
            return this.stack[0][1]
        }
    }
    
}

let minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log('Stack after push is: ', minStack.stack)
let min = minStack.getMin()
console.log('Minmum value in stack: ', min)
minStack.pop()
console.log('Stack after pop is: ', minStack.stack)
const top = minStack.top()
console.log('Stack top is: ', top)
console.log('Stack after removing top', minStack.stack)
min = minStack.getMin()
console.log('Minmum value in stack: ', min)