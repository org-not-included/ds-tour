var reverseList = (head) => {
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

var reverseListRecursive = (head) => {
    if (head === null || head.next === null){
        return head
    }
    let p = reverseListRecursive(head.next)
    head.next.next = head
    head.next = null
    return p
}