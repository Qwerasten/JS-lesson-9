export function sum50to100() {
    let sum = 0;
    for (let i = 50; i <= 100; i++) {
        sum += i;
    }
    return sum;
}
export function multBy7(n) {
    /* for (let i = 1; i <= 9; i++) {
        console.log(`7 x ${i} = ${7 * i}`);
    } */
    if (n > 0 && n <= 10) return `7 x ${n} = ${7 * n}`;
    return 'Out of Range';
}
export function average(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum / n;
}
