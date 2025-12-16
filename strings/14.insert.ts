function insert(str: string, strToInsert: string, index: number) {
  let stringPart1 = str.slice(0, index);
  let stringPart2 = str.slice(index);
  return stringPart1 + strToInsert + stringPart2;
}

console.log(insert("We are doing some exercises.", "JavaScript ", 18));
// "We are doing some JavaScript exercises."
