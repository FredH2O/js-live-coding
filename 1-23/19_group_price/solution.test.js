const { groupByPrice } = require("./solution");

const products = [
  { name: "Mouse", price: 25 },
  { name: "Laptop", price: 900 },
  { name: "Keyboard", price: 60 },
  { name: "USB Cable", price: 10 },
  { name: "Monitor", price: 150 },
];

test("groups products by price", () => {
  expect(groupByPrice(products)).toEqual({
    expensive: [
      { name: "Laptop", price: 900 },
      { name: "Keyboard", price: 60 },
      { name: "Monitor", price: 150 },
    ],
    cheap: [
      { name: "Mouse", price: 25 },
      { name: "USB Cable", price: 10 },
    ],
  });
});

test("returns empty groups for an empty array", () => {
  expect(groupByPrice([])).toEqual({
    expensive: [],
    cheap: [],
  });
});
