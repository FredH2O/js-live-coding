const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
  { name: "Webcam", price: 100 },
];

function countProductsInPriceRange(products, minPrice, maxPrice) {
  return products.filter(
    (item, price) => item.price >= minPrice && item.price <= maxPrice,
  ).length;
}

console.log(countProductsInPriceRange(products, 100, 900));
