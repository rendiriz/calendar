'use client';

import { id } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { weekendDates } from '@/lib/weekendDates';

interface Props {
  readonly year: number;
  readonly month: number;
  readonly holiday: any;
}

export default function Month({ year, month, holiday }: Props) {
  const nationalHoliday = holiday.filter(
    (item: any) => item.status === 'holiday',
  );
  const nationalHolidaySelected = nationalHoliday.map(
    (item: any) => new Date(item.year, item.month - 1, item.day),
  );
  const nationalHolidayStyle = { backgroundColor: '#f87171', color: '#fff' };

  const massLeave = holiday.filter((item: any) => item.status === 'massLeave');
  const massLeaveSelected = massLeave.map(
    (item: any) => new Date(item.year, item.month - 1, item.day),
  );
  const massLeaveStyle = { backgroundColor: '#34d399', color: '#fff' };

  const weekendSelected = weekendDates(year, month + 1);
  const weekendStyle = { color: '#f87171' };

  const footer = (
    <ul className="mt-2 text-xs">
      {holiday.map((item: any) => (
        <li
          key={item.day}
          className={cn(
            item.status === 'holiday' ? 'text-red-400' : 'text-green-400',
          )}
        >
          {item.day}: {item.description}
        </li>
      ))}
    </ul>
  );

  return (
    <Calendar
      disableNavigation
      mode="multiple"
      defaultMonth={new Date(year, month)}
      className="flex justify-center w-full"
      locale={id}
      weekStartsOn={0}
      modifiers={{
        weekend: weekendSelected,
        nationalHoliday: nationalHolidaySelected,
        massLeave: massLeaveSelected,
      }}
      modifiersStyles={{
        weekend: weekendStyle,
        nationalHoliday: nationalHolidayStyle,
        massLeave: massLeaveStyle,
      }}
      footer={footer}
    />
  );
}
