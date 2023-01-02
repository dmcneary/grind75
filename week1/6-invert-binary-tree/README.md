# Invert Binary Tree
Source: [Leetcode](https://leetcode.com/problems/valid-palindrome)

## Description
Given the `root` of a binary tree, invert the tree, and *return its root*.

**Example 1:**  
![Example 1 diagram](./invert1-tree.jpg)  
Input: `root = [4,2,7,1,3,6,9]`  
Output: `[4,7,2,9,6,3,1]`  

**Example 2:**  
![Example 2 diagram](./invert2-tree.jpg)  
Input: `root = [2,1,3]`  
Output: `[2,3,1]`

**Example 3:**  
Input: `root = []`  
Output: `[]`

**Constraints:**
- The number of nodes in the tree is in the range [0, 100].
- -100 <= `Node.val` <= 100

## Explanation
Binary Trees are a data structure in which each *parent (or root) node* has at most two *child nodes*. In this problem, we are simply swapping the child nodes of each root. Recursion, like with most binary tree problems, works well here:

```javascript
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (!root) return null;

	let temp = (root.left) ? root.left : null;;
	root.left = (root.right) ? root.right : null;
	root.right = temp;

	invertTree(root.left);
	invertTree(root.right);
	return root;
};
```