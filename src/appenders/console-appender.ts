import { Appender } from './appender';
import { Log, LogLevel } from '../domains/log';
import { Layout } from '../layouts';
import { Filter } from '../filters';
import { Logger } from '../logger';

export class ConsoleAppender implements Appender {
  layout: Layout;
  filters: Filter[];

  constructor(layout: Layout, filters: Filter[] = []) {
    this.layout = layout;
    this.filters = filters;
  }

  append(log: Log, context: Logger) {
    const data = this.layout.render(log);

    let output = true;
    for (const filter of this.filters) {
      output = filter.filter(log, context);
      if (!output) {
        break;
      }
    }

    if (output) {
      switch (log.level) {
        case LogLevel.Debug:
          console.debug(...data);
          break;
        case LogLevel.Info:
          console.info(...data);
          break;
        case LogLevel.Warning:
          console.warn(...data);
          break;
        case LogLevel.Error:
          console.error(...data);
          break;
      }
    }
  }
}
