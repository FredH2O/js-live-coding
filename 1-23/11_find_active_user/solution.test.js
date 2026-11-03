const { findActiveUser } = require("./solution");

const users = [
  { name: "Anna", active: false },
  { name: "Ben", active: true },
  { name: "Carlos", active: true },
  { name: "Diana", active: false },
];

const noneActiveUsers = [
  { name: "Anna", active: false },
  { name: "Ben", active: false },
  { name: "Carlos", active: false },
  { name: "Diana", active: false },
];

test("find the first user that is actively online!", () => {
  expect(findActiveUser(users)).toEqual({ name: "Ben", active: true });
});

test("return false as no user is active", () => {
  expect(findActiveUser(noneActiveUsers)).toBe(undefined);
});

test("returns an empty array, as there is no users", () => {
  expect(findActiveUser([])).toBe(undefined);
});
