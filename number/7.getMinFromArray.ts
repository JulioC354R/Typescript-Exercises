//Escreva uma função para encontrar o menor valor em uma lista de números.

//- **Dados de Teste:** `min([12, 34, 56, 1])` -> `1`
function getMinFromArray(array: number[]) {
  let min = Infinity;
  array.forEach((num) => {
    if (num < min) min = num;
  });
  return min;
}
console.log(getMinFromArray([12, 34, 56, 1]));
