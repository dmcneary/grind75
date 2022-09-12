# Climbing Stairs
Source: [Leetcode](https://leetcode.com/problems/climbing-stairs/)

## Description
You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Example 1:**  
Input: `n = 2`  
Output: `2`  
Explanation: There are two ways to climb to the top:
1. 1 step + 1 step
2. 2 steps

**Example 2:**  
Input: `n = 3`  
Output: `3`  
Explanation : There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

**Constraints:**  
- 1 <= `n` <= 45

## Explanation
We can use a sort of slow + fast pointers solution here; first, we must take care of a few base cases. If there is only one step, there is only one way to climb that first step. Otherwise, we initialize our `fast` and `slow` pointers to `2` and `1` respectively. From there, we can iterate over the range `[3, n]` and reassign the `slow` pointer to the value of the `fast` pointer, after assigning the sum of the values of the two pointers to a `temp` variable. We finally assign the value of the `temp` variable to the `fast` pointer. This is the same basic idea of calculating a Fibonacci sequence in-place, using a loop with no extra memory:

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    let slow = 1, fast = 2;

    for (let i = 3; i <= n; i++) {
        let temp = slow + fast;
        slow = fast;
        fast = temp;
    }

    return fast;

};
```