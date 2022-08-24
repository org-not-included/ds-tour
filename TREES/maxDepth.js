function Node(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

var maxDepth = function(root) {
    if (root == null)
        return 0
    else {
        let left = maxDepth(root.left)
        let right = maxDepth(root.right)
        console.log('NODE', root.val)
        root.left && console.log('NODE.LEFT', root.left.val)
        root.right && console.log('NODE.RIGHT', root.right.val)
        return Math.max(left, right) + 1   
    }
};

let root = new Node(3, new Node(9), /*new Node(20, new Node(15), new Node(7))*/)
console.log(root)

var depth = maxDepth(root)

console.log(depth)