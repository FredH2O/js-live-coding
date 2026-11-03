const { groupUsers } = require("./solution");

const users = [
  { name: "Anna", active: true },
  { name: "Ben", active: false },
  { name: "Carlos", active: true },
  { name: "Diana", active: false },
];

test("returns active and inactive users", () => {
  expect(groupUsers(users)).toEqual({
    active: [
      { name: "Anna", active: true },
      { name: "Carlos", active: true },
    ],
    inactive: [
      { name: "Ben", active: false },
      { name: "Diana", active: false },
    ],
  });
});

test("returns empty groups when given an empty array", () => {
  expect(groupUsers([])).toEqual({
    active: [],
    inactive: [],
  });
});
