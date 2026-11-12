function friend(friends) {
  //your code here
  let realBuddy = [];

  friends.forEach((buddy) => {
    if (buddy.length === 4) {
      realBuddy.push(buddy);
    }
  });
  return realBuddy;
}
