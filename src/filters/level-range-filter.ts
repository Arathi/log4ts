import { Filter } from './filter';
import { Log, LogLevel } from '../domains/log';
import { Logger } from '../logger.ts';

export class LevelRangeFilter implements Filter {
  minLevel: LogLevel;
  maxLevel: LogLevel;

  constructor(minLevel: LogLevel, maxLevel: LogLevel) {
    this.minLevel = minLevel;
    this.maxLevel = maxLevel;
  }

  filter(log: Log, _context: Logger): boolean {
    return log.level >= this.minLevel && log.level <= this.maxLevel;
  }
}
