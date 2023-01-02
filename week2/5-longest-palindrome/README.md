# Longest Palindrome
Source: [Leetcode](https://leetcode.com/problems/longest-palindrome/)

## Description
Given a string `s` which consists of lowercase or uppercase letters, return the *length of the longest **palindrome** that can be built with those letters*.

Letters are **case sensitive**, for example, "Aa" is not considered a palindrome here.

**Example 1:**  
Input: `s = "abccccdd"`  
Output: `7`  
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

**Example 2:**  
Input: `s = "a"`  
Output: `1`  
Explanation : The longest palindrome that can be built is "a", whose length is 1.

**Constraints:**  
- 1 <= `s.length` <= 2000
- `s` consists of lowercase **and/or** uppercase English letters only.

## Explanation
JavaScript has a built-in object called a `Set`, which is a collection of distinct elements. It is less memory-intensive than a `Map` and still offers `O(1)` element lookup. For this solution, we iterate over `s` and check to see if the character has been added to the set. If it has, we increment a counter and then delete the element from the set. This way, every paired character in the string gives us a longer possible palindrome. After the iteration, we check to see if there are any characters left in the set; if so, any one of these characters may be used in the longest palindrome, so we increase the count by one. 

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	const set = new Set();
	let count = 0;

	for (const c of s) {
		if (set.has(c)) {
			count++;
			set.delete(c);
		} else set.add(c);
	}

	return (set.size === 0) ? count * 2 : (count * 2) + 1;
};
```