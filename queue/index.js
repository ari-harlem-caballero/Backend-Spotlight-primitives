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

  get length() {
    return this.stack.length;
  }

  peek() {
    return this.stack[this.length - 1];
  }


}

const newStack = new Stack();
newStack.push('fox');
newStack.push('goose');
newStack.push('lizard');
newStack.pop();
newStack.peek();
newStack.pop();
newStack.push('llama');
newStack.pop();
newStack.peek();
newStack.pop();

console.log(newStack);