# Valid Anagram

Source: [Leetcode](https://leetcode.com/problems/valid-anagram)

## Description

Given two strings `s` and `t`, return *`true` if `t` is an anagram of `s`, and `false` otherwise*.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**  
Input: `s = "anagram", t = "nagaram"`  
Output: `true`

**Example 2:**  
Input: `s = "rat", t = "car"`  
Output: `false`

**Constraints:**

- 1 <= `s.length`, `t.length` <= 5 * 10^4
- `s` and `t` consist of lowercase English letters.

## Explanation

There are a few ways to go about tackling this problem. One rudimentary approach would be to treat each letter in the strings as an element in an array, and compare the two strings as arrays to see if they are alike. Because the order of the letters are not the same in a possible anagram, though, they'll need to be sorted. We first check to see if the lengths of the two strings are different - they cannot be anagrams if they do not have the same length:

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let S = s, T = t;
    S = S.split('').sort();
    T = T.split('').sort();
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== T[i]) return false;
    }
    return true;
};
```

While this is concise, and we end up only traversing the letters of the string once during comparison, sorting adds significant overhead to our algorithm. Instead, we can reduce the runtime by utilizing a map. We first iterate over the characters in `s`, adding each one to the map if it doesn't contain the character as a key, and incrementing the value of the character key otherwise. We then perform the same iteration over `t`, except we decremement the value of each matching character key. Finally, we create an `iterator` object from the map's values, and check each value - if any value is greater than zero, that means it's key character was not present in either one of the strings, and we do not have a valid anagram. If every value is 0, we finish the loop and return `true`:

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
 if (s.length !== t.length) return false;
 const map = new Map();

 for (const c of s) {
  if (map.has(c)) {
   map.set(c, map.get(c) + 1);
  } else {
   map.set(c, 1);
  }
 }

 for (const c of t) {
  if (map.has(c)) {
   map.set(c, map.get(c) - 1);
  } else {
   map.set(c, 1);
  }
 }

 let qtys = map.values();
 let val = qtys.next();
 while (!val.done) {
  if (val.value > 0) {
   return false;
  }
  val = qtys.next();
 }

 return true;
};
```
