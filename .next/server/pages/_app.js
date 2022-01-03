"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: ./hooks/use-auth.js
var use_auth = __webpack_require__(7068);
// EXTERNAL MODULE: ./helpers/api-service.js
var api_service = __webpack_require__(2982);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./hooks/use-notifications.js





const {
  createContext,
  useState,
  useContext,
  useEffect
} = __webpack_require__(9297);

const Context = createContext();
function ProviderNotifications({
  children
}) {
  const notifications = useProvider();
  return /*#__PURE__*/jsx_runtime_.jsx(Context.Provider, {
    value: notifications,
    children: children
  });
}

function useProvider() {
  const [isUnread, setIsUnread] = useState(false);
  const {
    user
  } = (0,use_auth/* useAuth */.a)();
  const {
    data: messages = []
  } = (0,external_react_query_.useQuery)('notifications', api_service/* default.notifications */.Z.notifications, {
    retry: false,
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    enabled: !!(user !== null && user !== void 0 && user.id)
  });
  useEffect(() => {
    if (messages.length > 0 && messages.find(item => !item.isRead)) {
      setIsUnread(true);
    }
  }, [messages]);

  const read = () => {
    if (messages.length === 0) {
      return;
    }

    api_service/* default.readNotifications */.Z.readNotifications().then(() => setIsUnread(false));
  };

  return {
    messages,
    isUnread,
    read
  };
}

function useNotifications() {
  return useContext(Context);
}
// EXTERNAL MODULE: ./hooks/use-socket.js
var use_socket = __webpack_require__(6998);
;// CONCATENATED MODULE: external "react-toast-notifications"
const external_react_toast_notifications_namespaceObject = require("react-toast-notifications");
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./components/ui/hexagon/index.js + 2 modules
var hexagon = __webpack_require__(1317);
// EXTERNAL MODULE: ./icons/x.js
var x = __webpack_require__(5223);
// EXTERNAL MODULE: ./icons/check-circle.js
var check_circle = __webpack_require__(3577);
;// CONCATENATED MODULE: ./components/ui/toast/toast.js
const _excluded = ["className", "children", "icon", "title", "onDismiss", "appearance"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Toast(_ref) {
  let {
    className,
    children,
    icon,
    title,
    onDismiss,
    appearance = 'default'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const iconMap = {
    success: /*#__PURE__*/jsx_runtime_.jsx(hexagon/* default */.Z, {
      size: 60,
      className: "flex text-success-500",
      icon: /*#__PURE__*/jsx_runtime_.jsx(check_circle/* default */.Z, {
        size: 18
      })
    }),
    error: /*#__PURE__*/jsx_runtime_.jsx(hexagon/* default */.Z, {
      size: 60,
      className: "flex text-primary-500",
      icon: /*#__PURE__*/jsx_runtime_.jsx(x/* default */.Z, {
        size: 18
      })
    })
  };
  const iconComponent = icon !== null && icon !== void 0 ? icon : iconMap[appearance];
  const classes = external_clsx_default()('ui-toast', {
    'ui-toast--success': appearance === 'success',
    'ui-toast--error': appearance === 'error'
  }, className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
    className: classes
  }, props), {}, {
    children: [iconComponent && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ui-toast__icon",
      children: iconComponent
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ui-toast__content",
      children: [title && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ui-toast__title",
        children: title
      }), children]
    }), onDismiss && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ui-toast__close",
      onClick: onDismiss,
      children: /*#__PURE__*/jsx_runtime_.jsx(x/* default */.Z, {
        size: 20
      })
    })]
  }));
}
;// CONCATENATED MODULE: ./components/ui/toast/index.js

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const queryClient = new external_react_query_.QueryClient();

function MyApp({
  Component,
  pageProps
}) {
  (0,external_react_.useEffect)(() => {
    router_default().events.on('routeChangeStart', url => external_nprogress_default().start());
    router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
    router_default().events.on('routeChangeError', () => external_nprogress_default().done());
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
    client: queryClient,
    children: /*#__PURE__*/jsx_runtime_.jsx(use_auth/* AuthProvider */.H, {
      session: pageProps.session,
      children: /*#__PURE__*/jsx_runtime_.jsx(use_socket/* SocketProvider */.w, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ProviderNotifications, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_toast_notifications_namespaceObject.ToastProvider, {
            components: {
              Toast: Toast
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
          })
        })
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7069:
/***/ ((module) => {

module.exports = require("socket.io-client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1317,2982,7068,6998,3577,5223], () => (__webpack_exec__(4954)));
module.exports = __webpack_exports__;

})();