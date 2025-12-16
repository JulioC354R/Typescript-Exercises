function isPalindrome(str: string) {
  let strFormatted = str.toLowerCase().replace(/[^a-z]+/g, "");
  let reverseString = strFormatted.split("").reverse().join("");

  return strFormatted === reverseString;
}

console.log(isPalindrome("A man, a plan, a canal - Panama")); // true
