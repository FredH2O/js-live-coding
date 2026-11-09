const users = [
  { name: "Anna", active: true },
  { name: "Ben", active: false },
  { name: "Carlos", active: true },
  { name: "Diana", active: true },
  { name: "Emma", active: false },
];

function countActiveUsers(users) {
  return users.reduce((count, user) => {
    if (user.active === true) {
      return count + 1;
    }

    return count;
  }, 0);
}

console.log(countActiveUsers(users));
