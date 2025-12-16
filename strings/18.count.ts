function count(str: string, expression: string): number {
  return str.toLowerCase().split(expression).length - 1;
}

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // 2
