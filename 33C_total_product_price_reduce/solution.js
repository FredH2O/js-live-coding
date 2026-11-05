const products = [
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
];

function calculateTotalPrice(products) {
  if (products.length === 0) return 0;

  return products.reduce((count, item) => {
    return item.price + count;
  }, 0);
}

console.log(calculateTotalPrice(products));
console.log(calculateTotalPrice([]));
