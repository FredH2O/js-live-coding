const { getExpensiveProducts } = require("./solution");

const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "Monitor", price: 150 },
  { name: "USB Cable", price: 10 },
];

test("returns products costing more than 100", () => {
  expect(getExpensiveProducts(products)).toEqual([
    { name: "Laptop", price: 900 },
    { name: "Monitor", price: 150 },
  ]);
});

test("returns an empty array when no products match", () => {
  expect(
    getExpensiveProducts([
      { name: "Mouse", price: 25 },
      { name: "Cable", price: 10 },
    ]),
  ).toEqual([]);
});

test("returns an empty array when given an empty array", () => {
  expect(getExpensiveProducts([])).toEqual([]);
});

test("does not modify the original array", () => {
  const original = [...products];

  getExpensiveProducts(products);

  expect(products).toEqual(original);
});
