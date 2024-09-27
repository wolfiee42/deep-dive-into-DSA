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
    return this.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}
