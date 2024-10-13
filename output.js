//Sun Oct 13 2024 01:27:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("每日抽豆");
const _0x31771f = $.isNode() ? require("./sendNotify") : "",
  _0x48d63e = $.isNode() ? require("./jdCookie.js") : "",
  _0x11592d = require("./function/dylanx.js");
let _0x54d445 = true,
  _0x599005 = [],
  _0x2fc924 = "",
  _0x1e766a = "";
if ($.isNode()) {
  Object.keys(_0x48d63e).forEach(_0x4b0913 => {
    _0x599005.push(_0x48d63e[_0x4b0913]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x599005 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0xf7db9c($.getdata("CookiesJD") || "[]").map(_0x31bc75 => _0x31bc75.cookie)].filter(_0x33f830 => !!_0x33f830);
}
!(async () => {
  if (!_0x599005[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  for (let _0x45b432 = 0; _0x45b432 < _0x599005.length; _0x45b432++) {
    if (_0x599005[_0x45b432]) {
      _0x2fc924 = _0x599005[_0x45b432];
      $.UserName = decodeURIComponent(_0x2fc924.match(/pt_pin=([^; ]+)(?=;?)/) && _0x2fc924.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x45b432 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.black = false;
      $.UA = require("./USER_AGENTS").UARAM();
      await _0x2174ac();
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (!$.isLogin) {
        const _0x5ea0da = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x5ea0da);
        $.isNode() && (await _0x31771f.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await _0x49e416();
      await $.wait(1000);
      const _0x4cd432 = {
        platform: "3",
        orgType: "2",
        openId: "-1",
        pageClickKey: "Babel_WheelSurf",
        eid: "",
        fp: "-1",
        shshshfp: "",
        shshshfpa: "",
        shshshfpb: "",
        childActivityUrl: "https://pro.m.jd.com/mall/active/3kmVmayf36Kmoyfq9pLuCSYUfU9t/index.html?babelChannel=ttt1",
        userArea: "-1",
        client: "",
        clientVersion: "",
        uuid: "",
        osVersion: "",
        brand: "",
        model: "",
        networkType: "",
        jda: "-1"
      };
      await _0x1f14b2({
        enAwardK: "ltvTJ/WYFPZcuWIWHCAjRwJKpRybAaRzoT6GAemMh8e7DDzXHNt5Br7i6hYH2826ssuKfHev2yv2\n8HWSugMPNJj0hO0oRf9K9vB1kroDDzT5uSUPG/Z35YJDHw8AyYmqk4Q1u2vSGKS/M+5ruJeepDDb\nGjIC3nIIbIE2I7/kWfG6LEOpCsfjzQD+tTlmq6znidq4bRZoUJ3MOg0BXga8nlydG49V38/2izTy\noZbMHAIV+/rRIADZUGz6JHdG+Yw67BTFOL7W9o1/QxMJXh0i01j9BFd4NxlYYV1Y1lmREWuq5Mfa\niBCjgTgBs5QR2JMLJJxoKaU1ylxX/pA7ODI5Oq1MBImP3FWzKZ8usMHuDNBpV1H5DIrRz4ht3CDO\nAN2Q_babel",
        awardSource: "1",
        srv: "{\"bord\":\"0\",\"fno\":\"0-0-2\",\"mid\":\"86959864\",\"bi2\":\"2\",\"bid\":\"0\",\"aid\":\"01378571\"}",
        encryptProjectId: "27tkYWkyNJ77CVV9vt1T1y1kjJjK",
        encryptAssignmentId: "GbJa5egPpPZycufBGWSQzxaCVUo",
        authType: "2",
        riskParam: _0x4cd432,
        siteClient: "android",
        mitemAddrId: "",
        addressId: "",
        posLng: "",
        posLat: "",
        un_area: "",
        gps_area: "",
        homeLng: "",
        homeLat: "",
        homeCityLng: 0,
        homeCityLat: 0,
        focus: "",
        innerAnchor: "",
        cv: "2.0"
      });
      if ($.black) {
        continue;
      }
      await $.wait(1000);
      const _0x2298bd = {
        childActivityUrl: "https://pro.m.jd.com/mall/active/3kmVmayf36Kmoyfq9pLuCSYUfU9t/index.html?babelChannel=ttt1",
        eid: "",
        pageClickKey: "Babel_WheelSurf",
        shshshfpb: ""
      };
      const _0x504e6c = {
        authType: "2",
        awardSource: "1",
        enAwardK: "ltvTJ/WYFPZcuWIWHCAjR/lUVVYszUqGN+JzEE06dPu7DDzXHNt5Br7i6hYH2826ssuKfHev2yv2\n8HWSugMPNJj0hO0oRf9K9vB1kroDDzT5uSUPG/Z35YJDHw8AyYmqk4Q1u2vSGKS/M+5ruJeepDDb\nGjIC3nIIbIE2I7/kWfG6LEOpCsfjzQD+tTlmq6znidq4bRZoUJ3MOg0BXga8nip79XSe0g5kHG/A\na2pjcqcS+Z0MdH5AoT28E84LptqHeCE6mkMJ/dL3sjRs44o9OuXOZklgdKme+XUAsi2or52idiaj\nejivdFQcDHA7HH3gaHvanKkkE8TU7ESujM2a18EuQglPvG63XuhsjEuTur7Q0q+RCbbzCUJO1qM0\nhM1uGj8RZGTjNPmgGqqkikOxgpl2et5AeQ0y_babel",
        encryptAssignmentId: "tb5nbUQ7kk45XoAexByamhEHeHy",
        encryptProjectId: "TmxyMFsNSsUTi1UoGoYd6WM2Bks",
        lotteryCode: "1271763",
        riskParam: _0x2298bd,
        srv: "{\"bord\":\"0\",\"fno\":\"0-0-2\",\"mid\":\"70764372\",\"bi2\":\"2\",\"bid\":\"0\",\"aid\":\"01150161\"}"
      };
      await _0x1f14b2(_0x504e6c);
      await $.wait(10000);
    }
  }
})().catch(_0x253bd5 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x253bd5 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x1f14b2(_0x420884) {
  let _0x162714 = _0x11592d.getbody("babelGetLottery", _0x420884);
  return new Promise(async _0x6655da => {
    $.post(_0x781f0d("babelGetLottery", _0x162714), async (_0x291a50, _0x2327e3, _0x2f9fc6) => {
      try {
        if (_0x291a50) {
          console.log("" + JSON.stringify(_0x291a50));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x2f9fc6 = JSON.parse(_0x2f9fc6);
          if (_0x2f9fc6.prizeName) {
            console.log("恭喜获得：" + _0x2f9fc6.prizeName);
          } else {
            _0x2f9fc6.responseMessage.includes("未通过") ? ($.log("风险等级未通过！"), $.black = true) : $.log(JSON.stringify(_0x2f9fc6));
          }
        }
      } catch (_0x3c0033) {
        $.logErr(_0x3c0033, _0x2327e3);
      } finally {
        _0x6655da(_0x2f9fc6);
      }
    });
  });
}
async function _0x49e416() {
  const _0x19b692 = {
    floorId: "83596202"
  };
  let _0x2d23d8 = _0x11592d.getbody("signInWithPrize", _0x19b692);
  return new Promise(async _0x473dba => {
    $.post(_0x781f0d("signInWithPrize", _0x2d23d8), async (_0x4ce45e, _0x33ce78, _0x464b78) => {
      try {
        if (_0x4ce45e) {
          console.log("" + JSON.stringify(_0x4ce45e));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x464b78 = JSON.parse(_0x464b78);
          if (_0x464b78.code == 0) {
            if (_0x464b78.result.signInText.includes("已经")) {
              $.log("103-任务已完成");
            } else {
              if (_0x464b78.result.signInText.includes("恭喜")) {
                $.log("恭喜获得：" + _0x464b78.result.beanCount + "京豆");
              }
            }
          } else {
            console.log(_0x464b78.message);
          }
        }
      } catch (_0x57923f) {
        $.logErr(_0x57923f, _0x33ce78);
      } finally {
        _0x473dba(_0x464b78);
      }
    });
  });
}
function _0x781f0d(_0x39d784, _0x3c3a82) {
  const _0x1b37a2 = {
    Host: "api.m.jd.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: _0x2fc924
  };
  const _0xf0e840 = {
    url: "https://api.m.jd.com/client.action",
    body: "functionId=" + _0x39d784 + "&" + _0x3c3a82,
    headers: _0x1b37a2
  };
  return _0xf0e840;
}
function _0x2174ac() {
  return new Promise(_0x5cf999 => {
    const _0x1b0a16 = {
      Cookie: _0x2fc924,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0xbec75e = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x1b0a16,
      timeout: 10000
    };
    $.get(_0xbec75e, (_0x5edba7, _0x3d4266, _0x75d18b) => {
      try {
        if (_0x75d18b) {
          _0x75d18b = JSON.parse(_0x75d18b);
          if (!(_0x75d18b.islogin === "1")) {
            _0x75d18b.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x175513) {
        console.log(_0x175513);
      } finally {
        _0x5cf999();
      }
    });
  });
}
function _0x186db3() {
  return new Promise(_0x500a8c => {
    const _0x581680 = {
      "User-Agent": $.UA
    };
    const _0x10f2ff = {
      url: "https://lite-msg.m.jd.com/client.action?functionId=msgEntranceV1",
      headers: _0x581680,
      timeout: 10000
    };
    $.get(_0x10f2ff, (_0x216355, _0x1f0b62, _0x5086af) => {
      try {
        _0x5086af && (_0x5086af = JSON.parse(_0x5086af), $.difftime = Date.now() - _0x5086af.timestamp);
      } catch (_0x4f6b4b) {
        console.log(_0x4f6b4b);
      } finally {
        _0x500a8c();
      }
    });
  });
}
function _0x407795() {
  return new Promise(_0x238f44 => {
    !_0x54d445 ? $.msg($.name, "", "" + _0x1e766a) : $.log("京东账号" + $.index + $.nickName + "\n" + _0x1e766a);
    _0x238f44();
  });
}
function _0x1607a7(_0xe3638d) {
  try {
    if (typeof JSON.parse(_0xe3638d) == "object") {
      return true;
    }
  } catch (_0x198d36) {
    console.log(_0x198d36);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0xf7db9c(_0x5aa5b1) {
  if (typeof _0x5aa5b1 == "string") {
    try {
      return JSON.parse(_0x5aa5b1);
    } catch (_0x4509b3) {
      console.log(_0x4509b3);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}