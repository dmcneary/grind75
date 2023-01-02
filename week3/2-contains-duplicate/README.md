# Contains Duplicate
Source: [Leetcode](https://leetcode.com/problems/contains-duplicate/)

## Description
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**  
Input: `nums = [1,2,3,1]`  
Output: `true`  

**Example 2:**  
Input: `nums = [1,2,3,4]`  
Output: `false`

**Example 3:**  
Input: `nums = [1,1,1,3,3,4,3,2,4,2]`  
Output: `true`

**Constraints:**
- 1 <= `nums.length` <= 10^5
- -10^9 <= `nums[i]` <= 10^9


## Explanation
We can utilize JavaScript's built-in `Set` object and iterate over `nums`; if the element is absent from the `Set`, we add it; if the element is already present in the `Set` then `Set.add(element)` has no effect. We then compare the length of the `Set` to that of `nums` and return whether or not they are _not_ equal (since we are checking if `nums` _does_ contain duplicates):

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    
    for (const num of nums) {
        set.add(num);
    }

    return nums.length !== set.size;
};
```