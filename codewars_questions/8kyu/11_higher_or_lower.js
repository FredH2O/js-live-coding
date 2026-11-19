function betterThanAverage(classPoints, yourPoints) {
  // Your code here

  let result = classPoints.reduce((acc, num) => {
    return acc + num;
  }, 0);

  let average = result / classPoints.length;

  return yourPoints > average ? true : false;
}
