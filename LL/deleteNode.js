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
            console.log('this.head', this.head)
            console.log('prev', prev)
            return this.head
        }
        prev = curr
        curr = curr.next
    }
}