function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  let splitWord = str.split("");
  let vowelCount = 0;

  splitWord.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelCount++;
    }
  });

  return vowelCount;
}
