function printExercise(num: number) {
  console.log(`------ Exercise ${num}------`);
}
// ## 🔴 Nível 4 — Transformação de arrays
// ### 1️⃣6️⃣ map
// Crie um array de números e gere um novo array com todos os valores dobrados.
printExercise(16);
let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleArray = numsArray.map((item) => {
  return item * 2;
});
console.log(`Original Array: ${numsArray}`);
console.log(`Mapped Array: ${doubleArray}`);

// ### 1️⃣7️⃣ filter
// Crie um array de números e gere um novo array apenas com números maiores que 10.
printExercise(17);
numsArray = [1, 5, 16, 1, 3, 85, 4, 8];
let filteredArray = numsArray.filter((number) => {
  return number < 10;
});
console.log(`Original Array: ${numsArray}`);
console.log(`Filtered Array: ${filteredArray}`);

// ### 1️⃣8️⃣ find
// Crie um array de nomes e encontre o primeiro nome com mais de 5 letras.
printExercise(18);
let names = ['Jhon', 'Julio', 'DuckDogers', 'Santa Claus'];
console.log(
  `First name longest then 5 chars: ${names.find((name) => {
    return name.length > 5;
  })}`
);

