import Wt, { defineComponent as er, openBlock as zo, createElementBlock as Ko, inject as Vf, createVNode as $e, ref as kf, watch as qs, withDirectives as zf, vModelSelect as Kf, createTextVNode as $t, computed as Bf, mergeProps as Gf, provide as Hf } from "vue";
var Zr = /* @__PURE__ */ ((r) => (r.NUMBER = "number", r.INTEGER = "integer", r.STRING = "string", r.OBJECT = "object", r.ARRAY = "array", r.BOOLEAN = "boolean", r))(Zr || {});
const On = {
  schema: {
    type: Object,
    required: !0
  },
  value: {
    required: !0
  },
  onChange: {
    type: Function,
    required: !0
  },
  rootSchema: {
    type: Object,
    required: !0
  }
}, Qf = ["value"], Jf = /* @__PURE__ */ er({
  __name: "StringFiled",
  props: {
    schema: {},
    uiSchema: {},
    value: {},
    onChange: { type: Function }
  },
  setup(r) {
    const e = r, a = (n) => {
      e.onChange(n.target.value);
    };
    return (n, t) => (zo(), Ko("input", {
      type: "text",
      value: n.value,
      onInput: a
    }, null, 40, Qf));
  }
}), Wf = ["value"], Yf = /* @__PURE__ */ er({
  __name: "NumberFiled",
  props: {
    schema: {},
    uiSchema: {},
    value: {},
    onChange: { type: Function }
  },
  setup(r) {
    const e = r, a = (n) => {
      const t = n.target.value, s = Number(t);
      Number.isNaN(s) ? e.onChange(void 0) : e.onChange(s);
    };
    return (n, t) => (zo(), Ko("input", {
      type: "number",
      value: n.value,
      onInput: a
    }, null, 40, Wf));
  }
}), Bo = Symbol();
function Go() {
  const r = Vf(Bo);
  if (!r)
    throw Error("SchemaForm should be used");
  return r;
}
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function An(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Rn(r) {
  if (r.__esModule)
    return r;
  var e = r.default;
  if (typeof e == "function") {
    var a = function n() {
      if (this instanceof n) {
        var t = [null];
        t.push.apply(t, arguments);
        var s = Function.bind.apply(e, t);
        return new s();
      }
      return e.apply(this, arguments);
    };
    a.prototype = e.prototype;
  } else
    a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var t = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(a, n, t.get ? t : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), a;
}
var Wa = { exports: {} };
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function(r, e) {
  (function(a, n) {
    n(e);
  })(ke, function(a) {
    function n() {
      for (var y = arguments.length, h = Array(y), b = 0; b < y; b++)
        h[b] = arguments[b];
      if (h.length > 1) {
        h[0] = h[0].slice(0, -1);
        for (var S = h.length - 1, _ = 1; _ < S; ++_)
          h[_] = h[_].slice(1, -1);
        return h[S] = h[S].slice(1), h.join("");
      } else
        return h[0];
    }
    function t(y) {
      return "(?:" + y + ")";
    }
    function s(y) {
      return y === void 0 ? "undefined" : y === null ? "null" : Object.prototype.toString.call(y).split(" ").pop().split("]").shift().toLowerCase();
    }
    function i(y) {
      return y.toUpperCase();
    }
    function o(y) {
      return y != null ? y instanceof Array ? y : typeof y.length != "number" || y.split || y.setInterval || y.call ? [y] : Array.prototype.slice.call(y) : [];
    }
    function l(y, h) {
      var b = y;
      if (h)
        for (var S in h)
          b[S] = h[S];
      return b;
    }
    function c(y) {
      var h = "[A-Za-z]", b = "[0-9]", S = n(b, "[A-Fa-f]"), _ = t(t("%[EFef]" + S + "%" + S + S + "%" + S + S) + "|" + t("%[89A-Fa-f]" + S + "%" + S + S) + "|" + t("%" + S + S)), L = "[\\:\\/\\?\\#\\[\\]\\@]", U = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", J = n(L, U), X = y ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", ue = y ? "[\\uE000-\\uF8FF]" : "[]", G = n(h, b, "[\\-\\.\\_\\~]", X);
      t(h + n(h, b, "[\\+\\-\\.]") + "*"), t(t(_ + "|" + n(G, U, "[\\:]")) + "*");
      var Y = t(t("25[0-5]") + "|" + t("2[0-4]" + b) + "|" + t("1" + b + b) + "|" + t("0?[1-9]" + b) + "|0?0?" + b), fe = t(Y + "\\." + Y + "\\." + Y + "\\." + Y), V = t(S + "{1,4}"), re = t(t(V + "\\:" + V) + "|" + fe), de = t(t(V + "\\:") + "{6}" + re), te = t("\\:\\:" + t(V + "\\:") + "{5}" + re), He = t(t(V) + "?\\:\\:" + t(V + "\\:") + "{4}" + re), De = t(t(t(V + "\\:") + "{0,1}" + V) + "?\\:\\:" + t(V + "\\:") + "{3}" + re), je = t(t(t(V + "\\:") + "{0,2}" + V) + "?\\:\\:" + t(V + "\\:") + "{2}" + re), br = t(t(t(V + "\\:") + "{0,3}" + V) + "?\\:\\:" + V + "\\:" + re), ar = t(t(t(V + "\\:") + "{0,4}" + V) + "?\\:\\:" + re), Ae = t(t(t(V + "\\:") + "{0,5}" + V) + "?\\:\\:" + V), Te = t(t(t(V + "\\:") + "{0,6}" + V) + "?\\:\\:"), nr = t([de, te, He, De, je, br, ar, Ae, Te].join("|")), Ve = t(t(G + "|" + _) + "+");
      t("[vV]" + S + "+\\." + n(G, U, "[\\:]") + "+"), t(t(_ + "|" + n(G, U)) + "*");
      var Hr = t(_ + "|" + n(G, U, "[\\:\\@]"));
      return t(t(_ + "|" + n(G, U, "[\\@]")) + "+"), t(t(Hr + "|" + n("[\\/\\?]", ue)) + "*"), {
        NOT_SCHEME: new RegExp(n("[^]", h, b, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(n("[^\\%\\:]", G, U), "g"),
        NOT_HOST: new RegExp(n("[^\\%\\[\\]\\:]", G, U), "g"),
        NOT_PATH: new RegExp(n("[^\\%\\/\\:\\@]", G, U), "g"),
        NOT_PATH_NOSCHEME: new RegExp(n("[^\\%\\/\\@]", G, U), "g"),
        NOT_QUERY: new RegExp(n("[^\\%]", G, U, "[\\:\\@\\/\\?]", ue), "g"),
        NOT_FRAGMENT: new RegExp(n("[^\\%]", G, U, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(n("[^]", G, U), "g"),
        UNRESERVED: new RegExp(G, "g"),
        OTHER_CHARS: new RegExp(n("[^\\%]", G, J), "g"),
        PCT_ENCODED: new RegExp(_, "g"),
        IPV4ADDRESS: new RegExp("^(" + fe + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + nr + ")" + t(t("\\%25|\\%(?!" + S + "{2})") + "(" + Ve + ")") + "?\\]?$")
        //RFC 6874, with relaxed parsing rules
      };
    }
    var u = c(!1), d = c(!0), p = function() {
      function y(h, b) {
        var S = [], _ = !0, L = !1, U = void 0;
        try {
          for (var J = h[Symbol.iterator](), X; !(_ = (X = J.next()).done) && (S.push(X.value), !(b && S.length === b)); _ = !0)
            ;
        } catch (ue) {
          L = !0, U = ue;
        } finally {
          try {
            !_ && J.return && J.return();
          } finally {
            if (L)
              throw U;
          }
        }
        return S;
      }
      return function(h, b) {
        if (Array.isArray(h))
          return h;
        if (Symbol.iterator in Object(h))
          return y(h, b);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), f = function(y) {
      if (Array.isArray(y)) {
        for (var h = 0, b = Array(y.length); h < y.length; h++)
          b[h] = y[h];
        return b;
      } else
        return Array.from(y);
    }, v = 2147483647, g = 36, m = 1, P = 26, A = 38, $ = 700, w = 72, E = 128, x = "-", T = /^xn--/, C = /[^\0-\x7E]/, D = /[\x2E\u3002\uFF0E\uFF61]/g, N = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, M = g - m, j = Math.floor, I = String.fromCharCode;
    function R(y) {
      throw new RangeError(N[y]);
    }
    function F(y, h) {
      for (var b = [], S = y.length; S--; )
        b[S] = h(y[S]);
      return b;
    }
    function k(y, h) {
      var b = y.split("@"), S = "";
      b.length > 1 && (S = b[0] + "@", y = b[1]), y = y.replace(D, ".");
      var _ = y.split("."), L = F(_, h).join(".");
      return S + L;
    }
    function K(y) {
      for (var h = [], b = 0, S = y.length; b < S; ) {
        var _ = y.charCodeAt(b++);
        if (_ >= 55296 && _ <= 56319 && b < S) {
          var L = y.charCodeAt(b++);
          (L & 64512) == 56320 ? h.push(((_ & 1023) << 10) + (L & 1023) + 65536) : (h.push(_), b--);
        } else
          h.push(_);
      }
      return h;
    }
    var H = function(h) {
      return String.fromCodePoint.apply(String, f(h));
    }, B = function(h) {
      return h - 48 < 10 ? h - 22 : h - 65 < 26 ? h - 65 : h - 97 < 26 ? h - 97 : g;
    }, q = function(h, b) {
      return h + 22 + 75 * (h < 26) - ((b != 0) << 5);
    }, ae = function(h, b, S) {
      var _ = 0;
      for (
        h = S ? j(h / $) : h >> 1, h += j(h / b);
        /* no initialization */
        h > M * P >> 1;
        _ += g
      )
        h = j(h / M);
      return j(_ + (M + 1) * h / (h + A));
    }, he = function(h) {
      var b = [], S = h.length, _ = 0, L = E, U = w, J = h.lastIndexOf(x);
      J < 0 && (J = 0);
      for (var X = 0; X < J; ++X)
        h.charCodeAt(X) >= 128 && R("not-basic"), b.push(h.charCodeAt(X));
      for (var ue = J > 0 ? J + 1 : 0; ue < S; ) {
        for (
          var G = _, Y = 1, fe = g;
          ;
          /* no condition */
          fe += g
        ) {
          ue >= S && R("invalid-input");
          var V = B(h.charCodeAt(ue++));
          (V >= g || V > j((v - _) / Y)) && R("overflow"), _ += V * Y;
          var re = fe <= U ? m : fe >= U + P ? P : fe - U;
          if (V < re)
            break;
          var de = g - re;
          Y > j(v / de) && R("overflow"), Y *= de;
        }
        var te = b.length + 1;
        U = ae(_ - G, te, G == 0), j(_ / te) > v - L && R("overflow"), L += j(_ / te), _ %= te, b.splice(_++, 0, L);
      }
      return String.fromCodePoint.apply(String, b);
    }, ge = function(h) {
      var b = [];
      h = K(h);
      var S = h.length, _ = E, L = 0, U = w, J = !0, X = !1, ue = void 0;
      try {
        for (var G = h[Symbol.iterator](), Y; !(J = (Y = G.next()).done); J = !0) {
          var fe = Y.value;
          fe < 128 && b.push(I(fe));
        }
      } catch (Qr) {
        X = !0, ue = Qr;
      } finally {
        try {
          !J && G.return && G.return();
        } finally {
          if (X)
            throw ue;
        }
      }
      var V = b.length, re = V;
      for (V && b.push(x); re < S; ) {
        var de = v, te = !0, He = !1, De = void 0;
        try {
          for (var je = h[Symbol.iterator](), br; !(te = (br = je.next()).done); te = !0) {
            var ar = br.value;
            ar >= _ && ar < de && (de = ar);
          }
        } catch (Qr) {
          He = !0, De = Qr;
        } finally {
          try {
            !te && je.return && je.return();
          } finally {
            if (He)
              throw De;
          }
        }
        var Ae = re + 1;
        de - _ > j((v - L) / Ae) && R("overflow"), L += (de - _) * Ae, _ = de;
        var Te = !0, nr = !1, Ve = void 0;
        try {
          for (var Hr = h[Symbol.iterator](), Ns; !(Te = (Ns = Hr.next()).done); Te = !0) {
            var Ms = Ns.value;
            if (Ms < _ && ++L > v && R("overflow"), Ms == _) {
              for (
                var yt = L, bt = g;
                ;
                /* no condition */
                bt += g
              ) {
                var Pt = bt <= U ? m : bt >= U + P ? P : bt - U;
                if (yt < Pt)
                  break;
                var Ls = yt - Pt, Us = g - Pt;
                b.push(I(q(Pt + Ls % Us, 0))), yt = j(Ls / Us);
              }
              b.push(I(q(yt, 0))), U = ae(L, Ae, re == V), L = 0, ++re;
            }
          }
        } catch (Qr) {
          nr = !0, Ve = Qr;
        } finally {
          try {
            !Te && Hr.return && Hr.return();
          } finally {
            if (nr)
              throw Ve;
          }
        }
        ++L, ++_;
      }
      return b.join("");
    }, Q = function(h) {
      return k(h, function(b) {
        return T.test(b) ? he(b.slice(4).toLowerCase()) : b;
      });
    }, xe = function(h) {
      return k(h, function(b) {
        return C.test(b) ? "xn--" + ge(b) : b;
      });
    }, Se = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "2.1.0",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: K,
        encode: H
      },
      decode: he,
      encode: ge,
      toASCII: xe,
      toUnicode: Q
    }, le = {};
    function _e(y) {
      var h = y.charCodeAt(0), b = void 0;
      return h < 16 ? b = "%0" + h.toString(16).toUpperCase() : h < 128 ? b = "%" + h.toString(16).toUpperCase() : h < 2048 ? b = "%" + (h >> 6 | 192).toString(16).toUpperCase() + "%" + (h & 63 | 128).toString(16).toUpperCase() : b = "%" + (h >> 12 | 224).toString(16).toUpperCase() + "%" + (h >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (h & 63 | 128).toString(16).toUpperCase(), b;
    }
    function Oe(y) {
      for (var h = "", b = 0, S = y.length; b < S; ) {
        var _ = parseInt(y.substr(b + 1, 2), 16);
        if (_ < 128)
          h += String.fromCharCode(_), b += 3;
        else if (_ >= 194 && _ < 224) {
          if (S - b >= 6) {
            var L = parseInt(y.substr(b + 4, 2), 16);
            h += String.fromCharCode((_ & 31) << 6 | L & 63);
          } else
            h += y.substr(b, 6);
          b += 6;
        } else if (_ >= 224) {
          if (S - b >= 9) {
            var U = parseInt(y.substr(b + 4, 2), 16), J = parseInt(y.substr(b + 7, 2), 16);
            h += String.fromCharCode((_ & 15) << 12 | (U & 63) << 6 | J & 63);
          } else
            h += y.substr(b, 9);
          b += 9;
        } else
          h += y.substr(b, 3), b += 3;
      }
      return h;
    }
    function ce(y, h) {
      function b(S) {
        var _ = Oe(S);
        return _.match(h.UNRESERVED) ? _ : S;
      }
      return y.scheme && (y.scheme = String(y.scheme).replace(h.PCT_ENCODED, b).toLowerCase().replace(h.NOT_SCHEME, "")), y.userinfo !== void 0 && (y.userinfo = String(y.userinfo).replace(h.PCT_ENCODED, b).replace(h.NOT_USERINFO, _e).replace(h.PCT_ENCODED, i)), y.host !== void 0 && (y.host = String(y.host).replace(h.PCT_ENCODED, b).toLowerCase().replace(h.NOT_HOST, _e).replace(h.PCT_ENCODED, i)), y.path !== void 0 && (y.path = String(y.path).replace(h.PCT_ENCODED, b).replace(y.scheme ? h.NOT_PATH : h.NOT_PATH_NOSCHEME, _e).replace(h.PCT_ENCODED, i)), y.query !== void 0 && (y.query = String(y.query).replace(h.PCT_ENCODED, b).replace(h.NOT_QUERY, _e).replace(h.PCT_ENCODED, i)), y.fragment !== void 0 && (y.fragment = String(y.fragment).replace(h.PCT_ENCODED, b).replace(h.NOT_FRAGMENT, _e).replace(h.PCT_ENCODED, i)), y;
    }
    function ne(y) {
      return y.replace(/^0*(.*)/, "$1") || "0";
    }
    function Ue(y, h) {
      var b = y.match(h.IPV4ADDRESS) || [], S = p(b, 2), _ = S[1];
      return _ ? _.split(".").map(ne).join(".") : y;
    }
    function be(y, h) {
      var b = y.match(h.IPV6ADDRESS) || [], S = p(b, 3), _ = S[1], L = S[2];
      if (_) {
        for (var U = _.toLowerCase().split("::").reverse(), J = p(U, 2), X = J[0], ue = J[1], G = ue ? ue.split(":").map(ne) : [], Y = X.split(":").map(ne), fe = h.IPV4ADDRESS.test(Y[Y.length - 1]), V = fe ? 7 : 8, re = Y.length - V, de = Array(V), te = 0; te < V; ++te)
          de[te] = G[te] || Y[re + te] || "";
        fe && (de[V - 1] = Ue(de[V - 1], h));
        var He = de.reduce(function(Ae, Te, nr) {
          if (!Te || Te === "0") {
            var Ve = Ae[Ae.length - 1];
            Ve && Ve.index + Ve.length === nr ? Ve.length++ : Ae.push({ index: nr, length: 1 });
          }
          return Ae;
        }, []), De = He.sort(function(Ae, Te) {
          return Te.length - Ae.length;
        })[0], je = void 0;
        if (De && De.length > 1) {
          var br = de.slice(0, De.index), ar = de.slice(De.index + De.length);
          je = br.join(":") + "::" + ar.join(":");
        } else
          je = de.join(":");
        return L && (je += "%" + L), je;
      } else
        return y;
    }
    var se = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, Be = "".match(/(){0}/)[1] === void 0;
    function Pe(y) {
      var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = {}, S = h.iri !== !1 ? d : u;
      h.reference === "suffix" && (y = (h.scheme ? h.scheme + ":" : "") + "//" + y);
      var _ = y.match(se);
      if (_) {
        Be ? (b.scheme = _[1], b.userinfo = _[3], b.host = _[4], b.port = parseInt(_[5], 10), b.path = _[6] || "", b.query = _[7], b.fragment = _[8], isNaN(b.port) && (b.port = _[5])) : (b.scheme = _[1] || void 0, b.userinfo = y.indexOf("@") !== -1 ? _[3] : void 0, b.host = y.indexOf("//") !== -1 ? _[4] : void 0, b.port = parseInt(_[5], 10), b.path = _[6] || "", b.query = y.indexOf("?") !== -1 ? _[7] : void 0, b.fragment = y.indexOf("#") !== -1 ? _[8] : void 0, isNaN(b.port) && (b.port = y.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? _[4] : void 0)), b.host && (b.host = be(Ue(b.host, S), S)), b.scheme === void 0 && b.userinfo === void 0 && b.host === void 0 && b.port === void 0 && !b.path && b.query === void 0 ? b.reference = "same-document" : b.scheme === void 0 ? b.reference = "relative" : b.fragment === void 0 ? b.reference = "absolute" : b.reference = "uri", h.reference && h.reference !== "suffix" && h.reference !== b.reference && (b.error = b.error || "URI is not a " + h.reference + " reference.");
        var L = le[(h.scheme || b.scheme || "").toLowerCase()];
        if (!h.unicodeSupport && (!L || !L.unicodeSupport)) {
          if (b.host && (h.domainHost || L && L.domainHost))
            try {
              b.host = Se.toASCII(b.host.replace(S.PCT_ENCODED, Oe).toLowerCase());
            } catch (U) {
              b.error = b.error || "Host's domain name can not be converted to ASCII via punycode: " + U;
            }
          ce(b, u);
        } else
          ce(b, S);
        L && L.parse && L.parse(b, h);
      } else
        b.error = b.error || "URI can not be parsed.";
      return b;
    }
    function gr(y, h) {
      var b = h.iri !== !1 ? d : u, S = [];
      return y.userinfo !== void 0 && (S.push(y.userinfo), S.push("@")), y.host !== void 0 && S.push(be(Ue(String(y.host), b), b).replace(b.IPV6ADDRESS, function(_, L, U) {
        return "[" + L + (U ? "%25" + U : "") + "]";
      })), (typeof y.port == "number" || typeof y.port == "string") && (S.push(":"), S.push(String(y.port))), S.length ? S.join("") : void 0;
    }
    var tr = /^\.\.?\//, ye = /^\/\.(\/|$)/, Ge = /^\/\.\.(\/|$)/, Kr = /^\/?(?:.|\n)*?(?=\/|$)/;
    function ve(y) {
      for (var h = []; y.length; )
        if (y.match(tr))
          y = y.replace(tr, "");
        else if (y.match(ye))
          y = y.replace(ye, "/");
        else if (y.match(Ge))
          y = y.replace(Ge, "/"), h.pop();
        else if (y === "." || y === "..")
          y = "";
        else {
          var b = y.match(Kr);
          if (b) {
            var S = b[0];
            y = y.slice(S.length), h.push(S);
          } else
            throw new Error("Unexpected dot segment condition");
        }
      return h.join("");
    }
    function pe(y) {
      var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = h.iri ? d : u, S = [], _ = le[(h.scheme || y.scheme || "").toLowerCase()];
      if (_ && _.serialize && _.serialize(y, h), y.host && !b.IPV6ADDRESS.test(y.host)) {
        if (h.domainHost || _ && _.domainHost)
          try {
            y.host = h.iri ? Se.toUnicode(y.host) : Se.toASCII(y.host.replace(b.PCT_ENCODED, Oe).toLowerCase());
          } catch (J) {
            y.error = y.error || "Host's domain name can not be converted to " + (h.iri ? "Unicode" : "ASCII") + " via punycode: " + J;
          }
      }
      ce(y, b), h.reference !== "suffix" && y.scheme && (S.push(y.scheme), S.push(":"));
      var L = gr(y, h);
      if (L !== void 0 && (h.reference !== "suffix" && S.push("//"), S.push(L), y.path && y.path.charAt(0) !== "/" && S.push("/")), y.path !== void 0) {
        var U = y.path;
        !h.absolutePath && (!_ || !_.absolutePath) && (U = ve(U)), L === void 0 && (U = U.replace(/^\/\//, "/%2F")), S.push(U);
      }
      return y.query !== void 0 && (S.push("?"), S.push(y.query)), y.fragment !== void 0 && (S.push("#"), S.push(y.fragment)), S.join("");
    }
    function Ee(y, h) {
      var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, S = arguments[3], _ = {};
      return S || (y = Pe(pe(y, b), b), h = Pe(pe(h, b), b)), b = b || {}, !b.tolerant && h.scheme ? (_.scheme = h.scheme, _.userinfo = h.userinfo, _.host = h.host, _.port = h.port, _.path = ve(h.path || ""), _.query = h.query) : (h.userinfo !== void 0 || h.host !== void 0 || h.port !== void 0 ? (_.userinfo = h.userinfo, _.host = h.host, _.port = h.port, _.path = ve(h.path || ""), _.query = h.query) : (h.path ? (h.path.charAt(0) === "/" ? _.path = ve(h.path) : ((y.userinfo !== void 0 || y.host !== void 0 || y.port !== void 0) && !y.path ? _.path = "/" + h.path : y.path ? _.path = y.path.slice(0, y.path.lastIndexOf("/") + 1) + h.path : _.path = h.path, _.path = ve(_.path)), _.query = h.query) : (_.path = y.path, h.query !== void 0 ? _.query = h.query : _.query = y.query), _.userinfo = y.userinfo, _.host = y.host, _.port = y.port), _.scheme = y.scheme), _.fragment = h.fragment, _;
    }
    function gt(y, h, b) {
      var S = l({ scheme: "null" }, b);
      return pe(Ee(Pe(y, S), Pe(h, S), S, !0), S);
    }
    function _a(y, h) {
      return typeof y == "string" ? y = pe(Pe(y, h), h) : s(y) === "object" && (y = Pe(pe(y, h), h)), y;
    }
    function Sa(y, h, b) {
      return typeof y == "string" ? y = pe(Pe(y, b), b) : s(y) === "object" && (y = pe(y, b)), typeof h == "string" ? h = pe(Pe(h, b), b) : s(h) === "object" && (h = pe(h, b)), y === h;
    }
    function xf(y, h) {
      return y && y.toString().replace(!h || !h.iri ? u.ESCAPE : d.ESCAPE, _e);
    }
    function qe(y, h) {
      return y && y.toString().replace(!h || !h.iri ? u.PCT_ENCODED : d.PCT_ENCODED, Oe);
    }
    var Br = {
      scheme: "http",
      domainHost: !0,
      parse: function(h, b) {
        return h.host || (h.error = h.error || "HTTP URIs must have a host."), h;
      },
      serialize: function(h, b) {
        var S = String(h.scheme).toLowerCase() === "https";
        return (h.port === (S ? 443 : 80) || h.port === "") && (h.port = void 0), h.path || (h.path = "/"), h;
      }
    }, Rs = {
      scheme: "https",
      domainHost: Br.domainHost,
      parse: Br.parse,
      serialize: Br.serialize
    };
    function xs(y) {
      return typeof y.secure == "boolean" ? y.secure : String(y.scheme).toLowerCase() === "wss";
    }
    var Gr = {
      scheme: "ws",
      domainHost: !0,
      parse: function(h, b) {
        var S = h;
        return S.secure = xs(S), S.resourceName = (S.path || "/") + (S.query ? "?" + S.query : ""), S.path = void 0, S.query = void 0, S;
      },
      serialize: function(h, b) {
        if ((h.port === (xs(h) ? 443 : 80) || h.port === "") && (h.port = void 0), typeof h.secure == "boolean" && (h.scheme = h.secure ? "wss" : "ws", h.secure = void 0), h.resourceName) {
          var S = h.resourceName.split("?"), _ = p(S, 2), L = _[0], U = _[1];
          h.path = L && L !== "/" ? L : void 0, h.query = U, h.resourceName = void 0;
        }
        return h.fragment = void 0, h;
      }
    }, Is = {
      scheme: "wss",
      domainHost: Gr.domainHost,
      parse: Gr.parse,
      serialize: Gr.serialize
    }, If = {}, Cs = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", Ce = "[0-9A-Fa-f]", Cf = t(t("%[EFef]" + Ce + "%" + Ce + Ce + "%" + Ce + Ce) + "|" + t("%[89A-Fa-f]" + Ce + "%" + Ce + Ce) + "|" + t("%" + Ce + Ce)), Df = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", jf = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Tf = n(jf, '[\\"\\\\]'), Ff = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Nf = new RegExp(Cs, "g"), yr = new RegExp(Cf, "g"), Mf = new RegExp(n("[^]", Df, "[\\.]", '[\\"]', Tf), "g"), Ds = new RegExp(n("[^]", Cs, Ff), "g"), Lf = Ds;
    function Ea(y) {
      var h = Oe(y);
      return h.match(Nf) ? h : y;
    }
    var js = {
      scheme: "mailto",
      parse: function(h, b) {
        var S = h, _ = S.to = S.path ? S.path.split(",") : [];
        if (S.path = void 0, S.query) {
          for (var L = !1, U = {}, J = S.query.split("&"), X = 0, ue = J.length; X < ue; ++X) {
            var G = J[X].split("=");
            switch (G[0]) {
              case "to":
                for (var Y = G[1].split(","), fe = 0, V = Y.length; fe < V; ++fe)
                  _.push(Y[fe]);
                break;
              case "subject":
                S.subject = qe(G[1], b);
                break;
              case "body":
                S.body = qe(G[1], b);
                break;
              default:
                L = !0, U[qe(G[0], b)] = qe(G[1], b);
                break;
            }
          }
          L && (S.headers = U);
        }
        S.query = void 0;
        for (var re = 0, de = _.length; re < de; ++re) {
          var te = _[re].split("@");
          if (te[0] = qe(te[0]), b.unicodeSupport)
            te[1] = qe(te[1], b).toLowerCase();
          else
            try {
              te[1] = Se.toASCII(qe(te[1], b).toLowerCase());
            } catch (He) {
              S.error = S.error || "Email address's domain name can not be converted to ASCII via punycode: " + He;
            }
          _[re] = te.join("@");
        }
        return S;
      },
      serialize: function(h, b) {
        var S = h, _ = o(h.to);
        if (_) {
          for (var L = 0, U = _.length; L < U; ++L) {
            var J = String(_[L]), X = J.lastIndexOf("@"), ue = J.slice(0, X).replace(yr, Ea).replace(yr, i).replace(Mf, _e), G = J.slice(X + 1);
            try {
              G = b.iri ? Se.toUnicode(G) : Se.toASCII(qe(G, b).toLowerCase());
            } catch (re) {
              S.error = S.error || "Email address's domain name can not be converted to " + (b.iri ? "Unicode" : "ASCII") + " via punycode: " + re;
            }
            _[L] = ue + "@" + G;
          }
          S.path = _.join(",");
        }
        var Y = h.headers = h.headers || {};
        h.subject && (Y.subject = h.subject), h.body && (Y.body = h.body);
        var fe = [];
        for (var V in Y)
          Y[V] !== If[V] && fe.push(V.replace(yr, Ea).replace(yr, i).replace(Ds, _e) + "=" + Y[V].replace(yr, Ea).replace(yr, i).replace(Lf, _e));
        return fe.length && (S.query = fe.join("&")), S;
      }
    }, Uf = /^([^\:]+)\:(.*)/, Ts = {
      scheme: "urn",
      parse: function(h, b) {
        var S = h.path && h.path.match(Uf), _ = h;
        if (S) {
          var L = b.scheme || _.scheme || "urn", U = S[1].toLowerCase(), J = S[2], X = L + ":" + (b.nid || U), ue = le[X];
          _.nid = U, _.nss = J, _.path = void 0, ue && (_ = ue.parse(_, b));
        } else
          _.error = _.error || "URN can not be parsed.";
        return _;
      },
      serialize: function(h, b) {
        var S = b.scheme || h.scheme || "urn", _ = h.nid, L = S + ":" + (b.nid || _), U = le[L];
        U && (h = U.serialize(h, b));
        var J = h, X = h.nss;
        return J.path = (_ || b.nid) + ":" + X, J;
      }
    }, qf = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, Fs = {
      scheme: "urn:uuid",
      parse: function(h, b) {
        var S = h;
        return S.uuid = S.nss, S.nss = void 0, !b.tolerant && (!S.uuid || !S.uuid.match(qf)) && (S.error = S.error || "UUID is not valid."), S;
      },
      serialize: function(h, b) {
        var S = h;
        return S.nss = (h.uuid || "").toLowerCase(), S;
      }
    };
    le[Br.scheme] = Br, le[Rs.scheme] = Rs, le[Gr.scheme] = Gr, le[Is.scheme] = Is, le[js.scheme] = js, le[Ts.scheme] = Ts, le[Fs.scheme] = Fs, a.SCHEMES = le, a.pctEncChar = _e, a.pctDecChars = Oe, a.parse = Pe, a.removeDotSegments = ve, a.serialize = pe, a.resolveComponents = Ee, a.resolve = gt, a.normalize = _a, a.equal = Sa, a.escapeComponent = xf, a.unescapeComponent = qe, Object.defineProperty(a, "__esModule", { value: !0 });
  });
})(Wa, Wa.exports);
var Zf = Wa.exports, xn = function r(e, a) {
  if (e === a)
    return !0;
  if (e && a && typeof e == "object" && typeof a == "object") {
    if (e.constructor !== a.constructor)
      return !1;
    var n, t, s;
    if (Array.isArray(e)) {
      if (n = e.length, n != a.length)
        return !1;
      for (t = n; t-- !== 0; )
        if (!r(e[t], a[t]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === a.source && e.flags === a.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === a.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === a.toString();
    if (s = Object.keys(e), n = s.length, n !== Object.keys(a).length)
      return !1;
    for (t = n; t-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(a, s[t]))
        return !1;
    for (t = n; t-- !== 0; ) {
      var i = s[t];
      if (!r(e[i], a[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && a !== a;
}, Xf = function(e) {
  for (var a = 0, n = e.length, t = 0, s; t < n; )
    a++, s = e.charCodeAt(t++), s >= 55296 && s <= 56319 && t < n && (s = e.charCodeAt(t), (s & 64512) == 56320 && t++);
  return a;
}, Ir = {
  copy: ec,
  checkDataType: Ya,
  checkDataTypes: rc,
  coerceToTypes: tc,
  toHash: In,
  getProperty: Cn,
  escapeQuotes: Dn,
  equal: xn,
  ucs2length: Xf,
  varOccurences: sc,
  varReplace: ic,
  schemaHasRules: oc,
  schemaHasRulesExcept: lc,
  schemaUnknownRules: uc,
  toQuotedString: Za,
  getPathExpr: fc,
  getPath: cc,
  getData: vc,
  unescapeFragment: pc,
  unescapeJsonPointer: Tn,
  escapeFragment: mc,
  escapeJsonPointer: jn
};
function ec(r, e) {
  e = e || {};
  for (var a in r)
    e[a] = r[a];
  return e;
}
function Ya(r, e, a, n) {
  var t = n ? " !== " : " === ", s = n ? " || " : " && ", i = n ? "!" : "", o = n ? "" : "!";
  switch (r) {
    case "null":
      return e + t + "null";
    case "array":
      return i + "Array.isArray(" + e + ")";
    case "object":
      return "(" + i + e + s + "typeof " + e + t + '"object"' + s + o + "Array.isArray(" + e + "))";
    case "integer":
      return "(typeof " + e + t + '"number"' + s + o + "(" + e + " % 1)" + s + e + t + e + (a ? s + i + "isFinite(" + e + ")" : "") + ")";
    case "number":
      return "(typeof " + e + t + '"' + r + '"' + (a ? s + i + "isFinite(" + e + ")" : "") + ")";
    default:
      return "typeof " + e + t + '"' + r + '"';
  }
}
function rc(r, e, a) {
  switch (r.length) {
    case 1:
      return Ya(r[0], e, a, !0);
    default:
      var n = "", t = In(r);
      t.array && t.object && (n = t.null ? "(" : "(!" + e + " || ", n += "typeof " + e + ' !== "object")', delete t.null, delete t.array, delete t.object), t.number && delete t.integer;
      for (var s in t)
        n += (n ? " && " : "") + Ya(s, e, a, !0);
      return n;
  }
}
var Vs = In(["string", "number", "integer", "boolean", "null"]);
function tc(r, e) {
  if (Array.isArray(e)) {
    for (var a = [], n = 0; n < e.length; n++) {
      var t = e[n];
      (Vs[t] || r === "array" && t === "array") && (a[a.length] = t);
    }
    if (a.length)
      return a;
  } else {
    if (Vs[e])
      return [e];
    if (r === "array" && e === "array")
      return ["array"];
  }
}
function In(r) {
  for (var e = {}, a = 0; a < r.length; a++)
    e[r[a]] = !0;
  return e;
}
var ac = /^[a-z$_][a-z$_0-9]*$/i, nc = /'|\\/g;
function Cn(r) {
  return typeof r == "number" ? "[" + r + "]" : ac.test(r) ? "." + r : "['" + Dn(r) + "']";
}
function Dn(r) {
  return r.replace(nc, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t");
}
function sc(r, e) {
  e += "[^0-9]";
  var a = r.match(new RegExp(e, "g"));
  return a ? a.length : 0;
}
function ic(r, e, a) {
  return e += "([^0-9])", a = a.replace(/\$/g, "$$$$"), r.replace(new RegExp(e, "g"), a + "$1");
}
function oc(r, e) {
  if (typeof r == "boolean")
    return !r;
  for (var a in r)
    if (e[a])
      return !0;
}
function lc(r, e, a) {
  if (typeof r == "boolean")
    return !r && a != "not";
  for (var n in r)
    if (n != a && e[n])
      return !0;
}
function uc(r, e) {
  if (typeof r != "boolean") {
    for (var a in r)
      if (!e[a])
        return a;
  }
}
function Za(r) {
  return "'" + Dn(r) + "'";
}
function fc(r, e, a, n) {
  var t = a ? "'/' + " + e + (n ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : n ? "'[' + " + e + " + ']'" : "'[\\'' + " + e + " + '\\']'";
  return Ho(r, t);
}
function cc(r, e, a) {
  var n = Za(a ? "/" + jn(e) : Cn(e));
  return Ho(r, n);
}
var dc = /^\/(?:[^~]|~0|~1)*$/, hc = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function vc(r, e, a) {
  var n, t, s, i;
  if (r === "")
    return "rootData";
  if (r[0] == "/") {
    if (!dc.test(r))
      throw new Error("Invalid JSON-pointer: " + r);
    t = r, s = "rootData";
  } else {
    if (i = r.match(hc), !i)
      throw new Error("Invalid JSON-pointer: " + r);
    if (n = +i[1], t = i[2], t == "#") {
      if (n >= e)
        throw new Error("Cannot access property/index " + n + " levels up, current level is " + e);
      return a[e - n];
    }
    if (n > e)
      throw new Error("Cannot access data " + n + " levels up, current level is " + e);
    if (s = "data" + (e - n || ""), !t)
      return s;
  }
  for (var o = s, l = t.split("/"), c = 0; c < l.length; c++) {
    var u = l[c];
    u && (s += Cn(Tn(u)), o += " && " + s);
  }
  return o;
}
function Ho(r, e) {
  return r == '""' ? e : (r + " + " + e).replace(/([^\\])' \+ '/g, "$1");
}
function pc(r) {
  return Tn(decodeURIComponent(r));
}
function mc(r) {
  return encodeURIComponent(jn(r));
}
function jn(r) {
  return r.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Tn(r) {
  return r.replace(/~1/g, "/").replace(/~0/g, "~");
}
var gc = Ir, Qo = yc;
function yc(r) {
  gc.copy(r, this);
}
var Jo = { exports: {} }, Je = Jo.exports = function(r, e, a) {
  typeof e == "function" && (a = e, e = {}), a = e.cb || a;
  var n = typeof a == "function" ? a : a.pre || function() {
  }, t = a.post || function() {
  };
  Dt(e, n, t, r, "", r);
};
Je.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0
};
Je.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
Je.propsKeywords = {
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
Je.skipKeywords = {
  default: !0,
  enum: !0,
  const: !0,
  required: !0,
  maximum: !0,
  minimum: !0,
  exclusiveMaximum: !0,
  exclusiveMinimum: !0,
  multipleOf: !0,
  maxLength: !0,
  minLength: !0,
  pattern: !0,
  format: !0,
  maxItems: !0,
  minItems: !0,
  uniqueItems: !0,
  maxProperties: !0,
  minProperties: !0
};
function Dt(r, e, a, n, t, s, i, o, l, c) {
  if (n && typeof n == "object" && !Array.isArray(n)) {
    e(n, t, s, i, o, l, c);
    for (var u in n) {
      var d = n[u];
      if (Array.isArray(d)) {
        if (u in Je.arrayKeywords)
          for (var p = 0; p < d.length; p++)
            Dt(r, e, a, d[p], t + "/" + u + "/" + p, s, t, u, n, p);
      } else if (u in Je.propsKeywords) {
        if (d && typeof d == "object")
          for (var f in d)
            Dt(r, e, a, d[f], t + "/" + u + "/" + bc(f), s, t, u, n, f);
      } else
        (u in Je.keywords || r.allKeys && !(u in Je.skipKeywords)) && Dt(r, e, a, d, t + "/" + u, s, t, u, n);
    }
    a(n, t, s, i, o, l, c);
  }
}
function bc(r) {
  return r.replace(/~/g, "~0").replace(/\//g, "~1");
}
var Pc = Jo.exports, ot = Zf, ks = xn, Yt = Ir, Nt = Qo, $c = Pc, Fn = rr;
rr.normalizeId = We;
rr.fullPath = Mt;
rr.url = Lt;
rr.ids = Oc;
rr.inlineRef = Xa;
rr.schema = Zt;
function rr(r, e, a) {
  var n = this._refs[a];
  if (typeof n == "string")
    if (this._refs[n])
      n = this._refs[n];
    else
      return rr.call(this, r, e, n);
  if (n = n || this._schemas[a], n instanceof Nt)
    return Xa(n.schema, this._opts.inlineRefs) ? n.schema : n.validate || this._compile(n);
  var t = Zt.call(this, e, a), s, i, o;
  return t && (s = t.schema, e = t.root, o = t.baseId), s instanceof Nt ? i = s.validate || r.call(this, s.schema, e, void 0, o) : s !== void 0 && (i = Xa(s, this._opts.inlineRefs) ? s : r.call(this, s, e, void 0, o)), i;
}
function Zt(r, e) {
  var a = ot.parse(e), n = Yo(a), t = Mt(this._getId(r.schema));
  if (Object.keys(r.schema).length === 0 || n !== t) {
    var s = We(n), i = this._refs[s];
    if (typeof i == "string")
      return _c.call(this, r, i, a);
    if (i instanceof Nt)
      i.validate || this._compile(i), r = i;
    else if (i = this._schemas[s], i instanceof Nt) {
      if (i.validate || this._compile(i), s == We(e))
        return { schema: i, root: r, baseId: t };
      r = i;
    } else
      return;
    if (!r.schema)
      return;
    t = Mt(this._getId(r.schema));
  }
  return Wo.call(this, a, t, r.schema, r);
}
function _c(r, e, a) {
  var n = Zt.call(this, r, e);
  if (n) {
    var t = n.schema, s = n.baseId;
    r = n.root;
    var i = this._getId(t);
    return i && (s = Lt(s, i)), Wo.call(this, a, s, t, r);
  }
}
var Sc = Yt.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
function Wo(r, e, a, n) {
  if (r.fragment = r.fragment || "", r.fragment.slice(0, 1) == "/") {
    for (var t = r.fragment.split("/"), s = 1; s < t.length; s++) {
      var i = t[s];
      if (i) {
        if (i = Yt.unescapeFragment(i), a = a[i], a === void 0)
          break;
        var o;
        if (!Sc[i] && (o = this._getId(a), o && (e = Lt(e, o)), a.$ref)) {
          var l = Lt(e, a.$ref), c = Zt.call(this, n, l);
          c && (a = c.schema, n = c.root, e = c.baseId);
        }
      }
    }
    if (a !== void 0 && a !== n.schema)
      return { schema: a, root: n, baseId: e };
  }
}
var Ec = Yt.toHash([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum"
]);
function Xa(r, e) {
  if (e === !1)
    return !1;
  if (e === void 0 || e === !0)
    return en(r);
  if (e)
    return rn(r) <= e;
}
function en(r) {
  var e;
  if (Array.isArray(r)) {
    for (var a = 0; a < r.length; a++)
      if (e = r[a], typeof e == "object" && !en(e))
        return !1;
  } else
    for (var n in r)
      if (n == "$ref" || (e = r[n], typeof e == "object" && !en(e)))
        return !1;
  return !0;
}
function rn(r) {
  var e = 0, a;
  if (Array.isArray(r)) {
    for (var n = 0; n < r.length; n++)
      if (a = r[n], typeof a == "object" && (e += rn(a)), e == 1 / 0)
        return 1 / 0;
  } else
    for (var t in r) {
      if (t == "$ref")
        return 1 / 0;
      if (Ec[t])
        e++;
      else if (a = r[t], typeof a == "object" && (e += rn(a) + 1), e == 1 / 0)
        return 1 / 0;
    }
  return e;
}
function Mt(r, e) {
  e !== !1 && (r = We(r));
  var a = ot.parse(r);
  return Yo(a);
}
function Yo(r) {
  return ot.serialize(r).split("#")[0] + "#";
}
var wc = /#\/?$/;
function We(r) {
  return r ? r.replace(wc, "") : "";
}
function Lt(r, e) {
  return e = We(e), ot.resolve(r, e);
}
function Oc(r) {
  var e = We(this._getId(r)), a = { "": e }, n = { "": Mt(e, !1) }, t = {}, s = this;
  return $c(r, { allKeys: !0 }, function(i, o, l, c, u, d, p) {
    if (o !== "") {
      var f = s._getId(i), v = a[c], g = n[c] + "/" + u;
      if (p !== void 0 && (g += "/" + (typeof p == "number" ? p : Yt.escapeFragment(p))), typeof f == "string") {
        f = v = We(v ? ot.resolve(v, f) : f);
        var m = s._refs[f];
        if (typeof m == "string" && (m = s._refs[m]), m && m.schema) {
          if (!ks(i, m.schema))
            throw new Error('id "' + f + '" resolves to more than one schema');
        } else if (f != We(g))
          if (f[0] == "#") {
            if (t[f] && !ks(i, t[f]))
              throw new Error('id "' + f + '" resolves to more than one schema');
            t[f] = i;
          } else
            s._refs[f] = g;
      }
      a[o] = v, n[o] = g;
    }
  }), t;
}
var wa = Fn, Nn = {
  Validation: zs(Ac),
  MissingRef: zs(Mn)
};
function Ac(r) {
  this.message = "validation failed", this.errors = r, this.ajv = this.validation = !0;
}
Mn.message = function(r, e) {
  return "can't resolve reference " + e + " from id " + r;
};
function Mn(r, e, a) {
  this.message = a || Mn.message(r, e), this.missingRef = wa.url(r, e), this.missingSchema = wa.normalizeId(wa.fullPath(this.missingRef));
}
function zs(r) {
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Zo = function(r, e) {
  e || (e = {}), typeof e == "function" && (e = { cmp: e });
  var a = typeof e.cycles == "boolean" ? e.cycles : !1, n = e.cmp && function(s) {
    return function(i) {
      return function(o, l) {
        var c = { key: o, value: i[o] }, u = { key: l, value: i[l] };
        return s(c, u);
      };
    };
  }(e.cmp), t = [];
  return function s(i) {
    if (i && i.toJSON && typeof i.toJSON == "function" && (i = i.toJSON()), i !== void 0) {
      if (typeof i == "number")
        return isFinite(i) ? "" + i : "null";
      if (typeof i != "object")
        return JSON.stringify(i);
      var o, l;
      if (Array.isArray(i)) {
        for (l = "[", o = 0; o < i.length; o++)
          o && (l += ","), l += s(i[o]) || "null";
        return l + "]";
      }
      if (i === null)
        return "null";
      if (t.indexOf(i) !== -1) {
        if (a)
          return JSON.stringify("__cycle__");
        throw new TypeError("Converting circular structure to JSON");
      }
      var c = t.push(i) - 1, u = Object.keys(i).sort(n && n(i));
      for (l = "", o = 0; o < u.length; o++) {
        var d = u[o], p = s(i[d]);
        p && (l && (l += ","), l += JSON.stringify(d) + ":" + p);
      }
      return t.splice(c, 1), "{" + l + "}";
    }
  }(r);
}, Xo = function(e, a, n) {
  var t = "", s = e.schema.$async === !0, i = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"), o = e.self._getId(e.schema);
  if (e.opts.strictKeywords) {
    var l = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
    if (l) {
      var c = "unknown keyword: " + l;
      if (e.opts.strictKeywords === "log")
        e.logger.warn(c);
      else
        throw new Error(c);
    }
  }
  if (e.isTop && (t += " var validate = ", s && (e.async = !0, t += "async "), t += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", o && (e.opts.sourceCode || e.opts.processCode) && (t += " " + ("/*# sourceURL=" + o + " */") + " ")), typeof e.schema == "boolean" || !(i || e.schema.$ref)) {
    var a = "false schema", u = e.level, d = e.dataLevel, p = e.schema[a], f = e.schemaPath + e.util.getProperty(a), v = e.errSchemaPath + "/" + a, E = !e.opts.allErrors, C, g = "data" + (d || ""), w = "valid" + u;
    if (e.schema === !1) {
      e.isTop ? E = !0 : t += " var " + w + " = false; ";
      var m = m || [];
      m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (C || "false schema") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(v) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'boolean schema is false' "), e.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + g + " "), t += " } ") : t += " {} ";
      var P = t;
      t = m.pop(), !e.compositeRule && E ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    } else
      e.isTop ? s ? t += " return data; " : t += " validate.errors = null; return true; " : t += " var " + w + " = true; ";
    return e.isTop && (t += " }; return validate; "), t;
  }
  if (e.isTop) {
    var A = e.isTop, u = e.level = 0, d = e.dataLevel = 0, g = "data";
    if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [""], e.schema.default !== void 0 && e.opts.useDefaults && e.opts.strictDefaults) {
      var $ = "default is ignored in the schema root";
      if (e.opts.strictDefaults === "log")
        e.logger.warn($);
      else
        throw new Error($);
    }
    t += " var vErrors = null; ", t += " var errors = 0;     ", t += " if (rootData === undefined) rootData = data; ";
  } else {
    var u = e.level, d = e.dataLevel, g = "data" + (d || "");
    if (o && (e.baseId = e.resolve.url(e.baseId, o)), s && !e.async)
      throw new Error("async schema in sync schema");
    t += " var errs_" + u + " = errors;";
  }
  var w = "valid" + u, E = !e.opts.allErrors, x = "", T = "", C, D = e.schema.type, N = Array.isArray(D);
  if (D && e.opts.nullable && e.schema.nullable === !0 && (N ? D.indexOf("null") == -1 && (D = D.concat("null")) : D != "null" && (D = [D, "null"], N = !0)), N && D.length == 1 && (D = D[0], N = !1), e.schema.$ref && i) {
    if (e.opts.extendRefs == "fail")
      throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
    e.opts.extendRefs !== !0 && (i = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'));
  }
  if (e.schema.$comment && e.opts.$comment && (t += " " + e.RULES.all.$comment.code(e, "$comment")), D) {
    if (e.opts.coerceTypes)
      var M = e.util.coerceToTypes(e.opts.coerceTypes, D);
    var j = e.RULES.types[D];
    if (M || N || j === !0 || j && !ye(j)) {
      var f = e.schemaPath + ".type", v = e.errSchemaPath + "/type", f = e.schemaPath + ".type", v = e.errSchemaPath + "/type", I = N ? "checkDataTypes" : "checkDataType";
      if (t += " if (" + e.util[I](D, g, e.opts.strictNumbers, !0) + ") { ", M) {
        var R = "dataType" + u, F = "coerced" + u;
        t += " var " + R + " = typeof " + g + "; var " + F + " = undefined; ", e.opts.coerceTypes == "array" && (t += " if (" + R + " == 'object' && Array.isArray(" + g + ") && " + g + ".length == 1) { " + g + " = " + g + "[0]; " + R + " = typeof " + g + "; if (" + e.util.checkDataType(e.schema.type, g, e.opts.strictNumbers) + ") " + F + " = " + g + "; } "), t += " if (" + F + " !== undefined) ; ";
        var k = M;
        if (k)
          for (var K, H = -1, B = k.length - 1; H < B; )
            K = k[H += 1], K == "string" ? t += " else if (" + R + " == 'number' || " + R + " == 'boolean') " + F + " = '' + " + g + "; else if (" + g + " === null) " + F + " = ''; " : K == "number" || K == "integer" ? (t += " else if (" + R + " == 'boolean' || " + g + " === null || (" + R + " == 'string' && " + g + " && " + g + " == +" + g + " ", K == "integer" && (t += " && !(" + g + " % 1)"), t += ")) " + F + " = +" + g + "; ") : K == "boolean" ? t += " else if (" + g + " === 'false' || " + g + " === 0 || " + g + " === null) " + F + " = false; else if (" + g + " === 'true' || " + g + " === 1) " + F + " = true; " : K == "null" ? t += " else if (" + g + " === '' || " + g + " === 0 || " + g + " === false) " + F + " = null; " : e.opts.coerceTypes == "array" && K == "array" && (t += " else if (" + R + " == 'string' || " + R + " == 'number' || " + R + " == 'boolean' || " + g + " == null) " + F + " = [" + g + "]; ");
        t += " else {   ";
        var m = m || [];
        m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (C || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(v) + " , params: { type: '", N ? t += "" + D.join(",") : t += "" + D, t += "' } ", e.opts.messages !== !1 && (t += " , message: 'should be ", N ? t += "" + D.join(",") : t += "" + D, t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + f + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + g + " "), t += " } ") : t += " {} ";
        var P = t;
        t = m.pop(), !e.compositeRule && E ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } if (" + F + " !== undefined) {  ";
        var q = d ? "data" + (d - 1 || "") : "parentData", ae = d ? e.dataPathArr[d] : "parentDataProperty";
        t += " " + g + " = " + F + "; ", d || (t += "if (" + q + " !== undefined)"), t += " " + q + "[" + ae + "] = " + F + "; } ";
      } else {
        var m = m || [];
        m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (C || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(v) + " , params: { type: '", N ? t += "" + D.join(",") : t += "" + D, t += "' } ", e.opts.messages !== !1 && (t += " , message: 'should be ", N ? t += "" + D.join(",") : t += "" + D, t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + f + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + g + " "), t += " } ") : t += " {} ";
        var P = t;
        t = m.pop(), !e.compositeRule && E ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      }
      t += " } ";
    }
  }
  if (e.schema.$ref && !i)
    t += " " + e.RULES.all.$ref.code(e, "$ref") + " ", E && (t += " } if (errors === ", A ? t += "0" : t += "errs_" + u, t += ") { ", T += "}");
  else {
    var he = e.RULES;
    if (he) {
      for (var j, ge = -1, Q = he.length - 1; ge < Q; )
        if (j = he[ge += 1], ye(j)) {
          if (j.type && (t += " if (" + e.util.checkDataType(j.type, g, e.opts.strictNumbers) + ") { "), e.opts.useDefaults) {
            if (j.type == "object" && e.schema.properties) {
              var p = e.schema.properties, xe = Object.keys(p), Se = xe;
              if (Se)
                for (var le, _e = -1, Oe = Se.length - 1; _e < Oe; ) {
                  le = Se[_e += 1];
                  var ce = p[le];
                  if (ce.default !== void 0) {
                    var ne = g + e.util.getProperty(le);
                    if (e.compositeRule) {
                      if (e.opts.strictDefaults) {
                        var $ = "default is ignored for: " + ne;
                        if (e.opts.strictDefaults === "log")
                          e.logger.warn($);
                        else
                          throw new Error($);
                      }
                    } else
                      t += " if (" + ne + " === undefined ", e.opts.useDefaults == "empty" && (t += " || " + ne + " === null || " + ne + " === '' "), t += " ) " + ne + " = ", e.opts.useDefaults == "shared" ? t += " " + e.useDefault(ce.default) + " " : t += " " + JSON.stringify(ce.default) + " ", t += "; ";
                  }
                }
            } else if (j.type == "array" && Array.isArray(e.schema.items)) {
              var Ue = e.schema.items;
              if (Ue) {
                for (var ce, H = -1, be = Ue.length - 1; H < be; )
                  if (ce = Ue[H += 1], ce.default !== void 0) {
                    var ne = g + "[" + H + "]";
                    if (e.compositeRule) {
                      if (e.opts.strictDefaults) {
                        var $ = "default is ignored for: " + ne;
                        if (e.opts.strictDefaults === "log")
                          e.logger.warn($);
                        else
                          throw new Error($);
                      }
                    } else
                      t += " if (" + ne + " === undefined ", e.opts.useDefaults == "empty" && (t += " || " + ne + " === null || " + ne + " === '' "), t += " ) " + ne + " = ", e.opts.useDefaults == "shared" ? t += " " + e.useDefault(ce.default) + " " : t += " " + JSON.stringify(ce.default) + " ", t += "; ";
                  }
              }
            }
          }
          var se = j.rules;
          if (se) {
            for (var Be, Pe = -1, gr = se.length - 1; Pe < gr; )
              if (Be = se[Pe += 1], Ge(Be)) {
                var tr = Be.code(e, Be.keyword, j.type);
                tr && (t += " " + tr + " ", E && (x += "}"));
              }
          }
          if (E && (t += " " + x + " ", x = ""), j.type && (t += " } ", D && D === j.type && !M)) {
            t += " else { ";
            var f = e.schemaPath + ".type", v = e.errSchemaPath + "/type", m = m || [];
            m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (C || "type") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(v) + " , params: { type: '", N ? t += "" + D.join(",") : t += "" + D, t += "' } ", e.opts.messages !== !1 && (t += " , message: 'should be ", N ? t += "" + D.join(",") : t += "" + D, t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + f + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + g + " "), t += " } ") : t += " {} ";
            var P = t;
            t = m.pop(), !e.compositeRule && E ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ";
          }
          E && (t += " if (errors === ", A ? t += "0" : t += "errs_" + u, t += ") { ", T += "}");
        }
    }
  }
  E && (t += " " + T + " "), A ? (s ? (t += " if (errors === 0) return data;           ", t += " else throw new ValidationError(vErrors); ") : (t += " validate.errors = vErrors; ", t += " return errors === 0;       "), t += " }; return validate;") : t += " var " + w + " = errors === errs_" + u + ";";
  function ye(ve) {
    for (var pe = ve.rules, Ee = 0; Ee < pe.length; Ee++)
      if (Ge(pe[Ee]))
        return !0;
  }
  function Ge(ve) {
    return e.schema[ve.keyword] !== void 0 || ve.implements && Kr(ve);
  }
  function Kr(ve) {
    for (var pe = ve.implements, Ee = 0; Ee < pe.length; Ee++)
      if (e.schema[pe[Ee]] !== void 0)
        return !0;
  }
  return t;
}, _t = Fn, Ut = Ir, el = Nn, Rc = Zo, Ks = Xo, xc = Ut.ucs2length, Ic = xn, Cc = el.Validation, Dc = tn;
function tn(r, e, a, n) {
  var t = this, s = this._opts, i = [void 0], o = {}, l = [], c = {}, u = [], d = {}, p = [];
  e = e || { schema: r, refVal: i, refs: o };
  var f = jc.call(this, r, e, n), v = this._compilations[f.index];
  if (f.compiling)
    return v.callValidate = $;
  var g = this._formats, m = this.RULES;
  try {
    var P = w(r, e, a, n);
    v.validate = P;
    var A = v.callValidate;
    return A && (A.schema = P.schema, A.errors = null, A.refs = P.refs, A.refVal = P.refVal, A.root = P.root, A.$async = P.$async, s.sourceCode && (A.source = P.source)), P;
  } finally {
    Tc.call(this, r, e, n);
  }
  function $() {
    var I = v.validate, R = I.apply(this, arguments);
    return $.errors = I.errors, R;
  }
  function w(I, R, F, k) {
    var K = !R || R && R.schema == I;
    if (R.schema != e.schema)
      return tn.call(t, I, R, F, k);
    var H = I.$async === !0, B = Ks({
      isTop: !0,
      schema: I,
      isRoot: K,
      baseId: k,
      root: R,
      schemaPath: "",
      errSchemaPath: "#",
      errorPath: '""',
      MissingRefError: el.MissingRef,
      RULES: m,
      validate: Ks,
      util: Ut,
      resolve: _t,
      resolveRef: E,
      usePattern: N,
      useDefault: M,
      useCustomRule: j,
      opts: s,
      formats: g,
      logger: t.logger,
      self: t
    });
    B = St(i, Mc) + St(l, Fc) + St(u, Nc) + St(p, Lc) + B, s.processCode && (B = s.processCode(B, I));
    var q;
    try {
      var ae = new Function(
        "self",
        "RULES",
        "formats",
        "root",
        "refVal",
        "defaults",
        "customRules",
        "equal",
        "ucs2length",
        "ValidationError",
        B
      );
      q = ae(
        t,
        m,
        g,
        e,
        i,
        u,
        p,
        Ic,
        xc,
        Cc
      ), i[0] = q;
    } catch (he) {
      throw t.logger.error("Error compiling schema, function code:", B), he;
    }
    return q.schema = I, q.errors = null, q.refs = o, q.refVal = i, q.root = K ? q : R, H && (q.$async = !0), s.sourceCode === !0 && (q.source = {
      code: B,
      patterns: l,
      defaults: u
    }), q;
  }
  function E(I, R, F) {
    R = _t.url(I, R);
    var k = o[R], K, H;
    if (k !== void 0)
      return K = i[k], H = "refVal[" + k + "]", D(K, H);
    if (!F && e.refs) {
      var B = e.refs[R];
      if (B !== void 0)
        return K = e.refVal[B], H = x(R, K), D(K, H);
    }
    H = x(R);
    var q = _t.call(t, w, e, R);
    if (q === void 0) {
      var ae = a && a[R];
      ae && (q = _t.inlineRef(ae, s.inlineRefs) ? ae : tn.call(t, ae, e, a, I));
    }
    if (q === void 0)
      T(R);
    else
      return C(R, q), D(q, H);
  }
  function x(I, R) {
    var F = i.length;
    return i[F] = R, o[I] = F, "refVal" + F;
  }
  function T(I) {
    delete o[I];
  }
  function C(I, R) {
    var F = o[I];
    i[F] = R;
  }
  function D(I, R) {
    return typeof I == "object" || typeof I == "boolean" ? { code: R, schema: I, inline: !0 } : { code: R, $async: I && !!I.$async };
  }
  function N(I) {
    var R = c[I];
    return R === void 0 && (R = c[I] = l.length, l[R] = I), "pattern" + R;
  }
  function M(I) {
    switch (typeof I) {
      case "boolean":
      case "number":
        return "" + I;
      case "string":
        return Ut.toQuotedString(I);
      case "object":
        if (I === null)
          return "null";
        var R = Rc(I), F = d[R];
        return F === void 0 && (F = d[R] = u.length, u[F] = I), "default" + F;
    }
  }
  function j(I, R, F, k) {
    if (t._opts.validateSchema !== !1) {
      var K = I.definition.dependencies;
      if (K && !K.every(function(Se) {
        return Object.prototype.hasOwnProperty.call(F, Se);
      }))
        throw new Error("parent schema must have all required keywords: " + K.join(","));
      var H = I.definition.validateSchema;
      if (H) {
        var B = H(R);
        if (!B) {
          var q = "keyword schema is invalid: " + t.errorsText(H.errors);
          if (t._opts.validateSchema == "log")
            t.logger.error(q);
          else
            throw new Error(q);
        }
      }
    }
    var ae = I.definition.compile, he = I.definition.inline, ge = I.definition.macro, Q;
    if (ae)
      Q = ae.call(t, R, F, k);
    else if (ge)
      Q = ge.call(t, R, F, k), s.validateSchema !== !1 && t.validateSchema(Q, !0);
    else if (he)
      Q = he.call(t, k, I.keyword, R, F);
    else if (Q = I.definition.validate, !Q)
      return;
    if (Q === void 0)
      throw new Error('custom keyword "' + I.keyword + '"failed to compile');
    var xe = p.length;
    return p[xe] = Q, {
      code: "customRule" + xe,
      validate: Q
    };
  }
}
function jc(r, e, a) {
  var n = rl.call(this, r, e, a);
  return n >= 0 ? { index: n, compiling: !0 } : (n = this._compilations.length, this._compilations[n] = {
    schema: r,
    root: e,
    baseId: a
  }, { index: n, compiling: !1 });
}
function Tc(r, e, a) {
  var n = rl.call(this, r, e, a);
  n >= 0 && this._compilations.splice(n, 1);
}
function rl(r, e, a) {
  for (var n = 0; n < this._compilations.length; n++) {
    var t = this._compilations[n];
    if (t.schema == r && t.root == e && t.baseId == a)
      return n;
  }
  return -1;
}
function Fc(r, e) {
  return "var pattern" + r + " = new RegExp(" + Ut.toQuotedString(e[r]) + ");";
}
function Nc(r) {
  return "var default" + r + " = defaults[" + r + "];";
}
function Mc(r, e) {
  return e[r] === void 0 ? "" : "var refVal" + r + " = refVal[" + r + "];";
}
function Lc(r) {
  return "var customRule" + r + " = customRules[" + r + "];";
}
function St(r, e) {
  if (!r.length)
    return "";
  for (var a = "", n = 0; n < r.length; n++)
    a += e(n, r);
  return a;
}
var tl = { exports: {} }, Xt = tl.exports = function() {
  this._cache = {};
};
Xt.prototype.put = function(e, a) {
  this._cache[e] = a;
};
Xt.prototype.get = function(e) {
  return this._cache[e];
};
Xt.prototype.del = function(e) {
  delete this._cache[e];
};
Xt.prototype.clear = function() {
  this._cache = {};
};
var Uc = tl.exports, qc = Ir, Vc = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, kc = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], zc = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i, al = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i, Kc = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, Bc = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i, nl = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i, sl = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i, il = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i, ol = /^(?:\/(?:[^~/]|~0|~1)*)*$/, ll = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i, ul = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/, Gc = ea;
function ea(r) {
  return r = r == "full" ? "full" : "fast", qc.copy(ea[r]);
}
ea.fast = {
  // date: http://tools.ietf.org/html/rfc3339#section-5.6
  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
  time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
  "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
  // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
  uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
  "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
  "uri-template": nl,
  url: sl,
  // email (sources from jsen validator):
  // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
  // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
  email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  hostname: al,
  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: dl,
  // uuid: http://tools.ietf.org/html/rfc4122
  uuid: il,
  // JSON-pointer: https://tools.ietf.org/html/rfc6901
  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
  "json-pointer": ol,
  "json-pointer-uri-fragment": ll,
  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
  "relative-json-pointer": ul
};
ea.full = {
  date: fl,
  time: cl,
  "date-time": Jc,
  uri: Yc,
  "uri-reference": Bc,
  "uri-template": nl,
  url: sl,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: al,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: dl,
  uuid: il,
  "json-pointer": ol,
  "json-pointer-uri-fragment": ll,
  "relative-json-pointer": ul
};
function Hc(r) {
  return r % 4 === 0 && (r % 100 !== 0 || r % 400 === 0);
}
function fl(r) {
  var e = r.match(Vc);
  if (!e)
    return !1;
  var a = +e[1], n = +e[2], t = +e[3];
  return n >= 1 && n <= 12 && t >= 1 && t <= (n == 2 && Hc(a) ? 29 : kc[n]);
}
function cl(r, e) {
  var a = r.match(zc);
  if (!a)
    return !1;
  var n = a[1], t = a[2], s = a[3], i = a[5];
  return (n <= 23 && t <= 59 && s <= 59 || n == 23 && t == 59 && s == 60) && (!e || i);
}
var Qc = /t|\s/i;
function Jc(r) {
  var e = r.split(Qc);
  return e.length == 2 && fl(e[0]) && cl(e[1], !0);
}
var Wc = /\/|:/;
function Yc(r) {
  return Wc.test(r) && Kc.test(r);
}
var Zc = /[^\\]\\Z/;
function dl(r) {
  if (Zc.test(r))
    return !1;
  try {
    return new RegExp(r), !0;
  } catch {
    return !1;
  }
}
var Xc = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.errSchemaPath + "/" + a, c = !e.opts.allErrors, u = "data" + (i || ""), d = "valid" + s, p, f;
  if (o == "#" || o == "#/")
    e.isRoot ? (p = e.async, f = "validate") : (p = e.root.schema.$async === !0, f = "root.refVal[0]");
  else {
    var v = e.resolveRef(e.baseId, o, e.isRoot);
    if (v === void 0) {
      var g = e.MissingRefError.message(e.baseId, o);
      if (e.opts.missingRefs == "fail") {
        e.logger.error(g);
        var m = m || [];
        m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { ref: '" + e.util.escapeQuotes(o) + "' } ", e.opts.messages !== !1 && (t += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(o) + "' "), e.opts.verbose && (t += " , schema: " + e.util.toQuotedString(o) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), t += " } ") : t += " {} ";
        var P = t;
        t = m.pop(), !e.compositeRule && c ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c && (t += " if (false) { ");
      } else if (e.opts.missingRefs == "ignore")
        e.logger.warn(g), c && (t += " if (true) { ");
      else
        throw new e.MissingRefError(e.baseId, o, g);
    } else if (v.inline) {
      var A = e.util.copy(e);
      A.level++;
      var $ = "valid" + A.level;
      A.schema = v.schema, A.schemaPath = "", A.errSchemaPath = o;
      var w = e.validate(A).replace(/validate\.schema/g, v.code);
      t += " " + w + " ", c && (t += " if (" + $ + ") { ");
    } else
      p = v.$async === !0 || e.async && v.$async !== !1, f = v.code;
  }
  if (f) {
    var m = m || [];
    m.push(t), t = "", e.opts.passContext ? t += " " + f + ".call(this, " : t += " " + f + "( ", t += " " + u + ", (dataPath || '')", e.errorPath != '""' && (t += " + " + e.errorPath);
    var E = i ? "data" + (i - 1 || "") : "parentData", x = i ? e.dataPathArr[i] : "parentDataProperty";
    t += " , " + E + " , " + x + ", rootData)  ";
    var T = t;
    if (t = m.pop(), p) {
      if (!e.async)
        throw new Error("async schema referenced by sync schema");
      c && (t += " var " + d + "; "), t += " try { await " + T + "; ", c && (t += " " + d + " = true; "), t += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", c && (t += " " + d + " = false; "), t += " } ", c && (t += " if (" + d + ") { ");
    } else
      t += " if (!" + T + ") { if (vErrors === null) vErrors = " + f + ".errors; else vErrors = vErrors.concat(" + f + ".errors); errors = vErrors.length; } ", c && (t += " else { ");
  }
  return t;
}, ed = function(e, a, n) {
  var t = " ", s = e.schema[a], i = e.schemaPath + e.util.getProperty(a), o = e.errSchemaPath + "/" + a, l = !e.opts.allErrors, c = e.util.copy(e), u = "";
  c.level++;
  var d = "valid" + c.level, p = c.baseId, f = !0, v = s;
  if (v)
    for (var g, m = -1, P = v.length - 1; m < P; )
      g = v[m += 1], (e.opts.strictKeywords ? typeof g == "object" && Object.keys(g).length > 0 || g === !1 : e.util.schemaHasRules(g, e.RULES.all)) && (f = !1, c.schema = g, c.schemaPath = i + "[" + m + "]", c.errSchemaPath = o + "/" + m, t += "  " + e.validate(c) + " ", c.baseId = p, l && (t += " if (" + d + ") { ", u += "}"));
  return l && (f ? t += " if (true) { " : t += " " + u.slice(0, -1) + " "), t;
}, rd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "valid" + s, f = "errs__" + s, v = e.util.copy(e), g = "";
  v.level++;
  var m = "valid" + v.level, P = o.every(function(C) {
    return e.opts.strictKeywords ? typeof C == "object" && Object.keys(C).length > 0 || C === !1 : e.util.schemaHasRules(C, e.RULES.all);
  });
  if (P) {
    var A = v.baseId;
    t += " var " + f + " = errors; var " + p + " = false;  ";
    var $ = e.compositeRule;
    e.compositeRule = v.compositeRule = !0;
    var w = o;
    if (w)
      for (var E, x = -1, T = w.length - 1; x < T; )
        E = w[x += 1], v.schema = E, v.schemaPath = l + "[" + x + "]", v.errSchemaPath = c + "/" + x, t += "  " + e.validate(v) + " ", v.baseId = A, t += " " + p + " = " + p + " || " + m + "; if (!" + p + ") { ", g += "}";
    e.compositeRule = v.compositeRule = $, t += " " + g + " if (!" + p + ") {   var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), t += " } else {  errors = " + f + "; if (vErrors !== null) { if (" + f + ") vErrors.length = " + f + "; else vErrors = null; } ", e.opts.allErrors && (t += " } ");
  } else
    u && (t += " if (true) { ");
  return t;
}, td = function(e, a, n) {
  var t = " ", s = e.schema[a], i = e.errSchemaPath + "/" + a;
  e.opts.allErrors;
  var o = e.util.toQuotedString(s);
  return e.opts.$comment === !0 ? t += " console.log(" + o + ");" : typeof e.opts.$comment == "function" && (t += " self._opts.$comment(" + o + ", " + e.util.toQuotedString(i) + ", validate.root.schema);"), t;
}, ad = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "valid" + s, f = e.opts.$data && o && o.$data;
  f && (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; "), f || (t += " var schema" + s + " = validate.schema" + l + ";"), t += "var " + p + " = equal(" + d + ", schema" + s + "); if (!" + p + ") {   ";
  var v = v || [];
  v.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { allowedValue: schema" + s + " } ", e.opts.messages !== !1 && (t += " , message: 'should be equal to constant' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var g = t;
  return t = v.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + g + "]); " : t += " validate.errors = [" + g + "]; return false; " : t += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " }", u && (t += " else { "), t;
}, nd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "valid" + s, f = "errs__" + s, v = e.util.copy(e), g = "";
  v.level++;
  var m = "valid" + v.level, P = "i" + s, A = v.dataLevel = e.dataLevel + 1, $ = "data" + A, w = e.baseId, E = e.opts.strictKeywords ? typeof o == "object" && Object.keys(o).length > 0 || o === !1 : e.util.schemaHasRules(o, e.RULES.all);
  if (t += "var " + f + " = errors;var " + p + ";", E) {
    var x = e.compositeRule;
    e.compositeRule = v.compositeRule = !0, v.schema = o, v.schemaPath = l, v.errSchemaPath = c, t += " var " + m + " = false; for (var " + P + " = 0; " + P + " < " + d + ".length; " + P + "++) { ", v.errorPath = e.util.getPathExpr(e.errorPath, P, e.opts.jsonPointers, !0);
    var T = d + "[" + P + "]";
    v.dataPathArr[A] = P;
    var C = e.validate(v);
    v.baseId = w, e.util.varOccurences(C, $) < 2 ? t += " " + e.util.varReplace(C, $, T) + " " : t += " var " + $ + " = " + T + "; " + C + " ", t += " if (" + m + ") break; }  ", e.compositeRule = v.compositeRule = x, t += " " + g + " if (!" + m + ") {";
  } else
    t += " if (" + d + ".length == 0) {";
  var D = D || [];
  D.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'should contain a valid item' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var N = t;
  return t = D.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + N + "]); " : t += " validate.errors = [" + N + "]; return false; " : t += " var err = " + N + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else { ", E && (t += "  errors = " + f + "; if (vErrors !== null) { if (" + f + ") vErrors.length = " + f + "; else vErrors = null; } "), e.opts.allErrors && (t += " } "), t;
}, sd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "errs__" + s, f = e.util.copy(e), v = "";
  f.level++;
  var g = "valid" + f.level, m = {}, P = {}, A = e.opts.ownProperties;
  for (x in o)
    if (x != "__proto__") {
      var $ = o[x], w = Array.isArray($) ? P : m;
      w[x] = $;
    }
  t += "var " + p + " = errors;";
  var E = e.errorPath;
  t += "var missing" + s + ";";
  for (var x in P)
    if (w = P[x], w.length) {
      if (t += " if ( " + d + e.util.getProperty(x) + " !== undefined ", A && (t += " && Object.prototype.hasOwnProperty.call(" + d + ", '" + e.util.escapeQuotes(x) + "') "), u) {
        t += " && ( ";
        var T = w;
        if (T)
          for (var C, D = -1, N = T.length - 1; D < N; ) {
            C = T[D += 1], D && (t += " || ");
            var M = e.util.getProperty(C), j = d + M;
            t += " ( ( " + j + " === undefined ", A && (t += " || ! Object.prototype.hasOwnProperty.call(" + d + ", '" + e.util.escapeQuotes(C) + "') "), t += ") && (missing" + s + " = " + e.util.toQuotedString(e.opts.jsonPointers ? C : M) + ") ) ";
          }
        t += ")) {  ";
        var I = "missing" + s, R = "' + " + I + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(E, I, !0) : E + " + " + I);
        var F = F || [];
        F.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(x) + "', missingProperty: '" + R + "', depsCount: " + w.length + ", deps: '" + e.util.escapeQuotes(w.length == 1 ? w[0] : w.join(", ")) + "' } ", e.opts.messages !== !1 && (t += " , message: 'should have ", w.length == 1 ? t += "property " + e.util.escapeQuotes(w[0]) : t += "properties " + e.util.escapeQuotes(w.join(", ")), t += " when property " + e.util.escapeQuotes(x) + " is present' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
        var k = t;
        t = F.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + k + "]); " : t += " validate.errors = [" + k + "]; return false; " : t += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
      } else {
        t += " ) { ";
        var K = w;
        if (K)
          for (var C, H = -1, B = K.length - 1; H < B; ) {
            C = K[H += 1];
            var M = e.util.getProperty(C), R = e.util.escapeQuotes(C), j = d + M;
            e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(E, C, e.opts.jsonPointers)), t += " if ( " + j + " === undefined ", A && (t += " || ! Object.prototype.hasOwnProperty.call(" + d + ", '" + e.util.escapeQuotes(C) + "') "), t += ") {  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { property: '" + e.util.escapeQuotes(x) + "', missingProperty: '" + R + "', depsCount: " + w.length + ", deps: '" + e.util.escapeQuotes(w.length == 1 ? w[0] : w.join(", ")) + "' } ", e.opts.messages !== !1 && (t += " , message: 'should have ", w.length == 1 ? t += "property " + e.util.escapeQuotes(w[0]) : t += "properties " + e.util.escapeQuotes(w.join(", ")), t += " when property " + e.util.escapeQuotes(x) + " is present' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
          }
      }
      t += " }   ", u && (v += "}", t += " else { ");
    }
  e.errorPath = E;
  var q = f.baseId;
  for (var x in m) {
    var $ = m[x];
    (e.opts.strictKeywords ? typeof $ == "object" && Object.keys($).length > 0 || $ === !1 : e.util.schemaHasRules($, e.RULES.all)) && (t += " " + g + " = true; if ( " + d + e.util.getProperty(x) + " !== undefined ", A && (t += " && Object.prototype.hasOwnProperty.call(" + d + ", '" + e.util.escapeQuotes(x) + "') "), t += ") { ", f.schema = $, f.schemaPath = l + e.util.getProperty(x), f.errSchemaPath = c + "/" + e.util.escapeFragment(x), t += "  " + e.validate(f) + " ", f.baseId = q, t += " }  ", u && (t += " if (" + g + ") { ", v += "}"));
  }
  return u && (t += "   " + v + " if (" + p + " == errors) {"), t;
}, id = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "valid" + s, f = e.opts.$data && o && o.$data;
  f && (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ");
  var v = "i" + s, g = "schema" + s;
  f || (t += " var " + g + " = validate.schema" + l + ";"), t += "var " + p + ";", f && (t += " if (schema" + s + " === undefined) " + p + " = true; else if (!Array.isArray(schema" + s + ")) " + p + " = false; else {"), t += "" + p + " = false;for (var " + v + "=0; " + v + "<" + g + ".length; " + v + "++) if (equal(" + d + ", " + g + "[" + v + "])) { " + p + " = true; break; }", f && (t += "  }  "), t += " if (!" + p + ") {   ";
  var m = m || [];
  m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { allowedValues: schema" + s + " } ", e.opts.messages !== !1 && (t += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var P = t;
  return t = m.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " }", u && (t += " else { "), t;
}, od = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || "");
  if (e.opts.format === !1)
    return u && (t += " if (true) { "), t;
  var p = e.opts.$data && o && o.$data, f;
  p ? (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", f = "schema" + s) : f = o;
  var v = e.opts.unknownFormats, g = Array.isArray(v);
  if (p) {
    var m = "format" + s, P = "isObject" + s, A = "formatType" + s;
    t += " var " + m + " = formats[" + f + "]; var " + P + " = typeof " + m + " == 'object' && !(" + m + " instanceof RegExp) && " + m + ".validate; var " + A + " = " + P + " && " + m + ".type || 'string'; if (" + P + ") { ", e.async && (t += " var async" + s + " = " + m + ".async; "), t += " " + m + " = " + m + ".validate; } if (  ", p && (t += " (" + f + " !== undefined && typeof " + f + " != 'string') || "), t += " (", v != "ignore" && (t += " (" + f + " && !" + m + " ", g && (t += " && self._opts.unknownFormats.indexOf(" + f + ") == -1 "), t += ") || "), t += " (" + m + " && " + A + " == '" + n + "' && !(typeof " + m + " == 'function' ? ", e.async ? t += " (async" + s + " ? await " + m + "(" + d + ") : " + m + "(" + d + ")) " : t += " " + m + "(" + d + ") ", t += " : " + m + ".test(" + d + "))))) {";
  } else {
    var m = e.formats[o];
    if (!m) {
      if (v == "ignore")
        return e.logger.warn('unknown format "' + o + '" ignored in schema at path "' + e.errSchemaPath + '"'), u && (t += " if (true) { "), t;
      if (g && v.indexOf(o) >= 0)
        return u && (t += " if (true) { "), t;
      throw new Error('unknown format "' + o + '" is used in schema at path "' + e.errSchemaPath + '"');
    }
    var P = typeof m == "object" && !(m instanceof RegExp) && m.validate, A = P && m.type || "string";
    if (P) {
      var $ = m.async === !0;
      m = m.validate;
    }
    if (A != n)
      return u && (t += " if (true) { "), t;
    if ($) {
      if (!e.async)
        throw new Error("async format in sync schema");
      var w = "formats" + e.util.getProperty(o) + ".validate";
      t += " if (!(await " + w + "(" + d + "))) { ";
    } else {
      t += " if (! ";
      var w = "formats" + e.util.getProperty(o);
      P && (w += ".validate"), typeof m == "function" ? t += " " + w + "(" + d + ") " : t += " " + w + ".test(" + d + ") ", t += ") { ";
    }
  }
  var E = E || [];
  E.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { format:  ", p ? t += "" + f : t += "" + e.util.toQuotedString(o), t += "  } ", e.opts.messages !== !1 && (t += ` , message: 'should match format "`, p ? t += "' + " + f + " + '" : t += "" + e.util.escapeQuotes(o), t += `"' `), e.opts.verbose && (t += " , schema:  ", p ? t += "validate.schema" + l : t += "" + e.util.toQuotedString(o), t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var x = t;
  return t = E.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + x + "]); " : t += " validate.errors = [" + x + "]; return false; " : t += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ", u && (t += " else { "), t;
}, ld = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "valid" + s, f = "errs__" + s, v = e.util.copy(e);
  v.level++;
  var g = "valid" + v.level, m = e.schema.then, P = e.schema.else, A = m !== void 0 && (e.opts.strictKeywords ? typeof m == "object" && Object.keys(m).length > 0 || m === !1 : e.util.schemaHasRules(m, e.RULES.all)), $ = P !== void 0 && (e.opts.strictKeywords ? typeof P == "object" && Object.keys(P).length > 0 || P === !1 : e.util.schemaHasRules(P, e.RULES.all)), w = v.baseId;
  if (A || $) {
    var E;
    v.createErrors = !1, v.schema = o, v.schemaPath = l, v.errSchemaPath = c, t += " var " + f + " = errors; var " + p + " = true;  ";
    var x = e.compositeRule;
    e.compositeRule = v.compositeRule = !0, t += "  " + e.validate(v) + " ", v.baseId = w, v.createErrors = !0, t += "  errors = " + f + "; if (vErrors !== null) { if (" + f + ") vErrors.length = " + f + "; else vErrors = null; }  ", e.compositeRule = v.compositeRule = x, A ? (t += " if (" + g + ") {  ", v.schema = e.schema.then, v.schemaPath = e.schemaPath + ".then", v.errSchemaPath = e.errSchemaPath + "/then", t += "  " + e.validate(v) + " ", v.baseId = w, t += " " + p + " = " + g + "; ", A && $ ? (E = "ifClause" + s, t += " var " + E + " = 'then'; ") : E = "'then'", t += " } ", $ && (t += " else { ")) : t += " if (!" + g + ") { ", $ && (v.schema = e.schema.else, v.schemaPath = e.schemaPath + ".else", v.errSchemaPath = e.errSchemaPath + "/else", t += "  " + e.validate(v) + " ", v.baseId = w, t += " " + p + " = " + g + "; ", A && $ ? (E = "ifClause" + s, t += " var " + E + " = 'else'; ") : E = "'else'", t += " } "), t += " if (!" + p + ") {   var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { failingKeyword: " + E + " } ", e.opts.messages !== !1 && (t += ` , message: 'should match "' + ` + E + ` + '" schema' `), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), t += " }   ", u && (t += " else { ");
  } else
    u && (t += " if (true) { ");
  return t;
}, ud = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "valid" + s, f = "errs__" + s, v = e.util.copy(e), g = "";
  v.level++;
  var m = "valid" + v.level, P = "i" + s, A = v.dataLevel = e.dataLevel + 1, $ = "data" + A, w = e.baseId;
  if (t += "var " + f + " = errors;var " + p + ";", Array.isArray(o)) {
    var E = e.schema.additionalItems;
    if (E === !1) {
      t += " " + p + " = " + d + ".length <= " + o.length + "; ";
      var x = c;
      c = e.errSchemaPath + "/additionalItems", t += "  if (!" + p + ") {   ";
      var T = T || [];
      T.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + o.length + " } ", e.opts.messages !== !1 && (t += " , message: 'should NOT have more than " + o.length + " items' "), e.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
      var C = t;
      t = T.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + C + "]); " : t += " validate.errors = [" + C + "]; return false; " : t += " var err = " + C + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ", c = x, u && (g += "}", t += " else { ");
    }
    var D = o;
    if (D) {
      for (var N, M = -1, j = D.length - 1; M < j; )
        if (N = D[M += 1], e.opts.strictKeywords ? typeof N == "object" && Object.keys(N).length > 0 || N === !1 : e.util.schemaHasRules(N, e.RULES.all)) {
          t += " " + m + " = true; if (" + d + ".length > " + M + ") { ";
          var I = d + "[" + M + "]";
          v.schema = N, v.schemaPath = l + "[" + M + "]", v.errSchemaPath = c + "/" + M, v.errorPath = e.util.getPathExpr(e.errorPath, M, e.opts.jsonPointers, !0), v.dataPathArr[A] = M;
          var R = e.validate(v);
          v.baseId = w, e.util.varOccurences(R, $) < 2 ? t += " " + e.util.varReplace(R, $, I) + " " : t += " var " + $ + " = " + I + "; " + R + " ", t += " }  ", u && (t += " if (" + m + ") { ", g += "}");
        }
    }
    if (typeof E == "object" && (e.opts.strictKeywords ? typeof E == "object" && Object.keys(E).length > 0 || E === !1 : e.util.schemaHasRules(E, e.RULES.all))) {
      v.schema = E, v.schemaPath = e.schemaPath + ".additionalItems", v.errSchemaPath = e.errSchemaPath + "/additionalItems", t += " " + m + " = true; if (" + d + ".length > " + o.length + ") {  for (var " + P + " = " + o.length + "; " + P + " < " + d + ".length; " + P + "++) { ", v.errorPath = e.util.getPathExpr(e.errorPath, P, e.opts.jsonPointers, !0);
      var I = d + "[" + P + "]";
      v.dataPathArr[A] = P;
      var R = e.validate(v);
      v.baseId = w, e.util.varOccurences(R, $) < 2 ? t += " " + e.util.varReplace(R, $, I) + " " : t += " var " + $ + " = " + I + "; " + R + " ", u && (t += " if (!" + m + ") break; "), t += " } }  ", u && (t += " if (" + m + ") { ", g += "}");
    }
  } else if (e.opts.strictKeywords ? typeof o == "object" && Object.keys(o).length > 0 || o === !1 : e.util.schemaHasRules(o, e.RULES.all)) {
    v.schema = o, v.schemaPath = l, v.errSchemaPath = c, t += "  for (var " + P + " = 0; " + P + " < " + d + ".length; " + P + "++) { ", v.errorPath = e.util.getPathExpr(e.errorPath, P, e.opts.jsonPointers, !0);
    var I = d + "[" + P + "]";
    v.dataPathArr[A] = P;
    var R = e.validate(v);
    v.baseId = w, e.util.varOccurences(R, $) < 2 ? t += " " + e.util.varReplace(R, $, I) + " " : t += " var " + $ + " = " + I + "; " + R + " ", u && (t += " if (!" + m + ") break; "), t += " }";
  }
  return u && (t += " " + g + " if (" + f + " == errors) {"), t;
}, Bs = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, w, d = "data" + (i || ""), p = e.opts.$data && o && o.$data, f;
  p ? (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", f = "schema" + s) : f = o;
  var v = a == "maximum", g = v ? "exclusiveMaximum" : "exclusiveMinimum", m = e.schema[g], P = e.opts.$data && m && m.$data, A = v ? "<" : ">", $ = v ? ">" : "<", w = void 0;
  if (!(p || typeof o == "number" || o === void 0))
    throw new Error(a + " must be number");
  if (!(P || m === void 0 || typeof m == "number" || typeof m == "boolean"))
    throw new Error(g + " must be number or boolean");
  if (P) {
    var E = e.util.getData(m.$data, i, e.dataPathArr), x = "exclusive" + s, T = "exclType" + s, C = "exclIsNumber" + s, D = "op" + s, N = "' + " + D + " + '";
    t += " var schemaExcl" + s + " = " + E + "; ", E = "schemaExcl" + s, t += " var " + x + "; var " + T + " = typeof " + E + "; if (" + T + " != 'boolean' && " + T + " != 'undefined' && " + T + " != 'number') { ";
    var w = g, M = M || [];
    M.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (w || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: '" + g + " should be boolean' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
    var j = t;
    t = M.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + j + "]); " : t += " validate.errors = [" + j + "]; return false; " : t += " var err = " + j + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else if ( ", p && (t += " (" + f + " !== undefined && typeof " + f + " != 'number') || "), t += " " + T + " == 'number' ? ( (" + x + " = " + f + " === undefined || " + E + " " + A + "= " + f + ") ? " + d + " " + $ + "= " + E + " : " + d + " " + $ + " " + f + " ) : ( (" + x + " = " + E + " === true) ? " + d + " " + $ + "= " + f + " : " + d + " " + $ + " " + f + " ) || " + d + " !== " + d + ") { var op" + s + " = " + x + " ? '" + A + "' : '" + A + "='; ", o === void 0 && (w = g, c = e.errSchemaPath + "/" + g, f = E, p = P);
  } else {
    var C = typeof m == "number", N = A;
    if (C && p) {
      var D = "'" + N + "'";
      t += " if ( ", p && (t += " (" + f + " !== undefined && typeof " + f + " != 'number') || "), t += " ( " + f + " === undefined || " + m + " " + A + "= " + f + " ? " + d + " " + $ + "= " + m + " : " + d + " " + $ + " " + f + " ) || " + d + " !== " + d + ") { ";
    } else {
      C && o === void 0 ? (x = !0, w = g, c = e.errSchemaPath + "/" + g, f = m, $ += "=") : (C && (f = Math[v ? "min" : "max"](m, o)), m === (C ? f : !0) ? (x = !0, w = g, c = e.errSchemaPath + "/" + g, $ += "=") : (x = !1, N += "="));
      var D = "'" + N + "'";
      t += " if ( ", p && (t += " (" + f + " !== undefined && typeof " + f + " != 'number') || "), t += " " + d + " " + $ + " " + f + " || " + d + " !== " + d + ") { ";
    }
  }
  w = w || a;
  var M = M || [];
  M.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (w || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { comparison: " + D + ", limit: " + f + ", exclusive: " + x + " } ", e.opts.messages !== !1 && (t += " , message: 'should be " + N + " ", p ? t += "' + " + f : t += "" + f + "'"), e.opts.verbose && (t += " , schema:  ", p ? t += "validate.schema" + l : t += "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var j = t;
  return t = M.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + j + "]); " : t += " validate.errors = [" + j + "]; return false; " : t += " var err = " + j + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ", u && (t += " else { "), t;
}, Gs = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, g, d = "data" + (i || ""), p = e.opts.$data && o && o.$data, f;
  if (p ? (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", f = "schema" + s) : f = o, !(p || typeof o == "number"))
    throw new Error(a + " must be number");
  var v = a == "maxItems" ? ">" : "<";
  t += "if ( ", p && (t += " (" + f + " !== undefined && typeof " + f + " != 'number') || "), t += " " + d + ".length " + v + " " + f + ") { ";
  var g = a, m = m || [];
  m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (g || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + f + " } ", e.opts.messages !== !1 && (t += " , message: 'should NOT have ", a == "maxItems" ? t += "more" : t += "fewer", t += " than ", p ? t += "' + " + f + " + '" : t += "" + o, t += " items' "), e.opts.verbose && (t += " , schema:  ", p ? t += "validate.schema" + l : t += "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var P = t;
  return t = m.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", u && (t += " else { "), t;
}, Hs = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, g, d = "data" + (i || ""), p = e.opts.$data && o && o.$data, f;
  if (p ? (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", f = "schema" + s) : f = o, !(p || typeof o == "number"))
    throw new Error(a + " must be number");
  var v = a == "maxLength" ? ">" : "<";
  t += "if ( ", p && (t += " (" + f + " !== undefined && typeof " + f + " != 'number') || "), e.opts.unicode === !1 ? t += " " + d + ".length " : t += " ucs2length(" + d + ") ", t += " " + v + " " + f + ") { ";
  var g = a, m = m || [];
  m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (g || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + f + " } ", e.opts.messages !== !1 && (t += " , message: 'should NOT be ", a == "maxLength" ? t += "longer" : t += "shorter", t += " than ", p ? t += "' + " + f + " + '" : t += "" + o, t += " characters' "), e.opts.verbose && (t += " , schema:  ", p ? t += "validate.schema" + l : t += "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var P = t;
  return t = m.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", u && (t += " else { "), t;
}, Qs = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, g, d = "data" + (i || ""), p = e.opts.$data && o && o.$data, f;
  if (p ? (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", f = "schema" + s) : f = o, !(p || typeof o == "number"))
    throw new Error(a + " must be number");
  var v = a == "maxProperties" ? ">" : "<";
  t += "if ( ", p && (t += " (" + f + " !== undefined && typeof " + f + " != 'number') || "), t += " Object.keys(" + d + ").length " + v + " " + f + ") { ";
  var g = a, m = m || [];
  m.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (g || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + f + " } ", e.opts.messages !== !1 && (t += " , message: 'should NOT have ", a == "maxProperties" ? t += "more" : t += "fewer", t += " than ", p ? t += "' + " + f + " + '" : t += "" + o, t += " properties' "), e.opts.verbose && (t += " , schema:  ", p ? t += "validate.schema" + l : t += "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var P = t;
  return t = m.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + P + "]); " : t += " validate.errors = [" + P + "]; return false; " : t += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", u && (t += " else { "), t;
}, fd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = e.opts.$data && o && o.$data, f;
  if (p ? (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", f = "schema" + s) : f = o, !(p || typeof o == "number"))
    throw new Error(a + " must be number");
  t += "var division" + s + ";if (", p && (t += " " + f + " !== undefined && ( typeof " + f + " != 'number' || "), t += " (division" + s + " = " + d + " / " + f + ", ", e.opts.multipleOfPrecision ? t += " Math.abs(Math.round(division" + s + ") - division" + s + ") > 1e-" + e.opts.multipleOfPrecision + " " : t += " division" + s + " !== parseInt(division" + s + ") ", t += " ) ", p && (t += "  )  "), t += " ) {   ";
  var v = v || [];
  v.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { multipleOf: " + f + " } ", e.opts.messages !== !1 && (t += " , message: 'should be multiple of ", p ? t += "' + " + f : t += "" + f + "'"), e.opts.verbose && (t += " , schema:  ", p ? t += "validate.schema" + l : t += "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var g = t;
  return t = v.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + g + "]); " : t += " validate.errors = [" + g + "]; return false; " : t += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", u && (t += " else { "), t;
}, cd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "errs__" + s, f = e.util.copy(e);
  f.level++;
  var v = "valid" + f.level;
  if (e.opts.strictKeywords ? typeof o == "object" && Object.keys(o).length > 0 || o === !1 : e.util.schemaHasRules(o, e.RULES.all)) {
    f.schema = o, f.schemaPath = l, f.errSchemaPath = c, t += " var " + p + " = errors;  ";
    var g = e.compositeRule;
    e.compositeRule = f.compositeRule = !0, f.createErrors = !1;
    var m;
    f.opts.allErrors && (m = f.opts.allErrors, f.opts.allErrors = !1), t += " " + e.validate(f) + " ", f.createErrors = !0, m && (f.opts.allErrors = m), e.compositeRule = f.compositeRule = g, t += " if (" + v + ") {   ";
    var P = P || [];
    P.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'should NOT be valid' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
    var A = t;
    t = P.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + A + "]); " : t += " validate.errors = [" + A + "]; return false; " : t += " var err = " + A + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else {  errors = " + p + "; if (vErrors !== null) { if (" + p + ") vErrors.length = " + p + "; else vErrors = null; } ", e.opts.allErrors && (t += " } ");
  } else
    t += "  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", e.opts.messages !== !1 && (t += " , message: 'should NOT be valid' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", u && (t += " if (false) { ");
  return t;
}, dd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "valid" + s, f = "errs__" + s, v = e.util.copy(e), g = "";
  v.level++;
  var m = "valid" + v.level, P = v.baseId, A = "prevValid" + s, $ = "passingSchemas" + s;
  t += "var " + f + " = errors , " + A + " = false , " + p + " = false , " + $ + " = null; ";
  var w = e.compositeRule;
  e.compositeRule = v.compositeRule = !0;
  var E = o;
  if (E)
    for (var x, T = -1, C = E.length - 1; T < C; )
      x = E[T += 1], (e.opts.strictKeywords ? typeof x == "object" && Object.keys(x).length > 0 || x === !1 : e.util.schemaHasRules(x, e.RULES.all)) ? (v.schema = x, v.schemaPath = l + "[" + T + "]", v.errSchemaPath = c + "/" + T, t += "  " + e.validate(v) + " ", v.baseId = P) : t += " var " + m + " = true; ", T && (t += " if (" + m + " && " + A + ") { " + p + " = false; " + $ + " = [" + $ + ", " + T + "]; } else { ", g += "}"), t += " if (" + m + ") { " + p + " = " + A + " = true; " + $ + " = " + T + "; }";
  return e.compositeRule = v.compositeRule = w, t += "" + g + "if (!" + p + ") {   var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { passingSchemas: " + $ + " } ", e.opts.messages !== !1 && (t += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), t += "} else {  errors = " + f + "; if (vErrors !== null) { if (" + f + ") vErrors.length = " + f + "; else vErrors = null; }", e.opts.allErrors && (t += " } "), t;
}, hd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = e.opts.$data && o && o.$data, f;
  p ? (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", f = "schema" + s) : f = o;
  var v = p ? "(new RegExp(" + f + "))" : e.usePattern(o);
  t += "if ( ", p && (t += " (" + f + " !== undefined && typeof " + f + " != 'string') || "), t += " !" + v + ".test(" + d + ") ) {   ";
  var g = g || [];
  g.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { pattern:  ", p ? t += "" + f : t += "" + e.util.toQuotedString(o), t += "  } ", e.opts.messages !== !1 && (t += ` , message: 'should match pattern "`, p ? t += "' + " + f + " + '" : t += "" + e.util.escapeQuotes(o), t += `"' `), e.opts.verbose && (t += " , schema:  ", p ? t += "validate.schema" + l : t += "" + e.util.toQuotedString(o), t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
  var m = t;
  return t = g.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + m + "]); " : t += " validate.errors = [" + m + "]; return false; " : t += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += "} ", u && (t += " else { "), t;
}, vd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "errs__" + s, f = e.util.copy(e), v = "";
  f.level++;
  var g = "valid" + f.level, m = "key" + s, P = "idx" + s, A = f.dataLevel = e.dataLevel + 1, $ = "data" + A, w = "dataProperties" + s, E = Object.keys(o || {}).filter(H), x = e.schema.patternProperties || {}, T = Object.keys(x).filter(H), C = e.schema.additionalProperties, D = E.length || T.length, N = C === !1, M = typeof C == "object" && Object.keys(C).length, j = e.opts.removeAdditional, I = N || M || j, R = e.opts.ownProperties, F = e.baseId, k = e.schema.required;
  if (k && !(e.opts.$data && k.$data) && k.length < e.opts.loopRequired)
    var K = e.util.toHash(k);
  function H(Sa) {
    return Sa !== "__proto__";
  }
  if (t += "var " + p + " = errors;var " + g + " = true;", R && (t += " var " + w + " = undefined;"), I) {
    if (R ? t += " " + w + " = " + w + " || Object.keys(" + d + "); for (var " + P + "=0; " + P + "<" + w + ".length; " + P + "++) { var " + m + " = " + w + "[" + P + "]; " : t += " for (var " + m + " in " + d + ") { ", D) {
      if (t += " var isAdditional" + s + " = !(false ", E.length)
        if (E.length > 8)
          t += " || validate.schema" + l + ".hasOwnProperty(" + m + ") ";
        else {
          var B = E;
          if (B)
            for (var q, ae = -1, he = B.length - 1; ae < he; )
              q = B[ae += 1], t += " || " + m + " == " + e.util.toQuotedString(q) + " ";
        }
      if (T.length) {
        var ge = T;
        if (ge)
          for (var Q, xe = -1, Se = ge.length - 1; xe < Se; )
            Q = ge[xe += 1], t += " || " + e.usePattern(Q) + ".test(" + m + ") ";
      }
      t += " ); if (isAdditional" + s + ") { ";
    }
    if (j == "all")
      t += " delete " + d + "[" + m + "]; ";
    else {
      var le = e.errorPath, _e = "' + " + m + " + '";
      if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers)), N)
        if (j)
          t += " delete " + d + "[" + m + "]; ";
        else {
          t += " " + g + " = false; ";
          var Oe = c;
          c = e.errSchemaPath + "/additionalProperties";
          var ce = ce || [];
          ce.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { additionalProperty: '" + _e + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is an invalid additional property" : t += "should NOT have additional properties", t += "' "), e.opts.verbose && (t += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
          var ne = t;
          t = ce.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + ne + "]); " : t += " validate.errors = [" + ne + "]; return false; " : t += " var err = " + ne + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c = Oe, u && (t += " break; ");
        }
      else if (M)
        if (j == "failing") {
          t += " var " + p + " = errors;  ";
          var Ue = e.compositeRule;
          e.compositeRule = f.compositeRule = !0, f.schema = C, f.schemaPath = e.schemaPath + ".additionalProperties", f.errSchemaPath = e.errSchemaPath + "/additionalProperties", f.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);
          var be = d + "[" + m + "]";
          f.dataPathArr[A] = m;
          var se = e.validate(f);
          f.baseId = F, e.util.varOccurences(se, $) < 2 ? t += " " + e.util.varReplace(se, $, be) + " " : t += " var " + $ + " = " + be + "; " + se + " ", t += " if (!" + g + ") { errors = " + p + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + d + "[" + m + "]; }  ", e.compositeRule = f.compositeRule = Ue;
        } else {
          f.schema = C, f.schemaPath = e.schemaPath + ".additionalProperties", f.errSchemaPath = e.errSchemaPath + "/additionalProperties", f.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);
          var be = d + "[" + m + "]";
          f.dataPathArr[A] = m;
          var se = e.validate(f);
          f.baseId = F, e.util.varOccurences(se, $) < 2 ? t += " " + e.util.varReplace(se, $, be) + " " : t += " var " + $ + " = " + be + "; " + se + " ", u && (t += " if (!" + g + ") break; ");
        }
      e.errorPath = le;
    }
    D && (t += " } "), t += " }  ", u && (t += " if (" + g + ") { ", v += "}");
  }
  var Be = e.opts.useDefaults && !e.compositeRule;
  if (E.length) {
    var Pe = E;
    if (Pe)
      for (var q, gr = -1, tr = Pe.length - 1; gr < tr; ) {
        q = Pe[gr += 1];
        var ye = o[q];
        if (e.opts.strictKeywords ? typeof ye == "object" && Object.keys(ye).length > 0 || ye === !1 : e.util.schemaHasRules(ye, e.RULES.all)) {
          var Ge = e.util.getProperty(q), be = d + Ge, Kr = Be && ye.default !== void 0;
          f.schema = ye, f.schemaPath = l + Ge, f.errSchemaPath = c + "/" + e.util.escapeFragment(q), f.errorPath = e.util.getPath(e.errorPath, q, e.opts.jsonPointers), f.dataPathArr[A] = e.util.toQuotedString(q);
          var se = e.validate(f);
          if (f.baseId = F, e.util.varOccurences(se, $) < 2) {
            se = e.util.varReplace(se, $, be);
            var ve = be;
          } else {
            var ve = $;
            t += " var " + $ + " = " + be + "; ";
          }
          if (Kr)
            t += " " + se + " ";
          else {
            if (K && K[q]) {
              t += " if ( " + ve + " === undefined ", R && (t += " || ! Object.prototype.hasOwnProperty.call(" + d + ", '" + e.util.escapeQuotes(q) + "') "), t += ") { " + g + " = false; ";
              var le = e.errorPath, Oe = c, pe = e.util.escapeQuotes(q);
              e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(le, q, e.opts.jsonPointers)), c = e.errSchemaPath + "/required";
              var ce = ce || [];
              ce.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + pe + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + pe + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
              var ne = t;
              t = ce.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + ne + "]); " : t += " validate.errors = [" + ne + "]; return false; " : t += " var err = " + ne + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c = Oe, e.errorPath = le, t += " } else { ";
            } else
              u ? (t += " if ( " + ve + " === undefined ", R && (t += " || ! Object.prototype.hasOwnProperty.call(" + d + ", '" + e.util.escapeQuotes(q) + "') "), t += ") { " + g + " = true; } else { ") : (t += " if (" + ve + " !== undefined ", R && (t += " &&   Object.prototype.hasOwnProperty.call(" + d + ", '" + e.util.escapeQuotes(q) + "') "), t += " ) { ");
            t += " " + se + " } ";
          }
        }
        u && (t += " if (" + g + ") { ", v += "}");
      }
  }
  if (T.length) {
    var Ee = T;
    if (Ee)
      for (var Q, gt = -1, _a = Ee.length - 1; gt < _a; ) {
        Q = Ee[gt += 1];
        var ye = x[Q];
        if (e.opts.strictKeywords ? typeof ye == "object" && Object.keys(ye).length > 0 || ye === !1 : e.util.schemaHasRules(ye, e.RULES.all)) {
          f.schema = ye, f.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(Q), f.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(Q), R ? t += " " + w + " = " + w + " || Object.keys(" + d + "); for (var " + P + "=0; " + P + "<" + w + ".length; " + P + "++) { var " + m + " = " + w + "[" + P + "]; " : t += " for (var " + m + " in " + d + ") { ", t += " if (" + e.usePattern(Q) + ".test(" + m + ")) { ", f.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);
          var be = d + "[" + m + "]";
          f.dataPathArr[A] = m;
          var se = e.validate(f);
          f.baseId = F, e.util.varOccurences(se, $) < 2 ? t += " " + e.util.varReplace(se, $, be) + " " : t += " var " + $ + " = " + be + "; " + se + " ", u && (t += " if (!" + g + ") break; "), t += " } ", u && (t += " else " + g + " = true; "), t += " }  ", u && (t += " if (" + g + ") { ", v += "}");
        }
      }
  }
  return u && (t += " " + v + " if (" + p + " == errors) {"), t;
}, pd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "errs__" + s, f = e.util.copy(e), v = "";
  f.level++;
  var g = "valid" + f.level;
  if (t += "var " + p + " = errors;", e.opts.strictKeywords ? typeof o == "object" && Object.keys(o).length > 0 || o === !1 : e.util.schemaHasRules(o, e.RULES.all)) {
    f.schema = o, f.schemaPath = l, f.errSchemaPath = c;
    var m = "key" + s, P = "idx" + s, A = "i" + s, $ = "' + " + m + " + '", w = f.dataLevel = e.dataLevel + 1, E = "data" + w, x = "dataProperties" + s, T = e.opts.ownProperties, C = e.baseId;
    T && (t += " var " + x + " = undefined; "), T ? t += " " + x + " = " + x + " || Object.keys(" + d + "); for (var " + P + "=0; " + P + "<" + x + ".length; " + P + "++) { var " + m + " = " + x + "[" + P + "]; " : t += " for (var " + m + " in " + d + ") { ", t += " var startErrs" + s + " = errors; ";
    var D = m, N = e.compositeRule;
    e.compositeRule = f.compositeRule = !0;
    var M = e.validate(f);
    f.baseId = C, e.util.varOccurences(M, E) < 2 ? t += " " + e.util.varReplace(M, E, D) + " " : t += " var " + E + " = " + D + "; " + M + " ", e.compositeRule = f.compositeRule = N, t += " if (!" + g + ") { for (var " + A + "=startErrs" + s + "; " + A + "<errors; " + A + "++) { vErrors[" + A + "].propertyName = " + m + "; }   var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { propertyName: '" + $ + "' } ", e.opts.messages !== !1 && (t += " , message: 'property name \\'" + $ + "\\' is invalid' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; "), u && (t += " break; "), t += " } }";
  }
  return u && (t += " " + v + " if (" + p + " == errors) {"), t;
}, md = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "valid" + s, f = e.opts.$data && o && o.$data;
  f && (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ");
  var v = "schema" + s;
  if (!f)
    if (o.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
      var g = [], m = o;
      if (m)
        for (var P, A = -1, $ = m.length - 1; A < $; ) {
          P = m[A += 1];
          var w = e.schema.properties[P];
          w && (e.opts.strictKeywords ? typeof w == "object" && Object.keys(w).length > 0 || w === !1 : e.util.schemaHasRules(w, e.RULES.all)) || (g[g.length] = P);
        }
    } else
      var g = o;
  if (f || g.length) {
    var E = e.errorPath, x = f || g.length >= e.opts.loopRequired, T = e.opts.ownProperties;
    if (u)
      if (t += " var missing" + s + "; ", x) {
        f || (t += " var " + v + " = validate.schema" + l + "; ");
        var C = "i" + s, D = "schema" + s + "[" + C + "]", N = "' + " + D + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(E, D, e.opts.jsonPointers)), t += " var " + p + " = true; ", f && (t += " if (schema" + s + " === undefined) " + p + " = true; else if (!Array.isArray(schema" + s + ")) " + p + " = false; else {"), t += " for (var " + C + " = 0; " + C + " < " + v + ".length; " + C + "++) { " + p + " = " + d + "[" + v + "[" + C + "]] !== undefined ", T && (t += " &&   Object.prototype.hasOwnProperty.call(" + d + ", " + v + "[" + C + "]) "), t += "; if (!" + p + ") break; } ", f && (t += "  }  "), t += "  if (!" + p + ") {   ";
        var M = M || [];
        M.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + N + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + N + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
        var j = t;
        t = M.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + j + "]); " : t += " validate.errors = [" + j + "]; return false; " : t += " var err = " + j + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else { ";
      } else {
        t += " if ( ";
        var I = g;
        if (I)
          for (var R, C = -1, F = I.length - 1; C < F; ) {
            R = I[C += 1], C && (t += " || ");
            var k = e.util.getProperty(R), K = d + k;
            t += " ( ( " + K + " === undefined ", T && (t += " || ! Object.prototype.hasOwnProperty.call(" + d + ", '" + e.util.escapeQuotes(R) + "') "), t += ") && (missing" + s + " = " + e.util.toQuotedString(e.opts.jsonPointers ? R : k) + ") ) ";
          }
        t += ") {  ";
        var D = "missing" + s, N = "' + " + D + " + '";
        e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(E, D, !0) : E + " + " + D);
        var M = M || [];
        M.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + N + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + N + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
        var j = t;
        t = M.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + j + "]); " : t += " validate.errors = [" + j + "]; return false; " : t += " var err = " + j + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } else { ";
      }
    else if (x) {
      f || (t += " var " + v + " = validate.schema" + l + "; ");
      var C = "i" + s, D = "schema" + s + "[" + C + "]", N = "' + " + D + " + '";
      e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(E, D, e.opts.jsonPointers)), f && (t += " if (" + v + " && !Array.isArray(" + v + ")) {  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + N + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + N + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + v + " !== undefined) { "), t += " for (var " + C + " = 0; " + C + " < " + v + ".length; " + C + "++) { if (" + d + "[" + v + "[" + C + "]] === undefined ", T && (t += " || ! Object.prototype.hasOwnProperty.call(" + d + ", " + v + "[" + C + "]) "), t += ") {  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + N + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + N + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", f && (t += "  }  ");
    } else {
      var H = g;
      if (H)
        for (var R, B = -1, q = H.length - 1; B < q; ) {
          R = H[B += 1];
          var k = e.util.getProperty(R), N = e.util.escapeQuotes(R), K = d + k;
          e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(E, R, e.opts.jsonPointers)), t += " if ( " + K + " === undefined ", T && (t += " || ! Object.prototype.hasOwnProperty.call(" + d + ", '" + e.util.escapeQuotes(R) + "') "), t += ") {  var err =   ", e.createErrors !== !1 ? (t += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { missingProperty: '" + N + "' } ", e.opts.messages !== !1 && (t += " , message: '", e.opts._errorDataPathProperty ? t += "is a required property" : t += "should have required property \\'" + N + "\\'", t += "' "), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ";
        }
    }
    e.errorPath = E;
  } else
    u && (t += " if (true) {");
  return t;
}, gd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d = "data" + (i || ""), p = "valid" + s, f = e.opts.$data && o && o.$data, v;
  if (f ? (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", v = "schema" + s) : v = o, (o || f) && e.opts.uniqueItems !== !1) {
    f && (t += " var " + p + "; if (" + v + " === false || " + v + " === undefined) " + p + " = true; else if (typeof " + v + " != 'boolean') " + p + " = false; else { "), t += " var i = " + d + ".length , " + p + " = true , j; if (i > 1) { ";
    var g = e.schema.items && e.schema.items.type, m = Array.isArray(g);
    if (!g || g == "object" || g == "array" || m && (g.indexOf("object") >= 0 || g.indexOf("array") >= 0))
      t += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + d + "[i], " + d + "[j])) { " + p + " = false; break outer; } } } ";
    else {
      t += " var itemIndices = {}, item; for (;i--;) { var item = " + d + "[i]; ";
      var P = "checkDataType" + (m ? "s" : "");
      t += " if (" + e.util[P](g, "item", e.opts.strictNumbers, !0) + ") continue; ", m && (t += ` if (typeof item == 'string') item = '"' + item; `), t += " if (typeof itemIndices[item] == 'number') { " + p + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";
    }
    t += " } ", f && (t += "  }  "), t += " if (!" + p + ") {   ";
    var A = A || [];
    A.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { i: i, j: j } ", e.opts.messages !== !1 && (t += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (t += " , schema:  ", f ? t += "validate.schema" + l : t += "" + o, t += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), t += " } ") : t += " {} ";
    var $ = t;
    t = A.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + $ + "]); " : t += " validate.errors = [" + $ + "]; return false; " : t += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", t += " } ", u && (t += " else { ");
  } else
    u && (t += " if (true) { ");
  return t;
}, yd = {
  $ref: Xc,
  allOf: ed,
  anyOf: rd,
  $comment: td,
  const: ad,
  contains: nd,
  dependencies: sd,
  enum: id,
  format: od,
  if: ld,
  items: ud,
  maximum: Bs,
  minimum: Bs,
  maxItems: Gs,
  minItems: Gs,
  maxLength: Hs,
  minLength: Hs,
  maxProperties: Qs,
  minProperties: Qs,
  multipleOf: fd,
  not: cd,
  oneOf: dd,
  pattern: hd,
  properties: vd,
  propertyNames: pd,
  required: md,
  uniqueItems: gd,
  validate: Xo
}, Js = yd, Oa = Ir.toHash, bd = function() {
  var e = [
    {
      type: "number",
      rules: [
        { maximum: ["exclusiveMaximum"] },
        { minimum: ["exclusiveMinimum"] },
        "multipleOf",
        "format"
      ]
    },
    {
      type: "string",
      rules: ["maxLength", "minLength", "pattern", "format"]
    },
    {
      type: "array",
      rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
    },
    {
      type: "object",
      rules: [
        "maxProperties",
        "minProperties",
        "required",
        "dependencies",
        "propertyNames",
        { properties: ["additionalProperties", "patternProperties"] }
      ]
    },
    { rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"] }
  ], a = ["type", "$comment"], n = [
    "$schema",
    "$id",
    "id",
    "$data",
    "$async",
    "title",
    "description",
    "default",
    "definitions",
    "examples",
    "readOnly",
    "writeOnly",
    "contentMediaType",
    "contentEncoding",
    "additionalItems",
    "then",
    "else"
  ], t = ["number", "integer", "string", "array", "object", "boolean", "null"];
  return e.all = Oa(a), e.types = Oa(t), e.forEach(function(s) {
    s.rules = s.rules.map(function(i) {
      var o;
      if (typeof i == "object") {
        var l = Object.keys(i)[0];
        o = i[l], i = l, o.forEach(function(u) {
          a.push(u), e.all[u] = !0;
        });
      }
      a.push(i);
      var c = e.all[i] = {
        keyword: i,
        code: Js[i],
        implements: o
      };
      return c;
    }), e.all.$comment = {
      keyword: "$comment",
      code: Js.$comment
    }, s.type && (e.types[s.type] = s);
  }), e.keywords = Oa(a.concat(n)), e.custom = {}, e;
}, Ws = [
  "multipleOf",
  "maximum",
  "exclusiveMaximum",
  "minimum",
  "exclusiveMinimum",
  "maxLength",
  "minLength",
  "pattern",
  "additionalItems",
  "maxItems",
  "minItems",
  "uniqueItems",
  "maxProperties",
  "minProperties",
  "required",
  "additionalProperties",
  "enum",
  "format",
  "const"
], Pd = function(r, e) {
  for (var a = 0; a < e.length; a++) {
    r = JSON.parse(JSON.stringify(r));
    var n = e[a].split("/"), t = r, s;
    for (s = 1; s < n.length; s++)
      t = t[n[s]];
    for (s = 0; s < Ws.length; s++) {
      var i = Ws[s], o = t[i];
      o && (t[i] = {
        anyOf: [
          o,
          { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
        ]
      });
    }
  }
  return r;
}, $d = Nn.MissingRef, _d = hl;
function hl(r, e, a) {
  var n = this;
  if (typeof this._opts.loadSchema != "function")
    throw new Error("options.loadSchema should be a function");
  typeof e == "function" && (a = e, e = void 0);
  var t = s(r).then(function() {
    var o = n._addSchema(r, void 0, e);
    return o.validate || i(o);
  });
  return a && t.then(
    function(o) {
      a(null, o);
    },
    a
  ), t;
  function s(o) {
    var l = o.$schema;
    return l && !n.getSchema(l) ? hl.call(n, { $ref: l }, !0) : Promise.resolve();
  }
  function i(o) {
    try {
      return n._compile(o);
    } catch (c) {
      if (c instanceof $d)
        return l(c);
      throw c;
    }
    function l(c) {
      var u = c.missingSchema;
      if (f(u))
        throw new Error("Schema " + u + " is loaded but " + c.missingRef + " cannot be resolved");
      var d = n._loadingSchemas[u];
      return d || (d = n._loadingSchemas[u] = n._opts.loadSchema(u), d.then(p, p)), d.then(function(v) {
        if (!f(u))
          return s(v).then(function() {
            f(u) || n.addSchema(v, u, void 0, e);
          });
      }).then(function() {
        return i(o);
      });
      function p() {
        delete n._loadingSchemas[u];
      }
      function f(v) {
        return n._refs[v] || n._schemas[v];
      }
    }
  }
}
var Sd = function(e, a, n) {
  var t = " ", s = e.level, i = e.dataLevel, o = e.schema[a], l = e.schemaPath + e.util.getProperty(a), c = e.errSchemaPath + "/" + a, u = !e.opts.allErrors, d, p = "data" + (i || ""), f = "valid" + s, v = "errs__" + s, g = e.opts.$data && o && o.$data, m;
  g ? (t += " var schema" + s + " = " + e.util.getData(o.$data, i, e.dataPathArr) + "; ", m = "schema" + s) : m = o;
  var P = this, A = "definition" + s, $ = P.definition, w = "", E, x, T, C, D;
  if (g && $.$data) {
    D = "keywordValidate" + s;
    var N = $.validateSchema;
    t += " var " + A + " = RULES.custom['" + a + "'].definition; var " + D + " = " + A + ".validate;";
  } else {
    if (C = e.useCustomRule(P, o, e.schema, e), !C)
      return;
    m = "validate.schema" + l, D = C.code, E = $.compile, x = $.inline, T = $.macro;
  }
  var M = D + ".errors", j = "i" + s, I = "ruleErr" + s, R = $.async;
  if (R && !e.async)
    throw new Error("async keyword in sync schema");
  if (x || T || (t += "" + M + " = null;"), t += "var " + v + " = errors;var " + f + ";", g && $.$data && (w += "}", t += " if (" + m + " === undefined) { " + f + " = true; } else { ", N && (w += "}", t += " " + f + " = " + A + ".validateSchema(" + m + "); if (" + f + ") { ")), x)
    $.statements ? t += " " + C.validate + " " : t += " " + f + " = " + C.validate + "; ";
  else if (T) {
    var F = e.util.copy(e), w = "";
    F.level++;
    var k = "valid" + F.level;
    F.schema = C.validate, F.schemaPath = "";
    var K = e.compositeRule;
    e.compositeRule = F.compositeRule = !0;
    var H = e.validate(F).replace(/validate\.schema/g, D);
    e.compositeRule = F.compositeRule = K, t += " " + H;
  } else {
    var B = B || [];
    B.push(t), t = "", t += "  " + D + ".call( ", e.opts.passContext ? t += "this" : t += "self", E || $.schema === !1 ? t += " , " + p + " " : t += " , " + m + " , " + p + " , validate.schema" + e.schemaPath + " ", t += " , (dataPath || '')", e.errorPath != '""' && (t += " + " + e.errorPath);
    var q = i ? "data" + (i - 1 || "") : "parentData", ae = i ? e.dataPathArr[i] : "parentDataProperty";
    t += " , " + q + " , " + ae + " , rootData )  ";
    var he = t;
    t = B.pop(), $.errors === !1 ? (t += " " + f + " = ", R && (t += "await "), t += "" + he + "; ") : R ? (M = "customErrors" + s, t += " var " + M + " = null; try { " + f + " = await " + he + "; } catch (e) { " + f + " = false; if (e instanceof ValidationError) " + M + " = e.errors; else throw e; } ") : t += " " + M + " = null; " + f + " = " + he + "; ";
  }
  if ($.modifying && (t += " if (" + q + ") " + p + " = " + q + "[" + ae + "];"), t += "" + w, $.valid)
    u && (t += " if (true) { ");
  else {
    t += " if ( ", $.valid === void 0 ? (t += " !", T ? t += "" + k : t += "" + f) : t += " " + !$.valid + " ", t += ") { ", d = P.keyword;
    var B = B || [];
    B.push(t), t = "";
    var B = B || [];
    B.push(t), t = "", e.createErrors !== !1 ? (t += " { keyword: '" + (d || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { keyword: '" + P.keyword + "' } ", e.opts.messages !== !1 && (t += ` , message: 'should pass "` + P.keyword + `" keyword validation' `), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), t += " } ") : t += " {} ";
    var ge = t;
    t = B.pop(), !e.compositeRule && u ? e.async ? t += " throw new ValidationError([" + ge + "]); " : t += " validate.errors = [" + ge + "]; return false; " : t += " var err = " + ge + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
    var Q = t;
    t = B.pop(), x ? $.errors ? $.errors != "full" && (t += "  for (var " + j + "=" + v + "; " + j + "<errors; " + j + "++) { var " + I + " = vErrors[" + j + "]; if (" + I + ".dataPath === undefined) " + I + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + I + ".schemaPath === undefined) { " + I + '.schemaPath = "' + c + '"; } ', e.opts.verbose && (t += " " + I + ".schema = " + m + "; " + I + ".data = " + p + "; "), t += " } ") : $.errors === !1 ? t += " " + Q + " " : (t += " if (" + v + " == errors) { " + Q + " } else {  for (var " + j + "=" + v + "; " + j + "<errors; " + j + "++) { var " + I + " = vErrors[" + j + "]; if (" + I + ".dataPath === undefined) " + I + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + I + ".schemaPath === undefined) { " + I + '.schemaPath = "' + c + '"; } ', e.opts.verbose && (t += " " + I + ".schema = " + m + "; " + I + ".data = " + p + "; "), t += " } } ") : T ? (t += "   var err =   ", e.createErrors !== !1 ? (t += " { keyword: '" + (d || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { keyword: '" + P.keyword + "' } ", e.opts.messages !== !1 && (t += ` , message: 'should pass "` + P.keyword + `" keyword validation' `), e.opts.verbose && (t += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), t += " } ") : t += " {} ", t += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && u && (e.async ? t += " throw new ValidationError(vErrors); " : t += " validate.errors = vErrors; return false; ")) : $.errors === !1 ? t += " " + Q + " " : (t += " if (Array.isArray(" + M + ")) { if (vErrors === null) vErrors = " + M + "; else vErrors = vErrors.concat(" + M + "); errors = vErrors.length;  for (var " + j + "=" + v + "; " + j + "<errors; " + j + "++) { var " + I + " = vErrors[" + j + "]; if (" + I + ".dataPath === undefined) " + I + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + I + '.schemaPath = "' + c + '";  ', e.opts.verbose && (t += " " + I + ".schema = " + m + "; " + I + ".data = " + p + "; "), t += " } } else { " + Q + " } "), t += " } ", u && (t += " else { ");
  }
  return t;
};
const Ed = "http://json-schema.org/draft-07/schema#", wd = "http://json-schema.org/draft-07/schema#", Od = "Core schema meta-schema", Ad = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        default: 0
      }
    ]
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, Rd = [
  "object",
  "boolean"
], xd = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  readOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    default: !0
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  const: !0,
  enum: {
    type: "array",
    items: !0,
    minItems: 1,
    uniqueItems: !0
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  if: {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  else: {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
}, vl = {
  $schema: Ed,
  $id: wd,
  title: Od,
  definitions: Ad,
  type: Rd,
  properties: xd,
  default: !0
};
var Ys = vl, Id = {
  $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",
  definitions: {
    simpleTypes: Ys.definitions.simpleTypes
  },
  type: "object",
  dependencies: {
    schema: ["validate"],
    $data: ["validate"],
    statements: ["inline"],
    valid: { not: { required: ["macro"] } }
  },
  properties: {
    type: Ys.properties.type,
    schema: { type: "boolean" },
    statements: { type: "boolean" },
    dependencies: {
      type: "array",
      items: { type: "string" }
    },
    metaSchema: { type: "object" },
    modifying: { type: "boolean" },
    valid: { type: "boolean" },
    $data: { type: "boolean" },
    async: { type: "boolean" },
    errors: {
      anyOf: [
        { type: "boolean" },
        { const: "full" }
      ]
    }
  }
}, Cd = /^[a-z_$][a-z0-9_$-]*$/i, Dd = Sd, jd = Id, Td = {
  add: Fd,
  get: Nd,
  remove: Md,
  validate: an
};
function Fd(r, e) {
  var a = this.RULES;
  if (a.keywords[r])
    throw new Error("Keyword " + r + " is already defined");
  if (!Cd.test(r))
    throw new Error("Keyword " + r + " is not a valid identifier");
  if (e) {
    this.validateKeyword(e, !0);
    var n = e.type;
    if (Array.isArray(n))
      for (var t = 0; t < n.length; t++)
        i(r, n[t], e);
    else
      i(r, n, e);
    var s = e.metaSchema;
    s && (e.$data && this._opts.$data && (s = {
      anyOf: [
        s,
        { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" }
      ]
    }), e.validateSchema = this.compile(s, !0));
  }
  a.keywords[r] = a.all[r] = !0;
  function i(o, l, c) {
    for (var u, d = 0; d < a.length; d++) {
      var p = a[d];
      if (p.type == l) {
        u = p;
        break;
      }
    }
    u || (u = { type: l, rules: [] }, a.push(u));
    var f = {
      keyword: o,
      definition: c,
      custom: !0,
      code: Dd,
      implements: c.implements
    };
    u.rules.push(f), a.custom[o] = f;
  }
  return this;
}
function Nd(r) {
  var e = this.RULES.custom[r];
  return e ? e.definition : this.RULES.keywords[r] || !1;
}
function Md(r) {
  var e = this.RULES;
  delete e.keywords[r], delete e.all[r], delete e.custom[r];
  for (var a = 0; a < e.length; a++)
    for (var n = e[a].rules, t = 0; t < n.length; t++)
      if (n[t].keyword == r) {
        n.splice(t, 1);
        break;
      }
  return this;
}
function an(r, e) {
  an.errors = null;
  var a = this._validateKeyword = this._validateKeyword || this.compile(jd, !0);
  if (a(r))
    return !0;
  if (an.errors = a.errors, e)
    throw new Error("custom keyword definition is invalid: " + this.errorsText(a.errors));
  return !1;
}
const Ld = "http://json-schema.org/draft-07/schema#", Ud = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", qd = "Meta-schema for $data reference (JSON Schema extension proposal)", Vd = "object", kd = [
  "$data"
], zd = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, Kd = !1, Bd = {
  $schema: Ld,
  $id: Ud,
  description: qd,
  type: Vd,
  required: kd,
  properties: zd,
  additionalProperties: Kd
};
var pl = Dc, lr = Fn, Gd = Uc, ml = Qo, Hd = Zo, Qd = Gc, Jd = bd, gl = Pd, yl = Ir, Wd = oe;
oe.prototype.validate = Zd;
oe.prototype.compile = Xd;
oe.prototype.addSchema = eh;
oe.prototype.addMetaSchema = rh;
oe.prototype.validateSchema = th;
oe.prototype.getSchema = nh;
oe.prototype.removeSchema = ih;
oe.prototype.addFormat = vh;
oe.prototype.errorsText = hh;
oe.prototype._addSchema = oh;
oe.prototype._compile = lh;
oe.prototype.compileAsync = _d;
var ra = Td;
oe.prototype.addKeyword = ra.add;
oe.prototype.getKeyword = ra.get;
oe.prototype.removeKeyword = ra.remove;
oe.prototype.validateKeyword = ra.validate;
var bl = Nn;
oe.ValidationError = bl.Validation;
oe.MissingRefError = bl.MissingRef;
oe.$dataMetaSchema = gl;
var qt = "http://json-schema.org/draft-07/schema", Zs = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"], Yd = ["/properties"];
function oe(r) {
  if (!(this instanceof oe))
    return new oe(r);
  r = this._opts = yl.copy(r) || {}, Ph(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = Qd(r.format), this._cache = r.cache || new Gd(), this._loadingSchemas = {}, this._compilations = [], this.RULES = Jd(), this._getId = uh(r), r.loopRequired = r.loopRequired || 1 / 0, r.errorDataPath == "property" && (r._errorDataPathProperty = !0), r.serialize === void 0 && (r.serialize = Hd), this._metaOpts = bh(this), r.formats && gh(this), r.keywords && yh(this), ph(this), typeof r.meta == "object" && this.addMetaSchema(r.meta), r.nullable && this.addKeyword("nullable", { metaSchema: { type: "boolean" } }), mh(this);
}
function Zd(r, e) {
  var a;
  if (typeof r == "string") {
    if (a = this.getSchema(r), !a)
      throw new Error('no schema with key or ref "' + r + '"');
  } else {
    var n = this._addSchema(r);
    a = n.validate || this._compile(n);
  }
  var t = a(e);
  return a.$async !== !0 && (this.errors = a.errors), t;
}
function Xd(r, e) {
  var a = this._addSchema(r, void 0, e);
  return a.validate || this._compile(a);
}
function eh(r, e, a, n) {
  if (Array.isArray(r)) {
    for (var t = 0; t < r.length; t++)
      this.addSchema(r[t], void 0, a, n);
    return this;
  }
  var s = this._getId(r);
  if (s !== void 0 && typeof s != "string")
    throw new Error("schema id must be string");
  return e = lr.normalizeId(e || s), $l(this, e), this._schemas[e] = this._addSchema(r, a, n, !0), this;
}
function rh(r, e, a) {
  return this.addSchema(r, e, a, !0), this;
}
function th(r, e) {
  var a = r.$schema;
  if (a !== void 0 && typeof a != "string")
    throw new Error("$schema must be a string");
  if (a = a || this._opts.defaultMeta || ah(this), !a)
    return this.logger.warn("meta-schema not available"), this.errors = null, !0;
  var n = this.validate(a, r);
  if (!n && e) {
    var t = "schema is invalid: " + this.errorsText();
    if (this._opts.validateSchema == "log")
      this.logger.error(t);
    else
      throw new Error(t);
  }
  return n;
}
function ah(r) {
  var e = r._opts.meta;
  return r._opts.defaultMeta = typeof e == "object" ? r._getId(e) || e : r.getSchema(qt) ? qt : void 0, r._opts.defaultMeta;
}
function nh(r) {
  var e = Pl(this, r);
  switch (typeof e) {
    case "object":
      return e.validate || this._compile(e);
    case "string":
      return this.getSchema(e);
    case "undefined":
      return sh(this, r);
  }
}
function sh(r, e) {
  var a = lr.schema.call(r, { schema: {} }, e);
  if (a) {
    var n = a.schema, t = a.root, s = a.baseId, i = pl.call(r, n, t, void 0, s);
    return r._fragments[e] = new ml({
      ref: e,
      fragment: !0,
      schema: n,
      root: t,
      baseId: s,
      validate: i
    }), i;
  }
}
function Pl(r, e) {
  return e = lr.normalizeId(e), r._schemas[e] || r._refs[e] || r._fragments[e];
}
function ih(r) {
  if (r instanceof RegExp)
    return Et(this, this._schemas, r), Et(this, this._refs, r), this;
  switch (typeof r) {
    case "undefined":
      return Et(this, this._schemas), Et(this, this._refs), this._cache.clear(), this;
    case "string":
      var e = Pl(this, r);
      return e && this._cache.del(e.cacheKey), delete this._schemas[r], delete this._refs[r], this;
    case "object":
      var a = this._opts.serialize, n = a ? a(r) : r;
      this._cache.del(n);
      var t = this._getId(r);
      t && (t = lr.normalizeId(t), delete this._schemas[t], delete this._refs[t]);
  }
  return this;
}
function Et(r, e, a) {
  for (var n in e) {
    var t = e[n];
    !t.meta && (!a || a.test(n)) && (r._cache.del(t.cacheKey), delete e[n]);
  }
}
function oh(r, e, a, n) {
  if (typeof r != "object" && typeof r != "boolean")
    throw new Error("schema should be object or boolean");
  var t = this._opts.serialize, s = t ? t(r) : r, i = this._cache.get(s);
  if (i)
    return i;
  n = n || this._opts.addUsedSchema !== !1;
  var o = lr.normalizeId(this._getId(r));
  o && n && $l(this, o);
  var l = this._opts.validateSchema !== !1 && !e, c;
  l && !(c = o && o == lr.normalizeId(r.$schema)) && this.validateSchema(r, !0);
  var u = lr.ids.call(this, r), d = new ml({
    id: o,
    schema: r,
    localRefs: u,
    cacheKey: s,
    meta: a
  });
  return o[0] != "#" && n && (this._refs[o] = d), this._cache.put(s, d), l && c && this.validateSchema(r, !0), d;
}
function lh(r, e) {
  if (r.compiling)
    return r.validate = t, t.schema = r.schema, t.errors = null, t.root = e || t, r.schema.$async === !0 && (t.$async = !0), t;
  r.compiling = !0;
  var a;
  r.meta && (a = this._opts, this._opts = this._metaOpts);
  var n;
  try {
    n = pl.call(this, r.schema, e, r.localRefs);
  } catch (s) {
    throw delete r.validate, s;
  } finally {
    r.compiling = !1, r.meta && (this._opts = a);
  }
  return r.validate = n, r.refs = n.refs, r.refVal = n.refVal, r.root = n.root, n;
  function t() {
    var s = r.validate, i = s.apply(this, arguments);
    return t.errors = s.errors, i;
  }
}
function uh(r) {
  switch (r.schemaId) {
    case "auto":
      return dh;
    case "id":
      return fh;
    default:
      return ch;
  }
}
function fh(r) {
  return r.$id && this.logger.warn("schema $id ignored", r.$id), r.id;
}
function ch(r) {
  return r.id && this.logger.warn("schema id ignored", r.id), r.$id;
}
function dh(r) {
  if (r.$id && r.id && r.$id != r.id)
    throw new Error("schema $id is different from id");
  return r.$id || r.id;
}
function hh(r, e) {
  if (r = r || this.errors, !r)
    return "No errors";
  e = e || {};
  for (var a = e.separator === void 0 ? ", " : e.separator, n = e.dataVar === void 0 ? "data" : e.dataVar, t = "", s = 0; s < r.length; s++) {
    var i = r[s];
    i && (t += n + i.dataPath + " " + i.message + a);
  }
  return t.slice(0, -a.length);
}
function vh(r, e) {
  return typeof e == "string" && (e = new RegExp(e)), this._formats[r] = e, this;
}
function ph(r) {
  var e;
  if (r._opts.$data && (e = Bd, r.addMetaSchema(e, e.$id, !0)), r._opts.meta !== !1) {
    var a = vl;
    r._opts.$data && (a = gl(a, Yd)), r.addMetaSchema(a, qt, !0), r._refs["http://json-schema.org/schema"] = qt;
  }
}
function mh(r) {
  var e = r._opts.schemas;
  if (e)
    if (Array.isArray(e))
      r.addSchema(e);
    else
      for (var a in e)
        r.addSchema(e[a], a);
}
function gh(r) {
  for (var e in r._opts.formats) {
    var a = r._opts.formats[e];
    r.addFormat(e, a);
  }
}
function yh(r) {
  for (var e in r._opts.keywords) {
    var a = r._opts.keywords[e];
    r.addKeyword(e, a);
  }
}
function $l(r, e) {
  if (r._schemas[e] || r._refs[e])
    throw new Error('schema with key or id "' + e + '" already exists');
}
function bh(r) {
  for (var e = yl.copy(r._opts), a = 0; a < Zs.length; a++)
    delete e[Zs[a]];
  return e;
}
function Ph(r) {
  var e = r._opts.logger;
  if (e === !1)
    r.logger = { log: Aa, warn: Aa, error: Aa };
  else {
    if (e === void 0 && (e = console), !(typeof e == "object" && e.log && e.warn && e.error))
      throw new Error("logger must implement log, warn and error methods");
    r.logger = e;
  }
}
function Aa() {
}
const $h = /* @__PURE__ */ An(Wd);
var ta = {}, _h = /~/, Sh = /~[01]/g;
function Eh(r) {
  switch (r) {
    case "~1":
      return "/";
    case "~0":
      return "~";
  }
  throw new Error("Invalid tilde escape: " + r);
}
function _l(r) {
  return _h.test(r) ? r.replace(Sh, Eh) : r;
}
function wh(r, e, a) {
  for (var n, t, s = 1, i = e.length; s < i; ) {
    if (e[s] === "constructor" || e[s] === "prototype" || e[s] === "__proto__")
      return r;
    if (n = _l(e[s++]), t = i > s, typeof r[n] > "u" && (Array.isArray(r) && n === "-" && (n = r.length), t && (e[s] !== "" && e[s] < 1 / 0 || e[s] === "-" ? r[n] = [] : r[n] = {})), !t)
      break;
    r = r[n];
  }
  var o = r[n];
  return a === void 0 ? delete r[n] : r[n] = a, o;
}
function Ln(r) {
  if (typeof r == "string") {
    if (r = r.split("/"), r[0] === "")
      return r;
    throw new Error("Invalid JSON pointer.");
  } else if (Array.isArray(r)) {
    for (const e of r)
      if (typeof e != "string" && typeof e != "number")
        throw new Error("Invalid JSON pointer. Must be of type string or number.");
    return r;
  }
  throw new Error("Invalid JSON pointer.");
}
function Sl(r, e) {
  if (typeof r != "object")
    throw new Error("Invalid input object.");
  e = Ln(e);
  var a = e.length;
  if (a === 1)
    return r;
  for (var n = 1; n < a; ) {
    if (r = r[_l(e[n++])], a === n)
      return r;
    if (typeof r != "object" || r === null)
      return;
  }
}
function El(r, e, a) {
  if (typeof r != "object")
    throw new Error("Invalid input object.");
  if (e = Ln(e), e.length === 0)
    throw new Error("Invalid JSON pointer for set.");
  return wh(r, e, a);
}
function Oh(r) {
  var e = Ln(r);
  return {
    get: function(a) {
      return Sl(a, e);
    },
    set: function(a, n) {
      return El(a, e, n);
    }
  };
}
ta.get = Sl;
ta.set = El;
ta.compile = Oh;
var Ah = 200, Un = "__lodash_hash_undefined__", Rh = 1 / 0, xh = 9007199254740991, Ih = "[object Arguments]", Ch = "[object Function]", Dh = "[object GeneratorFunction]", jh = /[\\^$.*+?()[\]{}|]/g, Th = /^\[object .+?Constructor\]$/, Fh = typeof ke == "object" && ke && ke.Object === Object && ke, Nh = typeof self == "object" && self && self.Object === Object && self, aa = Fh || Nh || Function("return this")();
function Mh(r, e, a) {
  switch (a.length) {
    case 0:
      return r.call(e);
    case 1:
      return r.call(e, a[0]);
    case 2:
      return r.call(e, a[0], a[1]);
    case 3:
      return r.call(e, a[0], a[1], a[2]);
  }
  return r.apply(e, a);
}
function Lh(r, e) {
  var a = r ? r.length : 0;
  return !!a && kh(r, e, 0) > -1;
}
function Uh(r, e, a) {
  for (var n = -1, t = r ? r.length : 0; ++n < t; )
    if (a(e, r[n]))
      return !0;
  return !1;
}
function qh(r, e) {
  for (var a = -1, n = e.length, t = r.length; ++a < n; )
    r[t + a] = e[a];
  return r;
}
function Vh(r, e, a, n) {
  for (var t = r.length, s = a + (n ? 1 : -1); n ? s-- : ++s < t; )
    if (e(r[s], s, r))
      return s;
  return -1;
}
function kh(r, e, a) {
  if (e !== e)
    return Vh(r, zh, a);
  for (var n = a - 1, t = r.length; ++n < t; )
    if (r[n] === e)
      return n;
  return -1;
}
function zh(r) {
  return r !== r;
}
function Kh(r, e) {
  return r.has(e);
}
function Bh(r, e) {
  return r == null ? void 0 : r[e];
}
function Gh(r) {
  var e = !1;
  if (r != null && typeof r.toString != "function")
    try {
      e = !!(r + "");
    } catch {
    }
  return e;
}
function wl(r) {
  var e = -1, a = Array(r.size);
  return r.forEach(function(n) {
    a[++e] = n;
  }), a;
}
var Hh = Array.prototype, Qh = Function.prototype, qn = Object.prototype, Ra = aa["__core-js_shared__"], Xs = function() {
  var r = /[^.]+$/.exec(Ra && Ra.keys && Ra.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}(), Ol = Qh.toString, na = qn.hasOwnProperty, Al = qn.toString, Jh = RegExp(
  "^" + Ol.call(na).replace(jh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
), ei = aa.Symbol, Wh = qn.propertyIsEnumerable, Yh = Hh.splice, ri = ei ? ei.isConcatSpreadable : void 0, ti = Math.max, Zh = Vn(aa, "Map"), xa = Vn(aa, "Set"), tt = Vn(Object, "create");
function ur(r) {
  var e = -1, a = r ? r.length : 0;
  for (this.clear(); ++e < a; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
function Xh() {
  this.__data__ = tt ? tt(null) : {};
}
function ev(r) {
  return this.has(r) && delete this.__data__[r];
}
function rv(r) {
  var e = this.__data__;
  if (tt) {
    var a = e[r];
    return a === Un ? void 0 : a;
  }
  return na.call(e, r) ? e[r] : void 0;
}
function tv(r) {
  var e = this.__data__;
  return tt ? e[r] !== void 0 : na.call(e, r);
}
function av(r, e) {
  var a = this.__data__;
  return a[r] = tt && e === void 0 ? Un : e, this;
}
ur.prototype.clear = Xh;
ur.prototype.delete = ev;
ur.prototype.get = rv;
ur.prototype.has = tv;
ur.prototype.set = av;
function Cr(r) {
  var e = -1, a = r ? r.length : 0;
  for (this.clear(); ++e < a; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
function nv() {
  this.__data__ = [];
}
function sv(r) {
  var e = this.__data__, a = sa(e, r);
  if (a < 0)
    return !1;
  var n = e.length - 1;
  return a == n ? e.pop() : Yh.call(e, a, 1), !0;
}
function iv(r) {
  var e = this.__data__, a = sa(e, r);
  return a < 0 ? void 0 : e[a][1];
}
function ov(r) {
  return sa(this.__data__, r) > -1;
}
function lv(r, e) {
  var a = this.__data__, n = sa(a, r);
  return n < 0 ? a.push([r, e]) : a[n][1] = e, this;
}
Cr.prototype.clear = nv;
Cr.prototype.delete = sv;
Cr.prototype.get = iv;
Cr.prototype.has = ov;
Cr.prototype.set = lv;
function Dr(r) {
  var e = -1, a = r ? r.length : 0;
  for (this.clear(); ++e < a; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
function uv() {
  this.__data__ = {
    hash: new ur(),
    map: new (Zh || Cr)(),
    string: new ur()
  };
}
function fv(r) {
  return ia(this, r).delete(r);
}
function cv(r) {
  return ia(this, r).get(r);
}
function dv(r) {
  return ia(this, r).has(r);
}
function hv(r, e) {
  return ia(this, r).set(r, e), this;
}
Dr.prototype.clear = uv;
Dr.prototype.delete = fv;
Dr.prototype.get = cv;
Dr.prototype.has = dv;
Dr.prototype.set = hv;
function Vt(r) {
  var e = -1, a = r ? r.length : 0;
  for (this.__data__ = new Dr(); ++e < a; )
    this.add(r[e]);
}
function vv(r) {
  return this.__data__.set(r, Un), this;
}
function pv(r) {
  return this.__data__.has(r);
}
Vt.prototype.add = Vt.prototype.push = vv;
Vt.prototype.has = pv;
function sa(r, e) {
  for (var a = r.length; a--; )
    if (wv(r[a][0], e))
      return a;
  return -1;
}
function Rl(r, e, a, n, t) {
  var s = -1, i = r.length;
  for (a || (a = Pv), t || (t = []); ++s < i; ) {
    var o = r[s];
    e > 0 && a(o) ? e > 1 ? Rl(o, e - 1, a, n, t) : qh(t, o) : n || (t[t.length] = o);
  }
  return t;
}
function mv(r) {
  if (!Cl(r) || _v(r))
    return !1;
  var e = Il(r) || Gh(r) ? Jh : Th;
  return e.test(Sv(r));
}
function gv(r, e) {
  return e = ti(e === void 0 ? r.length - 1 : e, 0), function() {
    for (var a = arguments, n = -1, t = ti(a.length - e, 0), s = Array(t); ++n < t; )
      s[n] = a[e + n];
    n = -1;
    for (var i = Array(e + 1); ++n < e; )
      i[n] = a[n];
    return i[e] = s, Mh(r, this, i);
  };
}
function yv(r, e, a) {
  var n = -1, t = Lh, s = r.length, i = !0, o = [], l = o;
  if (a)
    i = !1, t = Uh;
  else if (s >= Ah) {
    var c = e ? null : bv(r);
    if (c)
      return wl(c);
    i = !1, t = Kh, l = new Vt();
  } else
    l = e ? [] : o;
  e:
    for (; ++n < s; ) {
      var u = r[n], d = e ? e(u) : u;
      if (u = a || u !== 0 ? u : 0, i && d === d) {
        for (var p = l.length; p--; )
          if (l[p] === d)
            continue e;
        e && l.push(d), o.push(u);
      } else
        t(l, d, a) || (l !== o && l.push(d), o.push(u));
    }
  return o;
}
var bv = xa && 1 / wl(new xa([, -0]))[1] == Rh ? function(r) {
  return new xa(r);
} : Cv;
function ia(r, e) {
  var a = r.__data__;
  return $v(e) ? a[typeof e == "string" ? "string" : "hash"] : a.map;
}
function Vn(r, e) {
  var a = Bh(r, e);
  return mv(a) ? a : void 0;
}
function Pv(r) {
  return Av(r) || Ov(r) || !!(ri && r && r[ri]);
}
function $v(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
function _v(r) {
  return !!Xs && Xs in r;
}
function Sv(r) {
  if (r != null) {
    try {
      return Ol.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var Ev = gv(function(r) {
  return yv(Rl(r, 1, xl, !0));
});
function wv(r, e) {
  return r === e || r !== r && e !== e;
}
function Ov(r) {
  return xl(r) && na.call(r, "callee") && (!Wh.call(r, "callee") || Al.call(r) == Ih);
}
var Av = Array.isArray;
function Rv(r) {
  return r != null && xv(r.length) && !Il(r);
}
function xl(r) {
  return Iv(r) && Rv(r);
}
function Il(r) {
  var e = Cl(r) ? Al.call(r) : "";
  return e == Ch || e == Dh;
}
function xv(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= xh;
}
function Cl(r) {
  var e = typeof r;
  return !!r && (e == "object" || e == "function");
}
function Iv(r) {
  return !!r && typeof r == "object";
}
function Cv() {
}
var Dv = Ev;
const jv = /* @__PURE__ */ An(Dv);
function Tv() {
  this.__data__ = [], this.size = 0;
}
var Fv = Tv;
function Nv(r, e) {
  return r === e || r !== r && e !== e;
}
var jr = Nv, Mv = jr;
function Lv(r, e) {
  for (var a = r.length; a--; )
    if (Mv(r[a][0], e))
      return a;
  return -1;
}
var oa = Lv, Uv = oa, qv = Array.prototype, Vv = qv.splice;
function kv(r) {
  var e = this.__data__, a = Uv(e, r);
  if (a < 0)
    return !1;
  var n = e.length - 1;
  return a == n ? e.pop() : Vv.call(e, a, 1), --this.size, !0;
}
var zv = kv, Kv = oa;
function Bv(r) {
  var e = this.__data__, a = Kv(e, r);
  return a < 0 ? void 0 : e[a][1];
}
var Gv = Bv, Hv = oa;
function Qv(r) {
  return Hv(this.__data__, r) > -1;
}
var Jv = Qv, Wv = oa;
function Yv(r, e) {
  var a = this.__data__, n = Wv(a, r);
  return n < 0 ? (++this.size, a.push([r, e])) : a[n][1] = e, this;
}
var Zv = Yv, Xv = Fv, ep = zv, rp = Gv, tp = Jv, ap = Zv;
function Tr(r) {
  var e = -1, a = r == null ? 0 : r.length;
  for (this.clear(); ++e < a; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
Tr.prototype.clear = Xv;
Tr.prototype.delete = ep;
Tr.prototype.get = rp;
Tr.prototype.has = tp;
Tr.prototype.set = ap;
var la = Tr, np = la;
function sp() {
  this.__data__ = new np(), this.size = 0;
}
var ip = sp;
function op(r) {
  var e = this.__data__, a = e.delete(r);
  return this.size = e.size, a;
}
var lp = op;
function up(r) {
  return this.__data__.get(r);
}
var fp = up;
function cp(r) {
  return this.__data__.has(r);
}
var dp = cp, hp = typeof ke == "object" && ke && ke.Object === Object && ke, Dl = hp, vp = Dl, pp = typeof self == "object" && self && self.Object === Object && self, mp = vp || pp || Function("return this")(), Ne = mp, gp = Ne, yp = gp.Symbol, Fr = yp, ai = Fr, jl = Object.prototype, bp = jl.hasOwnProperty, Pp = jl.toString, Jr = ai ? ai.toStringTag : void 0;
function $p(r) {
  var e = bp.call(r, Jr), a = r[Jr];
  try {
    r[Jr] = void 0;
    var n = !0;
  } catch {
  }
  var t = Pp.call(r);
  return n && (e ? r[Jr] = a : delete r[Jr]), t;
}
var _p = $p, Sp = Object.prototype, Ep = Sp.toString;
function wp(r) {
  return Ep.call(r);
}
var Op = wp, ni = Fr, Ap = _p, Rp = Op, xp = "[object Null]", Ip = "[object Undefined]", si = ni ? ni.toStringTag : void 0;
function Cp(r) {
  return r == null ? r === void 0 ? Ip : xp : si && si in Object(r) ? Ap(r) : Rp(r);
}
var dr = Cp;
function Dp(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Me = Dp, jp = dr, Tp = Me, Fp = "[object AsyncFunction]", Np = "[object Function]", Mp = "[object GeneratorFunction]", Lp = "[object Proxy]";
function Up(r) {
  if (!Tp(r))
    return !1;
  var e = jp(r);
  return e == Np || e == Mp || e == Fp || e == Lp;
}
var kn = Up, qp = Ne, Vp = qp["__core-js_shared__"], kp = Vp, Ia = kp, ii = function() {
  var r = /[^.]+$/.exec(Ia && Ia.keys && Ia.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function zp(r) {
  return !!ii && ii in r;
}
var Kp = zp, Bp = Function.prototype, Gp = Bp.toString;
function Hp(r) {
  if (r != null) {
    try {
      return Gp.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
var Tl = Hp, Qp = kn, Jp = Kp, Wp = Me, Yp = Tl, Zp = /[\\^$.*+?()[\]{}|]/g, Xp = /^\[object .+?Constructor\]$/, em = Function.prototype, rm = Object.prototype, tm = em.toString, am = rm.hasOwnProperty, nm = RegExp(
  "^" + tm.call(am).replace(Zp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sm(r) {
  if (!Wp(r) || Jp(r))
    return !1;
  var e = Qp(r) ? nm : Xp;
  return e.test(Yp(r));
}
var im = sm;
function om(r, e) {
  return r == null ? void 0 : r[e];
}
var lm = om, um = im, fm = lm;
function cm(r, e) {
  var a = fm(r, e);
  return um(a) ? a : void 0;
}
var hr = cm, dm = hr, hm = Ne, vm = dm(hm, "Map"), zn = vm, pm = hr, mm = pm(Object, "create"), ua = mm, oi = ua;
function gm() {
  this.__data__ = oi ? oi(null) : {}, this.size = 0;
}
var ym = gm;
function bm(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Pm = bm, $m = ua, _m = "__lodash_hash_undefined__", Sm = Object.prototype, Em = Sm.hasOwnProperty;
function wm(r) {
  var e = this.__data__;
  if ($m) {
    var a = e[r];
    return a === _m ? void 0 : a;
  }
  return Em.call(e, r) ? e[r] : void 0;
}
var Om = wm, Am = ua, Rm = Object.prototype, xm = Rm.hasOwnProperty;
function Im(r) {
  var e = this.__data__;
  return Am ? e[r] !== void 0 : xm.call(e, r);
}
var Cm = Im, Dm = ua, jm = "__lodash_hash_undefined__";
function Tm(r, e) {
  var a = this.__data__;
  return this.size += this.has(r) ? 0 : 1, a[r] = Dm && e === void 0 ? jm : e, this;
}
var Fm = Tm, Nm = ym, Mm = Pm, Lm = Om, Um = Cm, qm = Fm;
function Nr(r) {
  var e = -1, a = r == null ? 0 : r.length;
  for (this.clear(); ++e < a; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
Nr.prototype.clear = Nm;
Nr.prototype.delete = Mm;
Nr.prototype.get = Lm;
Nr.prototype.has = Um;
Nr.prototype.set = qm;
var Vm = Nr, li = Vm, km = la, zm = zn;
function Km() {
  this.size = 0, this.__data__ = {
    hash: new li(),
    map: new (zm || km)(),
    string: new li()
  };
}
var Bm = Km;
function Gm(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
var Hm = Gm, Qm = Hm;
function Jm(r, e) {
  var a = r.__data__;
  return Qm(e) ? a[typeof e == "string" ? "string" : "hash"] : a.map;
}
var fa = Jm, Wm = fa;
function Ym(r) {
  var e = Wm(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
var Zm = Ym, Xm = fa;
function eg(r) {
  return Xm(this, r).get(r);
}
var rg = eg, tg = fa;
function ag(r) {
  return tg(this, r).has(r);
}
var ng = ag, sg = fa;
function ig(r, e) {
  var a = sg(this, r), n = a.size;
  return a.set(r, e), this.size += a.size == n ? 0 : 1, this;
}
var og = ig, lg = Bm, ug = Zm, fg = rg, cg = ng, dg = og;
function Mr(r) {
  var e = -1, a = r == null ? 0 : r.length;
  for (this.clear(); ++e < a; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
Mr.prototype.clear = lg;
Mr.prototype.delete = ug;
Mr.prototype.get = fg;
Mr.prototype.has = cg;
Mr.prototype.set = dg;
var Kn = Mr, hg = la, vg = zn, pg = Kn, mg = 200;
function gg(r, e) {
  var a = this.__data__;
  if (a instanceof hg) {
    var n = a.__data__;
    if (!vg || n.length < mg - 1)
      return n.push([r, e]), this.size = ++a.size, this;
    a = this.__data__ = new pg(n);
  }
  return a.set(r, e), this.size = a.size, this;
}
var yg = gg, bg = la, Pg = ip, $g = lp, _g = fp, Sg = dp, Eg = yg;
function Lr(r) {
  var e = this.__data__ = new bg(r);
  this.size = e.size;
}
Lr.prototype.clear = Pg;
Lr.prototype.delete = $g;
Lr.prototype.get = _g;
Lr.prototype.has = Sg;
Lr.prototype.set = Eg;
var ca = Lr;
function wg(r, e) {
  for (var a = -1, n = r == null ? 0 : r.length; ++a < n && e(r[a], a, r) !== !1; )
    ;
  return r;
}
var Fl = wg, Og = hr, Ag = function() {
  try {
    var r = Og(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch {
  }
}(), Nl = Ag, ui = Nl;
function Rg(r, e, a) {
  e == "__proto__" && ui ? ui(r, e, {
    configurable: !0,
    enumerable: !0,
    value: a,
    writable: !0
  }) : r[e] = a;
}
var Bn = Rg, xg = Bn, Ig = jr, Cg = Object.prototype, Dg = Cg.hasOwnProperty;
function jg(r, e, a) {
  var n = r[e];
  (!(Dg.call(r, e) && Ig(n, a)) || a === void 0 && !(e in r)) && xg(r, e, a);
}
var Ml = jg, Tg = Ml, Fg = Bn;
function Ng(r, e, a, n) {
  var t = !a;
  a || (a = {});
  for (var s = -1, i = e.length; ++s < i; ) {
    var o = e[s], l = n ? n(a[o], r[o], o, a, r) : void 0;
    l === void 0 && (l = r[o]), t ? Fg(a, o, l) : Tg(a, o, l);
  }
  return a;
}
var lt = Ng;
function Mg(r, e) {
  for (var a = -1, n = Array(r); ++a < r; )
    n[a] = e(a);
  return n;
}
var Lg = Mg;
function Ug(r) {
  return r != null && typeof r == "object";
}
var Le = Ug, qg = dr, Vg = Le, kg = "[object Arguments]";
function zg(r) {
  return Vg(r) && qg(r) == kg;
}
var Kg = zg, fi = Kg, Bg = Le, Ll = Object.prototype, Gg = Ll.hasOwnProperty, Hg = Ll.propertyIsEnumerable, Qg = fi(function() {
  return arguments;
}()) ? fi : function(r) {
  return Bg(r) && Gg.call(r, "callee") && !Hg.call(r, "callee");
}, da = Qg, Jg = Array.isArray, we = Jg, kt = { exports: {} };
function Wg() {
  return !1;
}
var Yg = Wg;
kt.exports;
(function(r, e) {
  var a = Ne, n = Yg, t = e && !e.nodeType && e, s = t && !0 && r && !r.nodeType && r, i = s && s.exports === t, o = i ? a.Buffer : void 0, l = o ? o.isBuffer : void 0, c = l || n;
  r.exports = c;
})(kt, kt.exports);
var ha = kt.exports, Zg = 9007199254740991, Xg = /^(?:0|[1-9]\d*)$/;
function ey(r, e) {
  var a = typeof r;
  return e = e ?? Zg, !!e && (a == "number" || a != "symbol" && Xg.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
var Gn = ey, ry = 9007199254740991;
function ty(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= ry;
}
var Hn = ty, ay = dr, ny = Hn, sy = Le, iy = "[object Arguments]", oy = "[object Array]", ly = "[object Boolean]", uy = "[object Date]", fy = "[object Error]", cy = "[object Function]", dy = "[object Map]", hy = "[object Number]", vy = "[object Object]", py = "[object RegExp]", my = "[object Set]", gy = "[object String]", yy = "[object WeakMap]", by = "[object ArrayBuffer]", Py = "[object DataView]", $y = "[object Float32Array]", _y = "[object Float64Array]", Sy = "[object Int8Array]", Ey = "[object Int16Array]", wy = "[object Int32Array]", Oy = "[object Uint8Array]", Ay = "[object Uint8ClampedArray]", Ry = "[object Uint16Array]", xy = "[object Uint32Array]", ee = {};
ee[$y] = ee[_y] = ee[Sy] = ee[Ey] = ee[wy] = ee[Oy] = ee[Ay] = ee[Ry] = ee[xy] = !0;
ee[iy] = ee[oy] = ee[by] = ee[ly] = ee[Py] = ee[uy] = ee[fy] = ee[cy] = ee[dy] = ee[hy] = ee[vy] = ee[py] = ee[my] = ee[gy] = ee[yy] = !1;
function Iy(r) {
  return sy(r) && ny(r.length) && !!ee[ay(r)];
}
var Cy = Iy;
function Dy(r) {
  return function(e) {
    return r(e);
  };
}
var vr = Dy, zt = { exports: {} };
zt.exports;
(function(r, e) {
  var a = Dl, n = e && !e.nodeType && e, t = n && !0 && r && !r.nodeType && r, s = t && t.exports === n, i = s && a.process, o = function() {
    try {
      var l = t && t.require && t.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  r.exports = o;
})(zt, zt.exports);
var Qn = zt.exports, jy = Cy, Ty = vr, ci = Qn, di = ci && ci.isTypedArray, Fy = di ? Ty(di) : jy, Jn = Fy, Ny = Lg, My = da, Ly = we, Uy = ha, qy = Gn, Vy = Jn, ky = Object.prototype, zy = ky.hasOwnProperty;
function Ky(r, e) {
  var a = Ly(r), n = !a && My(r), t = !a && !n && Uy(r), s = !a && !n && !t && Vy(r), i = a || n || t || s, o = i ? Ny(r.length, String) : [], l = o.length;
  for (var c in r)
    (e || zy.call(r, c)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    t && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    qy(c, l))) && o.push(c);
  return o;
}
var Ul = Ky, By = Object.prototype;
function Gy(r) {
  var e = r && r.constructor, a = typeof e == "function" && e.prototype || By;
  return r === a;
}
var Wn = Gy;
function Hy(r, e) {
  return function(a) {
    return r(e(a));
  };
}
var ql = Hy, Qy = ql, Jy = Qy(Object.keys, Object), Wy = Jy, Yy = Wn, Zy = Wy, Xy = Object.prototype, eb = Xy.hasOwnProperty;
function rb(r) {
  if (!Yy(r))
    return Zy(r);
  var e = [];
  for (var a in Object(r))
    eb.call(r, a) && a != "constructor" && e.push(a);
  return e;
}
var tb = rb, ab = kn, nb = Hn;
function sb(r) {
  return r != null && nb(r.length) && !ab(r);
}
var Ur = sb, ib = Ul, ob = tb, lb = Ur;
function ub(r) {
  return lb(r) ? ib(r) : ob(r);
}
var ut = ub, fb = lt, cb = ut;
function db(r, e) {
  return r && fb(e, cb(e), r);
}
var hb = db;
function vb(r) {
  var e = [];
  if (r != null)
    for (var a in Object(r))
      e.push(a);
  return e;
}
var pb = vb, mb = Me, gb = Wn, yb = pb, bb = Object.prototype, Pb = bb.hasOwnProperty;
function $b(r) {
  if (!mb(r))
    return yb(r);
  var e = gb(r), a = [];
  for (var n in r)
    n == "constructor" && (e || !Pb.call(r, n)) || a.push(n);
  return a;
}
var _b = $b, Sb = Ul, Eb = _b, wb = Ur;
function Ob(r) {
  return wb(r) ? Sb(r, !0) : Eb(r);
}
var qr = Ob, Ab = lt, Rb = qr;
function xb(r, e) {
  return r && Ab(e, Rb(e), r);
}
var Ib = xb, Kt = { exports: {} };
Kt.exports;
(function(r, e) {
  var a = Ne, n = e && !e.nodeType && e, t = n && !0 && r && !r.nodeType && r, s = t && t.exports === n, i = s ? a.Buffer : void 0, o = i ? i.allocUnsafe : void 0;
  function l(c, u) {
    if (u)
      return c.slice();
    var d = c.length, p = o ? o(d) : new c.constructor(d);
    return c.copy(p), p;
  }
  r.exports = l;
})(Kt, Kt.exports);
var Vl = Kt.exports;
function Cb(r, e) {
  var a = -1, n = r.length;
  for (e || (e = Array(n)); ++a < n; )
    e[a] = r[a];
  return e;
}
var Yn = Cb;
function Db(r, e) {
  for (var a = -1, n = r == null ? 0 : r.length, t = 0, s = []; ++a < n; ) {
    var i = r[a];
    e(i, a, r) && (s[t++] = i);
  }
  return s;
}
var jb = Db;
function Tb() {
  return [];
}
var kl = Tb, Fb = jb, Nb = kl, Mb = Object.prototype, Lb = Mb.propertyIsEnumerable, hi = Object.getOwnPropertySymbols, Ub = hi ? function(r) {
  return r == null ? [] : (r = Object(r), Fb(hi(r), function(e) {
    return Lb.call(r, e);
  }));
} : Nb, Zn = Ub, qb = lt, Vb = Zn;
function kb(r, e) {
  return qb(r, Vb(r), e);
}
var zb = kb;
function Kb(r, e) {
  for (var a = -1, n = e.length, t = r.length; ++a < n; )
    r[t + a] = e[a];
  return r;
}
var Xn = Kb, Bb = ql, Gb = Bb(Object.getPrototypeOf, Object), es = Gb, Hb = Xn, Qb = es, Jb = Zn, Wb = kl, Yb = Object.getOwnPropertySymbols, Zb = Yb ? function(r) {
  for (var e = []; r; )
    Hb(e, Jb(r)), r = Qb(r);
  return e;
} : Wb, zl = Zb, Xb = lt, e0 = zl;
function r0(r, e) {
  return Xb(r, e0(r), e);
}
var t0 = r0, a0 = Xn, n0 = we;
function s0(r, e, a) {
  var n = e(r);
  return n0(r) ? n : a0(n, a(r));
}
var Kl = s0, i0 = Kl, o0 = Zn, l0 = ut;
function u0(r) {
  return i0(r, l0, o0);
}
var Bl = u0, f0 = Kl, c0 = zl, d0 = qr;
function h0(r) {
  return f0(r, d0, c0);
}
var v0 = h0, p0 = hr, m0 = Ne, g0 = p0(m0, "DataView"), y0 = g0, b0 = hr, P0 = Ne, $0 = b0(P0, "Promise"), _0 = $0, S0 = hr, E0 = Ne, w0 = S0(E0, "Set"), Gl = w0, O0 = hr, A0 = Ne, R0 = O0(A0, "WeakMap"), x0 = R0, nn = y0, sn = zn, on = _0, ln = Gl, un = x0, Hl = dr, Vr = Tl, vi = "[object Map]", I0 = "[object Object]", pi = "[object Promise]", mi = "[object Set]", gi = "[object WeakMap]", yi = "[object DataView]", C0 = Vr(nn), D0 = Vr(sn), j0 = Vr(on), T0 = Vr(ln), F0 = Vr(un), sr = Hl;
(nn && sr(new nn(new ArrayBuffer(1))) != yi || sn && sr(new sn()) != vi || on && sr(on.resolve()) != pi || ln && sr(new ln()) != mi || un && sr(new un()) != gi) && (sr = function(r) {
  var e = Hl(r), a = e == I0 ? r.constructor : void 0, n = a ? Vr(a) : "";
  if (n)
    switch (n) {
      case C0:
        return yi;
      case D0:
        return vi;
      case j0:
        return pi;
      case T0:
        return mi;
      case F0:
        return gi;
    }
  return e;
});
var va = sr, N0 = Object.prototype, M0 = N0.hasOwnProperty;
function L0(r) {
  var e = r.length, a = new r.constructor(e);
  return e && typeof r[0] == "string" && M0.call(r, "index") && (a.index = r.index, a.input = r.input), a;
}
var U0 = L0, q0 = Ne, V0 = q0.Uint8Array, Ql = V0, bi = Ql;
function k0(r) {
  var e = new r.constructor(r.byteLength);
  return new bi(e).set(new bi(r)), e;
}
var rs = k0, z0 = rs;
function K0(r, e) {
  var a = e ? z0(r.buffer) : r.buffer;
  return new r.constructor(a, r.byteOffset, r.byteLength);
}
var B0 = K0, G0 = /\w*$/;
function H0(r) {
  var e = new r.constructor(r.source, G0.exec(r));
  return e.lastIndex = r.lastIndex, e;
}
var Q0 = H0, Pi = Fr, $i = Pi ? Pi.prototype : void 0, _i = $i ? $i.valueOf : void 0;
function J0(r) {
  return _i ? Object(_i.call(r)) : {};
}
var W0 = J0, Y0 = rs;
function Z0(r, e) {
  var a = e ? Y0(r.buffer) : r.buffer;
  return new r.constructor(a, r.byteOffset, r.length);
}
var Jl = Z0, X0 = rs, eP = B0, rP = Q0, tP = W0, aP = Jl, nP = "[object Boolean]", sP = "[object Date]", iP = "[object Map]", oP = "[object Number]", lP = "[object RegExp]", uP = "[object Set]", fP = "[object String]", cP = "[object Symbol]", dP = "[object ArrayBuffer]", hP = "[object DataView]", vP = "[object Float32Array]", pP = "[object Float64Array]", mP = "[object Int8Array]", gP = "[object Int16Array]", yP = "[object Int32Array]", bP = "[object Uint8Array]", PP = "[object Uint8ClampedArray]", $P = "[object Uint16Array]", _P = "[object Uint32Array]";
function SP(r, e, a) {
  var n = r.constructor;
  switch (e) {
    case dP:
      return X0(r);
    case nP:
    case sP:
      return new n(+r);
    case hP:
      return eP(r, a);
    case vP:
    case pP:
    case mP:
    case gP:
    case yP:
    case bP:
    case PP:
    case $P:
    case _P:
      return aP(r, a);
    case iP:
      return new n();
    case oP:
    case fP:
      return new n(r);
    case lP:
      return rP(r);
    case uP:
      return new n();
    case cP:
      return tP(r);
  }
}
var EP = SP, wP = Me, Si = Object.create, OP = function() {
  function r() {
  }
  return function(e) {
    if (!wP(e))
      return {};
    if (Si)
      return Si(e);
    r.prototype = e;
    var a = new r();
    return r.prototype = void 0, a;
  };
}(), AP = OP, RP = AP, xP = es, IP = Wn;
function CP(r) {
  return typeof r.constructor == "function" && !IP(r) ? RP(xP(r)) : {};
}
var Wl = CP, DP = va, jP = Le, TP = "[object Map]";
function FP(r) {
  return jP(r) && DP(r) == TP;
}
var NP = FP, MP = NP, LP = vr, Ei = Qn, wi = Ei && Ei.isMap, UP = wi ? LP(wi) : MP, qP = UP, VP = va, kP = Le, zP = "[object Set]";
function KP(r) {
  return kP(r) && VP(r) == zP;
}
var BP = KP, GP = BP, HP = vr, Oi = Qn, Ai = Oi && Oi.isSet, QP = Ai ? HP(Ai) : GP, JP = QP, WP = ca, YP = Fl, ZP = Ml, XP = hb, e$ = Ib, r$ = Vl, t$ = Yn, a$ = zb, n$ = t0, s$ = Bl, i$ = v0, o$ = va, l$ = U0, u$ = EP, f$ = Wl, c$ = we, d$ = ha, h$ = qP, v$ = Me, p$ = JP, m$ = ut, g$ = qr, y$ = 1, b$ = 2, P$ = 4, Yl = "[object Arguments]", $$ = "[object Array]", _$ = "[object Boolean]", S$ = "[object Date]", E$ = "[object Error]", Zl = "[object Function]", w$ = "[object GeneratorFunction]", O$ = "[object Map]", A$ = "[object Number]", Xl = "[object Object]", R$ = "[object RegExp]", x$ = "[object Set]", I$ = "[object String]", C$ = "[object Symbol]", D$ = "[object WeakMap]", j$ = "[object ArrayBuffer]", T$ = "[object DataView]", F$ = "[object Float32Array]", N$ = "[object Float64Array]", M$ = "[object Int8Array]", L$ = "[object Int16Array]", U$ = "[object Int32Array]", q$ = "[object Uint8Array]", V$ = "[object Uint8ClampedArray]", k$ = "[object Uint16Array]", z$ = "[object Uint32Array]", Z = {};
Z[Yl] = Z[$$] = Z[j$] = Z[T$] = Z[_$] = Z[S$] = Z[F$] = Z[N$] = Z[M$] = Z[L$] = Z[U$] = Z[O$] = Z[A$] = Z[Xl] = Z[R$] = Z[x$] = Z[I$] = Z[C$] = Z[q$] = Z[V$] = Z[k$] = Z[z$] = !0;
Z[E$] = Z[Zl] = Z[D$] = !1;
function jt(r, e, a, n, t, s) {
  var i, o = e & y$, l = e & b$, c = e & P$;
  if (a && (i = t ? a(r, n, t, s) : a(r)), i !== void 0)
    return i;
  if (!v$(r))
    return r;
  var u = c$(r);
  if (u) {
    if (i = l$(r), !o)
      return t$(r, i);
  } else {
    var d = o$(r), p = d == Zl || d == w$;
    if (d$(r))
      return r$(r, o);
    if (d == Xl || d == Yl || p && !t) {
      if (i = l || p ? {} : f$(r), !o)
        return l ? n$(r, e$(i, r)) : a$(r, XP(i, r));
    } else {
      if (!Z[d])
        return t ? r : {};
      i = u$(r, d, o);
    }
  }
  s || (s = new WP());
  var f = s.get(r);
  if (f)
    return f;
  s.set(r, i), p$(r) ? r.forEach(function(m) {
    i.add(jt(m, e, a, m, r, s));
  }) : h$(r) && r.forEach(function(m, P) {
    i.set(P, jt(m, e, a, P, r, s));
  });
  var v = c ? l ? i$ : s$ : l ? g$ : m$, g = u ? void 0 : v(r);
  return YP(g || r, function(m, P) {
    g && (P = m, m = r[P]), ZP(i, P, jt(m, e, a, P, r, s));
  }), i;
}
var K$ = jt, B$ = K$, G$ = 1, H$ = 4;
function Q$(r) {
  return B$(r, G$ | H$);
}
var J$ = Q$, W$ = "__lodash_hash_undefined__";
function Y$(r) {
  return this.__data__.set(r, W$), this;
}
var Z$ = Y$;
function X$(r) {
  return this.__data__.has(r);
}
var e1 = X$, r1 = Kn, t1 = Z$, a1 = e1;
function Bt(r) {
  var e = -1, a = r == null ? 0 : r.length;
  for (this.__data__ = new r1(); ++e < a; )
    this.add(r[e]);
}
Bt.prototype.add = Bt.prototype.push = t1;
Bt.prototype.has = a1;
var pa = Bt;
function n1(r, e) {
  for (var a = -1, n = r == null ? 0 : r.length; ++a < n; )
    if (e(r[a], a, r))
      return !0;
  return !1;
}
var s1 = n1;
function i1(r, e) {
  return r.has(e);
}
var ma = i1, o1 = pa, l1 = s1, u1 = ma, f1 = 1, c1 = 2;
function d1(r, e, a, n, t, s) {
  var i = a & f1, o = r.length, l = e.length;
  if (o != l && !(i && l > o))
    return !1;
  var c = s.get(r), u = s.get(e);
  if (c && u)
    return c == e && u == r;
  var d = -1, p = !0, f = a & c1 ? new o1() : void 0;
  for (s.set(r, e), s.set(e, r); ++d < o; ) {
    var v = r[d], g = e[d];
    if (n)
      var m = i ? n(g, v, d, e, r, s) : n(v, g, d, r, e, s);
    if (m !== void 0) {
      if (m)
        continue;
      p = !1;
      break;
    }
    if (f) {
      if (!l1(e, function(P, A) {
        if (!u1(f, A) && (v === P || t(v, P, a, n, s)))
          return f.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === g || t(v, g, a, n, s))) {
      p = !1;
      break;
    }
  }
  return s.delete(r), s.delete(e), p;
}
var eu = d1;
function h1(r) {
  var e = -1, a = Array(r.size);
  return r.forEach(function(n, t) {
    a[++e] = [t, n];
  }), a;
}
var v1 = h1;
function p1(r) {
  var e = -1, a = Array(r.size);
  return r.forEach(function(n) {
    a[++e] = n;
  }), a;
}
var ts = p1, Ri = Fr, xi = Ql, m1 = jr, g1 = eu, y1 = v1, b1 = ts, P1 = 1, $1 = 2, _1 = "[object Boolean]", S1 = "[object Date]", E1 = "[object Error]", w1 = "[object Map]", O1 = "[object Number]", A1 = "[object RegExp]", R1 = "[object Set]", x1 = "[object String]", I1 = "[object Symbol]", C1 = "[object ArrayBuffer]", D1 = "[object DataView]", Ii = Ri ? Ri.prototype : void 0, Ca = Ii ? Ii.valueOf : void 0;
function j1(r, e, a, n, t, s, i) {
  switch (a) {
    case D1:
      if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset)
        return !1;
      r = r.buffer, e = e.buffer;
    case C1:
      return !(r.byteLength != e.byteLength || !s(new xi(r), new xi(e)));
    case _1:
    case S1:
    case O1:
      return m1(+r, +e);
    case E1:
      return r.name == e.name && r.message == e.message;
    case A1:
    case x1:
      return r == e + "";
    case w1:
      var o = y1;
    case R1:
      var l = n & P1;
      if (o || (o = b1), r.size != e.size && !l)
        return !1;
      var c = i.get(r);
      if (c)
        return c == e;
      n |= $1, i.set(r, e);
      var u = g1(o(r), o(e), n, t, s, i);
      return i.delete(r), u;
    case I1:
      if (Ca)
        return Ca.call(r) == Ca.call(e);
  }
  return !1;
}
var T1 = j1, Ci = Bl, F1 = 1, N1 = Object.prototype, M1 = N1.hasOwnProperty;
function L1(r, e, a, n, t, s) {
  var i = a & F1, o = Ci(r), l = o.length, c = Ci(e), u = c.length;
  if (l != u && !i)
    return !1;
  for (var d = l; d--; ) {
    var p = o[d];
    if (!(i ? p in e : M1.call(e, p)))
      return !1;
  }
  var f = s.get(r), v = s.get(e);
  if (f && v)
    return f == e && v == r;
  var g = !0;
  s.set(r, e), s.set(e, r);
  for (var m = i; ++d < l; ) {
    p = o[d];
    var P = r[p], A = e[p];
    if (n)
      var $ = i ? n(A, P, p, e, r, s) : n(P, A, p, r, e, s);
    if (!($ === void 0 ? P === A || t(P, A, a, n, s) : $)) {
      g = !1;
      break;
    }
    m || (m = p == "constructor");
  }
  if (g && !m) {
    var w = r.constructor, E = e.constructor;
    w != E && "constructor" in r && "constructor" in e && !(typeof w == "function" && w instanceof w && typeof E == "function" && E instanceof E) && (g = !1);
  }
  return s.delete(r), s.delete(e), g;
}
var U1 = L1, Da = ca, q1 = eu, V1 = T1, k1 = U1, Di = va, ji = we, Ti = ha, z1 = Jn, K1 = 1, Fi = "[object Arguments]", Ni = "[object Array]", wt = "[object Object]", B1 = Object.prototype, Mi = B1.hasOwnProperty;
function G1(r, e, a, n, t, s) {
  var i = ji(r), o = ji(e), l = i ? Ni : Di(r), c = o ? Ni : Di(e);
  l = l == Fi ? wt : l, c = c == Fi ? wt : c;
  var u = l == wt, d = c == wt, p = l == c;
  if (p && Ti(r)) {
    if (!Ti(e))
      return !1;
    i = !0, u = !1;
  }
  if (p && !u)
    return s || (s = new Da()), i || z1(r) ? q1(r, e, a, n, t, s) : V1(r, e, l, a, n, t, s);
  if (!(a & K1)) {
    var f = u && Mi.call(r, "__wrapped__"), v = d && Mi.call(e, "__wrapped__");
    if (f || v) {
      var g = f ? r.value() : r, m = v ? e.value() : e;
      return s || (s = new Da()), t(g, m, a, n, s);
    }
  }
  return p ? (s || (s = new Da()), k1(r, e, a, n, t, s)) : !1;
}
var H1 = G1, Q1 = H1, Li = Le;
function ru(r, e, a, n, t) {
  return r === e ? !0 : r == null || e == null || !Li(r) && !Li(e) ? r !== r && e !== e : Q1(r, e, a, n, ru, t);
}
var as = ru, J1 = as;
function W1(r, e) {
  return J1(r, e);
}
var tu = W1, Ui = Fr, Y1 = da, Z1 = we, qi = Ui ? Ui.isConcatSpreadable : void 0;
function X1(r) {
  return Z1(r) || Y1(r) || !!(qi && r && r[qi]);
}
var e_ = X1, r_ = Xn, t_ = e_;
function au(r, e, a, n, t) {
  var s = -1, i = r.length;
  for (a || (a = t_), t || (t = []); ++s < i; ) {
    var o = r[s];
    e > 0 && a(o) ? e > 1 ? au(o, e - 1, a, n, t) : r_(t, o) : n || (t[t.length] = o);
  }
  return t;
}
var ns = au;
function a_(r, e) {
  for (var a = -1, n = r == null ? 0 : r.length, t = Array(n); ++a < n; )
    t[a] = e(r[a], a, r);
  return t;
}
var pr = a_, n_ = dr, s_ = Le, i_ = "[object Symbol]";
function o_(r) {
  return typeof r == "symbol" || s_(r) && n_(r) == i_;
}
var ga = o_, l_ = we, u_ = ga, f_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, c_ = /^\w*$/;
function d_(r, e) {
  if (l_(r))
    return !1;
  var a = typeof r;
  return a == "number" || a == "symbol" || a == "boolean" || r == null || u_(r) ? !0 : c_.test(r) || !f_.test(r) || e != null && r in Object(e);
}
var ss = d_, nu = Kn, h_ = "Expected a function";
function is(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(h_);
  var a = function() {
    var n = arguments, t = e ? e.apply(this, n) : n[0], s = a.cache;
    if (s.has(t))
      return s.get(t);
    var i = r.apply(this, n);
    return a.cache = s.set(t, i) || s, i;
  };
  return a.cache = new (is.Cache || nu)(), a;
}
is.Cache = nu;
var v_ = is, p_ = v_, m_ = 500;
function g_(r) {
  var e = p_(r, function(n) {
    return a.size === m_ && a.clear(), n;
  }), a = e.cache;
  return e;
}
var y_ = g_, b_ = y_, P_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $_ = /\\(\\)?/g, __ = b_(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(P_, function(a, n, t, s) {
    e.push(t ? s.replace($_, "$1") : n || a);
  }), e;
}), S_ = __, Vi = Fr, E_ = pr, w_ = we, O_ = ga, A_ = 1 / 0, ki = Vi ? Vi.prototype : void 0, zi = ki ? ki.toString : void 0;
function su(r) {
  if (typeof r == "string")
    return r;
  if (w_(r))
    return E_(r, su) + "";
  if (O_(r))
    return zi ? zi.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -A_ ? "-0" : e;
}
var R_ = su, x_ = R_;
function I_(r) {
  return r == null ? "" : x_(r);
}
var C_ = I_, D_ = we, j_ = ss, T_ = S_, F_ = C_;
function N_(r, e) {
  return D_(r) ? r : j_(r, e) ? [r] : T_(F_(r));
}
var iu = N_, M_ = ga, L_ = 1 / 0;
function U_(r) {
  if (typeof r == "string" || M_(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -L_ ? "-0" : e;
}
var ya = U_, q_ = iu, V_ = ya;
function k_(r, e) {
  e = q_(e, r);
  for (var a = 0, n = e.length; r != null && a < n; )
    r = r[V_(e[a++])];
  return a && a == n ? r : void 0;
}
var os = k_, z_ = ca, K_ = as, B_ = 1, G_ = 2;
function H_(r, e, a, n) {
  var t = a.length, s = t, i = !n;
  if (r == null)
    return !s;
  for (r = Object(r); t--; ) {
    var o = a[t];
    if (i && o[2] ? o[1] !== r[o[0]] : !(o[0] in r))
      return !1;
  }
  for (; ++t < s; ) {
    o = a[t];
    var l = o[0], c = r[l], u = o[1];
    if (i && o[2]) {
      if (c === void 0 && !(l in r))
        return !1;
    } else {
      var d = new z_();
      if (n)
        var p = n(c, u, l, r, e, d);
      if (!(p === void 0 ? K_(u, c, B_ | G_, n, d) : p))
        return !1;
    }
  }
  return !0;
}
var Q_ = H_, J_ = Me;
function W_(r) {
  return r === r && !J_(r);
}
var ou = W_, Y_ = ou, Z_ = ut;
function X_(r) {
  for (var e = Z_(r), a = e.length; a--; ) {
    var n = e[a], t = r[n];
    e[a] = [n, t, Y_(t)];
  }
  return e;
}
var eS = X_;
function rS(r, e) {
  return function(a) {
    return a == null ? !1 : a[r] === e && (e !== void 0 || r in Object(a));
  };
}
var lu = rS, tS = Q_, aS = eS, nS = lu;
function sS(r) {
  var e = aS(r);
  return e.length == 1 && e[0][2] ? nS(e[0][0], e[0][1]) : function(a) {
    return a === r || tS(a, r, e);
  };
}
var iS = sS, oS = os;
function lS(r, e, a) {
  var n = r == null ? void 0 : oS(r, e);
  return n === void 0 ? a : n;
}
var uS = lS;
function fS(r, e) {
  return r != null && e in Object(r);
}
var cS = fS, dS = iu, hS = da, vS = we, pS = Gn, mS = Hn, gS = ya;
function yS(r, e, a) {
  e = dS(e, r);
  for (var n = -1, t = e.length, s = !1; ++n < t; ) {
    var i = gS(e[n]);
    if (!(s = r != null && a(r, i)))
      break;
    r = r[i];
  }
  return s || ++n != t ? s : (t = r == null ? 0 : r.length, !!t && mS(t) && pS(i, t) && (vS(r) || hS(r)));
}
var bS = yS, PS = cS, $S = bS;
function _S(r, e) {
  return r != null && $S(r, e, PS);
}
var SS = _S, ES = as, wS = uS, OS = SS, AS = ss, RS = ou, xS = lu, IS = ya, CS = 1, DS = 2;
function jS(r, e) {
  return AS(r) && RS(e) ? xS(IS(r), e) : function(a) {
    var n = wS(a, r);
    return n === void 0 && n === e ? OS(a, r) : ES(e, n, CS | DS);
  };
}
var TS = jS;
function FS(r) {
  return r;
}
var ft = FS;
function NS(r) {
  return function(e) {
    return e == null ? void 0 : e[r];
  };
}
var MS = NS, LS = os;
function US(r) {
  return function(e) {
    return LS(e, r);
  };
}
var qS = US, VS = MS, kS = qS, zS = ss, KS = ya;
function BS(r) {
  return zS(r) ? VS(KS(r)) : kS(r);
}
var GS = BS, HS = iS, QS = TS, JS = ft, WS = we, YS = GS;
function ZS(r) {
  return typeof r == "function" ? r : r == null ? JS : typeof r == "object" ? WS(r) ? QS(r[0], r[1]) : HS(r) : YS(r);
}
var XS = ZS;
function eE(r) {
  return function(e, a, n) {
    for (var t = -1, s = Object(e), i = n(e), o = i.length; o--; ) {
      var l = i[r ? o : ++t];
      if (a(s[l], l, s) === !1)
        break;
    }
    return e;
  };
}
var rE = eE, tE = rE, aE = tE(), uu = aE, nE = uu, sE = ut;
function iE(r, e) {
  return r && nE(r, e, sE);
}
var oE = iE, lE = Ur;
function uE(r, e) {
  return function(a, n) {
    if (a == null)
      return a;
    if (!lE(a))
      return r(a, n);
    for (var t = a.length, s = e ? t : -1, i = Object(a); (e ? s-- : ++s < t) && n(i[s], s, i) !== !1; )
      ;
    return a;
  };
}
var fE = uE, cE = oE, dE = fE, hE = dE(cE), fu = hE, vE = fu, pE = Ur;
function mE(r, e) {
  var a = -1, n = pE(r) ? Array(r.length) : [];
  return vE(r, function(t, s, i) {
    n[++a] = e(t, s, i);
  }), n;
}
var gE = mE;
function yE(r, e) {
  var a = r.length;
  for (r.sort(e); a--; )
    r[a] = r[a].value;
  return r;
}
var bE = yE, Ki = ga;
function PE(r, e) {
  if (r !== e) {
    var a = r !== void 0, n = r === null, t = r === r, s = Ki(r), i = e !== void 0, o = e === null, l = e === e, c = Ki(e);
    if (!o && !c && !s && r > e || s && i && l && !o && !c || n && i && l || !a && l || !t)
      return 1;
    if (!n && !s && !c && r < e || c && a && t && !n && !s || o && a && t || !i && t || !l)
      return -1;
  }
  return 0;
}
var $E = PE, _E = $E;
function SE(r, e, a) {
  for (var n = -1, t = r.criteria, s = e.criteria, i = t.length, o = a.length; ++n < i; ) {
    var l = _E(t[n], s[n]);
    if (l) {
      if (n >= o)
        return l;
      var c = a[n];
      return l * (c == "desc" ? -1 : 1);
    }
  }
  return r.index - e.index;
}
var EE = SE, ja = pr, wE = os, OE = XS, AE = gE, RE = bE, xE = vr, IE = EE, CE = ft, DE = we;
function jE(r, e, a) {
  e.length ? e = ja(e, function(s) {
    return DE(s) ? function(i) {
      return wE(i, s.length === 1 ? s[0] : s);
    } : s;
  }) : e = [CE];
  var n = -1;
  e = ja(e, xE(OE));
  var t = AE(r, function(s, i, o) {
    var l = ja(e, function(c) {
      return c(s);
    });
    return { criteria: l, index: ++n, value: s };
  });
  return RE(t, function(s, i) {
    return IE(s, i, a);
  });
}
var TE = jE;
function FE(r, e, a) {
  switch (a.length) {
    case 0:
      return r.call(e);
    case 1:
      return r.call(e, a[0]);
    case 2:
      return r.call(e, a[0], a[1]);
    case 3:
      return r.call(e, a[0], a[1], a[2]);
  }
  return r.apply(e, a);
}
var cu = FE, NE = cu, Bi = Math.max;
function ME(r, e, a) {
  return e = Bi(e === void 0 ? r.length - 1 : e, 0), function() {
    for (var n = arguments, t = -1, s = Bi(n.length - e, 0), i = Array(s); ++t < s; )
      i[t] = n[e + t];
    t = -1;
    for (var o = Array(e + 1); ++t < e; )
      o[t] = n[t];
    return o[e] = a(i), NE(r, this, o);
  };
}
var LE = ME;
function UE(r) {
  return function() {
    return r;
  };
}
var qE = UE, VE = qE, Gi = Nl, kE = ft, zE = Gi ? function(r, e) {
  return Gi(r, "toString", {
    configurable: !0,
    enumerable: !1,
    value: VE(e),
    writable: !0
  });
} : kE, KE = zE, BE = 800, GE = 16, HE = Date.now;
function QE(r) {
  var e = 0, a = 0;
  return function() {
    var n = HE(), t = GE - (n - a);
    if (a = n, t > 0) {
      if (++e >= BE)
        return arguments[0];
    } else
      e = 0;
    return r.apply(void 0, arguments);
  };
}
var JE = QE, WE = KE, YE = JE, ZE = YE(WE), XE = ZE, ew = ft, rw = LE, tw = XE;
function aw(r, e) {
  return tw(rw(r, e, ew), r + "");
}
var mr = aw, nw = jr, sw = Ur, iw = Gn, ow = Me;
function lw(r, e, a) {
  if (!ow(a))
    return !1;
  var n = typeof e;
  return (n == "number" ? sw(a) && iw(e, a.length) : n == "string" && e in a) ? nw(a[e], r) : !1;
}
var ls = lw, uw = ns, fw = TE, cw = mr, Hi = ls, dw = cw(function(r, e) {
  if (r == null)
    return [];
  var a = e.length;
  return a > 1 && Hi(r, e[0], e[1]) ? e = [] : a > 2 && Hi(e[0], e[1], e[2]) && (e = [e[0]]), fw(r, uw(e, 1), []);
}), du = dw;
function hw(r, e, a, n) {
  for (var t = r.length, s = a + (n ? 1 : -1); n ? s-- : ++s < t; )
    if (e(r[s], s, r))
      return s;
  return -1;
}
var vw = hw;
function pw(r) {
  return r !== r;
}
var mw = pw;
function gw(r, e, a) {
  for (var n = a - 1, t = r.length; ++n < t; )
    if (r[n] === e)
      return n;
  return -1;
}
var yw = gw, bw = vw, Pw = mw, $w = yw;
function _w(r, e, a) {
  return e === e ? $w(r, e, a) : bw(r, Pw, a);
}
var hu = _w, Sw = hu;
function Ew(r, e) {
  var a = r == null ? 0 : r.length;
  return !!a && Sw(r, e, 0) > -1;
}
var us = Ew;
function ww(r, e, a) {
  for (var n = -1, t = r == null ? 0 : r.length; ++n < t; )
    if (a(e, r[n]))
      return !0;
  return !1;
}
var fs = ww;
function Ow() {
}
var Aw = Ow, Ta = Gl, Rw = Aw, xw = ts, Iw = 1 / 0, Cw = Ta && 1 / xw(new Ta([, -0]))[1] == Iw ? function(r) {
  return new Ta(r);
} : Rw, Dw = Cw, jw = pa, Tw = us, Fw = fs, Nw = ma, Mw = Dw, Lw = ts, Uw = 200;
function qw(r, e, a) {
  var n = -1, t = Tw, s = r.length, i = !0, o = [], l = o;
  if (a)
    i = !1, t = Fw;
  else if (s >= Uw) {
    var c = e ? null : Mw(r);
    if (c)
      return Lw(c);
    i = !1, t = Nw, l = new jw();
  } else
    l = e ? [] : o;
  e:
    for (; ++n < s; ) {
      var u = r[n], d = e ? e(u) : u;
      if (u = a || u !== 0 ? u : 0, i && d === d) {
        for (var p = l.length; p--; )
          if (l[p] === d)
            continue e;
        e && l.push(d), o.push(u);
      } else
        t(l, d, a) || (l !== o && l.push(d), o.push(u));
    }
  return o;
}
var vu = qw, Vw = vu;
function kw(r) {
  return r && r.length ? Vw(r) : [];
}
var cs = kw, zw = vu;
function Kw(r, e) {
  return e = typeof e == "function" ? e : void 0, r && r.length ? zw(r, void 0, e) : [];
}
var ds = Kw, Bw = mr, Gw = jr, Hw = ls, Qw = qr, pu = Object.prototype, Jw = pu.hasOwnProperty, Ww = Bw(function(r, e) {
  r = Object(r);
  var a = -1, n = e.length, t = n > 2 ? e[2] : void 0;
  for (t && Hw(e[0], e[1], t) && (n = 1); ++a < n; )
    for (var s = e[a], i = Qw(s), o = -1, l = i.length; ++o < l; ) {
      var c = i[o], u = r[c];
      (u === void 0 || Gw(u, pu[c]) && !Jw.call(r, c)) && (r[c] = s[c]);
    }
  return r;
}), Yw = Ww, Zw = pa, Xw = us, eO = fs, rO = pr, tO = vr, Qi = ma, aO = Math.min;
function nO(r, e, a) {
  for (var n = a ? eO : Xw, t = r[0].length, s = r.length, i = s, o = Array(s), l = 1 / 0, c = []; i--; ) {
    var u = r[i];
    i && e && (u = rO(u, tO(e))), l = aO(u.length, l), o[i] = !a && (e || t >= 120 && u.length >= 120) ? new Zw(i && u) : void 0;
  }
  u = r[0];
  var d = -1, p = o[0];
  e:
    for (; ++d < t && c.length < l; ) {
      var f = u[d], v = e ? e(f) : f;
      if (f = a || f !== 0 ? f : 0, !(p ? Qi(p, v) : n(c, v, a))) {
        for (i = s; --i; ) {
          var g = o[i];
          if (!(g ? Qi(g, v) : n(r[i], v, a)))
            continue e;
        }
        p && p.push(v), c.push(f);
      }
    }
  return c;
}
var mu = nO, sO = Ur, iO = Le;
function oO(r) {
  return iO(r) && sO(r);
}
var hs = oO, lO = hs;
function uO(r) {
  return lO(r) ? r : [];
}
var gu = uO;
function fO(r) {
  var e = r == null ? 0 : r.length;
  return e ? r[e - 1] : void 0;
}
var cO = fO, dO = pr, hO = mu, vO = mr, pO = gu, mO = cO, gO = vO(function(r) {
  var e = mO(r), a = dO(r, pO);
  return e = typeof e == "function" ? e : void 0, e && a.pop(), a.length && a[0] === r[0] ? hO(a, void 0, e) : [];
}), yu = gO, yO = dr, bO = es, PO = Le, $O = "[object Object]", _O = Function.prototype, SO = Object.prototype, bu = _O.toString, EO = SO.hasOwnProperty, wO = bu.call(Object);
function OO(r) {
  if (!PO(r) || yO(r) != $O)
    return !1;
  var e = bO(r);
  if (e === null)
    return !0;
  var a = EO.call(e, "constructor") && e.constructor;
  return typeof a == "function" && a instanceof a && bu.call(a) == wO;
}
var ba = OO, AO = dr, RO = Le, xO = "[object Boolean]";
function IO(r) {
  return r === !0 || r === !1 || RO(r) && AO(r) == xO;
}
var CO = IO, Ie = tu, DO = du, vs = cs, Ji = ds, jO = Yw, TO = yu, Gt = ba, Fa = CO, Wi = (r) => Array.isArray(r) ? r : [r], Re = (r) => r === void 0, Ot = (r) => Gt(r) || Array.isArray(r) ? Object.keys(r) : [], Er = (r, e) => r.hasOwnProperty(e), Rr = (r) => DO(vs(r)), Yi = (r) => Re(r) || Array.isArray(r) && r.length === 0, FO = (r, e, a, n) => e && Er(e, a) && r && Er(r, a) && n(r[a], e[a]), Na = (r, e) => Re(r) && e === 0 || Re(e) && r === 0 || Ie(r, e), NO = (r, e) => Re(r) && e === !1 || Re(e) && r === !1 || Ie(r, e), Zi = (r) => Re(r) || Ie(r, {}) || r === !0, At = (r) => Re(r) || Ie(r, {}), Xi = (r) => Re(r) || Gt(r) || r === !0 || r === !1;
function eo(r, e) {
  return Yi(r) && Yi(e) ? !0 : Ie(Rr(r), Rr(e));
}
function MO(r, e) {
  return r = Wi(r), e = Wi(e), Ie(Rr(r), Rr(e));
}
function Tt(r, e, a, n) {
  var t = vs(Ot(r).concat(Ot(e)));
  return At(r) && At(e) ? !0 : At(r) && Ot(e).length || At(e) && Ot(r).length ? !1 : t.every(function(s) {
    var i = r[s], o = e[s];
    return Array.isArray(i) && Array.isArray(o) ? Ie(Rr(r), Rr(e)) : Array.isArray(i) && !Array.isArray(o) || Array.isArray(o) && !Array.isArray(i) ? !1 : FO(r, e, s, n);
  });
}
function LO(r, e, a, n) {
  return Gt(r) && Gt(e) ? n(r, e) : Array.isArray(r) && Array.isArray(e) ? Tt(r, e, a, n) : Ie(r, e);
}
function Ma(r, e, a, n) {
  var t = Ji(r, n), s = Ji(e, n), i = TO(t, s, n);
  return i.length === Math.max(t.length, s.length);
}
var UO = {
  title: Ie,
  uniqueItems: NO,
  minLength: Na,
  minItems: Na,
  minProperties: Na,
  required: eo,
  enum: eo,
  type: MO,
  items: LO,
  anyOf: Ma,
  allOf: Ma,
  oneOf: Ma,
  properties: Tt,
  patternProperties: Tt,
  dependencies: Tt
}, qO = [
  "properties",
  "patternProperties",
  "dependencies",
  "uniqueItems",
  "minLength",
  "minItems",
  "minProperties",
  "required"
], VO = ["additionalProperties", "additionalItems", "contains", "propertyNames", "not"];
function fn(r, e, a) {
  if (a = jO(a, {
    ignore: []
  }), Zi(r) && Zi(e))
    return !0;
  if (!Xi(r) || !Xi(e))
    throw new Error("Either of the values are not a JSON schema.");
  if (r === e)
    return !0;
  if (Fa(r) && Fa(e))
    return r === e;
  if (r === void 0 && e === !1 || e === void 0 && r === !1 || Re(r) && !Re(e) || !Re(r) && Re(e))
    return !1;
  var n = vs(Object.keys(r).concat(Object.keys(e)));
  if (a.ignore.length && (n = n.filter((s) => a.ignore.indexOf(s) === -1)), !n.length)
    return !0;
  function t(s, i) {
    return fn(s, i, a);
  }
  return n.every(function(s) {
    var i = r[s], o = e[s];
    if (VO.indexOf(s) !== -1)
      return fn(i, o, a);
    var l = UO[s];
    if (l || (l = Ie), Ie(i, o))
      return !0;
    if (qO.indexOf(s) === -1 && (!Er(r, s) && Er(e, s) || Er(r, s) && !Er(e, s)))
      return i === o;
    var c = l(i, o, s, t);
    if (!Fa(c))
      throw new Error("Comparer must return true or false");
    return c;
  });
}
var ps = fn;
function kO(r) {
  return Object.prototype.toString.call(r) === "[object Array]";
}
var ms = Array.isArray || kO;
function zO(r) {
  return (typeof r == "number" || Object.prototype.toString.call(r) === "[object Number]") && r.valueOf() === r.valueOf();
}
var KO = zO, BO = KO;
function GO(r) {
  return BO(r) && r % 1 === 0;
}
var HO = GO, QO = ms, JO = HO;
function WO(r) {
  var e;
  if (!QO(r) || (e = r.length, !e))
    return !1;
  for (var a = 0; a < e; a++)
    if (!JO(r[a]))
      return !1;
  return !0;
}
var Pu = WO;
function YO(r) {
  return typeof r == "function";
}
var $u = YO, ZO = ms, ro = Pu, XO = $u, Rt = Math.pow(2, 31) - 1;
function to(r, e) {
  var a = 1, n;
  if (r === 0)
    return e;
  if (e === 0)
    return r;
  for (; r % 2 === 0 && e % 2 === 0; )
    r = r / 2, e = e / 2, a = a * 2;
  for (; r % 2 === 0; )
    r = r / 2;
  for (; e; ) {
    for (; e % 2 === 0; )
      e = e / 2;
    r > e && (n = e, e = r, r = n), e = e - r;
  }
  return a * r;
}
function ao(r, e) {
  var a = 0, n;
  if (r === 0)
    return e;
  if (e === 0)
    return r;
  for (; !(r & 1) && !(e & 1); )
    r >>>= 1, e >>>= 1, a++;
  for (; !(r & 1); )
    r >>>= 1;
  for (; e; ) {
    for (; !(e & 1); )
      e >>>= 1;
    r > e && (n = e, e = r, r = n), e = e - r;
  }
  return r << a;
}
function eA() {
  var r = arguments.length, e, a, n, t, s, i, o;
  for (e = new Array(r), o = 0; o < r; o++)
    e[o] = arguments[o];
  if (ro(e)) {
    if (r === 2)
      return s = e[0], i = e[1], s < 0 && (s = -s), i < 0 && (i = -i), s <= Rt && i <= Rt ? ao(s, i) : to(s, i);
    n = e;
  } else if (ZO(e[0]))
    if (r > 1) {
      if (n = e[0], a = e[1], !XO(a))
        throw new TypeError("gcd()::invalid input argument. Accessor must be a function. Value: `" + a + "`.");
    } else
      n = e[0];
  else
    throw new TypeError("gcd()::invalid input argument. Must provide an array of integers. Value: `" + e[0] + "`.");
  if (t = n.length, t < 2)
    return null;
  if (a) {
    for (s = new Array(t), o = 0; o < t; o++)
      s[o] = a(n[o], o);
    n = s;
  }
  if (r < 3 && !ro(n))
    throw new TypeError("gcd()::invalid input argument. Accessed array values must be integers. Value: `" + n + "`.");
  for (o = 0; o < t; o++)
    s = n[o], s < 0 && (n[o] = -s);
  for (s = n[0], o = 1; o < t; o++)
    i = n[o], i <= Rt && s <= Rt ? s = ao(s, i) : s = to(s, i);
  return s;
}
var rA = eA, no = rA, tA = ms, so = Pu, aA = $u;
function nA() {
  var r = arguments.length, e, a, n, t, s, i, o;
  for (e = new Array(r), o = 0; o < r; o++)
    e[o] = arguments[o];
  if (so(e)) {
    if (r === 2)
      return s = e[0], i = e[1], s < 0 && (s = -s), i < 0 && (i = -i), s === 0 || i === 0 ? 0 : s / no(s, i) * i;
    n = e;
  } else if (tA(e[0]))
    if (r > 1) {
      if (n = e[0], a = e[1], !aA(a))
        throw new TypeError("lcm()::invalid input argument. Accessor must be a function. Value: `" + a + "`.");
    } else
      n = e[0];
  else
    throw new TypeError("lcm()::invalid input argument. Must provide an array of integers. Value: `" + e[0] + "`.");
  if (t = n.length, t < 2)
    return null;
  if (a) {
    for (s = new Array(t), o = 0; o < t; o++)
      s[o] = a(n[o], o);
    n = s;
  }
  if (r < 3 && !so(n))
    throw new TypeError("lcm()::invalid input argument. Accessed array values must be integers. Value: `" + n + "`.");
  for (o = 0; o < t; o++)
    s = n[o], s < 0 && (n[o] = -s);
  for (s = n[0], o = 1; o < t; o++) {
    if (i = n[o], s === 0 || i === 0)
      return 0;
    s = s / no(s, i) * i;
  }
  return s;
}
var sA = nA, iA = Bn, oA = jr;
function lA(r, e, a) {
  (a !== void 0 && !oA(r[e], a) || a === void 0 && !(e in r)) && iA(r, e, a);
}
var _u = lA;
function uA(r, e) {
  if (!(e === "constructor" && typeof r[e] == "function") && e != "__proto__")
    return r[e];
}
var Su = uA, fA = lt, cA = qr;
function dA(r) {
  return fA(r, cA(r));
}
var hA = dA, io = _u, vA = Vl, pA = Jl, mA = Yn, gA = Wl, oo = da, lo = we, yA = hs, bA = ha, PA = kn, $A = Me, _A = ba, SA = Jn, uo = Su, EA = hA;
function wA(r, e, a, n, t, s, i) {
  var o = uo(r, a), l = uo(e, a), c = i.get(l);
  if (c) {
    io(r, a, c);
    return;
  }
  var u = s ? s(o, l, a + "", r, e, i) : void 0, d = u === void 0;
  if (d) {
    var p = lo(l), f = !p && bA(l), v = !p && !f && SA(l);
    u = l, p || f || v ? lo(o) ? u = o : yA(o) ? u = mA(o) : f ? (d = !1, u = vA(l, !0)) : v ? (d = !1, u = pA(l, !0)) : u = [] : _A(l) || oo(l) ? (u = o, oo(o) ? u = EA(o) : (!$A(o) || PA(o)) && (u = gA(l))) : d = !1;
  }
  d && (i.set(l, u), t(u, l, n, s, i), i.delete(l)), io(r, a, u);
}
var OA = wA, AA = ca, RA = _u, xA = uu, IA = OA, CA = Me, DA = qr, jA = Su;
function Eu(r, e, a, n, t) {
  r !== e && xA(e, function(s, i) {
    if (t || (t = new AA()), CA(s))
      IA(r, e, i, a, Eu, n, t);
    else {
      var o = n ? n(jA(r, i), s, i + "", r, e, t) : void 0;
      o === void 0 && (o = s), RA(r, i, o);
    }
  }, DA);
}
var wu = Eu, TA = wu, fo = Me;
function Ou(r, e, a, n, t, s) {
  return fo(r) && fo(e) && (s.set(e, r), TA(r, e, void 0, Ou, s), s.delete(e)), r;
}
var FA = Ou, NA = mr, MA = ls;
function LA(r) {
  return NA(function(e, a) {
    var n = -1, t = a.length, s = t > 1 ? a[t - 1] : void 0, i = t > 2 ? a[2] : void 0;
    for (s = r.length > 3 && typeof s == "function" ? (t--, s) : void 0, i && MA(a[0], a[1], i) && (s = t < 3 ? void 0 : s, t = 1), e = Object(e); ++n < t; ) {
      var o = a[n];
      o && r(e, o, n, s);
    }
    return e;
  });
}
var UA = LA, qA = wu, VA = UA, kA = VA(function(r, e, a, n) {
  qA(r, e, a, n);
}), zA = kA, KA = cu, BA = mr, GA = FA, HA = zA, QA = BA(function(r) {
  return r.push(void 0, GA), KA(HA, void 0, r);
}), JA = QA, WA = ns;
function YA(r) {
  var e = r == null ? 0 : r.length;
  return e ? WA(r, 1) : [];
}
var Au = YA, ZA = ns, XA = 1 / 0;
function eR(r) {
  var e = r == null ? 0 : r.length;
  return e ? ZA(r, XA) : [];
}
var Ru = eR, rR = pr, tR = mu, aR = mr, nR = gu, sR = aR(function(r) {
  var e = rR(r, nR);
  return e.length && e[0] === r[0] ? tR(e) : [];
}), iR = sR;
function oR(r, e, a, n) {
  for (var t = a - 1, s = r.length; ++t < s; )
    if (n(r[t], e))
      return t;
  return -1;
}
var lR = oR, uR = pr, fR = hu, cR = lR, dR = vr, hR = Yn, vR = Array.prototype, co = vR.splice;
function pR(r, e, a, n) {
  var t = n ? cR : fR, s = -1, i = e.length, o = r;
  for (r === e && (e = hR(e)), a && (o = uR(r, dR(a))); ++s < i; )
    for (var l = 0, c = e[s], u = a ? a(c) : c; (l = t(o, u, l, n)) > -1; )
      o !== r && co.call(o, l, 1), co.call(r, l, 1);
  return r;
}
var mR = pR, gR = mR;
function yR(r, e) {
  return r && r.length && e && e.length ? gR(r, e) : r;
}
var bR = yR, PR = ft;
function $R(r) {
  return typeof r == "function" ? r : PR;
}
var _R = $R, SR = Fl, ER = fu, wR = _R, OR = we;
function AR(r, e) {
  var a = OR(r) ? SR : ER;
  return a(r, wR(e));
}
var xu = AR, RR = pa, xR = us, IR = fs, CR = pr, DR = vr, jR = ma, TR = 200;
function FR(r, e, a, n) {
  var t = -1, s = xR, i = !0, o = r.length, l = [], c = e.length;
  if (!o)
    return l;
  a && (e = CR(e, DR(a))), n ? (s = IR, i = !1) : e.length >= TR && (s = jR, i = !1, e = new RR(e));
  e:
    for (; ++t < o; ) {
      var u = r[t], d = a == null ? u : a(u);
      if (u = n || u !== 0 ? u : 0, i && d === d) {
        for (var p = c; p--; )
          if (e[p] === d)
            continue e;
        l.push(u);
      } else
        s(e, d, n) || l.push(u);
    }
  return l;
}
var NR = FR, MR = NR, LR = mr, UR = hs, qR = LR(function(r, e) {
  return UR(r) ? MR(r, e) : [];
}), VR = qR;
const kR = Au, zR = Ru, Iu = ba, KR = cs, BR = ds, GR = VR;
function HR(r) {
  for (const e in r)
    Cu(r, e) && Du(r[e]) && delete r[e];
  return r;
}
const QR = (r) => KR(zR(r.map(gs))), JR = (r, e) => r.map((a) => a && a[e]), Cu = (r, e) => Object.prototype.hasOwnProperty.call(r, e), gs = (r) => Iu(r) || Array.isArray(r) ? Object.keys(r) : [], WR = (r) => r !== void 0, YR = (r) => Iu(r) || r === !0 || r === !1, Du = (r) => !gs(r).length && r !== !1 && r !== !0, ZR = (r, ...e) => GR.apply(null, [r].concat(kR(e)));
var ju = {
  allUniqueKeys: QR,
  deleteUndefinedProps: HR,
  getValues: JR,
  has: Cu,
  isEmptySchema: Du,
  isSchema: YR,
  keys: gs,
  notUndefined: WR,
  uniqWith: BR,
  withoutArr: ZR
};
const XR = ps, ex = xu, {
  allUniqueKeys: rx,
  deleteUndefinedProps: tx,
  getValues: ax,
  keys: Wr,
  notUndefined: nx,
  uniqWith: sx,
  withoutArr: ho
} = ju;
function ix(r) {
  ex(r, function(e, a) {
    e === !1 && delete r[a];
  });
}
function vo(r, e) {
  return rx(r).reduce(function(n, t) {
    const s = ax(r, t), i = sx(s.filter(nx), XR);
    return n[t] = e(i, t), n;
  }, {});
}
var ox = {
  keywords: ["properties", "patternProperties", "additionalProperties"],
  resolver(r, e, a, n) {
    n.ignoreAdditionalProperties || (r.forEach(function(s) {
      const i = r.filter((u) => u !== s), o = Wr(s.properties), c = Wr(s.patternProperties).map((u) => new RegExp(u));
      i.forEach(function(u) {
        const d = Wr(u.properties), p = d.filter((v) => c.some((g) => g.test(v)));
        ho(d, o, p).forEach(function(v) {
          u.properties[v] = a.properties([
            u.properties[v],
            s.additionalProperties
          ], v);
        });
      });
    }), r.forEach(function(s) {
      const i = r.filter((l) => l !== s), o = Wr(s.patternProperties);
      s.additionalProperties === !1 && i.forEach(function(l) {
        const c = Wr(l.patternProperties);
        ho(c, o).forEach((d) => delete l.patternProperties[d]);
      });
    }));
    const t = {
      additionalProperties: a.additionalProperties(r.map((s) => s.additionalProperties)),
      patternProperties: vo(r.map((s) => s.patternProperties), a.patternProperties),
      properties: vo(r.map((s) => s.properties), a.properties)
    };
    return t.additionalProperties === !1 && ix(t.properties), tx(t);
  }
};
const lx = ps, ux = xu, {
  allUniqueKeys: fx,
  deleteUndefinedProps: cx,
  has: dx,
  isSchema: Tu,
  notUndefined: Fu,
  uniqWith: hx
} = ju;
function vx(r) {
  ux(r, function(e, a) {
    e === !1 && r.splice(a, 1);
  });
}
function px(r, e) {
  return r.map(function(a) {
    if (a)
      if (Array.isArray(a.items)) {
        const n = a.items[e];
        if (Tu(n))
          return n;
        if (dx(a, "additionalItems"))
          return a.additionalItems;
      } else
        return a.items;
  });
}
function mx(r) {
  return r.map(function(e) {
    if (e)
      return Array.isArray(e.items) ? e.additionalItems : e.items;
  });
}
function gx(r, e, a) {
  return fx(a).reduce(function(t, s) {
    const i = px(r, s), o = hx(i.filter(Fu), lx);
    return t[s] = e(o, s), t;
  }, []);
}
var yx = {
  keywords: ["items", "additionalItems"],
  resolver(r, e, a) {
    const n = r.map((o) => o.items), t = n.filter(Fu), s = {};
    t.every(Tu) ? s.items = a.items(n) : s.items = gx(r, a.items, n);
    let i;
    return t.every(Array.isArray) ? i = r.map((o) => o.additionalItems) : t.some(Array.isArray) && (i = mx(r)), i && (s.additionalItems = a.additionalItems(i)), s.additionalItems === !1 && Array.isArray(s.items) && vx(s.items), cx(s);
  }
};
const Nu = J$, Ht = ps, bx = sA, Px = JA, Mu = Au, ys = Ru, $x = iR, _x = yu, cn = tu, xr = ba, Sx = bR, Lu = du, bs = cs, wr = ds, Uu = ox, qu = yx, xt = (r, e) => r.indexOf(e) !== -1, Ex = (r) => xr(r) || r === !0 || r === !1, wx = (r) => r === !1, Vu = (r) => r === !0, Pa = (r, e, a) => a(r), ku = (r) => Lu(bs(ys(r))), Qt = (r) => r !== void 0, zu = (r) => bs(ys(r.map(Cx))), kr = (r) => r[0], Ox = (r) => ku(r), ct = (r) => Math.max.apply(Math, r), dt = (r) => Math.min.apply(Math, r), Ax = (r) => r.some(Vu), Rx = (r) => wr(Mu(r), cn);
function xx(r) {
  return function(e, a) {
    return Ht({
      [r]: e
    }, { [r]: a });
  };
}
function Ku(r) {
  let { allOf: e = [], ...a } = r;
  return a = xr(r) ? a : r, [a, ...e.map(Ku)];
}
function Bu(r, e) {
  return r.map((a) => a && a[e]);
}
function Ix(r, e) {
  return r.map(function(a, n) {
    try {
      return e(a, n);
    } catch {
      return;
    }
  }).filter(Qt);
}
function Cx(r) {
  return xr(r) || Array.isArray(r) ? Object.keys(r) : [];
}
function dn(r, e) {
  if (e = e || [], !r.length)
    return e;
  const a = r.slice(0).shift(), n = r.slice(1);
  return e.length ? dn(n, Mu(e.map((t) => a.map((s) => [s].concat(t))))) : dn(n, a.map((t) => t));
}
function Gu(r, e) {
  let a;
  try {
    a = r.map(function(n) {
      return JSON.stringify(n, null, 2);
    }).join(`
`);
  } catch {
    a = r.join(", ");
  }
  throw new Error('Could not resolve values for path:"' + e.join(".") + `". They are probably incompatible. Values: 
` + a);
}
function Dx(r, e, a, n, t, s) {
  if (r.length) {
    const i = t.complexResolvers[e];
    if (!i || !i.resolver)
      throw new Error("No resolver found for " + e);
    const o = a.map((d) => r.reduce((p, f) => (d[f] !== void 0 && (p[f] = d[f]), p), {})), l = wr(o, Ht), c = i.keywords.reduce((d, p) => ({
      ...d,
      [p]: (f, v = []) => n(f, null, s.concat(p, v))
    }), {}), u = i.resolver(l, s.concat(e), c, t);
    return xr(u) || Gu(l, s.concat(e)), u;
  }
}
function jx(r) {
  return { required: r };
}
const Tx = ["properties", "patternProperties", "definitions", "dependencies"], Fx = ["anyOf", "oneOf"], Nx = [
  "additionalProperties",
  "additionalItems",
  "contains",
  "propertyNames",
  "not",
  "items"
], W = {
  type(r) {
    if (r.some(Array.isArray)) {
      const e = r.map(function(n) {
        return Array.isArray(n) ? n : [n];
      }), a = $x.apply(null, e);
      if (a.length === 1)
        return a[0];
      if (a.length > 1)
        return bs(a);
    }
  },
  dependencies(r, e, a) {
    return zu(r).reduce(function(t, s) {
      const i = Bu(r, s);
      let o = wr(i.filter(Qt), cn);
      const l = o.filter(Array.isArray);
      if (l.length) {
        if (l.length === o.length)
          t[s] = ku(o);
        else {
          const c = o.filter(Ex), u = l.map(jx);
          t[s] = a(c.concat(u), s);
        }
        return t;
      }
      return o = wr(o, Ht), t[s] = a(o, s), t;
    }, {});
  },
  oneOf(r, e, a) {
    const n = dn(Nu(r)), t = Ix(n, a), s = wr(t, Ht);
    if (s.length)
      return s;
  },
  not(r) {
    return { anyOf: r };
  },
  pattern(r) {
    return r.map((e) => "(?=" + e + ")").join("");
  },
  multipleOf(r) {
    let e = r.slice(0), a = 1;
    for (; e.some((n) => !Number.isInteger(n)); )
      e = e.map((n) => n * 10), a = a * 10;
    return bx(e) / a;
  },
  enum(r) {
    const e = _x.apply(null, r.concat(cn));
    if (e.length)
      return Lu(e);
  }
};
W.$id = kr;
W.$ref = kr;
W.$schema = kr;
W.additionalItems = Pa;
W.additionalProperties = Pa;
W.anyOf = W.oneOf;
W.contains = Pa;
W.default = kr;
W.definitions = W.dependencies;
W.description = kr;
W.examples = Rx;
W.exclusiveMaximum = dt;
W.exclusiveMinimum = ct;
W.items = qu;
W.maximum = dt;
W.maxItems = dt;
W.maxLength = dt;
W.maxProperties = dt;
W.minimum = ct;
W.minItems = ct;
W.minLength = ct;
W.minProperties = ct;
W.properties = Uu;
W.propertyNames = Pa;
W.required = Ox;
W.title = kr;
W.uniqueItems = Ax;
const Mx = {
  properties: Uu,
  items: qu
};
function Ps(r, e, a) {
  e = Px(e, {
    ignoreAdditionalProperties: !1,
    resolvers: W,
    complexResolvers: Mx,
    deep: !0
  });
  const n = Object.entries(e.complexResolvers);
  function t(o, l, c) {
    o = Nu(o.filter(Qt)), c = c || [];
    const u = xr(l) ? l : {};
    if (!o.length)
      return;
    if (o.some(wx))
      return !1;
    if (o.every(Vu))
      return !0;
    o = o.filter(xr);
    const d = zu(o);
    if (e.deep && xt(d, "allOf"))
      return Ps({
        allOf: o
      }, e);
    const p = n.map(([f, v]) => d.filter((g) => v.keywords.includes(g)));
    return p.forEach((f) => Sx(d, f)), d.forEach(function(f) {
      const v = Bu(o, f), g = wr(v.filter(Qt), xx(f));
      if (g.length === 1 && xt(Fx, f))
        u[f] = g[0].map((m) => t([m], m));
      else if (g.length === 1 && !xt(Tx, f) && !xt(Nx, f))
        u[f] = g[0];
      else {
        const m = e.resolvers[f] || e.resolvers.defaultResolver;
        if (!m)
          throw new Error("No resolver found for key " + f + ". You can provide a resolver for this keyword in the options, or provide a default resolver.");
        const P = (A, $ = []) => t(A, null, c.concat(f, $));
        u[f] = m(g, c.concat(f), P, e), u[f] === void 0 ? Gu(g, c.concat(f)) : u[f] === void 0 && delete u[f];
      }
    }), n.reduce((f, [v, g], m) => ({
      ...f,
      ...Dx(p[m], v, o, t, e, c)
    }), u);
  }
  const s = ys(Ku(r));
  return t(s);
}
Ps.options = {
  resolvers: W
};
var Lx = Ps;
const Ux = /* @__PURE__ */ An(Lx);
function at(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}
function Or(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
const po = new $h();
function qx(r, e) {
  return {
    valid: po.validate(r, e),
    errors: po.errors
  };
}
function Vx(r, e = {}, a = {}) {
  if (Or(r, "$ref"))
    return Hu(r, e, a);
  if (Or(r, "dependencies")) {
    const n = Kx(r, e, a);
    return fr(n, e, a);
  } else
    return Or(r, "allOf") && Array.isArray(r.allOf) ? {
      ...r,
      allOf: r.allOf.map(
        (n) => fr(n, e, a)
      )
    } : r;
}
function fr(r, e = {}, a = {}) {
  if (!at(r))
    return {};
  let n = Vx(r, e, a);
  if ("allOf" in r)
    try {
      n = Ux({
        // TODO: Schema type not suitable
        ...n,
        allOf: n.allOf
      });
    } catch (s) {
      console.warn(`could not merge subschemas in allOf:
` + s);
      const { allOf: i, ...o } = n;
      return o;
    }
  return n.hasOwnProperty("additionalProperties") && n.additionalProperties !== !1 ? zx(
    n,
    e,
    a
  ) : n;
}
const kx = "__additional_property";
function zx(r, e = {}, a = {}) {
  return r = {
    ...r,
    properties: { ...r.properties }
  }, Object.keys(a).forEach((n) => {
    if (r.properties.hasOwnProperty(n))
      return;
    let t;
    r.additionalProperties.hasOwnProperty("$ref") ? t = fr(
      { $ref: r.additionalProperties.$ref },
      e,
      a
    ) : r.additionalProperties.hasOwnProperty("type") ? t = { ...r.additionalProperties } : t = { type: Wu(a[n]) }, r.properties[n] = t, r.properties[n][kx] = !0;
  }), r;
}
function Hu(r, e, a) {
  const n = Qu(r.$ref, e), { $ref: t, ...s } = r;
  return fr({ ...n, ...s }, e, a);
}
function Qu(r, e = {}) {
  const a = r;
  if (r.startsWith("#"))
    r = decodeURIComponent(r.substring(1));
  else
    throw new Error(`Could not find a definition for ${a}.`);
  const n = ta.get(e, r);
  if (n === void 0)
    throw new Error(`Could not find a definition for ${a}.`);
  return Or(n, "$ref") ? Qu(n.$ref, e) : n;
}
function Kx(r, e, a) {
  let { dependencies: n = {}, ...t } = r;
  return "oneOf" in t ? t = t.oneOf[go(a, t.oneOf, e)] : "anyOf" in t && (t = t.anyOf[go(a, t.anyOf, e)]), Ju(n, t, e, a);
}
function Ju(r, e, a, n) {
  for (const t in r) {
    if (n[t] === void 0 || e.properties && !(t in e.properties))
      continue;
    const {
      [t]: s,
      ...i
    } = r;
    return Array.isArray(s) ? e = Bx(e, s) : at(s) && (e = Gx(
      e,
      a,
      n,
      t,
      s
    )), Ju(
      i,
      e,
      a,
      n
    );
  }
  return e;
}
function Bx(r, e) {
  if (!e)
    return r;
  const a = Array.isArray(r.required) ? Array.from(/* @__PURE__ */ new Set([...r.required, ...e])) : e;
  return { ...r, required: a };
}
function Gx(r, e, a, n, t) {
  const { oneOf: s, ...i } = fr(
    t,
    e,
    a
  );
  if (r = $s(r, i), s === void 0)
    return r;
  if (!Array.isArray(s))
    throw new Error(`invalid: it is some ${typeof s} instead of an array`);
  const o = s.map(
    (l) => Or(l, "$ref") ? Hu(l, e, a) : l
  );
  return Hx(
    r,
    e,
    a,
    n,
    o
  );
}
function Hx(r, e, a, n, t) {
  const s = t.filter((u) => {
    if (!u.properties)
      return !1;
    const { [n]: d } = u.properties;
    if (d) {
      const p = {
        type: "object",
        properties: {
          [n]: d
        }
      }, { errors: f } = qx(p, a);
      return !f || f.length === 0;
    }
  });
  if (s.length !== 1)
    return console.warn(
      "ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"
    ), r;
  const i = s[0], {
    [n]: o,
    ...l
  } = i.properties, c = { ...i, properties: l };
  return $s(
    r,
    // retrieveSchema
    fr(c, e, a)
  );
}
function $s(r, e) {
  const a = Object.assign({}, r);
  return Object.keys(e).reduce((n, t) => {
    const s = r ? r[t] : {}, i = e[t];
    return r && Or(r, t) && at(i) ? n[t] = $s(s, i) : r && e && (mo(r) === "object" || mo(e) === "object") && t === "required" && Array.isArray(s) && Array.isArray(i) ? n[t] = jv(s, i) : n[t] = i, n;
  }, a);
}
function mo(r) {
  const { type: e } = r;
  if (!e && r.const)
    return Wu(r.const);
  if (!e && r.enum)
    return "string";
  if (!e && (r.properties || r.additionalProperties))
    return "object";
  const a = e;
  return a instanceof Array && a.length === 2 && a.includes("null") ? a.find((n) => n !== "null") : e;
}
const Wu = function(e) {
  if (Array.isArray(e))
    return "array";
  if (typeof e == "string")
    return "string";
  if (e == null)
    return "null";
  if (typeof e == "boolean")
    return "boolean";
  if (isNaN(e)) {
    if (typeof e == "object")
      return "object";
  } else
    return "number";
  return "string";
};
function go(r, e, a) {
  for (let n = 0; n < e.length; n++) {
    const t = e[n];
    if (t.properties) {
      const s = {
        anyOf: Object.keys(t.properties).map((o) => ({
          required: [o]
        }))
      };
      let i;
      if (t.anyOf) {
        const { ...o } = t;
        o.allOf ? o.allOf = o.allOf.slice() : o.allOf = [], o.allOf.push(s), i = o;
      } else
        i = Object.assign({}, t, s);
      if (delete i.required, a(i, r))
        return n;
    } else if (a(e[n], r))
      return n;
  }
  return 0;
}
const Qx = /* @__PURE__ */ er({
  name: "ObjectField",
  props: On,
  setup(r) {
    const e = Go(), a = (n, t) => {
      const s = at(r.value) ? r.value : {};
      t === void 0 ? delete s[n] : s[n] = t, r.onChange(s);
    };
    return () => {
      const {
        schema: n,
        rootSchema: t,
        value: s
      } = r, {
        SchemaItem: i
      } = e, o = n.properties || {}, l = at(s) ? s : {};
      return Object.keys(o).map((c, u) => $e(i, {
        schema: o[c],
        rootSchema: t,
        value: l[c],
        key: u,
        onChange: (d) => a(c, d)
      }, null));
    };
  }
});
var Yu = {}, Zu = {}, _s = {};
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.injectJssContext = t, r.default = r.defaultContextValue = void 0;
  var e = Wt, a = {
    classNamePrefix: "",
    disableStylesGeneration: !1
  };
  r.defaultContextValue = a;
  var n = Symbol();
  function t() {
    return (0, e.inject)(n, (0, e.ref)(a));
  }
  var s = n;
  r.default = s;
})(_s);
var Fe = {}, Jx = process.env.NODE_ENV === "production";
function me(r, e) {
  if (!Jx) {
    if (r)
      return;
    var a = "Warning: " + e;
    typeof console < "u" && console.warn(a);
    try {
      throw Error(a);
    } catch {
    }
  }
}
const Wx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: me
}, Symbol.toStringTag, { value: "Module" })), Xu = /* @__PURE__ */ Rn(Wx);
function ie() {
  return ie = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var a = arguments[e];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (r[n] = a[n]);
    }
    return r;
  }, ie.apply(this, arguments);
}
var yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
  return typeof r;
} : function(r) {
  return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
}, ht = (typeof window > "u" ? "undefined" : yo(window)) === "object" && (typeof document > "u" ? "undefined" : yo(document)) === "object" && document.nodeType === 9;
function nt(r) {
  "@babel/helpers - typeof";
  return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, nt(r);
}
function Yx(r, e) {
  if (nt(r) !== "object" || r === null)
    return r;
  var a = r[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(r, e || "default");
    if (nt(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Zx(r) {
  var e = Yx(r, "string");
  return nt(e) === "symbol" ? e : String(e);
}
function bo(r, e) {
  for (var a = 0; a < e.length; a++) {
    var n = e[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Zx(n.key), n);
  }
}
function Ss(r, e, a) {
  return e && bo(r.prototype, e), a && bo(r, a), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function hn(r, e) {
  return hn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, t) {
    return n.__proto__ = t, n;
  }, hn(r, e);
}
function ef(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, hn(r, e);
}
function Po(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Xx(r, e) {
  if (r == null)
    return {};
  var a = {}, n = Object.keys(r), t, s;
  for (s = 0; s < n.length; s++)
    t = n[s], !(e.indexOf(t) >= 0) && (a[t] = r[t]);
  return a;
}
var eI = {}.constructor;
function vn(r) {
  if (r == null || typeof r != "object")
    return r;
  if (Array.isArray(r))
    return r.map(vn);
  if (r.constructor !== eI)
    return r;
  var e = {};
  for (var a in r)
    e[a] = vn(r[a]);
  return e;
}
function vt(r, e, a) {
  r === void 0 && (r = "unnamed");
  var n = a.jss, t = vn(e), s = n.plugins.onCreateRule(r, t, a);
  return s || (r[0] === "@" && process.env.NODE_ENV !== "production" && me(!1, "[JSS] Unknown rule " + r), null);
}
var $o = function(e, a) {
  for (var n = "", t = 0; t < e.length && e[t] !== "!important"; t++)
    n && (n += a), n += e[t];
  return n;
}, Ye = function(e) {
  if (!Array.isArray(e))
    return e;
  var a = "";
  if (Array.isArray(e[0]))
    for (var n = 0; n < e.length && e[n] !== "!important"; n++)
      a && (a += ", "), a += $o(e[n], " ");
  else
    a = $o(e, ", ");
  return e[e.length - 1] === "!important" && (a += " !important"), a;
};
function zr(r) {
  return r && r.format === !1 ? {
    linebreak: "",
    space: ""
  } : {
    linebreak: `
`,
    space: " "
  };
}
function Yr(r, e) {
  for (var a = "", n = 0; n < e; n++)
    a += "  ";
  return a + r;
}
function st(r, e, a) {
  a === void 0 && (a = {});
  var n = "";
  if (!e)
    return n;
  var t = a, s = t.indent, i = s === void 0 ? 0 : s, o = e.fallbacks;
  a.format === !1 && (i = -1 / 0);
  var l = zr(a), c = l.linebreak, u = l.space;
  if (r && i++, o)
    if (Array.isArray(o))
      for (var d = 0; d < o.length; d++) {
        var p = o[d];
        for (var f in p) {
          var v = p[f];
          v != null && (n && (n += c), n += Yr(f + ":" + u + Ye(v) + ";", i));
        }
      }
    else
      for (var g in o) {
        var m = o[g];
        m != null && (n && (n += c), n += Yr(g + ":" + u + Ye(m) + ";", i));
      }
  for (var P in e) {
    var A = e[P];
    A != null && P !== "fallbacks" && (n && (n += c), n += Yr(P + ":" + u + Ye(A) + ";", i));
  }
  return !n && !a.allowEmpty || !r ? n : (i--, n && (n = "" + c + n + c), Yr("" + r + u + "{" + n, i) + Yr("}", i));
}
var rI = /([[\].#*$><+~=|^:(),"'`\s])/g, _o = typeof CSS < "u" && CSS.escape, Es = function(r) {
  return _o ? _o(r) : r.replace(rI, "\\$1");
}, rf = /* @__PURE__ */ function() {
  function r(a, n, t) {
    this.type = "style", this.isProcessed = !1;
    var s = t.sheet, i = t.Renderer;
    this.key = a, this.options = t, this.style = n, s ? this.renderer = s.renderer : i && (this.renderer = new i());
  }
  var e = r.prototype;
  return e.prop = function(n, t, s) {
    if (t === void 0)
      return this.style[n];
    var i = s ? s.force : !1;
    if (!i && this.style[n] === t)
      return this;
    var o = t;
    (!s || s.process !== !1) && (o = this.options.jss.plugins.onChangeValue(t, n, this));
    var l = o == null || o === !1, c = n in this.style;
    if (l && !c && !i)
      return this;
    var u = l && c;
    if (u ? delete this.style[n] : this.style[n] = o, this.renderable && this.renderer)
      return u ? this.renderer.removeProperty(this.renderable, n) : this.renderer.setProperty(this.renderable, n, o), this;
    var d = this.options.sheet;
    return d && d.attached && process.env.NODE_ENV !== "production" && me(!1, '[JSS] Rule is not linked. Missing sheet option "link: true".'), this;
  }, r;
}(), pn = /* @__PURE__ */ function(r) {
  ef(e, r);
  function e(n, t, s) {
    var i;
    i = r.call(this, n, t, s) || this;
    var o = s.selector, l = s.scoped, c = s.sheet, u = s.generateId;
    return o ? i.selectorText = o : l !== !1 && (i.id = u(Po(Po(i)), c), i.selectorText = "." + Es(i.id)), i;
  }
  var a = e.prototype;
  return a.applyTo = function(t) {
    var s = this.renderer;
    if (s) {
      var i = this.toJSON();
      for (var o in i)
        s.setProperty(t, o, i[o]);
    }
    return this;
  }, a.toJSON = function() {
    var t = {};
    for (var s in this.style) {
      var i = this.style[s];
      typeof i != "object" ? t[s] = i : Array.isArray(i) && (t[s] = Ye(i));
    }
    return t;
  }, a.toString = function(t) {
    var s = this.options.sheet, i = s ? s.options.link : !1, o = i ? ie({}, t, {
      allowEmpty: !0
    }) : t;
    return st(this.selectorText, this.style, o);
  }, Ss(e, [{
    key: "selector",
    set: function(t) {
      if (t !== this.selectorText) {
        this.selectorText = t;
        var s = this.renderer, i = this.renderable;
        if (!(!i || !s)) {
          var o = s.setSelector(i, t);
          o || s.replaceRule(i, this);
        }
      }
    },
    get: function() {
      return this.selectorText;
    }
  }]), e;
}(rf), tI = {
  onCreateRule: function(e, a, n) {
    return e[0] === "@" || n.parent && n.parent.type === "keyframes" ? null : new pn(e, a, n);
  }
}, La = {
  indent: 1,
  children: !0
}, aI = /@([\w-]+)/, nI = /* @__PURE__ */ function() {
  function r(a, n, t) {
    this.type = "conditional", this.isProcessed = !1, this.key = a;
    var s = a.match(aI);
    this.at = s ? s[1] : "unknown", this.query = t.name || "@" + this.at, this.options = t, this.rules = new pt(ie({}, t, {
      parent: this
    }));
    for (var i in n)
      this.rules.add(i, n[i]);
    this.rules.process();
  }
  var e = r.prototype;
  return e.getRule = function(n) {
    return this.rules.get(n);
  }, e.indexOf = function(n) {
    return this.rules.indexOf(n);
  }, e.addRule = function(n, t, s) {
    var i = this.rules.add(n, t, s);
    return i ? (this.options.jss.plugins.onProcessRule(i), i) : null;
  }, e.replaceRule = function(n, t, s) {
    var i = this.rules.replace(n, t, s);
    return i && this.options.jss.plugins.onProcessRule(i), i;
  }, e.toString = function(n) {
    n === void 0 && (n = La);
    var t = zr(n), s = t.linebreak;
    if (n.indent == null && (n.indent = La.indent), n.children == null && (n.children = La.children), n.children === !1)
      return this.query + " {}";
    var i = this.rules.toString(n);
    return i ? this.query + " {" + s + i + s + "}" : "";
  }, r;
}(), sI = /@container|@media|@supports\s+/, iI = {
  onCreateRule: function(e, a, n) {
    return sI.test(e) ? new nI(e, a, n) : null;
  }
}, Ua = {
  indent: 1,
  children: !0
}, oI = /@keyframes\s+([\w-]+)/, mn = /* @__PURE__ */ function() {
  function r(a, n, t) {
    this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
    var s = a.match(oI);
    s && s[1] ? this.name = s[1] : (this.name = "noname", process.env.NODE_ENV !== "production" && me(!1, "[JSS] Bad keyframes name " + a)), this.key = this.type + "-" + this.name, this.options = t;
    var i = t.scoped, o = t.sheet, l = t.generateId;
    this.id = i === !1 ? this.name : Es(l(this, o)), this.rules = new pt(ie({}, t, {
      parent: this
    }));
    for (var c in n)
      this.rules.add(c, n[c], ie({}, t, {
        parent: this
      }));
    this.rules.process();
  }
  var e = r.prototype;
  return e.toString = function(n) {
    n === void 0 && (n = Ua);
    var t = zr(n), s = t.linebreak;
    if (n.indent == null && (n.indent = Ua.indent), n.children == null && (n.children = Ua.children), n.children === !1)
      return this.at + " " + this.id + " {}";
    var i = this.rules.toString(n);
    return i && (i = "" + s + i + s), this.at + " " + this.id + " {" + i + "}";
  }, r;
}(), lI = /@keyframes\s+/, uI = /\$([\w-]+)/g, gn = function(e, a) {
  return typeof e == "string" ? e.replace(uI, function(n, t) {
    return t in a ? a[t] : (process.env.NODE_ENV !== "production" && me(!1, '[JSS] Referenced keyframes rule "' + t + '" is not defined.'), n);
  }) : e;
}, So = function(e, a, n) {
  var t = e[a], s = gn(t, n);
  s !== t && (e[a] = s);
}, fI = {
  onCreateRule: function(e, a, n) {
    return typeof e == "string" && lI.test(e) ? new mn(e, a, n) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function(e, a, n) {
    return a.type !== "style" || !n || ("animation-name" in e && So(e, "animation-name", n.keyframes), "animation" in e && So(e, "animation", n.keyframes)), e;
  },
  onChangeValue: function(e, a, n) {
    var t = n.options.sheet;
    if (!t)
      return e;
    switch (a) {
      case "animation":
        return gn(e, t.keyframes);
      case "animation-name":
        return gn(e, t.keyframes);
      default:
        return e;
    }
  }
}, cI = /* @__PURE__ */ function(r) {
  ef(e, r);
  function e() {
    return r.apply(this, arguments) || this;
  }
  var a = e.prototype;
  return a.toString = function(t) {
    var s = this.options.sheet, i = s ? s.options.link : !1, o = i ? ie({}, t, {
      allowEmpty: !0
    }) : t;
    return st(this.key, this.style, o);
  }, e;
}(rf), dI = {
  onCreateRule: function(e, a, n) {
    return n.parent && n.parent.type === "keyframes" ? new cI(e, a, n) : null;
  }
}, hI = /* @__PURE__ */ function() {
  function r(a, n, t) {
    this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = a, this.style = n, this.options = t;
  }
  var e = r.prototype;
  return e.toString = function(n) {
    var t = zr(n), s = t.linebreak;
    if (Array.isArray(this.style)) {
      for (var i = "", o = 0; o < this.style.length; o++)
        i += st(this.at, this.style[o]), this.style[o + 1] && (i += s);
      return i;
    }
    return st(this.at, this.style, n);
  }, r;
}(), vI = /@font-face/, pI = {
  onCreateRule: function(e, a, n) {
    return vI.test(e) ? new hI(e, a, n) : null;
  }
}, mI = /* @__PURE__ */ function() {
  function r(a, n, t) {
    this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = a, this.style = n, this.options = t;
  }
  var e = r.prototype;
  return e.toString = function(n) {
    return st(this.key, this.style, n);
  }, r;
}(), gI = {
  onCreateRule: function(e, a, n) {
    return e === "@viewport" || e === "@-ms-viewport" ? new mI(e, a, n) : null;
  }
}, yI = /* @__PURE__ */ function() {
  function r(a, n, t) {
    this.type = "simple", this.isProcessed = !1, this.key = a, this.value = n, this.options = t;
  }
  var e = r.prototype;
  return e.toString = function(n) {
    if (Array.isArray(this.value)) {
      for (var t = "", s = 0; s < this.value.length; s++)
        t += this.key + " " + this.value[s] + ";", this.value[s + 1] && (t += `
`);
      return t;
    }
    return this.key + " " + this.value + ";";
  }, r;
}(), bI = {
  "@charset": !0,
  "@import": !0,
  "@namespace": !0
}, PI = {
  onCreateRule: function(e, a, n) {
    return e in bI ? new yI(e, a, n) : null;
  }
}, Eo = [tI, iI, fI, dI, pI, gI, PI], $I = {
  process: !0
}, wo = {
  force: !0,
  process: !0
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */
}, pt = /* @__PURE__ */ function() {
  function r(a) {
    this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = a, this.classes = a.classes, this.keyframes = a.keyframes;
  }
  var e = r.prototype;
  return e.add = function(n, t, s) {
    var i = this.options, o = i.parent, l = i.sheet, c = i.jss, u = i.Renderer, d = i.generateId, p = i.scoped, f = ie({
      classes: this.classes,
      parent: o,
      sheet: l,
      jss: c,
      Renderer: u,
      generateId: d,
      scoped: p,
      name: n,
      keyframes: this.keyframes,
      selector: void 0
    }, s), v = n;
    n in this.raw && (v = n + "-d" + this.counter++), this.raw[v] = t, v in this.classes && (f.selector = "." + Es(this.classes[v]));
    var g = vt(v, t, f);
    if (!g)
      return null;
    this.register(g);
    var m = f.index === void 0 ? this.index.length : f.index;
    return this.index.splice(m, 0, g), g;
  }, e.replace = function(n, t, s) {
    var i = this.get(n), o = this.index.indexOf(i);
    i && this.remove(i);
    var l = s;
    return o !== -1 && (l = ie({}, s, {
      index: o
    })), this.add(n, t, l);
  }, e.get = function(n) {
    return this.map[n];
  }, e.remove = function(n) {
    this.unregister(n), delete this.raw[n.key], this.index.splice(this.index.indexOf(n), 1);
  }, e.indexOf = function(n) {
    return this.index.indexOf(n);
  }, e.process = function() {
    var n = this.options.jss.plugins;
    this.index.slice(0).forEach(n.onProcessRule, n);
  }, e.register = function(n) {
    this.map[n.key] = n, n instanceof pn ? (this.map[n.selector] = n, n.id && (this.classes[n.key] = n.id)) : n instanceof mn && this.keyframes && (this.keyframes[n.name] = n.id);
  }, e.unregister = function(n) {
    delete this.map[n.key], n instanceof pn ? (delete this.map[n.selector], delete this.classes[n.key]) : n instanceof mn && delete this.keyframes[n.name];
  }, e.update = function() {
    var n, t, s;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (n = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], s = arguments.length <= 2 ? void 0 : arguments[2]) : (t = arguments.length <= 0 ? void 0 : arguments[0], s = arguments.length <= 1 ? void 0 : arguments[1], n = null), n)
      this.updateOne(this.get(n), t, s);
    else
      for (var i = 0; i < this.index.length; i++)
        this.updateOne(this.index[i], t, s);
  }, e.updateOne = function(n, t, s) {
    s === void 0 && (s = $I);
    var i = this.options, o = i.jss.plugins, l = i.sheet;
    if (n.rules instanceof r) {
      n.rules.update(t, s);
      return;
    }
    var c = n.style;
    if (o.onUpdate(t, n, l, s), s.process && c && c !== n.style) {
      o.onProcessStyle(n.style, n, l);
      for (var u in n.style) {
        var d = n.style[u], p = c[u];
        d !== p && n.prop(u, d, wo);
      }
      for (var f in c) {
        var v = n.style[f], g = c[f];
        v == null && v !== g && n.prop(f, null, wo);
      }
    }
  }, e.toString = function(n) {
    for (var t = "", s = this.options.sheet, i = s ? s.options.link : !1, o = zr(n), l = o.linebreak, c = 0; c < this.index.length; c++) {
      var u = this.index[c], d = u.toString(n);
      !d && !i || (t && (t += l), t += d);
    }
    return t;
  }, r;
}(), tf = /* @__PURE__ */ function() {
  function r(a, n) {
    this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = ie({}, n, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    }), n.Renderer && (this.renderer = new n.Renderer(this)), this.rules = new pt(this.options);
    for (var t in a)
      this.rules.add(t, a[t]);
    this.rules.process();
  }
  var e = r.prototype;
  return e.attach = function() {
    return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this);
  }, e.detach = function() {
    return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this;
  }, e.addRule = function(n, t, s) {
    var i = this.queue;
    this.attached && !i && (this.queue = []);
    var o = this.rules.add(n, t, s);
    return o ? (this.options.jss.plugins.onProcessRule(o), this.attached ? (this.deployed && (i ? i.push(o) : (this.insertRule(o), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), o) : (this.deployed = !1, o)) : null;
  }, e.replaceRule = function(n, t, s) {
    var i = this.rules.get(n);
    if (!i)
      return this.addRule(n, t, s);
    var o = this.rules.replace(n, t, s);
    return o && this.options.jss.plugins.onProcessRule(o), this.attached ? (this.deployed && this.renderer && (o ? i.renderable && this.renderer.replaceRule(i.renderable, o) : this.renderer.deleteRule(i)), o) : (this.deployed = !1, o);
  }, e.insertRule = function(n) {
    this.renderer && this.renderer.insertRule(n);
  }, e.addRules = function(n, t) {
    var s = [];
    for (var i in n) {
      var o = this.addRule(i, n[i], t);
      o && s.push(o);
    }
    return s;
  }, e.getRule = function(n) {
    return this.rules.get(n);
  }, e.deleteRule = function(n) {
    var t = typeof n == "object" ? n : this.rules.get(n);
    return !t || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !t.renderable ? !1 : (this.rules.remove(t), this.attached && t.renderable && this.renderer ? this.renderer.deleteRule(t.renderable) : !0);
  }, e.indexOf = function(n) {
    return this.rules.indexOf(n);
  }, e.deploy = function() {
    return this.renderer && this.renderer.deploy(), this.deployed = !0, this;
  }, e.update = function() {
    var n;
    return (n = this.rules).update.apply(n, arguments), this;
  }, e.updateOne = function(n, t, s) {
    return this.rules.updateOne(n, t, s), this;
  }, e.toString = function(n) {
    return this.rules.toString(n);
  }, r;
}(), _I = /* @__PURE__ */ function() {
  function r() {
    this.plugins = {
      internal: [],
      external: []
    }, this.registry = {};
  }
  var e = r.prototype;
  return e.onCreateRule = function(n, t, s) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var o = this.registry.onCreateRule[i](n, t, s);
      if (o)
        return o;
    }
    return null;
  }, e.onProcessRule = function(n) {
    if (!n.isProcessed) {
      for (var t = n.options.sheet, s = 0; s < this.registry.onProcessRule.length; s++)
        this.registry.onProcessRule[s](n, t);
      n.style && this.onProcessStyle(n.style, n, t), n.isProcessed = !0;
    }
  }, e.onProcessStyle = function(n, t, s) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++)
      t.style = this.registry.onProcessStyle[i](t.style, t, s);
  }, e.onProcessSheet = function(n) {
    for (var t = 0; t < this.registry.onProcessSheet.length; t++)
      this.registry.onProcessSheet[t](n);
  }, e.onUpdate = function(n, t, s, i) {
    for (var o = 0; o < this.registry.onUpdate.length; o++)
      this.registry.onUpdate[o](n, t, s, i);
  }, e.onChangeValue = function(n, t, s) {
    for (var i = n, o = 0; o < this.registry.onChangeValue.length; o++)
      i = this.registry.onChangeValue[o](i, t, s);
    return i;
  }, e.use = function(n, t) {
    t === void 0 && (t = {
      queue: "external"
    });
    var s = this.plugins[t.queue];
    s.indexOf(n) === -1 && (s.push(n), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(i, o) {
      for (var l in o)
        l in i ? i[l].push(o[l]) : process.env.NODE_ENV !== "production" && me(!1, '[JSS] Unknown hook "' + l + '".');
      return i;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    }));
  }, r;
}(), af = /* @__PURE__ */ function() {
  function r() {
    this.registry = [];
  }
  var e = r.prototype;
  return e.add = function(n) {
    var t = this.registry, s = n.options.index;
    if (t.indexOf(n) === -1) {
      if (t.length === 0 || s >= this.index) {
        t.push(n);
        return;
      }
      for (var i = 0; i < t.length; i++)
        if (t[i].options.index > s) {
          t.splice(i, 0, n);
          return;
        }
    }
  }, e.reset = function() {
    this.registry = [];
  }, e.remove = function(n) {
    var t = this.registry.indexOf(n);
    this.registry.splice(t, 1);
  }, e.toString = function(n) {
    for (var t = n === void 0 ? {} : n, s = t.attached, i = Xx(t, ["attached"]), o = zr(i), l = o.linebreak, c = "", u = 0; u < this.registry.length; u++) {
      var d = this.registry[u];
      s != null && d.attached !== s || (c && (c += l), c += d.toString(i));
    }
    return c;
  }, Ss(r, [{
    key: "index",
    /**
     * Current highest index number.
     */
    get: function() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]), r;
}(), Ar = new af(), yn = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(), bn = "2f1acc6c3a606b082e5eef5e54414ffb";
yn[bn] == null && (yn[bn] = 0);
var Oo = yn[bn]++, SI = 1e10, Pn = function(e) {
  e === void 0 && (e = {});
  var a = 0, n = function(s, i) {
    a += 1, a > SI && process.env.NODE_ENV !== "production" && me(!1, "[JSS] You might have a memory leak. Rule counter is at " + a + ".");
    var o = "", l = "";
    return i && (i.options.classNamePrefix && (l = i.options.classNamePrefix), i.options.jss.id != null && (o = String(i.options.jss.id))), e.minify ? "" + (l || "c") + Oo + o + a : l + s.key + "-" + Oo + (o ? "-" + o : "") + "-" + a;
  };
  return n;
}, nf = function(e) {
  var a;
  return function() {
    return a || (a = e()), a;
  };
}, EI = function(e, a) {
  try {
    return e.attributeStyleMap ? e.attributeStyleMap.get(a) : e.style.getPropertyValue(a);
  } catch {
    return "";
  }
}, wI = function(e, a, n) {
  try {
    var t = n;
    if (Array.isArray(n) && (t = Ye(n)), e.attributeStyleMap)
      e.attributeStyleMap.set(a, t);
    else {
      var s = t ? t.indexOf("!important") : -1, i = s > -1 ? t.substr(0, s - 1) : t;
      e.style.setProperty(a, i, s > -1 ? "important" : "");
    }
  } catch {
    return !1;
  }
  return !0;
}, OI = function(e, a) {
  try {
    e.attributeStyleMap ? e.attributeStyleMap.delete(a) : e.style.removeProperty(a);
  } catch (n) {
    process.env.NODE_ENV !== "production" && me(!1, '[JSS] DOMException "' + n.message + '" was thrown. Tried to remove property "' + a + '".');
  }
}, AI = function(e, a) {
  return e.selectorText = a, e.selectorText === a;
}, sf = nf(function() {
  return document.querySelector("head");
});
function RI(r, e) {
  for (var a = 0; a < r.length; a++) {
    var n = r[a];
    if (n.attached && n.options.index > e.index && n.options.insertionPoint === e.insertionPoint)
      return n;
  }
  return null;
}
function xI(r, e) {
  for (var a = r.length - 1; a >= 0; a--) {
    var n = r[a];
    if (n.attached && n.options.insertionPoint === e.insertionPoint)
      return n;
  }
  return null;
}
function II(r) {
  for (var e = sf(), a = 0; a < e.childNodes.length; a++) {
    var n = e.childNodes[a];
    if (n.nodeType === 8 && n.nodeValue.trim() === r)
      return n;
  }
  return null;
}
function CI(r) {
  var e = Ar.registry;
  if (e.length > 0) {
    var a = RI(e, r);
    if (a && a.renderer)
      return {
        parent: a.renderer.element.parentNode,
        node: a.renderer.element
      };
    if (a = xI(e, r), a && a.renderer)
      return {
        parent: a.renderer.element.parentNode,
        node: a.renderer.element.nextSibling
      };
  }
  var n = r.insertionPoint;
  if (n && typeof n == "string") {
    var t = II(n);
    if (t)
      return {
        parent: t.parentNode,
        node: t.nextSibling
      };
    process.env.NODE_ENV !== "production" && me(!1, '[JSS] Insertion point "' + n + '" not found.');
  }
  return !1;
}
function DI(r, e) {
  var a = e.insertionPoint, n = CI(e);
  if (n !== !1 && n.parent) {
    n.parent.insertBefore(r, n.node);
    return;
  }
  if (a && typeof a.nodeType == "number") {
    var t = a, s = t.parentNode;
    s ? s.insertBefore(r, t.nextSibling) : process.env.NODE_ENV !== "production" && me(!1, "[JSS] Insertion point is not in the DOM.");
    return;
  }
  sf().appendChild(r);
}
var jI = nf(function() {
  var r = document.querySelector('meta[property="csp-nonce"]');
  return r ? r.getAttribute("content") : null;
}), Ao = function(e, a, n) {
  try {
    "insertRule" in e ? e.insertRule(a, n) : "appendRule" in e && e.appendRule(a);
  } catch (t) {
    return process.env.NODE_ENV !== "production" && me(!1, "[JSS] " + t.message), !1;
  }
  return e.cssRules[n];
}, Ro = function(e, a) {
  var n = e.cssRules.length;
  return a === void 0 || a > n ? n : a;
}, TI = function() {
  var e = document.createElement("style");
  return e.textContent = `
`, e;
}, FI = /* @__PURE__ */ function() {
  function r(a) {
    this.getPropertyValue = EI, this.setProperty = wI, this.removeProperty = OI, this.setSelector = AI, this.hasInsertedRules = !1, this.cssRules = [], a && Ar.add(a), this.sheet = a;
    var n = this.sheet ? this.sheet.options : {}, t = n.media, s = n.meta, i = n.element;
    this.element = i || TI(), this.element.setAttribute("data-jss", ""), t && this.element.setAttribute("media", t), s && this.element.setAttribute("data-meta", s);
    var o = jI();
    o && this.element.setAttribute("nonce", o);
  }
  var e = r.prototype;
  return e.attach = function() {
    if (!(this.element.parentNode || !this.sheet)) {
      DI(this.element, this.sheet.options);
      var n = !!(this.sheet && this.sheet.deployed);
      this.hasInsertedRules && n && (this.hasInsertedRules = !1, this.deploy());
    }
  }, e.detach = function() {
    if (this.sheet) {
      var n = this.element.parentNode;
      n && n.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = `
`);
    }
  }, e.deploy = function() {
    var n = this.sheet;
    if (n) {
      if (n.options.link) {
        this.insertRules(n.rules);
        return;
      }
      this.element.textContent = `
` + n.toString() + `
`;
    }
  }, e.insertRules = function(n, t) {
    for (var s = 0; s < n.index.length; s++)
      this.insertRule(n.index[s], s, t);
  }, e.insertRule = function(n, t, s) {
    if (s === void 0 && (s = this.element.sheet), n.rules) {
      var i = n, o = s;
      if (n.type === "conditional" || n.type === "keyframes") {
        var l = Ro(s, t);
        if (o = Ao(s, i.toString({
          children: !1
        }), l), o === !1)
          return !1;
        this.refCssRule(n, l, o);
      }
      return this.insertRules(i.rules, o), o;
    }
    var c = n.toString();
    if (!c)
      return !1;
    var u = Ro(s, t), d = Ao(s, c, u);
    return d === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(n, u, d), d);
  }, e.refCssRule = function(n, t, s) {
    n.renderable = s, n.options.parent instanceof tf && this.cssRules.splice(t, 0, s);
  }, e.deleteRule = function(n) {
    var t = this.element.sheet, s = this.indexOf(n);
    return s === -1 ? !1 : (t.deleteRule(s), this.cssRules.splice(s, 1), !0);
  }, e.indexOf = function(n) {
    return this.cssRules.indexOf(n);
  }, e.replaceRule = function(n, t) {
    var s = this.indexOf(n);
    return s === -1 ? !1 : (this.element.sheet.deleteRule(s), this.cssRules.splice(s, 1), this.insertRule(t, s));
  }, e.getRules = function() {
    return this.element.sheet.cssRules;
  }, r;
}(), NI = 0, MI = /* @__PURE__ */ function() {
  function r(a) {
    this.id = NI++, this.version = "10.10.0", this.plugins = new _I(), this.options = {
      id: {
        minify: !1
      },
      createGenerateId: Pn,
      Renderer: ht ? FI : null,
      plugins: []
    }, this.generateId = Pn({
      minify: !1
    });
    for (var n = 0; n < Eo.length; n++)
      this.plugins.use(Eo[n], {
        queue: "internal"
      });
    this.setup(a);
  }
  var e = r.prototype;
  return e.setup = function(n) {
    return n === void 0 && (n = {}), n.createGenerateId && (this.options.createGenerateId = n.createGenerateId), n.id && (this.options.id = ie({}, this.options.id, n.id)), (n.createGenerateId || n.id) && (this.generateId = this.options.createGenerateId(this.options.id)), n.insertionPoint != null && (this.options.insertionPoint = n.insertionPoint), "Renderer" in n && (this.options.Renderer = n.Renderer), n.plugins && this.use.apply(this, n.plugins), this;
  }, e.createStyleSheet = function(n, t) {
    t === void 0 && (t = {});
    var s = t, i = s.index;
    typeof i != "number" && (i = Ar.index === 0 ? 0 : Ar.index + 1);
    var o = new tf(n, ie({}, t, {
      jss: this,
      generateId: t.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: i
    }));
    return this.plugins.onProcessSheet(o), o;
  }, e.removeStyleSheet = function(n) {
    return n.detach(), Ar.remove(n), this;
  }, e.createRule = function(n, t, s) {
    if (t === void 0 && (t = {}), s === void 0 && (s = {}), typeof n == "object")
      return this.createRule(void 0, n, t);
    var i = ie({}, s, {
      name: n,
      jss: this,
      Renderer: this.options.Renderer
    });
    i.generateId || (i.generateId = this.generateId), i.classes || (i.classes = {}), i.keyframes || (i.keyframes = {});
    var o = vt(n, t, i);
    return o && this.plugins.onProcessRule(o), o;
  }, e.use = function() {
    for (var n = this, t = arguments.length, s = new Array(t), i = 0; i < t; i++)
      s[i] = arguments[i];
    return s.forEach(function(o) {
      n.plugins.use(o);
    }), this;
  }, r;
}(), of = function(e) {
  return new MI(e);
}, LI = /* @__PURE__ */ function() {
  function r() {
    this.length = 0, this.sheets = /* @__PURE__ */ new WeakMap();
  }
  var e = r.prototype;
  return e.get = function(n) {
    var t = this.sheets.get(n);
    return t && t.sheet;
  }, e.add = function(n, t) {
    this.sheets.has(n) || (this.length++, this.sheets.set(n, {
      sheet: t,
      refs: 0
    }));
  }, e.manage = function(n) {
    var t = this.sheets.get(n);
    if (t)
      return t.refs === 0 && t.sheet.attach(), t.refs++, t.sheet;
    me(!1, "[JSS] SheetsManager: can't find sheet to manage");
  }, e.unmanage = function(n) {
    var t = this.sheets.get(n);
    t ? t.refs > 0 && (t.refs--, t.refs === 0 && t.sheet.detach()) : me(!1, "SheetsManager: can't find sheet to unmanage");
  }, Ss(r, [{
    key: "size",
    get: function() {
      return this.length;
    }
  }]), r;
}(), $a = typeof CSS == "object" && CSS != null && "number" in CSS;
function lf(r) {
  var e = null;
  for (var a in r) {
    var n = r[a], t = typeof n;
    if (t === "function")
      e || (e = {}), e[a] = n;
    else if (t === "object" && n !== null && !Array.isArray(n)) {
      var s = lf(n);
      s && (e || (e = {}), e[a] = s);
    }
  }
  return e;
}
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
var UI = of();
const qI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RuleList: pt,
  SheetsManager: LI,
  SheetsRegistry: af,
  create: of,
  createGenerateId: Pn,
  createRule: vt,
  default: UI,
  getDynamicStyles: lf,
  hasCSSTOMSupport: $a,
  sheets: Ar,
  toCssValue: Ye
}, Symbol.toStringTag, { value: "Module" })), mt = /* @__PURE__ */ Rn(qI);
var ze = {};
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.unmanageSheet = ze.manageSheet = ze.getManager = void 0;
var xo = mt, Io = /* @__PURE__ */ new Map(), ws = function(e, a) {
  if (e.managers)
    return e.managers[a] || (e.managers[a] = new xo.SheetsManager()), e.managers[a];
  var n = Io.get(a);
  return n || (n = new xo.SheetsManager(), Io.set(a, n)), n;
};
ze.getManager = ws;
var VI = function(e) {
  var a = e.sheet, n = e.context, t = e.index, s = e.theme;
  if (a) {
    var i = ws(n, t);
    i.manage(s), n.registry && n.registry.add(a);
  }
};
ze.manageSheet = VI;
var kI = function(e) {
  if (e.sheet) {
    var a = ws(e.context, e.index);
    a.unmanage(e.theme);
  }
};
ze.unmanageSheet = kI;
var Os = {}, uf = Date.now(), qa = "fnValues" + uf, Va = "fnStyle" + ++uf, zI = function() {
  return {
    onCreateRule: function(a, n, t) {
      if (typeof n != "function")
        return null;
      var s = vt(a, {}, t);
      return s[Va] = n, s;
    },
    onProcessStyle: function(a, n) {
      if (qa in n || Va in n)
        return a;
      var t = {};
      for (var s in a) {
        var i = a[s];
        typeof i == "function" && (delete a[s], t[s] = i);
      }
      return n[qa] = t, a;
    },
    onUpdate: function(a, n, t, s) {
      var i = n, o = i[Va];
      if (o && (i.style = o(a) || {}, process.env.NODE_ENV === "development")) {
        for (var l in i.style)
          if (typeof i.style[l] == "function") {
            process.env.NODE_ENV !== "production" && me(!1, "[JSS] Function values inside function rules are not supported.");
            break;
          }
      }
      var c = i[qa];
      if (c)
        for (var u in c)
          i.prop(u, c[u](a), s);
    }
  };
};
const KI = zI;
function BI(r) {
  var e, a = r.Symbol;
  return typeof a == "function" ? a.observable ? e = a.observable : (e = a("observable"), a.observable = e) : e = "@@observable", e;
}
var Sr;
typeof self < "u" ? Sr = self : typeof window < "u" ? Sr = window : typeof global < "u" ? Sr = global : typeof module < "u" ? Sr = module : Sr = Function("return this")();
var Co = BI(Sr), Do = function(e) {
  return e && e[Co] && e === e[Co]();
}, GI = function(e) {
  return {
    onCreateRule: function(n, t, s) {
      if (!Do(t))
        return null;
      var i = t, o = vt(n, {}, s);
      return i.subscribe(function(l) {
        for (var c in l)
          o.prop(c, l[c], e);
      }), o;
    },
    onProcessRule: function(n) {
      if (!(n && n.type !== "style")) {
        var t = n, s = t.style, i = function(u) {
          var d = s[u];
          if (!Do(d))
            return "continue";
          delete s[u], d.subscribe({
            next: function(f) {
              t.prop(u, f, e);
            }
          });
        };
        for (var o in s)
          var l = i(o);
      }
    }
  };
};
const HI = GI;
var QI = /;\n/, JI = function(e) {
  for (var a = {}, n = e.split(QI), t = 0; t < n.length; t++) {
    var s = (n[t] || "").trim();
    if (s) {
      var i = s.indexOf(":");
      if (i === -1) {
        process.env.NODE_ENV !== "production" && me(!1, '[JSS] Malformed CSS string "' + s + '"');
        continue;
      }
      var o = s.substr(0, i).trim(), l = s.substr(i + 1).trim();
      a[o] = l;
    }
  }
  return a;
}, WI = function(e) {
  typeof e.style == "string" && (e.style = JI(e.style));
};
function YI() {
  return {
    onProcessRule: WI
  };
}
var Ze = "@global", $n = "@global ", ZI = /* @__PURE__ */ function() {
  function r(a, n, t) {
    this.type = "global", this.at = Ze, this.isProcessed = !1, this.key = a, this.options = t, this.rules = new pt(ie({}, t, {
      parent: this
    }));
    for (var s in n)
      this.rules.add(s, n[s]);
    this.rules.process();
  }
  var e = r.prototype;
  return e.getRule = function(n) {
    return this.rules.get(n);
  }, e.addRule = function(n, t, s) {
    var i = this.rules.add(n, t, s);
    return i && this.options.jss.plugins.onProcessRule(i), i;
  }, e.replaceRule = function(n, t, s) {
    var i = this.rules.replace(n, t, s);
    return i && this.options.jss.plugins.onProcessRule(i), i;
  }, e.indexOf = function(n) {
    return this.rules.indexOf(n);
  }, e.toString = function(n) {
    return this.rules.toString(n);
  }, r;
}(), XI = /* @__PURE__ */ function() {
  function r(a, n, t) {
    this.type = "global", this.at = Ze, this.isProcessed = !1, this.key = a, this.options = t;
    var s = a.substr($n.length);
    this.rule = t.jss.createRule(s, n, ie({}, t, {
      parent: this
    }));
  }
  var e = r.prototype;
  return e.toString = function(n) {
    return this.rule ? this.rule.toString(n) : "";
  }, r;
}(), eC = /\s*,\s*/g;
function ff(r, e) {
  for (var a = r.split(eC), n = "", t = 0; t < a.length; t++)
    n += e + " " + a[t].trim(), a[t + 1] && (n += ", ");
  return n;
}
function rC(r, e) {
  var a = r.options, n = r.style, t = n ? n[Ze] : null;
  if (t) {
    for (var s in t)
      e.addRule(s, t[s], ie({}, a, {
        selector: ff(s, r.selector)
      }));
    delete n[Ze];
  }
}
function tC(r, e) {
  var a = r.options, n = r.style;
  for (var t in n)
    if (!(t[0] !== "@" || t.substr(0, Ze.length) !== Ze)) {
      var s = ff(t.substr(Ze.length), r.selector);
      e.addRule(s, n[t], ie({}, a, {
        selector: s
      })), delete n[t];
    }
}
function aC() {
  function r(a, n, t) {
    if (!a)
      return null;
    if (a === Ze)
      return new ZI(a, n, t);
    if (a[0] === "@" && a.substr(0, $n.length) === $n)
      return new XI(a, n, t);
    var s = t.parent;
    return s && (s.type === "global" || s.options.parent && s.options.parent.type === "global") && (t.scoped = !1), !t.selector && t.scoped === !1 && (t.selector = a), null;
  }
  function e(a, n) {
    a.type !== "style" || !n || (rC(a, n), tC(a, n));
  }
  return {
    onCreateRule: r,
    onProcessRule: e
  };
}
var Ft = function(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}, ka = "extendCurrValue" + Date.now();
function nC(r, e, a, n) {
  var t = typeof r.extend;
  if (t === "string") {
    if (!a)
      return;
    var s = a.getRule(r.extend);
    if (!s)
      return;
    if (s === e) {
      process.env.NODE_ENV !== "production" && me(!1, `[JSS] A rule tries to extend itself 
` + e.toString());
      return;
    }
    var i = s.options.parent;
    if (i) {
      var o = i.rules.raw[r.extend];
      or(o, e, a, n);
    }
    return;
  }
  if (Array.isArray(r.extend)) {
    for (var l = 0; l < r.extend.length; l++) {
      var c = r.extend[l], u = typeof c == "string" ? ie({}, r, {
        extend: c
      }) : r.extend[l];
      or(u, e, a, n);
    }
    return;
  }
  for (var d in r.extend) {
    if (d === "extend") {
      or(r.extend.extend, e, a, n);
      continue;
    }
    if (Ft(r.extend[d])) {
      d in n || (n[d] = {}), or(r.extend[d], e, a, n[d]);
      continue;
    }
    n[d] = r.extend[d];
  }
}
function sC(r, e, a, n) {
  for (var t in r)
    if (t !== "extend") {
      if (Ft(n[t]) && Ft(r[t])) {
        or(r[t], e, a, n[t]);
        continue;
      }
      if (Ft(r[t])) {
        n[t] = or(r[t], e, a);
        continue;
      }
      n[t] = r[t];
    }
}
function or(r, e, a, n) {
  return n === void 0 && (n = {}), nC(r, e, a, n), sC(r, e, a, n), n;
}
function iC() {
  function r(a, n, t) {
    return "extend" in a ? or(a, n, t) : a;
  }
  function e(a, n, t) {
    if (n !== "extend")
      return a;
    if (a == null || a === !1) {
      for (var s in t[ka])
        t.prop(s, null);
      return t[ka] = null, null;
    }
    if (typeof a == "object") {
      for (var i in a)
        t.prop(i, a[i]);
      t[ka] = a;
    }
    return null;
  }
  return {
    onProcessStyle: r,
    onChangeValue: e
  };
}
var jo = /\s*,\s*/g, oC = /&/g, lC = /\$([\w-]+)/g;
function uC() {
  function r(t, s) {
    return function(i, o) {
      var l = t.getRule(o) || s && s.getRule(o);
      return l ? l.selector : (process.env.NODE_ENV !== "production" && me(!1, '[JSS] Could not find the referenced rule "' + o + '" in "' + (t.options.meta || t.toString()) + '".'), o);
    };
  }
  function e(t, s) {
    for (var i = s.split(jo), o = t.split(jo), l = "", c = 0; c < i.length; c++)
      for (var u = i[c], d = 0; d < o.length; d++) {
        var p = o[d];
        l && (l += ", "), l += p.indexOf("&") !== -1 ? p.replace(oC, u) : u + " " + p;
      }
    return l;
  }
  function a(t, s, i) {
    if (i)
      return ie({}, i, {
        index: i.index + 1
      });
    var o = t.options.nestingLevel;
    o = o === void 0 ? 1 : o + 1;
    var l = ie({}, t.options, {
      nestingLevel: o,
      index: s.indexOf(t) + 1
      // We don't need the parent name to be set options for chlid.
    });
    return delete l.name, l;
  }
  function n(t, s, i) {
    if (s.type !== "style")
      return t;
    var o = s, l = o.options.parent, c, u;
    for (var d in t) {
      var p = d.indexOf("&") !== -1, f = d[0] === "@";
      if (!(!p && !f)) {
        if (c = a(o, l, c), p) {
          var v = e(d, o.selector);
          u || (u = r(l, i)), v = v.replace(lC, u);
          var g = o.key + "-" + d;
          "replaceRule" in l ? l.replaceRule(g, t[d], ie({}, c, {
            selector: v
          })) : l.addRule(g, t[d], ie({}, c, {
            selector: v
          }));
        } else
          f && l.addRule(d, {}, c).addRule(o.key, t[d], {
            selector: o.selector
          });
        delete t[d];
      }
    }
    return t;
  }
  return {
    onProcessStyle: n
  };
}
function _n(r, e) {
  if (!e)
    return !0;
  if (Array.isArray(e)) {
    for (var a = 0; a < e.length; a++) {
      var n = _n(r, e[a]);
      if (!n)
        return !1;
    }
    return !0;
  }
  if (e.indexOf(" ") > -1)
    return _n(r, e.split(" "));
  var t = r.options.parent;
  if (e[0] === "$") {
    var s = t.getRule(e.substr(1));
    return s ? s === r ? (process.env.NODE_ENV !== "production" && me(!1, `[JSS] Cyclic composition detected. 
` + r.toString()), !1) : (t.classes[r.key] += " " + t.classes[s.key], !0) : (process.env.NODE_ENV !== "production" && me(!1, `[JSS] Referenced rule is not defined. 
` + r.toString()), !1);
  }
  return t.classes[r.key] += " " + e, !0;
}
function fC() {
  function r(e, a) {
    return "composes" in e && (_n(a, e.composes), delete e.composes), e;
  }
  return {
    onProcessStyle: r
  };
}
var cC = /[A-Z]/g, dC = /^ms-/, za = {};
function hC(r) {
  return "-" + r.toLowerCase();
}
function cf(r) {
  if (za.hasOwnProperty(r))
    return za[r];
  var e = r.replace(cC, hC);
  return za[r] = dC.test(e) ? "-" + e : e;
}
function Jt(r) {
  var e = {};
  for (var a in r) {
    var n = a.indexOf("--") === 0 ? a : cf(a);
    e[n] = r[a];
  }
  return r.fallbacks && (Array.isArray(r.fallbacks) ? e.fallbacks = r.fallbacks.map(Jt) : e.fallbacks = Jt(r.fallbacks)), e;
}
function vC() {
  function r(a) {
    if (Array.isArray(a)) {
      for (var n = 0; n < a.length; n++)
        a[n] = Jt(a[n]);
      return a;
    }
    return Jt(a);
  }
  function e(a, n, t) {
    if (n.indexOf("--") === 0)
      return a;
    var s = cf(n);
    return n === s ? a : (t.prop(s, a), null);
  }
  return {
    onProcessStyle: r,
    onChangeValue: e
  };
}
var O = $a && CSS ? CSS.px : "px", It = $a && CSS ? CSS.ms : "ms", Pr = $a && CSS ? CSS.percent : "%", pC = {
  // Animation properties
  "animation-delay": It,
  "animation-duration": It,
  // Background properties
  "background-position": O,
  "background-position-x": O,
  "background-position-y": O,
  "background-size": O,
  // Border Properties
  border: O,
  "border-bottom": O,
  "border-bottom-left-radius": O,
  "border-bottom-right-radius": O,
  "border-bottom-width": O,
  "border-left": O,
  "border-left-width": O,
  "border-radius": O,
  "border-right": O,
  "border-right-width": O,
  "border-top": O,
  "border-top-left-radius": O,
  "border-top-right-radius": O,
  "border-top-width": O,
  "border-width": O,
  "border-block": O,
  "border-block-end": O,
  "border-block-end-width": O,
  "border-block-start": O,
  "border-block-start-width": O,
  "border-block-width": O,
  "border-inline": O,
  "border-inline-end": O,
  "border-inline-end-width": O,
  "border-inline-start": O,
  "border-inline-start-width": O,
  "border-inline-width": O,
  "border-start-start-radius": O,
  "border-start-end-radius": O,
  "border-end-start-radius": O,
  "border-end-end-radius": O,
  // Margin properties
  margin: O,
  "margin-bottom": O,
  "margin-left": O,
  "margin-right": O,
  "margin-top": O,
  "margin-block": O,
  "margin-block-end": O,
  "margin-block-start": O,
  "margin-inline": O,
  "margin-inline-end": O,
  "margin-inline-start": O,
  // Padding properties
  padding: O,
  "padding-bottom": O,
  "padding-left": O,
  "padding-right": O,
  "padding-top": O,
  "padding-block": O,
  "padding-block-end": O,
  "padding-block-start": O,
  "padding-inline": O,
  "padding-inline-end": O,
  "padding-inline-start": O,
  // Mask properties
  "mask-position-x": O,
  "mask-position-y": O,
  "mask-size": O,
  // Width and height properties
  height: O,
  width: O,
  "min-height": O,
  "max-height": O,
  "min-width": O,
  "max-width": O,
  // Position properties
  bottom: O,
  left: O,
  top: O,
  right: O,
  inset: O,
  "inset-block": O,
  "inset-block-end": O,
  "inset-block-start": O,
  "inset-inline": O,
  "inset-inline-end": O,
  "inset-inline-start": O,
  // Shadow properties
  "box-shadow": O,
  "text-shadow": O,
  // Column properties
  "column-gap": O,
  "column-rule": O,
  "column-rule-width": O,
  "column-width": O,
  // Font and text properties
  "font-size": O,
  "font-size-delta": O,
  "letter-spacing": O,
  "text-decoration-thickness": O,
  "text-indent": O,
  "text-stroke": O,
  "text-stroke-width": O,
  "word-spacing": O,
  // Motion properties
  motion: O,
  "motion-offset": O,
  // Outline properties
  outline: O,
  "outline-offset": O,
  "outline-width": O,
  // Perspective properties
  perspective: O,
  "perspective-origin-x": Pr,
  "perspective-origin-y": Pr,
  // Transform properties
  "transform-origin": Pr,
  "transform-origin-x": Pr,
  "transform-origin-y": Pr,
  "transform-origin-z": Pr,
  // Transition properties
  "transition-delay": It,
  "transition-duration": It,
  // Alignment properties
  "vertical-align": O,
  "flex-basis": O,
  // Some random properties
  "shape-margin": O,
  size: O,
  gap: O,
  // Grid properties
  grid: O,
  "grid-gap": O,
  "row-gap": O,
  "grid-row-gap": O,
  "grid-column-gap": O,
  "grid-template-rows": O,
  "grid-template-columns": O,
  "grid-auto-rows": O,
  "grid-auto-columns": O,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  "box-shadow-x": O,
  "box-shadow-y": O,
  "box-shadow-blur": O,
  "box-shadow-spread": O,
  "font-line-height": O,
  "text-shadow-x": O,
  "text-shadow-y": O,
  "text-shadow-blur": O
};
function df(r) {
  var e = /(-[a-z])/g, a = function(i) {
    return i[1].toUpperCase();
  }, n = {};
  for (var t in r)
    n[t] = r[t], n[t.replace(e, a)] = r[t];
  return n;
}
var mC = df(pC);
function rt(r, e, a) {
  if (e == null)
    return e;
  if (Array.isArray(e))
    for (var n = 0; n < e.length; n++)
      e[n] = rt(r, e[n], a);
  else if (typeof e == "object")
    if (r === "fallbacks")
      for (var t in e)
        e[t] = rt(t, e[t], a);
    else
      for (var s in e)
        e[s] = rt(r + "-" + s, e[s], a);
  else if (typeof e == "number" && isNaN(e) === !1) {
    var i = a[r] || mC[r];
    return i && !(e === 0 && i === O) ? typeof i == "function" ? i(e).toString() : "" + e + i : e.toString();
  }
  return e;
}
function gC(r) {
  r === void 0 && (r = {});
  var e = df(r);
  function a(t, s) {
    if (s.type !== "style")
      return t;
    for (var i in t)
      t[i] = rt(i, t[i], e);
    return t;
  }
  function n(t, s) {
    return rt(s, t, e);
  }
  return {
    onProcessStyle: a,
    onChangeValue: n
  };
}
var yC = {
  "background-size": !0,
  "background-position": !0,
  border: !0,
  "border-bottom": !0,
  "border-left": !0,
  "border-top": !0,
  "border-right": !0,
  "border-radius": !0,
  "border-image": !0,
  "border-width": !0,
  "border-style": !0,
  "border-color": !0,
  "box-shadow": !0,
  flex: !0,
  margin: !0,
  padding: !0,
  outline: !0,
  "transform-origin": !0,
  transform: !0,
  transition: !0
  /**
   * A scheme for converting arrays to regular styles inside of objects.
   * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
   */
}, bC = {
  position: !0,
  // background-position
  size: !0
  // background-size
  /**
   * A scheme for parsing and building correct styles from passed objects.
   */
}, Ct = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  background: {
    attachment: null,
    color: null,
    image: null,
    position: null,
    repeat: null
  },
  border: {
    width: null,
    style: null,
    color: null
  },
  "border-top": {
    width: null,
    style: null,
    color: null
  },
  "border-right": {
    width: null,
    style: null,
    color: null
  },
  "border-bottom": {
    width: null,
    style: null,
    color: null
  },
  "border-left": {
    width: null,
    style: null,
    color: null
  },
  outline: {
    width: null,
    style: null,
    color: null
  },
  "list-style": {
    type: null,
    position: null,
    image: null
  },
  transition: {
    property: null,
    duration: null,
    "timing-function": null,
    timingFunction: null,
    // Needed for avoiding comilation issues with jss-plugin-camel-case
    delay: null
  },
  animation: {
    name: null,
    duration: null,
    "timing-function": null,
    timingFunction: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    delay: null,
    "iteration-count": null,
    iterationCount: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    direction: null,
    "fill-mode": null,
    fillMode: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    "play-state": null,
    playState: null
    // Needed to avoid compilation issues with jss-plugin-camel-case
  },
  "box-shadow": {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: null,
    inset: null
  },
  "text-shadow": {
    x: 0,
    y: 0,
    blur: null,
    color: null
  }
  /**
   * A scheme for converting non-standart properties inside object.
   * For e.g.: include 'border-radius' property inside 'border' object.
   */
}, Ka = {
  border: {
    radius: "border-radius",
    image: "border-image",
    width: "border-width",
    style: "border-style",
    color: "border-color"
  },
  "border-bottom": {
    width: "border-bottom-width",
    style: "border-bottom-style",
    color: "border-bottom-color"
  },
  "border-top": {
    width: "border-top-width",
    style: "border-top-style",
    color: "border-top-color"
  },
  "border-left": {
    width: "border-left-width",
    style: "border-left-style",
    color: "border-left-color"
  },
  "border-right": {
    width: "border-right-width",
    style: "border-right-style",
    color: "border-right-color"
  },
  background: {
    size: "background-size",
    image: "background-image"
  },
  font: {
    style: "font-style",
    variant: "font-variant",
    weight: "font-weight",
    stretch: "font-stretch",
    size: "font-size",
    family: "font-family",
    lineHeight: "line-height",
    // Needed to avoid compilation issues with jss-plugin-camel-case
    "line-height": "line-height"
  },
  flex: {
    grow: "flex-grow",
    basis: "flex-basis",
    direction: "flex-direction",
    wrap: "flex-wrap",
    flow: "flex-flow",
    shrink: "flex-shrink"
  },
  align: {
    self: "align-self",
    items: "align-items",
    content: "align-content"
  },
  grid: {
    "template-columns": "grid-template-columns",
    templateColumns: "grid-template-columns",
    "template-rows": "grid-template-rows",
    templateRows: "grid-template-rows",
    "template-areas": "grid-template-areas",
    templateAreas: "grid-template-areas",
    template: "grid-template",
    "auto-columns": "grid-auto-columns",
    autoColumns: "grid-auto-columns",
    "auto-rows": "grid-auto-rows",
    autoRows: "grid-auto-rows",
    "auto-flow": "grid-auto-flow",
    autoFlow: "grid-auto-flow",
    row: "grid-row",
    column: "grid-column",
    "row-start": "grid-row-start",
    rowStart: "grid-row-start",
    "row-end": "grid-row-end",
    rowEnd: "grid-row-end",
    "column-start": "grid-column-start",
    columnStart: "grid-column-start",
    "column-end": "grid-column-end",
    columnEnd: "grid-column-end",
    area: "grid-area",
    gap: "grid-gap",
    "row-gap": "grid-row-gap",
    rowGap: "grid-row-gap",
    "column-gap": "grid-column-gap",
    columnGap: "grid-column-gap"
  }
};
function PC(r, e, a) {
  return r.map(function(n) {
    return vf(n, e, a, !1, !0);
  });
}
function hf(r, e, a, n) {
  return a[e] == null ? r : r.length === 0 ? [] : Array.isArray(r[0]) ? hf(r[0], e, a, n) : typeof r[0] == "object" ? PC(r, e, n) : [r];
}
function vf(r, e, a, n, t) {
  if (!(Ct[e] || Ka[e]))
    return [];
  var s = [];
  if (Ka[e] && (r = $C(r, a, Ka[e], n)), Object.keys(r).length)
    for (var i in Ct[e]) {
      if (r[i]) {
        Array.isArray(r[i]) ? s.push(bC[i] === null ? r[i] : r[i].join(" ")) : s.push(r[i]);
        continue;
      }
      Ct[e][i] != null && s.push(Ct[e][i]);
    }
  return !s.length || t ? s : [s];
}
function $C(r, e, a, n) {
  for (var t in a) {
    var s = a[t];
    if (typeof r[t] < "u" && (n || !e.prop(s))) {
      var i, o = it((i = {}, i[s] = r[t], i), e)[s];
      n ? e.style.fallbacks[s] = o : e.style[s] = o;
    }
    delete r[t];
  }
  return r;
}
function it(r, e, a) {
  for (var n in r) {
    var t = r[n];
    if (Array.isArray(t)) {
      if (!Array.isArray(t[0])) {
        if (n === "fallbacks") {
          for (var s = 0; s < r.fallbacks.length; s++)
            r.fallbacks[s] = it(r.fallbacks[s], e, !0);
          continue;
        }
        r[n] = hf(t, n, yC, e), r[n].length || delete r[n];
      }
    } else if (typeof t == "object") {
      if (n === "fallbacks") {
        r.fallbacks = it(r.fallbacks, e, !0);
        continue;
      }
      r[n] = vf(t, n, e, a), r[n].length || delete r[n];
    } else
      r[n] === "" && delete r[n];
  }
  return r;
}
function _C() {
  function r(e, a) {
    if (!e || a.type !== "style")
      return e;
    if (Array.isArray(e)) {
      for (var n = 0; n < e.length; n++)
        e[n] = it(e[n], a);
      return e;
    }
    return it(e, a);
  }
  return {
    onProcessStyle: r
  };
}
function Sn(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var a = 0, n = new Array(e); a < e; a++)
    n[a] = r[a];
  return n;
}
function SC(r) {
  if (Array.isArray(r))
    return Sn(r);
}
function EC(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function wC(r, e) {
  if (r) {
    if (typeof r == "string")
      return Sn(r, e);
    var a = Object.prototype.toString.call(r).slice(8, -1);
    if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
      return Array.from(r);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Sn(r, e);
  }
}
function OC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AC(r) {
  return SC(r) || EC(r) || wC(r) || OC();
}
var Xr = "", En = "", pf = "", mf = "", RC = ht && "ontouchstart" in document.documentElement;
if (ht) {
  var Ba = {
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
    Webkit: "-webkit-"
  }, xC = document.createElement("p"), Ga = xC.style, IC = "Transform";
  for (var Ha in Ba)
    if (Ha + IC in Ga) {
      Xr = Ha, En = Ba[Ha];
      break;
    }
  Xr === "Webkit" && "msHyphens" in Ga && (Xr = "ms", En = Ba.ms, mf = "edge"), Xr === "Webkit" && "-apple-trailing-word" in Ga && (pf = "apple");
}
var z = {
  js: Xr,
  css: En,
  vendor: pf,
  browser: mf,
  isTouch: RC
};
function CC(r) {
  return r[1] === "-" || z.js === "ms" ? r : "@" + z.css + "keyframes" + r.substr(10);
}
var DC = {
  noPrefill: ["appearance"],
  supportedProperty: function(e) {
    return e !== "appearance" ? !1 : z.js === "ms" ? "-webkit-" + e : z.css + e;
  }
}, jC = {
  noPrefill: ["color-adjust"],
  supportedProperty: function(e) {
    return e !== "color-adjust" ? !1 : z.js === "Webkit" ? z.css + "print-" + e : e;
  }
}, TC = /[-\s]+(.)?/g;
function FC(r, e) {
  return e ? e.toUpperCase() : "";
}
function As(r) {
  return r.replace(TC, FC);
}
function Xe(r) {
  return As("-" + r);
}
var NC = {
  noPrefill: ["mask"],
  supportedProperty: function(e, a) {
    if (!/^mask/.test(e))
      return !1;
    if (z.js === "Webkit") {
      var n = "mask-image";
      if (As(n) in a)
        return e;
      if (z.js + Xe(n) in a)
        return z.css + e;
    }
    return e;
  }
}, MC = {
  noPrefill: ["text-orientation"],
  supportedProperty: function(e) {
    return e !== "text-orientation" ? !1 : z.vendor === "apple" && !z.isTouch ? z.css + e : e;
  }
}, LC = {
  noPrefill: ["transform"],
  supportedProperty: function(e, a, n) {
    return e !== "transform" ? !1 : n.transform ? e : z.css + e;
  }
}, UC = {
  noPrefill: ["transition"],
  supportedProperty: function(e, a, n) {
    return e !== "transition" ? !1 : n.transition ? e : z.css + e;
  }
}, qC = {
  noPrefill: ["writing-mode"],
  supportedProperty: function(e) {
    return e !== "writing-mode" ? !1 : z.js === "Webkit" || z.js === "ms" && z.browser !== "edge" ? z.css + e : e;
  }
}, VC = {
  noPrefill: ["user-select"],
  supportedProperty: function(e) {
    return e !== "user-select" ? !1 : z.js === "Moz" || z.js === "ms" || z.vendor === "apple" ? z.css + e : e;
  }
}, kC = {
  supportedProperty: function(e, a) {
    if (!/^break-/.test(e))
      return !1;
    if (z.js === "Webkit") {
      var n = "WebkitColumn" + Xe(e);
      return n in a ? z.css + "column-" + e : !1;
    }
    if (z.js === "Moz") {
      var t = "page" + Xe(e);
      return t in a ? "page-" + e : !1;
    }
    return !1;
  }
}, zC = {
  supportedProperty: function(e, a) {
    if (!/^(border|margin|padding)-inline/.test(e))
      return !1;
    if (z.js === "Moz")
      return e;
    var n = e.replace("-inline", "");
    return z.js + Xe(n) in a ? z.css + n : !1;
  }
}, KC = {
  supportedProperty: function(e, a) {
    return As(e) in a ? e : !1;
  }
}, BC = {
  supportedProperty: function(e, a) {
    var n = Xe(e);
    return e[0] === "-" || e[0] === "-" && e[1] === "-" ? e : z.js + n in a ? z.css + e : z.js !== "Webkit" && "Webkit" + n in a ? "-webkit-" + e : !1;
  }
}, GC = {
  supportedProperty: function(e) {
    return e.substring(0, 11) !== "scroll-snap" ? !1 : z.js === "ms" ? "" + z.css + e : e;
  }
}, HC = {
  supportedProperty: function(e) {
    return e !== "overscroll-behavior" ? !1 : z.js === "ms" ? z.css + "scroll-chaining" : e;
  }
}, QC = {
  "flex-grow": "flex-positive",
  "flex-shrink": "flex-negative",
  "flex-basis": "flex-preferred-size",
  "justify-content": "flex-pack",
  order: "flex-order",
  "align-items": "flex-align",
  "align-content": "flex-line-pack"
  // 'align-self' is handled by 'align-self' plugin.
}, JC = {
  supportedProperty: function(e, a) {
    var n = QC[e];
    return n && z.js + Xe(n) in a ? z.css + n : !1;
  }
}, gf = {
  flex: "box-flex",
  "flex-grow": "box-flex",
  "flex-direction": ["box-orient", "box-direction"],
  order: "box-ordinal-group",
  "align-items": "box-align",
  "flex-flow": ["box-orient", "box-direction"],
  "justify-content": "box-pack"
}, WC = Object.keys(gf), YC = function(e) {
  return z.css + e;
}, ZC = {
  supportedProperty: function(e, a, n) {
    var t = n.multiple;
    if (WC.indexOf(e) > -1) {
      var s = gf[e];
      if (!Array.isArray(s))
        return z.js + Xe(s) in a ? z.css + s : !1;
      if (!t)
        return !1;
      for (var i = 0; i < s.length; i++)
        if (!(z.js + Xe(s[0]) in a))
          return !1;
      return s.map(YC);
    }
    return !1;
  }
}, yf = [DC, jC, NC, MC, LC, UC, qC, VC, kC, zC, KC, BC, GC, HC, JC, ZC], To = yf.filter(function(r) {
  return r.supportedProperty;
}).map(function(r) {
  return r.supportedProperty;
}), XC = yf.filter(function(r) {
  return r.noPrefill;
}).reduce(function(r, e) {
  return r.push.apply(r, AC(e.noPrefill)), r;
}, []), et, ir = {};
if (ht) {
  et = document.createElement("p");
  var Qa = window.getComputedStyle(document.documentElement, "");
  for (var Ja in Qa)
    isNaN(Ja) || (ir[Qa[Ja]] = Qa[Ja]);
  XC.forEach(function(r) {
    return delete ir[r];
  });
}
function wn(r, e) {
  if (e === void 0 && (e = {}), !et)
    return r;
  if (process.env.NODE_ENV !== "benchmark" && ir[r] != null)
    return ir[r];
  (r === "transition" || r === "transform") && (e[r] = r in et.style);
  for (var a = 0; a < To.length && (ir[r] = To[a](r, et.style, e), !ir[r]); a++)
    ;
  try {
    et.style[r] = "";
  } catch {
    return !1;
  }
  return ir[r];
}
var $r = {}, e2 = {
  transition: 1,
  "transition-property": 1,
  "-webkit-transition": 1,
  "-webkit-transition-property": 1
}, r2 = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g, Qe;
function t2(r, e, a) {
  if (e === "var")
    return "var";
  if (e === "all")
    return "all";
  if (a === "all")
    return ", all";
  var n = e ? wn(e) : ", " + wn(a);
  return n || e || a;
}
ht && (Qe = document.createElement("p"));
function Fo(r, e) {
  var a = e;
  if (!Qe || r === "content")
    return e;
  if (typeof a != "string" || !isNaN(parseInt(a, 10)))
    return a;
  var n = r + a;
  if (process.env.NODE_ENV !== "benchmark" && $r[n] != null)
    return $r[n];
  try {
    Qe.style[r] = a;
  } catch {
    return $r[n] = !1, !1;
  }
  if (e2[r])
    a = a.replace(r2, t2);
  else if (Qe.style[r] === "" && (a = z.css + a, a === "-ms-flex" && (Qe.style[r] = "-ms-flexbox"), Qe.style[r] = a, Qe.style[r] === ""))
    return $r[n] = !1, !1;
  return Qe.style[r] = "", $r[n] = a, $r[n];
}
function a2() {
  function r(t) {
    if (t.type === "keyframes") {
      var s = t;
      s.at = CC(s.at);
    }
  }
  function e(t) {
    for (var s in t) {
      var i = t[s];
      if (s === "fallbacks" && Array.isArray(i)) {
        t[s] = i.map(e);
        continue;
      }
      var o = !1, l = wn(s);
      l && l !== s && (o = !0);
      var c = !1, u = Fo(l, Ye(i));
      u && u !== i && (c = !0), (o || c) && (o && delete t[s], t[l || s] = u || i);
    }
    return t;
  }
  function a(t, s) {
    return s.type !== "style" ? t : e(t);
  }
  function n(t, s) {
    return Fo(s, Ye(t)) || t;
  }
  return {
    onProcessRule: r,
    onProcessStyle: a,
    onChangeValue: n
  };
}
function n2() {
  var r = function(a, n) {
    return a.length === n.length ? a > n ? 1 : -1 : a.length - n.length;
  };
  return {
    onProcessStyle: function(a, n) {
      if (n.type !== "style")
        return a;
      for (var t = {}, s = Object.keys(a).sort(r), i = 0; i < s.length; i++)
        t[s[i]] = a[s[i]];
      return t;
    }
  };
}
var s2 = function(e) {
  return e === void 0 && (e = {}), {
    plugins: [KI(), HI(e.observable), YI(), aC(), iC(), uC(), fC(), vC(), gC(e.defaultUnit), _C(), a2(), n2()]
  };
};
const i2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: s2
}, Symbol.toStringTag, { value: "Module" })), o2 = /* @__PURE__ */ Rn(i2);
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var e = mt, a = n(o2);
  function n(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var t = (0, e.create)((0, a.default)());
  r.default = t;
})(Os);
var cr = {};
Object.defineProperty(cr, "__esModule", {
  value: !0
});
cr.addMeta = cr.getMeta = void 0;
var bf = /* @__PURE__ */ new WeakMap(), l2 = function(e) {
  return bf.get(e);
};
cr.getMeta = l2;
var u2 = function(e, a) {
  bf.set(e, a);
};
cr.addMeta = u2;
Object.defineProperty(Fe, "__esModule", {
  value: !0
});
Fe.addDynamicRules = Fe.updateDynamicRules = Fe.removeDynamicRules = Fe.createStyleSheet = void 0;
var f2 = $f(Xu), c2 = mt, d2 = ze, h2 = $f(Os), Pf = cr;
function $f(r) {
  return r && r.__esModule ? r : { default: r };
}
function No(r, e) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function Mo(r) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? No(Object(a), !0).forEach(function(n) {
      v2(r, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : No(Object(a)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return r;
}
function v2(r, e, a) {
  return e in r ? Object.defineProperty(r, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = a, r;
}
var p2 = function(e) {
  var a = e.styles;
  return typeof a != "function" ? a : ((0, f2.default)(a.length !== 0, "[JSS] <".concat(e.name || "Hook", ` />'s styles function doesn't rely on the "theme" argument. We recommend declaring styles as an object instead.`)), a(e.theme));
};
function m2(r, e) {
  var a;
  r.context.id && r.context.id.minify != null && (a = r.context.id.minify);
  var n = r.context.classNamePrefix || "";
  r.name && !a && (n += "".concat(r.name.replace(/\s/g, "-"), "-"));
  var t = "";
  return r.name && (t = "".concat(r.name, ", ")), t += typeof r.styles == "function" ? "Themed" : "Unthemed", Mo(Mo({}, r.sheetOptions), {}, {
    index: r.index,
    meta: t,
    classNamePrefix: n,
    link: e,
    generateId: r.sheetOptions.generateId || r.context.generateId
  });
}
var g2 = function(e) {
  if (!e.context.disableStylesGeneration) {
    var a = (0, d2.getManager)(e.context, e.index), n = a.get(e.theme);
    if (n)
      return n;
    var t = e.context.jss || h2.default, s = p2(e), i = (0, c2.getDynamicStyles)(s), o = t.createStyleSheet(s, m2(e, i !== null));
    return (0, Pf.addMeta)(o, {
      dynamicStyles: i,
      styles: s
    }), a.add(e.theme, o), o;
  }
};
Fe.createStyleSheet = g2;
var y2 = function(e, a) {
  for (var n in a)
    e.deleteRule(a[n]);
};
Fe.removeDynamicRules = y2;
var b2 = function(e, a, n) {
  for (var t in n)
    a.updateOne(n[t], e);
};
Fe.updateDynamicRules = b2;
var P2 = function(e, a) {
  var n = (0, Pf.getMeta)(e);
  if (!n)
    return null;
  var t = {};
  for (var s in n.dynamicStyles)
    for (var i = e.rules.index.length, o = e.addRule(s, n.dynamicStyles[s]), l = i; l < e.rules.index.length; l++) {
      var c = e.rules.index[l];
      e.updateOne(c, a), t[o === c ? s : c.key] = c;
    }
  return t;
};
Fe.addDynamicRules = P2;
var _f = {};
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var e = Number.MIN_SAFE_INTEGER || -1e9, a = function() {
    return e++;
  }, n = a;
  r.default = n;
})(_f);
var Sf = {};
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var e = cr, a = function(s, i) {
    if (!i)
      return s.classes;
    var o = {}, l = (0, e.getMeta)(s);
    if (!l)
      return s.classes;
    for (var c in l.styles)
      o[c] = s.classes[c], c in i && (o[c] += " ".concat(s.classes[i[c].key]));
    return o;
  }, n = a;
  r.default = n;
})(Sf);
var Ke = {}, Ef = {};
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = a;
  function e(n) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(s) {
      return typeof s;
    } : e = function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, e(n);
  }
  function a(n) {
    return n !== null && e(n) === "object" && !Array.isArray(n);
  }
})(Ef);
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.createTheming = Ke.useTheme = Ke.ThemeProvider = void 0;
var _r = Wt, Lo = wf(Xu), Uo = wf(Ef);
function wf(r) {
  return r && r.__esModule ? r : { default: r };
}
function qo(r, e) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function Vo(r) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qo(Object(a), !0).forEach(function(n) {
      $2(r, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : qo(Object(a)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return r;
}
function $2(r, e, a) {
  return e in r ? Object.defineProperty(r, e, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = a, r;
}
var _2 = {}, Of = function(e, a) {
  var n = (0, _r.defineComponent)({
    props: {
      theme: {
        type: Object,
        required: !0
      }
    },
    setup: function(i, o) {
      var l = o.slots, c = (0, _r.inject)(e, void 0), u = (0, _r.computed)(function() {
        var d = i.theme, p;
        return typeof d == "function" ? (p = d(c), (0, Lo.default)((0, Uo.default)(p), "[ThemeProvider] Please return an object from your theme function")) : (p = c && c.value ? Vo(Vo({}, c.value), d) : d, (0, Lo.default)((0, Uo.default)(p), "[ThemeProvider] Please make your theme prop a plain object")), p;
      });
      return (0, _r.provide)(e, u), function() {
        return l.default && l.default();
      };
    }
  }), t = function() {
    var i = (0, _r.inject)(e, (0, _r.ref)(a));
    return i;
  };
  return {
    ThemeProvider: n,
    useTheme: t,
    contextKey: e
  };
};
Ke.createTheming = Of;
var Af = Of("__vue_jss_provide_key__", _2), S2 = Af.ThemeProvider, E2 = Af.useTheme;
Ke.useTheme = E2;
Ke.ThemeProvider = S2;
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var e = Wt, a = _s, n = Fe, t = l(_f), s = ze, i = l(Sf), o = Ke;
  function l($) {
    return $ && $.__esModule ? $ : { default: $ };
  }
  function c($, w) {
    return v($) || f($, w) || d($, w) || u();
  }
  function u() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function d($, w) {
    if ($) {
      if (typeof $ == "string")
        return p($, w);
      var E = Object.prototype.toString.call($).slice(8, -1);
      if (E === "Object" && $.constructor && (E = $.constructor.name), E === "Map" || E === "Set")
        return Array.from($);
      if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))
        return p($, w);
    }
  }
  function p($, w) {
    (w == null || w > $.length) && (w = $.length);
    for (var E = 0, x = new Array(w); E < w; E++)
      x[E] = $[E];
    return x;
  }
  function f($, w) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object($)))) {
      var E = [], x = !0, T = !1, C = void 0;
      try {
        for (var D = $[Symbol.iterator](), N; !(x = (N = D.next()).done) && (E.push(N.value), !(w && E.length === w)); x = !0)
          ;
      } catch (M) {
        T = !0, C = M;
      } finally {
        try {
          !x && D.return != null && D.return();
        } finally {
          if (T)
            throw C;
        }
      }
      return E;
    }
  }
  function v($) {
    if (Array.isArray($))
      return $;
  }
  function g($, w) {
    if ($ == null)
      return {};
    var E = m($, w), x, T;
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols($);
      for (T = 0; T < C.length; T++)
        x = C[T], !(w.indexOf(x) >= 0) && Object.prototype.propertyIsEnumerable.call($, x) && (E[x] = $[x]);
    }
    return E;
  }
  function m($, w) {
    if ($ == null)
      return {};
    var E = {}, x = Object.keys($), T, C;
    for (C = 0; C < x.length; C++)
      T = x[C], !(w.indexOf(T) >= 0) && (E[T] = $[T]);
    return E;
  }
  function P($) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = w.index, x = E === void 0 ? (0, t.default)() : E, T = w.theming, C = w.name, D = g(w, ["index", "theming", "name"]), N = typeof $ == "function" && T ? T.useTheme : o.useTheme;
    return function(j) {
      var I = N(), R = (0, a.injectJssContext)(), F = (0, e.shallowRef)(), k = (0, e.shallowRef)(null);
      (0, e.watch)([R, I], function(H, B) {
        var q = c(H, 2);
        q[0], q[1];
        var ae = c(B, 2), he = ae[0], ge = ae[1], Q = (0, n.createStyleSheet)({
          context: R.value,
          styles: $,
          name: C,
          theme: I.value,
          index: x,
          sheetOptions: D
        });
        F.value && Q !== F.value && ((0, s.unmanageSheet)({
          index: x,
          context: he,
          sheet: F.value,
          theme: ge
        }), F.value && k.value && (0, n.removeDynamicRules)(F.value, k.value));
        var xe = Q ? (0, n.addDynamicRules)(Q, (0, e.isRef)(j) ? j.value : j) : null;
        Q && (0, s.manageSheet)({
          index: x,
          context: R.value,
          sheet: Q,
          theme: I.value
        }), F.value = Q, k.value = xe;
      }, {
        immediate: !0
      }), (0, e.watchEffect)(function() {
        F.value && k.value && (0, n.updateDynamicRules)((0, e.isRef)(j) ? j.value : j, F.value, k.value);
      });
      var K = (0, e.computed)(function() {
        return F.value && k.value ? (0, i.default)(F.value, k.value) : {};
      });
      return (0, e.onBeforeUnmount)(function() {
        F && (0, s.unmanageSheet)({
          index: x,
          context: R.value,
          sheet: F.value,
          theme: I.value
        }), F.value && k.value && (0, n.removeDynamicRules)(F.value, k.value);
      }), K;
    };
  }
  var A = P;
  r.default = A;
})(Zu);
var Rf = {};
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), r.default = void 0;
  var e = Wt, a = mt, n = t(_s);
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var s = (0, e.defineComponent)({
    props: {
      jss: {
        type: Object,
        required: !1
      },
      registry: {
        type: Object,
        required: !1
      },
      generateId: {
        type: Function,
        required: !1
      },
      classNamePrefix: {
        type: String,
        required: !1
      },
      disableStylesGeneration: {
        type: Boolean
      },
      media: {
        type: String
      },
      id: {
        type: Object
      }
    },
    setup: function(l, c) {
      var u = c.slots, d = (0, e.ref)({}), p = (0, e.ref)({}), f = (0, e.computed)(function() {
        var v = l.classNamePrefix, g = l.jss, m = l.generateId, P = l.disableStylesGeneration, A = l.media, $ = l.id, w = l.registry, E = {
          manager: d
        };
        return w && (E.registry = w), $ !== void 0 && (E.id = $), E.generateId = m, v && (E.classNamePrefix += v), A !== void 0 && (E.media = A), g && (E.jss = g), P !== void 0 && (E.disableStylesGeneration = P), E;
      });
      return (0, e.watch)(function() {
        return l.generateId;
      }, function() {
        l.generateId ? p.value = l.generateId : p.value = (0, a.createGenerateId)();
      }), (0, e.watch)(function() {
        return l.registry;
      }, function() {
        d.value = {};
      }), (0, e.provide)(n.default, f), function() {
        return u.default && u.default();
      };
    }
  }), i = s;
  r.default = i;
})(Rf);
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var e = {
    createUseStyles: !0,
    JssProvider: !0,
    jss: !0,
    SheetsRegistry: !0,
    createGenerateId: !0
  };
  Object.defineProperty(r, "createUseStyles", {
    enumerable: !0,
    get: function() {
      return a.default;
    }
  }), Object.defineProperty(r, "JssProvider", {
    enumerable: !0,
    get: function() {
      return n.default;
    }
  }), Object.defineProperty(r, "jss", {
    enumerable: !0,
    get: function() {
      return t.default;
    }
  }), Object.defineProperty(r, "SheetsRegistry", {
    enumerable: !0,
    get: function() {
      return s.SheetsRegistry;
    }
  }), Object.defineProperty(r, "createGenerateId", {
    enumerable: !0,
    get: function() {
      return s.createGenerateId;
    }
  });
  var a = o(Zu), n = o(Rf), t = o(Os), s = mt, i = Ke;
  Object.keys(i).forEach(function(l) {
    l === "default" || l === "__esModule" || Object.prototype.hasOwnProperty.call(e, l) || Object.defineProperty(r, l, {
      enumerable: !0,
      get: function() {
        return i[l];
      }
    });
  });
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
})(Yu);
const w2 = /* @__PURE__ */ er({
  name: "SelectionWidget",
  props: {
    value: {},
    onChange: {
      type: Function,
      required: !0
    },
    options: {
      type: Array,
      required: !0
    }
  },
  setup(r) {
    const e = kf(r.value);
    return qs(e, (a) => {
      a !== r.value && r.onChange(a);
    }), qs(() => r.value, (a) => {
      a !== e.value && (e.value = a);
    }), () => {
      const {
        options: a
      } = r;
      return zf($e("select", {
        multiple: !0,
        "onUpdate:modelValue": (n) => e.value = n
      }, [a.map((n) => $e("option", {
        value: n.value
      }, [n.key]))]), [[Kf, e.value]]);
    };
  }
}), O2 = Yu.createUseStyles({
  container: {
    border: "1px solid #eee"
  },
  actions: {
    background: "#eee",
    padding: 10,
    textAlign: "right"
  },
  action: {
    "& + &": {
      marginLeft: 10
    }
  },
  content: {
    padding: 10
  }
}), A2 = /* @__PURE__ */ er({
  name: "ArrayItemWrapper",
  props: {
    onAdd: {
      type: Function,
      required: !0
    },
    onDelete: {
      type: Function,
      required: !0
    },
    onUp: {
      type: Function,
      required: !0
    },
    onDown: {
      type: Function,
      required: !0
    },
    index: {
      type: Number,
      required: !0
    }
  },
  setup(r, {
    slots: e
  }) {
    const a = O2();
    return () => {
      const n = a.value;
      return $e("div", {
        class: n.container
      }, [$e("div", {
        class: n.actions
      }, [$e("button", {
        class: n.action,
        onClick: () => r.onAdd(r.index)
      }, [$t("新增")]), $e("button", {
        class: n.action,
        onClick: () => r.onDelete(r.index)
      }, [$t("删除")]), $e("button", {
        class: n.action,
        onClick: () => r.onUp(r.index)
      }, [$t("上移")]), $e("button", {
        class: n.action,
        onClick: () => r.onDown(r.index)
      }, [$t("下移")])]), $e("div", {
        class: n.content
      }, [e.default && e.default()])]);
    };
  }
}), R2 = /* @__PURE__ */ er({
  name: "ArrayField",
  props: On,
  setup(r, e) {
    const a = Go(), n = (l, c) => {
      const {
        value: u
      } = r, d = Array.isArray(u) ? u : [];
      d[c] = l, r.onChange(d);
    }, t = (l) => {
      const {
        value: c
      } = r, u = Array.isArray(c) ? c : [];
      u.splice(l + 1, 0, void 0), r.onChange(u);
    }, s = (l) => {
      const {
        value: c
      } = r, u = Array.isArray(c) ? c : [];
      u.splice(l, 1), r.onChange(u);
    }, i = (l) => {
      if (l === 0)
        return;
      const {
        value: c
      } = r, u = Array.isArray(c) ? c : [], d = u.splice(l, 1);
      u.splice(l - 1, 0, d[0]), r.onChange(u);
    }, o = (l) => {
      const {
        value: c
      } = r, u = Array.isArray(c) ? c : [];
      if (l === u.length - 1)
        return;
      const d = u.splice(l, 1);
      u.splice(l + 1, 0, d[0]), r.onChange(u);
    };
    return () => {
      const {
        schema: l,
        rootSchema: c,
        value: u
      } = r, d = a.SchemaItem, p = Array.isArray(l.items), f = l.items && l.items.enum;
      if (p) {
        const v = l.items, g = Array.isArray(u) ? u : [];
        return v.map((m, P) => $e(d, {
          schema: m,
          key: P,
          rootSchema: c,
          value: g[P],
          onChange: (A) => n(A, P)
        }, null));
      } else if (f) {
        const g = l.items.enum.map((m) => ({
          key: m,
          value: m
        }));
        return $e(w2, {
          onChange: r.onChange,
          value: r.value,
          options: g
        }, null);
      } else
        return (Array.isArray(u) ? u : []).map((g, m) => $e(A2, {
          index: m,
          onAdd: t,
          onDelete: s,
          onUp: i,
          onDown: o
        }, {
          default: () => [$e(d, {
            schema: l.items,
            value: g,
            key: m,
            rootSchema: c,
            onChange: (P) => n(P, m)
          }, null)]
        }));
    };
  }
}), ko = /* @__PURE__ */ er({
  name: "SchemaItem",
  props: On,
  setup(r) {
    const e = Bf(() => {
      const {
        schema: a,
        rootSchema: n,
        value: t
      } = r;
      return fr(a, n, t);
    });
    return () => {
      const {
        schema: a
      } = r, n = a.type, t = e.value;
      let s;
      switch (n) {
        case Zr.STRING: {
          s = Jf;
          break;
        }
        case Zr.NUMBER: {
          s = Yf;
          break;
        }
        case Zr.OBJECT: {
          s = Qx;
          break;
        }
        case Zr.ARRAY: {
          s = R2;
          break;
        }
        default:
          console.warn(`${n} is not supported`);
      }
      return $e(s, Gf(r, {
        schema: t
      }), null);
    };
  }
}), I2 = /* @__PURE__ */ er({
  name: "SchemaForm",
  props: {
    schema: {
      type: Object,
      required: !0
    },
    value: {
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(r, {
    slots: e,
    emit: a,
    attrs: n
  }) {
    const t = (i) => {
      r.onChange(i);
    };
    return Hf(Bo, {
      SchemaItem: ko
    }), () => {
      const {
        schema: i,
        value: o
      } = r;
      return $e(ko, {
        schema: i,
        rootSchema: i,
        value: o,
        onChange: t
      }, null);
    };
  }
});
export {
  On as FiledPropsDefine,
  Zr as SchemaTypes,
  I2 as default
};
