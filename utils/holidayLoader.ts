export async function getHolidayData(year: string) {
  try {
    const { holiday } = await import(`@/data/holiday-${year}`);
    return holiday;
  } catch (error) {
    console.error(`Error loading holiday data for year ${year}:`, error);
    return [];
  }
}
