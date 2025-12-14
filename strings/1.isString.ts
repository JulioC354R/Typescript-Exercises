function is_string(value: any) {
  if (typeof value === "string") return true;
  return false;
}

console.log(is_string("w3resource")); // true
console.log(is_string([1, 2, 4, 0])); // false
