function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise

  let root = Math.sqrt(sq);

  if (!Number.isInteger(root)) {
    sq + 1;
    return -1;
  } else {
    root++;
    return root * root;
  }
}
