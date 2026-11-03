const users = [
  { name: "Anna", active: false },
  { name: "Ben", active: true },
  { name: "Carlos", active: false },
];

function hasActiveUser(activeUsers) {
  return activeUsers.some((user) => user.active);
}

console.log(hasActiveUser(users));

module.exports = { hasActiveUser };
