const LinkedList = require("./linkedList02");

class linkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const stack = new linkedListStack();
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.getSize());
stack.print();

stack.pop();
stack.print();

console.log(stack.peek());
