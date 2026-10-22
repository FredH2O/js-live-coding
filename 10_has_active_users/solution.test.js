const { hasActiveUser } = require("./solution");

const users = [
  { name: "Anna", active: false },
  { name: "Ben", active: true },
  { name: "Carlos", active: false },
];

test("checks if any users are active.", () => {
  expect(hasActiveUser(users)).toBe(true);
});

test("returns false if all users are inactive", () => {
  expect(
    hasActiveUser([
      { name: "Anna", active: false },
      { name: "Carlos", active: false },
    ]),
  ).toBe(false);
});

test("an empty array should return false.", () => {
  expect(hasActiveUser([])).toBe(false);
});
