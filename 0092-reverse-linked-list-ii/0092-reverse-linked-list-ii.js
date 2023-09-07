/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    //create dummy
    const dummy = {next:head};
    //create previous
    let previous = dummy;
    for (let i = 0; i < left-1; i++)
        previous = previous.next;
    //reverse
    current = previous.next;
    for (let i = 0; i < right - left; i++) {
        let NEXT = current.next;
        current.next = NEXT.next;
        NEXT.next = previous.next;
        previous.next = NEXT;
    }
    return dummy.next;
};