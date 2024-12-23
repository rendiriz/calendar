import { Info } from 'lucide-react';

import Footer from '@/components/footer';
import Month from '@/components/month';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { year } from '@/data/year';
import type { Holiday } from '@/types/holiday';
import { getHolidayData } from '@/utils/holidayLoader';

interface Props {
  readonly params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: Props) => {
  return {
    title: `Kalender ${params.slug} - Rendi Riz`,
    description: `Kalender ${params.slug} lengkap beserta libur nasional`,
  };
};

export async function generateStaticParams() {
  const years = year;

  return years.map((item) => ({
    slug: item.year.toString(),
  }));
}

function monthHoliday(holidays: Holiday[], year: number, month: number) {
  return holidays.filter((item) => item.year === year && item.month === month);
}

export default async function CalendarPage({ params }: Props) {
  const month = Array.from({ length: 12 }, (_, i) => i);
  const holiday = await getHolidayData(params.slug);

  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;
  const todayDay = new Date().getDate();

  const currentHoliday = holiday.find(
    (item: Holiday) =>
      item.year === todayYear &&
      item.month === todayMonth &&
      item.day === todayDay,
  );

  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-4 py-8">
        <h1 className="mb-8 font-serif text-5xl font-extrabold">
          Kalender {params.slug}
        </h1>

        {currentHoliday && (
          <Alert
            variant="info"
            className="mb-8"
          >
            <Info className="h-4 w-4" />
            <AlertTitle>
              Hari ini adalah hari{' '}
              {currentHoliday.status === 'holiday' ? 'libur' : 'cuti bersama'}
            </AlertTitle>
            <AlertDescription>{currentHoliday.description}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {month.map((item: number) => (
            <Month
              key={item}
              year={Number(params.slug)}
              month={item}
              holiday={monthHoliday(holiday, Number(params.slug), item + 1)}
            />
          ))}
        </div>
      </main>

      <div className="mt-8 border-t">
        <div className="mx-auto w-full max-w-7xl p-4">
          <Footer />
        </div>
      </div>
    </>
  );
}
