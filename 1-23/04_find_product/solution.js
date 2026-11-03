const products = [
  {
    name: "Laptop",
    price: 900,
  },
  {
    name: "Cellphone",
    price: 500,
  },
  {
    name: "Speakers",
    price: 150,
  },
  {
    name: "Keyboard",
    price: 220,
  },
];

function findProducts(products, productName) {
  return products.find((item) => item.name === productName);

  //   if (products.find((item) => item.name === productName)) {
  //     return "We have " + productName + " in stock.";
  //   } else {
  //     return "Product not found.";
  //   }
}

console.log(findProducts(products, "Laptop"));

console.log(findProducts(products, "Wires"));

module.exports = { findProducts };
