"use strict";
exports.id = 1879;
exports.ids = [1879];
exports.modules = {

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalCreateTeam)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4658);
/* harmony import */ var components_ui_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9214);
/* harmony import */ var icons_crosshair__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1116);
/* harmony import */ var components_ui_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2381);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8864);
/* harmony import */ var components_premium_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9409);
/* harmony import */ var components_team_team_logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7123);
/* harmony import */ var helpers_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2982);
/* harmony import */ var components_ui_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(325);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
const _excluded = ["onClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















const presetLogos = [{
  key: 0,
  image: null
}, {
  key: 1,
  image: '/demo/agents-logo-1.svg'
}, {
  key: 2,
  image: '/demo/agents-logo-4.png'
}, {
  key: 3,
  image: '/demo/agents-logo-3.png'
}, {
  key: 4,
  image: '/demo/agents-logo-5.png'
}, {
  key: 5,
  image: '/demo/agents-logo-8.png'
}, {
  key: 6,
  image: '/demo/agents-logo-13.svg'
}, {
  key: 7,
  image: '/demo/agents-logo-16.svg'
}, {
  key: 8,
  image: '/demo/agents-logo-18.svg'
}, {
  key: 9,
  image: '/demo/agents-logo-21.svg'
}, {
  key: 10,
  image: '/demo/agents-logo-22.svg'
}, {
  key: 11,
  image: '/demo/agents-logo-24.svg'
}, {
  key: 12,
  image: '/demo/agents-logo-1.svg'
}, {
  key: 13,
  image: '/demo/agents-logo-3.png'
}, {
  key: 14,
  image: '/demo/agents-logo-4.png'
}, {
  key: 15,
  image: '/demo/agents-logo-5.png'
}, {
  key: 16,
  image: '/demo/agents-logo-8.png'
}, {
  key: 17,
  image: '/demo/agents-logo-13.svg'
}, {
  key: 18,
  image: '/demo/agents-logo-16.svg'
}, {
  key: 19,
  image: '/demo/agents-logo-18.svg'
}];
function ModalCreateTeam(_ref) {
  let {
    onClose = f => f
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
  const {
    mutateAsync,
    isLoading,
    error
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(helpers_api_service__WEBPACK_IMPORTED_MODULE_10__/* .default.createTeam */ .Z.createTeam);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const isLocked = false;
  const {
    0: selectedLogo,
    1: setSelectedLogo
  } = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(presetLogos[0]);

  const onSubmit = data => {
    mutateAsync(data).then(responseData => {
      router.push(`/my-account/teams/${responseData.id}`);
    });
  };

  const onSelect = item => {
    return e => {
      e.preventDefault();
      setSelectedLogo(item);
    };
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, _objectSpread(_objectSpread({
    width: 600,
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_ui_modal__WEBPACK_IMPORTED_MODULE_3__/* .default.Header */ .Z.Header, {
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(icons_crosshair__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        size: 18
      }),
      iconClass: "text-primary-500",
      title: "Create a Team",
      description: "Select a team name and logo"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_3__/* .default.Body */ .Z.Body, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("form", {
        id: "form-edit-team-info",
        onSubmit: handleSubmit(onSubmit),
        children: [(selectedLogo === null || selectedLogo === void 0 ? void 0 : selectedLogo.image) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_ui_input__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, _objectSpread(_objectSpread({
          type: "hidden"
        }, register('logo')), {}, {
          value: selectedLogo.image
        })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_ui_input__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, _objectSpread(_objectSpread({}, register('name', {
          required: 'Team name is required'
        })), {}, {
          label: "Team name" // message={errors.name?.message}
          ,
          placeholder: "Enter team name",
          status: errors.name && 'error'
        }))]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
        size: "small",
        className: "mt-4",
        defaultActiveKey: "1",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__/* .default.Item */ .Z.Item, {
          tab: "Select team logo",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
            className: "mt-4 grid grid-cols-5 gap-x-3 gap-y-2",
            children: presetLogos.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, _objectSpread(_objectSpread({}, item), {}, {
              onClick: onSelect(item),
              isSelected: selectedLogo && selectedLogo.key === item.key,
              isLocked: isLocked
            }), item.key))
          })
        }, "logo")
      }), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_ui_message__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
        type: "error",
        children: error.message
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_3__/* .default.Footer */ .Z.Footer, {
      className: "justify-between",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        onClick: onClose,
        outlined: true,
        children: "Cancel"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        shined: true,
        loading: isLoading,
        form: "form-edit-team-info",
        htmlType: "submit",
        children: "Create a Team"
      })]
    })]
  }));
}

/***/ })

};
;