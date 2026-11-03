const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
];

function getProductNames(products) {
  const productName = products.map((product) => {
    return product.name;
  });

  return productName;
}

console.log(getProductNames(products));

module.exports = { getProductNames };
