const { groupNumbers } = require("./solution");

test("groups even and odd numbers", () => {
  expect(groupNumbers([1, 2, 3, 4, 5, 6])).toEqual({
    even: [2, 4, 6],
    odd: [1, 3, 5],
  });
});

test("returns empty arrays when given an empty array", () => {
  expect(groupNumbers([])).toEqual({
    even: [],
    odd: [],
  });
});
