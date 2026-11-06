const products = [
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
];

function calculateAveragePrice(products) {
  if (products.length === 0) return 0;

  const total = products.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  return total / products.length;
}

console.log(calculateAveragePrice(products));
