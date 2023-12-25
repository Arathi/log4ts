import { Logger } from './logger';
export declare class LoggerFactory {
    static loggers: Map<string, Logger>;
    static getLogger(name: string): Logger | undefined;
}
