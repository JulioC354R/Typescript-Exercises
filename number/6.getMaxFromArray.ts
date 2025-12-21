//Escreva uma função para encontrar o maior valor em uma lista de números.
function getMaxFromArrays(array: number[]) {
  let max = 0;
  array.forEach((num) => {
    if (num > max) max = num;
  });
  return max;
}

console.log(getMaxFromArrays([12, 34, 56, 1])); // -> `56`
