var BinarySearchTree = require("../Helpers/BinaryTree");

var bst = new BinarySearchTree();
for (let i = 0; i < 30; i++) {
    bst.insert(Math.floor(Math.random() * 100));
}

var root = bst.getRootNode();

// Diameter of Binary Tree
// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    function height(node) {
        if (node === null) {
            return 0;
        }

        return 1 + Math.max(height(node.left), height(node.right));
    }

    if (root === null) {
        return 0;
    }

    let lheight = height(root.left);
    let rheight = height(root.right);

    let ldiameter = diameterOfBinaryTree(root.left);
    let rdiameter = diameterOfBinaryTree(root.right);

    return Math.max(lheight + rheight, Math.max(ldiameter, rdiameter));
};

console.log(diameterOfBinaryTree(root));