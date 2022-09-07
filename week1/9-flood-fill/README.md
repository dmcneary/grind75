# Flood Fill
Source: [Leetcode](https://leetcode.com/problems/flood-fill)

## Description
An image is represented by an `m x n` integer grid image where `image[i][j]` represents the pixel value of the image.

You are also given three integers `sr`, `sc`, and `color`. You should perform a **flood fill** on the image starting from the pixel `image[sr][sc]`.

To perform a **flood fill**, consider the starting pixel, plus any pixels connected **4-directionally** to the starting pixel of the same color as the starting pixel, plus any pixels connected **4-directionally** to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with `color`.

*Return the modified image after performing the flood fill.*

**Example 1:**
![Example](./flood1-grid.jpg)
Input: `image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2`
Output: `[[2,2,2],[2,2,0],[2,0,1]]`
Explanation: From the center of the image with position `(sr, sc) = (1, 1)` (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new `color`.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

**Example 2:**
Input: `image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0`
Output: `[[0,0,0],[0,0,0]]`
Explanation: The starting pixel is already colored 0, so no changes are made to the `image`.

**Constraints:**
- `m == image.length`
- `n == image[i].length`
- 1 <= `m`, `n` <= 50
- 0 <= `image[i][j]`, color < 2^16
- 0 <= `sr` < `m`
- 0 <= `sc` < `n`

## Explanation
**Depth-first search (DFS)** is a method of traversing a graph, starting at a root vertex and traversing to a connected node. The method continues down a path until a terminating condition is reached, then recurses back to the last vertex and continues down a new path if the vertex has additional edges. We can treat the matrix as a graph and use the DFS method to traverse each neighboring cell of the matrix, terminating after we've reached a boundary row/column, or if the cell has a different color:
```javascript
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
	let oldColor = image[sr][sc];
	if (color !== oldColor) dfs(image, sr, sc, oldColor, color);
	return image;
};

var dfs = function (image, r, c, color, newColor) {
	if (image[r][c] === color) {
		image[r][c] = newColor;
		if (r >= 1) dfs(image, r - 1, c, color, newColor);
		if (c >= 1) dfs(image, r, c - 1, color, newColor);
		if (r + 1 < image.length) dfs(image, r + 1, c, color, newColor);
		if (c + 1 < image[0].length) dfs(image, r, c + 1, color, newColor);
	}
};
```