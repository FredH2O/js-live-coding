// ================================== //

const scores = [35, 80, 49, 67, 20, 95];

function getPassingScores(score) {
  return score.filter((i) => i >= 50);
}

console.log(getPassingScores(scores));

module.exports = { getPassingScores };
