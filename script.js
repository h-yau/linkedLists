const Node = (value = null, next = null) => {
  return { value, next };
};

const LinkedList = () => {
  let headNode = null;

  const getHeadNode = () => {
    return headNode;
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

    // just to confirm the new node that is created
    return newNode;
  };

  const prepend = (value) => {
    const newNode = Node(value, headNode);
    headNode = newNode;

    // just to confirm the new node that is created
    return headNode;
  };

  return { getHeadNode, append, prepend };
};
