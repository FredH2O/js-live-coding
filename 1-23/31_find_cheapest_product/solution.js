const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
  { name: "Webcam", price: 100 },
];

function findCheapestProduct(products) {
  return products.reduce((cheapest, currentProduct) => {
    if (currentProduct.price < cheapest.price) {
      return currentProduct;
    }

    return cheapest;
  }, products[0]);
}

console.log(findCheapestProduct(products));
