import { Filter } from './filter';
import { Log } from '../domains/log';
import { Logger } from '../logger.ts';

export class LevelMatchFilter implements Filter {
  constructor() {
  }

  filter(log: Log, context: Logger): boolean {
    return log.level == context.level;
  }
}
