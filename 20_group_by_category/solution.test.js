const { groupByCategory } = require("./solution");

const products = [
  { name: "Mouse", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
  { name: "Apple", category: "Food" },
];

test("groups products by category", () => {
  expect(groupByCategory(products)).toEqual({
    Clothing: [
      { name: "Shirt", category: "Clothing" },
      { name: "Jeans", category: "Clothing" },
    ],
    Electronics: [
      { name: "Mouse", category: "Electronics" },
      { name: "Laptop", category: "Electronics" },
    ],
    Food: [{ name: "Apple", category: "Food" }],
  });
});
