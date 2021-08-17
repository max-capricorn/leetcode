// 判断两个单向链表是否相交
//L1 = 1->2->3->4->5->6->-8
//l2 = 9->-10->11->5->6->8
//返回true

function List (x) {
  this.val = x;
  this.next = null;
}

var FindFirstCommonNode = function (headA, headB) {
  var h1 = headA
  var h2 = headB
  while (h1 !== h2) {
    h1 = h1 ? h1.next : headB
    h2 = h2 ? h2.next : headA
  }
  return !!h1
}

const l1 = new List(1)
l1.next = new List(2)
l1.next.next = new List(3)
l1.next.next.next = new List(4)
l1.next.next.next.next = new List(5)

const l2 = new List(9)
l2.next = new List(12)
l2.next.next = new List(3)
l2.next.next.next = new List(4)
l2.next.next.next.next = new List(5)

console.log('FindFirstCommonNode(l1, l2): ', FindFirstCommonNode(l1, l2));


