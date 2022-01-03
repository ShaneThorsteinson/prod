"use strict";
exports.id = 3460;
exports.ids = [3460];
exports.modules = {

/***/ 3460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ tournament_card)
});

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./components/ui/label/index.js + 4 modules
var label = __webpack_require__(5127);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./icons/users.js
const _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconUsers(_ref) {
  let {
    size = 14
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 32 32"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M11 20a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM19.427 7.242A6.5 6.5 0 1121.19 20M2 24.675a11.002 11.002 0 0118-.001M21.19 20a10.986 10.986 0 019 4.674"
    })
  }));
}
// EXTERNAL MODULE: ./icons/medal.js
var medal = __webpack_require__(3059);
// EXTERNAL MODULE: ./icons/game-controller.js
var game_controller = __webpack_require__(9031);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "dayjs/plugin/localizedFormat"
var localizedFormat_ = __webpack_require__(2461);
var localizedFormat_default = /*#__PURE__*/__webpack_require__.n(localizedFormat_);
// EXTERNAL MODULE: ./icons/crown.js
var crown = __webpack_require__(4180);
;// CONCATENATED MODULE: ./components/tournament/tournament-card.js












external_dayjs_default().extend((localizedFormat_default()));

const TournamentCard = ({
  className,
  tournament
}) => {
  const classes = external_clsx_default()('bg-dark-500 w-full', className);
  const isFinished = (tournament === null || tournament === void 0 ? void 0 : tournament.state) === 'ended';
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/tournament/${tournament.id}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-wrap h-full",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "h-40 relative w-full",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: external_clsx_default()('absolute inset-0 border-[3px] border-white border-opacity-30', {
                'tournament-past': isFinished
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: tournament.coverImageUrl ? tournament.coverImageUrl : tournament.game.bg,
              className: "h-full object-cover w-full",
              alt: ""
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "relative flex-1 p-6 space-y-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-gray-700 text-[13px] uppercase letter tracking-wide",
              children: external_dayjs_default()(tournament.startAt).format('LLL')
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: external_clsx_default()('font-semibold text-lg leading-6', {
                  'text-gold': !isFinished && tournament.isPrestige,
                  'text-white': !isFinished && !tournament.isPrestige,
                  'text-gray-700': isFinished
                }),
                children: tournament.name
              }), tournament.isPrestige && /*#__PURE__*/jsx_runtime_.jsx(crown/* default */.Z, {
                className: "text-gold"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "grid grid-cols-3",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "text-gray-700 text-xs",
                  children: "Prize Pool:"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex gap-1 items-center mt-1",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                    width: 18,
                    height: 18,
                    src: "/assets/icons/trophy.svg",
                    alt: ""
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "font-semibold text-white",
                    children: ["$", tournament.prizePool]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "text-gray-700 text-xs",
                  children: "Entry Ticket:"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex gap-1 items-center mt-1",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                    width: 18,
                    height: 18,
                    src: "/assets/icons/money-bag.svg",
                    alt: ""
                  }), tournament.ticketPrice === 0 ? /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "font-semibold text-success-500",
                    children: "FREE"
                  }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "font-semibold text-gold",
                    children: ["$", tournament.ticketPrice]
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "text-gray-700 text-xs",
                  children: "Platforms:"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "flex gap-1 items-center mt-1",
                  children: tournament.platforms.map(platform => /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                    height: 18,
                    width: 18,
                    src: `/assets/images/platforms/${platform.toLowerCase()}.svg`
                  }, platform))
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(label/* default.Group */.Z.Group, {
              className: "space-y-1",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(label/* default */.Z, {
                icon: /*#__PURE__*/jsx_runtime_.jsx(IconUsers, {}),
                rounded: true,
                children: [tournament.teamSize, "v", tournament.teamSize]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(label/* default */.Z, {
                icon: /*#__PURE__*/jsx_runtime_.jsx(medal/* default */.Z, {}),
                rounded: true,
                children: ["Bo", tournament.mode]
              }), /*#__PURE__*/jsx_runtime_.jsx(label/* default */.Z, {
                icon: /*#__PURE__*/jsx_runtime_.jsx(game_controller/* default */.Z, {}),
                className: "capitalize",
                rounded: true,
                children: tournament.type.replace(/_/g, ' ')
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex gap-[10px] items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                width: 24,
                height: 24,
                src: tournament.game.icon,
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "text-white font-semibold",
                children: tournament.game.name
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const tournament_card = (TournamentCard);

/***/ }),

/***/ 3059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconMedal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconMedal(_ref) {
  let {
    size = 14
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 32 32"
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M16 22c5.522 0 10-4.477 10-10S21.521 2 16 2C10.475 2 6 6.477 6 12s4.476 10 10 10z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M16 17a5 5 0 100-10 5 5 0 000 10zM22 20v10l-6-3-6 3V20"
    })]
  }));
}

/***/ })

};
;