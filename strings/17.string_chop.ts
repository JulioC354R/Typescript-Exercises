function string_chop(str: string, size: number): string[] {
  const stringArray: string[] = [];
  const loops = Math.floor(str.length / size);

  for (let i = 0; i <= loops; i++) {
    let slicedString = str.slice(i * loops, i * loops + size);
    stringArray.push(slicedString);
  }
  return stringArray;
}

console.log(string_chop("w3resource", 3)); // ["w3r", "eso", "urc", "e"]
