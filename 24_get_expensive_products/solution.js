const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
];

function getExpensiveProducts(products) {
  if (products.length === 0) return [];

  return products.filter((product) => product.price > 100);
}

console.log(getExpensiveProducts(products));
