export function isValidNumber(value: string): boolean {
  const n = Number(value);
  return !isNaN(n) && n > 0;
}
