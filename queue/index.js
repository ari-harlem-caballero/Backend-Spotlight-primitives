class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

}

const newStack = new Stack();
newStack.push('fox');

console.log(newStack);