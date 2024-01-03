import { Filter } from './filter';
import { Log } from '../domains/log';
import { Logger } from '../logger.ts';
export declare class LevelMatchFilter implements Filter {
    constructor();
    filter(log: Log, context: Logger): boolean;
}
