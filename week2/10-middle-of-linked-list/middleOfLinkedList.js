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