var l = Object.defineProperty;
var u = (e, t, r) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var n = (e, t, r) => (u(e, typeof t != "symbol" ? t + "" : t, r), r);
var h = /* @__PURE__ */ ((e) => (e.Debug = "DEBUG", e.Info = "INFO", e.Warning = "WARN", e.Error = "ERROR", e))(h || {});
class f {
  constructor(t = "ROOT") {
    n(this, "name");
    this.name = t;
  }
  get time() {
    const t = /* @__PURE__ */ new Date(), r = `${t.getFullYear()}`.padStart(4, "0"), a = `${t.getMonth()}`.padStart(2, "0"), g = `${t.getDay()}`.padStart(2, "0"), i = `${t.getHours()}`.padStart(2, "0"), c = `${t.getMinutes()}`.padStart(2, "0"), $ = `${t.getSeconds()}`.padStart(2, "0"), d = `${t.getMilliseconds()}`.padStart(3, "0");
    return `${r}-${a}-${g} ${i}:${c}:${$}.${d}`;
  }
  getPrefix(t) {
    return `${this.time} {${this.name}} [${t}] `;
  }
  debug(...t) {
    console.debug(this.getPrefix(
      "DEBUG"
      /* Debug */
    ), ...t);
  }
  info(...t) {
    console.info(this.getPrefix(
      "INFO"
      /* Info */
    ), ...t);
  }
  warn(...t) {
    console.warn(this.getPrefix(
      "WARN"
      /* Warning */
    ), ...t);
  }
  error(...t) {
    console.error(this.getPrefix(
      "ERROR"
      /* Error */
    ), ...t);
  }
}
const s = class s {
  static getLogger(t) {
    if (s.loggers.has(t))
      return s.loggers.get(t);
    const r = new f(t);
    return s.loggers.set(t, r), r;
  }
};
n(s, "loggers", /* @__PURE__ */ new Map());
let o = s;
export {
  h as LogLevel,
  f as Logger,
  o as LoggerFactory
};
