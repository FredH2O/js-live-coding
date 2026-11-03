const { countActiveUsers } = require("./solution");

const users = [
  {
    name: "Anna",
    active: true,
  },
  {
    name: "Ben",
    active: false,
  },
  {
    name: "Carlos",
    active: true,
  },
  {
    name: "Diana",
    active: true,
  },
];

test("to count how many users is active/online", () => {
  expect(countActiveUsers(users)).toEqual(3);
});
