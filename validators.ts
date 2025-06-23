export function isEmailValid(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isPasswordStrong(password: string): boolean {
  return password.length >= 8;
}

export function doPasswordsMatch(p1: string, p2: string): boolean {
  return p1 === p2;
}

export function isRequired(value: string): boolean {
  return value.trim() !== '';
}
