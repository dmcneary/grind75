# Implement Queue using Stacks
Source: [Leetcode](https://leetcode.com/problems/implement-queue-using-stacks/)

## Description
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the `MyQueue` class:
- `void push(int x)` Pushes element x to the back of the queue.
- `int pop()` Removes the element from the front of the queue and returns it.
- `int peek()` Returns the element at the front of the queue.
- `boolean empty()` Returns `true` if the queue is `empty`, false otherwise.

Notes:
- You must use **only** standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.
- Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

**Example 1:**  
Input: `["MyQueue", "push", "push", "peek", "pop", "empty"]  
[[], [1], [2], [], [], []]`
Output: `[null, null, null, 1, 1, false]`  
Explanation:
```javascript
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

**Constraints:**  
- 1 <= `x` <= 9
- At most 100 calls will be made to `push`, `pop`, `peek`, and `empty`.
- All the calls to `pop` and `peek` are valid.

## Explanation
For this exercise, your solution will be language-dependent,. In JavaScript, we can simply use arrays for our Stack data structure, so long as we only use the `push()` and `pop()` methods and the `length` property.

For the `push()` method, we can treat the queue as a general array; all new elements are added to the 'end' of the queue, just as a regular array's `push()` mnethod.

For the `pop()` method, since queue's `pop` from the front rather than the back, we must use another stack as temporary storage and `push` onto the stack every `popped` element from the queue. Once all elements from the queue are in reversed order in the stack, we simply `pop` the last element off the stack, store it in a variable, and reverse the above process (`pushing` every `popped` element from the stack back into the queue).

`peek()` works similarly to `pop()`, except that we must make sure that the front-most element in the queue gets put back into its proper place. We proceed as with the `pop()` method, and save the front-most element in a variable again. We then store a *reference* to that variable in another variable, and `push` everything back into the queue in the correct order. Then, we simply return the variable containing the reference to the front-most element.

`empty()` is easy; we simply check the length of the queue and return a boolean accordingly.

```javascript
var MyQueue = function () {
	this.queue = [];
	this.stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
	this.queue.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function () {
	while (this.queue.length > 0) {
		this.stack.push(this.queue.pop());
	}
	const popped = this.stack.pop();
	while (this.stack.length > 0) {
		this.queue.push(this.stack.pop());
	}
	return popped;
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function () {
	let peeked, temp;
	while (this.queue.length > 0) {
		this.stack.push(this.queue.pop());
	}
	temp = this.stack.pop();
	peeked = temp;
	this.queue.push(temp);
	while (this.stack.length > 0) {
		this.queue.push(this.stack.pop());
	}
	return peeked;
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
	return (this.queue.length === 0) ? true : false;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
```