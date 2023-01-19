(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode("*{margin:0;padding:0;box-sizing:border-box}body{height:100vh}.video-container{width:20rem;height:540px;position:fixed;bottom:10px;right:10px;border-radius:10px}.video-container-box{width:100%;height:100%;position:relative}.video-container video{width:100%;height:100%;object-fit:cover;border-radius:10px;box-shadow:-10px 4px 65px #0000001a}.overlay-thing{position:absolute;bottom:0;width:100%;padding:1rem;padding-bottom:0}.overlay-thing button{display:block;width:100%;padding:5px 15px;border-radius:20px;margin-bottom:5px;background-color:#fff;color:#000;cursor:pointer;font-size:12px}a{color:inherit;text-decoration:none}")),document.head.appendChild(o)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
var V, c, le, A, Q, M = {}, re = [], ge = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function x(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ae(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ke(e, t, n) {
  var i, s, o, r = {};
  for (o in t)
    o == "key" ? i = t[o] : o == "ref" ? s = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? V.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return N(e, r, i, s, null);
}
function N(e, t, n, i, s) {
  var o = { type: e, props: t, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: s ?? ++le };
  return s == null && c.vnode != null && c.vnode(o), o;
}
function q(e) {
  return e.children;
}
function $(e, t) {
  this.props = e, this.context = t;
}
function P(e, t) {
  if (t == null)
    return e.__ ? P(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? P(e) : null;
}
function ce(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ce(e);
  }
}
function z(e) {
  (!e.__d && (e.__d = !0) && A.push(e) && !O.__r++ || Q !== c.debounceRendering) && ((Q = c.debounceRendering) || setTimeout)(O);
}
function O() {
  for (var e; O.__r = A.length; )
    e = A.sort(function(t, n) {
      return t.__v.__b - n.__v.__b;
    }), A = [], e.some(function(t) {
      var n, i, s, o, r, f;
      t.__d && (r = (o = (n = t).__v).__e, (f = n.__P) && (i = [], (s = x({}, o)).__v = o.__v + 1, X(f, o, s, n.__n, f.ownerSVGElement !== void 0, o.__h != null ? [r] : null, i, r ?? P(o), o.__h), pe(i, o), o.__e != r && ce(o)));
    });
}
function fe(e, t, n, i, s, o, r, f, d, p) {
  var _, h, u, l, a, b, v, m = i && i.__k || re, k = m.length;
  for (n.__k = [], _ = 0; _ < t.length; _++)
    if ((l = n.__k[_] = (l = t[_]) == null || typeof l == "boolean" ? null : typeof l == "string" || typeof l == "number" || typeof l == "bigint" ? N(null, l, null, null, l) : Array.isArray(l) ? N(q, { children: l }, null, null, null) : l.__b > 0 ? N(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : l) != null) {
      if (l.__ = n, l.__b = n.__b + 1, (u = m[_]) === null || u && l.key == u.key && l.type === u.type)
        m[_] = void 0;
      else
        for (h = 0; h < k; h++) {
          if ((u = m[h]) && l.key == u.key && l.type === u.type) {
            m[h] = void 0;
            break;
          }
          u = null;
        }
      X(e, l, u = u || M, s, o, r, f, d, p), a = l.__e, (h = l.ref) && u.ref != h && (v || (v = []), u.ref && v.push(u.ref, null, l), v.push(h, l.__c || a, l)), a != null ? (b == null && (b = a), typeof l.type == "function" && l.__k === u.__k ? l.__d = d = ue(l, d, e) : d = de(e, l, u, m, a, d), typeof n.type == "function" && (n.__d = d)) : d && u.__e == d && d.parentNode != e && (d = P(u));
    }
  for (n.__e = b, _ = k; _--; )
    m[_] != null && ve(m[_], m[_]);
  if (v)
    for (_ = 0; _ < v.length; _++)
      he(v[_], v[++_], v[++_]);
}
function ue(e, t, n) {
  for (var i, s = e.__k, o = 0; s && o < s.length; o++)
    (i = s[o]) && (i.__ = e, t = typeof i.type == "function" ? ue(i, t, n) : de(n, i, i, s, i.__e, t));
  return t;
}
function de(e, t, n, i, s, o) {
  var r, f, d;
  if (t.__d !== void 0)
    r = t.__d, t.__d = void 0;
  else if (n == null || s != o || s.parentNode == null)
    e:
      if (o == null || o.parentNode !== e)
        e.appendChild(s), r = null;
      else {
        for (f = o, d = 0; (f = f.nextSibling) && d < i.length; d += 1)
          if (f == s)
            break e;
        e.insertBefore(s, o), r = o;
      }
  return r !== void 0 ? r : s.nextSibling;
}
function we(e, t, n, i, s) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || B(e, o, null, n[o], i);
  for (o in t)
    s && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || B(e, o, t[o], n[o], i);
}
function J(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || ge.test(t) ? n : n + "px";
}
function B(e, t, n, i, s) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof i == "string" && (e.style.cssText = i = ""), i)
          for (t in i)
            n && t in n || J(e.style, t, "");
        if (n)
          for (t in n)
            i && n[t] === i[t] || J(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? i || e.addEventListener(t, o ? Z : Y, o) : e.removeEventListener(t, o ? Z : Y, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (s)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Y(e) {
  this.l[e.type + !1](c.event ? c.event(e) : e);
}
function Z(e) {
  this.l[e.type + !0](c.event ? c.event(e) : e);
}
function X(e, t, n, i, s, o, r, f, d) {
  var p, _, h, u, l, a, b, v, m, k, E, H, G, U, T, g = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (d = n.__h, f = t.__e = n.__e, t.__h = null, o = [f]), (p = c.__b) && p(t);
  try {
    e:
      if (typeof g == "function") {
        if (v = t.props, m = (p = g.contextType) && i[p.__c], k = p ? m ? m.props.value : p.__ : i, n.__c ? b = (_ = t.__c = n.__c).__ = _.__E : ("prototype" in g && g.prototype.render ? t.__c = _ = new g(v, k) : (t.__c = _ = new $(v, k), _.constructor = g, _.render = Se), m && m.sub(_), _.props = v, _.state || (_.state = {}), _.context = k, _.__n = i, h = _.__d = !0, _.__h = [], _._sb = []), _.__s == null && (_.__s = _.state), g.getDerivedStateFromProps != null && (_.__s == _.state && (_.__s = x({}, _.__s)), x(_.__s, g.getDerivedStateFromProps(v, _.__s))), u = _.props, l = _.state, h)
          g.getDerivedStateFromProps == null && _.componentWillMount != null && _.componentWillMount(), _.componentDidMount != null && _.__h.push(_.componentDidMount);
        else {
          if (g.getDerivedStateFromProps == null && v !== u && _.componentWillReceiveProps != null && _.componentWillReceiveProps(v, k), !_.__e && _.shouldComponentUpdate != null && _.shouldComponentUpdate(v, _.__s, k) === !1 || t.__v === n.__v) {
            for (_.props = v, _.state = _.__s, t.__v !== n.__v && (_.__d = !1), _.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(C) {
              C && (C.__ = t);
            }), E = 0; E < _._sb.length; E++)
              _.__h.push(_._sb[E]);
            _._sb = [], _.__h.length && r.push(_);
            break e;
          }
          _.componentWillUpdate != null && _.componentWillUpdate(v, _.__s, k), _.componentDidUpdate != null && _.__h.push(function() {
            _.componentDidUpdate(u, l, a);
          });
        }
        if (_.context = k, _.props = v, _.__v = t, _.__P = e, H = c.__r, G = 0, "prototype" in g && g.prototype.render) {
          for (_.state = _.__s, _.__d = !1, H && H(t), p = _.render(_.props, _.state, _.context), U = 0; U < _._sb.length; U++)
            _.__h.push(_._sb[U]);
          _._sb = [];
        } else
          do
            _.__d = !1, H && H(t), p = _.render(_.props, _.state, _.context), _.state = _.__s;
          while (_.__d && ++G < 25);
        _.state = _.__s, _.getChildContext != null && (i = x(x({}, i), _.getChildContext())), h || _.getSnapshotBeforeUpdate == null || (a = _.getSnapshotBeforeUpdate(u, l)), T = p != null && p.type === q && p.key == null ? p.props.children : p, fe(e, Array.isArray(T) ? T : [T], t, n, i, s, o, r, f, d), _.base = t.__e, t.__h = null, _.__h.length && r.push(_), b && (_.__E = _.__ = null), _.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xe(n.__e, t, n, i, s, o, r, d);
    (p = c.diffed) && p(t);
  } catch (C) {
    t.__v = null, (d || o != null) && (t.__e = f, t.__h = !!d, o[o.indexOf(f)] = null), c.__e(C, t, n);
  }
}
function pe(e, t) {
  c.__c && c.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(i) {
        i.call(n);
      });
    } catch (i) {
      c.__e(i, n.__v);
    }
  });
}
function xe(e, t, n, i, s, o, r, f) {
  var d, p, _, h = n.props, u = t.props, l = t.type, a = 0;
  if (l === "svg" && (s = !0), o != null) {
    for (; a < o.length; a++)
      if ((d = o[a]) && "setAttribute" in d == !!l && (l ? d.localName === l : d.nodeType === 3)) {
        e = d, o[a] = null;
        break;
      }
  }
  if (e == null) {
    if (l === null)
      return document.createTextNode(u);
    e = s ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l, u.is && u), o = null, f = !1;
  }
  if (l === null)
    h === u || f && e.data === u || (e.data = u);
  else {
    if (o = o && V.call(e.childNodes), p = (h = n.props || M).dangerouslySetInnerHTML, _ = u.dangerouslySetInnerHTML, !f) {
      if (o != null)
        for (h = {}, a = 0; a < e.attributes.length; a++)
          h[e.attributes[a].name] = e.attributes[a].value;
      (_ || p) && (_ && (p && _.__html == p.__html || _.__html === e.innerHTML) || (e.innerHTML = _ && _.__html || ""));
    }
    if (we(e, u, h, s, f), _)
      t.__k = [];
    else if (a = t.props.children, fe(e, Array.isArray(a) ? a : [a], t, n, i, s && l !== "foreignObject", o, r, o ? o[0] : n.__k && P(n, 0), f), o != null)
      for (a = o.length; a--; )
        o[a] != null && ae(o[a]);
    f || ("value" in u && (a = u.value) !== void 0 && (a !== e.value || l === "progress" && !a || l === "option" && a !== h.value) && B(e, "value", a, h.value, !1), "checked" in u && (a = u.checked) !== void 0 && a !== e.checked && B(e, "checked", a, h.checked, !1));
  }
  return e;
}
function he(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (i) {
    c.__e(i, n);
  }
}
function ve(e, t, n) {
  var i, s;
  if (c.unmount && c.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || he(i, null, t)), (i = e.__c) != null) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (o) {
        c.__e(o, t);
      }
    i.base = i.__P = null, e.__c = void 0;
  }
  if (i = e.__k)
    for (s = 0; s < i.length; s++)
      i[s] && ve(i[s], t, n || typeof e.type != "function");
  n || e.__e == null || ae(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Se(e, t, n) {
  return this.constructor(e, n);
}
function He(e, t, n) {
  var i, s, o;
  c.__ && c.__(e, t), s = (i = typeof n == "function") ? null : n && n.__k || t.__k, o = [], X(t, e = (!i && n || t).__k = ke(q, null, [e]), s || M, M, t.ownerSVGElement !== void 0, !i && n ? [n] : s ? null : t.firstChild ? V.call(t.childNodes) : null, o, !i && n ? n : s ? s.__e : t.firstChild, i), pe(o, e);
}
V = re.slice, c = { __e: function(e, t, n, i) {
  for (var s, o, r; t = t.__; )
    if ((s = t.__c) && !s.__)
      try {
        if ((o = s.constructor) && o.getDerivedStateFromError != null && (s.setState(o.getDerivedStateFromError(e)), r = s.__d), s.componentDidCatch != null && (s.componentDidCatch(e, i || {}), r = s.__d), r)
          return s.__E = s;
      } catch (f) {
        e = f;
      }
  throw e;
} }, le = 0, $.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = x({}, this.state), typeof e == "function" && (e = e(x({}, n), this.props)), e && x(n, e), e != null && this.__v && (t && this._sb.push(t), z(this));
}, $.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), z(this));
}, $.prototype.render = q, A = [], O.__r = 0;
var K, y, W, ee, F = 0, ye = [], D = [], te = c.__b, ne = c.__r, _e = c.diffed, oe = c.__c, ie = c.unmount;
function j(e, t) {
  c.__h && c.__h(y, e, F || t), F = 0;
  var n = y.__H || (y.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: D }), n.__[e];
}
function S(e) {
  return F = 1, Ae(be, e);
}
function Ae(e, t, n) {
  var i = j(K++, 2);
  if (i.t = e, !i.__c && (i.__ = [n ? n(t) : be(void 0, t), function(o) {
    var r = i.__N ? i.__N[0] : i.__[0], f = i.t(r, o);
    r !== f && (i.__N = [f, i.__[1]], i.__c.setState({}));
  }], i.__c = y, !y.u)) {
    y.u = !0;
    var s = y.shouldComponentUpdate;
    y.shouldComponentUpdate = function(o, r, f) {
      if (!i.__c.__H)
        return !0;
      var d = i.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (d.every(function(_) {
        return !_.__N;
      }))
        return !s || s.call(this, o, r, f);
      var p = !1;
      return d.forEach(function(_) {
        if (_.__N) {
          var h = _.__[0];
          _.__ = _.__N, _.__N = void 0, h !== _.__[0] && (p = !0);
        }
      }), !(!p && i.__c.props === o) && (!s || s.call(this, o, r, f));
    };
  }
  return i.__N || i.__;
}
function Pe(e, t) {
  var n = j(K++, 3);
  !c.__s && me(n.__H, t) && (n.__ = e, n.i = t, y.__H.__h.push(n));
}
function Ee(e) {
  return F = 5, Ue(function() {
    return { current: e };
  }, []);
}
function Ue(e, t) {
  var n = j(K++, 7);
  return me(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function Te() {
  for (var e; e = ye.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(L), e.__H.__h.forEach(R), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], c.__e(t, e.__v);
      }
}
c.__b = function(e) {
  y = null, te && te(e);
}, c.__r = function(e) {
  ne && ne(e), K = 0;
  var t = (y = e.__c).__H;
  t && (W === y ? (t.__h = [], y.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = D, n.__N = n.i = void 0;
  })) : (t.__h.forEach(L), t.__h.forEach(R), t.__h = [])), W = y;
}, c.diffed = function(e) {
  _e && _e(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (ye.push(t) !== 1 && ee === c.requestAnimationFrame || ((ee = c.requestAnimationFrame) || Ce)(Te)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== D && (n.__ = n.__V), n.i = void 0, n.__V = D;
  })), W = y = null;
}, c.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(L), n.__h = n.__h.filter(function(i) {
        return !i.__ || R(i);
      });
    } catch (i) {
      t.some(function(s) {
        s.__h && (s.__h = []);
      }), t = [], c.__e(i, n.__v);
    }
  }), oe && oe(e, t);
}, c.unmount = function(e) {
  ie && ie(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(i) {
    try {
      L(i);
    } catch (s) {
      t = s;
    }
  }), n.__H = void 0, t && c.__e(t, n.__v));
};
var se = typeof requestAnimationFrame == "function";
function Ce(e) {
  var t, n = function() {
    clearTimeout(i), se && cancelAnimationFrame(t), setTimeout(e);
  }, i = setTimeout(n, 100);
  se && (t = requestAnimationFrame(n));
}
function L(e) {
  var t = y, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), y = t;
}
function R(e) {
  var t = y;
  e.__c = e.__(), y = t;
}
function me(e, t) {
  return !e || e.length !== t.length || t.some(function(n, i) {
    return n !== e[i];
  });
}
function be(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const Ne = "bottomRight", $e = "s", De = "Hi from our CEO", Le = [
  {
    question: "Introduction",
    answerTime: 2,
    answers: [
      {
        next: "SH7v0",
        disabled: null,
        text: "What is the Fiona story?",
        type: "",
        value: "",
        key: "jqYFs"
      },
      {
        next: "ylP0i",
        disabled: null,
        text: "What are Moissanites?",
        type: "",
        value: "",
        key: "jXoa-"
      },
      {
        next: "EVKKQ",
        disabled: null,
        text: "Explain Lab Grown Diamonds",
        type: "",
        value: "",
        key: "msssm"
      },
      {
        next: "PXJHA",
        disabled: null,
        text: "Our Best Sellers",
        type: "",
        value: "https://www.fionadiamonds.com/pages/about-us",
        key: "DT0o2"
      }
    ],
    stockAsset: {
      gifUrl: "https://videos.gotolstoy.com/public/eff85e45-47af-4375-9df9-2502e107cf4f/d7c22462-93db-407f-b6ba-f2d03f97d825/d7c22462-93db-407f-b6ba-f2d03f97d825.mp4.gif",
      videoUrl: "https://cdn.shopify.com/s/files/1/0595/5069/5587/t/42/assets/d7c22462-93db-407f-b6ba-f2d03f97d825.mp4?v=1672920911"
    },
    key: "OiSum"
  },
  {
    question: "The Fiona Story",
    answerTime: 2,
    answers: [
      {
        next: "EVKKQ",
        disabled: null,
        text: "Explain Lab Grown Diamonds",
        type: "",
        value: "",
        key: "XRUvM"
      },
      {
        next: "ylP0i",
        disabled: null,
        text: "What are Moissanites?",
        type: "",
        value: "",
        key: "PwsMX"
      },
      {
        next: "PXJHA",
        disabled: null,
        text: "Our Best Sellers",
        type: "",
        value: "",
        key: "q5b3o"
      },
      {
        next: "url",
        disabled: null,
        text: "About Us",
        type: "",
        value: "https://www.fionadiamonds.com/pages/about-us",
        key: "3L9l_"
      }
    ],
    stockAsset: {
      gifUrl: "https://videos.gotolstoy.com/public/eff85e45-47af-4375-9df9-2502e107cf4f/e9e999f3-acdc-425e-92d8-75b849b209c4/e9e999f3-acdc-425e-92d8-75b849b209c4.mp4.gif",
      videoUrl: "https://cdn.shopify.com/s/files/1/0595/5069/5587/t/42/assets/e9e999f3-acdc-425e-92d8-75b849b209c4.mp4?v=1672920991"
    },
    key: "SH7v0"
  },
  {
    question: "What are Moissanites?",
    answerTime: 2,
    answers: [
      {
        next: "SH7v0",
        disabled: null,
        text: "What is the Fiona story?",
        type: "",
        value: "",
        key: "HyZwY"
      },
      {
        next: "EVKKQ",
        disabled: null,
        text: "Explain Lab Grown Diamonds",
        type: "",
        value: "",
        key: "_77Nx"
      },
      {
        next: "url",
        disabled: null,
        text: "Shop Moissanite Rings",
        type: "",
        value: "https://www.fionadiamonds.com/collections/moissanite-rings",
        key: "A0BSw"
      },
      {
        next: "url",
        disabled: null,
        text: "Know more about Moissanites",
        type: "",
        value: "https://www.fionadiamonds.com/pages/know-about-moissanites",
        key: "A5Oxu"
      }
    ],
    stockAsset: {
      gifUrl: "https://videos.gotolstoy.com/public/eff85e45-47af-4375-9df9-2502e107cf4f/3031f5ae-04ee-4fe5-8c12-ed5de9c56ced/3031f5ae-04ee-4fe5-8c12-ed5de9c56ced.mp4.gif",
      videoUrl: "https://cdn.shopify.com/s/files/1/0595/5069/5587/t/42/assets/3031f5ae-04ee-4fe5-8c12-ed5de9c56ced.mp4?v=1672921119"
    },
    key: "ylP0i"
  },
  {
    question: "Our Best Sellers",
    answerTime: 2,
    answers: [
      {
        next: "url",
        disabled: null,
        text: "Shop Engagement Rings",
        type: "",
        value: "https://www.fionadiamonds.com/collections/lab-diamond-rings",
        key: "D0dvc"
      },
      {
        next: "EVKKQ",
        disabled: null,
        text: "Explain Lab Grown Diamonds",
        type: "",
        value: "",
        key: "4TC_4"
      },
      {
        next: "ylP0i",
        disabled: null,
        text: "What are Moissanites?",
        type: "",
        value: "",
        key: "aLTe0"
      },
      {
        next: "SH7v0",
        disabled: null,
        text: "What is the Fiona story?",
        type: "",
        value: "https://www.fionadiamonds.com/collections/solitaire-engagement-rings",
        key: "Aiw1K"
      }
    ],
    stockAsset: {
      gifUrl: "https://videos.gotolstoy.com/public/eff85e45-47af-4375-9df9-2502e107cf4f/c10953cc-e82b-4a07-9e9f-a6f748ff158a/c10953cc-e82b-4a07-9e9f-a6f748ff158a.mp4.gif",
      videoUrl: "https://cdn.shopify.com/s/files/1/0595/5069/5587/t/42/assets/c10953cc-e82b-4a07-9e9f-a6f748ff158a.mp4?v=1672921177",
      hasOriginal: !0
    },
    key: "PXJHA"
  },
  {
    question: "Buyback Policy",
    answerTime: 2,
    answers: [
      {
        next: "url",
        disabled: null,
        text: "Read our Buyback Policy",
        type: "",
        value: "https://www.fionadiamonds.com/pages/return-policy",
        key: "U_qiO"
      }
    ],
    stockAsset: {
      gifUrl: "https://videos.gotolstoy.com/public/eff85e45-47af-4375-9df9-2502e107cf4f/cb62f03d-e15e-41bb-9c7e-024406c4e059/cb62f03d-e15e-41bb-9c7e-024406c4e059.mp4.gif",
      videoUrl: "https://cdn.shopify.com/s/files/1/0595/5069/5587/t/42/assets/cb62f03d-e15e-41bb-9c7e-024406c4e059.mp4?v=1672921227"
    },
    key: "pMIGX"
  },
  {
    question: "Price Comparision",
    answerTime: 2,
    answers: [
      {
        next: "url",
        disabled: null,
        text: "Shop Lab Diamond Rings ",
        type: "",
        value: "https://www.fionadiamonds.com/collections/lab-diamond-rings",
        key: "0t1fA"
      }
    ],
    stockAsset: {
      gifUrl: "https://videos.gotolstoy.com/public/eff85e45-47af-4375-9df9-2502e107cf4f/5763fee9-85df-44e0-9090-e4ecd82eb49d/5763fee9-85df-44e0-9090-e4ecd82eb49d.mp4.gif",
      videoUrl: "https://cdn.shopify.com/s/files/1/0595/5069/5587/t/42/assets/5763fee9-85df-44e0-9090-e4ecd82eb49d.mp4?v=1672921605"
    },
    key: "YOyhP"
  },
  {
    question: "LGD",
    answerTime: 2,
    answers: [
      {
        next: "YOyhP",
        disabled: null,
        text: "Price: Lab Diamonds VS Natural",
        type: "",
        value: "",
        key: "D04wg"
      },
      {
        next: "SH7v0",
        disabled: null,
        text: "What is the Fiona story?",
        type: "",
        value: "",
        key: "bbZYX"
      },
      {
        next: "pMIGX",
        disabled: null,
        text: "Our Buyback Policy",
        type: "",
        value: "",
        key: "K9hBJ"
      },
      {
        next: "PXJHA",
        disabled: null,
        text: "Our Best Sellers",
        type: "",
        value: "",
        key: "rQDff"
      },
      {
        next: "url",
        disabled: null,
        text: "Know more about Lab Diamonds",
        type: "",
        value: "https://www.fionadiamonds.com/pages/know-about-lab-grown-diamonds",
        key: "jxwbH"
      }
    ],
    stockAsset: {
      gifUrl: "https://videos.gotolstoy.com/public/eff85e45-47af-4375-9df9-2502e107cf4f/125d8066-0fd6-4537-a5ec-0b7ebe0a83c2/125d8066-0fd6-4537-a5ec-0b7ebe0a83c2.mp4.gif",
      videoUrl: "https://cdn.shopify.com/s/files/1/0595/5069/5587/t/42/assets/125d8066-0fd6-4537-a5ec-0b7ebe0a83c2.mp4?v=1672922654"
    },
    key: "EVKKQ"
  }
], Me = !1, Oe = "rectangle", Be = !0, Fe = "OiSum", Ve = {
  "font-customization": {
    family: "Cardo",
    sources: {
      700: "http://fonts.gstatic.com/s/cardo/v19/wlpygwjKBV1pqhND-aQR82JHaTBX.ttf",
      italic: "http://fonts.gstatic.com/s/cardo/v19/wlpxgwjKBV1pqhv93IQ73W5OcCk.ttf",
      regular: "http://fonts.gstatic.com/s/cardo/v19/wlp_gwjKBV1pqiv_1oAZ2H5O.ttf"
    }
  },
  "feed-buttons-customization": {
    borderRadius: "100",
    primaryColor: "#090A0B"
  }
}, I = {
  widgetPosition: Ne,
  widgetSize: $e,
  widgetHeader: De,
  steps: Le,
  autoplay: Me,
  widgetShape: Oe,
  verticalOrientation: Be,
  startStep: Fe,
  featureSettings: Ve
};
var qe = 0;
function w(e, t, n, i, s) {
  var o, r, f = {};
  for (r in t)
    r == "ref" ? o = t[r] : f[r] = t[r];
  var d = { type: e, props: f, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --qe, __source: s, __self: i };
  if (typeof e == "function" && (o = e.defaultProps))
    for (r in o)
      f[r] === void 0 && (f[r] = o[r]);
  return c.vnode && c.vnode(d), d;
}
function Ke() {
  const [e, t] = S(!1);
  S(0);
  const n = Ee(null), [i, s] = S();
  let o, r;
  S([]);
  const [f, d] = S(I.startStep), [p, _] = S([]);
  if (!I)
    return w("div", {});
  function h(a) {
    I.steps.filter((b) => b).filter((b) => {
      b.key === a && (_(b.answers), s(b.stockAsset.videoUrl));
    });
  }
  Pe(() => {
    let a = setInterval(() => {
      r < n.current.currentTime && (clearInterval(a), t(!0));
    }, 1e3);
  }, [f]), h(f);
  const u = () => {
    n.current && (o = n.current.duration, r = o / 2);
  };
  function l(a) {
    setTimeout(() => {
      d(a), t(!1);
    }, 1e3);
  }
  return w("div", {
    children: w("div", {
      className: "video-container",
      children: w("div", {
        className: "video-container-box",
        children: [w("video", {
          src: i,
          autoPlay: !0,
          ref: n,
          muted: !0,
          controls: !0,
          onLoadedMetadata: u
        }), w("b", {}), w("div", {
          className: "overlay-thing",
          children: e ? p.map((a) => a.value ? w("button", {
            children: w("a", {
              href: a.value,
              target: "_blank",
              children: [" ", a.text, " "]
            })
          }) : w("button", {
            onClick: () => l(a.next),
            href: a == null ? void 0 : a.value,
            children: a.text
          })) : null
        })]
      })
    })
  });
}
He(w(Ke, {}), document.getElementById("f22plugin"));