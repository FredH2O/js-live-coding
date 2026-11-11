function removeChar(str) {
  //You got this!
  let stringToArray = str.split("");

  stringToArray.shift(); //remove first letter
  stringToArray.pop(); //remove last letter

  return stringToArray.join("");
}
