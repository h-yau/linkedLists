const Node = (value = null, next = null) => {
  return { value, next };
};

const LinkedList = () => {
  let headNode = null;
  let tailNode = null;
  let listSize = 0;

  const size = () => {
    return listSize;
  };

  const head = () => {
    return headNode;
  };

  const tail = () => {
    return tailNode;
  };

  const append = (value) => {
    const newNode = Node(value);

    if (!headNode) {
      headNode = newNode;
    } else {
      tailNode.next = newNode;
    }

    tailNode = newNode;
    listSize++;
  };

  const prepend = (value) => {
    const newNode = Node(value, headNode);
    headNode = newNode;
    listSize++;
  };

  const at = (index) => {
    if (index >= listSize || index < 0) {
      return null;
    }
    let temp = headNode;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  };

  const pop = () => {
    if (!headNode) return;

    if (!headNode.next) {
      headNode = null;
      tailNode = null;
      listSize--;
      return;
    }

    let temp = headNode;
    while (temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
    tailNode = temp;
    listSize--;
    return;
  };

  const contains = (target) => {
    let temp = headNode;
    let index = 0;
    while (temp) {
      if (temp.value == target) return true;
      index++;
      temp = temp.next;
    }
    return false;
  };

  const find = (target) => {
    let temp = headNode;
    let index = 0;
    while (temp) {
      if (temp.value == target) return index;
      index++;
      temp = temp.next;
    }
    return null;
  };

  const toString = () => {
    let stringToPrint = '';

    let temp = headNode;

    while (temp) {
      stringToPrint += temp.value + ' => ';
      temp = temp.next;
    }
    stringToPrint += 'null';

    console.log(stringToPrint);
  };

  const insertAt = (value, index) => {
    if (index > listSize || index < 0) {
      console.error('Invalid index for insertion');
      return;
    }

    if (index == 0) {
      prepend(value);
      return;
    } else if (index == listSize) {
      append(value);
      return;
    } else {
      let temp = headNode;
      let currentIndex = 0;
      while (temp) {
        if (currentIndex == index - 1) {
          const newNode = Node(value, temp.next);
          temp.next = newNode;
          break;
        }
      }
      temp = temp.next;
      listSize++;
    }

    return;
  };

  const removeAt = (index) => {
    if (index < 0 || index >= listSize) {
      console.error('Invalid index for removal');
      return;
    }

    if (index == 0) {
      headNode = headNode.next;
      listSize--;
      return;
    } else if (index == listSize - 1) {
      pop();
      return;
    } else {
      let temp = headNode;
      let currentIndex = 0;
      while (temp && currentIndex < index - 1) {
        temp = temp.next;
        currentIndex++;
      }

      const pointer = temp.next;
      temp.next = temp.next.next;
      pointer.next = null;

      listSize--;
      return;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

// test

const list1 = LinkedList();

list1.append(1);
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();

list1.append(2);
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();

list1.prepend(3);
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();

list1.pop();
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();

console.log('Contains 2 (expect false):', list1.contains(2)); //expect false
console.log('Contains 3 (expect true):', list1.contains(3)); // expect true

list1.insertAt(5, 5); // expect error
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();

list1.insertAt(10, 2);
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();

list1.insertAt(0, 0);
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();

list1.insertAt(50, 1);
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();

console.log('Contains 50:', list1.contains(50));

console.log('Find 50:', list1.find(50));

list1.removeAt(10); //expect error
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();

list1.removeAt(3);
console.log(list1.size(), list1.head(), list1.tail());
list1.toString();
