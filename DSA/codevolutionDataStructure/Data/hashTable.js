class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    // approach 01 - wrong // in this business logic, we are overwriting the value of the same key in the table with the new value in the same index which is not good.
    // this.table[index] = value;

    //approach 02 - right
    const bucket = this.table[index];
    if (!bucket) {
      bucket = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    // approach 01 - wrong // in this business logic, we are returning the value of the same key in the table with the new value in the same index which is not good.
    // const index = this.hash(key);
    // return this.table[index];

    //approach 02 - right
    const index = this.hash(key);

    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    // approach 01 - wrong // in this business logic,
    // const index = this.hash(key);
    // this.table[index] = undefined;

    //approach 02 - right
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "saif");
table.set("age", 23);
table.display();

console.log(table.get("name"));

table.set("mane", "clark");
table.display();
