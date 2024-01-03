import {Log} from '../domains/log';
import { Logger } from '../logger';

export interface Appender {
  append(log: Log, context: Logger): void;
}
