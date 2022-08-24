
class ListNode {
    constructor(val) {
        this.val = val === undefined ? null : val
        this.next = null
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head
    }
    size = () => {
        let head = this.head
        let count = 0
        if (head) {
            count = 1
            while (head.next) {
                count = count + 1
                head = head.next
            }
        }
        return count
    }

    size2 = (head) => {
        let count = 0
        if (head) {
            count = 1
            while (head.next) {
                count = count + 1
                head = head.next
            }
        }
        return count 
    }

    clear = () => {
        this.head = null
    }

    getLast = () => {
        let head = this.head
        if (head && head.next === null)
            return head
        while (head.next) {
            head = head.next
        }
        return head
    }

    getFirst() {
        return this.head;
    }

    swapAdjacentNode = (head) => {
        if (head === null || head.next === null)
            return head
        let node1 = head
        let node2 = head.next

        node1.next = this.swapAdjacentNode(node2.next)
        node2.next = node1

        return node2
    }

    reverseList = (head) => {
        let prev = null
        let curr = head
        while (curr != null){
            let nextTemp = curr.next
            curr.next = prev
            prev = curr
            curr = nextTemp
        }
        return prev
    }

    reverseListRecursive = (head) => {
        if (head === null || head.next === null){
            return head
        }
        console.log(head.next)
        let p = this.reverseListRecursive(head.next)
        head.next.next = head
        head.next = null
        return p
    }

    deleteNode = (node) => {
        let prev = null
        let curr = this.head
        if (node.val === curr.val) {
            prev = curr.next
            curr.next = null
            return prev
        }
        while (curr != null) {
            if(curr.val === node.val){
                prev.next = curr.next
                curr.next = null
                return this.head
            }
            prev = curr
            curr = curr.next
        }
    }

    mergeTwoLists = function(list1, list2) {
        let preHead = new ListNode(-1)
        let list3 = preHead
        while (list1 !== null && list2 !== null){
            if (list1.val <= list2.val) {
                list3.next = list1
                list1 = list1.next
            } else {
                list3.next = list2
                list2 = list2.next
            }
            list3 = list3.next
        }

        list3.next = (list1 == null) ? list2 : list1

        return preHead.next 
    }

    insertNode = function(data, pos){
        let node = new ListNode(data)
        let curr = this.head
        let prev = null
        let index = 0
        if (this.head === null){
            return node
        }
        if (pos === index){
            node.next = this.head
            return node
        }
        while (curr !== null) {
            if (pos === index) {
                prev.next = node
                node.next = curr
                return this.head
            }
            index++
            prev = curr
            curr = curr.next
        }
    }
}

var node1 = new ListNode(1)
var node2 = new ListNode(2)
node1.next = node2
var node3 = new ListNode(3)
node2.next = node3
// var node4 = new ListNode(4)
// node3.next = node4
let list = new LinkedList(node1)
// console.log(list.insertNode(4, 1))

// var node5 = new ListNode(1)
// var node6 = new ListNode(3)
// node5.next = node6
// var node7 = new ListNode(4)
// node6.next = node7


// let swappedList = list.swapAdjacentNode(node1)
// console.log('Swapped list: ', swappedList)

// let deleteList = list.deleteNode(node3)
// console.log('list after delete: ', deleteList)

let reversedList = list.reverseListRecursive(node1)
console.log('Reverse list: ', reversedList)

// let mergedList = list.mergeTwoLists(node1, node5)
// console.log('Merged list: ', mergedList)
// console.log('Merged list size: ', list.size2(mergedList))