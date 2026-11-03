const prices = [10, 25, 5, 40];

function calculateTotal(prices) {
  const totalPrice = prices.reduce((total, price) => {
    return total + price;
  }, 0);

  return totalPrice;
}

console.log(calculateTotal(prices));

module.exports = { calculateTotal };
