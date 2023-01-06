# Valid Parentheses

Source: [Leetcode](https://leetcode.com/problems/valid-parentheses/)

## Description

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

**Example 1:**  
Input: `s = "()"`  
Output: `true`

**Example 2:**  
Input: `s = "()[]{}"`  
Output: `true`

**Example 3:**  
Input: `s = "(]`  
Output: `false`

**Constraints:**

- 1 <= `s.length` <= 10^4
- `s` consists of parenthetical characters only: '()[]{}'

**Only one valid answer exists.**

## Explanation

We have an interesting condition in this problem: not only must every opening character be matched with a closing character, but they must also be presented *in the same order.* We'll need to use a data structure which we can iterate over the string's characters, store the opening characters while keeping their order, and remove them from the store when we encounter a matching closing character. If we've reached the end of the string, and the store is empty, the string is valid. Otherwise, if there are characters left in the store when we reach the end of the string, or if we find a closing character before the end of the string when the store is empty, then the input string is invalid.

A Stack is an abstract data type which serves as a *linear* collection of elements, with two principal operations:

- An element can be 'pushed' to the top of the stack to add it to the collection
- The element at the top of the stack can be 'popped' off

Stacks are LIFO (last-in, first-out) data stuctures, and are very common in algorithm problems. For instance, a Depth-First Search graph algorithm will almost always use a Stack. Stacks can be implemented as arrays or as linked lists. In JS, arrays aren't primitive types, but instead implemented as `Array` built-in objects. While `Array` objects are not strictly stacks, they do offer `push()` and `pop()` methods and we can use them accordingly:

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 var stack = [];

 for (var i = 0; i < s.length; i++) {
  if (s[i] === '(') {
   stack.push(s[i]);
  } else if (s[i] === '[') {
   stack.push(s[i]);
  } else if (s[i] === '{') {
   stack.push(s[i]);
  } else if (s[i] === ')') {
   var popped = stack.pop();
   if (popped !== '(') {
    return false;
   }
  } else if (s[i] === '}') {
   var popped = stack.pop();
   if (popped !== '{') {
    return false;
   }
  } else if (s[i] === ']') {
   var popped = stack.pop();
   if (popped !== '[') {
    return false;
   }
  }
 }

 if (stack.length === 0) {
  return true;
 } else {
  return false;
 }
};
```

Well...that's pretty ugly. Chaining `if-else if` statements together is generally a bad practice, and can really slow down your code. Luckily, we can utilize logic and `switch` blocks to reduce the verbosity of the above code. We can also use an improved `for...of` loop since JS Strings are `Iterable` objects, and ES6 syntax for variable declarations:

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
 const stack = [];

 for (const c of s) {
  if (
   c === '(' || 
   c === '{' ||
   c === '['
  ) {
   stack.push(c);
  } else {
   switch(c) {
    case ')':
     if (stack.pop() === '(') break;
     return false;
    case ']':
     if (stack.pop() === '[') break;
     return false;
    case '}':
     if (stack.pop() === '{') break;
     return false;
    default:
     return false;
   }
  }
 }

 return stack.length === 0;
};
```

Here's a variation which checks for odd-length strings or strings with less than 2 characters; as well, it changes up the character matching logic a bit, using a regular expression:

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
 if ((s.length < 2) || (s.length % 2 !== 0)) return false;
  let stack = [];
    
 for (const c of s) {
  if (c.match(/[({[]/)) {
   switch (c) {
    case "(": stack.push(")"); break;
    case "{": stack.push("}"); break;
    case "[": stack.push("]"); break;
   }
  } else if (!stack.length || stack.pop() !== c) {
   return false;
  }
 }
 return stack.length === 0;
}
```
