const users = [
  { name: "Anna", active: true },
  { name: "Ben", active: false },
  { name: "Carlos", active: true },
  { name: "Diana", active: false },
];

function groupUsers(users) {
  const groupedUsers = {
    active: [],
    inactive: [],
  };

  for (const user of users) {
    if (user.active === true) {
      groupedUsers.active.push(user);
    } else {
      groupedUsers.inactive.push(user);
    }
  }

  return groupedUsers;
}

console.log(groupUsers(users));

module.exports = { groupUsers };
