function repeat(str: string, times: number) {
  let newStr = "";
  for (let index = 0; index < times; index++) {
    newStr = newStr + str;
  }
  return newStr;
}
console.log(repeat("Ha!", 3)); // "Ha!Ha!Ha!"
console.log(repeat("Uepaaa", 0)); // ""
console.log(repeat("Contemplem o MAGOOOOOOOOO! ", 2)); // "Contemplem o MAGOOOOOOOOO! Contemplem o MAGOOOOOOOOO! "
