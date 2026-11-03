const fruits = ["apple", "orange", "apple", "blueberry", "grapes"];
const numbers = [5, 10, 5, 15, 25, 5];

function countOccurrences(fruits, fruitToCompare) {
  const duplicates = fruits.filter((fruit) => {
    return fruit === fruitToCompare;
  });

  return duplicates.length;
}

console.log(countOccurrences(fruits, "apple"));

module.exports = { countOccurrences };
