const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
  { name: "Webcam", price: 100 },
];

function getProductsInPriceRange(products, minPrice, maxPrice) {
  return products.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice,
  );
}

console.log(getProductsInPriceRange(products, 100, 200));
