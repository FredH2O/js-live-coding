function fakeBin(x) {
  return x
    .split("")
    .map((digit) => {
      let number = Number(digit);

      if (number < 5) {
        return 0;
      } else {
        return 1;
      }
    })
    .join("");
}
