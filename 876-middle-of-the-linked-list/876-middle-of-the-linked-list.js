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
    var fast = slow = head;
     while(fast !== null && fast.next !== null) {
         slow = slow.next;
         fast = fast.next.next;
     }
    return slow;
};
