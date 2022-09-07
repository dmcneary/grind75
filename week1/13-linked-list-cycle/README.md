# Linked List Cycle
Source: [Leetcode](https://leetcode.com/problems/linked-list-cycle/)

## Description
Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.

Return `true` *if there is a cycle in the linked list*. Otherwise, return `false`.

**Example 1:**  
![LL example 1](./circularlinkedlist.png)  
Input: `head = [3,2,0,-4], pos = 1`  
Output: `true`  
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

**Example 2:**  
![LL example 2](./circularlinkedlist_test2.png)  
Input: `head = [1,2], pos = 0`  
Output: `true`  
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

**Example 3:**  
![LL example 2](./circularlinkedlist_test3.png)  
Input: `head = [1], pos = -1`  
Output: `false`
Explanation: There is no cycle in the linked list.

**Constraints:**
- The number of nodes in the tree is in the range [0, 10^4].
- -10^5 <= `Node.val` <= 10^5
- `pos` is `-1` or a **valid index** in the linked-list.

## Explanation
A simple approach would be to add each node to an array, and traverse the list, checking to see if the array contains to node. However, we can also use what is known as a **fast-slow pointer** approach, which utilizes constant memory:

### With an array:
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    const arr = [];
    
    let curr = head;
    
    while (curr) {
        if (arr.indexOf(curr) >= 0) return true;
        arr.push(curr)
        curr = curr.next;
    }
    
    return false;
    
};
```

### With fast-slow pointers:
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	let fast = head
	let slow = head
	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next
		if (fast === slow) return true
	}
	return false
};
```