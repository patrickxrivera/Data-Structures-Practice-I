/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the queue is storing
  3. Add an `enqueue` method that accepts an item as input and adds it to the storage structure
  4. Add a `dequeue` method that removes the item in the queue that was added earliest
*/

class Queue {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  size() {
    return this.size;
  }

  enqueue(val) {
    this.storage.push(val);
    this.size++;
  }

  dequeue() {
    const poppedVal = this.storage.shift();

    if (this.isNotEmpty()) {
      this.size--;
    }

    return poppedVal;
  }

  isNotEmpty() {
    return this.size > 0;
  }
}

module.exports = Queue;
