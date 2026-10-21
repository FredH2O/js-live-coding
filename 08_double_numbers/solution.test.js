const { doubleNumbers } = require("./solution");

const numbers = [2, 4, 6, 8];

test("multiply numbers by 2", () => {
  expect(doubleNumbers(numbers)).toEqual([4, 8, 12, 16]);
});

test("multiply numbers by 2", () => {
  expect(doubleNumbers([5, 10])).toEqual([10, 20]);
});

test("return nothing an empty array literally", () => {
  expect(doubleNumbers([])).toEqual([]);
});

test("multiply by 2", () => {
  expect(doubleNumbers([9, 15])).toEqual([18, 30]);
});
