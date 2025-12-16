function text_truncate(str: string, index: number) {
  let newStr = str.slice(0, index);
  return newStr + "...";
}

console.log(text_truncate("We are doing JS string exercises.", 16)); // "We are doing JS ..."
