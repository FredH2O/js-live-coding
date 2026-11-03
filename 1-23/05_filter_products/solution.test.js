const { filterProducts } = require("./solution");

const products = [
  { name: "Laptop", price: 900 },
  { name: "Cellphone", price: 500 },
  { name: "Speaker", price: 150 },
  { name: "Keyboard", price: 220 },
];

test("returns products at or below the chosen price", () => {
  expect(filterProducts(products, 300)).toEqual([
    { name: "Speaker", price: 150 },
    { name: "Keyboard", price: 220 },
  ]);
});

test("returns a message when no products match", () => {
  expect(filterProducts(products, 100)).toBe("No matching items found");
});
