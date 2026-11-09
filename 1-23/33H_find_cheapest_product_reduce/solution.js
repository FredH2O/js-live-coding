const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
  { name: "Phone", price: 700 },
];

function findCheapestProduct(products) {
  return products.reduce((accumulator, item) => {
    if (item.price < accumulator.price) {
      return item;
    }

    return accumulator;
  }, products[0]);
}

console.log(findCheapestProduct(products));
