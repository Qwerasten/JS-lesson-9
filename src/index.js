// номер 1
export function sumMult(a, b) {
    // console.log(a + b);
    // console.log(a * b);
    return [a + b, a * b];
}
export function sumLength(s1, s2) {
    // console.log(s1.length + s2.length);
    return s1.length + s2.length;
}
export function sumOfNumbers(n) {
    const str = String(n);
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum
            += Number(str[i]);
    }
    return sum;
}
// номер 2
export function max(a, b) {
    return a > b ? a : b;
}

export function monthName(n) {
    let month = '';
    switch (n) {
        case 1: month = 'Январь';
            break;
        case 2: month = 'Февраль';
            break;
        case 3: month = 'Март';
            break;
        case 4: month = 'Апрель';
            break;
        case 5: month = 'Май';
            break;
        case 6: month = 'Июнь';
            break;
        case 7: month = 'Июль';
            break;
        case 8: month = 'Август'; break;
        case 9: month = 'Сентябрь'; break;
        case 10: month = 'Октябрь'; break;
        case 11: month = 'Ноябрь'; break;
        case 12: month = 'Декабрь'; break;
        default: month = 'Такого месяца нет';
    }
    return month;
}
export function isCircleInSquare(cr, sq) {
    return (Math.sqrt(cr / Math.PI) < Math.sqrt(sq) / 2);
}
// номер 3
