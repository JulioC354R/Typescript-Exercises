// ### 15. Verificar se o Valor é Inteiro

// Escreva uma função para checar se um valor é um número inteiro.

// - **Dados de Teste:** `is_Int(23)` -> `true`, `is_Int(23.75)` -> `false`

function isInt(num: number) {
  return num === parseInt(num.toString());
}

console.log(isInt(1));
console.log(isInt(2.5255));
console.log(isInt(3 * 8));
console.log(isInt(-1985));
console.log(isInt(5 / 8));
