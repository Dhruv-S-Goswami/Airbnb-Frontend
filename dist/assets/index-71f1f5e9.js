function yy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function td(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var ph = { exports: {} },
  zl = {},
  mh = { exports: {} },
  le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zi = Symbol.for('react.element'),
  wy = Symbol.for('react.portal'),
  xy = Symbol.for('react.fragment'),
  by = Symbol.for('react.strict_mode'),
  Sy = Symbol.for('react.profiler'),
  Cy = Symbol.for('react.provider'),
  ky = Symbol.for('react.context'),
  Ey = Symbol.for('react.forward_ref'),
  Ny = Symbol.for('react.suspense'),
  _y = Symbol.for('react.memo'),
  Py = Symbol.for('react.lazy'),
  jf = Symbol.iterator;
function $y(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (jf && e[jf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var hh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vh = Object.assign,
  gh = {};
function bo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gh),
    (this.updater = n || hh);
}
bo.prototype.isReactComponent = {};
bo.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
bo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function yh() {}
yh.prototype = bo.prototype;
function nd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gh),
    (this.updater = n || hh);
}
var rd = (nd.prototype = new yh());
rd.constructor = nd;
vh(rd, bo.prototype);
rd.isPureReactComponent = !0;
var zf = Array.isArray,
  wh = Object.prototype.hasOwnProperty,
  od = { current: null },
  xh = { key: !0, ref: !0, __self: !0, __source: !0 };
function bh(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      wh.call(t, r) && !xh.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: zi,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: od.current,
  };
}
function Oy(e, t) {
  return {
    $$typeof: zi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function id(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === zi;
}
function Ty(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wf = /\/+/g;
function Fs(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Ty('' + e.key)
    : t.toString(36);
}
function Ta(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case zi:
          case wy:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === '' ? '.' + Fs(a, 0) : r),
      zf(o)
        ? ((n = ''),
          e != null && (n = e.replace(Wf, '$&/') + '/'),
          Ta(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (id(o) &&
            (o = Oy(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Wf, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), zf(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + Fs(i, l);
      a += Ta(i, t, n, s, o);
    }
  else if (((s = $y(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Fs(i, l++)), (a += Ta(i, t, n, s, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return a;
}
function ra(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ta(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Ry(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var rt = { current: null },
  Ra = { transition: null },
  My = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: Ra,
    ReactCurrentOwner: od,
  };
le.Children = {
  map: ra,
  forEach: function (e, t, n) {
    ra(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ra(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ra(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!id(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
le.Component = bo;
le.Fragment = xy;
le.Profiler = Sy;
le.PureComponent = nd;
le.StrictMode = by;
le.Suspense = Ny;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = My;
le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = vh({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = od.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      wh.call(t, s) &&
        !xh.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: zi, type: e.type, key: o, ref: i, props: r, _owner: a };
};
le.createContext = function (e) {
  return (
    (e = {
      $$typeof: ky,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cy, _context: e }),
    (e.Consumer = e)
  );
};
le.createElement = bh;
le.createFactory = function (e) {
  var t = bh.bind(null, e);
  return (t.type = e), t;
};
le.createRef = function () {
  return { current: null };
};
le.forwardRef = function (e) {
  return { $$typeof: Ey, render: e };
};
le.isValidElement = id;
le.lazy = function (e) {
  return { $$typeof: Py, _payload: { _status: -1, _result: e }, _init: Ry };
};
le.memo = function (e, t) {
  return { $$typeof: _y, type: e, compare: t === void 0 ? null : t };
};
le.startTransition = function (e) {
  var t = Ra.transition;
  Ra.transition = {};
  try {
    e();
  } finally {
    Ra.transition = t;
  }
};
le.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
le.useCallback = function (e, t) {
  return rt.current.useCallback(e, t);
};
le.useContext = function (e) {
  return rt.current.useContext(e);
};
le.useDebugValue = function () {};
le.useDeferredValue = function (e) {
  return rt.current.useDeferredValue(e);
};
le.useEffect = function (e, t) {
  return rt.current.useEffect(e, t);
};
le.useId = function () {
  return rt.current.useId();
};
le.useImperativeHandle = function (e, t, n) {
  return rt.current.useImperativeHandle(e, t, n);
};
le.useInsertionEffect = function (e, t) {
  return rt.current.useInsertionEffect(e, t);
};
le.useLayoutEffect = function (e, t) {
  return rt.current.useLayoutEffect(e, t);
};
le.useMemo = function (e, t) {
  return rt.current.useMemo(e, t);
};
le.useReducer = function (e, t, n) {
  return rt.current.useReducer(e, t, n);
};
le.useRef = function (e) {
  return rt.current.useRef(e);
};
le.useState = function (e) {
  return rt.current.useState(e);
};
le.useSyncExternalStore = function (e, t, n) {
  return rt.current.useSyncExternalStore(e, t, n);
};
le.useTransition = function () {
  return rt.current.useTransition();
};
le.version = '18.2.0';
mh.exports = le;
var p = mh.exports;
const Z = td(p),
  Sh = yy({ __proto__: null, default: Z }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dy = p,
  Ly = Symbol.for('react.element'),
  Ay = Symbol.for('react.fragment'),
  Iy = Object.prototype.hasOwnProperty,
  Fy = Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ch(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Iy.call(t, r) && !jy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ly,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Fy.current,
  };
}
zl.Fragment = Ay;
zl.jsx = Ch;
zl.jsxs = Ch;
ph.exports = zl;
var ad = ph.exports;
const Wi = ad.Fragment,
  w = ad.jsx,
  $ = ad.jsxs;
var Du = {},
  kh = { exports: {} },
  bt = {},
  Eh = { exports: {} },
  Nh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, W) {
    var G = k.length;
    k.push(W);
    e: for (; 0 < G; ) {
      var ne = (G - 1) >>> 1,
        F = k[ne];
      if (0 < o(F, W)) (k[ne] = W), (k[G] = F), (G = ne);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var W = k[0],
      G = k.pop();
    if (G !== W) {
      k[0] = G;
      e: for (var ne = 0, F = k.length, A = F >>> 1; ne < A; ) {
        var U = 2 * (ne + 1) - 1,
          X = k[U],
          _ = U + 1,
          oe = k[_];
        if (0 > o(X, G))
          _ < F && 0 > o(oe, X)
            ? ((k[ne] = oe), (k[_] = G), (ne = _))
            : ((k[ne] = X), (k[U] = G), (ne = U));
        else if (_ < F && 0 > o(oe, G)) (k[ne] = oe), (k[_] = G), (ne = _);
        else break e;
      }
    }
    return W;
  }
  function o(k, W) {
    var G = k.sortIndex - W.sortIndex;
    return G !== 0 ? G : k.id - W.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    m = !1,
    h = !1,
    v = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    y = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(k) {
    for (var W = n(u); W !== null; ) {
      if (W.callback === null) r(u);
      else if (W.startTime <= k)
        r(u), (W.sortIndex = W.expirationTime), t(s, W);
      else break;
      W = n(u);
    }
  }
  function S(k) {
    if (((v = !1), b(k), !h))
      if (n(s) !== null) (h = !0), V(C);
      else {
        var W = n(u);
        W !== null && T(S, W.startTime - k);
      }
  }
  function C(k, W) {
    (h = !1), v && ((v = !1), g(E), (E = -1)), (m = !0);
    var G = f;
    try {
      for (
        b(W), c = n(s);
        c !== null && (!(c.expirationTime > W) || (k && !Y()));

      ) {
        var ne = c.callback;
        if (typeof ne == 'function') {
          (c.callback = null), (f = c.priorityLevel);
          var F = ne(c.expirationTime <= W);
          (W = e.unstable_now()),
            typeof F == 'function' ? (c.callback = F) : c === n(s) && r(s),
            b(W);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var A = !0;
      else {
        var U = n(u);
        U !== null && T(S, U.startTime - W), (A = !1);
      }
      return A;
    } finally {
      (c = null), (f = G), (m = !1);
    }
  }
  var N = !1,
    P = null,
    E = -1,
    I = 5,
    L = -1;
  function Y() {
    return !(e.unstable_now() - L < I);
  }
  function D() {
    if (P !== null) {
      var k = e.unstable_now();
      L = k;
      var W = !0;
      try {
        W = P(!0, k);
      } finally {
        W ? K() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var K;
  if (typeof y == 'function')
    K = function () {
      y(D);
    };
  else if (typeof MessageChannel < 'u') {
    var B = new MessageChannel(),
      z = B.port2;
    (B.port1.onmessage = D),
      (K = function () {
        z.postMessage(null);
      });
  } else
    K = function () {
      x(D, 0);
    };
  function V(k) {
    (P = k), N || ((N = !0), K());
  }
  function T(k, W) {
    E = x(function () {
      k(e.unstable_now());
    }, W);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || m || ((h = !0), V(C));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (I = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (k) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = f;
      }
      var G = f;
      f = W;
      try {
        return k();
      } finally {
        f = G;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, W) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var G = f;
      f = k;
      try {
        return W();
      } finally {
        f = G;
      }
    }),
    (e.unstable_scheduleCallback = function (k, W, G) {
      var ne = e.unstable_now();
      switch (
        (typeof G == 'object' && G !== null
          ? ((G = G.delay), (G = typeof G == 'number' && 0 < G ? ne + G : ne))
          : (G = ne),
        k)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = G + F),
        (k = {
          id: d++,
          callback: W,
          priorityLevel: k,
          startTime: G,
          expirationTime: F,
          sortIndex: -1,
        }),
        G > ne
          ? ((k.sortIndex = G),
            t(u, k),
            n(s) === null &&
              k === n(u) &&
              (v ? (g(E), (E = -1)) : (v = !0), T(S, G - ne)))
          : ((k.sortIndex = F), t(s, k), h || m || ((h = !0), V(C))),
        k
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (k) {
      var W = f;
      return function () {
        var G = f;
        f = W;
        try {
          return k.apply(this, arguments);
        } finally {
          f = G;
        }
      };
    });
})(Nh);
Eh.exports = Nh;
var zy = Eh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _h = p,
  xt = zy;
function M(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Ph = new Set(),
  di = {};
function Or(e, t) {
  ao(e, t), ao(e + 'Capture', t);
}
function ao(e, t) {
  for (di[e] = t, e = 0; e < t.length; e++) Ph.add(t[e]);
}
var xn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Lu = Object.prototype.hasOwnProperty,
  Wy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bf = {},
  Uf = {};
function By(e) {
  return Lu.call(Uf, e)
    ? !0
    : Lu.call(Bf, e)
      ? !1
      : Wy.test(e)
        ? (Uf[e] = !0)
        : ((Bf[e] = !0), !1);
}
function Uy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Hy(e, t, n, r) {
  if (t === null || typeof t > 'u' || Uy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ot(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Qe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Qe[e] = new ot(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Qe[t] = new ot(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Qe[e] = new ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Qe[e] = new ot(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Qe[e] = new ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Qe[e] = new ot(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Qe[e] = new ot(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Qe[e] = new ot(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Qe[e] = new ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ld = /[\-:]([a-z])/g;
function sd(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ld, sd);
    Qe[t] = new ot(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ld, sd);
    Qe[t] = new ot(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ld, sd);
  Qe[t] = new ot(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Qe[e] = new ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Qe.xlinkHref = new ot(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Qe[e] = new ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ud(e, t, n, r) {
  var o = Qe.hasOwnProperty(t) ? Qe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Hy(t, n, o, r) && (n = null),
    r || o === null
      ? By(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pn = _h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  oa = Symbol.for('react.element'),
  zr = Symbol.for('react.portal'),
  Wr = Symbol.for('react.fragment'),
  cd = Symbol.for('react.strict_mode'),
  Au = Symbol.for('react.profiler'),
  $h = Symbol.for('react.provider'),
  Oh = Symbol.for('react.context'),
  dd = Symbol.for('react.forward_ref'),
  Iu = Symbol.for('react.suspense'),
  Fu = Symbol.for('react.suspense_list'),
  fd = Symbol.for('react.memo'),
  An = Symbol.for('react.lazy'),
  Th = Symbol.for('react.offscreen'),
  Hf = Symbol.iterator;
function Do(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Hf && e[Hf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var _e = Object.assign,
  js;
function Qo(e) {
  if (js === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      js = (t && t[1]) || '';
    }
  return (
    `
` +
    js +
    e
  );
}
var zs = !1;
function Ws(e, t) {
  if (!e || zs) return '';
  zs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (zs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Qo(e) : '';
}
function Vy(e) {
  switch (e.tag) {
    case 5:
      return Qo(e.type);
    case 16:
      return Qo('Lazy');
    case 13:
      return Qo('Suspense');
    case 19:
      return Qo('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ws(e.type, !1)), e;
    case 11:
      return (e = Ws(e.type.render, !1)), e;
    case 1:
      return (e = Ws(e.type, !0)), e;
    default:
      return '';
  }
}
function ju(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Wr:
      return 'Fragment';
    case zr:
      return 'Portal';
    case Au:
      return 'Profiler';
    case cd:
      return 'StrictMode';
    case Iu:
      return 'Suspense';
    case Fu:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Oh:
        return (e.displayName || 'Context') + '.Consumer';
      case $h:
        return (e._context.displayName || 'Context') + '.Provider';
      case dd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case fd:
        return (
          (t = e.displayName || null), t !== null ? t : ju(e.type) || 'Memo'
        );
      case An:
        (t = e._payload), (e = e._init);
        try {
          return ju(e(t));
        } catch {}
    }
  return null;
}
function Yy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ju(t);
    case 8:
      return t === cd ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function er(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Rh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Gy(e) {
  var t = Rh(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = '' + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ia(e) {
  e._valueTracker || (e._valueTracker = Gy(e));
}
function Mh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Rh(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function tl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zu(e, t) {
  var n = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vf(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = er(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Dh(e, t) {
  (t = t.checked), t != null && ud(e, 'checked', t, !1);
}
function Wu(e, t) {
  Dh(e, t);
  var n = er(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Bu(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Bu(e, t.type, er(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Yf(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Bu(e, t, n) {
  (t !== 'number' || tl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ko = Array.isArray;
function Zr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + er(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Uu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Gf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Ko(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: er(n) };
}
function Lh(e, t) {
  var n = er(t.value),
    r = er(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Qf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Ah(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Hu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Ah(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var aa,
  Ih = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        aa = aa || document.createElement('div'),
          aa.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = aa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Qy = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Zo).forEach(function (e) {
  Qy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zo[t] = Zo[e]);
  });
});
function Fh(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Zo.hasOwnProperty(e) && Zo[e])
      ? ('' + t).trim()
      : t + 'px';
}
function jh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Fh(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ky = _e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Vu(e, t) {
  if (t) {
    if (Ky[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(M(62));
  }
}
function Yu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Gu = null;
function pd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Qu = null,
  eo = null,
  to = null;
function Kf(e) {
  if ((e = Hi(e))) {
    if (typeof Qu != 'function') throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Vl(t)), Qu(e.stateNode, e.type, t));
  }
}
function zh(e) {
  eo ? (to ? to.push(e) : (to = [e])) : (eo = e);
}
function Wh() {
  if (eo) {
    var e = eo,
      t = to;
    if (((to = eo = null), Kf(e), t)) for (e = 0; e < t.length; e++) Kf(t[e]);
  }
}
function Bh(e, t) {
  return e(t);
}
function Uh() {}
var Bs = !1;
function Hh(e, t, n) {
  if (Bs) return e(t, n);
  Bs = !0;
  try {
    return Bh(e, t, n);
  } finally {
    (Bs = !1), (eo !== null || to !== null) && (Uh(), Wh());
  }
}
function pi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(M(231, t, typeof n));
  return n;
}
var Ku = !1;
if (xn)
  try {
    var Lo = {};
    Object.defineProperty(Lo, 'passive', {
      get: function () {
        Ku = !0;
      },
    }),
      window.addEventListener('test', Lo, Lo),
      window.removeEventListener('test', Lo, Lo);
  } catch {
    Ku = !1;
  }
function Xy(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ei = !1,
  nl = null,
  rl = !1,
  Xu = null,
  qy = {
    onError: function (e) {
      (ei = !0), (nl = e);
    },
  };
function Jy(e, t, n, r, o, i, a, l, s) {
  (ei = !1), (nl = null), Xy.apply(qy, arguments);
}
function Zy(e, t, n, r, o, i, a, l, s) {
  if ((Jy.apply(this, arguments), ei)) {
    if (ei) {
      var u = nl;
      (ei = !1), (nl = null);
    } else throw Error(M(198));
    rl || ((rl = !0), (Xu = u));
  }
}
function Tr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xf(e) {
  if (Tr(e) !== e) throw Error(M(188));
}
function ew(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tr(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Xf(o), e;
        if (i === r) return Xf(o), t;
        i = i.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Yh(e) {
  return (e = ew(e)), e !== null ? Gh(e) : null;
}
function Gh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qh = xt.unstable_scheduleCallback,
  qf = xt.unstable_cancelCallback,
  tw = xt.unstable_shouldYield,
  nw = xt.unstable_requestPaint,
  Oe = xt.unstable_now,
  rw = xt.unstable_getCurrentPriorityLevel,
  md = xt.unstable_ImmediatePriority,
  Kh = xt.unstable_UserBlockingPriority,
  ol = xt.unstable_NormalPriority,
  ow = xt.unstable_LowPriority,
  Xh = xt.unstable_IdlePriority,
  Wl = null,
  nn = null;
function iw(e) {
  if (nn && typeof nn.onCommitFiberRoot == 'function')
    try {
      nn.onCommitFiberRoot(Wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : sw,
  aw = Math.log,
  lw = Math.LN2;
function sw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((aw(e) / lw) | 0)) | 0;
}
var la = 64,
  sa = 4194304;
function Xo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function il(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = Xo(l)) : ((i &= a), i !== 0 && (r = Xo(i)));
  } else (a = n & ~o), a !== 0 ? (r = Xo(a)) : i !== 0 && (r = Xo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Vt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function uw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function cw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Vt(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & n) || l & r) && (o[a] = uw(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function qu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qh() {
  var e = la;
  return (la <<= 1), !(la & 4194240) && (la = 64), e;
}
function Us(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Bi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = n);
}
function dw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Vt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function hd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Vt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var he = 0;
function Jh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zh,
  vd,
  e0,
  t0,
  n0,
  Ju = !1,
  ua = [],
  Hn = null,
  Vn = null,
  Yn = null,
  mi = new Map(),
  hi = new Map(),
  Fn = [],
  fw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Jf(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Hn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Vn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Yn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      mi.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      hi.delete(t.pointerId);
  }
}
function Ao(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Hi(t)), t !== null && vd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function pw(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Hn = Ao(Hn, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Vn = Ao(Vn, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Yn = Ao(Yn, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return mi.set(i, Ao(mi.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), hi.set(i, Ao(hi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function r0(e) {
  var t = vr(e.target);
  if (t !== null) {
    var n = Tr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vh(n)), t !== null)) {
          (e.blockedOn = t),
            n0(e.priority, function () {
              e0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ma(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Gu = r), n.target.dispatchEvent(r), (Gu = null);
    } else return (t = Hi(n)), t !== null && vd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zf(e, t, n) {
  Ma(e) && n.delete(t);
}
function mw() {
  (Ju = !1),
    Hn !== null && Ma(Hn) && (Hn = null),
    Vn !== null && Ma(Vn) && (Vn = null),
    Yn !== null && Ma(Yn) && (Yn = null),
    mi.forEach(Zf),
    hi.forEach(Zf);
}
function Io(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ju ||
      ((Ju = !0),
      xt.unstable_scheduleCallback(xt.unstable_NormalPriority, mw)));
}
function vi(e) {
  function t(o) {
    return Io(o, e);
  }
  if (0 < ua.length) {
    Io(ua[0], e);
    for (var n = 1; n < ua.length; n++) {
      var r = ua[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Hn !== null && Io(Hn, e),
      Vn !== null && Io(Vn, e),
      Yn !== null && Io(Yn, e),
      mi.forEach(t),
      hi.forEach(t),
      n = 0;
    n < Fn.length;
    n++
  )
    (r = Fn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Fn.length && ((n = Fn[0]), n.blockedOn === null); )
    r0(n), n.blockedOn === null && Fn.shift();
}
var no = Pn.ReactCurrentBatchConfig,
  al = !0;
function hw(e, t, n, r) {
  var o = he,
    i = no.transition;
  no.transition = null;
  try {
    (he = 1), gd(e, t, n, r);
  } finally {
    (he = o), (no.transition = i);
  }
}
function vw(e, t, n, r) {
  var o = he,
    i = no.transition;
  no.transition = null;
  try {
    (he = 4), gd(e, t, n, r);
  } finally {
    (he = o), (no.transition = i);
  }
}
function gd(e, t, n, r) {
  if (al) {
    var o = Zu(e, t, n, r);
    if (o === null) Zs(e, t, r, ll, n), Jf(e, r);
    else if (pw(o, e, t, n, r)) r.stopPropagation();
    else if ((Jf(e, r), t & 4 && -1 < fw.indexOf(e))) {
      for (; o !== null; ) {
        var i = Hi(o);
        if (
          (i !== null && Zh(i),
          (i = Zu(e, t, n, r)),
          i === null && Zs(e, t, r, ll, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Zs(e, t, r, null, n);
  }
}
var ll = null;
function Zu(e, t, n, r) {
  if (((ll = null), (e = pd(r)), (e = vr(e)), e !== null))
    if (((t = Tr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ll = e), null;
}
function o0(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (rw()) {
        case md:
          return 1;
        case Kh:
          return 4;
        case ol:
        case ow:
          return 16;
        case Xh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zn = null,
  yd = null,
  Da = null;
function i0() {
  if (Da) return Da;
  var e,
    t = yd,
    n = t.length,
    r,
    o = 'value' in zn ? zn.value : zn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Da = o.slice(e, 1 < r ? 1 - r : void 0));
}
function La(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ca() {
  return !0;
}
function ep() {
  return !1;
}
function St(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ca
        : ep),
      (this.isPropagationStopped = ep),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ca));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ca));
      },
      persist: function () {},
      isPersistent: ca,
    }),
    t
  );
}
var So = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wd = St(So),
  Ui = _e({}, So, { view: 0, detail: 0 }),
  gw = St(Ui),
  Hs,
  Vs,
  Fo,
  Bl = _e({}, Ui, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Fo &&
            (Fo && e.type === 'mousemove'
              ? ((Hs = e.screenX - Fo.screenX), (Vs = e.screenY - Fo.screenY))
              : (Vs = Hs = 0),
            (Fo = e)),
          Hs);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Vs;
    },
  }),
  tp = St(Bl),
  yw = _e({}, Bl, { dataTransfer: 0 }),
  ww = St(yw),
  xw = _e({}, Ui, { relatedTarget: 0 }),
  Ys = St(xw),
  bw = _e({}, So, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sw = St(bw),
  Cw = _e({}, So, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kw = St(Cw),
  Ew = _e({}, So, { data: 0 }),
  np = St(Ew),
  Nw = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  _w = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Pw = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function $w(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pw[e]) ? !!t[e] : !1;
}
function xd() {
  return $w;
}
var Ow = _e({}, Ui, {
    key: function (e) {
      if (e.key) {
        var t = Nw[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = La(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? _w[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xd,
    charCode: function (e) {
      return e.type === 'keypress' ? La(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? La(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Tw = St(Ow),
  Rw = _e({}, Bl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  rp = St(Rw),
  Mw = _e({}, Ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xd,
  }),
  Dw = St(Mw),
  Lw = _e({}, So, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Aw = St(Lw),
  Iw = _e({}, Bl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Fw = St(Iw),
  jw = [9, 13, 27, 32],
  bd = xn && 'CompositionEvent' in window,
  ti = null;
xn && 'documentMode' in document && (ti = document.documentMode);
var zw = xn && 'TextEvent' in window && !ti,
  a0 = xn && (!bd || (ti && 8 < ti && 11 >= ti)),
  op = String.fromCharCode(32),
  ip = !1;
function l0(e, t) {
  switch (e) {
    case 'keyup':
      return jw.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function s0(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Br = !1;
function Ww(e, t) {
  switch (e) {
    case 'compositionend':
      return s0(t);
    case 'keypress':
      return t.which !== 32 ? null : ((ip = !0), op);
    case 'textInput':
      return (e = t.data), e === op && ip ? null : e;
    default:
      return null;
  }
}
function Bw(e, t) {
  if (Br)
    return e === 'compositionend' || (!bd && l0(e, t))
      ? ((e = i0()), (Da = yd = zn = null), (Br = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return a0 && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Uw = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ap(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Uw[e.type] : t === 'textarea';
}
function u0(e, t, n, r) {
  zh(r),
    (t = sl(t, 'onChange')),
    0 < t.length &&
      ((n = new wd('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ni = null,
  gi = null;
function Hw(e) {
  x0(e, 0);
}
function Ul(e) {
  var t = Vr(e);
  if (Mh(t)) return e;
}
function Vw(e, t) {
  if (e === 'change') return t;
}
var c0 = !1;
if (xn) {
  var Gs;
  if (xn) {
    var Qs = 'oninput' in document;
    if (!Qs) {
      var lp = document.createElement('div');
      lp.setAttribute('oninput', 'return;'),
        (Qs = typeof lp.oninput == 'function');
    }
    Gs = Qs;
  } else Gs = !1;
  c0 = Gs && (!document.documentMode || 9 < document.documentMode);
}
function sp() {
  ni && (ni.detachEvent('onpropertychange', d0), (gi = ni = null));
}
function d0(e) {
  if (e.propertyName === 'value' && Ul(gi)) {
    var t = [];
    u0(t, gi, e, pd(e)), Hh(Hw, t);
  }
}
function Yw(e, t, n) {
  e === 'focusin'
    ? (sp(), (ni = t), (gi = n), ni.attachEvent('onpropertychange', d0))
    : e === 'focusout' && sp();
}
function Gw(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ul(gi);
}
function Qw(e, t) {
  if (e === 'click') return Ul(t);
}
function Kw(e, t) {
  if (e === 'input' || e === 'change') return Ul(t);
}
function Xw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Gt = typeof Object.is == 'function' ? Object.is : Xw;
function yi(e, t) {
  if (Gt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Lu.call(t, o) || !Gt(e[o], t[o])) return !1;
  }
  return !0;
}
function up(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cp(e, t) {
  var n = up(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = up(n);
  }
}
function f0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? f0(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function p0() {
  for (var e = window, t = tl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = tl(e.document);
  }
  return t;
}
function Sd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function qw(e) {
  var t = p0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    f0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Sd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = cp(n, i));
        var a = cp(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jw = xn && 'documentMode' in document && 11 >= document.documentMode,
  Ur = null,
  ec = null,
  ri = null,
  tc = !1;
function dp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  tc ||
    Ur == null ||
    Ur !== tl(r) ||
    ((r = Ur),
    'selectionStart' in r && Sd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ri && yi(ri, r)) ||
      ((ri = r),
      (r = sl(ec, 'onSelect')),
      0 < r.length &&
        ((t = new wd('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ur))));
}
function da(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Hr = {
    animationend: da('Animation', 'AnimationEnd'),
    animationiteration: da('Animation', 'AnimationIteration'),
    animationstart: da('Animation', 'AnimationStart'),
    transitionend: da('Transition', 'TransitionEnd'),
  },
  Ks = {},
  m0 = {};
xn &&
  ((m0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Hr.animationend.animation,
    delete Hr.animationiteration.animation,
    delete Hr.animationstart.animation),
  'TransitionEvent' in window || delete Hr.transitionend.transition);
function Hl(e) {
  if (Ks[e]) return Ks[e];
  if (!Hr[e]) return e;
  var t = Hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in m0) return (Ks[e] = t[n]);
  return e;
}
var h0 = Hl('animationend'),
  v0 = Hl('animationiteration'),
  g0 = Hl('animationstart'),
  y0 = Hl('transitionend'),
  w0 = new Map(),
  fp =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function ar(e, t) {
  w0.set(e, t), Or(t, [e]);
}
for (var Xs = 0; Xs < fp.length; Xs++) {
  var qs = fp[Xs],
    Zw = qs.toLowerCase(),
    e2 = qs[0].toUpperCase() + qs.slice(1);
  ar(Zw, 'on' + e2);
}
ar(h0, 'onAnimationEnd');
ar(v0, 'onAnimationIteration');
ar(g0, 'onAnimationStart');
ar('dblclick', 'onDoubleClick');
ar('focusin', 'onFocus');
ar('focusout', 'onBlur');
ar(y0, 'onTransitionEnd');
ao('onMouseEnter', ['mouseout', 'mouseover']);
ao('onMouseLeave', ['mouseout', 'mouseover']);
ao('onPointerEnter', ['pointerout', 'pointerover']);
ao('onPointerLeave', ['pointerout', 'pointerover']);
Or(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
Or(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
Or('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Or(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Or(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Or(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var qo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  t2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(qo));
function pp(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Zy(r, t, void 0, e), (e.currentTarget = null);
}
function x0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          pp(o, l, u), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          pp(o, l, u), (i = s);
        }
    }
  }
  if (rl) throw ((e = Xu), (rl = !1), (Xu = null), e);
}
function Se(e, t) {
  var n = t[ac];
  n === void 0 && (n = t[ac] = new Set());
  var r = e + '__bubble';
  n.has(r) || (b0(t, e, 2, !1), n.add(r));
}
function Js(e, t, n) {
  var r = 0;
  t && (r |= 4), b0(n, e, r, t);
}
var fa = '_reactListening' + Math.random().toString(36).slice(2);
function wi(e) {
  if (!e[fa]) {
    (e[fa] = !0),
      Ph.forEach(function (n) {
        n !== 'selectionchange' && (t2.has(n) || Js(n, !1, e), Js(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fa] || ((t[fa] = !0), Js('selectionchange', !1, t));
  }
}
function b0(e, t, n, r) {
  switch (o0(t)) {
    case 1:
      var o = hw;
      break;
    case 4:
      o = vw;
      break;
    default:
      o = gd;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ku ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Zs(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = vr(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Hh(function () {
    var u = i,
      d = pd(n),
      c = [];
    e: {
      var f = w0.get(e);
      if (f !== void 0) {
        var m = wd,
          h = e;
        switch (e) {
          case 'keypress':
            if (La(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = Tw;
            break;
          case 'focusin':
            (h = 'focus'), (m = Ys);
            break;
          case 'focusout':
            (h = 'blur'), (m = Ys);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = Ys;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = tp;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = ww;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = Dw;
            break;
          case h0:
          case v0:
          case g0:
            m = Sw;
            break;
          case y0:
            m = Aw;
            break;
          case 'scroll':
            m = gw;
            break;
          case 'wheel':
            m = Fw;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = kw;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = rp;
        }
        var v = (t & 4) !== 0,
          x = !v && e === 'scroll',
          g = v ? (f !== null ? f + 'Capture' : null) : f;
        v = [];
        for (var y = u, b; y !== null; ) {
          b = y;
          var S = b.stateNode;
          if (
            (b.tag === 5 &&
              S !== null &&
              ((b = S),
              g !== null && ((S = pi(y, g)), S != null && v.push(xi(y, S, b)))),
            x)
          )
            break;
          y = y.return;
        }
        0 < v.length &&
          ((f = new m(f, h, null, n, d)), c.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== Gu &&
            (h = n.relatedTarget || n.fromElement) &&
            (vr(h) || h[bn]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          m
            ? ((h = n.relatedTarget || n.toElement),
              (m = u),
              (h = h ? vr(h) : null),
              h !== null &&
                ((x = Tr(h)), h !== x || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((m = null), (h = u)),
          m !== h)
        ) {
          if (
            ((v = tp),
            (S = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (y = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = rp),
              (S = 'onPointerLeave'),
              (g = 'onPointerEnter'),
              (y = 'pointer')),
            (x = m == null ? f : Vr(m)),
            (b = h == null ? f : Vr(h)),
            (f = new v(S, y + 'leave', m, n, d)),
            (f.target = x),
            (f.relatedTarget = b),
            (S = null),
            vr(d) === u &&
              ((v = new v(g, y + 'enter', h, n, d)),
              (v.target = b),
              (v.relatedTarget = x),
              (S = v)),
            (x = S),
            m && h)
          )
            t: {
              for (v = m, g = h, y = 0, b = v; b; b = Dr(b)) y++;
              for (b = 0, S = g; S; S = Dr(S)) b++;
              for (; 0 < y - b; ) (v = Dr(v)), y--;
              for (; 0 < b - y; ) (g = Dr(g)), b--;
              for (; y--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = Dr(v)), (g = Dr(g));
              }
              v = null;
            }
          else v = null;
          m !== null && mp(c, f, m, v, !1),
            h !== null && x !== null && mp(c, x, h, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? Vr(u) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && f.type === 'file'))
        )
          var C = Vw;
        else if (ap(f))
          if (c0) C = Kw;
          else {
            C = Gw;
            var N = Yw;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (C = Qw);
        if (C && (C = C(e, u))) {
          u0(c, C, n, d);
          break e;
        }
        N && N(e, f, u),
          e === 'focusout' &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === 'number' &&
            Bu(f, 'number', f.value);
      }
      switch (((N = u ? Vr(u) : window), e)) {
        case 'focusin':
          (ap(N) || N.contentEditable === 'true') &&
            ((Ur = N), (ec = u), (ri = null));
          break;
        case 'focusout':
          ri = ec = Ur = null;
          break;
        case 'mousedown':
          tc = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (tc = !1), dp(c, n, d);
          break;
        case 'selectionchange':
          if (Jw) break;
        case 'keydown':
        case 'keyup':
          dp(c, n, d);
      }
      var P;
      if (bd)
        e: {
          switch (e) {
            case 'compositionstart':
              var E = 'onCompositionStart';
              break e;
            case 'compositionend':
              E = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              E = 'onCompositionUpdate';
              break e;
          }
          E = void 0;
        }
      else
        Br
          ? l0(e, n) && (E = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (E = 'onCompositionStart');
      E &&
        (a0 &&
          n.locale !== 'ko' &&
          (Br || E !== 'onCompositionStart'
            ? E === 'onCompositionEnd' && Br && (P = i0())
            : ((zn = d),
              (yd = 'value' in zn ? zn.value : zn.textContent),
              (Br = !0))),
        (N = sl(u, E)),
        0 < N.length &&
          ((E = new np(E, e, null, n, d)),
          c.push({ event: E, listeners: N }),
          P ? (E.data = P) : ((P = s0(n)), P !== null && (E.data = P)))),
        (P = zw ? Ww(e, n) : Bw(e, n)) &&
          ((u = sl(u, 'onBeforeInput')),
          0 < u.length &&
            ((d = new np('onBeforeInput', 'beforeinput', null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = P)));
    }
    x0(c, t);
  });
}
function xi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function sl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = pi(e, n)),
      i != null && r.unshift(xi(e, i, o)),
      (i = pi(e, t)),
      i != null && r.push(xi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Dr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mp(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = pi(n, i)), s != null && a.unshift(xi(n, s, l)))
        : o || ((s = pi(n, i)), s != null && a.push(xi(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var n2 = /\r\n?/g,
  r2 = /\u0000|\uFFFD/g;
function hp(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      n2,
      `
`,
    )
    .replace(r2, '');
}
function pa(e, t, n) {
  if (((t = hp(t)), hp(e) !== t && n)) throw Error(M(425));
}
function ul() {}
var nc = null,
  rc = null;
function oc(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ic = typeof setTimeout == 'function' ? setTimeout : void 0,
  o2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  vp = typeof Promise == 'function' ? Promise : void 0,
  i2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof vp < 'u'
        ? function (e) {
            return vp.resolve(null).then(e).catch(a2);
          }
        : ic;
function a2(e) {
  setTimeout(function () {
    throw e;
  });
}
function eu(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), vi(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  vi(t);
}
function Gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function gp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Co = Math.random().toString(36).slice(2),
  Zt = '__reactFiber$' + Co,
  bi = '__reactProps$' + Co,
  bn = '__reactContainer$' + Co,
  ac = '__reactEvents$' + Co,
  l2 = '__reactListeners$' + Co,
  s2 = '__reactHandles$' + Co;
function vr(e) {
  var t = e[Zt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bn] || n[Zt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gp(e); e !== null; ) {
          if ((n = e[Zt])) return n;
          e = gp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Hi(e) {
  return (
    (e = e[Zt] || e[bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Vl(e) {
  return e[bi] || null;
}
var lc = [],
  Yr = -1;
function lr(e) {
  return { current: e };
}
function Ce(e) {
  0 > Yr || ((e.current = lc[Yr]), (lc[Yr] = null), Yr--);
}
function we(e, t) {
  Yr++, (lc[Yr] = e.current), (e.current = t);
}
var tr = {},
  et = lr(tr),
  ct = lr(!1),
  Sr = tr;
function lo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function dt(e) {
  return (e = e.childContextTypes), e != null;
}
function cl() {
  Ce(ct), Ce(et);
}
function yp(e, t, n) {
  if (et.current !== tr) throw Error(M(168));
  we(et, t), we(ct, n);
}
function S0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(M(108, Yy(e) || 'Unknown', o));
  return _e({}, n, r);
}
function dl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tr),
    (Sr = et.current),
    we(et, e),
    we(ct, ct.current),
    !0
  );
}
function wp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = S0(e, t, Sr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ce(ct),
      Ce(et),
      we(et, e))
    : Ce(ct),
    we(ct, n);
}
var mn = null,
  Yl = !1,
  tu = !1;
function C0(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function u2(e) {
  (Yl = !0), C0(e);
}
function sr() {
  if (!tu && mn !== null) {
    tu = !0;
    var e = 0,
      t = he;
    try {
      var n = mn;
      for (he = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (mn = null), (Yl = !1);
    } catch (o) {
      throw (mn !== null && (mn = mn.slice(e + 1)), Qh(md, sr), o);
    } finally {
      (he = t), (tu = !1);
    }
  }
  return null;
}
var Gr = [],
  Qr = 0,
  fl = null,
  pl = 0,
  Et = [],
  Nt = 0,
  Cr = null,
  hn = 1,
  vn = '';
function fr(e, t) {
  (Gr[Qr++] = pl), (Gr[Qr++] = fl), (fl = e), (pl = t);
}
function k0(e, t, n) {
  (Et[Nt++] = hn), (Et[Nt++] = vn), (Et[Nt++] = Cr), (Cr = e);
  var r = hn;
  e = vn;
  var o = 32 - Vt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Vt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (hn = (1 << (32 - Vt(t) + o)) | (n << o) | r),
      (vn = i + e);
  } else (hn = (1 << i) | (n << o) | r), (vn = e);
}
function Cd(e) {
  e.return !== null && (fr(e, 1), k0(e, 1, 0));
}
function kd(e) {
  for (; e === fl; )
    (fl = Gr[--Qr]), (Gr[Qr] = null), (pl = Gr[--Qr]), (Gr[Qr] = null);
  for (; e === Cr; )
    (Cr = Et[--Nt]),
      (Et[Nt] = null),
      (vn = Et[--Nt]),
      (Et[Nt] = null),
      (hn = Et[--Nt]),
      (Et[Nt] = null);
}
var yt = null,
  gt = null,
  ke = !1,
  Ut = null;
function E0(e, t) {
  var n = _t(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (yt = e), (gt = Gn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (yt = e), (gt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Cr !== null ? { id: hn, overflow: vn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _t(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (yt = e),
            (gt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function sc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uc(e) {
  if (ke) {
    var t = gt;
    if (t) {
      var n = t;
      if (!xp(e, t)) {
        if (sc(e)) throw Error(M(418));
        t = Gn(n.nextSibling);
        var r = yt;
        t && xp(e, t)
          ? E0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (yt = e));
      }
    } else {
      if (sc(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (ke = !1), (yt = e);
    }
  }
}
function bp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  yt = e;
}
function ma(e) {
  if (e !== yt) return !1;
  if (!ke) return bp(e), (ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !oc(e.type, e.memoizedProps))),
    t && (t = gt))
  ) {
    if (sc(e)) throw (N0(), Error(M(418)));
    for (; t; ) E0(e, t), (t = Gn(t.nextSibling));
  }
  if ((bp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              gt = Gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      gt = null;
    }
  } else gt = yt ? Gn(e.stateNode.nextSibling) : null;
  return !0;
}
function N0() {
  for (var e = gt; e; ) e = Gn(e.nextSibling);
}
function so() {
  (gt = yt = null), (ke = !1);
}
function Ed(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
var c2 = Pn.ReactCurrentBatchConfig;
function Wt(e, t) {
  if (e && e.defaultProps) {
    (t = _e({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ml = lr(null),
  hl = null,
  Kr = null,
  Nd = null;
function _d() {
  Nd = Kr = hl = null;
}
function Pd(e) {
  var t = ml.current;
  Ce(ml), (e._currentValue = t);
}
function cc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ro(e, t) {
  (hl = e),
    (Nd = Kr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (lt = !0), (e.firstContext = null));
}
function Mt(e) {
  var t = e._currentValue;
  if (Nd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
      if (hl === null) throw Error(M(308));
      (Kr = e), (hl.dependencies = { lanes: 0, firstContext: e });
    } else Kr = Kr.next = e;
  return t;
}
var gr = null;
function $d(e) {
  gr === null ? (gr = [e]) : gr.push(e);
}
function _0(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), $d(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Sn(e, r)
  );
}
function Sn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var In = !1;
function Od(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function P0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ue & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Sn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), $d(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Sn(e, n)
  );
}
function Aa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hd(e, n);
  }
}
function Sp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vl(e, t, n, r) {
  var o = e.updateQueue;
  In = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== a &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var c = o.baseState;
    (a = 0), (d = u = s = null), (l = i);
    do {
      var f = l.lane,
        m = l.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var h = e,
            v = l;
          switch (((f = t), (m = n), v.tag)) {
            case 1:
              if (((h = v.payload), typeof h == 'function')) {
                c = h.call(m, c, f);
                break e;
              }
              c = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = v.payload),
                (f = typeof h == 'function' ? h.call(m, c, f) : h),
                f == null)
              )
                break e;
              c = _e({}, c, f);
              break e;
            case 2:
              In = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = m), (s = c)) : (d = d.next = m),
          (a |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = c),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Er |= a), (e.lanes = a), (e.memoizedState = c);
  }
}
function Cp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(M(191, o));
        o.call(r);
      }
    }
}
var $0 = new _h.Component().refs;
function dc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _e({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      o = Xn(e),
      i = yn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Qn(e, i, o)),
      t !== null && (Yt(t, e, o, r), Aa(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      o = Xn(e),
      i = yn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Qn(e, i, o)),
      t !== null && (Yt(t, e, o, r), Aa(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = nt(),
      r = Xn(e),
      o = yn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Qn(e, o, r)),
      t !== null && (Yt(t, e, r, n), Aa(t, e, r));
  },
};
function kp(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !yi(n, r) || !yi(o, i)
        : !0
  );
}
function O0(e, t, n) {
  var r = !1,
    o = tr,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Mt(i))
      : ((o = dt(t) ? Sr : et.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? lo(e, o) : tr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ep(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Gl.enqueueReplaceState(t, t.state, null);
}
function fc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = $0), Od(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Mt(i))
    : ((i = dt(t) ? Sr : et.current), (o.context = lo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (dc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Gl.enqueueReplaceState(o, o.state, null),
      vl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function jo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === $0 && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function ha(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Np(e) {
  var t = e._init;
  return t(e._payload);
}
function T0(e) {
  function t(g, y) {
    if (e) {
      var b = g.deletions;
      b === null ? ((g.deletions = [y]), (g.flags |= 16)) : b.push(y);
    }
  }
  function n(g, y) {
    if (!e) return null;
    for (; y !== null; ) t(g, y), (y = y.sibling);
    return null;
  }
  function r(g, y) {
    for (g = new Map(); y !== null; )
      y.key !== null ? g.set(y.key, y) : g.set(y.index, y), (y = y.sibling);
    return g;
  }
  function o(g, y) {
    return (g = qn(g, y)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, y, b) {
    return (
      (g.index = b),
      e
        ? ((b = g.alternate),
          b !== null
            ? ((b = b.index), b < y ? ((g.flags |= 2), y) : b)
            : ((g.flags |= 2), y))
        : ((g.flags |= 1048576), y)
    );
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, y, b, S) {
    return y === null || y.tag !== 6
      ? ((y = su(b, g.mode, S)), (y.return = g), y)
      : ((y = o(y, b)), (y.return = g), y);
  }
  function s(g, y, b, S) {
    var C = b.type;
    return C === Wr
      ? d(g, y, b.props.children, S, b.key)
      : y !== null &&
          (y.elementType === C ||
            (typeof C == 'object' &&
              C !== null &&
              C.$$typeof === An &&
              Np(C) === y.type))
        ? ((S = o(y, b.props)), (S.ref = jo(g, y, b)), (S.return = g), S)
        : ((S = Ba(b.type, b.key, b.props, null, g.mode, S)),
          (S.ref = jo(g, y, b)),
          (S.return = g),
          S);
  }
  function u(g, y, b, S) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== b.containerInfo ||
      y.stateNode.implementation !== b.implementation
      ? ((y = uu(b, g.mode, S)), (y.return = g), y)
      : ((y = o(y, b.children || [])), (y.return = g), y);
  }
  function d(g, y, b, S, C) {
    return y === null || y.tag !== 7
      ? ((y = br(b, g.mode, S, C)), (y.return = g), y)
      : ((y = o(y, b)), (y.return = g), y);
  }
  function c(g, y, b) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (y = su('' + y, g.mode, b)), (y.return = g), y;
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case oa:
          return (
            (b = Ba(y.type, y.key, y.props, null, g.mode, b)),
            (b.ref = jo(g, null, y)),
            (b.return = g),
            b
          );
        case zr:
          return (y = uu(y, g.mode, b)), (y.return = g), y;
        case An:
          var S = y._init;
          return c(g, S(y._payload), b);
      }
      if (Ko(y) || Do(y))
        return (y = br(y, g.mode, b, null)), (y.return = g), y;
      ha(g, y);
    }
    return null;
  }
  function f(g, y, b, S) {
    var C = y !== null ? y.key : null;
    if ((typeof b == 'string' && b !== '') || typeof b == 'number')
      return C !== null ? null : l(g, y, '' + b, S);
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case oa:
          return b.key === C ? s(g, y, b, S) : null;
        case zr:
          return b.key === C ? u(g, y, b, S) : null;
        case An:
          return (C = b._init), f(g, y, C(b._payload), S);
      }
      if (Ko(b) || Do(b)) return C !== null ? null : d(g, y, b, S, null);
      ha(g, b);
    }
    return null;
  }
  function m(g, y, b, S, C) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (g = g.get(b) || null), l(y, g, '' + S, C);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case oa:
          return (g = g.get(S.key === null ? b : S.key) || null), s(y, g, S, C);
        case zr:
          return (g = g.get(S.key === null ? b : S.key) || null), u(y, g, S, C);
        case An:
          var N = S._init;
          return m(g, y, b, N(S._payload), C);
      }
      if (Ko(S) || Do(S)) return (g = g.get(b) || null), d(y, g, S, C, null);
      ha(y, S);
    }
    return null;
  }
  function h(g, y, b, S) {
    for (
      var C = null, N = null, P = y, E = (y = 0), I = null;
      P !== null && E < b.length;
      E++
    ) {
      P.index > E ? ((I = P), (P = null)) : (I = P.sibling);
      var L = f(g, P, b[E], S);
      if (L === null) {
        P === null && (P = I);
        break;
      }
      e && P && L.alternate === null && t(g, P),
        (y = i(L, y, E)),
        N === null ? (C = L) : (N.sibling = L),
        (N = L),
        (P = I);
    }
    if (E === b.length) return n(g, P), ke && fr(g, E), C;
    if (P === null) {
      for (; E < b.length; E++)
        (P = c(g, b[E], S)),
          P !== null &&
            ((y = i(P, y, E)), N === null ? (C = P) : (N.sibling = P), (N = P));
      return ke && fr(g, E), C;
    }
    for (P = r(g, P); E < b.length; E++)
      (I = m(P, g, E, b[E], S)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? E : I.key),
          (y = i(I, y, E)),
          N === null ? (C = I) : (N.sibling = I),
          (N = I));
    return (
      e &&
        P.forEach(function (Y) {
          return t(g, Y);
        }),
      ke && fr(g, E),
      C
    );
  }
  function v(g, y, b, S) {
    var C = Do(b);
    if (typeof C != 'function') throw Error(M(150));
    if (((b = C.call(b)), b == null)) throw Error(M(151));
    for (
      var N = (C = null), P = y, E = (y = 0), I = null, L = b.next();
      P !== null && !L.done;
      E++, L = b.next()
    ) {
      P.index > E ? ((I = P), (P = null)) : (I = P.sibling);
      var Y = f(g, P, L.value, S);
      if (Y === null) {
        P === null && (P = I);
        break;
      }
      e && P && Y.alternate === null && t(g, P),
        (y = i(Y, y, E)),
        N === null ? (C = Y) : (N.sibling = Y),
        (N = Y),
        (P = I);
    }
    if (L.done) return n(g, P), ke && fr(g, E), C;
    if (P === null) {
      for (; !L.done; E++, L = b.next())
        (L = c(g, L.value, S)),
          L !== null &&
            ((y = i(L, y, E)), N === null ? (C = L) : (N.sibling = L), (N = L));
      return ke && fr(g, E), C;
    }
    for (P = r(g, P); !L.done; E++, L = b.next())
      (L = m(P, g, E, L.value, S)),
        L !== null &&
          (e && L.alternate !== null && P.delete(L.key === null ? E : L.key),
          (y = i(L, y, E)),
          N === null ? (C = L) : (N.sibling = L),
          (N = L));
    return (
      e &&
        P.forEach(function (D) {
          return t(g, D);
        }),
      ke && fr(g, E),
      C
    );
  }
  function x(g, y, b, S) {
    if (
      (typeof b == 'object' &&
        b !== null &&
        b.type === Wr &&
        b.key === null &&
        (b = b.props.children),
      typeof b == 'object' && b !== null)
    ) {
      switch (b.$$typeof) {
        case oa:
          e: {
            for (var C = b.key, N = y; N !== null; ) {
              if (N.key === C) {
                if (((C = b.type), C === Wr)) {
                  if (N.tag === 7) {
                    n(g, N.sibling),
                      (y = o(N, b.props.children)),
                      (y.return = g),
                      (g = y);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === An &&
                    Np(C) === N.type)
                ) {
                  n(g, N.sibling),
                    (y = o(N, b.props)),
                    (y.ref = jo(g, N, b)),
                    (y.return = g),
                    (g = y);
                  break e;
                }
                n(g, N);
                break;
              } else t(g, N);
              N = N.sibling;
            }
            b.type === Wr
              ? ((y = br(b.props.children, g.mode, S, b.key)),
                (y.return = g),
                (g = y))
              : ((S = Ba(b.type, b.key, b.props, null, g.mode, S)),
                (S.ref = jo(g, y, b)),
                (S.return = g),
                (g = S));
          }
          return a(g);
        case zr:
          e: {
            for (N = b.key; y !== null; ) {
              if (y.key === N)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === b.containerInfo &&
                  y.stateNode.implementation === b.implementation
                ) {
                  n(g, y.sibling),
                    (y = o(y, b.children || [])),
                    (y.return = g),
                    (g = y);
                  break e;
                } else {
                  n(g, y);
                  break;
                }
              else t(g, y);
              y = y.sibling;
            }
            (y = uu(b, g.mode, S)), (y.return = g), (g = y);
          }
          return a(g);
        case An:
          return (N = b._init), x(g, y, N(b._payload), S);
      }
      if (Ko(b)) return h(g, y, b, S);
      if (Do(b)) return v(g, y, b, S);
      ha(g, b);
    }
    return (typeof b == 'string' && b !== '') || typeof b == 'number'
      ? ((b = '' + b),
        y !== null && y.tag === 6
          ? (n(g, y.sibling), (y = o(y, b)), (y.return = g), (g = y))
          : (n(g, y), (y = su(b, g.mode, S)), (y.return = g), (g = y)),
        a(g))
      : n(g, y);
  }
  return x;
}
var uo = T0(!0),
  R0 = T0(!1),
  Vi = {},
  rn = lr(Vi),
  Si = lr(Vi),
  Ci = lr(Vi);
function yr(e) {
  if (e === Vi) throw Error(M(174));
  return e;
}
function Td(e, t) {
  switch ((we(Ci, t), we(Si, e), we(rn, Vi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hu(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hu(t, e));
  }
  Ce(rn), we(rn, t);
}
function co() {
  Ce(rn), Ce(Si), Ce(Ci);
}
function M0(e) {
  yr(Ci.current);
  var t = yr(rn.current),
    n = Hu(t, e.type);
  t !== n && (we(Si, e), we(rn, n));
}
function Rd(e) {
  Si.current === e && (Ce(rn), Ce(Si));
}
var Ee = lr(0);
function gl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var nu = [];
function Md() {
  for (var e = 0; e < nu.length; e++)
    nu[e]._workInProgressVersionPrimary = null;
  nu.length = 0;
}
var Ia = Pn.ReactCurrentDispatcher,
  ru = Pn.ReactCurrentBatchConfig,
  kr = 0,
  Ne = null,
  Fe = null,
  We = null,
  yl = !1,
  oi = !1,
  ki = 0,
  d2 = 0;
function Xe() {
  throw Error(M(321));
}
function Dd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Gt(e[n], t[n])) return !1;
  return !0;
}
function Ld(e, t, n, r, o, i) {
  if (
    ((kr = i),
    (Ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ia.current = e === null || e.memoizedState === null ? h2 : v2),
    (e = n(r, o)),
    oi)
  ) {
    i = 0;
    do {
      if (((oi = !1), (ki = 0), 25 <= i)) throw Error(M(301));
      (i += 1),
        (We = Fe = null),
        (t.updateQueue = null),
        (Ia.current = g2),
        (e = n(r, o));
    } while (oi);
  }
  if (
    ((Ia.current = wl),
    (t = Fe !== null && Fe.next !== null),
    (kr = 0),
    (We = Fe = Ne = null),
    (yl = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function Ad() {
  var e = ki !== 0;
  return (ki = 0), e;
}
function Jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return We === null ? (Ne.memoizedState = We = e) : (We = We.next = e), We;
}
function Dt() {
  if (Fe === null) {
    var e = Ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Fe.next;
  var t = We === null ? Ne.memoizedState : We.next;
  if (t !== null) (We = t), (Fe = e);
  else {
    if (e === null) throw Error(M(310));
    (Fe = e),
      (e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null,
      }),
      We === null ? (Ne.memoizedState = We = e) : (We = We.next = e);
  }
  return We;
}
function Ei(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ou(e) {
  var t = Dt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Fe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var d = u.lane;
      if ((kr & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = c), (a = r)) : (s = s.next = c),
          (Ne.lanes |= d),
          (Er |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = r) : (s.next = l),
      Gt(r, t.memoizedState) || (lt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ne.lanes |= i), (Er |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function iu(e) {
  var t = Dt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Gt(i, t.memoizedState) || (lt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function D0() {}
function L0(e, t) {
  var n = Ne,
    r = Dt(),
    o = t(),
    i = !Gt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (lt = !0)),
    (r = r.queue),
    Id(F0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (We !== null && We.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ni(9, I0.bind(null, n, r, o, t), void 0, null),
      Be === null)
    )
      throw Error(M(349));
    kr & 30 || A0(n, t, o);
  }
  return o;
}
function A0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function I0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), j0(t) && z0(e);
}
function F0(e, t, n) {
  return n(function () {
    j0(t) && z0(e);
  });
}
function j0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gt(e, n);
  } catch {
    return !0;
  }
}
function z0(e) {
  var t = Sn(e, 1);
  t !== null && Yt(t, e, 1, -1);
}
function _p(e) {
  var t = Jt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ei,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = m2.bind(null, Ne, e)),
    [t.memoizedState, e]
  );
}
function Ni(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function W0() {
  return Dt().memoizedState;
}
function Fa(e, t, n, r) {
  var o = Jt();
  (Ne.flags |= e),
    (o.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ql(e, t, n, r) {
  var o = Dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Fe !== null) {
    var a = Fe.memoizedState;
    if (((i = a.destroy), r !== null && Dd(r, a.deps))) {
      o.memoizedState = Ni(t, n, i, r);
      return;
    }
  }
  (Ne.flags |= e), (o.memoizedState = Ni(1 | t, n, i, r));
}
function Pp(e, t) {
  return Fa(8390656, 8, e, t);
}
function Id(e, t) {
  return Ql(2048, 8, e, t);
}
function B0(e, t) {
  return Ql(4, 2, e, t);
}
function U0(e, t) {
  return Ql(4, 4, e, t);
}
function H0(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function V0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ql(4, 4, H0.bind(null, t, e), n)
  );
}
function Fd() {}
function Y0(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Dd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function G0(e, t) {
  var n = Dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Dd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Q0(e, t, n) {
  return kr & 21
    ? (Gt(n, t) || ((n = qh()), (Ne.lanes |= n), (Er |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = n));
}
function f2(e, t) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ru.transition;
  ru.transition = {};
  try {
    e(!1), t();
  } finally {
    (he = n), (ru.transition = r);
  }
}
function K0() {
  return Dt().memoizedState;
}
function p2(e, t, n) {
  var r = Xn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    X0(e))
  )
    q0(t, n);
  else if (((n = _0(e, t, n, r)), n !== null)) {
    var o = nt();
    Yt(n, e, r, o), J0(n, t, r);
  }
}
function m2(e, t, n) {
  var r = Xn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (X0(e)) q0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Gt(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), $d(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = _0(e, t, o, r)),
      n !== null && ((o = nt()), Yt(n, e, r, o), J0(n, t, r));
  }
}
function X0(e) {
  var t = e.alternate;
  return e === Ne || (t !== null && t === Ne);
}
function q0(e, t) {
  oi = yl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function J0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hd(e, n);
  }
}
var wl = {
    readContext: Mt,
    useCallback: Xe,
    useContext: Xe,
    useEffect: Xe,
    useImperativeHandle: Xe,
    useInsertionEffect: Xe,
    useLayoutEffect: Xe,
    useMemo: Xe,
    useReducer: Xe,
    useRef: Xe,
    useState: Xe,
    useDebugValue: Xe,
    useDeferredValue: Xe,
    useTransition: Xe,
    useMutableSource: Xe,
    useSyncExternalStore: Xe,
    useId: Xe,
    unstable_isNewReconciler: !1,
  },
  h2 = {
    readContext: Mt,
    useCallback: function (e, t) {
      return (Jt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Mt,
    useEffect: Pp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fa(4194308, 4, H0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fa(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fa(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Jt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = p2.bind(null, Ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Jt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: _p,
    useDebugValue: Fd,
    useDeferredValue: function (e) {
      return (Jt().memoizedState = e);
    },
    useTransition: function () {
      var e = _p(!1),
        t = e[0];
      return (e = f2.bind(null, e[1])), (Jt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ne,
        o = Jt();
      if (ke) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), Be === null)) throw Error(M(349));
        kr & 30 || A0(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Pp(F0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ni(9, I0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Jt(),
        t = Be.identifierPrefix;
      if (ke) {
        var n = vn,
          r = hn;
        (n = (r & ~(1 << (32 - Vt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ki++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = d2++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  v2 = {
    readContext: Mt,
    useCallback: Y0,
    useContext: Mt,
    useEffect: Id,
    useImperativeHandle: V0,
    useInsertionEffect: B0,
    useLayoutEffect: U0,
    useMemo: G0,
    useReducer: ou,
    useRef: W0,
    useState: function () {
      return ou(Ei);
    },
    useDebugValue: Fd,
    useDeferredValue: function (e) {
      var t = Dt();
      return Q0(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ou(Ei)[0],
        t = Dt().memoizedState;
      return [e, t];
    },
    useMutableSource: D0,
    useSyncExternalStore: L0,
    useId: K0,
    unstable_isNewReconciler: !1,
  },
  g2 = {
    readContext: Mt,
    useCallback: Y0,
    useContext: Mt,
    useEffect: Id,
    useImperativeHandle: V0,
    useInsertionEffect: B0,
    useLayoutEffect: U0,
    useMemo: G0,
    useReducer: iu,
    useRef: W0,
    useState: function () {
      return iu(Ei);
    },
    useDebugValue: Fd,
    useDeferredValue: function (e) {
      var t = Dt();
      return Fe === null ? (t.memoizedState = e) : Q0(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = iu(Ei)[0],
        t = Dt().memoizedState;
      return [e, t];
    },
    useMutableSource: D0,
    useSyncExternalStore: L0,
    useId: K0,
    unstable_isNewReconciler: !1,
  };
function fo(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Vy(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function au(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function pc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var y2 = typeof WeakMap == 'function' ? WeakMap : Map;
function Z0(e, t, n) {
  (n = yn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bl || ((bl = !0), (Cc = r)), pc(e, t);
    }),
    n
  );
}
function ev(e, t, n) {
  (n = yn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        pc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        pc(e, t),
          typeof r != 'function' &&
            (Kn === null ? (Kn = new Set([this])) : Kn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function $p(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new y2();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = R2.bind(null, e, t, n)), t.then(e, e));
}
function Op(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yn(-1, 1)), (t.tag = 2), Qn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var w2 = Pn.ReactCurrentOwner,
  lt = !1;
function tt(e, t, n, r) {
  t.child = e === null ? R0(t, null, n, r) : uo(t, e.child, n, r);
}
function Rp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ro(t, o),
    (r = Ld(e, t, n, r, i, o)),
    (n = Ad()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Cn(e, t, o))
      : (ke && n && Cd(t), (t.flags |= 1), tt(e, t, r, o), t.child)
  );
}
function Mp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Yd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), tv(e, t, i, r, o))
      : ((e = Ba(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : yi), n(a, r) && e.ref === t.ref)
    )
      return Cn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = qn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (yi(i, r) && e.ref === t.ref)
      if (((lt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (lt = !0);
      else return (t.lanes = e.lanes), Cn(e, t, o);
  }
  return mc(e, t, n, r, o);
}
function nv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(qr, ht),
        (ht |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(qr, ht),
          (ht |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        we(qr, ht),
        (ht |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(qr, ht),
      (ht |= r);
  return tt(e, t, o, n), t.child;
}
function rv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function mc(e, t, n, r, o) {
  var i = dt(n) ? Sr : et.current;
  return (
    (i = lo(t, i)),
    ro(t, o),
    (n = Ld(e, t, n, r, i, o)),
    (r = Ad()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Cn(e, t, o))
      : (ke && r && Cd(t), (t.flags |= 1), tt(e, t, n, o), t.child)
  );
}
function Dp(e, t, n, r, o) {
  if (dt(n)) {
    var i = !0;
    dl(t);
  } else i = !1;
  if ((ro(t, o), t.stateNode === null))
    ja(e, t), O0(t, n, r), fc(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Mt(u))
      : ((u = dt(n) ? Sr : et.current), (u = lo(t, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== u) && Ep(t, a, r, u)),
      (In = !1);
    var f = t.memoizedState;
    (a.state = f),
      vl(t, r, a, o),
      (s = t.memoizedState),
      l !== r || f !== s || ct.current || In
        ? (typeof d == 'function' && (dc(t, n, d, r), (s = t.memoizedState)),
          (l = In || kp(t, n, l, r, f, s, u))
            ? (c ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      P0(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Wt(t.type, l)),
      (a.props = u),
      (c = t.pendingProps),
      (f = a.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Mt(s))
        : ((s = dt(n) ? Sr : et.current), (s = lo(t, s)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== c || f !== s) && Ep(t, a, r, s)),
      (In = !1),
      (f = t.memoizedState),
      (a.state = f),
      vl(t, r, a, o);
    var h = t.memoizedState;
    l !== c || f !== h || ct.current || In
      ? (typeof m == 'function' && (dc(t, n, m, r), (h = t.memoizedState)),
        (u = In || kp(t, n, u, r, f, h, s) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, h, s),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, h, s)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (a.props = r),
        (a.state = h),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return hc(e, t, n, r, i, o);
}
function hc(e, t, n, r, o, i) {
  rv(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && wp(t, n, !1), Cn(e, t, i);
  (r = t.stateNode), (w2.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = uo(t, e.child, null, i)), (t.child = uo(t, null, l, i)))
      : tt(e, t, l, i),
    (t.memoizedState = r.state),
    o && wp(t, n, !0),
    t.child
  );
}
function ov(e) {
  var t = e.stateNode;
  t.pendingContext
    ? yp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yp(e, t.context, !1),
    Td(e, t.containerInfo);
}
function Lp(e, t, n, r, o) {
  return so(), Ed(o), (t.flags |= 256), tt(e, t, n, r), t.child;
}
var vc = { dehydrated: null, treeContext: null, retryLane: 0 };
function gc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function iv(e, t, n) {
  var r = t.pendingProps,
    o = Ee.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    we(Ee, o & 1),
    e === null)
  )
    return (
      uc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = ql(a, r, 0, null)),
              (e = br(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = gc(n)),
              (t.memoizedState = vc),
              e)
            : jd(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return x2(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = qn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = qn(l, i)) : ((i = br(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? gc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = vc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = qn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function jd(e, t) {
  return (
    (t = ql({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function va(e, t, n, r) {
  return (
    r !== null && Ed(r),
    uo(t, e.child, null, n),
    (e = jd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function x2(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = au(Error(M(422)))), va(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ql({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = br(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && uo(t, e.child, null, a),
          (t.child.memoizedState = gc(a)),
          (t.memoizedState = vc),
          i);
  if (!(t.mode & 1)) return va(e, t, a, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(M(419))), (r = au(i, r, void 0)), va(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), lt || l)) {
    if (((r = Be), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Sn(e, o), Yt(r, e, o, -1));
    }
    return Vd(), (r = au(Error(M(421)))), va(e, t, a, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = M2.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (gt = Gn(o.nextSibling)),
      (yt = t),
      (ke = !0),
      (Ut = null),
      e !== null &&
        ((Et[Nt++] = hn),
        (Et[Nt++] = vn),
        (Et[Nt++] = Cr),
        (hn = e.id),
        (vn = e.overflow),
        (Cr = t)),
      (t = jd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ap(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cc(e.return, t, n);
}
function lu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function av(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((tt(e, t, r.children, n), (r = Ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ap(e, n, t);
        else if (e.tag === 19) Ap(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((we(Ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && gl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          lu(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        lu(t, !0, n, null, i);
        break;
      case 'together':
        lu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ja(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Cn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Er |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function b2(e, t, n) {
  switch (t.tag) {
    case 3:
      ov(t), so();
      break;
    case 5:
      M0(t);
      break;
    case 1:
      dt(t.type) && dl(t);
      break;
    case 4:
      Td(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      we(ml, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(Ee, Ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? iv(e, t, n)
            : (we(Ee, Ee.current & 1),
              (e = Cn(e, t, n)),
              e !== null ? e.sibling : null);
      we(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return av(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        we(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nv(e, t, n);
  }
  return Cn(e, t, n);
}
var lv, yc, sv, uv;
lv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
yc = function () {};
sv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), yr(rn.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = zu(e, o)), (r = zu(e, r)), (i = []);
        break;
      case 'select':
        (o = _e({}, o, { value: void 0 })),
          (r = _e({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Uu(e, o)), (r = Uu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ul);
    }
    Vu(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (di.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (i = i || []).push(u, '' + s)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (di.hasOwnProperty(u)
                  ? (s != null && u === 'onScroll' && Se('scroll', e),
                    i || l === s || (i = []))
                  : (i = i || []).push(u, s));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
uv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zo(e, t) {
  if (!ke)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function S2(e, t, n) {
  var r = t.pendingProps;
  switch ((kd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return qe(t), null;
    case 1:
      return dt(t.type) && cl(), qe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        co(),
        Ce(ct),
        Ce(et),
        Md(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ma(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ut !== null && (Nc(Ut), (Ut = null)))),
        yc(e, t),
        qe(t),
        null
      );
    case 5:
      Rd(t);
      var o = yr(Ci.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return qe(t), null;
        }
        if (((e = yr(rn.current)), ma(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Zt] = t), (r[bi] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Se('cancel', r), Se('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Se('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < qo.length; o++) Se(qo[o], r);
              break;
            case 'source':
              Se('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Se('error', r), Se('load', r);
              break;
            case 'details':
              Se('toggle', r);
              break;
            case 'input':
              Vf(r, i), Se('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Se('invalid', r);
              break;
            case 'textarea':
              Gf(r, i), Se('invalid', r);
          }
          Vu(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      pa(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      pa(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : di.hasOwnProperty(a) &&
                  l != null &&
                  a === 'onScroll' &&
                  Se('scroll', r);
            }
          switch (n) {
            case 'input':
              ia(r), Yf(r, i, !0);
              break;
            case 'textarea':
              ia(r), Qf(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = ul);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Ah(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === 'select' &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Zt] = t),
            (e[bi] = r),
            lv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Yu(n, r)), n)) {
              case 'dialog':
                Se('cancel', e), Se('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Se('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < qo.length; o++) Se(qo[o], e);
                o = r;
                break;
              case 'source':
                Se('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Se('error', e), Se('load', e), (o = r);
                break;
              case 'details':
                Se('toggle', e), (o = r);
                break;
              case 'input':
                Vf(e, r), (o = zu(e, r)), Se('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = _e({}, r, { value: void 0 })),
                  Se('invalid', e);
                break;
              case 'textarea':
                Gf(e, r), (o = Uu(e, r)), Se('invalid', e);
                break;
              default:
                o = r;
            }
            Vu(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === 'style'
                  ? jh(e, s)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && Ih(e, s))
                    : i === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && fi(e, s)
                        : typeof s == 'number' && fi(e, '' + s)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (di.hasOwnProperty(i)
                          ? s != null && i === 'onScroll' && Se('scroll', e)
                          : s != null && ud(e, i, s, a));
              }
            switch (n) {
              case 'input':
                ia(e), Yf(e, r, !1);
                break;
              case 'textarea':
                ia(e), Qf(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + er(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Zr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Zr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = ul);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return qe(t), null;
    case 6:
      if (e && t.stateNode != null) uv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(M(166));
        if (((n = yr(Ci.current)), yr(rn.current), ma(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Zt] = t),
            (i = r.nodeValue !== n) && ((e = yt), e !== null))
          )
            switch (e.tag) {
              case 3:
                pa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Zt] = t),
            (t.stateNode = r);
      }
      return qe(t), null;
    case 13:
      if (
        (Ce(Ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ke && gt !== null && t.mode & 1 && !(t.flags & 128))
          N0(), so(), (t.flags |= 98560), (i = !1);
        else if (((i = ma(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(M(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(M(317));
            i[Zt] = t;
          } else
            so(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          qe(t), (i = !1);
        } else Ut !== null && (Nc(Ut), (Ut = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ee.current & 1 ? ze === 0 && (ze = 3) : Vd())),
          t.updateQueue !== null && (t.flags |= 4),
          qe(t),
          null);
    case 4:
      return (
        co(), yc(e, t), e === null && wi(t.stateNode.containerInfo), qe(t), null
      );
    case 10:
      return Pd(t.type._context), qe(t), null;
    case 17:
      return dt(t.type) && cl(), qe(t), null;
    case 19:
      if ((Ce(Ee), (i = t.memoizedState), i === null)) return qe(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) zo(i, !1);
        else {
          if (ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = gl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    zo(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return we(Ee, (Ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Oe() > po &&
            ((t.flags |= 128), (r = !0), zo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zo(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !ke)
            )
              return qe(t), null;
          } else
            2 * Oe() - i.renderingStartTime > po &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Oe()),
          (t.sibling = null),
          (n = Ee.current),
          we(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (qe(t), null);
    case 22:
    case 23:
      return (
        Hd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ht & 1073741824 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : qe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function C2(e, t) {
  switch ((kd(t), t.tag)) {
    case 1:
      return (
        dt(t.type) && cl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        co(),
        Ce(ct),
        Ce(et),
        Md(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Rd(t), null;
    case 13:
      if (
        (Ce(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        so();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ce(Ee), null;
    case 4:
      return co(), null;
    case 10:
      return Pd(t.type._context), null;
    case 22:
    case 23:
      return Hd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ga = !1,
  Ze = !1,
  k2 = typeof WeakSet == 'function' ? WeakSet : Set,
  H = null;
function Xr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Pe(e, t, r);
      }
    else n.current = null;
}
function wc(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var Ip = !1;
function E2(e, t) {
  if (((nc = al), (e = p0()), Sd(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              c !== n || (o !== 0 && c.nodeType !== 3) || (l = a + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (s = a + r),
                c.nodeType === 3 && (a += c.nodeValue.length),
                (m = c.firstChild) !== null;

            )
              (f = c), (c = m);
            for (;;) {
              if (c === e) break t;
              if (
                (f === n && ++u === o && (l = a),
                f === i && ++d === r && (s = a),
                (m = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = m;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (rc = { focusedElem: e, selectionRange: n }, al = !1, H = t; H !== null; )
    if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (H = e);
    else
      for (; H !== null; ) {
        t = H;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var v = h.memoizedProps,
                    x = h.memoizedState,
                    g = t.stateNode,
                    y = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Wt(t.type, v),
                      x,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1
                  ? (b.textContent = '')
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (S) {
          Pe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (H = e);
          break;
        }
        H = t.return;
      }
  return (h = Ip), (Ip = !1), h;
}
function ii(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && wc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Kl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function cv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Zt], delete t[bi], delete t[ac], delete t[l2], delete t[s2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ul));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bc(e, t, n), e = e.sibling; e !== null; ) bc(e, t, n), (e = e.sibling);
}
function Sc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Sc(e, t, n), e = e.sibling; e !== null; ) Sc(e, t, n), (e = e.sibling);
}
var Ye = null,
  Bt = !1;
function Tn(e, t, n) {
  for (n = n.child; n !== null; ) fv(e, t, n), (n = n.sibling);
}
function fv(e, t, n) {
  if (nn && typeof nn.onCommitFiberUnmount == 'function')
    try {
      nn.onCommitFiberUnmount(Wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ze || Xr(n, t);
    case 6:
      var r = Ye,
        o = Bt;
      (Ye = null),
        Tn(e, t, n),
        (Ye = r),
        (Bt = o),
        Ye !== null &&
          (Bt
            ? ((e = Ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ye.removeChild(n.stateNode));
      break;
    case 18:
      Ye !== null &&
        (Bt
          ? ((e = Ye),
            (n = n.stateNode),
            e.nodeType === 8
              ? eu(e.parentNode, n)
              : e.nodeType === 1 && eu(e, n),
            vi(e))
          : eu(Ye, n.stateNode));
      break;
    case 4:
      (r = Ye),
        (o = Bt),
        (Ye = n.stateNode.containerInfo),
        (Bt = !0),
        Tn(e, t, n),
        (Ye = r),
        (Bt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && wc(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Tn(e, t, n);
      break;
    case 1:
      if (
        !Ze &&
        (Xr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Pe(n, t, l);
        }
      Tn(e, t, n);
      break;
    case 21:
      Tn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ze = (r = Ze) || n.memoizedState !== null), Tn(e, t, n), (Ze = r))
        : Tn(e, t, n);
      break;
    default:
      Tn(e, t, n);
  }
}
function jp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new k2()),
      t.forEach(function (r) {
        var o = D2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ye = l.stateNode), (Bt = !1);
              break e;
            case 3:
              (Ye = l.stateNode.containerInfo), (Bt = !0);
              break e;
            case 4:
              (Ye = l.stateNode.containerInfo), (Bt = !0);
              break e;
          }
          l = l.return;
        }
        if (Ye === null) throw Error(M(160));
        fv(i, a, o), (Ye = null), (Bt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Pe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) pv(t, e), (t = t.sibling);
}
function pv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ft(t, e), qt(e), r & 4)) {
        try {
          ii(3, e, e.return), Kl(3, e);
        } catch (v) {
          Pe(e, e.return, v);
        }
        try {
          ii(5, e, e.return);
        } catch (v) {
          Pe(e, e.return, v);
        }
      }
      break;
    case 1:
      Ft(t, e), qt(e), r & 512 && n !== null && Xr(n, n.return);
      break;
    case 5:
      if (
        (Ft(t, e),
        qt(e),
        r & 512 && n !== null && Xr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          fi(o, '');
        } catch (v) {
          Pe(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && Dh(o, i),
              Yu(l, a);
            var u = Yu(l, i);
            for (a = 0; a < s.length; a += 2) {
              var d = s[a],
                c = s[a + 1];
              d === 'style'
                ? jh(o, c)
                : d === 'dangerouslySetInnerHTML'
                  ? Ih(o, c)
                  : d === 'children'
                    ? fi(o, c)
                    : ud(o, d, c, u);
            }
            switch (l) {
              case 'input':
                Wu(o, i);
                break;
              case 'textarea':
                Lh(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Zr(o, !!i.multiple, m, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Zr(o, !!i.multiple, i.defaultValue, !0)
                      : Zr(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[bi] = i;
          } catch (v) {
            Pe(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ft(t, e), qt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Pe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ft(t, e), qt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vi(t.containerInfo);
        } catch (v) {
          Pe(e, e.return, v);
        }
      break;
    case 4:
      Ft(t, e), qt(e);
      break;
    case 13:
      Ft(t, e),
        qt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Bd = Oe())),
        r & 4 && jp(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ze = (u = Ze) || d), Ft(t, e), (Ze = u)) : Ft(t, e),
        qt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (H = e, d = e.child; d !== null; ) {
            for (c = H = d; H !== null; ) {
              switch (((f = H), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ii(4, f, f.return);
                  break;
                case 1:
                  Xr(f, f.return);
                  var h = f.stateNode;
                  if (typeof h.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (v) {
                      Pe(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Xr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Wp(c);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (H = m)) : Wp(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = c.stateNode),
                      (s = c.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (l.style.display = Fh('display', a)));
              } catch (v) {
                Pe(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? '' : c.memoizedProps;
              } catch (v) {
                Pe(e, e.return, v);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Ft(t, e), qt(e), r & 4 && jp(e);
      break;
    case 21:
      break;
    default:
      Ft(t, e), qt(e);
  }
}
function qt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (fi(o, ''), (r.flags &= -33));
          var i = Fp(e);
          Sc(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Fp(e);
          bc(e, l, a);
          break;
        default:
          throw Error(M(161));
      }
    } catch (s) {
      Pe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function N2(e, t, n) {
  (H = e), mv(e);
}
function mv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var o = H,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ga;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || Ze;
        l = ga;
        var u = Ze;
        if (((ga = a), (Ze = s) && !u))
          for (H = o; H !== null; )
            (a = H),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Bp(o)
                : s !== null
                  ? ((s.return = a), (H = s))
                  : Bp(o);
        for (; i !== null; ) (H = i), mv(i), (i = i.sibling);
        (H = o), (ga = l), (Ze = u);
      }
      zp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (H = i)) : zp(e);
  }
}
function zp(e) {
  for (; H !== null; ) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ze || Kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ze)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Cp(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Cp(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && vi(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        Ze || (t.flags & 512 && xc(t));
      } catch (f) {
        Pe(t, t.return, f);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (H = n);
      break;
    }
    H = t.return;
  }
}
function Wp(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (H = n);
      break;
    }
    H = t.return;
  }
}
function Bp(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Kl(4, t);
          } catch (s) {
            Pe(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Pe(t, o, s);
            }
          }
          var i = t.return;
          try {
            xc(t);
          } catch (s) {
            Pe(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            xc(t);
          } catch (s) {
            Pe(t, a, s);
          }
      }
    } catch (s) {
      Pe(t, t.return, s);
    }
    if (t === e) {
      H = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (H = l);
      break;
    }
    H = t.return;
  }
}
var _2 = Math.ceil,
  xl = Pn.ReactCurrentDispatcher,
  zd = Pn.ReactCurrentOwner,
  Pt = Pn.ReactCurrentBatchConfig,
  ue = 0,
  Be = null,
  Re = null,
  Ge = 0,
  ht = 0,
  qr = lr(0),
  ze = 0,
  _i = null,
  Er = 0,
  Xl = 0,
  Wd = 0,
  ai = null,
  at = null,
  Bd = 0,
  po = 1 / 0,
  pn = null,
  bl = !1,
  Cc = null,
  Kn = null,
  ya = !1,
  Wn = null,
  Sl = 0,
  li = 0,
  kc = null,
  za = -1,
  Wa = 0;
function nt() {
  return ue & 6 ? Oe() : za !== -1 ? za : (za = Oe());
}
function Xn(e) {
  return e.mode & 1
    ? ue & 2 && Ge !== 0
      ? Ge & -Ge
      : c2.transition !== null
        ? (Wa === 0 && (Wa = qh()), Wa)
        : ((e = he),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : o0(e.type))),
          e)
    : 1;
}
function Yt(e, t, n, r) {
  if (50 < li) throw ((li = 0), (kc = null), Error(M(185)));
  Bi(e, n, r),
    (!(ue & 2) || e !== Be) &&
      (e === Be && (!(ue & 2) && (Xl |= n), ze === 4 && jn(e, Ge)),
      ft(e, r),
      n === 1 && ue === 0 && !(t.mode & 1) && ((po = Oe() + 500), Yl && sr()));
}
function ft(e, t) {
  var n = e.callbackNode;
  cw(e, t);
  var r = il(e, e === Be ? Ge : 0);
  if (r === 0)
    n !== null && qf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && qf(n), t === 1))
      e.tag === 0 ? u2(Up.bind(null, e)) : C0(Up.bind(null, e)),
        i2(function () {
          !(ue & 6) && sr();
        }),
        (n = null);
    else {
      switch (Jh(r)) {
        case 1:
          n = md;
          break;
        case 4:
          n = Kh;
          break;
        case 16:
          n = ol;
          break;
        case 536870912:
          n = Xh;
          break;
        default:
          n = ol;
      }
      n = Sv(n, hv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function hv(e, t) {
  if (((za = -1), (Wa = 0), ue & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (oo() && e.callbackNode !== n) return null;
  var r = il(e, e === Be ? Ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
  else {
    t = r;
    var o = ue;
    ue |= 2;
    var i = gv();
    (Be !== e || Ge !== t) && ((pn = null), (po = Oe() + 500), xr(e, t));
    do
      try {
        O2();
        break;
      } catch (l) {
        vv(e, l);
      }
    while (1);
    _d(),
      (xl.current = i),
      (ue = o),
      Re !== null ? (t = 0) : ((Be = null), (Ge = 0), (t = ze));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = qu(e)), o !== 0 && ((r = o), (t = Ec(e, o)))), t === 1)
    )
      throw ((n = _i), xr(e, 0), jn(e, r), ft(e, Oe()), n);
    if (t === 6) jn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !P2(o) &&
          ((t = Cl(e, r)),
          t === 2 && ((i = qu(e)), i !== 0 && ((r = i), (t = Ec(e, i)))),
          t === 1))
      )
        throw ((n = _i), xr(e, 0), jn(e, r), ft(e, Oe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          pr(e, at, pn);
          break;
        case 3:
          if (
            (jn(e, r), (r & 130023424) === r && ((t = Bd + 500 - Oe()), 10 < t))
          ) {
            if (il(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              nt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ic(pr.bind(null, e, at, pn), t);
            break;
          }
          pr(e, at, pn);
          break;
        case 4:
          if ((jn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Vt(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * _2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ic(pr.bind(null, e, at, pn), r);
            break;
          }
          pr(e, at, pn);
          break;
        case 5:
          pr(e, at, pn);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return ft(e, Oe()), e.callbackNode === n ? hv.bind(null, e) : null;
}
function Ec(e, t) {
  var n = ai;
  return (
    e.current.memoizedState.isDehydrated && (xr(e, t).flags |= 256),
    (e = Cl(e, t)),
    e !== 2 && ((t = at), (at = n), t !== null && Nc(t)),
    e
  );
}
function Nc(e) {
  at === null ? (at = e) : at.push.apply(at, e);
}
function P2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Gt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function jn(e, t) {
  for (
    t &= ~Wd,
      t &= ~Xl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Up(e) {
  if (ue & 6) throw Error(M(327));
  oo();
  var t = il(e, 0);
  if (!(t & 1)) return ft(e, Oe()), null;
  var n = Cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = qu(e);
    r !== 0 && ((t = r), (n = Ec(e, r)));
  }
  if (n === 1) throw ((n = _i), xr(e, 0), jn(e, t), ft(e, Oe()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    pr(e, at, pn),
    ft(e, Oe()),
    null
  );
}
function Ud(e, t) {
  var n = ue;
  ue |= 1;
  try {
    return e(t);
  } finally {
    (ue = n), ue === 0 && ((po = Oe() + 500), Yl && sr());
  }
}
function Nr(e) {
  Wn !== null && Wn.tag === 0 && !(ue & 6) && oo();
  var t = ue;
  ue |= 1;
  var n = Pt.transition,
    r = he;
  try {
    if (((Pt.transition = null), (he = 1), e)) return e();
  } finally {
    (he = r), (Pt.transition = n), (ue = t), !(ue & 6) && sr();
  }
}
function Hd() {
  (ht = qr.current), Ce(qr);
}
function xr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), o2(n)), Re !== null))
    for (n = Re.return; n !== null; ) {
      var r = n;
      switch ((kd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cl();
          break;
        case 3:
          co(), Ce(ct), Ce(et), Md();
          break;
        case 5:
          Rd(r);
          break;
        case 4:
          co();
          break;
        case 13:
          Ce(Ee);
          break;
        case 19:
          Ce(Ee);
          break;
        case 10:
          Pd(r.type._context);
          break;
        case 22:
        case 23:
          Hd();
      }
      n = n.return;
    }
  if (
    ((Be = e),
    (Re = e = qn(e.current, null)),
    (Ge = ht = t),
    (ze = 0),
    (_i = null),
    (Wd = Xl = Er = 0),
    (at = ai = null),
    gr !== null)
  ) {
    for (t = 0; t < gr.length; t++)
      if (((n = gr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    gr = null;
  }
  return e;
}
function vv(e, t) {
  do {
    var n = Re;
    try {
      if ((_d(), (Ia.current = wl), yl)) {
        for (var r = Ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        yl = !1;
      }
      if (
        ((kr = 0),
        (We = Fe = Ne = null),
        (oi = !1),
        (ki = 0),
        (zd.current = null),
        n === null || n.return === null)
      ) {
        (ze = 1), (_i = t), (Re = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = Ge),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var u = s,
            d = l,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var m = Op(a);
          if (m !== null) {
            (m.flags &= -257),
              Tp(m, a, l, i, t),
              m.mode & 1 && $p(i, u, t),
              (t = m),
              (s = u);
            var h = t.updateQueue;
            if (h === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else h.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              $p(i, u, t), Vd();
              break e;
            }
            s = Error(M(426));
          }
        } else if (ke && l.mode & 1) {
          var x = Op(a);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Tp(x, a, l, i, t),
              Ed(fo(s, l));
            break e;
          }
        }
        (i = s = fo(s, l)),
          ze !== 4 && (ze = 2),
          ai === null ? (ai = [i]) : ai.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = Z0(i, s, t);
              Sp(i, g);
              break e;
            case 1:
              l = s;
              var y = i.type,
                b = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof y.getDerivedStateFromError == 'function' ||
                  (b !== null &&
                    typeof b.componentDidCatch == 'function' &&
                    (Kn === null || !Kn.has(b))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = ev(i, l, t);
                Sp(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      wv(n);
    } catch (C) {
      (t = C), Re === n && n !== null && (Re = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function gv() {
  var e = xl.current;
  return (xl.current = wl), e === null ? wl : e;
}
function Vd() {
  (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
    Be === null || (!(Er & 268435455) && !(Xl & 268435455)) || jn(Be, Ge);
}
function Cl(e, t) {
  var n = ue;
  ue |= 2;
  var r = gv();
  (Be !== e || Ge !== t) && ((pn = null), xr(e, t));
  do
    try {
      $2();
      break;
    } catch (o) {
      vv(e, o);
    }
  while (1);
  if ((_d(), (ue = n), (xl.current = r), Re !== null)) throw Error(M(261));
  return (Be = null), (Ge = 0), ze;
}
function $2() {
  for (; Re !== null; ) yv(Re);
}
function O2() {
  for (; Re !== null && !tw(); ) yv(Re);
}
function yv(e) {
  var t = bv(e.alternate, e, ht);
  (e.memoizedProps = e.pendingProps),
    t === null ? wv(e) : (Re = t),
    (zd.current = null);
}
function wv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = C2(n, t)), n !== null)) {
        (n.flags &= 32767), (Re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ze = 6), (Re = null);
        return;
      }
    } else if (((n = S2(n, t, ht)), n !== null)) {
      Re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Re = t;
      return;
    }
    Re = t = e;
  } while (t !== null);
  ze === 0 && (ze = 5);
}
function pr(e, t, n) {
  var r = he,
    o = Pt.transition;
  try {
    (Pt.transition = null), (he = 1), T2(e, t, n, r);
  } finally {
    (Pt.transition = o), (he = r);
  }
  return null;
}
function T2(e, t, n, r) {
  do oo();
  while (Wn !== null);
  if (ue & 6) throw Error(M(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (dw(e, i),
    e === Be && ((Re = Be = null), (Ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ya ||
      ((ya = !0),
      Sv(ol, function () {
        return oo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Pt.transition), (Pt.transition = null);
    var a = he;
    he = 1;
    var l = ue;
    (ue |= 4),
      (zd.current = null),
      E2(e, n),
      pv(n, e),
      qw(rc),
      (al = !!nc),
      (rc = nc = null),
      (e.current = n),
      N2(n),
      nw(),
      (ue = l),
      (he = a),
      (Pt.transition = i);
  } else e.current = n;
  if (
    (ya && ((ya = !1), (Wn = e), (Sl = o)),
    (i = e.pendingLanes),
    i === 0 && (Kn = null),
    iw(n.stateNode),
    ft(e, Oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (bl) throw ((bl = !1), (e = Cc), (Cc = null), e);
  return (
    Sl & 1 && e.tag !== 0 && oo(),
    (i = e.pendingLanes),
    i & 1 ? (e === kc ? li++ : ((li = 0), (kc = e))) : (li = 0),
    sr(),
    null
  );
}
function oo() {
  if (Wn !== null) {
    var e = Jh(Sl),
      t = Pt.transition,
      n = he;
    try {
      if (((Pt.transition = null), (he = 16 > e ? 16 : e), Wn === null))
        var r = !1;
      else {
        if (((e = Wn), (Wn = null), (Sl = 0), ue & 6)) throw Error(M(331));
        var o = ue;
        for (ue |= 4, H = e.current; H !== null; ) {
          var i = H,
            a = i.child;
          if (H.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (H = u; H !== null; ) {
                  var d = H;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ii(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (H = c);
                  else
                    for (; H !== null; ) {
                      d = H;
                      var f = d.sibling,
                        m = d.return;
                      if ((cv(d), d === u)) {
                        H = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (H = f);
                        break;
                      }
                      H = m;
                    }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var v = h.child;
                if (v !== null) {
                  h.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              H = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (H = a);
          else
            e: for (; H !== null; ) {
              if (((i = H), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ii(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (H = g);
                break e;
              }
              H = i.return;
            }
        }
        var y = e.current;
        for (H = y; H !== null; ) {
          a = H;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null) (b.return = a), (H = b);
          else
            e: for (a = y; H !== null; ) {
              if (((l = H), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl(9, l);
                  }
                } catch (C) {
                  Pe(l, l.return, C);
                }
              if (l === a) {
                H = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (H = S);
                break e;
              }
              H = l.return;
            }
        }
        if (
          ((ue = o), sr(), nn && typeof nn.onPostCommitFiberRoot == 'function')
        )
          try {
            nn.onPostCommitFiberRoot(Wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (he = n), (Pt.transition = t);
    }
  }
  return !1;
}
function Hp(e, t, n) {
  (t = fo(n, t)),
    (t = Z0(e, t, 1)),
    (e = Qn(e, t, 1)),
    (t = nt()),
    e !== null && (Bi(e, 1, t), ft(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) Hp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Kn === null || !Kn.has(r)))
        ) {
          (e = fo(n, e)),
            (e = ev(t, e, 1)),
            (t = Qn(t, e, 1)),
            (e = nt()),
            t !== null && (Bi(t, 1, e), ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function R2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = nt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Be === e &&
      (Ge & n) === n &&
      (ze === 4 || (ze === 3 && (Ge & 130023424) === Ge && 500 > Oe() - Bd)
        ? xr(e, 0)
        : (Wd |= n)),
    ft(e, t);
}
function xv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sa), (sa <<= 1), !(sa & 130023424) && (sa = 4194304))
      : (t = 1));
  var n = nt();
  (e = Sn(e, t)), e !== null && (Bi(e, t, n), ft(e, n));
}
function M2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xv(e, n);
}
function D2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), xv(e, n);
}
var bv;
bv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ct.current) lt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (lt = !1), b2(e, t, n);
      lt = !!(e.flags & 131072);
    }
  else (lt = !1), ke && t.flags & 1048576 && k0(t, pl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ja(e, t), (e = t.pendingProps);
      var o = lo(t, et.current);
      ro(t, n), (o = Ld(null, t, r, e, o, n));
      var i = Ad();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            dt(r) ? ((i = !0), dl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Od(t),
            (o.updater = Gl),
            (t.stateNode = o),
            (o._reactInternals = t),
            fc(t, r, e, n),
            (t = hc(null, t, r, !0, i, n)))
          : ((t.tag = 0), ke && i && Cd(t), tt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ja(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = A2(r)),
          (e = Wt(r, e)),
          o)
        ) {
          case 0:
            t = mc(null, t, r, e, n);
            break e;
          case 1:
            t = Dp(null, t, r, e, n);
            break e;
          case 11:
            t = Rp(null, t, r, e, n);
            break e;
          case 14:
            t = Mp(null, t, r, Wt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Wt(r, o)),
        mc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Wt(r, o)),
        Dp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((ov(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          P0(e, t),
          vl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = fo(Error(M(423)), t)), (t = Lp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = fo(Error(M(424)), t)), (t = Lp(e, t, r, n, o));
            break e;
          } else
            for (
              gt = Gn(t.stateNode.containerInfo.firstChild),
                yt = t,
                ke = !0,
                Ut = null,
                n = R0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((so(), r === o)) {
            t = Cn(e, t, n);
            break e;
          }
          tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        M0(t),
        e === null && uc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        oc(r, o) ? (a = null) : i !== null && oc(r, i) && (t.flags |= 32),
        rv(e, t),
        tt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && uc(t), null;
    case 13:
      return iv(e, t, n);
    case 4:
      return (
        Td(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = uo(t, null, r, n)) : tt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Wt(r, o)),
        Rp(e, t, r, o, n)
      );
    case 7:
      return tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          we(ml, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Gt(i.value, a)) {
            if (i.children === o.children && !ct.current) {
              t = Cn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = yn(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      cc(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(M(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  cc(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        tt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ro(t, n),
        (o = Mt(o)),
        (r = r(o)),
        (t.flags |= 1),
        tt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Wt(r, t.pendingProps)),
        (o = Wt(r.type, o)),
        Mp(e, t, r, o, n)
      );
    case 15:
      return tv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Wt(r, o)),
        ja(e, t),
        (t.tag = 1),
        dt(r) ? ((e = !0), dl(t)) : (e = !1),
        ro(t, n),
        O0(t, r, o),
        fc(t, r, o, n),
        hc(null, t, r, !0, e, n)
      );
    case 19:
      return av(e, t, n);
    case 22:
      return nv(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Sv(e, t) {
  return Qh(e, t);
}
function L2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _t(e, t, n, r) {
  return new L2(e, t, n, r);
}
function Yd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function A2(e) {
  if (typeof e == 'function') return Yd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dd)) return 11;
    if (e === fd) return 14;
  }
  return 2;
}
function qn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _t(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ba(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == 'function')) Yd(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case Wr:
        return br(n.children, o, i, t);
      case cd:
        (a = 8), (o |= 8);
        break;
      case Au:
        return (
          (e = _t(12, n, t, o | 2)), (e.elementType = Au), (e.lanes = i), e
        );
      case Iu:
        return (e = _t(13, n, t, o)), (e.elementType = Iu), (e.lanes = i), e;
      case Fu:
        return (e = _t(19, n, t, o)), (e.elementType = Fu), (e.lanes = i), e;
      case Th:
        return ql(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case $h:
              a = 10;
              break e;
            case Oh:
              a = 9;
              break e;
            case dd:
              a = 11;
              break e;
            case fd:
              a = 14;
              break e;
            case An:
              (a = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = _t(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function br(e, t, n, r) {
  return (e = _t(7, e, r, t)), (e.lanes = n), e;
}
function ql(e, t, n, r) {
  return (
    (e = _t(22, e, r, t)),
    (e.elementType = Th),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function su(e, t, n) {
  return (e = _t(6, e, null, t)), (e.lanes = n), e;
}
function uu(e, t, n) {
  return (
    (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function I2(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Us(0)),
    (this.expirationTimes = Us(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Us(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Gd(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new I2(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = _t(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Od(i),
    e
  );
}
function F2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cv(e) {
  if (!e) return tr;
  e = e._reactInternals;
  e: {
    if (Tr(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n)) return S0(e, n, t);
  }
  return t;
}
function kv(e, t, n, r, o, i, a, l, s) {
  return (
    (e = Gd(n, r, !0, e, o, i, a, l, s)),
    (e.context = Cv(null)),
    (n = e.current),
    (r = nt()),
    (o = Xn(n)),
    (i = yn(r, o)),
    (i.callback = t ?? null),
    Qn(n, i, o),
    (e.current.lanes = o),
    Bi(e, o, r),
    ft(e, r),
    e
  );
}
function Jl(e, t, n, r) {
  var o = t.current,
    i = nt(),
    a = Xn(o);
  return (
    (n = Cv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qn(o, t, a)),
    e !== null && (Yt(e, o, a, i), Aa(e, o, a)),
    a
  );
}
function kl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qd(e, t) {
  Vp(e, t), (e = e.alternate) && Vp(e, t);
}
function j2() {
  return null;
}
var Ev =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Kd(e) {
  this._internalRoot = e;
}
Zl.prototype.render = Kd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Jl(e, t, null, null);
};
Zl.prototype.unmount = Kd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nr(function () {
      Jl(null, e, null, null);
    }),
      (t[bn] = null);
  }
};
function Zl(e) {
  this._internalRoot = e;
}
Zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = t0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Fn.length && t !== 0 && t < Fn[n].priority; n++);
    Fn.splice(n, 0, e), n === 0 && r0(e);
  }
};
function Xd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function es(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Yp() {}
function z2(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = kl(a);
        i.call(u);
      };
    }
    var a = kv(t, r, e, 0, null, !1, !1, '', Yp);
    return (
      (e._reactRootContainer = a),
      (e[bn] = a.current),
      wi(e.nodeType === 8 ? e.parentNode : e),
      Nr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var u = kl(s);
      l.call(u);
    };
  }
  var s = Gd(e, 0, !1, null, null, !1, !1, '', Yp);
  return (
    (e._reactRootContainer = s),
    (e[bn] = s.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    Nr(function () {
      Jl(t, s, n, r);
    }),
    s
  );
}
function ts(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var s = kl(a);
        l.call(s);
      };
    }
    Jl(t, a, e, o);
  } else a = z2(n, t, e, o, r);
  return kl(a);
}
Zh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xo(t.pendingLanes);
        n !== 0 &&
          (hd(t, n | 1), ft(t, Oe()), !(ue & 6) && ((po = Oe() + 500), sr()));
      }
      break;
    case 13:
      Nr(function () {
        var r = Sn(e, 1);
        if (r !== null) {
          var o = nt();
          Yt(r, e, 1, o);
        }
      }),
        Qd(e, 1);
  }
};
vd = function (e) {
  if (e.tag === 13) {
    var t = Sn(e, 134217728);
    if (t !== null) {
      var n = nt();
      Yt(t, e, 134217728, n);
    }
    Qd(e, 134217728);
  }
};
e0 = function (e) {
  if (e.tag === 13) {
    var t = Xn(e),
      n = Sn(e, t);
    if (n !== null) {
      var r = nt();
      Yt(n, e, t, r);
    }
    Qd(e, t);
  }
};
t0 = function () {
  return he;
};
n0 = function (e, t) {
  var n = he;
  try {
    return (he = e), t();
  } finally {
    he = n;
  }
};
Qu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Wu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Vl(r);
            if (!o) throw Error(M(90));
            Mh(r), Wu(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Lh(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Zr(e, !!n.multiple, t, !1);
  }
};
Bh = Ud;
Uh = Nr;
var W2 = { usingClientEntryPoint: !1, Events: [Hi, Vr, Vl, zh, Wh, Ud] },
  Wo = {
    findFiberByHostInstance: vr,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  B2 = {
    bundleType: Wo.bundleType,
    version: Wo.version,
    rendererPackageName: Wo.rendererPackageName,
    rendererConfig: Wo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Yh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Wo.findFiberByHostInstance || j2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wa.isDisabled && wa.supportsFiber)
    try {
      (Wl = wa.inject(B2)), (nn = wa);
    } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xd(t)) throw Error(M(200));
  return F2(e, t, null, n);
};
bt.createRoot = function (e, t) {
  if (!Xd(e)) throw Error(M(299));
  var n = !1,
    r = '',
    o = Ev;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Gd(e, 1, !1, null, null, n, !1, r, o)),
    (e[bn] = t.current),
    wi(e.nodeType === 8 ? e.parentNode : e),
    new Kd(t)
  );
};
bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(M(188))
      : ((e = Object.keys(e).join(',')), Error(M(268, e)));
  return (e = Yh(t)), (e = e === null ? null : e.stateNode), e;
};
bt.flushSync = function (e) {
  return Nr(e);
};
bt.hydrate = function (e, t, n) {
  if (!es(t)) throw Error(M(200));
  return ts(null, e, t, !0, n);
};
bt.hydrateRoot = function (e, t, n) {
  if (!Xd(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    a = Ev;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = kv(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[bn] = t.current),
    wi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Zl(t);
};
bt.render = function (e, t, n) {
  if (!es(t)) throw Error(M(200));
  return ts(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function (e) {
  if (!es(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (Nr(function () {
        ts(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[bn] = null);
        });
      }),
      !0)
    : !1;
};
bt.unstable_batchedUpdates = Ud;
bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!es(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return ts(e, t, n, !1, r);
};
bt.version = '18.2.0-next-9e3b772b8-20220608';
function Nv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv);
    } catch (e) {
      console.error(e);
    }
}
Nv(), (kh.exports = bt);
var Yi = kh.exports;
const U2 = td(Yi);
var Gp = Yi;
(Du.createRoot = Gp.createRoot), (Du.hydrateRoot = Gp.hydrateRoot);
/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pi() {
  return (
    (Pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pi.apply(this, arguments)
  );
}
var Bn;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Bn || (Bn = {}));
const Qp = 'popstate';
function H2(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: l } = r.location;
    return _c(
      '',
      { pathname: i, search: a, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(r, o) {
    return typeof o == 'string' ? o : El(o);
  }
  return Y2(t, n, null, e);
}
function Te(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function qd(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function V2() {
  return Math.random().toString(36).substr(2, 8);
}
function Kp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function _c(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Pi(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? ko(t) : t,
      { state: n, key: (t && t.key) || r || V2() },
    )
  );
}
function El(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function ko(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Y2(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    l = Bn.Pop,
    s = null,
    u = d();
  u == null && ((u = 0), a.replaceState(Pi({}, a.state, { idx: u }), ''));
  function d() {
    return (a.state || { idx: null }).idx;
  }
  function c() {
    l = Bn.Pop;
    let x = d(),
      g = x == null ? null : x - u;
    (u = x), s && s({ action: l, location: v.location, delta: g });
  }
  function f(x, g) {
    l = Bn.Push;
    let y = _c(v.location, x, g);
    n && n(y, x), (u = d() + 1);
    let b = Kp(y, u),
      S = v.createHref(y);
    try {
      a.pushState(b, '', S);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      o.location.assign(S);
    }
    i && s && s({ action: l, location: v.location, delta: 1 });
  }
  function m(x, g) {
    l = Bn.Replace;
    let y = _c(v.location, x, g);
    n && n(y, x), (u = d());
    let b = Kp(y, u),
      S = v.createHref(y);
    a.replaceState(b, '', S),
      i && s && s({ action: l, location: v.location, delta: 0 });
  }
  function h(x) {
    let g = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      y = typeof x == 'string' ? x : El(x);
    return (
      Te(
        g,
        'No window.location.(origin|href) available to create URL for href: ' +
          y,
      ),
      new URL(y, g)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(x) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Qp, c),
        (s = x),
        () => {
          o.removeEventListener(Qp, c), (s = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: h,
    encodeLocation(x) {
      let g = h(x);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: m,
    go(x) {
      return a.go(x);
    },
  };
  return v;
}
var Xp;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Xp || (Xp = {}));
function G2(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? ko(t) : t,
    o = Jd(r.pathname || '/', n);
  if (o == null) return null;
  let i = _v(e);
  Q2(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) a = rx(i[l], ax(o));
  return a;
}
function _v(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let o = (i, a, l) => {
    let s = {
      relativePath: l === void 0 ? i.path || '' : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    s.relativePath.startsWith('/') &&
      (Te(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Jn([r, s.relativePath]),
      d = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (Te(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".'),
      ),
      _v(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: tx(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === '' || !((l = i.path) != null && l.includes('?'))) o(i, a);
      else for (let s of Pv(i.path)) o(i, a, s);
    }),
    t
  );
}
function Pv(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return o ? [i, ''] : [i];
  let a = Pv(r.join('/')),
    l = [];
  return (
    l.push(...a.map((s) => (s === '' ? i : [i, s].join('/')))),
    o && l.push(...a),
    l.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function Q2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : nx(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const K2 = /^:[\w-]+$/,
  X2 = 3,
  q2 = 2,
  J2 = 1,
  Z2 = 10,
  ex = -2,
  qp = (e) => e === '*';
function tx(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(qp) && (r += ex),
    t && (r += q2),
    n
      .filter((o) => !qp(o))
      .reduce((o, i) => o + (K2.test(i) ? X2 : i === '' ? J2 : Z2), r)
  );
}
function nx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function rx(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = o === '/' ? t : t.slice(o.length) || '/',
      d = ox(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u,
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let c = l.route;
    i.push({
      params: r,
      pathname: Jn([o, d.pathname]),
      pathnameBase: dx(Jn([o, d.pathnameBase])),
      route: c,
    }),
      d.pathnameBase !== '/' && (o = Jn([o, d.pathnameBase]));
  }
  return i;
}
function ox(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ix(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, '$1'),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, c) => {
      let { paramName: f, isOptional: m } = d;
      if (f === '*') {
        let v = l[c] || '';
        a = i.slice(0, i.length - v.length).replace(/(.)\/+$/, '$1');
      }
      const h = l[c];
      return m && !h ? (u[f] = void 0) : (u[f] = lx(h || '', f)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function ix(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    qd(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, l, s) => (
            r.push({ paramName: l, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (o += '\\/*$')
        : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  );
}
function ax(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      qd(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function lx(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      qd(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    );
  }
}
function Jd(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function sx(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? ko(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : ux(n, t)) : t,
    search: fx(r),
    hash: px(o),
  };
}
function ux(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function cu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function cx(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Zd(e, t) {
  let n = cx(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ef(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == 'string'
    ? (o = ko(e))
    : ((o = Pi({}, e)),
      Te(
        !o.pathname || !o.pathname.includes('?'),
        cu('?', 'pathname', 'search', o),
      ),
      Te(
        !o.pathname || !o.pathname.includes('#'),
        cu('#', 'pathname', 'hash', o),
      ),
      Te(!o.search || !o.search.includes('#'), cu('#', 'search', 'hash', o)));
  let i = e === '' || o.pathname === '',
    a = i ? '/' : o.pathname,
    l;
  if (a == null) l = n;
  else {
    let c = t.length - 1;
    if (!r && a.startsWith('..')) {
      let f = a.split('/');
      for (; f[0] === '..'; ) f.shift(), (c -= 1);
      o.pathname = f.join('/');
    }
    l = c >= 0 ? t[c] : '/';
  }
  let s = sx(o, l),
    u = a && a !== '/' && a.endsWith('/'),
    d = (i || a === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (u || d) && (s.pathname += '/'), s;
}
const Jn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  dx = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  fx = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  px = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function mx(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const $v = ['post', 'put', 'patch', 'delete'];
new Set($v);
const hx = ['get', ...$v];
new Set(hx);
/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $i() {
  return (
    ($i = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $i.apply(this, arguments)
  );
}
const tf = p.createContext(null),
  vx = p.createContext(null),
  ur = p.createContext(null),
  ns = p.createContext(null),
  ln = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ov = p.createContext(null);
function gx(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Eo() || Te(!1);
  let { basename: r, navigator: o } = p.useContext(ur),
    { hash: i, pathname: a, search: l } = Mv(e, { relative: n }),
    s = a;
  return (
    r !== '/' && (s = a === '/' ? r : Jn([r, a])),
    o.createHref({ pathname: s, search: l, hash: i })
  );
}
function Eo() {
  return p.useContext(ns) != null;
}
function Rr() {
  return Eo() || Te(!1), p.useContext(ns).location;
}
function Tv(e) {
  p.useContext(ur).static || p.useLayoutEffect(e);
}
function Rv() {
  let { isDataRoute: e } = p.useContext(ln);
  return e ? Rx() : yx();
}
function yx() {
  Eo() || Te(!1);
  let e = p.useContext(tf),
    { basename: t, future: n, navigator: r } = p.useContext(ur),
    { matches: o } = p.useContext(ln),
    { pathname: i } = Rr(),
    a = JSON.stringify(Zd(o, n.v7_relativeSplatPath)),
    l = p.useRef(!1);
  return (
    Tv(() => {
      l.current = !0;
    }),
    p.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let c = ef(u, JSON.parse(a), i, d.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Jn([t, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d);
      },
      [t, r, a, i, e],
    )
  );
}
const wx = p.createContext(null);
function xx(e) {
  let t = p.useContext(ln).outlet;
  return t && p.createElement(wx.Provider, { value: e }, t);
}
function rs() {
  let { matches: e } = p.useContext(ln),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Mv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = p.useContext(ur),
    { matches: o } = p.useContext(ln),
    { pathname: i } = Rr(),
    a = JSON.stringify(Zd(o, r.v7_relativeSplatPath));
  return p.useMemo(() => ef(e, JSON.parse(a), i, n === 'path'), [e, a, i, n]);
}
function bx(e, t) {
  return Sx(e, t);
}
function Sx(e, t, n, r) {
  Eo() || Te(!1);
  let { navigator: o } = p.useContext(ur),
    { matches: i } = p.useContext(ln),
    a = i[i.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let s = a ? a.pathnameBase : '/';
  a && a.route;
  let u = Rr(),
    d;
  if (t) {
    var c;
    let x = typeof t == 'string' ? ko(t) : t;
    s === '/' || ((c = x.pathname) != null && c.startsWith(s)) || Te(!1),
      (d = x);
  } else d = u;
  let f = d.pathname || '/',
    m = s === '/' ? f : f.slice(s.length) || '/',
    h = G2(e, { pathname: m }),
    v = _x(
      h &&
        h.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, l, x.params),
            pathname: Jn([
              s,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/'
                ? s
                : Jn([
                    s,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && v
    ? p.createElement(
        ns.Provider,
        {
          value: {
            location: $i(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              d,
            ),
            navigationType: Bn.Pop,
          },
        },
        v,
      )
    : v;
}
function Cx() {
  let e = Tx(),
    t = mx(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null;
  return p.createElement(
    p.Fragment,
    null,
    p.createElement('h2', null, 'Unexpected Application Error!'),
    p.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? p.createElement('pre', { style: o }, n) : null,
    i,
  );
}
const kx = p.createElement(Cx, null);
class Ex extends p.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? p.createElement(
          ln.Provider,
          { value: this.props.routeContext },
          p.createElement(Ov.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Nx(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = p.useContext(tf);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(ln.Provider, { value: t }, r)
  );
}
function _x(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = a.findIndex(
      (c) => c.route.id && (l == null ? void 0 : l[c.route.id]),
    );
    d >= 0 || Te(!1), (a = a.slice(0, Math.min(a.length, d + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < a.length; d++) {
      let c = a[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
        c.route.id)
      ) {
        let { loaderData: f, errors: m } = n,
          h =
            c.route.loader &&
            f[c.route.id] === void 0 &&
            (!m || m[c.route.id] === void 0);
        if (c.route.lazy || h) {
          (s = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((d, c, f) => {
    let m,
      h = !1,
      v = null,
      x = null;
    n &&
      ((m = l && c.route.id ? l[c.route.id] : void 0),
      (v = c.route.errorElement || kx),
      s &&
        (u < 0 && f === 0
          ? (Mx('route-fallback', !1), (h = !0), (x = null))
          : u === f &&
            ((h = !0), (x = c.route.hydrateFallbackElement || null))));
    let g = t.concat(a.slice(0, f + 1)),
      y = () => {
        let b;
        return (
          m
            ? (b = v)
            : h
              ? (b = x)
              : c.route.Component
                ? (b = p.createElement(c.route.Component, null))
                : c.route.element
                  ? (b = c.route.element)
                  : (b = d),
          p.createElement(Nx, {
            match: c,
            routeContext: { outlet: d, matches: g, isDataRoute: n != null },
            children: b,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
      ? p.createElement(Ex, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: m,
          children: y(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var Dv = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Dv || {}),
  Nl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Nl || {});
function Px(e) {
  let t = p.useContext(tf);
  return t || Te(!1), t;
}
function $x(e) {
  let t = p.useContext(vx);
  return t || Te(!1), t;
}
function Ox(e) {
  let t = p.useContext(ln);
  return t || Te(!1), t;
}
function Lv(e) {
  let t = Ox(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Te(!1), n.route.id;
}
function Tx() {
  var e;
  let t = p.useContext(Ov),
    n = $x(Nl.UseRouteError),
    r = Lv(Nl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Rx() {
  let { router: e } = Px(Dv.UseNavigateStable),
    t = Lv(Nl.UseNavigateStable),
    n = p.useRef(!1);
  return (
    Tv(() => {
      n.current = !0;
    }),
    p.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == 'number'
              ? e.navigate(o)
              : e.navigate(o, $i({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
const Jp = {};
function Mx(e, t, n) {
  !t && !Jp[e] && (Jp[e] = !0);
}
function mo(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  Eo() || Te(!1);
  let { future: i, static: a } = p.useContext(ur),
    { matches: l } = p.useContext(ln),
    { pathname: s } = Rr(),
    u = Rv(),
    d = ef(t, Zd(l, i.v7_relativeSplatPath), s, o === 'path'),
    c = JSON.stringify(d);
  return (
    p.useEffect(
      () => u(JSON.parse(c), { replace: n, state: r, relative: o }),
      [u, c, o, n, r],
    ),
    null
  );
}
function Dx(e) {
  return xx(e.context);
}
function mt(e) {
  Te(!1);
}
function Lx(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Bn.Pop,
    navigator: i,
    static: a = !1,
    future: l,
  } = e;
  Eo() && Te(!1);
  let s = t.replace(/^\/*/, '/'),
    u = p.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        future: $i({ v7_relativeSplatPath: !1 }, l),
      }),
      [s, l, i, a],
    );
  typeof r == 'string' && (r = ko(r));
  let {
      pathname: d = '/',
      search: c = '',
      hash: f = '',
      state: m = null,
      key: h = 'default',
    } = r,
    v = p.useMemo(() => {
      let x = Jd(d, s);
      return x == null
        ? null
        : {
            location: { pathname: x, search: c, hash: f, state: m, key: h },
            navigationType: o,
          };
    }, [s, d, c, f, m, h, o]);
  return v == null
    ? null
    : p.createElement(
        ur.Provider,
        { value: u },
        p.createElement(ns.Provider, { children: n, value: v }),
      );
}
function Ax(e) {
  let { children: t, location: n } = e;
  return bx(Pc(t), n);
}
new Promise(() => {});
function Pc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    p.Children.forEach(e, (r, o) => {
      if (!p.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === p.Fragment) {
        n.push.apply(n, Pc(r.props.children, i));
        return;
      }
      r.type !== mt && Te(!1), !r.props.index || !r.props.children || Te(!1);
      let a = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Pc(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $c() {
  return (
    ($c = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $c.apply(this, arguments)
  );
}
function Ix(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Fx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function jx(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Fx(e);
}
const zx = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Wx = '6';
try {
  window.__reactRouterVersion = Wx;
} catch {}
const Bx = 'startTransition',
  Zp = Sh[Bx];
function Ux(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = p.useRef();
  i.current == null && (i.current = H2({ window: o, v5Compat: !0 }));
  let a = i.current,
    [l, s] = p.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    d = p.useCallback(
      (c) => {
        u && Zp ? Zp(() => s(c)) : s(c);
      },
      [s, u],
    );
  return (
    p.useLayoutEffect(() => a.listen(d), [a, d]),
    p.createElement(Lx, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
      future: r,
    })
  );
}
const Hx =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Vx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $t = p.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: l,
        target: s,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: c,
      } = t,
      f = Ix(t, zx),
      { basename: m } = p.useContext(ur),
      h,
      v = !1;
    if (typeof u == 'string' && Vx.test(u) && ((h = u), Hx))
      try {
        let b = new URL(window.location.href),
          S = u.startsWith('//') ? new URL(b.protocol + u) : new URL(u),
          C = Jd(S.pathname, m);
        S.origin === b.origin && C != null
          ? (u = C + S.search + S.hash)
          : (v = !0);
      } catch {}
    let x = gx(u, { relative: o }),
      g = Yx(u, {
        replace: a,
        state: l,
        target: s,
        preventScrollReset: d,
        relative: o,
        unstable_viewTransition: c,
      });
    function y(b) {
      r && r(b), b.defaultPrevented || g(b);
    }
    return p.createElement(
      'a',
      $c({}, f, { href: h || x, onClick: v || i ? r : y, ref: n, target: s }),
    );
  });
var em;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(em || (em = {}));
var tm;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(tm || (tm = {}));
function Yx(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    s = Rv(),
    u = Rr(),
    d = Mv(e, { relative: a });
  return p.useCallback(
    (c) => {
      if (jx(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : El(u) === El(d);
        s(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: l,
        });
      }
    },
    [u, s, d, r, o, n, e, i, a, l],
  );
}
function Av(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Av(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function Un() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Av(e)) && (r && (r += ' '), (r += t));
  return r;
}
const si = (e) => typeof e == 'number' && !isNaN(e),
  _r = (e) => typeof e == 'string',
  st = (e) => typeof e == 'function',
  Ua = (e) => (_r(e) || st(e) ? e : null),
  du = (e) => p.isValidElement(e) || _r(e) || st(e) || si(e);
function Gx(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: o } = e;
  requestAnimationFrame(() => {
    (o.minHeight = 'initial'),
      (o.height = r + 'px'),
      (o.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (o.height = '0'), (o.padding = '0'), (o.margin = '0'), setTimeout(t, n);
      });
  });
}
function os(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: o = !0,
    collapseDuration: i = 300,
  } = e;
  return function (a) {
    let {
      children: l,
      position: s,
      preventExitTransition: u,
      done: d,
      nodeRef: c,
      isIn: f,
    } = a;
    const m = r ? `${t}--${s}` : t,
      h = r ? `${n}--${s}` : n,
      v = p.useRef(0);
    return (
      p.useLayoutEffect(() => {
        const x = c.current,
          g = m.split(' '),
          y = (b) => {
            b.target === c.current &&
              (x.dispatchEvent(new Event('d')),
              x.removeEventListener('animationend', y),
              x.removeEventListener('animationcancel', y),
              v.current === 0 &&
                b.type !== 'animationcancel' &&
                x.classList.remove(...g));
          };
        x.classList.add(...g),
          x.addEventListener('animationend', y),
          x.addEventListener('animationcancel', y);
      }, []),
      p.useEffect(() => {
        const x = c.current,
          g = () => {
            x.removeEventListener('animationend', g), o ? Gx(x, d, i) : d();
          };
        f ||
          (u
            ? g()
            : ((v.current = 1),
              (x.className += ` ${h}`),
              x.addEventListener('animationend', g)));
      }, [f]),
      Z.createElement(Z.Fragment, null, l)
    );
  };
}
function nm(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const kt = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      );
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((r) => r !== t);
        return this.list.set(e, n), this;
      }
      return this.list.delete(e), this;
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e);
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(n);
        });
    },
  },
  xa = (e) => {
    let { theme: t, type: n, ...r } = e;
    return Z.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill:
        t === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${n})`,
      ...r,
    });
  },
  fu = {
    info: function (e) {
      return Z.createElement(
        xa,
        { ...e },
        Z.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
        }),
      );
    },
    warning: function (e) {
      return Z.createElement(
        xa,
        { ...e },
        Z.createElement('path', {
          d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
        }),
      );
    },
    success: function (e) {
      return Z.createElement(
        xa,
        { ...e },
        Z.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
        }),
      );
    },
    error: function (e) {
      return Z.createElement(
        xa,
        { ...e },
        Z.createElement('path', {
          d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
        }),
      );
    },
    spinner: function () {
      return Z.createElement('div', { className: 'Toastify__spinner' });
    },
  };
function Qx(e) {
  const [, t] = p.useReducer((m) => m + 1, 0),
    [n, r] = p.useState([]),
    o = p.useRef(null),
    i = p.useRef(new Map()).current,
    a = (m) => n.indexOf(m) !== -1,
    l = p.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: a,
      getToast: (m) => i.get(m),
    }).current;
  function s(m) {
    let { containerId: h } = m;
    const { limit: v } = l.props;
    !v ||
      (h && l.containerId !== h) ||
      ((l.count -= l.queue.length), (l.queue = []));
  }
  function u(m) {
    r((h) => (m == null ? [] : h.filter((v) => v !== m)));
  }
  function d() {
    const { toastContent: m, toastProps: h, staleId: v } = l.queue.shift();
    f(m, h, v);
  }
  function c(m, h) {
    let { delay: v, staleId: x, ...g } = h;
    if (
      !du(m) ||
      (function (D) {
        return (
          !o.current ||
          (l.props.enableMultiContainer &&
            D.containerId !== l.props.containerId) ||
          (i.has(D.toastId) && D.updateId == null)
        );
      })(g)
    )
      return;
    const { toastId: y, updateId: b, data: S } = g,
      { props: C } = l,
      N = () => u(y),
      P = b == null;
    P && l.count++;
    const E = {
      ...C,
      style: C.toastStyle,
      key: l.toastKey++,
      ...Object.fromEntries(
        Object.entries(g).filter((D) => {
          let [K, B] = D;
          return B != null;
        }),
      ),
      toastId: y,
      updateId: b,
      data: S,
      closeToast: N,
      isIn: !1,
      className: Ua(g.className || C.toastClassName),
      bodyClassName: Ua(g.bodyClassName || C.bodyClassName),
      progressClassName: Ua(g.progressClassName || C.progressClassName),
      autoClose:
        !g.isLoading &&
        ((I = g.autoClose),
        (L = C.autoClose),
        I === !1 || (si(I) && I > 0) ? I : L),
      deleteToast() {
        const D = nm(i.get(y), 'removed');
        i.delete(y), kt.emit(4, D);
        const K = l.queue.length;
        if (
          ((l.count = y == null ? l.count - l.displayedToast : l.count - 1),
          l.count < 0 && (l.count = 0),
          K > 0)
        ) {
          const B = y == null ? l.props.limit : 1;
          if (K === 1 || B === 1) l.displayedToast++, d();
          else {
            const z = B > K ? K : B;
            l.displayedToast = z;
            for (let V = 0; V < z; V++) d();
          }
        } else t();
      },
    };
    var I, L;
    (E.iconOut = (function (D) {
      let { theme: K, type: B, isLoading: z, icon: V } = D,
        T = null;
      const k = { theme: K, type: B };
      return (
        V === !1 ||
          (st(V)
            ? (T = V(k))
            : p.isValidElement(V)
              ? (T = p.cloneElement(V, k))
              : _r(V) || si(V)
                ? (T = V)
                : z
                  ? (T = fu.spinner())
                  : ((W) => W in fu)(B) && (T = fu[B](k))),
        T
      );
    })(E)),
      st(g.onOpen) && (E.onOpen = g.onOpen),
      st(g.onClose) && (E.onClose = g.onClose),
      (E.closeButton = C.closeButton),
      g.closeButton === !1 || du(g.closeButton)
        ? (E.closeButton = g.closeButton)
        : g.closeButton === !0 &&
          (E.closeButton = !du(C.closeButton) || C.closeButton);
    let Y = m;
    p.isValidElement(m) && !_r(m.type)
      ? (Y = p.cloneElement(m, { closeToast: N, toastProps: E, data: S }))
      : st(m) && (Y = m({ closeToast: N, toastProps: E, data: S })),
      C.limit && C.limit > 0 && l.count > C.limit && P
        ? l.queue.push({ toastContent: Y, toastProps: E, staleId: x })
        : si(v)
          ? setTimeout(() => {
              f(Y, E, x);
            }, v)
          : f(Y, E, x);
  }
  function f(m, h, v) {
    const { toastId: x } = h;
    v && i.delete(v);
    const g = { content: m, props: h };
    i.set(x, g),
      r((y) => [...y, x].filter((b) => b !== v)),
      kt.emit(4, nm(g, g.props.updateId == null ? 'added' : 'updated'));
  }
  return (
    p.useEffect(
      () => (
        (l.containerId = e.containerId),
        kt
          .cancelEmit(3)
          .on(0, c)
          .on(1, (m) => o.current && u(m))
          .on(5, s)
          .emit(2, l),
        () => {
          i.clear(), kt.emit(3, l);
        }
      ),
      [],
    ),
    p.useEffect(() => {
      (l.props = e), (l.isToastActive = a), (l.displayedToast = n.length);
    }),
    {
      getToastToRender: function (m) {
        const h = new Map(),
          v = Array.from(i.values());
        return (
          e.newestOnTop && v.reverse(),
          v.forEach((x) => {
            const { position: g } = x.props;
            h.has(g) || h.set(g, []), h.get(g).push(x);
          }),
          Array.from(h, (x) => m(x[0], x[1]))
        );
      },
      containerRef: o,
      isToastActive: a,
    }
  );
}
function rm(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX;
}
function om(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY;
}
function Kx(e) {
  const [t, n] = p.useState(!1),
    [r, o] = p.useState(!1),
    i = p.useRef(null),
    a = p.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    l = p.useRef(e),
    {
      autoClose: s,
      pauseOnHover: u,
      closeToast: d,
      onClick: c,
      closeOnClick: f,
    } = e;
  function m(S) {
    if (e.draggable) {
      S.nativeEvent.type === 'touchstart' && S.nativeEvent.preventDefault(),
        (a.didMove = !1),
        document.addEventListener('mousemove', g),
        document.addEventListener('mouseup', y),
        document.addEventListener('touchmove', g),
        document.addEventListener('touchend', y);
      const C = i.current;
      (a.canCloseOnClick = !0),
        (a.canDrag = !0),
        (a.boundingRect = C.getBoundingClientRect()),
        (C.style.transition = ''),
        (a.x = rm(S.nativeEvent)),
        (a.y = om(S.nativeEvent)),
        e.draggableDirection === 'x'
          ? ((a.start = a.x),
            (a.removalDistance = C.offsetWidth * (e.draggablePercent / 100)))
          : ((a.start = a.y),
            (a.removalDistance =
              C.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)));
    }
  }
  function h(S) {
    if (a.boundingRect) {
      const { top: C, bottom: N, left: P, right: E } = a.boundingRect;
      S.nativeEvent.type !== 'touchend' &&
      e.pauseOnHover &&
      a.x >= P &&
      a.x <= E &&
      a.y >= C &&
      a.y <= N
        ? x()
        : v();
    }
  }
  function v() {
    n(!0);
  }
  function x() {
    n(!1);
  }
  function g(S) {
    const C = i.current;
    a.canDrag &&
      C &&
      ((a.didMove = !0),
      t && x(),
      (a.x = rm(S)),
      (a.y = om(S)),
      (a.delta = e.draggableDirection === 'x' ? a.x - a.start : a.y - a.start),
      a.start !== a.x && (a.canCloseOnClick = !1),
      (C.style.transform = `translate${e.draggableDirection}(${a.delta}px)`),
      (C.style.opacity = '' + (1 - Math.abs(a.delta / a.removalDistance))));
  }
  function y() {
    document.removeEventListener('mousemove', g),
      document.removeEventListener('mouseup', y),
      document.removeEventListener('touchmove', g),
      document.removeEventListener('touchend', y);
    const S = i.current;
    if (a.canDrag && a.didMove && S) {
      if (((a.canDrag = !1), Math.abs(a.delta) > a.removalDistance))
        return o(!0), void e.closeToast();
      (S.style.transition = 'transform 0.2s, opacity 0.2s'),
        (S.style.transform = `translate${e.draggableDirection}(0)`),
        (S.style.opacity = '1');
    }
  }
  p.useEffect(() => {
    l.current = e;
  }),
    p.useEffect(
      () => (
        i.current && i.current.addEventListener('d', v, { once: !0 }),
        st(e.onOpen) &&
          e.onOpen(p.isValidElement(e.children) && e.children.props),
        () => {
          const S = l.current;
          st(S.onClose) &&
            S.onClose(p.isValidElement(S.children) && S.children.props);
        }
      ),
      [],
    ),
    p.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || x(),
          window.addEventListener('focus', v),
          window.addEventListener('blur', x)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener('focus', v),
            window.removeEventListener('blur', x));
        }
      ),
      [e.pauseOnFocusLoss],
    );
  const b = { onMouseDown: m, onTouchStart: m, onMouseUp: h, onTouchEnd: h };
  return (
    s && u && ((b.onMouseEnter = x), (b.onMouseLeave = v)),
    f &&
      (b.onClick = (S) => {
        c && c(S), a.canCloseOnClick && d();
      }),
    {
      playToast: v,
      pauseToast: x,
      isRunning: t,
      preventExitTransition: r,
      toastRef: i,
      eventHandlers: b,
    }
  );
}
function Iv(e) {
  let { closeToast: t, theme: n, ariaLabel: r = 'close' } = e;
  return Z.createElement(
    'button',
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: 'button',
      onClick: (o) => {
        o.stopPropagation(), t(o);
      },
      'aria-label': r,
    },
    Z.createElement(
      'svg',
      { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
      Z.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
      }),
    ),
  );
}
function Xx(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: o = 'default',
    hide: i,
    className: a,
    style: l,
    controlledProgress: s,
    progress: u,
    rtl: d,
    isIn: c,
    theme: f,
  } = e;
  const m = i || (s && u === 0),
    h = {
      ...l,
      animationDuration: `${t}ms`,
      animationPlayState: n ? 'running' : 'paused',
      opacity: m ? 0 : 1,
    };
  s && (h.transform = `scaleX(${u})`);
  const v = Un(
      'Toastify__progress-bar',
      s
        ? 'Toastify__progress-bar--controlled'
        : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${f}`,
      `Toastify__progress-bar--${o}`,
      { 'Toastify__progress-bar--rtl': d },
    ),
    x = st(a) ? a({ rtl: d, type: o, defaultClassName: v }) : Un(v, a);
  return Z.createElement('div', {
    role: 'progressbar',
    'aria-hidden': m ? 'true' : 'false',
    'aria-label': 'notification timer',
    className: x,
    style: h,
    [s && u >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
      s && u < 1
        ? null
        : () => {
            c && r();
          },
  });
}
const qx = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: o,
      } = Kx(e),
      {
        closeButton: i,
        children: a,
        autoClose: l,
        onClick: s,
        type: u,
        hideProgressBar: d,
        closeToast: c,
        transition: f,
        position: m,
        className: h,
        style: v,
        bodyClassName: x,
        bodyStyle: g,
        progressClassName: y,
        progressStyle: b,
        updateId: S,
        role: C,
        progress: N,
        rtl: P,
        toastId: E,
        deleteToast: I,
        isIn: L,
        isLoading: Y,
        iconOut: D,
        closeOnClick: K,
        theme: B,
      } = e,
      z = Un(
        'Toastify__toast',
        `Toastify__toast-theme--${B}`,
        `Toastify__toast--${u}`,
        { 'Toastify__toast--rtl': P },
        { 'Toastify__toast--close-on-click': K },
      ),
      V = st(h)
        ? h({ rtl: P, position: m, type: u, defaultClassName: z })
        : Un(z, h),
      T = !!N || !l,
      k = { closeToast: c, type: u, theme: B };
    let W = null;
    return (
      i === !1 ||
        (W = st(i) ? i(k) : p.isValidElement(i) ? p.cloneElement(i, k) : Iv(k)),
      Z.createElement(
        f,
        { isIn: L, done: I, position: m, preventExitTransition: n, nodeRef: r },
        Z.createElement(
          'div',
          { id: E, onClick: s, className: V, ...o, style: v, ref: r },
          Z.createElement(
            'div',
            {
              ...(L && { role: C }),
              className: st(x) ? x({ type: u }) : Un('Toastify__toast-body', x),
              style: g,
            },
            D != null &&
              Z.createElement(
                'div',
                {
                  className: Un('Toastify__toast-icon', {
                    'Toastify--animate-icon Toastify__zoom-enter': !Y,
                  }),
                },
                D,
              ),
            Z.createElement('div', null, a),
          ),
          W,
          Z.createElement(Xx, {
            ...(S && !T ? { key: `pb-${S}` } : {}),
            rtl: P,
            theme: B,
            delay: l,
            isRunning: t,
            isIn: L,
            closeToast: c,
            hide: d,
            type: u,
            style: b,
            className: y,
            controlledProgress: T,
            progress: N || 0,
          }),
        ),
      )
    );
  },
  is = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  Jx = os(is('bounce', !0)),
  Zx = os(is('slide', !0));
os(is('zoom'));
os(is('flip'));
const Oc = p.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: o } = Qx(e),
    { className: i, style: a, rtl: l, containerId: s } = e;
  function u(d) {
    const c = Un(
      'Toastify__toast-container',
      `Toastify__toast-container--${d}`,
      { 'Toastify__toast-container--rtl': l },
    );
    return st(i)
      ? i({ position: d, rtl: l, defaultClassName: c })
      : Un(c, Ua(i));
  }
  return (
    p.useEffect(() => {
      t && (t.current = r.current);
    }, []),
    Z.createElement(
      'div',
      { ref: r, className: 'Toastify', id: s },
      n((d, c) => {
        const f = c.length ? { ...a } : { ...a, pointerEvents: 'none' };
        return Z.createElement(
          'div',
          { className: u(d), style: f, key: `container-${d}` },
          c.map((m, h) => {
            let { content: v, props: x } = m;
            return Z.createElement(
              qx,
              {
                ...x,
                isIn: o(x.toastId),
                style: { ...x.style, '--nth': h + 1, '--len': c.length },
                key: `toast-${x.key}`,
              },
              v,
            );
          }),
        );
      }),
    )
  );
});
(Oc.displayName = 'ToastContainer'),
  (Oc.defaultProps = {
    position: 'top-right',
    transition: Jx,
    autoClose: 5e3,
    closeButton: Iv,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light',
  });
let pu,
  mr = new Map(),
  Jo = [],
  e5 = 1;
function Fv() {
  return '' + e5++;
}
function t5(e) {
  return e && (_r(e.toastId) || si(e.toastId)) ? e.toastId : Fv();
}
function ui(e, t) {
  return (
    mr.size > 0 ? kt.emit(0, e, t) : Jo.push({ content: e, options: t }),
    t.toastId
  );
}
function _l(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: t5(t) };
}
function ba(e) {
  return (t, n) => ui(t, _l(e, n));
}
function q(e, t) {
  return ui(e, _l('default', t));
}
(q.loading = (e, t) =>
  ui(
    e,
    _l('default', {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    }),
  )),
  (q.promise = function (e, t, n) {
    let r,
      { pending: o, error: i, success: a } = t;
    o && (r = _r(o) ? q.loading(o, n) : q.loading(o.render, { ...n, ...o }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      s = (d, c, f) => {
        if (c == null) return void q.dismiss(r);
        const m = { type: d, ...l, ...n, data: f },
          h = _r(c) ? { render: c } : c;
        return r ? q.update(r, { ...m, ...h }) : q(h.render, { ...m, ...h }), f;
      },
      u = st(e) ? e() : e;
    return u.then((d) => s('success', a, d)).catch((d) => s('error', i, d)), u;
  }),
  (q.success = ba('success')),
  (q.info = ba('info')),
  (q.error = ba('error')),
  (q.warning = ba('warning')),
  (q.warn = q.warning),
  (q.dark = (e, t) => ui(e, _l('default', { theme: 'dark', ...t }))),
  (q.dismiss = (e) => {
    mr.size > 0
      ? kt.emit(1, e)
      : (Jo = Jo.filter((t) => e != null && t.options.toastId !== e));
  }),
  (q.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), kt.emit(5, e);
  }),
  (q.isActive = (e) => {
    let t = !1;
    return (
      mr.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0);
      }),
      t
    );
  }),
  (q.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (r, o) {
          let { containerId: i } = o;
          const a = mr.get(i || pu);
          return a && a.getToast(r);
        })(e, t);
        if (n) {
          const { props: r, content: o } = n,
            i = {
              delay: 100,
              ...r,
              ...t,
              toastId: t.toastId || e,
              updateId: Fv(),
            };
          i.toastId !== e && (i.staleId = e);
          const a = i.render || o;
          delete i.render, ui(a, i);
        }
      }, 0);
  }),
  (q.done = (e) => {
    q.update(e, { progress: 1 });
  }),
  (q.onChange = (e) => (
    kt.on(4, e),
    () => {
      kt.off(4, e);
    }
  )),
  (q.POSITION = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center',
  }),
  (q.TYPE = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DEFAULT: 'default',
  }),
  kt
    .on(2, (e) => {
      (pu = e.containerId || e),
        mr.set(pu, e),
        Jo.forEach((t) => {
          kt.emit(0, t.content, t.options);
        }),
        (Jo = []);
    })
    .on(3, (e) => {
      mr.delete(e.containerId || e), mr.size === 0 && kt.off(0).off(1).off(5);
    });
function Tc(e) {
  this.message = e;
}
(Tc.prototype = new Error()), (Tc.prototype.name = 'InvalidCharacterError');
var im =
  (typeof window < 'u' && window.atob && window.atob.bind(window)) ||
  function (e) {
    var t = String(e).replace(/=+$/, '');
    if (t.length % 4 == 1)
      throw new Tc(
        "'atob' failed: The string to be decoded is not correctly encoded.",
      );
    for (
      var n, r, o = 0, i = 0, a = '';
      (r = t.charAt(i++));
      ~r && ((n = o % 4 ? 64 * n + r : r), o++ % 4)
        ? (a += String.fromCharCode(255 & (n >> ((-2 * o) & 6))))
        : 0
    )
      r =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
          r,
        );
    return a;
  };
function n5(e) {
  var t = e.replace(/-/g, '+').replace(/_/g, '/');
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += '==';
      break;
    case 3:
      t += '=';
      break;
    default:
      throw 'Illegal base64url string!';
  }
  try {
    return (function (n) {
      return decodeURIComponent(
        im(n).replace(/(.)/g, function (r, o) {
          var i = o.charCodeAt(0).toString(16).toUpperCase();
          return i.length < 2 && (i = '0' + i), '%' + i;
        }),
      );
    })(t);
  } catch {
    return im(t);
  }
}
function Pl(e) {
  this.message = e;
}
function r5(e, t) {
  if (typeof e != 'string') throw new Pl('Invalid token specified');
  var n = (t = t || {}).header === !0 ? 0 : 1;
  try {
    return JSON.parse(n5(e.split('.')[n]));
  } catch (r) {
    throw new Pl('Invalid token specified: ' + r.message);
  }
}
(Pl.prototype = new Error()), (Pl.prototype.name = 'InvalidTokenError');
const o5 = {
    user: null,
    register: () => {},
    login: () => {},
    googleLogin: () => {},
    logout: () => {},
    loading: !0,
  },
  jv = p.createContext(o5),
  i5 = ({ children: e }) => {
    const t = Nb();
    return w(jv.Provider, { value: t, children: e });
  },
  a5 = { places: [], setPlaces: () => {}, loading: !0, setLoading: () => {} },
  zv = p.createContext(a5),
  l5 = ({ children: e }) => {
    const t = _b();
    return w(zv.Provider, { value: t, children: e });
  },
  Lr = (e, t) => {
    if (!e || !t) return console.error('Cannot store in LS');
    const n = typeof t != 'string' ? JSON.stringify(t) : t;
    localStorage.setItem(e, n);
  },
  Rc = (e) =>
    e ? localStorage.getItem(e) : console.error('Cannot get value from LS'),
  am = (e) => {
    if (!e) return console.error('Cannot remove item from LS');
    localStorage.removeItem(e);
  };
function Wv(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: s5 } = Object.prototype,
  { getPrototypeOf: nf } = Object,
  as = ((e) => (t) => {
    const n = s5.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  sn = (e) => ((e = e.toLowerCase()), (t) => as(t) === e),
  ls = (e) => (t) => typeof t === e,
  { isArray: No } = Array,
  Oi = ls('undefined');
function u5(e) {
  return (
    e !== null &&
    !Oi(e) &&
    e.constructor !== null &&
    !Oi(e.constructor) &&
    Ot(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Bv = sn('ArrayBuffer');
function c5(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Bv(e.buffer)),
    t
  );
}
const d5 = ls('string'),
  Ot = ls('function'),
  Uv = ls('number'),
  ss = (e) => e !== null && typeof e == 'object',
  f5 = (e) => e === !0 || e === !1,
  Ha = (e) => {
    if (as(e) !== 'object') return !1;
    const t = nf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  p5 = sn('Date'),
  m5 = sn('File'),
  h5 = sn('Blob'),
  v5 = sn('FileList'),
  g5 = (e) => ss(e) && Ot(e.pipe),
  y5 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (Ot(e.append) &&
          ((t = as(e)) === 'formdata' ||
            (t === 'object' &&
              Ot(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  w5 = sn('URLSearchParams'),
  x5 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Gi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, o;
  if ((typeof e != 'object' && (e = [e]), No(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let l;
    for (r = 0; r < a; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function Hv(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Vv = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : global)(),
  Yv = (e) => !Oi(e) && e !== Vv;
function Mc() {
  const { caseless: e } = (Yv(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Hv(t, o)) || o;
      Ha(t[i]) && Ha(r)
        ? (t[i] = Mc(t[i], r))
        : Ha(r)
          ? (t[i] = Mc({}, r))
          : No(r)
            ? (t[i] = r.slice())
            : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Gi(arguments[r], n);
  return t;
}
const b5 = (e, t, n, { allOwnKeys: r } = {}) => (
    Gi(
      t,
      (o, i) => {
        n && Ot(o) ? (e[i] = Wv(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  S5 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  C5 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  k5 = (e, t, n, r) => {
    let o, i, a;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!r || r(a, e, t)) && !l[a] && ((t[a] = e[a]), (l[a] = !0));
      e = n !== !1 && nf(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  E5 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  N5 = (e) => {
    if (!e) return null;
    if (No(e)) return e;
    let t = e.length;
    if (!Uv(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  _5 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && nf(Uint8Array)),
  P5 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  $5 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  O5 = sn('HTMLFormElement'),
  T5 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  lm = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  R5 = sn('RegExp'),
  Gv = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Gi(n, (o, i) => {
      let a;
      (a = t(o, i, e)) !== !1 && (r[i] = a || o);
    }),
      Object.defineProperties(e, r);
  },
  M5 = (e) => {
    Gv(e, (t, n) => {
      if (Ot(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ot(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  D5 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return No(e) ? r(e) : r(String(e).split(t)), n;
  },
  L5 = () => {},
  A5 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  mu = 'abcdefghijklmnopqrstuvwxyz',
  sm = '0123456789',
  Qv = { DIGIT: sm, ALPHA: mu, ALPHA_DIGIT: mu + mu.toUpperCase() + sm },
  I5 = (e = 16, t = Qv.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function F5(e) {
  return !!(
    e &&
    Ot(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const j5 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ss(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[o] = r;
            const i = No(r) ? [] : {};
            return (
              Gi(r, (a, l) => {
                const s = n(a, o + 1);
                !Oi(s) && (i[l] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  z5 = sn('AsyncFunction'),
  W5 = (e) => e && (ss(e) || Ot(e)) && Ot(e.then) && Ot(e.catch),
  O = {
    isArray: No,
    isArrayBuffer: Bv,
    isBuffer: u5,
    isFormData: y5,
    isArrayBufferView: c5,
    isString: d5,
    isNumber: Uv,
    isBoolean: f5,
    isObject: ss,
    isPlainObject: Ha,
    isUndefined: Oi,
    isDate: p5,
    isFile: m5,
    isBlob: h5,
    isRegExp: R5,
    isFunction: Ot,
    isStream: g5,
    isURLSearchParams: w5,
    isTypedArray: _5,
    isFileList: v5,
    forEach: Gi,
    merge: Mc,
    extend: b5,
    trim: x5,
    stripBOM: S5,
    inherits: C5,
    toFlatObject: k5,
    kindOf: as,
    kindOfTest: sn,
    endsWith: E5,
    toArray: N5,
    forEachEntry: P5,
    matchAll: $5,
    isHTMLForm: O5,
    hasOwnProperty: lm,
    hasOwnProp: lm,
    reduceDescriptors: Gv,
    freezeMethods: M5,
    toObjectSet: D5,
    toCamelCase: T5,
    noop: L5,
    toFiniteNumber: A5,
    findKey: Hv,
    global: Vv,
    isContextDefined: Yv,
    ALPHABET: Qv,
    generateString: I5,
    isSpecCompliantForm: F5,
    toJSONObject: j5,
    isAsyncFn: z5,
    isThenable: W5,
  };
function se(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
O.inherits(se, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: O.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Kv = se.prototype,
  Xv = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  Xv[e] = { value: e };
});
Object.defineProperties(se, Xv);
Object.defineProperty(Kv, 'isAxiosError', { value: !0 });
se.from = (e, t, n, r, o, i) => {
  const a = Object.create(Kv);
  return (
    O.toFlatObject(
      e,
      a,
      function (s) {
        return s !== Error.prototype;
      },
      (l) => l !== 'isAxiosError',
    ),
    se.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const B5 = null;
function Dc(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function qv(e) {
  return O.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function um(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = qv(o)), !n && i ? '[' + o + ']' : o;
        })
        .join(n ? '.' : '')
    : t;
}
function U5(e) {
  return O.isArray(e) && !e.some(Dc);
}
const H5 = O.toFlatObject(O, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function us(e, t, n) {
  if (!O.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = O.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, x) {
        return !O.isUndefined(x[v]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || d,
    i = n.dots,
    a = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && O.isSpecCompliantForm(t);
  if (!O.isFunction(o)) throw new TypeError('visitor must be a function');
  function u(h) {
    if (h === null) return '';
    if (O.isDate(h)) return h.toISOString();
    if (!s && O.isBlob(h))
      throw new se('Blob is not supported. Use a Buffer instead.');
    return O.isArrayBuffer(h) || O.isTypedArray(h)
      ? s && typeof Blob == 'function'
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function d(h, v, x) {
    let g = h;
    if (h && !x && typeof h == 'object') {
      if (O.endsWith(v, '{}'))
        (v = r ? v : v.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (O.isArray(h) && U5(h)) ||
        ((O.isFileList(h) || O.endsWith(v, '[]')) && (g = O.toArray(h)))
      )
        return (
          (v = qv(v)),
          g.forEach(function (b, S) {
            !(O.isUndefined(b) || b === null) &&
              t.append(
                a === !0 ? um([v], S, i) : a === null ? v : v + '[]',
                u(b),
              );
          }),
          !1
        );
    }
    return Dc(h) ? !0 : (t.append(um(x, v, i), u(h)), !1);
  }
  const c = [],
    f = Object.assign(H5, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Dc,
    });
  function m(h, v) {
    if (!O.isUndefined(h)) {
      if (c.indexOf(h) !== -1)
        throw Error('Circular reference detected in ' + v.join('.'));
      c.push(h),
        O.forEach(h, function (g, y) {
          (!(O.isUndefined(g) || g === null) &&
            o.call(t, g, O.isString(y) ? y.trim() : y, v, f)) === !0 &&
            m(g, v ? v.concat(y) : [y]);
        }),
        c.pop();
    }
  }
  if (!O.isObject(e)) throw new TypeError('data must be an object');
  return m(e), t;
}
function cm(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function rf(e, t) {
  (this._pairs = []), e && us(e, this, t);
}
const Jv = rf.prototype;
Jv.append = function (t, n) {
  this._pairs.push([t, n]);
};
Jv.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, cm);
      }
    : cm;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1]);
    }, '')
    .join('&');
};
function V5(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Zv(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || V5,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = O.isURLSearchParams(t) ? t.toString() : new rf(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf('#');
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class Y5 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    O.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const dm = Y5,
  eg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  G5 = typeof URLSearchParams < 'u' ? URLSearchParams : rf,
  Q5 = typeof FormData < 'u' ? FormData : null,
  K5 = typeof Blob < 'u' ? Blob : null,
  X5 = {
    isBrowser: !0,
    classes: { URLSearchParams: G5, FormData: Q5, Blob: K5 },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  tg = typeof window < 'u' && typeof document < 'u',
  q5 = ((e) => tg && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product,
  ),
  J5 = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  Z5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: tg,
        hasStandardBrowserEnv: q5,
        hasStandardBrowserWebWorkerEnv: J5,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  tn = { ...Z5, ...X5 };
function eb(e, t) {
  return us(
    e,
    new tn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return tn.isNode && O.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function tb(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function nb(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function ng(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    if (a === '__proto__') return !0;
    const l = Number.isFinite(+a),
      s = i >= n.length;
    return (
      (a = !a && O.isArray(o) ? o.length : a),
      s
        ? (O.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !l)
        : ((!o[a] || !O.isObject(o[a])) && (o[a] = []),
          t(n, r, o[a], i) && O.isArray(o[a]) && (o[a] = nb(o[a])),
          !l)
    );
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const n = {};
    return (
      O.forEachEntry(e, (r, o) => {
        t(tb(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function rb(e, t, n) {
  if (O.isString(e))
    try {
      return (t || JSON.parse)(e), O.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const of = {
  transitional: eg,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = O.isObject(t);
      if ((i && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t)))
        return o ? JSON.stringify(ng(t)) : t;
      if (
        O.isArrayBuffer(t) ||
        O.isBuffer(t) ||
        O.isStream(t) ||
        O.isFile(t) ||
        O.isBlob(t)
      )
        return t;
      if (O.isArrayBufferView(t)) return t.buffer;
      if (O.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return eb(t, this.formSerializer).toString();
        if ((l = O.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData;
          return us(
            l ? { 'files[]': t } : t,
            s && new s(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType('application/json', !1), rb(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || of.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json';
      if (t && O.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (a)
            throw l.name === 'SyntaxError'
              ? se.from(l, se.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: tn.classes.FormData, Blob: tn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
O.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  of.headers[e] = {};
});
const af = of,
  ob = O.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  ib = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (a) {
            (o = a.indexOf(':')),
              (n = a.substring(0, o).trim().toLowerCase()),
              (r = a.substring(o + 1).trim()),
              !(!n || (t[n] && ob[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  fm = Symbol('internals');
function Bo(e) {
  return e && String(e).trim().toLowerCase();
}
function Va(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(Va) : String(e);
}
function ab(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const lb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function hu(e, t, n, r, o) {
  if (O.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!O.isString(t))) {
    if (O.isString(r)) return t.indexOf(r) !== -1;
    if (O.isRegExp(r)) return r.test(t);
  }
}
function sb(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ub(e, t) {
  const n = O.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0,
    });
  });
}
class cs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(l, s, u) {
      const d = Bo(s);
      if (!d) throw new Error('header name must be a non-empty string');
      const c = O.findKey(o, d);
      (!c || o[c] === void 0 || u === !0 || (u === void 0 && o[c] !== !1)) &&
        (o[c || s] = Va(l));
    }
    const a = (l, s) => O.forEach(l, (u, d) => i(u, d, s));
    return (
      O.isPlainObject(t) || t instanceof this.constructor
        ? a(t, n)
        : O.isString(t) && (t = t.trim()) && !lb(t)
          ? a(ib(t), n)
          : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Bo(t)), t)) {
      const r = O.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return ab(o);
        if (O.isFunction(n)) return n.call(this, o, r);
        if (O.isRegExp(n)) return n.exec(o);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = Bo(t)), t)) {
      const r = O.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || hu(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (((a = Bo(a)), a)) {
        const l = O.findKey(r, a);
        l && (!n || hu(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return O.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || hu(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      O.forEach(this, (o, i) => {
        const a = O.findKey(r, i);
        if (a) {
          (n[a] = Va(o)), delete n[i];
          return;
        }
        const l = t ? sb(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = Va(o)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      O.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && O.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[fm] = this[fm] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const l = Bo(a);
      r[l] || (ub(o, a), (r[l] = !0));
    }
    return O.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
cs.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
O.reduceDescriptors(cs.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
O.freezeMethods(cs);
const wn = cs;
function vu(e, t) {
  const n = this || af,
    r = t || n,
    o = wn.from(r.headers);
  let i = r.data;
  return (
    O.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function rg(e) {
  return !!(e && e.__CANCEL__);
}
function Qi(e, t, n) {
  se.call(this, e ?? 'canceled', se.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
O.inherits(Qi, se, { __CANCEL__: !0 });
function cb(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new se(
          'Request failed with status code ' + n.status,
          [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
const db = tn.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const a = [e + '=' + encodeURIComponent(t)];
        O.isNumber(n) && a.push('expires=' + new Date(n).toGMTString()),
          O.isString(r) && a.push('path=' + r),
          O.isString(o) && a.push('domain=' + o),
          i === !0 && a.push('secure'),
          (document.cookie = a.join('; '));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function fb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function pb(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function og(e, t) {
  return e && !fb(t) ? pb(e, t) : t;
}
const mb = tn.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function o(i) {
        let a = i;
        return (
          t && (n.setAttribute('href', a), (a = n.href)),
          n.setAttribute('href', a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (a) {
          const l = O.isString(a) ? o(a) : a;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function hb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function vb(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        d = r[i];
      a || (a = u), (n[o] = s), (r[o] = u);
      let c = i,
        f = 0;
      for (; c !== o; ) (f += n[c++]), (c = c % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - a < t)) return;
      const m = d && u - d;
      return m ? Math.round((f * 1e3) / m) : void 0;
    }
  );
}
function pm(e, t) {
  let n = 0;
  const r = vb(50, 250);
  return (o) => {
    const i = o.loaded,
      a = o.lengthComputable ? o.total : void 0,
      l = i - n,
      s = r(l),
      u = i <= a;
    n = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: s || void 0,
      estimated: s && a && u ? (a - i) / s : void 0,
      event: o,
    };
    (d[t ? 'download' : 'upload'] = !0), e(d);
  };
}
const gb = typeof XMLHttpRequest < 'u',
  yb =
    gb &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = wn.from(e.headers).normalize();
        let { responseType: a, withXSRFToken: l } = e,
          s;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener('abort', s);
        }
        let d;
        if (O.isFormData(o)) {
          if (tn.hasStandardBrowserEnv || tn.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((d = i.getContentType()) !== !1) {
            const [v, ...x] = d
              ? d
                  .split(';')
                  .map((g) => g.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([v || 'multipart/form-data', ...x].join('; '));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || '',
            x = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : '';
          i.set('Authorization', 'Basic ' + btoa(v + ':' + x));
        }
        const f = og(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Zv(f, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function m() {
          if (!c) return;
          const v = wn.from(
              'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
            ),
            g = {
              data:
                !a || a === 'text' || a === 'json'
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: v,
              config: e,
              request: c,
            };
          cb(
            function (b) {
              n(b), u();
            },
            function (b) {
              r(b), u();
            },
            g,
          ),
            (c = null);
        }
        if (
          ('onloadend' in c
            ? (c.onloadend = m)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(m);
              }),
          (c.onabort = function () {
            c &&
              (r(new se('Request aborted', se.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new se('Network Error', se.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let x = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded';
            const g = e.transitional || eg;
            e.timeoutErrorMessage && (x = e.timeoutErrorMessage),
              r(
                new se(
                  x,
                  g.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
                  e,
                  c,
                ),
              ),
              (c = null);
          }),
          tn.hasStandardBrowserEnv &&
            (l && O.isFunction(l) && (l = l(e)), l || (l !== !1 && mb(f))))
        ) {
          const v =
            e.xsrfHeaderName && e.xsrfCookieName && db.read(e.xsrfCookieName);
          v && i.set(e.xsrfHeaderName, v);
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in c &&
            O.forEach(i.toJSON(), function (x, g) {
              c.setRequestHeader(g, x);
            }),
          O.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          a && a !== 'json' && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            c.addEventListener('progress', pm(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            c.upload &&
            c.upload.addEventListener('progress', pm(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (v) => {
              c &&
                (r(!v || v.type ? new Qi(null, e, c) : v),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener('abort', s)));
        const h = hb(f);
        if (h && tn.protocols.indexOf(h) === -1) {
          r(new se('Unsupported protocol ' + h + ':', se.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  Lc = { http: B5, xhr: yb };
O.forEach(Lc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const mm = (e) => `- ${e}`,
  wb = (e) => O.isFunction(e) || e === null || e === !1,
  ig = {
    getAdapter: (e) => {
      e = O.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let a;
        if (
          ((r = n),
          !wb(n) && ((r = Lc[(a = String(n)).toLowerCase()]), r === void 0))
        )
          throw new se(`Unknown adapter '${a}'`);
        if (r) break;
        o[a || '#' + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([l, s]) =>
            `adapter ${l} ` +
            (s === !1
              ? 'is not supported by the environment'
              : 'is not available in the build'),
        );
        let a = t
          ? i.length > 1
            ? `since :
` +
              i.map(mm).join(`
`)
            : ' ' + mm(i[0])
          : 'as no adapter specified';
        throw new se(
          'There is no suitable adapter to dispatch the request ' + a,
          'ERR_NOT_SUPPORT',
        );
      }
      return r;
    },
    adapters: Lc,
  };
function gu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Qi(null, e);
}
function hm(e) {
  return (
    gu(e),
    (e.headers = wn.from(e.headers)),
    (e.data = vu.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    ig
      .getAdapter(e.adapter || af.adapter)(e)
      .then(
        function (r) {
          return (
            gu(e),
            (r.data = vu.call(e, e.transformResponse, r)),
            (r.headers = wn.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            rg(r) ||
              (gu(e),
              r &&
                r.response &&
                ((r.response.data = vu.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = wn.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const vm = (e) => (e instanceof wn ? e.toJSON() : e);
function ho(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, c) {
    return O.isPlainObject(u) && O.isPlainObject(d)
      ? O.merge.call({ caseless: c }, u, d)
      : O.isPlainObject(d)
        ? O.merge({}, d)
        : O.isArray(d)
          ? d.slice()
          : d;
  }
  function o(u, d, c) {
    if (O.isUndefined(d)) {
      if (!O.isUndefined(u)) return r(void 0, u, c);
    } else return r(u, d, c);
  }
  function i(u, d) {
    if (!O.isUndefined(d)) return r(void 0, d);
  }
  function a(u, d) {
    if (O.isUndefined(d)) {
      if (!O.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function l(u, d, c) {
    if (c in t) return r(u, d);
    if (c in e) return r(void 0, u);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, d) => o(vm(u), vm(d), !0),
  };
  return (
    O.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const c = s[d] || o,
        f = c(e[d], t[d], d);
      (O.isUndefined(f) && c !== l) || (n[d] = f);
    }),
    n
  );
}
const ag = '1.6.7',
  lf = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    lf[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const gm = {};
lf.transitional = function (t, n, r) {
  function o(i, a) {
    return (
      '[Axios v' +
      ag +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? '. ' + r : '')
    );
  }
  return (i, a, l) => {
    if (t === !1)
      throw new se(
        o(a, ' has been removed' + (n ? ' in ' + n : '')),
        se.ERR_DEPRECATED,
      );
    return (
      n &&
        !gm[a] &&
        ((gm[a] = !0),
        console.warn(
          o(
            a,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(i, a, l) : !0
    );
  };
};
function xb(e, t, n) {
  if (typeof e != 'object')
    throw new se('options must be an object', se.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      a = t[i];
    if (a) {
      const l = e[i],
        s = l === void 0 || a(l, i, e);
      if (s !== !0)
        throw new se('option ' + i + ' must be ' + s, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new se('Unknown option ' + i, se.ERR_BAD_OPTION);
  }
}
const Ac = { assertOptions: xb, validators: lf },
  Rn = Ac.validators;
class $l {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new dm(), response: new dm() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, '') : '';
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = ho(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Ac.assertOptions(
        r,
        {
          silentJSONParsing: Rn.transitional(Rn.boolean),
          forcedJSONParsing: Rn.transitional(Rn.boolean),
          clarifyTimeoutError: Rn.transitional(Rn.boolean),
        },
        !1,
      ),
      o != null &&
        (O.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ac.assertOptions(
              o,
              { encode: Rn.function, serialize: Rn.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let a = i && O.merge(i.common, i[n.method]);
    i &&
      O.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (h) => {
          delete i[h];
        },
      ),
      (n.headers = wn.concat(a, i));
    const l = [];
    let s = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
        ((s = s && v.synchronous), l.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let d,
      c = 0,
      f;
    if (!s) {
      const h = [hm.bind(this), void 0];
      for (
        h.unshift.apply(h, l),
          h.push.apply(h, u),
          f = h.length,
          d = Promise.resolve(n);
        c < f;

      )
        d = d.then(h[c++], h[c++]);
      return d;
    }
    f = l.length;
    let m = n;
    for (c = 0; c < f; ) {
      const h = l[c++],
        v = l[c++];
      try {
        m = h(m);
      } catch (x) {
        v.call(this, x);
        break;
      }
    }
    try {
      d = hm.call(this, m);
    } catch (h) {
      return Promise.reject(h);
    }
    for (c = 0, f = u.length; c < f; ) d = d.then(u[c++], u[c++]);
    return d;
  }
  getUri(t) {
    t = ho(this.defaults, t);
    const n = og(t.baseURL, t.url);
    return Zv(n, t.params, t.paramsSerializer);
  }
}
O.forEach(['delete', 'get', 'head', 'options'], function (t) {
  $l.prototype[t] = function (n, r) {
    return this.request(
      ho(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
O.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, a, l) {
      return this.request(
        ho(l || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: a,
        }),
      );
    };
  }
  ($l.prototype[t] = n()), ($l.prototype[t + 'Form'] = n(!0));
});
const Ya = $l;
class sf {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const a = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, l) {
        r.reason || ((r.reason = new Qi(i, a, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new sf(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const bb = sf;
function Sb(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Cb(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
const Ic = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ic).forEach(([e, t]) => {
  Ic[t] = e;
});
const kb = Ic;
function lg(e) {
  const t = new Ya(e),
    n = Wv(Ya.prototype.request, t);
  return (
    O.extend(n, Ya.prototype, t, { allOwnKeys: !0 }),
    O.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return lg(ho(e, o));
    }),
    n
  );
}
const Me = lg(af);
Me.Axios = Ya;
Me.CanceledError = Qi;
Me.CancelToken = bb;
Me.isCancel = rg;
Me.VERSION = ag;
Me.toFormData = us;
Me.AxiosError = se;
Me.Cancel = Me.CanceledError;
Me.all = function (t) {
  return Promise.all(t);
};
Me.spread = Sb;
Me.isAxiosError = Cb;
Me.mergeConfig = ho;
Me.AxiosHeaders = wn;
Me.formToJSON = (e) => ng(O.isHTMLForm(e) ? new FormData(e) : e);
Me.getAdapter = ig.getAdapter;
Me.HttpStatusCode = kb;
Me.default = Me;
const Eb = Me,
  je = Eb.create({
    baseURL: 'https://airbnb-backend-r81v.onrender.com',
    withCredentials: !0,
  }),
  _o = () => p.useContext(jv),
  Nb = () => {
    const [e, t] = p.useState(null),
      [n, r] = p.useState(!0);
    return (
      p.useEffect(() => {
        const d = Rc('user');
        d && t(JSON.parse(d)), r(!1);
      }, []),
      {
        user: e,
        setUser: t,
        register: async (d) => {
          const { name: c, email: f, password: m } = d;
          try {
            const { data: h } = await je.post('user/register', {
              name: c,
              email: f,
              password: m,
            });
            return (
              h.user &&
                h.token &&
                (t(h.user), Lr('user', h.user), Lr('token', h.token)),
              { success: !0, message: 'Registration successfull' }
            );
          } catch (h) {
            const { message: v } = h.response.data;
            return { success: !1, message: v };
          }
        },
        login: async (d) => {
          const { email: c, password: f } = d;
          try {
            const { data: m } = await je.post('user/login', {
              email: c,
              password: f,
            });
            return (
              m.user &&
                m.token &&
                (t(m.user), Lr('user', m.user), Lr('token', m.token)),
              { success: !0, message: 'Login successfull' }
            );
          } catch (m) {
            const { message: h } = m.response.data;
            return { success: !1, message: h };
          }
        },
        googleLogin: async (d) => {
          const c = r5(d);
          try {
            const { data: f } = await je.post('user/google/login', {
              name: `${c.given_name} ${c.family_name}`,
              email: c.email,
            });
            return (
              f.user &&
                f.token &&
                (t(f.user), Lr('user', f.user), Lr('token', f.token)),
              { success: !0, message: 'Login successfull' }
            );
          } catch (f) {
            return { success: !1, message: f.message };
          }
        },
        logout: async () => {
          try {
            const { data: d } = await je.get('/user/logout');
            return (
              d.success && (t(null), am('user'), am('token')),
              { success: !0, message: 'Logout successfull' }
            );
          } catch (d) {
            return (
              console.log(d), { success: !1, message: 'Something went wrong!' }
            );
          }
        },
        loading: n,
        uploadPicture: async (d) => {
          try {
            const c = new FormData();
            c.append('picture', d);
            const { data: f } = await je.post('/user/upload-picture', c, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            return f;
          } catch (c) {
            console.log(c);
          }
        },
        updateUser: async (d) => {
          const { name: c, password: f, picture: m } = d,
            h = JSON.parse(Rc('user')).email;
          try {
            const { data: v } = await je.put('/user/update-user', {
              name: c,
              password: f,
              email: h,
              picture: m,
            });
            return v;
          } catch (v) {
            console.log(v);
          }
        },
      }
    );
  },
  sg = () => p.useContext(zv),
  _b = () => {
    const [e, t] = p.useState([]),
      [n, r] = p.useState(!0),
      o = async () => {
        const { data: i } = await je.get('/places');
        t(i.places), r(!1);
      };
    return (
      p.useEffect(() => {
        o();
      }, []),
      { places: e, setPlaces: t, loading: n, setLoading: r }
    );
  },
  Pb = () => {
    const e = sg(),
      { setPlaces: t, setLoading: n } = e,
      [r, o] = p.useState(''),
      [i, a] = p.useState(null),
      l = async (s) => {
        clearTimeout(i),
          o(s.target.value),
          r.trimStart() !== '' &&
            (n(!0),
            a(
              setTimeout(async () => {
                const { data: u } = await je.get(
                  `/places/search/${r.trimStart()}`,
                );
                t(u), n(!1);
              }, 500),
            ));
      };
    return w(Wi, {
      children: $('div', {
        className:
          'flex w-4/6 overflow-hidden rounded-full border border-gray-400 bg-gray-300 shadow-sm hover:shadow-lg md:w-1/2',
        children: [
          w('div', {
            className: 'grow',
            children: w('input', {
              type: 'search',
              placeholder: 'Where you want to go?',
              className:
                'h-full w-full border-none py-2 px-4 text-sm  focus:outline-none md:text-lg',
              onChange: (s) => l(s),
              value: r,
            }),
          }),
          w('div', {
            className:
              'bg-blue flex cursor-pointer  items-center bg-primary text-white',
            children: $('button', {
              className: 'flex rounded-r-full bg-primary py-2 px-4 md:p-2',
              onClick: l,
              children: [
                w('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 3,
                  stroke: 'currentColor',
                  className: 'mt-1 h-4 w-4',
                  children: w('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
                  }),
                }),
                w('span', {
                  className: 'ml-1 hidden md:block',
                  children: 'Search',
                }),
              ],
            }),
          }),
        ],
      }),
    });
  };
function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fe.apply(this, arguments)
  );
}
function ds(e, t = []) {
  let n = [];
  function r(i, a) {
    const l = p.createContext(a),
      s = n.length;
    n = [...n, a];
    function u(c) {
      const { scope: f, children: m, ...h } = c,
        v = (f == null ? void 0 : f[e][s]) || l,
        x = p.useMemo(() => h, Object.values(h));
      return p.createElement(v.Provider, { value: x }, m);
    }
    function d(c, f) {
      const m = (f == null ? void 0 : f[e][s]) || l,
        h = p.useContext(m);
      if (h) return h;
      if (a !== void 0) return a;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + 'Provider'), [u, d];
  }
  const o = () => {
    const i = n.map((a) => p.createContext(a));
    return function (l) {
      const s = (l == null ? void 0 : l[e]) || i;
      return p.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: s } }), [l, s]);
    };
  };
  return (o.scopeName = e), [r, $b(o, ...t)];
}
function $b(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const a = r.reduce((l, { useScope: s, scopeName: u }) => {
        const c = s(i)[`__scope${u}`];
        return { ...l, ...c };
      }, {});
      return p.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function kn(e) {
  const t = p.useRef(e);
  return (
    p.useEffect(() => {
      t.current = e;
    }),
    p.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      [],
    )
  );
}
const nr =
  globalThis != null && globalThis.document ? p.useLayoutEffect : () => {};
function Ob(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t);
}
function ug(...e) {
  return (t) => e.forEach((n) => Ob(n, t));
}
function un(...e) {
  return p.useCallback(ug(...e), e);
}
const Ki = p.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = p.Children.toArray(n),
    i = o.find(Rb);
  if (i) {
    const a = i.props.children,
      l = o.map((s) =>
        s === i
          ? p.Children.count(a) > 1
            ? p.Children.only(null)
            : p.isValidElement(a)
              ? a.props.children
              : null
          : s,
      );
    return p.createElement(
      Fc,
      fe({}, r, { ref: t }),
      p.isValidElement(a) ? p.cloneElement(a, void 0, l) : null,
    );
  }
  return p.createElement(Fc, fe({}, r, { ref: t }), n);
});
Ki.displayName = 'Slot';
const Fc = p.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return p.isValidElement(n)
    ? p.cloneElement(n, { ...Mb(r, n.props), ref: t ? ug(t, n.ref) : n.ref })
    : p.Children.count(n) > 1
      ? p.Children.only(null)
      : null;
});
Fc.displayName = 'SlotClone';
const Tb = ({ children: e }) => p.createElement(p.Fragment, null, e);
function Rb(e) {
  return p.isValidElement(e) && e.type === Tb;
}
function Mb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === 'style'
        ? (n[r] = { ...o, ...i })
        : r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '));
  }
  return { ...e, ...n };
}
const Db = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  it = Db.reduce((e, t) => {
    const n = p.forwardRef((r, o) => {
      const { asChild: i, ...a } = r,
        l = i ? Ki : t;
      return (
        p.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0;
        }, []),
        p.createElement(l, fe({}, a, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Lb(e, t) {
  e && Yi.flushSync(() => e.dispatchEvent(t));
}
const cg = 'Avatar',
  [Ab, c8] = ds(cg),
  [Ib, dg] = Ab(cg),
  fg = p.forwardRef((e, t) => {
    const { __scopeAvatar: n, ...r } = e,
      [o, i] = p.useState('idle');
    return p.createElement(
      Ib,
      { scope: n, imageLoadingStatus: o, onImageLoadingStatusChange: i },
      p.createElement(it.span, fe({}, r, { ref: t })),
    );
  }),
  Fb = 'AvatarImage',
  jc = p.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: o = () => {},
        ...i
      } = e,
      a = dg(Fb, n),
      l = Wb(r),
      s = kn((u) => {
        o(u), a.onImageLoadingStatusChange(u);
      });
    return (
      nr(() => {
        l !== 'idle' && s(l);
      }, [l, s]),
      l === 'loaded'
        ? p.createElement(it.img, fe({}, i, { ref: t, src: r }))
        : null
    );
  }),
  jb = 'AvatarFallback',
  zb = p.forwardRef((e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e,
      i = dg(jb, n),
      [a, l] = p.useState(r === void 0);
    return (
      p.useEffect(() => {
        if (r !== void 0) {
          const s = window.setTimeout(() => l(!0), r);
          return () => window.clearTimeout(s);
        }
      }, [r]),
      a && i.imageLoadingStatus !== 'loaded'
        ? p.createElement(it.span, fe({}, o, { ref: t }))
        : null
    );
  });
function Wb(e) {
  const [t, n] = p.useState('idle');
  return (
    nr(() => {
      if (!e) {
        n('error');
        return;
      }
      let r = !0;
      const o = new window.Image(),
        i = (a) => () => {
          r && n(a);
        };
      return (
        n('loading'),
        (o.onload = i('loaded')),
        (o.onerror = i('error')),
        (o.src = e),
        () => {
          r = !1;
        }
      );
    }, [e]),
    t
  );
}
const pg = fg,
  mg = jc,
  hg = zb,
  Bb = () => {
    const e = _o(),
      t = Rr(),
      [n, r] = p.useState(!0),
      [o, i] = p.useState(!1),
      { user: a } = e,
      l = () => {
        const s = window.scrollY > 0;
        i(s);
      };
    return (
      p.useEffect(
        () => (
          window.addEventListener('scroll', l),
          t.pathname === '/' ? r(!0) : r(!1),
          () => {
            window.removeEventListener('scroll', l);
          }
        ),
        [t],
      ),
      $('header', {
        className: `fixed top-0 z-10 flex w-screen justify-center bg-white py-4 ${o ? 'shadow-md' : ''}`,
        children: [
          $('div', {
            className: `flex ${n ? 'justify-around' : 'justify-between px-10'} w-screen max-w-screen-xl`,
            children: [
              $('a', {
                href: '/',
                className: 'flex items-center gap-1',
                children: [
                  w('img', {
                    className: 'h-8 w-8 md:h-10 md:w-10',
                    src: 'https://cdn-icons-png.flaticon.com/512/2111/2111320.png',
                    alt: '',
                  }),
                  w('span', {
                    className:
                      'hidden text-2xl font-bold text-red-500 md:block',
                    children: 'airbnb',
                  }),
                ],
              }),
              n && w(Pb, {}),
              $($t, {
                to: a ? '/account' : '/login',
                className:
                  'w-50 flex h-full items-center gap-2 rounded-full border-gray-300 py-1 px-2 md:border',
                children: [
                  w('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 24 24',
                    strokeWidth: 1.5,
                    stroke: 'currentColor',
                    className: 'hidden h-6 w-6 md:block',
                    children: w('path', {
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
                    }),
                  }),
                  w('div', {
                    className:
                      'z-10 h-[35px] w-[35px] overflow-hidden rounded-full',
                    children: a
                      ? w(fg, {
                          children:
                            a != null && a.picture
                              ? w(jc, {
                                  src: a.picture,
                                  className: 'h-full w-full',
                                })
                              : w(jc, {
                                  src: 'https://res.cloudinary.com/rahul4019/image/upload/v1695133265/pngwing.com_zi4cre.png',
                                  className: 'h-full w-full',
                                }),
                        })
                      : $('svg', {
                          fill: '#858080',
                          version: '1.1',
                          id: 'Layer_1',
                          xmlns: 'http://www.w3.org/2000/svg',
                          xmlnsXlink: 'http://www.w3.org/1999/xlink',
                          viewBox: '796 796 200 200',
                          enableBackground: 'new 796 796 200 200',
                          xmlSpace: 'preserve',
                          stroke: '#858080',
                          className: 'h-8 w-8',
                          children: [
                            w('g', {
                              id: 'SVGRepo_bgCarrier',
                              strokeWidth: '0',
                            }),
                            w('g', {
                              id: 'SVGRepo_tracerCarrier',
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                            }),
                            $('g', {
                              id: 'SVGRepo_iconCarrier',
                              children: [
                                w('path', {
                                  d: 'M896,796c-55.14,0-99.999,44.86-99.999,100c0,55.141,44.859,100,99.999,100c55.141,0,99.999-44.859,99.999-100 C995.999,840.86,951.141,796,896,796z M896.639,827.425c20.538,0,37.189,19.66,37.189,43.921c0,24.257-16.651,43.924-37.189,43.924 s-37.187-19.667-37.187-43.924C859.452,847.085,876.101,827.425,896.639,827.425z M896,983.86 c-24.692,0-47.038-10.239-63.016-26.695c-2.266-2.335-2.984-5.775-1.84-8.82c5.47-14.556,15.718-26.762,28.817-34.761 c2.828-1.728,6.449-1.393,8.91,0.828c7.706,6.958,17.316,11.114,27.767,11.114c10.249,0,19.69-4.001,27.318-10.719 c2.488-2.191,6.128-2.479,8.932-0.711c12.697,8.004,22.618,20.005,27.967,34.253c1.144,3.047,0.425,6.482-1.842,8.817 C943.037,973.621,920.691,983.86,896,983.86z',
                                }),
                                ' ',
                              ],
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
          w('br', { className: 'border border-gray-600' }),
        ],
      })
    );
  },
  Ub = () =>
    w('div', {
      className: 'flex  w-full justify-center bg-gray-100 pb-8',
      children: $('div', {
        className: 'flex w-full max-w-screen-xl flex-col items-center px-6',
        children: [
          $('div', {
            className:
              'grid  w-full grid-cols-1 gap-4 py-8 text-sm md:grid-cols-3 ',
            children: [
              $('div', {
                className: 'flex flex-col gap-1',
                children: [
                  w('strong', {
                    className: 'font-medium',
                    children: 'Support',
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Help Center',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Get help with a safety issue',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Air cover',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Anti-discrimination',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Disablity support',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Cancellation options',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Report neighbourhood concern',
                    }),
                  }),
                ],
              }),
              $('div', {
                className: 'flex flex-col gap-1',
                children: [
                  w('strong', {
                    className: 'font-medium',
                    children: 'Hosting',
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Airbnb your home',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'AirCover for Hosts',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Hosting resources',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Community forum',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Hosting responsibly',
                    }),
                  }),
                ],
              }),
              $('div', {
                className: 'flex flex-col gap-1',
                children: [
                  w('strong', { className: 'font-medium', children: 'Airbnb' }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Newsroom',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'New features',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Careers',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Investors',
                    }),
                  }),
                  w('p', {
                    children: w('span', {
                      className:
                        'cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline',
                      children: 'Airbnb.org emergency stays',
                    }),
                  }),
                ],
              }),
            ],
          }),
          w('div', { className: 'my-4 w-full border-[1px] border-gray-200' }),
          $('div', {
            className:
              'flex w-full flex-col items-center justify-between gap-4 md:gap-0 lg:flex-row',
            children: [
              $('div', {
                className:
                  'mt-4 flex w-full justify-between gap-10 md:order-last md:w-auto',
                children: [
                  $('div', {
                    className: 'flex text-sm font-semibold',
                    children: [
                      w('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        strokeWidth: '1.5',
                        stroke: 'currentColor',
                        className: 'mr-2 h-6 w-6',
                        children: w('path', {
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          d: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
                        }),
                      }),
                      'English(IN) ',
                      w('span', { className: 'mx-4', children: '₹ INR' }),
                    ],
                  }),
                  $('div', {
                    className: 'flex gap-3',
                    children: [
                      w('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        className: 'h-6 w-6 cursor-pointer',
                        viewBox: '0 0 50 50',
                        children: w('path', {
                          d: 'M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z',
                        }),
                      }),
                      w('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        className: 'h-6 w-6 cursor-pointer',
                        viewBox: '0 0 50 50',
                        children: w('path', {
                          d: 'M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z',
                        }),
                      }),
                      w('svg', {
                        xmlns: 'http://www.w3.org/2000/svg',
                        className: 'h-6 w-6 cursor-pointer',
                        viewBox: '0 0 50 50',
                        children: w('path', {
                          d: 'M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              $('div', {
                className:
                  'flex w-full flex-col gap-2 px-1 font-normal text-gray-700 md:w-auto md:flex-row md:items-center md:gap-8',
                children: [
                  w('p', {
                    className: 'text-sm',
                    children: '© 2023 Airbnb, Inc.',
                  }),
                  w('div', {
                    children: $('ul', {
                      className: ' flex gap-6 text-sm text-gray-700',
                      children: [
                        w('li', {
                          className:
                            'cursor-pointer text-gray-700 decoration-1 underline-offset-1 hover:underline md:list-disc',
                          children: 'Privacy',
                        }),
                        w('li', {
                          className:
                            'cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline',
                          children: 'Terms',
                        }),
                        w('li', {
                          className:
                            'cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline',
                          children: 'Sitemap',
                        }),
                        w('li', {
                          className:
                            'cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline',
                          children: 'Company details',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Hb = () =>
    $(Wi, {
      children: [
        w(Bb, {}),
        w('div', {
          className: 'mx-auto flex min-h-screen max-w-screen-xl flex-col',
          children: w(Dx, {}),
        }),
        w(Ub, {}),
      ],
    });
var vg = { exports: {} },
  ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uf = Symbol.for('react.element'),
  cf = Symbol.for('react.portal'),
  fs = Symbol.for('react.fragment'),
  ps = Symbol.for('react.strict_mode'),
  ms = Symbol.for('react.profiler'),
  hs = Symbol.for('react.provider'),
  vs = Symbol.for('react.context'),
  Vb = Symbol.for('react.server_context'),
  gs = Symbol.for('react.forward_ref'),
  ys = Symbol.for('react.suspense'),
  ws = Symbol.for('react.suspense_list'),
  xs = Symbol.for('react.memo'),
  bs = Symbol.for('react.lazy'),
  Yb = Symbol.for('react.offscreen'),
  gg;
gg = Symbol.for('react.module.reference');
function At(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case uf:
        switch (((e = e.type), e)) {
          case fs:
          case ms:
          case ps:
          case ys:
          case ws:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Vb:
              case vs:
              case gs:
              case bs:
              case xs:
              case hs:
                return e;
              default:
                return t;
            }
        }
      case cf:
        return t;
    }
  }
}
ve.ContextConsumer = vs;
ve.ContextProvider = hs;
ve.Element = uf;
ve.ForwardRef = gs;
ve.Fragment = fs;
ve.Lazy = bs;
ve.Memo = xs;
ve.Portal = cf;
ve.Profiler = ms;
ve.StrictMode = ps;
ve.Suspense = ys;
ve.SuspenseList = ws;
ve.isAsyncMode = function () {
  return !1;
};
ve.isConcurrentMode = function () {
  return !1;
};
ve.isContextConsumer = function (e) {
  return At(e) === vs;
};
ve.isContextProvider = function (e) {
  return At(e) === hs;
};
ve.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === uf;
};
ve.isForwardRef = function (e) {
  return At(e) === gs;
};
ve.isFragment = function (e) {
  return At(e) === fs;
};
ve.isLazy = function (e) {
  return At(e) === bs;
};
ve.isMemo = function (e) {
  return At(e) === xs;
};
ve.isPortal = function (e) {
  return At(e) === cf;
};
ve.isProfiler = function (e) {
  return At(e) === ms;
};
ve.isStrictMode = function (e) {
  return At(e) === ps;
};
ve.isSuspense = function (e) {
  return At(e) === ys;
};
ve.isSuspenseList = function (e) {
  return At(e) === ws;
};
ve.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === fs ||
    e === ms ||
    e === ps ||
    e === ys ||
    e === ws ||
    e === Yb ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === bs ||
        e.$$typeof === xs ||
        e.$$typeof === hs ||
        e.$$typeof === vs ||
        e.$$typeof === gs ||
        e.$$typeof === gg ||
        e.getModuleId !== void 0))
  );
};
ve.typeOf = At;
vg.exports = ve;
var yg = vg.exports;
function Gb(e) {
  function t(F, A, U, X, _) {
    for (
      var oe = 0,
        j = 0,
        ye = 0,
        ce = 0,
        pe,
        te,
        De = 0,
        Ke = 0,
        ie,
        Le = (ie = pe = 0),
        de = 0,
        Ae = 0,
        dr = 0,
        Ie = 0,
        dn = U.length,
        Mo = dn - 1,
        It,
        ee = '',
        $e = '',
        As = '',
        Is = '',
        On;
      de < dn;

    ) {
      if (
        ((te = U.charCodeAt(de)),
        de === Mo &&
          j + ce + ye + oe !== 0 &&
          (j !== 0 && (te = j === 47 ? 10 : 47),
          (ce = ye = oe = 0),
          dn++,
          Mo++),
        j + ce + ye + oe === 0)
      ) {
        if (
          de === Mo &&
          (0 < Ae && (ee = ee.replace(f, '')), 0 < ee.trim().length)
        ) {
          switch (te) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ee += U.charAt(de);
          }
          te = 59;
        }
        switch (te) {
          case 123:
            for (
              ee = ee.trim(), pe = ee.charCodeAt(0), ie = 1, Ie = ++de;
              de < dn;

            ) {
              switch ((te = U.charCodeAt(de))) {
                case 123:
                  ie++;
                  break;
                case 125:
                  ie--;
                  break;
                case 47:
                  switch ((te = U.charCodeAt(de + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (Le = de + 1; Le < Mo; ++Le)
                          switch (U.charCodeAt(Le)) {
                            case 47:
                              if (
                                te === 42 &&
                                U.charCodeAt(Le - 1) === 42 &&
                                de + 2 !== Le
                              ) {
                                de = Le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (te === 47) {
                                de = Le + 1;
                                break e;
                              }
                          }
                        de = Le;
                      }
                  }
                  break;
                case 91:
                  te++;
                case 40:
                  te++;
                case 34:
                case 39:
                  for (; de++ < Mo && U.charCodeAt(de) !== te; );
              }
              if (ie === 0) break;
              de++;
            }
            switch (
              ((ie = U.substring(Ie, de)),
              pe === 0 && (pe = (ee = ee.replace(c, '').trim()).charCodeAt(0)),
              pe)
            ) {
              case 64:
                switch (
                  (0 < Ae && (ee = ee.replace(f, '')),
                  (te = ee.charCodeAt(1)),
                  te)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ae = A;
                    break;
                  default:
                    Ae = V;
                }
                if (
                  ((ie = t(A, Ae, ie, te, _ + 1)),
                  (Ie = ie.length),
                  0 < k &&
                    ((Ae = n(V, ee, dr)),
                    (On = l(3, ie, Ae, A, K, D, Ie, te, _, X)),
                    (ee = Ae.join('')),
                    On !== void 0 &&
                      (Ie = (ie = On.trim()).length) === 0 &&
                      ((te = 0), (ie = ''))),
                  0 < Ie)
                )
                  switch (te) {
                    case 115:
                      ee = ee.replace(N, a);
                    case 100:
                    case 109:
                    case 45:
                      ie = ee + '{' + ie + '}';
                      break;
                    case 107:
                      (ee = ee.replace(y, '$1 $2')),
                        (ie = ee + '{' + ie + '}'),
                        (ie =
                          z === 1 || (z === 2 && i('@' + ie, 3))
                            ? '@-webkit-' + ie + '@' + ie
                            : '@' + ie);
                      break;
                    default:
                      (ie = ee + ie), X === 112 && (ie = (($e += ie), ''));
                  }
                else ie = '';
                break;
              default:
                ie = t(A, n(A, ee, dr), ie, X, _ + 1);
            }
            (As += ie),
              (ie = dr = Ae = Le = pe = 0),
              (ee = ''),
              (te = U.charCodeAt(++de));
            break;
          case 125:
          case 59:
            if (
              ((ee = (0 < Ae ? ee.replace(f, '') : ee).trim()),
              1 < (Ie = ee.length))
            )
              switch (
                (Le === 0 &&
                  ((pe = ee.charCodeAt(0)),
                  pe === 45 || (96 < pe && 123 > pe)) &&
                  (Ie = (ee = ee.replace(' ', ':')).length),
                0 < k &&
                  (On = l(1, ee, A, F, K, D, $e.length, X, _, X)) !== void 0 &&
                  (Ie = (ee = On.trim()).length) === 0 &&
                  (ee = '\0\0'),
                (pe = ee.charCodeAt(0)),
                (te = ee.charCodeAt(1)),
                pe)
              ) {
                case 0:
                  break;
                case 64:
                  if (te === 105 || te === 99) {
                    Is += ee + U.charAt(de);
                    break;
                  }
                default:
                  ee.charCodeAt(Ie - 1) !== 58 &&
                    ($e += o(ee, pe, te, ee.charCodeAt(2)));
              }
            (dr = Ae = Le = pe = 0), (ee = ''), (te = U.charCodeAt(++de));
        }
      }
      switch (te) {
        case 13:
        case 10:
          j === 47
            ? (j = 0)
            : 1 + pe === 0 &&
              X !== 107 &&
              0 < ee.length &&
              ((Ae = 1), (ee += '\0')),
            0 < k * G && l(0, ee, A, F, K, D, $e.length, X, _, X),
            (D = 1),
            K++;
          break;
        case 59:
        case 125:
          if (j + ce + ye + oe === 0) {
            D++;
            break;
          }
        default:
          switch ((D++, (It = U.charAt(de)), te)) {
            case 9:
            case 32:
              if (ce + oe + j === 0)
                switch (De) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    It = '';
                    break;
                  default:
                    te !== 32 && (It = ' ');
                }
              break;
            case 0:
              It = '\\0';
              break;
            case 12:
              It = '\\f';
              break;
            case 11:
              It = '\\v';
              break;
            case 38:
              ce + j + oe === 0 && ((Ae = dr = 1), (It = '\f' + It));
              break;
            case 108:
              if (ce + j + oe + B === 0 && 0 < Le)
                switch (de - Le) {
                  case 2:
                    De === 112 && U.charCodeAt(de - 3) === 58 && (B = De);
                  case 8:
                    Ke === 111 && (B = Ke);
                }
              break;
            case 58:
              ce + j + oe === 0 && (Le = de);
              break;
            case 44:
              j + ye + ce + oe === 0 && ((Ae = 1), (It += '\r'));
              break;
            case 34:
            case 39:
              j === 0 && (ce = ce === te ? 0 : ce === 0 ? te : ce);
              break;
            case 91:
              ce + j + ye === 0 && oe++;
              break;
            case 93:
              ce + j + ye === 0 && oe--;
              break;
            case 41:
              ce + j + oe === 0 && ye--;
              break;
            case 40:
              if (ce + j + oe === 0) {
                if (pe === 0)
                  switch (2 * De + 3 * Ke) {
                    case 533:
                      break;
                    default:
                      pe = 1;
                  }
                ye++;
              }
              break;
            case 64:
              j + ye + ce + oe + Le + ie === 0 && (ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ce + oe + ye))
                switch (j) {
                  case 0:
                    switch (2 * te + 3 * U.charCodeAt(de + 1)) {
                      case 235:
                        j = 47;
                        break;
                      case 220:
                        (Ie = de), (j = 42);
                    }
                    break;
                  case 42:
                    te === 47 &&
                      De === 42 &&
                      Ie + 2 !== de &&
                      (U.charCodeAt(Ie + 2) === 33 &&
                        ($e += U.substring(Ie, de + 1)),
                      (It = ''),
                      (j = 0));
                }
          }
          j === 0 && (ee += It);
      }
      (Ke = De), (De = te), de++;
    }
    if (((Ie = $e.length), 0 < Ie)) {
      if (
        ((Ae = A),
        0 < k &&
          ((On = l(2, $e, Ae, F, K, D, Ie, X, _, X)),
          On !== void 0 && ($e = On).length === 0))
      )
        return Is + $e + As;
      if ((($e = Ae.join(',') + '{' + $e + '}'), z * B !== 0)) {
        switch ((z !== 2 || i($e, 2) || (B = 0), B)) {
          case 111:
            $e = $e.replace(S, ':-moz-$1') + $e;
            break;
          case 112:
            $e =
              $e.replace(b, '::-webkit-input-$1') +
              $e.replace(b, '::-moz-$1') +
              $e.replace(b, ':-ms-input-$1') +
              $e;
        }
        B = 0;
      }
    }
    return Is + $e + As;
  }
  function n(F, A, U) {
    var X = A.trim().split(x);
    A = X;
    var _ = X.length,
      oe = F.length;
    switch (oe) {
      case 0:
      case 1:
        var j = 0;
        for (F = oe === 0 ? '' : F[0] + ' '; j < _; ++j)
          A[j] = r(F, A[j], U).trim();
        break;
      default:
        var ye = (j = 0);
        for (A = []; j < _; ++j)
          for (var ce = 0; ce < oe; ++ce)
            A[ye++] = r(F[ce] + ' ', X[j], U).trim();
    }
    return A;
  }
  function r(F, A, U) {
    var X = A.charCodeAt(0);
    switch ((33 > X && (X = (A = A.trim()).charCodeAt(0)), X)) {
      case 38:
        return A.replace(g, '$1' + F.trim());
      case 58:
        return F.trim() + A.replace(g, '$1' + F.trim());
      default:
        if (0 < 1 * U && 0 < A.indexOf('\f'))
          return A.replace(g, (F.charCodeAt(0) === 58 ? '' : '$1') + F.trim());
    }
    return F + A;
  }
  function o(F, A, U, X) {
    var _ = F + ';',
      oe = 2 * A + 3 * U + 4 * X;
    if (oe === 944) {
      F = _.indexOf(':', 9) + 1;
      var j = _.substring(F, _.length - 1).trim();
      return (
        (j = _.substring(0, F).trim() + j + ';'),
        z === 1 || (z === 2 && i(j, 1)) ? '-webkit-' + j + j : j
      );
    }
    if (z === 0 || (z === 2 && !i(_, 1))) return _;
    switch (oe) {
      case 1015:
        return _.charCodeAt(10) === 97 ? '-webkit-' + _ + _ : _;
      case 951:
        return _.charCodeAt(3) === 116 ? '-webkit-' + _ + _ : _;
      case 963:
        return _.charCodeAt(5) === 110 ? '-webkit-' + _ + _ : _;
      case 1009:
        if (_.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + _ + _;
      case 978:
        return '-webkit-' + _ + '-moz-' + _ + _;
      case 1019:
      case 983:
        return '-webkit-' + _ + '-moz-' + _ + '-ms-' + _ + _;
      case 883:
        if (_.charCodeAt(8) === 45) return '-webkit-' + _ + _;
        if (0 < _.indexOf('image-set(', 11))
          return _.replace(Y, '$1-webkit-$2') + _;
        break;
      case 932:
        if (_.charCodeAt(4) === 45)
          switch (_.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                _.replace('-grow', '') +
                '-webkit-' +
                _ +
                '-ms-' +
                _.replace('grow', 'positive') +
                _
              );
            case 115:
              return (
                '-webkit-' + _ + '-ms-' + _.replace('shrink', 'negative') + _
              );
            case 98:
              return (
                '-webkit-' +
                _ +
                '-ms-' +
                _.replace('basis', 'preferred-size') +
                _
              );
          }
        return '-webkit-' + _ + '-ms-' + _ + _;
      case 964:
        return '-webkit-' + _ + '-ms-flex-' + _ + _;
      case 1023:
        if (_.charCodeAt(8) !== 99) break;
        return (
          (j = _.substring(_.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + j + '-webkit-' + _ + '-ms-flex-pack' + j + _
        );
      case 1005:
        return h.test(_)
          ? _.replace(m, ':-webkit-') + _.replace(m, ':-moz-') + _
          : _;
      case 1e3:
        switch (
          ((j = _.substring(13).trim()),
          (A = j.indexOf('-') + 1),
          j.charCodeAt(0) + j.charCodeAt(A))
        ) {
          case 226:
            j = _.replace(C, 'tb');
            break;
          case 232:
            j = _.replace(C, 'tb-rl');
            break;
          case 220:
            j = _.replace(C, 'lr');
            break;
          default:
            return _;
        }
        return '-webkit-' + _ + '-ms-' + j + _;
      case 1017:
        if (_.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((A = (_ = F).length - 10),
          (j = (_.charCodeAt(A) === 33 ? _.substring(0, A) : _)
            .substring(F.indexOf(':', 7) + 1)
            .trim()),
          (oe = j.charCodeAt(0) + (j.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > j.charCodeAt(8)) break;
          case 115:
            _ = _.replace(j, '-webkit-' + j) + ';' + _;
            break;
          case 207:
          case 102:
            _ =
              _.replace(j, '-webkit-' + (102 < oe ? 'inline-' : '') + 'box') +
              ';' +
              _.replace(j, '-webkit-' + j) +
              ';' +
              _.replace(j, '-ms-' + j + 'box') +
              ';' +
              _;
        }
        return _ + ';';
      case 938:
        if (_.charCodeAt(5) === 45)
          switch (_.charCodeAt(6)) {
            case 105:
              return (
                (j = _.replace('-items', '')),
                '-webkit-' + _ + '-webkit-box-' + j + '-ms-flex-' + j + _
              );
            case 115:
              return '-webkit-' + _ + '-ms-flex-item-' + _.replace(E, '') + _;
            default:
              return (
                '-webkit-' +
                _ +
                '-ms-flex-line-pack' +
                _.replace('align-content', '').replace(E, '') +
                _
              );
          }
        break;
      case 973:
      case 989:
        if (_.charCodeAt(3) !== 45 || _.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (L.test(F) === !0)
          return (j = F.substring(F.indexOf(':') + 1)).charCodeAt(0) === 115
            ? o(F.replace('stretch', 'fill-available'), A, U, X).replace(
                ':fill-available',
                ':stretch',
              )
            : _.replace(j, '-webkit-' + j) +
                _.replace(j, '-moz-' + j.replace('fill-', '')) +
                _;
        break;
      case 962:
        if (
          ((_ =
            '-webkit-' + _ + (_.charCodeAt(5) === 102 ? '-ms-' + _ : '') + _),
          U + X === 211 &&
            _.charCodeAt(13) === 105 &&
            0 < _.indexOf('transform', 10))
        )
          return (
            _.substring(0, _.indexOf(';', 27) + 1).replace(v, '$1-webkit-$2') +
            _
          );
    }
    return _;
  }
  function i(F, A) {
    var U = F.indexOf(A === 1 ? ':' : '{'),
      X = F.substring(0, A !== 3 ? U : 10);
    return (
      (U = F.substring(U + 1, F.length - 1)),
      W(A !== 2 ? X : X.replace(I, '$1'), U, A)
    );
  }
  function a(F, A) {
    var U = o(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return U !== A + ';'
      ? U.replace(P, ' or ($1)').substring(4)
      : '(' + A + ')';
  }
  function l(F, A, U, X, _, oe, j, ye, ce, pe) {
    for (var te = 0, De = A, Ke; te < k; ++te)
      switch ((Ke = T[te].call(d, F, De, U, X, _, oe, j, ye, ce, pe))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          De = Ke;
      }
    if (De !== A) return De;
  }
  function s(F) {
    switch (F) {
      case void 0:
      case null:
        k = T.length = 0;
        break;
      default:
        if (typeof F == 'function') T[k++] = F;
        else if (typeof F == 'object')
          for (var A = 0, U = F.length; A < U; ++A) s(F[A]);
        else G = !!F | 0;
    }
    return s;
  }
  function u(F) {
    return (
      (F = F.prefix),
      F !== void 0 &&
        ((W = null),
        F ? (typeof F != 'function' ? (z = 1) : ((z = 2), (W = F))) : (z = 0)),
      u
    );
  }
  function d(F, A) {
    var U = F;
    if ((33 > U.charCodeAt(0) && (U = U.trim()), (ne = U), (U = [ne]), 0 < k)) {
      var X = l(-1, A, U, U, K, D, 0, 0, 0, 0);
      X !== void 0 && typeof X == 'string' && (A = X);
    }
    var _ = t(V, U, A, 0, 0);
    return (
      0 < k &&
        ((X = l(-2, _, U, U, K, D, _.length, 0, 0, 0)),
        X !== void 0 && (_ = X)),
      (ne = ''),
      (B = 0),
      (D = K = 1),
      _
    );
  }
  var c = /^\0+/g,
    f = /[\0\r\f]/g,
    m = /: */g,
    h = /zoo|gra/,
    v = /([,: ])(transform)/g,
    x = /,\r+?/g,
    g = /([\t\r\n ])*\f?&/g,
    y = /@(k\w+)\s*(\S*)\s*/,
    b = /::(place)/g,
    S = /:(read-only)/g,
    C = /[svh]\w+-[tblr]{2}/,
    N = /\(\s*(.*)\s*\)/g,
    P = /([\s\S]*?);/g,
    E = /-self|flex-/g,
    I = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    L = /stretch|:\s*\w+\-(?:conte|avail)/,
    Y = /([^-])(image-set\()/,
    D = 1,
    K = 1,
    B = 0,
    z = 1,
    V = [],
    T = [],
    k = 0,
    W = null,
    G = 0,
    ne = '';
  return (d.use = s), (d.set = u), e !== void 0 && u(e), d;
}
var Qb = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function Kb(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Xb =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  ym = Kb(function (e) {
    return (
      Xb.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  wg = { exports: {} },
  ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ve = typeof Symbol == 'function' && Symbol.for,
  df = Ve ? Symbol.for('react.element') : 60103,
  ff = Ve ? Symbol.for('react.portal') : 60106,
  Ss = Ve ? Symbol.for('react.fragment') : 60107,
  Cs = Ve ? Symbol.for('react.strict_mode') : 60108,
  ks = Ve ? Symbol.for('react.profiler') : 60114,
  Es = Ve ? Symbol.for('react.provider') : 60109,
  Ns = Ve ? Symbol.for('react.context') : 60110,
  pf = Ve ? Symbol.for('react.async_mode') : 60111,
  _s = Ve ? Symbol.for('react.concurrent_mode') : 60111,
  Ps = Ve ? Symbol.for('react.forward_ref') : 60112,
  $s = Ve ? Symbol.for('react.suspense') : 60113,
  qb = Ve ? Symbol.for('react.suspense_list') : 60120,
  Os = Ve ? Symbol.for('react.memo') : 60115,
  Ts = Ve ? Symbol.for('react.lazy') : 60116,
  Jb = Ve ? Symbol.for('react.block') : 60121,
  Zb = Ve ? Symbol.for('react.fundamental') : 60117,
  e4 = Ve ? Symbol.for('react.responder') : 60118,
  t4 = Ve ? Symbol.for('react.scope') : 60119;
function Ct(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case df:
        switch (((e = e.type), e)) {
          case pf:
          case _s:
          case Ss:
          case ks:
          case Cs:
          case $s:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ns:
              case Ps:
              case Ts:
              case Os:
              case Es:
                return e;
              default:
                return t;
            }
        }
      case ff:
        return t;
    }
  }
}
function xg(e) {
  return Ct(e) === _s;
}
ge.AsyncMode = pf;
ge.ConcurrentMode = _s;
ge.ContextConsumer = Ns;
ge.ContextProvider = Es;
ge.Element = df;
ge.ForwardRef = Ps;
ge.Fragment = Ss;
ge.Lazy = Ts;
ge.Memo = Os;
ge.Portal = ff;
ge.Profiler = ks;
ge.StrictMode = Cs;
ge.Suspense = $s;
ge.isAsyncMode = function (e) {
  return xg(e) || Ct(e) === pf;
};
ge.isConcurrentMode = xg;
ge.isContextConsumer = function (e) {
  return Ct(e) === Ns;
};
ge.isContextProvider = function (e) {
  return Ct(e) === Es;
};
ge.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === df;
};
ge.isForwardRef = function (e) {
  return Ct(e) === Ps;
};
ge.isFragment = function (e) {
  return Ct(e) === Ss;
};
ge.isLazy = function (e) {
  return Ct(e) === Ts;
};
ge.isMemo = function (e) {
  return Ct(e) === Os;
};
ge.isPortal = function (e) {
  return Ct(e) === ff;
};
ge.isProfiler = function (e) {
  return Ct(e) === ks;
};
ge.isStrictMode = function (e) {
  return Ct(e) === Cs;
};
ge.isSuspense = function (e) {
  return Ct(e) === $s;
};
ge.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ss ||
    e === _s ||
    e === ks ||
    e === Cs ||
    e === $s ||
    e === qb ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Ts ||
        e.$$typeof === Os ||
        e.$$typeof === Es ||
        e.$$typeof === Ns ||
        e.$$typeof === Ps ||
        e.$$typeof === Zb ||
        e.$$typeof === e4 ||
        e.$$typeof === t4 ||
        e.$$typeof === Jb))
  );
};
ge.typeOf = Ct;
wg.exports = ge;
var n4 = wg.exports,
  mf = n4,
  r4 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  o4 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  i4 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  bg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  hf = {};
hf[mf.ForwardRef] = i4;
hf[mf.Memo] = bg;
function wm(e) {
  return mf.isMemo(e) ? bg : hf[e.$$typeof] || r4;
}
var a4 = Object.defineProperty,
  l4 = Object.getOwnPropertyNames,
  xm = Object.getOwnPropertySymbols,
  s4 = Object.getOwnPropertyDescriptor,
  u4 = Object.getPrototypeOf,
  bm = Object.prototype;
function Sg(e, t, n) {
  if (typeof t != 'string') {
    if (bm) {
      var r = u4(t);
      r && r !== bm && Sg(e, r, n);
    }
    var o = l4(t);
    xm && (o = o.concat(xm(t)));
    for (var i = wm(e), a = wm(t), l = 0; l < o.length; ++l) {
      var s = o[l];
      if (!o4[s] && !(n && n[s]) && !(a && a[s]) && !(i && i[s])) {
        var u = s4(t, s);
        try {
          a4(e, s, u);
        } catch {}
      }
    }
  }
  return e;
}
var c4 = Sg;
const d4 = td(c4);
function gn() {
  return (gn =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var Sm = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  zc = function (e) {
    return (
      e !== null &&
      typeof e == 'object' &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        '[object Object]' &&
      !yg.typeOf(e)
    );
  },
  Ol = Object.freeze([]),
  Zn = Object.freeze({});
function Ti(e) {
  return typeof e == 'function';
}
function Cm(e) {
  return e.displayName || e.name || 'Component';
}
function vf(e) {
  return e && typeof e.styledComponentId == 'string';
}
var vo =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  gf = typeof window < 'u' && 'HTMLElement' in window,
  f4 = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
          {}.REACT_APP_SC_DISABLE_SPEEDY
        : {}.SC_DISABLE_SPEEDY !== void 0 &&
          {}.SC_DISABLE_SPEEDY !== '' &&
          {}.SC_DISABLE_SPEEDY !== 'false' &&
          {}.SC_DISABLE_SPEEDY));
function Xi(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    'An error occurred. See https://git.io/JUIaE#' +
      e +
      ' for more information.' +
      (n.length > 0 ? ' Args: ' + n.join(', ') : ''),
  );
}
var p4 = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var o = this.groupSizes, i = o.length, a = i; n >= a; )
            (a <<= 1) < 0 && Xi(16, '' + n);
          (this.groupSizes = new Uint32Array(a)),
            this.groupSizes.set(o),
            (this.length = a);
          for (var l = i; l < a; l++) this.groupSizes[l] = 0;
        }
        for (var s = this.indexOfGroup(n + 1), u = 0, d = r.length; u < d; u++)
          this.tag.insertRule(s, r[u]) && (this.groupSizes[n]++, s++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            o = this.indexOfGroup(n),
            i = o + r;
          this.groupSizes[n] = 0;
          for (var a = o; a < i; a++) this.tag.deleteRule(o);
        }
      }),
      (t.getGroup = function (n) {
        var r = '';
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var o = this.groupSizes[n],
            i = this.indexOfGroup(n),
            a = i + o,
            l = i;
          l < a;
          l++
        )
          r +=
            this.tag.getRule(l) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  Ga = new Map(),
  Tl = new Map(),
  ci = 1,
  Sa = function (e) {
    if (Ga.has(e)) return Ga.get(e);
    for (; Tl.has(ci); ) ci++;
    var t = ci++;
    return Ga.set(e, t), Tl.set(t, e), t;
  },
  m4 = function (e) {
    return Tl.get(e);
  },
  h4 = function (e, t) {
    t >= ci && (ci = t + 1), Ga.set(e, t), Tl.set(t, e);
  },
  v4 = 'style[' + vo + '][data-styled-version="5.3.11"]',
  g4 = new RegExp('^' + vo + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  y4 = function (e, t, n) {
    for (var r, o = n.split(','), i = 0, a = o.length; i < a; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  w4 = function (e, t) {
    for (
      var n = (t.textContent || '').split(`/*!sc*/
`),
        r = [],
        o = 0,
        i = n.length;
      o < i;
      o++
    ) {
      var a = n[o].trim();
      if (a) {
        var l = a.match(g4);
        if (l) {
          var s = 0 | parseInt(l[1], 10),
            u = l[2];
          s !== 0 && (h4(u, s), y4(e, u, l[3]), e.getTag().insertRules(s, r)),
            (r.length = 0);
        } else r.push(a);
      }
    }
  },
  x4 = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  Cg = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      o = (function (l) {
        for (var s = l.childNodes, u = s.length; u >= 0; u--) {
          var d = s[u];
          if (d && d.nodeType === 1 && d.hasAttribute(vo)) return d;
        }
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(vo, 'active'),
      r.setAttribute('data-styled-version', '5.3.11');
    var a = x4();
    return a && r.setAttribute('nonce', a), n.insertBefore(r, i), r;
  },
  b4 = (function () {
    function e(n) {
      var r = (this.element = Cg(n));
      r.appendChild(document.createTextNode('')),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var i = document.styleSheets, a = 0, l = i.length; a < l; a++) {
            var s = i[a];
            if (s.ownerNode === o) return s;
          }
          Xi(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == 'string' ? r.cssText : '';
      }),
      e
    );
  })(),
  S4 = (function () {
    function e(n) {
      var r = (this.element = Cg(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var o = document.createTextNode(r),
            i = this.nodes[n];
          return this.element.insertBefore(o, i || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : '';
      }),
      e
    );
  })(),
  C4 = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : '';
      }),
      e
    );
  })(),
  km = gf,
  k4 = { isServer: !gf, useCSSOMInjection: !f4 },
  kg = (function () {
    function e(n, r, o) {
      n === void 0 && (n = Zn),
        r === void 0 && (r = {}),
        (this.options = gn({}, k4, {}, n)),
        (this.gs = r),
        (this.names = new Map(o)),
        (this.server = !!n.isServer),
        !this.server &&
          gf &&
          km &&
          ((km = !1),
          (function (i) {
            for (
              var a = document.querySelectorAll(v4), l = 0, s = a.length;
              l < s;
              l++
            ) {
              var u = a[l];
              u &&
                u.getAttribute(vo) !== 'active' &&
                (w4(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this));
    }
    e.registerId = function (n) {
      return Sa(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            gn({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0,
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((o = (r = this.options).isServer),
            (i = r.useCSSOMInjection),
            (a = r.target),
            (n = o ? new C4(a) : i ? new b4(a) : new S4(a)),
            new p4(n)))
        );
        var n, r, o, i, a;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((Sa(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var o = new Set();
          o.add(r), this.names.set(n, o);
        }
      }),
      (t.insertRules = function (n, r, o) {
        this.registerName(n, r), this.getTag().insertRules(Sa(n), o);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(Sa(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), o = r.length, i = '', a = 0; a < o; a++) {
            var l = m4(a);
            if (l !== void 0) {
              var s = n.names.get(l),
                u = r.getGroup(a);
              if (s && u && s.size) {
                var d = vo + '.g' + a + '[id="' + l + '"]',
                  c = '';
                s !== void 0 &&
                  s.forEach(function (f) {
                    f.length > 0 && (c += f + ',');
                  }),
                  (i +=
                    '' +
                    u +
                    d +
                    '{content:"' +
                    c +
                    `"}/*!sc*/
`);
              }
            }
          }
          return i;
        })(this);
      }),
      e
    );
  })(),
  E4 = /(a)(d)/gi,
  Em = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Wc(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Em(t % 52) + n;
  return (Em(t % 52) + n).replace(E4, '$1-$2');
}
var Jr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Eg = function (e) {
    return Jr(5381, e);
  };
function N4(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Ti(n) && !vf(n)) return !1;
  }
  return !0;
}
var _4 = Eg('5.3.11'),
  P4 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && N4(t)),
        (this.componentId = n),
        (this.baseHash = Jr(_4, n)),
        (this.baseStyle = r),
        kg.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.componentId,
          i = [];
        if (
          (this.baseStyle &&
            i.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
            i.push(this.staticRulesId);
          else {
            var a = go(this.rules, t, n, r).join(''),
              l = Wc(Jr(this.baseHash, a) >>> 0);
            if (!n.hasNameForId(o, l)) {
              var s = r(a, '.' + l, void 0, o);
              n.insertRules(o, l, s);
            }
            i.push(l), (this.staticRulesId = l);
          }
        else {
          for (
            var u = this.rules.length,
              d = Jr(this.baseHash, r.hash),
              c = '',
              f = 0;
            f < u;
            f++
          ) {
            var m = this.rules[f];
            if (typeof m == 'string') c += m;
            else if (m) {
              var h = go(m, t, n, r),
                v = Array.isArray(h) ? h.join('') : h;
              (d = Jr(d, v + f)), (c += v);
            }
          }
          if (c) {
            var x = Wc(d >>> 0);
            if (!n.hasNameForId(o, x)) {
              var g = r(c, '.' + x, void 0, o);
              n.insertRules(o, x, g);
            }
            i.push(x);
          }
        }
        return i.join(' ');
      }),
      e
    );
  })(),
  $4 = /^\s*\/\/.*$/gm,
  O4 = [':', '[', '.', '#'];
function T4(e) {
  var t,
    n,
    r,
    o,
    i = e === void 0 ? Zn : e,
    a = i.options,
    l = a === void 0 ? Zn : a,
    s = i.plugins,
    u = s === void 0 ? Ol : s,
    d = new Gb(l),
    c = [],
    f = (function (v) {
      function x(g) {
        if (g)
          try {
            v(g + '}');
          } catch {}
      }
      return function (g, y, b, S, C, N, P, E, I, L) {
        switch (g) {
          case 1:
            if (I === 0 && y.charCodeAt(0) === 64) return v(y + ';'), '';
            break;
          case 2:
            if (E === 0) return y + '/*|*/';
            break;
          case 3:
            switch (E) {
              case 102:
              case 112:
                return v(b[0] + y), '';
              default:
                return y + (L === 0 ? '/*|*/' : '');
            }
          case -2:
            y.split('/*|*/}').forEach(x);
        }
      };
    })(function (v) {
      c.push(v);
    }),
    m = function (v, x, g) {
      return (x === 0 && O4.indexOf(g[n.length]) !== -1) || g.match(o)
        ? v
        : '.' + t;
    };
  function h(v, x, g, y) {
    y === void 0 && (y = '&');
    var b = v.replace($4, ''),
      S = x && g ? g + ' ' + x + ' { ' + b + ' }' : b;
    return (
      (t = y),
      (n = x),
      (r = new RegExp('\\' + n + '\\b', 'g')),
      (o = new RegExp('(\\' + n + '\\b){2,}')),
      d(g || !x ? '' : x, S)
    );
  }
  return (
    d.use(
      [].concat(u, [
        function (v, x, g) {
          v === 2 &&
            g.length &&
            g[0].lastIndexOf(n) > 0 &&
            (g[0] = g[0].replace(r, m));
        },
        f,
        function (v) {
          if (v === -2) {
            var x = c;
            return (c = []), x;
          }
        },
      ]),
    ),
    (h.hash = u.length
      ? u
          .reduce(function (v, x) {
            return x.name || Xi(15), Jr(v, x.name);
          }, 5381)
          .toString()
      : ''),
    h
  );
}
var Ng = Z.createContext();
Ng.Consumer;
var _g = Z.createContext(),
  R4 = (_g.Consumer, new kg()),
  Bc = T4();
function M4() {
  return p.useContext(Ng) || R4;
}
function D4() {
  return p.useContext(_g) || Bc;
}
var Pg = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Bc);
        var a = r.name + i.hash;
        o.hasNameForId(r.id, a) ||
          o.insertRules(r.id, a, i(r.rules, a, '@keyframes'));
      }),
        (this.toString = function () {
          return Xi(12, String(r.name));
        }),
        (this.name = t),
        (this.id = 'sc-keyframes-' + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Bc), this.name + t.hash;
      }),
      e
    );
  })(),
  L4 = /([A-Z])/,
  A4 = /([A-Z])/g,
  I4 = /^ms-/,
  F4 = function (e) {
    return '-' + e.toLowerCase();
  };
function Nm(e) {
  return L4.test(e) ? e.replace(A4, F4).replace(I4, '-ms-') : e;
}
var _m = function (e) {
  return e == null || e === !1 || e === '';
};
function go(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, l = e.length; a < l; a += 1)
      (o = go(e[a], t, n, r)) !== '' &&
        (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (_m(e)) return '';
  if (vf(e)) return '.' + e.styledComponentId;
  if (Ti(e)) {
    if (
      typeof (u = e) != 'function' ||
      (u.prototype && u.prototype.isReactComponent) ||
      !t
    )
      return e;
    var s = e(t);
    return go(s, t, n, r);
  }
  var u;
  return e instanceof Pg
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : zc(e)
      ? (function d(c, f) {
          var m,
            h,
            v = [];
          for (var x in c)
            c.hasOwnProperty(x) &&
              !_m(c[x]) &&
              ((Array.isArray(c[x]) && c[x].isCss) || Ti(c[x])
                ? v.push(Nm(x) + ':', c[x], ';')
                : zc(c[x])
                  ? v.push.apply(v, d(c[x], x))
                  : v.push(
                      Nm(x) +
                        ': ' +
                        ((m = x),
                        (h = c[x]) == null || typeof h == 'boolean' || h === ''
                          ? ''
                          : typeof h != 'number' ||
                              h === 0 ||
                              m in Qb ||
                              m.startsWith('--')
                            ? String(h).trim()
                            : h + 'px') +
                        ';',
                    ));
          return f ? [f + ' {'].concat(v, ['}']) : v;
        })(e)
      : e.toString();
}
var Pm = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function $g(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return Ti(e) || zc(e)
    ? Pm(go(Sm(Ol, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == 'string'
      ? e
      : Pm(go(Sm(e, n)));
}
var j4 = function (e, t, n) {
    return (
      n === void 0 && (n = Zn), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  z4 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  W4 = /(^-|-$)/g;
function yu(e) {
  return e.replace(z4, '-').replace(W4, '');
}
var Og = function (e) {
  return Wc(Eg(e) >>> 0);
};
function Ca(e) {
  return typeof e == 'string' && !0;
}
var Uc = function (e) {
    return (
      typeof e == 'function' ||
      (typeof e == 'object' && e !== null && !Array.isArray(e))
    );
  },
  B4 = function (e) {
    return e !== '__proto__' && e !== 'constructor' && e !== 'prototype';
  };
function U4(e, t, n) {
  var r = e[n];
  Uc(t) && Uc(r) ? Tg(r, t) : (e[n] = t);
}
function Tg(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var a = i[o];
    if (Uc(a)) for (var l in a) B4(l) && U4(e, a[l], l);
  }
  return e;
}
var Rg = Z.createContext();
Rg.Consumer;
var wu = {};
function Mg(e, t, n) {
  var r = vf(e),
    o = !Ca(e),
    i = t.attrs,
    a = i === void 0 ? Ol : i,
    l = t.componentId,
    s =
      l === void 0
        ? (function (y, b) {
            var S = typeof y != 'string' ? 'sc' : yu(y);
            wu[S] = (wu[S] || 0) + 1;
            var C = S + '-' + Og('5.3.11' + S + wu[S]);
            return b ? b + '-' + C : C;
          })(t.displayName, t.parentComponentId)
        : l,
    u = t.displayName,
    d =
      u === void 0
        ? (function (y) {
            return Ca(y) ? 'styled.' + y : 'Styled(' + Cm(y) + ')';
          })(e)
        : u,
    c =
      t.displayName && t.componentId
        ? yu(t.displayName) + '-' + t.componentId
        : t.componentId || s,
    f = r && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a,
    m = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (m = t.shouldForwardProp
      ? function (y, b, S) {
          return e.shouldForwardProp(y, b, S) && t.shouldForwardProp(y, b, S);
        }
      : e.shouldForwardProp);
  var h,
    v = new P4(n, c, r ? e.componentStyle : void 0),
    x = v.isStatic && a.length === 0,
    g = function (y, b) {
      return (function (S, C, N, P) {
        var E = S.attrs,
          I = S.componentStyle,
          L = S.defaultProps,
          Y = S.foldedComponentIds,
          D = S.shouldForwardProp,
          K = S.styledComponentId,
          B = S.target,
          z = (function (X, _, oe) {
            X === void 0 && (X = Zn);
            var j = gn({}, _, { theme: X }),
              ye = {};
            return (
              oe.forEach(function (ce) {
                var pe,
                  te,
                  De,
                  Ke = ce;
                for (pe in (Ti(Ke) && (Ke = Ke(j)), Ke))
                  j[pe] = ye[pe] =
                    pe === 'className'
                      ? ((te = ye[pe]),
                        (De = Ke[pe]),
                        te && De ? te + ' ' + De : te || De)
                      : Ke[pe];
              }),
              [j, ye]
            );
          })(j4(C, p.useContext(Rg), L) || Zn, C, E),
          V = z[0],
          T = z[1],
          k = (function (X, _, oe, j) {
            var ye = M4(),
              ce = D4(),
              pe = _
                ? X.generateAndInjectStyles(Zn, ye, ce)
                : X.generateAndInjectStyles(oe, ye, ce);
            return pe;
          })(I, P, V),
          W = N,
          G = T.$as || C.$as || T.as || C.as || B,
          ne = Ca(G),
          F = T !== C ? gn({}, C, {}, T) : C,
          A = {};
        for (var U in F)
          U[0] !== '$' &&
            U !== 'as' &&
            (U === 'forwardedAs'
              ? (A.as = F[U])
              : (D ? D(U, ym, G) : !ne || ym(U)) && (A[U] = F[U]));
        return (
          C.style &&
            T.style !== C.style &&
            (A.style = gn({}, C.style, {}, T.style)),
          (A.className = Array.prototype
            .concat(Y, K, k !== K ? k : null, C.className, T.className)
            .filter(Boolean)
            .join(' ')),
          (A.ref = W),
          p.createElement(G, A)
        );
      })(h, y, b, x);
    };
  return (
    (g.displayName = d),
    ((h = Z.forwardRef(g)).attrs = f),
    (h.componentStyle = v),
    (h.displayName = d),
    (h.shouldForwardProp = m),
    (h.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : Ol),
    (h.styledComponentId = c),
    (h.target = r ? e.target : e),
    (h.withComponent = function (y) {
      var b = t.componentId,
        S = (function (N, P) {
          if (N == null) return {};
          var E,
            I,
            L = {},
            Y = Object.keys(N);
          for (I = 0; I < Y.length; I++)
            (E = Y[I]), P.indexOf(E) >= 0 || (L[E] = N[E]);
          return L;
        })(t, ['componentId']),
        C = b && b + '-' + (Ca(y) ? y : yu(Cm(y)));
      return Mg(y, gn({}, S, { attrs: f, componentId: C }), n);
    }),
    Object.defineProperty(h, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (y) {
        this._foldedDefaultProps = r ? Tg({}, e.defaultProps, y) : y;
      },
    }),
    Object.defineProperty(h, 'toString', {
      value: function () {
        return '.' + h.styledComponentId;
      },
    }),
    o &&
      d4(h, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    h
  );
}
var Hc = function (e) {
  return (function t(n, r, o) {
    if ((o === void 0 && (o = Zn), !yg.isValidElementType(r)))
      return Xi(1, String(r));
    var i = function () {
      return n(r, o, $g.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (a) {
        return t(n, r, gn({}, o, {}, a));
      }),
      (i.attrs = function (a) {
        return t(
          n,
          r,
          gn({}, o, {
            attrs: Array.prototype.concat(o.attrs, a).filter(Boolean),
          }),
        );
      }),
      i
    );
  })(Mg, e);
};
[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'textPath',
  'tspan',
].forEach(function (e) {
  Hc[e] = Hc(e);
});
function yf(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = $g.apply(void 0, [e].concat(n)).join(''),
    i = Og(o);
  return new Pg(i, o);
}
const qi = Hc;
var H4 = function (t, n) {
  return function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (typeof r[t] < 'u') return r[t];
    if (t && t.indexOf('.') > 0) {
      for (
        var o = t.split('.'), i = o.length, a = r[o[0]], l = 1;
        a != null && l < i;

      )
        (a = a[o[l]]), (l += 1);
      if (typeof a < 'u') return a;
    }
    return n;
  };
};
const V4 = (e) => ({ display: e ? 'flex' : 'none' }),
  Y4 = '#4fa94d',
  G4 = { 'aria-busy': !0, role: 'status' },
  zt = 242.776657104492,
  Q4 = 1.6,
  K4 = yf`
  12.5% {
    stroke-dasharray: ${zt * 0.14}px, ${zt}px;
    stroke-dashoffset: -${zt * 0.11}px;
  }
  43.75% {
    stroke-dasharray: ${zt * 0.35}px, ${zt}px;
    stroke-dashoffset: -${zt * 0.35}px;
  }
  100% {
    stroke-dasharray: ${zt * 0.01}px, ${zt}px;
    stroke-dashoffset: -${zt * 0.99}px;
  }
`;
qi.path`
  stroke-dasharray: ${zt * 0.01}px, ${zt};
  stroke-dashoffset: 0;
  animation: ${K4} ${Q4}s linear infinite;
`;
const X4 = yf`
 to {
    transform: rotate(360deg);
  }
`;
qi.svg`
  animation: ${X4} 0.75s steps(12, end) infinite;
  animation-duration: ${H4('speed', '0.75')}s;
`;
qi.polyline`
  stroke-width: ${(e) => e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
const q4 = ({
  height: e = 80,
  width: t = 80,
  strokeWidth: n = 2,
  radius: r = 1,
  color: o = Y4,
  ariaLabel: i = 'tail-spin-loading',
  wrapperStyle: a,
  wrapperClass: l,
  visible: s = !0,
}) => {
  const u = parseInt(String(n)),
    d = u + 36,
    c = u / 2,
    f = c + parseInt(String(r)) - 1;
  return Z.createElement(
    'div',
    {
      style: { ...V4(s), ...a },
      className: l,
      'data-testid': 'tail-spin-loading',
      'aria-label': i,
      ...G4,
    },
    Z.createElement(
      'svg',
      {
        width: t,
        height: e,
        viewBox: `0 0 ${d} ${d}`,
        xmlns: 'http://www.w3.org/2000/svg',
        'data-testid': 'tail-spin-svg',
      },
      Z.createElement(
        'defs',
        null,
        Z.createElement(
          'linearGradient',
          { x1: '8.042%', y1: '0%', x2: '65.682%', y2: '23.865%', id: 'a' },
          Z.createElement('stop', {
            stopColor: o,
            stopOpacity: '0',
            offset: '0%',
          }),
          Z.createElement('stop', {
            stopColor: o,
            stopOpacity: '.631',
            offset: '63.146%',
          }),
          Z.createElement('stop', { stopColor: o, offset: '100%' }),
        ),
      ),
      Z.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd' },
        Z.createElement(
          'g',
          { transform: `translate(${c} ${c})` },
          Z.createElement(
            'path',
            {
              d: 'M36 18c0-9.94-8.06-18-18-18',
              id: 'Oval-2',
              stroke: o,
              strokeWidth: n,
            },
            Z.createElement('animateTransform', {
              attributeName: 'transform',
              type: 'rotate',
              from: '0 18 18',
              to: '360 18 18',
              dur: '0.9s',
              repeatCount: 'indefinite',
            }),
          ),
          Z.createElement(
            'circle',
            { fill: '#fff', cx: '36', cy: '18', r: f },
            Z.createElement('animateTransform', {
              attributeName: 'transform',
              type: 'rotate',
              from: '0 18 18',
              to: '360 18 18',
              dur: '0.9s',
              repeatCount: 'indefinite',
            }),
          ),
        ),
      ),
    ),
  );
};
var J4 = q4;
const Z4 = yf`
 to {
    stroke-dashoffset: 136;
  }
`;
qi.polygon`
  stroke-dasharray: 17;
  animation: ${Z4} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
qi.svg`
  transform-origin: 50% 65%;
`;
const Po = () =>
    w('div', {
      className: 'absolute inset-1/2 flex flex-col items-center justify-center',
      children: w(J4, {
        height: 100,
        width: 200,
        color: '#f5385d',
        radius: '1',
        visible: !0,
      }),
    }),
  e3 = ({ place: e }) => {
    const { _id: t, photos: n, address: r, title: o, price: i } = e;
    return w($t, {
      to: `/place/${t}`,
      className: 'm-4 flex flex-col md:m-2 xl:m-0',
      children: $('div', {
        className: 'card ',
        children: [
          (n == null ? void 0 : n[0]) &&
            w('img', {
              src: `${n == null ? void 0 : n[0]}`,
              className: 'h-4/5 w-full rounded-xl object-cover',
            }),
          w('h2', { className: 'truncate font-bold', children: r }),
          w('h3', { className: 'truncate text-sm text-gray-500', children: o }),
          $('div', {
            className: 'mt-1',
            children: [
              $('span', {
                className: 'font-semibold',
                children: ['₹', i, ' '],
              }),
              'per night',
            ],
          }),
        ],
      }),
    });
  },
  t3 = () => {
    const e = sg(),
      { places: t, loading: n } = e;
    return n
      ? w(Po, {})
      : w('div', {
          className:
            'grid grid-cols-1 justify-items-center py-32 px-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3 lg:gap-2 xl:grid-cols-4 xl:gap-10',
          children:
            t.length > 0
              ? t.map((r) => w(e3, { place: r }, r._id))
              : $('div', {
                  className:
                    'absolute left-1/2 right-1/2 top-40 flex  w-full -translate-x-1/2 transform flex-col p-10  md:w-1/2',
                  children: [
                    w('h1', {
                      className: 'text-3xl font-semibold',
                      children: 'Result not found!',
                    }),
                    w('p', {
                      className: 'text-lg font-semibold',
                      children:
                        "Sorry, we couldn't find the place you're looking for.",
                    }),
                    w('button', {
                      className:
                        'mt-4 w-32 rounded-full bg-primary p-2 text-white',
                      children: $('a', {
                        href: '/',
                        className: 'flex items-center justify-center gap-1',
                        children: [
                          $('svg', {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '16',
                            height: '16',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            stroke: 'currentColor',
                            'stroke-width': '2',
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round',
                            className: 'h-5 w-5',
                            children: [
                              w('line', {
                                x1: '19',
                                y1: '12',
                                x2: '5',
                                y2: '12',
                              }),
                              w('polyline', { points: '12 19 5 12 12 5' }),
                            ],
                          }),
                          'Go back',
                        ],
                      }),
                    }),
                  ],
                }),
        });
  };
function n3(e = {}) {
  const { nonce: t, onScriptLoadSuccess: n, onScriptLoadError: r } = e,
    [o, i] = p.useState(!1),
    a = p.useRef(n);
  a.current = n;
  const l = p.useRef(r);
  return (
    (l.current = r),
    p.useEffect(() => {
      const s = document.createElement('script');
      return (
        (s.src = 'https://accounts.google.com/gsi/client'),
        (s.async = !0),
        (s.defer = !0),
        (s.nonce = t),
        (s.onload = () => {
          var u;
          i(!0), (u = a.current) === null || u === void 0 || u.call(a);
        }),
        (s.onerror = () => {
          var u;
          i(!1), (u = l.current) === null || u === void 0 || u.call(l);
        }),
        document.body.appendChild(s),
        () => {
          document.body.removeChild(s);
        }
      );
    }, [t]),
    o
  );
}
const Dg = p.createContext(null);
function r3({
  clientId: e,
  nonce: t,
  onScriptLoadSuccess: n,
  onScriptLoadError: r,
  children: o,
}) {
  const i = n3({ nonce: t, onScriptLoadSuccess: n, onScriptLoadError: r }),
    a = p.useMemo(() => ({ clientId: e, scriptLoadedSuccessfully: i }), [e, i]);
  return Z.createElement(Dg.Provider, { value: a }, o);
}
function o3() {
  const e = p.useContext(Dg);
  if (!e)
    throw new Error(
      'Google OAuth components must be used within GoogleOAuthProvider',
    );
  return e;
}
function i3(e) {
  var t;
  return (t = e == null ? void 0 : e.clientId) !== null && t !== void 0
    ? t
    : e == null
      ? void 0
      : e.client_id;
}
const a3 = { large: 40, medium: 32, small: 20 };
function Lg({
  onSuccess: e,
  onError: t,
  useOneTap: n,
  promptMomentNotification: r,
  type: o = 'standard',
  theme: i = 'outline',
  size: a = 'large',
  text: l,
  shape: s,
  logo_alignment: u,
  width: d,
  locale: c,
  click_listener: f,
  containerProps: m,
  ...h
}) {
  const v = p.useRef(null),
    { clientId: x, scriptLoadedSuccessfully: g } = o3(),
    y = p.useRef(e);
  y.current = e;
  const b = p.useRef(t);
  b.current = t;
  const S = p.useRef(r);
  return (
    (S.current = r),
    p.useEffect(() => {
      var C, N, P, E, I, L, Y, D, K;
      if (g)
        return (
          (P =
            (N =
              (C = window == null ? void 0 : window.google) === null ||
              C === void 0
                ? void 0
                : C.accounts) === null || N === void 0
              ? void 0
              : N.id) === null ||
            P === void 0 ||
            P.initialize({
              client_id: x,
              callback: (B) => {
                var z;
                if (!(B != null && B.credential))
                  return (z = b.current) === null || z === void 0
                    ? void 0
                    : z.call(b);
                const { credential: V, select_by: T } = B;
                y.current({ credential: V, clientId: i3(B), select_by: T });
              },
              ...h,
            }),
          (L =
            (I =
              (E = window == null ? void 0 : window.google) === null ||
              E === void 0
                ? void 0
                : E.accounts) === null || I === void 0
              ? void 0
              : I.id) === null ||
            L === void 0 ||
            L.renderButton(v.current, {
              type: o,
              theme: i,
              size: a,
              text: l,
              shape: s,
              logo_alignment: u,
              width: d,
              locale: c,
              click_listener: f,
            }),
          n &&
            ((K =
              (D =
                (Y = window == null ? void 0 : window.google) === null ||
                Y === void 0
                  ? void 0
                  : Y.accounts) === null || D === void 0
                ? void 0
                : D.id) === null ||
              K === void 0 ||
              K.prompt(S.current)),
          () => {
            var B, z, V;
            n &&
              ((V =
                (z =
                  (B = window == null ? void 0 : window.google) === null ||
                  B === void 0
                    ? void 0
                    : B.accounts) === null || z === void 0
                  ? void 0
                  : z.id) === null ||
                V === void 0 ||
                V.cancel());
          }
        );
    }, [x, g, n, o, i, a, l, s, u, d, c]),
    Z.createElement('div', {
      ...m,
      ref: v,
      style: { height: a3[a], ...(m == null ? void 0 : m.style) },
    })
  );
}
const l3 = () => {
    const [e, t] = p.useState({ name: '', email: '', password: '' }),
      [n, r] = p.useState(!1),
      o = _o(),
      i = (s) => {
        const { name: u, value: d } = s.target;
        t({ ...e, [u]: d });
      },
      a = async (s) => {
        s.preventDefault();
        const u = await o.register(e);
        u.success ? (q.success(u.message), r(!0)) : q.error(u.message);
      },
      l = async (s) => {
        const u = await o.googleLogin(s);
        u.success ? (q.success(u.message), r(!0)) : q.error(u.message);
      };
    return n
      ? w(mo, { to: '/' })
      : w('div', {
          className: 'mt-4 flex grow items-center justify-around p-4 md:p-0',
          children: $('div', {
            className: 'mb-40',
            children: [
              w('h1', {
                className: 'mb-4 text-center text-4xl',
                children: 'Register',
              }),
              $('form', {
                className: 'mx-auto max-w-md',
                onSubmit: a,
                children: [
                  w('input', {
                    name: 'name',
                    type: 'text',
                    placeholder: 'John Doe',
                    value: e.name,
                    onChange: i,
                  }),
                  w('input', {
                    name: 'email',
                    type: 'email',
                    placeholder: 'your@email.com',
                    value: e.email,
                    onChange: i,
                  }),
                  w('input', {
                    name: 'password',
                    type: 'password',
                    placeholder: 'password',
                    value: e.password,
                    onChange: i,
                  }),
                  w('button', {
                    className: 'primary my-2',
                    children: 'Register',
                  }),
                ],
              }),
              $('div', {
                className: 'mb-4 flex w-full items-center gap-4',
                children: [
                  w('div', { className: 'h-0 w-1/2 border-[1px]' }),
                  w('p', { className: 'small -mt-1', children: 'or' }),
                  w('div', { className: 'h-0 w-1/2 border-[1px]' }),
                ],
              }),
              w('div', {
                className: 'flex h-[50px] justify-center',
                children: w(Lg, {
                  onSuccess: (s) => {
                    l(s.credential);
                  },
                  onError: () => {
                    console.log('Login Failed');
                  },
                  text: 'continue_with',
                  width: '350',
                }),
              }),
              $('div', {
                className: 'py-2 text-center text-gray-500',
                children: [
                  'Already a member?',
                  w($t, {
                    className: 'text-black underline',
                    to: '/login',
                    children: 'Login',
                  }),
                ],
              }),
            ],
          }),
        });
  },
  Ji = () => {
    var r;
    const { pathname: e } = Rr();
    let t = (r = e.split('/')) == null ? void 0 : r[2];
    t === void 0 && (t = 'profile');
    const n = (o = null) => {
      let i = 'flex justify-center mx-10 md:mx-0 gap-1 py-2 px-6 rounded-full';
      return (
        o === t ? (i += ' bg-primary text-white') : (i += ' bg-gray-200'), i
      );
    };
    return $('nav', {
      className:
        'mt-24 mb-8 flex w-full flex-col justify-center gap-2 p-8 md:flex-row md:p-0',
      children: [
        $($t, {
          className: n('profile'),
          to: '/account',
          children: [
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
              }),
            }),
            'My Profile',
          ],
        }),
        $($t, {
          className: n('bookings'),
          to: '/account/bookings',
          children: [
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
              }),
            }),
            'My bookings',
          ],
        }),
        $($t, {
          className: n('places'),
          to: '/account/places',
          children: [
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819',
              }),
            }),
            'My accomodations',
          ],
        }),
      ],
    });
  };
function Ag(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Ag(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function s3() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Ag(e)) && (r && (r += ' '), (r += t));
  return r;
}
function u3() {
  for (var e = 0, t, n, r = ''; e < arguments.length; )
    (t = arguments[e++]) && (n = Ig(t)) && (r && (r += ' '), (r += n));
  return r;
}
function Ig(e) {
  if (typeof e == 'string') return e;
  for (var t, n = '', r = 0; r < e.length; r++)
    e[r] && (t = Ig(e[r])) && (n && (n += ' '), (n += t));
  return n;
}
var wf = '-';
function c3(e) {
  var t = f3(e),
    n = e.conflictingClassGroups,
    r = e.conflictingClassGroupModifiers,
    o = r === void 0 ? {} : r;
  function i(l) {
    var s = l.split(wf);
    return s[0] === '' && s.length !== 1 && s.shift(), Fg(s, t) || d3(l);
  }
  function a(l, s) {
    var u = n[l] || [];
    return s && o[l] ? [].concat(u, o[l]) : u;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: a };
}
function Fg(e, t) {
  var a;
  if (e.length === 0) return t.classGroupId;
  var n = e[0],
    r = t.nextPart.get(n),
    o = r ? Fg(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length !== 0) {
    var i = e.join(wf);
    return (a = t.validators.find(function (l) {
      var s = l.validator;
      return s(i);
    })) == null
      ? void 0
      : a.classGroupId;
  }
}
var $m = /^\[(.+)\]$/;
function d3(e) {
  if ($m.test(e)) {
    var t = $m.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(':'));
    if (n) return 'arbitrary..' + n;
  }
}
function f3(e) {
  var t = e.theme,
    n = e.prefix,
    r = { nextPart: new Map(), validators: [] },
    o = m3(Object.entries(e.classGroups), n);
  return (
    o.forEach(function (i) {
      var a = i[0],
        l = i[1];
      Vc(l, r, a, t);
    }),
    r
  );
}
function Vc(e, t, n, r) {
  e.forEach(function (o) {
    if (typeof o == 'string') {
      var i = o === '' ? t : Om(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == 'function') {
      if (p3(o)) {
        Vc(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(function (a) {
      var l = a[0],
        s = a[1];
      Vc(s, Om(t, l), n, r);
    });
  });
}
function Om(e, t) {
  var n = e;
  return (
    t.split(wf).forEach(function (r) {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function p3(e) {
  return e.isThemeGetter;
}
function m3(e, t) {
  return t
    ? e.map(function (n) {
        var r = n[0],
          o = n[1],
          i = o.map(function (a) {
            return typeof a == 'string'
              ? t + a
              : typeof a == 'object'
                ? Object.fromEntries(
                    Object.entries(a).map(function (l) {
                      var s = l[0],
                        u = l[1];
                      return [t + s, u];
                    }),
                  )
                : a;
          });
        return [r, i];
      })
    : e;
}
function h3(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    n = new Map(),
    r = new Map();
  function o(i, a) {
    n.set(i, a), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get: function (a) {
      var l = n.get(a);
      if (l !== void 0) return l;
      if ((l = r.get(a)) !== void 0) return o(a, l), l;
    },
    set: function (a, l) {
      n.has(a) ? n.set(a, l) : o(a, l);
    },
  };
}
var jg = '!';
function v3(e) {
  var t = e.separator || ':',
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (a) {
    for (var l = [], s = 0, u = 0, d, c = 0; c < a.length; c++) {
      var f = a[c];
      if (s === 0) {
        if (f === r && (n || a.slice(c, c + o) === t)) {
          l.push(a.slice(u, c)), (u = c + o);
          continue;
        }
        if (f === '/') {
          d = c;
          continue;
        }
      }
      f === '[' ? s++ : f === ']' && s--;
    }
    var m = l.length === 0 ? a : a.substring(u),
      h = m.startsWith(jg),
      v = h ? m.substring(1) : m,
      x = d && d > u ? d - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: x,
    };
  };
}
function g3(e) {
  if (e.length <= 1) return e;
  var t = [],
    n = [];
  return (
    e.forEach(function (r) {
      var o = r[0] === '[';
      o ? (t.push.apply(t, n.sort().concat([r])), (n = [])) : n.push(r);
    }),
    t.push.apply(t, n.sort()),
    t
  );
}
function y3(e) {
  return { cache: h3(e.cacheSize), splitModifiers: v3(e), ...c3(e) };
}
var w3 = /\s+/;
function x3(e, t) {
  var n = t.splitModifiers,
    r = t.getClassGroupId,
    o = t.getConflictingClassGroupIds,
    i = new Set();
  return e
    .trim()
    .split(w3)
    .map(function (a) {
      var l = n(a),
        s = l.modifiers,
        u = l.hasImportantModifier,
        d = l.baseClassName,
        c = l.maybePostfixModifierPosition,
        f = r(c ? d.substring(0, c) : d),
        m = !!c;
      if (!f) {
        if (!c) return { isTailwindClass: !1, originalClassName: a };
        if (((f = r(d)), !f))
          return { isTailwindClass: !1, originalClassName: a };
        m = !1;
      }
      var h = g3(s).join(':'),
        v = u ? h + jg : h;
      return {
        isTailwindClass: !0,
        modifierId: v,
        classGroupId: f,
        originalClassName: a,
        hasPostfixModifier: m,
      };
    })
    .reverse()
    .filter(function (a) {
      if (!a.isTailwindClass) return !0;
      var l = a.modifierId,
        s = a.classGroupId,
        u = a.hasPostfixModifier,
        d = l + s;
      return i.has(d)
        ? !1
        : (i.add(d),
          o(s, u).forEach(function (c) {
            return i.add(l + c);
          }),
          !0);
    })
    .reverse()
    .map(function (a) {
      return a.originalClassName;
    })
    .join(' ');
}
function b3() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r,
    o,
    i,
    a = l;
  function l(u) {
    var d = t[0],
      c = t.slice(1),
      f = c.reduce(function (m, h) {
        return h(m);
      }, d());
    return (r = y3(f)), (o = r.cache.get), (i = r.cache.set), (a = s), s(u);
  }
  function s(u) {
    var d = o(u);
    if (d) return d;
    var c = x3(u, r);
    return i(u, c), c;
  }
  return function () {
    return a(u3.apply(null, arguments));
  };
}
function be(e) {
  var t = function (r) {
    return r[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var zg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  S3 = /^\d+\/\d+$/,
  C3 = new Set(['px', 'full', 'screen']),
  k3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  E3 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  N3 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function jt(e) {
  return wr(e) || C3.has(e) || S3.test(e) || Yc(e);
}
function Yc(e) {
  return Mr(e, 'length', R3);
}
function _3(e) {
  return Mr(e, 'size', Wg);
}
function P3(e) {
  return Mr(e, 'position', Wg);
}
function $3(e) {
  return Mr(e, 'url', M3);
}
function ka(e) {
  return Mr(e, 'number', wr);
}
function wr(e) {
  return !Number.isNaN(Number(e));
}
function O3(e) {
  return e.endsWith('%') && wr(e.slice(0, -1));
}
function Uo(e) {
  return Tm(e) || Mr(e, 'number', Tm);
}
function ae(e) {
  return zg.test(e);
}
function Ho() {
  return !0;
}
function Mn(e) {
  return k3.test(e);
}
function T3(e) {
  return Mr(e, '', D3);
}
function Mr(e, t, n) {
  var r = zg.exec(e);
  return r ? (r[1] ? r[1] === t : n(r[2])) : !1;
}
function R3(e) {
  return E3.test(e);
}
function Wg() {
  return !1;
}
function M3(e) {
  return e.startsWith('url(');
}
function Tm(e) {
  return Number.isInteger(Number(e));
}
function D3(e) {
  return N3.test(e);
}
function L3() {
  var e = be('colors'),
    t = be('spacing'),
    n = be('blur'),
    r = be('brightness'),
    o = be('borderColor'),
    i = be('borderRadius'),
    a = be('borderSpacing'),
    l = be('borderWidth'),
    s = be('contrast'),
    u = be('grayscale'),
    d = be('hueRotate'),
    c = be('invert'),
    f = be('gap'),
    m = be('gradientColorStops'),
    h = be('gradientColorStopPositions'),
    v = be('inset'),
    x = be('margin'),
    g = be('opacity'),
    y = be('padding'),
    b = be('saturate'),
    S = be('scale'),
    C = be('sepia'),
    N = be('skew'),
    P = be('space'),
    E = be('translate'),
    I = function () {
      return ['auto', 'contain', 'none'];
    },
    L = function () {
      return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
    },
    Y = function () {
      return ['auto', ae, t];
    },
    D = function () {
      return [ae, t];
    },
    K = function () {
      return ['', jt];
    },
    B = function () {
      return ['auto', wr, ae];
    },
    z = function () {
      return [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ];
    },
    V = function () {
      return ['solid', 'dashed', 'dotted', 'double', 'none'];
    },
    T = function () {
      return [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
        'plus-lighter',
      ];
    },
    k = function () {
      return [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
      ];
    },
    W = function () {
      return ['', '0', ae];
    },
    G = function () {
      return [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ];
    },
    ne = function () {
      return [wr, ka];
    },
    F = function () {
      return [wr, ae];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ho],
      spacing: [jt],
      blur: ['none', '', Mn, ae],
      brightness: ne(),
      borderColor: [e],
      borderRadius: ['none', '', 'full', Mn, ae],
      borderSpacing: D(),
      borderWidth: K(),
      contrast: ne(),
      grayscale: W(),
      hueRotate: F(),
      invert: W(),
      gap: D(),
      gradientColorStops: [e],
      gradientColorStopPositions: [O3, Yc],
      inset: Y(),
      margin: Y(),
      opacity: ne(),
      padding: D(),
      saturate: ne(),
      scale: ne(),
      sepia: W(),
      skew: F(),
      space: D(),
      translate: D(),
    },
    classGroups: {
      aspect: [{ aspect: ['auto', 'square', 'video', ae] }],
      container: ['container'],
      columns: [{ columns: [Mn] }],
      'break-after': [{ 'break-after': G() }],
      'break-before': [{ 'break-before': G() }],
      'break-inside': [
        { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
      ],
      'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
      box: [{ box: ['border', 'content'] }],
      display: [
        'block',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'table',
        'inline-table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
        'flow-root',
        'grid',
        'inline-grid',
        'contents',
        'list-item',
        'hidden',
      ],
      float: [{ float: ['right', 'left', 'none'] }],
      clear: [{ clear: ['left', 'right', 'both', 'none'] }],
      isolation: ['isolate', 'isolation-auto'],
      'object-fit': [
        { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
      ],
      'object-position': [{ object: [].concat(z(), [ae]) }],
      overflow: [{ overflow: L() }],
      'overflow-x': [{ 'overflow-x': L() }],
      'overflow-y': [{ 'overflow-y': L() }],
      overscroll: [{ overscroll: I() }],
      'overscroll-x': [{ 'overscroll-x': I() }],
      'overscroll-y': [{ 'overscroll-y': I() }],
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      inset: [{ inset: [v] }],
      'inset-x': [{ 'inset-x': [v] }],
      'inset-y': [{ 'inset-y': [v] }],
      start: [{ start: [v] }],
      end: [{ end: [v] }],
      top: [{ top: [v] }],
      right: [{ right: [v] }],
      bottom: [{ bottom: [v] }],
      left: [{ left: [v] }],
      visibility: ['visible', 'invisible', 'collapse'],
      z: [{ z: ['auto', Uo] }],
      basis: [{ basis: Y() }],
      'flex-direction': [
        { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
      ],
      'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
      flex: [{ flex: ['1', 'auto', 'initial', 'none', ae] }],
      grow: [{ grow: W() }],
      shrink: [{ shrink: W() }],
      order: [{ order: ['first', 'last', 'none', Uo] }],
      'grid-cols': [{ 'grid-cols': [Ho] }],
      'col-start-end': [{ col: ['auto', { span: ['full', Uo] }, ae] }],
      'col-start': [{ 'col-start': B() }],
      'col-end': [{ 'col-end': B() }],
      'grid-rows': [{ 'grid-rows': [Ho] }],
      'row-start-end': [{ row: ['auto', { span: [Uo] }, ae] }],
      'row-start': [{ 'row-start': B() }],
      'row-end': [{ 'row-end': B() }],
      'grid-flow': [
        { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
      ],
      'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', ae] }],
      'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', ae] }],
      gap: [{ gap: [f] }],
      'gap-x': [{ 'gap-x': [f] }],
      'gap-y': [{ 'gap-y': [f] }],
      'justify-content': [{ justify: ['normal'].concat(k()) }],
      'justify-items': [
        { 'justify-items': ['start', 'end', 'center', 'stretch'] },
      ],
      'justify-self': [
        { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
      ],
      'align-content': [{ content: ['normal'].concat(k(), ['baseline']) }],
      'align-items': [
        { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
      ],
      'align-self': [
        { self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] },
      ],
      'place-content': [{ 'place-content': [].concat(k(), ['baseline']) }],
      'place-items': [
        { 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] },
      ],
      'place-self': [
        { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
      ],
      p: [{ p: [y] }],
      px: [{ px: [y] }],
      py: [{ py: [y] }],
      ps: [{ ps: [y] }],
      pe: [{ pe: [y] }],
      pt: [{ pt: [y] }],
      pr: [{ pr: [y] }],
      pb: [{ pb: [y] }],
      pl: [{ pl: [y] }],
      m: [{ m: [x] }],
      mx: [{ mx: [x] }],
      my: [{ my: [x] }],
      ms: [{ ms: [x] }],
      me: [{ me: [x] }],
      mt: [{ mt: [x] }],
      mr: [{ mr: [x] }],
      mb: [{ mb: [x] }],
      ml: [{ ml: [x] }],
      'space-x': [{ 'space-x': [P] }],
      'space-x-reverse': ['space-x-reverse'],
      'space-y': [{ 'space-y': [P] }],
      'space-y-reverse': ['space-y-reverse'],
      w: [{ w: ['auto', 'min', 'max', 'fit', ae, t] }],
      'min-w': [{ 'min-w': ['min', 'max', 'fit', ae, jt] }],
      'max-w': [
        {
          'max-w': [
            '0',
            'none',
            'full',
            'min',
            'max',
            'fit',
            'prose',
            { screen: [Mn] },
            Mn,
            ae,
          ],
        },
      ],
      h: [{ h: [ae, t, 'auto', 'min', 'max', 'fit'] }],
      'min-h': [{ 'min-h': ['min', 'max', 'fit', ae, jt] }],
      'max-h': [{ 'max-h': [ae, t, 'min', 'max', 'fit'] }],
      'font-size': [{ text: ['base', Mn, Yc] }],
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      'font-style': ['italic', 'not-italic'],
      'font-weight': [
        {
          font: [
            'thin',
            'extralight',
            'light',
            'normal',
            'medium',
            'semibold',
            'bold',
            'extrabold',
            'black',
            ka,
          ],
        },
      ],
      'font-family': [{ font: [Ho] }],
      'fvn-normal': ['normal-nums'],
      'fvn-ordinal': ['ordinal'],
      'fvn-slashed-zero': ['slashed-zero'],
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      tracking: [
        {
          tracking: [
            'tighter',
            'tight',
            'normal',
            'wide',
            'wider',
            'widest',
            ae,
          ],
        },
      ],
      'line-clamp': [{ 'line-clamp': ['none', wr, ka] }],
      leading: [
        {
          leading: [
            'none',
            'tight',
            'snug',
            'normal',
            'relaxed',
            'loose',
            ae,
            jt,
          ],
        },
      ],
      'list-image': [{ 'list-image': ['none', ae] }],
      'list-style-type': [{ list: ['none', 'disc', 'decimal', ae] }],
      'list-style-position': [{ list: ['inside', 'outside'] }],
      'placeholder-color': [{ placeholder: [e] }],
      'placeholder-opacity': [{ 'placeholder-opacity': [g] }],
      'text-alignment': [
        { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
      ],
      'text-color': [{ text: [e] }],
      'text-opacity': [{ 'text-opacity': [g] }],
      'text-decoration': [
        'underline',
        'overline',
        'line-through',
        'no-underline',
      ],
      'text-decoration-style': [{ decoration: [].concat(V(), ['wavy']) }],
      'text-decoration-thickness': [{ decoration: ['auto', 'from-font', jt] }],
      'underline-offset': [{ 'underline-offset': ['auto', ae, jt] }],
      'text-decoration-color': [{ decoration: [e] }],
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      indent: [{ indent: D() }],
      'vertical-align': [
        {
          align: [
            'baseline',
            'top',
            'middle',
            'bottom',
            'text-top',
            'text-bottom',
            'sub',
            'super',
            ae,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            'normal',
            'nowrap',
            'pre',
            'pre-line',
            'pre-wrap',
            'break-spaces',
          ],
        },
      ],
      break: [{ break: ['normal', 'words', 'all', 'keep'] }],
      hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
      content: [{ content: ['none', ae] }],
      'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
      'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
      'bg-opacity': [{ 'bg-opacity': [g] }],
      'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
      'bg-position': [{ bg: [].concat(z(), [P3]) }],
      'bg-repeat': [
        { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] },
      ],
      'bg-size': [{ bg: ['auto', 'cover', 'contain', _3] }],
      'bg-image': [
        {
          bg: [
            'none',
            { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
            $3,
          ],
        },
      ],
      'bg-color': [{ bg: [e] }],
      'gradient-from-pos': [{ from: [h] }],
      'gradient-via-pos': [{ via: [h] }],
      'gradient-to-pos': [{ to: [h] }],
      'gradient-from': [{ from: [m] }],
      'gradient-via': [{ via: [m] }],
      'gradient-to': [{ to: [m] }],
      rounded: [{ rounded: [i] }],
      'rounded-s': [{ 'rounded-s': [i] }],
      'rounded-e': [{ 'rounded-e': [i] }],
      'rounded-t': [{ 'rounded-t': [i] }],
      'rounded-r': [{ 'rounded-r': [i] }],
      'rounded-b': [{ 'rounded-b': [i] }],
      'rounded-l': [{ 'rounded-l': [i] }],
      'rounded-ss': [{ 'rounded-ss': [i] }],
      'rounded-se': [{ 'rounded-se': [i] }],
      'rounded-ee': [{ 'rounded-ee': [i] }],
      'rounded-es': [{ 'rounded-es': [i] }],
      'rounded-tl': [{ 'rounded-tl': [i] }],
      'rounded-tr': [{ 'rounded-tr': [i] }],
      'rounded-br': [{ 'rounded-br': [i] }],
      'rounded-bl': [{ 'rounded-bl': [i] }],
      'border-w': [{ border: [l] }],
      'border-w-x': [{ 'border-x': [l] }],
      'border-w-y': [{ 'border-y': [l] }],
      'border-w-s': [{ 'border-s': [l] }],
      'border-w-e': [{ 'border-e': [l] }],
      'border-w-t': [{ 'border-t': [l] }],
      'border-w-r': [{ 'border-r': [l] }],
      'border-w-b': [{ 'border-b': [l] }],
      'border-w-l': [{ 'border-l': [l] }],
      'border-opacity': [{ 'border-opacity': [g] }],
      'border-style': [{ border: [].concat(V(), ['hidden']) }],
      'divide-x': [{ 'divide-x': [l] }],
      'divide-x-reverse': ['divide-x-reverse'],
      'divide-y': [{ 'divide-y': [l] }],
      'divide-y-reverse': ['divide-y-reverse'],
      'divide-opacity': [{ 'divide-opacity': [g] }],
      'divide-style': [{ divide: V() }],
      'border-color': [{ border: [o] }],
      'border-color-x': [{ 'border-x': [o] }],
      'border-color-y': [{ 'border-y': [o] }],
      'border-color-t': [{ 'border-t': [o] }],
      'border-color-r': [{ 'border-r': [o] }],
      'border-color-b': [{ 'border-b': [o] }],
      'border-color-l': [{ 'border-l': [o] }],
      'divide-color': [{ divide: [o] }],
      'outline-style': [{ outline: [''].concat(V()) }],
      'outline-offset': [{ 'outline-offset': [ae, jt] }],
      'outline-w': [{ outline: [jt] }],
      'outline-color': [{ outline: [e] }],
      'ring-w': [{ ring: K() }],
      'ring-w-inset': ['ring-inset'],
      'ring-color': [{ ring: [e] }],
      'ring-opacity': [{ 'ring-opacity': [g] }],
      'ring-offset-w': [{ 'ring-offset': [jt] }],
      'ring-offset-color': [{ 'ring-offset': [e] }],
      shadow: [{ shadow: ['', 'inner', 'none', Mn, T3] }],
      'shadow-color': [{ shadow: [Ho] }],
      opacity: [{ opacity: [g] }],
      'mix-blend': [{ 'mix-blend': T() }],
      'bg-blend': [{ 'bg-blend': T() }],
      filter: [{ filter: ['', 'none'] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [s] }],
      'drop-shadow': [{ 'drop-shadow': ['', 'none', Mn, ae] }],
      grayscale: [{ grayscale: [u] }],
      'hue-rotate': [{ 'hue-rotate': [d] }],
      invert: [{ invert: [c] }],
      saturate: [{ saturate: [b] }],
      sepia: [{ sepia: [C] }],
      'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
      'backdrop-blur': [{ 'backdrop-blur': [n] }],
      'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
      'backdrop-contrast': [{ 'backdrop-contrast': [s] }],
      'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
      'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [d] }],
      'backdrop-invert': [{ 'backdrop-invert': [c] }],
      'backdrop-opacity': [{ 'backdrop-opacity': [g] }],
      'backdrop-saturate': [{ 'backdrop-saturate': [b] }],
      'backdrop-sepia': [{ 'backdrop-sepia': [C] }],
      'border-collapse': [{ border: ['collapse', 'separate'] }],
      'border-spacing': [{ 'border-spacing': [a] }],
      'border-spacing-x': [{ 'border-spacing-x': [a] }],
      'border-spacing-y': [{ 'border-spacing-y': [a] }],
      'table-layout': [{ table: ['auto', 'fixed'] }],
      caption: [{ caption: ['top', 'bottom'] }],
      transition: [
        {
          transition: [
            'none',
            'all',
            '',
            'colors',
            'opacity',
            'shadow',
            'transform',
            ae,
          ],
        },
      ],
      duration: [{ duration: F() }],
      ease: [{ ease: ['linear', 'in', 'out', 'in-out', ae] }],
      delay: [{ delay: F() }],
      animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', ae] }],
      transform: [{ transform: ['', 'gpu', 'none'] }],
      scale: [{ scale: [S] }],
      'scale-x': [{ 'scale-x': [S] }],
      'scale-y': [{ 'scale-y': [S] }],
      rotate: [{ rotate: [Uo, ae] }],
      'translate-x': [{ 'translate-x': [E] }],
      'translate-y': [{ 'translate-y': [E] }],
      'skew-x': [{ 'skew-x': [N] }],
      'skew-y': [{ 'skew-y': [N] }],
      'transform-origin': [
        {
          origin: [
            'center',
            'top',
            'top-right',
            'right',
            'bottom-right',
            'bottom',
            'bottom-left',
            'left',
            'top-left',
            ae,
          ],
        },
      ],
      accent: [{ accent: ['auto', e] }],
      appearance: ['appearance-none'],
      cursor: [
        {
          cursor: [
            'auto',
            'default',
            'pointer',
            'wait',
            'text',
            'move',
            'help',
            'not-allowed',
            'none',
            'context-menu',
            'progress',
            'cell',
            'crosshair',
            'vertical-text',
            'alias',
            'copy',
            'no-drop',
            'grab',
            'grabbing',
            'all-scroll',
            'col-resize',
            'row-resize',
            'n-resize',
            'e-resize',
            's-resize',
            'w-resize',
            'ne-resize',
            'nw-resize',
            'se-resize',
            'sw-resize',
            'ew-resize',
            'ns-resize',
            'nesw-resize',
            'nwse-resize',
            'zoom-in',
            'zoom-out',
            ae,
          ],
        },
      ],
      'caret-color': [{ caret: [e] }],
      'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
      resize: [{ resize: ['none', 'y', 'x', ''] }],
      'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
      'scroll-m': [{ 'scroll-m': D() }],
      'scroll-mx': [{ 'scroll-mx': D() }],
      'scroll-my': [{ 'scroll-my': D() }],
      'scroll-ms': [{ 'scroll-ms': D() }],
      'scroll-me': [{ 'scroll-me': D() }],
      'scroll-mt': [{ 'scroll-mt': D() }],
      'scroll-mr': [{ 'scroll-mr': D() }],
      'scroll-mb': [{ 'scroll-mb': D() }],
      'scroll-ml': [{ 'scroll-ml': D() }],
      'scroll-p': [{ 'scroll-p': D() }],
      'scroll-px': [{ 'scroll-px': D() }],
      'scroll-py': [{ 'scroll-py': D() }],
      'scroll-ps': [{ 'scroll-ps': D() }],
      'scroll-pe': [{ 'scroll-pe': D() }],
      'scroll-pt': [{ 'scroll-pt': D() }],
      'scroll-pr': [{ 'scroll-pr': D() }],
      'scroll-pb': [{ 'scroll-pb': D() }],
      'scroll-pl': [{ 'scroll-pl': D() }],
      'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
      'snap-stop': [{ snap: ['normal', 'always'] }],
      'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
      'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
      touch: [
        {
          touch: [
            'auto',
            'none',
            'pinch-zoom',
            'manipulation',
            { pan: ['x', 'left', 'right', 'y', 'up', 'down'] },
          ],
        },
      ],
      select: [{ select: ['none', 'text', 'all', 'auto'] }],
      'will-change': [
        { 'will-change': ['auto', 'scroll', 'contents', 'transform', ae] },
      ],
      fill: [{ fill: [e, 'none'] }],
      'stroke-w': [{ stroke: [jt, ka] }],
      stroke: [{ stroke: [e, 'none'] }],
      sr: ['sr-only', 'not-sr-only'],
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: [
        'inset-x',
        'inset-y',
        'start',
        'end',
        'top',
        'right',
        'bottom',
        'left',
      ],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': [
        'fvn-ordinal',
        'fvn-slashed-zero',
        'fvn-figure',
        'fvn-spacing',
        'fvn-fraction',
      ],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      rounded: [
        'rounded-s',
        'rounded-e',
        'rounded-t',
        'rounded-r',
        'rounded-b',
        'rounded-l',
        'rounded-ss',
        'rounded-se',
        'rounded-ee',
        'rounded-es',
        'rounded-tl',
        'rounded-tr',
        'rounded-br',
        'rounded-bl',
      ],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': [
        'border-w-s',
        'border-w-e',
        'border-w-t',
        'border-w-r',
        'border-w-b',
        'border-w-l',
      ],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': [
        'border-color-t',
        'border-color-r',
        'border-color-b',
        'border-color-l',
      ],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': [
        'scroll-mx',
        'scroll-my',
        'scroll-ms',
        'scroll-me',
        'scroll-mt',
        'scroll-mr',
        'scroll-mb',
        'scroll-ml',
      ],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': [
        'scroll-px',
        'scroll-py',
        'scroll-ps',
        'scroll-pe',
        'scroll-pt',
        'scroll-pr',
        'scroll-pb',
        'scroll-pl',
      ],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
    },
    conflictingClassGroupModifiers: { 'font-size': ['leading'] },
  };
}
var A3 = b3(L3);
function Ue(...e) {
  return A3(s3(e));
}
const Rl = p.forwardRef(({ className: e, ...t }, n) =>
  w(pg, {
    ref: n,
    className: Ue(
      'relative flex h-full w-full shrink-0 overflow-hidden rounded-full',
      e,
    ),
    ...t,
  }),
);
Rl.displayName = pg.displayName;
const Ri = p.forwardRef(({ className: e, ...t }, n) =>
  w(mg, { ref: n, className: Ue('aspect-square h-full w-full', e), ...t }),
);
Ri.displayName = mg.displayName;
const Bg = p.forwardRef(({ className: e, ...t }, n) =>
  w(hg, {
    ref: n,
    className: Ue(
      'flex h-full w-full text-9xl items-center justify-center rounded-full bg-muted',
      e,
    ),
    ...t,
  }),
);
Bg.displayName = hg.displayName;
function Ug(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ug(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function I3() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Ug(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Rm = (e) => (typeof e == 'boolean' ? ''.concat(e) : e === 0 ? '0' : e),
  Mm = I3,
  Hg = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Mm(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: i } = t,
      a = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          c = i == null ? void 0 : i[u];
        if (d === null) return null;
        const f = Rm(d) || Rm(c);
        return o[u][f];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [c, f] = d;
          return f === void 0 || (u[c] = f), u;
        }, {}),
      s =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: c, className: f, ...m } = d;
              return Object.entries(m).every((h) => {
                let [v, x] = h;
                return Array.isArray(x)
                  ? x.includes({ ...i, ...l }[v])
                  : { ...i, ...l }[v] === x;
              })
                ? [...u, c, f]
                : u;
            }, []);
    return Mm(
      e,
      a,
      s,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  Gc = Hg(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline:
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-10 px-4 py-2',
          sm: 'h-9 rounded-md px-3',
          lg: 'h-11 rounded-md px-8',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    },
  ),
  Mi = p.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) =>
      w(r ? Ki : 'button', {
        className: Ue(Gc({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      }),
  );
Mi.displayName = 'Button';
const Vg = ({ place: e, index: t = 0, className: n = null }) => {
    var r;
    return (r = e.photos) != null && r.length
      ? (n || (n = 'object-cover'),
        w('img', { src: e.photos[t], alt: '', className: n }))
      : '';
  },
  F3 = ({ place: e }) =>
    $(
      $t,
      {
        to: `/account/places/${e._id}`,
        className:
          'my-3 flex cursor-pointer flex-col gap-4 rounded-2xl bg-gray-100 p-4 transition-all hover:bg-gray-300 md:flex-row',
        children: [
          w('div', {
            className: 'flex w-full shrink-0 bg-gray-300 sm:h-32 sm:w-32 ',
            children: w(Vg, { place: e }),
          }),
          $('div', {
            className: '',
            children: [
              w('h2', { className: 'text-lg md:text-xl', children: e.title }),
              w('p', {
                className: 'line-clamp-3 mt-2 text-sm',
                children: e.description,
              }),
            ],
          }),
        ],
      },
      e._id,
    ),
  Yg = () => {
    const [e, t] = p.useState([]),
      [n, r] = p.useState(!0);
    return (
      p.useEffect(() => {
        (async () => {
          try {
            const { data: i } = await je.get('places/user-places');
            t(i), r(!1);
          } catch (i) {
            console.log(i);
          }
        })();
      }, []),
      n
        ? w(Po, {})
        : $('div', {
            children: [
              w(Ji, {}),
              w('div', {
                className: 'text-center ',
                children: $($t, {
                  className:
                    'inline-flex gap-1 rounded-full bg-primary py-2 px-6 text-white',
                  to: '/account/places/new',
                  children: [
                    w('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      fill: 'none',
                      viewBox: '0 0 24 24',
                      strokeWidth: 1.5,
                      stroke: 'currentColor',
                      className: 'h-6 w-6',
                      children: w('path', {
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        d: 'M12 4.5v15m7.5-7.5h-15',
                      }),
                    }),
                    'Add new place',
                  ],
                }),
              }),
              w('div', {
                className: 'mx-4 mt-4',
                children:
                  e.length > 0 && e.map((o) => w(F3, { place: o }, o._id)),
              }),
            ],
          })
    );
  };
var j3 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
const z3 = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  cn = (e, t) => {
    const n = p.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: a,
          children: l,
          ...s
        },
        u,
      ) =>
        p.createElement(
          'svg',
          {
            ref: u,
            ...j3,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: a ? (Number(i) * 24) / Number(o) : i,
            className: `lucide lucide-${z3(e)}`,
            ...s,
          },
          [
            ...t.map(([d, c]) => p.createElement(d, c)),
            ...((Array.isArray(l) ? l : [l]) || []),
          ],
        ),
    );
    return (n.displayName = `${e}`), n;
  },
  W3 = cn('Calendar', [
    [
      'rect',
      {
        width: '18',
        height: '18',
        x: '3',
        y: '4',
        rx: '2',
        ry: '2',
        key: 'eu3xkr',
      },
    ],
    ['line', { x1: '16', x2: '16', y1: '2', y2: '6', key: 'm3sa8f' }],
    ['line', { x1: '8', x2: '8', y1: '2', y2: '6', key: '18kwsl' }],
    ['line', { x1: '3', x2: '21', y1: '10', y2: '10', key: 'xt86sb' }],
  ]),
  B3 = cn('ChevronLeft', [['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }]]),
  U3 = cn('ChevronRight', [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]]),
  H3 = cn('Loader2', [
    ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
  ]),
  V3 = cn('LogOut', [
    ['path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', key: '1uf3rs' }],
    ['polyline', { points: '16 17 21 12 16 7', key: '1gabdz' }],
    ['line', { x1: '21', x2: '9', y1: '12', y2: '12', key: '1uyos4' }],
  ]),
  Y3 = cn('Mail', [
    [
      'rect',
      { width: '20', height: '16', x: '2', y: '4', rx: '2', key: '18n3k1' },
    ],
    ['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', key: '1ocrg3' }],
  ]),
  G3 = cn('PenSquare', [
    [
      'path',
      {
        d: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7',
        key: '1qinfi',
      },
    ],
    [
      'path',
      { d: 'M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z', key: 'w2jsv5' },
    ],
  ]),
  Q3 = cn('Text', [
    ['path', { d: 'M17 6.1H3', key: 'wptmhv' }],
    ['path', { d: 'M21 12.1H3', key: '1j38uz' }],
    ['path', { d: 'M15.1 18H3', key: '1nb16a' }],
  ]),
  K3 = cn('Upload', [
    ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
    ['polyline', { points: '17 8 12 3 7 8', key: 't8dd8p' }],
    ['line', { x1: '12', x2: '12', y1: '3', y2: '15', key: 'widbto' }],
  ]),
  X3 = cn('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]);
function Tt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
const q3 = Sh['useId'.toString()] || (() => {});
let J3 = 0;
function Qa(e) {
  const [t, n] = p.useState(q3());
  return (
    nr(() => {
      e || n((r) => r ?? String(J3++));
    }, [e]),
    e || (t ? `radix-${t}` : '')
  );
}
function Gg({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Z3({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    a = i ? e : r,
    l = kn(n),
    s = p.useCallback(
      (u) => {
        if (i) {
          const c = typeof u == 'function' ? u(e) : u;
          c !== e && l(c);
        } else o(u);
      },
      [i, e, o, l],
    );
  return [a, s];
}
function Z3({ defaultProp: e, onChange: t }) {
  const n = p.useState(e),
    [r] = n,
    o = p.useRef(r),
    i = kn(t);
  return (
    p.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
function eS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = kn(e);
  p.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o);
    };
    return (
      t.addEventListener('keydown', r),
      () => t.removeEventListener('keydown', r)
    );
  }, [n, t]);
}
const Qc = 'dismissableLayer.update',
  tS = 'dismissableLayer.pointerDownOutside',
  nS = 'dismissableLayer.focusOutside';
let Dm;
const rS = p.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Qg = p.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: a,
        onInteractOutside: l,
        onDismiss: s,
        ...u
      } = e,
      d = p.useContext(rS),
      [c, f] = p.useState(null),
      m =
        (n = c == null ? void 0 : c.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
            ? void 0
            : globalThis.document,
      [, h] = p.useState({}),
      v = un(t, (E) => f(E)),
      x = Array.from(d.layers),
      [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = x.indexOf(g),
      b = c ? x.indexOf(c) : -1,
      S = d.layersWithOutsidePointerEventsDisabled.size > 0,
      C = b >= y,
      N = oS((E) => {
        const I = E.target,
          L = [...d.branches].some((Y) => Y.contains(I));
        !C ||
          L ||
          (i == null || i(E),
          l == null || l(E),
          E.defaultPrevented || s == null || s());
      }, m),
      P = iS((E) => {
        const I = E.target;
        [...d.branches].some((Y) => Y.contains(I)) ||
          (a == null || a(E),
          l == null || l(E),
          E.defaultPrevented || s == null || s());
      }, m);
    return (
      eS((E) => {
        b === d.layers.size - 1 &&
          (o == null || o(E),
          !E.defaultPrevented && s && (E.preventDefault(), s()));
      }, m),
      p.useEffect(() => {
        if (c)
          return (
            r &&
              (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Dm = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = 'none')),
              d.layersWithOutsidePointerEventsDisabled.add(c)),
            d.layers.add(c),
            Lm(),
            () => {
              r &&
                d.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = Dm);
            }
          );
      }, [c, m, r, d]),
      p.useEffect(
        () => () => {
          c &&
            (d.layers.delete(c),
            d.layersWithOutsidePointerEventsDisabled.delete(c),
            Lm());
        },
        [c, d],
      ),
      p.useEffect(() => {
        const E = () => h({});
        return (
          document.addEventListener(Qc, E),
          () => document.removeEventListener(Qc, E)
        );
      }, []),
      p.createElement(
        it.div,
        fe({}, u, {
          ref: v,
          style: {
            pointerEvents: S ? (C ? 'auto' : 'none') : void 0,
            ...e.style,
          },
          onFocusCapture: Tt(e.onFocusCapture, P.onFocusCapture),
          onBlurCapture: Tt(e.onBlurCapture, P.onBlurCapture),
          onPointerDownCapture: Tt(
            e.onPointerDownCapture,
            N.onPointerDownCapture,
          ),
        }),
      )
    );
  });
function oS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = kn(e),
    r = p.useRef(!1),
    o = p.useRef(() => {});
  return (
    p.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let d = function () {
              Kg(tS, n, u, { discrete: !0 });
            };
            var s = d;
            const u = { originalEvent: l };
            l.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = d),
                t.addEventListener('click', o.current, { once: !0 }))
              : d();
          } else t.removeEventListener('click', o.current);
          r.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener('pointerdown', i);
        }, 0);
      return () => {
        window.clearTimeout(a),
          t.removeEventListener('pointerdown', i),
          t.removeEventListener('click', o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function iS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = kn(e),
    r = p.useRef(!1);
  return (
    p.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Kg(nS, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener('focusin', o),
        () => t.removeEventListener('focusin', o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Lm() {
  const e = new CustomEvent(Qc);
  document.dispatchEvent(e);
}
function Kg(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Lb(o, i) : o.dispatchEvent(i);
}
const xu = 'focusScope.autoFocusOnMount',
  bu = 'focusScope.autoFocusOnUnmount',
  Am = { bubbles: !1, cancelable: !0 },
  Xg = p.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...a
      } = e,
      [l, s] = p.useState(null),
      u = kn(o),
      d = kn(i),
      c = p.useRef(null),
      f = un(t, (v) => s(v)),
      m = p.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    p.useEffect(() => {
      if (r) {
        let y = function (N) {
            if (m.paused || !l) return;
            const P = N.target;
            l.contains(P) ? (c.current = P) : Ln(c.current, { select: !0 });
          },
          b = function (N) {
            if (m.paused || !l) return;
            const P = N.relatedTarget;
            P !== null && (l.contains(P) || Ln(c.current, { select: !0 }));
          },
          S = function (N) {
            if (document.activeElement === document.body)
              for (const E of N) E.removedNodes.length > 0 && Ln(l);
          };
        var v = y,
          x = b,
          g = S;
        document.addEventListener('focusin', y),
          document.addEventListener('focusout', b);
        const C = new MutationObserver(S);
        return (
          l && C.observe(l, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', y),
              document.removeEventListener('focusout', b),
              C.disconnect();
          }
        );
      }
    }, [r, l, m.paused]),
      p.useEffect(() => {
        if (l) {
          Fm.add(m);
          const v = document.activeElement;
          if (!l.contains(v)) {
            const g = new CustomEvent(xu, Am);
            l.addEventListener(xu, u),
              l.dispatchEvent(g),
              g.defaultPrevented ||
                (aS(dS(qg(l)), { select: !0 }),
                document.activeElement === v && Ln(l));
          }
          return () => {
            l.removeEventListener(xu, u),
              setTimeout(() => {
                const g = new CustomEvent(bu, Am);
                l.addEventListener(bu, d),
                  l.dispatchEvent(g),
                  g.defaultPrevented || Ln(v ?? document.body, { select: !0 }),
                  l.removeEventListener(bu, d),
                  Fm.remove(m);
              }, 0);
          };
        }
      }, [l, u, d, m]);
    const h = p.useCallback(
      (v) => {
        if ((!n && !r) || m.paused) return;
        const x = v.key === 'Tab' && !v.altKey && !v.ctrlKey && !v.metaKey,
          g = document.activeElement;
        if (x && g) {
          const y = v.currentTarget,
            [b, S] = lS(y);
          b && S
            ? !v.shiftKey && g === S
              ? (v.preventDefault(), n && Ln(b, { select: !0 }))
              : v.shiftKey &&
                g === b &&
                (v.preventDefault(), n && Ln(S, { select: !0 }))
            : g === y && v.preventDefault();
        }
      },
      [n, r, m.paused],
    );
    return p.createElement(
      it.div,
      fe({ tabIndex: -1 }, a, { ref: f, onKeyDown: h }),
    );
  });
function aS(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Ln(r, { select: t }), document.activeElement !== n)) return;
}
function lS(e) {
  const t = qg(e),
    n = Im(t, e),
    r = Im(t.reverse(), e);
  return [n, r];
}
function qg(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Im(e, t) {
  for (const n of e) if (!sS(n, { upTo: t })) return n;
}
function sS(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === 'none') return !0;
    e = e.parentElement;
  }
  return !1;
}
function uS(e) {
  return e instanceof HTMLInputElement && 'select' in e;
}
function Ln(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && uS(e) && t && e.select();
  }
}
const Fm = cS();
function cS() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = jm(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = jm(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function jm(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function dS(e) {
  return e.filter((t) => t.tagName !== 'A');
}
const Jg = p.forwardRef((e, t) => {
  var n;
  const {
    container: r = globalThis == null ||
    (n = globalThis.document) === null ||
    n === void 0
      ? void 0
      : n.body,
    ...o
  } = e;
  return r
    ? U2.createPortal(p.createElement(it.div, fe({}, o, { ref: t })), r)
    : null;
});
function fS(e, t) {
  return p.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const $o = (e) => {
  const { present: t, children: n } = e,
    r = pS(t),
    o =
      typeof n == 'function' ? n({ present: r.isPresent }) : p.Children.only(n),
    i = un(r.ref, o.ref);
  return typeof n == 'function' || r.isPresent
    ? p.cloneElement(o, { ref: i })
    : null;
};
$o.displayName = 'Presence';
function pS(e) {
  const [t, n] = p.useState(),
    r = p.useRef({}),
    o = p.useRef(e),
    i = p.useRef('none'),
    a = e ? 'mounted' : 'unmounted',
    [l, s] = fS(a, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    p.useEffect(() => {
      const u = Ea(r.current);
      i.current = l === 'mounted' ? u : 'none';
    }, [l]),
    nr(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const f = i.current,
          m = Ea(u);
        e
          ? s('MOUNT')
          : m === 'none' || (u == null ? void 0 : u.display) === 'none'
            ? s('UNMOUNT')
            : s(d && f !== m ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e);
      }
    }, [e, s]),
    nr(() => {
      if (t) {
        const u = (c) => {
            const m = Ea(r.current).includes(c.animationName);
            c.target === t && m && Yi.flushSync(() => s('ANIMATION_END'));
          },
          d = (c) => {
            c.target === t && (i.current = Ea(r.current));
          };
        return (
          t.addEventListener('animationstart', d),
          t.addEventListener('animationcancel', u),
          t.addEventListener('animationend', u),
          () => {
            t.removeEventListener('animationstart', d),
              t.removeEventListener('animationcancel', u),
              t.removeEventListener('animationend', u);
          }
        );
      } else s('ANIMATION_END');
    }, [t, s]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(l),
      ref: p.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Ea(e) {
  return (e == null ? void 0 : e.animationName) || 'none';
}
let Su = 0;
function Zg() {
  p.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        (e = n[0]) !== null && e !== void 0 ? e : zm(),
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        (t = n[1]) !== null && t !== void 0 ? t : zm(),
      ),
      Su++,
      () => {
        Su === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((r) => r.remove()),
          Su--;
      }
    );
  }, []);
}
function zm() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.cssText =
      'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    e
  );
}
var en = function () {
  return (
    (en =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    en.apply(this, arguments)
  );
};
function e1(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function mS(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ka = 'right-scroll-bar-position',
  Xa = 'width-before-scroll-bar',
  hS = 'with-scroll-bars-hidden',
  vS = '--removed-body-scroll-bar-size';
function Cu(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function gS(e, t) {
  var n = p.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Wm = new WeakMap();
function yS(e, t) {
  var n = gS(t || null, function (r) {
    return e.forEach(function (o) {
      return Cu(o, r);
    });
  });
  return (
    p.useLayoutEffect(
      function () {
        var r = Wm.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            a = n.current;
          o.forEach(function (l) {
            i.has(l) || Cu(l, null);
          }),
            i.forEach(function (l) {
              o.has(l) || Cu(l, a);
            });
        }
        Wm.set(n, e);
      },
      [e],
    ),
    n
  );
}
function wS(e) {
  return e;
}
function xS(e, t) {
  t === void 0 && (t = wS);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var a = t(i, r);
        return (
          n.push(a),
          function () {
            n = n.filter(function (l) {
              return l !== a;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var a = n;
          (n = []), a.forEach(i);
        }
        n = {
          push: function (l) {
            return i(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var a = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(i), (a = n);
        }
        var s = function () {
            var d = a;
            (a = []), d.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(s);
          };
        u(),
          (n = {
            push: function (d) {
              a.push(d), u();
            },
            filter: function (d) {
              return (a = a.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function bS(e) {
  e === void 0 && (e = {});
  var t = xS(null);
  return (t.options = en({ async: !0, ssr: !1 }, e)), t;
}
var t1 = function (e) {
  var t = e.sideCar,
    n = e1(e, ['sideCar']);
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    );
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return p.createElement(r, en({}, n));
};
t1.isSideCarExport = !0;
function SS(e, t) {
  return e.useMedium(t), t1;
}
var n1 = bS(),
  ku = function () {},
  Rs = p.forwardRef(function (e, t) {
    var n = p.useRef(null),
      r = p.useState({
        onScrollCapture: ku,
        onWheelCapture: ku,
        onTouchMoveCapture: ku,
      }),
      o = r[0],
      i = r[1],
      a = e.forwardProps,
      l = e.children,
      s = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      c = e.shards,
      f = e.sideCar,
      m = e.noIsolation,
      h = e.inert,
      v = e.allowPinchZoom,
      x = e.as,
      g = x === void 0 ? 'div' : x,
      y = e1(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
      ]),
      b = f,
      S = yS([n, t]),
      C = en(en({}, y), o);
    return p.createElement(
      p.Fragment,
      null,
      d &&
        p.createElement(b, {
          sideCar: n1,
          removeScrollBar: u,
          shards: c,
          noIsolation: m,
          inert: h,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: n,
        }),
      a
        ? p.cloneElement(p.Children.only(l), en(en({}, C), { ref: S }))
        : p.createElement(g, en({}, C, { className: s, ref: S }), l),
    );
  });
Rs.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Rs.classNames = { fullWidth: Xa, zeroRight: Ka };
var Bm,
  CS = function () {
    if (Bm) return Bm;
    if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
  };
function kS() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = CS();
  return t && e.setAttribute('nonce', t), e;
}
function ES(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function NS(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var _S = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = kS()) && (ES(t, n), NS(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  PS = function () {
    var e = _S();
    return function (t, n) {
      p.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  r1 = function () {
    var e = PS(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  $S = { left: 0, top: 0, right: 0, gap: 0 },
  Eu = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  OS = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Eu(n), Eu(r), Eu(o)];
  },
  TS = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return $S;
    var t = OS(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  RS = r1(),
  MS = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      a = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          hS,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(l, 'px ')
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(l, 'px ')
                .concat(
                  r,
                  `;
    `,
                ),
            n === 'padding' &&
              'padding-right: '.concat(l, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          Ka,
          ` {
    right: `,
        )
        .concat(l, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          Xa,
          ` {
    margin-right: `,
        )
        .concat(l, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Ka, ' .')
        .concat(
          Ka,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Xa, ' .')
        .concat(
          Xa,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body {
    `,
        )
        .concat(vS, ': ')
        .concat(
          l,
          `px;
  }
`,
        )
    );
  },
  DS = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r,
      i = p.useMemo(
        function () {
          return TS(o);
        },
        [o],
      );
    return p.createElement(RS, { styles: MS(i, !t, o, n ? '' : '!important') });
  },
  Kc = !1;
if (typeof window < 'u')
  try {
    var Na = Object.defineProperty({}, 'passive', {
      get: function () {
        return (Kc = !0), !0;
      },
    });
    window.addEventListener('test', Na, Na),
      window.removeEventListener('test', Na, Na);
  } catch {
    Kc = !1;
  }
var Ar = Kc ? { passive: !1 } : !1,
  LS = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  o1 = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !LS(e) && n[t] === 'visible')
    );
  },
  AS = function (e) {
    return o1(e, 'overflowY');
  },
  IS = function (e) {
    return o1(e, 'overflowX');
  },
  Um = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host);
      var r = i1(e, n);
      if (r) {
        var o = a1(e, n),
          i = o[1],
          a = o[2];
        if (i > a) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  FS = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  jS = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  i1 = function (e, t) {
    return e === 'v' ? AS(t) : IS(t);
  },
  a1 = function (e, t) {
    return e === 'v' ? FS(t) : jS(t);
  },
  zS = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  WS = function (e, t, n, r, o) {
    var i = zS(e, window.getComputedStyle(t).direction),
      a = i * r,
      l = n.target,
      s = t.contains(l),
      u = !1,
      d = a > 0,
      c = 0,
      f = 0;
    do {
      var m = a1(e, l),
        h = m[0],
        v = m[1],
        x = m[2],
        g = v - x - i * h;
      (h || g) && i1(e, l) && ((c += g), (f += h)), (l = l.parentNode);
    } while ((!s && l !== document.body) || (s && (t.contains(l) || t === l)));
    return (
      ((d && ((o && c === 0) || (!o && a > c))) ||
        (!d && ((o && f === 0) || (!o && -a > f)))) &&
        (u = !0),
      u
    );
  },
  _a = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Hm = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Vm = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  BS = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  US = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  HS = 0,
  Ir = [];
function VS(e) {
  var t = p.useRef([]),
    n = p.useRef([0, 0]),
    r = p.useRef(),
    o = p.useState(HS++)[0],
    i = p.useState(function () {
      return r1();
    })[0],
    a = p.useRef(e);
  p.useEffect(
    function () {
      a.current = e;
    },
    [e],
  ),
    p.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var v = mS([e.lockRef.current], (e.shards || []).map(Vm), !0).filter(
            Boolean,
          );
          return (
            v.forEach(function (x) {
              return x.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                v.forEach(function (x) {
                  return x.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var l = p.useCallback(function (v, x) {
      if ('touches' in v && v.touches.length === 2)
        return !a.current.allowPinchZoom;
      var g = _a(v),
        y = n.current,
        b = 'deltaX' in v ? v.deltaX : y[0] - g[0],
        S = 'deltaY' in v ? v.deltaY : y[1] - g[1],
        C,
        N = v.target,
        P = Math.abs(b) > Math.abs(S) ? 'h' : 'v';
      if ('touches' in v && P === 'h' && N.type === 'range') return !1;
      var E = Um(P, N);
      if (!E) return !0;
      if ((E ? (C = P) : ((C = P === 'v' ? 'h' : 'v'), (E = Um(P, N))), !E))
        return !1;
      if (
        (!r.current && 'changedTouches' in v && (b || S) && (r.current = C), !C)
      )
        return !0;
      var I = r.current || C;
      return WS(I, x, v, I === 'h' ? b : S, !0);
    }, []),
    s = p.useCallback(function (v) {
      var x = v;
      if (!(!Ir.length || Ir[Ir.length - 1] !== i)) {
        var g = 'deltaY' in x ? Hm(x) : _a(x),
          y = t.current.filter(function (C) {
            return C.name === x.type && C.target === x.target && BS(C.delta, g);
          })[0];
        if (y && y.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!y) {
          var b = (a.current.shards || [])
              .map(Vm)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(x.target);
              }),
            S = b.length > 0 ? l(x, b[0]) : !a.current.noIsolation;
          S && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = p.useCallback(function (v, x, g, y) {
      var b = { name: v, delta: x, target: g, should: y };
      t.current.push(b),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== b;
          });
        }, 1);
    }, []),
    d = p.useCallback(function (v) {
      (n.current = _a(v)), (r.current = void 0);
    }, []),
    c = p.useCallback(function (v) {
      u(v.type, Hm(v), v.target, l(v, e.lockRef.current));
    }, []),
    f = p.useCallback(function (v) {
      u(v.type, _a(v), v.target, l(v, e.lockRef.current));
    }, []);
  p.useEffect(function () {
    return (
      Ir.push(i),
      e.setCallbacks({
        onScrollCapture: c,
        onWheelCapture: c,
        onTouchMoveCapture: f,
      }),
      document.addEventListener('wheel', s, Ar),
      document.addEventListener('touchmove', s, Ar),
      document.addEventListener('touchstart', d, Ar),
      function () {
        (Ir = Ir.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener('wheel', s, Ar),
          document.removeEventListener('touchmove', s, Ar),
          document.removeEventListener('touchstart', d, Ar);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    h = e.inert;
  return p.createElement(
    p.Fragment,
    null,
    h ? p.createElement(i, { styles: US(o) }) : null,
    m ? p.createElement(DS, { gapMode: 'margin' }) : null,
  );
}
const YS = SS(n1, VS);
var l1 = p.forwardRef(function (e, t) {
  return p.createElement(Rs, en({}, e, { ref: t, sideCar: YS }));
});
l1.classNames = Rs.classNames;
const s1 = l1;
var GS = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Fr = new WeakMap(),
  Pa = new WeakMap(),
  $a = {},
  Nu = 0,
  u1 = function (e) {
    return e && (e.host || u1(e.parentNode));
  },
  QS = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = u1(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing',
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  KS = function (e, t, n, r) {
    var o = QS(t, Array.isArray(e) ? e : [e]);
    $a[n] || ($a[n] = new WeakMap());
    var i = $a[n],
      a = [],
      l = new Set(),
      s = new Set(o),
      u = function (c) {
        !c || l.has(c) || (l.add(c), u(c.parentNode));
      };
    o.forEach(u);
    var d = function (c) {
      !c ||
        s.has(c) ||
        Array.prototype.forEach.call(c.children, function (f) {
          if (l.has(f)) d(f);
          else {
            var m = f.getAttribute(r),
              h = m !== null && m !== 'false',
              v = (Fr.get(f) || 0) + 1,
              x = (i.get(f) || 0) + 1;
            Fr.set(f, v),
              i.set(f, x),
              a.push(f),
              v === 1 && h && Pa.set(f, !0),
              x === 1 && f.setAttribute(n, 'true'),
              h || f.setAttribute(r, 'true');
          }
        });
    };
    return (
      d(t),
      l.clear(),
      Nu++,
      function () {
        a.forEach(function (c) {
          var f = Fr.get(c) - 1,
            m = i.get(c) - 1;
          Fr.set(c, f),
            i.set(c, m),
            f || (Pa.has(c) || c.removeAttribute(r), Pa.delete(c)),
            m || c.removeAttribute(n);
        }),
          Nu--,
          Nu ||
            ((Fr = new WeakMap()),
            (Fr = new WeakMap()),
            (Pa = new WeakMap()),
            ($a = {}));
      }
    );
  },
  c1 = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || GS(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
        KS(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  };
const d1 = 'Dialog',
  [f1, d8] = ds(d1),
  [XS, Xt] = f1(d1),
  qS = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      l = p.useRef(null),
      s = p.useRef(null),
      [u = !1, d] = Gg({ prop: r, defaultProp: o, onChange: i });
    return p.createElement(
      XS,
      {
        scope: t,
        triggerRef: l,
        contentRef: s,
        contentId: Qa(),
        titleId: Qa(),
        descriptionId: Qa(),
        open: u,
        onOpenChange: d,
        onOpenToggle: p.useCallback(() => d((c) => !c), [d]),
        modal: a,
      },
      n,
    );
  },
  JS = 'DialogTrigger',
  ZS = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Xt(JS, n),
      i = un(t, o.triggerRef);
    return p.createElement(
      it.button,
      fe(
        {
          type: 'button',
          'aria-haspopup': 'dialog',
          'aria-expanded': o.open,
          'aria-controls': o.contentId,
          'data-state': xf(o.open),
        },
        r,
        { ref: i, onClick: Tt(e.onClick, o.onOpenToggle) },
      ),
    );
  }),
  p1 = 'DialogPortal',
  [eC, m1] = f1(p1, { forceMount: void 0 }),
  tC = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = Xt(p1, t);
    return p.createElement(
      eC,
      { scope: t, forceMount: n },
      p.Children.map(r, (a) =>
        p.createElement(
          $o,
          { present: n || i.open },
          p.createElement(Jg, { asChild: !0, container: o }, a),
        ),
      ),
    );
  },
  Xc = 'DialogOverlay',
  nC = p.forwardRef((e, t) => {
    const n = m1(Xc, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Xt(Xc, e.__scopeDialog);
    return i.modal
      ? p.createElement(
          $o,
          { present: r || i.open },
          p.createElement(rC, fe({}, o, { ref: t })),
        )
      : null;
  }),
  rC = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Xt(Xc, n);
    return p.createElement(
      s1,
      { as: Ki, allowPinchZoom: !0, shards: [o.contentRef] },
      p.createElement(
        it.div,
        fe({ 'data-state': xf(o.open) }, r, {
          ref: t,
          style: { pointerEvents: 'auto', ...r.style },
        }),
      ),
    );
  }),
  Di = 'DialogContent',
  oC = p.forwardRef((e, t) => {
    const n = m1(Di, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Xt(Di, e.__scopeDialog);
    return p.createElement(
      $o,
      { present: r || i.open },
      i.modal
        ? p.createElement(iC, fe({}, o, { ref: t }))
        : p.createElement(aC, fe({}, o, { ref: t })),
    );
  }),
  iC = p.forwardRef((e, t) => {
    const n = Xt(Di, e.__scopeDialog),
      r = p.useRef(null),
      o = un(t, n.contentRef, r);
    return (
      p.useEffect(() => {
        const i = r.current;
        if (i) return c1(i);
      }, []),
      p.createElement(
        h1,
        fe({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Tt(e.onCloseAutoFocus, (i) => {
            var a;
            i.preventDefault(),
              (a = n.triggerRef.current) === null || a === void 0 || a.focus();
          }),
          onPointerDownOutside: Tt(e.onPointerDownOutside, (i) => {
            const a = i.detail.originalEvent,
              l = a.button === 0 && a.ctrlKey === !0;
            (a.button === 2 || l) && i.preventDefault();
          }),
          onFocusOutside: Tt(e.onFocusOutside, (i) => i.preventDefault()),
        }),
      )
    );
  }),
  aC = p.forwardRef((e, t) => {
    const n = Xt(Di, e.__scopeDialog),
      r = p.useRef(!1),
      o = p.useRef(!1);
    return p.createElement(
      h1,
      fe({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a;
          if (
            ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, i),
            !i.defaultPrevented)
          ) {
            var l;
            r.current ||
              (l = n.triggerRef.current) === null ||
              l === void 0 ||
              l.focus(),
              i.preventDefault();
          }
          (r.current = !1), (o.current = !1);
        },
        onInteractOutside: (i) => {
          var a, l;
          (a = e.onInteractOutside) === null || a === void 0 || a.call(e, i),
            i.defaultPrevented ||
              ((r.current = !0),
              i.detail.originalEvent.type === 'pointerdown' &&
                (o.current = !0));
          const s = i.target;
          ((l = n.triggerRef.current) === null || l === void 0
            ? void 0
            : l.contains(s)) && i.preventDefault(),
            i.detail.originalEvent.type === 'focusin' &&
              o.current &&
              i.preventDefault();
        },
      }),
    );
  }),
  h1 = p.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...a
      } = e,
      l = Xt(Di, n),
      s = p.useRef(null),
      u = un(t, s);
    return (
      Zg(),
      p.createElement(
        p.Fragment,
        null,
        p.createElement(
          Xg,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
          },
          p.createElement(
            Qg,
            fe(
              {
                role: 'dialog',
                id: l.contentId,
                'aria-describedby': l.descriptionId,
                'aria-labelledby': l.titleId,
                'data-state': xf(l.open),
              },
              a,
              { ref: u, onDismiss: () => l.onOpenChange(!1) },
            ),
          ),
        ),
        !1,
      )
    );
  }),
  lC = 'DialogTitle',
  sC = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Xt(lC, n);
    return p.createElement(it.h2, fe({ id: o.titleId }, r, { ref: t }));
  }),
  uC = 'DialogDescription',
  cC = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Xt(uC, n);
    return p.createElement(it.p, fe({ id: o.descriptionId }, r, { ref: t }));
  }),
  dC = 'DialogClose',
  fC = p.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Xt(dC, n);
    return p.createElement(
      it.button,
      fe({ type: 'button' }, r, {
        ref: t,
        onClick: Tt(e.onClick, () => o.onOpenChange(!1)),
      }),
    );
  });
function xf(e) {
  return e ? 'open' : 'closed';
}
const pC = qS,
  mC = ZS,
  v1 = tC,
  g1 = nC,
  y1 = oC,
  w1 = sC,
  x1 = cC,
  hC = fC,
  vC = pC,
  gC = mC,
  b1 = ({ className: e, ...t }) => w(v1, { className: Ue(e), ...t });
b1.displayName = v1.displayName;
const S1 = p.forwardRef(({ className: e, ...t }, n) =>
  w(g1, {
    ref: n,
    className: Ue(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      e,
    ),
    ...t,
  }),
);
S1.displayName = g1.displayName;
const C1 = p.forwardRef(({ className: e, children: t, ...n }, r) =>
  $(b1, {
    children: [
      w(S1, {}),
      $(y1, {
        ref: r,
        className: Ue(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full',
          e,
        ),
        ...n,
        children: [
          t,
          $(hC, {
            className:
              'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
            children: [
              w(X3, { className: 'h-4 w-4' }),
              w('span', { className: 'sr-only', children: 'Close' }),
            ],
          }),
        ],
      }),
    ],
  }),
);
C1.displayName = y1.displayName;
const k1 = ({ className: e, ...t }) =>
  w('div', {
    className: Ue(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      e,
    ),
    ...t,
  });
k1.displayName = 'DialogFooter';
const yC = p.forwardRef(({ className: e, ...t }, n) =>
  w(w1, {
    ref: n,
    className: Ue('text-lg font-semibold leading-none tracking-tight', e),
    ...t,
  }),
);
yC.displayName = w1.displayName;
const wC = p.forwardRef(({ className: e, ...t }, n) =>
  w(x1, { ref: n, className: Ue('text-sm text-muted-foreground', e), ...t }),
);
wC.displayName = x1.displayName;
const qa = p.forwardRef(({ className: e, type: t, ...n }, r) =>
  w('input', {
    type: t,
    className: Ue(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      e,
    ),
    ref: r,
    ...n,
  }),
);
qa.displayName = 'Input';
const xC = p.forwardRef((e, t) =>
    p.createElement(
      it.label,
      fe({}, e, {
        ref: t,
        onMouseDown: (n) => {
          var r;
          (r = e.onMouseDown) === null || r === void 0 || r.call(e, n),
            !n.defaultPrevented && n.detail > 1 && n.preventDefault();
        },
      }),
    ),
  ),
  E1 = xC,
  bC = Hg(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  ),
  Ja = p.forwardRef(({ className: e, ...t }, n) =>
    w(E1, { ref: n, className: Ue(bC(), e), ...t }),
  );
Ja.displayName = E1.displayName;
const SC = () => {
    const { user: e, setUser: t, uploadPicture: n, updateUser: r } = _o(),
      o = p.useRef(null),
      [i, a] = p.useState(''),
      [l, s] = p.useState(!1),
      [u, d] = p.useState({ name: e.name, password: '', confirm_password: '' }),
      c = () => {
        o.current.click();
      },
      f = (v) => {
        const x = v.target.files[0];
        a(x);
      },
      m = (v) => {
        const { name: x, value: g } = v.target;
        d({ ...u, [x]: g });
      },
      h = async () => {
        s(!0);
        const { name: v, password: x, confirm_password: g } = u;
        if (v.trim() === '') return s(!1), q.error("Name Can't be empty");
        if (x !== g) return s(!1), q.error("Passwords don't match");
        try {
          let y = '';
          i && (y = await n(i));
          const b = { name: u.name, password: u.password, picture: y },
            S = await r(b);
          if (S.success)
            return t(S.user), s(!1), q.success('Updated successfully!');
          s(!1);
        } catch (y) {
          console.log(y), q.error('Something went wrong!'), s(!1);
        }
      };
    return $(vC, {
      children: [
        w(gC, {
          asChild: !0,
          children: $(Mi, {
            className: 'bg-blue-600 hover:bg-blue-600 ',
            children: [w(G3, { className: 'mr-2 h-4 w-4' }), 'Edit Profile'],
          }),
        }),
        $(C1, {
          className: 'sm:max-w-[500px]',
          children: [
            w('div', {
              className: 'flex justify-center',
              children: $('div', {
                className:
                  'relative h-40 w-40 cursor-pointer overflow-hidden rounded-full bg-gray-200',
                children: [
                  $('div', {
                    className:
                      'absolute flex h-full w-full items-center justify-center bg-gray-200 hover:z-10',
                    onClick: c,
                    children: [
                      w('input', {
                        type: 'file',
                        className: 'hidden',
                        ref: o,
                        onChange: f,
                      }),
                      w(K3, { height: 50, width: 50, color: '#4e4646' }),
                    ],
                  }),
                  i
                    ? w(Rl, {
                        className:
                          'transition-all ease-in-out hover:z-0 hover:hidden ',
                        children: w(Ri, { src: URL.createObjectURL(i) }),
                      })
                    : w(Rl, {
                        className:
                          'transition-all ease-in-out hover:z-0 hover:hidden ',
                        children: w(Ri, { src: e.picture }),
                      }),
                ],
              }),
            }),
            $('div', {
              className: 'grid gap-4 py-4',
              children: [
                $('div', {
                  className: 'grid grid-cols-4 items-center gap-4',
                  children: [
                    w(Ja, {
                      htmlFor: 'name',
                      className: 'text-right',
                      children: 'Name',
                    }),
                    w(qa, {
                      id: 'name',
                      name: 'name',
                      value: u.name,
                      className: 'col-span-3',
                      onChange: m,
                    }),
                  ],
                }),
                $('div', {
                  className: 'grid grid-cols-4 items-center gap-4',
                  children: [
                    w(Ja, {
                      htmlFor: 'password',
                      className: 'text-right',
                      children: 'New Password',
                    }),
                    w(qa, {
                      id: 'password',
                      name: 'password',
                      value: u.password,
                      className: 'col-span-3',
                      type: 'password',
                      onChange: m,
                    }),
                  ],
                }),
                $('div', {
                  className: 'grid grid-cols-4 items-center gap-4',
                  children: [
                    w(Ja, {
                      htmlFor: 'confirm_Password',
                      className: 'text-right',
                      children: 'Confirm Password',
                    }),
                    w(qa, {
                      id: 'confirm_password',
                      name: 'confirm_password',
                      value: u.confirm_password,
                      className: 'col-span-3',
                      type: 'password',
                      onChange: m,
                    }),
                  ],
                }),
              ],
            }),
            w(k1, {
              children: $(Mi, {
                disabled: l,
                type: 'submit',
                className: 'w-full',
                onClick: h,
                children: [
                  l && w(H3, { className: 'mr-2 h-4 w-4 animate-spin' }),
                  'Save changes',
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  N1 = () => {
    const e = _o(),
      { user: t, logout: n } = e,
      [r, o] = p.useState(null);
    let { subpage: i } = rs();
    i || (i = 'profile');
    const a = async () => {
      const l = await n();
      l.success ? (q.success(l.message), o('/')) : q.error(l.message);
    };
    return !t && !r
      ? w(mo, { to: '/login' })
      : r
        ? w(mo, { to: r })
        : $('div', {
            children: [
              w(Ji, {}),
              i === 'profile' &&
                $('div', {
                  className:
                    'm-4 flex flex-col items-center gap-8 rounded-[10px]  p-4 sm:h-1/5 sm:flex-row sm:items-stretch lg:gap-28 lg:pl-32 lg:pr-20',
                  children: [
                    w('div', {
                      className:
                        'flex h-40 w-40 justify-center rounded-full bg-gray-200 p-4  sm:h-72 sm:w-72 md:h-96 md:w-96',
                      children: $(Rl, {
                        children: [
                          t.picture
                            ? w(Ri, { src: t.picture })
                            : w(Ri, {
                                src: 'https://res.cloudinary.com/rahul4019/image/upload/v1695133265/pngwing.com_zi4cre.png',
                                className: 'object-cover',
                              }),
                          w(Bg, { children: t.name.slice([0], [1]) }),
                        ],
                      }),
                    }),
                    $('div', {
                      className:
                        'flex grow flex-col items-center gap-10 sm:items-start sm:justify-around sm:gap-0',
                      children: [
                        $('div', {
                          className:
                            'flex flex-col items-center gap-2 sm:items-start',
                          children: [
                            $('div', {
                              className: 'flex items-center gap-2',
                              children: [
                                w(Q3, { height: '18', width: '18' }),
                                $('div', {
                                  className: 'text-xl',
                                  children: [
                                    w('span', { children: 'Name: ' }),
                                    w('span', {
                                      className: 'text-gray-600',
                                      children: t.name,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            $('div', {
                              className: 'flex items-center gap-2',
                              children: [
                                w(Y3, { height: '18', width: '18' }),
                                $('div', {
                                  className: 'text-xl',
                                  children: [
                                    w('span', { children: 'Email: ' }),
                                    w('span', {
                                      className: 'text-gray-600',
                                      children: t.email,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            w('p', {}),
                          ],
                        }),
                        $('div', {
                          className:
                            'flex w-full justify-around sm:justify-end sm:gap-5 md:gap-10',
                          children: [
                            w(SC, {}),
                            $(Mi, {
                              variant: 'secondary',
                              onClick: a,
                              children: [
                                w(V3, { className: 'mr-2 h-4 w-4' }),
                                'Logout',
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              i === 'places' && w(Yg, {}),
            ],
          });
  },
  CC = () => {
    const [e, t] = p.useState({ email: '', password: '' }),
      [n, r] = p.useState(!1),
      o = _o(),
      i = (s) => {
        const { name: u, value: d } = s.target;
        t({ ...e, [u]: d });
      },
      a = async (s) => {
        s.preventDefault();
        const u = await o.login(e);
        u.success ? (q.success(u.message), r(!0)) : q.error(u.message);
      },
      l = async (s) => {
        const u = await o.googleLogin(s);
        u.success ? (q.success(u.message), r(!0)) : q.error(u.message);
      };
    return n
      ? w(mo, { to: '/' })
      : o.user
        ? w(N1, {})
        : w('div', {
            className: 'mt-4 flex grow items-center justify-around p-4 md:p-0',
            children: $('div', {
              className: 'mb-40',
              children: [
                w('h1', {
                  className: 'mb-4 text-center text-4xl',
                  children: 'Login',
                }),
                $('form', {
                  className: 'mx-auto max-w-md',
                  onSubmit: a,
                  children: [
                    w('input', {
                      name: 'email',
                      type: 'email',
                      placeholder: 'your@email.com',
                      value: e.email,
                      onChange: i,
                    }),
                    w('input', {
                      name: 'password',
                      type: 'password',
                      placeholder: 'password',
                      value: e.password,
                      onChange: i,
                    }),
                    w('button', {
                      className: 'primary my-4',
                      children: 'Login',
                    }),
                  ],
                }),
                $('div', {
                  className: 'mb-4 flex w-full items-center gap-4',
                  children: [
                    w('div', { className: 'h-0 w-1/2 border-[1px]' }),
                    w('p', { className: 'small -mt-1', children: 'or' }),
                    w('div', { className: 'h-0 w-1/2 border-[1px]' }),
                  ],
                }),
                w('div', {
                  className: 'flex h-[50px] justify-center',
                  children: w(Lg, {
                    onSuccess: (s) => {
                      l(s.credential);
                    },
                    onError: () => {
                      console.log('Login Failed');
                    },
                    text: 'continue_with',
                    width: '350',
                  }),
                }),
                $('div', {
                  className: 'py-2 text-center text-gray-500',
                  children: [
                    "Don't have an account yet?",
                    ' ',
                    w($t, {
                      className: 'text-black underline',
                      to: '/register',
                      children: 'Register now',
                    }),
                  ],
                }),
              ],
            }),
          });
  };
function yo(e) {
  '@babel/helpers - typeof';
  return (
    (yo =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    yo(e)
  );
}
function He(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Q(e, t) {
  if (t.length < e)
    throw new TypeError(
      e +
        ' argument' +
        (e > 1 ? 's' : '') +
        ' required, but only ' +
        t.length +
        ' present',
    );
}
function re(e) {
  Q(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || (yo(e) === 'object' && t === '[object Date]')
    ? new Date(e.getTime())
    : typeof e == 'number' || t === '[object Number]'
      ? new Date(e)
      : ((typeof e == 'string' || t === '[object String]') &&
          typeof console < 'u' &&
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
}
function Je(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = He(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Qt(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = He(t);
  if (isNaN(r)) return new Date(NaN);
  if (!r) return n;
  var o = n.getDate(),
    i = new Date(n.getTime());
  i.setMonth(n.getMonth() + r + 1, 0);
  var a = i.getDate();
  return o >= a ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), o), n);
}
function kC(e, t) {
  Q(2, arguments);
  var n = re(e).getTime(),
    r = He(t);
  return new Date(n + r);
}
var EC = {};
function cr() {
  return EC;
}
function on(e, t) {
  var n, r, o, i, a, l, s, u;
  Q(1, arguments);
  var d = cr(),
    c = He(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0
              ? i
              : t == null ||
                  (a = t.locale) === null ||
                  a === void 0 ||
                  (l = a.options) === null ||
                  l === void 0
                ? void 0
                : l.weekStartsOn) !== null && o !== void 0
            ? o
            : d.weekStartsOn) !== null && r !== void 0
          ? r
          : (s = d.locale) === null ||
              s === void 0 ||
              (u = s.options) === null ||
              u === void 0
            ? void 0
            : u.weekStartsOn) !== null && n !== void 0
        ? n
        : 0,
    );
  if (!(c >= 0 && c <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  var f = re(e),
    m = f.getDay(),
    h = (m < c ? 7 : 0) + m - c;
  return f.setDate(f.getDate() - h), f.setHours(0, 0, 0, 0), f;
}
function Pr(e) {
  return Q(1, arguments), on(e, { weekStartsOn: 1 });
}
function NC(e) {
  Q(1, arguments);
  var t = re(e),
    n = t.getFullYear(),
    r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Pr(r),
    i = new Date(0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  var a = Pr(i);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= a.getTime()
      ? n
      : n - 1;
}
function _C(e) {
  Q(1, arguments);
  var t = NC(e),
    n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Pr(n);
  return r;
}
function Li(e) {
  var t = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds(),
    ),
  );
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function wo(e) {
  Q(1, arguments);
  var t = re(e);
  return t.setHours(0, 0, 0, 0), t;
}
var PC = 864e5;
function Ht(e, t) {
  Q(2, arguments);
  var n = wo(e),
    r = wo(t),
    o = n.getTime() - Li(n),
    i = r.getTime() - Li(r);
  return Math.round((o - i) / PC);
}
function qc(e, t) {
  Q(2, arguments);
  var n = He(t),
    r = n * 7;
  return Je(e, r);
}
function $C(e, t) {
  Q(2, arguments);
  var n = He(t);
  return Qt(e, n * 12);
}
function OC(e) {
  Q(1, arguments);
  var t;
  if (e && typeof e.forEach == 'function') t = e;
  else if (yo(e) === 'object' && e !== null) t = Array.prototype.slice.call(e);
  else return new Date(NaN);
  var n;
  return (
    t.forEach(function (r) {
      var o = re(r);
      (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
    }),
    n || new Date(NaN)
  );
}
function TC(e) {
  Q(1, arguments);
  var t;
  if (e && typeof e.forEach == 'function') t = e;
  else if (yo(e) === 'object' && e !== null) t = Array.prototype.slice.call(e);
  else return new Date(NaN);
  var n;
  return (
    t.forEach(function (r) {
      var o = re(r);
      (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
    }),
    n || new Date(NaN)
  );
}
function ut(e, t) {
  Q(2, arguments);
  var n = wo(e),
    r = wo(t);
  return n.getTime() === r.getTime();
}
function bf(e) {
  return (
    Q(1, arguments),
    e instanceof Date ||
      (yo(e) === 'object' &&
        Object.prototype.toString.call(e) === '[object Date]')
  );
}
function RC(e) {
  if ((Q(1, arguments), !bf(e) && typeof e != 'number')) return !1;
  var t = re(e);
  return !isNaN(Number(t));
}
function Ai(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = re(t),
    o = n.getFullYear() - r.getFullYear(),
    i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
var MC = 6048e5;
function DC(e, t, n) {
  Q(2, arguments);
  var r = on(e, n),
    o = on(t, n),
    i = r.getTime() - Li(r),
    a = o.getTime() - Li(o);
  return Math.round((i - a) / MC);
}
function Ym(e, t) {
  var n =
    e.getFullYear() - t.getFullYear() ||
    e.getMonth() - t.getMonth() ||
    e.getDate() - t.getDate() ||
    e.getHours() - t.getHours() ||
    e.getMinutes() - t.getMinutes() ||
    e.getSeconds() - t.getSeconds() ||
    e.getMilliseconds() - t.getMilliseconds();
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function LC(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = re(t),
    o = Ym(n, r),
    i = Math.abs(Ht(n, r));
  n.setDate(n.getDate() - o * i);
  var a = +(Ym(n, r) === -o),
    l = o * (i - a);
  return l === 0 ? 0 : l;
}
function Sf(e) {
  Q(1, arguments);
  var t = re(e),
    n = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function pt(e) {
  Q(1, arguments);
  var t = re(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function AC(e) {
  Q(1, arguments);
  var t = re(e),
    n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Cf(e, t) {
  var n, r, o, i, a, l, s, u;
  Q(1, arguments);
  var d = cr(),
    c = He(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0
              ? i
              : t == null ||
                  (a = t.locale) === null ||
                  a === void 0 ||
                  (l = a.options) === null ||
                  l === void 0
                ? void 0
                : l.weekStartsOn) !== null && o !== void 0
            ? o
            : d.weekStartsOn) !== null && r !== void 0
          ? r
          : (s = d.locale) === null ||
              s === void 0 ||
              (u = s.options) === null ||
              u === void 0
            ? void 0
            : u.weekStartsOn) !== null && n !== void 0
        ? n
        : 0,
    );
  if (!(c >= 0 && c <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  var f = re(e),
    m = f.getDay(),
    h = (m < c ? -7 : 0) + 6 - (m - c);
  return f.setDate(f.getDate() + h), f.setHours(23, 59, 59, 999), f;
}
function _1(e) {
  return Q(1, arguments), Cf(e, { weekStartsOn: 1 });
}
function IC(e, t) {
  Q(2, arguments);
  var n = He(t);
  return kC(e, -n);
}
var FC = 864e5;
function jC(e) {
  Q(1, arguments);
  var t = re(e),
    n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(),
    o = n - r;
  return Math.floor(o / FC) + 1;
}
function Ml(e) {
  Q(1, arguments);
  var t = 1,
    n = re(e),
    r = n.getUTCDay(),
    o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function P1(e) {
  Q(1, arguments);
  var t = re(e),
    n = t.getUTCFullYear(),
    r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = Ml(r),
    i = new Date(0);
  i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = Ml(i);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= a.getTime()
      ? n
      : n - 1;
}
function zC(e) {
  Q(1, arguments);
  var t = P1(e),
    n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Ml(n);
  return r;
}
var WC = 6048e5;
function BC(e) {
  Q(1, arguments);
  var t = re(e),
    n = Ml(t).getTime() - zC(t).getTime();
  return Math.round(n / WC) + 1;
}
function Dl(e, t) {
  var n, r, o, i, a, l, s, u;
  Q(1, arguments);
  var d = cr(),
    c = He(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0
              ? i
              : t == null ||
                  (a = t.locale) === null ||
                  a === void 0 ||
                  (l = a.options) === null ||
                  l === void 0
                ? void 0
                : l.weekStartsOn) !== null && o !== void 0
            ? o
            : d.weekStartsOn) !== null && r !== void 0
          ? r
          : (s = d.locale) === null ||
              s === void 0 ||
              (u = s.options) === null ||
              u === void 0
            ? void 0
            : u.weekStartsOn) !== null && n !== void 0
        ? n
        : 0,
    );
  if (!(c >= 0 && c <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  var f = re(e),
    m = f.getUTCDay(),
    h = (m < c ? 7 : 0) + m - c;
  return f.setUTCDate(f.getUTCDate() - h), f.setUTCHours(0, 0, 0, 0), f;
}
function $1(e, t) {
  var n, r, o, i, a, l, s, u;
  Q(1, arguments);
  var d = re(e),
    c = d.getUTCFullYear(),
    f = cr(),
    m = He(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            i !== void 0
              ? i
              : t == null ||
                  (a = t.locale) === null ||
                  a === void 0 ||
                  (l = a.options) === null ||
                  l === void 0
                ? void 0
                : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : f.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (s = f.locale) === null ||
              s === void 0 ||
              (u = s.options) === null ||
              u === void 0
            ? void 0
            : u.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1,
    );
  if (!(m >= 1 && m <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively',
    );
  var h = new Date(0);
  h.setUTCFullYear(c + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = Dl(h, t),
    x = new Date(0);
  x.setUTCFullYear(c, 0, m), x.setUTCHours(0, 0, 0, 0);
  var g = Dl(x, t);
  return d.getTime() >= v.getTime()
    ? c + 1
    : d.getTime() >= g.getTime()
      ? c
      : c - 1;
}
function UC(e, t) {
  var n, r, o, i, a, l, s, u;
  Q(1, arguments);
  var d = cr(),
    c = He(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            i !== void 0
              ? i
              : t == null ||
                  (a = t.locale) === null ||
                  a === void 0 ||
                  (l = a.options) === null ||
                  l === void 0
                ? void 0
                : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : d.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (s = d.locale) === null ||
              s === void 0 ||
              (u = s.options) === null ||
              u === void 0
            ? void 0
            : u.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1,
    ),
    f = $1(e, t),
    m = new Date(0);
  m.setUTCFullYear(f, 0, c), m.setUTCHours(0, 0, 0, 0);
  var h = Dl(m, t);
  return h;
}
var HC = 6048e5;
function VC(e, t) {
  Q(1, arguments);
  var n = re(e),
    r = Dl(n, t).getTime() - UC(n, t).getTime();
  return Math.round(r / HC) + 1;
}
function me(e, t) {
  for (var n = e < 0 ? '-' : '', r = Math.abs(e).toString(); r.length < t; )
    r = '0' + r;
  return n + r;
}
var YC = {
  y: function (t, n) {
    var r = t.getUTCFullYear(),
      o = r > 0 ? r : 1 - r;
    return me(n === 'yy' ? o % 100 : o, n.length);
  },
  M: function (t, n) {
    var r = t.getUTCMonth();
    return n === 'M' ? String(r + 1) : me(r + 1, 2);
  },
  d: function (t, n) {
    return me(t.getUTCDate(), n.length);
  },
  a: function (t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (n) {
      case 'a':
      case 'aa':
        return r.toUpperCase();
      case 'aaa':
        return r;
      case 'aaaaa':
        return r[0];
      case 'aaaa':
      default:
        return r === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  h: function (t, n) {
    return me(t.getUTCHours() % 12 || 12, n.length);
  },
  H: function (t, n) {
    return me(t.getUTCHours(), n.length);
  },
  m: function (t, n) {
    return me(t.getUTCMinutes(), n.length);
  },
  s: function (t, n) {
    return me(t.getUTCSeconds(), n.length);
  },
  S: function (t, n) {
    var r = n.length,
      o = t.getUTCMilliseconds(),
      i = Math.floor(o * Math.pow(10, r - 3));
    return me(i, n.length);
  },
};
const Dn = YC;
var jr = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  GC = {
    G: function (t, n, r) {
      var o = t.getUTCFullYear() > 0 ? 1 : 0;
      switch (n) {
        case 'G':
        case 'GG':
        case 'GGG':
          return r.era(o, { width: 'abbreviated' });
        case 'GGGGG':
          return r.era(o, { width: 'narrow' });
        case 'GGGG':
        default:
          return r.era(o, { width: 'wide' });
      }
    },
    y: function (t, n, r) {
      if (n === 'yo') {
        var o = t.getUTCFullYear(),
          i = o > 0 ? o : 1 - o;
        return r.ordinalNumber(i, { unit: 'year' });
      }
      return Dn.y(t, n);
    },
    Y: function (t, n, r, o) {
      var i = $1(t, o),
        a = i > 0 ? i : 1 - i;
      if (n === 'YY') {
        var l = a % 100;
        return me(l, 2);
      }
      return n === 'Yo'
        ? r.ordinalNumber(a, { unit: 'year' })
        : me(a, n.length);
    },
    R: function (t, n) {
      var r = P1(t);
      return me(r, n.length);
    },
    u: function (t, n) {
      var r = t.getUTCFullYear();
      return me(r, n.length);
    },
    Q: function (t, n, r) {
      var o = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case 'Q':
          return String(o);
        case 'QQ':
          return me(o, 2);
        case 'Qo':
          return r.ordinalNumber(o, { unit: 'quarter' });
        case 'QQQ':
          return r.quarter(o, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return r.quarter(o, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return r.quarter(o, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (t, n, r) {
      var o = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (n) {
        case 'q':
          return String(o);
        case 'qq':
          return me(o, 2);
        case 'qo':
          return r.ordinalNumber(o, { unit: 'quarter' });
        case 'qqq':
          return r.quarter(o, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return r.quarter(o, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return r.quarter(o, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (t, n, r) {
      var o = t.getUTCMonth();
      switch (n) {
        case 'M':
        case 'MM':
          return Dn.M(t, n);
        case 'Mo':
          return r.ordinalNumber(o + 1, { unit: 'month' });
        case 'MMM':
          return r.month(o, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return r.month(o, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return r.month(o, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (t, n, r) {
      var o = t.getUTCMonth();
      switch (n) {
        case 'L':
          return String(o + 1);
        case 'LL':
          return me(o + 1, 2);
        case 'Lo':
          return r.ordinalNumber(o + 1, { unit: 'month' });
        case 'LLL':
          return r.month(o, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return r.month(o, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return r.month(o, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (t, n, r, o) {
      var i = VC(t, o);
      return n === 'wo'
        ? r.ordinalNumber(i, { unit: 'week' })
        : me(i, n.length);
    },
    I: function (t, n, r) {
      var o = BC(t);
      return n === 'Io'
        ? r.ordinalNumber(o, { unit: 'week' })
        : me(o, n.length);
    },
    d: function (t, n, r) {
      return n === 'do'
        ? r.ordinalNumber(t.getUTCDate(), { unit: 'date' })
        : Dn.d(t, n);
    },
    D: function (t, n, r) {
      var o = jC(t);
      return n === 'Do'
        ? r.ordinalNumber(o, { unit: 'dayOfYear' })
        : me(o, n.length);
    },
    E: function (t, n, r) {
      var o = t.getUTCDay();
      switch (n) {
        case 'E':
        case 'EE':
        case 'EEE':
          return r.day(o, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return r.day(o, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return r.day(o, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return r.day(o, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (t, n, r, o) {
      var i = t.getUTCDay(),
        a = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case 'e':
          return String(a);
        case 'ee':
          return me(a, 2);
        case 'eo':
          return r.ordinalNumber(a, { unit: 'day' });
        case 'eee':
          return r.day(i, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return r.day(i, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return r.day(i, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return r.day(i, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (t, n, r, o) {
      var i = t.getUTCDay(),
        a = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (n) {
        case 'c':
          return String(a);
        case 'cc':
          return me(a, n.length);
        case 'co':
          return r.ordinalNumber(a, { unit: 'day' });
        case 'ccc':
          return r.day(i, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return r.day(i, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return r.day(i, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return r.day(i, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (t, n, r) {
      var o = t.getUTCDay(),
        i = o === 0 ? 7 : o;
      switch (n) {
        case 'i':
          return String(i);
        case 'ii':
          return me(i, n.length);
        case 'io':
          return r.ordinalNumber(i, { unit: 'day' });
        case 'iii':
          return r.day(o, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return r.day(o, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return r.day(o, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return r.day(o, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (t, n, r) {
      var o = t.getUTCHours(),
        i = o / 12 >= 1 ? 'pm' : 'am';
      switch (n) {
        case 'a':
        case 'aa':
          return r.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'aaa':
          return r
            .dayPeriod(i, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'aaaaa':
          return r.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return r.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (t, n, r) {
      var o = t.getUTCHours(),
        i;
      switch (
        (o === 12
          ? (i = jr.noon)
          : o === 0
            ? (i = jr.midnight)
            : (i = o / 12 >= 1 ? 'pm' : 'am'),
        n)
      ) {
        case 'b':
        case 'bb':
          return r.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'bbb':
          return r
            .dayPeriod(i, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'bbbbb':
          return r.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return r.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (t, n, r) {
      var o = t.getUTCHours(),
        i;
      switch (
        (o >= 17
          ? (i = jr.evening)
          : o >= 12
            ? (i = jr.afternoon)
            : o >= 4
              ? (i = jr.morning)
              : (i = jr.night),
        n)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return r.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'BBBBB':
          return r.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return r.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (t, n, r) {
      if (n === 'ho') {
        var o = t.getUTCHours() % 12;
        return o === 0 && (o = 12), r.ordinalNumber(o, { unit: 'hour' });
      }
      return Dn.h(t, n);
    },
    H: function (t, n, r) {
      return n === 'Ho'
        ? r.ordinalNumber(t.getUTCHours(), { unit: 'hour' })
        : Dn.H(t, n);
    },
    K: function (t, n, r) {
      var o = t.getUTCHours() % 12;
      return n === 'Ko'
        ? r.ordinalNumber(o, { unit: 'hour' })
        : me(o, n.length);
    },
    k: function (t, n, r) {
      var o = t.getUTCHours();
      return (
        o === 0 && (o = 24),
        n === 'ko' ? r.ordinalNumber(o, { unit: 'hour' }) : me(o, n.length)
      );
    },
    m: function (t, n, r) {
      return n === 'mo'
        ? r.ordinalNumber(t.getUTCMinutes(), { unit: 'minute' })
        : Dn.m(t, n);
    },
    s: function (t, n, r) {
      return n === 'so'
        ? r.ordinalNumber(t.getUTCSeconds(), { unit: 'second' })
        : Dn.s(t, n);
    },
    S: function (t, n) {
      return Dn.S(t, n);
    },
    X: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTimezoneOffset();
      if (a === 0) return 'Z';
      switch (n) {
        case 'X':
          return Qm(a);
        case 'XXXX':
        case 'XX':
          return hr(a);
        case 'XXXXX':
        case 'XXX':
        default:
          return hr(a, ':');
      }
    },
    x: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTimezoneOffset();
      switch (n) {
        case 'x':
          return Qm(a);
        case 'xxxx':
        case 'xx':
          return hr(a);
        case 'xxxxx':
        case 'xxx':
        default:
          return hr(a, ':');
      }
    },
    O: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTimezoneOffset();
      switch (n) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Gm(a, ':');
        case 'OOOO':
        default:
          return 'GMT' + hr(a, ':');
      }
    },
    z: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTimezoneOffset();
      switch (n) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Gm(a, ':');
        case 'zzzz':
        default:
          return 'GMT' + hr(a, ':');
      }
    },
    t: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = Math.floor(i.getTime() / 1e3);
      return me(a, n.length);
    },
    T: function (t, n, r, o) {
      var i = o._originalDate || t,
        a = i.getTime();
      return me(a, n.length);
    },
  };
function Gm(e, t) {
  var n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    o = Math.floor(r / 60),
    i = r % 60;
  if (i === 0) return n + String(o);
  var a = t || '';
  return n + String(o) + a + me(i, 2);
}
function Qm(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? '-' : '+';
    return n + me(Math.abs(e) / 60, 2);
  }
  return hr(e, t);
}
function hr(e, t) {
  var n = t || '',
    r = e > 0 ? '-' : '+',
    o = Math.abs(e),
    i = me(Math.floor(o / 60), 2),
    a = me(o % 60, 2);
  return r + i + n + a;
}
const QC = GC;
var Km = function (t, n) {
    switch (t) {
      case 'P':
        return n.date({ width: 'short' });
      case 'PP':
        return n.date({ width: 'medium' });
      case 'PPP':
        return n.date({ width: 'long' });
      case 'PPPP':
      default:
        return n.date({ width: 'full' });
    }
  },
  O1 = function (t, n) {
    switch (t) {
      case 'p':
        return n.time({ width: 'short' });
      case 'pp':
        return n.time({ width: 'medium' });
      case 'ppp':
        return n.time({ width: 'long' });
      case 'pppp':
      default:
        return n.time({ width: 'full' });
    }
  },
  KC = function (t, n) {
    var r = t.match(/(P+)(p+)?/) || [],
      o = r[1],
      i = r[2];
    if (!i) return Km(t, n);
    var a;
    switch (o) {
      case 'P':
        a = n.dateTime({ width: 'short' });
        break;
      case 'PP':
        a = n.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        a = n.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        a = n.dateTime({ width: 'full' });
        break;
    }
    return a.replace('{{date}}', Km(o, n)).replace('{{time}}', O1(i, n));
  },
  XC = { p: O1, P: KC };
const qC = XC;
var JC = ['D', 'DD'],
  ZC = ['YY', 'YYYY'];
function ek(e) {
  return JC.indexOf(e) !== -1;
}
function tk(e) {
  return ZC.indexOf(e) !== -1;
}
function Xm(e, t, n) {
  if (e === 'YYYY')
    throw new RangeError(
      'Use `yyyy` instead of `YYYY` (in `'
        .concat(t, '`) for formatting years to the input `')
        .concat(
          n,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md',
        ),
    );
  if (e === 'YY')
    throw new RangeError(
      'Use `yy` instead of `YY` (in `'
        .concat(t, '`) for formatting years to the input `')
        .concat(
          n,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md',
        ),
    );
  if (e === 'D')
    throw new RangeError(
      'Use `d` instead of `D` (in `'
        .concat(t, '`) for formatting days of the month to the input `')
        .concat(
          n,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md',
        ),
    );
  if (e === 'DD')
    throw new RangeError(
      'Use `dd` instead of `DD` (in `'
        .concat(t, '`) for formatting days of the month to the input `')
        .concat(
          n,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md',
        ),
    );
}
var nk = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds',
    },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes',
    },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  rk = function (t, n, r) {
    var o,
      i = nk[t];
    return (
      typeof i == 'string'
        ? (o = i)
        : n === 1
          ? (o = i.one)
          : (o = i.other.replace('{{count}}', n.toString())),
      r != null && r.addSuffix
        ? r.comparison && r.comparison > 0
          ? 'in ' + o
          : o + ' ago'
        : o
    );
  };
const ok = rk;
function _u(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.width ? String(t.width) : e.defaultWidth,
      r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var ik = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  ak = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a',
  },
  lk = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  sk = {
    date: _u({ formats: ik, defaultWidth: 'full' }),
    time: _u({ formats: ak, defaultWidth: 'full' }),
    dateTime: _u({ formats: lk, defaultWidth: 'full' }),
  };
const uk = sk;
var ck = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  dk = function (t, n, r, o) {
    return ck[t];
  };
const fk = dk;
function Vo(e) {
  return function (t, n) {
    var r = n != null && n.context ? String(n.context) : 'standalone',
      o;
    if (r === 'formatting' && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        a = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[a] || e.formattingValues[i];
    } else {
      var l = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[u];
  };
}
var pk = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  mk = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  hk = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  vk = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  gk = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  yk = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  wk = function (t, n) {
    var r = Number(t),
      o = r % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return r + 'st';
        case 2:
          return r + 'nd';
        case 3:
          return r + 'rd';
      }
    return r + 'th';
  },
  xk = {
    ordinalNumber: wk,
    era: Vo({ values: pk, defaultWidth: 'wide' }),
    quarter: Vo({
      values: mk,
      defaultWidth: 'wide',
      argumentCallback: function (t) {
        return t - 1;
      },
    }),
    month: Vo({ values: hk, defaultWidth: 'wide' }),
    day: Vo({ values: vk, defaultWidth: 'wide' }),
    dayPeriod: Vo({
      values: gk,
      defaultWidth: 'wide',
      formattingValues: yk,
      defaultFormattingWidth: 'wide',
    }),
  };
const bk = xk;
function Yo(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(o);
    if (!i) return null;
    var a = i[0],
      l = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      s = Array.isArray(l)
        ? Ck(l, function (c) {
            return c.test(a);
          })
        : Sk(l, function (c) {
            return c.test(a);
          }),
      u;
    (u = e.valueCallback ? e.valueCallback(s) : s),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    var d = t.slice(a.length);
    return { value: u, rest: d };
  };
}
function Sk(e, t) {
  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
}
function Ck(e, t) {
  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function kk(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = t.match(e.matchPattern);
    if (!r) return null;
    var o = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    var a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    var l = t.slice(o.length);
    return { value: a, rest: l };
  };
}
var Ek = /^(\d+)(th|st|nd|rd)?/i,
  Nk = /\d+/i,
  _k = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Pk = { any: [/^b/i, /^(a|c)/i] },
  $k = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Ok = { any: [/1/i, /2/i, /3/i, /4/i] },
  Tk = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Rk = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Mk = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Dk = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Lk = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Ak = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  Ik = {
    ordinalNumber: kk({
      matchPattern: Ek,
      parsePattern: Nk,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: Yo({
      matchPatterns: _k,
      defaultMatchWidth: 'wide',
      parsePatterns: Pk,
      defaultParseWidth: 'any',
    }),
    quarter: Yo({
      matchPatterns: $k,
      defaultMatchWidth: 'wide',
      parsePatterns: Ok,
      defaultParseWidth: 'any',
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: Yo({
      matchPatterns: Tk,
      defaultMatchWidth: 'wide',
      parsePatterns: Rk,
      defaultParseWidth: 'any',
    }),
    day: Yo({
      matchPatterns: Mk,
      defaultMatchWidth: 'wide',
      parsePatterns: Dk,
      defaultParseWidth: 'any',
    }),
    dayPeriod: Yo({
      matchPatterns: Lk,
      defaultMatchWidth: 'any',
      parsePatterns: Ak,
      defaultParseWidth: 'any',
    }),
  };
const Fk = Ik;
var jk = {
  code: 'en-US',
  formatDistance: ok,
  formatLong: uk,
  formatRelative: fk,
  localize: bk,
  match: Fk,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
const T1 = jk;
var zk = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Wk = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Bk = /^'([^]*?)'?$/,
  Uk = /''/g,
  Hk = /[a-zA-Z]/;
function Rt(e, t, n) {
  var r, o, i, a, l, s, u, d, c, f, m, h, v, x, g, y, b, S;
  Q(2, arguments);
  var C = String(t),
    N = cr(),
    P =
      (r =
        (o = n == null ? void 0 : n.locale) !== null && o !== void 0
          ? o
          : N.locale) !== null && r !== void 0
        ? r
        : T1,
    E = He(
      (i =
        (a =
          (l =
            (s = n == null ? void 0 : n.firstWeekContainsDate) !== null &&
            s !== void 0
              ? s
              : n == null ||
                  (u = n.locale) === null ||
                  u === void 0 ||
                  (d = u.options) === null ||
                  d === void 0
                ? void 0
                : d.firstWeekContainsDate) !== null && l !== void 0
            ? l
            : N.firstWeekContainsDate) !== null && a !== void 0
          ? a
          : (c = N.locale) === null ||
              c === void 0 ||
              (f = c.options) === null ||
              f === void 0
            ? void 0
            : f.firstWeekContainsDate) !== null && i !== void 0
        ? i
        : 1,
    );
  if (!(E >= 1 && E <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively',
    );
  var I = He(
    (m =
      (h =
        (v =
          (x = n == null ? void 0 : n.weekStartsOn) !== null && x !== void 0
            ? x
            : n == null ||
                (g = n.locale) === null ||
                g === void 0 ||
                (y = g.options) === null ||
                y === void 0
              ? void 0
              : y.weekStartsOn) !== null && v !== void 0
          ? v
          : N.weekStartsOn) !== null && h !== void 0
        ? h
        : (b = N.locale) === null ||
            b === void 0 ||
            (S = b.options) === null ||
            S === void 0
          ? void 0
          : S.weekStartsOn) !== null && m !== void 0
      ? m
      : 0,
  );
  if (!(I >= 0 && I <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  if (!P.localize)
    throw new RangeError('locale must contain localize property');
  if (!P.formatLong)
    throw new RangeError('locale must contain formatLong property');
  var L = re(e);
  if (!RC(L)) throw new RangeError('Invalid time value');
  var Y = Li(L),
    D = IC(L, Y),
    K = {
      firstWeekContainsDate: E,
      weekStartsOn: I,
      locale: P,
      _originalDate: L,
    },
    B = C.match(Wk)
      .map(function (z) {
        var V = z[0];
        if (V === 'p' || V === 'P') {
          var T = qC[V];
          return T(z, P.formatLong);
        }
        return z;
      })
      .join('')
      .match(zk)
      .map(function (z) {
        if (z === "''") return "'";
        var V = z[0];
        if (V === "'") return Vk(z);
        var T = QC[V];
        if (T)
          return (
            !(n != null && n.useAdditionalWeekYearTokens) &&
              tk(z) &&
              Xm(z, t, String(e)),
            !(n != null && n.useAdditionalDayOfYearTokens) &&
              ek(z) &&
              Xm(z, t, String(e)),
            T(D, z, P.localize, K)
          );
        if (V.match(Hk))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' +
              V +
              '`',
          );
        return z;
      })
      .join('');
  return B;
}
function Vk(e) {
  var t = e.match(Bk);
  return t ? t[1].replace(Uk, "'") : e;
}
function Yk(e) {
  Q(1, arguments);
  var t = re(e),
    n = t.getFullYear(),
    r = t.getMonth(),
    o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var Gk = 6048e5;
function Qk(e) {
  Q(1, arguments);
  var t = re(e),
    n = Pr(t).getTime() - _C(t).getTime();
  return Math.round(n / Gk) + 1;
}
function Kk(e) {
  Q(1, arguments);
  var t = re(e),
    n = t.getTime();
  return n;
}
function Xk(e) {
  return Q(1, arguments), Math.floor(Kk(e) / 1e3);
}
function qk(e, t) {
  var n, r, o, i, a, l, s, u;
  Q(1, arguments);
  var d = re(e),
    c = d.getFullYear(),
    f = cr(),
    m = He(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            i !== void 0
              ? i
              : t == null ||
                  (a = t.locale) === null ||
                  a === void 0 ||
                  (l = a.options) === null ||
                  l === void 0
                ? void 0
                : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : f.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (s = f.locale) === null ||
              s === void 0 ||
              (u = s.options) === null ||
              u === void 0
            ? void 0
            : u.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1,
    );
  if (!(m >= 1 && m <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively',
    );
  var h = new Date(0);
  h.setFullYear(c + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = on(h, t),
    x = new Date(0);
  x.setFullYear(c, 0, m), x.setHours(0, 0, 0, 0);
  var g = on(x, t);
  return d.getTime() >= v.getTime()
    ? c + 1
    : d.getTime() >= g.getTime()
      ? c
      : c - 1;
}
function Jk(e, t) {
  var n, r, o, i, a, l, s, u;
  Q(1, arguments);
  var d = cr(),
    c = He(
      (n =
        (r =
          (o =
            (i = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
            i !== void 0
              ? i
              : t == null ||
                  (a = t.locale) === null ||
                  a === void 0 ||
                  (l = a.options) === null ||
                  l === void 0
                ? void 0
                : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : d.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (s = d.locale) === null ||
              s === void 0 ||
              (u = s.options) === null ||
              u === void 0
            ? void 0
            : u.firstWeekContainsDate) !== null && n !== void 0
        ? n
        : 1,
    ),
    f = qk(e, t),
    m = new Date(0);
  m.setFullYear(f, 0, c), m.setHours(0, 0, 0, 0);
  var h = on(m, t);
  return h;
}
var Zk = 6048e5;
function eE(e, t) {
  Q(1, arguments);
  var n = re(e),
    r = on(n, t).getTime() - Jk(n, t).getTime();
  return Math.round(r / Zk) + 1;
}
function tE(e) {
  Q(1, arguments);
  var t = re(e),
    n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function nE(e, t) {
  return Q(1, arguments), DC(tE(e), pt(e), t) + 1;
}
function Jc(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = re(t);
  return n.getTime() > r.getTime();
}
function R1(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = re(t);
  return n.getTime() < r.getTime();
}
function kf(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = re(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function rE(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = re(t);
  return n.getFullYear() === r.getFullYear();
}
function Pu(e, t) {
  Q(2, arguments);
  var n = He(t);
  return Je(e, -n);
}
function $u(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = He(t),
    o = n.getFullYear(),
    i = n.getDate(),
    a = new Date(0);
  a.setFullYear(o, r, 15), a.setHours(0, 0, 0, 0);
  var l = Yk(a);
  return n.setMonth(r, Math.min(i, l)), n;
}
function qm(e, t) {
  Q(2, arguments);
  var n = re(e),
    r = He(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
const M1 = ({ booking: e, className: t }) =>
    $('div', {
      className: 'flex gap-1 ' + t,
      children: [
        w('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          stroke: 'currentColor',
          className: 'h-6 w-6',
          children: w('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z',
          }),
        }),
        Ht(new Date(e.checkOut), new Date(e.checkIn)),
        'nights:',
        $('div', {
          className: 'ml-2 flex items-center gap-1',
          children: [
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z',
              }),
            }),
            Rt(new Date(e.checkIn), 'dd-MM-yyyy'),
            ' →',
            ' ',
          ],
        }),
        $('div', {
          className: 'items- flex gap-1',
          children: [
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z',
              }),
            }),
            Rt(new Date(e.checkOut), 'dd-MM-yyyy'),
          ],
        }),
      ],
    }),
  oE = () => {
    const [e, t] = p.useState([]),
      [n, r] = p.useState(!0);
    return (
      p.useEffect(() => {
        (async () => {
          try {
            const { data: i } = await je.get('/bookings');
            t(i.booking), r(!1);
          } catch (i) {
            console.log('Error: ', i), r(!1);
          }
        })();
      }, []),
      n
        ? w(Po, {})
        : $('div', {
            className: 'flex flex-col items-center',
            children: [
              w(Ji, {}),
              w('div', {
                children:
                  (e == null ? void 0 : e.length) > 0
                    ? e.map((o) => {
                        var i, a;
                        return $(
                          $t,
                          {
                            to: `/account/bookings/${o._id}`,
                            className:
                              'mx-4 my-8 flex h-28 gap-4 overflow-hidden rounded-2xl bg-gray-200 md:h-40 lg:mx-0',
                            children: [
                              w('div', {
                                className: 'w-2/6 md:w-1/6',
                                children:
                                  ((i = o == null ? void 0 : o.place) == null
                                    ? void 0
                                    : i.photos[0]) &&
                                  w(Vg, {
                                    place: o == null ? void 0 : o.place,
                                    className: 'h-full w-full object-cover',
                                  }),
                              }),
                              $('div', {
                                className: 'grow py-3 pr-3',
                                children: [
                                  w('h2', {
                                    className: 'md:text-2xl',
                                    children:
                                      (a = o == null ? void 0 : o.place) == null
                                        ? void 0
                                        : a.title,
                                  }),
                                  $('div', {
                                    className: 'md:text-xl',
                                    children: [
                                      w('div', {
                                        className: 'flex gap-2 border-t ',
                                      }),
                                      $('div', {
                                        className: 'md:text-xl',
                                        children: [
                                          w(M1, {
                                            booking: o,
                                            className:
                                              'mb-2 mt-4 hidden items-center text-gray-600  md:flex',
                                          }),
                                          $('div', {
                                            className:
                                              'my-2 flex items-center gap-1',
                                            children: [
                                              w('svg', {
                                                xmlns:
                                                  'http://www.w3.org/2000/svg',
                                                fill: 'none',
                                                viewBox: '0 0 24 24',
                                                strokeWidth: 1.5,
                                                stroke: 'currentColor',
                                                className: 'h-7 w-7',
                                                children: w('path', {
                                                  strokeLinecap: 'round',
                                                  strokeLinejoin: 'round',
                                                  d: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
                                                }),
                                              }),
                                              $('span', {
                                                className:
                                                  'text-xl md:text-2xl',
                                                children: [
                                                  'Total price: ₹',
                                                  o.price,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          o._id,
                        );
                      })
                    : w('div', {
                        className: '',
                        children: $('div', {
                          className: 'flex flex-col justify-start',
                          children: [
                            w('h1', {
                              className: 'my-6 text-3xl font-semibold',
                              children: 'Trips',
                            }),
                            w('hr', { className: 'border border-gray-300' }),
                            w('h3', {
                              className: 'pt-6 text-2xl font-semibold',
                              children: 'No trips booked... yet!',
                            }),
                            w('p', {
                              children:
                                'Time to dust off you bags and start planning your next adventure',
                            }),
                            w($t, {
                              to: '/',
                              className: 'my-4',
                              children: w('div', {
                                className:
                                  'flex w-40 justify-center rounded-lg border border-black p-3 text-lg font-semibold hover:bg-gray-50',
                                children: 'Start Searching',
                              }),
                            }),
                          ],
                        }),
                      }),
              }),
            ],
          })
    );
  },
  iE = ({ selected: e, handleFormData: t }) =>
    $('div', {
      className: 'mt-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6',
      children: [
        $(
          'label',
          {
            className:
              'flex cursor-pointer items-center gap-2 rounded-2xl border p-4',
            children: [
              w('input', {
                type: 'checkbox',
                checked: e.includes('wifi'),
                name: 'wifi',
                onChange: t,
              }),
              w('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: 1.5,
                stroke: 'currentColor',
                className: 'h-6 w-6',
                children: w('path', {
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  d: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
                }),
              }),
              w('span', { children: 'Wifi' }),
            ],
          },
          'perks',
        ),
        $('label', {
          className:
            'flex cursor-pointer items-center gap-2 rounded-2xl border p-4',
          children: [
            w('input', {
              type: 'checkbox',
              checked: e.includes('parking'),
              name: 'parking',
              onChange: t,
            }),
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
              }),
            }),
            w('span', { children: 'Free parking spot' }),
          ],
        }),
        $('label', {
          className:
            'flex cursor-pointer items-center gap-2 rounded-2xl border p-4',
          children: [
            w('input', {
              type: 'checkbox',
              checked: e.includes('tv'),
              name: 'tv',
              onChange: t,
            }),
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z',
              }),
            }),
            w('span', { children: 'TV' }),
          ],
        }),
        $('label', {
          className:
            'flex cursor-pointer items-center gap-2 rounded-2xl border p-4',
          children: [
            w('input', {
              type: 'checkbox',
              checked: e.includes('radio'),
              name: 'radio',
              onChange: t,
            }),
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z',
              }),
            }),
            w('span', { children: 'Radio' }),
          ],
        }),
        $('label', {
          className:
            'flex cursor-pointer items-center gap-2 rounded-2xl border p-4',
          children: [
            w('input', {
              type: 'checkbox',
              checked: e.includes('pets'),
              name: 'pets',
              onChange: t,
            }),
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z',
              }),
            }),
            w('span', { children: 'Pets' }),
          ],
        }),
        $('label', {
          className:
            'flex cursor-pointer items-center gap-2 rounded-2xl border p-4',
          children: [
            w('input', {
              type: 'checkbox',
              checked: e.includes('enterence'),
              name: 'enterence',
              onChange: t,
            }),
            w('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
              strokeWidth: 1.5,
              stroke: 'currentColor',
              className: 'h-6 w-6',
              children: w('path', {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75',
              }),
            }),
            w('span', { children: 'Private Enterence' }),
          ],
        }),
      ],
    }),
  aE = ({ src: e, ...t }) =>
    w('img', { src: e, ...t, alt: '', className: 'rounded-xl' }),
  lE = ({ addedPhotos: e, setAddedPhotos: t }) => {
    const [n, r] = p.useState(''),
      o = async (s) => {
        s.preventDefault();
        const { data: u } = await je.post('/upload-by-link', { link: n });
        t((d) => [...d, u]), r('');
      },
      i = async (s) => {
        const u = s.target.files,
          d = new FormData();
        for (let f = 0; f < u.length; f++) d.append('photos', u[f]);
        const { data: c } = await je.post('/upload', d, {
          headers: { 'Content-type': 'multipart/form-data' },
        });
        t((f) => [...f, ...c]);
      },
      a = (s) => {
        t([...e.filter((u) => u !== s)]);
      },
      l = (s, u) => {
        s.preventDefault(), t([u, ...e.filter((d) => d !== u)]);
      };
    return $(Wi, {
      children: [
        $('div', {
          className: 'flex gap-2',
          children: [
            w('input', {
              value: n,
              onChange: (s) => r(s.target.value),
              type: 'text',
              placeholder: 'Add using a link ...jpg',
            }),
            w('button', {
              className: 'rounded-2xl bg-gray-200 px-4',
              onClick: o,
              children: 'Add photo',
            }),
          ],
        }),
        $('div', {
          className:
            'mt-2 grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 ',
          children: [
            (e == null ? void 0 : e.length) > 0 &&
              e.map((s) =>
                $(
                  'div',
                  {
                    className: 'relative flex h-32',
                    children: [
                      w(aE, {
                        className: 'w-full rounded-2xl object-cover',
                        src: s,
                        alt: '',
                      }),
                      w('button', {
                        onClick: () => a(s),
                        className:
                          'absolute bottom-1 right-1 cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-70',
                        children: w('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'none',
                          viewBox: '0 0 24 24',
                          strokeWidth: 1.5,
                          stroke: 'currentColor',
                          className: 'h-6 w-6',
                          children: w('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            d: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0',
                          }),
                        }),
                      }),
                      $('button', {
                        onClick: (u) => l(u, s),
                        className:
                          'absolute bottom-1 left-1 cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-70',
                        children: [
                          s === e[0] &&
                            w('svg', {
                              xmlns: 'http://www.w3.org/2000/svg',
                              viewBox: '0 0 24 24',
                              fill: 'currentColor',
                              className: 'h-6 w-6',
                              children: w('path', {
                                fillRule: 'evenodd',
                                d: 'M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z',
                                clipRule: 'evenodd',
                              }),
                            }),
                          s !== e[0] &&
                            w('svg', {
                              xmlns: 'http://www.w3.org/2000/svg',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              strokeWidth: 1.5,
                              stroke: 'currentColor',
                              className: 'h-6 w-6',
                              children: w('path', {
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                d: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
                              }),
                            }),
                        ],
                      }),
                    ],
                  },
                  s,
                ),
              ),
            $('label', {
              className:
                'flex h-32 cursor-pointer items-center justify-center gap-1 rounded-2xl border bg-transparent p-2 text-2xl text-gray-600',
              children: [
                w('input', {
                  type: 'file',
                  multiple: !0,
                  className: 'hidden',
                  onChange: i,
                }),
                w('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 1.5,
                  stroke: 'currentColor',
                  className: 'h-8 w-8',
                  children: w('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z',
                  }),
                }),
                'Upload',
              ],
            }),
          ],
        }),
      ],
    });
  },
  Jm = () => {
    const { id: e } = rs(),
      [t, n] = p.useState(!1),
      [r, o] = p.useState(!1),
      [i, a] = p.useState([]),
      [l, s] = p.useState({
        title: '',
        address: '',
        description: '',
        perks: [],
        extraInfo: '',
        checkIn: '',
        checkOut: '',
        maxGuests: 10,
        price: 500,
      }),
      {
        title: u,
        address: d,
        description: c,
        perks: f,
        extraInfo: m,
        checkIn: h,
        checkOut: v,
        maxGuests: x,
        price: g,
      } = l,
      y = () =>
        u.trim() === ''
          ? (q.error("Title can't be empty!"), !1)
          : d.trim() === ''
            ? (q.error("Address can't be empty!"), !1)
            : i.length < 5
              ? (q.error('Upload at least 5 photos!'), !1)
              : c.trim() === ''
                ? (q.error("Description can't be empty!"), !1)
                : x < 1
                  ? (q.error('At least one guests is required!'), !1)
                  : x > 10
                    ? (q.error("Max. guests can't be greater than 10"), !1)
                    : !0,
      b = (N) => {
        const { name: P, value: E, type: I } = N.target;
        if (I !== 'checkbox') {
          s({ ...l, [P]: E });
          return;
        }
        if (I === 'checkbox') {
          const L = [...f];
          let Y = [];
          L.includes(P) ? (Y = L.filter((D) => D !== P)) : (Y = [...L, P]),
            s({ ...l, perks: Y });
        }
      };
    p.useEffect(() => {
      e &&
        (o(!0),
        je.get(`/places/${e}`).then((N) => {
          const { place: P } = N.data;
          for (let E in l)
            P.hasOwnProperty(E) && s((I) => ({ ...I, [E]: P[E] }));
          a([...P.photos]), o(!1);
        }));
    }, [e]);
    const S = (N, P) =>
        $(Wi, {
          children: [
            w('h2', { className: 'mt-4 text-2xl', children: N }),
            w('p', { className: 'text-sm text-gray-500', children: P }),
          ],
        }),
      C = async (N) => {
        N.preventDefault();
        const P = y(),
          E = { ...l, addedPhotos: i };
        P &&
          (e
            ? await je.put('/places/update-place', { id: e, ...E })
            : await je.post('/places/add-places', E),
          n(!0));
      };
    return t
      ? w(mo, { to: '/account/places' })
      : r
        ? w(Po, {})
        : $('div', {
            className: 'p-4',
            children: [
              w(Ji, {}),
              $('form', {
                onSubmit: C,
                children: [
                  S(
                    'Title',
                    'title for your place. Should be short and catchy as in advertisement',
                  ),
                  w('input', {
                    type: 'text',
                    name: 'title',
                    value: u,
                    onChange: b,
                    placeholder: 'title, for example: My lovely apt',
                  }),
                  S('Address', 'address to this place'),
                  w('input', {
                    type: 'text',
                    name: 'address',
                    value: d,
                    onChange: b,
                    placeholder: 'address',
                  }),
                  S('Photos', 'more = better'),
                  w(lE, { addedPhotos: i, setAddedPhotos: a }),
                  S('Description', 'discription of the place'),
                  w('textarea', { value: c, name: 'description', onChange: b }),
                  S('Perks', ' select all the perks of your place'),
                  w(iE, { selected: f, handleFormData: b }),
                  S('Extra info', 'house rules, etc '),
                  w('textarea', { value: m, name: 'extraInfo', onChange: b }),
                  S(
                    'Number of guests & Price',
                    'Specify the maximum number of guests so that the client stays within the limit.',
                  ),
                  $('div', {
                    className: 'grid gap-2 sm:grid-cols-2 md:grid-cols-4',
                    children: [
                      $('div', {
                        children: [
                          w('h3', {
                            className: 'mt-2 -mb-1',
                            children: 'Max no. of guests',
                          }),
                          w('input', {
                            type: 'text',
                            name: 'maxGuests',
                            value: x,
                            onChange: b,
                            placeholder: '1',
                          }),
                        ],
                      }),
                      $('div', {
                        children: [
                          w('h3', {
                            className: 'mt-2 -mb-1',
                            children: 'Price per night',
                          }),
                          w('input', {
                            type: 'number',
                            name: 'price',
                            value: g,
                            onChange: b,
                            placeholder: '1',
                          }),
                        ],
                      }),
                    ],
                  }),
                  w('button', {
                    className:
                      'mx-auto my-4 flex rounded-full bg-primary py-3 px-20 text-xl font-semibold text-white',
                    children: 'Save',
                  }),
                ],
              }),
            ],
          });
  },
  D1 = ({ placeAddress: e, className: t = null }) => (
    t || (t = 'my-3 block'),
    (t += ' flex gap-1 font-semibold underline'),
    $('a', {
      className: t,
      href: `https://maps.google.com/?q=${e}`,
      target: 'blank',
      children: [
        $('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          stroke: 'currentColor',
          className: 'h-6 w-6',
          children: [
            w('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z',
            }),
            w('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
            }),
          ],
        }),
        e,
      ],
    })
  );
var J = function () {
  return (
    (J =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    J.apply(this, arguments)
  );
};
function sE(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function L1(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var A1 = { exports: {} },
  Go = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zm;
function uE() {
  if (Zm) return Go;
  Zm = 1;
  var e = Z,
    t = Symbol.for('react.element'),
    n = Symbol.for('react.fragment'),
    r = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, s, u) {
    var d,
      c = {},
      f = null,
      m = null;
    u !== void 0 && (f = '' + u),
      s.key !== void 0 && (f = '' + s.key),
      s.ref !== void 0 && (m = s.ref);
    for (d in s) r.call(s, d) && !i.hasOwnProperty(d) && (c[d] = s[d]);
    if (l && l.defaultProps)
      for (d in ((s = l.defaultProps), s)) c[d] === void 0 && (c[d] = s[d]);
    return {
      $$typeof: t,
      type: l,
      key: f,
      ref: m,
      props: c,
      _owner: o.current,
    };
  }
  return (Go.Fragment = n), (Go.jsx = a), (Go.jsxs = a), Go;
}
A1.exports = uE();
var R = A1.exports;
function Zi(e) {
  return e.mode === 'multiple';
}
function ea(e) {
  return e.mode === 'range';
}
function Ms(e) {
  return e.mode === 'single';
}
var cE = {
  root: 'rdp',
  multiple_months: 'rdp-multiple_months',
  with_weeknumber: 'rdp-with_weeknumber',
  vhidden: 'rdp-vhidden',
  button_reset: 'rdp-button_reset',
  button: 'rdp-button',
  caption: 'rdp-caption',
  caption_start: 'rdp-caption_start',
  caption_end: 'rdp-caption_end',
  caption_between: 'rdp-caption_between',
  caption_label: 'rdp-caption_label',
  caption_dropdowns: 'rdp-caption_dropdowns',
  dropdown: 'rdp-dropdown',
  dropdown_month: 'rdp-dropdown_month',
  dropdown_year: 'rdp-dropdown_year',
  dropdown_icon: 'rdp-dropdown_icon',
  months: 'rdp-months',
  month: 'rdp-month',
  table: 'rdp-table',
  tbody: 'rdp-tbody',
  tfoot: 'rdp-tfoot',
  head: 'rdp-head',
  head_row: 'rdp-head_row',
  head_cell: 'rdp-head_cell',
  nav: 'rdp-nav',
  nav_button: 'rdp-nav_button',
  nav_button_previous: 'rdp-nav_button_previous',
  nav_button_next: 'rdp-nav_button_next',
  nav_icon: 'rdp-nav_icon',
  row: 'rdp-row',
  weeknumber: 'rdp-weeknumber',
  cell: 'rdp-cell',
  day: 'rdp-day',
  day_today: 'rdp-day_today',
  day_outside: 'rdp-day_outside',
  day_selected: 'rdp-day_selected',
  day_disabled: 'rdp-day_disabled',
  day_hidden: 'rdp-day_hidden',
  day_range_start: 'rdp-day_range_start',
  day_range_end: 'rdp-day_range_end',
  day_range_middle: 'rdp-day_range_middle',
};
function dE(e, t) {
  return Rt(e, 'LLLL y', t);
}
function fE(e, t) {
  return Rt(e, 'd', t);
}
function pE(e, t) {
  return Rt(e, 'LLLL', t);
}
function mE(e) {
  return ''.concat(e);
}
function hE(e, t) {
  return Rt(e, 'cccccc', t);
}
function vE(e, t) {
  return Rt(e, 'yyyy', t);
}
var gE = Object.freeze({
    __proto__: null,
    formatCaption: dE,
    formatDay: fE,
    formatMonthCaption: pE,
    formatWeekNumber: mE,
    formatWeekdayName: hE,
    formatYearCaption: vE,
  }),
  yE = function (e, t, n) {
    return Rt(e, 'do MMMM (EEEE)', n);
  },
  wE = function () {
    return 'Month: ';
  },
  xE = function () {
    return 'Go to next month';
  },
  bE = function () {
    return 'Go to previous month';
  },
  SE = function (e, t) {
    return Rt(e, 'cccc', t);
  },
  CE = function (e) {
    return 'Week n. '.concat(e);
  },
  kE = function () {
    return 'Year: ';
  },
  EE = Object.freeze({
    __proto__: null,
    labelDay: yE,
    labelMonthDropdown: wE,
    labelNext: xE,
    labelPrevious: bE,
    labelWeekNumber: CE,
    labelWeekday: SE,
    labelYearDropdown: kE,
  });
function NE() {
  var e = 'buttons',
    t = cE,
    n = T1,
    r = {},
    o = {},
    i = 1,
    a = {},
    l = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: gE,
    labels: EE,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: i,
    styles: a,
    today: l,
    mode: 'default',
  };
}
function _E(e) {
  var t = e.fromYear,
    n = e.toYear,
    r = e.fromMonth,
    o = e.toMonth,
    i = e.fromDate,
    a = e.toDate;
  return (
    r ? (i = pt(r)) : t && (i = new Date(t, 0, 1)),
    o ? (a = Sf(o)) : n && (a = new Date(n, 11, 31)),
    { fromDate: i ? wo(i) : void 0, toDate: a ? wo(a) : void 0 }
  );
}
var I1 = p.createContext(void 0);
function PE(e) {
  var t,
    n = e.initialProps,
    r = NE(),
    o = _E(n),
    i = o.fromDate,
    a = o.toDate,
    l = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  l !== 'buttons' && (!i || !a) && (l = 'buttons');
  var s;
  (Ms(n) || Zi(n) || ea(n)) && (s = n.onSelect);
  var u = J(J(J({}, r), n), {
    captionLayout: l,
    classNames: J(J({}, r.classNames), n.classNames),
    components: J({}, n.components),
    formatters: J(J({}, r.formatters), n.formatters),
    fromDate: i,
    labels: J(J({}, r.labels), n.labels),
    mode: n.mode || r.mode,
    modifiers: J(J({}, r.modifiers), n.modifiers),
    modifiersClassNames: J(J({}, r.modifiersClassNames), n.modifiersClassNames),
    onSelect: s,
    styles: J(J({}, r.styles), n.styles),
    toDate: a,
  });
  return R.jsx(I1.Provider, { value: u, children: e.children });
}
function xe() {
  var e = p.useContext(I1);
  if (!e)
    throw new Error('useDayPicker must be used within a DayPickerProvider.');
  return e;
}
function F1(e) {
  var t = xe(),
    n = t.locale,
    r = t.classNames,
    o = t.styles,
    i = t.formatters.formatCaption;
  return R.jsx('div', {
    className: r.caption_label,
    style: o.caption_label,
    'aria-live': 'polite',
    role: 'presentation',
    id: e.id,
    children: i(e.displayMonth, { locale: n }),
  });
}
function $E(e) {
  return R.jsx(
    'svg',
    J(
      {
        width: '8px',
        height: '8px',
        viewBox: '0 0 120 120',
        'data-testid': 'iconDropdown',
      },
      e,
      {
        children: R.jsx('path', {
          d: 'M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z',
          fill: 'currentColor',
          fillRule: 'nonzero',
        }),
      },
    ),
  );
}
function j1(e) {
  var t,
    n,
    r = e.onChange,
    o = e.value,
    i = e.children,
    a = e.caption,
    l = e.className,
    s = e.style,
    u = xe(),
    d =
      (n =
        (t = u.components) === null || t === void 0
          ? void 0
          : t.IconDropdown) !== null && n !== void 0
        ? n
        : $E;
  return R.jsxs('div', {
    className: l,
    style: s,
    children: [
      R.jsx('span', {
        className: u.classNames.vhidden,
        children: e['aria-label'],
      }),
      R.jsx('select', {
        name: e.name,
        'aria-label': e['aria-label'],
        className: u.classNames.dropdown,
        style: u.styles.dropdown,
        value: o,
        onChange: r,
        children: i,
      }),
      R.jsxs('div', {
        className: u.classNames.caption_label,
        style: u.styles.caption_label,
        'aria-hidden': 'true',
        children: [
          a,
          R.jsx(d, {
            className: u.classNames.dropdown_icon,
            style: u.styles.dropdown_icon,
          }),
        ],
      }),
    ],
  });
}
function OE(e) {
  var t,
    n = xe(),
    r = n.fromDate,
    o = n.toDate,
    i = n.styles,
    a = n.locale,
    l = n.formatters.formatMonthCaption,
    s = n.classNames,
    u = n.components,
    d = n.labels.labelMonthDropdown;
  if (!r) return R.jsx(R.Fragment, {});
  if (!o) return R.jsx(R.Fragment, {});
  var c = [];
  if (rE(r, o))
    for (var f = pt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      c.push($u(f, m));
  else for (var f = pt(new Date()), m = 0; m <= 11; m++) c.push($u(f, m));
  var h = function (x) {
      var g = Number(x.target.value),
        y = $u(pt(e.displayMonth), g);
      e.onChange(y);
    },
    v = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : j1;
  return R.jsx(v, {
    name: 'months',
    'aria-label': d(),
    className: s.dropdown_month,
    style: i.dropdown_month,
    onChange: h,
    value: e.displayMonth.getMonth(),
    caption: l(e.displayMonth, { locale: a }),
    children: c.map(function (x) {
      return R.jsx(
        'option',
        { value: x.getMonth(), children: l(x, { locale: a }) },
        x.getMonth(),
      );
    }),
  });
}
function TE(e) {
  var t,
    n = e.displayMonth,
    r = xe(),
    o = r.fromDate,
    i = r.toDate,
    a = r.locale,
    l = r.styles,
    s = r.classNames,
    u = r.components,
    d = r.formatters.formatYearCaption,
    c = r.labels.labelYearDropdown,
    f = [];
  if (!o) return R.jsx(R.Fragment, {});
  if (!i) return R.jsx(R.Fragment, {});
  for (var m = o.getFullYear(), h = i.getFullYear(), v = m; v <= h; v++)
    f.push(qm(AC(new Date()), v));
  var x = function (y) {
      var b = qm(pt(n), Number(y.target.value));
      e.onChange(b);
    },
    g = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : j1;
  return R.jsx(g, {
    name: 'years',
    'aria-label': c(),
    className: s.dropdown_year,
    style: l.dropdown_year,
    onChange: x,
    value: n.getFullYear(),
    caption: d(n, { locale: a }),
    children: f.map(function (y) {
      return R.jsx(
        'option',
        { value: y.getFullYear(), children: d(y, { locale: a }) },
        y.getFullYear(),
      );
    }),
  });
}
function RE(e, t) {
  var n = p.useState(e),
    r = n[0],
    o = n[1],
    i = t === void 0 ? r : t;
  return [i, o];
}
function ME(e) {
  var t = e.month,
    n = e.defaultMonth,
    r = e.today,
    o = t || n || r || new Date(),
    i = e.toDate,
    a = e.fromDate,
    l = e.numberOfMonths,
    s = l === void 0 ? 1 : l;
  if (i && Ai(i, o) < 0) {
    var u = -1 * (s - 1);
    o = Qt(i, u);
  }
  return a && Ai(o, a) < 0 && (o = a), pt(o);
}
function DE() {
  var e = xe(),
    t = ME(e),
    n = RE(t, e.month),
    r = n[0],
    o = n[1],
    i = function (a) {
      var l;
      if (!e.disableNavigation) {
        var s = pt(a);
        o(s), (l = e.onMonthChange) === null || l === void 0 || l.call(e, s);
      }
    };
  return [r, i];
}
function LE(e, t) {
  for (
    var n = t.reverseMonths,
      r = t.numberOfMonths,
      o = pt(e),
      i = pt(Qt(o, r)),
      a = Ai(i, o),
      l = [],
      s = 0;
    s < a;
    s++
  ) {
    var u = Qt(o, s);
    l.push(u);
  }
  return n && (l = l.reverse()), l;
}
function AE(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate,
      r = t.pagedNavigation,
      o = t.numberOfMonths,
      i = o === void 0 ? 1 : o,
      a = r ? i : 1,
      l = pt(e);
    if (!n) return Qt(l, a);
    var s = Ai(n, e);
    if (!(s < i)) return Qt(l, a);
  }
}
function IE(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate,
      r = t.pagedNavigation,
      o = t.numberOfMonths,
      i = o === void 0 ? 1 : o,
      a = r ? i : 1,
      l = pt(e);
    if (!n) return Qt(l, -a);
    var s = Ai(l, n);
    if (!(s <= 0)) return Qt(l, -a);
  }
}
var z1 = p.createContext(void 0);
function FE(e) {
  var t = xe(),
    n = DE(),
    r = n[0],
    o = n[1],
    i = LE(r, t),
    a = AE(r, t),
    l = IE(r, t),
    s = function (c) {
      return i.some(function (f) {
        return kf(c, f);
      });
    },
    u = function (c, f) {
      s(c) || (f && R1(c, f) ? o(Qt(c, 1 + t.numberOfMonths * -1)) : o(c));
    },
    d = {
      currentMonth: r,
      displayMonths: i,
      goToMonth: o,
      goToDate: u,
      previousMonth: l,
      nextMonth: a,
      isDateDisplayed: s,
    };
  return R.jsx(z1.Provider, { value: d, children: e.children });
}
function ta() {
  var e = p.useContext(z1);
  if (!e)
    throw new Error('useNavigation must be used within a NavigationProvider');
  return e;
}
function eh(e) {
  var t,
    n = xe(),
    r = n.classNames,
    o = n.styles,
    i = n.components,
    a = ta().goToMonth,
    l = function (d) {
      a(Qt(d, e.displayIndex ? -e.displayIndex : 0));
    },
    s =
      (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0
        ? t
        : F1,
    u = R.jsx(s, { id: e.id, displayMonth: e.displayMonth });
  return R.jsxs('div', {
    className: r.caption_dropdowns,
    style: o.caption_dropdowns,
    children: [
      R.jsx('div', { className: r.vhidden, children: u }),
      R.jsx(OE, { onChange: l, displayMonth: e.displayMonth }),
      R.jsx(TE, { onChange: l, displayMonth: e.displayMonth }),
    ],
  });
}
function jE(e) {
  return R.jsx(
    'svg',
    J({ width: '16px', height: '16px', viewBox: '0 0 120 120' }, e, {
      children: R.jsx('path', {
        d: 'M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z',
        fill: 'currentColor',
        fillRule: 'nonzero',
      }),
    }),
  );
}
function zE(e) {
  return R.jsx(
    'svg',
    J({ width: '16px', height: '16px', viewBox: '0 0 120 120' }, e, {
      children: R.jsx('path', {
        d: 'M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z',
        fill: 'currentColor',
      }),
    }),
  );
}
var Ll = p.forwardRef(function (e, t) {
  var n = xe(),
    r = n.classNames,
    o = n.styles,
    i = [r.button_reset, r.button];
  e.className && i.push(e.className);
  var a = i.join(' '),
    l = J(J({}, o.button_reset), o.button);
  return (
    e.style && Object.assign(l, e.style),
    R.jsx(
      'button',
      J({}, e, { ref: t, type: 'button', className: a, style: l }),
    )
  );
});
function WE(e) {
  var t,
    n,
    r = xe(),
    o = r.dir,
    i = r.locale,
    a = r.classNames,
    l = r.styles,
    s = r.labels,
    u = s.labelPrevious,
    d = s.labelNext,
    c = r.components;
  if (!e.nextMonth && !e.previousMonth) return R.jsx(R.Fragment, {});
  var f = u(e.previousMonth, { locale: i }),
    m = [a.nav_button, a.nav_button_previous].join(' '),
    h = d(e.nextMonth, { locale: i }),
    v = [a.nav_button, a.nav_button_next].join(' '),
    x =
      (t = c == null ? void 0 : c.IconRight) !== null && t !== void 0 ? t : zE,
    g = (n = c == null ? void 0 : c.IconLeft) !== null && n !== void 0 ? n : jE;
  return R.jsxs('div', {
    className: a.nav,
    style: l.nav,
    children: [
      !e.hidePrevious &&
        R.jsx(Ll, {
          name: 'previous-month',
          'aria-label': f,
          className: m,
          style: l.nav_button_previous,
          disabled: !e.previousMonth,
          onClick: e.onPreviousClick,
          children:
            o === 'rtl'
              ? R.jsx(x, { className: a.nav_icon, style: l.nav_icon })
              : R.jsx(g, { className: a.nav_icon, style: l.nav_icon }),
        }),
      !e.hideNext &&
        R.jsx(Ll, {
          name: 'next-month',
          'aria-label': h,
          className: v,
          style: l.nav_button_next,
          disabled: !e.nextMonth,
          onClick: e.onNextClick,
          children:
            o === 'rtl'
              ? R.jsx(g, { className: a.nav_icon, style: l.nav_icon })
              : R.jsx(x, { className: a.nav_icon, style: l.nav_icon }),
        }),
    ],
  });
}
function th(e) {
  var t = xe().numberOfMonths,
    n = ta(),
    r = n.previousMonth,
    o = n.nextMonth,
    i = n.goToMonth,
    a = n.displayMonths,
    l = a.findIndex(function (h) {
      return kf(e.displayMonth, h);
    }),
    s = l === 0,
    u = l === a.length - 1,
    d = t > 1 && (s || !u),
    c = t > 1 && (u || !s),
    f = function () {
      r && i(r);
    },
    m = function () {
      o && i(o);
    };
  return R.jsx(WE, {
    displayMonth: e.displayMonth,
    hideNext: d,
    hidePrevious: c,
    nextMonth: o,
    previousMonth: r,
    onPreviousClick: f,
    onNextClick: m,
  });
}
function BE(e) {
  var t,
    n = xe(),
    r = n.classNames,
    o = n.disableNavigation,
    i = n.styles,
    a = n.captionLayout,
    l = n.components,
    s =
      (t = l == null ? void 0 : l.CaptionLabel) !== null && t !== void 0
        ? t
        : F1,
    u;
  return (
    o
      ? (u = R.jsx(s, { id: e.id, displayMonth: e.displayMonth }))
      : a === 'dropdown'
        ? (u = R.jsx(eh, { displayMonth: e.displayMonth, id: e.id }))
        : a === 'dropdown-buttons'
          ? (u = R.jsxs(R.Fragment, {
              children: [
                R.jsx(eh, {
                  displayMonth: e.displayMonth,
                  displayIndex: e.displayIndex,
                  id: e.id,
                }),
                R.jsx(th, {
                  displayMonth: e.displayMonth,
                  displayIndex: e.displayIndex,
                  id: e.id,
                }),
              ],
            }))
          : (u = R.jsxs(R.Fragment, {
              children: [
                R.jsx(s, {
                  id: e.id,
                  displayMonth: e.displayMonth,
                  displayIndex: e.displayIndex,
                }),
                R.jsx(th, { displayMonth: e.displayMonth, id: e.id }),
              ],
            })),
    R.jsx('div', { className: r.caption, style: i.caption, children: u })
  );
}
function UE(e) {
  var t = xe(),
    n = t.footer,
    r = t.styles,
    o = t.classNames.tfoot;
  return n
    ? R.jsx('tfoot', {
        className: o,
        style: r.tfoot,
        children: R.jsx('tr', {
          children: R.jsx('td', { colSpan: 8, children: n }),
        }),
      })
    : R.jsx(R.Fragment, {});
}
function HE(e, t, n) {
  for (
    var r = n ? Pr(new Date()) : on(new Date(), { locale: e, weekStartsOn: t }),
      o = [],
      i = 0;
    i < 7;
    i++
  ) {
    var a = Je(r, i);
    o.push(a);
  }
  return o;
}
function VE() {
  var e = xe(),
    t = e.classNames,
    n = e.styles,
    r = e.showWeekNumber,
    o = e.locale,
    i = e.weekStartsOn,
    a = e.ISOWeek,
    l = e.formatters.formatWeekdayName,
    s = e.labels.labelWeekday,
    u = HE(o, i, a);
  return R.jsxs('tr', {
    style: n.head_row,
    className: t.head_row,
    children: [
      r && R.jsx('td', { style: n.head_cell, className: t.head_cell }),
      u.map(function (d, c) {
        return R.jsx(
          'th',
          {
            scope: 'col',
            className: t.head_cell,
            style: n.head_cell,
            'aria-label': s(d, { locale: o }),
            children: l(d, { locale: o }),
          },
          c,
        );
      }),
    ],
  });
}
function YE() {
  var e,
    t = xe(),
    n = t.classNames,
    r = t.styles,
    o = t.components,
    i = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : VE;
  return R.jsx('thead', {
    style: r.head,
    className: n.head,
    children: R.jsx(i, {}),
  });
}
function GE(e) {
  var t = xe(),
    n = t.locale,
    r = t.formatters.formatDay;
  return R.jsx(R.Fragment, { children: r(e.date, { locale: n }) });
}
var Ef = p.createContext(void 0);
function QE(e) {
  if (!Zi(e.initialProps)) {
    var t = { selected: void 0, modifiers: { disabled: [] } };
    return R.jsx(Ef.Provider, { value: t, children: e.children });
  }
  return R.jsx(KE, { initialProps: e.initialProps, children: e.children });
}
function KE(e) {
  var t = e.initialProps,
    n = e.children,
    r = t.selected,
    o = t.min,
    i = t.max,
    a = function (u, d, c) {
      var f, m;
      (f = t.onDayClick) === null || f === void 0 || f.call(t, u, d, c);
      var h = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
      if (!h) {
        var v = !!(!d.selected && i && (r == null ? void 0 : r.length) === i);
        if (!v) {
          var x = r ? L1([], r, !0) : [];
          if (d.selected) {
            var g = x.findIndex(function (y) {
              return ut(u, y);
            });
            x.splice(g, 1);
          } else x.push(u);
          (m = t.onSelect) === null || m === void 0 || m.call(t, x, u, d, c);
        }
      }
    },
    l = { disabled: [] };
  r &&
    l.disabled.push(function (u) {
      var d = i && r.length > i - 1,
        c = r.some(function (f) {
          return ut(f, u);
        });
      return !!(d && !c);
    });
  var s = { selected: r, onDayClick: a, modifiers: l };
  return R.jsx(Ef.Provider, { value: s, children: n });
}
function Nf() {
  var e = p.useContext(Ef);
  if (!e)
    throw new Error(
      'useSelectMultiple must be used within a SelectMultipleProvider',
    );
  return e;
}
function XE(e, t) {
  var n = t || {},
    r = n.from,
    o = n.to;
  return r && o
    ? ut(o, e) && ut(r, e)
      ? void 0
      : ut(o, e)
        ? { from: o, to: void 0 }
        : ut(r, e)
          ? void 0
          : Jc(r, e)
            ? { from: e, to: o }
            : { from: r, to: e }
    : o
      ? Jc(e, o)
        ? { from: o, to: e }
        : { from: e, to: o }
      : r
        ? R1(e, r)
          ? { from: e, to: r }
          : { from: r, to: e }
        : { from: e, to: void 0 };
}
var _f = p.createContext(void 0);
function qE(e) {
  if (!ea(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: [],
      },
    };
    return R.jsx(_f.Provider, { value: t, children: e.children });
  }
  return R.jsx(JE, { initialProps: e.initialProps, children: e.children });
}
function JE(e) {
  var t = e.initialProps,
    n = e.children,
    r = t.selected,
    o = r || {},
    i = o.from,
    a = o.to,
    l = t.min,
    s = t.max,
    u = function (m, h, v) {
      var x, g;
      (x = t.onDayClick) === null || x === void 0 || x.call(t, m, h, v);
      var y = XE(m, r);
      (g = t.onSelect) === null || g === void 0 || g.call(t, y, m, h, v);
    },
    d = { range_start: [], range_end: [], range_middle: [], disabled: [] };
  if (
    (i
      ? ((d.range_start = [i]),
        a
          ? ((d.range_end = [a]),
            ut(i, a) || (d.range_middle = [{ after: i, before: a }]))
          : (d.range_end = [i]))
      : a && ((d.range_start = [a]), (d.range_end = [a])),
    l &&
      (i &&
        !a &&
        d.disabled.push({ after: Pu(i, l - 1), before: Je(i, l - 1) }),
      i && a && d.disabled.push({ after: i, before: Je(i, l - 1) }),
      !i &&
        a &&
        d.disabled.push({ after: Pu(a, l - 1), before: Je(a, l - 1) })),
    s)
  ) {
    if (
      (i &&
        !a &&
        (d.disabled.push({ before: Je(i, -s + 1) }),
        d.disabled.push({ after: Je(i, s - 1) })),
      i && a)
    ) {
      var c = Ht(a, i) + 1,
        f = s - c;
      d.disabled.push({ before: Pu(i, f) }),
        d.disabled.push({ after: Je(a, f) });
    }
    !i &&
      a &&
      (d.disabled.push({ before: Je(a, -s + 1) }),
      d.disabled.push({ after: Je(a, s - 1) }));
  }
  return R.jsx(_f.Provider, {
    value: { selected: r, onDayClick: u, modifiers: d },
    children: n,
  });
}
function Pf() {
  var e = p.useContext(_f);
  if (!e)
    throw new Error('useSelectRange must be used within a SelectRangeProvider');
  return e;
}
function Za(e) {
  return Array.isArray(e) ? L1([], e, !0) : e !== void 0 ? [e] : [];
}
function ZE(e) {
  var t = {};
  return (
    Object.entries(e).forEach(function (n) {
      var r = n[0],
        o = n[1];
      t[r] = Za(o);
    }),
    t
  );
}
var Kt;
(function (e) {
  (e.Outside = 'outside'),
    (e.Disabled = 'disabled'),
    (e.Selected = 'selected'),
    (e.Hidden = 'hidden'),
    (e.Today = 'today'),
    (e.RangeStart = 'range_start'),
    (e.RangeEnd = 'range_end'),
    (e.RangeMiddle = 'range_middle');
})(Kt || (Kt = {}));
var e6 = Kt.Selected,
  fn = Kt.Disabled,
  t6 = Kt.Hidden,
  n6 = Kt.Today,
  Ou = Kt.RangeEnd,
  Tu = Kt.RangeMiddle,
  Ru = Kt.RangeStart,
  r6 = Kt.Outside;
function o6(e, t, n) {
  var r,
    o =
      ((r = {}),
      (r[e6] = Za(e.selected)),
      (r[fn] = Za(e.disabled)),
      (r[t6] = Za(e.hidden)),
      (r[n6] = [e.today]),
      (r[Ou] = []),
      (r[Tu] = []),
      (r[Ru] = []),
      (r[r6] = []),
      r);
  return (
    e.fromDate && o[fn].push({ before: e.fromDate }),
    e.toDate && o[fn].push({ after: e.toDate }),
    Zi(e)
      ? (o[fn] = o[fn].concat(t.modifiers[fn]))
      : ea(e) &&
        ((o[fn] = o[fn].concat(n.modifiers[fn])),
        (o[Ru] = n.modifiers[Ru]),
        (o[Tu] = n.modifiers[Tu]),
        (o[Ou] = n.modifiers[Ou])),
    o
  );
}
var W1 = p.createContext(void 0);
function i6(e) {
  var t = xe(),
    n = Nf(),
    r = Pf(),
    o = o6(t, n, r),
    i = ZE(t.modifiers),
    a = J(J({}, o), i);
  return R.jsx(W1.Provider, { value: a, children: e.children });
}
function B1() {
  var e = p.useContext(W1);
  if (!e)
    throw new Error('useModifiers must be used within a ModifiersProvider');
  return e;
}
function a6(e) {
  return !!(e && typeof e == 'object' && 'before' in e && 'after' in e);
}
function l6(e) {
  return !!(e && typeof e == 'object' && 'from' in e);
}
function s6(e) {
  return !!(e && typeof e == 'object' && 'after' in e);
}
function u6(e) {
  return !!(e && typeof e == 'object' && 'before' in e);
}
function c6(e) {
  return !!(e && typeof e == 'object' && 'dayOfWeek' in e);
}
function d6(e, t) {
  var n,
    r = t.from,
    o = t.to;
  if (r && o) {
    var i = Ht(o, r) < 0;
    i && ((n = [o, r]), (r = n[0]), (o = n[1]));
    var a = Ht(e, r) >= 0 && Ht(o, e) >= 0;
    return a;
  }
  return o ? ut(o, e) : r ? ut(r, e) : !1;
}
function f6(e) {
  return bf(e);
}
function p6(e) {
  return Array.isArray(e) && e.every(bf);
}
function m6(e, t) {
  return t.some(function (n) {
    if (typeof n == 'boolean') return n;
    if (f6(n)) return ut(e, n);
    if (p6(n)) return n.includes(e);
    if (l6(n)) return d6(e, n);
    if (c6(n)) return n.dayOfWeek.includes(e.getDay());
    if (a6(n)) {
      var r = Ht(n.before, e),
        o = Ht(n.after, e),
        i = r > 0,
        a = o < 0,
        l = Jc(n.before, n.after);
      return l ? a && i : i || a;
    }
    return s6(n)
      ? Ht(e, n.after) > 0
      : u6(n)
        ? Ht(n.before, e) > 0
        : typeof n == 'function'
          ? n(e)
          : !1;
  });
}
function $f(e, t, n) {
  var r = Object.keys(t).reduce(function (i, a) {
      var l = t[a];
      return m6(e, l) && i.push(a), i;
    }, []),
    o = {};
  return (
    r.forEach(function (i) {
      return (o[i] = !0);
    }),
    n && !kf(e, n) && (o.outside = !0),
    o
  );
}
function h6(e, t) {
  for (var n = pt(e[0]), r = Sf(e[e.length - 1]), o, i, a = n; a <= r; ) {
    var l = $f(a, t),
      s = !l.disabled && !l.hidden;
    if (!s) {
      a = Je(a, 1);
      continue;
    }
    if (l.selected) return a;
    l.today && !i && (i = a), o || (o = a), (a = Je(a, 1));
  }
  return i || o;
}
var v6 = 365;
function U1(e, t) {
  var n = t.moveBy,
    r = t.direction,
    o = t.context,
    i = t.modifiers,
    a = t.retry,
    l = a === void 0 ? { count: 0, lastFocused: e } : a,
    s = o.weekStartsOn,
    u = o.fromDate,
    d = o.toDate,
    c = o.locale,
    f = {
      day: Je,
      week: qc,
      month: Qt,
      year: $C,
      startOfWeek: function (x) {
        return o.ISOWeek ? Pr(x) : on(x, { locale: c, weekStartsOn: s });
      },
      endOfWeek: function (x) {
        return o.ISOWeek ? _1(x) : Cf(x, { locale: c, weekStartsOn: s });
      },
    },
    m = f[n](e, r === 'after' ? 1 : -1);
  r === 'before' && u
    ? (m = OC([u, m]))
    : r === 'after' && d && (m = TC([d, m]));
  var h = !0;
  if (i) {
    var v = $f(m, i);
    h = !v.disabled && !v.hidden;
  }
  return h
    ? m
    : l.count > v6
      ? l.lastFocused
      : U1(m, {
          moveBy: n,
          direction: r,
          context: o,
          modifiers: i,
          retry: J(J({}, l), { count: l.count + 1 }),
        });
}
var H1 = p.createContext(void 0);
function g6(e) {
  var t = ta(),
    n = B1(),
    r = p.useState(),
    o = r[0],
    i = r[1],
    a = p.useState(),
    l = a[0],
    s = a[1],
    u = h6(t.displayMonths, n),
    d = o ?? (l && t.isDateDisplayed(l)) ? l : u,
    c = function () {
      s(o), i(void 0);
    },
    f = function (x) {
      i(x);
    },
    m = xe(),
    h = function (x, g) {
      if (o) {
        var y = U1(o, { moveBy: x, direction: g, context: m, modifiers: n });
        ut(o, y) || (t.goToDate(y, o), f(y));
      }
    },
    v = {
      focusedDay: o,
      focusTarget: d,
      blur: c,
      focus: f,
      focusDayAfter: function () {
        return h('day', 'after');
      },
      focusDayBefore: function () {
        return h('day', 'before');
      },
      focusWeekAfter: function () {
        return h('week', 'after');
      },
      focusWeekBefore: function () {
        return h('week', 'before');
      },
      focusMonthBefore: function () {
        return h('month', 'before');
      },
      focusMonthAfter: function () {
        return h('month', 'after');
      },
      focusYearBefore: function () {
        return h('year', 'before');
      },
      focusYearAfter: function () {
        return h('year', 'after');
      },
      focusStartOfWeek: function () {
        return h('startOfWeek', 'before');
      },
      focusEndOfWeek: function () {
        return h('endOfWeek', 'after');
      },
    };
  return R.jsx(H1.Provider, { value: v, children: e.children });
}
function Of() {
  var e = p.useContext(H1);
  if (!e)
    throw new Error('useFocusContext must be used within a FocusProvider');
  return e;
}
function y6(e, t) {
  var n = B1(),
    r = $f(e, n, t);
  return r;
}
var Tf = p.createContext(void 0);
function w6(e) {
  if (!Ms(e.initialProps)) {
    var t = { selected: void 0 };
    return R.jsx(Tf.Provider, { value: t, children: e.children });
  }
  return R.jsx(x6, { initialProps: e.initialProps, children: e.children });
}
function x6(e) {
  var t = e.initialProps,
    n = e.children,
    r = function (i, a, l) {
      var s, u, d;
      if (
        ((s = t.onDayClick) === null || s === void 0 || s.call(t, i, a, l),
        a.selected && !t.required)
      ) {
        (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, i, a, l);
        return;
      }
      (d = t.onSelect) === null || d === void 0 || d.call(t, i, i, a, l);
    },
    o = { selected: t.selected, onDayClick: r };
  return R.jsx(Tf.Provider, { value: o, children: n });
}
function V1() {
  var e = p.useContext(Tf);
  if (!e)
    throw new Error(
      'useSelectSingle must be used within a SelectSingleProvider',
    );
  return e;
}
function b6(e, t) {
  var n = xe(),
    r = V1(),
    o = Nf(),
    i = Pf(),
    a = Of(),
    l = a.focusDayAfter,
    s = a.focusDayBefore,
    u = a.focusWeekAfter,
    d = a.focusWeekBefore,
    c = a.blur,
    f = a.focus,
    m = a.focusMonthBefore,
    h = a.focusMonthAfter,
    v = a.focusYearBefore,
    x = a.focusYearAfter,
    g = a.focusStartOfWeek,
    y = a.focusEndOfWeek,
    b = function (T) {
      var k, W, G, ne;
      Ms(n)
        ? (k = r.onDayClick) === null || k === void 0 || k.call(r, e, t, T)
        : Zi(n)
          ? (W = o.onDayClick) === null || W === void 0 || W.call(o, e, t, T)
          : ea(n)
            ? (G = i.onDayClick) === null || G === void 0 || G.call(i, e, t, T)
            : (ne = n.onDayClick) === null ||
              ne === void 0 ||
              ne.call(n, e, t, T);
    },
    S = function (T) {
      var k;
      f(e), (k = n.onDayFocus) === null || k === void 0 || k.call(n, e, t, T);
    },
    C = function (T) {
      var k;
      c(), (k = n.onDayBlur) === null || k === void 0 || k.call(n, e, t, T);
    },
    N = function (T) {
      var k;
      (k = n.onDayMouseEnter) === null || k === void 0 || k.call(n, e, t, T);
    },
    P = function (T) {
      var k;
      (k = n.onDayMouseLeave) === null || k === void 0 || k.call(n, e, t, T);
    },
    E = function (T) {
      var k;
      (k = n.onDayPointerEnter) === null || k === void 0 || k.call(n, e, t, T);
    },
    I = function (T) {
      var k;
      (k = n.onDayPointerLeave) === null || k === void 0 || k.call(n, e, t, T);
    },
    L = function (T) {
      var k;
      (k = n.onDayTouchCancel) === null || k === void 0 || k.call(n, e, t, T);
    },
    Y = function (T) {
      var k;
      (k = n.onDayTouchEnd) === null || k === void 0 || k.call(n, e, t, T);
    },
    D = function (T) {
      var k;
      (k = n.onDayTouchMove) === null || k === void 0 || k.call(n, e, t, T);
    },
    K = function (T) {
      var k;
      (k = n.onDayTouchStart) === null || k === void 0 || k.call(n, e, t, T);
    },
    B = function (T) {
      var k;
      (k = n.onDayKeyUp) === null || k === void 0 || k.call(n, e, t, T);
    },
    z = function (T) {
      var k;
      switch (T.key) {
        case 'ArrowLeft':
          T.preventDefault(), T.stopPropagation(), n.dir === 'rtl' ? l() : s();
          break;
        case 'ArrowRight':
          T.preventDefault(), T.stopPropagation(), n.dir === 'rtl' ? s() : l();
          break;
        case 'ArrowDown':
          T.preventDefault(), T.stopPropagation(), u();
          break;
        case 'ArrowUp':
          T.preventDefault(), T.stopPropagation(), d();
          break;
        case 'PageUp':
          T.preventDefault(), T.stopPropagation(), T.shiftKey ? v() : m();
          break;
        case 'PageDown':
          T.preventDefault(), T.stopPropagation(), T.shiftKey ? x() : h();
          break;
        case 'Home':
          T.preventDefault(), T.stopPropagation(), g();
          break;
        case 'End':
          T.preventDefault(), T.stopPropagation(), y();
          break;
      }
      (k = n.onDayKeyDown) === null || k === void 0 || k.call(n, e, t, T);
    },
    V = {
      onClick: b,
      onFocus: S,
      onBlur: C,
      onKeyDown: z,
      onKeyUp: B,
      onMouseEnter: N,
      onMouseLeave: P,
      onPointerEnter: E,
      onPointerLeave: I,
      onTouchCancel: L,
      onTouchEnd: Y,
      onTouchMove: D,
      onTouchStart: K,
    };
  return V;
}
function S6() {
  var e = xe(),
    t = V1(),
    n = Nf(),
    r = Pf(),
    o = Ms(e) ? t.selected : Zi(e) ? n.selected : ea(e) ? r.selected : void 0;
  return o;
}
function C6(e) {
  return Object.values(Kt).includes(e);
}
function k6(e, t) {
  var n = [e.classNames.day];
  return (
    Object.keys(t).forEach(function (r) {
      var o = e.modifiersClassNames[r];
      if (o) n.push(o);
      else if (C6(r)) {
        var i = e.classNames['day_'.concat(r)];
        i && n.push(i);
      }
    }),
    n
  );
}
function E6(e, t) {
  var n = J({}, e.styles.day);
  return (
    Object.keys(t).forEach(function (r) {
      var o;
      n = J(
        J({}, n),
        (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r],
      );
    }),
    n
  );
}
function N6(e, t, n) {
  var r,
    o,
    i,
    a = xe(),
    l = Of(),
    s = y6(e, t),
    u = b6(e, s),
    d = S6(),
    c = !!(a.onDayClick || a.mode !== 'default');
  p.useEffect(
    function () {
      var N;
      s.outside ||
        (l.focusedDay &&
          c &&
          ut(l.focusedDay, e) &&
          ((N = n.current) === null || N === void 0 || N.focus()));
    },
    [l.focusedDay, e, n, c, s.outside],
  );
  var f = k6(a, s).join(' '),
    m = E6(a, s),
    h = !!((s.outside && !a.showOutsideDays) || s.hidden),
    v =
      (i =
        (o = a.components) === null || o === void 0 ? void 0 : o.DayContent) !==
        null && i !== void 0
        ? i
        : GE,
    x = R.jsx(v, { date: e, displayMonth: t, activeModifiers: s }),
    g = { style: m, className: f, children: x, role: 'gridcell' },
    y = l.focusTarget && ut(l.focusTarget, e) && !s.outside,
    b = l.focusedDay && ut(l.focusedDay, e),
    S = J(
      J(
        J({}, g),
        ((r = { disabled: s.disabled, role: 'gridcell' }),
        (r['aria-selected'] = s.selected),
        (r.tabIndex = b || y ? 0 : -1),
        r),
      ),
      u,
    ),
    C = {
      isButton: c,
      isHidden: h,
      activeModifiers: s,
      selectedDays: d,
      buttonProps: S,
      divProps: g,
    };
  return C;
}
function _6(e) {
  var t = p.useRef(null),
    n = N6(e.date, e.displayMonth, t);
  return n.isHidden
    ? R.jsx('div', { role: 'gridcell' })
    : n.isButton
      ? R.jsx(Ll, J({ name: 'day', ref: t }, n.buttonProps))
      : R.jsx('div', J({}, n.divProps));
}
function P6(e) {
  var t = e.number,
    n = e.dates,
    r = xe(),
    o = r.onWeekNumberClick,
    i = r.styles,
    a = r.classNames,
    l = r.locale,
    s = r.labels.labelWeekNumber,
    u = r.formatters.formatWeekNumber,
    d = u(Number(t), { locale: l });
  if (!o)
    return R.jsx('span', {
      className: a.weeknumber,
      style: i.weeknumber,
      children: d,
    });
  var c = s(Number(t), { locale: l }),
    f = function (m) {
      o(t, n, m);
    };
  return R.jsx(Ll, {
    name: 'week-number',
    'aria-label': c,
    className: a.weeknumber,
    style: i.weeknumber,
    onClick: f,
    children: d,
  });
}
function $6(e) {
  var t,
    n,
    r = xe(),
    o = r.styles,
    i = r.classNames,
    a = r.showWeekNumber,
    l = r.components,
    s = (t = l == null ? void 0 : l.Day) !== null && t !== void 0 ? t : _6,
    u =
      (n = l == null ? void 0 : l.WeekNumber) !== null && n !== void 0 ? n : P6,
    d;
  return (
    a &&
      (d = R.jsx('td', {
        className: i.cell,
        style: o.cell,
        children: R.jsx(u, { number: e.weekNumber, dates: e.dates }),
      })),
    R.jsxs('tr', {
      className: i.row,
      style: o.row,
      children: [
        d,
        e.dates.map(function (c) {
          return R.jsx(
            'td',
            {
              className: i.cell,
              style: o.cell,
              role: 'presentation',
              children: R.jsx(s, { displayMonth: e.displayMonth, date: c }),
            },
            Xk(c),
          );
        }),
      ],
    })
  );
}
function nh(e, t, n) {
  for (
    var r = n != null && n.ISOWeek ? _1(t) : Cf(t, n),
      o = n != null && n.ISOWeek ? Pr(e) : on(e, n),
      i = Ht(r, o),
      a = [],
      l = 0;
    l <= i;
    l++
  )
    a.push(Je(o, l));
  var s = a.reduce(function (u, d) {
    var c = n != null && n.ISOWeek ? Qk(d) : eE(d, n),
      f = u.find(function (m) {
        return m.weekNumber === c;
      });
    return f
      ? (f.dates.push(d), u)
      : (u.push({ weekNumber: c, dates: [d] }), u);
  }, []);
  return s;
}
function O6(e, t) {
  var n = nh(pt(e), Sf(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = nE(e, t);
    if (r < 6) {
      var o = n[n.length - 1],
        i = o.dates[o.dates.length - 1],
        a = qc(i, 6 - r),
        l = nh(qc(i, 1), a, t);
      n.push.apply(n, l);
    }
  }
  return n;
}
function T6(e) {
  var t,
    n,
    r,
    o = xe(),
    i = o.locale,
    a = o.classNames,
    l = o.styles,
    s = o.hideHead,
    u = o.fixedWeeks,
    d = o.components,
    c = o.weekStartsOn,
    f = o.firstWeekContainsDate,
    m = o.ISOWeek,
    h = O6(e.displayMonth, {
      useFixedWeeks: !!u,
      ISOWeek: m,
      locale: i,
      weekStartsOn: c,
      firstWeekContainsDate: f,
    }),
    v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : YE,
    x = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : $6,
    g = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : UE;
  return R.jsxs('table', {
    id: e.id,
    className: a.table,
    style: l.table,
    role: 'grid',
    'aria-labelledby': e['aria-labelledby'],
    children: [
      !s && R.jsx(v, {}),
      R.jsx('tbody', {
        className: a.tbody,
        style: l.tbody,
        children: h.map(function (y) {
          return R.jsx(
            x,
            {
              displayMonth: e.displayMonth,
              dates: y.dates,
              weekNumber: y.weekNumber,
            },
            y.weekNumber,
          );
        }),
      }),
      R.jsx(g, { displayMonth: e.displayMonth }),
    ],
  });
}
function R6() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
var M6 = R6() ? p.useLayoutEffect : p.useEffect,
  Mu = !1,
  D6 = 0;
function rh() {
  return 'react-day-picker-'.concat(++D6);
}
function L6(e) {
  var t,
    n = e ?? (Mu ? rh() : null),
    r = p.useState(n),
    o = r[0],
    i = r[1];
  return (
    M6(function () {
      o === null && i(rh());
    }, []),
    p.useEffect(function () {
      Mu === !1 && (Mu = !0);
    }, []),
    (t = e ?? o) !== null && t !== void 0 ? t : void 0
  );
}
function A6(e) {
  var t,
    n,
    r = xe(),
    o = r.dir,
    i = r.classNames,
    a = r.styles,
    l = r.components,
    s = ta().displayMonths,
    u = L6(r.id ? ''.concat(r.id, '-').concat(e.displayIndex) : void 0),
    d = r.id ? ''.concat(r.id, '-grid-').concat(e.displayIndex) : void 0,
    c = [i.month],
    f = a.month,
    m = e.displayIndex === 0,
    h = e.displayIndex === s.length - 1,
    v = !m && !h;
  o === 'rtl' && ((t = [m, h]), (h = t[0]), (m = t[1])),
    m && (c.push(i.caption_start), (f = J(J({}, f), a.caption_start))),
    h && (c.push(i.caption_end), (f = J(J({}, f), a.caption_end))),
    v && (c.push(i.caption_between), (f = J(J({}, f), a.caption_between)));
  var x =
    (n = l == null ? void 0 : l.Caption) !== null && n !== void 0 ? n : BE;
  return R.jsxs(
    'div',
    {
      className: c.join(' '),
      style: f,
      children: [
        R.jsx(x, {
          id: u,
          displayMonth: e.displayMonth,
          displayIndex: e.displayIndex,
        }),
        R.jsx(T6, {
          id: d,
          'aria-labelledby': u,
          displayMonth: e.displayMonth,
        }),
      ],
    },
    e.displayIndex,
  );
}
function I6(e) {
  var t = xe(),
    n = t.classNames,
    r = t.styles;
  return R.jsx('div', {
    className: n.months,
    style: r.months,
    children: e.children,
  });
}
function F6(e) {
  var t,
    n,
    r = e.initialProps,
    o = xe(),
    i = Of(),
    a = ta(),
    l = p.useState(!1),
    s = l[0],
    u = l[1];
  p.useEffect(
    function () {
      o.initialFocus && i.focusTarget && (s || (i.focus(i.focusTarget), u(!0)));
    },
    [o.initialFocus, s, i.focus, i.focusTarget, i],
  );
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months),
    o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var c = J(J({}, o.styles.root), o.style),
    f = Object.keys(r)
      .filter(function (h) {
        return h.startsWith('data-');
      })
      .reduce(function (h, v) {
        var x;
        return J(J({}, h), ((x = {}), (x[v] = r[v]), x));
      }, {}),
    m =
      (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !==
        null && n !== void 0
        ? n
        : I6;
  return R.jsx(
    'div',
    J(
      {
        className: d.join(' '),
        style: c,
        dir: o.dir,
        id: o.id,
        nonce: r.nonce,
        title: r.title,
        lang: r.lang,
      },
      f,
      {
        children: R.jsx(m, {
          children: a.displayMonths.map(function (h, v) {
            return R.jsx(A6, { displayIndex: v, displayMonth: h }, v);
          }),
        }),
      },
    ),
  );
}
function j6(e) {
  var t = e.children,
    n = sE(e, ['children']);
  return R.jsx(PE, {
    initialProps: n,
    children: R.jsx(FE, {
      children: R.jsx(w6, {
        initialProps: n,
        children: R.jsx(QE, {
          initialProps: n,
          children: R.jsx(qE, {
            initialProps: n,
            children: R.jsx(i6, { children: R.jsx(g6, { children: t }) }),
          }),
        }),
      }),
    }),
  });
}
function z6(e) {
  return R.jsx(j6, J({}, e, { children: R.jsx(F6, { initialProps: e }) }));
}
function Y1({ className: e, classNames: t, ...n }) {
  return w(z6, {
    className: Ue('p-3', e),
    classNames: {
      months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
      month: 'space-y-4',
      caption: 'flex justify-center pt-1 relative items-center',
      caption_label: 'text-sm font-medium',
      nav: 'space-x-1 flex items-center',
      nav_button: Ue(
        Gc({ variant: 'outline' }),
        'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      ),
      nav_button_previous: 'absolute left-1',
      nav_button_next: 'absolute right-1',
      table: 'w-full border-collapse space-y-1',
      head_row: 'flex',
      head_cell:
        'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
      row: 'flex w-full mt-2',
      cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
      day: Ue(
        Gc({ variant: 'ghost' }),
        'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
      ),
      day_selected:
        'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
      day_outside: 'text-muted-foreground opacity-50',
      day_disabled: 'text-muted-foreground opacity-50',
      day_range_middle:
        'aria-selected:bg-accent aria-selected:text-accent-foreground',
      day_hidden: 'invisible',
      ...t,
    },
    components: {
      IconLeft: ({ ...r }) => w(B3, { className: 'h-4 w-4' }),
      IconRight: ({ ...r }) => w(U3, { className: 'h-4 w-4' }),
    },
    ...n,
    required: !0,
  });
}
Y1.displayName = 'Calendar';
const W6 = ['top', 'right', 'bottom', 'left'],
  rr = Math.min,
  vt = Math.max,
  Al = Math.round,
  Oa = Math.floor,
  or = (e) => ({ x: e, y: e }),
  B6 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  U6 = { start: 'end', end: 'start' };
function Zc(e, t, n) {
  return vt(e, rr(t, n));
}
function En(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Nn(e) {
  return e.split('-')[0];
}
function Oo(e) {
  return e.split('-')[1];
}
function Rf(e) {
  return e === 'x' ? 'y' : 'x';
}
function Mf(e) {
  return e === 'y' ? 'height' : 'width';
}
function To(e) {
  return ['top', 'bottom'].includes(Nn(e)) ? 'y' : 'x';
}
function Df(e) {
  return Rf(To(e));
}
function H6(e, t, n) {
  n === void 0 && (n = !1);
  const r = Oo(e),
    o = Df(e),
    i = Mf(o);
  let a =
    o === 'x'
      ? r === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : r === 'start'
        ? 'bottom'
        : 'top';
  return t.reference[i] > t.floating[i] && (a = Il(a)), [a, Il(a)];
}
function V6(e) {
  const t = Il(e);
  return [ed(e), t, ed(t)];
}
function ed(e) {
  return e.replace(/start|end/g, (t) => U6[t]);
}
function Y6(e, t, n) {
  const r = ['left', 'right'],
    o = ['right', 'left'],
    i = ['top', 'bottom'],
    a = ['bottom', 'top'];
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? o : r) : t ? r : o;
    case 'left':
    case 'right':
      return t ? i : a;
    default:
      return [];
  }
}
function G6(e, t, n, r) {
  const o = Oo(e);
  let i = Y6(Nn(e), n === 'start', r);
  return (
    o && ((i = i.map((a) => a + '-' + o)), t && (i = i.concat(i.map(ed)))), i
  );
}
function Il(e) {
  return e.replace(/left|right|bottom|top/g, (t) => B6[t]);
}
function Q6(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function G1(e) {
  return typeof e != 'number'
    ? Q6(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Fl(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function oh(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = To(t),
    a = Df(t),
    l = Mf(a),
    s = Nn(t),
    u = i === 'y',
    d = r.x + r.width / 2 - o.width / 2,
    c = r.y + r.height / 2 - o.height / 2,
    f = r[l] / 2 - o[l] / 2;
  let m;
  switch (s) {
    case 'top':
      m = { x: d, y: r.y - o.height };
      break;
    case 'bottom':
      m = { x: d, y: r.y + r.height };
      break;
    case 'right':
      m = { x: r.x + r.width, y: c };
      break;
    case 'left':
      m = { x: r.x - o.width, y: c };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (Oo(t)) {
    case 'start':
      m[a] -= f * (n && u ? -1 : 1);
      break;
    case 'end':
      m[a] += f * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const K6 = async (e, t, n) => {
  const {
      placement: r = 'bottom',
      strategy: o = 'absolute',
      middleware: i = [],
      platform: a,
    } = n,
    l = i.filter(Boolean),
    s = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: c } = oh(u, r, s),
    f = r,
    m = {},
    h = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: x, fn: g } = l[v],
      {
        x: y,
        y: b,
        data: S,
        reset: C,
      } = await g({
        x: d,
        y: c,
        initialPlacement: r,
        placement: f,
        strategy: o,
        middlewareData: m,
        rects: u,
        platform: a,
        elements: { reference: e, floating: t },
      });
    (d = y ?? d),
      (c = b ?? c),
      (m = { ...m, [x]: { ...m[x], ...S } }),
      C &&
        h <= 50 &&
        (h++,
        typeof C == 'object' &&
          (C.placement && (f = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: d, y: c } = oh(u, f, s))),
        (v = -1));
  }
  return { x: d, y: c, placement: f, strategy: o, middlewareData: m };
};
async function Ii(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: a, elements: l, strategy: s } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: d = 'viewport',
      elementContext: c = 'floating',
      altBoundary: f = !1,
      padding: m = 0,
    } = En(t, e),
    h = G1(m),
    x = l[f ? (c === 'floating' ? 'reference' : 'floating') : c],
    g = Fl(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: s,
      }),
    ),
    y = c === 'floating' ? { ...a.floating, x: r, y: o } : a.reference,
    b = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(b)))
      ? (await (i.getScale == null ? void 0 : i.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Fl(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: y,
            offsetParent: b,
            strategy: s,
          })
        : y,
    );
  return {
    top: (g.top - C.top + h.top) / S.y,
    bottom: (C.bottom - g.bottom + h.bottom) / S.y,
    left: (g.left - C.left + h.left) / S.x,
    right: (C.right - g.right + h.right) / S.x,
  };
}
const X6 = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: a,
          elements: l,
          middlewareData: s,
        } = t,
        { element: u, padding: d = 0 } = En(e, t) || {};
      if (u == null) return {};
      const c = G1(d),
        f = { x: n, y: r },
        m = Df(o),
        h = Mf(m),
        v = await a.getDimensions(u),
        x = m === 'y',
        g = x ? 'top' : 'left',
        y = x ? 'bottom' : 'right',
        b = x ? 'clientHeight' : 'clientWidth',
        S = i.reference[h] + i.reference[m] - f[m] - i.floating[h],
        C = f[m] - i.reference[m],
        N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
      let P = N ? N[b] : 0;
      (!P || !(await (a.isElement == null ? void 0 : a.isElement(N)))) &&
        (P = l.floating[b] || i.floating[h]);
      const E = S / 2 - C / 2,
        I = P / 2 - v[h] / 2 - 1,
        L = rr(c[g], I),
        Y = rr(c[y], I),
        D = L,
        K = P - v[h] - Y,
        B = P / 2 - v[h] / 2 + E,
        z = Zc(D, B, K),
        V =
          !s.arrow &&
          Oo(o) != null &&
          B !== z &&
          i.reference[h] / 2 - (B < D ? L : Y) - v[h] / 2 < 0,
        T = V ? (B < D ? B - D : B - K) : 0;
      return {
        [m]: f[m] + T,
        data: {
          [m]: z,
          centerOffset: B - z - T,
          ...(V && { alignmentOffset: T }),
        },
        reset: V,
      };
    },
  }),
  q6 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: a,
              initialPlacement: l,
              platform: s,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: c = !0,
              fallbackPlacements: f,
              fallbackStrategy: m = 'bestFit',
              fallbackAxisSideDirection: h = 'none',
              flipAlignment: v = !0,
              ...x
            } = En(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const g = Nn(o),
            y = Nn(l) === l,
            b = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
            S = f || (y || !v ? [Il(l)] : V6(l));
          !f && h !== 'none' && S.push(...G6(l, v, h, b));
          const C = [l, ...S],
            N = await Ii(t, x),
            P = [];
          let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && P.push(N[g]), c)) {
            const D = H6(o, a, b);
            P.push(N[D[0]], N[D[1]]);
          }
          if (
            ((E = [...E, { placement: o, overflows: P }]),
            !P.every((D) => D <= 0))
          ) {
            var I, L;
            const D = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1,
              K = C[D];
            if (K)
              return {
                data: { index: D, overflows: E },
                reset: { placement: K },
              };
            let B =
              (L = E.filter((z) => z.overflows[0] <= 0).sort(
                (z, V) => z.overflows[1] - V.overflows[1],
              )[0]) == null
                ? void 0
                : L.placement;
            if (!B)
              switch (m) {
                case 'bestFit': {
                  var Y;
                  const z =
                    (Y = E.map((V) => [
                      V.placement,
                      V.overflows
                        .filter((T) => T > 0)
                        .reduce((T, k) => T + k, 0),
                    ]).sort((V, T) => V[1] - T[1])[0]) == null
                      ? void 0
                      : Y[0];
                  z && (B = z);
                  break;
                }
                case 'initialPlacement':
                  B = l;
                  break;
              }
            if (o !== B) return { reset: { placement: B } };
          }
          return {};
        },
      }
    );
  };
function ih(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function ah(e) {
  return W6.some((t) => e[t] >= 0);
}
const J6 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'hide',
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = 'referenceHidden', ...o } = En(e, t);
        switch (r) {
          case 'referenceHidden': {
            const i = await Ii(t, { ...o, elementContext: 'reference' }),
              a = ih(i, n.reference);
            return {
              data: { referenceHiddenOffsets: a, referenceHidden: ah(a) },
            };
          }
          case 'escaped': {
            const i = await Ii(t, { ...o, altBoundary: !0 }),
              a = ih(i, n.floating);
            return { data: { escapedOffsets: a, escaped: ah(a) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Z6(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    a = Nn(n),
    l = Oo(n),
    s = To(n) === 'y',
    u = ['left', 'top'].includes(a) ? -1 : 1,
    d = i && s ? -1 : 1,
    c = En(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: h,
  } = typeof c == 'number'
    ? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...c };
  return (
    l && typeof h == 'number' && (m = l === 'end' ? h * -1 : h),
    s ? { x: m * d, y: f * u } : { x: f * u, y: m * d }
  );
}
const eN = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: a, middlewareData: l } = t,
            s = await Z6(t, e);
          return a === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + s.x, y: i + s.y, data: { ...s, placement: a } };
        },
      }
    );
  },
  tN = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: a = !1,
              limiter: l = {
                fn: (x) => {
                  let { x: g, y } = x;
                  return { x: g, y };
                },
              },
              ...s
            } = En(e, t),
            u = { x: n, y: r },
            d = await Ii(t, s),
            c = To(Nn(o)),
            f = Rf(c);
          let m = u[f],
            h = u[c];
          if (i) {
            const x = f === 'y' ? 'top' : 'left',
              g = f === 'y' ? 'bottom' : 'right',
              y = m + d[x],
              b = m - d[g];
            m = Zc(y, m, b);
          }
          if (a) {
            const x = c === 'y' ? 'top' : 'left',
              g = c === 'y' ? 'bottom' : 'right',
              y = h + d[x],
              b = h - d[g];
            h = Zc(y, h, b);
          }
          const v = l.fn({ ...t, [f]: m, [c]: h });
          return { ...v, data: { x: v.x - n, y: v.y - r } };
        },
      }
    );
  },
  nN = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: a } = t,
            { offset: l = 0, mainAxis: s = !0, crossAxis: u = !0 } = En(e, t),
            d = { x: n, y: r },
            c = To(o),
            f = Rf(c);
          let m = d[f],
            h = d[c];
          const v = En(l, t),
            x =
              typeof v == 'number'
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (s) {
            const b = f === 'y' ? 'height' : 'width',
              S = i.reference[f] - i.floating[b] + x.mainAxis,
              C = i.reference[f] + i.reference[b] - x.mainAxis;
            m < S ? (m = S) : m > C && (m = C);
          }
          if (u) {
            var g, y;
            const b = f === 'y' ? 'width' : 'height',
              S = ['top', 'left'].includes(Nn(o)),
              C =
                i.reference[c] -
                i.floating[b] +
                ((S && ((g = a.offset) == null ? void 0 : g[c])) || 0) +
                (S ? 0 : x.crossAxis),
              N =
                i.reference[c] +
                i.reference[b] +
                (S ? 0 : ((y = a.offset) == null ? void 0 : y[c]) || 0) -
                (S ? x.crossAxis : 0);
            h < C ? (h = C) : h > N && (h = N);
          }
          return { [f]: m, [c]: h };
        },
      }
    );
  },
  rN = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: i } = t,
            { apply: a = () => {}, ...l } = En(e, t),
            s = await Ii(t, l),
            u = Nn(n),
            d = Oo(n),
            c = To(n) === 'y',
            { width: f, height: m } = r.floating;
          let h, v;
          u === 'top' || u === 'bottom'
            ? ((h = u),
              (v =
                d ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((v = u), (h = d === 'end' ? 'top' : 'bottom'));
          const x = m - s[h],
            g = f - s[v],
            y = !t.middlewareData.shift;
          let b = x,
            S = g;
          if (c) {
            const N = f - s.left - s.right;
            S = d || y ? rr(g, N) : N;
          } else {
            const N = m - s.top - s.bottom;
            b = d || y ? rr(x, N) : N;
          }
          if (y && !d) {
            const N = vt(s.left, 0),
              P = vt(s.right, 0),
              E = vt(s.top, 0),
              I = vt(s.bottom, 0);
            c
              ? (S = f - 2 * (N !== 0 || P !== 0 ? N + P : vt(s.left, s.right)))
              : (b =
                  m - 2 * (E !== 0 || I !== 0 ? E + I : vt(s.top, s.bottom)));
          }
          await a({ ...t, availableWidth: S, availableHeight: b });
          const C = await o.getDimensions(i.floating);
          return f !== C.width || m !== C.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ir(e) {
  return Q1(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function wt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function $n(e) {
  var t;
  return (t = (Q1(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Q1(e) {
  return e instanceof Node || e instanceof wt(e).Node;
}
function _n(e) {
  return e instanceof Element || e instanceof wt(e).Element;
}
function an(e) {
  return e instanceof HTMLElement || e instanceof wt(e).HTMLElement;
}
function lh(e) {
  return typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof wt(e).ShadowRoot;
}
function na(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Lt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !['inline', 'contents'].includes(o)
  );
}
function oN(e) {
  return ['table', 'td', 'th'].includes(ir(e));
}
function Lf(e) {
  const t = Af(),
    n = Lt(e);
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some((r) =>
      (n.willChange || '').includes(r),
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((r) =>
      (n.contain || '').includes(r),
    )
  );
}
function K1(e) {
  let t = xo(e);
  for (; an(t) && !Ds(t); ) {
    if (Lf(t)) return t;
    t = xo(t);
  }
  return null;
}
function Af() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Ds(e) {
  return ['html', 'body', '#document'].includes(ir(e));
}
function Lt(e) {
  return wt(e).getComputedStyle(e);
}
function Ls(e) {
  return _n(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function xo(e) {
  if (ir(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (lh(e) && e.host) || $n(e);
  return lh(t) ? t.host : t;
}
function X1(e) {
  const t = xo(e);
  return Ds(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : an(t) && na(t)
      ? t
      : X1(t);
}
function Fi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = X1(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = wt(o);
  return i
    ? t.concat(
        a,
        a.visualViewport || [],
        na(o) ? o : [],
        a.frameElement && n ? Fi(a.frameElement) : [],
      )
    : t.concat(o, Fi(o, [], n));
}
function q1(e) {
  const t = Lt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = an(e),
    i = o ? e.offsetWidth : n,
    a = o ? e.offsetHeight : r,
    l = Al(n) !== i || Al(r) !== a;
  return l && ((n = i), (r = a)), { width: n, height: r, $: l };
}
function If(e) {
  return _n(e) ? e : e.contextElement;
}
function io(e) {
  const t = If(e);
  if (!an(t)) return or(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = q1(t);
  let a = (i ? Al(n.width) : n.width) / r,
    l = (i ? Al(n.height) : n.height) / o;
  return (
    (!a || !Number.isFinite(a)) && (a = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: a, y: l }
  );
}
const iN = or(0);
function J1(e) {
  const t = wt(e);
  return !Af() || !t.visualViewport
    ? iN
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function aN(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== wt(e)) ? !1 : t;
}
function $r(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = If(e);
  let a = or(1);
  t && (r ? _n(r) && (a = io(r)) : (a = io(e)));
  const l = aN(i, n, r) ? J1(i) : or(0);
  let s = (o.left + l.x) / a.x,
    u = (o.top + l.y) / a.y,
    d = o.width / a.x,
    c = o.height / a.y;
  if (i) {
    const f = wt(i),
      m = r && _n(r) ? wt(r) : r;
    let h = f.frameElement;
    for (; h && r && m !== f; ) {
      const v = io(h),
        x = h.getBoundingClientRect(),
        g = Lt(h),
        y = x.left + (h.clientLeft + parseFloat(g.paddingLeft)) * v.x,
        b = x.top + (h.clientTop + parseFloat(g.paddingTop)) * v.y;
      (s *= v.x),
        (u *= v.y),
        (d *= v.x),
        (c *= v.y),
        (s += y),
        (u += b),
        (h = wt(h).frameElement);
    }
  }
  return Fl({ width: d, height: c, x: s, y: u });
}
const lN = [':popover-open', ':modal'];
function Z1(e) {
  let t = !1,
    n = 0,
    r = 0;
  function o(i) {
    try {
      t = t || e.matches(i);
    } catch {}
  }
  if (
    (lN.forEach((i) => {
      o(i);
    }),
    t)
  ) {
    const i = K1(e);
    if (i) {
      const a = i.getBoundingClientRect();
      (n = a.x), (r = a.y);
    }
  }
  return [t, n, r];
}
function sN(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = $n(r),
    [a] = t ? Z1(t.floating) : [!1];
  if (r === i || a) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    s = or(1);
  const u = or(0),
    d = an(r);
  if (
    (d || (!d && o !== 'fixed')) &&
    ((ir(r) !== 'body' || na(i)) && (l = Ls(r)), an(r))
  ) {
    const c = $r(r);
    (s = io(r)), (u.x = c.x + r.clientLeft), (u.y = c.y + r.clientTop);
  }
  return {
    width: n.width * s.x,
    height: n.height * s.y,
    x: n.x * s.x - l.scrollLeft * s.x + u.x,
    y: n.y * s.y - l.scrollTop * s.y + u.y,
  };
}
function uN(e) {
  return Array.from(e.getClientRects());
}
function ey(e) {
  return $r($n(e)).left + Ls(e).scrollLeft;
}
function cN(e) {
  const t = $n(e),
    n = Ls(e),
    r = e.ownerDocument.body,
    o = vt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = vt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + ey(e);
  const l = -n.scrollTop;
  return (
    Lt(r).direction === 'rtl' && (a += vt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: a, y: l }
  );
}
function dN(e, t) {
  const n = wt(e),
    r = $n(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    s = 0;
  if (o) {
    (i = o.width), (a = o.height);
    const u = Af();
    (!u || (u && t === 'fixed')) && ((l = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: a, x: l, y: s };
}
function fN(e, t) {
  const n = $r(e, !0, t === 'fixed'),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = an(e) ? io(e) : or(1),
    a = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    s = o * i.x,
    u = r * i.y;
  return { width: a, height: l, x: s, y: u };
}
function sh(e, t, n) {
  let r;
  if (t === 'viewport') r = dN(e, n);
  else if (t === 'document') r = cN($n(e));
  else if (_n(t)) r = fN(t, n);
  else {
    const o = J1(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Fl(r);
}
function ty(e, t) {
  const n = xo(e);
  return n === t || !_n(n) || Ds(n)
    ? !1
    : Lt(n).position === 'fixed' || ty(n, t);
}
function pN(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Fi(e, [], !1).filter((l) => _n(l) && ir(l) !== 'body'),
    o = null;
  const i = Lt(e).position === 'fixed';
  let a = i ? xo(e) : e;
  for (; _n(a) && !Ds(a); ) {
    const l = Lt(a),
      s = Lf(a);
    !s && l.position === 'fixed' && (o = null),
      (
        i
          ? !s && !o
          : (!s &&
              l.position === 'static' &&
              !!o &&
              ['absolute', 'fixed'].includes(o.position)) ||
            (na(a) && !s && ty(e, a))
      )
        ? (r = r.filter((d) => d !== a))
        : (o = l),
      (a = xo(a));
  }
  return t.set(e, r), r;
}
function mN(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const a = [...(n === 'clippingAncestors' ? pN(t, this._c) : [].concat(n)), r],
    l = a[0],
    s = a.reduce(
      (u, d) => {
        const c = sh(t, d, o);
        return (
          (u.top = vt(c.top, u.top)),
          (u.right = rr(c.right, u.right)),
          (u.bottom = rr(c.bottom, u.bottom)),
          (u.left = vt(c.left, u.left)),
          u
        );
      },
      sh(t, l, o),
    );
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top,
  };
}
function hN(e) {
  const { width: t, height: n } = q1(e);
  return { width: t, height: n };
}
function vN(e, t, n, r) {
  const o = an(t),
    i = $n(t),
    a = n === 'fixed',
    l = $r(e, !0, a, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const u = or(0);
  if (o || (!o && !a))
    if (((ir(t) !== 'body' || na(i)) && (s = Ls(t)), o)) {
      const v = $r(t, !0, a, t);
      (u.x = v.x + t.clientLeft), (u.y = v.y + t.clientTop);
    } else i && (u.x = ey(i));
  let d = l.left + s.scrollLeft - u.x,
    c = l.top + s.scrollTop - u.y;
  const [f, m, h] = Z1(r);
  return (
    f && ((d += m), (c += h), o && ((d += t.clientLeft), (c += t.clientTop))),
    { x: d, y: c, width: l.width, height: l.height }
  );
}
function uh(e, t) {
  return !an(e) || Lt(e).position === 'fixed'
    ? null
    : t
      ? t(e)
      : e.offsetParent;
}
function ny(e, t) {
  const n = wt(e);
  if (!an(e)) return n;
  let r = uh(e, t);
  for (; r && oN(r) && Lt(r).position === 'static'; ) r = uh(r, t);
  return r &&
    (ir(r) === 'html' ||
      (ir(r) === 'body' && Lt(r).position === 'static' && !Lf(r)))
    ? n
    : r || K1(e) || n;
}
const gN = async function (e) {
  const t = this.getOffsetParent || ny,
    n = this.getDimensions;
  return {
    reference: vN(e.reference, await t(e.floating), e.strategy, e.floating),
    floating: { x: 0, y: 0, ...(await n(e.floating)) },
  };
};
function yN(e) {
  return Lt(e).direction === 'rtl';
}
const wN = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sN,
  getDocumentElement: $n,
  getClippingRect: mN,
  getOffsetParent: ny,
  getElementRects: gN,
  getClientRects: uN,
  getDimensions: hN,
  getScale: io,
  isElement: _n,
  isRTL: yN,
};
function xN(e, t) {
  let n = null,
    r;
  const o = $n(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function a(l, s) {
    l === void 0 && (l = !1), s === void 0 && (s = 1), i();
    const { left: u, top: d, width: c, height: f } = e.getBoundingClientRect();
    if ((l || t(), !c || !f)) return;
    const m = Oa(d),
      h = Oa(o.clientWidth - (u + c)),
      v = Oa(o.clientHeight - (d + f)),
      x = Oa(u),
      y = {
        rootMargin: -m + 'px ' + -h + 'px ' + -v + 'px ' + -x + 'px',
        threshold: vt(0, rr(1, s)) || 1,
      };
    let b = !0;
    function S(C) {
      const N = C[0].intersectionRatio;
      if (N !== s) {
        if (!b) return a();
        N
          ? a(!1, N)
          : (r = setTimeout(() => {
              a(!1, 1e-7);
            }, 100));
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...y, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, y);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function bN(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: a = typeof ResizeObserver == 'function',
      layoutShift: l = typeof IntersectionObserver == 'function',
      animationFrame: s = !1,
    } = r,
    u = If(e),
    d = o || i ? [...(u ? Fi(u) : []), ...Fi(t)] : [];
  d.forEach((g) => {
    o && g.addEventListener('scroll', n, { passive: !0 }),
      i && g.addEventListener('resize', n);
  });
  const c = u && l ? xN(u, n) : null;
  let f = -1,
    m = null;
  a &&
    ((m = new ResizeObserver((g) => {
      let [y] = g;
      y &&
        y.target === u &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var b;
          (b = m) == null || b.observe(t);
        }))),
        n();
    })),
    u && !s && m.observe(u),
    m.observe(t));
  let h,
    v = s ? $r(e) : null;
  s && x();
  function x() {
    const g = $r(e);
    v &&
      (g.x !== v.x ||
        g.y !== v.y ||
        g.width !== v.width ||
        g.height !== v.height) &&
      n(),
      (v = g),
      (h = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var g;
      d.forEach((y) => {
        o && y.removeEventListener('scroll', n),
          i && y.removeEventListener('resize', n);
      }),
        c == null || c(),
        (g = m) == null || g.disconnect(),
        (m = null),
        s && cancelAnimationFrame(h);
    }
  );
}
const SN = tN,
  CN = q6,
  kN = rN,
  EN = J6,
  ch = X6,
  NN = nN,
  _N = (e, t, n) => {
    const r = new Map(),
      o = { platform: wN, ...n },
      i = { ...o.platform, _c: r };
    return K6(e, t, { ...o, platform: i });
  },
  PN = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, 'current');
    }
    return {
      name: 'arrow',
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? ch({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? ch({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  };
var el = typeof document < 'u' ? p.useLayoutEffect : p.useEffect;
function jl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!jl(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === '_owner' && e.$$typeof) && !jl(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ry(e) {
  return typeof window > 'u'
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function dh(e, t) {
  const n = ry(e);
  return Math.round(t * n) / n;
}
function fh(e) {
  const t = p.useRef(e);
  return (
    el(() => {
      t.current = e;
    }),
    t
  );
}
function $N(e) {
  e === void 0 && (e = {});
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: a } = {},
      transform: l = !0,
      whileElementsMounted: s,
      open: u,
    } = e,
    [d, c] = p.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, m] = p.useState(r);
  jl(f, r) || m(r);
  const [h, v] = p.useState(null),
    [x, g] = p.useState(null),
    y = p.useCallback((T) => {
      T !== N.current && ((N.current = T), v(T));
    }, []),
    b = p.useCallback((T) => {
      T !== P.current && ((P.current = T), g(T));
    }, []),
    S = i || h,
    C = a || x,
    N = p.useRef(null),
    P = p.useRef(null),
    E = p.useRef(d),
    I = s != null,
    L = fh(s),
    Y = fh(o),
    D = p.useCallback(() => {
      if (!N.current || !P.current) return;
      const T = { placement: t, strategy: n, middleware: f };
      Y.current && (T.platform = Y.current),
        _N(N.current, P.current, T).then((k) => {
          const W = { ...k, isPositioned: !0 };
          K.current &&
            !jl(E.current, W) &&
            ((E.current = W),
            Yi.flushSync(() => {
              c(W);
            }));
        });
    }, [f, t, n, Y]);
  el(() => {
    u === !1 &&
      E.current.isPositioned &&
      ((E.current.isPositioned = !1), c((T) => ({ ...T, isPositioned: !1 })));
  }, [u]);
  const K = p.useRef(!1);
  el(
    () => (
      (K.current = !0),
      () => {
        K.current = !1;
      }
    ),
    [],
  ),
    el(() => {
      if ((S && (N.current = S), C && (P.current = C), S && C)) {
        if (L.current) return L.current(S, C, D);
        D();
      }
    }, [S, C, D, L, I]);
  const B = p.useMemo(
      () => ({ reference: N, floating: P, setReference: y, setFloating: b }),
      [y, b],
    ),
    z = p.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    V = p.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!z.floating) return T;
      const k = dh(z.floating, d.x),
        W = dh(z.floating, d.y);
      return l
        ? {
            ...T,
            transform: 'translate(' + k + 'px, ' + W + 'px)',
            ...(ry(z.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: k, top: W };
    }, [n, l, z.floating, d.x, d.y]);
  return p.useMemo(
    () => ({ ...d, update: D, refs: B, elements: z, floatingStyles: V }),
    [d, D, B, z, V],
  );
}
function ON(e) {
  const [t, n] = p.useState(void 0);
  return (
    nr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let a, l;
          if ('borderBoxSize' in i) {
            const s = i.borderBoxSize,
              u = Array.isArray(s) ? s[0] : s;
            (a = u.inlineSize), (l = u.blockSize);
          } else (a = e.offsetWidth), (l = e.offsetHeight);
          n({ width: a, height: l });
        });
        return r.observe(e, { box: 'border-box' }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const oy = 'Popper',
  [iy, ay] = ds(oy),
  [TN, ly] = iy(oy),
  RN = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = p.useState(null);
    return p.createElement(TN, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  MN = 'PopperAnchor',
  DN = p.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = ly(MN, n),
      a = p.useRef(null),
      l = un(t, a);
    return (
      p.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || a.current);
      }),
      r ? null : p.createElement(it.div, fe({}, o, { ref: l }))
    );
  }),
  sy = 'PopperContent',
  [LN, f8] = iy(sy),
  AN = p.forwardRef((e, t) => {
    var n, r, o, i, a, l, s, u;
    const {
        __scopePopper: d,
        side: c = 'bottom',
        sideOffset: f = 0,
        align: m = 'center',
        alignOffset: h = 0,
        arrowPadding: v = 0,
        avoidCollisions: x = !0,
        collisionBoundary: g = [],
        collisionPadding: y = 0,
        sticky: b = 'partial',
        hideWhenDetached: S = !1,
        updatePositionStrategy: C = 'optimized',
        onPlaced: N,
        ...P
      } = e,
      E = ly(sy, d),
      [I, L] = p.useState(null),
      Y = un(t, (ie) => L(ie)),
      [D, K] = p.useState(null),
      B = ON(D),
      z = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0,
      V = (r = B == null ? void 0 : B.height) !== null && r !== void 0 ? r : 0,
      T = c + (m !== 'center' ? '-' + m : ''),
      k =
        typeof y == 'number'
          ? y
          : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      W = Array.isArray(g) ? g : [g],
      G = W.length > 0,
      ne = { padding: k, boundary: W.filter(IN), altBoundary: G },
      {
        refs: F,
        floatingStyles: A,
        placement: U,
        isPositioned: X,
        middlewareData: _,
      } = $N({
        strategy: 'fixed',
        placement: T,
        whileElementsMounted: (...ie) =>
          bN(...ie, { animationFrame: C === 'always' }),
        elements: { reference: E.anchor },
        middleware: [
          eN({ mainAxis: f + V, alignmentAxis: h }),
          x &&
            SN({
              mainAxis: !0,
              crossAxis: !1,
              limiter: b === 'partial' ? NN() : void 0,
              ...ne,
            }),
          x && CN({ ...ne }),
          kN({
            ...ne,
            apply: ({
              elements: ie,
              rects: Le,
              availableWidth: de,
              availableHeight: Ae,
            }) => {
              const { width: dr, height: Ie } = Le.reference,
                dn = ie.floating.style;
              dn.setProperty('--radix-popper-available-width', `${de}px`),
                dn.setProperty('--radix-popper-available-height', `${Ae}px`),
                dn.setProperty('--radix-popper-anchor-width', `${dr}px`),
                dn.setProperty('--radix-popper-anchor-height', `${Ie}px`);
            },
          }),
          D && PN({ element: D, padding: v }),
          FN({ arrowWidth: z, arrowHeight: V }),
          S && EN({ strategy: 'referenceHidden', ...ne }),
        ],
      }),
      [oe, j] = uy(U),
      ye = kn(N);
    nr(() => {
      X && (ye == null || ye());
    }, [X, ye]);
    const ce = (o = _.arrow) === null || o === void 0 ? void 0 : o.x,
      pe = (i = _.arrow) === null || i === void 0 ? void 0 : i.y,
      te =
        ((a = _.arrow) === null || a === void 0 ? void 0 : a.centerOffset) !==
        0,
      [De, Ke] = p.useState();
    return (
      nr(() => {
        I && Ke(window.getComputedStyle(I).zIndex);
      }, [I]),
      p.createElement(
        'div',
        {
          ref: F.setFloating,
          'data-radix-popper-content-wrapper': '',
          style: {
            ...A,
            transform: X ? A.transform : 'translate(0, -200%)',
            minWidth: 'max-content',
            zIndex: De,
            '--radix-popper-transform-origin': [
              (l = _.transformOrigin) === null || l === void 0 ? void 0 : l.x,
              (s = _.transformOrigin) === null || s === void 0 ? void 0 : s.y,
            ].join(' '),
          },
          dir: e.dir,
        },
        p.createElement(
          LN,
          {
            scope: d,
            placedSide: oe,
            onArrowChange: K,
            arrowX: ce,
            arrowY: pe,
            shouldHideArrow: te,
          },
          p.createElement(
            it.div,
            fe({ 'data-side': oe, 'data-align': j }, P, {
              ref: Y,
              style: {
                ...P.style,
                animation: X ? void 0 : 'none',
                opacity:
                  (u = _.hide) !== null && u !== void 0 && u.referenceHidden
                    ? 0
                    : void 0,
              },
            }),
          ),
        ),
      )
    );
  });
function IN(e) {
  return e !== null;
}
const FN = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    var n, r, o, i, a;
    const { placement: l, rects: s, middlewareData: u } = t,
      c =
        ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      f = c ? 0 : e.arrowWidth,
      m = c ? 0 : e.arrowHeight,
      [h, v] = uy(l),
      x = { start: '0%', center: '50%', end: '100%' }[v],
      g =
        ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        f / 2,
      y =
        ((i = (a = u.arrow) === null || a === void 0 ? void 0 : a.y) !== null &&
        i !== void 0
          ? i
          : 0) +
        m / 2;
    let b = '',
      S = '';
    return (
      h === 'bottom'
        ? ((b = c ? x : `${g}px`), (S = `${-m}px`))
        : h === 'top'
          ? ((b = c ? x : `${g}px`), (S = `${s.floating.height + m}px`))
          : h === 'right'
            ? ((b = `${-m}px`), (S = c ? x : `${y}px`))
            : h === 'left' &&
              ((b = `${s.floating.width + m}px`), (S = c ? x : `${y}px`)),
      { data: { x: b, y: S } }
    );
  },
});
function uy(e) {
  const [t, n = 'center'] = e.split('-');
  return [t, n];
}
const jN = RN,
  zN = DN,
  WN = AN,
  cy = 'Popover',
  [dy, p8] = ds(cy, [ay]),
  Ff = ay(),
  [BN, Ro] = dy(cy),
  UN = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: a = !1,
      } = e,
      l = Ff(t),
      s = p.useRef(null),
      [u, d] = p.useState(!1),
      [c = !1, f] = Gg({ prop: r, defaultProp: o, onChange: i });
    return p.createElement(
      jN,
      l,
      p.createElement(
        BN,
        {
          scope: t,
          contentId: Qa(),
          triggerRef: s,
          open: c,
          onOpenChange: f,
          onOpenToggle: p.useCallback(() => f((m) => !m), [f]),
          hasCustomAnchor: u,
          onCustomAnchorAdd: p.useCallback(() => d(!0), []),
          onCustomAnchorRemove: p.useCallback(() => d(!1), []),
          modal: a,
        },
        n,
      ),
    );
  },
  HN = 'PopoverTrigger',
  VN = p.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Ro(HN, n),
      i = Ff(n),
      a = un(t, o.triggerRef),
      l = p.createElement(
        it.button,
        fe(
          {
            type: 'button',
            'aria-haspopup': 'dialog',
            'aria-expanded': o.open,
            'aria-controls': o.contentId,
            'data-state': my(o.open),
          },
          r,
          { ref: a, onClick: Tt(e.onClick, o.onOpenToggle) },
        ),
      );
    return o.hasCustomAnchor
      ? l
      : p.createElement(zN, fe({ asChild: !0 }, i), l);
  }),
  fy = 'PopoverPortal',
  [YN, GN] = dy(fy, { forceMount: void 0 }),
  QN = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
      i = Ro(fy, t);
    return p.createElement(
      YN,
      { scope: t, forceMount: n },
      p.createElement(
        $o,
        { present: n || i.open },
        p.createElement(Jg, { asChild: !0, container: o }, r),
      ),
    );
  },
  ji = 'PopoverContent',
  KN = p.forwardRef((e, t) => {
    const n = GN(ji, e.__scopePopover),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Ro(ji, e.__scopePopover);
    return p.createElement(
      $o,
      { present: r || i.open },
      i.modal
        ? p.createElement(XN, fe({}, o, { ref: t }))
        : p.createElement(qN, fe({}, o, { ref: t })),
    );
  }),
  XN = p.forwardRef((e, t) => {
    const n = Ro(ji, e.__scopePopover),
      r = p.useRef(null),
      o = un(t, r),
      i = p.useRef(!1);
    return (
      p.useEffect(() => {
        const a = r.current;
        if (a) return c1(a);
      }, []),
      p.createElement(
        s1,
        { as: Ki, allowPinchZoom: !0 },
        p.createElement(
          py,
          fe({}, e, {
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Tt(e.onCloseAutoFocus, (a) => {
              var l;
              a.preventDefault(),
                i.current ||
                  (l = n.triggerRef.current) === null ||
                  l === void 0 ||
                  l.focus();
            }),
            onPointerDownOutside: Tt(
              e.onPointerDownOutside,
              (a) => {
                const l = a.detail.originalEvent,
                  s = l.button === 0 && l.ctrlKey === !0,
                  u = l.button === 2 || s;
                i.current = u;
              },
              { checkForDefaultPrevented: !1 },
            ),
            onFocusOutside: Tt(e.onFocusOutside, (a) => a.preventDefault(), {
              checkForDefaultPrevented: !1,
            }),
          }),
        ),
      )
    );
  }),
  qN = p.forwardRef((e, t) => {
    const n = Ro(ji, e.__scopePopover),
      r = p.useRef(!1),
      o = p.useRef(!1);
    return p.createElement(
      py,
      fe({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a;
          if (
            ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, i),
            !i.defaultPrevented)
          ) {
            var l;
            r.current ||
              (l = n.triggerRef.current) === null ||
              l === void 0 ||
              l.focus(),
              i.preventDefault();
          }
          (r.current = !1), (o.current = !1);
        },
        onInteractOutside: (i) => {
          var a, l;
          (a = e.onInteractOutside) === null || a === void 0 || a.call(e, i),
            i.defaultPrevented ||
              ((r.current = !0),
              i.detail.originalEvent.type === 'pointerdown' &&
                (o.current = !0));
          const s = i.target;
          ((l = n.triggerRef.current) === null || l === void 0
            ? void 0
            : l.contains(s)) && i.preventDefault(),
            i.detail.originalEvent.type === 'focusin' &&
              o.current &&
              i.preventDefault();
        },
      }),
    );
  }),
  py = p.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: a,
        onEscapeKeyDown: l,
        onPointerDownOutside: s,
        onFocusOutside: u,
        onInteractOutside: d,
        ...c
      } = e,
      f = Ro(ji, n),
      m = Ff(n);
    return (
      Zg(),
      p.createElement(
        Xg,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
        },
        p.createElement(
          Qg,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: d,
            onEscapeKeyDown: l,
            onPointerDownOutside: s,
            onFocusOutside: u,
            onDismiss: () => f.onOpenChange(!1),
          },
          p.createElement(
            WN,
            fe(
              { 'data-state': my(f.open), role: 'dialog', id: f.contentId },
              m,
              c,
              {
                ref: t,
                style: {
                  ...c.style,
                  '--radix-popover-content-transform-origin':
                    'var(--radix-popper-transform-origin)',
                  '--radix-popover-content-available-width':
                    'var(--radix-popper-available-width)',
                  '--radix-popover-content-available-height':
                    'var(--radix-popper-available-height)',
                  '--radix-popover-trigger-width':
                    'var(--radix-popper-anchor-width)',
                  '--radix-popover-trigger-height':
                    'var(--radix-popper-anchor-height)',
                },
              },
            ),
          ),
        ),
      )
    );
  });
function my(e) {
  return e ? 'open' : 'closed';
}
const JN = UN,
  ZN = VN,
  e8 = QN,
  hy = KN,
  t8 = JN,
  n8 = ZN,
  vy = p.forwardRef(
    ({ className: e, align: t = 'center', sideOffset: n = 4, ...r }, o) =>
      w(e8, {
        children: w(hy, {
          ref: o,
          align: t,
          sideOffset: n,
          className: Ue(
            'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            e,
          ),
          ...r,
        }),
      }),
  );
vy.displayName = hy.displayName;
function r8({ className: e, setDateRange: t }) {
  const [n, r] = p.useState({ from: new Date(), to: Je(Date.now(), 5) }),
    o = new Date();
  return (
    new Date().setDate(o.getDate() - 1),
    p.useEffect(() => {
      n ? t(n) : r({ from: new Date(), to: new Date() });
    }, [n]),
    w('div', {
      className: Ue('grid gap-2', e),
      children: $(t8, {
        children: [
          w(n8, {
            asChild: !0,
            className: 'border-none text-black hover:bg-transparent',
            children: $(Mi, {
              id: 'date',
              variant: 'outline',
              className: Ue(
                'w-[300px] justify-start text-left font-normal',
                !n && 'text-muted-foreground',
              ),
              children: [
                w(W3, { className: 'mr-2 h-4 w-4' }),
                n != null && n.from
                  ? n.to
                    ? $(Wi, {
                        children: [
                          Rt(n.from, 'LLL dd, y'),
                          ' -',
                          '>',
                          ' ',
                          Rt(n.to, 'LLL dd, y'),
                        ],
                      })
                    : Rt(n.from, 'LLL dd, y')
                  : w('span', {
                      className: 'text-base font-semibold',
                      children: 'Pick a date',
                    }),
              ],
            }),
          }),
          w(vy, {
            className: 'w-auto p-0',
            align: 'start',
            children: w(Y1, {
              initialFocus: !0,
              mode: 'range',
              defaultMonth: n == null ? void 0 : n.from,
              selected: n,
              onSelect: r,
              numberOfMonths: 1,
              disabled: (a) => a < new Date().setDate(new Date().getDate() - 1),
            }),
          }),
        ],
      }),
    })
  );
}
const o8 = ({ place: e }) => {
    const [t, n] = p.useState({ from: null, to: null }),
      [r, o] = p.useState({ noOfGuests: 1, name: '', phone: '' }),
      [i, a] = p.useState(''),
      { user: l } = _o(),
      { noOfGuests: s, name: u, phone: d } = r,
      { _id: c, price: f } = e;
    p.useEffect(() => {
      l && o({ ...r, name: l.name });
    }, [l]);
    const m =
        t.from && t.to
          ? LC(
              new Date(t.to).setHours(0, 0, 0, 0),
              new Date(t.from).setHours(0, 0, 0, 0),
            )
          : 0,
      h = (x) => {
        o({ ...r, [x.target.name]: x.target.value });
      },
      v = async () => {
        if (!l) return a('/login');
        if (m < 1) return q.error('Please select valid dates');
        if (s < 1) return q.error("No. of guests can't be less than 1");
        if (s > e.maxGuests)
          return q.error(`Allowed max. no. of guests: ${e.maxGuests}`);
        if (u.trim() === '') return q.error("Name can't be empty");
        if (d.trim() === '') return q.error("Phone can't be empty");
        try {
          const g = (
            await je.post('/bookings', {
              checkIn: t.from,
              checkOut: t.to,
              noOfGuests: s,
              name: u,
              phone: d,
              place: c,
              price: m * f,
            })
          ).data.booking._id;
          a(`/account/bookings/${g}`), q('Congratulations! Enjoy your trip.');
        } catch (x) {
          q.error('Something went wrong!'), console.log('Error: ', x);
        }
      };
    return i
      ? w(mo, { to: i })
      : $('div', {
          className: 'rounded-2xl bg-white p-4 shadow-xl',
          children: [
            $('div', {
              className: 'text-center text-xl',
              children: [
                'Price: ',
                $('span', {
                  className: 'font-semibold',
                  children: ['₹', e.price],
                }),
                ' / per night',
              ],
            }),
            $('div', {
              className: 'mt-4 rounded-2xl border',
              children: [
                w('div', {
                  className: 'flex w-full ',
                  children: w(r8, { setDateRange: n }),
                }),
                $('div', {
                  className: 'border-t py-3 px-4',
                  children: [
                    w('label', { children: 'Number of guests: ' }),
                    w('input', {
                      type: 'number',
                      name: 'noOfGuests',
                      placeholder: `Max. guests: ${e.maxGuests}`,
                      min: 1,
                      max: e.maxGuests,
                      value: s,
                      onChange: h,
                    }),
                  ],
                }),
                $('div', {
                  className: 'border-t py-3 px-4',
                  children: [
                    w('label', { children: 'Your full name: ' }),
                    w('input', {
                      type: 'text',
                      name: 'name',
                      value: u,
                      onChange: h,
                    }),
                    w('label', { children: 'Phone number: ' }),
                    w('input', {
                      type: 'tel',
                      name: 'phone',
                      value: d,
                      onChange: h,
                    }),
                  ],
                }),
              ],
            }),
            $('button', {
              onClick: v,
              className: 'primary mt-4',
              children: [
                'Book this place',
                m > 0 && $('span', { children: [' ₹', m * e.price] }),
              ],
            }),
          ],
        });
  },
  gy = ({ place: e }) => {
    var r, o, i, a, l, s, u;
    const [t, n] = p.useState(!1);
    return t
      ? w('div', {
          className: 'fixed inset-0 z-20 overflow-auto bg-white text-white',
          children: $('div', {
            className: 'grid gap-4 bg-white px-2 py-20 md:p-8',
            children: [
              w('div', {
                children: $('button', {
                  className:
                    'fixed right-2 top-8 flex gap-1 rounded-2xl bg-white py-2 px-4 text-black shadow-sm shadow-gray-500 md:right-12',
                  onClick: () => n(!1),
                  children: [
                    w('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      fill: 'currentColor',
                      className: 'h-6 w-6',
                      children: w('path', {
                        fillRule: 'evenodd',
                        d: 'M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z',
                        clipRule: 'evenodd',
                      }),
                    }),
                    'Close photos',
                  ],
                }),
              }),
              ((r = e == null ? void 0 : e.photos) == null
                ? void 0
                : r.length) > 0 &&
                e.photos.map((d, c) =>
                  w(
                    'div',
                    {
                      className: 'max-w-full',
                      children: w('img', { src: d, alt: '' }),
                    },
                    c,
                  ),
                ),
            ],
          }),
        })
      : $('div', {
          className: 'relative',
          children: [
            $('div', {
              className:
                'hidden h-[400px] max-h-[450px] grid-cols-4 gap-2 overflow-hidden rounded-[12px] md:grid',
              children: [
                w('div', {
                  className: 'col-span-2 overflow-hidden',
                  children:
                    ((o = e.photos) == null ? void 0 : o[0]) &&
                    w('div', {
                      className: 'h-full w-full overflow-hidden bg-red-200',
                      children: w('img', {
                        onClick: () => n(!0),
                        className: 'h-full w-full cursor-pointer object-cover',
                        src: e.photos[0],
                        alt: '',
                      }),
                    }),
                }),
                w('div', {
                  className: 'col-span-1 overflow-hidden',
                  children: $('div', {
                    className: 'grid h-full grid-rows-2 gap-2',
                    children: [
                      ((i = e.photos) == null ? void 0 : i[1]) &&
                        w('div', {
                          className: 'bg-gray-200',
                          children: w('img', {
                            onClick: () => n(!0),
                            className:
                              'h-full w-full cursor-pointer object-cover',
                            src: e.photos[1],
                            alt: '',
                          }),
                        }),
                      ((a = e.photos) == null ? void 0 : a[2]) &&
                        w('div', {
                          className: 'bg-gray-200',
                          children: w('img', {
                            onClick: () => n(!0),
                            className:
                              'h-full w-full cursor-pointer object-cover',
                            src: e.photos[2],
                            alt: '',
                          }),
                        }),
                    ],
                  }),
                }),
                w('div', {
                  className: 'col-span-1 overflow-hidden',
                  children: $('div', {
                    className: 'grid h-full grid-rows-2 gap-2',
                    children: [
                      ((l = e.photos) == null ? void 0 : l[3]) &&
                        w('div', {
                          className: 'h-full bg-gray-200',
                          children: w('img', {
                            onClick: () => n(!0),
                            className:
                              'h-full w-full cursor-pointer object-cover',
                            src: e.photos[3],
                            alt: '',
                          }),
                        }),
                      ((s = e.photos) == null ? void 0 : s[4]) &&
                        w('div', {
                          className: 'h-full bg-gray-200',
                          children: w('img', {
                            onClick: () => n(!0),
                            className:
                              'h-full w-full cursor-pointer object-cover',
                            src: e.photos[4],
                            alt: '',
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
            w('div', {
              className: 'flex overflow-hidden rounded-[12px] md:hidden',
              children:
                ((u = e.photos) == null ? void 0 : u[0]) &&
                w('div', {
                  className: 'h-full',
                  children: w('img', {
                    onClick: () => n(!0),
                    className: 'h-full cursor-pointer object-cover',
                    src: e.photos[0],
                    alt: '',
                  }),
                }),
            }),
            $('button', {
              className:
                'absolute bottom-2 right-2 flex gap-1 rounded-xl bg-white py-2 px-4 shadow-md shadow-gray-500 ',
              onClick: () => n(!0),
              children: [
                w('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  fill: 'currentColor',
                  className: 'h-6 w-6',
                  children: w('path', {
                    fillRule: 'evenodd',
                    d: 'M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z',
                    clipRule: 'evenodd',
                  }),
                }),
                'Show all photos',
              ],
            }),
          ],
        });
  },
  i8 = ({ perks: e }) =>
    $('div', {
      className: 'mt-4',
      children: [
        w('hr', { className: 'mb-5 border' }),
        w('p', {
          className: 'text-2xl font-semibold',
          children: 'What this place offers',
        }),
        $('div', {
          className:
            'mt-4 grid flex-col gap-4 lg:grid-cols-2 lg:justify-items-stretch lg:gap-4',
          children: [
            $('div', {
              className: 'flex gap-4',
              children: [
                w('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 1.5,
                  stroke: 'currentColor',
                  className: 'h-6 w-6',
                  children: w('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
                  }),
                }),
                w('span', {
                  className: `${e != null && e.includes('wifi') ? '' : 'line-through'}`,
                  children: 'Wifi',
                }),
              ],
            }),
            $('div', {
              className: 'flex gap-4',
              children: [
                w('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 1.5,
                  stroke: 'currentColor',
                  className: 'h-6 w-6',
                  children: w('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z',
                  }),
                }),
                w('span', {
                  className: `${e != null && e.includes('tv') ? '' : 'line-through'}`,
                  children: 'TV',
                }),
              ],
            }),
            $('div', {
              className: 'flex gap-4',
              children: [
                w('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 1.5,
                  stroke: 'currentColor',
                  className: 'h-6 w-6',
                  children: w('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
                  }),
                }),
                w('span', {
                  className: `${e != null && e.includes('parking') ? '' : 'line-through'}`,
                  children: 'Free parking spot',
                }),
              ],
            }),
            $('div', {
              className: 'flex gap-4',
              children: [
                w('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 1.5,
                  stroke: 'currentColor',
                  className: 'h-6 w-6',
                  children: w('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z',
                  }),
                }),
                w('span', {
                  className: `${e != null && e.includes('radio') ? '' : 'line-through'}`,
                  children: 'Radio',
                }),
              ],
            }),
            $('div', {
              className: 'flex gap-4',
              children: [
                w('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 1.5,
                  stroke: 'currentColor',
                  className: 'h-6 w-6',
                  children: w('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z',
                  }),
                }),
                w('span', {
                  className: `${e != null && e.includes('pets') ? '' : 'line-through'}`,
                  children: 'Pets',
                }),
              ],
            }),
            $('div', {
              className: 'flex gap-4',
              children: [
                w('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: 'none',
                  viewBox: '0 0 24 24',
                  strokeWidth: 1.5,
                  stroke: 'currentColor',
                  className: 'h-6 w-6',
                  children: w('path', {
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    d: 'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75',
                  }),
                }),
                w('span', {
                  className: `${e != null && e.includes('enterence') ? '' : 'line-through'}`,
                  children: 'Private enterence',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  a8 = () => {
    const { id: e } = rs(),
      [t, n] = p.useState(null),
      [r, o] = p.useState(!1);
    if (
      (p.useEffect(() => {
        if (!e) return '';
        o(!0),
          (async () => {
            const { data: a } = await je.get(`/places/${e}`);
            n(a.place), o(!1);
          })();
      }, [e]),
      r)
    )
      return w(Po, {});
    if (t)
      return $('div', {
        className: 'mt-4 overflow-x-hidden px-8 pt-20 ',
        children: [
          w('h1', { className: 'text-3xl', children: t.title }),
          w(D1, { placeAddress: t.address }),
          w(gy, { place: t }),
          $('div', {
            className:
              'mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]',
            children: [
              $('div', {
                className: '',
                children: [
                  $('div', {
                    className: 'my-4 ',
                    children: [
                      w('h2', {
                        className: 'text-2xl font-semibold',
                        children: 'Description',
                      }),
                      t.description,
                    ],
                  }),
                  'Max number of guests: ',
                  t.maxGuests,
                  w(i8, { perks: t == null ? void 0 : t.perks }),
                ],
              }),
              w('div', { children: w(o8, { place: t }) }),
            ],
          }),
          $('div', {
            className: '-mx-8 border-t bg-white px-8 py-8',
            children: [
              w('div', {
                children: w('h2', {
                  className: 'mt-4 text-2xl font-semibold',
                  children: 'Extra Info',
                }),
              }),
              w('div', {
                className: 'mb-4 mt-2 text-sm leading-5 text-gray-700',
                children: t.extraInfo,
              }),
            ],
          }),
        ],
      });
  },
  l8 = () => {
    var a, l;
    const { id: e } = rs(),
      [t, n] = p.useState({}),
      [r, o] = p.useState(!1),
      i = async () => {
        try {
          o(!0);
          const { data: s } = await je.get('/bookings'),
            u = s.booking.filter((d) => d._id === e);
          n(u[0]);
        } catch (s) {
          console.log('Error: ', s);
        } finally {
          o(!1);
        }
      };
    return (
      p.useEffect(() => {
        i();
      }, [e]),
      r
        ? w(Po, {})
        : $('div', {
            children: [
              w(Ji, {}),
              t != null && t.place
                ? $('div', {
                    className: 'p-4',
                    children: [
                      w('h1', {
                        className: 'text-3xl',
                        children:
                          (a = t == null ? void 0 : t.place) == null
                            ? void 0
                            : a.title,
                      }),
                      w(D1, {
                        className: 'my-2 block',
                        placeAddress:
                          (l = t.place) == null ? void 0 : l.address,
                      }),
                      $('div', {
                        className:
                          'my-6 flex flex-col items-center justify-between rounded-2xl bg-gray-200 p-6 sm:flex-row',
                        children: [
                          $('div', {
                            className: ' ',
                            children: [
                              w('h2', {
                                className: 'mb-4 text-2xl md:text-2xl',
                                children: 'Your booking information',
                              }),
                              w(M1, { booking: t }),
                            ],
                          }),
                          $('div', {
                            className:
                              'mt-5 w-full rounded-2xl bg-primary p-6 text-white sm:mt-0 sm:w-auto',
                            children: [
                              w('div', {
                                className: 'hidden md:block',
                                children: 'Total price',
                              }),
                              w('div', {
                                className: 'flex justify-center text-3xl',
                                children: $('span', {
                                  children: ['₹', t == null ? void 0 : t.price],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      w(gy, { place: t == null ? void 0 : t.place }),
                    ],
                  })
                : w('h1', { children: ' No data' }),
            ],
          })
    );
  },
  s8 = () =>
    w('div', {
      className: 'px-2 pt-40',
      children: $('div', {
        className: 'text-center',
        children: [
          w('p', {
            className: 'text-base font-semibold text-black',
            children: '404',
          }),
          w('h1', {
            className:
              'mt-2 text-3xl font-semibold tracking-tight text-black sm:text-5xl',
            children: "We can't seem to find the page you're looking for.",
          }),
          w('p', {
            className: 'mt-4 text-base leading-7 text-gray-600',
            children:
              "Sorry, the page you are looking for doesn't exist or has been moved.",
          }),
          w('div', {
            className: 'mt-4 flex items-center justify-center gap-x-3',
            children: w($t, {
              to: '/',
              children: w('button', {
                className:
                  'rounded-[10px] bg-gray-900 p-2 px-20 hover:bg-gray-700',
                children: w('span', {
                  className: 'font-semibold text-white',
                  children: 'Home',
                }),
              }),
            }),
          }),
        ],
      }),
    });
function u8() {
  return (
    p.useEffect(() => {
      je.defaults.headers.common.Authorization = `Bearer ${Rc('token')}`;
    }, []),
    w(r3, {
      clientId:
        '734556199801-9cegoq54u0e8l8q7f4bitfio8luvskkc.apps.googleusercontent.com',
      children: w(i5, {
        children: $(l5, {
          children: [
            w(Ax, {
              children: $(mt, {
                path: '/',
                element: w(Hb, {}),
                children: [
                  w(mt, { index: !0, element: w(t3, {}) }),
                  w(mt, { path: '/login', element: w(CC, {}) }),
                  w(mt, { path: '/register', element: w(l3, {}) }),
                  w(mt, { path: '/account', element: w(N1, {}) }),
                  w(mt, { path: '/account/places', element: w(Yg, {}) }),
                  w(mt, { path: '/account/places/new', element: w(Jm, {}) }),
                  w(mt, { path: '/account/places/:id', element: w(Jm, {}) }),
                  w(mt, { path: '/place/:id', element: w(a8, {}) }),
                  w(mt, { path: '/account/bookings', element: w(oE, {}) }),
                  w(mt, { path: '/account/bookings/:id', element: w(l8, {}) }),
                  w(mt, { path: '*', element: w(s8, {}) }),
                ],
              }),
            }),
            w(Oc, { autoClose: 2e3, transition: Zx }),
          ],
        }),
      }),
    })
  );
}
Du.createRoot(document.getElementById('root')).render(
  w(Z.StrictMode, { children: w(Ux, { children: w(u8, {}) }) }),
);
