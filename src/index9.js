export function isRight(a, b, c) {
  if (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a
  ) {
    return true;
  }
  return false;
}

export function lengthAndSquare(r) {
  return [2 * Math.PI * r, Math.PI * r * r];
}

export function roots(a, b, c) {
  const d = b * b - 4 * a * c;
  let x1;
  let x2;
  if (d > 0) {
    x1 = (-b - Math.sqrt(d)) / (2 * a);
    x2 = (-b + Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
  if (d === 0) return -b / (2 * a);
  return "Действительных корней нет";
}
