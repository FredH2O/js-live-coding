const numbers = [10, 20, 5, 15];

function sumNumbers(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((currentItem, nextItem) => {
    return currentItem + nextItem;
  }, 0);
}

console.log(sumNumbers(numbers));
console.log(sumNumbers([5, 5, 5]));
console.log(sumNumbers([]));
