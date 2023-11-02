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
var averageOfSubtree = function (root) {
  const ans = { val: 0 };
  dfs(root, ans);

  return ans.val;
};

function dfs(root, ans) {
  if (!root) return [0, 0];

  const [leftSum, leftNodes] = dfs(root.left, ans);
  const [rightSum, rightNodes] = dfs(root.right, ans);
  const sum = leftSum + rightSum + root.val;
  const nodes = leftNodes + rightNodes + 1;

  if (Math.floor(sum / nodes) === root.val) ans.val++;

  return [sum, nodes];
}