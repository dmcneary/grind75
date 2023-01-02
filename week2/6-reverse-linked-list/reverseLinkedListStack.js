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