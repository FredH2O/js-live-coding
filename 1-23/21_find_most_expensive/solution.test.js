const { findMostExpensive } = require("./solution");

const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "USB Cable", price: 10 },
  { name: "Monitor", price: 150 },
];

test("returns the most expensive and cheapest products", () => {
  expect(findMostExpensive(products)).toEqual({
    mostExpensive: { name: "Laptop", price: 900 },
    cheapest: { name: "USB Cable", price: 10 },
  });
});

test("returns undefined when given an empty array", () => {
  expect(findMostExpensive([])).toBeUndefined();
});

test("finds the most expensive product when it is last", () => {
  const items = [
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 60 },
    { name: "Laptop", price: 900 },
  ];

  expect(findMostExpensive(items)).toEqual({
    mostExpensive: { name: "Laptop", price: 900 },
    cheapest: { name: "Mouse", price: 25 },
  });
});

test("works with a single product", () => {
  const items = [{ name: "Phone", price: 500 }];

  expect(findMostExpensive(items)).toEqual({
    mostExpensive: { name: "Phone", price: 500 },
    cheapest: { name: "Phone", price: 500 },
  });
});
