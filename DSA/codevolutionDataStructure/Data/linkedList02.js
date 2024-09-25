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
