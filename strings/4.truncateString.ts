function truncate_string(str: string, index: number): string {
  return str.slice(0, index);
}
console.log(truncate_string("Robin Singh", 4)); // "Robi"
