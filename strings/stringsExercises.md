# 🧵 Exercícios de String em JavaScript

Lista organizada de exercícios para praticar manipulação de **strings em JavaScript**. Ideal para estudo progressivo, entrevistas e prática diária.

---

## 1. Verificar se é String

Crie uma função que verifique se o valor informado é uma string.

```js
is_string("w3resource"); // true
is_string([1, 2, 4, 0]); // false
```

---

## 2. String em Branco

Verifique se uma string está vazia.

```js
is_Blank(""); // true
is_Blank("abc"); // false
```

---

## 3. String para Array

Divida uma string em um array de palavras.

```js
string_to_array("Robin Singh"); // ["Robin", "Singh"]
```

---

## 4. Extrair Caracteres

Extraia uma quantidade específica de caracteres.

```js
truncate_string("Robin Singh", 4); // "Robi"
```

---

## 5. Abreviar Nome

Converta um nome para forma abreviada.

```js
abbrev_name("Robin Singh"); // "Robin S."
```

---

## 6. Proteger Email

Oculte parte de um email.

```js
protect_email("robin_singh@example.com"); // "robin...@example.com"
```

---

## 7. Parameterizar String

Converta uma string para formato de URL.

```js
string_parameterize("Robin Singh from USA."); // "robin-singh-from-usa"
```

---

## 8. Capitalizar Primeira Letra

```js
capitalize("js string exercises"); // "Js string exercises"
```

---

## 9. Capitalizar Cada Palavra

```js
capitalize_Words("js string exercises"); // "Js String Exercises"
```

---

## 10. Inverter Caixa (Swap Case)

```js
swapcase("AaBbc"); // "aAbBC"
```

---

## 11. Camel Case

```js
camelize("JavaScript Exercises"); // "JavaScriptExercises"
```

---

## 12. Uncamelize

```js
uncamelize("helloWorld", "-"); // "hello-world"
```

---

## 13. Repetir String

```js
repeat("Ha!", 3); // "Ha!Ha!Ha!"
```

---

## 14. Inserir String

```js
insert("We are doing some exercises.", "JavaScript ", 18);
// "We are doing some JavaScript exercises."
```

---

## 15. Humanizar Número

```js
humanize_format(301); // "301st"
```

---

## 16. Truncar com Reticências

```js
text_truncate("We are doing JS string exercises.", 16);
// "We are doing JS ..."
```

---

## 17. Quebrar em Partes

```js
string_chop("w3resource", 3); // ["w3r", "eso", "urc", "e"]
```

---

## 18. Contar Substrings

```js
count("The quick brown fox jumps over the lazy dog", "the"); // 2
```

---

## 19. Remover Espaços

```js
strip(" w3resource "); // "w3resource"
```

---

## 20. Truncar por Palavras

```js
truncate("The quick brown fox jumps over the lazy dog", 4);
// "The quick brown fox"
```

---

## 21. Verificar Pangrama

```js
isPangram("The quick brown fox jumps over the lazy dog"); // true
```

---

## 22. Verificar Case (Camel, Pascal, Kebab)

```js
isCamelCase("helloWorld"); // true
isPascalCase("HelloWorld"); // true
isKebabCase("hello-world"); // true
```

---

## 23. Palíndromo Alfanumérico

```js
isPalindrome("A man, a plan, a canal - Panama"); // true
```

---

## 24. Caracter Mais Frequente

```js
mostFrequentChar("HellloL223LLL"); // "L"
```

---

## 25. Palavra Mais Frequente

```js
mostFrequentWord("The quick brown fox jumps over the lazy dog"); // "the"
```

---

## 26. Reverter String

```js
reverseWords("JavaScript Exercises"); // "tpircSavaJ sesicrexE"
```

---

## 27. Subsequência Comum Mais Longa

```js
lcs("abcda", "abcdef"); // 4
```

---

## 28. Parênteses Válidos

```js
longestValidParentheses("][][]]"); // 4
```

---

## 29. Subsequência Palindrômica

```js
longestPalindromicSubsequence("maadaem"); // 5
```

---

## 30. String Termina Com

Verifique se uma string termina com um sufixo específico.

```js
string_endsWith("JS PHP PYTHON", "PYTHON"); // true
string_endsWith("JS PHP PYTHON", ""); // false
```

---

## 31. Escapar HTML

Escape caracteres especiais para uso seguro em HTML.

```js
escape_html("PHP & MySQL"); // "PHP &amp; MySQL"
escape_html("3 > 2"); // "3 &gt; 2"
```

---

## 32. Remover ASCII Não Imprimível

```js
remove_non_ascii("???????PHP-MySQL??????"); // "PHP-MySQL"
```

---

## 33. Remover Caracteres Não Alfanuméricos

```js
remove_non_word("PHP ~!@#$%^&*()+ MySQL"); // "PHP - MySQL"
```

---

## 34. Converter para Title Case

```js
sentenceCase("PHP exercises. python exercises.");
// "Php Exercises. Python Exercises."
```

---

## 35. Remover Tags HTML/XML

```js
strip_html_tags("<p><strong><em>PHP Exercises</em></strong></p>");
// "PHP Exercises"
```

---

## 36. Zero Fill

Preenche números com zeros à esquerda.

```js
zeroFill(120, 5, "-"); // "+00120"
zeroFill(29, 4); // "0029"
```

---

## 37. Comparação Case Insensitive

```js
compare_strings("abcd", "AbcD"); // true
compare_strings("ABCD", "Abce"); // false
```

---

## 38. Busca Case Insensitive

```js
case_insensitive_search("JavaScript Exercises", "exercises"); // "Matched"
```

---

## 39. Descapitalizar Primeira Letra

```js
Uncapitalize("Js string exercises"); // "js string exercises"
```

---

## 40. Descapitalizar Cada Palavra

```js
unCapitalize_Words("Js String Exercises"); // "js string exercises"
```

---

## 41. Capitalizar Todas as Palavras

```js
capitalizeWords("js string exercises"); // "JS STRING EXERCISES"
```

---

## 42. Descapitalizar Todas as Palavras

```js
unCapitalizeWords("JS STRING EXERCISES"); // "js string exercises"
```

---

## 43. Verificar Caractere Maiúsculo

```js
isUpperCaseAt("Js STRING EXERCISES", 1); // false
```

---

## 44. Verificar Caractere Minúsculo

```js
isLowerCaseAt("Js STRING EXERCISES", 1); // true
```

---

## 45. Sufixo Humanizado

```js
humanize(302); // "302nd"
```

---

## 46. Verificar Início da String

```js
startsWith("js string exercises", "js"); // true
```

---

## 47. Verificar Final da String

```js
endsWith("JS string exercises", "exercises"); // true
```

---

## 48. Sucessor de String

```js
successor("abcd"); // "abce"
successor("3456"); // "3457"
```

---

## 49. Gerar GUID

```js
guid(); // string aleatória (32 chars)
guid(15); // string aleatória (15 chars)
```

---

## 50. Palíndromo Alfanumérico

```js
isAlphaNumericPalindrome("Aba%$aba"); // true
```

---

## 51. Busca Boyer-Moore

Implemente o algoritmo Boyer-Moore para busca de padrão.

```js
boyerMoore("THIS IS A TEST TEXT", "TEST"); // 10
```

---

## 52. Palavra Excedente

```js
isExceedingWord("acgl"); // true
isExceedingWord("aebc"); // false
```

---

## 53. Flat Case

```js
isFlatCase("javascriptexercises"); // true
```

---

## 54. Kebab Case

```js
isKebabCase("the-quick-brown-fox"); // true
```

---

## 55. Pangrama

```js
isPangram("The five boxing wizards jump quickly."); // true
```

---

## 56. Pascal Case

```js
isPascalCase("XmlStream"); // true
```

---

## 57. Reorganizar para Palíndromo

```js
canRearrangePalindrome("maamd"); // true
```

---

## 58. Caractere Mais Frequente

```js
mostFrequentChar("HellloL223LLL"); // "L"
```

---

## 59. Palavra Mais Frequente

```js
mostFrequentWord("The quick brown fox jumps over the lazy dog"); // "the"
```

---

## 60. Reverter Palavras

```js
reverseWords("JavaScript Exercises"); // "tpircSavaJ sesicrexE"
```

---

## 61. Subsequência Comum Mais Longa

```js
lcs("ABCD", "ACBAD"); // 3
```

---

## 62. Parênteses Válidos Mais Longos

```js
longestValidParentheses("][][]]"); // 4
```

---

## 63. Subsequência Palindrômica Mais Longa

```js
longestPalindromicSubsequence("zkksk"); // 3
```

---

📌 **Missão final**: resolva esses exercícios usando apenas `String`, `Array`, `Map`, `Set` e `Regex`. Depois refatore pensando em legibilidade e performance.
