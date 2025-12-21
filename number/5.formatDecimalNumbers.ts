function decimals(num: number, precision: number) {
  return num.toFixed(precision);
}

console.log(decimals(2.100212, 2)); // -> `"2.10"`
console.log(decimals(2100, 2)); // -> `"2100.00"`
