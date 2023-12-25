export enum LogLevel {
  Debug = "DEBUG",
  Info = "INFO",
  Warning = "WARN",
  Error = "ERROR",
}

export class Logger {
  name: string;

  constructor(name: string = "ROOT") {
    this.name = name;
  }

  private get time(): string {
    const now = new Date();
    const year = `${now.getFullYear()}`.padStart(4, '0');
    const month = `${now.getMonth()}`.padStart(2, '0');
    const day = `${now.getDay()}`.padStart(2, '0');
    const hour = `${now.getHours()}`.padStart(2, '0');
    const minute = `${now.getMinutes()}`.padStart(2, '0');
    const second = `${now.getSeconds()}`.padStart(2, '0');
    const millisecond = `${now.getMilliseconds()}`.padStart(3, '0');
    return `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`;
  }

  private getPrefix(level: LogLevel): string {
    return `${this.time} {${this.name}} [${level}] `;
  }

  debug(...data: any[]) {
    console.debug(this.getPrefix(LogLevel.Debug), ...data);
  }

  info(...data: any[]) {
    console.info(this.getPrefix(LogLevel.Info), ...data);
  }

  warn(...data: any[]) {
    console.warn(this.getPrefix(LogLevel.Warning), ...data);
  }

  error(...data: any[]) {
    console.error(this.getPrefix(LogLevel.Error), ...data);
  }
}
