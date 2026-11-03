const prices = [10, 20, 30, 40];

function sumNumbers(prices) {
  const totalFullPrice = prices.reduce((total, price) => {
    return total + price;
  }, 0);

  return totalFullPrice;
}

console.log(sumNumbers(prices));
console.log(sumNumbers([5, 5, 25]));
console.log(sumNumbers([]));

module.exports = { sumNumbers };
