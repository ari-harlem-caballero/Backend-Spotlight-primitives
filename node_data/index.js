// create class of LinkedListNode
// LLN holds data, adds node with next property (recursion)

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  //add function to add new node with next property
  add(node) {
    if(!this.next) {
      this.next = node;
    } else {
      this.next.add(node);
    }
  }
}



const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
const nodeC = new LinkedListNode('C');
root.add(nodeC); // 'A B'
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeD);
root.add(nodeE);
console.log(root); // 'A B'