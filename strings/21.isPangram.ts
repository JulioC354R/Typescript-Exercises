function isPangram(str: string): boolean {
  const letters = new Map<string, boolean>();
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/^[a-z]/)) {
      letters.set(str[i], true);
    }
  }
  return letters.size == 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
