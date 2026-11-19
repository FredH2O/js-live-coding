function derive(coefficient, exponent) {
  let total = coefficient * exponent;

  return `${total}x^${exponent - 1}`;
}
