"use strict";
exports.id = 1317;
exports.ids = [1317];
exports.modules = {

/***/ 1317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ui_hexagon)
});

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ui/hexagon/hexagon.js
const _excluded = ["icon", "size", "status", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const IconBackground = ({
  size
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeOpacity: "0.2",
      strokeWidth: "4.103",
      d: "M12.326 6.708L20 2.358l7.674 4.35 7.605 4.47.07 8.822-.07 8.821-7.605 4.471L20 37.642l-7.674-4.35-7.605-4.47L4.651 20l.07-8.821 7.605-4.471z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "currentColor",
      d: "M20 8.75l4.894 2.774 4.849 2.851.045 5.625-.045 5.625-4.85 2.851L20 31.25l-4.894-2.774-4.849-2.851L10.213 20l.044-5.625 4.85-2.851L20 8.75z"
    })]
  });
};

const Hexagon = _ref => {
  let {
    icon,
    size = 40,
    status = null,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
    className: external_clsx_default()('ui-hexagon', className)
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      children: /*#__PURE__*/jsx_runtime_.jsx(IconBackground, {
        size: size
      })
    }), status && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: external_clsx_default()('ui-hexagon__status', {
        'ui-hexagon__status--on': status === 'on',
        'ui-hexagon__status--off': status === 'off'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ui-hexagon__icon",
      children: icon
    })]
  }));
};

/* harmony default export */ const hexagon = (Hexagon);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/ui/hexagon/hexagon-select.js
const hexagon_select_excluded = ["children", "className", "defaultValue", "onSelect"];

function hexagon_select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function hexagon_select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { hexagon_select_ownKeys(Object(source), true).forEach(function (key) { hexagon_select_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { hexagon_select_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hexagon_select_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hexagon_select_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = hexagon_select_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function hexagon_select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function HexagonSelect(_ref) {
  let {
    children,
    className,
    defaultValue = 0,
    onSelect = f => f
  } = _ref,
      props = hexagon_select_objectWithoutProperties(_ref, hexagon_select_excluded);

  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(defaultValue);

  const handleSelect = id => {
    return () => {
      setValue(id);
      onSelect(id);
    };
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", hexagon_select_objectSpread(hexagon_select_objectSpread({
    className: external_clsx_default()('ui-hexagon-select space-x-2', className)
  }, props), {}, {
    children: external_react_.Children.map(children, (child, index) => {
      var _child$props;

      const id = ((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.id) || index;
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: handleSelect(id),
        className: external_clsx_default()('ui-hexagon-select__item', {
          'ui-hexagon-select__item--selected': value === id
        }),
        children: child
      });
    })
  }));
}
;// CONCATENATED MODULE: ./components/ui/hexagon/index.js


hexagon.Select = HexagonSelect;
/* harmony default export */ const ui_hexagon = (hexagon);

/***/ })

};
;