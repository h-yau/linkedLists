const LinkedList = (headNode) => {
  return { headNode };
};

const Node = (value, next) => {
  if (!value) value = null;
  if (!next) value = null;
  return { value, next };
};
