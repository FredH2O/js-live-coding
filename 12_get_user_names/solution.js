const users = [
  { name: "Anna", age: 25 },
  { name: "Ben", age: 30 },
  { name: "Carlos", age: 22 },
];

function getUserNames(username) {
  return username.map((person) => person.name);
}

console.log(getUserNames(users));

module.exports = { getUserNames };
