export declare enum LogLevel {
    All = 0,
    Debug = 1,
    Info = 2,
    Warning = 3,
    Error = 4,
    Off = 5
}
export declare const LogLevelNames: string[];
export interface Log {
    time: Date;
    level: LogLevel;
    name: string;
    message: any[];
}
