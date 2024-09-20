class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
    this.capacity = capacity;
  }

  isFull() {
    return this.capacity === this.currentLength;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return `Queue is Empty`;
    }
    return this.items[this.front];
  }
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.size());
queue.print();
console.log(queue.isFull());
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
queue.enqueue(60);
queue.print();
