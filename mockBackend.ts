let users: { email: string; password: string }[] = [];

export function signUpUser(email: string, password: string): boolean {
  let exist = users.find(user => user.email === email);
  if (exist) return false;

  users.push({ email, password });
  return true;
}

export function signInUser(email: string, password: string): boolean {
  return users.some(user => user.email === email && user.password === password);
}
