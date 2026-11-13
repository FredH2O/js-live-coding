function reverseWords(str) {
  // Go for it
  let seperateWord = str.split(" ");

  let result = seperateWord.map((word) => {
    return word.split("").reverse().join("");
  });

  return result.join(" ");
}
