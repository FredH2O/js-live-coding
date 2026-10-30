const numbers = [1, 2, 3, 4, 5, 6];

function groupNumbers(numbers) {
  const grouped = {
    even: [],
    odd: [],
  };

  for (const number of numbers) {
    if (number % 2 === 0) {
      grouped.even.push(number);
    } else {
      grouped.odd.push(number);
    }
  }

  return grouped;
}

console.log(groupNumbers(numbers));

module.exports = { groupNumbers };
