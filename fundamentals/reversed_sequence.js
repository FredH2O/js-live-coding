const reverseSeq = (n) => {
  let numbers = Array.from({ length: n }, (v, i) => {
    return n - i;
  });

  return numbers;
};
