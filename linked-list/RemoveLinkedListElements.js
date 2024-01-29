//Q no: 203


let removeElements = function(head, val) {
    let h=new ListNode(-1);
    h.next=head;
    head=h;
    while(h.next!==null){
        debugger
        if(h.next.val===val){
            h.next=h.next.next;
        }
        else{
            h=h.next;
        }
    }
    return head.next;  
};

// solution 2 

let removeElementss = function(head, val) {
    let list = new ListNode(0, head),
    prev = list,
    cur = head;
    while (cur){
        if(cur.val == val){
            prev.next = cur.next
        }
        else prev = cur
        cur = cur.next
    }
    return list.next
};