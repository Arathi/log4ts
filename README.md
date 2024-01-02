# log4ts

## 功能

1. 调用 `debug`、`info`、`warn`、`error`
2. 获取 `日志级别(level)` 和 `日志内容(message)`
2. 通过 `Layout` 生成 `日志(Log)`
3. 通过 `Filter` 过滤不需要的日志
4. 通过 `Appender` 输出日志

## Appender

* **`ConsoleAppender`** 输出到控制台
* `WebSocketAppender` 输出到WebSocket

## Filter

* **`ThresholdFilter`** 日志级别过低的过滤掉
* `LevelRangeFilter` 日志级别范围以外的过滤掉
* `LevelMatchFilter` 日志级别不相等的过滤掉

## Layout

* **`PatternLayout`** 按照指定pattern格式化
* `JsonLayout` 构建JSON
