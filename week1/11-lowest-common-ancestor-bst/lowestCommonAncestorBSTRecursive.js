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
var lowestCommonAncestor = function (root, p, q) {
	if (root) {
		const { left, right, val } = root;

		if (p.val < val && q.val < val) return lowestCommonAncestor(left, p, q);
		if (p.val > val && q.val > val) return lowestCommonAncestor(right, p, q);
	}
	return root;
};