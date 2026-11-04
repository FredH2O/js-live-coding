const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
];

function hasExpensiveProduct(products, minPrice) {
  return products.some((item) => item.price > minPrice);
}

console.log(hasExpensiveProduct(products, 500));
