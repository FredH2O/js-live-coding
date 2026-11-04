const products = [
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 60 },
  { name: "USB Cable", price: 10 },
  { name: "Webcam", price: 45 },
];

function areAllProductsAffordable(products, maximumPrice) {
  return products.every((product) => product.price <= maximumPrice);
}

console.log(areAllExpensive(products, 50)); // false
console.log(areAllExpensive(products, 100)); // true
