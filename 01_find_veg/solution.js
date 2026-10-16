const people = [
  {
    name: "Jack",
    veg: false,
  },
  {
    name: "Lila",
    veg: false,
  },
  {
    name: "Opus",
    veg: true,
  },
];

function findTrue() {
  const found = people.filter((i) => i.veg === true);
  return found;
}

console.log(findTrue());

module.exports = { findTrue };

function findNameWithVegetable() {
  const name = people.find((person) => person.veg === true);
  return [name.name];
}

console.log(findNameWithVegetable());
