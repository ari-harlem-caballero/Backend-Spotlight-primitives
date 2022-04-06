class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // Implement me!
    //if there is a 
    if(node.data === this.data) {
      return;
    }
    // if node is < data, add to left (if no left node, add)
    if(node.data < this.data) {
      if(!this.left) this.left = node;
      else this.left.add(node);
    // if node is > data, add to left (if no right, add)
    } else {
      if(!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
console.log(B);