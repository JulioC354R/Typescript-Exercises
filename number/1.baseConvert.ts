function base_convert(
  num: number | string,
  originBase: number,
  destinyBase: number
) {
  if (typeof num === "string") num = parseInt(num);
  let base10Value = 0;
  let originBaseDigits = num.toString().split("").reverse();

  for (let i = 0; i < originBaseDigits.length; i++) {
    const actualNumber = parseInt(originBaseDigits[i]);
    const toDecimal = actualNumber * Math.pow(originBase, i);
    base10Value = base10Value + toDecimal;
  }
  console.log(`Valor em base 10: ${base10Value}`);

  const destinyBasedigits: string[] = [];

  while (base10Value > 0) {
    let restValue = base10Value % destinyBase;
    destinyBasedigits.push(restValue.toString());
    base10Value = Math.floor(base10Value / destinyBase);
  }
  destinyBasedigits.reverse();
  let destinyBaseValue = destinyBasedigits.join("");

  console.log(`Valor em base ${destinyBase}: ${destinyBaseValue}`);

  return destinyBaseValue;
}

base_convert(1000, 2, 8); //10
