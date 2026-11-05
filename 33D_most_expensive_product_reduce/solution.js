const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
];

function findMostExpensiveProduct(products) {
  if (products.length === 0) return null;
  return products.reduce((acc, item) => {
    if (item.price > acc.price) {
      return item;
    }

    return acc;
  }, products[0]);
}

console.log(findMostExpensiveProduct(products));
console.log(findMostExpensiveProduct([]));
