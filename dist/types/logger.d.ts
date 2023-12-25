export declare enum LogLevel {
    Debug = "DEBUG",
    Info = "INFO",
    Warning = "WARN",
    Error = "ERROR"
}
export declare class Logger {
    name: string;
    constructor(name?: string);
    private get time();
    private getPrefix;
    debug(...data: any[]): void;
    info(...data: any[]): void;
    warn(...data: any[]): void;
    error(...data: any[]): void;
}
