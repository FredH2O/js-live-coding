const products = [
  { name: "Apple", category: "fruit" },
  { name: "Milk", category: "dairy" },
  { name: "Banana", category: "fruit" },
  { name: "Cheese", category: "dairy" },
  { name: "Carrot", category: "vegetable" },
];

function groupByCategory(products) {
  const groupedProduct = {};

  for (const product of products) {
    const category = product.category;

    if (!groupedProduct[category]) {
      groupedProduct[category] = [];
    }

    groupedProduct[category].push(product);
  }

  return groupedProduct;
}

console.log(groupByCategory(products));
