export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warning = 3,
  Error = 4,
  Off = 5,
}

export const LogLevelNames = [
  'ALL',
  'DEBUG',
  'INFO',
  'WARN',
  'ERROR',
  'OFF',
];

export interface Log {
  time: Date;
  level: LogLevel;
  name: string;
  message: any[];
}
