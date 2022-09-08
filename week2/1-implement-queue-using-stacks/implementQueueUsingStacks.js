
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