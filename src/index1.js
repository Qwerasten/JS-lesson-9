export function sumMult(a, b) {
    return [a + b, a * b];
}
export function sumLength(s1, s2) {
    return s1.length + s2.length;
}
export function sumOfNumbers(n) {
    const str = String(n);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}
