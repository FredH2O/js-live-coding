const products = [
  { name: "Mouse", category: "Electronics", price: 25 },
  { name: "Keyboard", category: "Electronics", price: 60 },
  { name: "Shirt", category: "Clothing", price: 30 },
  { name: "Monitor", category: "Electronics", price: 150 },
  { name: "Jeans", category: "Clothing", price: 50 },
];

function calculateTotalByCategory(products) {
  return products.reduce((accumulator, item) => {
    if (!accumulator[item.category]) {
      accumulator[item.category] = 0;
    }

    accumulator[item.category] = accumulator[item.category] + item.price;

    return accumulator;
  }, {});
}

console.log(calculateTotalByCategory(products));
