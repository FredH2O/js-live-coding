const numbers = [2, 5, 2, 8, 2, 10, 5];

function countOccurences(numbers, target) {
  return numbers.reduce((count, number) => {
    if (target === number) {
      return count + 1;
    }

    return count;
  }, 0);
}

console.log(countOccurences(numbers, 2));
