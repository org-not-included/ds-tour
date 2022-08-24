function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)))

// bfs with queue
 const zigzag = (root) => {
    let levels = []
    let queue = [root]
    let is_order_left = true
    while(queue.length !== 0){
        let level = []
        const levelLength = queue.length
        for (var i=0; i<levelLength; i++){
            const node = queue.shift()
            if (is_order_left){
                if(node.left) queue.unshift(node.left)
                if(node.right) queue.unshift(node.right)
                level.push(node.val)
            } else {
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
                level.push(node.val)
            }
        }
        levels.push(level)
        is_order_left = !is_order_left
    } 
    return levels
}

console.log(zigzag(root))