# 📚 Lista de Desafios: Matemática e Lógica com JavaScript

Este documento contém 25 desafios de programação focados em manipulação de números, conversões de base e lógica matemática.

---

### 1. Conversão entre Bases (2-36)

Escreva uma função para converter um número de uma base para outra.

- **Nota:** Ambas as bases devem estar entre 2 e 36.
- **Dados de Teste:** \* `base_convert('E164', 16, 8)` -> `"160544"`
  - `base_convert(1000, 2, 8)` -> `"10"`

### 2. Conversão de Binário para Decimal

Escreva uma função para converter um número binário em um número decimal.

- **Dados de Teste:** \* `bin_to_dec('110011')` -> `51`
  - `bin_to_dec('100')` -> `4`

### 3. Decimal para Binário/Hexadecimal/Octal

Escreva uma função para converter um número decimal em binário, hexadecimal ou octal.

- **Dados de Teste:**
  - `dec_to_bho(120, 'B')` -> `"1111000"` (Binário)
  - `dec_to_bho(120, 'H')` -> `"78"` (Hexadecimal)
  - `dec_to_bho(120, 'O')` -> `"170"` (Octal)

### 4. Gerar um Inteiro Aleatório

Escreva uma função para gerar um número inteiro aleatório. Pode aceitar limites (mín/máx) ou ser sem argumentos.

### 5. Formatar Número com Casas Decimais

Escreva uma função para formatar um número até uma quantidade específica de casas decimais.

- **Dados de Teste:**
  - `decimals(2.100212, 2)` -> `"2.10"`
  - `decimals(2100, 2)` -> `"2100.00"`

### 6. Encontrar o Valor Máximo em um Array

Escreva uma função para encontrar o maior valor em uma lista de números.

- **Dados de Teste:** `max([12, 34, 56, 1])` -> `56`

### 7. Encontrar o Valor Mínimo em um Array

Escreva uma função para encontrar o menor valor em uma lista de números.

- **Dados de Teste:** `min([12, 34, 56, 1])` -> `1`

### 8. MDC (Máximo Divisor Comum) de Dois Números

Escreva uma função para obter o MDC de dois números inteiros.

- **Nota:** O MDC é o maior inteiro positivo que divide os números sem deixar resto. Ex: MDC de 8 e 12 é 4.

### 9. MDC de Múltiplos Números

Escreva uma função para encontrar o MDC de mais de dois números inteiros (passados em um array).

### 10. MMC (Mínimo Múltiplo Comum) de Dois Números

Escreva uma função para obter o MMC de dois números.

- **Nota:** O MMC é o menor número (não zero) que é múltiplo de ambos. Ex: MMC de 10 e 15 é 30.

### 11. MMC de Múltiplos Números

Escreva uma função para obter o MMC de mais de dois números inteiros.

### 12. Verificar se o Número é Natural

Escreva uma função para verificar se um número é natural (inteiros positivos de 0 ou 1 em diante, sem frações ou negativos).

### 13. Verificar Potência de 2

Escreva uma função para testar se um número é uma potência de 2 (ex: 2, 4, 8, 16, 32...).

### 14. Arredondamento Preciso

Escreva uma função para arredondar um número para uma casa decimal específica de forma precisa.

- **Dados de Teste:** `precise_round(12.375, 2)` -> `12.38`

### 15. Verificar se o Valor é Inteiro

Escreva uma função para checar se um valor é um número inteiro.

- **Dados de Teste:** `is_Int(23)` -> `true`, `is_Int(23.75)` -> `false`

### 16. Verificar se o Valor é Numérico

Escreva uma função para checar se uma variável é numérica ou pode ser convertida em número.

### 17. Soma de Valores de um Array

Escreva uma função para calcular a soma de todos os valores em um array. Deve ignorar valores não numéricos.

### 18. Produto de Valores de um Array

Escreva uma função para calcular o produto (multiplicação) de todos os valores de um array.

### 19. Teorema de Pitágoras

Crie uma função que calcule a hipotenusa baseado nos catetos ($c^2 = a^2 + b^2$).

[Image of the Pythagorean theorem formula]

### 20. Coeficientes Binomiais

Escreva um programa para avaliar coeficientes binomiais.

- **Nota:** São os números que formam o Triângulo de Pascal.

[Image of Pascal's triangle]

### 21. Inteiro para Algarismo Romano

Escreva uma função que converta um número inteiro (ex: 15) em um algarismo romano (ex: XV).

### 22. Algarismo Romano para Inteiro

Escreva uma função que converta uma string de algarismos romanos em um número inteiro.

### 23. Gerar Identificador UUID

Escreva uma função para criar um UUID (Universally Unique Identifier).

- **Exemplo:** `de305d54-75b4-431b-adb2-eb6b9e546014`

### 24. Arredondar e Remover Zeros Extras

Escreva uma função para arredondar um número para um número específico de dígitos e remover zeros extras no final.

- **Exemplo:** `5.0001000` -> `5.0001`

### 25. Operações Matemáticas com Moeda

Escreva uma função para realizar cálculos matemáticos (soma, subtração, etc) tratando valores em formato de string monetária.

- **Exemplo:** `'$40.24'` e `'$21.57'`
