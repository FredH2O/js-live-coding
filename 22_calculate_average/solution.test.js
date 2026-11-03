const { calculateAverage } = require("./solution");

const prices = [10, 20, 30, 40, 50];

test("return 30 as average", () => {
  expect(calculateAverage(prices)).toBe(30);
});

test("return 40.85 as average", () => {
  expect(calculateAverage([10, 22, 44, 22, 33, 55, 100])).toBeCloseTo(40.86, 2);
});

test("returns 100 for a single price", () => {
  expect(calculateAverage([100])).toBe(100);
});

test("return 0 for an empty array", () => {
  expect(calculateAverage([])).toBe(0);
});
