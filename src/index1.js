export function sumMult(a, b) {
  console.log(a + b);
  console.log(a * b);
}
export function sumLength(s1, s2) {
  console.log(s1.length + s2.length);
}
export function sumOfNumbers() {
  const str = prompt("Введите число");
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  console.log(sum);
}
