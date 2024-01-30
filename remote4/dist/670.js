"use strict";
(self["webpackChunkremote4"] = self["webpackChunkremote4"] || []).push([[670],{

/***/ 670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ expose_app)
});

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(378);
// EXTERNAL MODULE: ../node_modules/react-dom/client.js
var client = __webpack_require__(634);
// EXTERNAL MODULE: ../node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(783);
// EXTERNAL MODULE: ../node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(935);
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(246);
;// CONCATENATED MODULE: ./src/components/Home.jsx

var Home = function Home() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      children: "Remote 4: Home"
    })
  });
};
/* harmony default export */ const components_Home = (Home);
;// CONCATENATED MODULE: ./src/components/Navigation.jsx



var Navigation = function Navigation() {
  var navigate = (0,react_router_dist/* useNavigate */.s0)();
  var handleClick = function handleClick() {
    var id = (Math.random() * 100).toFixed();
    var search = (0,dist/* createSearchParams */.fW)({
      id: id
    }).toString();
    navigate({
      replace: true,
      pathname: "/remote4/page",
      search: search
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.rU, {
      to: "/",
      children: "Host: Home"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.rU, {
      to: "/page",
      children: "Host: Page"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.rU, {
      to: "/remote4",
      children: "Remote4: Home"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Link */.rU, {
      to: "/remote4/page",
      children: "Remote4: Page"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      onClick: handleClick,
      children: "Replace method"
    })]
  });
};
/* harmony default export */ const components_Navigation = (Navigation);
;// CONCATENATED MODULE: ./src/components/Layout.jsx




var Layout = function Layout() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dist/* Outlet */.j3, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Navigation, {})]
  });
};
/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./src/components/Page.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Page = function Page() {
  var _useSearchParams = (0,dist/* useSearchParams */.lr)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    searchParams = _useSearchParams2[0];
  var id = searchParams.get("id");
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
      children: ["Remote 4: Page ", id]
    })
  });
};
/* harmony default export */ const components_Page = (Page);
;// CONCATENATED MODULE: ./src/routes.js





var routes = [{
  path: "/",
  element: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Navigation, {})
}, {
  path: "/remote4",
  element: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Layout, {}),
  children: [{
    index: true,
    element: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Home, {})
  }, {
    path: "/remote4/page",
    element: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Page, {})
  }]
}];
;// CONCATENATED MODULE: ./src/router.js


var makeRouter = function makeRouter(_ref) {
  var disableHistory = _ref.disableHistory;
  var createRouter = disableHistory ? react_router_dist/* createMemoryRouter */.bi : dist/* createBrowserRouter */.aj;
  return createRouter(routes);
};
;// CONCATENATED MODULE: ./src/App.jsx




var App = function App(props) {
  var router = makeRouter(props);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("main", {
    id: "remote4",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
      children: "Remote 4"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* RouterProvider */.pG, {
      router: router
    })]
  });
};
/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/expose-app.js




/* harmony default export */ const expose_app = (function (_ref) {
  var el = _ref.el,
    basename = _ref.basename;
  var root = (0,client/* createRoot */.s)(el);
  var app = root.render( /*#__PURE__*/(0,jsx_runtime.jsx)(react.StrictMode, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src_App, {})
  }));
  root.$destroy = function () {
    return root.unmount();
  };
  console.log('react', {
    app: app,
    root: root
  });
  return root;
});

/***/ })

}]);
//# sourceMappingURL=670.js.map