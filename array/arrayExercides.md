# TypeScript — Exercícios sobre Arrays

> Objetivo: praticar conceitos fundamentais e avançados de arrays em JavaScript/TypeScript.

---

## 🟢 Nível 1 — Fundamentos

### 1️⃣ Criação e acesso

Crie um array com 5 cores e imprima:

- a primeira cor
- a última cor

---

### 2️⃣ Índices

Crie um array vazio e atribua um valor apenas ao índice `3`.  
Depois, imprima:

- o array
- o `length`
- o valor do índice `1`

---

### 3️⃣ Mutabilidade

Crie um array de números `[10, 20, 30]` e altere o valor `20` para `99`.

---

### 4️⃣ length manual

Crie um array com dois valores e depois atribua um valor no índice `10`.  
Explique por que o `length` mudou.

---

### 5️⃣ undefined

Crie um array com tamanho 5, mas preencha apenas duas posições.  
Imprima todas as posições com um loop.

---

## 🟡 Nível 2 — Funções básicas

### 6️⃣ push

Crie um array de nomes e adicione 3 novos nomes usando `push()`.

---

### 7️⃣ pop

Remova o último elemento do array anterior e imprima o valor removido.

---

### 8️⃣ shift

Remova o primeiro elemento de um array de números.

---

### 9️⃣ unshift

Adicione dois números no início de um array existente.

---

### 🔟 indexOf

Crie um array de frutas e verifique o índice de uma fruta existente e de uma inexistente.

---

## 🟠 Nível 3 — Métodos de busca e cópia

### 1️⃣1️⃣ includes

Verifique se um array contém um valor específico e imprima o resultado.

---

### 1️⃣2️⃣ slice

Crie um array com 8 números e gere um novo array apenas com os 3 primeiros.

---

### 1️⃣3️⃣ splice (remoção)

Remova dois elementos do meio de um array usando `splice()`.

---

### 1️⃣4️⃣ splice (substituição)

Substitua um valor específico de um array por outro valor usando `splice()`.

---

### 1️⃣5️⃣ forEach

Use `forEach()` para imprimir todos os valores de um array com seu índice.

---

## 🔴 Nível 4 — Transformação de arrays

### 1️⃣6️⃣ map

Crie um array de números e gere um novo array com todos os valores dobrados.

---

### 1️⃣7️⃣ filter

Crie um array de números e gere um novo array apenas com números maiores que 10.

---

### 1️⃣8️⃣ find

Crie um array de nomes e encontre o primeiro nome com mais de 5 letras.

---

## 🟣 Nível 5 — Reduce (chefes finais)

### 1️⃣9️⃣ reduce (soma)

Use `reduce()` para somar todos os valores de um array numérico.

---

### 2️⃣0️⃣ reduce (objeto)

Dado o array:

```ts
const pessoas = [
  { nome: 'Ana', idade: 20 },
  { nome: 'João', idade: 30 },
  { nome: 'Maria', idade: 25 },
];
```

Use `reduce()` para:

- criar um objeto onde a chave é o nome
- e o valor é a idade

Resultado esperado:

```ts
{
  Ana: 20,
  João: 30,
  Maria: 25
}
```

---

## 🧠 Dica final

Se você consegue resolver os exercícios 16 a 20 sem consultar nada,
você **já domina arrays em nível intermediário/avançado**.

Volte neles depois de alguns dias e tente novamente.
