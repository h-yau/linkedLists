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

  return { append, prepend, size, head, tail, at };
};
