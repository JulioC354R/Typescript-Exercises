function is_Blank(value: string) {
  if (!value) return true;
  return false;
}

console.log(is_Blank("")); // true
console.log(is_Blank("abc")); // false
