function protect_email(email: string): string {
  const slicedEmail = email.split("@");
  let username = slicedEmail[0];
  let hidenUserName = username.slice(0, username.length / 2) + "...";
  slicedEmail[0] = hidenUserName;

  return slicedEmail.join("@");
}

console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
