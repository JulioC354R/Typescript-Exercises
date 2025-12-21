//Escreva uma função para gerar um número inteiro aleatório. Pode aceitar limites (mín/máx) ou ser sem argumentos.

function getRandomInt(min: number = 0, max: number = 1) {
  let random = Math.random();
  const diference = max - min;
  return Math.floor(random * diference) + min;
}

console.log(getRandomInt());
console.log(getRandomInt(8, 10));
console.log(getRandomInt(100, 1000));
