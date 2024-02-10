export function weekendDates(year: number, month: number) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);

  const weekends = [];

  while (startDate <= endDate) {
    if (startDate.getDay() === 0 || startDate.getDay() === 6) {
      weekends.push(new Date(startDate));
    }

    startDate.setDate(startDate.getDate() + 1);
  }

  return weekends;
}
