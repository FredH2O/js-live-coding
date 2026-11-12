function countPositivesSumNegatives(input) {
  // your code here
  if (!input) return [];

  let result = input.reduce(
    (acc, num) => {
      if (num > 0) {
        acc.positiveCount++;
      }

      if (num < 0) {
        acc.addedNegative = acc.addedNegative + num;
      }

      return acc;
    },
    {
      positiveCount: 0,
      addedNegative: 0,
    },
  );

  if (result.positiveCount === 0 && result.addedNegative === 0) return [];

  return [result.positiveCount, result.addedNegative];
}
