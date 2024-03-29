class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(newNodeValue, targetNodeValue) {
    // if list is empty
    if (this.head === null) {
      return null;
    }

    /* Loop though list to track current and previous nodes
    If a node whose value === targetNodeValue, that node is
    the current Node and the one before it is the previous Node */

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== targetNodeValue) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    // The item isn't found at the end of the list
    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    const newNode = new _Node(newNodeValue, currNode);

    previousNode.next = newNode;
  }

  insertAfter(newNodeValue, targetNodeValue) {
    // if list empty
    if (this.head === null) {
      return null;
    }

    const targetNode = this.find(targetNodeValue);

    if (targetNode === null) {
      return null;
    }

    const nextNode = targetNode.next;

    const newNode = new _Node(newNodeValue, nextNode);

    targetNode.next = newNode;
  }

  insertAt(newNodeValue, targetPosition) {
    // if list empty
    if (this.head === null) {
      return null;
    }

    // add a new node at the begining
    if (targetPosition === 0) {
      const newNode = new _Node(newNodeValue, this.head);
      this.head = newNode;
      return;
    }

    let prevNode = null;
    let currNode = this.head;
    let currNodePosition = 0;

    // while list is not empty

    while (currNodePosition !== targetPosition && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
      currNodePosition++;
    }

    // targetPosition does not exist in list then return null
    if (currNode === null && currNodePosition !== targetPosition) {
      return null;
    }

    const newNode = new _Node(newNodeValue, currNode);
    prevNode.next = newNode;
  }
}

module.exports = LinkedList;
