# Two Sum
Source: [Leetcode](https://leetcode.com/problems/two-sum)

## Description
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**  
Input: `nums = [2,7,11,15], target = 9`  
Output: `[0,1]`  
Explanation: Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

**Example 2:**  
Input: `nums = [3,2,4], target = 6`  
Output: `[1,2]`

**Example 3:**  
Input: `nums = [3,3], target = 6`  
Output: `[0,1]`

**Constraints:**  
- 2 <= `nums.length` <= 10^4
- -10^9 <= `nums[i]` <= 10^9
- -10^9 <= `target` <= 10^9
- **Only one valid answer exists.**

## Explanation
The simplest way to go about this is a nested loop: for each element in `nums`, iterate over every other element in `nums` to see if the two elements add up to `target`:

```javascript
var twoSum = function(nums, target) {
	for (var i = 0; i < nums.length; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
}
```

We can start the inner loop at `i + 1` since we've already checked previous elements in `nums` from previous iterations in the outer loop (i.e. checking `nums[0] + nums[1]` is the same as checking `nums[1] + nums[0]`). However, this gives us an expensive runtime complexity of `O(n^2)`. What if we can accomplish this over a single pass of the `nums` array?

A **Map** (aka **dictionary**, **associative array**, or **symbol table**) is an abstract data type that stores a collection of key-value pairs, so that each key appears only once in the collection. Typically, maps are implemented with 'lookup,' 'insert,' and 'delete' methods. In JavaScript, plain objects were historically used as maps. We can iterate over the array and start adding elements in the form of key-value pairs, where the element is the key and the index is the value. For each element in `nums`, if there exists a pair in the map such that the map key plus the current element in `nums` equals the `target`, return the key's value and the current index:

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var map = {};

	for (var i = 0; i < nums.length; i++) {
		var difference = target - nums[i];
		if (map[difference] !== undefined) {
			return [map[difference], i];
		} else {
			map[nums[i]] = i;
		}
	}
}
```

Unfortunately, JS objects have limitations which make using them in place of a dedicated Map definition a bit tricky. For instance, `Object` has a prototype which may introduce collisions with your own keys.  As well, object keys may only be a `String` or a `Symbol`. On the other hand, JS offers a built-in `Map` object which is much easier to use.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var map = new Map();

	for (var i = 0; i < nums.length; i++) {
		var difference = target - nums[i];
		if (map.has(difference)) {
			return [map.get(difference), i];
		} else {
			map.set(nums[i], i);
		}
	}
}
```

We can simplify this further by using **ES6** features:

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const map = new Map();
	let res;

	nums.forEach((num, i) => {
		const diff = target - num;
		if (map.has(diff)) res = [map.get(diff), i];
		else map.set(num, i);
	});

	return res;
}
```

...but while the `forEach()` method must iterate over every element, a regular `for`-loop allows us to return early if we find the solution:

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];
		if (map.has(diff)) return [map.get(diff), i];
		map.set(nums[i], i);
	}
}
```