import { Layout } from './layout';
import { Log, LogLevel } from '../domains/log';
export declare class PatternLayout implements Layout {
    pattern: string;
    constructor(pattern?: string);
    renderPrefix(time: Date, level: LogLevel, name: string): string;
    render(log: Log): any[];
}
