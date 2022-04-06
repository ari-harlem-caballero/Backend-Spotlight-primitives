class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // Implement me!
    //if there is a node equals data
    if(node.data === this.data) return;
    // if node is < data, add to left (if no left node, add)
    const dir = node.value < this.value ? 'left' : 'right';
    if(!this[dir]) this[dir] = node;
    // if node is > data, add to left (if no right, add)
    else this[dir].add(node);
  }

  findPerson(name) {
    // Implement me!
  }
}

// "root" is the node at the root of the tree (the tree)
let person = root.find('Nelson');
// person looks like
// { 
//   name: 'Nelson', 
//   phone: '555-1212', 
//   address: '123 Main St' 
// }

let person2 = root.find('Foo');
// person2 is null