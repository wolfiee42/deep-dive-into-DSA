class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //   checking whether it's empty or not
  isEmpty() {
    return (this.root = null);
  }

  //   inserting value
  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      newNode = this.root;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, node) {
    if (root > node) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.right, value);
      } else {
        return this.search(root.left, value);
      }
    }
  }

  preOrder(root) {
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root) {
    if (root) {
      this.inOrder(this.left);
      console.log(root.value);
      this.inOrder(this.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}
