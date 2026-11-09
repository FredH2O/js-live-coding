const products = [
  { name: "Mouse", category: "Electronics" },
  { name: "Keyboard", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Monitor", category: "Electronics" },
  { name: "Shoes", category: "Clothing" },
];

function groupProductsByCategory(products) {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
}

console.log(groupProductsByCategory(products));
