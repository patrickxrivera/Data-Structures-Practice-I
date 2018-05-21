/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/

class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
    this.peekErrorMsg = 'The stack is empty';
  }

  size() {
    return this.size;
  }

  push(val) {
    this.storage.push(val);

    this.size++;
  }

  pop() {
    const poppedVal = this.storage.pop();

    if (this.isNotEmpty()) {
      this.size--;
    }

    return poppedVal;
  }

  peek() {
    if (this.isEmpty()) {
      return this.peekErrorMsg;
    }

    const idx = this.getIdx();
    return this.storage[idx];
  }

  until(targetVal) {
    let count = 1;

    for (let i = this.getIdx(); i >= 0; i--) {
      const currVal = this.storage[i];

      if (currVal === targetVal) {
        return count;
      }

      count++;
    }
  }

  getIdx() {
    return this.size - 1;
  }

  isEmpty() {
    return this.size <= 0;
  }

  isNotEmpty() {
    return !this.isEmpty();
  }
}

module.exports = Stack;
