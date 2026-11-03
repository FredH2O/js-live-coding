const { getPassingScores } = require("./solution");

test("find passing score that is greater than 50", () => {
  expect(getPassingScores([35, 80, 49, 67, 20, 95])).toEqual([80, 67, 95]);
});

test("includes a score of exactly 50", () => {
  expect(getPassingScores([33, 22, 992, 74, 50, 99, 1])).toEqual([
    992, 74, 50, 99,
  ]);
});
