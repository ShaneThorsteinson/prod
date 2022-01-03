"use strict";
exports.id = 7230;
exports.ids = [7230];
exports.modules = {

/***/ 7230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalAlert)
/* harmony export */ });
/* harmony import */ var components_ui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4658);
/* harmony import */ var components_ui_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9214);
/* harmony import */ var icons_crosshair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1116);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["title", "icon", "description", "onClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ModalAlert(_ref) {
  let {
    title,
    icon,
    description = null,
    onClose = f => f
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const Icon = icon !== null && icon !== void 0 ? icon : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(icons_crosshair__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    size: 18
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread(_objectSpread({
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default.Header */ .Z.Header, {
      icon: Icon,
      iconClass: "text-primary-500",
      title: title,
      description: description,
      className: "mb-[18px]"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default.Footer */ .Z.Footer, {
      className: "justify-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        onClick: onClose,
        outlined: true,
        children: "Close"
      })
    })]
  }));
}

/***/ })

};
;