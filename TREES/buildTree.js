//preorder root->left->right [3,9,20,15,7]
//inorder left->root->right [9,3,15,20,7]
//Constructing a Binary tree from preorder and indorer 


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


const helper = (preorder, inorder, preIndex, inStart, inEnd) => {
    if (preIndex >= preorder.length || inStart > inEnd) return null

    var index = 0; // preorder tree root index
    var root = new TreeNode(preorder[preIndex]); //first element is always the root in preorder tree

    //find the root index in inorder tree
    for (var i = inStart; i <= inEnd; i++) {
      if (inorder[i] === root.val) {
        index = i;
        break;
      }
    }

    if (index > inStart) root.left = helper(preorder, inorder, preIndex + 1, inStart, index - 1);
    if (index < inEnd) root.right = helper(preorder, inorder, preIndex + index - inStart + 1, index + 1, inEnd);
  
    return root;

}


const buildTree = (preorder, inorder) => {
    return helper(preorder, inorder, 0, 0, inorder.length - 1)
}








/**
//  * @param {number[]} preorder
//  * @param {number[]} inorder
//  * @return {TreeNode}
//  */
//  var buildTree = function(preorder, inorder) {
//     return helper(preorder, inorder, 0, 0, inorder.length - 1);
//   };
  
//   var helper = function (preorder, inorder, preIndex, inStart, inEnd) {
//     if (preIndex >= preorder.length || inStart > inEnd) return null;
  
//     var index = 0;
//     var root = new TreeNode(preorder[preIndex]);
  
//     for (var i = inStart; i <= inEnd; i++) {
//       if (inorder[i] === root.val) {
//         index = i;
//         break;
//       }
//     }
  
//     if (index > inStart) root.left = helper(preorder, inorder, preIndex + 1, inStart, index - 1);
//     if (index < inEnd) root.right = helper(preorder, inorder, preIndex + index - inStart + 1, index + 1, inEnd);
  
//     return root;
//   };