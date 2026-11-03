const numbers = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(numbers) {
  const uniqueNumbers = new Set(numbers);
  return [...uniqueNumbers];
}

console.log(removeDuplicates(numbers));
console.log(removeDuplicates([1, 1, 1]));
console.log(removeDuplicates([]));

module.exports = { removeDuplicates };
