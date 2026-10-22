const { sumNumbers } = require("./solution");
const prices = [10, 20, 30, 40];

test("sums up the total price", () => {
  expect(sumNumbers(prices)).toBe(100);
});

test("sums up the total custom price", () => {
  expect(sumNumbers([5, 5, 25])).toBe(35);
});

test("returns 0 for an empty array", () => {
  expect(sumNumbers([])).toBe(0);
});
