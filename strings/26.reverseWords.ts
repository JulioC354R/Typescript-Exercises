function reverseWords(text: string): string {
  const words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    let reverseWord = words[i].split("").reverse().join("");
    words[i] = reverseWord;
  }

  return words.join(" ");
}

console.log(reverseWords("JavaScript Exercises")); // "tpircSavaJ sesicrexE"
