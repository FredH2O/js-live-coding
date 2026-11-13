var number = function (array) {
  //your awesome code here

  let result = array.map((letter, index) => {
    return `${index + 1}: ${letter}`;
  });

  return result;
};
