function capitalize_Words(str: string) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word = word.replace(word[0], word[0].toUpperCase());
    words[i] = word;
  }
  return words.join(" ");
}

console.log(capitalize_Words("js string exercises")); // "Js String Exercises"
