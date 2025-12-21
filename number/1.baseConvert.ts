function base_convert(
  num: number | string,
  originBase: number,
  destinyBase: number
) {
  if (typeof num === 'number') num = num.toString();

  let base10Value = parseInt(num, originBase);

  console.log(`Valor em base 10: ${base10Value}`);
  const destinyBaseValue = base10Value.toString(destinyBase);

  console.log(`Valor em base ${destinyBase}: ${destinyBaseValue}`);

  return destinyBaseValue;
}

base_convert(1000, 2, 8); //em base 10 = 8, em base 8 = 10
