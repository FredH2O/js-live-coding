const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "USB Cable", price: 10 },
  { name: "Monitor", price: 150 },
];

function findMostExpensive(products) {
  if (products.length === 0) {
    return undefined;
  }

  let mostExpensive = products[0];
  let cheapest = products[0];

  for (const product of products) {
    if (product.price > mostExpensive.price) {
      mostExpensive = product;
    }

    if (product.price < cheapest.price) {
      cheapest = product;
    }
  }

  return { mostExpensive, cheapest };
}

module.exports = { findMostExpensive };

console.log(findMostExpensive(products));
