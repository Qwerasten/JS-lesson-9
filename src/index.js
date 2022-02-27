//номер 1
export function sum_mult(a, b) {
    console.log(a + b);
    console.log(a * b);
    return [a + b, a * b];
}
export function sum_length(s1, s2) {
    console.log(s1.length + s2.length);
    return s1.length + s2.length;
}
export function sumOfNumbers(n) {
    let str = String(n);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}
//номер 2
export function max(a, b) {
    return a > b ? a : b;
}

export function monthName(n) {
    switch (n) {
        case 1: return "Январь";
        case 2: return "Февраль";
        case 3: return "Март";
        case 4: return "Апрель";
        case 5: return "Май";
        case 6: return "Июнь";
        case 7: return "Июль";
        case 8: return "Август";
        case 9: return "Сентябрь";
        case 10: return "Октябрь";
        case 11: return "Ноябрь";
        case 12: return "Декабрь";
    }
}
export function isCircleInSquare(cr, sq) {
    return (Math.sqrt(cr / Math.PI) < Math.sqrt(sq) / 2);
}
//номер 3

