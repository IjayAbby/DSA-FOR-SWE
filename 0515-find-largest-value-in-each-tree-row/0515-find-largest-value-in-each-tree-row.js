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
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var largestValues = function(root) {
    if (!root) return [];
    
    let queue = [[root, 0]];
    let res = [];
    
    while (queue.length > 0) {
        let [node, level] = queue.shift();
        
        if (res.length === level) {
            res.push(node.val);
        } else {
            res[level] = Math.max(res[level], node.val)
        }
        
        if (node.left) queue.push([node.left, level + 1]);
        if(node.right) queue.push([node.right, level + 1]);
    } 
    
    return res;
};