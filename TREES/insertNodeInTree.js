function Node(data, left, right) {
    this.data = (data===undefined ? 0 : data)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

helper = (root, newNode) => {
    if (newNode.data < root.data){
        if(root.left === null)
            root.left = newNode
        else
            helper(root.left, newNode)
    } else {
        if(root.right === null)
            root.right = newNode
        else
            helper(root.right, newNode)
    }
    return root
}

insertNode = (data, root) => {
    var newNode = new Node(data)
    if (root === null) {
        root = newNode
        return root
    }
    else
        return helper(root, newNode)
}

let root1 = new Node(15, new Node(10), new Node(25))

console.log('Tree before adding new node ', root1)

console.log('Tree after adding a new node ', insertNode(4, root1))