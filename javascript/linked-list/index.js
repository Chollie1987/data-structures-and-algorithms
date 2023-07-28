'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  traversalCheatSheet() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  altTraversalCheatSheet() {
    /// return the last node of the list or something... count them??
    let current = this.head;
    if (!current) return;
    while (current.next) {
      // conditional chaining
      current = current.next;
    }
    return current;
  }

  // insert
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // includes
  includes(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) return true;
      current = current.next;
    }
    return false;
  }

  // toString
  // "{ a } -> { b } -> { c } -> NULL"
  toString() {
    if (!this.head) return 'NULL';
    let current = this.head;
    let returnStr = '';
    while (current) {
      // look at the node.value "{ a } -> "
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    // once we exit the loop we need to tack NULL on to the end
    returnStr += 'NULL';
    return returnStr;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(checkedValue, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) return (this.head = newNode);
    if (this.head.value === checkedValue) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current) {
      if (current.next.value === checkedValue) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(checkedValue, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) return (this.head = newNode);
    let current = this.head;

    while (current) {
      if (current.value === checkedValue) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
  }

  kthFromEnd(k) {
    let length = 0;
    let num;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    num = length - k;
    current = this.head;
    while (num >= 0) {
      if (!num) return current.value;
      num--;
      current = current.next;
    }
    return null;
  }
  zipList(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let headOne = list1;
    let headTwo = list2;

    while (headOne && headTwo) {
      const LLOne = headOne.next;
      headOne.next = headTwo;
      headOne = LLOne;

      const LLTwo = headTwo.next;
      headTwo.next = headOne;
      headTwo = LLTwo;
    }
    return list1;
  }
}

module.exports = { LinkedList, Node };
