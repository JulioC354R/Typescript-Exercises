function printExercise(num: number) {
  console.log(`------ Exercise ${num}------`);
}
// ## 🟣 Nível 5 — Reduce (chefes finais)
// ### 1️⃣9️⃣ reduce (soma)
// Use `reduce()` para somar todos os valores de um array numérico.
printExercise(19);
const numbers = [1, 5, 3, 1, 5, 56, 4, 8, , 1, 566516, 15, 1, 615, 56, 41];
console.log(`Numbers Array: ${numbers}`);
console.log(
  `Numbers Sum: ${numbers.reduce((sum = 0, num = 0) => {
    return (sum = sum + num);
  })}`
);

// ### 2️⃣0️⃣ reduce (objeto)
// Dado o array:
// ```ts
// const pessoas = [
//   { nome: 'Ana', idade: 20 },
//   { nome: 'João', idade: 30 },
//   { nome: 'Maria', idade: 25 },
// ];
// ```

// Use `reduce()` para:

// - criar um objeto onde a chave é o nome
// - e o valor é a idade

// Resultado esperado:

// ```ts
// {
//   Ana: 20,
//   João: 30,
//   Maria: 25
// }
// ```
printExercise(20);

const person: {
  name: string | undefined;
  age: number | undefined;
}[] = [
  { name: 'Ana', age: 20 },
  { name: 'João', age: 30 },
  { name: 'Maria', age: 25 },
];

const newObject = person.reduce((object, person) => {
  if (person.name && person.age !== undefined) {
    object[person.name || ''] = person.age || 0;
  }
  return object;
}, {} as Record<string, number>);

console.log(newObject);
