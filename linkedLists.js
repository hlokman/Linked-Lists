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

  at(index) {
    if (index > this.length || index < 0) {
      return "No element with this index was find";
    }
    let pointer = this.head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }

  pop() {
    if (this.head == null) {
      return "No element to erase";
    }
    if (this.length == 1) {
      this.head = null;
      this.length--;
    } else {
      this.at(this.size() - 2).nextNode = null;
      this.length--;
    }
  }

  contains(value) {
    /*if (this.head == null) {
      return false;
    }*/
    let pointer = this.head;
    for (let i = 0; i < this.length; i++) {
      if (pointer.value == value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }

  find(value) {
    let pointer = this.head;
    for (let i = 0; i < this.length; i++) {
      if (pointer.value == value) {
        return i;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }

  toString() {
    let string = "";
    let pointer = this.head;
    for (let i = 0; i < this.length; i++) {
      string += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    return (string += "null");
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

/*
let list = new LinkedList();
list.append(5);
list.append(7);
list.append(9);
list.prepend(2);
*/
