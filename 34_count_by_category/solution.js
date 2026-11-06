const products = [
  { name: "Mouse", category: "Electronics" },
  { name: "Keyboard", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Monitor", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
];

function countProductByCategory(products) {
  return products.reduce((accumulator, item) => {
    if (!accumulator[item.category]) {
      accumulator[item.category] = 0;
    }

    accumulator[item.category] = accumulator[item.category] + 1;

    return accumulator;
  }, {});
}

console.log(countProductByCategory(products));
