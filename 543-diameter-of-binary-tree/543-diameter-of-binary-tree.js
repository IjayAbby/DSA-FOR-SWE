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
function diameterOfBinaryTree(root) {
    return dfs(root).diameter;
};

function dfs(node) {
    if (!node) 
        return {height: 0, diameter: 0}
    const left = dfs(node.left);
    const right = dfs(node.right);
    const height = 1 + Math.max(left.height, right.height);
    const diameter = Math.max(left.height + right.height, left.diameter, right.diameter);
    return {height, diameter};
}