export function diff(a, b) {
    return Math.abs(a - b);
}
export function isWord(str) {
    return str.indexOf(' ') === -1;
}

export function pow(x, n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= x;
    }
    return res;
}
