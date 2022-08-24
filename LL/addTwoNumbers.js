class ListNode {
    constructor(val) {
        this.val = val === undefined ? null : val
        this.next = null
    }
}

var node1 = new ListNode(2)
var node2 = new ListNode(4)
node1.next = node2
var node3 = new ListNode(3)
node2.next = node3

var node4 = new ListNode(5)
var node5 = new ListNode(6)
node4.next = node5
var node6 = new ListNode(4)
node5.next = node6

const addLists = (l1, l2) => {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    let c = 0
    let sum = 0
    if(l1 === null)
        return l2
    if(l2 === null)
        return l3
    while(l1 !== null || l2 !== null) {
        sum = ((l1.val + l2.val) % 10) + c
        c = parseInt((l1.val + l2.val) / 10)
        curr.next = new ListNode(sum)
        curr = curr.next
        if (l1 != null)
            l1 = l1.next;
        if (l2 != null)
            l2 = l2.next;
    }
    return dummyHead.next
}

console.log(addLists(node1, node4))