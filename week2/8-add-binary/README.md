# Add Binary

Source: [Leetcode](https://leetcode.com/problems/add-binary/)

## Description

Given two binary strings `a` and `b`, return *their sum as a binary string*.

**Example 1:**  
Input: `a = "11", b = "1"`  
Output: `100`

**Example 2:**  
Input: `a = "1010", b = "1011"`  
Output: `10101`

**Constraints:**  

- 1 <= `a.length`, `b.length` <= 10^4
- `a` and `b` consist only of '0' or '1' characters.
- Each string does not contain leading zeros except for the zero itself.

## Explanation

The `Number.parseInt()` method can take a string and return an integer in a specified radix, but due to the way the `Number` object is represented (as a 64-bit float), we lose precision for very big numbers. Because our constraints indicate that the binary strings could be as long as 10,000 characters, we must account for dealing with very big numbers!

Luckily, JavaScript introduced the `bigint` primitive in ES6, so we can effectively work with arbitrarily large numbers without losing precision. Values can be declared as a `bigint` primitive by using an `n` suffix.

We can either use a `BigInt` primitive wrapper object to convert the strings and add them together (prefixing each string with `"0b"` to indicate that it represents a binary number), before converting them back into a strong with a radix of 2 using `toString(2)`; or, if the `"0b"` prefix isn't supported, we can loop over the strings and add `2^i` whenever we encounter a `1` character.

### Wrapper approach

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = 0n;
    sum += BigInt("0b" + a);
    sum += BigInt("0b" + b);
    
    return sum.toString(2);
};
```

### Loop approach

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
 let res = 0n;

 res += toInt(a);
 res += toInt(b);

 return res.toString(2)

};

const toInt = s => {
 let sum = 0n;
 for (let i = s.length - 1; i >= 0; i--) {
  if (s[s.length - 1 - i] === "1") sum += BigInt(2 ** i);
 }
 return sum;
}
```
