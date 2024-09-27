const LinkedList = require("./linkedList02");

class linkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromEnd();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.size();
  }

  peek() {
    return this.list.head.value;
  }

  print() {
    return this.list.print();
  }
}
