# Binary Search
Source: [Leetcode](https://leetcode.com/problems/binary-search)

## Description
Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**
Input: `nums = [-1,0,3,5,9,12], target = 9`
Output: `4`
Explanation: `9` exists in `nums` and its index is `4`

**Example 2:**
Input: `nums = [-1,0,3,5,9,12], target = 2`
Output: `-1`
Explanation: `2` does not exist in `nums` so return `-1`

**Constraints:**
- 1 <= `nums.length` <= 10^4
- -10^4 < `nums[i]`, `target` < 10^4
- All the integers in `nums` are unique.
- `nums` is sorted in ascending order.

## Explanation
Binary Search is an essential algorithm to know, and is referenced in many "divide and conquer" type algorithms. We utilize a two-pointer approach, assigning the first to the beginning index of the array and the second to the last index. We check the element at the index average of the two pointers (i.e. (first + last) / 2) - if the element matches the target, we return the index. If not, we check to see if the element at the index is greater than or less than the target and adjust one of the pointers accordingly. Note that binary search relies on a *sorted* array - unsorted arrays are not feasible to search using this approach:
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0, right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] > target) right = mid - 1;
		else if (nums[mid] < target) left = mid + 1;
		else return mid;
	}

	return -1;
};
```