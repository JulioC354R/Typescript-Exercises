function swapcase(str: string) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let upperChar = str[i].toUpperCase();
    if (str[i] === upperChar) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += upperChar;
    }
  }
  return newStr;
}
console.log(swapcase("AaBbc")); // "aAbBC"
