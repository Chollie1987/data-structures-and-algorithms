'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class Stack {
  constructor(top = null) {
    this.top = top;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = null;
  }

  toString() {
    if (!this.top) return 'NULL';
    let current = this.top;
    let rtnStr = '';
    while (current) {
      rtnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    return rtnStr + 'NULL';
  }

  isEmpty() {
    return this.top === null;
  }

  push(value) {
    const current = new Node(value);
    current.next = this.top;
    this.top = current;
  }

  pop() {
    const current = this.top;
    this.top = current.next;
    current.next = null;
    return current;
  }

  peek() {
    if (this.top === null) {
      return this.top.value;
    }
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('no front');
    const current = this.front;
    this.front = current.next;
    current.next = null;
    return current;
  }
}
module.exports = { Node, Stack, Queue };
