# Balanced Binary Tree

Source: [Leetcode](https://leetcode.com/problems/balanced-binary-tree/)

## Description

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as: a binary tree in which the left and right subtrees of *every* node differ in height by no more than 1.

**Example 1:**  
![BT example](./balance_1.png)  
Input: `root = [3,9,20,null,null,15,7]`  
Output: `true`

**Example 2:**  
![BT example](./balance_2.png)  
Input: `root = [1,2,2,3,3,null,null,4,4]`  
Output: `false`

**Example 3:**  
Input: `root = []`  
Output: `true`

**Constraints:**

- The number of nodes in the tree is in the range [0, 5000].
- -10^4 <= `Node.val` <= 10^4

## Explanation

A twist on a DFS approach, we must keep track of a count, and return a boolean. This requires a helper function to keep track of the height of the tree:

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
```
