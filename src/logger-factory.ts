import {Logger} from './logger';

export class LoggerFactory {
  static loggers: Map<string, Logger> = new Map<string, Logger>();

  static getLogger(name: string) {
    if (LoggerFactory.loggers.has(name)) return LoggerFactory.loggers.get(name);
    const logger = new Logger(name);
    LoggerFactory.loggers.set(name, logger);
    return logger;
  }
}
