export function arraySum(a) {
  const sum = a.reduce((n1, n2) => n1 + n2);
  return sum;
}
export function arrayBy2(a) {
  const b = a.map((item) => 2 * item);
  return b;
}
export function getMinAndMax(a) {
  const b = a.sort((n1, n2) => n1 - n2);
  return [b[0], b[b.length - 1]];
}
