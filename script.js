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
      let temp = headNode;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
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
      temp = headNode.next;
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
  };
};
