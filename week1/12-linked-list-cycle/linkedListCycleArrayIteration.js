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

	const arr = [];

	let curr = head;

	while (curr) {
		if (arr.indexOf(curr) >= 0) return true;
		arr.push(curr)
		curr = curr.next;
	}

	return false;

};