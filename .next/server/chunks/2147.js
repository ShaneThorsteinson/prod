"use strict";
exports.id = 2147;
exports.ids = [2147];
exports.modules = {

/***/ 7310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function PageHeader({
  title,
  descripiton,
  children,
  className
}) {
  const classes = clsx__WEBPACK_IMPORTED_MODULE_0___default()('flex items-center flex-col', className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: classes,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "font-bold text-white leading-none text-center text-[32px] md:text-[38px] lg:text-[43px]",
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "page-header__rect"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "max-w-[700px] text-center text-gray-500",
      children: descripiton
    }), children]
  });
}

/***/ }),

/***/ 8336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalIncomingRequest)
/* harmony export */ });
/* harmony import */ var components_ui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4658);
/* harmony import */ var components_ui_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9214);
/* harmony import */ var components_ui_rank_division__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8833);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1767);
/* harmony import */ var beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helpers_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2982);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
const _excluded = ["title", "request", "onClose", "onDecline", "onAccept"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function ModalIncomingRequest(_ref) {
  var _fromTeam$logo;

  let {
    title,
    request,
    onClose = f => f,
    onDecline = f => f,
    onAccept = f => f
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: seconds,
    1: setSeconds
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(30);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const [, clearInterval] = (0,beautiful_react_hooks__WEBPACK_IMPORTED_MODULE_4__.useInterval)(() => setSeconds(seconds - 1), 1000);
  const {
    fromScrim
  } = request;
  const {
    team: fromTeam
  } = fromScrim;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (seconds === 0) {
      onClose();
    }
  }, [seconds]);

  const handleDecline = () => {
    onClose();
  };

  const handleAccept = () => {
    clearInterval();
    setIsLoading(true);
    helpers_api_service__WEBPACK_IMPORTED_MODULE_6__/* .default.acceptScrimRequest */ .Z.acceptScrimRequest(request.id).then(data => {
      router.push(`/match/${data.id}`);
    }).catch(err => {
      window.alert('error');
      console.log(err);
      setIsLoading(false);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread(_objectSpread({
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default.Header */ .Z.Header, {
      title: "Incoming scrim request"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default.Body */ .Z.Body, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "mt-4 flex flex-col items-center space-y-1",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "text-center w-[80px] h-[80px]",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: (_fromTeam$logo = fromTeam.logo) !== null && _fromTeam$logo !== void 0 ? _fromTeam$logo : '/assets/images/agent-default.svg',
            alt: ""
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "text-white text-lg font-semibold",
          children: fromTeam.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_ui_rank_division__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          size: "small",
          division: fromTeam.division
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "mt-4 text-white text-center font-roboto",
        children: ["Please, make decision in ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("strong", {
          children: seconds
        }), " seconds."]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default.Footer */ .Z.Footer, {
      className: "justify-between space-x-2",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        onClick: handleDecline,
        className: "flex-1",
        disabled: isLoading,
        children: "Decline"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        shined: true,
        onClick: handleAccept,
        loading: isLoading,
        className: "flex-1",
        type: "accent",
        children: "Accept"
      })]
    })]
  }));
}

/***/ })

};
;