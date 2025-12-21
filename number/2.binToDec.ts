function bin_to_dec(str: string) {
  let decimalResult = 0;
  const base = 2;
  const stringArray = str.split("").reverse();
  for (let i = 0; i < stringArray.length; i++) {
    let digit = Number(stringArray[i]);
    const toBase10 = digit * Math.pow(base, i);
    decimalResult += toBase10;
  }
  return decimalResult;
}

console.log(bin_to_dec("110011")); // -> `51`
console.log(bin_to_dec("100")); // -> `4`
