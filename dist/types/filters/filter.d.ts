import { Log } from '../domains/log';
import { Logger } from '../logger';
export interface Filter {
    filter(log: Log, context: Logger): boolean;
}
