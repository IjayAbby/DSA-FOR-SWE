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
function middleNode(head) {
    var fast = head;
    var slow = head;
     while(slow !== null && slow.next !== null) {
         fast = fast.next;
         slow = slow.next.next;
     }
    return fast;
};