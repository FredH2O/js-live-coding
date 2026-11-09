const products = [
  { name: "Mouse", quantity: 5 },
  { name: "Keyboard", quantity: 3 },
  { name: "Monitor", quantity: 7 },
  { name: "USB Cable", quantity: 10 },
];

function calculateTotalQuantity(products) {
  return products.reduce((accumulator, product) => {
    return accumulator + product.quantity;
  }, 0);
}

console.log(calculateTotalQuantity(products)); // 25
console.log(calculateTotalQuantity([])); // 0
