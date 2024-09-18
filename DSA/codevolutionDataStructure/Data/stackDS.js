// Stack Data Structure

// Last In First Out (LIFO)
// push
// pop
// peek
// length
// isEmpty
// count
// isfull
// example: javascript runtime stack, History Stack, Undo/Redo Stack, etc.

class Stack {
  constructor(maxSize) {
    this.items = [];
    this.maxSize = maxSize;
  }

  push(element) {
    if (this.items.length < this.maxSize) {
      return this.items.push(element);
    }
    return `Array is full.`;
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    const length = this.items.length;
    return this.items[length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  count() {
    return this.items.length;
  }

  isFull() {
    return this.items.length === this.maxSize;
  }
}

const stack = new Stack(4);

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
// console.log(stack.push(50));
// stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.count());
console.log(stack.isFull());

console.log(stack);
