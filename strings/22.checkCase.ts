function isCamelCase(str: string): boolean {
  let camelCaseRegex = /^[a-z][A-Za-z]*$/;
  return camelCaseRegex.test(str);
}
function isPascalCase(str: string) {
  let pascalCaseRegex = /^[A-Z][A-Za-z]*$/;
  return pascalCaseRegex.test(str);
}

function isKebabCase(str: string) {
  let kebabCaseRegex = /^[a-z-]+$/;
  return kebabCaseRegex.test(str);
}
console.log(isCamelCase("helloWorld")); // true
console.log(isPascalCase("HelloWorld")); // true
console.log(isKebabCase("hello-world")); // true
