class PersonTreeNode {
  constructor(person) {
    this.data = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // Implement me!
    //if there is a node equals data
    if(node.data === this.data) return;
    // if node is < data, add to left (if no left node, add)
    const dir = node.data < this.data ? 'left' : 'right';
    if(!this[dir]) this[dir] = node;
    // if node is > data, add to left (if no right, add)
    else this[dir].add(node);
  }

  findPerson(name) {
    // !!! TRIED TO FOLLOW MARTY'S DEMO AND THIS DOESN'T MAKE SENSE TO ME !!!
    // !!! WILL NEED TO RETURN TO!!!!!!!
    // if data of instance = name of person, return person's info
    if(this.data === name) return this.person;
    // set left/right
    const dir = node.data < this.data ? 'left' : 'right';
    // if no node return null
    if(!this[dir]) return null;
    // if node, return left/right
    return this[dir].findPerson(name);
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