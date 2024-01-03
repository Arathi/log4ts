import { Filter } from './filter';
import { Log } from '../domains/log';
import { Logger } from '../logger.ts';

export class ThresholdFilter implements Filter {
  constructor() {
  }

  filter(log: Log, context: Logger): boolean {
    return log.level >= context.level;
  }
}
