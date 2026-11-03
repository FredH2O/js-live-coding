const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
];

function getProductByName(products, productName) {
  if (products.length === 0) return 0;

  return products.find((product) => product.name === productName);
}

console.log(getProductByName(products, "Laptop"));
