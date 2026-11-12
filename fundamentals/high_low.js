function highAndLow(numbers) {
  // ...

  let splitNumbers = numbers.split(" ");

  let result = splitNumbers.reduce(
    (accumulator, number) => {
      if (number > accumulator.highest) {
        accumulator.highest = Number(number);
      }

      if (number < accumulator.lowest) {
        accumulator.lowest = Number(number);
      }

      return accumulator;
    },
    {
      highest: -Infinity,

      lowest: Infinity,
    },
  );

  return `${result.highest} ${result.lowest}`;
}
