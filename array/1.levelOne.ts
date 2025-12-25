function printExercise(num: number) {
  console.log(`------ Exercise ${num}------`);
}

// ### 1️⃣ Criação e acesso
// Crie um array com 5 cores e imprima:
// - a primeira cor
// - a última cor
printExercise(1);
const collors: string[] = ['green', 'orange', 'red', 'purple', 'blue'];
console.log(collors[0]);
console.log(collors[collors.length - 1]);

// ### 2️⃣ Índices
// Crie um array vazio e atribua um valor apenas ao índice `3`.
// Depois, imprima:
// - o array
// - o `length`
// - o valor do índice `1`

printExercise(2);
const voidArray = [];
voidArray[3] = 'witch';
console.log(voidArray[1]);

// ### 3️⃣ Mutabilidade
// Crie um array de números `[10, 20, 30]` e altere o valor `20` para `99`.
printExercise(3);
const numbersArray = [10, 20, 30];
console.log('Before ' + numbersArray);
numbersArray[1] = 99;
console.log('After ' + numbersArray);

// ### 4️⃣ length manual
// Crie um array com dois valores e depois atribua um valor no índice `10`.
// Explique por que o `length` mudou.
printExercise(4);
const twoSizeArray = [0, 1];
twoSizeArray[10] = 999;
console.log(`O tamanho do array agora é: ${twoSizeArray.length} pois a propriedade lenght
é calculada assim: Indice do ultimo item + 1. E os demais itens da lista existem, só não foram atribuidos nenhum valor `);
// ### 5️⃣ undefined
// Crie um array com tamanho 5, mas preencha apenas duas posições.
// Imprima todas as posições com um loop.
printExercise(5);
const newArray = [4, , , , 3];
newArray.forEach((value) => {
  console.log(value);
});
