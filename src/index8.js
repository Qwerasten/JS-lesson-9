function dateFromStr(strDate) {
  const [day, month, year] = strDate.split(".");
  return new Date(year, month - 1, day);
}

export function dayOfWeek(strDate) {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const date1 = dateFromStr(strDate);
  return daysOfWeek[date1.getDay()];
}

export function minsFromMidnight() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

export function whoIsYanger(strDate1, strDate2) {
  const date1 = dateFromStr(strDate1);
  const date2 = dateFromStr(strDate2);
  if (date1 < date2) return "Second";
  if (date2 < date1) return "First";
  return "Equal";
}
