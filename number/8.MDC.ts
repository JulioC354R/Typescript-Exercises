// ### 8. MDC (Máximo Divisor Comum) de Dois Números

// Escreva uma função para obter o MDC de dois números inteiros.

// - **Nota:** O MDC é o maior inteiro positivo que divide os números sem deixar resto. Ex: MDC de 8 e 12 é 4.

function calculatesMDC(num1: number, num2: number) {
  let maxCommonDivisor = 0;
  for (let i = 2; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      maxCommonDivisor = i;
    }
  }
  return maxCommonDivisor;
}

console.log(calculatesMDC(8, 12));
