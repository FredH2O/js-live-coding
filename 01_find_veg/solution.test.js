const { findTrue } = require("./solution");

test("finds people with veg set to true", () => {
  expect(findTrue()).toEqual([{ name: "Opus", veg: true }]);
});
