const { getUserNames } = require("./solution");

const users = [
  { name: "Anna", age: 25 },
  { name: "Ben", age: 30 },
  { name: "Carlos", age: 22 },
];

test("expect to get the user's names in an array", () => {
  expect(getUserNames(users)).toEqual(["Anna", "Ben", "Carlos"]);
});

test("expect to return an empty array as there is no users", () => {
  expect(getUserNames([])).toEqual([]);
});
