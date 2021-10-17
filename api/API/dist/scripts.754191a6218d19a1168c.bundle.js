"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = t.document ? e(t, !0) : function (t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");return e(t);
  } : e(t);
}("undefined" != typeof window ? window : undefined, function (t, e) {
  var n = [],
      i = n.slice,
      r = n.concat,
      o = n.push,
      a = n.indexOf,
      s = {},
      l = s.toString,
      d = s.hasOwnProperty,
      c = "".trim,
      u = {},
      h = "1.11.0",
      f = function f(t, e) {
    return new f.fn.init(t, e);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      g = /^-ms-/,
      v = /-([\da-z])/gi,
      m = function m(t, e) {
    return e.toUpperCase();
  };function b(t) {
    var e = t.length,
        n = f.type(t);return "function" !== n && !f.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
  }f.fn = f.prototype = { jquery: h, constructor: f, selector: "", length: 0, toArray: function toArray() {
      return i.call(this);
    }, get: function get(t) {
      return null != t ? 0 > t ? this[t + this.length] : this[t] : i.call(this);
    }, pushStack: function pushStack(t) {
      var e = f.merge(this.constructor(), t);return e.prevObject = this, e.context = this.context, e;
    }, each: function each(t, e) {
      return f.each(this, t, e);
    }, map: function map(t) {
      return this.pushStack(f.map(this, function (e, n) {
        return t.call(e, n, e);
      }));
    }, slice: function slice() {
      return this.pushStack(i.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(t) {
      var e = this.length,
          n = +t + (0 > t ? e : 0);return this.pushStack(n >= 0 && e > n ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: o, sort: n.sort, splice: n.splice }, f.extend = f.fn.extend = function () {
    var t,
        e,
        n,
        i,
        r,
        o,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        d = !1;for ("boolean" == typeof a && (d = a, a = arguments[s] || {}, s++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || f.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) {
      if (null != (r = arguments[s])) for (i in r) {
        t = a[i], a !== (n = r[i]) && (d && n && (f.isPlainObject(n) || (e = f.isArray(n))) ? (e ? (e = !1, o = t && f.isArray(t) ? t : []) : o = t && f.isPlainObject(t) ? t : {}, a[i] = f.extend(d, o, n)) : void 0 !== n && (a[i] = n));
      }
    }return a;
  }, f.extend({ expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(t) {
      throw new Error(t);
    }, noop: function noop() {}, isFunction: function isFunction(t) {
      return "function" === f.type(t);
    }, isArray: Array.isArray || function (t) {
      return "array" === f.type(t);
    }, isWindow: function isWindow(t) {
      return null != t && t == t.window;
    }, isNumeric: function isNumeric(t) {
      return t - parseFloat(t) >= 0;
    }, isEmptyObject: function isEmptyObject(t) {
      var e;for (e in t) {
        return !1;
      }return !0;
    }, isPlainObject: function isPlainObject(t) {
      var e;if (!t || "object" !== f.type(t) || t.nodeType || f.isWindow(t)) return !1;try {
        if (t.constructor && !d.call(t, "constructor") && !d.call(t.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (t) {
        return !1;
      }if (u.ownLast) for (e in t) {
        return d.call(t, e);
      }for (e in t) {}return void 0 === e || d.call(t, e);
    }, type: function type(t) {
      return null == t ? t + "" : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t ? s[l.call(t)] || "object" : typeof t === "undefined" ? "undefined" : _typeof(t);
    }, globalEval: function globalEval(e) {
      e && f.trim(e) && (t.execScript || function (e) {
        t.eval.call(t, e);
      })(e);
    }, camelCase: function camelCase(t) {
      return t.replace(g, "ms-").replace(v, m);
    }, nodeName: function nodeName(t, e) {
      return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }, each: function each(t, e, n) {
      var i = 0,
          r = t.length,
          o = b(t);if (n) {
        if (o) for (; r > i && !1 !== e.apply(t[i], n); i++) {} else for (i in t) {
          if (!1 === e.apply(t[i], n)) break;
        }
      } else if (o) for (; r > i && !1 !== e.call(t[i], i, t[i]); i++) {} else for (i in t) {
        if (!1 === e.call(t[i], i, t[i])) break;
      }return t;
    }, trim: c && !c.call("\uFEFF\xA0") ? function (t) {
      return null == t ? "" : c.call(t);
    } : function (t) {
      return null == t ? "" : (t + "").replace(p, "");
    }, makeArray: function makeArray(t, e) {
      var n = e || [];return null != t && (b(Object(t)) ? f.merge(n, "string" == typeof t ? [t] : t) : o.call(n, t)), n;
    }, inArray: function inArray(t, e, n) {
      var i;if (e) {
        if (a) return a.call(e, t, n);for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) {
          if (n in e && e[n] === t) return n;
        }
      }return -1;
    }, merge: function merge(t, e) {
      for (var n = +e.length, i = 0, r = t.length; n > i;) {
        t[r++] = e[i++];
      }if (n != n) for (; void 0 !== e[i];) {
        t[r++] = e[i++];
      }return t.length = r, t;
    }, grep: function grep(t, e, n) {
      for (var i = [], r = 0, o = t.length, a = !n; o > r; r++) {
        !e(t[r], r) !== a && i.push(t[r]);
      }return i;
    }, map: function map(t, e, n) {
      var i,
          o = 0,
          a = t.length,
          s = [];if (b(t)) for (; a > o; o++) {
        null != (i = e(t[o], o, n)) && s.push(i);
      } else for (o in t) {
        null != (i = e(t[o], o, n)) && s.push(i);
      }return r.apply([], s);
    }, guid: 1, proxy: function proxy(t, e) {
      var n, r, o;return "string" == typeof e && (o = t[e], e = t, t = o), f.isFunction(t) ? (n = i.call(arguments, 2), (r = function r() {
        return t.apply(e || this, n.concat(i.call(arguments)));
      }).guid = t.guid = t.guid || f.guid++, r) : void 0;
    }, now: function now() {
      return +new Date();
    }, support: u }), f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
    s["[object " + e + "]"] = e.toLowerCase();
  });var y = function (t) {
    var e,
        n,
        i,
        r,
        o,
        a,
        s,
        l,
        d,
        c,
        u,
        h,
        f,
        p,
        g,
        v,
        m,
        b = "sizzle" + -new Date(),
        y = t.document,
        x = 0,
        w = 0,
        k = it(),
        C = it(),
        M = it(),
        S = function S(t, e) {
      return t === e && (d = !0), 0;
    },
        T = "undefined",
        _ = 1 << 31,
        A = {}.hasOwnProperty,
        N = [],
        D = N.pop,
        E = N.push,
        L = N.push,
        P = N.slice,
        I = N.indexOf || function (t) {
      for (var e = 0, n = this.length; n > e; e++) {
        if (this[e] === t) return e;
      }return -1;
    },
        F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        O = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        H = R.replace("w", "w#"),
        z = "\\[" + O + "*(" + R + ")" + O + "*(?:([*^$|!~]?=)" + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + H + ")|)|)" + O + "*\\]",
        B = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + z.replace(3, 8) + ")*)|.*)\\)|)",
        j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
        W = new RegExp("^" + O + "*," + O + "*"),
        V = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
        q = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
        $ = new RegExp(B),
        U = new RegExp("^" + H + "$"),
        Y = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: new RegExp("^" + z), PSEUDO: new RegExp("^" + B), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"), bool: new RegExp("^(?:" + F + ")$", "i"), needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        Q = /'|\\/g,
        tt = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
        et = function et(t, e, n) {
      var i = "0x" + e - 65536;return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    };try {
      L.apply(N = P.call(y.childNodes), y.childNodes);
    } catch (t) {
      L = { apply: N.length ? function (t, e) {
          E.apply(t, P.call(e));
        } : function (t, e) {
          for (var n = t.length, i = 0; t[n++] = e[i++];) {}t.length = n - 1;
        } };
    }function nt(t, e, i, r) {
      var o, a, s, l, d, h, g, v, x, w;if ((e ? e.ownerDocument || e : y) !== u && c(e), e = e || u, i = i || [], !t || "string" != typeof t) return i;if (1 !== (l = e.nodeType) && 9 !== l) return [];if (f && !r) {
        if (o = J.exec(t)) if (s = o[1]) {
          if (9 === l) {
            if (!(a = e.getElementById(s)) || !a.parentNode) return i;if (a.id === s) return i.push(a), i;
          } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(s)) && m(e, a) && a.id === s) return i.push(a), i;
        } else {
          if (o[2]) return L.apply(i, e.getElementsByTagName(t)), i;if ((s = o[3]) && n.getElementsByClassName && e.getElementsByClassName) return L.apply(i, e.getElementsByClassName(s)), i;
        }if (n.qsa && (!p || !p.test(t))) {
          if (v = g = b, x = e, w = 9 === l && t, 1 === l && "object" !== e.nodeName.toLowerCase()) {
            for (h = ft(t), (g = e.getAttribute("id")) ? v = g.replace(Q, "\\$&") : e.setAttribute("id", v), v = "[id='" + v + "'] ", d = h.length; d--;) {
              h[d] = v + pt(h[d]);
            }x = Z.test(t) && ut(e.parentNode) || e, w = h.join(",");
          }if (w) try {
            return L.apply(i, x.querySelectorAll(w)), i;
          } catch (t) {} finally {
            g || e.removeAttribute("id");
          }
        }
      }return wt(t.replace(j, "$1"), e, i, r);
    }function it() {
      var t = [];return function e(n, r) {
        return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r;
      };
    }function rt(t) {
      return t[b] = !0, t;
    }function ot(t) {
      var e = u.createElement("div");try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), e = null;
      }
    }function at(t, e) {
      for (var n = t.split("|"), r = t.length; r--;) {
        i.attrHandle[n[r]] = e;
      }
    }function st(t, e) {
      var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || _) - (~t.sourceIndex || _);if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === e) return -1;
      }return t ? 1 : -1;
    }function lt(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }function dt(t) {
      return function (e) {
        var n = e.nodeName.toLowerCase();return ("input" === n || "button" === n) && e.type === t;
      };
    }function ct(t) {
      return rt(function (e) {
        return e = +e, rt(function (n, i) {
          for (var r, o = t([], n.length, e), a = o.length; a--;) {
            n[r = o[a]] && (n[r] = !(i[r] = n[r]));
          }
        });
      });
    }function ut(t) {
      return t && _typeof(t.getElementsByTagName) !== T && t;
    }for (e in n = nt.support = {}, o = nt.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;return !!e && "HTML" !== e.nodeName;
    }, c = nt.setDocument = function (t) {
      var e,
          r = t ? t.ownerDocument || t : y,
          a = r.defaultView;return r !== u && 9 === r.nodeType && r.documentElement ? (u = r, h = r.documentElement, f = !o(r), a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function () {
        c();
      }, !1) : a.attachEvent && a.attachEvent("onunload", function () {
        c();
      })), n.attributes = ot(function (t) {
        return t.className = "i", !t.getAttribute("className");
      }), n.getElementsByTagName = ot(function (t) {
        return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length;
      }), n.getElementsByClassName = K.test(r.getElementsByClassName) && ot(function (t) {
        return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length;
      }), n.getById = ot(function (t) {
        return h.appendChild(t).id = b, !r.getElementsByName || !r.getElementsByName(b).length;
      }), n.getById ? (i.find.ID = function (t, e) {
        if (_typeof(e.getElementById) !== T && f) {
          var n = e.getElementById(t);return n && n.parentNode ? [n] : [];
        }
      }, i.filter.ID = function (t) {
        var e = t.replace(tt, et);return function (t) {
          return t.getAttribute("id") === e;
        };
      }) : (delete i.find.ID, i.filter.ID = function (t) {
        var e = t.replace(tt, et);return function (t) {
          var n = _typeof(t.getAttributeNode) !== T && t.getAttributeNode("id");return n && n.value === e;
        };
      }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
        return _typeof(e.getElementsByTagName) !== T ? e.getElementsByTagName(t) : void 0;
      } : function (t, e) {
        var n,
            i = [],
            r = 0,
            o = e.getElementsByTagName(t);if ("*" === t) {
          for (; n = o[r++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return o;
      }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
        return _typeof(e.getElementsByClassName) !== T && f ? e.getElementsByClassName(t) : void 0;
      }, g = [], p = [], (n.qsa = K.test(r.querySelectorAll)) && (ot(function (t) {
        t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && p.push("[*^$]=" + O + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || p.push("\\[" + O + "*(?:value|" + F + ")"), t.querySelectorAll(":checked").length || p.push(":checked");
      }), ot(function (t) {
        var e = r.createElement("input");e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && p.push("name" + O + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || p.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), p.push(",.*:");
      })), (n.matchesSelector = K.test(v = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function (t) {
        n.disconnectedMatch = v.call(t, "div"), v.call(t, "[s!='']:x"), g.push("!=", B);
      }), p = p.length && new RegExp(p.join("|")), g = g.length && new RegExp(g.join("|")), e = K.test(h.compareDocumentPosition), m = e || K.test(h.contains) ? function (t, e) {
        var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
      } : function (t, e) {
        if (e) for (; e = e.parentNode;) {
          if (e === t) return !0;
        }return !1;
      }, S = e ? function (t, e) {
        if (t === e) return d = !0, 0;var i = !t.compareDocumentPosition - !e.compareDocumentPosition;return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === r || t.ownerDocument === y && m(y, t) ? -1 : e === r || e.ownerDocument === y && m(y, e) ? 1 : l ? I.call(l, t) - I.call(l, e) : 0 : 4 & i ? -1 : 1);
      } : function (t, e) {
        if (t === e) return d = !0, 0;var n,
            i = 0,
            o = t.parentNode,
            a = e.parentNode,
            s = [t],
            c = [e];if (!o || !a) return t === r ? -1 : e === r ? 1 : o ? -1 : a ? 1 : l ? I.call(l, t) - I.call(l, e) : 0;if (o === a) return st(t, e);for (n = t; n = n.parentNode;) {
          s.unshift(n);
        }for (n = e; n = n.parentNode;) {
          c.unshift(n);
        }for (; s[i] === c[i];) {
          i++;
        }return i ? st(s[i], c[i]) : s[i] === y ? -1 : c[i] === y ? 1 : 0;
      }, r) : u;
    }, nt.matches = function (t, e) {
      return nt(t, null, null, e);
    }, nt.matchesSelector = function (t, e) {
      if ((t.ownerDocument || t) !== u && c(t), e = e.replace(q, "='$1']"), !(!n.matchesSelector || !f || g && g.test(e) || p && p.test(e))) try {
        var i = v.call(t, e);if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
      } catch (t) {}return nt(e, u, null, [t]).length > 0;
    }, nt.contains = function (t, e) {
      return (t.ownerDocument || t) !== u && c(t), m(t, e);
    }, nt.attr = function (t, e) {
      (t.ownerDocument || t) !== u && c(t);var r = i.attrHandle[e.toLowerCase()],
          o = r && A.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !f) : void 0;return void 0 !== o ? o : n.attributes || !f ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null;
    }, nt.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }, nt.uniqueSort = function (t) {
      var e,
          i = [],
          r = 0,
          o = 0;if (d = !n.detectDuplicates, l = !n.sortStable && t.slice(0), t.sort(S), d) {
        for (; e = t[o++];) {
          e === t[o] && (r = i.push(o));
        }for (; r--;) {
          t.splice(i[r], 1);
        }
      }return l = null, t;
    }, r = nt.getText = function (t) {
      var e,
          n = "",
          i = 0,
          o = t.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof t.textContent) return t.textContent;for (t = t.firstChild; t; t = t.nextSibling) {
            n += r(t);
          }
        } else if (3 === o || 4 === o) return t.nodeValue;
      } else for (; e = t[i++];) {
        n += r(e);
      }return n;
    }, (i = nt.selectors = { cacheLength: 50, createPseudo: rt, match: Y, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(t) {
          return t[1] = t[1].replace(tt, et), t[3] = (t[4] || t[5] || "").replace(tt, et), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
        }, CHILD: function CHILD(t) {
          return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || nt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && nt.error(t[0]), t;
        }, PSEUDO: function PSEUDO(t) {
          var e,
              n = !t[5] && t[2];return Y.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && $.test(n) && (e = ft(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
        } }, filter: { TAG: function TAG(t) {
          var e = t.replace(tt, et).toLowerCase();return "*" === t ? function () {
            return !0;
          } : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          };
        }, CLASS: function CLASS(t) {
          var e = k[t + " "];return e || (e = new RegExp("(^|" + O + ")" + t + "(" + O + "|$)")) && k(t, function (t) {
            return e.test("string" == typeof t.className && t.className || _typeof(t.getAttribute) !== T && t.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(t, e, n) {
          return function (i) {
            var r = nt.attr(i, t);return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(t, e, n, i, r) {
          var o = "nth" !== t.slice(0, 3),
              a = "last" !== t.slice(-4),
              s = "of-type" === e;return 1 === i && 0 === r ? function (t) {
            return !!t.parentNode;
          } : function (e, n, l) {
            var d,
                c,
                u,
                h,
                f,
                p,
                g = o !== a ? "nextSibling" : "previousSibling",
                v = e.parentNode,
                m = s && e.nodeName.toLowerCase(),
                y = !l && !s;if (v) {
              if (o) {
                for (; g;) {
                  for (u = e; u = u[g];) {
                    if (s ? u.nodeName.toLowerCase() === m : 1 === u.nodeType) return !1;
                  }p = g = "only" === t && !p && "nextSibling";
                }return !0;
              }if (p = [a ? v.firstChild : v.lastChild], a && y) {
                for (f = (d = (c = v[b] || (v[b] = {}))[t] || [])[0] === x && d[1], h = d[0] === x && d[2], u = f && v.childNodes[f]; u = ++f && u && u[g] || (h = f = 0) || p.pop();) {
                  if (1 === u.nodeType && ++h && u === e) {
                    c[t] = [x, f, h];break;
                  }
                }
              } else if (y && (d = (e[b] || (e[b] = {}))[t]) && d[0] === x) h = d[1];else for (; (u = ++f && u && u[g] || (h = f = 0) || p.pop()) && ((s ? u.nodeName.toLowerCase() !== m : 1 !== u.nodeType) || !++h || (y && ((u[b] || (u[b] = {}))[t] = [x, h]), u !== e));) {}return (h -= r) === i || h % i == 0 && h / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(t, e) {
          var n,
              r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || nt.error("unsupported pseudo: " + t);return r[b] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function (t, n) {
            for (var i, o = r(t, e), a = o.length; a--;) {
              t[i = I.call(t, o[a])] = !(n[i] = o[a]);
            }
          }) : function (t) {
            return r(t, 0, n);
          }) : r;
        } }, pseudos: { not: rt(function (t) {
          var e = [],
              n = [],
              i = a(t.replace(j, "$1"));return i[b] ? rt(function (t, e, n, r) {
            for (var o, a = i(t, null, r, []), s = t.length; s--;) {
              (o = a[s]) && (t[s] = !(e[s] = o));
            }
          }) : function (t, r, o) {
            return e[0] = t, i(e, null, o, n), !n.pop();
          };
        }), has: rt(function (t) {
          return function (e) {
            return nt(t, e).length > 0;
          };
        }), contains: rt(function (t) {
          return function (e) {
            return (e.textContent || e.innerText || r(e)).indexOf(t) > -1;
          };
        }), lang: rt(function (t) {
          return U.test(t || "") || nt.error("unsupported lang: " + t), t = t.replace(tt, et).toLowerCase(), function (e) {
            var n;do {
              if (n = f ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);return !1;
          };
        }), target: function target(e) {
          var n = t.location && t.location.hash;return n && n.slice(1) === e.id;
        }, root: function root(t) {
          return t === h;
        }, focus: function focus(t) {
          return t === u.activeElement && (!u.hasFocus || u.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        }, enabled: function enabled(t) {
          return !1 === t.disabled;
        }, disabled: function disabled(t) {
          return !0 === t.disabled;
        }, checked: function checked(t) {
          var e = t.nodeName.toLowerCase();return "input" === e && !!t.checked || "option" === e && !!t.selected;
        }, selected: function selected(t) {
          return !0 === t.selected;
        }, empty: function empty(t) {
          for (t = t.firstChild; t; t = t.nextSibling) {
            if (t.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(t) {
          return !i.pseudos.empty(t);
        }, header: function header(t) {
          return G.test(t.nodeName);
        }, input: function input(t) {
          return X.test(t.nodeName);
        }, button: function button(t) {
          var e = t.nodeName.toLowerCase();return "input" === e && "button" === t.type || "button" === e;
        }, text: function text(t) {
          var e;return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
        }, first: ct(function () {
          return [0];
        }), last: ct(function (t, e) {
          return [e - 1];
        }), eq: ct(function (t, e, n) {
          return [0 > n ? n + e : n];
        }), even: ct(function (t, e) {
          for (var n = 0; e > n; n += 2) {
            t.push(n);
          }return t;
        }), odd: ct(function (t, e) {
          for (var n = 1; e > n; n += 2) {
            t.push(n);
          }return t;
        }), lt: ct(function (t, e, n) {
          for (var i = 0 > n ? n + e : n; --i >= 0;) {
            t.push(i);
          }return t;
        }), gt: ct(function (t, e, n) {
          for (var i = 0 > n ? n + e : n; ++i < e;) {
            t.push(i);
          }return t;
        }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      i.pseudos[e] = lt(e);
    }for (e in { submit: !0, reset: !0 }) {
      i.pseudos[e] = dt(e);
    }function ht() {}function ft(t, e) {
      var n,
          r,
          o,
          a,
          s,
          l,
          d,
          c = C[t + " "];if (c) return e ? 0 : c.slice(0);for (s = t, l = [], d = i.preFilter; s;) {
        for (a in (!n || (r = W.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = V.exec(s)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(j, " ") }), s = s.slice(n.length)), i.filter) {
          !(r = Y[a].exec(s)) || d[a] && !(r = d[a](r)) || (n = r.shift(), o.push({ value: n, type: a, matches: r }), s = s.slice(n.length));
        }if (!n) break;
      }return e ? s.length : s ? nt.error(t) : C(t, l).slice(0);
    }function pt(t) {
      for (var e = 0, n = t.length, i = ""; n > e; e++) {
        i += t[e].value;
      }return i;
    }function gt(t, e, n) {
      var i = e.dir,
          r = n && "parentNode" === i,
          o = w++;return e.first ? function (e, n, o) {
        for (; e = e[i];) {
          if (1 === e.nodeType || r) return t(e, n, o);
        }
      } : function (e, n, a) {
        var s,
            l,
            d = [x, o];if (a) {
          for (; e = e[i];) {
            if ((1 === e.nodeType || r) && t(e, n, a)) return !0;
          }
        } else for (; e = e[i];) {
          if (1 === e.nodeType || r) {
            if ((s = (l = e[b] || (e[b] = {}))[i]) && s[0] === x && s[1] === o) return d[2] = s[2];if (l[i] = d, d[2] = t(e, n, a)) return !0;
          }
        }
      };
    }function vt(t) {
      return t.length > 1 ? function (e, n, i) {
        for (var r = t.length; r--;) {
          if (!t[r](e, n, i)) return !1;
        }return !0;
      } : t[0];
    }function mt(t, e, n, i, r) {
      for (var o, a = [], s = 0, l = t.length, d = null != e; l > s; s++) {
        (o = t[s]) && (!n || n(o, i, r)) && (a.push(o), d && e.push(s));
      }return a;
    }function bt(t, e, n, i, r, o) {
      return i && !i[b] && (i = bt(i)), r && !r[b] && (r = bt(r, o)), rt(function (o, a, s, l) {
        var d,
            c,
            u,
            h = [],
            f = [],
            p = a.length,
            g = o || function (t, e, n) {
          for (var i = 0, r = e.length; r > i; i++) {
            nt(t, e[i], n);
          }return n;
        }(e || "*", s.nodeType ? [s] : s, []),
            v = !t || !o && e ? g : mt(g, h, t, s, l),
            m = n ? r || (o ? t : p || i) ? [] : a : v;if (n && n(v, m, s, l), i) for (d = mt(m, f), i(d, [], s, l), c = d.length; c--;) {
          (u = d[c]) && (m[f[c]] = !(v[f[c]] = u));
        }if (o) {
          if (r || t) {
            if (r) {
              for (d = [], c = m.length; c--;) {
                (u = m[c]) && d.push(v[c] = u);
              }r(null, m = [], d, l);
            }for (c = m.length; c--;) {
              (u = m[c]) && (d = r ? I.call(o, u) : h[c]) > -1 && (o[d] = !(a[d] = u));
            }
          }
        } else m = mt(m === a ? m.splice(p, m.length) : m), r ? r(null, a, m, l) : L.apply(a, m);
      });
    }function yt(t) {
      for (var e, n, r, o = t.length, a = i.relative[t[0].type], l = a || i.relative[" "], d = a ? 1 : 0, c = gt(function (t) {
        return t === e;
      }, l, !0), u = gt(function (t) {
        return I.call(e, t) > -1;
      }, l, !0), h = [function (t, n, i) {
        return !a && (i || n !== s) || ((e = n).nodeType ? c(t, n, i) : u(t, n, i));
      }]; o > d; d++) {
        if (n = i.relative[t[d].type]) h = [gt(vt(h), n)];else {
          if ((n = i.filter[t[d].type].apply(null, t[d].matches))[b]) {
            for (r = ++d; o > r && !i.relative[t[r].type]; r++) {}return bt(d > 1 && vt(h), d > 1 && pt(t.slice(0, d - 1).concat({ value: " " === t[d - 2].type ? "*" : "" })).replace(j, "$1"), n, r > d && yt(t.slice(d, r)), o > r && yt(t = t.slice(r)), o > r && pt(t));
          }h.push(n);
        }
      }return vt(h);
    }function xt(t, e) {
      var n = e.length > 0,
          r = t.length > 0,
          o = function o(_o, a, l, d, c) {
        var h,
            f,
            p,
            g = 0,
            v = "0",
            m = _o && [],
            b = [],
            y = s,
            w = _o || r && i.find.TAG("*", c),
            k = x += null == y ? 1 : Math.random() || .1,
            C = w.length;for (c && (s = a !== u && a); v !== C && null != (h = w[v]); v++) {
          if (r && h) {
            for (f = 0; p = t[f++];) {
              if (p(h, a, l)) {
                d.push(h);break;
              }
            }c && (x = k);
          }n && ((h = !p && h) && g--, _o && m.push(h));
        }if (g += v, n && v !== g) {
          for (f = 0; p = e[f++];) {
            p(m, b, a, l);
          }if (_o) {
            if (g > 0) for (; v--;) {
              m[v] || b[v] || (b[v] = D.call(d));
            }b = mt(b);
          }L.apply(d, b), c && !_o && b.length > 0 && g + e.length > 1 && nt.uniqueSort(d);
        }return c && (x = k, s = y), m;
      };return n ? rt(o) : o;
    }function wt(t, e, r, o) {
      var s,
          l,
          d,
          c,
          u,
          h = ft(t);if (!o && 1 === h.length) {
        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (d = l[0]).type && n.getById && 9 === e.nodeType && f && i.relative[l[1].type]) {
          if (!(e = (i.find.ID(d.matches[0].replace(tt, et), e) || [])[0])) return r;t = t.slice(l.shift().value.length);
        }for (s = Y.needsContext.test(t) ? 0 : l.length; s-- && !i.relative[c = (d = l[s]).type];) {
          if ((u = i.find[c]) && (o = u(d.matches[0].replace(tt, et), Z.test(l[0].type) && ut(e.parentNode) || e))) {
            if (l.splice(s, 1), !(t = o.length && pt(l))) return L.apply(r, o), r;break;
          }
        }
      }return a(t, h)(o, e, !f, r, Z.test(t) && ut(e.parentNode) || e), r;
    }return ht.prototype = i.filters = i.pseudos, i.setFilters = new ht(), a = nt.compile = function (t, e) {
      var n,
          i = [],
          r = [],
          o = M[t + " "];if (!o) {
        for (e || (e = ft(t)), n = e.length; n--;) {
          (o = yt(e[n]))[b] ? i.push(o) : r.push(o);
        }o = M(t, xt(r, i));
      }return o;
    }, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!d, c(), n.sortDetached = ot(function (t) {
      return 1 & t.compareDocumentPosition(u.createElement("div"));
    }), ot(function (t) {
      return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
    }) || at("type|href|height|width", function (t, e, n) {
      return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
    }), n.attributes && ot(function (t) {
      return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
    }) || at("value", function (t, e, n) {
      return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
    }), ot(function (t) {
      return null == t.getAttribute("disabled");
    }) || at(F, function (t, e, n) {
      var i;return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }), nt;
  }(t);f.find = y, f.expr = y.selectors, f.expr[":"] = f.expr.pseudos, f.unique = y.uniqueSort, f.text = y.getText, f.isXMLDoc = y.isXML, f.contains = y.contains;var x = f.expr.match.needsContext,
      w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      k = /^.[^:#\[\.,]*$/;function C(t, e, n) {
    if (f.isFunction(e)) return f.grep(t, function (t, i) {
      return !!e.call(t, i, t) !== n;
    });if (e.nodeType) return f.grep(t, function (t) {
      return t === e !== n;
    });if ("string" == typeof e) {
      if (k.test(e)) return f.filter(e, t, n);e = f.filter(e, t);
    }return f.grep(t, function (t) {
      return f.inArray(t, e) >= 0 !== n;
    });
  }f.filter = function (t, e, n) {
    var i = e[0];return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? f.find.matchesSelector(i, t) ? [i] : [] : f.find.matches(t, f.grep(e, function (t) {
      return 1 === t.nodeType;
    }));
  }, f.fn.extend({ find: function find(t) {
      var e,
          n = [],
          i = this,
          r = i.length;if ("string" != typeof t) return this.pushStack(f(t).filter(function () {
        for (e = 0; r > e; e++) {
          if (f.contains(i[e], this)) return !0;
        }
      }));for (e = 0; r > e; e++) {
        f.find(t, i[e], n);
      }return (n = this.pushStack(r > 1 ? f.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n;
    }, filter: function filter(t) {
      return this.pushStack(C(this, t || [], !1));
    }, not: function not(t) {
      return this.pushStack(C(this, t || [], !0));
    }, is: function is(t) {
      return !!C(this, "string" == typeof t && x.test(t) ? f(t) : t || [], !1).length;
    } });var M,
      S = t.document,
      T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(f.fn.init = function (t, e) {
    var n, i;if (!t) return this;if ("string" == typeof t) {
      if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : T.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || M).find(t) : this.constructor(e).find(t);if (n[1]) {
        if (f.merge(this, f.parseHTML(n[1], (e = e instanceof f ? e[0] : e) && e.nodeType ? e.ownerDocument || e : S, !0)), w.test(n[1]) && f.isPlainObject(e)) for (n in e) {
          f.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
        }return this;
      }if ((i = S.getElementById(n[2])) && i.parentNode) {
        if (i.id !== n[2]) return M.find(t);this.length = 1, this[0] = i;
      }return this.context = S, this.selector = t, this;
    }return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : f.isFunction(t) ? "undefined" != typeof M.ready ? M.ready(t) : t(f) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), f.makeArray(t, this));
  }).prototype = f.fn, M = f(S);var _ = /^(?:parents|prev(?:Until|All))/,
      A = { children: !0, contents: !0, next: !0, prev: !0 };function N(t, e) {
    do {
      t = t[e];
    } while (t && 1 !== t.nodeType);return t;
  }f.extend({ dir: function dir(t, e, n) {
      for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !f(r).is(n));) {
        1 === r.nodeType && i.push(r), r = r[e];
      }return i;
    }, sibling: function sibling(t, e) {
      for (var n = []; t; t = t.nextSibling) {
        1 === t.nodeType && t !== e && n.push(t);
      }return n;
    } }), f.fn.extend({ has: function has(t) {
      var e,
          n = f(t, this),
          i = n.length;return this.filter(function () {
        for (e = 0; i > e; e++) {
          if (f.contains(this, n[e])) return !0;
        }
      });
    }, closest: function closest(t, e) {
      for (var n, i = 0, r = this.length, o = [], a = x.test(t) || "string" != typeof t ? f(t, e || this.context) : 0; r > i; i++) {
        for (n = this[i]; n && n !== e; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && f.find.matchesSelector(n, t))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? f.unique(o) : o);
    }, index: function index(t) {
      return t ? "string" == typeof t ? f.inArray(this[0], f(t)) : f.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(t, e) {
      return this.pushStack(f.unique(f.merge(this.get(), f(t, e))));
    }, addBack: function addBack(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    } }), f.each({ parent: function parent(t) {
      var e = t.parentNode;return e && 11 !== e.nodeType ? e : null;
    }, parents: function parents(t) {
      return f.dir(t, "parentNode");
    }, parentsUntil: function parentsUntil(t, e, n) {
      return f.dir(t, "parentNode", n);
    }, next: function next(t) {
      return N(t, "nextSibling");
    }, prev: function prev(t) {
      return N(t, "previousSibling");
    }, nextAll: function nextAll(t) {
      return f.dir(t, "nextSibling");
    }, prevAll: function prevAll(t) {
      return f.dir(t, "previousSibling");
    }, nextUntil: function nextUntil(t, e, n) {
      return f.dir(t, "nextSibling", n);
    }, prevUntil: function prevUntil(t, e, n) {
      return f.dir(t, "previousSibling", n);
    }, siblings: function siblings(t) {
      return f.sibling((t.parentNode || {}).firstChild, t);
    }, children: function children(t) {
      return f.sibling(t.firstChild);
    }, contents: function contents(t) {
      return f.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : f.merge([], t.childNodes);
    } }, function (t, e) {
    f.fn[t] = function (n, i) {
      var r = f.map(this, e, n);return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = f.filter(i, r)), this.length > 1 && (A[t] || (r = f.unique(r)), _.test(t) && (r = r.reverse())), this.pushStack(r);
    };
  });var D,
      E = /\S+/g,
      L = {};function P() {
    S.addEventListener ? (S.removeEventListener("DOMContentLoaded", I, !1), t.removeEventListener("load", I, !1)) : (S.detachEvent("onreadystatechange", I), t.detachEvent("onload", I));
  }function I() {
    (S.addEventListener || "load" === event.type || "complete" === S.readyState) && (P(), f.ready());
  }f.Callbacks = function (t) {
    var e,
        n,
        i,
        r,
        o,
        a,
        s = [],
        l = !(t = "string" == typeof t ? L[t] || function (t) {
      var e = L[t] = {};return f.each(t.match(E) || [], function (t, n) {
        e[n] = !0;
      }), e;
    }(t) : f.extend({}, t)).once && [],
        d = function d(u) {
      for (n = t.memory && u, i = !0, o = a || 0, a = 0, r = s.length, e = !0; s && r > o; o++) {
        if (!1 === s[o].apply(u[0], u[1]) && t.stopOnFalse) {
          n = !1;break;
        }
      }e = !1, s && (l ? l.length && d(l.shift()) : n ? s = [] : c.disable());
    },
        c = { add: function add() {
        if (s) {
          var i = s.length;!function e(n) {
            f.each(n, function (n, i) {
              var r = f.type(i);"function" === r ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== r && e(i);
            });
          }(arguments), e ? r = s.length : n && (a = i, d(n));
        }return this;
      }, remove: function remove() {
        return s && f.each(arguments, function (t, n) {
          for (var i; (i = f.inArray(n, s, i)) > -1;) {
            s.splice(i, 1), e && (r >= i && r--, o >= i && o--);
          }
        }), this;
      }, has: function has(t) {
        return t ? f.inArray(t, s) > -1 : !(!s || !s.length);
      }, empty: function empty() {
        return s = [], r = 0, this;
      }, disable: function disable() {
        return s = l = n = void 0, this;
      }, disabled: function disabled() {
        return !s;
      }, lock: function lock() {
        return l = void 0, n || c.disable(), this;
      }, locked: function locked() {
        return !l;
      }, fireWith: function fireWith(t, n) {
        return !s || i && !l || (n = [t, (n = n || []).slice ? n.slice() : n], e ? l.push(n) : d(n)), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, f.extend({ Deferred: function Deferred(t) {
      var e = [["resolve", "done", f.Callbacks("once memory"), "resolved"], ["reject", "fail", f.Callbacks("once memory"), "rejected"], ["notify", "progress", f.Callbacks("memory")]],
          n = "pending",
          i = { state: function state() {
          return n;
        }, always: function always() {
          return r.done(arguments).fail(arguments), this;
        }, then: function then() {
          var t = arguments;return f.Deferred(function (n) {
            f.each(e, function (e, o) {
              var a = f.isFunction(t[e]) && t[e];r[o[1]](function () {
                var t = a && a.apply(this, arguments);t && f.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments);
              });
            }), t = null;
          }).promise();
        }, promise: function promise(t) {
          return null != t ? f.extend(t, i) : i;
        } },
          r = {};return i.pipe = i.then, f.each(e, function (t, o) {
        var a = o[2],
            s = o[3];i[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
          return r[o[0] + "With"](this === r ? i : this, arguments), this;
        }, r[o[0] + "With"] = a.fireWith;
      }), i.promise(r), t && t.call(r, r), r;
    }, when: function when(t) {
      var e,
          n,
          r,
          o = 0,
          a = i.call(arguments),
          s = a.length,
          l = 1 !== s || t && f.isFunction(t.promise) ? s : 0,
          d = 1 === l ? t : f.Deferred(),
          c = function c(t, n, r) {
        return function (o) {
          n[t] = this, r[t] = arguments.length > 1 ? i.call(arguments) : o, r === e ? d.notifyWith(n, r) : --l || d.resolveWith(n, r);
        };
      };if (s > 1) for (e = new Array(s), n = new Array(s), r = new Array(s); s > o; o++) {
        a[o] && f.isFunction(a[o].promise) ? a[o].promise().done(c(o, r, a)).fail(d.reject).progress(c(o, n, e)) : --l;
      }return l || d.resolveWith(r, a), d.promise();
    } }), f.fn.ready = function (t) {
    return f.ready.promise().done(t), this;
  }, f.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(t) {
      t ? f.readyWait++ : f.ready(!0);
    }, ready: function ready(t) {
      if (!0 === t ? ! --f.readyWait : !f.isReady) {
        if (!S.body) return setTimeout(f.ready);f.isReady = !0, !0 !== t && --f.readyWait > 0 || (D.resolveWith(S, [f]), f.fn.trigger && f(S).trigger("ready").off("ready"));
      }
    } }), f.ready.promise = function (e) {
    if (!D) if (D = f.Deferred(), "complete" === S.readyState) setTimeout(f.ready);else if (S.addEventListener) S.addEventListener("DOMContentLoaded", I, !1), t.addEventListener("load", I, !1);else {
      S.attachEvent("onreadystatechange", I), t.attachEvent("onload", I);var n = !1;try {
        n = null == t.frameElement && S.documentElement;
      } catch (t) {}n && n.doScroll && function t() {
        if (!f.isReady) {
          try {
            n.doScroll("left");
          } catch (e) {
            return setTimeout(t, 50);
          }P(), f.ready();
        }
      }();
    }return D.promise(e);
  };var F,
      O = "undefined";for (F in f(u)) {
    break;
  }u.ownLast = "0" !== F, u.inlineBlockNeedsLayout = !1, f(function () {
    var t,
        e,
        n = S.getElementsByTagName("body")[0];n && ((t = S.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", e = S.createElement("div"), n.appendChild(t).appendChild(e), _typeof(e.style.zoom) !== O && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (u.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)), n.removeChild(t), t = e = null);
  }), function () {
    var t = S.createElement("div");if (null == u.deleteExpando) {
      u.deleteExpando = !0;try {
        delete t.test;
      } catch (t) {
        u.deleteExpando = !1;
      }
    }t = null;
  }(), f.acceptData = function (t) {
    var e = f.noData[(t.nodeName + " ").toLowerCase()],
        n = +t.nodeType || 1;return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e);
  };var R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      H = /([A-Z])/g;function z(t, e, n) {
    if (void 0 === n && 1 === t.nodeType) {
      var i = "data-" + e.replace(H, "-$1").toLowerCase();if ("string" == typeof (n = t.getAttribute(i))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : R.test(n) ? f.parseJSON(n) : n);
        } catch (t) {}f.data(t, e, n);
      } else n = void 0;
    }return n;
  }function B(t) {
    var e;for (e in t) {
      if (("data" !== e || !f.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
    }return !0;
  }function j(t, e, i, r) {
    if (f.acceptData(t)) {
      var o,
          a,
          s = f.expando,
          l = t.nodeType,
          d = l ? f.cache : t,
          c = l ? t[s] : t[s] && s;if (c && d[c] && (r || d[c].data) || void 0 !== i || "string" != typeof e) return c || (c = l ? t[s] = n.pop() || f.guid++ : s), d[c] || (d[c] = l ? {} : { toJSON: f.noop }), ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && (r ? d[c] = f.extend(d[c], e) : d[c].data = f.extend(d[c].data, e)), a = d[c], r || (a.data || (a.data = {}), a = a.data), void 0 !== i && (a[f.camelCase(e)] = i), "string" == typeof e ? null == (o = a[e]) && (o = a[f.camelCase(e)]) : o = a, o;
    }
  }function W(t, e, n) {
    if (f.acceptData(t)) {
      var i,
          r,
          o = t.nodeType,
          a = o ? f.cache : t,
          s = o ? t[f.expando] : f.expando;if (a[s]) {
        if (e && (i = n ? a[s] : a[s].data)) {
          r = (e = f.isArray(e) ? e.concat(f.map(e, f.camelCase)) : e in i ? [e] : (e = f.camelCase(e)) in i ? [e] : e.split(" ")).length;for (; r--;) {
            delete i[e[r]];
          }if (n ? !B(i) : !f.isEmptyObject(i)) return;
        }(n || (delete a[s].data, B(a[s]))) && (o ? f.cleanData([t], !0) : u.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
      }
    }
  }f.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(t) {
      return !!(t = t.nodeType ? f.cache[t[f.expando]] : t[f.expando]) && !B(t);
    }, data: function data(t, e, n) {
      return j(t, e, n);
    }, removeData: function removeData(t, e) {
      return W(t, e);
    }, _data: function _data(t, e, n) {
      return j(t, e, n, !0);
    }, _removeData: function _removeData(t, e) {
      return W(t, e, !0);
    } }), f.fn.extend({ data: function data(t, e) {
      var n,
          i,
          r,
          o = this[0],
          a = o && o.attributes;if (void 0 === t) {
        if (this.length && (r = f.data(o), 1 === o.nodeType && !f._data(o, "parsedAttrs"))) {
          for (n = a.length; n--;) {
            0 === (i = a[n].name).indexOf("data-") && z(o, i = f.camelCase(i.slice(5)), r[i]);
          }f._data(o, "parsedAttrs", !0);
        }return r;
      }return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? this.each(function () {
        f.data(this, t);
      }) : arguments.length > 1 ? this.each(function () {
        f.data(this, t, e);
      }) : o ? z(o, t, f.data(o, t)) : void 0;
    }, removeData: function removeData(t) {
      return this.each(function () {
        f.removeData(this, t);
      });
    } }), f.extend({ queue: function queue(t, e, n) {
      var i;return t ? (i = f._data(t, e = (e || "fx") + "queue"), n && (!i || f.isArray(n) ? i = f._data(t, e, f.makeArray(n)) : i.push(n)), i || []) : void 0;
    }, dequeue: function dequeue(t, e) {
      var n = f.queue(t, e = e || "fx"),
          i = n.length,
          r = n.shift(),
          o = f._queueHooks(t, e);"inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
        f.dequeue(t, e);
      }, o)), !i && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(t, e) {
      var n = e + "queueHooks";return f._data(t, n) || f._data(t, n, { empty: f.Callbacks("once memory").add(function () {
          f._removeData(t, e + "queue"), f._removeData(t, n);
        }) });
    } }), f.fn.extend({ queue: function queue(t, e) {
      var n = 2;return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? f.queue(this[0], t) : void 0 === e ? this : this.each(function () {
        var n = f.queue(this, t, e);f._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && f.dequeue(this, t);
      });
    }, dequeue: function dequeue(t) {
      return this.each(function () {
        f.dequeue(this, t);
      });
    }, clearQueue: function clearQueue(t) {
      return this.queue(t || "fx", []);
    }, promise: function promise(t, e) {
      var n,
          i = 1,
          r = f.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --i || r.resolveWith(o, [o]);
      };for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) {
        (n = f._data(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
      }return s(), r.promise(e);
    } });var V = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      q = ["Top", "Right", "Bottom", "Left"],
      $ = function $(t, e) {
    return "none" === f.css(t = e || t, "display") || !f.contains(t.ownerDocument, t);
  },
      U = f.access = function (t, e, n, i, r, o, a) {
    var s = 0,
        l = t.length,
        d = null == n;if ("object" === f.type(n)) for (s in r = !0, n) {
      f.access(t, e, s, n[s], !0, o, a);
    } else if (void 0 !== i && (r = !0, f.isFunction(i) || (a = !0), d && (a ? (e.call(t, i), e = null) : (d = e, e = function e(t, _e2, n) {
      return d.call(f(t), n);
    })), e)) for (; l > s; s++) {
      e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
    }return r ? t : d ? e.call(t) : l ? e(t[0], n) : o;
  },
      Y = /^(?:checkbox|radio)$/i;!function () {
    var t = S.createDocumentFragment(),
        e = S.createElement("div"),
        n = S.createElement("input");if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", u.leadingWhitespace = 3 === e.firstChild.nodeType, u.tbody = !e.getElementsByTagName("tbody").length, u.htmlSerialize = !!e.getElementsByTagName("link").length, u.html5Clone = "<:nav></:nav>" !== S.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), u.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
      u.noCloneEvent = !1;
    }), e.cloneNode(!0).click()), null == u.deleteExpando) {
      u.deleteExpando = !0;try {
        delete e.test;
      } catch (t) {
        u.deleteExpando = !1;
      }
    }t = e = n = null;
  }(), function () {
    var e,
        n,
        i = S.createElement("div");for (e in { submit: !0, change: !0, focusin: !0 }) {
      (u[e + "Bubbles"] = (n = "on" + e) in t) || (i.setAttribute(n, "t"), u[e + "Bubbles"] = !1 === i.attributes[n].expando);
    }i = null;
  }();var X = /^(?:input|select|textarea)$/i,
      G = /^key/,
      K = /^(?:mouse|contextmenu)|click/,
      J = /^(?:focusinfocus|focusoutblur)$/,
      Z = /^([^.]*)(?:\.(.+)|)$/;function Q() {
    return !0;
  }function tt() {
    return !1;
  }function et() {
    try {
      return S.activeElement;
    } catch (t) {}
  }function nt(t) {
    var e = it.split("|"),
        n = t.createDocumentFragment();if (n.createElement) for (; e.length;) {
      n.createElement(e.pop());
    }return n;
  }f.event = { global: {}, add: function add(t, e, n, i, r) {
      var o,
          a,
          s,
          l,
          d,
          c,
          u,
          h,
          p,
          g,
          v,
          m = f._data(t);if (m) {
        for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = f.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || ((c = m.handle = function (t) {
          return (typeof f === "undefined" ? "undefined" : _typeof(f)) === O || t && f.event.triggered === t.type ? void 0 : f.event.dispatch.apply(c.elem, arguments);
        }).elem = t), s = (e = (e || "").match(E) || [""]).length; s--;) {
          p = v = (o = Z.exec(e[s]) || [])[1], g = (o[2] || "").split(".").sort(), p && (d = f.event.special[p] || {}, d = f.event.special[p = (r ? d.delegateType : d.bindType) || p] || {}, u = f.extend({ type: p, origType: v, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && f.expr.match.needsContext.test(r), namespace: g.join(".") }, l), (h = a[p]) || ((h = a[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, g, c) || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), f.event.global[p] = !0);
        }t = null;
      }
    }, remove: function remove(t, e, n, i, r) {
      var o,
          a,
          s,
          l,
          d,
          c,
          u,
          h,
          p,
          g,
          v,
          m = f.hasData(t) && f._data(t);if (m && (c = m.events)) {
        for (d = (e = (e || "").match(E) || [""]).length; d--;) {
          if (p = v = (s = Z.exec(e[d]) || [])[1], g = (s[2] || "").split(".").sort(), p) {
            for (u = f.event.special[p] || {}, h = c[p = (i ? u.delegateType : u.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) {
              a = h[o], !r && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, u.remove && u.remove.call(t, a));
            }l && !h.length && (u.teardown && !1 !== u.teardown.call(t, g, m.handle) || f.removeEvent(t, p, m.handle), delete c[p]);
          } else for (p in c) {
            f.event.remove(t, p + e[d], n, i, !0);
          }
        }f.isEmptyObject(c) && (delete m.handle, f._removeData(t, "events"));
      }
    }, trigger: function trigger(e, n, i, r) {
      var o,
          a,
          s,
          l,
          c,
          u,
          h,
          p = [i || S],
          g = d.call(e, "type") ? e.type : e,
          v = d.call(e, "namespace") ? e.namespace.split(".") : [];if (s = u = i = i || S, 3 !== i.nodeType && 8 !== i.nodeType && !J.test(g + f.event.triggered) && (g.indexOf(".") >= 0 && (g = (v = g.split(".")).shift(), v.sort()), a = g.indexOf(":") < 0 && "on" + g, (e = e[f.expando] ? e : new f.Event(g, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e)).isTrigger = r ? 2 : 3, e.namespace = v.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : f.makeArray(n, [e]), c = f.event.special[g] || {}, r || !c.trigger || !1 !== c.trigger.apply(i, n))) {
        if (!r && !c.noBubble && !f.isWindow(i)) {
          for (J.test((l = c.delegateType || g) + g) || (s = s.parentNode); s; s = s.parentNode) {
            p.push(s), u = s;
          }u === (i.ownerDocument || S) && p.push(u.defaultView || u.parentWindow || t);
        }for (h = 0; (s = p[h++]) && !e.isPropagationStopped();) {
          e.type = h > 1 ? l : c.bindType || g, (o = (f._data(s, "events") || {})[e.type] && f._data(s, "handle")) && o.apply(s, n), (o = a && s[a]) && o.apply && f.acceptData(s) && (e.result = o.apply(s, n), !1 === e.result && e.preventDefault());
        }if (e.type = g, !r && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), n)) && f.acceptData(i) && a && i[g] && !f.isWindow(i)) {
          (u = i[a]) && (i[a] = null), f.event.triggered = g;try {
            i[g]();
          } catch (t) {}f.event.triggered = void 0, u && (i[a] = u);
        }return e.result;
      }
    }, dispatch: function dispatch(t) {
      t = f.event.fix(t);var e,
          n,
          r,
          o,
          a,
          s = [],
          l = i.call(arguments),
          d = (f._data(this, "events") || {})[t.type] || [],
          c = f.event.special[t.type] || {};if (l[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        for (s = f.event.handlers.call(this, t, d), e = 0; (o = s[e++]) && !t.isPropagationStopped();) {
          for (t.currentTarget = o.elem, a = 0; (r = o.handlers[a++]) && !t.isImmediatePropagationStopped();) {
            (!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, void 0 !== (n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function handlers(t, e) {
      var n,
          i,
          r,
          o,
          a = [],
          s = e.delegateCount,
          l = t.target;if (s && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) {
        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
          for (r = [], o = 0; s > o; o++) {
            void 0 === r[n = (i = e[o]).selector + " "] && (r[n] = i.needsContext ? f(n, this).index(l) >= 0 : f.find(n, this, null, [l]).length), r[n] && r.push(i);
          }r.length && a.push({ elem: l, handlers: r });
        }
      }return s < e.length && a.push({ elem: this, handlers: e.slice(s) }), a;
    }, fix: function fix(t) {
      if (t[f.expando]) return t;var e,
          n,
          i,
          r = t.type,
          o = t,
          a = this.fixHooks[r];for (a || (this.fixHooks[r] = a = K.test(r) ? this.mouseHooks : G.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new f.Event(o), e = i.length; e--;) {
        t[n = i[e]] = o[n];
      }return t.target || (t.target = o.srcElement || S), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(t, e) {
        var n,
            i,
            r,
            o = e.button,
            a = e.fromElement;return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || S).body, t.pageX = e.clientX + ((r = i.documentElement) && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== et() && this.focus) try {
            return this.focus(), !1;
          } catch (t) {}
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === et() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return f.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        }, _default: function _default(t) {
          return f.nodeName(t.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(t) {
          void 0 !== t.result && (t.originalEvent.returnValue = t.result);
        } } }, simulate: function simulate(t, e, n, i) {
      var r = f.extend(new f.Event(), n, { type: t, isSimulated: !0, originalEvent: {} });i ? f.event.trigger(r, null, e) : f.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault();
    } }, f.removeEvent = S.removeEventListener ? function (t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n, !1);
  } : function (t, e, n) {
    var i = "on" + e;t.detachEvent && (_typeof(t[i]) === O && (t[i] = null), t.detachEvent(i, n));
  }, f.Event = function (t, e) {
    return this instanceof f.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (!1 === t.returnValue || t.getPreventDefault && t.getPreventDefault()) ? Q : tt) : this.type = t, e && f.extend(this, e), this.timeStamp = t && t.timeStamp || f.now(), void (this[f.expando] = !0)) : new f.Event(t, e);
  }, f.Event.prototype = { isDefaultPrevented: tt, isPropagationStopped: tt, isImmediatePropagationStopped: tt, preventDefault: function preventDefault() {
      var t = this.originalEvent;this.isDefaultPrevented = Q, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
    }, stopPropagation: function stopPropagation() {
      var t = this.originalEvent;this.isPropagationStopped = Q, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0);
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = Q, this.stopPropagation();
    } }, f.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (t, e) {
    f.event.special[t] = { delegateType: e, bindType: e, handle: function handle(t) {
        var n,
            i = t.relatedTarget,
            r = t.handleObj;return (!i || i !== this && !f.contains(this, i)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n;
      } };
  }), u.submitBubbles || (f.event.special.submit = { setup: function setup() {
      return !f.nodeName(this, "form") && void f.event.add(this, "click._submit keypress._submit", function (t) {
        var e = t.target,
            n = f.nodeName(e, "input") || f.nodeName(e, "button") ? e.form : void 0;n && !f._data(n, "submitBubbles") && (f.event.add(n, "submit._submit", function (t) {
          t._submit_bubble = !0;
        }), f._data(n, "submitBubbles", !0));
      });
    }, postDispatch: function postDispatch(t) {
      t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && f.event.simulate("submit", this.parentNode, t, !0));
    }, teardown: function teardown() {
      return !f.nodeName(this, "form") && void f.event.remove(this, "._submit");
    } }), u.changeBubbles || (f.event.special.change = { setup: function setup() {
      return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (f.event.add(this, "propertychange._change", function (t) {
        "checked" === t.originalEvent.propertyName && (this._just_changed = !0);
      }), f.event.add(this, "click._change", function (t) {
        this._just_changed && !t.isTrigger && (this._just_changed = !1), f.event.simulate("change", this, t, !0);
      })), !1) : void f.event.add(this, "beforeactivate._change", function (t) {
        var e = t.target;X.test(e.nodeName) && !f._data(e, "changeBubbles") && (f.event.add(e, "change._change", function (t) {
          !this.parentNode || t.isSimulated || t.isTrigger || f.event.simulate("change", this.parentNode, t, !0);
        }), f._data(e, "changeBubbles", !0));
      });
    }, handle: function handle(t) {
      var e = t.target;return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0;
    }, teardown: function teardown() {
      return f.event.remove(this, "._change"), !X.test(this.nodeName);
    } }), u.focusinBubbles || f.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
    var n = function n(t) {
      f.event.simulate(e, t.target, f.event.fix(t), !0);
    };f.event.special[e] = { setup: function setup() {
        var i = this.ownerDocument || this,
            r = f._data(i, e);r || i.addEventListener(t, n, !0), f._data(i, e, (r || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            r = f._data(i, e) - 1;r ? f._data(i, e, r) : (i.removeEventListener(t, n, !0), f._removeData(i, e));
      } };
  }), f.fn.extend({ on: function on(t, e, n, i, r) {
      var o, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        for (o in "string" != typeof e && (n = n || e, e = void 0), t) {
          this.on(o, e, n, t[o], r);
        }return this;
      }if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), !1 === i) i = tt;else if (!i) return this;return 1 === r && (a = i, (i = function i(t) {
        return f().off(t), a.apply(this, arguments);
      }).guid = a.guid || (a.guid = f.guid++)), this.each(function () {
        f.event.add(this, t, i, n, e);
      });
    }, one: function one(t, e, n, i) {
      return this.on(t, e, n, i, 1);
    }, off: function off(t, e, n) {
      var i, r;if (t && t.preventDefault && t.handleObj) return i = t.handleObj, f(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        for (r in t) {
          this.off(r, e, t[r]);
        }return this;
      }return (!1 === e || "function" == typeof e) && (n = e, e = void 0), !1 === n && (n = tt), this.each(function () {
        f.event.remove(this, t, n, e);
      });
    }, trigger: function trigger(t, e) {
      return this.each(function () {
        f.event.trigger(t, e, this);
      });
    }, triggerHandler: function triggerHandler(t, e) {
      var n = this[0];return n ? f.event.trigger(t, e, n, !0) : void 0;
    } });var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      rt = / jQuery\d+="(?:null|\d+)"/g,
      ot = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
      at = /^\s+/,
      st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      lt = /<([\w:]+)/,
      dt = /<tbody/i,
      ct = /<|&#?\w+;/,
      ut = /<(?:script|style|link)/i,
      ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ft = /^$|\/(?:java|ecma)script/i,
      pt = /^true\/(.*)/,
      gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      vt = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
      mt = nt(S).appendChild(S.createElement("div"));function bt(t, e) {
    var n,
        i,
        r = 0,
        o = _typeof(t.getElementsByTagName) !== O ? t.getElementsByTagName(e || "*") : _typeof(t.querySelectorAll) !== O ? t.querySelectorAll(e || "*") : void 0;if (!o) for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) {
      !e || f.nodeName(i, e) ? o.push(i) : f.merge(o, bt(i, e));
    }return void 0 === e || e && f.nodeName(t, e) ? f.merge([t], o) : o;
  }function yt(t) {
    Y.test(t.type) && (t.defaultChecked = t.checked);
  }function xt(t, e) {
    return f.nodeName(t, "table") && f.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
  }function wt(t) {
    return t.type = (null !== f.find.attr(t, "type")) + "/" + t.type, t;
  }function kt(t) {
    var e = pt.exec(t.type);return e ? t.type = e[1] : t.removeAttribute("type"), t;
  }function Ct(t, e) {
    for (var n, i = 0; null != (n = t[i]); i++) {
      f._data(n, "globalEval", !e || f._data(e[i], "globalEval"));
    }
  }function Mt(t, e) {
    if (1 === e.nodeType && f.hasData(t)) {
      var n,
          i,
          r,
          o = f._data(t),
          a = f._data(e, o),
          s = o.events;if (s) for (n in delete a.handle, a.events = {}, s) {
        for (i = 0, r = s[n].length; r > i; i++) {
          f.event.add(e, n, s[n][i]);
        }
      }a.data && (a.data = f.extend({}, a.data));
    }
  }function St(t, e) {
    var n, i, r;if (1 === e.nodeType) {
      if (n = e.nodeName.toLowerCase(), !u.noCloneEvent && e[f.expando]) {
        for (i in (r = f._data(e)).events) {
          f.removeEvent(e, i, r.handle);
        }e.removeAttribute(f.expando);
      }"script" === n && e.text !== t.text ? (wt(e).text = t.text, kt(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), u.html5Clone && t.innerHTML && !f.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Y.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue);
    }
  }vt.optgroup = vt.option, vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead, vt.th = vt.td, f.extend({ clone: function clone(t, e, n) {
      var i,
          r,
          o,
          a,
          s,
          l = f.contains(t.ownerDocument, t);if (u.html5Clone || f.isXMLDoc(t) || !ot.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (mt.innerHTML = t.outerHTML, mt.removeChild(o = mt.firstChild)), !(u.noCloneEvent && u.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || f.isXMLDoc(t))) for (i = bt(o), s = bt(t), a = 0; null != (r = s[a]); ++a) {
        i[a] && St(r, i[a]);
      }if (e) if (n) for (s = s || bt(t), i = i || bt(o), a = 0; null != (r = s[a]); a++) {
        Mt(r, i[a]);
      } else Mt(t, o);return (i = bt(o, "script")).length > 0 && Ct(i, !l && bt(t, "script")), i = s = r = null, o;
    }, buildFragment: function buildFragment(t, e, n, i) {
      for (var r, o, a, s, l, d, c, h = t.length, p = nt(e), g = [], v = 0; h > v; v++) {
        if ((o = t[v]) || 0 === o) if ("object" === f.type(o)) f.merge(g, o.nodeType ? [o] : o);else if (ct.test(o)) {
          for (s = s || p.appendChild(e.createElement("div")), l = (lt.exec(o) || ["", ""])[1].toLowerCase(), s.innerHTML = (c = vt[l] || vt._default)[1] + o.replace(st, "<$1></$2>") + c[2], r = c[0]; r--;) {
            s = s.lastChild;
          }if (!u.leadingWhitespace && at.test(o) && g.push(e.createTextNode(at.exec(o)[0])), !u.tbody) for (r = (o = "table" !== l || dt.test(o) ? "<table>" !== c[1] || dt.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; r--;) {
            f.nodeName(d = o.childNodes[r], "tbody") && !d.childNodes.length && o.removeChild(d);
          }for (f.merge(g, s.childNodes), s.textContent = ""; s.firstChild;) {
            s.removeChild(s.firstChild);
          }s = p.lastChild;
        } else g.push(e.createTextNode(o));
      }for (s && p.removeChild(s), u.appendChecked || f.grep(bt(g, "input"), yt), v = 0; o = g[v++];) {
        if ((!i || -1 === f.inArray(o, i)) && (a = f.contains(o.ownerDocument, o), s = bt(p.appendChild(o), "script"), a && Ct(s), n)) for (r = 0; o = s[r++];) {
          ft.test(o.type || "") && n.push(o);
        }
      }return s = null, p;
    }, cleanData: function cleanData(t, e) {
      for (var i, r, o, a, s = 0, l = f.expando, d = f.cache, c = u.deleteExpando, h = f.event.special; null != (i = t[s]); s++) {
        if ((e || f.acceptData(i)) && (a = (o = i[l]) && d[o])) {
          if (a.events) for (r in a.events) {
            h[r] ? f.event.remove(i, r) : f.removeEvent(i, r, a.handle);
          }d[o] && (delete d[o], c ? delete i[l] : _typeof(i.removeAttribute) !== O ? i.removeAttribute(l) : i[l] = null, n.push(o));
        }
      }
    } }), f.fn.extend({ text: function text(t) {
      return U(this, function (t) {
        return void 0 === t ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || S).createTextNode(t));
      }, null, t, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || xt(this, t).appendChild(t);
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = xt(this, t);e.insertBefore(t, e.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    }, remove: function remove(t, e) {
      for (var n, i = t ? f.filter(t, this) : this, r = 0; null != (n = i[r]); r++) {
        e || 1 !== n.nodeType || f.cleanData(bt(n)), n.parentNode && (e && f.contains(n.ownerDocument, n) && Ct(bt(n, "script")), n.parentNode.removeChild(n));
      }return this;
    }, empty: function empty() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        for (1 === t.nodeType && f.cleanData(bt(t, !1)); t.firstChild;) {
          t.removeChild(t.firstChild);
        }t.options && f.nodeName(t, "select") && (t.options.length = 0);
      }return this;
    }, clone: function clone(t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return f.clone(this, t, e);
      });
    }, html: function html(t) {
      return U(this, function (t) {
        var e = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(rt, "") : void 0;if (!("string" != typeof t || ut.test(t) || !u.htmlSerialize && ot.test(t) || !u.leadingWhitespace && at.test(t) || vt[(lt.exec(t) || ["", ""])[1].toLowerCase()])) {
          t = t.replace(st, "<$1></$2>");try {
            for (; i > n; n++) {
              1 === (e = this[n] || {}).nodeType && (f.cleanData(bt(e, !1)), e.innerHTML = t);
            }e = 0;
          } catch (t) {}
        }e && this.empty().append(t);
      }, null, t, arguments.length);
    }, replaceWith: function replaceWith() {
      var t = arguments[0];return this.domManip(arguments, function (e) {
        t = this.parentNode, f.cleanData(bt(this)), t && t.replaceChild(e, this);
      }), t && (t.length || t.nodeType) ? this : this.remove();
    }, detach: function detach(t) {
      return this.remove(t, !0);
    }, domManip: function domManip(t, e) {
      t = r.apply([], t);var n,
          i,
          o,
          a,
          s,
          l,
          d = 0,
          c = this.length,
          h = this,
          p = c - 1,
          g = t[0],
          v = f.isFunction(g);if (v || c > 1 && "string" == typeof g && !u.checkClone && ht.test(g)) return this.each(function (n) {
        var i = h.eq(n);v && (t[0] = g.call(this, n, i.html())), i.domManip(t, e);
      });if (c && (n = (l = f.buildFragment(t, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = n), n)) {
        for (o = (a = f.map(bt(l, "script"), wt)).length; c > d; d++) {
          i = l, d !== p && (i = f.clone(i, !0, !0), o && f.merge(a, bt(i, "script"))), e.call(this[d], i, d);
        }if (o) for (s = a[a.length - 1].ownerDocument, f.map(a, kt), d = 0; o > d; d++) {
          ft.test((i = a[d]).type || "") && !f._data(i, "globalEval") && f.contains(s, i) && (i.src ? f._evalUrl && f._evalUrl(i.src) : f.globalEval((i.text || i.textContent || i.innerHTML || "").replace(gt, "")));
        }l = n = null;
      }return this;
    } }), f.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
    f.fn[t] = function (t) {
      for (var n, i = 0, r = [], a = f(t), s = a.length - 1; s >= i; i++) {
        n = i === s ? this : this.clone(!0), f(a[i])[e](n), o.apply(r, n.get());
      }return this.pushStack(r);
    };
  });var Tt,
      _t = {};function At(e, n) {
    var i = f(n.createElement(e)).appendTo(n.body),
        r = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(i[0]).display : f.css(i[0], "display");return i.detach(), r;
  }function Nt(t) {
    var e = S,
        n = _t[t];return n || ("none" !== (n = At(t, e)) && n || ((e = ((Tt = (Tt || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || Tt[0].contentDocument).document).write(), e.close(), n = At(t, e), Tt.detach()), _t[t] = n), n;
  }!function () {
    var t,
        e,
        n = S.createElement("div");n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (t = n.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", u.opacity = /^0.5/.test(t.style.opacity), u.cssFloat = !!t.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === n.style.backgroundClip, t = n = null, u.shrinkWrapBlocks = function () {
      var t, n, i;if (null == e) {
        if (!(t = S.getElementsByTagName("body")[0])) return;n = S.createElement("div"), i = S.createElement("div"), t.appendChild(n).appendChild(i), e = !1, _typeof(i.style.zoom) !== O && (i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", e = 3 !== i.offsetWidth), t.removeChild(n), t = n = i = null;
      }return e;
    };
  }();var Dt,
      Et,
      Lt = /^margin/,
      Pt = new RegExp("^(" + V + ")(?!px)[a-z%]+$", "i"),
      It = /^(top|right|bottom|left)$/;function Ft(t, e) {
    return { get: function get() {
        var n = t();if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments);
      } };
  }t.getComputedStyle ? (Dt = function Dt(t) {
    return t.ownerDocument.defaultView.getComputedStyle(t, null);
  }, Et = function Et(t, e, n) {
    var i,
        r,
        o,
        a,
        s = t.style;return a = (n = n || Dt(t)) ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || f.contains(t.ownerDocument, t) || (a = f.style(t, e)), Pt.test(a) && Lt.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + "";
  }) : S.documentElement.currentStyle && (Dt = function Dt(t) {
    return t.currentStyle;
  }, Et = function Et(t, e, n) {
    var i,
        r,
        o,
        a,
        s = t.style;return null == (a = (n = n || Dt(t)) ? n[e] : void 0) && s && s[e] && (a = s[e]), Pt.test(a) && !It.test(e) && (i = s.left, (o = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto";
  }), function () {
    var e,
        n,
        i,
        r,
        o,
        a,
        s = S.createElement("div"),
        l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";function d() {
      var e,
          n,
          s = S.getElementsByTagName("body")[0];s && (e = S.createElement("div"), n = S.createElement("div"), e.style.cssText = l, s.appendChild(e).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", f.swap(s, null != s.style.zoom ? { zoom: 1 } : {}, function () {
        i = 4 === n.offsetWidth;
      }), r = !0, o = !1, a = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(n, null) || {}).top, r = "4px" === (t.getComputedStyle(n, null) || { width: "4px" }).width), s.removeChild(e), n = s = null);
    }s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (e = s.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", u.opacity = /^0.5/.test(e.style.opacity), u.cssFloat = !!e.style.cssFloat, s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === s.style.backgroundClip, e = s = null, f.extend(u, { reliableHiddenOffsets: function reliableHiddenOffsets() {
        if (null != n) return n;var t,
            e,
            i,
            r = S.createElement("div"),
            o = S.getElementsByTagName("body")[0];return o ? (r.setAttribute("className", "t"), r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (t = S.createElement("div")).style.cssText = l, o.appendChild(t).appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (e = r.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", i = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", n = i && 0 === e[0].offsetHeight, o.removeChild(t), r = o = null, n) : void 0;
      }, boxSizing: function boxSizing() {
        return null == i && d(), i;
      }, boxSizingReliable: function boxSizingReliable() {
        return null == r && d(), r;
      }, pixelPosition: function pixelPosition() {
        return null == o && d(), o;
      }, reliableMarginRight: function reliableMarginRight() {
        var e, n, i, r;if (null == a && t.getComputedStyle) {
          if (!(e = S.getElementsByTagName("body")[0])) return;n = S.createElement("div"), i = S.createElement("div"), n.style.cssText = l, e.appendChild(n).appendChild(i), (r = i.appendChild(S.createElement("div"))).style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0", r.style.marginRight = r.style.width = "0", i.style.width = "1px", a = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(n);
        }return a;
      } });
  }(), f.swap = function (t, e, n, i) {
    var r,
        o,
        a = {};for (o in e) {
      a[o] = t.style[o], t.style[o] = e[o];
    }for (o in r = n.apply(t, i || []), e) {
      t.style[o] = a[o];
    }return r;
  };var Ot = /alpha\([^)]*\)/i,
      Rt = /opacity\s*=\s*([^)]*)/,
      Ht = /^(none|table(?!-c[ea]).+)/,
      zt = new RegExp("^(" + V + ")(.*)$", "i"),
      Bt = new RegExp("^([+-])=(" + V + ")", "i"),
      jt = { position: "absolute", visibility: "hidden", display: "block" },
      Wt = { letterSpacing: 0, fontWeight: 400 },
      Vt = ["Webkit", "O", "Moz", "ms"];function qt(t, e) {
    if (e in t) return e;for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = Vt.length; r--;) {
      if ((e = Vt[r] + n) in t) return e;
    }return i;
  }function $t(t, e) {
    for (var n, i, r, o = [], a = 0, s = t.length; s > a; a++) {
      (i = t[a]).style && (o[a] = f._data(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $(i) && (o[a] = f._data(i, "olddisplay", Nt(i.nodeName)))) : o[a] || (r = $(i), (n && "none" !== n || !r) && f._data(i, "olddisplay", r ? n : f.css(i, "display"))));
    }for (a = 0; s > a; a++) {
      (i = t[a]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
    }return t;
  }function Ut(t, e, n) {
    var i = zt.exec(e);return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
  }function Yt(t, e, n, i, r) {
    for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) {
      "margin" === n && (a += f.css(t, n + q[o], !0, r)), i ? ("content" === n && (a -= f.css(t, "padding" + q[o], !0, r)), "margin" !== n && (a -= f.css(t, "border" + q[o] + "Width", !0, r))) : (a += f.css(t, "padding" + q[o], !0, r), "padding" !== n && (a += f.css(t, "border" + q[o] + "Width", !0, r)));
    }return a;
  }function Xt(t, e, n) {
    var i = !0,
        r = "width" === e ? t.offsetWidth : t.offsetHeight,
        o = Dt(t),
        a = u.boxSizing() && "border-box" === f.css(t, "boxSizing", !1, o);if (0 >= r || null == r) {
      if ((0 > (r = Et(t, e, o)) || null == r) && (r = t.style[e]), Pt.test(r)) return r;i = a && (u.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0;
    }return r + Yt(t, e, n || (a ? "border" : "content"), i, o) + "px";
  }function Gt(t, e, n, i, r) {
    return new Gt.prototype.init(t, e, n, i, r);
  }f.extend({ cssHooks: { opacity: { get: function get(t, e) {
          if (e) {
            var n = Et(t, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: u.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r,
            o,
            a,
            s = f.camelCase(e),
            l = t.style;if (e = f.cssProps[s] || (f.cssProps[s] = qt(l, s)), a = f.cssHooks[e] || f.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e];if ("string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (r = Bt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(f.css(t, e)), o = "number"), null != n && n == n && ("number" !== o || f.cssNumber[s] || (n += "px"), u.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
          l[e] = "", l[e] = n;
        } catch (t) {}
      }
    }, css: function css(t, e, n, i) {
      var r,
          o,
          a,
          s = f.camelCase(e);return e = f.cssProps[s] || (f.cssProps[s] = qt(t.style, s)), (a = f.cssHooks[e] || f.cssHooks[s]) && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = Et(t, e, i)), "normal" === o && e in Wt && (o = Wt[e]), "" === n || n ? (r = parseFloat(o), !0 === n || f.isNumeric(r) ? r || 0 : o) : o;
    } }), f.each(["height", "width"], function (t, e) {
    f.cssHooks[e] = { get: function get(t, n, i) {
        return n ? 0 === t.offsetWidth && Ht.test(f.css(t, "display")) ? f.swap(t, jt, function () {
          return Xt(t, e, i);
        }) : Xt(t, e, i) : void 0;
      }, set: function set(t, n, i) {
        var r = i && Dt(t);return Ut(0, n, i ? Yt(t, e, i, u.boxSizing() && "border-box" === f.css(t, "boxSizing", !1, r), r) : 0);
      } };
  }), u.opacity || (f.cssHooks.opacity = { get: function get(t, e) {
      return Rt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
    }, set: function set(t, e) {
      var n = t.style,
          i = t.currentStyle,
          r = f.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
          o = i && i.filter || n.filter || "";n.zoom = 1, (e >= 1 || "" === e) && "" === f.trim(o.replace(Ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = Ot.test(o) ? o.replace(Ot, r) : o + " " + r);
    } }), f.cssHooks.marginRight = Ft(u.reliableMarginRight, function (t, e) {
    return e ? f.swap(t, { display: "inline-block" }, Et, [t, "marginRight"]) : void 0;
  }), f.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
    f.cssHooks[t + e] = { expand: function expand(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) {
          r[t + q[i] + e] = o[i] || o[i - 2] || o[0];
        }return r;
      } }, Lt.test(t) || (f.cssHooks[t + e].set = Ut);
  }), f.fn.extend({ css: function css(t, e) {
      return U(this, function (t, e, n) {
        var i,
            r,
            o = {},
            a = 0;if (f.isArray(e)) {
          for (i = Dt(t), r = e.length; r > a; a++) {
            o[e[a]] = f.css(t, e[a], !1, i);
          }return o;
        }return void 0 !== n ? f.style(t, e, n) : f.css(t, e);
      }, t, e, arguments.length > 1);
    }, show: function show() {
      return $t(this, !0);
    }, hide: function hide() {
      return $t(this);
    }, toggle: function toggle(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        $(this) ? f(this).show() : f(this).hide();
      });
    } }), f.Tween = Gt, (Gt.prototype = { constructor: Gt, init: function init(t, e, n, i, r, o) {
      this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (f.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var t = Gt.propHooks[this.prop];return t && t.get ? t.get(this) : Gt.propHooks._default.get(this);
    }, run: function run(t) {
      var e,
          n = Gt.propHooks[this.prop];return this.pos = e = this.options.duration ? f.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Gt.propHooks._default.set(this), this;
    } }).init.prototype = Gt.prototype, (Gt.propHooks = { _default: { get: function get(t) {
        var e;return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = f.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop];
      }, set: function set(t) {
        f.fx.step[t.prop] ? f.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[f.cssProps[t.prop]] || f.cssHooks[t.prop]) ? f.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
      } } }).scrollTop = Gt.propHooks.scrollLeft = { set: function set(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    } }, f.easing = { linear: function linear(t) {
      return t;
    }, swing: function swing(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    } }, f.fx = Gt.prototype.init, f.fx.step = {};var Kt,
      Jt,
      Zt = /^(?:toggle|show|hide)$/,
      Qt = new RegExp("^(?:([+-])=|)(" + V + ")([a-z%]*)$", "i"),
      te = /queueHooks$/,
      ee = [function (t, e, n) {
    var i,
        r,
        o,
        a,
        s,
        l,
        d,
        c,
        h = this,
        p = {},
        g = t.style,
        v = t.nodeType && $(t),
        m = f._data(t, "fxshow");for (i in n.queue || (null == (s = f._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, h.always(function () {
      h.always(function () {
        s.unqueued--, f.queue(t, "fx").length || s.empty.fire();
      });
    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [g.overflow, g.overflowX, g.overflowY], d = f.css(t, "display"), c = Nt(t.nodeName), "none" === d && (d = c), "inline" === d && "none" === f.css(t, "float") && (u.inlineBlockNeedsLayout && "inline" !== c ? g.zoom = 1 : g.display = "inline-block")), n.overflow && (g.overflow = "hidden", u.shrinkWrapBlocks() || h.always(function () {
      g.overflow = n.overflow[0], g.overflowX = n.overflow[1], g.overflowY = n.overflow[2];
    })), e) {
      if (Zt.exec(r = e[i])) {
        if (delete e[i], o = o || "toggle" === r, r === (v ? "hide" : "show")) {
          if ("show" !== r || !m || void 0 === m[i]) continue;v = !0;
        }p[i] = m && m[i] || f.style(t, i);
      }
    }if (!f.isEmptyObject(p)) for (i in m ? "hidden" in m && (v = m.hidden) : m = f._data(t, "fxshow", {}), o && (m.hidden = !v), v ? f(t).show() : h.done(function () {
      f(t).hide();
    }), h.done(function () {
      var e;for (e in f._removeData(t, "fxshow"), p) {
        f.style(t, e, p[e]);
      }
    }), p) {
      a = oe(v ? m[i] : 0, i, h), i in m || (m[i] = a.start, v && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0));
    }
  }],
      ne = { "*": [function (t, e) {
      var n = this.createTween(t, e),
          i = n.cur(),
          r = Qt.exec(e),
          o = r && r[3] || (f.cssNumber[t] ? "" : "px"),
          a = (f.cssNumber[t] || "px" !== o && +i) && Qt.exec(f.css(n.elem, t)),
          s = 1,
          l = 20;if (a && a[3] !== o) {
        o = o || a[3], r = r || [], a = +i || 1;do {
          f.style(n.elem, t, (a /= s = s || ".5") + o);
        } while (s !== (s = n.cur() / i) && 1 !== s && --l);
      }return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n;
    }] };function ie() {
    return setTimeout(function () {
      Kt = void 0;
    }), Kt = f.now();
  }function re(t, e) {
    var n,
        i = { height: t },
        r = 0;for (e = e ? 1 : 0; 4 > r; r += 2 - e) {
      i["margin" + (n = q[r])] = i["padding" + n] = t;
    }return e && (i.opacity = i.width = t), i;
  }function oe(t, e, n) {
    for (var i, r = (ne[e] || []).concat(ne["*"]), o = 0, a = r.length; a > o; o++) {
      if (i = r[o].call(n, e, t)) return i;
    }
  }function ae(t, e, n) {
    var i,
        r,
        o = 0,
        a = ee.length,
        s = f.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (r) return !1;for (var e = Kt || ie(), n = Math.max(0, d.startTime + d.duration - e), i = 1 - (n / d.duration || 0), o = 0, a = d.tweens.length; a > o; o++) {
        d.tweens[o].run(i);
      }return s.notifyWith(t, [d, i, n]), 1 > i && a ? n : (s.resolveWith(t, [d]), !1);
    },
        d = s.promise({ elem: t, props: f.extend({}, e), opts: f.extend(!0, { specialEasing: {} }, n), originalProperties: e, originalOptions: n, startTime: Kt || ie(), duration: n.duration, tweens: [], createTween: function createTween(e, n) {
        var i = f.Tween(t, d.opts, e, n, d.opts.specialEasing[e] || d.opts.easing);return d.tweens.push(i), i;
      }, stop: function stop(e) {
        var n = 0,
            i = e ? d.tweens.length : 0;if (r) return this;for (r = !0; i > n; n++) {
          d.tweens[n].run(1);
        }return e ? s.resolveWith(t, [d, e]) : s.rejectWith(t, [d, e]), this;
      } }),
        c = d.props;for (function (t, e) {
      var n, i, r, o, a;for (n in t) {
        if (r = e[i = f.camelCase(n)], f.isArray(o = t[n]) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = f.cssHooks[i]) && ("expand" in a)) for (n in o = a.expand(o), delete t[i], o) {
          (n in t) || (t[n] = o[n], e[n] = r);
        } else e[i] = r;
      }
    }(c, d.opts.specialEasing); a > o; o++) {
      if (i = ee[o].call(d, t, c, d.opts)) return i;
    }return f.map(c, oe, d), f.isFunction(d.opts.start) && d.opts.start.call(t, d), f.fx.timer(f.extend(l, { elem: t, anim: d, queue: d.opts.queue })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always);
  }f.Animation = f.extend(ae, { tweener: function tweener(t, e) {
      f.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");for (var n, i = 0, r = t.length; r > i; i++) {
        ne[n = t[i]] = ne[n] || [], ne[n].unshift(e);
      }
    }, prefilter: function prefilter(t, e) {
      e ? ee.unshift(t) : ee.push(t);
    } }), f.speed = function (t, e, n) {
    var i = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? f.extend({}, t) : { complete: n || !n && e || f.isFunction(t) && t, duration: t, easing: n && e || e && !f.isFunction(e) && e };return i.duration = f.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in f.fx.speeds ? f.fx.speeds[i.duration] : f.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      f.isFunction(i.old) && i.old.call(this), i.queue && f.dequeue(this, i.queue);
    }, i;
  }, f.fn.extend({ fadeTo: function fadeTo(t, e, n, i) {
      return this.filter($).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
    }, animate: function animate(t, e, n, i) {
      var r = f.isEmptyObject(t),
          o = f.speed(e, n, i),
          a = function a() {
        var e = ae(this, f.extend({}, t), o);(r || f._data(this, "finish")) && e.stop(!0);
      };return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(t, e, n) {
      var i = function i(t) {
        var e = t.stop;delete t.stop, e(n);
      };return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
        var e = !0,
            r = null != t && t + "queueHooks",
            o = f.timers,
            a = f._data(this);if (r) a[r] && a[r].stop && i(a[r]);else for (r in a) {
          a[r] && a[r].stop && te.test(r) && i(a[r]);
        }for (r = o.length; r--;) {
          o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
        }(e || !n) && f.dequeue(this, t);
      });
    }, finish: function finish(t) {
      return !1 !== t && (t = t || "fx"), this.each(function () {
        var e,
            n = f._data(this),
            i = n[t + "queue"],
            r = n[t + "queueHooks"],
            o = f.timers,
            a = i ? i.length : 0;for (n.finish = !0, f.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) {
          o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
        }for (e = 0; a > e; e++) {
          i[e] && i[e].finish && i[e].finish.call(this);
        }delete n.finish;
      });
    } }), f.each(["toggle", "show", "hide"], function (t, e) {
    var n = f.fn[e];f.fn[e] = function (t, i, r) {
      return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(re(e, !0), t, i, r);
    };
  }), f.each({ slideDown: re("show"), slideUp: re("hide"), slideToggle: re("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
    f.fn[t] = function (t, n, i) {
      return this.animate(e, t, n, i);
    };
  }), f.timers = [], f.fx.tick = function () {
    var t,
        e = f.timers,
        n = 0;for (Kt = f.now(); n < e.length; n++) {
      (t = e[n])() || e[n] !== t || e.splice(n--, 1);
    }e.length || f.fx.stop(), Kt = void 0;
  }, f.fx.timer = function (t) {
    f.timers.push(t), t() ? f.fx.start() : f.timers.pop();
  }, f.fx.interval = 13, f.fx.start = function () {
    Jt || (Jt = setInterval(f.fx.tick, f.fx.interval));
  }, f.fx.stop = function () {
    clearInterval(Jt), Jt = null;
  }, f.fx.speeds = { slow: 600, fast: 200, _default: 400 }, f.fn.delay = function (t, e) {
    return t = f.fx && f.fx.speeds[t] || t, this.queue(e = e || "fx", function (e, n) {
      var i = setTimeout(e, t);n.stop = function () {
        clearTimeout(i);
      };
    });
  }, function () {
    var t,
        e,
        n,
        i,
        r = S.createElement("div");r.setAttribute("className", "t"), r.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = r.getElementsByTagName("a")[0], i = (n = S.createElement("select")).appendChild(S.createElement("option")), e = r.getElementsByTagName("input")[0], t.style.cssText = "top:1px", u.getSetAttribute = "t" !== r.className, u.style = /top/.test(t.getAttribute("style")), u.hrefNormalized = "/a" === t.getAttribute("href"), u.checkOn = !!e.value, u.optSelected = i.selected, u.enctype = !!S.createElement("form").enctype, n.disabled = !0, u.optDisabled = !i.disabled, (e = S.createElement("input")).setAttribute("value", ""), u.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), u.radioValue = "t" === e.value, t = e = n = i = r = null;
  }();var se = /\r/g;f.fn.extend({ val: function val(t) {
      var e,
          n,
          i,
          r = this[0];return arguments.length ? (i = f.isFunction(t), this.each(function (n) {
        var r;1 === this.nodeType && (null == (r = i ? t.call(this, n, f(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : f.isArray(r) && (r = f.map(r, function (t) {
          return null == t ? "" : t + "";
        })), (e = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r));
      })) : r ? (e = f.valHooks[r.type] || f.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(se, "") : null == n ? "" : n : void 0;
    } }), f.extend({ valHooks: { option: { get: function get(t) {
          var e = f.find.attr(t, "value");return null != e ? e : f.text(t);
        } }, select: { get: function get(t) {
          for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++) {
            if (!(!(n = i[l]).selected && l !== r || (u.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && f.nodeName(n.parentNode, "optgroup"))) {
              if (e = f(n).val(), o) return e;a.push(e);
            }
          }return a;
        }, set: function set(t, e) {
          for (var n, i, r = t.options, o = f.makeArray(e), a = r.length; a--;) {
            if (f.inArray(f.valHooks.option.get(i = r[a]), o) >= 0) try {
              i.selected = n = !0;
            } catch (t) {} else i.selected = !1;
          }return n || (t.selectedIndex = -1), r;
        } } } }), f.each(["radio", "checkbox"], function () {
    f.valHooks[this] = { set: function set(t, e) {
        return f.isArray(e) ? t.checked = f.inArray(f(t).val(), e) >= 0 : void 0;
      } }, u.checkOn || (f.valHooks[this].get = function (t) {
      return null === t.getAttribute("value") ? "on" : t.value;
    });
  });var le,
      de,
      ce = f.expr.attrHandle,
      ue = /^(?:checked|selected)$/i,
      he = u.getSetAttribute,
      fe = u.input;f.fn.extend({ attr: function attr(t, e) {
      return U(this, f.attr, t, e, arguments.length > 1);
    }, removeAttr: function removeAttr(t) {
      return this.each(function () {
        f.removeAttr(this, t);
      });
    } }), f.extend({ attr: function attr(t, e, n) {
      var i,
          r,
          o = t.nodeType;if (t && 3 !== o && 8 !== o && 2 !== o) return _typeof(t.getAttribute) === O ? f.prop(t, e, n) : (1 === o && f.isXMLDoc(t) || (e = e.toLowerCase(), i = f.attrHooks[e] || (f.expr.match.bool.test(e) ? de : le)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : null == (r = f.find.attr(t, e)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void f.removeAttr(t, e));
    }, removeAttr: function removeAttr(t, e) {
      var n,
          i,
          r = 0,
          o = e && e.match(E);if (o && 1 === t.nodeType) for (; n = o[r++];) {
        i = f.propFix[n] || n, f.expr.match.bool.test(n) ? fe && he || !ue.test(n) ? t[i] = !1 : t[f.camelCase("default-" + n)] = t[i] = !1 : f.attr(t, n, ""), t.removeAttribute(he ? n : i);
      }
    }, attrHooks: { type: { set: function set(t, e) {
          if (!u.radioValue && "radio" === e && f.nodeName(t, "input")) {
            var n = t.value;return t.setAttribute("type", e), n && (t.value = n), e;
          }
        } } } }), de = { set: function set(t, e, n) {
      return !1 === e ? f.removeAttr(t, n) : fe && he || !ue.test(n) ? t.setAttribute(!he && f.propFix[n] || n, n) : t[f.camelCase("default-" + n)] = t[n] = !0, n;
    } }, f.each(f.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var n = ce[e] || f.find.attr;ce[e] = fe && he || !ue.test(e) ? function (t, e, i) {
      var r, o;return i || (o = ce[e], ce[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ce[e] = o), r;
    } : function (t, e, n) {
      return n ? void 0 : t[f.camelCase("default-" + e)] ? e.toLowerCase() : null;
    };
  }), fe && he || (f.attrHooks.value = { set: function set(t, e, n) {
      return f.nodeName(t, "input") ? void (t.defaultValue = e) : le && le.set(t, e, n);
    } }), he || (le = { set: function set(t, e, n) {
      var i = t.getAttributeNode(n);return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0;
    } }, ce.id = ce.name = ce.coords = function (t, e, n) {
    var i;return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null;
  }, f.valHooks.button = { get: function get(t, e) {
      var n = t.getAttributeNode(e);return n && n.specified ? n.value : void 0;
    }, set: le.set }, f.attrHooks.contenteditable = { set: function set(t, e, n) {
      le.set(t, "" !== e && e, n);
    } }, f.each(["width", "height"], function (t, e) {
    f.attrHooks[e] = { set: function set(t, n) {
        return "" === n ? (t.setAttribute(e, "auto"), n) : void 0;
      } };
  })), u.style || (f.attrHooks.style = { get: function get(t) {
      return t.style.cssText || void 0;
    }, set: function set(t, e) {
      return t.style.cssText = e + "";
    } });var pe = /^(?:input|select|textarea|button|object)$/i,
      ge = /^(?:a|area)$/i;f.fn.extend({ prop: function prop(t, e) {
      return U(this, f.prop, t, e, arguments.length > 1);
    }, removeProp: function removeProp(t) {
      return t = f.propFix[t] || t, this.each(function () {
        try {
          this[t] = void 0, delete this[t];
        } catch (t) {}
      });
    } }), f.extend({ propFix: { for: "htmlFor", class: "className" }, prop: function prop(t, e, n) {
      var i,
          r,
          o = t.nodeType;if (t && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !f.isXMLDoc(t)) && (r = f.propHooks[e = f.propFix[e] || e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e];
    }, propHooks: { tabIndex: { get: function get(t) {
          var e = f.find.attr(t, "tabindex");return e ? parseInt(e, 10) : pe.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1;
        } } } }), u.hrefNormalized || f.each(["href", "src"], function (t, e) {
    f.propHooks[e] = { get: function get(t) {
        return t.getAttribute(e, 4);
      } };
  }), u.optSelected || (f.propHooks.selected = { get: function get(t) {
      return null;
    } }), f.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    f.propFix[this.toLowerCase()] = this;
  }), u.enctype || (f.propFix.enctype = "encoding");var ve = /[\t\r\n\f]/g;f.fn.extend({ addClass: function addClass(t) {
      var e,
          n,
          i,
          r,
          o,
          a,
          s = 0,
          l = this.length,
          d = "string" == typeof t && t;if (f.isFunction(t)) return this.each(function (e) {
        f(this).addClass(t.call(this, e, this.className));
      });if (d) for (e = (t || "").match(E) || []; l > s; s++) {
        if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(ve, " ") : " ")) {
          for (o = 0; r = e[o++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }a = f.trim(i), n.className !== a && (n.className = a);
        }
      }return this;
    }, removeClass: function removeClass(t) {
      var e,
          n,
          i,
          r,
          o,
          a,
          s = 0,
          l = this.length,
          d = 0 === arguments.length || "string" == typeof t && t;if (f.isFunction(t)) return this.each(function (e) {
        f(this).removeClass(t.call(this, e, this.className));
      });if (d) for (e = (t || "").match(E) || []; l > s; s++) {
        if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(ve, " ") : "")) {
          for (o = 0; r = e[o++];) {
            for (; i.indexOf(" " + r + " ") >= 0;) {
              i = i.replace(" " + r + " ", " ");
            }
          }a = t ? f.trim(i) : "", n.className !== a && (n.className = a);
        }
      }return this;
    }, toggleClass: function toggleClass(t, e) {
      var n = typeof t === "undefined" ? "undefined" : _typeof(t);return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(f.isFunction(t) ? function (n) {
        f(this).toggleClass(t.call(this, n, this.className, e), e);
      } : function () {
        if ("string" === n) for (var e, i = 0, r = f(this), o = t.match(E) || []; e = o[i++];) {
          r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
        } else (n === O || "boolean" === n) && (this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : f._data(this, "__className__") || "");
      });
    }, hasClass: function hasClass(t) {
      for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) {
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ve, " ").indexOf(e) >= 0) return !0;
      }return !1;
    } }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
    f.fn[e] = function (t, n) {
      return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
    };
  }), f.fn.extend({ hover: function hover(t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    }, bind: function bind(t, e, n) {
      return this.on(t, null, e, n);
    }, unbind: function unbind(t, e) {
      return this.off(t, null, e);
    }, delegate: function delegate(t, e, n, i) {
      return this.on(e, t, n, i);
    }, undelegate: function undelegate(t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
    } });var me = f.now(),
      be = /\?/,
      ye = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;f.parseJSON = function (e) {
    if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");var n,
        i = null,
        r = f.trim(e + "");return r && !f.trim(r.replace(ye, function (t, e, r, o) {
      return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "");
    })) ? Function("return " + r)() : f.error("Invalid JSON: " + e);
  }, f.parseXML = function (e) {
    var n;if (!e || "string" != typeof e) return null;try {
      t.DOMParser ? n = new DOMParser().parseFromString(e, "text/xml") : ((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(e));
    } catch (t) {
      n = void 0;
    }return n && n.documentElement && !n.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + e), n;
  };var xe,
      we,
      ke = /#.*$/,
      Ce = /([?&])_=[^&]*/,
      Me = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Se = /^(?:GET|HEAD)$/,
      Te = /^\/\//,
      _e = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Ae = {},
      Ne = {},
      De = "*/".concat("*");try {
    we = location.href;
  } catch (t) {
    (we = S.createElement("a")).href = "", we = we.href;
  }function Ee(t) {
    return function (e, n) {
      "string" != typeof e && (n = e, e = "*");var i,
          r = 0,
          o = e.toLowerCase().match(E) || [];if (f.isFunction(n)) for (; i = o[r++];) {
        "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
      }
    };
  }function Le(t, e, n, i) {
    var r = {},
        o = t === Ne;function a(s) {
      var l;return r[s] = !0, f.each(t[s] || [], function (t, s) {
        var d = s(e, n, i);return "string" != typeof d || o || r[d] ? o ? !(l = d) : void 0 : (e.dataTypes.unshift(d), a(d), !1);
      }), l;
    }return a(e.dataTypes[0]) || !r["*"] && a("*");
  }function Pe(t, e) {
    var n,
        i,
        r = f.ajaxSettings.flatOptions || {};for (i in e) {
      void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
    }return n && f.extend(!0, t, n), t;
  }xe = _e.exec(we.toLowerCase()) || [], f.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: we, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": De, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(t, e) {
      return e ? Pe(Pe(t, f.ajaxSettings), e) : Pe(f.ajaxSettings, t);
    }, ajaxPrefilter: Ee(Ae), ajaxTransport: Ee(Ne), ajax: function ajax(t, e) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = void 0);var n,
          i,
          r,
          o,
          a,
          s,
          l,
          d,
          c = f.ajaxSetup({}, e = e || {}),
          u = c.context || c,
          h = c.context && (u.nodeType || u.jquery) ? f(u) : f.event,
          p = f.Deferred(),
          g = f.Callbacks("once memory"),
          v = c.statusCode || {},
          m = {},
          b = {},
          y = 0,
          x = "canceled",
          w = { readyState: 0, getResponseHeader: function getResponseHeader(t) {
          var e;if (2 === y) {
            if (!d) for (d = {}; e = Me.exec(o);) {
              d[e[1].toLowerCase()] = e[2];
            }e = d[t.toLowerCase()];
          }return null == e ? null : e;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === y ? o : null;
        }, setRequestHeader: function setRequestHeader(t, e) {
          var n = t.toLowerCase();return y || (t = b[n] = b[n] || t, m[t] = e), this;
        }, overrideMimeType: function overrideMimeType(t) {
          return y || (c.mimeType = t), this;
        }, statusCode: function statusCode(t) {
          var e;if (t) if (2 > y) for (e in t) {
            v[e] = [v[e], t[e]];
          } else w.always(t[w.status]);return this;
        }, abort: function abort(t) {
          var e = t || x;return l && l.abort(e), k(0, e), this;
        } };if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, c.url = ((t || c.url || we) + "").replace(ke, "").replace(Te, xe[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = f.trim(c.dataType || "*").toLowerCase().match(E) || [""], null == c.crossDomain && (n = _e.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === xe[1] && n[2] === xe[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (xe[3] || ("http:" === xe[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = f.param(c.data, c.traditional)), Le(Ae, c, e, w), 2 === y) return w;for (i in (s = c.global) && 0 == f.active++ && f.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Se.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (be.test(r) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = Ce.test(r) ? r.replace(Ce, "$1_=" + me++) : r + (be.test(r) ? "&" : "?") + "_=" + me++)), c.ifModified && (f.lastModified[r] && w.setRequestHeader("If-Modified-Since", f.lastModified[r]), f.etag[r] && w.setRequestHeader("If-None-Match", f.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || e.contentType) && w.setRequestHeader("Content-Type", c.contentType), w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + De + "; q=0.01" : "") : c.accepts["*"]), c.headers) {
        w.setRequestHeader(i, c.headers[i]);
      }if (c.beforeSend && (!1 === c.beforeSend.call(u, w, c) || 2 === y)) return w.abort();for (i in x = "abort", { success: 1, error: 1, complete: 1 }) {
        w[i](c[i]);
      }if (l = Le(Ne, c, e, w)) {
        w.readyState = 1, s && h.trigger("ajaxSend", [w, c]), c.async && c.timeout > 0 && (a = setTimeout(function () {
          w.abort("timeout");
        }, c.timeout));try {
          y = 1, l.send(m, k);
        } catch (t) {
          if (!(2 > y)) throw t;k(-1, t);
        }
      } else k(-1, "No Transport");function k(t, e, n, i) {
        var d,
            m,
            b,
            x,
            k,
            C = e;2 !== y && (y = 2, a && clearTimeout(a), l = void 0, o = i || "", w.readyState = t > 0 ? 4 : 0, d = t >= 200 && 300 > t || 304 === t, n && (x = function (t, e, n) {
          for (var i, r, o, a, s = t.contents, l = t.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
          }if (r) for (a in s) {
            if (s[a] && s[a].test(r)) {
              l.unshift(a);break;
            }
          }if (l[0] in n) o = l[0];else {
            for (a in n) {
              if (!l[0] || t.converters[a + " " + l[0]]) {
                o = a;break;
              }i || (i = a);
            }o = o || i;
          }return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
        }(c, w, n)), x = function (t, e, n, i) {
          var r,
              o,
              a,
              s,
              l,
              d = {},
              c = t.dataTypes.slice();if (c[1]) for (a in t.converters) {
            d[a.toLowerCase()] = t.converters[a];
          }for (o = c.shift(); o;) {
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
              if (!(a = d[l + " " + o] || d["* " + o])) for (r in d) {
                if ((s = r.split(" "))[1] === o && (a = d[l + " " + s[0]] || d["* " + s[0]])) {
                  !0 === a ? a = d[r] : !0 !== d[r] && (o = s[0], c.unshift(s[1]));break;
                }
              }if (!0 !== a) if (a && t.throws) e = a(e);else try {
                e = a(e);
              } catch (t) {
                return { state: "parsererror", error: a ? t : "No conversion from " + l + " to " + o };
              }
            }
          }return { state: "success", data: e };
        }(c, x, w, d), d ? (c.ifModified && ((k = w.getResponseHeader("Last-Modified")) && (f.lastModified[r] = k), (k = w.getResponseHeader("etag")) && (f.etag[r] = k)), 204 === t || "HEAD" === c.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, m = x.data, d = !(b = x.error))) : (b = C, (t || !C) && (C = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || C) + "", d ? p.resolveWith(u, [m, C, w]) : p.rejectWith(u, [w, C, b]), w.statusCode(v), v = void 0, s && h.trigger(d ? "ajaxSuccess" : "ajaxError", [w, c, d ? m : b]), g.fireWith(u, [w, C]), s && (h.trigger("ajaxComplete", [w, c]), --f.active || f.event.trigger("ajaxStop")));
      }return w;
    }, getJSON: function getJSON(t, e, n) {
      return f.get(t, e, n, "json");
    }, getScript: function getScript(t, e) {
      return f.get(t, void 0, e, "script");
    } }), f.each(["get", "post"], function (t, e) {
    f[e] = function (t, n, i, r) {
      return f.isFunction(n) && (r = r || i, i = n, n = void 0), f.ajax({ url: t, type: e, dataType: r, data: n, success: i });
    };
  }), f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
    f.fn[e] = function (t) {
      return this.on(e, t);
    };
  }), f._evalUrl = function (t) {
    return f.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
  }, f.fn.extend({ wrapAll: function wrapAll(t) {
      if (f.isFunction(t)) return this.each(function (e) {
        f(this).wrapAll(t.call(this, e));
      });if (this[0]) {
        var e = f(t, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
          for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) {
            t = t.firstChild;
          }return t;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(t) {
      return this.each(f.isFunction(t) ? function (e) {
        f(this).wrapInner(t.call(this, e));
      } : function () {
        var e = f(this),
            n = e.contents();n.length ? n.wrapAll(t) : e.append(t);
      });
    }, wrap: function wrap(t) {
      var e = f.isFunction(t);return this.each(function (n) {
        f(this).wrapAll(e ? t.call(this, n) : t);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        f.nodeName(this, "body") || f(this).replaceWith(this.childNodes);
      }).end();
    } }), f.expr.filters.hidden = function (t) {
    return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !u.reliableHiddenOffsets() && "none" === (t.style && t.style.display || f.css(t, "display"));
  }, f.expr.filters.visible = function (t) {
    return !f.expr.filters.hidden(t);
  };var Ie = /%20/g,
      Fe = /\[\]$/,
      Oe = /\r?\n/g,
      Re = /^(?:submit|button|image|reset|file)$/i,
      He = /^(?:input|select|textarea|keygen)/i;function ze(t, e, n, i) {
    var r;if (f.isArray(e)) f.each(e, function (e, r) {
      n || Fe.test(t) ? i(t, r) : ze(t + "[" + ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? e : "") + "]", r, n, i);
    });else if (n || "object" !== f.type(e)) i(t, e);else for (r in e) {
      ze(t + "[" + r + "]", e[r], n, i);
    }
  }f.param = function (t, e) {
    var n,
        i = [],
        r = function r(t, e) {
      e = f.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
    };if (void 0 === e && (e = f.ajaxSettings && f.ajaxSettings.traditional), f.isArray(t) || t.jquery && !f.isPlainObject(t)) f.each(t, function () {
      r(this.name, this.value);
    });else for (n in t) {
      ze(n, t[n], e, r);
    }return i.join("&").replace(Ie, "+");
  }, f.fn.extend({ serialize: function serialize() {
      return f.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var t = f.prop(this, "elements");return t ? f.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;return this.name && !f(this).is(":disabled") && He.test(this.nodeName) && !Re.test(t) && (this.checked || !Y.test(t));
      }).map(function (t, e) {
        var n = f(this).val();return null == n ? null : f.isArray(n) ? f.map(n, function (t) {
          return { name: e.name, value: t.replace(Oe, "\r\n") };
        }) : { name: e.name, value: n.replace(Oe, "\r\n") };
      }).get();
    } }), f.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Ve() || function () {
      try {
        return new t.ActiveXObject("Microsoft.XMLHTTP");
      } catch (t) {}
    }();
  } : Ve;var Be = 0,
      je = {},
      We = f.ajaxSettings.xhr();function Ve() {
    try {
      return new t.XMLHttpRequest();
    } catch (t) {}
  }t.ActiveXObject && f(t).on("unload", function () {
    for (var t in je) {
      je[t](void 0, !0);
    }
  }), u.cors = !!We && "withCredentials" in We, (We = u.ajax = !!We) && f.ajaxTransport(function (t) {
    var _e3;if (!t.crossDomain || u.cors) return { send: function send(n, i) {
        var r,
            o = t.xhr(),
            a = ++Be;if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) {
          o[r] = t.xhrFields[r];
        }for (r in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) {
          void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
        }o.send(t.hasContent && t.data || null), _e3 = function e(n, r) {
          var s, l, d;if (_e3 && (r || 4 === o.readyState)) if (delete je[a], _e3 = void 0, o.onreadystatechange = f.noop, r) 4 !== o.readyState && o.abort();else {
            d = {}, s = o.status, "string" == typeof o.responseText && (d.text = o.responseText);try {
              l = o.statusText;
            } catch (t) {
              l = "";
            }s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404;
          }d && i(s, l, d, o.getAllResponseHeaders());
        }, t.async ? 4 === o.readyState ? setTimeout(_e3) : o.onreadystatechange = je[a] = _e3 : _e3();
      }, abort: function abort() {
        _e3 && _e3(void 0, !0);
      } };
  }), f.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(t) {
        return f.globalEval(t), t;
      } } }), f.ajaxPrefilter("script", function (t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1);
  }), f.ajaxTransport("script", function (t) {
    if (t.crossDomain) {
      var e,
          n = S.head || f("head")[0] || S.documentElement;return { send: function send(i, r) {
          (e = S.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"));
          }, n.insertBefore(e, n.firstChild);
        }, abort: function abort() {
          e && e.onload(void 0, !0);
        } };
    }
  });var qe = [],
      $e = /(=)\?(?=&|$)|\?\?/;f.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var t = qe.pop() || f.expando + "_" + me++;return this[t] = !0, t;
    } }), f.ajaxPrefilter("json jsonp", function (e, n, i) {
    var r,
        o,
        a,
        s = !1 !== e.jsonp && ($e.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(e.data) && "data");return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = f.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace($e, "$1" + r) : !1 !== e.jsonp && (e.url += (be.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return a || f.error(r + " was not called"), a[0];
    }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
      a = arguments;
    }, i.always(function () {
      t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, qe.push(r)), a && f.isFunction(o) && o(a[0]), a = o = void 0;
    }), "script") : void 0;
  }), f.parseHTML = function (t, e, n) {
    if (!t || "string" != typeof t) return null;"boolean" == typeof e && (n = e, e = !1), e = e || S;var i = w.exec(t),
        r = !n && [];return i ? [e.createElement(i[1])] : (i = f.buildFragment([t], e, r), r && r.length && f(r).remove(), f.merge([], i.childNodes));
  };var Ue = f.fn.load;f.fn.load = function (t, e, n) {
    if ("string" != typeof t && Ue) return Ue.apply(this, arguments);var i,
        r,
        o,
        a = this,
        s = t.indexOf(" ");return s >= 0 && (i = t.slice(s, t.length), t = t.slice(0, s)), f.isFunction(e) ? (n = e, e = void 0) : e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (o = "POST"), a.length > 0 && f.ajax({ url: t, type: o, dataType: "html", data: e }).done(function (t) {
      r = arguments, a.html(i ? f("<div>").append(f.parseHTML(t)).find(i) : t);
    }).complete(n && function (t, e) {
      a.each(n, r || [t.responseText, e, t]);
    }), this;
  }, f.expr.filters.animated = function (t) {
    return f.grep(f.timers, function (e) {
      return t === e.elem;
    }).length;
  };var Ye = t.document.documentElement;function Xe(t) {
    return f.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow);
  }f.offset = { setOffset: function setOffset(t, e, n) {
      var i,
          r,
          o,
          a,
          s,
          l,
          d = f.css(t, "position"),
          c = f(t),
          u = {};"static" === d && (t.style.position = "relative"), s = c.offset(), o = f.css(t, "top"), l = f.css(t, "left"), ("absolute" === d || "fixed" === d) && f.inArray("auto", [o, l]) > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), f.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (u.top = e.top - s.top + a), null != e.left && (u.left = e.left - s.left + r), "using" in e ? e.using.call(t, u) : c.css(u);
    } }, f.fn.extend({ offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        f.offset.setOffset(this, t, e);
      });var e,
          n,
          i = { top: 0, left: 0 },
          r = this[0],
          o = r && r.ownerDocument;return o ? f.contains(e = o.documentElement, r) ? (_typeof(r.getBoundingClientRect) !== O && (i = r.getBoundingClientRect()), n = Xe(o), { top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) }) : i : void 0;
    }, position: function position() {
      if (this[0]) {
        var t,
            e,
            n = { top: 0, left: 0 },
            i = this[0];return "fixed" === f.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), f.nodeName(t[0], "html") || (n = t.offset()), n.top += f.css(t[0], "borderTopWidth", !0), n.left += f.css(t[0], "borderLeftWidth", !0)), { top: e.top - n.top - f.css(i, "marginTop", !0), left: e.left - n.left - f.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var t = this.offsetParent || Ye; t && !f.nodeName(t, "html") && "static" === f.css(t, "position");) {
          t = t.offsetParent;
        }return t || Ye;
      });
    } }), f.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
    var n = /Y/.test(e);f.fn[t] = function (i) {
      return U(this, function (t, i, r) {
        var o = Xe(t);return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void (o ? o.scrollTo(n ? f(o).scrollLeft() : r, n ? r : f(o).scrollTop()) : t[i] = r);
      }, t, i, arguments.length, null);
    };
  }), f.each(["top", "left"], function (t, e) {
    f.cssHooks[e] = Ft(u.pixelPosition, function (t, n) {
      return n ? (n = Et(t, e), Pt.test(n) ? f(t).position()[e] + "px" : n) : void 0;
    });
  }), f.each({ Height: "height", Width: "width" }, function (t, e) {
    f.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
      f.fn[i] = function (i, r) {
        var o = arguments.length && (n || "boolean" != typeof i),
            a = n || (!0 === i || !0 === r ? "margin" : "border");return U(this, function (e, n, i) {
          var r;return f.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? f.css(e, n, a) : f.style(e, n, i, a);
        }, e, o ? i : void 0, o, null);
      };
    });
  }), f.fn.size = function () {
    return this.length;
  }, f.fn.andSelf = f.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return f;
  });var Ge = t.jQuery,
      Ke = t.$;return f.noConflict = function (e) {
    return t.$ === f && (t.$ = Ke), e && t.jQuery === f && (t.jQuery = Ge), f;
  }, (typeof e === "undefined" ? "undefined" : _typeof(e)) === O && (t.jQuery = t.$ = f), f;
}), function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(function () {
    try {
      return require("moment");
    } catch (t) {}
  }()) : "function" == typeof define && define.amd ? define(["require"], function (t) {
    return e(function () {
      try {
        return t("moment");
      } catch (t) {}
    }());
  }) : t.Chart = e(t.moment);
}(undefined, function (t) {
  "use strict";
  t = t && t.hasOwnProperty("default") ? t.default : t;var e = { rgb2hsl: n, rgb2hsv: i, rgb2hwb: o, rgb2cmyk: a, rgb2keyword: s, rgb2xyz: l, rgb2lab: d, rgb2lch: function rgb2lch(t) {
      return y(d(t));
    }, hsl2rgb: c, hsl2hsv: function hsl2hsv(t) {
      var e = t[1] / 100,
          n = t[2] / 100;return 0 === n ? [0, 0, 0] : [t[0], 2 * (e *= (n *= 2) <= 1 ? n : 2 - n) / (n + e) * 100, (n + e) / 2 * 100];
    }, hsl2hwb: function hsl2hwb(t) {
      return o(c(t));
    }, hsl2cmyk: function hsl2cmyk(t) {
      return a(c(t));
    }, hsl2keyword: function hsl2keyword(t) {
      return s(c(t));
    }, hsv2rgb: u, hsv2hsl: function hsv2hsl(t) {
      var e,
          n,
          i = t[1] / 100,
          r = t[2] / 100;return e = i * r, [t[0], 100 * (e = (e /= (n = (2 - i) * r) <= 1 ? n : 2 - n) || 0), 100 * (n /= 2)];
    }, hsv2hwb: function hsv2hwb(t) {
      return o(u(t));
    }, hsv2cmyk: function hsv2cmyk(t) {
      return a(u(t));
    }, hsv2keyword: function hsv2keyword(t) {
      return s(u(t));
    }, hwb2rgb: h, hwb2hsl: function hwb2hsl(t) {
      return n(h(t));
    }, hwb2hsv: function hwb2hsv(t) {
      return i(h(t));
    }, hwb2cmyk: function hwb2cmyk(t) {
      return a(h(t));
    }, hwb2keyword: function hwb2keyword(t) {
      return s(h(t));
    }, cmyk2rgb: f, cmyk2hsl: function cmyk2hsl(t) {
      return n(f(t));
    }, cmyk2hsv: function cmyk2hsv(t) {
      return i(f(t));
    }, cmyk2hwb: function cmyk2hwb(t) {
      return o(f(t));
    }, cmyk2keyword: function cmyk2keyword(t) {
      return s(f(t));
    }, keyword2rgb: k, keyword2hsl: function keyword2hsl(t) {
      return n(k(t));
    }, keyword2hsv: function keyword2hsv(t) {
      return i(k(t));
    }, keyword2hwb: function keyword2hwb(t) {
      return o(k(t));
    }, keyword2cmyk: function keyword2cmyk(t) {
      return a(k(t));
    }, keyword2lab: function keyword2lab(t) {
      return d(k(t));
    }, keyword2xyz: function keyword2xyz(t) {
      return l(k(t));
    }, xyz2rgb: p, xyz2lab: v, xyz2lch: function xyz2lch(t) {
      return y(v(t));
    }, lab2xyz: m, lab2rgb: x, lab2lch: y, lch2lab: w, lch2xyz: function lch2xyz(t) {
      return m(w(t));
    }, lch2rgb: function lch2rgb(t) {
      return x(w(t));
    } };function n(t) {
    var e,
        n,
        i = t[0] / 255,
        r = t[1] / 255,
        o = t[2] / 255,
        a = Math.min(i, r, o),
        s = Math.max(i, r, o),
        l = s - a;return s == a ? e = 0 : i == s ? e = (r - o) / l : r == s ? e = 2 + (o - i) / l : o == s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (a + s) / 2, [e, 100 * (s == a ? 0 : n <= .5 ? l / (s + a) : l / (2 - s - a)), 100 * n];
  }function i(t) {
    var e,
        n,
        i = t[0],
        r = t[1],
        o = t[2],
        a = Math.min(i, r, o),
        s = Math.max(i, r, o),
        l = s - a;return n = 0 == s ? 0 : l / s * 1e3 / 10, s == a ? e = 0 : i == s ? e = (r - o) / l : r == s ? e = 2 + (o - i) / l : o == s && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, n, s / 255 * 1e3 / 10];
  }function o(t) {
    var e = t[0],
        i = t[1],
        r = t[2];return [n(t)[0], 1 / 255 * Math.min(e, Math.min(i, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(i, r)))];
  }function a(t) {
    var e,
        n = t[0] / 255,
        i = t[1] / 255,
        r = t[2] / 255;return [100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - r))) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * e];
  }function s(t) {
    return M[JSON.stringify(t)];
  }function l(t) {
    var e = t[0] / 255,
        n = t[1] / 255,
        i = t[2] / 255;return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)];
  }function d(t) {
    var e = l(t),
        n = e[0],
        i = e[1],
        r = e[2];return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (n - i), 200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))];
  }function c(t) {
    var e,
        n,
        i,
        r,
        o,
        a = t[0] / 360,
        s = t[1] / 100,
        l = t[2] / 100;if (0 == s) return [o = 255 * l, o, o];e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), r = [0, 0, 0];for (var d = 0; d < 3; d++) {
      (i = a + 1 / 3 * -(d - 1)) < 0 && i++, i > 1 && i--, r[d] = 255 * (o = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e);
    }return r;
  }function u(t) {
    var e = t[0] / 60,
        n = t[1] / 100,
        i = t[2] / 100,
        r = Math.floor(e) % 6,
        o = e - Math.floor(e),
        a = 255 * i * (1 - n),
        s = 255 * i * (1 - n * o),
        l = 255 * i * (1 - n * (1 - o));switch (i *= 255, r) {case 0:
        return [i, l, a];case 1:
        return [s, i, a];case 2:
        return [a, i, l];case 3:
        return [a, s, i];case 4:
        return [l, a, i];case 5:
        return [i, a, s];}
  }function h(t) {
    var e,
        n,
        i,
        o,
        a = t[0] / 360,
        s = t[1] / 100,
        l = t[2] / 100,
        d = s + l;switch (d > 1 && (s /= d, l /= d), i = 6 * a - (e = Math.floor(6 * a)), 0 != (1 & e) && (i = 1 - i), o = s + i * ((n = 1 - l) - s), e) {default:case 6:case 0:
        r = n, g = o, b = s;break;case 1:
        r = o, g = n, b = s;break;case 2:
        r = s, g = n, b = o;break;case 3:
        r = s, g = o, b = n;break;case 4:
        r = o, g = s, b = n;break;case 5:
        r = n, g = s, b = o;}return [255 * r, 255 * g, 255 * b];
  }function f(t) {
    var e = t[1] / 100,
        n = t[2] / 100,
        i = t[3] / 100;return [255 * (1 - Math.min(1, t[0] / 100 * (1 - i) + i)), 255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i))];
  }function p(t) {
    var e,
        n,
        i,
        r = t[0] / 100,
        o = t[1] / 100,
        a = t[2] / 100;return n = -.9689 * r + 1.8758 * o + .0415 * a, i = .0557 * r + -.204 * o + 1.057 * a, e = (e = 3.2406 * r + -1.5372 * o + -.4986 * a) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1))];
  }function v(t) {
    var e = t[0],
        n = t[1],
        i = t[2];return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))];
  }function m(t) {
    var e,
        n,
        i,
        r,
        o = t[0],
        a = t[1],
        s = t[2];return o <= 8 ? r = (n = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((o + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (a / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + r, 3), n, i = i / 108.883 <= .008859 ? i = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3)];
  }function y(t) {
    var e,
        n = t[0],
        i = t[1],
        r = t[2];return (e = 360 * Math.atan2(r, i) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(i * i + r * r), e];
  }function x(t) {
    return p(m(t));
  }function w(t) {
    var e,
        n = t[1];return e = t[2] / 360 * 2 * Math.PI, [t[0], n * Math.cos(e), n * Math.sin(e)];
  }function k(t) {
    return C[t];
  }var C = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
      M = {};for (var S in C) {
    M[JSON.stringify(C[S])] = S;
  }var T = function T() {
    return new E();
  };for (var _ in e) {
    T[_ + "Raw"] = function (t) {
      return function (n) {
        return "number" == typeof n && (n = Array.prototype.slice.call(arguments)), e[t](n);
      };
    }(_);var A = /(\w+)2(\w+)/.exec(_),
        N = A[1],
        D = A[2];(T[N] = T[N] || {})[D] = T[_] = function (t) {
      return function (n) {
        "number" == typeof n && (n = Array.prototype.slice.call(arguments));var i = e[t](n);if ("string" == typeof i || void 0 === i) return i;for (var r = 0; r < i.length; r++) {
          i[r] = Math.round(i[r]);
        }return i;
      };
    }(_);
  }var E = function E() {
    this.convs = {};
  };E.prototype.routeSpace = function (t, e) {
    var n = e[0];return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n));
  }, E.prototype.setValues = function (t, e) {
    return this.space = t, this.convs = {}, this.convs[t] = e, this;
  }, E.prototype.getValues = function (t) {
    var e = this.convs[t];if (!e) {
      var n = this.space;e = T[n][t](this.convs[n]), this.convs[t] = e;
    }return e;
  }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
    E.prototype[t] = function (e) {
      return this.routeSpace(t, arguments);
    };
  });var L = T,
      P = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
      I = { getRgba: F, getHsla: O, getRgb: function getRgb(t) {
      var e = F(t);return e && e.slice(0, 3);
    }, getHsl: function getHsl(t) {
      var e = O(t);return e && e.slice(0, 3);
    }, getHwb: R, getAlpha: function getAlpha(t) {
      var e = F(t);return e ? e[3] : (e = O(t)) ? e[3] : (e = R(t)) ? e[3] : void 0;
    }, hexString: function hexString(t, e) {
      return e = void 0 !== e && 3 === t.length ? e : t[3], "#" + W(t[0]) + W(t[1]) + W(t[2]) + (e >= 0 && e < 1 ? W(Math.round(255 * e)) : "");
    }, rgbString: function rgbString(t, e) {
      return e < 1 || t[3] && t[3] < 1 ? H(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
    }, rgbaString: H, percentString: function percentString(t, e) {
      return e < 1 || t[3] && t[3] < 1 ? z(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)";
    }, percentaString: z, hslString: function hslString(t, e) {
      return e < 1 || t[3] && t[3] < 1 ? B(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
    }, hslaString: B, hwbString: function hwbString(t, e) {
      return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
    }, keyword: function keyword(t) {
      return V[t.slice(0, 3)];
    } };function F(t) {
    if (t) {
      var e = [0, 0, 0],
          n = 1,
          i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
          r = "";if (i) {
        r = (i = i[1])[3];for (var o = 0; o < e.length; o++) {
          e[o] = parseInt(i[o] + i[o], 16);
        }r && (n = Math.round(parseInt(r + r, 16) / 255 * 100) / 100);
      } else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
        for (r = i[2], i = i[1], o = 0; o < e.length; o++) {
          e[o] = parseInt(i.slice(2 * o, 2 * o + 2), 16);
        }r && (n = Math.round(parseInt(r, 16) / 255 * 100) / 100);
      } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (o = 0; o < e.length; o++) {
          e[o] = parseInt(i[o + 1]);
        }n = parseFloat(i[4]);
      } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
        for (o = 0; o < e.length; o++) {
          e[o] = Math.round(2.55 * parseFloat(i[o + 1]));
        }n = parseFloat(i[4]);
      } else if (i = t.match(/(\w+)/)) {
        if ("transparent" == i[1]) return [0, 0, 0, 0];if (!(e = P[i[1]])) return;
      }for (o = 0; o < e.length; o++) {
        e[o] = j(e[o], 0, 255);
      }return n = n || 0 == n ? j(n, 0, 1) : 1, e[3] = n, e;
    }
  }function O(t) {
    if (t) {
      var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if (e) {
        var n = parseFloat(e[4]);return [j(parseInt(e[1]), 0, 360), j(parseFloat(e[2]), 0, 100), j(parseFloat(e[3]), 0, 100), j(isNaN(n) ? 1 : n, 0, 1)];
      }
    }
  }function R(t) {
    if (t) {
      var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if (e) {
        var n = parseFloat(e[4]);return [j(parseInt(e[1]), 0, 360), j(parseFloat(e[2]), 0, 100), j(parseFloat(e[3]), 0, 100), j(isNaN(n) ? 1 : n, 0, 1)];
      }
    }
  }function H(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
  }function z(t, e) {
    return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
  }function B(t, e) {
    return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
  }function j(t, e, n) {
    return Math.min(Math.max(e, t), n);
  }function W(t) {
    var e = t.toString(16).toUpperCase();return e.length < 2 ? "0" + e : e;
  }var V = {};for (var q in P) {
    V[P[q]] = q;
  }var $ = function $(t) {
    return t instanceof $ ? t : this instanceof $ ? (this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }, void ("string" == typeof t ? (e = I.getRgba(t)) ? this.setValues("rgb", e) : (e = I.getHsla(t)) ? this.setValues("hsl", e) : (e = I.getHwb(t)) && this.setValues("hwb", e) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new $(t);var e;
  };$.prototype = { isValid: function isValid() {
      return this.valid;
    }, rgb: function rgb() {
      return this.setSpace("rgb", arguments);
    }, hsl: function hsl() {
      return this.setSpace("hsl", arguments);
    }, hsv: function hsv() {
      return this.setSpace("hsv", arguments);
    }, hwb: function hwb() {
      return this.setSpace("hwb", arguments);
    }, cmyk: function cmyk() {
      return this.setSpace("cmyk", arguments);
    }, rgbArray: function rgbArray() {
      return this.values.rgb;
    }, hslArray: function hslArray() {
      return this.values.hsl;
    }, hsvArray: function hsvArray() {
      return this.values.hsv;
    }, hwbArray: function hwbArray() {
      var t = this.values;return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
    }, cmykArray: function cmykArray() {
      return this.values.cmyk;
    }, rgbaArray: function rgbaArray() {
      var t = this.values;return t.rgb.concat([t.alpha]);
    }, hslaArray: function hslaArray() {
      var t = this.values;return t.hsl.concat([t.alpha]);
    }, alpha: function alpha(t) {
      return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
    }, red: function red(t) {
      return this.setChannel("rgb", 0, t);
    }, green: function green(t) {
      return this.setChannel("rgb", 1, t);
    }, blue: function blue(t) {
      return this.setChannel("rgb", 2, t);
    }, hue: function hue(t) {
      return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
    }, saturation: function saturation(t) {
      return this.setChannel("hsl", 1, t);
    }, lightness: function lightness(t) {
      return this.setChannel("hsl", 2, t);
    }, saturationv: function saturationv(t) {
      return this.setChannel("hsv", 1, t);
    }, whiteness: function whiteness(t) {
      return this.setChannel("hwb", 1, t);
    }, blackness: function blackness(t) {
      return this.setChannel("hwb", 2, t);
    }, value: function value(t) {
      return this.setChannel("hsv", 2, t);
    }, cyan: function cyan(t) {
      return this.setChannel("cmyk", 0, t);
    }, magenta: function magenta(t) {
      return this.setChannel("cmyk", 1, t);
    }, yellow: function yellow(t) {
      return this.setChannel("cmyk", 2, t);
    }, black: function black(t) {
      return this.setChannel("cmyk", 3, t);
    }, hexString: function hexString() {
      return I.hexString(this.values.rgb);
    }, rgbString: function rgbString() {
      return I.rgbString(this.values.rgb, this.values.alpha);
    }, rgbaString: function rgbaString() {
      return I.rgbaString(this.values.rgb, this.values.alpha);
    }, percentString: function percentString() {
      return I.percentString(this.values.rgb, this.values.alpha);
    }, hslString: function hslString() {
      return I.hslString(this.values.hsl, this.values.alpha);
    }, hslaString: function hslaString() {
      return I.hslaString(this.values.hsl, this.values.alpha);
    }, hwbString: function hwbString() {
      return I.hwbString(this.values.hwb, this.values.alpha);
    }, keyword: function keyword() {
      return I.keyword(this.values.rgb, this.values.alpha);
    }, rgbNumber: function rgbNumber() {
      var t = this.values.rgb;return t[0] << 16 | t[1] << 8 | t[2];
    }, luminosity: function luminosity() {
      for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
        var i = t[n] / 255;e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
      }return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
    }, contrast: function contrast(t) {
      var e = this.luminosity(),
          n = t.luminosity();return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
    }, level: function level(t) {
      var e = this.contrast(t);return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
    }, dark: function dark() {
      var t = this.values.rgb;return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
    }, light: function light() {
      return !this.dark();
    }, negate: function negate() {
      for (var t = [], e = 0; e < 3; e++) {
        t[e] = 255 - this.values.rgb[e];
      }return this.setValues("rgb", t), this;
    }, lighten: function lighten(t) {
      var e = this.values.hsl;return e[2] += e[2] * t, this.setValues("hsl", e), this;
    }, darken: function darken(t) {
      var e = this.values.hsl;return e[2] -= e[2] * t, this.setValues("hsl", e), this;
    }, saturate: function saturate(t) {
      var e = this.values.hsl;return e[1] += e[1] * t, this.setValues("hsl", e), this;
    }, desaturate: function desaturate(t) {
      var e = this.values.hsl;return e[1] -= e[1] * t, this.setValues("hsl", e), this;
    }, whiten: function whiten(t) {
      var e = this.values.hwb;return e[1] += e[1] * t, this.setValues("hwb", e), this;
    }, blacken: function blacken(t) {
      var e = this.values.hwb;return e[2] += e[2] * t, this.setValues("hwb", e), this;
    }, greyscale: function greyscale() {
      var t = this.values.rgb,
          e = .3 * t[0] + .59 * t[1] + .11 * t[2];return this.setValues("rgb", [e, e, e]), this;
    }, clearer: function clearer(t) {
      var e = this.values.alpha;return this.setValues("alpha", e - e * t), this;
    }, opaquer: function opaquer(t) {
      var e = this.values.alpha;return this.setValues("alpha", e + e * t), this;
    }, rotate: function rotate(t) {
      var e = this.values.hsl,
          n = (e[0] + t) % 360;return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this;
    }, mix: function mix(t, e) {
      var n = t,
          i = void 0 === e ? .5 : e,
          r = 2 * i - 1,
          o = this.alpha() - n.alpha(),
          a = ((r * o == -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
          s = 1 - a;return this.rgb(a * this.red() + s * n.red(), a * this.green() + s * n.green(), a * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i));
    }, toJSON: function toJSON() {
      return this.rgb();
    }, clone: function clone() {
      var t,
          e,
          n = new $(),
          i = this.values,
          r = n.values;for (var o in i) {
        i.hasOwnProperty(o) && ("[object Array]" === (e = {}.toString.call(t = i[o])) ? r[o] = t.slice(0) : "[object Number]" === e ? r[o] = t : console.error("unexpected color value:", t));
      }return n;
    } }, $.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, $.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, $.prototype.getValues = function (t) {
    for (var e = this.values, n = {}, i = 0; i < t.length; i++) {
      n[t.charAt(i)] = e[t][i];
    }return 1 !== e.alpha && (n.a = e.alpha), n;
  }, $.prototype.setValues = function (t, e) {
    var n,
        i,
        r = this.values,
        o = this.spaces,
        a = this.maxes,
        s = 1;if (this.valid = !0, "alpha" === t) s = e;else if (e.length) r[t] = e.slice(0, t.length), s = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
      for (n = 0; n < t.length; n++) {
        r[t][n] = e[t.charAt(n)];
      }s = e.a;
    } else if (void 0 !== e[o[t][0]]) {
      var l = o[t];for (n = 0; n < t.length; n++) {
        r[t][n] = e[l[n]];
      }s = e.alpha;
    }if (r.alpha = Math.max(0, Math.min(1, void 0 === s ? r.alpha : s)), "alpha" === t) return !1;for (n = 0; n < t.length; n++) {
      i = Math.max(0, Math.min(a[t][n], r[t][n])), r[t][n] = Math.round(i);
    }for (var d in o) {
      d !== t && (r[d] = L[t][d](r[t]));
    }return !0;
  }, $.prototype.setSpace = function (t, e) {
    var n = e[0];return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
  }, $.prototype.setChannel = function (t, e, n) {
    var i = this.values[t];return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this);
  }, "undefined" != typeof window && (window.Color = $);var U,
      Y = $,
      X = { noop: function noop() {}, uid: (U = 0, function () {
      return U++;
    }), isNullOrUndef: function isNullOrUndef(t) {
      return null == t;
    }, isArray: function isArray(t) {
      if (Array.isArray && Array.isArray(t)) return !0;var e = Object.prototype.toString.call(t);return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
    }, isObject: function isObject(t) {
      return null !== t && "[object Object]" === Object.prototype.toString.call(t);
    }, isFinite: function (_isFinite) {
      function isFinite(_x) {
        return _isFinite.apply(this, arguments);
      }

      isFinite.toString = function () {
        return _isFinite.toString();
      };

      return isFinite;
    }(function (t) {
      return ("number" == typeof t || t instanceof Number) && isFinite(t);
    }), valueOrDefault: function valueOrDefault(t, e) {
      return void 0 === t ? e : t;
    }, valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, n) {
      return X.valueOrDefault(X.isArray(t) ? t[e] : t, n);
    }, callback: function callback(t, e, n) {
      if (t && "function" == typeof t.call) return t.apply(n, e);
    }, each: function each(t, e, n, i) {
      var r, o, a;if (X.isArray(t)) {
        if (o = t.length, i) for (r = o - 1; r >= 0; r--) {
          e.call(n, t[r], r);
        } else for (r = 0; r < o; r++) {
          e.call(n, t[r], r);
        }
      } else if (X.isObject(t)) for (o = (a = Object.keys(t)).length, r = 0; r < o; r++) {
        e.call(n, t[a[r]], a[r]);
      }
    }, arrayEquals: function arrayEquals(t, e) {
      var n, i, r, o;if (!t || !e || t.length !== e.length) return !1;for (n = 0, i = t.length; n < i; ++n) {
        if (o = e[n], (r = t[n]) instanceof Array && o instanceof Array) {
          if (!X.arrayEquals(r, o)) return !1;
        } else if (r !== o) return !1;
      }return !0;
    }, clone: function clone(t) {
      if (X.isArray(t)) return t.map(X.clone);if (X.isObject(t)) {
        for (var e = {}, n = Object.keys(t), i = n.length, r = 0; r < i; ++r) {
          e[n[r]] = X.clone(t[n[r]]);
        }return e;
      }return t;
    }, _merger: function _merger(t, e, n, i) {
      var r = e[t],
          o = n[t];X.isObject(r) && X.isObject(o) ? X.merge(r, o, i) : e[t] = X.clone(o);
    }, _mergerIf: function _mergerIf(t, e, n) {
      var i = e[t],
          r = n[t];X.isObject(i) && X.isObject(r) ? X.mergeIf(i, r) : e.hasOwnProperty(t) || (e[t] = X.clone(r));
    }, merge: function merge(t, e, n) {
      var i,
          r,
          o,
          a,
          s,
          l = X.isArray(e) ? e : [e],
          d = l.length;if (!X.isObject(t)) return t;for (i = (n = n || {}).merger || X._merger, r = 0; r < d; ++r) {
        if (X.isObject(e = l[r])) for (s = 0, a = (o = Object.keys(e)).length; s < a; ++s) {
          i(o[s], t, e, n);
        }
      }return t;
    }, mergeIf: function mergeIf(t, e) {
      return X.merge(t, e, { merger: X._mergerIf });
    }, extend: function extend(t) {
      for (var e = function e(_e4, n) {
        t[n] = _e4;
      }, n = 1, i = arguments.length; n < i; ++n) {
        X.each(arguments[n], e);
      }return t;
    }, inherits: function inherits(t) {
      var e = this,
          n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
        return e.apply(this, arguments);
      },
          i = function i() {
        this.constructor = n;
      };return i.prototype = e.prototype, n.prototype = new i(), n.extend = X.inherits, t && X.extend(n.prototype, t), n.__super__ = e.prototype, n;
    } },
      G = X;X.callCallback = X.callback, X.indexOf = function (t, e, n) {
    return Array.prototype.indexOf.call(t, e, n);
  }, X.getValueOrDefault = X.valueOrDefault, X.getValueAtIndexOrDefault = X.valueAtIndexOrDefault;var K = { linear: function linear(t) {
      return t;
    }, easeInQuad: function easeInQuad(t) {
      return t * t;
    }, easeOutQuad: function easeOutQuad(t) {
      return -t * (t - 2);
    }, easeInOutQuad: function easeInOutQuad(t) {
      return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    }, easeInCubic: function easeInCubic(t) {
      return t * t * t;
    }, easeOutCubic: function easeOutCubic(t) {
      return (t -= 1) * t * t + 1;
    }, easeInOutCubic: function easeInOutCubic(t) {
      return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    }, easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    }, easeOutQuart: function easeOutQuart(t) {
      return -((t -= 1) * t * t * t - 1);
    }, easeInOutQuart: function easeInOutQuart(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    }, easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    }, easeOutQuint: function easeOutQuint(t) {
      return (t -= 1) * t * t * t * t + 1;
    }, easeInOutQuint: function easeInOutQuint(t) {
      return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    }, easeInSine: function easeInSine(t) {
      return 1 - Math.cos(t * (Math.PI / 2));
    }, easeOutSine: function easeOutSine(t) {
      return Math.sin(t * (Math.PI / 2));
    }, easeInOutSine: function easeInOutSine(t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    }, easeInExpo: function easeInExpo(t) {
      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
    }, easeOutExpo: function easeOutExpo(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    }, easeInOutExpo: function easeInOutExpo(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
    }, easeInCirc: function easeInCirc(t) {
      return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
    }, easeOutCirc: function easeOutCirc(t) {
      return Math.sqrt(1 - (t -= 1) * t);
    }, easeInOutCirc: function easeInOutCirc(t) {
      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }, easeInElastic: function easeInElastic(t) {
      var e = 1.70158,
          n = 0,
          i = 1;return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
    }, easeOutElastic: function easeOutElastic(t) {
      var e = 1.70158,
          n = 0,
          i = 1;return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
    }, easeInOutElastic: function easeInOutElastic(t) {
      var e = 1.70158,
          n = 0,
          i = 1;return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);
    }, easeInBack: function easeInBack(t) {
      var e = 1.70158;return t * t * ((e + 1) * t - e);
    }, easeOutBack: function easeOutBack(t) {
      var e = 1.70158;return (t -= 1) * t * ((e + 1) * t + e) + 1;
    }, easeInOutBack: function easeInOutBack(t) {
      var e = 1.70158;return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
    }, easeInBounce: function easeInBounce(t) {
      return 1 - K.easeOutBounce(1 - t);
    }, easeOutBounce: function easeOutBounce(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }, easeInOutBounce: function easeInOutBounce(t) {
      return t < .5 ? .5 * K.easeInBounce(2 * t) : .5 * K.easeOutBounce(2 * t - 1) + .5;
    } },
      J = { effects: K };G.easingEffects = K;var Z = Math.PI,
      Q = Z / 180,
      tt = 2 * Z,
      et = Z / 2,
      nt = Z / 4,
      it = 2 * Z / 3,
      rt = { clear: function clear(t) {
      t.ctx.clearRect(0, 0, t.width, t.height);
    }, roundedRect: function roundedRect(t, e, n, i, r, o) {
      if (o) {
        var a = Math.min(o, r / 2, i / 2),
            s = e + a,
            l = n + a,
            d = e + i - a,
            c = n + r - a;t.moveTo(e, l), s < d && l < c ? (t.arc(s, l, a, -Z, -et), t.arc(d, l, a, -et, 0), t.arc(d, c, a, 0, et), t.arc(s, c, a, et, Z)) : s < d ? (t.moveTo(s, n), t.arc(d, l, a, -et, et), t.arc(s, l, a, et, Z + et)) : l < c ? (t.arc(s, l, a, -Z, 0), t.arc(s, c, a, 0, Z)) : t.arc(s, l, a, -Z, Z), t.closePath(), t.moveTo(e, n);
      } else t.rect(e, n, i, r);
    }, drawPoint: function drawPoint(t, e, n, i, r, o) {
      var a,
          s,
          l,
          d,
          c,
          u = (o || 0) * Q;if (!e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || "[object HTMLImageElement]" !== (a = e.toString()) && "[object HTMLCanvasElement]" !== a) {
        if (!(isNaN(n) || n <= 0)) {
          switch (t.beginPath(), e) {default:
              t.arc(i, r, n, 0, tt), t.closePath();break;case "triangle":
              t.moveTo(i + Math.sin(u) * n, r - Math.cos(u) * n), u += it, t.lineTo(i + Math.sin(u) * n, r - Math.cos(u) * n), u += it, t.lineTo(i + Math.sin(u) * n, r - Math.cos(u) * n), t.closePath();break;case "rectRounded":
              d = n - (c = .516 * n), s = Math.cos(u + nt) * d, l = Math.sin(u + nt) * d, t.arc(i - s, r - l, c, u - Z, u - et), t.arc(i + l, r - s, c, u - et, u), t.arc(i + s, r + l, c, u, u + et), t.arc(i - l, r + s, c, u + et, u + Z), t.closePath();break;case "rect":
              if (!o) {
                d = Math.SQRT1_2 * n, t.rect(i - d, r - d, 2 * d, 2 * d);break;
              }u += nt;case "rectRot":
              s = Math.cos(u) * n, l = Math.sin(u) * n, t.moveTo(i - s, r - l), t.lineTo(i + l, r - s), t.lineTo(i + s, r + l), t.lineTo(i - l, r + s), t.closePath();break;case "crossRot":
              u += nt;case "cross":
              s = Math.cos(u) * n, l = Math.sin(u) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);break;case "star":
              s = Math.cos(u) * n, l = Math.sin(u) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s), u += nt, s = Math.cos(u) * n, l = Math.sin(u) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l), t.moveTo(i + l, r - s), t.lineTo(i - l, r + s);break;case "line":
              s = Math.cos(u) * n, l = Math.sin(u) * n, t.moveTo(i - s, r - l), t.lineTo(i + s, r + l);break;case "dash":
              t.moveTo(i, r), t.lineTo(i + Math.cos(u) * n, r + Math.sin(u) * n);}t.fill(), t.stroke();
        }
      } else t.drawImage(e, i - e.width / 2, r - e.height / 2, e.width, e.height);
    }, _isPointInArea: function _isPointInArea(t, e) {
      return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6;
    }, clipArea: function clipArea(t, e) {
      t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
    }, unclipArea: function unclipArea(t) {
      t.restore();
    }, lineTo: function lineTo(t, e, n, i) {
      var r = n.steppedLine;if (r) {
        if ("middle" === r) {
          var o = (e.x + n.x) / 2;t.lineTo(o, i ? n.y : e.y), t.lineTo(o, i ? e.y : n.y);
        } else "after" === r && !i || "after" !== r && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);t.lineTo(n.x, n.y);
      } else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y);
    } },
      ot = rt;G.clear = rt.clear, G.drawRoundedRectangle = function (t) {
    t.beginPath(), rt.roundedRect.apply(rt, arguments);
  };var at = { _set: function _set(t, e) {
      return G.merge(this[t] || (this[t] = {}), e);
    } };at._set("global", { defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", defaultLineHeight: 1.2, showLines: !0 });var st = at,
      lt = G.valueOrDefault,
      dt = G,
      ct = ot,
      ut = { toLineHeight: function toLineHeight(t, e) {
      var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if (!n || "normal" === n[1]) return 1.2 * e;switch (t = +n[2], n[3]) {case "px":
          return t;case "%":
          t /= 100;}return e * t;
    }, toPadding: function toPadding(t) {
      var e, n, i, r;return G.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, r = +t.left || 0) : e = n = i = r = +t || 0, { top: e, right: n, bottom: i, left: r, height: e + i, width: r + n };
    }, _parseFont: function _parseFont(t) {
      var e = st.global,
          n = lt(t.fontSize, e.defaultFontSize),
          i = { family: lt(t.fontFamily, e.defaultFontFamily), lineHeight: G.options.toLineHeight(lt(t.lineHeight, e.defaultLineHeight), n), size: n, style: lt(t.fontStyle, e.defaultFontStyle), weight: null, string: "" };return i.string = function (t) {
        return !t || G.isNullOrUndef(t.size) || G.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
      }(i), i;
    }, resolve: function resolve(t, e, n) {
      var i, r, o;for (i = 0, r = t.length; i < r; ++i) {
        if (void 0 !== (o = t[i]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== n && G.isArray(o) && (o = o[n]), void 0 !== o)) return o;
      }
    } };dt.easing = J, dt.canvas = ct, dt.options = ut;var ht = function ht(t) {
    dt.extend(this, t), this.initialize.apply(this, arguments);
  };dt.extend(ht.prototype, { initialize: function initialize() {
      this.hidden = !1;
    }, pivot: function pivot() {
      var t = this;return t._view || (t._view = dt.clone(t._model)), t._start = {}, t;
    }, transition: function transition(t) {
      var e = this,
          n = e._model,
          i = e._start,
          r = e._view;return n && 1 !== t ? (r || (r = e._view = {}), i || (i = e._start = {}), function (t, e, n, i) {
        var r,
            o,
            a,
            s,
            l,
            d,
            c,
            u,
            h,
            f = Object.keys(n);for (r = 0, o = f.length; r < o; ++r) {
          if (d = n[a = f[r]], e.hasOwnProperty(a) || (e[a] = d), (s = e[a]) !== d && "_" !== a[0]) {
            if (t.hasOwnProperty(a) || (t[a] = s), (c = typeof d === "undefined" ? "undefined" : _typeof(d)) == _typeof(l = t[a])) if ("string" === c) {
              if ((u = Y(l)).valid && (h = Y(d)).valid) {
                e[a] = h.mix(u, i).rgbString();continue;
              }
            } else if (dt.isFinite(l) && dt.isFinite(d)) {
              e[a] = l + (d - l) * i;continue;
            }e[a] = d;
          }
        }
      }(i, r, n, t), e) : (e._view = n, e._start = null, e);
    }, tooltipPosition: function tooltipPosition() {
      return { x: this._model.x, y: this._model.y };
    }, hasValue: function hasValue() {
      return dt.isNumber(this._model.x) && dt.isNumber(this._model.y);
    } }), ht.extend = dt.inherits;var ft = ht,
      pt = ft.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }),
      gt = pt;Object.defineProperty(pt.prototype, "animationObject", { get: function get() {
      return this;
    } }), Object.defineProperty(pt.prototype, "chartInstance", { get: function get() {
      return this.chart;
    }, set: function set(t) {
      this.chart = t;
    } }), st._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: dt.noop, onComplete: dt.noop } });var vt = { animations: [], request: null, addAnimation: function addAnimation(t, e, n, i) {
      var r,
          o,
          a = this.animations;for (e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), r = 0, o = a.length; r < o; ++r) {
        if (a[r].chart === t) return void (a[r] = e);
      }a.push(e), 1 === a.length && this.requestAnimationFrame();
    }, cancelAnimation: function cancelAnimation(t) {
      var e = dt.findIndex(this.animations, function (e) {
        return e.chart === t;
      });-1 !== e && (this.animations.splice(e, 1), t.animating = !1);
    }, requestAnimationFrame: function requestAnimationFrame() {
      var t = this;null === t.request && (t.request = dt.requestAnimFrame.call(window, function () {
        t.request = null, t.startDigest();
      }));
    }, startDigest: function startDigest() {
      this.advance(), this.animations.length > 0 && this.requestAnimationFrame();
    }, advance: function advance() {
      for (var t, e, n, i, r = this.animations, o = 0; o < r.length;) {
        e = (t = r[o]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), dt.callback(t.render, [e, t], e), dt.callback(t.onAnimationProgress, [t], e), t.currentStep >= n ? (dt.callback(t.onAnimationComplete, [t], e), e.animating = !1, r.splice(o, 1)) : ++o;
      }
    } },
      mt = dt.options.resolve,
      bt = ["push", "pop", "shift", "splice", "unshift"];function yt(t, e) {
    var n = t._chartjs;if (n) {
      var i = n.listeners,
          r = i.indexOf(e);-1 !== r && i.splice(r, 1), i.length > 0 || (bt.forEach(function (e) {
        delete t[e];
      }), delete t._chartjs);
    }
  }var xt = function xt(t, e) {
    this.initialize(t, e);
  };dt.extend(xt.prototype, { datasetElementType: null, dataElementType: null, initialize: function initialize(t, e) {
      this.chart = t, this.index = e, this.linkScales(), this.addElements();
    }, updateIndex: function updateIndex(t) {
      this.index = t;
    }, linkScales: function linkScales() {
      var t = this,
          e = t.getMeta(),
          n = t.getDataset();null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id);
    }, getDataset: function getDataset() {
      return this.chart.data.datasets[this.index];
    }, getMeta: function getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }, getScaleForId: function getScaleForId(t) {
      return this.chart.scales[t];
    }, _getValueScaleId: function _getValueScaleId() {
      return this.getMeta().yAxisID;
    }, _getIndexScaleId: function _getIndexScaleId() {
      return this.getMeta().xAxisID;
    }, _getValueScale: function _getValueScale() {
      return this.getScaleForId(this._getValueScaleId());
    }, _getIndexScale: function _getIndexScale() {
      return this.getScaleForId(this._getIndexScaleId());
    }, reset: function reset() {
      this.update(!0);
    }, destroy: function destroy() {
      this._data && yt(this._data, this);
    }, createMetaDataset: function createMetaDataset() {
      var t = this.datasetElementType;return t && new t({ _chart: this.chart, _datasetIndex: this.index });
    }, createMetaData: function createMetaData(t) {
      var e = this.dataElementType;return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t });
    }, addElements: function addElements() {
      var t,
          e,
          n = this.getMeta(),
          i = this.getDataset().data || [],
          r = n.data;for (t = 0, e = i.length; t < e; ++t) {
        r[t] = r[t] || this.createMetaData(t);
      }n.dataset = n.dataset || this.createMetaDataset();
    }, addElementAndReset: function addElementAndReset(t) {
      var e = this.createMetaData(t);this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
    }, buildOrUpdateElements: function buildOrUpdateElements() {
      var t,
          e,
          n = this,
          i = n.getDataset(),
          r = i.data || (i.data = []);n._data !== r && (n._data && yt(n._data, n), r && Object.isExtensible(r) && (e = n, (t = r)._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), bt.forEach(function (e) {
        var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
            i = t[e];Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function value() {
            var e = Array.prototype.slice.call(arguments),
                r = i.apply(this, e);return dt.each(t._chartjs.listeners, function (t) {
              "function" == typeof t[n] && t[n].apply(t, e);
            }), r;
          } });
      }))), n._data = r), n.resyncElements();
    }, update: dt.noop, transition: function transition(t) {
      for (var e = this.getMeta(), n = e.data || [], i = n.length, r = 0; r < i; ++r) {
        n[r].transition(t);
      }e.dataset && e.dataset.transition(t);
    }, draw: function draw() {
      var t = this.getMeta(),
          e = t.data || [],
          n = e.length,
          i = 0;for (t.dataset && t.dataset.draw(); i < n; ++i) {
        e[i].draw();
      }
    }, removeHoverStyle: function removeHoverStyle(t) {
      dt.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
    }, setHoverStyle: function setHoverStyle(t) {
      var e = this.chart.data.datasets[t._datasetIndex],
          n = t._index,
          i = t.custom || {},
          r = t._model,
          o = dt.getHoverColor;t.$previousStyle = { backgroundColor: r.backgroundColor, borderColor: r.borderColor, borderWidth: r.borderWidth }, r.backgroundColor = mt([i.hoverBackgroundColor, e.hoverBackgroundColor, o(r.backgroundColor)], void 0, n), r.borderColor = mt([i.hoverBorderColor, e.hoverBorderColor, o(r.borderColor)], void 0, n), r.borderWidth = mt([i.hoverBorderWidth, e.hoverBorderWidth, r.borderWidth], void 0, n);
    }, resyncElements: function resyncElements() {
      var t = this.getMeta(),
          e = this.getDataset().data,
          n = t.data.length,
          i = e.length;i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n);
    }, insertElements: function insertElements(t, e) {
      for (var n = 0; n < e; ++n) {
        this.addElementAndReset(t + n);
      }
    }, onDataPush: function onDataPush() {
      var t = arguments.length;this.insertElements(this.getDataset().data.length - t, t);
    }, onDataPop: function onDataPop() {
      this.getMeta().data.pop();
    }, onDataShift: function onDataShift() {
      this.getMeta().data.shift();
    }, onDataSplice: function onDataSplice(t, e) {
      this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
    }, onDataUnshift: function onDataUnshift() {
      this.insertElements(0, arguments.length);
    } }), xt.extend = dt.inherits;var wt = xt;st._set("global", { elements: { arc: { backgroundColor: st.global.defaultColor, borderColor: "#fff", borderWidth: 2, borderAlign: "center" } } });var kt = ft.extend({ inLabelRange: function inLabelRange(t) {
      var e = this._view;return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
    }, inRange: function inRange(t, e) {
      var n = this._view;if (n) {
        for (var i = dt.getAngleFromPoint(n, { x: t, y: e }), r = i.angle, o = i.distance, a = n.startAngle, s = n.endAngle; s < a;) {
          s += 2 * Math.PI;
        }for (; r > s;) {
          r -= 2 * Math.PI;
        }for (; r < a;) {
          r += 2 * Math.PI;
        }return r >= a && r <= s && o >= n.innerRadius && o <= n.outerRadius;
      }return !1;
    }, getCenterPoint: function getCenterPoint() {
      var t = this._view,
          e = (t.startAngle + t.endAngle) / 2,
          n = (t.innerRadius + t.outerRadius) / 2;return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
    }, getArea: function getArea() {
      var t = this._view;return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
    }, tooltipPosition: function tooltipPosition() {
      var t = this._view,
          e = t.startAngle + (t.endAngle - t.startAngle) / 2,
          n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
    }, draw: function draw() {
      var t,
          e = this._chart.ctx,
          n = this._view,
          i = n.startAngle,
          r = n.endAngle,
          o = "inner" === n.borderAlign ? .33 : 0;e.save(), e.beginPath(), e.arc(n.x, n.y, Math.max(n.outerRadius - o, 0), i, r), e.arc(n.x, n.y, n.innerRadius, r, i, !0), e.closePath(), e.fillStyle = n.backgroundColor, e.fill(), n.borderWidth && ("inner" === n.borderAlign ? (e.beginPath(), e.arc(n.x, n.y, n.outerRadius, i - (t = o / n.outerRadius), r + t), n.innerRadius > o ? e.arc(n.x, n.y, n.innerRadius - o, r + (t = o / n.innerRadius), i - t, !0) : e.arc(n.x, n.y, o, r + Math.PI / 2, i - Math.PI / 2), e.closePath(), e.clip(), e.beginPath(), e.arc(n.x, n.y, n.outerRadius, i, r), e.arc(n.x, n.y, n.innerRadius, r, i, !0), e.closePath(), e.lineWidth = 2 * n.borderWidth, e.lineJoin = "round") : (e.lineWidth = n.borderWidth, e.lineJoin = "bevel"), e.strokeStyle = n.borderColor, e.stroke()), e.restore();
    } }),
      Ct = dt.valueOrDefault,
      Mt = st.global.defaultColor;st._set("global", { elements: { line: { tension: .4, backgroundColor: Mt, borderWidth: 3, borderColor: Mt, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 } } });var St = ft.extend({ draw: function draw() {
      var t,
          e,
          n,
          i,
          r = this._view,
          o = this._chart.ctx,
          a = r.spanGaps,
          s = this._children.slice(),
          l = st.global,
          d = l.elements.line,
          c = -1;for (this._loop && s.length && s.push(s[0]), o.save(), o.lineCap = r.borderCapStyle || d.borderCapStyle, o.setLineDash && o.setLineDash(r.borderDash || d.borderDash), o.lineDashOffset = Ct(r.borderDashOffset, d.borderDashOffset), o.lineJoin = r.borderJoinStyle || d.borderJoinStyle, o.lineWidth = Ct(r.borderWidth, d.borderWidth), o.strokeStyle = r.borderColor || l.defaultColor, o.beginPath(), c = -1, t = 0; t < s.length; ++t) {
        e = s[t], n = dt.previousItem(s, t), i = e._view, 0 === t ? i.skip || (o.moveTo(i.x, i.y), c = t) : (n = -1 === c ? n : s[c], i.skip || (c !== t - 1 && !a || -1 === c ? o.moveTo(i.x, i.y) : dt.canvas.lineTo(o, n._view, e._view), c = t));
      }o.stroke(), o.restore();
    } }),
      Tt = dt.valueOrDefault,
      _t = st.global.defaultColor;function At(t) {
    var e = this._view;return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
  }st._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: _t, borderColor: _t, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } });var Nt = ft.extend({ inRange: function inRange(t, e) {
      var n = this._view;return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2);
    }, inLabelRange: At, inXRange: At, inYRange: function inYRange(t) {
      var e = this._view;return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
    }, getCenterPoint: function getCenterPoint() {
      var t = this._view;return { x: t.x, y: t.y };
    }, getArea: function getArea() {
      return Math.PI * Math.pow(this._view.radius, 2);
    }, tooltipPosition: function tooltipPosition() {
      var t = this._view;return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
    }, draw: function draw(t) {
      var e = this._view,
          n = this._chart.ctx,
          i = e.pointStyle,
          r = e.rotation,
          o = e.radius,
          a = e.x,
          s = e.y,
          l = st.global,
          d = l.defaultColor;e.skip || (void 0 === t || dt.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || d, n.lineWidth = Tt(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || d, dt.canvas.drawPoint(n, i, o, a, s, r));
    } }),
      Dt = st.global.defaultColor;function Et(t) {
    return t && void 0 !== t.width;
  }function Lt(t) {
    var e, n, i, r, o;return Et(t) ? (e = t.x - (o = t.width / 2), n = t.x + o, i = Math.min(t.y, t.base), r = Math.max(t.y, t.base)) : (o = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - o, r = t.y + o), { left: e, top: i, right: n, bottom: r };
  }function Pt(t, e, n) {
    return t === e ? n : t === n ? e : t;
  }function It(t, e, n) {
    var i = null === e,
        r = null === n,
        o = !(!t || i && r) && Lt(t);return o && (i || e >= o.left && e <= o.right) && (r || n >= o.top && n <= o.bottom);
  }st._set("global", { elements: { rectangle: { backgroundColor: Dt, borderColor: Dt, borderSkipped: "bottom", borderWidth: 0 } } });var Ft = {},
      Ot = St,
      Rt = Nt,
      Ht = ft.extend({ draw: function draw() {
      var t = this._chart.ctx,
          e = this._view,
          n = function (t) {
        var e = Lt(t),
            n = e.right - e.left,
            i = e.bottom - e.top,
            r = function (t, e, n) {
          var i,
              r,
              o,
              a,
              s = t.borderWidth,
              l = function (t) {
            var e = t.borderSkipped,
                n = {};return e ? (t.horizontal ? t.base > t.x && (e = Pt(e, "left", "right")) : t.base < t.y && (e = Pt(e, "bottom", "top")), n[e] = !0, n) : n;
          }(t);return dt.isObject(s) ? (i = +s.top || 0, r = +s.right || 0, o = +s.bottom || 0, a = +s.left || 0) : i = r = o = a = +s || 0, { t: l.top || i < 0 ? 0 : i > n ? n : i, r: l.right || r < 0 ? 0 : r > e ? e : r, b: l.bottom || o < 0 ? 0 : o > n ? n : o, l: l.left || a < 0 ? 0 : a > e ? e : a };
        }(t, n / 2, i / 2);return { outer: { x: e.left, y: e.top, w: n, h: i }, inner: { x: e.left + r.l, y: e.top + r.t, w: n - r.l - r.r, h: i - r.t - r.b } };
      }(e),
          i = n.outer,
          r = n.inner;t.fillStyle = e.backgroundColor, t.fillRect(i.x, i.y, i.w, i.h), i.w === r.w && i.h === r.h || (t.save(), t.beginPath(), t.rect(i.x, i.y, i.w, i.h), t.clip(), t.fillStyle = e.borderColor, t.rect(r.x, r.y, r.w, r.h), t.fill("evenodd"), t.restore());
    }, height: function height() {
      var t = this._view;return t.base - t.y;
    }, inRange: function inRange(t, e) {
      return It(this._view, t, e);
    }, inLabelRange: function inLabelRange(t, e) {
      var n = this._view;return Et(n) ? It(n, t, null) : It(n, null, e);
    }, inXRange: function inXRange(t) {
      return It(this._view, t, null);
    }, inYRange: function inYRange(t) {
      return It(this._view, null, t);
    }, getCenterPoint: function getCenterPoint() {
      var t,
          e,
          n = this._view;return Et(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), { x: t, y: e };
    }, getArea: function getArea() {
      var t = this._view;return Et(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base);
    }, tooltipPosition: function tooltipPosition() {
      var t = this._view;return { x: t.x, y: t.y };
    } });Ft.Arc = kt, Ft.Line = Ot, Ft.Point = Rt, Ft.Rectangle = Ht;var zt = dt.options.resolve;st._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } });var Bt = wt.extend({ dataElementType: Ft.Rectangle, initialize: function initialize() {
      var t;wt.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0;
    }, update: function update(t) {
      var e,
          n,
          i = this.getMeta().data;for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e) {
        this.updateElement(i[e], e, t);
      }
    }, updateElement: function updateElement(t, e, n) {
      var i = this,
          r = i.getMeta(),
          o = i.getDataset(),
          a = i._resolveElementOptions(t, e);t._xScale = i.getScaleForId(r.xAxisID), t._yScale = i.getScaleForId(r.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = { backgroundColor: a.backgroundColor, borderColor: a.borderColor, borderSkipped: a.borderSkipped, borderWidth: a.borderWidth, datasetLabel: o.label, label: i.chart.data.labels[e] }, i._updateElementGeometry(t, e, n), t.pivot();
    }, _updateElementGeometry: function _updateElementGeometry(t, e, n) {
      var i = this,
          r = t._model,
          o = i._getValueScale(),
          a = o.getBasePixel(),
          s = o.isHorizontal(),
          l = i._ruler || i.getRuler(),
          d = i.calculateBarValuePixels(i.index, e),
          c = i.calculateBarIndexPixels(i.index, e, l);r.horizontal = s, r.base = n ? a : d.base, r.x = s ? n ? a : d.head : c.center, r.y = s ? c.center : n ? a : d.head, r.height = s ? c.size : void 0, r.width = s ? void 0 : c.size;
    }, _getStacks: function _getStacks(t) {
      var e,
          n,
          i = this.chart,
          r = this._getIndexScale().options.stacked,
          o = void 0 === t ? i.data.datasets.length : t + 1,
          a = [];for (e = 0; e < o; ++e) {
        (n = i.getDatasetMeta(e)).bar && i.isDatasetVisible(e) && (!1 === r || !0 === r && -1 === a.indexOf(n.stack) || void 0 === r && (void 0 === n.stack || -1 === a.indexOf(n.stack))) && a.push(n.stack);
      }return a;
    }, getStackCount: function getStackCount() {
      return this._getStacks().length;
    }, getStackIndex: function getStackIndex(t, e) {
      var n = this._getStacks(t),
          i = void 0 !== e ? n.indexOf(e) : -1;return -1 === i ? n.length - 1 : i;
    }, getRuler: function getRuler() {
      var t,
          e,
          n = this._getIndexScale(),
          i = this.getStackCount(),
          r = this.index,
          o = n.isHorizontal(),
          a = o ? n.left : n.top,
          s = a + (o ? n.width : n.height),
          l = [];for (t = 0, e = this.getMeta().data.length; t < e; ++t) {
        l.push(n.getPixelForValue(null, t, r));
      }return { min: dt.isNullOrUndef(n.options.barThickness) ? function (t, e) {
          var n,
              i,
              r,
              o,
              a = t.isHorizontal() ? t.width : t.height,
              s = t.getTicks();for (r = 1, o = e.length; r < o; ++r) {
            a = Math.min(a, Math.abs(e[r] - e[r - 1]));
          }for (r = 0, o = s.length; r < o; ++r) {
            i = t.getPixelForTick(r), a = r > 0 ? Math.min(a, i - n) : a, n = i;
          }return a;
        }(n, l) : -1, pixels: l, start: a, end: s, stackCount: i, scale: n };
    }, calculateBarValuePixels: function calculateBarValuePixels(t, e) {
      var n,
          i,
          r,
          o,
          a,
          s,
          l = this.chart,
          d = this.getMeta(),
          c = this._getValueScale(),
          u = c.isHorizontal(),
          h = l.data.datasets,
          f = +c.getRightValue(h[t].data[e]),
          p = c.options.minBarLength,
          g = c.options.stacked,
          v = d.stack,
          m = 0;if (g || void 0 === g && void 0 !== v) for (n = 0; n < t; ++n) {
        (i = l.getDatasetMeta(n)).bar && i.stack === v && i.controller._getValueScaleId() === c.id && l.isDatasetVisible(n) && (r = +c.getRightValue(h[n].data[e]), (f < 0 && r < 0 || f >= 0 && r > 0) && (m += r));
      }return o = c.getPixelForValue(m), s = (a = c.getPixelForValue(m + f)) - o, void 0 !== p && Math.abs(s) < p && (s = p, a = f >= 0 && !u || f < 0 && u ? o - p : o + p), { size: s, base: o, head: a, center: a + s / 2 };
    }, calculateBarIndexPixels: function calculateBarIndexPixels(t, e, n) {
      var i = n.scale.options,
          r = "flex" === i.barThickness ? function (t, e, n) {
        var i,
            r = e.pixels,
            o = r[t],
            a = t > 0 ? r[t - 1] : null,
            s = t < r.length - 1 ? r[t + 1] : null,
            l = n.categoryPercentage;return null === a && (a = o - (null === s ? e.end - e.start : s - o)), null === s && (s = o + o - a), i = o - (o - Math.min(a, s)) / 2 * l, { chunk: Math.abs(s - a) / 2 * l / e.stackCount, ratio: n.barPercentage, start: i };
      }(e, n, i) : function (t, e, n) {
        var i,
            r,
            o = n.barThickness,
            a = e.stackCount,
            s = e.pixels[t];return dt.isNullOrUndef(o) ? (i = e.min * n.categoryPercentage, r = n.barPercentage) : (i = o * a, r = 1), { chunk: i / a, ratio: r, start: s - i / 2 };
      }(e, n, i),
          o = this.getStackIndex(t, this.getMeta().stack),
          a = r.start + r.chunk * o + r.chunk / 2,
          s = Math.min(dt.valueOrDefault(i.maxBarThickness, 1 / 0), r.chunk * r.ratio);return { base: a - s / 2, head: a + s / 2, center: a, size: s };
    }, draw: function draw() {
      var t = this.chart,
          e = this._getValueScale(),
          n = this.getMeta().data,
          i = this.getDataset(),
          r = n.length,
          o = 0;for (dt.canvas.clipArea(t.ctx, t.chartArea); o < r; ++o) {
        isNaN(e.getRightValue(i.data[o])) || n[o].draw();
      }dt.canvas.unclipArea(t.ctx);
    }, _resolveElementOptions: function _resolveElementOptions(t, e) {
      var n,
          i,
          r,
          o = this.chart,
          a = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.rectangle,
          d = {},
          c = { chart: o, dataIndex: e, dataset: a, datasetIndex: this.index },
          u = ["backgroundColor", "borderColor", "borderSkipped", "borderWidth"];for (n = 0, i = u.length; n < i; ++n) {
        d[r = u[n]] = zt([s[r], a[r], l[r]], c, e);
      }return d;
    } }),
      jt = dt.valueOrDefault,
      Wt = dt.options.resolve;st._set("bubble", { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function title() {
          return "";
        }, label: function label(t, e) {
          return (e.datasets[t.datasetIndex].label || "") + ": (" + t.xLabel + ", " + t.yLabel + ", " + e.datasets[t.datasetIndex].data[t.index].r + ")";
        } } } });var Vt = wt.extend({ dataElementType: Ft.Point, update: function update(t) {
      var e = this,
          n = e.getMeta().data;dt.each(n, function (n, i) {
        e.updateElement(n, i, t);
      });
    }, updateElement: function updateElement(t, e, n) {
      var i = this,
          r = i.getMeta(),
          o = t.custom || {},
          a = i.getScaleForId(r.xAxisID),
          s = i.getScaleForId(r.yAxisID),
          l = i._resolveElementOptions(t, e),
          d = i.getDataset().data[e],
          c = i.index,
          u = n ? a.getPixelForDecimal(.5) : a.getPixelForValue("object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) ? d : NaN, e, c),
          h = n ? s.getBasePixel() : s.getPixelForValue(d, e, c);t._xScale = a, t._yScale = s, t._options = l, t._datasetIndex = c, t._index = e, t._model = { backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, hitRadius: l.hitRadius, pointStyle: l.pointStyle, rotation: l.rotation, radius: n ? 0 : l.radius, skip: o.skip || isNaN(u) || isNaN(h), x: u, y: h }, t.pivot();
    }, setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = dt.getHoverColor;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = jt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = jt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = jt(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius;
    }, _resolveElementOptions: function _resolveElementOptions(t, e) {
      var n,
          i,
          r,
          o = this.chart,
          a = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.point,
          d = a.data[e],
          c = {},
          u = { chart: o, dataIndex: e, dataset: a, datasetIndex: this.index },
          h = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];for (n = 0, i = h.length; n < i; ++n) {
        c[r = h[n]] = Wt([s[r], a[r], l[r]], u, e);
      }return c.radius = Wt([s.radius, d ? d.r : void 0, a.radius, l.radius], u, e), c;
    } }),
      qt = dt.options.resolve,
      $t = dt.valueOrDefault;st._set("doughnut", { animation: { animateRotate: !0, animateScale: !1 }, hover: { mode: "single" }, legendCallback: function legendCallback(t) {
      var e = [];e.push('<ul class="' + t.id + '-legend">');var n = t.data,
          i = n.datasets,
          r = n.labels;if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
        e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && e.push(r[o]), e.push("</li>");
      }return e.push("</ul>"), e.join("");
    }, legend: { labels: { generateLabels: function generateLabels(t) {
          var e = t.data;return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
            var r = t.getDatasetMeta(0),
                o = e.datasets[0],
                a = r.data[i],
                s = a && a.custom || {},
                l = t.options.elements.arc;return { text: n, fillStyle: qt([s.backgroundColor, o.backgroundColor, l.backgroundColor], void 0, i), strokeStyle: qt([s.borderColor, o.borderColor, l.borderColor], void 0, i), lineWidth: qt([s.borderWidth, o.borderWidth, l.borderWidth], void 0, i), hidden: isNaN(o.data[i]) || r.data[i].hidden, index: i };
          }) : [];
        } }, onClick: function onClick(t, e) {
        var n,
            i,
            r,
            o = e.index,
            a = this.chart;for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) {
          (r = a.getDatasetMeta(n)).data[o] && (r.data[o].hidden = !r.data[o].hidden);
        }a.update();
      } }, cutoutPercentage: 50, rotation: -.5 * Math.PI, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function title() {
          return "";
        }, label: function label(t, e) {
          var n = e.labels[t.index],
              i = ": " + e.datasets[t.datasetIndex].data[t.index];return dt.isArray(n) ? (n = n.slice())[0] += i : n += i, n;
        } } } });var Ut = wt.extend({ dataElementType: Ft.Arc, linkScales: dt.noop, getRingIndex: function getRingIndex(t) {
      for (var e = 0, n = 0; n < t; ++n) {
        this.chart.isDatasetVisible(n) && ++e;
      }return e;
    }, update: function update(t) {
      var e,
          n,
          i = this,
          r = i.chart,
          o = r.chartArea,
          a = r.options,
          s = o.right - o.left,
          l = o.bottom - o.top,
          d = Math.min(s, l),
          c = { x: 0, y: 0 },
          u = i.getMeta(),
          h = u.data,
          f = a.cutoutPercentage,
          p = a.circumference,
          g = i._getRingWeight(i.index);if (p < 2 * Math.PI) {
        var v = a.rotation % (2 * Math.PI),
            m = (v += 2 * Math.PI * (v >= Math.PI ? -1 : v < -Math.PI ? 1 : 0)) + p,
            b = { x: Math.cos(v), y: Math.sin(v) },
            y = { x: Math.cos(m), y: Math.sin(m) },
            x = v <= 0 && m >= 0 || v <= 2 * Math.PI && 2 * Math.PI <= m,
            w = v <= .5 * Math.PI && .5 * Math.PI <= m || v <= 2.5 * Math.PI && 2.5 * Math.PI <= m,
            k = v <= -Math.PI && -Math.PI <= m || v <= Math.PI && Math.PI <= m,
            C = v <= .5 * -Math.PI && .5 * -Math.PI <= m || v <= 1.5 * Math.PI && 1.5 * Math.PI <= m,
            M = f / 100,
            S = { x: k ? -1 : Math.min(b.x * (b.x < 0 ? 1 : M), y.x * (y.x < 0 ? 1 : M)), y: C ? -1 : Math.min(b.y * (b.y < 0 ? 1 : M), y.y * (y.y < 0 ? 1 : M)) },
            T = { x: x ? 1 : Math.max(b.x * (b.x > 0 ? 1 : M), y.x * (y.x > 0 ? 1 : M)), y: w ? 1 : Math.max(b.y * (b.y > 0 ? 1 : M), y.y * (y.y > 0 ? 1 : M)) },
            _ = { width: .5 * (T.x - S.x), height: .5 * (T.y - S.y) };d = Math.min(s / _.width, l / _.height), c = { x: -.5 * (T.x + S.x), y: -.5 * (T.y + S.y) };
      }for (e = 0, n = h.length; e < n; ++e) {
        h[e]._options = i._resolveElementOptions(h[e], e);
      }for (r.borderWidth = i.getMaxBorderWidth(), r.outerRadius = Math.max((d - r.borderWidth) / 2, 0), r.innerRadius = Math.max(f ? r.outerRadius / 100 * f : 0, 0), r.radiusLength = (r.outerRadius - r.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), r.offsetX = c.x * r.outerRadius, r.offsetY = c.y * r.outerRadius, u.total = i.calculateTotal(), i.outerRadius = r.outerRadius - r.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - r.radiusLength * g, 0), e = 0, n = h.length; e < n; ++e) {
        i.updateElement(h[e], e, t);
      }
    }, updateElement: function updateElement(t, e, n) {
      var i = this,
          r = i.chart,
          o = r.chartArea,
          a = r.options,
          s = a.animation,
          l = (o.left + o.right) / 2,
          d = (o.top + o.bottom) / 2,
          c = a.rotation,
          u = a.rotation,
          h = i.getDataset(),
          f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(h.data[e]) * (a.circumference / (2 * Math.PI)),
          p = t._options || {};dt.extend(t, { _datasetIndex: i.index, _index: e, _model: { backgroundColor: p.backgroundColor, borderColor: p.borderColor, borderWidth: p.borderWidth, borderAlign: p.borderAlign, x: l + r.offsetX, y: d + r.offsetY, startAngle: c, endAngle: u, circumference: f, outerRadius: n && s.animateScale ? 0 : i.outerRadius, innerRadius: n && s.animateScale ? 0 : i.innerRadius, label: dt.valueAtIndexOrDefault(h.label, e, r.data.labels[e]) } });var g = t._model;n && s.animateRotate || (g.startAngle = 0 === e ? a.rotation : i.getMeta().data[e - 1]._model.endAngle, g.endAngle = g.startAngle + g.circumference), t.pivot();
    }, calculateTotal: function calculateTotal() {
      var t,
          e = this.getDataset(),
          n = this.getMeta(),
          i = 0;return dt.each(n.data, function (n, r) {
        t = e.data[r], isNaN(t) || n.hidden || (i += Math.abs(t));
      }), i;
    }, calculateCircumference: function calculateCircumference(t) {
      var e = this.getMeta().total;return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
    }, getMaxBorderWidth: function getMaxBorderWidth(t) {
      var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          d = 0,
          c = this.chart;if (!t) for (e = 0, n = c.data.datasets.length; e < n; ++e) {
        if (c.isDatasetVisible(e)) {
          t = (i = c.getDatasetMeta(e)).data, e !== this.index && (o = i.controller);break;
        }
      }if (!t) return 0;for (e = 0, n = t.length; e < n; ++e) {
        r = t[e], "inner" !== (a = o ? o._resolveElementOptions(r, e) : r._options).borderAlign && (d = (l = a.hoverBorderWidth) > (d = (s = a.borderWidth) > d ? s : d) ? l : d);
      }return d;
    }, setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = dt.getHoverColor;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = $t(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = $t(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = $t(n.hoverBorderWidth, n.borderWidth);
    }, _resolveElementOptions: function _resolveElementOptions(t, e) {
      var n,
          i,
          r,
          o = this.chart,
          a = this.getDataset(),
          s = t.custom || {},
          l = o.options.elements.arc,
          d = {},
          c = { chart: o, dataIndex: e, dataset: a, datasetIndex: this.index },
          u = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];for (n = 0, i = u.length; n < i; ++n) {
        d[r = u[n]] = qt([s[r], a[r], l[r]], c, e);
      }return d;
    }, _getRingWeightOffset: function _getRingWeightOffset(t) {
      for (var e = 0, n = 0; n < t; ++n) {
        this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
      }return e;
    }, _getRingWeight: function _getRingWeight(t) {
      return Math.max($t(this.chart.data.datasets[t].weight, 1), 0);
    }, _getVisibleDatasetWeightTotal: function _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    } });st._set("horizontalBar", { hover: { mode: "index", axis: "y" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ type: "category", position: "left", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { mode: "index", axis: "y" } });var Yt = Bt.extend({ _getValueScaleId: function _getValueScaleId() {
      return this.getMeta().xAxisID;
    }, _getIndexScaleId: function _getIndexScaleId() {
      return this.getMeta().yAxisID;
    } }),
      Xt = dt.valueOrDefault,
      Gt = dt.options.resolve,
      Kt = dt.canvas._isPointInArea;function Jt(t, e) {
    return Xt(t.showLine, e.showLines);
  }st._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } });var Zt = wt.extend({ datasetElementType: Ft.Line, dataElementType: Ft.Point, update: function update(t) {
      var e,
          n,
          i = this,
          r = i.getMeta(),
          o = r.dataset,
          a = r.data || [],
          s = i.getScaleForId(r.yAxisID),
          l = i.getDataset(),
          d = Jt(l, i.chart.options);for (d && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = i.index, o._children = a, o._model = i._resolveLineOptions(o), o.pivot()), e = 0, n = a.length; e < n; ++e) {
        i.updateElement(a[e], e, t);
      }for (d && 0 !== o._model.tension && i.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) {
        a[e].pivot();
      }
    }, updateElement: function updateElement(t, e, n) {
      var i,
          r,
          o = this,
          a = o.getMeta(),
          s = t.custom || {},
          l = o.getDataset(),
          d = o.index,
          c = l.data[e],
          u = o.getScaleForId(a.yAxisID),
          h = o.getScaleForId(a.xAxisID),
          f = a.dataset._model,
          p = o._resolvePointOptions(t, e);i = h.getPixelForValue("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? c : NaN, e, d), r = n ? u.getBasePixel() : o.calculatePointY(c, e, d), t._xScale = h, t._yScale = u, t._options = p, t._datasetIndex = d, t._index = e, t._model = { x: i, y: r, skip: s.skip || isNaN(i) || isNaN(r), radius: p.radius, pointStyle: p.pointStyle, rotation: p.rotation, backgroundColor: p.backgroundColor, borderColor: p.borderColor, borderWidth: p.borderWidth, tension: Xt(s.tension, f ? f.tension : 0), steppedLine: !!f && f.steppedLine, hitRadius: p.hitRadius };
    }, _resolvePointOptions: function _resolvePointOptions(t, e) {
      var n,
          i,
          r,
          o = this.chart,
          a = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.point,
          d = {},
          c = { chart: o, dataIndex: e, dataset: a, datasetIndex: this.index },
          u = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
          h = Object.keys(u);for (n = 0, i = h.length; n < i; ++n) {
        d[r = h[n]] = Gt([s[r], a[u[r]], a[r], l[r]], c, e);
      }return d;
    }, _resolveLineOptions: function _resolveLineOptions(t) {
      var e,
          n,
          i,
          r = this.chart,
          o = r.data.datasets[this.index],
          a = t.custom || {},
          s = r.options,
          l = s.elements.line,
          d = {},
          c = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill", "cubicInterpolationMode"];for (e = 0, n = c.length; e < n; ++e) {
        d[i = c[e]] = Gt([a[i], o[i], l[i]]);
      }return d.spanGaps = Xt(o.spanGaps, s.spanGaps), d.tension = Xt(o.lineTension, l.tension), d.steppedLine = Gt([a.steppedLine, o.steppedLine, l.stepped]), d;
    }, calculatePointY: function calculatePointY(t, e, n) {
      var i,
          r,
          o,
          a = this.chart,
          s = this.getMeta(),
          l = this.getScaleForId(s.yAxisID),
          d = 0,
          c = 0;if (l.options.stacked) {
        for (i = 0; i < n; i++) {
          if (r = a.data.datasets[i], "line" === (o = a.getDatasetMeta(i)).type && o.yAxisID === l.id && a.isDatasetVisible(i)) {
            var u = Number(l.getRightValue(r.data[e]));u < 0 ? c += u || 0 : d += u || 0;
          }
        }var h = Number(l.getRightValue(t));return l.getPixelForValue(h < 0 ? c + h : d + h);
      }return l.getPixelForValue(t);
    }, updateBezierControlPoints: function updateBezierControlPoints() {
      var t,
          e,
          n,
          i,
          r = this.chart,
          o = this.getMeta(),
          a = o.dataset._model,
          s = r.chartArea,
          l = o.data || [];function d(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }if (a.spanGaps && (l = l.filter(function (t) {
        return !t._model.skip;
      })), "monotone" === a.cubicInterpolationMode) dt.splineCurveMonotone(l);else for (t = 0, e = l.length; t < e; ++t) {
        n = l[t]._model, i = dt.splineCurve(dt.previousItem(l, t)._model, n, dt.nextItem(l, t)._model, a.tension), n.controlPointPreviousX = i.previous.x, n.controlPointPreviousY = i.previous.y, n.controlPointNextX = i.next.x, n.controlPointNextY = i.next.y;
      }if (r.options.elements.line.capBezierPoints) for (t = 0, e = l.length; t < e; ++t) {
        Kt(n = l[t]._model, s) && (t > 0 && Kt(l[t - 1]._model, s) && (n.controlPointPreviousX = d(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = d(n.controlPointPreviousY, s.top, s.bottom)), t < l.length - 1 && Kt(l[t + 1]._model, s) && (n.controlPointNextX = d(n.controlPointNextX, s.left, s.right), n.controlPointNextY = d(n.controlPointNextY, s.top, s.bottom)));
      }
    }, draw: function draw() {
      var t,
          e = this.chart,
          n = this.getMeta(),
          i = n.data || [],
          r = e.chartArea,
          o = i.length,
          a = 0;for (Jt(this.getDataset(), e.options) && (dt.canvas.clipArea(e.ctx, { left: r.left, right: r.right, top: r.top - (t = (n.dataset._model.borderWidth || 0) / 2), bottom: r.bottom + t }), n.dataset.draw(), dt.canvas.unclipArea(e.ctx)); a < o; ++a) {
        i[a].draw(r);
      }
    }, setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = dt.getHoverColor;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = Xt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Xt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Xt(n.hoverBorderWidth, n.borderWidth), e.radius = Xt(n.hoverRadius, n.radius);
    } }),
      Qt = dt.options.resolve;st._set("polarArea", { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, legendCallback: function legendCallback(t) {
      var e = [];e.push('<ul class="' + t.id + '-legend">');var n = t.data,
          i = n.datasets,
          r = n.labels;if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
        e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), r[o] && e.push(r[o]), e.push("</li>");
      }return e.push("</ul>"), e.join("");
    }, legend: { labels: { generateLabels: function generateLabels(t) {
          var e = t.data;return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
            var r = t.getDatasetMeta(0),
                o = e.datasets[0],
                a = r.data[i].custom || {},
                s = t.options.elements.arc;return { text: n, fillStyle: Qt([a.backgroundColor, o.backgroundColor, s.backgroundColor], void 0, i), strokeStyle: Qt([a.borderColor, o.borderColor, s.borderColor], void 0, i), lineWidth: Qt([a.borderWidth, o.borderWidth, s.borderWidth], void 0, i), hidden: isNaN(o.data[i]) || r.data[i].hidden, index: i };
          }) : [];
        } }, onClick: function onClick(t, e) {
        var n,
            i,
            r,
            o = e.index,
            a = this.chart;for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) {
          (r = a.getDatasetMeta(n)).data[o].hidden = !r.data[o].hidden;
        }a.update();
      } }, tooltips: { callbacks: { title: function title() {
          return "";
        }, label: function label(t, e) {
          return e.labels[t.index] + ": " + t.yLabel;
        } } } });var te = wt.extend({ dataElementType: Ft.Arc, linkScales: dt.noop, update: function update(t) {
      var e,
          n,
          i,
          r = this,
          o = r.getDataset(),
          a = r.getMeta(),
          s = r.chart.options.startAngle || 0,
          l = r._starts = [],
          d = r._angles = [],
          c = a.data;for (r._updateRadius(), a.count = r.countVisibleElements(), e = 0, n = o.data.length; e < n; e++) {
        l[e] = s, i = r._computeAngle(e), d[e] = i, s += i;
      }for (e = 0, n = c.length; e < n; ++e) {
        c[e]._options = r._resolveElementOptions(c[e], e), r.updateElement(c[e], e, t);
      }
    }, _updateRadius: function _updateRadius() {
      var t = this,
          e = t.chart,
          n = e.chartArea,
          i = e.options,
          r = Math.min(n.right - n.left, n.bottom - n.top);e.outerRadius = Math.max(r / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength;
    }, updateElement: function updateElement(t, e, n) {
      var i = this,
          r = i.chart,
          o = i.getDataset(),
          a = r.options,
          s = a.animation,
          l = r.scale,
          d = r.data.labels,
          c = l.xCenter,
          u = l.yCenter,
          h = a.startAngle,
          f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
          p = i._starts[e],
          g = p + (t.hidden ? 0 : i._angles[e]),
          v = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
          m = t._options || {};dt.extend(t, { _datasetIndex: i.index, _index: e, _scale: l, _model: { backgroundColor: m.backgroundColor, borderColor: m.borderColor, borderWidth: m.borderWidth, borderAlign: m.borderAlign, x: c, y: u, innerRadius: 0, outerRadius: n ? v : f, startAngle: n && s.animateRotate ? h : p, endAngle: n && s.animateRotate ? h : g, label: dt.valueAtIndexOrDefault(d, e, d[e]) } }), t.pivot();
    }, countVisibleElements: function countVisibleElements() {
      var t = this.getDataset(),
          e = this.getMeta(),
          n = 0;return dt.each(e.data, function (e, i) {
        isNaN(t.data[i]) || e.hidden || n++;
      }), n;
    }, setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = dt.getHoverColor,
          r = dt.valueOrDefault;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth }, e.backgroundColor = r(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = r(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = r(n.hoverBorderWidth, n.borderWidth);
    }, _resolveElementOptions: function _resolveElementOptions(t, e) {
      var n,
          i,
          r,
          o = this.chart,
          a = this.getDataset(),
          s = t.custom || {},
          l = o.options.elements.arc,
          d = {},
          c = { chart: o, dataIndex: e, dataset: a, datasetIndex: this.index },
          u = ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"];for (n = 0, i = u.length; n < i; ++n) {
        d[r = u[n]] = Qt([s[r], a[r], l[r]], c, e);
      }return d;
    }, _computeAngle: function _computeAngle(t) {
      var e = this,
          n = this.getMeta().count,
          i = e.getDataset(),
          r = e.getMeta();return isNaN(i.data[t]) || r.data[t].hidden ? 0 : Qt([e.chart.options.elements.arc.angle, 2 * Math.PI / n], { chart: e.chart, dataIndex: t, dataset: i, datasetIndex: e.index }, t);
    } });st._set("pie", dt.clone(st.doughnut)), st._set("pie", { cutoutPercentage: 0 });var ee = Ut,
      ne = dt.valueOrDefault,
      ie = dt.options.resolve;st._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } });var re = wt.extend({ datasetElementType: Ft.Line, dataElementType: Ft.Point, linkScales: dt.noop, update: function update(t) {
      var e,
          n,
          i = this,
          r = i.getMeta(),
          o = r.dataset,
          a = r.data || [],
          s = i.chart.scale,
          l = i.getDataset();for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o._scale = s, o._datasetIndex = i.index, o._children = a, o._loop = !0, o._model = i._resolveLineOptions(o), o.pivot(), e = 0, n = a.length; e < n; ++e) {
        i.updateElement(a[e], e, t);
      }for (i.updateBezierControlPoints(), e = 0, n = a.length; e < n; ++e) {
        a[e].pivot();
      }
    }, updateElement: function updateElement(t, e, n) {
      var i = this,
          r = t.custom || {},
          o = i.getDataset(),
          a = i.chart.scale,
          s = a.getPointPositionForValue(e, o.data[e]),
          l = i._resolvePointOptions(t, e),
          d = i.getMeta().dataset._model,
          c = n ? a.xCenter : s.x,
          u = n ? a.yCenter : s.y;t._scale = a, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = { x: c, y: u, skip: r.skip || isNaN(c) || isNaN(u), radius: l.radius, pointStyle: l.pointStyle, rotation: l.rotation, backgroundColor: l.backgroundColor, borderColor: l.borderColor, borderWidth: l.borderWidth, tension: ne(r.tension, d ? d.tension : 0), hitRadius: l.hitRadius };
    }, _resolvePointOptions: function _resolvePointOptions(t, e) {
      var n,
          i,
          r,
          o = this.chart,
          a = o.data.datasets[this.index],
          s = t.custom || {},
          l = o.options.elements.point,
          d = {},
          c = { chart: o, dataIndex: e, dataset: a, datasetIndex: this.index },
          u = { backgroundColor: "pointBackgroundColor", borderColor: "pointBorderColor", borderWidth: "pointBorderWidth", hitRadius: "pointHitRadius", hoverBackgroundColor: "pointHoverBackgroundColor", hoverBorderColor: "pointHoverBorderColor", hoverBorderWidth: "pointHoverBorderWidth", hoverRadius: "pointHoverRadius", pointStyle: "pointStyle", radius: "pointRadius", rotation: "pointRotation" },
          h = Object.keys(u);for (n = 0, i = h.length; n < i; ++n) {
        d[r = h[n]] = ie([s[r], a[u[r]], a[r], l[r]], c, e);
      }return d;
    }, _resolveLineOptions: function _resolveLineOptions(t) {
      var e,
          n,
          i,
          r = this.chart,
          o = r.data.datasets[this.index],
          a = t.custom || {},
          s = r.options.elements.line,
          l = {},
          d = ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"];for (e = 0, n = d.length; e < n; ++e) {
        l[i = d[e]] = ie([a[i], o[i], s[i]]);
      }return l.tension = ne(o.lineTension, s.tension), l;
    }, updateBezierControlPoints: function updateBezierControlPoints() {
      var t,
          e,
          n,
          i,
          r = this.getMeta(),
          o = this.chart.chartArea,
          a = r.data || [];function s(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }for (t = 0, e = a.length; t < e; ++t) {
        n = a[t]._model, i = dt.splineCurve(dt.previousItem(a, t, !0)._model, n, dt.nextItem(a, t, !0)._model, n.tension), n.controlPointPreviousX = s(i.previous.x, o.left, o.right), n.controlPointPreviousY = s(i.previous.y, o.top, o.bottom), n.controlPointNextX = s(i.next.x, o.left, o.right), n.controlPointNextY = s(i.next.y, o.top, o.bottom);
      }
    }, setHoverStyle: function setHoverStyle(t) {
      var e = t._model,
          n = t._options,
          i = dt.getHoverColor;t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }, e.backgroundColor = ne(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = ne(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = ne(n.hoverBorderWidth, n.borderWidth), e.radius = ne(n.hoverRadius, n.radius);
    } });st._set("scatter", { hover: { mode: "single" }, scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] }, showLines: !1, tooltips: { callbacks: { title: function title() {
          return "";
        }, label: function label(t) {
          return "(" + t.xLabel + ", " + t.yLabel + ")";
        } } } });var oe = { bar: Bt, bubble: Vt, doughnut: Ut, horizontalBar: Yt, line: Zt, polarArea: te, pie: ee, radar: re, scatter: Zt };function ae(t, e) {
    return t.native ? { x: t.x, y: t.y } : dt.getRelativePosition(t, e);
  }function se(t, e) {
    var n, i, r, o, a;for (i = 0, o = t.data.datasets.length; i < o; ++i) {
      if (t.isDatasetVisible(i)) for (r = 0, a = (n = t.getDatasetMeta(i)).data.length; r < a; ++r) {
        var s = n.data[r];s._view.skip || e(s);
      }
    }
  }function le(t, e) {
    var n = [];return se(t, function (t) {
      t.inRange(e.x, e.y) && n.push(t);
    }), n;
  }function de(t, e, n, i) {
    var r = Number.POSITIVE_INFINITY,
        o = [];return se(t, function (t) {
      if (!n || t.inRange(e.x, e.y)) {
        var a = t.getCenterPoint(),
            s = i(e, a);s < r ? (o = [t], r = s) : s === r && o.push(t);
      }
    }), o;
  }function ce(t) {
    var e = -1 !== t.indexOf("x"),
        n = -1 !== t.indexOf("y");return function (t, i) {
      var r = e ? Math.abs(t.x - i.x) : 0,
          o = n ? Math.abs(t.y - i.y) : 0;return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
    };
  }function ue(t, e, n) {
    var i = ae(e, t);n.axis = n.axis || "x";var r = ce(n.axis),
        o = n.intersect ? le(t, i) : de(t, i, !1, r),
        a = [];return o.length ? (t.data.datasets.forEach(function (e, n) {
      if (t.isDatasetVisible(n)) {
        var i = t.getDatasetMeta(n).data[o[0]._index];i && !i._view.skip && a.push(i);
      }
    }), a) : [];
  }var he = { modes: { single: function single(t, e) {
        var n = ae(e, t),
            i = [];return se(t, function (t) {
          if (t.inRange(n.x, n.y)) return i.push(t), i;
        }), i.slice(0, 1);
      }, label: ue, index: ue, dataset: function dataset(t, e, n) {
        var i = ae(e, t);n.axis = n.axis || "xy";var r = ce(n.axis),
            o = n.intersect ? le(t, i) : de(t, i, !1, r);return o.length > 0 && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o;
      }, "x-axis": function xAxis(t, e) {
        return ue(t, e, { intersect: !1 });
      }, point: function point(t, e) {
        return le(t, ae(e, t));
      }, nearest: function nearest(t, e, n) {
        var i = ae(e, t);n.axis = n.axis || "xy";var r = ce(n.axis);return de(t, i, n.intersect, r);
      }, x: function x(t, e, n) {
        var i = ae(e, t),
            r = [],
            o = !1;return se(t, function (t) {
          t.inXRange(i.x) && r.push(t), t.inRange(i.x, i.y) && (o = !0);
        }), n.intersect && !o && (r = []), r;
      }, y: function y(t, e, n) {
        var i = ae(e, t),
            r = [],
            o = !1;return se(t, function (t) {
          t.inYRange(i.y) && r.push(t), t.inRange(i.x, i.y) && (o = !0);
        }), n.intersect && !o && (r = []), r;
      } } };function fe(t, e) {
    return dt.where(t, function (t) {
      return t.position === e;
    });
  }function pe(t, e) {
    t.forEach(function (t, e) {
      return t._tmpIndex_ = e, t;
    }), t.sort(function (t, n) {
      var i = e ? n : t,
          r = e ? t : n;return i.weight === r.weight ? i._tmpIndex_ - r._tmpIndex_ : i.weight - r.weight;
    }), t.forEach(function (t) {
      delete t._tmpIndex_;
    });
  }function ge(t, e) {
    dt.each(t, function (t) {
      e[t.position] += t.isHorizontal() ? t.height : t.width;
    });
  }st._set("global", { layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } } });var ve,
      me = { defaults: {}, addBox: function addBox(t, e) {
      t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
    }, removeBox: function removeBox(t, e) {
      var n = t.boxes ? t.boxes.indexOf(e) : -1;-1 !== n && t.boxes.splice(n, 1);
    }, configure: function configure(t, e, n) {
      for (var i, r = ["fullWidth", "position", "weight"], o = r.length, a = 0; a < o; ++a) {
        n.hasOwnProperty(i = r[a]) && (e[i] = n[i]);
      }
    }, update: function update(t, e, n) {
      if (t) {
        var i = dt.options.toPadding((t.options.layout || {}).padding),
            r = i.left,
            o = i.right,
            a = i.top,
            s = i.bottom,
            l = fe(t.boxes, "left"),
            d = fe(t.boxes, "right"),
            c = fe(t.boxes, "top"),
            u = fe(t.boxes, "bottom"),
            h = fe(t.boxes, "chartArea");pe(l, !0), pe(d, !1), pe(c, !0), pe(u, !1);var f,
            p = l.concat(d),
            g = c.concat(u),
            v = p.concat(g),
            m = e - r - o,
            b = n - a - s,
            y = (e - m / 2) / p.length,
            x = m,
            w = b,
            k = { top: a, left: r, bottom: s, right: o },
            C = [];dt.each(v, function (t) {
          var e,
              n = t.isHorizontal();n ? (e = t.update(t.fullWidth ? m : x, b / 2), w -= e.height) : (e = t.update(y, w), x -= e.width), C.push({ horizontal: n, width: e.width, box: t });
        }), f = function (t) {
          var e = 0,
              n = 0,
              i = 0,
              r = 0;return dt.each(v, function (t) {
            if (t.getPadding) {
              var o = t.getPadding();e = Math.max(e, o.top), n = Math.max(n, o.left), i = Math.max(i, o.bottom), r = Math.max(r, o.right);
            }
          }), { top: e, left: n, bottom: i, right: r };
        }(), dt.each(p, D), ge(p, k), dt.each(g, D), ge(g, k), dt.each(p, function (t) {
          var e = dt.findNextWhere(C, function (e) {
            return e.box === t;
          });e && t.update(e.width, w, { left: 0, right: 0, top: k.top, bottom: k.bottom });
        }), ge(v, k = { top: a, left: r, bottom: s, right: o });var M = Math.max(f.left - k.left, 0);k.left += M, k.right += Math.max(f.right - k.right, 0);var S = Math.max(f.top - k.top, 0);k.top += S, k.bottom += Math.max(f.bottom - k.bottom, 0);var T = n - k.top - k.bottom,
            _ = e - k.left - k.right;_ === x && T === w || (dt.each(p, function (t) {
          t.height = T;
        }), dt.each(g, function (t) {
          t.fullWidth || (t.width = _);
        }), w = T, x = _);var A = r + M,
            N = a + S;dt.each(l.concat(c), E), A += x, N += w, dt.each(d, E), dt.each(u, E), t.chartArea = { left: k.left, top: k.top, right: k.left + x, bottom: k.top + w }, dt.each(h, function (e) {
          e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(x, w);
        });
      }function D(t) {
        var e = dt.findNextWhere(C, function (e) {
          return e.box === t;
        });if (e) if (e.horizontal) {
          var n = { left: Math.max(k.left, f.left), right: Math.max(k.right, f.right), top: 0, bottom: 0 };t.update(t.fullWidth ? m : x, b / 2, n);
        } else t.update(e.width, w);
      }function E(t) {
        t.isHorizontal() ? (t.left = t.fullWidth ? r : k.left, t.right = t.fullWidth ? e - o : k.left + x, t.top = N, t.bottom = N + t.height, N = t.bottom) : (t.left = A, t.right = A + t.width, t.top = k.top, t.bottom = k.top + w, A = t.right);
      }
    } },
      be = (ve = Object.freeze({ default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}" })) && ve.default || ve,
      ye = "$chartjs",
      xe = "chartjs-size-monitor",
      we = "chartjs-render-monitor",
      ke = ["animationstart", "webkitAnimationStart"],
      Ce = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };function Me(t, e) {
    var n = dt.getStyle(t, e),
        i = n && n.match(/^(\d+)(\.\d+)?px$/);return i ? Number(i[1]) : void 0;
  }var Se = !!function () {
    var t = !1;try {
      var e = Object.defineProperty({}, "passive", { get: function get() {
          t = !0;
        } });window.addEventListener("e", null, e);
    } catch (t) {}return t;
  }() && { passive: !0 };function Te(t, e, n) {
    t.addEventListener(e, n, Se);
  }function _e(t, e, n) {
    t.removeEventListener(e, n, Se);
  }function Ae(t, e, n, i, r) {
    return { type: t, chart: e, native: r || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null };
  }function Ne(t) {
    var e = document.createElement("div");return e.className = t || "", e;
  }var De = { disableCSSInjection: !1, _enabled: "undefined" != typeof window && "undefined" != typeof document, _ensureLoaded: function _ensureLoaded() {
      var t, e, n;this._loaded || (this._loaded = !0, this.disableCSSInjection || (e = be, n = (t = this)._style || document.createElement("style"), t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e))));
    }, acquireContext: function acquireContext(t, e) {
      "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);var n = t && t.getContext && t.getContext("2d");return this._ensureLoaded(), n && n.canvas === t ? (function (t, e) {
        var n = t.style,
            i = t.getAttribute("height"),
            r = t.getAttribute("width");if (t[ye] = { initial: { height: i, width: r, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", null === r || "" === r) {
          var o = Me(t, "width");void 0 !== o && (t.width = o);
        }if (null === i || "" === i) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
          var a = Me(t, "height");void 0 !== o && (t.height = a);
        }
      }(t, e), n) : null;
    }, releaseContext: function releaseContext(t) {
      var e = t.canvas;if (e[ye]) {
        var n = e[ye].initial;["height", "width"].forEach(function (t) {
          var i = n[t];dt.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
        }), dt.each(n.style || {}, function (t, n) {
          e.style[n] = t;
        }), e.width = e.width, delete e[ye];
      }
    }, addEventListener: function addEventListener(t, e, n) {
      var i = t.canvas;if ("resize" !== e) {
        var r = n[ye] || (n[ye] = {});Te(i, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function (e) {
          n(function (t, e) {
            var n = Ce[t.type] || t.type,
                i = dt.getRelativePosition(t, e);return Ae(n, e, i.x, i.y, t);
          }(e, t));
        });
      } else !function (t, e, n) {
        var i,
            r,
            o,
            a,
            s = t[ye] || (t[ye] = {}),
            l = s.resizer = function (t) {
          var e = Ne(xe),
              n = Ne(xe + "-expand"),
              i = Ne(xe + "-shrink");n.appendChild(Ne()), i.appendChild(Ne()), e.appendChild(n), e.appendChild(i), e._reset = function () {
            n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6;
          };var r = function r() {
            e._reset(), t();
          };return Te(n, "scroll", r.bind(n, "expand")), Te(i, "scroll", r.bind(i, "shrink")), e;
        }((i = function i() {
          if (s.resizer) {
            var i = n.options.maintainAspectRatio && t.parentNode,
                r = i ? i.clientWidth : 0;e(Ae("resize", n)), i && i.clientWidth < r && n.canvas && e(Ae("resize", n));
          }
        }, o = !1, a = [], function () {
          a = Array.prototype.slice.call(arguments), r = r || this, o || (o = !0, dt.requestAnimFrame.call(window, function () {
            o = !1, i.apply(r, a);
          }));
        }));!function (t, e) {
          var n = t[ye] || (t[ye] = {}),
              i = n.renderProxy = function (t) {
            "chartjs-render-animation" === t.animationName && e();
          };dt.each(ke, function (e) {
            Te(t, e, i);
          }), n.reflow = !!t.offsetParent, t.classList.add(we);
        }(t, function () {
          if (s.resizer) {
            var e = t.parentNode;e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset();
          }
        });
      }(i, n, t);
    }, removeEventListener: function removeEventListener(t, e, n) {
      var i = t.canvas;if ("resize" !== e) {
        var r = ((n[ye] || {}).proxies || {})[t.id + "_" + e];r && _e(i, e, r);
      } else !function (t) {
        var e = t[ye] || {},
            n = e.resizer;delete e.resizer, function (t) {
          var e = t[ye] || {},
              n = e.renderProxy;n && (dt.each(ke, function (e) {
            _e(t, e, n);
          }), delete e.renderProxy), t.classList.remove(we);
        }(t), n && n.parentNode && n.parentNode.removeChild(n);
      }(i);
    } };dt.addEvent = Te, dt.removeEvent = _e;var Ee = dt.extend({ initialize: function initialize() {}, acquireContext: function acquireContext() {}, releaseContext: function releaseContext() {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {} }, De._enabled ? De : { acquireContext: function acquireContext(t) {
      return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
    } });st._set("global", { plugins: {} });var Le = { _plugins: [], _cacheId: 0, register: function register(t) {
      var e = this._plugins;[].concat(t).forEach(function (t) {
        -1 === e.indexOf(t) && e.push(t);
      }), this._cacheId++;
    }, unregister: function unregister(t) {
      var e = this._plugins;[].concat(t).forEach(function (t) {
        var n = e.indexOf(t);-1 !== n && e.splice(n, 1);
      }), this._cacheId++;
    }, clear: function clear() {
      this._plugins = [], this._cacheId++;
    }, count: function count() {
      return this._plugins.length;
    }, getAll: function getAll() {
      return this._plugins;
    }, notify: function notify(t, e, n) {
      var i,
          r,
          o,
          a,
          s,
          l = this.descriptors(t),
          d = l.length;for (i = 0; i < d; ++i) {
        if ("function" == typeof (s = (o = (r = l[i]).plugin)[e]) && ((a = [t].concat(n || [])).push(r.options), !1 === s.apply(o, a))) return !1;
      }return !0;
    }, descriptors: function descriptors(t) {
      var e = t.$plugins || (t.$plugins = {});if (e.id === this._cacheId) return e.descriptors;var n = [],
          i = [],
          r = t && t.config || {},
          o = r.options && r.options.plugins || {};return this._plugins.concat(r.plugins || []).forEach(function (t) {
        if (-1 === n.indexOf(t)) {
          var e = t.id,
              r = o[e];!1 !== r && (!0 === r && (r = dt.clone(st.global.plugins[e])), n.push(t), i.push({ plugin: t, options: r || {} }));
        }
      }), e.descriptors = i, e.id = this._cacheId, i;
    }, _invalidate: function _invalidate(t) {
      delete t.$plugins;
    } },
      Pe = { constructors: {}, defaults: {}, registerScaleType: function registerScaleType(t, e, n) {
      this.constructors[t] = e, this.defaults[t] = dt.clone(n);
    }, getScaleConstructor: function getScaleConstructor(t) {
      return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
    }, getScaleDefaults: function getScaleDefaults(t) {
      return this.defaults.hasOwnProperty(t) ? dt.merge({}, [st.scale, this.defaults[t]]) : {};
    }, updateScaleDefaults: function updateScaleDefaults(t, e) {
      this.defaults.hasOwnProperty(t) && (this.defaults[t] = dt.extend(this.defaults[t], e));
    }, addScalesToLayout: function addScalesToLayout(t) {
      dt.each(t.scales, function (e) {
        e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, me.addBox(t, e);
      });
    } },
      Ie = dt.valueOrDefault;st._set("global", { tooltips: { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: dt.noop, title: function title(t, e) {
          var n = "",
              i = e.labels,
              r = i ? i.length : 0;if (t.length > 0) {
            var o = t[0];o.label ? n = o.label : o.xLabel ? n = o.xLabel : r > 0 && o.index < r && (n = i[o.index]);
          }return n;
        }, afterTitle: dt.noop, beforeBody: dt.noop, beforeLabel: dt.noop, label: function label(t, e) {
          var n = e.datasets[t.datasetIndex].label || "";return n && (n += ": "), dt.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n;
        }, labelColor: function labelColor(t, e) {
          var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return { borderColor: n.borderColor, backgroundColor: n.backgroundColor };
        }, labelTextColor: function labelTextColor() {
          return this._options.bodyFontColor;
        }, afterLabel: dt.noop, afterBody: dt.noop, beforeFooter: dt.noop, footer: dt.noop, afterFooter: dt.noop } } });var Fe = { average: function average(t) {
      if (!t.length) return !1;var e,
          n,
          i = 0,
          r = 0,
          o = 0;for (e = 0, n = t.length; e < n; ++e) {
        var a = t[e];if (a && a.hasValue()) {
          var s = a.tooltipPosition();i += s.x, r += s.y, ++o;
        }
      }return { x: i / o, y: r / o };
    }, nearest: function nearest(t, e) {
      var n,
          i,
          r,
          o = e.x,
          a = e.y,
          s = Number.POSITIVE_INFINITY;for (n = 0, i = t.length; n < i; ++n) {
        var l = t[n];if (l && l.hasValue()) {
          var d = l.getCenterPoint(),
              c = dt.distanceBetweenPoints(e, d);c < s && (s = c, r = l);
        }
      }if (r) {
        var u = r.tooltipPosition();o = u.x, a = u.y;
      }return { x: o, y: a };
    } };function Oe(t, e) {
    return e && (dt.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }function Re(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
  }function He(t) {
    var e = st.global;return { xPadding: t.xPadding, yPadding: t.yPadding, xAlign: t.xAlign, yAlign: t.yAlign, bodyFontColor: t.bodyFontColor, _bodyFontFamily: Ie(t.bodyFontFamily, e.defaultFontFamily), _bodyFontStyle: Ie(t.bodyFontStyle, e.defaultFontStyle), _bodyAlign: t.bodyAlign, bodyFontSize: Ie(t.bodyFontSize, e.defaultFontSize), bodySpacing: t.bodySpacing, titleFontColor: t.titleFontColor, _titleFontFamily: Ie(t.titleFontFamily, e.defaultFontFamily), _titleFontStyle: Ie(t.titleFontStyle, e.defaultFontStyle), titleFontSize: Ie(t.titleFontSize, e.defaultFontSize), _titleAlign: t.titleAlign, titleSpacing: t.titleSpacing, titleMarginBottom: t.titleMarginBottom, footerFontColor: t.footerFontColor, _footerFontFamily: Ie(t.footerFontFamily, e.defaultFontFamily), _footerFontStyle: Ie(t.footerFontStyle, e.defaultFontStyle), footerFontSize: Ie(t.footerFontSize, e.defaultFontSize), _footerAlign: t.footerAlign, footerSpacing: t.footerSpacing, footerMarginTop: t.footerMarginTop, caretSize: t.caretSize, cornerRadius: t.cornerRadius, backgroundColor: t.backgroundColor, opacity: 0, legendColorBackground: t.multiKeyBackground, displayColors: t.displayColors, borderColor: t.borderColor, borderWidth: t.borderWidth };
  }function ze(t, e) {
    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding;
  }function Be(t) {
    return Oe([], Re(t));
  }var je = ft.extend({ initialize: function initialize() {
      this._model = He(this._options), this._lastActive = [];
    }, getTitle: function getTitle() {
      var t = this._options.callbacks,
          e = t.beforeTitle.apply(this, arguments),
          n = t.title.apply(this, arguments),
          i = t.afterTitle.apply(this, arguments),
          r = [];return Oe(r = Oe(r = Oe(r, Re(e)), Re(n)), Re(i));
    }, getBeforeBody: function getBeforeBody() {
      return Be(this._options.callbacks.beforeBody.apply(this, arguments));
    }, getBody: function getBody(t, e) {
      var n = this,
          i = n._options.callbacks,
          r = [];return dt.each(t, function (t) {
        var o = { before: [], lines: [], after: [] };Oe(o.before, Re(i.beforeLabel.call(n, t, e))), Oe(o.lines, i.label.call(n, t, e)), Oe(o.after, Re(i.afterLabel.call(n, t, e))), r.push(o);
      }), r;
    }, getAfterBody: function getAfterBody() {
      return Be(this._options.callbacks.afterBody.apply(this, arguments));
    }, getFooter: function getFooter() {
      var t = this._options.callbacks,
          e = t.beforeFooter.apply(this, arguments),
          n = t.footer.apply(this, arguments),
          i = t.afterFooter.apply(this, arguments),
          r = [];return Oe(r = Oe(r = Oe(r, Re(e)), Re(n)), Re(i));
    }, update: function update(t) {
      var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          d,
          c,
          u = this,
          h = u._options,
          f = u._model,
          p = u._model = He(h),
          g = u._active,
          v = u._data,
          m = { xAlign: f.xAlign, yAlign: f.yAlign },
          b = { x: f.x, y: f.y },
          y = { width: f.width, height: f.height },
          x = { x: f.caretX, y: f.caretY };if (g.length) {
        p.opacity = 1;var w = [],
            k = [];x = Fe[h.position].call(u, g, u._eventPosition);var C = [];for (e = 0, n = g.length; e < n; ++e) {
          C.push((r = void 0, o = void 0, a = void 0, s = void 0, l = void 0, d = void 0, c = void 0, r = (i = g[e])._xScale, o = i._yScale || i._scale, a = i._index, d = (l = i._chart.getDatasetMeta(s = i._datasetIndex).controller)._getIndexScale(), c = l._getValueScale(), { xLabel: r ? r.getLabelForIndex(a, s) : "", yLabel: o ? o.getLabelForIndex(a, s) : "", label: d ? "" + d.getLabelForIndex(a, s) : "", value: c ? "" + c.getLabelForIndex(a, s) : "", index: a, datasetIndex: s, x: i._model.x, y: i._model.y }));
        }h.filter && (C = C.filter(function (t) {
          return h.filter(t, v);
        })), h.itemSort && (C = C.sort(function (t, e) {
          return h.itemSort(t, e, v);
        })), dt.each(C, function (t) {
          w.push(h.callbacks.labelColor.call(u, t, u._chart)), k.push(h.callbacks.labelTextColor.call(u, t, u._chart));
        }), p.title = u.getTitle(C, v), p.beforeBody = u.getBeforeBody(C, v), p.body = u.getBody(C, v), p.afterBody = u.getAfterBody(C, v), p.footer = u.getFooter(C, v), p.x = x.x, p.y = x.y, p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = k, p.dataPoints = C, b = function (t, e, n, i) {
          var r = t.x,
              o = t.y,
              a = t.caretPadding,
              s = n.xAlign,
              l = n.yAlign,
              d = t.caretSize + a,
              c = t.cornerRadius + a;return "right" === s ? r -= e.width : "center" === s && ((r -= e.width / 2) + e.width > i.width && (r = i.width - e.width), r < 0 && (r = 0)), "top" === l ? o += d : o -= "bottom" === l ? e.height + d : e.height / 2, "center" === l ? "left" === s ? r += d : "right" === s && (r -= d) : "left" === s ? r -= c : "right" === s && (r += c), { x: r, y: o };
        }(p, y = function (t, e) {
          var n = t._chart.ctx,
              i = 2 * e.yPadding,
              r = 0,
              o = e.body,
              a = o.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);a += e.beforeBody.length + e.afterBody.length;var s = e.title.length,
              l = e.footer.length,
              d = e.titleFontSize,
              c = e.bodyFontSize,
              u = e.footerFontSize;i += s * d, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += a * c, i += a ? (a - 1) * e.bodySpacing : 0, i += l ? e.footerMarginTop : 0, i += l * u, i += l ? (l - 1) * e.footerSpacing : 0;var h = 0,
              f = function f(t) {
            r = Math.max(r, n.measureText(t).width + h);
          };return n.font = dt.fontString(d, e._titleFontStyle, e._titleFontFamily), dt.each(e.title, f), n.font = dt.fontString(c, e._bodyFontStyle, e._bodyFontFamily), dt.each(e.beforeBody.concat(e.afterBody), f), h = e.displayColors ? c + 2 : 0, dt.each(o, function (t) {
            dt.each(t.before, f), dt.each(t.lines, f), dt.each(t.after, f);
          }), h = 0, n.font = dt.fontString(u, e._footerFontStyle, e._footerFontFamily), dt.each(e.footer, f), { width: r += 2 * e.xPadding, height: i };
        }(this, p), m = function (t, e) {
          var n,
              i,
              r,
              o,
              a,
              s = t._model,
              l = t._chart,
              d = t._chart.chartArea,
              c = "center",
              u = "center";s.y < e.height ? u = "top" : s.y > l.height - e.height && (u = "bottom");var h = (d.left + d.right) / 2,
              f = (d.top + d.bottom) / 2;"center" === u ? (n = function n(t) {
            return t <= h;
          }, i = function i(t) {
            return t > h;
          }) : (n = function n(t) {
            return t <= e.width / 2;
          }, i = function i(t) {
            return t >= l.width - e.width / 2;
          }), r = function r(t) {
            return t + e.width + s.caretSize + s.caretPadding > l.width;
          }, o = function o(t) {
            return t - e.width - s.caretSize - s.caretPadding < 0;
          }, a = function a(t) {
            return t <= f ? "top" : "bottom";
          }, n(s.x) ? (c = "left", r(s.x) && (c = "center", u = a(s.y))) : i(s.x) && (c = "right", o(s.x) && (c = "center", u = a(s.y)));var p = t._options;return { xAlign: p.xAlign ? p.xAlign : c, yAlign: p.yAlign ? p.yAlign : u };
        }(this, y), u._chart);
      } else p.opacity = 0;return p.xAlign = m.xAlign, p.yAlign = m.yAlign, p.x = b.x, p.y = b.y, p.width = y.width, p.height = y.height, p.caretX = x.x, p.caretY = x.y, u._model = p, t && h.custom && h.custom.call(u, p), u;
    }, drawCaret: function drawCaret(t, e) {
      var n = this._chart.ctx,
          i = this.getCaretPosition(t, e, this._view);n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3);
    }, getCaretPosition: function getCaretPosition(t, e, n) {
      var i,
          r,
          o,
          a,
          s,
          l,
          d = n.caretSize,
          c = n.cornerRadius,
          u = n.xAlign,
          h = n.yAlign,
          f = t.x,
          p = t.y,
          g = e.width,
          v = e.height;if ("center" === h) s = p + v / 2, "left" === u ? (r = (i = f) - d, o = i, a = s + d, l = s - d) : (r = (i = f + g) + d, o = i, a = s - d, l = s + d);else if ("left" === u ? (i = (r = f + c + d) - d, o = r + d) : "right" === u ? (i = (r = f + g - c - d) - d, o = r + d) : (i = (r = n.caretX) - d, o = r + d), "top" === h) s = (a = p) - d, l = a;else {
        s = (a = p + v) + d, l = a;var m = o;o = i, i = m;
      }return { x1: i, x2: r, x3: o, y1: a, y2: s, y3: l };
    }, drawTitle: function drawTitle(t, e, n) {
      var i = e.title;if (i.length) {
        t.x = ze(e, e._titleAlign), n.textAlign = e._titleAlign, n.textBaseline = "top";var r,
            o,
            a = e.titleFontSize,
            s = e.titleSpacing;for (n.fillStyle = e.titleFontColor, n.font = dt.fontString(a, e._titleFontStyle, e._titleFontFamily), r = 0, o = i.length; r < o; ++r) {
          n.fillText(i[r], t.x, t.y), t.y += a + s, r + 1 === i.length && (t.y += e.titleMarginBottom - s);
        }
      }
    }, drawBody: function drawBody(t, e, n) {
      var i,
          r = e.bodyFontSize,
          o = e.bodySpacing,
          a = e._bodyAlign,
          s = e.body,
          l = e.displayColors,
          d = e.labelColors,
          c = 0,
          u = l ? ze(e, "left") : 0;n.textAlign = a, n.textBaseline = "top", n.font = dt.fontString(r, e._bodyFontStyle, e._bodyFontFamily), t.x = ze(e, a);var h = function h(e) {
        n.fillText(e, t.x + c, t.y), t.y += r + o;
      };n.fillStyle = e.bodyFontColor, dt.each(e.beforeBody, h), c = l && "right" !== a ? "center" === a ? r / 2 + 1 : r + 2 : 0, dt.each(s, function (o, a) {
        n.fillStyle = i = e.labelTextColors[a], dt.each(o.before, h), dt.each(o.lines, function (o) {
          l && (n.fillStyle = e.legendColorBackground, n.fillRect(u, t.y, r, r), n.lineWidth = 1, n.strokeStyle = d[a].borderColor, n.strokeRect(u, t.y, r, r), n.fillStyle = d[a].backgroundColor, n.fillRect(u + 1, t.y + 1, r - 2, r - 2), n.fillStyle = i), h(o);
        }), dt.each(o.after, h);
      }), c = 0, dt.each(e.afterBody, h), t.y -= o;
    }, drawFooter: function drawFooter(t, e, n) {
      var i = e.footer;i.length && (t.x = ze(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = e._footerAlign, n.textBaseline = "top", n.fillStyle = e.footerFontColor, n.font = dt.fontString(e.footerFontSize, e._footerFontStyle, e._footerFontFamily), dt.each(i, function (i) {
        n.fillText(i, t.x, t.y), t.y += e.footerFontSize + e.footerSpacing;
      }));
    }, drawBackground: function drawBackground(t, e, n, i) {
      n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;var r = e.xAlign,
          o = e.yAlign,
          a = t.x,
          s = t.y,
          l = i.width,
          d = i.height,
          c = e.cornerRadius;n.beginPath(), n.moveTo(a + c, s), "top" === o && this.drawCaret(t, i), n.lineTo(a + l - c, s), n.quadraticCurveTo(a + l, s, a + l, s + c), "center" === o && "right" === r && this.drawCaret(t, i), n.lineTo(a + l, s + d - c), n.quadraticCurveTo(a + l, s + d, a + l - c, s + d), "bottom" === o && this.drawCaret(t, i), n.lineTo(a + c, s + d), n.quadraticCurveTo(a, s + d, a, s + d - c), "center" === o && "left" === r && this.drawCaret(t, i), n.lineTo(a, s + c), n.quadraticCurveTo(a, s, a + c, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke();
    }, draw: function draw() {
      var t = this._chart.ctx,
          e = this._view;if (0 !== e.opacity) {
        var n = { width: e.width, height: e.height },
            i = { x: e.x, y: e.y },
            r = Math.abs(e.opacity < .001) ? 0 : e.opacity;this._options.enabled && (e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length) && (t.save(), t.globalAlpha = r, this.drawBackground(i, e, t, n), i.y += e.yPadding, this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), t.restore());
      }
    }, handleEvent: function handleEvent(t) {
      var e,
          n = this,
          i = n._options;return n._lastActive = n._lastActive || [], n._active = "mouseout" === t.type ? [] : n._chart.getElementsAtEventForMode(t, i.mode, i), (e = !dt.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = { x: t.x, y: t.y }, n.update(!0), n.pivot())), e;
    } });je.positioners = Fe;var We = dt.valueOrDefault;function Ve() {
    return dt.merge({}, [].slice.call(arguments), { merger: function merger(t, e, n, i) {
        if ("xAxes" === t || "yAxes" === t) {
          var r,
              o,
              a,
              s = n[t].length;for (e[t] || (e[t] = []), r = 0; r < s; ++r) {
            o = We((a = n[t][r]).type, "xAxes" === t ? "category" : "linear"), r >= e[t].length && e[t].push({}), dt.merge(e[t][r], !e[t][r].type || a.type && a.type !== e[t][r].type ? [Pe.getScaleDefaults(o), a] : a);
          }
        } else dt._merger(t, e, n, i);
      } });
  }function qe() {
    return dt.merge({}, [].slice.call(arguments), { merger: function merger(t, e, n, i) {
        var r = e[t] || {},
            o = n[t];"scales" === t ? e[t] = Ve(r, o) : "scale" === t ? e[t] = dt.merge(r, [Pe.getScaleDefaults(o.type), o]) : dt._merger(t, e, n, i);
      } });
  }function $e(t) {
    return "top" === t || "bottom" === t;
  }st._set("global", { elements: {}, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, maintainAspectRatio: !0, responsive: !0, responsiveAnimationDuration: 0 });var Ue = function Ue(t, e) {
    return this.construct(t, e), this;
  };dt.extend(Ue.prototype, { construct: function construct(t, e) {
      var n = this;e = function (t) {
        var e = (t = t || {}).data = t.data || {};return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = qe(st.global, st[t.type], t.options || {}), t;
      }(e);var i = Ee.acquireContext(t, e),
          r = i && i.canvas,
          o = r && r.height,
          a = r && r.width;n.id = dt.uid(), n.ctx = i, n.canvas = r, n.config = e, n.width = a, n.height = o, n.aspectRatio = o ? a / o : null, n.options = e.options, n._bufferedRender = !1, n.chart = n, n.controller = n, Ue.instances[n.id] = n, Object.defineProperty(n, "data", { get: function get() {
          return n.config.data;
        }, set: function set(t) {
          n.config.data = t;
        } }), i && r ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    }, initialize: function initialize() {
      var t = this;return Le.notify(t, "beforeInit"), dt.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), Le.notify(t, "afterInit"), t;
    }, clear: function clear() {
      return dt.canvas.clear(this), this;
    }, stop: function stop() {
      return vt.cancelAnimation(this), this;
    }, resize: function resize(t) {
      var e = this,
          n = e.options,
          i = e.canvas,
          r = n.maintainAspectRatio && e.aspectRatio || null,
          o = Math.max(0, Math.floor(dt.getMaximumWidth(i))),
          a = Math.max(0, Math.floor(r ? o / r : dt.getMaximumHeight(i)));if ((e.width !== o || e.height !== a) && (i.width = e.width = o, i.height = e.height = a, i.style.width = o + "px", i.style.height = a + "px", dt.retinaScale(e, n.devicePixelRatio), !t)) {
        var s = { width: o, height: a };Le.notify(e, "resize", [s]), n.onResize && n.onResize(e, s), e.stop(), e.update({ duration: n.responsiveAnimationDuration });
      }
    }, ensureScalesHaveIDs: function ensureScalesHaveIDs() {
      var t = this.options,
          e = t.scales || {},
          n = t.scale;dt.each(e.xAxes, function (t, e) {
        t.id = t.id || "x-axis-" + e;
      }), dt.each(e.yAxes, function (t, e) {
        t.id = t.id || "y-axis-" + e;
      }), n && (n.id = n.id || "scale");
    }, buildOrUpdateScales: function buildOrUpdateScales() {
      var t = this,
          e = t.options,
          n = t.scales || {},
          i = [],
          r = Object.keys(n).reduce(function (t, e) {
        return t[e] = !1, t;
      }, {});e.scales && (i = i.concat((e.scales.xAxes || []).map(function (t) {
        return { options: t, dtype: "category", dposition: "bottom" };
      }), (e.scales.yAxes || []).map(function (t) {
        return { options: t, dtype: "linear", dposition: "left" };
      }))), e.scale && i.push({ options: e.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), dt.each(i, function (e) {
        var i = e.options,
            o = i.id,
            a = We(i.type, e.dtype);$e(i.position) !== $e(e.dposition) && (i.position = e.dposition), r[o] = !0;var s = null;if (o in n && n[o].type === a) (s = n[o]).options = i, s.ctx = t.ctx, s.chart = t;else {
          var l = Pe.getScaleConstructor(a);if (!l) return;s = new l({ id: o, type: a, options: i, ctx: t.ctx, chart: t }), n[s.id] = s;
        }s.mergeTicksOptions(), e.isDefault && (t.scale = s);
      }), dt.each(r, function (t, e) {
        t || delete n[e];
      }), t.scales = n, Pe.addScalesToLayout(this);
    }, buildOrUpdateControllers: function buildOrUpdateControllers() {
      var t = this,
          e = [];return dt.each(t.data.datasets, function (n, i) {
        var r = t.getDatasetMeta(i),
            o = n.type || t.config.type;if (r.type && r.type !== o && (t.destroyDatasetMeta(i), r = t.getDatasetMeta(i)), r.type = o, r.controller) r.controller.updateIndex(i), r.controller.linkScales();else {
          var a = oe[r.type];if (void 0 === a) throw new Error('"' + r.type + '" is not a chart type.');r.controller = new a(t, i), e.push(r.controller);
        }
      }, t), e;
    }, resetElements: function resetElements() {
      var t = this;dt.each(t.data.datasets, function (e, n) {
        t.getDatasetMeta(n).controller.reset();
      }, t);
    }, reset: function reset() {
      this.resetElements(), this.tooltip.initialize();
    }, update: function update(t) {
      var e,
          n,
          i = this;if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = { duration: t, lazy: arguments[1] }), n = (e = i).options, dt.each(e.scales, function (t) {
        me.removeBox(e, t);
      }), n = qe(st.global, st[e.config.type], n), e.options = e.config.options = n, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = n.tooltips, e.tooltip.initialize(), Le._invalidate(i), !1 !== Le.notify(i, "beforeUpdate")) {
        i.tooltip._data = i.data;var r = i.buildOrUpdateControllers();dt.each(i.data.datasets, function (t, e) {
          i.getDatasetMeta(e).controller.buildOrUpdateElements();
        }, i), i.updateLayout(), i.options.animation && i.options.animation.duration && dt.each(r, function (t) {
          t.reset();
        }), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], Le.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = { duration: t.duration, easing: t.easing, lazy: t.lazy } : i.render(t);
      }
    }, updateLayout: function updateLayout() {
      !1 !== Le.notify(this, "beforeLayout") && (me.update(this, this.width, this.height), Le.notify(this, "afterScaleUpdate"), Le.notify(this, "afterLayout"));
    }, updateDatasets: function updateDatasets() {
      if (!1 !== Le.notify(this, "beforeDatasetsUpdate")) {
        for (var t = 0, e = this.data.datasets.length; t < e; ++t) {
          this.updateDataset(t);
        }Le.notify(this, "afterDatasetsUpdate");
      }
    }, updateDataset: function updateDataset(t) {
      var e = this.getDatasetMeta(t),
          n = { meta: e, index: t };!1 !== Le.notify(this, "beforeDatasetUpdate", [n]) && (e.controller.update(), Le.notify(this, "afterDatasetUpdate", [n]));
    }, render: function render(t) {
      var e = this;t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = { duration: t, lazy: arguments[1] });var n = e.options.animation,
          i = We(t.duration, n && n.duration),
          r = t.lazy;if (!1 !== Le.notify(e, "beforeRender")) {
        var o = function o(t) {
          Le.notify(e, "afterRender"), dt.callback(n && n.onComplete, [t], e);
        };if (n && i) {
          var a = new gt({ numSteps: i / 16.66, easing: t.easing || n.easing, render: function render(t, e) {
              var n = e.currentStep,
                  i = n / e.numSteps;t.draw((0, dt.easing.effects[e.easing])(i), i, n);
            }, onAnimationProgress: n.onProgress, onAnimationComplete: o });vt.addAnimation(e, a, i, r);
        } else e.draw(), o(new gt({ numSteps: 0, chart: e }));return e;
      }
    }, draw: function draw(t) {
      var e = this;e.clear(), dt.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== Le.notify(e, "beforeDraw", [t]) && (dt.each(e.boxes, function (t) {
        t.draw(e.chartArea);
      }, e), e.drawDatasets(t), e._drawTooltip(t), Le.notify(e, "afterDraw", [t]));
    }, transition: function transition(t) {
      for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e) {
        this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
      }this.tooltip.transition(t);
    }, drawDatasets: function drawDatasets(t) {
      var e = this;if (!1 !== Le.notify(e, "beforeDatasetsDraw", [t])) {
        for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) {
          e.isDatasetVisible(n) && e.drawDataset(n, t);
        }Le.notify(e, "afterDatasetsDraw", [t]);
      }
    }, drawDataset: function drawDataset(t, e) {
      var n = this.getDatasetMeta(t),
          i = { meta: n, index: t, easingValue: e };!1 !== Le.notify(this, "beforeDatasetDraw", [i]) && (n.controller.draw(e), Le.notify(this, "afterDatasetDraw", [i]));
    }, _drawTooltip: function _drawTooltip(t) {
      var e = this.tooltip,
          n = { tooltip: e, easingValue: t };!1 !== Le.notify(this, "beforeTooltipDraw", [n]) && (e.draw(), Le.notify(this, "afterTooltipDraw", [n]));
    }, getElementAtEvent: function getElementAtEvent(t) {
      return he.modes.single(this, t);
    }, getElementsAtEvent: function getElementsAtEvent(t) {
      return he.modes.label(this, t, { intersect: !0 });
    }, getElementsAtXAxis: function getElementsAtXAxis(t) {
      return he.modes["x-axis"](this, t, { intersect: !0 });
    }, getElementsAtEventForMode: function getElementsAtEventForMode(t, e, n) {
      var i = he.modes[e];return "function" == typeof i ? i(this, t, n) : [];
    }, getDatasetAtEvent: function getDatasetAtEvent(t) {
      return he.modes.dataset(this, t, { intersect: !0 });
    }, getDatasetMeta: function getDatasetMeta(t) {
      var e = this.data.datasets[t];e._meta || (e._meta = {});var n = e._meta[this.id];return n || (n = e._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), n;
    }, getVisibleDatasetCount: function getVisibleDatasetCount() {
      for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) {
        this.isDatasetVisible(e) && t++;
      }return t;
    }, isDatasetVisible: function isDatasetVisible(t) {
      var e = this.getDatasetMeta(t);return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
    }, generateLegend: function generateLegend() {
      return this.options.legendCallback(this);
    }, destroyDatasetMeta: function destroyDatasetMeta(t) {
      var e = this.id,
          n = this.data.datasets[t],
          i = n._meta && n._meta[e];i && (i.controller.destroy(), delete n._meta[e]);
    }, destroy: function destroy() {
      var t,
          e,
          n = this,
          i = n.canvas;for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t) {
        n.destroyDatasetMeta(t);
      }i && (n.unbindEvents(), dt.canvas.clear(n), Ee.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Le.notify(n, "destroy"), delete Ue.instances[n.id];
    }, toBase64Image: function toBase64Image() {
      return this.canvas.toDataURL.apply(this.canvas, arguments);
    }, initToolTip: function initToolTip() {
      var t = this;t.tooltip = new je({ _chart: t, _chartInstance: t, _data: t.data, _options: t.options.tooltips }, t);
    }, bindEvents: function bindEvents() {
      var t = this,
          e = t._listeners = {},
          n = function n() {
        t.eventHandler.apply(t, arguments);
      };dt.each(t.options.events, function (i) {
        Ee.addEventListener(t, i, n), e[i] = n;
      }), t.options.responsive && (Ee.addEventListener(t, "resize", n = function n() {
        t.resize();
      }), e.resize = n);
    }, unbindEvents: function unbindEvents() {
      var t = this,
          e = t._listeners;e && (delete t._listeners, dt.each(e, function (e, n) {
        Ee.removeEventListener(t, n, e);
      }));
    }, updateHoverStyle: function updateHoverStyle(t, e, n) {
      var i,
          r,
          o,
          a = n ? "setHoverStyle" : "removeHoverStyle";for (r = 0, o = t.length; r < o; ++r) {
        (i = t[r]) && this.getDatasetMeta(i._datasetIndex).controller[a](i);
      }
    }, eventHandler: function eventHandler(t) {
      var e = this,
          n = e.tooltip;if (!1 !== Le.notify(e, "beforeEvent", [t])) {
        e._bufferedRender = !0, e._bufferedRequest = null;var i = e.handleEvent(t);n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), Le.notify(e, "afterEvent", [t]);var r = e._bufferedRequest;return r ? e.render(r) : i && !e.animating && (e.stop(), e.render({ duration: e.options.hover.animationDuration, lazy: !0 })), e._bufferedRender = !1, e._bufferedRequest = null, e;
      }
    }, handleEvent: function handleEvent(t) {
      var e,
          n = this,
          i = n.options || {},
          r = i.hover;return n.lastActive = n.lastActive || [], n.active = "mouseout" === t.type ? [] : n.getElementsAtEventForMode(t, r.mode, r), dt.callback(i.onHover || i.hover.onHover, [t.native, n.active], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, r.mode, !1), n.active.length && r.mode && n.updateHoverStyle(n.active, r.mode, !0), e = !dt.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e;
    } }), Ue.instances = {};var Ye = Ue;function Xe() {
    throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
  }function Ge(t) {
    this.options = t || {};
  }Ue.Controller = Ue, Ue.types = {}, dt.configMerge = qe, dt.scaleMerge = Ve, dt.extend(Ge.prototype, { formats: Xe, parse: Xe, format: Xe, add: Xe, diff: Xe, startOf: Xe, endOf: Xe, _create: function _create(t) {
      return t;
    } }), Ge.override = function (t) {
    dt.extend(Ge.prototype, t);
  };var Ke = { _date: Ge },
      Je = { formatters: { values: function values(t) {
        return dt.isArray(t) ? t : "" + t;
      }, linear: function linear(t, e, n) {
        var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));var r = dt.log10(Math.abs(i)),
            o = "";if (0 !== t) {
          if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
            var a = dt.log10(Math.abs(t));o = t.toExponential(Math.floor(a) - Math.floor(r));
          } else {
            var s = -1 * Math.floor(r);s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s);
          }
        } else o = "0";return o;
      }, logarithmic: function logarithmic(t, e, n) {
        var i = t / Math.pow(10, Math.floor(dt.log10(t)));return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : "";
      } } },
      Ze = dt.valueOrDefault,
      Qe = dt.valueAtIndexOrDefault;function tn(t) {
    var e,
        n,
        i = [];for (e = 0, n = t.length; e < n; ++e) {
      i.push(t[e].label);
    }return i;
  }function en(t, e, n) {
    return dt.isArray(e) ? dt.longestText(t, n, e) : t.measureText(e).width;
  }st._set("scale", { display: !0, position: "left", offset: !1, gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { display: !1, labelString: "", padding: { top: 4, bottom: 4 } }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: Je.formatters.values, minor: {}, major: {} } });var nn = ft.extend({ getPadding: function getPadding() {
      return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 };
    }, getTicks: function getTicks() {
      return this._ticks;
    }, mergeTicksOptions: function mergeTicksOptions() {
      var t = this.options.ticks;for (var e in !1 === t.minor && (t.minor = { display: !1 }), !1 === t.major && (t.major = { display: !1 }), t) {
        "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
      }
    }, beforeUpdate: function beforeUpdate() {
      dt.callback(this.options.beforeUpdate, [this]);
    }, update: function update(t, e, n) {
      var i,
          r,
          o,
          a,
          s,
          l,
          d = this;for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = dt.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], s = d.afterBuildTicks(s) || s, d.beforeTickToLabelConversion(), o = d.convertTicksToLabels(s) || d.ticks, d.afterTickToLabelConversion(), d.ticks = o, i = 0, r = o.length; i < r; ++i) {
        a = o[i], (l = s[i]) ? l.label = a : s.push(l = { label: a, major: !1 });
      }return d._ticks = s, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
    }, afterUpdate: function afterUpdate() {
      dt.callback(this.options.afterUpdate, [this]);
    }, beforeSetDimensions: function beforeSetDimensions() {
      dt.callback(this.options.beforeSetDimensions, [this]);
    }, setDimensions: function setDimensions() {
      var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
    }, afterSetDimensions: function afterSetDimensions() {
      dt.callback(this.options.afterSetDimensions, [this]);
    }, beforeDataLimits: function beforeDataLimits() {
      dt.callback(this.options.beforeDataLimits, [this]);
    }, determineDataLimits: dt.noop, afterDataLimits: function afterDataLimits() {
      dt.callback(this.options.afterDataLimits, [this]);
    }, beforeBuildTicks: function beforeBuildTicks() {
      dt.callback(this.options.beforeBuildTicks, [this]);
    }, buildTicks: dt.noop, afterBuildTicks: function afterBuildTicks(t) {
      var e = this;return dt.isArray(t) && t.length ? dt.callback(e.options.afterBuildTicks, [e, t]) : (e.ticks = dt.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks, t);
    }, beforeTickToLabelConversion: function beforeTickToLabelConversion() {
      dt.callback(this.options.beforeTickToLabelConversion, [this]);
    }, convertTicksToLabels: function convertTicksToLabels() {
      var t = this.options.ticks;this.ticks = this.ticks.map(t.userCallback || t.callback, this);
    }, afterTickToLabelConversion: function afterTickToLabelConversion() {
      dt.callback(this.options.afterTickToLabelConversion, [this]);
    }, beforeCalculateTickRotation: function beforeCalculateTickRotation() {
      dt.callback(this.options.beforeCalculateTickRotation, [this]);
    }, calculateTickRotation: function calculateTickRotation() {
      var t = this,
          e = t.ctx,
          n = t.options.ticks,
          i = tn(t._ticks),
          r = dt.options._parseFont(n);e.font = r.string;var o = n.minRotation || 0;if (i.length && t.options.display && t.isHorizontal()) for (var a, s = dt.longestText(e, r.string, i, t.longestTextCache), l = s, d = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; l > d && o < n.maxRotation;) {
        var c = dt.toRadians(o);if (a = Math.cos(c), Math.sin(c) * s > t.maxHeight) {
          o--;break;
        }o++, l = a * s;
      }t.labelRotation = o;
    }, afterCalculateTickRotation: function afterCalculateTickRotation() {
      dt.callback(this.options.afterCalculateTickRotation, [this]);
    }, beforeFit: function beforeFit() {
      dt.callback(this.options.beforeFit, [this]);
    }, fit: function fit() {
      var t = this,
          e = t.minSize = { width: 0, height: 0 },
          n = tn(t._ticks),
          i = t.options,
          r = i.ticks,
          o = i.scaleLabel,
          a = i.gridLines,
          s = t._isVisible(),
          l = i.position,
          d = t.isHorizontal(),
          c = dt.options._parseFont,
          u = c(r),
          h = i.gridLines.tickMarkLength;if (e.width = d ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && a.drawTicks ? h : 0, e.height = d ? s && a.drawTicks ? h : 0 : t.maxHeight, o.display && s) {
        var f = c(o),
            p = dt.options.toPadding(o.padding),
            g = f.lineHeight + p.height;d ? e.height += g : e.width += g;
      }if (r.display && s) {
        var v = dt.longestText(t.ctx, u.string, n, t.longestTextCache),
            m = dt.numberOfLabelLines(n),
            b = .5 * u.size,
            y = t.options.ticks.padding;if (t._maxLabelLines = m, t.longestLabelWidth = v, d) {
          var x = dt.toRadians(t.labelRotation),
              w = Math.cos(x),
              k = Math.sin(x) * v + u.lineHeight * m + b;e.height = Math.min(t.maxHeight, e.height + k + y), t.ctx.font = u.string;var C,
              M,
              S = en(t.ctx, n[0], u.string),
              T = en(t.ctx, n[n.length - 1], u.string),
              _ = t.getPixelForTick(0) - t.left,
              A = t.right - t.getPixelForTick(n.length - 1);0 !== t.labelRotation ? (C = "bottom" === l ? w * S : w * b, M = "bottom" === l ? w * b : w * T) : (C = S / 2, M = T / 2), t.paddingLeft = Math.max(C - _, 0) + 3, t.paddingRight = Math.max(M - A, 0) + 3;
        } else r.mirror ? v = 0 : v += y + b, e.width = Math.min(t.maxWidth, e.width + v), t.paddingTop = u.size / 2, t.paddingBottom = u.size / 2;
      }t.handleMargins(), t.width = e.width, t.height = e.height;
    }, handleMargins: function handleMargins() {
      var t = this;t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
    }, afterFit: function afterFit() {
      dt.callback(this.options.afterFit, [this]);
    }, isHorizontal: function isHorizontal() {
      return "top" === this.options.position || "bottom" === this.options.position;
    }, isFullWidth: function isFullWidth() {
      return this.options.fullWidth;
    }, getRightValue: function getRightValue(t) {
      if (dt.isNullOrUndef(t)) return NaN;if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;if (t) if (this.isHorizontal()) {
        if (void 0 !== t.x) return this.getRightValue(t.x);
      } else if (void 0 !== t.y) return this.getRightValue(t.y);return t;
    }, getLabelForIndex: dt.noop, getPixelForValue: dt.noop, getValueForPixel: dt.noop, getPixelForTick: function getPixelForTick(t) {
      var e = this,
          n = e.options.offset;if (e.isHorizontal()) {
        var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
            r = i * t + e.paddingLeft;return n && (r += i / 2), e.left + r + (e.isFullWidth() ? e.margins.left : 0);
      }return e.top + t * ((e.height - (e.paddingTop + e.paddingBottom)) / (e._ticks.length - 1));
    }, getPixelForDecimal: function getPixelForDecimal(t) {
      var e = this;return e.isHorizontal() ? e.left + ((e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft) + (e.isFullWidth() ? e.margins.left : 0) : e.top + t * e.height;
    }, getBasePixel: function getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }, getBaseValue: function getBaseValue() {
      var t = this.min,
          e = this.max;return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }, _autoSkip: function _autoSkip(t) {
      var e,
          n,
          i = this,
          r = i.isHorizontal(),
          o = t.length,
          a = !1,
          s = i.options.ticks.minor.maxTicksLimit,
          l = i._tickSize() * (o - 1),
          d = r ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.PaddingBottom),
          c = [];for (l > d && (a = 1 + Math.floor(l / d)), o > s && (a = Math.max(a, 1 + Math.floor(o / s))), e = 0; e < o; e++) {
        n = t[e], a > 1 && e % a > 0 && delete n.label, c.push(n);
      }return c;
    }, _tickSize: function _tickSize() {
      var t = this,
          e = t.isHorizontal(),
          n = t.options.ticks.minor,
          i = dt.toRadians(t.labelRotation),
          r = Math.abs(Math.cos(i)),
          o = Math.abs(Math.sin(i)),
          a = n.autoSkipPadding || 0,
          s = t.longestLabelWidth + a || 0,
          l = dt.options._parseFont(n),
          d = t._maxLabelLines * l.lineHeight + a || 0;return e ? d * r > s * o ? s / r : d / o : d * o < s * r ? d / r : s / o;
    }, _isVisible: function _isVisible() {
      var t,
          e,
          n,
          i = this.chart,
          r = this.options.display;if ("auto" !== r) return !!r;for (t = 0, e = i.data.datasets.length; t < e; ++t) {
        if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
      }return !1;
    }, draw: function draw(t) {
      var e = this,
          n = e.options;if (e._isVisible()) {
        var i,
            r,
            o,
            a = e.chart,
            s = e.ctx,
            l = st.global.defaultFontColor,
            d = n.ticks.minor,
            c = n.ticks.major || d,
            u = n.gridLines,
            h = n.scaleLabel,
            f = n.position,
            p = 0 !== e.labelRotation,
            g = d.mirror,
            v = e.isHorizontal(),
            m = dt.options._parseFont,
            b = d.display && d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
            y = Ze(d.fontColor, l),
            x = m(d),
            w = x.lineHeight,
            k = Ze(c.fontColor, l),
            C = m(c),
            M = d.padding,
            S = d.labelOffset,
            T = u.drawTicks ? u.tickMarkLength : 0,
            _ = Ze(h.fontColor, l),
            A = m(h),
            N = dt.options.toPadding(h.padding),
            D = dt.toRadians(e.labelRotation),
            E = [],
            L = u.drawBorder ? Qe(u.lineWidth, 0, 0) : 0,
            P = dt._alignPixel;if ("top" === f ? (i = P(a, e.bottom, L), r = e.bottom - T, o = i - L / 2) : "bottom" === f ? (i = P(a, e.top, L), r = i + L / 2, o = e.top + T) : "left" === f ? (i = P(a, e.right, L), r = e.right - T, o = i - L / 2) : (i = P(a, e.left, L), r = i + L / 2, o = e.left + T), dt.each(b, function (i, s) {
          if (!dt.isNullOrUndef(i.label)) {
            var l,
                d,
                c,
                h,
                m,
                b,
                y,
                x,
                k,
                C,
                _,
                A,
                N,
                I,
                F,
                O,
                R = i.label;s === e.zeroLineIndex && n.offset === u.offsetGridLines ? (l = u.zeroLineWidth, d = u.zeroLineColor, c = u.zeroLineBorderDash || [], h = u.zeroLineBorderDashOffset || 0) : (l = Qe(u.lineWidth, s), d = Qe(u.color, s), c = u.borderDash || [], h = u.borderDashOffset || 0);var H = dt.isArray(R) ? R.length : 1,
                z = function (t, e, n) {
              var i = t.getPixelForTick(e);return n && (1 === t.getTicks().length ? i -= t.isHorizontal() ? Math.max(i - t.left, t.right - i) : Math.max(i - t.top, t.bottom - i) : i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i;
            }(e, s, u.offsetGridLines);if (v) {
              var B = T + M;z < e.left - 1e-7 && (d = "rgba(0,0,0,0)"), m = y = k = _ = P(a, z, l), b = r, x = o, N = e.getPixelForTick(s) + S, "top" === f ? (C = P(a, t.top, L) + L / 2, A = t.bottom, F = ((p ? 1 : .5) - H) * w, O = p ? "left" : "center", I = e.bottom - B) : (C = t.top, A = P(a, t.bottom, L) - L / 2, F = (p ? 0 : .5) * w, O = p ? "right" : "center", I = e.top + B);
            } else {
              var j = (g ? 0 : T) + M;z < e.top - 1e-7 && (d = "rgba(0,0,0,0)"), m = r, y = o, b = x = C = A = P(a, z, l), I = e.getPixelForTick(s) + S, F = (1 - H) * w / 2, "left" === f ? (k = P(a, t.left, L) + L / 2, _ = t.right, O = g ? "left" : "right", N = e.right - j) : (k = t.left, _ = P(a, t.right, L) - L / 2, O = g ? "right" : "left", N = e.left + j);
            }E.push({ tx1: m, ty1: b, tx2: y, ty2: x, x1: k, y1: C, x2: _, y2: A, labelX: N, labelY: I, glWidth: l, glColor: d, glBorderDash: c, glBorderDashOffset: h, rotation: -1 * D, label: R, major: i.major, textOffset: F, textAlign: O });
          }
        }), dt.each(E, function (t) {
          var e = t.glWidth,
              n = t.glColor;if (u.display && e && n && (s.save(), s.lineWidth = e, s.strokeStyle = n, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), u.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), u.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
            s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? C.string : x.string, s.fillStyle = t.major ? k : y, s.textBaseline = "middle", s.textAlign = t.textAlign;var i = t.label,
                r = t.textOffset;if (dt.isArray(i)) for (var o = 0; o < i.length; ++o) {
              s.fillText("" + i[o], 0, r), r += w;
            } else s.fillText(i, 0, r);s.restore();
          }
        }), h.display) {
          var I,
              F,
              O = 0,
              R = A.lineHeight / 2;if (v) I = e.left + (e.right - e.left) / 2, F = "bottom" === f ? e.bottom - R - N.bottom : e.top + R + N.top;else {
            var H = "left" === f;I = H ? e.left + R + N.top : e.right - R - N.top, F = e.top + (e.bottom - e.top) / 2, O = H ? -.5 * Math.PI : .5 * Math.PI;
          }s.save(), s.translate(I, F), s.rotate(O), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = _, s.font = A.string, s.fillText(h.labelString, 0, 0), s.restore();
        }if (L) {
          var z,
              B,
              j,
              W,
              V = L,
              q = Qe(u.lineWidth, b.length - 1, 0);v ? (z = P(a, e.left, V) - V / 2, B = P(a, e.right, q) + q / 2, j = W = i) : (j = P(a, e.top, V) - V / 2, W = P(a, e.bottom, q) + q / 2, z = B = i), s.lineWidth = L, s.strokeStyle = Qe(u.color, 0), s.beginPath(), s.moveTo(z, j), s.lineTo(B, W), s.stroke();
        }
      }
    } }),
      rn = nn.extend({ getLabels: function getLabels() {
      var t = this.chart.data;return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
    }, determineDataLimits: function determineDataLimits() {
      var t,
          e = this,
          n = e.getLabels();e.minIndex = 0, e.maxIndex = n.length - 1, void 0 !== e.options.ticks.min && (t = n.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = n.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = n[e.minIndex], e.max = n[e.maxIndex];
    }, buildTicks: function buildTicks() {
      var t = this,
          e = t.getLabels();t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
    }, getLabelForIndex: function getLabelForIndex(t, e) {
      var n = this,
          i = n.chart;return i.getDatasetMeta(e).controller._getValueScaleId() === n.id ? n.getRightValue(i.data.datasets[e].data[t]) : n.ticks[t - n.minIndex];
    }, getPixelForValue: function getPixelForValue(t, e) {
      var n,
          i = this,
          r = i.options.offset,
          o = Math.max(i.maxIndex + 1 - i.minIndex - (r ? 0 : 1), 1);if (null != t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
        t = n || t;var a = i.getLabels().indexOf(t);e = -1 !== a ? a : e;
      }if (i.isHorizontal()) {
        var s = i.width / o,
            l = s * (e - i.minIndex);return r && (l += s / 2), i.left + l;
      }var d = i.height / o,
          c = d * (e - i.minIndex);return r && (c += d / 2), i.top + c;
    }, getPixelForTick: function getPixelForTick(t) {
      return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
    }, getValueForPixel: function getValueForPixel(t) {
      var e = this,
          n = e.options.offset,
          i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
          r = e.isHorizontal(),
          o = (r ? e.width : e.height) / i;return t -= r ? e.left : e.top, n && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
    }, getBasePixel: function getBasePixel() {
      return this.bottom;
    } });rn._defaults = { position: "bottom" };var on = dt.isNullOrUndef,
      an = nn.extend({ getRightValue: function getRightValue(t) {
      return "string" == typeof t ? +t : nn.prototype.getRightValue.call(this, t);
    }, handleTickRangeOptions: function handleTickRangeOptions() {
      var t = this,
          e = t.options.ticks;if (e.beginAtZero) {
        var n = dt.sign(t.min),
            i = dt.sign(t.max);n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0);
      }var r = void 0 !== e.min || void 0 !== e.suggestedMin,
          o = void 0 !== e.max || void 0 !== e.suggestedMax;void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (t.min = null === t.min ? e.suggestedMin : Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (t.max = null === t.max ? e.suggestedMax : Math.max(t.max, e.suggestedMax)), r !== o && t.min >= t.max && (r ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
    }, getTickLimit: function getTickLimit() {
      var t,
          e = this.options.ticks,
          n = e.stepSize,
          i = e.maxTicksLimit;return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t;
    }, _computeTickLimit: function _computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }, handleDirectionalChanges: dt.noop, buildTicks: function buildTicks() {
      var t = this,
          e = t.options.ticks,
          n = t.getTickLimit(),
          i = { maxTicks: n = Math.max(2, n), min: e.min, max: e.max, precision: e.precision, stepSize: dt.valueOrDefault(e.fixedStepSize, e.stepSize) },
          r = t.ticks = function (t, e) {
        var n,
            i,
            r,
            o,
            a = [],
            s = t.stepSize,
            l = s || 1,
            d = t.maxTicks - 1,
            c = t.min,
            u = t.max,
            h = t.precision,
            f = e.min,
            p = e.max,
            g = dt.niceNum((p - f) / d / l) * l;if (g < 1e-14 && on(c) && on(u)) return [f, p];(o = Math.ceil(p / g) - Math.floor(f / g)) > d && (g = dt.niceNum(o * g / d / l) * l), s || on(h) ? n = Math.pow(10, dt._decimalPlaces(g)) : (n = Math.pow(10, h), g = Math.ceil(g * n) / n), i = Math.floor(f / g) * g, r = Math.ceil(p / g) * g, s && (!on(c) && dt.almostWhole(c / g, g / 1e3) && (i = c), !on(u) && dt.almostWhole(u / g, g / 1e3) && (r = u)), o = dt.almostEquals(o = (r - i) / g, Math.round(o), g / 1e3) ? Math.round(o) : Math.ceil(o), i = Math.round(i * n) / n, r = Math.round(r * n) / n, a.push(on(c) ? i : c);for (var v = 1; v < o; ++v) {
          a.push(Math.round((i + v * g) * n) / n);
        }return a.push(on(u) ? r : u), a;
      }(i, t);t.handleDirectionalChanges(), t.max = dt.max(r), t.min = dt.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
    }, convertTicksToLabels: function convertTicksToLabels() {
      var t = this;t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), nn.prototype.convertTicksToLabels.call(t);
    } }),
      sn = { position: "left", ticks: { callback: Je.formatters.linear } },
      ln = an.extend({ determineDataLimits: function determineDataLimits() {
      var t = this,
          e = t.options,
          n = t.chart,
          i = n.data.datasets,
          r = t.isHorizontal();function o(e) {
        return r ? e.xAxisID === t.id : e.yAxisID === t.id;
      }t.min = null, t.max = null;var a = e.stacked;if (void 0 === a && dt.each(i, function (t, e) {
        if (!a) {
          var i = n.getDatasetMeta(e);n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (a = !0);
        }
      }), e.stacked || a) {
        var s = {};dt.each(i, function (i, r) {
          var a = n.getDatasetMeta(r),
              l = [a.type, void 0 === e.stacked && void 0 === a.stack ? r : "", a.stack].join(".");void 0 === s[l] && (s[l] = { positiveValues: [], negativeValues: [] });var d = s[l].positiveValues,
              c = s[l].negativeValues;n.isDatasetVisible(r) && o(a) && dt.each(i.data, function (n, i) {
            var r = +t.getRightValue(n);isNaN(r) || a.data[i].hidden || (d[i] = d[i] || 0, c[i] = c[i] || 0, e.relativePoints ? d[i] = 100 : r < 0 ? c[i] += r : d[i] += r);
          });
        }), dt.each(s, function (e) {
          var n = e.positiveValues.concat(e.negativeValues),
              i = dt.min(n),
              r = dt.max(n);t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? r : Math.max(t.max, r);
        });
      } else dt.each(i, function (e, i) {
        var r = n.getDatasetMeta(i);n.isDatasetVisible(i) && o(r) && dt.each(e.data, function (e, n) {
          var i = +t.getRightValue(e);isNaN(i) || r.data[n].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i));
        });
      });t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions();
    }, _computeTickLimit: function _computeTickLimit() {
      var t;return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = dt.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight));
    }, handleDirectionalChanges: function handleDirectionalChanges() {
      this.isHorizontal() || this.ticks.reverse();
    }, getLabelForIndex: function getLabelForIndex(t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    }, getPixelForValue: function getPixelForValue(t) {
      var e = this,
          n = e.start,
          i = +e.getRightValue(t),
          r = e.end - n;return e.isHorizontal() ? e.left + e.width / r * (i - n) : e.bottom - e.height / r * (i - n);
    }, getValueForPixel: function getValueForPixel(t) {
      var e = this,
          n = e.isHorizontal();return e.start + (n ? t - e.left : e.bottom - t) / (n ? e.width : e.height) * (e.end - e.start);
    }, getPixelForTick: function getPixelForTick(t) {
      return this.getPixelForValue(this.ticksAsNumbers[t]);
    } });ln._defaults = sn;var dn = dt.valueOrDefault,
      cn = { position: "left", ticks: { callback: Je.formatters.logarithmic } };function un(t, e) {
    return dt.isFinite(t) && t >= 0 ? t : e;
  }var hn = nn.extend({ determineDataLimits: function determineDataLimits() {
      var t = this,
          e = t.options,
          n = t.chart,
          i = n.data.datasets,
          r = t.isHorizontal();function o(e) {
        return r ? e.xAxisID === t.id : e.yAxisID === t.id;
      }t.min = null, t.max = null, t.minNotZero = null;var a = e.stacked;if (void 0 === a && dt.each(i, function (t, e) {
        if (!a) {
          var i = n.getDatasetMeta(e);n.isDatasetVisible(e) && o(i) && void 0 !== i.stack && (a = !0);
        }
      }), e.stacked || a) {
        var s = {};dt.each(i, function (i, r) {
          var a = n.getDatasetMeta(r),
              l = [a.type, void 0 === e.stacked && void 0 === a.stack ? r : "", a.stack].join(".");n.isDatasetVisible(r) && o(a) && (void 0 === s[l] && (s[l] = []), dt.each(i.data, function (e, n) {
            var i = s[l],
                r = +t.getRightValue(e);isNaN(r) || a.data[n].hidden || r < 0 || (i[n] = i[n] || 0, i[n] += r);
          }));
        }), dt.each(s, function (e) {
          if (e.length > 0) {
            var n = dt.min(e),
                i = dt.max(e);t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? i : Math.max(t.max, i);
          }
        });
      } else dt.each(i, function (e, i) {
        var r = n.getDatasetMeta(i);n.isDatasetVisible(i) && o(r) && dt.each(e.data, function (e, n) {
          var i = +t.getRightValue(e);isNaN(i) || r.data[n].hidden || i < 0 || (null === t.min ? t.min = i : i < t.min && (t.min = i), null === t.max ? t.max = i : i > t.max && (t.max = i), 0 !== i && (null === t.minNotZero || i < t.minNotZero) && (t.minNotZero = i));
        });
      });this.handleTickRangeOptions();
    }, handleTickRangeOptions: function handleTickRangeOptions() {
      var t = this,
          e = t.options.ticks;t.min = un(e.min, t.min), t.max = un(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(dt.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(dt.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(dt.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(dt.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.minNotZero = t.min > 0 ? t.min : t.max < 1 ? Math.pow(10, Math.floor(dt.log10(t.max))) : 1);
    }, buildTicks: function buildTicks() {
      var t = this,
          e = t.options.ticks,
          n = !t.isHorizontal(),
          i = { min: un(e.min), max: un(e.max) },
          r = t.ticks = function (t, e) {
        var n,
            i,
            r = [],
            o = dn(t.min, Math.pow(10, Math.floor(dt.log10(e.min)))),
            a = Math.floor(dt.log10(e.max)),
            s = Math.ceil(e.max / Math.pow(10, a));0 === o ? (n = Math.floor(dt.log10(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), r.push(o), o = i * Math.pow(10, n)) : (n = Math.floor(dt.log10(o)), i = Math.floor(o / Math.pow(10, n)));var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;do {
          r.push(o), 10 == ++i && (i = 1, l = ++n >= 0 ? 1 : l), o = Math.round(i * Math.pow(10, n) * l) / l;
        } while (n < a || n === a && i < s);var d = dn(t.max, o);return r.push(d), r;
      }(i, t);t.max = dt.max(r), t.min = dt.min(r), e.reverse ? (n = !n, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n && r.reverse();
    }, convertTicksToLabels: function convertTicksToLabels() {
      this.tickValues = this.ticks.slice(), nn.prototype.convertTicksToLabels.call(this);
    }, getLabelForIndex: function getLabelForIndex(t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    }, getPixelForTick: function getPixelForTick(t) {
      return this.getPixelForValue(this.tickValues[t]);
    }, _getFirstTickValue: function _getFirstTickValue(t) {
      var e = Math.floor(dt.log10(t));return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
    }, getPixelForValue: function getPixelForValue(t) {
      var e,
          n,
          i,
          r,
          o,
          a = this,
          s = a.options.ticks,
          l = s.reverse,
          d = dt.log10,
          c = a._getFirstTickValue(a.minNotZero),
          u = 0;return t = +a.getRightValue(t), l ? (i = a.end, r = a.start, o = -1) : (i = a.start, r = a.end, o = 1), a.isHorizontal() ? (e = a.width, n = l ? a.right : a.left) : (e = a.height, o *= -1, n = l ? a.top : a.bottom), t !== i && (0 === i && (e -= u = dn(s.fontSize, st.global.defaultFontSize), i = c), 0 !== t && (u += e / (d(r) - d(i)) * (d(t) - d(i))), n += o * u), n;
    }, getValueForPixel: function getValueForPixel(t) {
      var e,
          n,
          i,
          r,
          o = this,
          a = o.options.ticks,
          s = a.reverse,
          l = dt.log10,
          d = o._getFirstTickValue(o.minNotZero);if (s ? (n = o.end, i = o.start) : (n = o.start, i = o.end), o.isHorizontal() ? (e = o.width, r = s ? o.right - t : t - o.left) : (e = o.height, r = s ? t - o.top : o.bottom - t), r !== n) {
        if (0 === n) {
          var c = dn(a.fontSize, st.global.defaultFontSize);r -= c, e -= c, n = d;
        }r *= l(i) - l(n), r /= e, r = Math.pow(10, l(n) + r);
      }return r;
    } });hn._defaults = cn;var fn = dt.valueOrDefault,
      pn = dt.valueAtIndexOrDefault,
      gn = dt.options.resolve,
      vn = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, borderDash: [], borderDashOffset: 0 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: Je.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function callback(t) {
        return t;
      } } };function mn(t) {
    var e = t.options;return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
  }function bn(t) {
    var e = t.ticks;return e.display && t.display ? fn(e.fontSize, st.global.defaultFontSize) + 2 * e.backdropPaddingY : 0;
  }function yn(t, e, n, i, r) {
    return t === i || t === r ? { start: e - n / 2, end: e + n / 2 } : t < i || t > r ? { start: e - n, end: e } : { start: e, end: e + n };
  }function xn(t) {
    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
  }function wn(t, e, n, i) {
    var r,
        o,
        a = n.y + i / 2;if (dt.isArray(e)) for (r = 0, o = e.length; r < o; ++r) {
      t.fillText(e[r], n.x, a), a += i;
    } else t.fillText(e, n.x, a);
  }function kn(t, e, n) {
    90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h);
  }function Cn(t) {
    return dt.isNumber(t) ? t : 0;
  }var Mn = an.extend({ setDimensions: function setDimensions() {
      var t = this;t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = bn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2;
    }, determineDataLimits: function determineDataLimits() {
      var t = this,
          e = t.chart,
          n = Number.POSITIVE_INFINITY,
          i = Number.NEGATIVE_INFINITY;dt.each(e.data.datasets, function (r, o) {
        if (e.isDatasetVisible(o)) {
          var a = e.getDatasetMeta(o);dt.each(r.data, function (e, r) {
            var o = +t.getRightValue(e);isNaN(o) || a.data[r].hidden || (n = Math.min(o, n), i = Math.max(o, i));
          });
        }
      }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
    }, _computeTickLimit: function _computeTickLimit() {
      return Math.ceil(this.drawingArea / bn(this.options));
    }, convertTicksToLabels: function convertTicksToLabels() {
      var t = this;an.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t);
    }, getLabelForIndex: function getLabelForIndex(t, e) {
      return +this.getRightValue(this.chart.data.datasets[e].data[t]);
    }, fit: function fit() {
      var t = this.options;t.display && t.pointLabels.display ? function (t) {
        var e,
            n,
            i,
            r = dt.options._parseFont(t.options.pointLabels),
            o = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
            a = {};t.ctx.font = r.string, t._pointLabelSizes = [];var s,
            l,
            d,
            c = mn(t);for (e = 0; e < c; e++) {
          i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = r.lineHeight, n = dt.isArray(d = t.pointLabels[e] || "") ? { w: dt.longestText(s, s.font, d), h: d.length * l } : { w: s.measureText(d).width, h: l }, t._pointLabelSizes[e] = n;var u = t.getIndexAngle(e),
              h = dt.toDegrees(u) % 360,
              f = yn(h, i.x, n.w, 0, 180),
              p = yn(h, i.y, n.h, 90, 270);f.start < o.l && (o.l = f.start, a.l = u), f.end > o.r && (o.r = f.end, a.r = u), p.start < o.t && (o.t = p.start, a.t = u), p.end > o.b && (o.b = p.end, a.b = u);
        }t.setReductions(t.drawingArea, o, a);
      }(this) : this.setCenterPoint(0, 0, 0, 0);
    }, setReductions: function setReductions(t, e, n) {
      var i = this,
          r = e.l / Math.sin(n.l),
          o = Math.max(e.r - i.width, 0) / Math.sin(n.r),
          a = -e.t / Math.cos(n.t),
          s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);r = Cn(r), o = Cn(o), a = Cn(a), s = Cn(s), i.drawingArea = Math.min(Math.floor(t - (r + o) / 2), Math.floor(t - (a + s) / 2)), i.setCenterPoint(r, o, a, s);
    }, setCenterPoint: function setCenterPoint(t, e, n, i) {
      var r = this,
          o = n + r.drawingArea,
          a = r.height - r.paddingTop - i - r.drawingArea;r.xCenter = Math.floor((t + r.drawingArea + (r.width - e - r.drawingArea)) / 2 + r.left), r.yCenter = Math.floor((o + a) / 2 + r.top + r.paddingTop);
    }, getIndexAngle: function getIndexAngle(t) {
      return t * (2 * Math.PI / mn(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
    }, getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
      var e = this;if (null === t) return 0;var n = e.drawingArea / (e.max - e.min);return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
    }, getPointPosition: function getPointPosition(t, e) {
      var n = this.getIndexAngle(t) - Math.PI / 2;return { x: Math.cos(n) * e + this.xCenter, y: Math.sin(n) * e + this.yCenter };
    }, getPointPositionForValue: function getPointPositionForValue(t, e) {
      return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }, getBasePosition: function getBasePosition() {
      var t = this.min,
          e = this.max;return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0);
    }, draw: function draw() {
      var t = this,
          e = t.options,
          n = e.gridLines,
          i = e.ticks;if (e.display) {
        var r = t.ctx,
            o = this.getIndexAngle(0),
            a = dt.options._parseFont(i);(e.angleLines.display || e.pointLabels.display) && function (t) {
          var e = t.ctx,
              n = t.options,
              i = n.angleLines,
              r = n.gridLines,
              o = n.pointLabels,
              a = fn(i.lineWidth, r.lineWidth),
              s = fn(i.color, r.color),
              l = bn(n);e.save(), e.lineWidth = a, e.strokeStyle = s, e.setLineDash && (e.setLineDash(gn([i.borderDash, r.borderDash, []])), e.lineDashOffset = gn([i.borderDashOffset, r.borderDashOffset, 0]));var d = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
              c = dt.options._parseFont(o);e.font = c.string, e.textBaseline = "middle";for (var u = mn(t) - 1; u >= 0; u--) {
            if (i.display && a && s) {
              var h = t.getPointPosition(u, d);e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(h.x, h.y), e.stroke();
            }if (o.display) {
              var f = t.getPointPosition(u, d + (0 === u ? l / 2 : 0) + 5),
                  p = pn(o.fontColor, u, st.global.defaultFontColor);e.fillStyle = p;var g = t.getIndexAngle(u),
                  v = dt.toDegrees(g);e.textAlign = xn(v), kn(v, t._pointLabelSizes[u], f), wn(e, t.pointLabels[u] || "", f, c.lineHeight);
            }
          }e.restore();
        }(t), dt.each(t.ticks, function (e, s) {
          if (s > 0 || i.reverse) {
            var l = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);if (n.display && 0 !== s && function (t, e, n, i) {
              var r,
                  o = t.ctx,
                  a = e.circular,
                  s = mn(t),
                  l = pn(e.color, i - 1),
                  d = pn(e.lineWidth, i - 1);if ((a || s) && l && d) {
                if (o.save(), o.strokeStyle = l, o.lineWidth = d, o.setLineDash && (o.setLineDash(e.borderDash || []), o.lineDashOffset = e.borderDashOffset || 0), o.beginPath(), a) o.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);else {
                  r = t.getPointPosition(0, n), o.moveTo(r.x, r.y);for (var c = 1; c < s; c++) {
                    r = t.getPointPosition(c, n), o.lineTo(r.x, r.y);
                  }
                }o.closePath(), o.stroke(), o.restore();
              }
            }(t, n, l, s), i.display) {
              var d = fn(i.fontColor, st.global.defaultFontColor);if (r.font = a.string, r.save(), r.translate(t.xCenter, t.yCenter), r.rotate(o), i.showLabelBackdrop) {
                var c = r.measureText(e).width;r.fillStyle = i.backdropColor, r.fillRect(-c / 2 - i.backdropPaddingX, -l - a.size / 2 - i.backdropPaddingY, c + 2 * i.backdropPaddingX, a.size + 2 * i.backdropPaddingY);
              }r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = d, r.fillText(e, 0, -l), r.restore();
            }
          }
        });
      }
    } });Mn._defaults = vn;var Sn = dt.valueOrDefault,
      Tn = Number.MIN_SAFE_INTEGER || -9007199254740991,
      _n = Number.MAX_SAFE_INTEGER || 9007199254740991,
      An = { millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] }, minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] }, hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { common: !0, size: 864e5, steps: [1, 2, 5] }, week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] }, month: { common: !0, size: 2628e6, steps: [1, 2, 3] }, quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] }, year: { common: !0, size: 3154e7 } },
      Nn = Object.keys(An);function Dn(t, e) {
    return t - e;
  }function En(t) {
    var e,
        n,
        i,
        r = {},
        o = [];for (e = 0, n = t.length; e < n; ++e) {
      r[i = t[e]] || (r[i] = !0, o.push(i));
    }return o;
  }function Ln(t, e, n, i) {
    var r = function (t, e, n) {
      for (var i, r, o, a = 0, s = t.length - 1; a >= 0 && a <= s;) {
        if (r = t[(i = a + s >> 1) - 1] || null, o = t[i], !r) return { lo: null, hi: o };if (o[e] < n) a = i + 1;else {
          if (!(r[e] > n)) return { lo: r, hi: o };s = i - 1;
        }
      }return { lo: o, hi: null };
    }(t, e, n),
        o = r.lo ? r.hi ? r.lo : t[t.length - 2] : t[0],
        a = r.lo ? r.hi ? r.hi : t[t.length - 1] : t[1],
        s = a[e] - o[e];return o[i] + (a[i] - o[i]) * (s ? (n - o[e]) / s : 0);
  }function Pn(t, e) {
    var n = t._adapter,
        i = t.options.time,
        r = i.parser,
        o = r || i.format,
        a = e;return "function" == typeof r && (a = r(a)), dt.isFinite(a) || (a = "string" == typeof o ? n.parse(a, o) : n.parse(a)), null !== a ? +a : (r || "function" != typeof o || (a = o(e), dt.isFinite(a) || (a = n.parse(a))), a);
  }function In(t, e) {
    if (dt.isNullOrUndef(e)) return null;var n = t.options.time,
        i = Pn(t, t.getRightValue(e));return null === i ? i : (n.round && (i = +t._adapter.startOf(i, n.round)), i);
  }function Fn(t) {
    for (var e = Nn.indexOf(t) + 1, n = Nn.length; e < n; ++e) {
      if (An[Nn[e]].common) return Nn[e];
    }
  }var On = nn.extend({ initialize: function initialize() {
      this.mergeTicksOptions(), nn.prototype.initialize.call(this);
    }, update: function update() {
      var t = this.options,
          e = t.time || (t.time = {}),
          n = this._adapter = new Ke._date(t.adapters.date);return e.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), dt.mergeIf(e.displayFormats, n.formats()), nn.prototype.update.apply(this, arguments);
    }, getRightValue: function getRightValue(t) {
      return t && void 0 !== t.t && (t = t.t), nn.prototype.getRightValue.call(this, t);
    }, determineDataLimits: function determineDataLimits() {
      var t,
          e,
          n,
          i,
          r,
          o,
          a = this,
          s = a.chart,
          l = a._adapter,
          d = a.options.time,
          c = d.unit || "day",
          u = _n,
          h = Tn,
          f = [],
          p = [],
          g = [],
          v = s.data.labels || [];for (t = 0, n = v.length; t < n; ++t) {
        g.push(In(a, v[t]));
      }for (t = 0, n = (s.data.datasets || []).length; t < n; ++t) {
        if (s.isDatasetVisible(t)) {
          if (dt.isObject((r = s.data.datasets[t].data)[0])) for (p[t] = [], e = 0, i = r.length; e < i; ++e) {
            o = In(a, r[e]), f.push(o), p[t][e] = o;
          } else {
            for (e = 0, i = g.length; e < i; ++e) {
              f.push(g[e]);
            }p[t] = g.slice(0);
          }
        } else p[t] = [];
      }g.length && (g = En(g).sort(Dn), u = Math.min(u, g[0]), h = Math.max(h, g[g.length - 1])), f.length && (f = En(f).sort(Dn), u = Math.min(u, f[0]), h = Math.max(h, f[f.length - 1])), u = In(a, d.min) || u, h = In(a, d.max) || h, u = u === _n ? +l.startOf(Date.now(), c) : u, h = h === Tn ? +l.endOf(Date.now(), c) + 1 : h, a.min = Math.min(u, h), a.max = Math.max(u + 1, h), a._horizontal = a.isHorizontal(), a._table = [], a._timestamps = { data: f, datasets: p, labels: g };
    }, buildTicks: function buildTicks() {
      var t,
          e,
          n,
          i = this,
          r = i.min,
          o = i.max,
          a = i.options,
          s = a.time,
          l = [],
          d = [];switch (a.ticks.source) {case "data":
          l = i._timestamps.data;break;case "labels":
          l = i._timestamps.labels;break;case "auto":default:
          l = function (t, e, n, i) {
            var r,
                o = t._adapter,
                a = t.options,
                s = a.time,
                l = s.unit || function (t, e, n, i) {
              var r,
                  o,
                  a,
                  s = Nn.length;for (r = Nn.indexOf(t); r < s - 1; ++r) {
                if (a = (o = An[Nn[r]]).steps ? o.steps[o.steps.length - 1] : _n, o.common && Math.ceil((n - e) / (a * o.size)) <= i) return Nn[r];
              }return Nn[s - 1];
            }(s.minUnit, e, n, i),
                d = Fn(l),
                c = Sn(s.stepSize, s.unitStepSize),
                u = "week" === l && s.isoWeekday,
                h = a.ticks.major.enabled,
                f = An[l],
                p = e,
                g = n,
                v = [];for (c || (c = function (t, e, n, i) {
              var r,
                  o,
                  a,
                  s = e - t,
                  l = An[n],
                  d = l.size,
                  c = l.steps;if (!c) return Math.ceil(s / (i * d));for (r = 0, o = c.length; r < o && (a = c[r], !(Math.ceil(s / (d * a)) <= i)); ++r) {}return a;
            }(e, n, l, i)), u && (p = +o.startOf(p, "isoWeek", u), g = +o.startOf(g, "isoWeek", u)), p = +o.startOf(p, u ? "day" : l), (g = +o.startOf(g, u ? "day" : l)) < n && (g = +o.add(g, 1, l)), r = p, h && d && !u && !s.round && (r = +o.startOf(r, d), r = +o.add(r, ~~((p - r) / (f.size * c)) * c, l)); r < g; r = +o.add(r, c, l)) {
              v.push(+r);
            }return v.push(+r), v;
          }(i, r, o, i.getLabelCapacity(r));}for ("ticks" === a.bounds && l.length && (r = l[0], o = l[l.length - 1]), r = In(i, s.min) || r, o = In(i, s.max) || o, t = 0, e = l.length; t < e; ++t) {
        (n = l[t]) >= r && n <= o && d.push(n);
      }return i.min = r, i.max = o, i._unit = s.unit || function (t, e, n, i, r) {
        var o, a;for (o = Nn.length - 1; o >= Nn.indexOf(n); o--) {
          if (An[a = Nn[o]].common && t._adapter.diff(r, i, a) >= e.length) return a;
        }return Nn[n ? Nn.indexOf(n) : 0];
      }(i, d, s.minUnit, i.min, i.max), i._majorUnit = Fn(i._unit), i._table = function (t, e, n, i) {
        if ("linear" === i || !t.length) return [{ time: e, pos: 0 }, { time: n, pos: 1 }];var r,
            o,
            a,
            s,
            l,
            d = [],
            c = [e];for (r = 0, o = t.length; r < o; ++r) {
          (s = t[r]) > e && s < n && c.push(s);
        }for (c.push(n), r = 0, o = c.length; r < o; ++r) {
          l = c[r + 1], s = c[r], void 0 !== (a = c[r - 1]) && void 0 !== l && Math.round((l + a) / 2) === s || d.push({ time: s, pos: r / (o - 1) });
        }return d;
      }(i._timestamps.data, r, o, a.distribution), i._offsets = function (t, e, n, i, r) {
        var o,
            a,
            s = 0,
            l = 0;return r.offset && e.length && (r.time.min || (o = Ln(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - o : (Ln(t, "time", e[1], "pos") - o) / 2), r.time.max || (a = Ln(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? a : (a - Ln(t, "time", e[e.length - 2], "pos")) / 2)), { start: s, end: l };
      }(i._table, d, 0, 0, a), a.ticks.reverse && d.reverse(), function (t, e, n) {
        var i,
            r,
            o,
            a,
            s = [];for (i = 0, r = e.length; i < r; ++i) {
          o = e[i], a = !!n && o === +t._adapter.startOf(o, n), s.push({ value: o, major: a });
        }return s;
      }(i, d, i._majorUnit);
    }, getLabelForIndex: function getLabelForIndex(t, e) {
      var n = this,
          i = n._adapter,
          r = n.chart.data,
          o = n.options.time,
          a = r.labels && t < r.labels.length ? r.labels[t] : "",
          s = r.datasets[e].data[t];return dt.isObject(s) && (a = n.getRightValue(s)), o.tooltipFormat ? i.format(Pn(n, a), o.tooltipFormat) : "string" == typeof a ? a : i.format(Pn(n, a), o.displayFormats.datetime);
    }, tickFormatFunction: function tickFormatFunction(t, e, n, i) {
      var r = this._adapter,
          o = this.options,
          a = o.time.displayFormats,
          s = a[this._unit],
          l = this._majorUnit,
          d = a[l],
          c = +r.startOf(t, l),
          u = o.ticks.major,
          h = u.enabled && l && d && t === c,
          f = r.format(t, i || (h ? d : s)),
          p = h ? u : o.ticks.minor,
          g = Sn(p.callback, p.userCallback);return g ? g(f, e, n) : f;
    }, convertTicksToLabels: function convertTicksToLabels(t) {
      var e,
          n,
          i = [];for (e = 0, n = t.length; e < n; ++e) {
        i.push(this.tickFormatFunction(t[e].value, e, t));
      }return i;
    }, getPixelForOffset: function getPixelForOffset(t) {
      var e = this,
          n = e.options.ticks.reverse,
          i = e._horizontal ? e.width : e.height,
          r = e._horizontal ? n ? e.right : e.left : n ? e.bottom : e.top,
          o = Ln(e._table, "time", t, "pos"),
          a = i * (e._offsets.start + o) / (e._offsets.start + 1 + e._offsets.end);return n ? r - a : r + a;
    }, getPixelForValue: function getPixelForValue(t, e, n) {
      var i = null;if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = In(this, t)), null !== i) return this.getPixelForOffset(i);
    }, getPixelForTick: function getPixelForTick(t) {
      var e = this.getTicks();return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
    }, getValueForPixel: function getValueForPixel(t) {
      var e = this,
          n = e._horizontal ? e.width : e.height,
          i = Ln(e._table, "pos", (n ? (t - (e._horizontal ? e.left : e.top)) / n : 0) * (e._offsets.start + 1 + e._offsets.start) - e._offsets.end, "time");return e._adapter._create(i);
    }, getLabelWidth: function getLabelWidth(t) {
      var e = this.options.ticks,
          n = this.ctx.measureText(t).width,
          i = dt.toRadians(e.maxRotation),
          r = Math.cos(i),
          o = Math.sin(i);return n * r + Sn(e.fontSize, st.global.defaultFontSize) * o;
    }, getLabelCapacity: function getLabelCapacity(t) {
      var e = this,
          n = e.tickFormatFunction(t, 0, [], e.options.time.displayFormats.millisecond),
          i = e.getLabelWidth(n),
          r = e.isHorizontal() ? e.width : e.height,
          o = Math.floor(r / i);return o > 0 ? o : 1;
    } });On._defaults = { position: "bottom", distribution: "linear", bounds: "data", adapters: {}, time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } } };var Rn = { category: rn, linear: ln, logarithmic: hn, radialLinear: Mn, time: On },
      Hn = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };Ke._date.override("function" == typeof t ? { _id: "moment", formats: function formats() {
      return Hn;
    }, parse: function parse(e, n) {
      return "string" == typeof e && "string" == typeof n ? e = t(e, n) : e instanceof t || (e = t(e)), e.isValid() ? e.valueOf() : null;
    }, format: function format(e, n) {
      return t(e).format(n);
    }, add: function add(e, n, i) {
      return t(e).add(n, i).valueOf();
    }, diff: function diff(e, n, i) {
      return t.duration(t(e).diff(t(n))).as(i);
    }, startOf: function startOf(e, n, i) {
      return e = t(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf();
    }, endOf: function endOf(e, n) {
      return t(e).endOf(n).valueOf();
    }, _create: function _create(e) {
      return t(e);
    } } : {}), st._set("global", { plugins: { filler: { propagate: !0 } } });var zn = { dataset: function dataset(t) {
      var e = t.fill,
          n = t.chart,
          i = n.getDatasetMeta(e),
          r = i && n.isDatasetVisible(e) && i.dataset._children || [],
          o = r.length || 0;return o ? function (t, e) {
        return e < o && r[e]._view || null;
      } : null;
    }, boundary: function boundary(t) {
      var e = t.boundary,
          n = e ? e.x : null,
          i = e ? e.y : null;return function (t) {
        return { x: null === n ? t.x : n, y: null === i ? t.y : i };
      };
    } };function Bn(t, e, n) {
    var i,
        r = t._model || {},
        o = r.fill;if (void 0 === o && (o = !!r.backgroundColor), !1 === o || null === o) return !1;if (!0 === o) return "origin";if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return "-" !== o[0] && "+" !== o[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;switch (o) {case "bottom":
        return "start";case "top":
        return "end";case "zero":
        return "origin";case "origin":case "start":case "end":
        return o;default:
        return !1;}
  }function jn(t) {
    var e,
        n = t.el._model || {},
        i = t.el._scale || {},
        r = t.fill,
        o = null;if (isFinite(r)) return null;if ("start" === r ? o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === r ? o = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : i.getBasePosition ? o = i.getBasePosition() : i.getBasePixel && (o = i.getBasePixel()), null != o) {
      if (void 0 !== o.x && void 0 !== o.y) return o;if (dt.isFinite(o)) return { x: (e = i.isHorizontal()) ? o : null, y: e ? null : o };
    }return null;
  }function Wn(t, e, n) {
    var i,
        r = t[e].fill,
        o = [e];if (!n) return r;for (; !1 !== r && -1 === o.indexOf(r);) {
      if (!isFinite(r)) return r;if (!(i = t[r])) return !1;if (i.visible) return r;o.push(r), r = i.fill;
    }return !1;
  }function Vn(t) {
    var e = t.fill,
        n = "dataset";return !1 === e ? null : (isFinite(e) || (n = "boundary"), zn[n](t));
  }function qn(t) {
    return t && !t.skip;
  }function $n(t, e, n, i, r) {
    var o;if (i && r) {
      for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o) {
        dt.canvas.lineTo(t, e[o - 1], e[o]);
      }for (t.lineTo(n[r - 1].x, n[r - 1].y), o = r - 1; o > 0; --o) {
        dt.canvas.lineTo(t, n[o], n[o - 1], !0);
      }
    }
  }var Un = { id: "filler", afterDatasetsUpdate: function afterDatasetsUpdate(t, e) {
      var n,
          i,
          r,
          o,
          a = (t.data.datasets || []).length,
          s = e.propagate,
          l = [];for (i = 0; i < a; ++i) {
        o = null, (r = (n = t.getDatasetMeta(i)).dataset) && r._model && r instanceof Ft.Line && (o = { visible: t.isDatasetVisible(i), fill: Bn(r, i, a), chart: t, el: r }), n.$filler = o, l.push(o);
      }for (i = 0; i < a; ++i) {
        (o = l[i]) && (o.fill = Wn(l, i, s), o.boundary = jn(o), o.mapper = Vn(o));
      }
    }, beforeDatasetDraw: function beforeDatasetDraw(t, e) {
      var n = e.meta.$filler;if (n) {
        var i = t.ctx,
            r = n.el,
            o = r._view,
            a = r._children || [],
            s = n.mapper,
            l = o.backgroundColor || st.global.defaultColor;s && l && a.length && (dt.canvas.clipArea(i, t.chartArea), function (t, e, n, i, r, o) {
          var a,
              s,
              l,
              d,
              c,
              u,
              h,
              f = e.length,
              p = i.spanGaps,
              g = [],
              v = [],
              m = 0,
              b = 0;for (t.beginPath(), a = 0, s = f + !!o; a < s; ++a) {
            c = n(d = e[l = a % f]._view, l, i), u = qn(d), h = qn(c), u && h ? (m = g.push(d), b = v.push(c)) : m && b && (p ? (u && g.push(d), h && v.push(c)) : ($n(t, g, v, m, b), m = b = 0, g = [], v = []));
          }$n(t, g, v, m, b), t.closePath(), t.fillStyle = r, t.fill();
        }(i, a, s, o, l, r._loop), dt.canvas.unclipArea(i));
      }
    } },
      Yn = dt.noop,
      Xn = dt.valueOrDefault;function Gn(t, e) {
    return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
  }st._set("global", { legend: { display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function onClick(t, e) {
        var n = e.datasetIndex,
            i = this.chart,
            r = i.getDatasetMeta(n);r.hidden = null === r.hidden ? !i.data.datasets[n].hidden : null, i.update();
      }, onHover: null, onLeave: null, labels: { boxWidth: 40, padding: 10, generateLabels: function generateLabels(t) {
          var e = t.data;return dt.isArray(e.datasets) ? e.datasets.map(function (e, n) {
            return { text: e.label, fillStyle: dt.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor, hidden: !t.isDatasetVisible(n), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, pointStyle: e.pointStyle, datasetIndex: n };
          }, this) : [];
        } } }, legendCallback: function legendCallback(t) {
      var e = [];e.push('<ul class="' + t.id + '-legend">');for (var n = 0; n < t.data.datasets.length; n++) {
        e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
      }return e.push("</ul>"), e.join("");
    } });var Kn = ft.extend({ initialize: function initialize(t) {
      dt.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1;
    }, beforeUpdate: Yn, update: function update(t, e, n) {
      var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
    }, afterUpdate: Yn, beforeSetDimensions: Yn, setDimensions: function setDimensions() {
      var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
    }, afterSetDimensions: Yn, beforeBuildLabels: Yn, buildLabels: function buildLabels() {
      var t = this,
          e = t.options.labels || {},
          n = dt.callback(e.generateLabels, [t.chart], t) || [];e.filter && (n = n.filter(function (n) {
        return e.filter(n, t.chart.data);
      })), t.options.reverse && n.reverse(), t.legendItems = n;
    }, afterBuildLabels: Yn, beforeFit: Yn, fit: function fit() {
      var t = this,
          e = t.options,
          n = e.labels,
          i = e.display,
          r = t.ctx,
          o = dt.options._parseFont(n),
          a = o.size,
          s = t.legendHitBoxes = [],
          l = t.minSize,
          d = t.isHorizontal();if (d ? (l.width = t.maxWidth, l.height = i ? 10 : 0) : (l.width = i ? 10 : 0, l.height = t.maxHeight), i) if (r.font = o.string, d) {
        var c = t.lineWidths = [0],
            u = 0;r.textAlign = "left", r.textBaseline = "top", dt.each(t.legendItems, function (t, e) {
          var i = Gn(n, a) + a / 2 + r.measureText(t.text).width;(0 === e || c[c.length - 1] + i + n.padding > l.width) && (u += a + n.padding, c[c.length - (e > 0 ? 0 : 1)] = n.padding), s[e] = { left: 0, top: 0, width: i, height: a }, c[c.length - 1] += i + n.padding;
        }), l.height += u;
      } else {
        var h = n.padding,
            f = t.columnWidths = [],
            p = n.padding,
            g = 0,
            v = 0,
            m = a + h;dt.each(t.legendItems, function (t, e) {
          var i = Gn(n, a) + a / 2 + r.measureText(t.text).width;e > 0 && v + m > l.height - h && (p += g + n.padding, f.push(g), g = 0, v = 0), g = Math.max(g, i), v += m, s[e] = { left: 0, top: 0, width: i, height: a };
        }), p += g, f.push(g), l.width += p;
      }t.width = l.width, t.height = l.height;
    }, afterFit: Yn, isHorizontal: function isHorizontal() {
      return "top" === this.options.position || "bottom" === this.options.position;
    }, draw: function draw() {
      var t = this,
          e = t.options,
          n = e.labels,
          i = st.global,
          r = i.defaultColor,
          o = i.elements.line,
          a = t.width,
          s = t.lineWidths;if (e.display) {
        var l,
            d = t.ctx,
            c = Xn(n.fontColor, i.defaultFontColor),
            u = dt.options._parseFont(n),
            h = u.size;d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = c, d.fillStyle = c, d.font = u.string;var f = Gn(n, h),
            p = t.legendHitBoxes,
            g = t.isHorizontal();l = g ? { x: t.left + (a - s[0]) / 2 + n.padding, y: t.top + n.padding, line: 0 } : { x: t.left + n.padding, y: t.top + n.padding, line: 0 };var v = h + n.padding;dt.each(t.legendItems, function (i, c) {
          var u = d.measureText(i.text).width,
              m = f + h / 2 + u,
              b = l.x,
              y = l.y;g ? c > 0 && b + m + n.padding > t.left + t.minSize.width && (y = l.y += v, l.line++, b = l.x = t.left + (a - s[l.line]) / 2 + n.padding) : c > 0 && y + v > t.top + t.minSize.height && (b = l.x = b + t.columnWidths[l.line] + n.padding, y = l.y = t.top + n.padding, l.line++), function (t, n, i) {
            if (!(isNaN(f) || f <= 0)) {
              d.save();var a = Xn(i.lineWidth, o.borderWidth);if (d.fillStyle = Xn(i.fillStyle, r), d.lineCap = Xn(i.lineCap, o.borderCapStyle), d.lineDashOffset = Xn(i.lineDashOffset, o.borderDashOffset), d.lineJoin = Xn(i.lineJoin, o.borderJoinStyle), d.lineWidth = a, d.strokeStyle = Xn(i.strokeStyle, r), d.setLineDash && d.setLineDash(Xn(i.lineDash, o.borderDash)), e.labels && e.labels.usePointStyle) {
                var s = f * Math.SQRT2 / 2;dt.canvas.drawPoint(d, i.pointStyle, s, t + f / 2, n + h / 2);
              } else 0 !== a && d.strokeRect(t, n, f, h), d.fillRect(t, n, f, h);d.restore();
            }
          }(b, y, i), p[c].left = b, p[c].top = y, function (t, e, n, i) {
            var r = h / 2,
                o = f + r + b,
                a = y + r;d.fillText(n.text, o, a), n.hidden && (d.beginPath(), d.lineWidth = 2, d.moveTo(o, a), d.lineTo(o + i, a), d.stroke());
          }(0, 0, i, u), g ? l.x += m + n.padding : l.y += v;
        });
      }
    }, _getLegendItemAt: function _getLegendItemAt(t, e) {
      var n,
          i,
          r,
          o = this;if (t >= o.left && t <= o.right && e >= o.top && e <= o.bottom) for (r = o.legendHitBoxes, n = 0; n < r.length; ++n) {
        if (t >= (i = r[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return o.legendItems[n];
      }return null;
    }, handleEvent: function handleEvent(t) {
      var e,
          n = this,
          i = n.options,
          r = "mouseup" === t.type ? "click" : t.type;if ("mousemove" === r) {
        if (!i.onHover && !i.onLeave) return;
      } else {
        if ("click" !== r) return;if (!i.onClick) return;
      }e = n._getLegendItemAt(t.x, t.y), "click" === r ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t.native, e));
    } });function Jn(t, e) {
    var n = new Kn({ ctx: t.ctx, options: e, chart: t });me.configure(t, n, e), me.addBox(t, n), t.legend = n;
  }var Zn = { id: "legend", _element: Kn, beforeInit: function beforeInit(t) {
      var e = t.options.legend;e && Jn(t, e);
    }, beforeUpdate: function beforeUpdate(t) {
      var e = t.options.legend,
          n = t.legend;e ? (dt.mergeIf(e, st.global.legend), n ? (me.configure(t, n, e), n.options = e) : Jn(t, e)) : n && (me.removeBox(t, n), delete t.legend);
    }, afterEvent: function afterEvent(t, e) {
      var n = t.legend;n && n.handleEvent(e);
    } },
      Qn = dt.noop;st._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, padding: 10, position: "top", text: "", weight: 2e3 } });var ti = ft.extend({ initialize: function initialize(t) {
      dt.extend(this, t), this.legendHitBoxes = [];
    }, beforeUpdate: Qn, update: function update(t, e, n) {
      var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
    }, afterUpdate: Qn, beforeSetDimensions: Qn, setDimensions: function setDimensions() {
      var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
    }, afterSetDimensions: Qn, beforeBuildLabels: Qn, buildLabels: Qn, afterBuildLabels: Qn, beforeFit: Qn, fit: function fit() {
      var t = this,
          e = t.options,
          n = e.display,
          i = t.minSize,
          r = dt.isArray(e.text) ? e.text.length : 1,
          o = dt.options._parseFont(e),
          a = n ? r * o.lineHeight + 2 * e.padding : 0;t.isHorizontal() ? (i.width = t.maxWidth, i.height = a) : (i.width = a, i.height = t.maxHeight), t.width = i.width, t.height = i.height;
    }, afterFit: Qn, isHorizontal: function isHorizontal() {
      var t = this.options.position;return "top" === t || "bottom" === t;
    }, draw: function draw() {
      var t = this,
          e = t.ctx,
          n = t.options;if (n.display) {
        var i,
            r,
            o,
            a = dt.options._parseFont(n),
            s = a.lineHeight,
            l = s / 2 + n.padding,
            d = 0,
            c = t.top,
            u = t.left,
            h = t.bottom,
            f = t.right;e.fillStyle = dt.valueOrDefault(n.fontColor, st.global.defaultFontColor), e.font = a.string, t.isHorizontal() ? (r = u + (f - u) / 2, o = c + l, i = f - u) : (r = "left" === n.position ? u + l : f - l, o = c + (h - c) / 2, i = h - c, d = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(r, o), e.rotate(d), e.textAlign = "center", e.textBaseline = "middle";var p = n.text;if (dt.isArray(p)) for (var g = 0, v = 0; v < p.length; ++v) {
          e.fillText(p[v], 0, g, i), g += s;
        } else e.fillText(p, 0, 0, i);e.restore();
      }
    } });function ei(t, e) {
    var n = new ti({ ctx: t.ctx, options: e, chart: t });me.configure(t, n, e), me.addBox(t, n), t.titleBlock = n;
  }var ni = {},
      ii = Un,
      ri = Zn,
      oi = { id: "title", _element: ti, beforeInit: function beforeInit(t) {
      var e = t.options.title;e && ei(t, e);
    }, beforeUpdate: function beforeUpdate(t) {
      var e = t.options.title,
          n = t.titleBlock;e ? (dt.mergeIf(e, st.global.title), n ? (me.configure(t, n, e), n.options = e) : ei(t, e)) : n && (me.removeBox(t, n), delete t.titleBlock);
    } };for (var ai in ni.filler = ii, ni.legend = ri, ni.title = oi, Ye.helpers = dt, function () {
    function t(t, e, n) {
      var i;return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i;
    }function e(t) {
      return null != t && "none" !== t;
    }function n(n, i, r) {
      var o = document.defaultView,
          a = dt._getParentNode(n),
          s = o.getComputedStyle(n)[i],
          l = o.getComputedStyle(a)[i],
          d = e(s),
          c = e(l),
          u = Number.POSITIVE_INFINITY;return d || c ? Math.min(d ? t(s, n, r) : u, c ? t(l, a, r) : u) : "none";
    }dt.where = function (t, e) {
      if (dt.isArray(t) && Array.prototype.filter) return t.filter(e);var n = [];return dt.each(t, function (t) {
        e(t) && n.push(t);
      }), n;
    }, dt.findIndex = Array.prototype.findIndex ? function (t, e, n) {
      return t.findIndex(e, n);
    } : function (t, e, n) {
      n = void 0 === n ? t : n;for (var i = 0, r = t.length; i < r; ++i) {
        if (e.call(n, t[i], i, t)) return i;
      }return -1;
    }, dt.findNextWhere = function (t, e, n) {
      dt.isNullOrUndef(n) && (n = -1);for (var i = n + 1; i < t.length; i++) {
        var r = t[i];if (e(r)) return r;
      }
    }, dt.findPreviousWhere = function (t, e, n) {
      dt.isNullOrUndef(n) && (n = t.length);for (var i = n - 1; i >= 0; i--) {
        var r = t[i];if (e(r)) return r;
      }
    }, dt.isNumber = function (t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }, dt.almostEquals = function (t, e, n) {
      return Math.abs(t - e) < n;
    }, dt.almostWhole = function (t, e) {
      var n = Math.round(t);return n - e < t && n + e > t;
    }, dt.max = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.max(t, e);
      }, Number.NEGATIVE_INFINITY);
    }, dt.min = function (t) {
      return t.reduce(function (t, e) {
        return isNaN(e) ? t : Math.min(t, e);
      }, Number.POSITIVE_INFINITY);
    }, dt.sign = Math.sign ? function (t) {
      return Math.sign(t);
    } : function (t) {
      return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
    }, dt.log10 = Math.log10 ? function (t) {
      return Math.log10(t);
    } : function (t) {
      var e = Math.log(t) * Math.LOG10E,
          n = Math.round(e);return t === Math.pow(10, n) ? n : e;
    }, dt.toRadians = function (t) {
      return t * (Math.PI / 180);
    }, dt.toDegrees = function (t) {
      return t * (180 / Math.PI);
    }, dt._decimalPlaces = function (t) {
      if (dt.isFinite(t)) {
        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) {
          e *= 10, n++;
        }return n;
      }
    }, dt.getAngleFromPoint = function (t, e) {
      var n = e.x - t.x,
          i = e.y - t.y,
          r = Math.sqrt(n * n + i * i),
          o = Math.atan2(i, n);return o < -.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: r };
    }, dt.distanceBetweenPoints = function (t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }, dt.aliasPixel = function (t) {
      return t % 2 == 0 ? 0 : .5;
    }, dt._alignPixel = function (t, e, n) {
      var i = t.currentDevicePixelRatio,
          r = n / 2;return Math.round((e - r) * i) / i + r;
    }, dt.splineCurve = function (t, e, n, i) {
      var r = t.skip ? e : t,
          o = e,
          a = n.skip ? e : n,
          s = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
          l = Math.sqrt(Math.pow(a.x - o.x, 2) + Math.pow(a.y - o.y, 2)),
          d = s / (s + l),
          c = l / (s + l),
          u = i * (d = isNaN(d) ? 0 : d),
          h = i * (c = isNaN(c) ? 0 : c);return { previous: { x: o.x - u * (a.x - r.x), y: o.y - u * (a.y - r.y) }, next: { x: o.x + h * (a.x - r.x), y: o.y + h * (a.y - r.y) } };
    }, dt.EPSILON = Number.EPSILON || 1e-14, dt.splineCurveMonotone = function (t) {
      var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          d,
          c = (t || []).map(function (t) {
        return { model: t._model, deltaK: 0, mK: 0 };
      }),
          u = c.length;for (e = 0; e < u; ++e) {
        if (!(i = c[e]).model.skip) {
          if (n = e > 0 ? c[e - 1] : null, (r = e < u - 1 ? c[e + 1] : null) && !r.model.skip) {
            var h = r.model.x - i.model.x;i.deltaK = 0 !== h ? (r.model.y - i.model.y) / h : 0;
          }i.mK = !n || n.model.skip ? i.deltaK : !r || r.model.skip ? n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? 0 : (n.deltaK + i.deltaK) / 2;
        }
      }for (e = 0; e < u - 1; ++e) {
        r = c[e + 1], (i = c[e]).model.skip || r.model.skip || (dt.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = r.mK = 0 : (o = i.mK / i.deltaK, a = r.mK / i.deltaK, (l = Math.pow(o, 2) + Math.pow(a, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = o * s * i.deltaK, r.mK = a * s * i.deltaK)));
      }for (e = 0; e < u; ++e) {
        (i = c[e]).model.skip || (n = e > 0 ? c[e - 1] : null, r = e < u - 1 ? c[e + 1] : null, n && !n.model.skip && (i.model.controlPointPreviousX = i.model.x - (d = (i.model.x - n.model.x) / 3), i.model.controlPointPreviousY = i.model.y - d * i.mK), r && !r.model.skip && (i.model.controlPointNextX = i.model.x + (d = (r.model.x - i.model.x) / 3), i.model.controlPointNextY = i.model.y + d * i.mK));
      }
    }, dt.nextItem = function (t, e, n) {
      return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
    }, dt.previousItem = function (t, e, n) {
      return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
    }, dt.niceNum = function (t, e) {
      var n = Math.floor(dt.log10(t)),
          i = t / Math.pow(10, n);return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n);
    }, dt.requestAnimFrame = "undefined" == typeof window ? function (t) {
      t();
    } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      return window.setTimeout(t, 1e3 / 60);
    }, dt.getRelativePosition = function (t, e) {
      var n,
          i,
          r = t.originalEvent || t,
          o = t.target || t.srcElement,
          a = o.getBoundingClientRect(),
          s = r.touches;s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = r.clientX, i = r.clientY);var l = parseFloat(dt.getStyle(o, "padding-left")),
          d = parseFloat(dt.getStyle(o, "padding-top")),
          c = parseFloat(dt.getStyle(o, "padding-right")),
          u = parseFloat(dt.getStyle(o, "padding-bottom")),
          h = a.bottom - a.top - d - u;return { x: n = Math.round((n - a.left - l) / (a.right - a.left - l - c) * o.width / e.currentDevicePixelRatio), y: i = Math.round((i - a.top - d) / h * o.height / e.currentDevicePixelRatio) };
    }, dt.getConstraintWidth = function (t) {
      return n(t, "max-width", "clientWidth");
    }, dt.getConstraintHeight = function (t) {
      return n(t, "max-height", "clientHeight");
    }, dt._calculatePadding = function (t, e, n) {
      return (e = dt.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10);
    }, dt._getParentNode = function (t) {
      var e = t.parentNode;return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
    }, dt.getMaximumWidth = function (t) {
      var e = dt._getParentNode(t);if (!e) return t.clientWidth;var n = e.clientWidth,
          i = n - dt._calculatePadding(e, "padding-left", n) - dt._calculatePadding(e, "padding-right", n),
          r = dt.getConstraintWidth(t);return isNaN(r) ? i : Math.min(i, r);
    }, dt.getMaximumHeight = function (t) {
      var e = dt._getParentNode(t);if (!e) return t.clientHeight;var n = e.clientHeight,
          i = n - dt._calculatePadding(e, "padding-top", n) - dt._calculatePadding(e, "padding-bottom", n),
          r = dt.getConstraintHeight(t);return isNaN(r) ? i : Math.min(i, r);
    }, dt.getStyle = function (t, e) {
      return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
    }, dt.retinaScale = function (t, e) {
      var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;if (1 !== n) {
        var i = t.canvas,
            r = t.height,
            o = t.width;i.height = r * n, i.width = o * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = r + "px", i.style.width = o + "px");
      }
    }, dt.fontString = function (t, e, n) {
      return e + " " + t + "px " + n;
    }, dt.longestText = function (t, e, n, i) {
      var r = (i = i || {}).data = i.data || {},
          o = i.garbageCollect = i.garbageCollect || [];i.font !== e && (r = i.data = {}, o = i.garbageCollect = [], i.font = e), t.font = e;var a = 0;dt.each(n, function (e) {
        null != e && !0 !== dt.isArray(e) ? a = dt.measureText(t, r, o, a, e) : dt.isArray(e) && dt.each(e, function (e) {
          null == e || dt.isArray(e) || (a = dt.measureText(t, r, o, a, e));
        });
      });var s = o.length / 2;if (s > n.length) {
        for (var l = 0; l < s; l++) {
          delete r[o[l]];
        }o.splice(0, s);
      }return a;
    }, dt.measureText = function (t, e, n, i, r) {
      var o = e[r];return o || (o = e[r] = t.measureText(r).width, n.push(r)), o > i && (i = o), i;
    }, dt.numberOfLabelLines = function (t) {
      var e = 1;return dt.each(t, function (t) {
        dt.isArray(t) && t.length > e && (e = t.length);
      }), e;
    }, dt.color = Y ? function (t) {
      return t instanceof CanvasGradient && (t = st.global.defaultColor), Y(t);
    } : function (t) {
      return console.error("Color.js not found!"), t;
    }, dt.getHoverColor = function (t) {
      return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : dt.color(t).saturate(.5).darken(.1).rgbString();
    };
  }(), Ye._adapters = Ke, Ye.Animation = gt, Ye.animationService = vt, Ye.controllers = oe, Ye.DatasetController = wt, Ye.defaults = st, Ye.Element = ft, Ye.elements = Ft, Ye.Interaction = he, Ye.layouts = me, Ye.platform = Ee, Ye.plugins = Le, Ye.Scale = nn, Ye.scaleService = Pe, Ye.Ticks = Je, Ye.Tooltip = je, Ye.helpers.each(Rn, function (t, e) {
    Ye.scaleService.registerScaleType(e, t, t._defaults);
  }), ni) {
    ni.hasOwnProperty(ai) && Ye.plugins.register(ni[ai]);
  }Ye.platform.initialize();var si = Ye;return "undefined" != typeof window && (window.Chart = Ye), Ye.Chart = Ye, Ye.Legend = ni.legend._element, Ye.Title = ni.title._element, Ye.pluginService = Ye.plugins, Ye.PluginBase = Ye.Element.extend({}), Ye.canvasHelpers = Ye.helpers.canvas, Ye.layoutService = Ye.layouts, Ye.LinearScaleBase = an, Ye.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], function (t) {
    Ye[t] = function (e, n) {
      return new Ye(e, Ye.helpers.merge(n || {}, { type: t.charAt(0).toLowerCase() + t.slice(1) }));
    };
  }), si;
}), function (t) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? t(require("jquery"), window, document) : t(jQuery, window, document);
}(function (t, e, n, i) {
  var r = function r(e, n) {
    this.$chartContainer = t(e), this.opts = n, this.defaultOptions = { nodeTitle: "name", nodeId: "id", toggleSiblingsResp: !1, visibleLevel: 999, chartClass: "", exportButton: !1, exportFilename: "OrgChart", exportFileextension: "png", parentNodeSymbol: "fa-users", draggable: !1, direction: "t2b", pan: !1, zoom: !1, zoominLimit: 7, zoomoutLimit: .5 };
  };r.prototype = { init: function init(e) {
      var n = this;this.options = t.extend({}, this.defaultOptions, this.opts, e);var i = this.$chartContainer;this.$chart && this.$chart.remove();var r = this.options.data,
          o = this.$chart = t("<div>", { data: { options: this.options }, class: "orgchart" + ("" !== this.options.chartClass ? " " + this.options.chartClass : "") + ("t2b" !== this.options.direction ? " " + this.options.direction : ""), click: function click(e) {
          t(e.target).closest(".node").length || o.find(".node.focused").removeClass("focused");
        } });return "undefined" != typeof MutationObserver && this.triggerInitEvent(), "object" === t.type(r) ? r instanceof t ? this.buildHierarchy(o, this.buildJsonDS(r.children()), 0, this.options) : this.buildHierarchy(o, this.options.ajaxURL ? r : this.attachRel(r, "00")) : (o.append('<i class="fa fa-circle-o-notch fa-spin spinner"></i>'), t.ajax({ url: r, dataType: "json" }).done(function (t, e, i) {
        n.buildHierarchy(o, n.options.ajaxURL ? t : n.attachRel(t, "00"), 0, n.options);
      }).fail(function (t, e, n) {
        console.log(n);
      }).always(function () {
        o.children(".spinner").remove();
      })), i.append(o), this.options.exportButton && !i.find(".oc-export-btn").length && this.attachExportButton(), this.options.pan && this.bindPan(), this.options.zoom && this.bindZoom(), this;
    }, triggerInitEvent: function triggerInitEvent() {
      var e = this,
          n = new MutationObserver(function (i) {
        n.disconnect();t: for (var r = 0; r < i.length; r++) {
          for (var o = 0; o < i[r].addedNodes.length; o++) {
            if (i[r].addedNodes[o].classList.contains("orgchart") && e.options.initCompleted && "function" == typeof e.options.initCompleted) {
              e.options.initCompleted(e.$chart);var a = t.Event("init.orgchart");e.$chart.trigger(a);break t;
            }
          }
        }
      });n.observe(this.$chartContainer[0], { childList: !0 });
    }, attachExportButton: function attachExportButton() {
      var e = this,
          n = t("<button>", { class: "oc-export-btn" + ("" !== this.options.chartClass ? " " + this.options.chartClass : ""), text: "Export", click: function click(t) {
          t.preventDefault(), e.export();
        } });this.$chartContainer.append(n);
    }, setOptions: function setOptions(t, e) {
      return "string" == typeof t && ("pan" === t && (e ? this.bindPan() : this.unbindPan()), "zoom" === t && (e ? this.bindZoom() : this.unbindZoom())), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (t.data ? this.init(t) : ("undefined" != typeof t.pan && (t.pan ? this.bindPan() : this.unbindPan()), "undefined" != typeof t.zoom && (t.zoom ? this.bindZoom() : this.unbindZoom()))), this;
    }, panStartHandler: function panStartHandler(e) {
      var n = t(e.delegateTarget);if (t(e.target).closest(".node").length || e.touches && e.touches.length > 1) n.data("panning", !1);else {
        n.css("cursor", "move").data("panning", !0);var i = 0,
            r = 0,
            o = n.css("transform");if ("none" !== o) {
          var a = o.split(",");-1 === o.indexOf("3d") ? (i = parseInt(a[4]), r = parseInt(a[5])) : (i = parseInt(a[12]), r = parseInt(a[13]));
        }var s = 0,
            l = 0;if (e.targetTouches) {
          if (1 === e.targetTouches.length) s = e.targetTouches[0].pageX - i, l = e.targetTouches[0].pageY - r;else if (e.targetTouches.length > 1) return;
        } else s = e.pageX - i, l = e.pageY - r;n.on("mousemove touchmove", function (t) {
          if (n.data("panning")) {
            var e = 0,
                i = 0;if (t.targetTouches) {
              if (1 === t.targetTouches.length) e = t.targetTouches[0].pageX - s, i = t.targetTouches[0].pageY - l;else if (t.targetTouches.length > 1) return;
            } else e = t.pageX - s, i = t.pageY - l;var r = n.css("transform");if ("none" === r) -1 === r.indexOf("3d") ? n.css("transform", "matrix(1, 0, 0, 1, " + e + ", " + i + ")") : n.css("transform", "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + e + ", " + i + ", 0, 1)");else {
              var o = r.split(",");-1 === r.indexOf("3d") ? (o[4] = " " + e, o[5] = " " + i + ")") : (o[12] = " " + e, o[13] = " " + i), n.css("transform", o.join(","));
            }
          }
        });
      }
    }, panEndHandler: function panEndHandler(t) {
      t.data.chart.data("panning") && t.data.chart.data("panning", !1).css("cursor", "default").off("mousemove");
    }, bindPan: function bindPan() {
      this.$chartContainer.css("overflow", "hidden"), this.$chart.on("mousedown touchstart", this.panStartHandler), t(n).on("mouseup touchend", { chart: this.$chart }, this.panEndHandler);
    }, unbindPan: function unbindPan() {
      this.$chartContainer.css("overflow", "auto"), this.$chart.off("mousedown touchstart", this.panStartHandler), t(n).off("mouseup touchend", this.panEndHandler);
    }, zoomWheelHandler: function zoomWheelHandler(t) {
      var e = t.data.oc;t.preventDefault(), e.setChartScale(e.$chart, 1 + (t.originalEvent.deltaY > 0 ? -.2 : .2));
    }, zoomStartHandler: function zoomStartHandler(t) {
      if (t.touches && 2 === t.touches.length) {
        var e = t.data.oc;e.$chart.data("pinching", !0);var n = e.getPinchDist(t);e.$chart.data("pinchDistStart", n);
      }
    }, zoomingHandler: function zoomingHandler(t) {
      var e = t.data.oc;if (e.$chart.data("pinching")) {
        var n = e.getPinchDist(t);e.$chart.data("pinchDistEnd", n);
      }
    }, zoomEndHandler: function zoomEndHandler(t) {
      var e = t.data.oc;if (e.$chart.data("pinching")) {
        e.$chart.data("pinching", !1);var n = e.$chart.data("pinchDistEnd") - e.$chart.data("pinchDistStart");n > 0 ? e.setChartScale(e.$chart, 1.2) : n < 0 && e.setChartScale(e.$chart, .8);
      }
    }, bindZoom: function bindZoom() {
      this.$chartContainer.on("wheel", { oc: this }, this.zoomWheelHandler), this.$chartContainer.on("touchstart", { oc: this }, this.zoomStartHandler), t(n).on("touchmove", { oc: this }, this.zoomingHandler), t(n).on("touchend", { oc: this }, this.zoomEndHandler);
    }, unbindZoom: function unbindZoom() {
      this.$chartContainer.off("wheel", this.zoomWheelHandler), this.$chartContainer.off("touchstart", this.zoomStartHandler), t(n).off("touchmove", this.zoomingHandler), t(n).off("touchend", this.zoomEndHandler);
    }, getPinchDist: function getPinchDist(t) {
      return Math.sqrt((t.touches[0].clientX - t.touches[1].clientX) * (t.touches[0].clientX - t.touches[1].clientX) + (t.touches[0].clientY - t.touches[1].clientY) * (t.touches[0].clientY - t.touches[1].clientY));
    }, setChartScale: function setChartScale(t, n) {
      var i = t.data("options"),
          r = t.css("transform"),
          o = "",
          a = 1;"none" === r ? t.css("transform", "scale(" + n + "," + n + ")") : (o = r.split(","), -1 === r.indexOf("3d") ? (a = Math.abs(e.parseFloat(o[3]) * n)) > i.zoomoutLimit && a < i.zoominLimit && t.css("transform", r + " scale(" + n + "," + n + ")") : (a = Math.abs(e.parseFloat(o[1]) * n)) > i.zoomoutLimit && a < i.zoominLimit && t.css("transform", r + " scale3d(" + n + "," + n + ", 1)"));
    }, buildJsonDS: function buildJsonDS(e) {
      var n = this,
          i = { name: e.contents().eq(0).text().trim(), relationship: (e.parent().parent().is("li") ? "1" : "0") + (e.siblings("li").length ? 1 : 0) + (e.children("ul").length ? 1 : 0) };return t.each(e.data(), function (t, e) {
        i[t] = e;
      }), e.children("ul").children().each(function () {
        i.children || (i.children = []), i.children.push(n.buildJsonDS(t(this)));
      }), i;
    }, attachRel: function attachRel(t, e) {
      var n = this;return t.relationship = e + (t.children && t.children.length > 0 ? 1 : 0), t.children && t.children.forEach(function (e) {
        n.attachRel(e, "1" + (t.children.length > 1 ? 1 : 0));
      }), t;
    }, loopChart: function loopChart(e) {
      var n = this,
          i = e.find("tr:first"),
          r = { id: i.find(".node")[0].id };return i.siblings(":last").children().each(function () {
        r.children || (r.children = []), r.children.push(n.loopChart(t(this)));
      }), r;
    }, getHierarchy: function getHierarchy() {
      if ("undefined" == typeof this.$chart) return "Error: orgchart does not exist";if (!this.$chart.find(".node").length) return "Error: nodes do not exist";var t = !0;return this.$chart.find(".node").each(function () {
        if (!this.id) return t = !1, !1;
      }), t ? this.loopChart(this.$chart) : "Error: All nodes of orghcart to be exported must have data-id attribute!";
    }, getNodeState: function getNodeState(t, e) {
      var n = {};if ("parent" === (e = e || "self")) {
        if ((n = t.closest(".nodes").siblings(":first")).length) return n.is(".hidden") || !n.is(".hidden") && n.closest(".nodes").is(".hidden") ? { exist: !0, visible: !1 } : { exist: !0, visible: !0 };
      } else if ("children" === e) {
        if ((n = t.closest("tr").siblings(":last")).length) return n.is(".hidden") ? { exist: !0, visible: !1 } : { exist: !0, visible: !0 };
      } else if ("siblings" === e) {
        if ((n = t.closest("table").parent().siblings()).length) return n.is(".hidden") || n.parent().is(".hidden") ? { exist: !0, visible: !1 } : { exist: !0, visible: !0 };
      } else if ((n = t).length) return n.closest(".nodes").length && n.closest(".nodes").is(".hidden") || n.closest("table").parent().length && n.closest("table").parent().is(".hidden") || n.parent().is("li") && (n.closest("ul").is(".hidden") || n.closest("verticalNodes").is(".hidden")) ? { exist: !0, visible: !1 } : { exist: !0, visible: !0 };return { exist: !1, visible: !1 };
    }, getRelatedNodes: function getRelatedNodes(e, n) {
      return e && e instanceof t && e.is(".node") ? "parent" === n ? e.closest(".nodes").parent().children(":first").find(".node") : "children" === n ? e.closest("tr").siblings(".nodes").children().find(".node:first") : "siblings" === n ? e.closest("table").parent().siblings().find(".node:first") : t() : t();
    }, hideParentEnd: function hideParentEnd(e) {
      t(e.target).removeClass("sliding"), e.data.upperLevel.addClass("hidden").slice(1).removeAttr("style");
    }, hideParent: function hideParent(t) {
      var e = t.closest(".nodes").siblings();e.eq(0).find(".spinner").length && t.closest(".orgchart").data("inAjax", !1), this.getNodeState(t, "siblings").visible && this.hideSiblings(t), e.slice(1).css("visibility", "hidden");var n = e.eq(0).find(".node");this.getNodeState(n).visible && n.addClass("sliding slide-down").one("transitionend", { upperLevel: e }, this.hideParentEnd), this.getNodeState(n, "parent").visible && this.hideParent(n);
    }, showParentEnd: function showParentEnd(e) {
      var n = e.data.node;t(e.target).removeClass("sliding"), this.isInAction(n) && this.switchVerticalArrow(n.children(".topEdge"));
    }, showParent: function showParent(t) {
      var e = t.closest(".nodes").siblings().removeClass("hidden");e.eq(2).children().slice(1, -1).addClass("hidden");var n = e.eq(0).find(".node");this.repaint(n[0]), n.addClass("sliding").removeClass("slide-down").one("transitionend", { node: t }, this.showParentEnd.bind(this));
    }, stopAjax: function stopAjax(t) {
      t.find(".spinner").length && t.closest(".orgchart").data("inAjax", !1);
    }, isVisibleNode: function isVisibleNode(e, n) {
      return this.getNodeState(t(n)).visible;
    }, hideChildrenEnd: function hideChildrenEnd(t) {
      var e = t.data.node;t.data.animatedNodes.removeClass("sliding"), t.data.isVerticalDesc ? t.data.lowerLevel.addClass("hidden") : (t.data.animatedNodes.closest(".nodes").prevAll(".lines").removeAttr("style").addBack().addClass("hidden"), t.data.lowerLevel.last().find(".verticalNodes").addClass("hidden")), this.isInAction(e) && this.switchVerticalArrow(e.children(".bottomEdge"));
    }, hideChildren: function hideChildren(t) {
      var e = t.closest("tr").siblings();this.stopAjax(e.last());var n = e.last().find(".node").filter(this.isVisibleNode.bind(this)),
          i = !!e.last().is(".verticalNodes");i || n.closest("table").closest("tr").prevAll(".lines").css("visibility", "hidden"), this.repaint(n.get(0)), n.addClass("sliding slide-up").eq(0).one("transitionend", { animatedNodes: n, lowerLevel: e, isVerticalDesc: i, node: t }, this.hideChildrenEnd.bind(this));
    }, showChildrenEnd: function showChildrenEnd(t) {
      var e = t.data.node;t.data.animatedNodes.removeClass("sliding"), this.isInAction(e) && this.switchVerticalArrow(e.children(".bottomEdge"));
    }, showChildren: function showChildren(t) {
      var e = t.closest("tr").siblings(),
          n = e.is(".verticalNodes") ? e.removeClass("hidden").find(".node").filter(this.isVisibleNode.bind(this)) : e.removeClass("hidden").eq(2).children().find(".node:first").filter(this.isVisibleNode.bind(this));this.repaint(n.get(0)), n.addClass("sliding").removeClass("slide-up").eq(0).one("transitionend", { node: t, animatedNodes: n }, this.showChildrenEnd.bind(this));
    }, hideSiblingsEnd: function hideSiblingsEnd(t) {
      var e = t.data.node,
          n = t.data.nodeContainer,
          i = t.data.direction;t.data.lines.removeAttr("style");var r = i ? "left" === i ? n.prevAll(":not(.hidden)") : n.nextAll(":not(.hidden)") : n.siblings();n.closest(".nodes").prev().children(":not(.hidden)").slice(1, i ? 2 * r.length + 1 : -1).addClass("hidden"), t.data.animatedNodes.removeClass("sliding"), r.find(".node:gt(0)").filter(this.isVisibleNode.bind(this)).removeClass("slide-left slide-right").addClass("slide-up"), r.find(".lines, .nodes, .verticalNodes").addClass("hidden").end().addClass("hidden"), this.isInAction(e) && this.switchHorizontalArrow(e);
    }, hideSiblings: function hideSiblings(t, e) {
      var n = t.closest("table").parent();n.siblings().find(".spinner").length && t.closest(".orgchart").data("inAjax", !1), e ? "left" === e ? n.prevAll().find(".node").filter(this.isVisibleNode.bind(this)).addClass("sliding slide-right") : n.nextAll().find(".node").filter(this.isVisibleNode.bind(this)).addClass("sliding slide-left") : (n.prevAll().find(".node").filter(this.isVisibleNode.bind(this)).addClass("sliding slide-right"), n.nextAll().find(".node").filter(this.isVisibleNode.bind(this)).addClass("sliding slide-left"));var i = n.siblings().find(".sliding"),
          r = i.closest(".nodes").prevAll(".lines").css("visibility", "hidden");i.eq(0).one("transitionend", { node: t, nodeContainer: n, direction: e, animatedNodes: i, lines: r }, this.hideSiblingsEnd.bind(this));
    }, showSiblingsEnd: function showSiblingsEnd(t) {
      var e = t.data.node;t.data.visibleNodes.removeClass("sliding"), this.isInAction(e) && (this.switchHorizontalArrow(e), e.children(".topEdge").removeClass("fa-chevron-up").addClass("fa-chevron-down"));
    }, showRelatedParentEnd: function showRelatedParentEnd(e) {
      t(e.target).removeClass("sliding");
    }, showSiblings: function showSiblings(e, n) {
      var i = t();i = n ? "left" === n ? e.closest("table").parent().prevAll().removeClass("hidden") : e.closest("table").parent().nextAll().removeClass("hidden") : e.closest("table").parent().siblings().removeClass("hidden");var r = e.closest("table").closest("tr").siblings();if (n ? r.eq(2).children(".hidden").slice(0, 2 * i.length).removeClass("hidden") : r.eq(2).children(".hidden").removeClass("hidden"), !this.getNodeState(e, "parent").visible) {
        r.removeClass("hidden");var o = r.find(".node")[0];this.repaint(o), t(o).addClass("sliding").removeClass("slide-down").one("transitionend", this.showRelatedParentEnd);
      }var a = i.find(".node").filter(this.isVisibleNode.bind(this));this.repaint(a.get(0)), a.addClass("sliding").removeClass("slide-left slide-right"), a.eq(0).one("transitionend", { node: e, visibleNodes: a }, this.showSiblingsEnd.bind(this));
    }, startLoading: function startLoading(e) {
      var n = this.$chart;return ("undefined" == typeof n.data("inAjax") || !0 !== n.data("inAjax")) && (e.addClass("hidden"), e.parent().append('<i class="fa fa-circle-o-notch fa-spin spinner"></i>').children().not(".spinner").css("opacity", .2), n.data("inAjax", !0), t(".oc-export-btn" + ("" !== this.options.chartClass ? "." + this.options.chartClass : "")).prop("disabled", !0), !0);
    }, endLoading: function endLoading(e) {
      var n = e.parent();e.removeClass("hidden"), n.find(".spinner").remove(), n.children().removeAttr("style"), this.$chart.data("inAjax", !1), t(".oc-export-btn" + ("" !== this.options.chartClass ? "." + this.options.chartClass : "")).prop("disabled", !1);
    }, isInAction: function isInAction(t) {
      return t.children(".edge").attr("class").indexOf("fa-") > -1;
    }, switchVerticalArrow: function switchVerticalArrow(t) {
      t.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
    }, switchHorizontalArrow: function switchHorizontalArrow(t) {
      var e = this.options;if (e.toggleSiblingsResp && ("undefined" == typeof e.ajaxURL || t.closest(".nodes").data("siblingsLoaded"))) {
        var n = t.closest("table").parent().prev();n.length && (n.is(".hidden") ? t.children(".leftEdge").addClass("fa-chevron-left").removeClass("fa-chevron-right") : t.children(".leftEdge").addClass("fa-chevron-right").removeClass("fa-chevron-left"));var i = t.closest("table").parent().next();i.length && (i.is(".hidden") ? t.children(".rightEdge").addClass("fa-chevron-right").removeClass("fa-chevron-left") : t.children(".rightEdge").addClass("fa-chevron-left").removeClass("fa-chevron-right"));
      } else {
        var r = t.closest("table").parent().siblings(),
            o = !!r.length && !r.is(".hidden");t.children(".leftEdge").toggleClass("fa-chevron-right", o).toggleClass("fa-chevron-left", !o), t.children(".rightEdge").toggleClass("fa-chevron-left", o).toggleClass("fa-chevron-right", !o);
      }
    }, repaint: function repaint(t) {
      t && (t.style.offsetWidth = t.offsetWidth);
    }, nodeEnterLeaveHandler: function nodeEnterLeaveHandler(e) {
      var n = t(e.delegateTarget),
          i = !1,
          r = n.children(".topEdge"),
          o = (n.children(".rightEdge"), n.children(".bottomEdge")),
          a = n.children(".leftEdge");"mouseenter" === e.type ? (r.length && (i = this.getNodeState(n, "parent").visible, r.toggleClass("fa-chevron-up", !i).toggleClass("fa-chevron-down", i)), o.length && (i = this.getNodeState(n, "children").visible, o.toggleClass("fa-chevron-down", !i).toggleClass("fa-chevron-up", i)), a.length && this.switchHorizontalArrow(n)) : n.children(".edge").removeClass("fa-chevron-up fa-chevron-down fa-chevron-right fa-chevron-left");
    }, nodeClickHandler: function nodeClickHandler(e) {
      this.$chart.find(".focused").removeClass("focused"), t(e.delegateTarget).addClass("focused");
    }, loadNodes: function loadNodes(e, n, i) {
      var r = this;t.ajax({ url: n, dataType: "json", headers: { "x-auth-token": localStorage.getItem("x-auth-token") } }).done(function (n) {
        r.$chart.data("inAjax") && ("parent" === e ? t.isEmptyObject(n) || r.addParent(i.parent(), n) : "children" === e ? n.children.length && r.addChildren(i.parent(), n[e]) : r.addSiblings(i.parent(), n.siblings ? n.siblings : n));
      }).fail(function () {
        console.log("Failed to get " + e + " data");
      }).always(function () {
        r.endLoading(i);
      });
    }, HideFirstParentEnd: function HideFirstParentEnd(t) {
      var e = t.data.topEdge,
          n = e.parent();this.isInAction(n) && (this.switchVerticalArrow(e), this.switchHorizontalArrow(n));
    }, topEdgeClickHandler: function topEdgeClickHandler(e) {
      e.stopPropagation();var n = t(e.target),
          i = t(e.delegateTarget),
          r = this.getNodeState(i, "parent");if (r.exist) {
        var o = i.closest("table").closest("tr").siblings(":first").find(".node");if (o.is(".sliding")) return;r.visible ? (this.hideParent(i), o.one("transitionend", { topEdge: n }, this.HideFirstParentEnd.bind(this))) : this.showParent(i);
      } else if (this.startLoading(n)) {
        var a = this.options,
            s = t.isFunction(a.ajaxURL.parent) ? a.ajaxURL.parent(i.data("nodeData")) : a.ajaxURL.parent + i[0].id;this.loadNodes("parent", s, n);
      }
    }, bottomEdgeClickHandler: function bottomEdgeClickHandler(e) {
      e.stopPropagation();var n = t(e.target),
          i = t(e.delegateTarget),
          r = this.getNodeState(i, "children");if (r.exist) {
        if (i.closest("tr").siblings(":last").find(".sliding").length) return;r.visible ? this.hideChildren(i) : this.showChildren(i);
      } else if (this.startLoading(n)) {
        var o = this.options,
            a = t.isFunction(o.ajaxURL.children) ? o.ajaxURL.children(i.data("nodeData")) : o.ajaxURL.children + i[0].id;this.loadNodes("children", a, n);
      }
    }, hEdgeClickHandler: function hEdgeClickHandler(e) {
      e.stopPropagation();var n = t(e.target),
          i = t(e.delegateTarget),
          r = this.options,
          o = this.getNodeState(i, "siblings");if (o.exist) {
        if (i.closest("table").parent().siblings().find(".sliding").length) return;if (r.toggleSiblingsResp) {
          var a = i.closest("table").parent().prev(),
              s = i.closest("table").parent().next();n.is(".leftEdge") ? a.is(".hidden") ? this.showSiblings(i, "left") : this.hideSiblings(i, "left") : s.is(".hidden") ? this.showSiblings(i, "right") : this.hideSiblings(i, "right");
        } else o.visible ? this.hideSiblings(i) : this.showSiblings(i);
      } else if (this.startLoading(n)) {
        var l = i[0].id,
            d = this.getNodeState(i, "parent").exist ? t.isFunction(r.ajaxURL.siblings) ? r.ajaxURL.siblings(i.data("nodeData")) : r.ajaxURL.siblings + l : t.isFunction(r.ajaxURL.families) ? r.ajaxURL.families(i.data("nodeData")) : r.ajaxURL.families + l;this.loadNodes("siblings", d, n);
      }
    }, expandVNodesEnd: function expandVNodesEnd(t) {
      t.data.vNodes.removeClass("sliding");
    }, collapseVNodesEnd: function collapseVNodesEnd(t) {
      t.data.vNodes.removeClass("sliding").closest("ul").addClass("hidden");
    }, toggleVNodes: function toggleVNodes(e) {
      var n = t(e.target),
          i = n.parent().next(),
          r = i.find(".node"),
          o = i.children().children(".node");o.is(".sliding") || (n.toggleClass("fa-plus-square fa-minus-square"), r.eq(0).is(".slide-up") ? (i.removeClass("hidden"), this.repaint(o.get(0)), o.addClass("sliding").removeClass("slide-up").eq(0).one("transitionend", { vNodes: o }, this.expandVNodesEnd)) : (r.addClass("sliding slide-up").eq(0).one("transitionend", { vNodes: r }, this.collapseVNodesEnd), r.find(".toggleBtn").removeClass("fa-minus-square").addClass("fa-plus-square")));
    }, createGhostNode: function createGhostNode(i) {
      var r,
          o,
          a = t(i.target),
          s = this.options,
          l = i.originalEvent,
          d = /firefox/.test(e.navigator.userAgent.toLowerCase());n.querySelector(".ghost-node") ? (r = a.closest(".orgchart").children(".ghost-node").get(0), o = t(r).children().get(0)) : ((r = n.createElementNS("http://www.w3.org/2000/svg", "svg")).classList.add("ghost-node"), o = n.createElementNS("http://www.w3.org/2000/svg", "rect"), r.appendChild(o), a.closest(".orgchart").append(r));var c = a.closest(".orgchart").css("transform").split(","),
          u = "t2b" === s.direction || "b2t" === s.direction,
          h = Math.abs(e.parseFloat(u ? c[0].slice(c[0].indexOf("(") + 1) : c[1]));r.setAttribute("width", u ? a.outerWidth(!1) : a.outerHeight(!1)), r.setAttribute("height", u ? a.outerHeight(!1) : a.outerWidth(!1)), o.setAttribute("x", 5 * h), o.setAttribute("y", 5 * h), o.setAttribute("width", 120 * h), o.setAttribute("height", 40 * h), o.setAttribute("rx", 4 * h), o.setAttribute("ry", 4 * h), o.setAttribute("stroke-width", 1 * h);var f = l.offsetX * h,
          p = l.offsetY * h;if ("l2r" === s.direction ? (f = l.offsetY * h, p = l.offsetX * h) : "r2l" === s.direction ? (f = a.outerWidth(!1) - l.offsetY * h, p = l.offsetX * h) : "b2t" === s.direction && (f = a.outerWidth(!1) - l.offsetX * h, p = a.outerHeight(!1) - l.offsetY * h), d) {
        o.setAttribute("fill", "rgb(255, 255, 255)"), o.setAttribute("stroke", "rgb(191, 0, 0)");var g = n.createElement("img");g.src = "data:image/svg+xml;utf8," + new XMLSerializer().serializeToString(r), l.dataTransfer.setDragImage(g, f, p);
      } else l.dataTransfer.setDragImage(r, f, p);
    }, filterAllowedDropNodes: function filterAllowedDropNodes(e) {
      var n = this.options,
          i = e.closest(".nodes").siblings().eq(0).find(".node:first"),
          r = e.closest("table").find(".node");this.$chart.data("dragged", e).find(".node").each(function (o, a) {
        -1 === r.index(a) && (n.dropCriteria ? n.dropCriteria(e, i, t(a)) && t(a).addClass("allowedDrop") : t(a).addClass("allowedDrop"));
      });
    }, dragstartHandler: function dragstartHandler(e) {
      e.originalEvent.dataTransfer.setData("text/html", "hack for firefox"), "none" !== this.$chart.css("transform") && this.createGhostNode(e), this.filterAllowedDropNodes(t(e.target));
    }, dragoverHandler: function dragoverHandler(e) {
      e.preventDefault(), t(e.delegateTarget).is(".allowedDrop") || (e.originalEvent.dataTransfer.dropEffect = "none");
    }, dragendHandler: function dragendHandler(t) {
      this.$chart.find(".allowedDrop").removeClass("allowedDrop");
    }, dropHandler: function dropHandler(e) {
      var n = t(e.delegateTarget),
          i = this.$chart.data("dragged"),
          r = i.closest(".nodes").siblings().eq(0).children(),
          o = t.Event("nodedrop.orgchart");if (this.$chart.trigger(o, { draggedNode: i, dragZone: r.children(), dropZone: n }), !o.isDefaultPrevented()) {
        if (n.closest("tr").siblings().length) {
          var a = parseInt(n.parent().attr("colspan")) + 2,
              s = '<i class="edge horizontalEdge rightEdge fa"></i><i class="edge horizontalEdge leftEdge fa"></i>';n.closest("tr").next().addBack().children().attr("colspan", a), i.find(".horizontalEdge").length || i.append(s), n.closest("tr").siblings().eq(1).children(":last").before('<td class="leftLine topLine"></td><td class="rightLine topLine"></td>').end().next().append(i.closest("table").parent());var l = i.closest("table").parent().siblings().find(".node:first");1 === l.length && l.append(s);
        } else n.append('<i class="edge verticalEdge bottomEdge fa"></i>').parent().attr("colspan", 2).parent().after('<tr class="lines"><td colspan="2"><div class="downLine"></div></td></tr><tr class="lines"><td class="rightLine"></td><td class="leftLine"></td></tr><tr class="nodes"></tr>').siblings(":last").append(i.find(".horizontalEdge").remove().end().closest("table").parent());var d = parseInt(r.attr("colspan"));if (d > 2) {
          r.attr("colspan", d - 2).parent().next().children().attr("colspan", d - 2).end().next().children().slice(1, 3).remove();var c = r.parent().siblings(".nodes").children().find(".node:first");1 === c.length && c.find(".horizontalEdge").remove();
        } else r.removeAttr("colspan").find(".bottomEdge").remove().end().end().siblings().remove();
      }
    }, touchstartHandler: function touchstartHandler(t) {
      console.log("orgChart: touchstart 1: touchHandled=" + this.touchHandled + ", touchMoved=" + this.touchMoved + ", target=" + t.target.innerText), this.touchHandled || (this.touchHandled = !0, this.touchMoved = !1, t.preventDefault());
    }, touchmoveHandler: function touchmoveHandler(e) {
      if (this.touchHandled) {
        e.preventDefault(), this.touchMoved || (t(this).hasClass("focused"), console.log("orgChart: touchmove 1: " + e.touches.length + " touches, we have not moved, so simulate a drag start", e.touches), this.simulateMouseEvent(e, "dragstart")), this.touchMoved = !0;var i = t(n.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)).closest("div.node");if (i.length > 0) {
          var r = i[0];i.is(".allowedDrop") ? (console.log("orgChart: touchmove 2: this node (" + r.id + ") is allowed to be a drop target"), this.touchTargetNode = r) : (console.log("orgChart: touchmove 3: this node (" + r.id + ") is NOT allowed to be a drop target"), this.touchTargetNode = null);
        } else console.log("orgchart: touchmove 4: not touching a node"), this.touchTargetNode = null;
      }
    }, touchendHandler: function touchendHandler(t) {
      console.log("orgChart: touchend 1: touchHandled=" + this.touchHandled + ", touchMoved=" + this.touchMoved + ", " + t.target.innerText + " "), this.touchHandled ? (this.touchMoved ? (this.touchTargetNode && (console.log("orgChart: touchend 3: moved to a node, so simulating drop"), this.dropHandler({ delegateTarget: this.touchTargetNode }), this.touchTargetNode = null), console.log("orgChart: touchend 4: simulating dragend"), this.simulateMouseEvent(t, "dragend")) : (console.log("orgChart: touchend 5: moved, so simulating click"), this.simulateMouseEvent(t, "click")), this.touchHandled = !1) : console.log("orgChart: touchend 2: not handled by us, so aborting");
    }, simulateMouseEvent: function simulateMouseEvent(t, i) {
      if (!(t.originalEvent.touches.length > 1)) {
        var r = t.originalEvent.changedTouches[0],
            o = n.createEvent("MouseEvents");o.initMouseEvent(i, !0, !0, e, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(o);
      }
    }, bindDragDrop: function bindDragDrop(t) {
      t.on("dragstart", this.dragstartHandler.bind(this)).on("dragover", this.dragoverHandler.bind(this)).on("dragend", this.dragendHandler.bind(this)).on("drop", this.dropHandler.bind(this)).on("touchstart", this.touchstartHandler.bind(this)).on("touchmove", this.touchmoveHandler.bind(this)).on("touchend", this.touchendHandler.bind(this));
    }, createNode: function createNode(e) {
      var n = this.options,
          i = e.level;e.children && t.each(e.children, function (t, n) {
        n.parentId = e.id;
      });var r = t("<div" + (n.draggable ? ' draggable="true"' : "") + (e[n.nodeId] ? ' id="' + e[n.nodeId] + '"' : "") + (e.parentId ? ' data-parent="' + e.parentId + '"' : "") + ">").addClass("node " + (e.className || "") + (i > n.visibleLevel ? " slide-up" : ""));n.nodeTemplate ? r.append(n.nodeTemplate(e)) : r.append('<div class="title">' + e[n.nodeTitle] + "</div>").append("undefined" != typeof n.nodeContent ? '<div class="content">' + (e[n.nodeContent] || "") + "</div>" : "");var o = t.extend({}, e);delete o.children, r.data("nodeData", o);var a = e.relationship || "";return n.verticalLevel && i >= n.verticalLevel ? i + 1 > n.verticalLevel && Number(a.substr(2, 1)) && r.append('<i class="toggleBtn fa fa-' + (i + 1 > n.visibleLevel ? "plus" : "minus") + '-square"></i>') : (Number(a.substr(0, 1)) && r.append('<i class="edge verticalEdge topEdge fa"></i>'), Number(a.substr(1, 1)) && r.append('<i class="edge horizontalEdge rightEdge fa"></i><i class="edge horizontalEdge leftEdge fa"></i>'), Number(a.substr(2, 1)) && r.append('<i class="edge verticalEdge bottomEdge fa"></i>').children(".title").prepend('<i class="fa ' + n.parentNodeSymbol + ' symbol"></i>')), r.on("mouseenter mouseleave", this.nodeEnterLeaveHandler.bind(this)), r.on("click", this.nodeClickHandler.bind(this)), r.on("click", ".topEdge", this.topEdgeClickHandler.bind(this)), r.on("click", ".bottomEdge", this.bottomEdgeClickHandler.bind(this)), r.on("click", ".leftEdge, .rightEdge", this.hEdgeClickHandler.bind(this)), r.on("click", ".toggleBtn", this.toggleVNodes.bind(this)), n.draggable && (this.bindDragDrop(r), this.touchHandled = !1, this.touchMoved = !1, this.touchTargetNode = null), n.createNode && n.createNode(r, e), r;
    }, buildHierarchy: function buildHierarchy(e, n) {
      var i,
          r = this,
          o = this.options;i = n.level ? n.level : n.level = e.parentsUntil(".orgchart", ".nodes").length + 1;var a,
          s = n.children,
          l = !!s && s.length;if (Object.keys(n).length > 2) {
        var d = this.createNode(n);o.verticalLevel && i >= o.verticalLevel ? e.append(d) : (a = t("<table>"), e.append(a.append(t("<tr/>").append(t("<td" + (l ? ' colspan="' + 2 * s.length + '"' : "") + "></td>").append(d)))));
      }if (l) {
        var c,
            u = i + 1 > o.visibleLevel || n.collapsed ? " hidden" : "",
            h = !!(o.verticalLevel && i + 1 >= o.verticalLevel);if (h) c = t("<ul>"), u && i + 1 > o.verticalLevel && c.addClass(u), i + 1 === o.verticalLevel ? e.children("table").append('<tr class="verticalNodes' + u + '"><td></td></tr>').find(".verticalNodes").children().append(c) : e.append(c);else {
          for (var f = t('<tr class="lines' + u + '"><td colspan="' + 2 * s.length + '"><div class="downLine"></div></td></tr>'), p = '<tr class="lines' + u + '"><td class="rightLine"></td>', g = 1; g < s.length; g++) {
            p += '<td class="leftLine topLine"></td><td class="rightLine topLine"></td>';
          }p += '<td class="leftLine"></td></tr>', c = t('<tr class="nodes' + u + '">'), 2 === Object.keys(n).length ? e.append(f).append(p).append(c) : a.append(f).append(p).append(c);
        }t.each(s, function () {
          var e = t(h ? "<li>" : '<td colspan="2">');c.append(e), this.level = i + 1, r.buildHierarchy(e, this);
        });
      }
    }, buildChildNode: function buildChildNode(t, e) {
      t.find("td:first").attr("colspan", 2 * e.length), this.buildHierarchy(t, { children: e });
    }, addChildren: function addChildren(t, e) {
      this.buildChildNode(t.closest("table"), e), t.children(".bottomEdge").length || t.append('<i class="edge verticalEdge bottomEdge fa"></i>'), t.find(".symbol").length || t.children(".title").prepend('<i class="fa ' + this.options.parentNodeSymbol + ' symbol"></i>'), this.isInAction(t) && this.switchVerticalArrow(t.children(".bottomEdge"));
    }, buildParentNode: function buildParentNode(e, n) {
      n.relationship = n.relationship || "001";var i = t("<table>").append(t("<tr>").append(t('<td colspan="2">').append(this.createNode(n)))).append('<tr class="lines"><td colspan="2"><div class="downLine"></div></td></tr>').append('<tr class="lines"><td class="rightLine"></td><td class="leftLine"></td></tr>');this.$chart.prepend(i).children("table:first").append('<tr class="nodes"><td colspan="2"></td></tr>').children("tr:last").children().append(this.$chart.children("table").last());
    }, addParent: function addParent(t, e) {
      this.buildParentNode(t, e), t.children(".topEdge").length || t.children(".title").after('<i class="edge verticalEdge topEdge fa"></i>'), this.isInAction(t) && this.switchVerticalArrow(t.children(".topEdge"));
    }, complementLine: function complementLine(t, e, n) {
      for (var i = "", r = 0; r < n; r++) {
        i += '<td class="leftLine topLine"></td><td class="rightLine topLine"></td>';
      }t.parent().prevAll("tr:gt(0)").children().attr("colspan", 2 * e).end().next().children(":first").after(i);
    }, buildSiblingNode: function buildSiblingNode(e, n) {
      var i = t.isArray(n) ? n.length : n.children.length,
          r = e.parent().is("td") ? e.closest("tr").children().length : 1,
          o = r + i,
          a = o > 1 ? Math.floor(o / 2 - 1) : 0;if (e.parent().is("td")) {
        e.closest("tr").prevAll("tr:last"), e.closest("tr").prevAll("tr:lt(2)").remove(), this.buildChildNode(e.parent().closest("table"), n);var s = e.parent().closest("table").children("tr:last").children("td");r > 1 ? this.complementLine(s.eq(0).before(e.closest("td").siblings().addBack().unwrap()), o, r) : this.complementLine(s.eq(a).after(e.closest("td").unwrap()), o, 1);
      } else this.buildHierarchy(e.closest(".orgchart"), n), this.complementLine(e.next().children("tr:last").children().eq(a).after(t('<td colspan="2">').append(e)), o, 1);
    }, addSiblings: function addSiblings(t, e) {
      this.buildSiblingNode(t.closest("table"), e), t.closest(".nodes").data("siblingsLoaded", !0), t.children(".leftEdge").length || t.children(".topEdge").after('<i class="edge horizontalEdge rightEdge fa"></i><i class="edge horizontalEdge leftEdge fa"></i>'), this.isInAction(t) && (this.switchHorizontalArrow(t), t.children(".topEdge").removeClass("fa-chevron-up").addClass("fa-chevron-down"));
    }, removeNodes: function removeNodes(t) {
      var e = t.closest("table").parent(),
          n = e.parent().siblings();e.is("td") ? this.getNodeState(t, "siblings").exist ? (n.eq(2).children(".topLine:lt(2)").remove(), n.slice(0, 2).children().attr("colspan", n.eq(2).children().length), e.remove()) : n.eq(0).children().removeAttr("colspan").find(".bottomEdge").remove().end().end().siblings().remove() : e.add(e.siblings()).remove();
    }, export: function _export(i, r) {
      var o = this;if (i = "undefined" != typeof i ? i : this.options.exportFilename, r = "undefined" != typeof r ? r : this.options.exportFileextension, t(this).children(".spinner").length) return !1;var a = this.$chartContainer,
          s = a.find(".mask");s.length ? s.removeClass("hidden") : a.append('<div class="mask"><i class="fa fa-circle-o-notch fa-spin spinner"></i></div>');var l = a.addClass("canvasContainer").find('.orgchart:not(".hidden")').get(0),
          d = "l2r" === o.options.direction || "r2l" === o.options.direction;html2canvas(l, { width: d ? l.clientHeight : l.clientWidth, height: d ? l.clientWidth : l.clientHeight, onclone: function onclone(e) {
          t(e).find(".canvasContainer").css("overflow", "visible").find('.orgchart:not(".hidden"):first').css("transform", "");
        }, onrendered: function onrendered(t) {
          if (a.find(".mask").addClass("hidden"), "pdf" === r.toLowerCase()) {
            var s = {},
                l = Math.floor(.2646 * t.width),
                d = Math.floor(.2646 * t.height);(s = l > d ? new jsPDF("l", "mm", [l, d]) : new jsPDF("p", "mm", [d, l])).addImage(t.toDataURL(), "png", 0, 0), s.save(i + ".pdf");
          } else {
            var c = "WebkitAppearance" in n.documentElement.style,
                u = !!e.sidebar,
                h = "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && navigator.appVersion.indexOf("Edge") > -1;if (!c && !u || h) e.navigator.msSaveBlob(t.msToBlob(), i + ".png");else {
              var f = ".oc-download-btn" + ("" !== o.options.chartClass ? "." + o.options.chartClass : "");a.find(f).length || a.append('<a class="oc-download-btn' + ("" !== o.options.chartClass ? " " + o.options.chartClass : "") + '" download="' + i + '.png"></a>'), a.find(f).attr("href", t.toDataURL())[0].click();
            }
          }
        } }).then(function () {
        a.removeClass("canvasContainer");
      }, function () {
        a.removeClass("canvasContainer");
      });
    } }, t.fn.orgchart = function (t) {
    return new r(this, t).init();
  };
});