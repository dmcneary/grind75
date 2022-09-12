# Reverse Linked List
Source: [Leetcode](https://leetcode.com/problems/reverse-linked-list/)

## Description
Given the `head` of a singly linked list, reverse the list, and return *the reversed list*.

**Example 1:**  
Input: `head = [1,2,3,4,5]`  
Output: `[5,4,3,2,1]`

**Example 2:**  
Input: `head = [1,2]`  
Output: `[2,1]`  

**Example 3:**  
Input: `[]`  
Output: `[]`

**Constraints:**  
- The number of nodes in the list is the range [0, 5000].
- -5000 <= `Node.val` <= 5000

## Explanation
One solution is to use a stack to assist with reconstructing the linked list in reverse; however, the linked list can also be reversed in place, by using pointers:

### Pointer approach
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
var reverseList = function (head) {
	if (!head) return head;

	let prev = next = null;

	while (head) {
		next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
};
```

### Stack approach
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
var reverseList = function (head) {
	if (!head) return head;
	const stack = [];
	let curr = head;

	while (curr.next) {
		const node = new ListNode(curr.val)
		stack.push(node);
		curr = curr.next;
	}

	stack.push(curr);

	for (let i = stack.length - 1; i > 0; i--) {
		stack[i].next = stack[i - 1];
	}
	stack[0].next = null;

	return curr;
};
```