// ### 14. Arredondamento Preciso

// Escreva uma função para arredondar um número para uma casa decimal específica de forma precisa.

// - **Dados de Teste:** `precise_round(12.375, 2)` -> `12.38`

function precise_round(num: number, precision: number){
    return num.toFixed(precision)
}

console.log(precise_round(12.375, 2))
console.log(precise_round(12.37568815, 2))
console.log(precise_round(12.351, 2))
console.log(precise_round(12.359, 2))
console.log(precise_round(12.009, 2))
console.log(precise_round(12.019, 2))
console.log(precise_round(12.5555999, 2))