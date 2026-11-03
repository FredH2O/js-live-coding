const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "USB Cable", price: 10 },
  { name: "Monitor", price: 150 },
];

function groupByPrice(products) {
  const groupedProduct = {
    expensive: [],
    cheap: [],
  };

  for (const product of products) {
    if (product.price >= 50) {
      groupedProduct.expensive.push(product);
    } else {
      groupedProduct.cheap.push(product);
    }
  }

  return groupedProduct;
}

console.log(groupByPrice(products));

module.exports = { groupByPrice };
