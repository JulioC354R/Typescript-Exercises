function humanize_format(num: number): string {
  let numStr = num.toString();
  let complement = "";
  const UnitNumber = Number(numStr[numStr.length - 1]);

  if (UnitNumber === 1) complement = "st";
  else if (UnitNumber === 2) complement = "nd";
  else if (UnitNumber === 3) complement = "rd";
  else if (UnitNumber > 3) complement = "th";
  return numStr + complement;
}
console.log(humanize_format(301)); // "301st"
