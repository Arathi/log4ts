export function format(formatter: string = "Y-M-D H:m:s.S", date: Date = new Date()) {
  let formatted = formatter;

  const year = `${date.getFullYear()}`.padStart(4, '0');
  const month = `${date.getMonth()+1}`.padStart(2, '0');
  const day = `${date.getDay()}`.padStart(2, '0');
  const hour = `${date.getHours()}`.padStart(2, '0');
  const minute = `${date.getMinutes()}`.padStart(2, '0');
  const second = `${date.getSeconds()}`.padStart(2, '0');
  const millisecond = `${date.getMilliseconds()}`.padStart(3, '0');

  formatted = formatted.replace('Y', year);
  formatted = formatted.replace('M', month);
  formatted = formatted.replace('D', day);
  formatted = formatted.replace('H', hour);
  formatted = formatted.replace('m', minute);
  formatted = formatted.replace('s', second);
  formatted = formatted.replace('S', millisecond);

  return formatted;
}