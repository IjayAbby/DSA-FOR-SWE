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
 * @return {boolean}
 */
function isBalanced(root) {
    return getHeight(root) !== -1;
}
function getHeight(node) {
    if(node === null) return 0;
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);
    if(leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1){
        return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
}