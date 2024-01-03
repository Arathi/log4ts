import { Appender, defaultAppender } from './appenders';
import { Log, LogLevel } from './domains/log';

const NAME_DEFAULT = 'ROOT';
const LOG_LEVEL_DEFAULT = LogLevel.Info;

export interface LoggerOptions {
  level?: LogLevel;
  appenders?: Appender[];
}

export class Logger {
  name: string;
  level: LogLevel = LOG_LEVEL_DEFAULT;
  appenders: Appender[] = [];

  constructor(name: string = NAME_DEFAULT, options: LoggerOptions = {}) {
    this.name = name;

    if (options.level != undefined) {
      this.level = options.level;
    }

    if (options.appenders != undefined) {
      this.appenders = options.appenders;
    }
    if (this.appenders.length == 0) {
      this.appenders.push(defaultAppender);
    }
  }

  debug(...data: any[]) {
    this.append(LogLevel.Debug, ...data);
  }

  info(...data: any[]) {
    this.append(LogLevel.Info, ...data);
  }

  warn(...data: any[]) {
    this.append(LogLevel.Warning, ...data);
  }

  error(...data: any[]) {
    this.append(LogLevel.Error, ...data);
  }

  append(level: LogLevel, ...data: any[]) {
    const log: Log = {
      time: new Date(),
      level: level,
      name: this.name,
      message: data,
    };

    for (const appender of this.appenders) {
      appender.append(log, this);
    }
  }
}
