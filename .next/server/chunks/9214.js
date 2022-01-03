"use strict";
exports.id = 9214;
exports.ids = [9214];
exports.modules = {

/***/ 9214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ui_modal)
});

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(2268);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./hooks/use-lock-body-scroll.js
var use_lock_body_scroll = __webpack_require__(714);
// EXTERNAL MODULE: ./hooks/use-portal.js + 1 modules
var use_portal = __webpack_require__(4556);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ui/modal/modal.js
const _excluded = ["className", "children", "width", "onClose", "shined", "showClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Modal = _ref => {
  let {
    className,
    children,
    width = 460,
    onClose = f => f,
    shined = false,
    showClose = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const classes = external_clsx_default()('ui-modal', {
    'ui-modal--shined': shined
  }, className);
  const el = (0,use_portal/* default */.Z)('ui-modal');
  (0,use_lock_body_scroll/* default */.Z)();

  if (!el) {
    return null;
  }

  return /*#__PURE__*/(0,external_react_dom_.createPortal)( /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
    tabIndex: "-1",
    role: "dialog",
    className: classes
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ui-modal__bg",
      onClick: onClose
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ui-modal__content",
      style: {
        maxWidth: width
      },
      children: [showClose && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "ui-modal__close",
        onClick: onClose
      }), children]
    })]
  })), el);
};

/* harmony default export */ const modal = (Modal);
// EXTERNAL MODULE: ./components/ui/hexagon/index.js + 2 modules
var hexagon = __webpack_require__(1317);
;// CONCATENATED MODULE: ./components/ui/modal/modal-header.js
const modal_header_excluded = ["icon", "iconClass", "title", "description", "className"];

function modal_header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_header_ownKeys(Object(source), true).forEach(function (key) { modal_header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_header_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_header_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_header_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ModalHeader = _ref => {
  let {
    icon,
    iconClass,
    title,
    description,
    className
  } = _ref,
      props = modal_header_objectWithoutProperties(_ref, modal_header_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", modal_header_objectSpread(modal_header_objectSpread({
    className: external_clsx_default()('ui-modal-header', className)
  }, props), {}, {
    children: [icon && /*#__PURE__*/jsx_runtime_.jsx(hexagon/* default */.Z, {
      size: 60,
      icon: icon,
      className: iconClass !== null && iconClass !== void 0 ? iconClass : 'text-primary-500'
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ui-modal-header__title",
      children: title
    }), description && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ui-modal-header__desc",
      children: description
    })]
  }));
};

/* harmony default export */ const modal_header = (ModalHeader);
;// CONCATENATED MODULE: ./components/ui/modal/modal-footer.js
const modal_footer_excluded = ["children", "className"];

function modal_footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_footer_ownKeys(Object(source), true).forEach(function (key) { modal_footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_footer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_footer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_footer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ModalFooter = _ref => {
  let {
    children,
    className
  } = _ref,
      props = modal_footer_objectWithoutProperties(_ref, modal_footer_excluded);

  const classes = external_clsx_default()('ui-modal-footer', className);
  return /*#__PURE__*/jsx_runtime_.jsx("div", modal_footer_objectSpread(modal_footer_objectSpread({
    className: classes
  }, props), {}, {
    children: children
  }));
};

/* harmony default export */ const modal_footer = (ModalFooter);
;// CONCATENATED MODULE: ./components/ui/modal/modal-body.js
const modal_body_excluded = ["children", "className"];

function modal_body_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_body_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_body_ownKeys(Object(source), true).forEach(function (key) { modal_body_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_body_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_body_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_body_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_body_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_body_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ModalBody = _ref => {
  let {
    children,
    className
  } = _ref,
      props = modal_body_objectWithoutProperties(_ref, modal_body_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("div", modal_body_objectSpread(modal_body_objectSpread({
    className: external_clsx_default()('ui-modal-body', className)
  }, props), {}, {
    children: children
  }));
};

/* harmony default export */ const modal_body = (ModalBody);
;// CONCATENATED MODULE: ./components/ui/modal/index.js




modal.Header = modal_header;
modal.Footer = modal_footer;
modal.Body = modal_body;
/* harmony default export */ const ui_modal = (modal);

/***/ })

};
;