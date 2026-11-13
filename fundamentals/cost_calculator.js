function rentalCarCost(d) {
  // Your solution here

  const price = 40;
  const discountSevenDays = 50;
  const discountThreeDays = 20;

  if (d < 3) return d * price;

  if (d >= 3 && d < 7) {
    return d * price - discountThreeDays;
  }

  if (d >= 7) return d * price - discountSevenDays;
}
