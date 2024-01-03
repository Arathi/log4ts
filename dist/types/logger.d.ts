import { Appender } from './appenders';
import { LogLevel } from './domains/log';
export interface LoggerOptions {
    level?: LogLevel;
    appenders?: Appender[];
}
export declare class Logger {
    name: string;
    level: LogLevel;
    appenders: Appender[];
    constructor(name?: string, options?: LoggerOptions);
    debug(...data: any[]): void;
    info(...data: any[]): void;
    warn(...data: any[]): void;
    error(...data: any[]): void;
    append(level: LogLevel, ...data: any[]): void;
}
