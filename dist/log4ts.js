var D = Object.defineProperty;
var Y = (s, e, t) => e in s ? D(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => (Y(s, typeof e != "symbol" ? e + "" : e, t), t);
var c = /* @__PURE__ */ ((s) => (s[s.All = 0] = "All", s[s.Debug = 1] = "Debug", s[s.Info = 2] = "Info", s[s.Warning = 3] = "Warning", s[s.Error = 4] = "Error", s[s.Off = 5] = "Off", s))(c || {});
const $ = [
  "ALL",
  "DEBUG",
  "INFO",
  "WARN",
  "ERROR",
  "OFF"
];
class b {
  constructor(e, t = []) {
    i(this, "layout");
    i(this, "filters");
    this.layout = e, this.filters = t;
  }
  append(e, t) {
    const r = this.layout.render(e);
    let n = !0;
    for (const o of this.filters)
      if (n = o.filter(e, t), !n)
        break;
    if (n)
      switch (e.level) {
        case c.Debug:
          console.debug(...r);
          break;
        case c.Info:
          console.info(...r);
          break;
        case c.Warning:
          console.warn(...r);
          break;
        case c.Error:
          console.error(...r);
          break;
      }
  }
}
const g = "YYYY-MM-DDTHH:mm:ss.SSS";
class w {
  constructor(e = g) {
    i(this, "pattern");
    this.pattern = e;
  }
  format(e = /* @__PURE__ */ new Date()) {
    let t = this.pattern + "";
    return t = t.replace("YYYY", this.formatYear(e, 4)), t = t.replace("YY", this.formatYear(e, 2)), t = t.replace("Y", this.formatYear(e)), t = t.replace("MM", this.formatMonth(e, 2)), t = t.replace("M", this.formatMonth(e)), t = t.replace("DD", this.formatDay(e, 2)), t = t.replace("D", this.formatDay(e)), t = t.replace("HH", this.formatHour(e, 2)), t = t.replace("H", this.formatHour(e)), t = t.replace("mm", this.formatMinute(e, 2)), t = t.replace("m", this.formatMinute(e)), t = t.replace("ss", this.formatSecond(e, 2)), t = t.replace("s", this.formatSecond(e)), t = t.replace("SSS", this.formatMillisecond(e, 3)), t = t.replace("SS", this.formatMillisecond(e, 2)), t = t.replace("S", this.formatMillisecond(e, 1)), t;
  }
  formatYear(e, t = 0) {
    const r = e.getFullYear(), n = r % 100;
    switch (t) {
      case 4:
        return `${r}`.padStart(4, "0");
      case 2:
        return `${n}`.padStart(2, "0");
    }
    return `${r}`;
  }
  formatMonth(e, t = 0) {
    const r = e.getMonth() + 1;
    return t == 2 ? `${r}`.padStart(2, "0") : `${r}`;
  }
  formatDay(e, t = 0) {
    const r = e.getDay();
    return t == 2 ? `${r}`.padStart(2, "0") : `${r}`;
  }
  formatHour(e, t = 0) {
    const r = e.getHours();
    return t == 2 ? `${r}`.padStart(2, "0") : `${r}`;
  }
  formatMinute(e, t = 0) {
    const r = e.getMinutes();
    return t == 2 ? `${r}`.padStart(2, "0") : `${r}`;
  }
  formatSecond(e, t = 0) {
    const r = e.getSeconds();
    return t == 2 ? `${r}`.padStart(2, "0") : `${r}`;
  }
  formatMillisecond(e, t = 0) {
    const r = e.getMilliseconds(), n = Math.floor(r / 10), o = Math.floor(r / 100);
    switch (t) {
      case 3:
        return `${r}`.padStart(3, "0");
      case 2:
        return `${n}`.padStart(2, "0");
      case 1:
        return `${o}`;
    }
    return "0";
  }
}
const A = "%d{YYYY-MM-DD HH:mm:ss.SSS} [%-5l] {%24n} ", u = /%d(\{(.*?)})?/, m = /%([+-]?\d+)?l/, d = /%([+-]?\d+)?n/;
class H {
  constructor(e = A) {
    i(this, "pattern");
    this.pattern = e;
  }
  renderPrefix(e, t, r) {
    let n = this.pattern + "", o = u.exec(n);
    if (o != null) {
      const a = o[2] ?? g, l = new w(a).format(e);
      n = n.replace(u, l);
    }
    if (o = m.exec(n), o != null) {
      let a = $[t];
      const h = o[1] ?? "0", l = Number(h), f = Math.abs(l);
      l > 0 ? a = a.padEnd(f, " ") : l < 0 && (a = a.padStart(f, " ")), n = n.replace(m, a);
    }
    if (o = d.exec(n), o != null) {
      let a = r;
      const h = o[1] ?? "0", l = Number(h), f = Math.abs(l);
      if (f > a.length)
        l > 0 ? a = a.padEnd(f, "") : l < 0 && (a = a.padStart(f, " "));
      else if (f < a.length) {
        const M = a.substring(0, f - 3 - 3), E = a.substring(a.length - 3);
        a = `${M}...${E}`;
      }
      n = n.replace(d, a);
    }
    return n;
  }
  render(e) {
    const t = [];
    return t.push(this.renderPrefix(e.time, e.level, e.name)), t.push(...e.message), t;
  }
}
const N = new H();
class y {
  constructor() {
  }
  filter(e, t) {
    return e.level >= t.level;
  }
}
const O = new y(), R = new b(
  N,
  [
    O
  ]
), T = "ROOT", F = c.Info;
class x {
  constructor(e = T, t = {}) {
    i(this, "name");
    i(this, "level", F);
    i(this, "appenders", []);
    this.name = e, t.level != null && (this.level = t.level), t.appenders != null && (this.appenders = t.appenders), this.appenders.length == 0 && this.appenders.push(R);
  }
  debug(...e) {
    this.append(c.Debug, ...e);
  }
  info(...e) {
    this.append(c.Info, ...e);
  }
  warn(...e) {
    this.append(c.Warning, ...e);
  }
  error(...e) {
    this.append(c.Error, ...e);
  }
  append(e, ...t) {
    const r = {
      time: /* @__PURE__ */ new Date(),
      level: e,
      name: this.name,
      message: t
    };
    for (const n of this.appenders)
      n.append(r, this);
  }
}
const p = class p {
  static getLogger(e) {
    if (p.loggers.has(e))
      return p.loggers.get(e);
    const t = new x(e);
    return p.loggers.set(e, t), t;
  }
};
i(p, "loggers", /* @__PURE__ */ new Map());
let S = p;
export {
  x as Logger,
  S as LoggerFactory
};
