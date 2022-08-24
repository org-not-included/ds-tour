function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)))

// bfs with queue
 const bfs = (root) => {
    let levels = []
    let queue = [root]
    while(queue.length !== 0){
        let level = []
        const levelLength = queue.length
        for (var i=0; i<levelLength; i++){
            const node = queue.shift()
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            level.push(node.val)
        }
        levels.push(level)
    } 
    return levels
}

// dfs preorder with stack
const dfs = (root) => {
    let stack = [root]
    let dfsNodes = []
    while (stack.length) {
        const node = stack.pop()
        if (node.right)
            stack.push(node.right)
        if (node.left)
            stack.push(node.left)
        dfsNodes.push(node.val)
    }
    return dfsNodes
}

console.log(bfs(root))
console.log(dfs(root))

