// ### 9. MDC de Múltiplos Números
// Escreva uma função para encontrar o MDC de mais de dois números inteiros (passados em um array).

function calculatesMDCFromArray(array: number[]) {
  let maxCommonDivisor = 0;
  const commonDivisors: number[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    let num1 = array[i];
    let num2 = array[i + 1];
    for (let j = 2; j <= num1 && j <= num2; j++) {
      if (num1 % j === 0 && num2 % j === 0) {
        maxCommonDivisor = j;
      }
    }
    commonDivisors.push(maxCommonDivisor);
  }
  return maxCommonDivisor;
}

console.log(calculatesMDCFromArray([48, 18, 30]));

// logica completa errada, depois estudar sobre MDC com método de euclides
