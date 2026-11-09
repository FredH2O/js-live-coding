const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
  { name: "Phone", price: 700 },
];

function countExpensiveProducts(products) {
  return products.reduce((accumulator, product) => {
    if (product.price > 50) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);
}

console.log(countExpensiveProducts(products));
