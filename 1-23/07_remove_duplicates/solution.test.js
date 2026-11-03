const { removeDuplicates } = require("./solution");

const numbers = [1, 2, 2, 3, 4, 4, 5];

test("remove any duplicates in an array", () => {
  expect(removeDuplicates(numbers)).toEqual([1, 2, 3, 4, 5]);
});

test("remove any duplicated '1s'", () => {
  expect(removeDuplicates([1, 1, 1])).toEqual([1]);
});

test("return an empty array ? ", () => {
  expect(removeDuplicates([])).toEqual([]);
});
