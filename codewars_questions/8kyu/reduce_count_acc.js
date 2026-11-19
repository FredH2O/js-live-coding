function countSheeps(sheep) {
  // TODO

  let total = sheep.reduce((acc, sheepy) => {
    if (sheepy === true) {
      acc++;
    }
    return acc;
  }, 0);

  return total;
}
