function oddOrEven(array) {
  //enter code here

  if (!array) return [0];

  let total = array.reduce((acc, num) => {
    return acc + num;
  }, 0);

  return total % 2 ? "odd" : "even";
}
