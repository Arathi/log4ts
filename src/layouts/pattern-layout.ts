import { Layout } from './layout';
import { Log, LogLevel, LogLevelNames } from '../domains/log';
import { ISO8601, DateFormatter } from '../utils/DateUtil';

const DEFAULT_PATTERN = '%d{YYYY-MM-DD HH:mm:ss.SSS} [%-5l] {%24n} ';

const DATE_REGEXP = /%d(\{(.*?)})?/;
const LEVEL_REGEXP = /%([+-]?\d+)?l/;
const NAME_REGEXP = /%([+-]?\d+)?n/;

export class PatternLayout implements Layout {
  pattern: string;

  constructor(pattern: string = DEFAULT_PATTERN) {
    this.pattern = pattern
  }

  renderPrefix(time: Date, level: LogLevel, name: string) {
    let prefix = this.pattern + '';

    let matcher = DATE_REGEXP.exec(prefix);
    if (matcher != null) {
      const pattern = matcher[2] ?? ISO8601;
      const formatter = new DateFormatter(pattern);
      const formatted = formatter.format(time);
      prefix = prefix.replace(DATE_REGEXP, formatted);
    }

    matcher = LEVEL_REGEXP.exec(prefix);
    if (matcher != null) {
      let levelName = LogLevelNames[level];
      const lengthStr = matcher[1] ?? '0';
      const length = Number(lengthStr);
      const width = Math.abs(length);
      if (length > 0) {
        levelName = levelName.padEnd(width, ' ');
      }
      else if (length < 0) {
        levelName = levelName.padStart(width, ' ');
      }
      prefix = prefix.replace(LEVEL_REGEXP, levelName);
    }

    matcher = NAME_REGEXP.exec(prefix);
    if (matcher != null) {
      let logName = name;
      const lengthStr = matcher[1] ?? '0';
      const length = Number(lengthStr);
      const width = Math.abs(length);

      if (width > logName.length) {
        // 名称过短，pad
        if (length > 0) {
          logName = logName.padEnd(width, '' );
        }
        else if (length < 0) {
          logName = logName.padStart(width, ' ');
        }
      }
      else if (width < logName.length) {
        // 名称过长，缩短
        const hold = 3;
        const startsWith = logName.substring(0, width-3-hold);
        const endsWith = logName.substring(logName.length-hold);
        logName = `${startsWith}...${endsWith}`;
      }

      prefix = prefix.replace(NAME_REGEXP, logName);
    }

    return prefix;
  }

  render(log: Log): any[] {
    const data: any[] = [];
    data.push(this.renderPrefix(log.time, log.level, log.name));
    data.push(...log.message);
    return data;
  }
}
