function removeEveryOther(arr) {
  //your code here

  return arr.filter((elem, index) => {
    if (index % 2 === 0) {
      return elem;
    }
  });
}
