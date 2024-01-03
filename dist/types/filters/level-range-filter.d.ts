import { Filter } from './filter';
import { Log, LogLevel } from '../domains/log';
import { Logger } from '../logger.ts';
export declare class LevelRangeFilter implements Filter {
    minLevel: LogLevel;
    maxLevel: LogLevel;
    constructor(minLevel: LogLevel, maxLevel: LogLevel);
    filter(log: Log, _context: Logger): boolean;
}
