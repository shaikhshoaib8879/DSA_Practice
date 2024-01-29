// Q no: 414

// var thirdMax = function (nums) {
//     const arr = Array.from(new Set(nums)).sort((a, b) => b - a);
//     return arr[2] === undefined ? arr[0] : arr[2];
// }


function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}
head = [1,2,6,3,4,5,6] 
val  = 6
let removeElements = function(head, val) {
    let h=new ListNode(-1);
    debugger
    h.next=head;
    head=h;
    while(h.next!==null){
        if(h.next.val===val){
            h.next=h.next.next;
        }
        else{
            h=h.next;
        }
    }
    return head.next;  
};