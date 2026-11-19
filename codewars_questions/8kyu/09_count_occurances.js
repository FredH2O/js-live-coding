function strCount(str, letter) {
  //code here

  let stringArray = str.split(""); // return ["a", "b", "c"];

  let count = 0;

  for (i = 0; i < stringArray.length; i++) {
    if (letter === stringArray[i]) {
      count++;
    }
  }

  return count;
}
