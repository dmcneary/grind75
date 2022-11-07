# Lowest Common Ancestor of a Binary Search Tree
Source: [Leetcode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

## Description
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the [definition](https://en.wikipedia.org/wiki/Lowest_common_ancestor) of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where **we allow a node to be a descendant of itself**).”

**Example 1:**  
![BST example](./binarysearchtree_improved.png)  
Input: `root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8`  
Output: `6`  
Explanation: The LCA of nodes `2` and `8` is `6`.

**Example 2:**  
![BST example](./binarysearchtree_improved.png)  
Input: `root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4`  
Output: 2  
Explanation: The LCA of nodes `2` and `4` is `2`, since a node can be a descendant of itself according to the LCA definition.

**Example 3:**  
Input: `root = [2,1], p = 2, q = 1`  
Output: `2`

**Constraints:**
- The number of nodes in the tree is in the range [2, 10^5].
- -10^9 <= `Node.val` <= 10^9
- All `Node.val` are unique.
- `p != q`
- `p` and `q` will exist in the BST.

## Explanation
We can either take an iterative or a recursive approach to this **DFS** problem:

### Iterative:
```javascript
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
	while (root) {
		if (root.val < p.val && root.val < q.val) root = root.right;
		else if (root.val > p.val && root.val > q.val) root = root.left;
		else return root;
	}
};
```

### Recursive:
```javascript
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
```