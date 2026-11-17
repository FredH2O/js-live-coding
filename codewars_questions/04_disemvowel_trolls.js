function disemvowel(str) {
  // code

  let arrayString = str.split("");

  const vowels = ["a", "e", "i", "o", "u"];

  let result = arrayString.filter((letter) => {
    return !vowels.includes(letter.toLowerCase());
    //return letter.includes(vowels);
  });

  return result.join("");
}
