const users = [
  { name: "Anna", active: false },
  { name: "Ben", active: true },
  { name: "Carlos", active: true },
  { name: "Diana", active: false },
];

function findActiveUser(user) {
  return user.find((person) => person.active);
}

console.log(findActiveUser(users));

module.exports = { findActiveUser };
