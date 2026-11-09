function findAverage(array) {
  // your code here
  if (array.length === 0) return 0;

  const total = array.reduce((acc, number) => {
    return number + acc;
  }, 0);

  return total / array.length;
}
