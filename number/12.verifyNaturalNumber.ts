// ### 12. Verificar se o Número é Natural
// Escreva uma função para verificar se um número é natural (inteiros positivos de 0 ou 1 em diante, sem frações ou negativos).

function verifyNaturalNumber(num: number): boolean {
  console.log(num);
  if (num >= 0 && num.toString() === num.toFixed(0)) return true;
  return false;
}

console.log(verifyNaturalNumber(-1));
console.log(verifyNaturalNumber(0));
console.log(verifyNaturalNumber(5));
console.log(verifyNaturalNumber(5.1));
console.log(verifyNaturalNumber(3 / 2));
console.log(verifyNaturalNumber(-0));
console.log(verifyNaturalNumber(58));
console.log(verifyNaturalNumber(Infinity));
console.log(verifyNaturalNumber(-Infinity));
