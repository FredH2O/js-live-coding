function getMiddle(s) {
  //Code goes here!

  let splitString = s.split("");

  let lettersLength = splitString.length;

  if (lettersLength % 2 === 1) {
    //odd
    return s.slice(
      Math.floor(lettersLength / 2),
      Math.floor(lettersLength / 2) + 1,
    );
  } else {
    //even
    return s.slice(lettersLength / 2 - 1, lettersLength / 2 + 1);
  }
}
