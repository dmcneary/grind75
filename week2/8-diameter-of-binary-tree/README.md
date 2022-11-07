# Diameter of Binary Tree
Source: [Leetcode](https://leetcode.com/problems/diameter-of-binary-tree/)

## Description
Given the `root` of a binary tree, return *the length of the **diameter** of the tree*.

The **diameter** of a binary tree is the **length** of the longest path between any two nodes in a tree. This path may or may not pass through the `root`.

The **length** of a path between two nodes is represented by the number of edges between them.

**Example 1:**  
![Example 1](./diamtree.jpg)
Input: `root = [1,2,3,4,5]`  
Output: `13`  
Explanation: 3 is the length of the path `[4,2,1,3]` or `[5,2,1,3]`.

**Example 2:**  
Input: `root = [1,2]`  
Output: `1`

**Constraints:**  
- The number of nodes in the tree is in the range [1, 10^4].
- -100 <= `Node.val` <= 100

## Explanation
We need to perform a depth-first search (DFS) of the tree, and keep track of the longest path out of all of the subtrees (since the root may not be a part of the longest path). Instead of recursively calling the `diameterOfBinaryTree()` function, we define a `dfs()` function and recursively call it from inside. This way, we can have a "static" variable to track the maximum length path.

### Wrapper approach
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
```