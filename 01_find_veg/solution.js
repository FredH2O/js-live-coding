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
  {
    name: "Mia",
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

function findVegetable() {
  const vegetableHolders = people.filter((person) => person.veg === true);
  return vegetableHolders.map((p) => p.name);
}

console.log(findVegetable());

function countVegetarians() {
  const isVegetarian = people.filter((person) => person.veg === true).length;
  return isVegetarian;
}

console.log(countVegetarians());

function meatEaters() {
  const isMeatEater = people.filter((person) => person.veg === false).length;
  return isMeatEater;
}

console.log(meatEaters());

function findPerson(person) {
  const foundYa = people.find((susPerson) => susPerson.name === person);
  return foundYa;
}

console.log(findPerson("Mia"));

function hasVegetarians() {
  const vegetarian = people.some((person) => person.veg === true);
  return vegetarian;
}

console.log(hasVegetarians());

function allVegetarians() {
  const meatEaterDetected = people.every((person) => person.veg === true);
  return meatEaterDetected;
}

console.log(allVegetarians());
