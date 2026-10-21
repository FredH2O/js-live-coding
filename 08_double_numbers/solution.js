const numbers = [2, 4, 6, 8];

function doubleNumbers(num) {
  return num.map((num) => num * 2);
}

console.log(doubleNumbers(numbers));
console.log([5, 10]);
console.log([]);

module.exports = { doubleNumbers };
