/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var listOne = new ListNode(0);
    var listTwo = new ListNode(0);
    var now1 = listOne;
    var now2 = listTwo;
    var now = head;
    
    while(now) {
        if(now.val < x) {
            now1.next = now;
            now1 = now1.next;
        } else {
          now2.next = now;
            now2 = now2.next;
        }
        now = now.next; 
    }
    now1.next = listTwo.next;
    now2.next = null;
    
    return listOne.next;
};