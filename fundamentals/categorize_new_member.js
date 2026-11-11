function openOrSenior(data) {
  // ...
  let dataArray = [];
  data.forEach((seniority) => {
    if (seniority[0] >= 55 && seniority[1] > 7) {
      dataArray.push("Senior");
    } else {
      dataArray.push("Open");
    }
  });

  return dataArray;
}
