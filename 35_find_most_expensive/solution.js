const products = [
  { name: "Mouse", category: "Electronics", price: 25 },
  { name: "Keyboard", category: "Electronics", price: 60 },
  { name: "Shirt", category: "Clothing", price: 30 },
  { name: "Monitor", category: "Electronics", price: 150 },
  { name: "Jeans", category: "Clothing", price: 50 },
];

function findMostExpensiveByCategory(products) {
  return products.reduce((accumulator, item) => {
    if (!accumulator[item.category]) {
      accumulator[item.category] = item;
    }

    if (item.price > accumulator[item.category].price) {
      accumulator[item.category] = item;
    }

    return accumulator;
  }, {});
}

console.log(findMostExpensiveByCategory(products));
