//Q no. 206
var reverseList = function(head) {
    let current = head;
    let previous = null;
    let next = null;
    while(current != null){
        next = current.next
        current.next = previous
        previous = current
        current = next
    }
    return previous
    
};