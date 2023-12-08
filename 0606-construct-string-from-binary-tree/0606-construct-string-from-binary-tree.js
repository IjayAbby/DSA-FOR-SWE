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
 * @return {string}
 */
var tree2str = function(t) {
    if(t === null)
        return '';
    
    var result = t.val + '';
    
    var left = tree2str(t.left);
    var right = tree2str(t.right);

    if(left === '' && right === '')  {
       return result;
    } else if(left === '') {
       result += '()' + '(' + right + ')';
    } else if (right === '') {
       result += '(' + left + ')';        
    } else {
      result += '(' + left + ')' + '(' + right + ')';  
    }
    return result;
};