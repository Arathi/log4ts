var D = Object.defineProperty;
var T = (n, e, t) => e in n ? D(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var c = (n, e, t) => (T(n, typeof e != "symbol" ? e + "" : e, t), t);
function p(n, e, t = " ", s) {
  if (e == 0)
    return n;
  const r = Math.abs(e);
  if (n.length == r)
    return n;
  let o = e > 0 ? 1 : 0;
  if (s != null && (o = s), n.length > r) {
    const f = n.substring(0, e - 6), g = n.substring(n.length - 3);
    return `${f}...${g}`;
  }
  if (o == 0)
    return n.padStart(r, t);
  if (o == 1)
    return n.padEnd(r, t);
  const i = r - n.length, l = n.length + Math.ceil(i / 2);
  return n.padStart(l, t).padEnd(r, t);
}
function m(n = "Y-M-D H:m:s.S", e = /* @__PURE__ */ new Date()) {
  let t = n;
  const s = `${e.getFullYear()}`.padStart(4, "0"), r = `${e.getMonth() + 1}`.padStart(2, "0"), o = `${e.getDay()}`.padStart(2, "0"), i = `${e.getHours()}`.padStart(2, "0"), l = `${e.getMinutes()}`.padStart(2, "0"), f = `${e.getSeconds()}`.padStart(2, "0"), g = `${e.getMilliseconds()}`.padStart(3, "0");
  return t = t.replace("Y", s), t = t.replace("M", r), t = t.replace("D", o), t = t.replace("H", i), t = t.replace("m", l), t = t.replace("s", f), t = t.replace("S", g), t;
}
var S = /* @__PURE__ */ ((n) => (n[n.All = 0] = "All", n[n.Debug = 1] = "Debug", n[n.Info = 2] = "Info", n[n.Warning = 3] = "Warning", n[n.Error = 4] = "Error", n[n.Off = 5] = "Off", n))(S || {});
const N = [
  "ALL",
  "DEBUG",
  "INFO",
  "WARN",
  "ERROR",
  "OFF"
], M = "ROOT", O = "Y-M-D H:m:s.S", A = "%D{Y-M-D H:m:s.S} {%N} [%-5L] ", x = 0, u = /%D(\{(.*?)})?/, h = /%([+-]?\d+)?N/, d = /%([+-]?\d+)?L/, b = {
  pattern: A,
  level: x
};
class R {
  constructor(e = M, t = {}) {
    c(this, "name");
    c(this, "options");
    this.name = e, this.options = Object.assign(b, t);
  }
  get level() {
    return this.options.level ?? 0;
  }
  getPrefix(e) {
    let t = this.options.pattern ?? A, s = u.exec(t);
    if (s != null) {
      let r = s[2];
      r == null && (r = O);
      const o = m(r);
      t = t.replace(u, o);
    }
    if (s = h.exec(t), s != null) {
      let r = s[1], o = 0;
      r != null && (o = Number(r));
      const i = p(this.name, o);
      t = t.replace(h, i);
    }
    if (s = d.exec(t), s != null) {
      let r = s[1], o = 0;
      r != null && (o = Number(r));
      let i = N[e];
      i = p(i, o), t = t.replace(d, i);
    }
    return t;
  }
  debug(...e) {
    this.level <= 1 && console.debug(this.getPrefix(
      1
      /* Debug */
    ), ...e);
  }
  info(...e) {
    this.level <= 2 && console.info(this.getPrefix(
      2
      /* Info */
    ), ...e);
  }
  warn(...e) {
    this.level <= 3 && console.warn(this.getPrefix(
      3
      /* Warning */
    ), ...e);
  }
  error(...e) {
    this.level <= 4 && console.error(this.getPrefix(
      4
      /* Error */
    ), ...e);
  }
}
const a = class a {
  static getLogger(e) {
    if (a.loggers.has(e))
      return a.loggers.get(e);
    const t = new R(e);
    return a.loggers.set(e, t), t;
  }
};
c(a, "loggers", /* @__PURE__ */ new Map());
let E = a;
export {
  S as LogLevel,
  R as Logger,
  E as LoggerFactory
};
