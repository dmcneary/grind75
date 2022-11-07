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
 var diameterOfBinaryTree = function(root) {
	let max = 0;
	
	const dfs = root => {
			if (!root) return 0;
			
			
			const leftHeight = dfs(root.left);
			const rightHeight = dfs(root.right);
			
			max = Math.max(max, leftHeight + rightHeight);
			
			return 1 + Math.max(leftHeight, rightHeight);
	}
	
	dfs(root);
	
	return max;
	
};