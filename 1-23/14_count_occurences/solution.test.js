const { countOccurrences } = require("./solution");

const fruits = ["apple", "orange", "apple", "blueberry", "grapes"];
const numbers = [5, 10, 5, 15, 25, 5];

test("should return 2", () => {
  expect(countOccurrences(fruits, "apple")).toBe(2);
});

test("should return 3", () => {
  expect(countOccurrences(numbers, 5)).toBe(3);
});
