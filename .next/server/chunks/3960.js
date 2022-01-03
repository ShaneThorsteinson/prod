"use strict";
exports.id = 3960;
exports.ids = [3960];
exports.modules = {

/***/ 9409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PremiumFeature)
});

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./components/ui/button/index.js + 3 modules
var ui_button = __webpack_require__(4658);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/premium-feature/premium-feature.js
const _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function PremiumFeature(_ref) {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const classes = external_clsx_default()('flex flex-col items-center gap-4', className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
    className: classes
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      height: "65",
      width: "70",
      src: "/assets/images/diamond-premium.svg",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-2xl text-white font-semibold text-center max-w-[450px]",
      children: "This feature is allowed for Premium members only."
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-gray-500 font-roboto text-center",
      children: "Please, upgrade your membership."
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/membership",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        size: "small",
        outlined: true,
        children: "upgrade membership"
      })
    })]
  }));
}
;// CONCATENATED MODULE: ./components/premium-feature/index.js


/***/ }),

/***/ 7123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TeamLogo)
});

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./icons/lock-key.js
const _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconLockKey(_ref) {
  let {
    size = 14
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 32 32"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M26 11H6a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V12a1 1 0 00-1-1zM11.5 11V6.5a4.5 4.5 0 119 0V11"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M16 20.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM16 20.5v2"
    })]
  }));
}
;// CONCATENATED MODULE: ./components/team/team-logo.js
const team_logo_excluded = ["image", "className", "isSelected", "isLocked"];

function team_logo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function team_logo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { team_logo_ownKeys(Object(source), true).forEach(function (key) { team_logo_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { team_logo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function team_logo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function team_logo_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = team_logo_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function team_logo_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function TeamLogo(_ref) {
  let {
    image,
    className,
    isSelected = false,
    isLocked = false
  } = _ref,
      props = team_logo_objectWithoutProperties(_ref, team_logo_excluded);

  const classes = external_clsx_default()('team-logo', {
    'team-logo--locked': isLocked,
    'team-logo--selected': isSelected
  }, className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", team_logo_objectSpread(team_logo_objectSpread({
    className: classes
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "team-logo__image",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: image !== null && image !== void 0 ? image : '/assets/images/agent-default.svg',
        alt: ""
      })
    }), isLocked && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "team-logo__lock",
        children: /*#__PURE__*/jsx_runtime_.jsx(IconLockKey, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "team-logo__premium-text",
        children: "Available for Premium users only"
      })]
    })]
  }));
}

/***/ }),

/***/ 8864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ tabs)
});

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "rc-tabs"
var external_rc_tabs_ = __webpack_require__(1224);
var external_rc_tabs_default = /*#__PURE__*/__webpack_require__.n(external_rc_tabs_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ui/tabs/tabs.js
const _excluded = ["className", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// https://github.com/react-component/tabs




function Tabs(_ref) {
  let {
    className,
    size = null
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const classes = external_clsx_default()({
    'ui-tabs--size-lg': size === 'large',
    'ui-tabs--size-sm': size === 'small'
  }, className);
  return /*#__PURE__*/jsx_runtime_.jsx((external_rc_tabs_default()), _objectSpread({
    moreIcon: "...",
    prefixCls: "ui-tabs",
    className: classes
  }, props));
}

Tabs.Item = external_rc_tabs_.TabPane;
/* harmony default export */ const tabs = (Tabs);
;// CONCATENATED MODULE: ./components/ui/tabs/index.js


/***/ })

};
;