function findShort(s) {
  let arrayOfString = s.split(" ");

  return arrayOfString.reduce((acc, num) => {
    let splitLettersLength = num.length;

    if (splitLettersLength < acc) {
      acc = splitLettersLength;
    }

    return acc;
  }, Infinity);
}
