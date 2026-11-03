const { findAdult } = require("./solution");

test("return age 18 and above", () => {
  expect(
    findAdult([
      { name: "Jack", age: 15 },
      { name: "Mia", age: 21 },
      { name: "Lila", age: 19 },
      { name: "Tom", age: 12 },
    ]),
  ).toEqual({ name: "Mia", age: 21 });
});

test("returns a message when nobody is an adult.", () => {
  expect(findAdult([{ name: "Jack", age: 15 }])).toBe(
    "No person above the age 18 is found.",
  );
});

test("returns a message when the array is empty", () => {
  expect(findAdult([])).toBe("No person above the age 18 is found.");
});
