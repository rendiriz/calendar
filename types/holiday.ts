export interface Holiday {
  year: number;
  month: number;
  day: number;
  description: string;
  status: 'holiday' | 'massLeave';
}
