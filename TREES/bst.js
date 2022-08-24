// Node class
class Node {
    constructor(data, left, right)
    {
        this.data = (data===undefined ? 0 : data)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// Binary Search tree class
class BinarySearchTree {
    constructor() {
        // root of a binary seach tree
        this.root = null
    }
  
    // helper method which creates a new node to be inserted and calls insertNode
    insert(data) {
        var newNode = new Node(data)
        if (this.root === null)
            this.root = newNode
        else
            this.insertNode(this.root, newNode)
    }
    
    insertNode(node, newNode){
        if (newNode.data < node.data){
            if (node.left === null) // if left is null insert node here
                node.left = newNode
            else
                this.insertNode(node.left, newNode)  // if left is not null recur until null is found
        } else {
            if(node.right === null) // if right is null insert node here
                node.right = newNode;
            else
                this.insertNode(node.right,newNode); // if right is not null recur until null is found
        }
    }

    inorder(node){
        if (node !== null) {
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }

    preorder(node){
        if (node !== null) {
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node){
        if(node !== null){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)
        }
    }

    getRootNode(){
        return this.root
    }

    findMinNode(node){
        if (node.left === null)
            return node
        else
            this.findMinNode(node.left)
    }

    search(node, data){
        if(node === null)
            return null
        else if (data < node.data)
            search(node.left, data)
        else if (data > node.data)
            search(node.right, data)
        else
            return node
    }

    isValidBST(root, low, high){
        // Empty trees are valid BSTs.
        if (root === null) {
            return true
        }
        // The current node's value must be between low and high.
        if ((low !== null && root.data <= low) || (high !== null && root.data >= high)){
            return false
        }
        // The left and right subtree must also be valid.
        return this.isValidBST(root.right, root.data, high) && this.isValidBST(root.left, low, root.data)
    }

}

const generateBST = () => {
    // create an object for the BinarySearchTree
    var BST = new BinarySearchTree()

    // Inserting nodes to the BinarySearchTree
    // BST.insert(15);
    // BST.insert(25);
    // BST.insert(10);
    // BST.insert(7);
    // BST.insert(22);
    // BST.insert(17);
    // BST.insert(13);
    // BST.insert(5);
    // BST.insert(9);
    // BST.insert(27);

    BST.insert(5);
    BST.insert(1);
    BST.insert(6);
    BST.insert(3);
    BST.insert(7);

    //      15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 

    return BST
}

// 1. Generate tree using BST class (it generates a valid bst)
const BST = generateBST()
const root = BST.getRootNode()

console.log('INORDER TRAVERSAL:')
BST.inorder(root)
console.log('PREORDER TRAVERSAL:')
BST.preorder(root)
console.log('POST ORDER TRAVERSAL')
BST.postorder(root)

// (OPTIONAL) Instead of using a BST class to generate a BST
// let root1 = new Node(15, new Node(10), new Node(25)) // true bst
// let root2 = new Node(5, new Node(1), new Node(4, new Node(3), new Node(6))); // false bst
// let root3 = new Node(5, new Node(1), new Node(6, new Node(3), new Node(7))); // false 3<5 rhs
// const bst = new BinarySearchTree()
// const isValid = bst.isValidBST(root3, null, null)
// console.log('IS VALID BST:', isValid)