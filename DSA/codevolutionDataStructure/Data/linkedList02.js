class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      // 1. the existing head will be in number 2.
      node.next = this.head;
      // 2. the coming node is becoming number 1.
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value}`;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
