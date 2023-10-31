class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    //this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    this.length++;
    if (this.head == null) {
      return (this.head = newNode);
    }
    let pointer = this.head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode; //redirect until pointer.nextNode == null
    }
    pointer.nextNode = newNode; //when pointer.nextNode == null -> assign the newNode appended to pointer.nextNode (which become de facto the last one with nextNode = null)
  }

  prepend(value) {
    const newNode = new Node(value);
    this.length++;
    if (this.head == null) {
      // if we use .prepend while list is empty
      return (this.head = newNode);
    }
    newNode.nextNode = this.head; //!
    this.head = newNode;
  }

  size() {
    return this.length;
  }

  findHead() {
    return this.head;
  }

  tail() {
    let pointer = this.head;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode; //same logic as append(value)
    }
    return pointer;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
