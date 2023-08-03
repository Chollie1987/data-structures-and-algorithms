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
}
module.exports = { Node, Stack };
