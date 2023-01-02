# Majority Element
Source: [Leetcode](https://leetcode.com/problems/majority-element/)

## Description
Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**  
Input: `nums = [3,2,3]`  
Output: `3`

**Example 2:**  
Input: `nums = [2,2,1,1,1,2,2]`  
Output: `2`

**Constraints:**  
- `n == nums.length`
- 1 <= `n` <= 5 * 10^4
- -10^9 <= `nums[i]` <= 10^9

## Explanation
By mapping each value to its frequency, we can quickly determine the majority element in `O(n)` time. However, we can also utilize some number theory to improve this runtime complexity to `O(1)`. Since the majority element's frequency is greater than `n / 2`, there will always be an occurance of the majority element at `nums[⌊n / 2⌋]`.

### Map approach
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const map = new Map();
	let max;

	for (const el of nums) {
		if (!map.has(el)) {
			map.set(el, 1);
		}
		else {
			map.set(el, map.get(el) + 1);
		}

		max = (max) ?
			(map.get(el) > map.get(max)) ? el : max :
			el;
	}

	return max;
};
```

### Sort approach
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	nums.sort((a, b) => a - b);
	const n = Math.floor(nums.length / 2);
	return nums[n];
}
```