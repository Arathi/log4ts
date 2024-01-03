export const ISO8601 = 'YYYY-MM-DDTHH:mm:ss.SSS';

export class DateFormatter {
  pattern: string;

  constructor(pattern: string = ISO8601) {
    this.pattern = pattern;
  }

  format(date: Date = new Date()) {
    let formatted = this.pattern + '';

    formatted = formatted.replace('YYYY', this.formatYear(date, 4));
    formatted = formatted.replace('YY', this.formatYear(date, 2));
    formatted = formatted.replace('Y', this.formatYear(date));

    formatted = formatted.replace('MM', this.formatMonth(date, 2));
    formatted = formatted.replace('M', this.formatMonth(date));

    formatted = formatted.replace('DD', this.formatDay(date, 2));
    formatted = formatted.replace('D', this.formatDay(date));

    formatted = formatted.replace('HH', this.formatHour(date, 2));
    formatted = formatted.replace('H', this.formatHour(date));

    formatted = formatted.replace('mm', this.formatMinute(date, 2));
    formatted = formatted.replace('m', this.formatMinute(date));

    formatted = formatted.replace('ss', this.formatSecond(date, 2));
    formatted = formatted.replace('s', this.formatSecond(date));

    formatted = formatted.replace('SSS', this.formatMillisecond(date, 3));
    formatted = formatted.replace('SS', this.formatMillisecond(date, 2));
    formatted = formatted.replace('S', this.formatMillisecond(date, 1));

    return formatted;
  }

  formatYear(date: Date, length: number = 0): string {
    const fullYear = date.getFullYear();
    const year = fullYear % 100;

    switch (length) {
      case 4:
        return `${fullYear}`.padStart(4, '0');
      case 2:
        return `${year}`.padStart(2, '0');
    }

    return `${fullYear}`;
  }

  formatMonth(date: Date, length: number = 0): string {
    const month = date.getMonth() + 1;
    if (length == 2) {
      return `${month}`.padStart(2, '0');
    }
    return `${month}`;
  }

  formatDay(date: Date, length: number = 0): string {
    const day = date.getDay();
    if (length == 2) {
      return `${day}`.padStart(2, '0');
    }
    return `${day}`;
  }

  formatHour(date: Date, length: number = 0): string {
    const hour = date.getHours();
    if (length == 2) {
      return `${hour}`.padStart(2, '0');
    }
    return `${hour}`;
  }

  formatMinute(date: Date, length: number = 0): string {
    const min = date.getMinutes();
    if (length == 2) {
      return `${min}`.padStart(2, '0');
    }
    return `${min}`;
  }

  formatSecond(date: Date, length: number = 0): string {
    const sec = date.getSeconds();
    if (length == 2) {
      return `${sec}`.padStart(2, '0');
    }
    return `${sec}`;
  }

  formatMillisecond(date: Date, length: number = 0): string {
    const ms3 = date.getMilliseconds();
    const ms2 = Math.floor(ms3 / 10);
    const ms1 = Math.floor(ms3 / 100);

    switch (length) {
      case 3:
        return `${ms3}`.padStart(3, '0');
      case 2:
        return `${ms2}`.padStart(2, '0');
      case 1:
        return `${ms1}`;
    }

    return "0";
  }
}

export function format(formatter: string = "Y-M-D H:m:s.S", date: Date = new Date()) {
  let formatted = formatter;

  const year = `${date.getFullYear()}`.padStart(4, '0');
  const month = `${date.getMonth()+1}`.padStart(2, '0');
  const day = `${date.getDay()}`.padStart(2, '0');
  const hour = `${date.getHours()}`.padStart(2, '0');
  const minute = `${date.getMinutes()}`.padStart(2, '0');
  const second = `${date.getSeconds()}`.padStart(2, '0');
  const millisecond = `${date.getMilliseconds()}`.padStart(3, '0');

  formatted = formatted.replace('YYYY', year);
  formatted = formatted.replace('YY', year);
  formatted = formatted.replace('Y', year);

  formatted = formatted.replace('MM', month);
  formatted = formatted.replace('M', month);

  formatted = formatted.replace('DD', day);
  formatted = formatted.replace('D', day);

  formatted = formatted.replace('HH', hour);
  formatted = formatted.replace('H', hour);

  formatted = formatted.replace('mm', minute);
  formatted = formatted.replace('m', minute);

  formatted = formatted.replace('ss', second);
  formatted = formatted.replace('s', second);

  formatted = formatted.replace('SSS', millisecond);
  formatted = formatted.replace('S', millisecond);

  return formatted;
}
