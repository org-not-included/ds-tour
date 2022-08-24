function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new Node(5, new Node(3, new Node(2), new Node(4)), new Node(6, undefined, new Node(7)))

helper = (root, arr) => {
    if (root === null) return arr
    helper(root.left, arr)
    arr.push(root.val)
    helper(root.right, arr)
    return arr
}

const kthsmallest = (root, k) => {
    let arr = []
    const res = helper(root, arr)
    return res[k - 1]
}

function kthSmallest2(root, k) {
    let stack = []

    while (true) {
      while (root != null) {
        stack.push(root);
        root = root.left;
      }
      console.log(stack)
      console.log(root)
      root = stack.pop();
      if (--k == 0) return root.val;
      root = root.right;
    }
  }

// console.log(kthsmallest(root, 2))
console.log(kthSmallest2(root, 2))