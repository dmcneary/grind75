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
var isBalanced = function (root) {

	if (!root) return true;

	let l = height(root.left),
		r = height(root.right);

	if (Math.abs(l - r) > 1) return false;

	return isBalanced(root.left) && isBalanced(root.right);

};

var height = function (root) {

	if (!root) {
		return 0;
	} else if (!root.left && !root.right) {
		return 1;
	}

	return Math.max(1 + height(root.left), 1 + height(root.right));

}