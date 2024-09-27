const LinkedList = require("./linkedList02");

class linkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.getSize();
  }

  peek() {
    return this.list.head.value;
  }

  print() {
    return this.list.print();
  }
}

const queue = new linkedListQueue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
console.log(queue.size());

queue.dequeue();
queue.print();

console.log(queue.peek());
