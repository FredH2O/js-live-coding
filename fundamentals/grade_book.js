function getGrade(s1, s2, s3) {
  // Code here
  let average = [s1, s2, s3];
  let addScores = s1 + s2 + s3;
  let gradeByNumber = addScores / average.length;

  if (gradeByNumber <= 100 && gradeByNumber >= 90) {
    return "A";
  } else if (gradeByNumber < 90 && gradeByNumber >= 80) {
    return "B";
  } else if (gradeByNumber < 80 && gradeByNumber >= 70) {
    return "C";
  } else if (gradeByNumber < 70 && gradeByNumber >= 60) {
    return "D";
  } else {
    return "F";
  }
}
