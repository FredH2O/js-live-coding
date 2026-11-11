function squareSum(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}
