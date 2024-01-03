import { ConsoleAppender } from './console-appender';
import { defaultLayout } from '../layouts';
import { defaultFilter } from '../filters';

export type { Appender } from './appender';
export { ConsoleAppender };

export const defaultAppender = new ConsoleAppender(
  defaultLayout,
  [
    defaultFilter,
  ],
);
