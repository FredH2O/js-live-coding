function points(games) {
  return games.reduce((accumulator, game) => {
    let scores = game.split(":");
    if (scores[0] > scores[1]) {
      return accumulator + 3;
    } else if (scores[0] === scores[1]) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
}
