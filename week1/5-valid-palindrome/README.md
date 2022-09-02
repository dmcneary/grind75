# Valid Palindrome
Source: [Leetcode](https://leetcode.com/problems/valid-palindrome)

## Description
A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` *if it is a **palindrome***, or `false` otherwise.

**Example 1:**

Input: `s = "A man, a plan, a canal: Panama"`
Output: `true`
Explanation: "amanaplanacanalpanama" is a palindrome.

**Example 2:**
Input: `s = "race a car"`
Output: `false`
Explanation: "raceacar" is not a palindrome.

**Example 3:**
Input: `s = " "`
Output: `true`
Explanation: `s` is an empty string `""` after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

**Constraints:**
- 1 <= `s.length` <= 2 * 10^5
- `s` consists only of printable ASCII characters.

## Explanation
We can accomplish this task by using a two-pointer approach, but first we must prepare the string for testing. To do this, we strip out all whitespace and non-alphanumeric characters, and convert all characters to lower-case. Then, we assign our two pointers to the indexes of the first and last characters in the converted string. We then iterate over the characters in a `while`-loop, until the left pointer catches up to the right. In each iteration, we check if the characters at the indexes that the pointers are assigned to are equal; if not, immediately return `false`. If the loop completes, then all characters must match and we return `true`. Note that because the loop terminates when the start pointer is greaterthan or equal to than the end pointer, it doesn't matter if the converted string has an odd or even length:
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	let left = 0, right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
};
```