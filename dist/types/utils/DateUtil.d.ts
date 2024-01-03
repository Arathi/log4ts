export declare const ISO8601 = "YYYY-MM-DDTHH:mm:ss.SSS";
export declare class DateFormatter {
    pattern: string;
    constructor(pattern?: string);
    format(date?: Date): string;
    formatYear(date: Date, length?: number): string;
    formatMonth(date: Date, length?: number): string;
    formatDay(date: Date, length?: number): string;
    formatHour(date: Date, length?: number): string;
    formatMinute(date: Date, length?: number): string;
    formatSecond(date: Date, length?: number): string;
    formatMillisecond(date: Date, length?: number): string;
}
export declare function format(formatter?: string, date?: Date): string;
