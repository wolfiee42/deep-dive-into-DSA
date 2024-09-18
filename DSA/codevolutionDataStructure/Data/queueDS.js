// Queue Data Structure

// First In First Out (FIFO)
// A queue of people waiting to enter a bank.
// enqueue(element)
// dequeue
// peek
// length
//  size
//  isEmpty
//  print
// callback queue, printers, cpu task managment.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
console.log(queue.peek());

console.log(queue.size());
queue.print();
