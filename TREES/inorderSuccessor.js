function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var inorderSuccessor = function(root, p) {
    if (root === null) return null
    let stack = []
    let found = false
    while (root !== null || stack.length !== 0) {
      while (root != null) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      if (found) return root;
      if (root.val === p.val) found = true;
      root = root.right;
    }
    return null
};

// let root = new Node(2, new Node(1), new Node(3))
// console.log(inorderSuccessor(root, new Node(1)))

let root = new Node(5, new Node(3, new Node(2, new Node(1)), new Node(4)), new Node(6))
console.log(inorderSuccessor(root, new Node(3)))