function string_parameterize(str: string) {
  str = str.replaceAll(".", "");
  str = str.replaceAll(" ", "-");
  return str.toLowerCase();
}

console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"
