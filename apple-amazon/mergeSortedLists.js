var mergeTwoLists = function(list1, list2) {
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

var mergeTwoListsR = function(list1, list2) {
    if (list1 === null)
        return list2
    
    if (list2 === null)
        return list1
    
    if (list1.val <= list2.val) {
        list1.next = mergeTwoListsR(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoListsR(list2.next, list1)
        return list2
    }
};

