function mostFrequentChar(str: string) {
  const charMap = new Map<string, number>();
  let mostFrequent = "";
  let frequency = 0;
  for (let i = 0; i < str.length; i++) {
    let count = charMap.get(str[i]);
    if (count) {
      charMap.set(str[i], count + 1);
      if (count + 1 > frequency) {
        mostFrequent = str[i];
      }
    } else {
      charMap.set(str[i], 1);
    }
  }

  return mostFrequent;
}

console.log(mostFrequentChar("HellloL223LLL")); // "L"
