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

function countActiveUsers(usersOnline) {
  const activeUsers = usersOnline.filter(
    (person) => person.active === true,
  ).length;
  return activeUsers;
}

console.log(countActiveUsers(users));
console.log(countActiveUsers([]));

module.exports = { countActiveUsers };
