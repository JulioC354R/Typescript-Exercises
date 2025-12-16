function mostFrequentWord(str: string) {
  let mostFrequent = "";
  let frequency = 0;
  const wordsMap = new Map<string, number>();
  let words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordFrequency = wordsMap.get(word) || 0;
    if (wordFrequency) {
      wordsMap.set(word, wordFrequency + 1);
      if (wordFrequency + 1 > frequency) mostFrequent = word;
    } else {
      wordsMap.set(word, 1);
    }
  }
  return mostFrequent;
}

console.log(mostFrequentWord("The quick brown fox jumps over the lazy dog")); // "the"
