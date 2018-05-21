/* eslint-disable class-methods-use-this */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
    this.pointer = null;
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    if (this.isEmpty()) {
      this.head = new Node(value);
      this.tail = new Node(value);
      this.pointer = this.head;
      return;
    }

    this.pointer.next = new Node(value);
    this.pointer = this.pointer.next;
    this.tail = new Node(value);
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const removedValue = this.head.value;
    this.head = this.head.next;

    return removedValue;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value, curr = this.head) {
    if (value === curr.value) return true;

    return curr.next === null ? false : this.contains(value, curr.next);
  }

  forEach(fn, curr = this.head) {
    if (curr !== null) {
      fn(curr);

      if (curr.next === null) {
        fn(this.tail);
      }

      return this.forEach(fn, curr.next);
    }

    return;
  }

  isEmpty() {
    return this.head === null;
  }
}

module.exports = LinkedList;
