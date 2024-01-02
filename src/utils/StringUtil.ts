export enum PadPosition {
  Start,
  End,
  Center,
}

export function pad(str: string, length: number, fill: string = ' ', padPos?: PadPosition) {
  if (length == 0) {
    return str;
  }

  const maxLength = Math.abs(length);
  if (str.length == maxLength) {
    return str;
  }

  let pos = length > 0 ? PadPosition.End : PadPosition.Start;
  if (padPos != undefined) {
    pos = padPos;
  }

  if (str.length > maxLength) {
    const start = str.substring(0, length-6);
    const end = str.substring(str.length-3);
    return `${start}...${end}`;
  }

  if (pos == PadPosition.Start) {
    return str.padStart(maxLength, fill);
  }

  if (pos == PadPosition.End) {
    return str.padEnd(maxLength, fill);
  }

  // 居中对齐
  const delta = maxLength - str.length;
  const leftLength = str.length + Math.ceil(delta / 2);
  return str.padStart(leftLength, fill).padEnd(maxLength, fill);
}
