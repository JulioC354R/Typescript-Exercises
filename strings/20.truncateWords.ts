function truncate(str: string, words: number) {
  const strArray = str.split(" ");
  for (let i = strArray.length; words < strArray.length; i--) {
    strArray.pop();
  }
  return strArray.join(" ");
}

console.log(truncate("The quick brown fox jumps over the lazy dog", 4));
// "The quick brown fox"
