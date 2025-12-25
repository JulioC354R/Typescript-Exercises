function printExercise(num: number) {
  console.log(`------ Exercise ${num}------`);
}

// ## 🟡 Nível 2 — Funções básicas
// ### 6️⃣ push
// Crie um array de nomes e adicione 3 novos nomes usando `push()`.

printExercise(6);
const names = [];
names.push('duckDogers', 'DuckWizard'); // posso adicionar mais de 1 de uma vez
names.push('Hashirama');
console.log(names);

// ### 7️⃣ pop
// Remova o último elemento do array anterior e imprima o valor removido.
printExercise(7);
console.log(names.pop());

// ### 8️⃣ shift
// Remova o primeiro elemento de um array de números.
printExercise(8);
const numsArray = [2, 3, 4, 5, 6, 7];
numsArray.shift();
console.log(numsArray);

// ### 9️⃣ unshift
// Adicione dois números no início de um array existente.
printExercise(9);
numsArray.unshift(0, 1);
console.log(numsArray);
// ### 🔟 indexOf
// Crie um array de frutas e verifique o índice de uma fruta existente e de uma inexistente.

printExercise(10);
const fruits = ['Mango', 'Orange', 'StrawBerry', 'BlueBerry'];
console.log(`Fruta Mango está no index: ` + fruits.indexOf(`Mango`));
console.log(
  `Fruta Watermellon está no index: ` + fruits.indexOf(`Watermellon`)
); // retorna -1 quando não acha
