function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)))

// bfs with queue (needs improvement fails certain base cases)
 const zigzag = (root) => {
    if (root === null) return []
    let levels = []
    let queue = [root]
    let is_order_left = true
    while(queue.length !== 0){
        let level = []
        const levelLength = queue.length
        for (var i=0; i<levelLength; i++){
            const node = queue.shift()
            if (is_order_left) level.push(node.val)
            else level.unshift(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        levels.push(level)
        is_order_left = !is_order_left
    } 
    return levels
}

console.log(zigzag(root))

