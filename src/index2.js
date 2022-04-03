export function max(a, b) {
  return a > b ? a : b;
}

export function getMonthName(n) {
  const monthArray = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  if (n > 0 && n <= 12) return monthArray[n - 1];
  return "Такого месяца нет";
}

export function isCircleInSquare(cr, sq) {
  return Math.sqrt(cr / Math.PI) < Math.sqrt(sq) / 2;
}
