import { pad } from './utils/StringUtil';
import { format } from './utils/DateUtil';

export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warning = 3,
  Error = 4,
  Off = 5,
}

const LogLevelNames = [
  "ALL",
  "DEBUG",
  "INFO",
  "WARN",
  "ERROR",
  "OFF",
];

const NAME_DEFAULT = "ROOT";
const DATE_FORMAT_DEFAULT = "Y-M-D H:m:s.S";
const PATTERN_DEFAULT = `%D{Y-M-D H:m:s.S} {%N} [%-5L] `;
const LOG_LEVEL_DEFAULT = LogLevel.All;

const DATE_PATTERN = /%D(\{(.*?)})?/;
const NAME_PATTERN = /%([+-]?\d+)?N/;
const LEVEL_PATTERN = /%([+-]?\d+)?L/;

export interface LoggerOptions {
  pattern?: string;
  level?: LogLevel;
}

const OPTIONS_DEFAULT: LoggerOptions = {
  pattern: PATTERN_DEFAULT,
  level: LOG_LEVEL_DEFAULT,
};

export class Logger {
  name: string;
  options: LoggerOptions;

  constructor(name: string = NAME_DEFAULT, options: LoggerOptions = {}) {
    this.name = name;
    this.options = Object.assign(OPTIONS_DEFAULT, options);
  }

  private get level(): LogLevel {
    return this.options.level ?? LogLevel.All;
  }

  private getPrefix(level: LogLevel): string {
    let prefix = this.options.pattern ?? PATTERN_DEFAULT;

    let matcher = DATE_PATTERN.exec(prefix);
    if (matcher != null) {
      // 生成日期时间
      let formatter: string | undefined = matcher[2];
      if (formatter == undefined) {
        formatter = DATE_FORMAT_DEFAULT;
      }
      const date = format(formatter!);
      prefix = prefix.replace(DATE_PATTERN, date);
    }

    matcher = NAME_PATTERN.exec(prefix);
    if (matcher != null) {
      // 生成名称
      let lengthStr = matcher[1];
      let length: number = 0;
      if (lengthStr != undefined) {
        length = Number(lengthStr);
      }
      const name = pad(this.name, length);
      prefix = prefix.replace(NAME_PATTERN, name);
    }

    matcher = LEVEL_PATTERN.exec(prefix);
    if (matcher != null) {
      // 生成日志级别名称
      let lengthStr = matcher[1];
      let length: number = 0;
      if (lengthStr != undefined) {
        length = Number(lengthStr);
      }
      let name = LogLevelNames[level];
      name = pad(name, length);
      prefix = prefix.replace(LEVEL_PATTERN, name);
    }

    return prefix;
  }

  debug(...data: any[]) {
    if (this.level <= LogLevel.Debug) {
      console.debug(this.getPrefix(LogLevel.Debug), ...data);
    }
  }

  info(...data: any[]) {
    if (this.level <= LogLevel.Info) {
      console.info(this.getPrefix(LogLevel.Info), ...data);
    }
  }

  warn(...data: any[]) {
    if (this.level <= LogLevel.Warning) {
      console.warn(this.getPrefix(LogLevel.Warning), ...data);
    }
  }

  error(...data: any[]) {
    if (this.level <= LogLevel.Error) {
      console.error(this.getPrefix(LogLevel.Error), ...data);
    }
  }
}
