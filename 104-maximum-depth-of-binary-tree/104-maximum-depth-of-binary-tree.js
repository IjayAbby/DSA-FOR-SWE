/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (root == null) return 0;
    else {
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
        if (leftDepth > rightDepth) return (leftDepth + 1);
        else return (rightDepth + 1);
    }
};