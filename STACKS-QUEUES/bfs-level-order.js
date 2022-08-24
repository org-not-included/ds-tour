function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)))

var levelOrder = (root) => {
    let levels = []
    let queue = [root]
    while(queue.length !== 0){
        let level = []
        const levelLength = queue.length
        for (var i=0; i<levelLength; i++){
            const node = queue.shift()
            console.log('TOP NODE: ', node)
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
            level.push(node.val)
            console.log(level)
        }
        levels.push(level)
    } 
    return levels
}

console.log(levelOrder(root))