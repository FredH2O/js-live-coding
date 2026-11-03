const products = [
  { name: "Mouse", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
  { name: "Apple", category: "Food" },
];

function groupByCategory(products) {
  const groupedProduct = {};

  for (const product of products) {
    if (!groupedProduct[product.category]) {
      groupedProduct[product.category] = [];
    }
    groupedProduct[product.category].push(product);
  }

  return groupedProduct;
}

console.log(groupByCategory(products));

module.exports = { groupByCategory };
