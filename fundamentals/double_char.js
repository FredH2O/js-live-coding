function doubleChar(str) {
  // Your code here

  return str
    .split("")
    .map((element) => {
      return element + element;
    })
    .join("");
}
