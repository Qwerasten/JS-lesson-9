export function isDate(str) {
    const reg = /\d{2}[\.\/]\d{2}[\.\/]\d{2,4}/;
    return reg.test(str);
}

export function isEmail(str) {
    const reg = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
    return reg.test(str);
}
