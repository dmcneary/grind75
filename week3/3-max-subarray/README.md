# Maximum Subarray

Source: [Leetcode](https://leetcode.com/problems/maximum-subarray/)

## Description

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return *its sum*.

A **subarray** is a **contiguous** part of an array.

**Example 1:**  
Input: `nums = [-2,1,-3,4,-1,2,1,-5,4]`  
Output: `6`  
Explanation: `[4,-1,2,1]` has the largest `sum = 6`.

**Example 2:**  
Input: `nums = [1]`  
Output: `1`

**Example 3:**  
Input: `nums = [5,4,-1,7,8]`  
Output: `23`

**Constraints:**

- 1 <= `nums.length` <= 10^5
- -10^4 <= `nums[i]` <= 10^4

## Explanation

A simple `O(n)` solution involves using [Kadane's algorithm](https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm) which is a trivial application of **dynamic programming**.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
 const n = nums.length;
 let max = Number.MIN_SAFE_INTEGER, sum = 0;

 for (let i = 0; i < n; i++) {
  sum += nums[i];
  max = Math.max(sum, max);
  if (sum < 0) sum = 0;
 }

 return max;

};
```
