// ### 13. Verificar Potência de 2
// Escreva uma função para testar se um número é uma potência de 2 (ex: 2, 4, 8, 16, 32...).

function checkIsBase2(num: number) {
  let quotient = num;
  if (num < 2) return false;
  while (quotient > 1) {
    if (quotient % 2 != 0) return false;
    quotient = quotient / 2;
  }
  return true;
}

console.log(checkIsBase2(2));
console.log(checkIsBase2(20));
console.log(checkIsBase2(16));
console.log(checkIsBase2(32));
console.log(checkIsBase2(8));
console.log(checkIsBase2(1024));
console.log(checkIsBase2(2048));
console.log(checkIsBase2(5));
console.log(checkIsBase2(1));
