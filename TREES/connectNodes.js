function Node(val, left, right, next) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = next === undefined ? null : next;
}

let root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)))

const connect = (root) => {
    let queue = [root]
    let levels = []
    while(queue.length !== 0){
        let levelLength = queue.length
        let level = []
        for (var levelIndex=0; levelIndex<levelLength; levelIndex++){
            let node = queue.shift()
            if (levelLength === 1 || levelIndex === levelLength - 1) node.next === null
            else node.next = queue[0]
            // push nodes to a level in queue
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
            //add node or node.val to level
            level.push(node.val)
        }
        level.push('#')
        levels.push(...level)        
    }
    console.log(levels)
    console.log(root)
}

connect(root)