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
 * @return {number[]}
 */
function findMode(root) {
    let max = 1;
    let hash = {};
    let result = [];
    root && traverse(root);
    for (let prop in hash) {
        hash[prop] === max && result.push(prop);
    }
    
    
    function traverse (node) {
        if (hash[node.val]) {
            hash[node.val] += 1;
            max = Math.max(max, hash[node.val]);
        } else {
            hash[node.val] = 1;
        };
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    };
    return result;
};