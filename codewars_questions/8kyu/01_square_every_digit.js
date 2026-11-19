function squareDigits(num) {
  let splitNumber = String(num).split("");

  let result = splitNumber.map((number) => {
    return number * number;
  });

  return +result.join("");
}
