const { findTrue, hasName } = require("./solution");

test("finds people with veg set to true", () => {
  expect(findTrue()).toEqual([
    { name: "Opus", veg: true },
    { name: "Mia", veg: true },
  ]);
});

test("returns true when the name exists", () => {
  expect(hasName("Mia")).toBe(true);
});

test("returns false when the name does not exist", () => {
  expect(hasName("Patrick")).toBe(false);
});
