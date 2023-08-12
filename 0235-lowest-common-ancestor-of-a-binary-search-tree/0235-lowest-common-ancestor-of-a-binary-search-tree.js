/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
    var currentNode = root;
    while (currentNode !== null) {
           if(p.val < currentNode.val && q.val < currentNode.val) {
            currentNode = currentNode.left;
            }
           else if(p.val > currentNode.val && q.val > currentNode.val) {
            currentNode = currentNode.right;
            }
                else return currentNode;
    } 
}