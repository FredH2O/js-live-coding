const { findProducts } = require("./solution");

const products = [
  {
    name: "Laptop",
    price: 900,
  },
  {
    name: "Cellphone",
    price: 500,
  },
  {
    name: "Speakers",
    price: 150,
  },
  {
    name: "Keyboard",
    price: 220,
  },
];

test("to return the right products searched for", function () {
  expect(findProducts(products, "Laptop")).toEqual({
    name: "Laptop",
    price: 900,
  });
});

test("returns undefined when product is not found", () => {
  expect(findProducts(products, "Wires")).toBeUndefined();
});
