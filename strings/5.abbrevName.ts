function abbrev_name(name: string) {
  const lastName = name.split(" ").pop() || "";
  return name.replace(lastName, lastName[0] + ".");
}

console.log(abbrev_name("Robin Singh")); // "Robin S."
