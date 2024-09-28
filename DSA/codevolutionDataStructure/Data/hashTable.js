class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = this.size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
}

const table = new HashTable(50);
