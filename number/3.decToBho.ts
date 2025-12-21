//Escreva uma função para converter um número decimal em binário, hexadecimal ou octal.

function dec_to_bho(base10Number: number, destinyBase: 'B' | 'H' | 'O') {
  let base: number;
  switch (destinyBase) {
    case 'B':
      base = 2;
      break;
    case 'H':
      base = 16;
      break;
    case 'O':
      base = 8;
      break;
  }
  // Precisamos reverter pois na conversão de bases pegamos caracter por caracter da esquerda pra direita
  let result = '';
  while (base10Number > 0) {
    let restValue = base10Number % base;
    let quotient = Math.floor(base10Number / base);
    result = restValue.toString() + result;
    base10Number = quotient;
  }
  // bastava usar conversão nativa,  parseInt para converter hexadecimal pra decimal e varialvelNum.toString(base) para converter pra base que quero

  return result;
}

console.log(dec_to_bho(120, 'B')); // -> `"1111000"` (Binário)
console.log(dec_to_bho(120, 'H')); // -> `"78"` (Hexadecimal)
console.log(dec_to_bho(120, 'O')); // -> `"170"` (Octal)

// DESCOBRI QUE O TS FAZ ISSO NATIVAMENTE KKKKKKKKKKKKKKK
