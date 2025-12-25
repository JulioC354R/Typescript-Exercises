function printExercise(num: number) {
  console.log(`------ Exercise ${num}------`);
}

// ## 🟠 Nível 3 — Métodos de busca e cópia
// ### 1️⃣1️⃣ includes
// Verifique se um array contém um valor específico e imprima o resultado.
printExercise(11);
const arrayIncludes = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`Includes 5: ${arrayIncludes.includes(5)}`);
console.log(`Includes 10: ${arrayIncludes.includes(10)}`);
// ### 1️⃣2️⃣ slice
// Crie um array com 8 números e gere um novo array apenas com os 3 primeiros.
printExercise(12);
const slicedArray = arrayIncludes.slice(0, 3);
console.log(`Sliced Array: ${slicedArray}`);

// ### 1️⃣3️⃣ splice (remoção)
// Remova dois elementos do meio de um array usando `splice()`.
printExercise(13);
arrayIncludes.splice(2, 2);
console.log(`splicedArray: ${arrayIncludes}`);

// ### 1️⃣4️⃣ splice (substituição)
// Substitua um valor específico de um array por outro valor usando `splice()`.
printExercise(14);
arrayIncludes.splice(0, 2, 3, 4);
console.log(`switch the first 2 values: ${arrayIncludes}`);

// ### 1️⃣5️⃣ forEach
// Use `forEach()` para imprimir todos os valores de um array com seu índice.
printExercise(15);
arrayIncludes.forEach((element, index) => {
  console.log(`Index: ${index} element: ${element}`);
});
