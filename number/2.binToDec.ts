function bin_to_dec(str: string) {
  const base = 2;
  let decimalResult = parseInt(str, base);
  return decimalResult;
}

console.log(bin_to_dec('110011')); // -> `51`
console.log(bin_to_dec('100')); // -> `4`
