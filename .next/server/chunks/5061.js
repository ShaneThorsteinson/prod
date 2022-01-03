"use strict";
exports.id = 5061;
exports.ids = [5061];
exports.modules = {

/***/ 5061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ModalEditTeam)
/* harmony export */ });
/* harmony import */ var components_ui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4658);
/* harmony import */ var components_ui_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9214);
/* harmony import */ var icons_crosshair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1116);
/* harmony import */ var components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2381);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_ui_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8864);
/* harmony import */ var components_premium_feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9409);
/* harmony import */ var components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7123);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var helpers_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2982);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
const _excluded = ["team", "onClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













function ModalEditTeam(_ref) {
  let {
    team,
    onClose = f => f
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useQueryClient)();
  const {
    mutateAsync,
    isLoading
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)(data => helpers_api_service__WEBPACK_IMPORTED_MODULE_9__/* .default.updateTeam */ .Z.updateTeam(team.id, data), {
    onSuccess: data => {
      queryClient.setQueryData(['team', {
        id: team.id
      }], _objectSpread(_objectSpread({}, team), data));
    }
  });

  const onSubmit = data => {
    mutateAsync(data).then(() => onClose());
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, _objectSpread(_objectSpread({
    width: 600,
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default.Header */ .Z.Header, {
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(icons_crosshair__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        size: 18
      }),
      iconClass: "text-primary-500",
      title: "Edit Team Info",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci orci, laoreet non auctor pulvina."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default.Body */ .Z.Body, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("form", {
        id: "form-edit-team-info",
        onSubmit: handleSubmit(onSubmit),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, _objectSpread(_objectSpread({}, register('name', {
          required: 'Team name is required'
        })), {}, {
          label: "Team name" // message={errors.name?.message}
          ,
          placeholder: "Enter team name",
          status: errors.name && 'error',
          defaultValue: team.name
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_ui_tabs__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        size: "small",
        className: "mt-4",
        defaultActiveKey: "1",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_ui_tabs__WEBPACK_IMPORTED_MODULE_5__/* .default.Item */ .Z.Item, {
          tab: "Select team logo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "mt-4 grid grid-cols-5 gap-x-3 gap-y-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              isSelected: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-1.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-3.png",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-4.png",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-5.png",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-8.png",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-13.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-16.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-18.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-21.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-22.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-24.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-1.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-3.png",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-4.png",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-5.png",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-8.png",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-13.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-16.svg",
              isLocked: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_team_team_logo__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              image: "/demo/agents-logo-18.svg",
              isLocked: true
            })]
          })
        }, "logo"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_ui_tabs__WEBPACK_IMPORTED_MODULE_5__/* .default.Item */ .Z.Item, {
          tab: "Custom team logo",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_premium_feature__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
            className: "mt-10 mb-6"
          })
        }, "custom")]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_ui_modal__WEBPACK_IMPORTED_MODULE_1__/* .default.Footer */ .Z.Footer, {
      className: "justify-between",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        onClick: onClose,
        outlined: true,
        children: "Cancel"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        shined: true,
        loading: isLoading,
        form: "form-edit-team-info",
        htmlType: "submit",
        children: "Save changes"
      })]
    })]
  }));
}

/***/ })

};
;