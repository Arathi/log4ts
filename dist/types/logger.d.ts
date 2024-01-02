export declare enum LogLevel {
    All = 0,
    Debug = 1,
    Info = 2,
    Warning = 3,
    Error = 4,
    Off = 5
}
export interface LoggerOptions {
    pattern?: string;
    level?: LogLevel;
}
export declare class Logger {
    name: string;
    options: LoggerOptions;
    constructor(name?: string, options?: LoggerOptions);
    private get level();
    private getPrefix;
    debug(...data: any[]): void;
    info(...data: any[]): void;
    warn(...data: any[]): void;
    error(...data: any[]): void;
}
