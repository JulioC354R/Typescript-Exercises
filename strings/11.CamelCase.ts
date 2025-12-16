function camelize(str: string) {
  let words = str.split(" ");
  let convertedWords: string[] = [];

  for (let index in words) {
    let word = words[index];
    let firstChar = word.at(0) || "";
    let newWord = word.replace(firstChar, firstChar.toUpperCase());
    convertedWords.push(newWord);
  }
  return convertedWords.join("");
}
console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"
console.log(
  camelize("comtemplem o magoooo com seus podeeereeees incriveis podereeeesss")
); //ComtemplemOMagooooComSeusPodeeereeeesIncriveisPodereeeesss
