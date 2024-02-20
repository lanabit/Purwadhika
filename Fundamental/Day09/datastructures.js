function abandon(){
/*
//Last In, First Out -> LIFO
//First In, First Out -> FIFO

class Stack {
  maxSize = 3;
  container = [];
  push(data) {
    if(this.container.length < this.maxSize){
      this.container.push(data)
    }
  }
  pop() {
    this.container.pop()
  }
  shift() {
    this.container.shift()
  }
}

let newStack = new Stack() 
newStack.push('Page-01')
newStack.push('Page-02')
newStack.push('Page-03')
newStack.pop()
newStack.push('Page-04')
newStack.push('Page-05')
console.log(newStack)
newStack.shift();
console.log(newStack)

//SET

const fruits = ["Banana","Orange", "Starfruit"];

const newFruits = new Set(fruits) 
newFruits.add('Banana')
newFruits.add('banana')
newFruits.add('Durian')
console.log(newFruits.has('Banana'))
//newFruits.clear()
const a = newFruits.entries()
console.log("a =", a)
console.log(newFruits)

const campus = ['BSD', 'JKT', 'BDG']
const setCampus = new Set(campus)
const campusEntries = setCampus.entries() // create an OBJECT that contains ARRAYS. The ARRAY contains [VALUE, VALUE]
console.log("campus entries",campusEntries)

// let text = ''
// for (const entry of campusEntries) {
//   text += entry
// }


setCampus.forEach((item) => {
  console.log(item)
})

for (let i of campusEntries) {
  console.log('i',i)
}
*/}

//LINKED LIST

const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        }
      }
    }
  }
};

//console.log(list.head.next.next.next.next)

//Implementation example

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    //create a new node
    let node = new Node(element);

    //to store current node
    let current;

    // if list is empty, add the element and make it head
    if(this.head == null) {
      this.head = node;
    }else {
      current = this.head;
    
    // iterate to the end of the list 
    // (end) is when (next === null)
    while(current.next) {
      current = current.next;
    }

    current.next = node;
  }
  this.size += 1;
  }

  printList() {
    let curr = this.head;
    while(curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  insertAt(element, index){
    if(index < 0 || index > this.size) {
      return console.log("Please enter a valid index");
    }else {
      //creates a new node
      const node = new Node(element);
      let curr = this.head;

      //add element to the first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let prev;
        let it = 0;

        while(it < index) {
          it++
        }

        for (let i = 0; i < index; i++) {
          prev = curr;
          curr = curr.next;
        }

        prev.next = node;
        node.next = curr;
      }

      this.size += 1;
    }
  }

  removeElement(element) {
    let current = this.head;
    let prev = null;

    while(current != null) {
      if(current.element === element) {
        if(prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }

        this.size -= 1;

        return current.element;
      }

      prev = current;
      current = current.next;
    } 

    return null;
  }

  removeAt(index){
    if(index<0 || index >= this.size){
      return console.log("Please enter a valid index");
    } else {
      let curr = this.head;
      let prev = curr;

    //deleting first element
    if (index === 0){
      this.head = curr.next;
    } else {
      for(let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }

    this.size -= 1;

    return curr.element;
  }
}
  //finds the index of element
  indexOf(element){
    let count = 0;
    let current = this.head;

    // iterate over the list
    while (current != null){
      // compare each element of the list with given element
      if(current.element === element) {
        return count;
      }

      count += 1;
      current = current.next;
    }

    //not found
    return -1;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.add('A');
myLinkedList.add('B');
myLinkedList.insertAt("NewValue",1)
myLinkedList.add('X');
myLinkedList.removeAt(2)
myLinkedList.removeElement('X')
myLinkedList.printList();
console.log("indexOf('A') =",myLinkedList.indexOf('A'))
console.log(myLinkedList)