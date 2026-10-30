const { calculateTotal } = require("./solution");

const prices = [10, 25, 5, 40];

test("Shows the total price of items.", () => {
  expect(calculateTotal(prices)).toBe(80);
});

test("return 0", () => {
  expect(calculateTotal([])).toEqual(0);
});

test("show full result of added random values", () => {
  expect(calculateTotal([5, 10, 6, 20, 9])).toBe(50);
});
