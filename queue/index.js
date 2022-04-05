class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

}

const newStack = new Stack();
newStack.push('fox');
newStack.push('goose');
newStack.push('lizard');
newStack.pop();

console.log(newStack);