const { findMostExpensive } = require("./solution");

const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
];

const emptyProducts = [];

test("tells us what is the highest priced product", () => {
  expect(findMostExpensive(products)).toEqual({ name: "Laptop", price: 900 });
});

test("returns an empty array", () => {
  expect(findMostExpensive(emptyProducts)).toBeUndefined();
});
