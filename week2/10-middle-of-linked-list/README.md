# Middle of the Linked List
Source: [Leetcode](https://leetcode.com/problems/middle-of-the-linked-list/)

## Description
Given the `head` of a singly linked list, *return the middle node of the linked list*.

If there are two middle nodes, return **the second middle** node.

**Example 1:**  
![Example 1](./midlist1.jpg)
Input: `head = [1,2,3,4,5]`  
Output: `[3,4,5]`  
Explanation: The middle node of the list is node 3.

**Example 2:**  
![Example 2](./midlist2.jpg)  
Input: `head = [1,2,3,4,5,6]`  
Output: `[4,5,6]`  
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

**Constraints:**  
- The number of nodes in the tree is in the range [1, 100].
- -100 <= `Node.val` <= 100

## Explanation
We can use the Two Pointer method to solve this problem, traversing the linked list and incrementing a `fast` pointer at twice the rate of a `slow` pointer. When the `fast` pointer reaches the end, we return `slow`. Because the length of the linked list may be even or odd, we must check to see if the `fast` pointer has enough nodes ahead of it to re-assign to `fast.next.next` - if not, we simply advance to `fast.next` which will break the condition of the `while` loop and return the `slow` node.

I use a double ternary expression to check for nodes ahead of `fast`, but one could also edit the condition of the `while` loop to check for `fast && fast.next` and set the `fast` reassignment in the body to `fast.next.next`.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = fast = head;

    while (fast.next) {
        slow = slow.next;
        fast = fast.next.next ? fast.next.next : fast.next ? fast.next : fast;
    }

    return slow;
};
```
```