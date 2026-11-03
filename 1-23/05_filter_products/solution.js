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
    name: "Speaker",
    price: 150,
  },
  {
    name: "Keyboard",
    price: 220,
  },
];

function filterProducts(productsList, chosenPrice) {
  const productsFound = productsList.filter((item) => {
    if (item.price <= chosenPrice) {
      return true;
    } else {
      return false;
    }
  });

  if (productsFound.length === 0) {
    return "No matching items found";
  }

  return productsFound;
}

console.log(filterProducts(products, 300));
console.log(filterProducts(products, 100));

module.exports = { filterProducts };
