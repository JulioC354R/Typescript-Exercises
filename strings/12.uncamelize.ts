function uncamelize(str: string, separator: string) {
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      newString = newString.concat(separator, char.toLowerCase());
    } else {
      newString = newString.concat(char);
    }
  }
  return newString;
}
console.log(uncamelize("helloWorld", "-")); // "hello-world"
