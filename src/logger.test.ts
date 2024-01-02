import {Logger, LogLevel} from './logger';
import {test} from 'vitest';

test("case-00", () => {
  const logger = new Logger("Case00");
  logger.debug("Debug Log");
  logger.info("Info Log");
  logger.warn("Warning Log");
  logger.error("Error Log");
});

test("case-01 自定义前缀格式", () => {
  const logger = new Logger("Case01", {
    pattern: "%D{H:m:s} %N"
  });
  logger.debug("Debug Log");
  logger.info("Info Log");
  logger.warn("Warning Log");
  logger.error("Error Log");
});

test("case-02 设置日志级别", () => {
  const logger = new Logger("Case02", {
    level: LogLevel.Info
  });
  logger.debug("Debug Log");
  logger.info("Info Log");
  logger.warn("Warning Log");
  logger.error("Error Log");
});
