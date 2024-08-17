//Sat Aug 17 2024 01:17:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const W = aa("七猫免费小说 书币"),
  X = require("got"),
  Y = require("crypto-js"),
  Z = 18000,
  a0 = 3,
  a1 = 50,
  a2 = ["\n", "@"],
  a3 = "qmreadck",
  a4 = console;
let a5;
const a6 = process.env[a3] || "";
let a7 = process.env.qmgoldmode || 0,
  a8 = process.env.qmwait || 0;
try {
  if (!a7) {
    console.log("\n并发运行 等待间隔" + a8 + "秒");
  }
  if (a7) {
    console.log("\n顺序运行 等待间隔" + a8 + "秒");
  }
} catch (ab) {}
class a9 {
  constructor(f) {
    this.index = W.userIdx++;
    a5 = W.h();
    this.ck = f.split("#")[0];
    this.params = f.split("#")[1];
    this.rdtime = "AUTHORIZATION=" + this.ck + "app-version=7172020application-id=com.kmxs.readeris-white=0net-env=4platform=androidqm-params=" + this.params;
    const l = {
      limit: a0
    };
    this.got = X.extend({
      headers: {
        "net-env": "4",
        "is-white": "0",
        platform: "android",
        "app-version": "7172020",
        "application-id": "com.kmxs.reader",
        AUTHORIZATION: this.ck,
        "qm-params": this.params,
        sign: this.sign(this.rdtime),
        "no-permiss": "3",
        "User-Agent": "webviewversion/0",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip"
      },
      retry: l,
      timeout: Z,
      followRedirect: false
    });
    var f = a4;
    f.log("@jk 七猫 书币");
  }
  async Task() {
    const e = {
      RNVeO: function (k, l) {
        return k * l;
      },
      EkdCb: function (k, l) {
        return k + l;
      },
      lRbUc: "1234567890",
      rcCUJ: function (k, l) {
        return k === l;
      },
      isdwI: "HVHzj",
      IQAxv: "MfqWC",
      tSokV: function (k, l) {
        return k !== l;
      },
      dLdBE: "IzmrX",
      NHrmS: function (k, l) {
        return k == l;
      },
      ddNFo: function (k, l) {
        return k >= l;
      },
      iEtHH: "看金币视频：全部完成",
      gksGu: "UKAHq",
      zUFOI: "NsCQY"
    };
    const f = e;
    a5 += W.g();
    if (a7) {
      if (f.rcCUJ(f.isdwI, f.isdwI)) {
        const k = {
          time: true,
          sp: true,
          console: false
        };
        W.log("账号[" + W.padStr(this.index, W.userCount.toString().length) + "]", k);
        this.x = "";
      } else {
        h += i.charAt(k.floor(f.RNVeO(l.random(), i.length)));
      }
    } else {
      this.x = "账号[" + W.padStr(this.index, W.userCount.toString().length) + "]";
    }
    var g = [17, 22, 24, 31, 32, 33, 39, 42, 43, 44, 45, 46, 47, 100, 101, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 120, 121, 122, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179],
      h = [155, 156, 157, 158, 159, 160, 167, 172, 42, 43, 44, 46, 47, 121];
    this.bk = 0;
    this.px = 0;
    for (const n of W.randomarr(99)) {
      if (f.rcCUJ(f.IQAxv, f.IQAxv)) {
        for (const o of [1, 2, 3, 4, 5, 6, 7, 10]) {
          if (f.tSokV(f.dLdBE, f.dLdBE)) {
            this.x = "账号[" + e.padStr(this.index, f.userCount.toString().length) + "]";
          } else {
            var i = await this.coinadd(o);
            if (f.NHrmS(i, 1)) {
              break;
            }
            await W.wait(a8);
          }
        }
        if (f.ddNFo(this.px, 8)) {
          a4.log(f.iEtHH);
          break;
        }
      } else {
        f = f.EkdCb(g, h);
      }
    }
    for (const s of W.randomarr(99)) {
      if (f.rcCUJ(f.gksGu, f.zUFOI)) {
        return e.randomString(f, f.lRbUc);
      } else {
        var i = await this.coinadd2();
        if (f.NHrmS(i, 1)) {
          break;
        }
        await W.wait(a8);
      }
    }
  }
  async coinadd(c) {
    try {
      var f = W.ts(13),
        g = W.randomString(9),
        h = c,
        i = "position_id=chapterendtype=" + h + "unique_request_id=" + g + f,
        k = {
          method: "post",
          url: "https://api-ks.wtzw.com/api/v2/coin/add",
          form: {
            position_id: "chapterend",
            type: h,
            unique_request_id: "" + g + f,
            sign: this.sign(i)
          }
        };
      let {
        result: m
      } = await this.request(k);
      if (m?.["data"]?.["coin"]) {
        this.px = 0;
        a4.log("看金币视频：" + m?.["data"]?.["coin"]);
      } else {
        this.px += 1;
        return m = 1;
      }
    } catch (p) {}
  }
  async coinadd2() {
    try {
      var g = W.ts(13),
        h = W.randomString(9),
        i = "extra_type=0id=4scene=1type=2unique_request_id=" + h + g,
        k = {
          method: "post",
          url: "https://api-cfg.wtzw.com/v1/coin/add",
          form: {
            extra_type: "0",
            id: "4",
            scene: "1",
            type: "2",
            unique_request_id: "" + h + g,
            sign: this.sign(i)
          }
        };
      let {
        result: l
      } = await this.request(k);
      if (l?.["data"]?.["coin"]) {
        a4.log("看金币视频2：" + l?.["data"]?.["coin"]);
      } else {
        a4.log("看金币视频2完成");
        return 1;
      }
    } catch (p) {}
  }
  async read_index() {
    const e = {};
    e.DzjMP = function (k, l) {
      return k + l;
    };
    e.QQmkK = function (k, l) {
      return k / l;
    };
    e.QZCfa = function (k, l) {
      return k - l;
    };
    e.aJfpN = function (k, l) {
      return k + l;
    };
    e.ZAVzW = function (k, l) {
      return k + l;
    };
    e.GnTCc = function (k, l) {
      return k + l;
    };
    e.jDTPE = function (k, l) {
      return k === l;
    };
    e.WoZzu = "BHxKp";
    e.SJWeT = "xmdAs";
    e.LaIXR = "GET";
    e.dtpGw = function (k, l) {
      return k !== l;
    };
    e.QwXIL = "FHvtq";
    const f = e;
    try {
      if (f.jDTPE(f.WoZzu, f.SJWeT)) {
        e = f.response;
      } else {
        var g = "book_privacy=1id=is_history=1read_preference=1tab_type=1",
          h = {
            method: f.LaIXR,
            url: "https://api-bc.wtzw.com/api/v1/must-read?id=&tab_type=1&is_history=1&read_preference=1&book_privacy=1&sign=" + this.sign(g)
          };
        let {
          result: l
        } = await this.request(h);
        if (l?.["data"]?.["books"]) {
          if (f.dtpGw(f.QwXIL, f.QwXIL)) {
            let n = v ? new w(i) : new y(),
              o = {
                "M+": f.DzjMP(n.getMonth(), 1),
                "d+": n.getDate(),
                "h+": n.getHours(),
                "m+": n.getMinutes(),
                "s+": n.getSeconds(),
                "q+": z.floor(f.QQmkK(f.DzjMP(n.getMonth(), 3), 3)),
                S: this.padStr(n.getMilliseconds(), 3)
              };
            /(y+)/.test(A) && (B = C.replace(D.$1, f.DzjMP(n.getFullYear(), "").substr(f.QZCfa(4, E.$1.length))));
            for (let p in o) new N(f.aJfpN(f.ZAVzW("(", p), ")")).test(O) && (P = Q.replace(R.$1, 1 == S.$1.length ? o[p] : f.DzjMP("00", o[p]).substr(f.GnTCc("", o[p]).length)));
            return L;
          } else {
            var i = W.randomList(l?.["data"]?.["books"]);
            this.readid = i.id;
            a4.log(this.x, "阅读 : 必读榜随机挑选一本书：《" + i?.["title"] + "》", i?.["author"], i?.["sub_title"]);
          }
        }
      }
    } catch (n) {}
  }
  async withalbum1_index() {
    try {
      var g = "book_privacy=1cache_ver=read_preference=0",
        h = {
          method: "GET",
          url: "https://api-bc.wtzw.com/api/v1/album/index?read_preference=0&book_privacy=1&cache_ver=&sign=" + this.sign(g)
        };
      let {
        result: k
      } = await this.request(h);
      if (k?.["data"]?.["sections"]) {
        for (var i of k?.["data"]?.["sections"]) {
          if (i?.["section_header"]?.["section_title"] == "猜你想听") {
            i = W.randomList(i?.["books"]);
            this.tbook = i.album_id;
            a4.log(this.x, "听书 ：随机听一本书", "《" + i?.["title"] + "》", i?.["sub_title"]);
          }
        }
      }
    } catch (o) {}
  }
  async reward(g, h) {
    try {
      const m = {
        install_app_list: ""
      };
      const n = {
        params: m
      };
      const o = {
        task_id: g,
        type_prefix: h,
        axiosConfig: n
      };
      var l = {
        method: "POST",
        url: "https://api-gw.wtzw.com/welf/h5/v1/task/reward?t=" + W.ts(13) + "&install_app_list=",
        form: o
      };
      let {
        result: p
      } = await this.request(l);
      if (p?.["reward"]) {
        if (h == "task") {
          a4.log(this.x, "听读金币奖励 ：", p?.["reward"]);
        }
        if (h == "video") {
          a4.log(this.x, "听读金币视频奖励 ：", p?.["reward"]);
        }
      }
    } catch (s) {}
  }
  async timing1(f, g, h) {
    try {
      var l = "bi=" + this.readid + "bt=0rrn=" + f + "st=" + g,
        m = {
          method: "POST",
          url: "https://api-sc.wtzw.com/api/v4/timing-reward/report",
          form: {
            bi: this.readid,
            bt: 0,
            rrn: f,
            st: g,
            sign: this.sign(l)
          }
        };
      let {
        result: o
      } = await this.request(m);
      if (o?.["data"]?.["status"] == 1) {
        this.bk = 0;
        var g = o?.["data"]?.["tntrd"]["split"]("|");
        h == 1 && a4.log(this.x, "阅读 ：当前阅读时间", (g[0] / 60).toFixed(1) + "分 ");
        this.starttimex = o?.["data"]?.["st"];
        h == 2 && a4.log(this.x, "阅读时长：[上传成功] 当前阅读时间: ", (g[0] / 60).toFixed(1) + "分 ", "下次可领取阅读奖励的时间: ", (g[1] / 60).toFixed(1) + "分 ");
      } else {
        if (o?.["data"]?.["status"] == 2) {
          this.bk += 1;
          var n = o?.["data"]?.["tntrd"]["split"]("|");
          a4.log(this.x, "阅读 ：当前阅读时间", (n[0] / 60).toFixed(1) + "分 请领取阅读奖励");
          for (const t of [172, 42, 43, 44, 46, 47, 121]) {
            await this.reward(t, "task");
            await this.reward(t, "video");
          }
        }
      }
    } catch (x) {}
  }
  async withalbum1(f, g, h) {
    const i = {};
    i.pSNbW = "POST";
    i.SNutl = "https://api-sc.wtzw.com/api/v4/timing-reward/report-with-album";
    i.QaBSZ = function (n, o) {
      return n == o;
    };
    i.krxCN = "听书时长：[上传成功] 当前听书时间: ";
    i.qLJcN = function (n, o) {
      return n / o;
    };
    i.cAkVP = "下次可领取听书奖励的时间: ";
    i.ggwjB = function (n, o) {
      return n + o;
    };
    i.UhNdf = function (n, o) {
      return n == o;
    };
    i.HFSRT = "听书 ：当前听书时间";
    i.RXWUg = function (n, o) {
      return n !== o;
    };
    i.shyTL = "zRPVD";
    i.Qffbs = "FwLku";
    i.DfDVT = function (n, o) {
      return n / o;
    };
    i.Eslnx = "分 请领取听书奖励";
    i.bdwGp = "EyRrW";
    i.agsKw = "task";
    i.qqMBI = "video";
    const k = i;
    try {
      if (!g) {
        g = "null";
      }
      var l = "ai=" + this.tbook + "bt=0rrn=" + f + "st=" + g,
        m = {
          method: k.pSNbW,
          url: k.SNutl,
          form: {
            ai: this.tbook,
            bt: 0,
            rrn: f,
            st: g,
            sign: this.sign(l)
          }
        };
      let {
        result: n
      } = await this.request(m);
      if (k.QaBSZ(n?.["data"]?.["status"], 1)) {
        this.bk = 0;
        this.albumtime = n?.["data"]?.["st"];
        var g = n?.["data"]?.["tntrd"]["split"]("|");
        k.UhNdf(h, 1) && a4.log(this.x, k.HFSRT, k.qLJcN(g[0], 60).toFixed(1) + "分 ");
        h == 2 && a4.log(this.x, k.krxCN, k.qLJcN(g[0], 60).toFixed(1) + "分", k.cAkVP, k.ggwjB(k.qLJcN(g[1], 60).toFixed(1), "分 "));
      } else {
        if (k.QaBSZ(n?.["data"]?.["status"], 2)) {
          if (k.RXWUg(k.shyTL, k.Qffbs)) {
            this.bk += 1;
            var g = n?.["data"]?.["tntrd"]["split"]("|");
            a4.log(this.x, k.HFSRT, k.DfDVT(g[0], 60).toFixed(1) + k.Eslnx);
            for (const r of [155, 156, 157, 158, 159, 160, 167]) {
              if (k.RXWUg(k.bdwGp, k.bdwGp)) {
                this.log("\n未找到数据，请检查变量[" + l + "]");
                return false;
              } else {
                await this.reward(r, k.agsKw);
                await this.reward(r, k.qqMBI);
              }
            }
          } else {
            i = f;
          }
        }
      }
    } catch (u) {}
  }
  async request(g) {
    var k = null,
      l = 0,
      m = g.fn || g.url;
    g.method = g?.["method"]?.["toUpperCase"]() || "GET";
    while (l++ < a0) {
      try {
        await this.got(g).then(u => {
          k = u;
        }, u => {
          k = u.response;
        });
        if ((k?.["statusCode"] / 100 | 0) <= 4) {
          break;
        }
      } catch (v) {
        "TimeoutError" == v.name ? this.qq("[" + m + "]请求超时，重试第" + l + "次") : this.qq("[" + m + "]请求错误(" + v.message + ")，重试第" + l + "次");
      }
    }
    const n = {};
    n.statusCode = -1;
    n.headers = null;
    n.result = null;
    if (k == null) {
      return Promise.resolve(n);
    }
    let {
      statusCode: o,
      headers: p,
      body: r
    } = k;
    if (r) {
      try {
        r = JSON.parse(r);
      } catch {}
    }
    const s = {};
    s.statusCode = o;
    s.headers = p;
    s.result = r;
    return Promise.resolve(s);
  }
  sign(d) {
    d = d + "d3dGiJc651gSQ8w1";
    return W.getmd5(d);
  }
}
!(async () => {
  W.read_env(a9);
  if (a7) {
    for (const g of W.userList) await g.Task();
  } else {
    await W.threadTask("Task", a1);
  }
})().catch(c => W.log(c)).finally(() => W.exitNow());
function aa(c) {
  return new class {
    constructor(e) {
      this.name = e;
      this.startTime = Date.now();
      const k = {
        time: true
      };
      this.log("开始运行", k);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 1;
      this.userList = [];
      this.userCount = 0;
    }
    h() {
      return "d3d";
    }
    g() {
      return "GiJ";
    }
    f() {
      return "c651";
    }
    q() {
      return "gSQ8w1";
    }
    log(e, f = {}) {
      const g = {
        console: true
      };
      Object.assign(g, f);
      if (g.time) {
        let i = g.fmt || "hh:mm:ss";
        e = "[" + this.time(i) + "] " + e;
      }
      if (g.sp) {
        console.log("\n-------------- " + e + " --------------");
      }
      if (g.notify) {
        this.notifyStr.push(e);
      }
      if (g.console) {
        console.log(e);
      }
    }
    read_env(e) {
      let g = a6,
        h = a2.filter(k => g.includes(k)),
        i = h.length > 0 ? h[0] : a2[0];
      for (let k of g.split(i).filter(l => !!l)) {
        this.userList.push(new e(k));
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        this.log("\n未找到数据，请检查变量[" + a3 + "]");
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    EncryptCrypto(e, f, g, h, i, k) {
      return Y[e].encrypt(Y.enc.Utf8.parse(h), Y.enc.Utf8.parse(i), {
        mode: Y.mode[f],
        padding: Y.pad[g],
        iv: Y.enc.Utf8.parse(k)
      }).ciphertext.toString(Y.enc.Base64);
    }
    DecryptCrypto(e, f, g, h, i, k) {
      return Y[e].decrypt({
        ciphertext: Y.enc.Base64.parse(h)
      }, Y.enc.Utf8.parse(i), {
        mode: Y.mode[f],
        padding: Y.pad[g],
        iv: Y.enc.Utf8.parse(k)
      }).toString(Y.enc.Utf8);
    }
    async threads(e, f, g = {}) {
      while (f.idx < W.userList.length) {
        let h = W.userList[f.idx++];
        await h[e](g);
      }
    }
    async threadTask(e, f) {
      let g = [];
      const h = {
        idx: 0
      };
      while (f--) {
        g.push(this.threads(e, h));
      }
      await Promise.all(g);
    }
    randomarr(f) {
      return [...Array(f)].map((h, i) => i + 1);
    }
    time(f, g = null) {
      let i = g ? new Date(g) : new Date(),
        k = {
          "M+": i.getMonth() + 1,
          "d+": i.getDate(),
          "h+": i.getHours(),
          "m+": i.getMinutes(),
          "s+": i.getSeconds(),
          "q+": Math.floor((i.getMonth() + 3) / 3),
          S: this.padStr(i.getMilliseconds(), 3)
        };
      /(y+)/.test(f) && (f = f.replace(RegExp.$1, (i.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let l in k) new RegExp("(" + l + ")").test(f) && (f = f.replace(RegExp.$1, 1 == RegExp.$1.length ? k[l] : ("00" + k[l]).substr(("" + k[l]).length)));
      return f;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var e = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await e.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(e, f, g = {}) {
      let l = g.padding || "0",
        m = g.mode || "l",
        n = String(e),
        o = f > n.length ? f - n.length : 0,
        p = "";
      for (let r = 0; r < o; r++) {
        p += l;
      }
      if (m == "r") {
        n = n + p;
      } else {
        n = p + n;
      }
      return n;
    }
    json2str(e, f, g = false) {
      let i = [];
      for (let k of Object.keys(e).sort()) {
        let m = e[k];
        if (m && g) {
          m = encodeURIComponent(m);
        }
        i.push(k + "=" + m);
      }
      return i.join(f);
    }
    getmd5(e, f = 0) {
      return f >= 1 ? Y.MD5(e).toString().toUpperCase() : Y.MD5(e).toString();
    }
    enbase64(e) {
      var f = Y.enc.Utf8.parse(e),
        g = Y.enc.Base64.stringify(f);
      return g;
    }
    debase64(e) {
      var g = Y.enc.Base64.parse(e),
        h = g.toString(Y.enc.Utf8);
      return h;
    }
    str2json(e, f = false) {
      let g = {};
      for (let h of e.split("&")) {
        if (!h) {
          continue;
        }
        let i = h.indexOf("=");
        if (i == -1) {
          continue;
        }
        let l = h.substr(0, i),
          m = h.substr(i + 1);
        if (f) {
          m = decodeURIComponent(m);
        }
        g[l] = m;
      }
      return g;
    }
    randomPattern(e, f = "abcdef0123456789") {
      let g = "";
      for (let h of e) {
        if (h == "x") {
          g += f.charAt(Math.floor(Math.random() * f.length));
        } else {
          if (h == "X") {
            g += f.charAt(Math.floor(Math.random() * f.length)).toUpperCase();
          } else {
            g += h;
          }
        }
      }
      return g;
    }
    randomString(e, f = "abcdefghijk0123456789") {
      let g = "";
      for (let h = 0; h < e; h++) {
        g += f.charAt(Math.floor(Math.random() * f.length));
      }
      return g;
    }
    ts(e) {
      if (e == 10) {
        let f = Math.round(new Date().getTime() / 1000).toString();
        return f;
      } else {
        let g = new Date().getTime();
        return g;
      }
    }
    randomNum(f) {
      return W.randomString(f, "1234567890");
    }
    randomList(e) {
      let f = Math.floor(Math.random() * e.length);
      return e[f];
    }
    wait(e) {
      return new Promise(f => setTimeout(f, e * 1000));
    }
    async exitNow() {
      this.log("");
      const e = {
        time: true
      };
      this.log("运行结束，共运行了" + (Date.now() - this.startTime) / 1000 + "秒", e);
      process.exit(0);
    }
  }(c);
}