# Merge Two Sorted Lists
Source: [Leetcode](https://leetcode.com/problems/merge-two-sorted-lists/)

## Description
You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.

**Example 1:**  
![Example 1 diagram](./merge_ex1.jpg)

Input: `list1 = [1,2,4], list2 = [1,3,4]`  
Output: `[1,1,2,3,4,4]`

**Example 2:**  
Input: `list1 = [], list2 = []`  
Output: `[]`

**Example 3:**  
Input: `list1 = [], list2 = [0]`  
Output: `[0]`

**Constraints:**
- The number of nodes in both lists is in the range [0, 50].
- -100 <= `Node.val` <= 100
- Both `list1` and `list2` are sorted in **non-decreasing** order.

## Explanation
This problem is a great introduction to recursion. I'll also show a way to solve the problem using iteration, though it is a bit more verbose.

### With recursion: 
We first handle the edge cases - if one list is empty (`null`) we immediately return the other list (which could also be empty, in which case two concatenated empty lists is the same as one empty list). Otherwise, we compare the values at the head of the two lists. If `list1.val` is less than or equal to `list2.val`, we can continue recursing; otherwise, we need to return a recursive call with the order of the arguments swapped. When the stack empties to the original call, we return the modified `list1`.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
	if (list1 === null) return list2;
	if (list2 === null) return list1;

	if (list1.val <= list2.val) {
		list1.next = mergeTwoLists(list1.next, list2);
	} else {
		return mergeTwoLists(list2, list1);
	}
	
	return list1;
};
```

Still confused? Try to walk it out in pseudocode. I'm going to ditch Leetcode's array representation of lists.
Let's assign `list1 = 1 -> 2 -> 4, list2 = 1 -> 3 -> 4` to start. At the first call, we compare the value of `list1` to that of `list2`, and assign `list1.next` to the result of a recursive call using the rest of `list1` and `list2` as arguments:
```
list1.val = 1 <= list2.val = 1 --> list1.next = mergeTwoLists(2 -> 4, 1 -> 3 -> 4)
```

That call to `mergeTwoLists` above against compares just as before, but now the value of `list1` is greater than that of `list2`:
```
list1.val = 2 > list2.val = 1 --> return mergeTwoLists(1 -> 3 -> 4, 2 -> 4)
```

Now, the value of `list1` is less than that of `list2`, and we can assign a new value to `list1.next` as before:
```
list1.val = 1 <= list2.val = 2 --> list1.next = mergeTwoLists(3 -> 4, 2 -> 4)
```

We again compare values, and need to swap arguments in another call:
```
list1.val = 3 > list2.val = 2 --> return mergeTwoLists(2 -> 4, 3 -> 4)
```

The value of `list1` is less than that of `list2`, and we can assign a new value to `list1.next` as before:
```
list1.val = 2 <= list2.val = 3 --> list1.next = mergeTwoLists(4, 3 -> 4)
```

We're getting closer to the end now, one more swapped call...:
```
list1.val = 4 > list2.val = 3 --> return mergeTwoLists(3 -> 4, 4)
```

...and another assignment to `list1.next`...
```
list1.val = 3 <= list2.val = 4 --> list1.next = mergeTwoLists(4, 4)
```

One last comparison:
...and another assignment to `list1.next`...
```
list1.val = 4 <= list2.val = 4 --> list1.next = mergeTwoLists(null, 4)
```

Now, we've hit the bottom of `list1`, so we just return `list2` and start resolving the call stack (this function returns nodes, but I'll just refer to the node's values for clarity):
```
return 4 ->
	return 4 ->
		return 3 ->
			return 2 ->
				return 1 ->
					return 1
```

### With iteration:
As with the recursive solution, we first handle cases where one or both lists may be empty. We'll want to keep track of the head of the list, since the problem asks us to return it; because objects (like `ListNode`s, for example) that are assigned to new variables are *passed by reference*, we must construct a new `ListNode` object and assign it to `head`, then reference `head` by our iterative variable `curr`. Simply assigning `head` to one of the list arguments won't work. Then, we iterate through the lists, tacking `ListNode`s onto `curr` from either list depending on the result of comparing their values, until we reach the end of either list. Finally, if there are remaining elements in one of the lists we can safely assume that they are greater than all of the elements in our `curr` list (since each list has already been sorted), and we can tack the entire remainder onto `curr`. Remember, `head` refers to a "seed" `ListNode` and we started the merge at `head.next`, so we advance `head` to `head.next` before returning it:

```javascript
var mergeTwoLists = function (list1, list2) {
	if (list1 === null) return list2;
	if (list2 === null) return list1;
    
	let head = new ListNode();
	let curr = head;

	while (list1 && list2) {
		if (list1.val <= list2.val) {
			curr.next = list1;
		    list1 = list1.next;
		} else {
			curr.next = list2;
		    list2 = list2.next;
		}
        
	    curr = curr.next;
	}

	curr.next = list1 || list2;
	head = head.next;
	
	return head;
};
```