const peopleForTest = [
  {
    name: "Jack",
    age: 15,
  },
  {
    name: "Mia",
    age: 21,
  },
  {
    name: "Lila",
    age: 19,
  },
  {
    name: "Tom",
    age: 12,
  },
];
/** @param {{ name: string, age: number }[]} people */
function findAdult(people) {
  if (people.some((person) => person.age >= 18)) {
    return people.find((person) => person.age >= 18);
  } else {
    return "No person above the age 18 is found.";
  }
}

console.log(findAdult(peopleForTest));

module.exports = { findAdult };
