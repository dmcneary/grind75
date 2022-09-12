# Ransom Note
Source: [Leetcode](https://leetcode.com/problems/ransom-note/)

## Description
Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` *can be constructed by using the letters from `magazine` and `false` otherwise*.

Each letter in `magazine` can only be used once in `ransomNote`.

**Example 1:**  
Input: `ransomNote = "a", magazine = "b"`  
Output: `false`

**Example 2:**  
Input: `ransomNote = "aa", magazine = "ab"`  
Output: `false`

**Example 3:**  
Input: `ransomNote = "aa", magazine = "aab"`  
Output: `true`

**Constraints:**  
- 1 <= `ransomNote.length`, `magazine.length` <= 10^5
- `ransomNote` and `magazine` consist of lowercase English letters.

## Explanation
By iterating over each character in each string, we can add the count of each character in `magazine` and subtract the count for each character in `ransomNote`. If any character count in the map is less than 0, we return `false`:

```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	if (magazine.length < ransomNote.length) return false;

	const map = new Map();

	for (const c of magazine) {
		if (map.has(c)) {
			map.set(c, map.get(c) + 1);
		} else {
			map.set(c, 1);
		}
	}

	for (const c of ransomNote) {
		if (map.has(c)) {
			map.set(c, map.get(c) - 1);
		} else {
			map.set(c, -1);
		}
	}

	const vals = map.values();

	for (const c of vals) {
		if (c < 0) return false;
	}

	return true;
};
```