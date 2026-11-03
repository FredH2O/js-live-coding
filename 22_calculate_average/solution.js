const prices = [10, 20, 30, 40, 50];

function calculateAverage(prices) {
  if (prices.length === 0) return 0;

  const averagePrice = prices.reduce((total, price) => total + price, 0);

  return averagePrice / prices.length;
}

console.log(calculateAverage(prices));
console.log(calculateAverage([10, 22, 44, 22, 33, 55, 100]));

module.exports = { calculateAverage };
