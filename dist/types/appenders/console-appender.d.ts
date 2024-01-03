import { Appender } from './appender';
import { Log } from '../domains/log';
import { Layout } from '../layouts';
import { Filter } from '../filters';
import { Logger } from '../logger';
export declare class ConsoleAppender implements Appender {
    layout: Layout;
    filters: Filter[];
    constructor(layout: Layout, filters?: Filter[]);
    append(log: Log, context: Logger): void;
}
