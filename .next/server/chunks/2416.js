"use strict";
exports.id = 2416;
exports.ids = [2416];
exports.modules = {

/***/ 2416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalConfirm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4658);
/* harmony import */ var components_ui_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(325);
/* harmony import */ var components_ui_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9214);
/* harmony import */ var icons_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8087);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["title", "description", "icon", "onClose", "onSuccess", "confirmText", "confirmFn", "confirmFnAsync", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function ModalConfirm(_ref) {
  let {
    title,
    description = null,
    icon,
    onClose = f => f,
    onSuccess = f => f,
    confirmText,
    confirmFn,
    confirmFnAsync,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const handleConfrim = () => {
    if (!confirmFn && !confirmFnAsync) {
      throw new Error('confirmFn required');
    }

    setMessage(null);

    if (confirmFnAsync) {
      setIsLoading(true);
      confirmFnAsync().then(onSuccess).finally(() => setIsLoading(false)).catch(err => setMessage(err.message));
      return;
    }

    confirmFn();
    onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, _objectSpread(_objectSpread({
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_ui_modal__WEBPACK_IMPORTED_MODULE_3__/* .default.Header */ .Z.Header, {
      icon: icon !== null && icon !== void 0 ? icon : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(icons_warning__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        size: 16
      }),
      iconClass: "text-primary-500",
      title: title,
      description: description,
      className: "mb-[18px]"
    }), message && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_ui_message__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      type: "error",
      onClose: () => setMessage(null),
      children: message
    }), children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_3__/* .default.Footer */ .Z.Footer, {
      className: "justify-between",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        onClick: onClose,
        outlined: true,
        children: "Cancel"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        shined: true,
        onClick: handleConfrim,
        loading: isLoading,
        children: confirmText !== null && confirmText !== void 0 ? confirmText : 'Confirm'
      })]
    })]
  }));
}

/***/ })

};
;