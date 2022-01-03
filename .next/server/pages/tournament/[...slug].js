(() => {
var exports = {};
exports.id = 4865;
exports.ids = [4865];
exports.modules = {

/***/ 7322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _spinner__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7946);


/***/ }),

/***/ 7946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3642);
/* harmony import */ var _spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_spinner_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Spinner({
  className
}) {
  const classes = clsx__WEBPACK_IMPORTED_MODULE_0___default()((_spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrap), className);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: classes,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_spinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().spinner)
    })
  });
}

/***/ }),

/***/ 6064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _block__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8600);


/***/ }),

/***/ 4973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function IconCreditCard(_ref) {
  let {
    size = 14
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 32 32"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M28 7H4a1 1 0 00-1 1v16a1 1 0 001 1h24a1 1 0 001-1V8a1 1 0 00-1-1zM20.5 20.5h4M13.5 20.5h2M3 12.107h26"
    })
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconCreditCard);

/***/ }),

/***/ 2368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TournamentPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./components/layout/index.js
var layout = __webpack_require__(9993);
// EXTERNAL MODULE: ./components/ui/container/index.js + 1 modules
var container = __webpack_require__(9650);
// EXTERNAL MODULE: ./components/ui/tabs/index.js + 1 modules
var tabs = __webpack_require__(8864);
// EXTERNAL MODULE: ./containers/section-featured-teams.js + 1 modules
var section_featured_teams = __webpack_require__(826);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "dayjs/plugin/localizedFormat"
var localizedFormat_ = __webpack_require__(2461);
var localizedFormat_default = /*#__PURE__*/__webpack_require__.n(localizedFormat_);
// EXTERNAL MODULE: ./icons/crown.js
var crown = __webpack_require__(4180);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/tournament/tournament-header.js








external_dayjs_default().extend((localizedFormat_default()));

const TournamentHeader = ({
  tournament
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "tournament-header",
      children: /*#__PURE__*/jsx_runtime_.jsx(container/* default */.Z, {
        className: "w-full text-center md:text-left md:flex md:items-center",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "md:flex md:items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "tournament-header__cover md:mr-4 lg:mr-6",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "tournament-header__cover-wrap",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: tournament.coverImageUrl ? tournament.coverImageUrl : '/demo/tournament-card-image-1.png',
                alt: ""
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-4 md:mt-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-gray-500 uppercase text-sm font-roboto",
              children: external_dayjs_default()(tournament.startAt).format('LLL')
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mt-2 flex items-center gap-3",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: external_clsx_default()('font-semibold text-2xl lg:text-3xl', {
                  'text-gold': tournament.isPrestige,
                  'text-white': !tournament.isPrestige
                }),
                children: tournament.name
              }), tournament.isPrestige && /*#__PURE__*/jsx_runtime_.jsx(crown/* default */.Z, {
                size: 24,
                className: "text-gold"
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const tournament_header = (TournamentHeader);
// EXTERNAL MODULE: ./components/section/index.js + 3 modules
var section = __webpack_require__(2713);
// EXTERNAL MODULE: ./components/ui/block/index.js
var block = __webpack_require__(6064);
// EXTERNAL MODULE: ./components/ui/hexagon/index.js + 2 modules
var hexagon = __webpack_require__(1317);
// EXTERNAL MODULE: ./icons/info.js
var info = __webpack_require__(1120);
// EXTERNAL MODULE: ./icons/trophy.js
var trophy = __webpack_require__(5114);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/ui/button/index.js + 3 modules
var ui_button = __webpack_require__(4658);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/tournament/tournament-details.js





function TournamentDetails({
  className,
  tournament
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-sm uppercase text-gray-700",
          children: "Entry Ticket:"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "font-semibold text-white",
          children: ["$", tournament.ticketPrice]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-sm uppercase text-gray-700",
          children: "Platforms:"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex gap-1",
          children: tournament.platforms.map(platform => /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            height: 18,
            width: 18,
            src: `/assets/images/platforms/${platform.toLowerCase()}.svg`
          }, platform))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-sm uppercase text-gray-700",
          children: "Team Size:"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "font-semibold text-white",
          children: tournament.teamSize
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-sm uppercase text-gray-700",
          children: "Tournament Type:"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "font-semibold text-white capitalize",
          children: tournament.type.replace(/_/g, ' ')
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-sm uppercase text-gray-700",
          children: "Players in Match:"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "font-semibold text-white",
          children: [tournament.teamSize, "v", tournament.teamSize]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-sm uppercase text-gray-700",
          children: "Game Mode:"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "font-semibold text-white",
          children: ["Best of ", tournament.mode]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-sm uppercase text-gray-700",
          children: "Prize Pool:"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex gap-1",
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
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-6",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/tournament/${tournament.id}/rules`,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          type: "secondary",
          className: "w-full",
          children: "Tournament Rules"
        })
      })
    })]
  });
}
// EXTERNAL MODULE: ./hooks/use-auth.js
var use_auth = __webpack_require__(7068);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./helpers/api-service.js
var api_service = __webpack_require__(2982);
// EXTERNAL MODULE: external "beautiful-react-hooks"
var external_beautiful_react_hooks_ = __webpack_require__(1767);
;// CONCATENATED MODULE: ./components/countdown/countdown.js
const _excluded = ["date", "onSuccess"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Countdown(_ref) {
  let {
    date = '2021-12-31 00:00:00',
    onSuccess = f => f
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const countDownDate = new Date(date).getTime();
  const {
    0: now,
    1: setNow
  } = (0,external_react_.useState)(new Date().getTime());
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(distance % (1000 * 60) / 1000);
  const [isCleared, clearInterval] = (0,external_beautiful_react_hooks_.useInterval)(() => {
    setNow(Date.now());
  }, 1000);
  (0,external_react_.useEffect)(() => {
    if (distance <= 0) {
      clearInterval();
      onSuccess();
    }
  }, [distance]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-white max-w-[630px] mx-auto countdown",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-bold text-8xl",
          children: isCleared ? 0 : days
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "font-semibold text-lg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-primary-500",
            children: "D"
          }), "ays"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "countdown-divider"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-bold text-8xl",
          children: isCleared ? 0 : hours
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "font-semibold text-lg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-primary-500",
            children: "H"
          }), "ours"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "countdown-divider"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-bold text-8xl",
          children: isCleared ? 0 : minutes
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "font-semibold text-lg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-primary-500",
            children: "M"
          }), "inutes"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "countdown-divider"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-bold text-8xl",
          children: isCleared ? 0 : seconds
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "font-semibold text-lg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-primary-500",
            children: "S"
          }), "econds"]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-white text-center mt-10",
      children: ["This page will ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-primary-500",
        children: "automatically update"
      }), " itself to show the bracket when the tournament started."]
    })]
  }));
}
;// CONCATENATED MODULE: ./icons/record.js
const record_excluded = ["size"];

function record_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function record_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { record_ownKeys(Object(source), true).forEach(function (key) { record_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { record_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function record_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function record_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = record_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function record_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function IconRecord(_ref) {
  let {
    size = 14
  } = _ref,
      props = record_objectWithoutProperties(_ref, record_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", record_objectSpread(record_objectSpread({
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
      d: "M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M16 23a7 7 0 100-14 7 7 0 000 14z"
    })]
  }));
}

/* harmony default export */ const record = (IconRecord);
;// CONCATENATED MODULE: ./components/tournament/images/registration-phase.js


function ImageRegistrationPhase({
  isActive = false
}) {
  if (isActive) {
    return /*#__PURE__*/jsx_runtime_.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "98",
      height: "100",
      viewBox: "0 0 98 100",
      children: /*#__PURE__*/jsx_runtime_.jsx("g", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "none",
        strokeWidth: "1",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
          fillRule: "nonzero",
          children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
            fill: "#FFF",
            opacity: "0.1",
            transform: "translate(5)",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M44 0L88 25 88 75 44 100 0 75 0 25z"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            d: "M49 0L93 25 93 75 49 100 5 75 5 25z",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            d: "M49.499 20L75.999 35 75.999 65 49.499 80 22.999 65 22.999 35z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            d: "M70.238 79.295a2.779 2.779 0 011.02 2.163v4.797H26.924v-4.797c0-.837.368-1.633 1.021-2.163 6.001-4.94 12.513-8.226 13.758-8.839a2.492 2.492 0 001.388-2.204v-9.594c0-.674-.347-1.306-.898-1.674a2.458 2.458 0 01-1.103-2.041v-9.94c0-3.838 3.123-6.941 6.94-6.941h2.144c3.837 0 6.94 3.123 6.94 6.94v9.94c0 .817-.408 1.593-1.102 2.042-.572.368-.898 1-.898 1.674v9.594c0 .939.55 1.796 1.388 2.204 1.224.613 7.736 3.92 13.737 8.839z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            d: "M58.371 29.953h-18.73c-.975 0-1.81-.708-1.99-1.682l-2.116-11.473a2.082 2.082 0 01.735-2.002 1.996 1.996 0 012.08-.267l4.538 2.054 4.37-7.63c.73-1.268 2.772-1.268 3.501 0l4.37 7.63 4.538-2.054a1.996 1.996 0 012.08.267c.592.477.873 1.248.735 2.002L60.367 28.27c-.184.974-1.02 1.682-1.996 1.682zm-17.05-4.13h15.37l1.091-5.925-2.671 1.209c-.946.421-2.05.06-2.572-.848l-3.533-6.17-3.536 6.173a2.014 2.014 0 01-2.571.848l-2.672-1.212 1.094 5.925z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            d: "M31.01 69.372c-.361 0-.7-.095-.992-.262v.001c-1.89-1.123-3.334-1.844-3.804-2.064a2.35 2.35 0 01-1.327-2.123v-3.557a2.092 2.092 0 01-.005-.138v-3.715c0-.674.327-1.306.899-1.674a1.43 1.43 0 00.653-1.204V46.94a4.913 4.913 0 00-4.9-4.898h-1.648a4.913 4.913 0 00-4.899 4.898v7.696c0 .49.245.939.653 1.204.572.368.898 1 .898 1.674v3.715c0 .046-.001.092-.004.138v3.557a2.35 2.35 0 01-1.327 2.123c-.96.449-5.96 2.98-10.553 6.756a1.74 1.74 0 00-.612 1.327v3.245h14.41c1.123 0 2.021.898 2.021 2.021h5.74L37 71l-4.18-2.77a2.007 2.007 0 01-1.81 1.142z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFA91E",
            d: "M18.453 82.417H2.02A2.012 2.012 0 010 80.396V75.15c0-1.735.776-3.347 2.103-4.45 4.062-3.347 8.389-5.756 10.39-6.797v-5.45a5.494 5.494 0 01-1.552-3.817V46.94c0-4.919 4-8.94 8.94-8.94h1.658c4.94 0 8.941 4.021 8.941 8.94v7.696c0 1.45-.572 2.796-1.551 3.817v5.45c.764.398 1.869.996 3.169 1.77l-.003.004a2.007 2.007 0 01-2.077 3.433v.001c-1.89-1.123-3.334-1.844-3.804-2.064a2.35 2.35 0 01-1.327-2.123v-3.557a2.092 2.092 0 01-.005-.138v-3.715c0-.674.327-1.306.899-1.674a1.43 1.43 0 00.653-1.204V46.94a4.913 4.913 0 00-4.9-4.898h-1.648a4.913 4.913 0 00-4.899 4.898v7.696c0 .49.245.939.653 1.204.572.368.898 1 .898 1.674v3.715c0 .046-.001.092-.004.138v3.557a2.35 2.35 0 01-1.327 2.123c-.96.449-5.96 2.98-10.553 6.756a1.74 1.74 0 00-.612 1.327v3.245h14.41c1.123 0 2.021.898 2.021 2.021a2.012 2.012 0 01-2.02 2.021zM79.547 82.417H95.98A2.012 2.012 0 0098 80.396V75.15a5.77 5.77 0 00-2.102-4.45c-4.062-3.347-8.39-5.756-10.39-6.797v-5.45a5.492 5.492 0 001.551-3.817V46.94c0-4.919-4-8.94-8.94-8.94H76.46c-4.94 0-8.941 4.021-8.941 8.94v7.696c0 1.45.572 2.796 1.551 3.817v5.45c-.764.398-1.869.996-3.169 1.77l.003.004a2.007 2.007 0 002.077 3.433v.001c1.89-1.123 3.334-1.844 3.804-2.064a2.35 2.35 0 001.327-2.123v-3.557c.003-.046.005-.092.005-.138v-3.715c0-.674-.327-1.306-.899-1.674a1.43 1.43 0 01-.653-1.204V46.94a4.913 4.913 0 014.9-4.898h1.648a4.913 4.913 0 014.899 4.898v7.696c0 .49-.245.939-.653 1.204-.572.368-.898 1-.898 1.674v3.715c0 .046.001.092.004.138v3.557c0 .898.51 1.735 1.327 2.123.96.449 5.96 2.98 10.553 6.756.388.327.612.817.612 1.327v3.245h-14.41c-1.123 0-2.021.898-2.021 2.021 0 1.123.898 2.021 2.02 2.021z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            d: "M66.99 69.372c.361 0 .7-.095.992-.262v.001c1.89-1.123 3.334-1.844 3.804-2.064a2.35 2.35 0 001.327-2.123v-3.557c.003-.046.005-.092.005-.138v-3.715c0-.674-.327-1.306-.899-1.674a1.43 1.43 0 01-.653-1.204V46.94a4.913 4.913 0 014.9-4.898h1.648a4.913 4.913 0 014.899 4.898v7.696c0 .49-.245.939-.653 1.204-.572.368-.898 1-.898 1.674v3.715c0 .046.001.092.004.138v3.557c0 .898.51 1.735 1.327 2.123.96.449 5.96 2.98 10.553 6.756.388.327.612.817.612 1.327v3.245h-14.41c-1.123 0-2.021.898-2.021 2.021h-5.74L61 71l4.18-2.77a2.007 2.007 0 001.81 1.142z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            d: "M61.134 54.922v-9.94c0-6.063-4.92-10.982-10.981-10.982h-2.144c-6.062 0-10.982 4.92-10.982 10.982v9.94c0 1.797.735 3.47 2 4.695v7.655c-2.387 1.225-8.225 4.409-13.675 8.9a6.79 6.79 0 00-2.49 5.286v6.818c0 1.123.898 2.021 2.02 2.021H73.26c1.123 0 2.02-.898 2.02-2.021v-6.818a6.79 6.79 0 00-2.49-5.286c-5.45-4.47-11.287-7.675-13.676-8.9v-7.655a6.418 6.418 0 002.021-4.694zm9.104 24.373a2.779 2.779 0 011.02 2.163v4.797H26.924v-4.797c0-.837.368-1.633 1.021-2.163 6.001-4.94 12.513-8.226 13.758-8.839a2.492 2.492 0 001.388-2.204v-9.594c0-.674-.347-1.306-.898-1.674a2.458 2.458 0 01-1.103-2.041v-9.94c0-3.838 3.123-6.941 6.94-6.941h2.144c3.837 0 6.94 3.123 6.94 6.94v9.94c0 .817-.408 1.593-1.102 2.042-.572.368-.898 1-.898 1.674v9.594c0 .939.55 1.796 1.388 2.204 1.224.613 7.736 3.92 13.737 8.839z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            d: "M41.321 25.823h15.37l1.091-5.925-2.671 1.209c-.946.421-2.05.06-2.572-.848l-3.533-6.17-3.536 6.173a2.014 2.014 0 01-2.571.848l-2.672-1.212 1.094 5.925z"
          })]
        })
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "98",
    height: "100",
    fill: "none",
    viewBox: "0 0 98 100",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M49 .001l44 25v50l-44 25-44-25v-50l44-25z",
      opacity: "0.05"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#5F5F65",
      d: "M18.453 82.418H2.02A2.012 2.012 0 010 80.398V75.15c0-1.735.776-3.347 2.102-4.45 4.062-3.347 8.39-5.756 10.39-6.797v-5.45a5.494 5.494 0 01-1.551-3.817V46.94c0-4.919 4-8.94 8.94-8.94h1.658c4.94 0 8.941 4.021 8.941 8.94v7.696c0 1.45-.572 2.796-1.551 3.817v5.45c.764.398 1.869.996 3.169 1.77l-.003.004a2.007 2.007 0 01-2.077 3.433v.001c-1.89-1.123-3.334-1.844-3.804-2.064a2.35 2.35 0 01-1.327-2.123v-3.557a2.092 2.092 0 01-.005-.138v-3.715c0-.674.327-1.306.899-1.674a1.43 1.43 0 00.653-1.204V46.94a4.913 4.913 0 00-4.9-4.898h-1.648a4.913 4.913 0 00-4.899 4.898v7.696c0 .49.245.939.653 1.204.572.368.898 1 .898 1.674v3.715c0 .046-.001.092-.004.138v3.557a2.35 2.35 0 01-1.327 2.123c-.96.449-5.96 2.98-10.553 6.756a1.74 1.74 0 00-.612 1.327v3.245h14.41c1.123 0 2.021.898 2.021 2.021 0 1.123-.898 2.02-2.02 2.02zM79.547 82.418H95.98c1.123 0 2.021-.898 2.021-2.02V75.15a5.768 5.768 0 00-2.103-4.45c-4.062-3.347-8.389-5.756-10.39-6.797v-5.45a5.494 5.494 0 001.552-3.817V46.94c0-4.919-4-8.94-8.94-8.94H76.46c-4.94 0-8.941 4.021-8.941 8.94v7.696c0 1.45.572 2.796 1.551 3.817v5.45c-.764.398-1.869.996-3.169 1.77l.003.004a2.007 2.007 0 002.077 3.433v.001c1.89-1.123 3.334-1.844 3.804-2.064a2.35 2.35 0 001.327-2.123v-3.557c.003-.046.005-.092.005-.138v-3.715c0-.674-.327-1.306-.899-1.674a1.43 1.43 0 01-.653-1.204V46.94a4.913 4.913 0 014.9-4.898h1.648a4.913 4.913 0 014.899 4.898v7.696c0 .49-.245.939-.653 1.204-.572.368-.898 1-.898 1.674v3.715c0 .046.001.092.004.138v3.557c0 .898.51 1.735 1.327 2.123.96.449 5.96 2.98 10.553 6.756.388.327.612.817.612 1.327v3.245h-14.41c-1.123 0-2.021.898-2.021 2.021 0 1.123.898 2.02 2.02 2.02z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#808087",
      d: "M61.134 54.923v-9.94C61.134 38.92 56.214 34 50.153 34h-2.144c-6.062 0-10.982 4.92-10.982 10.982v9.94c0 1.797.735 3.47 2 4.695v7.655c-2.387 1.225-8.225 4.409-13.675 8.9a6.79 6.79 0 00-2.49 5.286v6.818c0 1.123.898 2.02 2.02 2.02H73.26c1.123 0 2.02-.897 2.02-2.02v-6.818a6.79 6.79 0 00-2.49-5.286c-5.45-4.47-11.287-7.675-13.676-8.9v-7.655a6.418 6.418 0 002.021-4.695zm9.104 24.373a2.78 2.78 0 011.02 2.163v4.797H26.924V81.46a2.78 2.78 0 011.021-2.163c6.001-4.94 12.513-8.227 13.758-8.839a2.492 2.492 0 001.388-2.204v-9.594c0-.674-.347-1.306-.898-1.674a2.458 2.458 0 01-1.103-2.041v-9.94c0-3.838 3.123-6.941 6.94-6.941h2.144c3.837 0 6.94 3.123 6.94 6.94v9.94c0 .817-.408 1.593-1.102 2.042-.572.367-.898 1-.898 1.674v9.594c0 .939.55 1.796 1.388 2.204 1.224.613 7.736 3.92 13.737 8.839zM58.371 29.954h-18.73c-.975 0-1.81-.708-1.99-1.682l-2.116-11.473a2.082 2.082 0 01.735-2.002 1.996 1.996 0 012.08-.267l4.538 2.054 4.37-7.63c.73-1.268 2.772-1.268 3.501 0l4.37 7.63 4.538-2.054a1.995 1.995 0 012.08.267c.592.477.873 1.247.735 2.002l-2.115 11.473c-.184.974-1.02 1.682-1.996 1.682zm-17.05-4.13h15.37l1.091-5.925-2.671 1.209c-.946.421-2.05.06-2.572-.848l-3.533-6.17-3.536 6.172a2.014 2.014 0 01-2.571.848L40.227 19.9l1.094 5.925z"
    })]
  });
}
;// CONCATENATED MODULE: ./components/tournament/images/eligibility-phase.js


function ImageEligibilityPhase({
  isActive = false
}) {
  if (isActive) {
    return /*#__PURE__*/jsx_runtime_.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "98",
      height: "100",
      viewBox: "0 0 98 100",
      children: /*#__PURE__*/jsx_runtime_.jsx("g", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "none",
        strokeWidth: "1",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
            fill: "#FFF",
            fillRule: "nonzero",
            opacity: "0.1",
            transform: "translate(5)",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M44 0L88 25 88 75 44 100 0 75 0 25z"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            fillRule: "nonzero",
            d: "M49 0L93 25 93 75 49 100 5 75 5 25z",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            fillRule: "nonzero",
            d: "M49.499 20L75.999 35 75.999 65 49.499 80 22.999 65 22.999 35z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            fillRule: "nonzero",
            d: "M64.413 47.299V42.4c0-.46-.2-.88-.54-1.16-4.278-3.518-8.916-5.837-9.795-6.277a2.29 2.29 0 01-1.28-2.06v-6.897c0-.66.32-1.279.88-1.639.36-.24.56-.62.56-1.04v-7.157c0-2.458-2-4.458-4.459-4.458h-1.54c-2.458 0-4.457 2-4.457 4.458v7.157c0 .42.22.8.56 1.04.54.36.88.98.88 1.64v6.897c0 .86-.5 1.679-1.28 2.059-.9.42-5.518 2.759-9.796 6.277-.34.28-.54.7-.54 1.14v4.898c0 1.1-.88 1.979-1.98 1.979l34.764.02a1.97 1.97 0 01-1.977-1.98zM94.041 87.522v2.919H63.234v-2.919c0-.439.2-.859.54-1.139 4.278-3.519 8.896-5.858 9.796-6.278.8-.38 1.279-1.18 1.279-2.059V71.15c0-.66-.34-1.28-.88-1.64a1.28 1.28 0 01-.56-1.039v-7.157c0-2.459 2-4.458 4.459-4.458h1.54c2.458 0 4.457 1.999 4.457 4.458v7.157c0 .42-.2.8-.56 1.04-.56.36-.88.98-.88 1.639v6.897c0 .88.5 1.68 1.28 2.059.88.44 5.518 2.759 9.796 6.278.34.28.54.68.54 1.139z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFA91E",
            d: "M36.752 94.399a1.97 1.97 0 001.972-1.979v-4.898a5.38 5.38 0 00-1.979-4.198c-3.758-3.079-7.757-5.318-9.636-6.297v-4.978a5.183 5.183 0 001.44-3.599v-7.157c0-4.638-3.78-8.416-8.417-8.416h-1.54c-4.638 0-8.416 3.778-8.416 8.416v7.157c0 1.36.52 2.639 1.44 3.599v4.978c-1.88.98-5.878 3.218-9.637 6.297A5.41 5.41 0 000 87.522v4.898c0 1.1.88 1.98 1.98 1.98l.026-.001h34.746zm-1.986-3.958v-2.919c0-.459-.2-.859-.54-1.139-4.278-3.519-8.916-5.838-9.796-6.278a2.288 2.288 0 01-1.28-2.059V71.15c0-.66.32-1.28.88-1.64.36-.24.56-.62.56-1.039v-7.157c0-2.459-2-4.458-4.458-4.458h-1.54c-2.459 0-4.458 1.999-4.458 4.458v7.157c0 .42.22.8.56 1.04.54.36.88.98.88 1.639v6.897c0 .88-.48 1.68-1.28 2.059-.9.42-5.518 2.759-9.796 6.278-.34.28-.54.7-.54 1.139v2.919h30.808z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            fillRule: "nonzero",
            d: "M64.413 42.4V47.3c0 1.1.88 1.979 1.98 1.979s1.979-.88 1.979-1.98v-4.897a5.38 5.38 0 00-1.98-4.199c-3.758-3.078-7.756-5.317-9.635-6.297v-4.978c.92-.96 1.439-2.239 1.439-3.599v-7.157c0-4.638-3.778-8.416-8.416-8.416h-1.54c-4.638 0-8.416 3.778-8.416 8.416v7.157c0 1.36.52 2.64 1.439 3.6v4.957c-1.88.98-5.878 3.219-9.636 6.297a5.409 5.409 0 00-1.98 4.199v4.898c0 1.1.88 1.979 1.98 1.979s1.98-.88 1.98-1.98v-4.897c0-.44.199-.86.539-1.14 4.278-3.518 8.896-5.857 9.796-6.277.78-.38 1.28-1.2 1.28-2.06v-6.897c0-.66-.34-1.279-.88-1.639a1.28 1.28 0 01-.56-1.04v-7.157c0-2.458 2-4.458 4.458-4.458h1.54c2.459 0 4.458 2 4.458 4.458v7.157c0 .42-.2.8-.56 1.04-.56.36-.88.98-.88 1.64v6.897c0 .88.5 1.679 1.28 2.059.88.44 5.517 2.759 9.796 6.277.34.28.54.7.54 1.16z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFA91E",
            d: "M96.027 94.399A1.97 1.97 0 0098 92.42v-4.898a5.38 5.38 0 00-1.98-4.198c-3.758-3.079-7.756-5.318-9.636-6.297v-4.978a5.182 5.182 0 001.44-3.599v-7.157c0-4.638-3.779-8.416-8.417-8.416h-1.54c-4.637 0-8.416 3.778-8.416 8.416v7.157c0 1.36.52 2.639 1.44 3.599v4.978c-1.88.98-5.878 3.218-9.636 6.297a5.41 5.41 0 00-1.98 4.198v4.898c0 1.1.88 1.98 1.98 1.98l.026-.001h34.746zm-1.986-3.958v-2.919c0-.459-.2-.859-.54-1.139-4.278-3.519-8.916-5.838-9.796-6.278a2.288 2.288 0 01-1.28-2.059V71.15c0-.66.32-1.28.88-1.64.36-.24.56-.62.56-1.039v-7.157c0-2.459-1.999-4.458-4.458-4.458h-1.54c-2.458 0-4.457 1.999-4.457 4.458v7.157c0 .42.22.8.56 1.04.54.36.879.98.879 1.639v6.897c0 .88-.48 1.68-1.28 2.059-.9.42-5.517 2.759-9.795 6.278-.34.28-.54.7-.54 1.139v2.919H94.04z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            fillRule: "nonzero",
            d: "M34.766 87.522v2.919H3.958v-2.919c0-.439.2-.859.54-1.139 4.278-3.519 8.896-5.858 9.796-6.278.8-.38 1.28-1.18 1.28-2.059V71.15c0-.66-.34-1.28-.88-1.64a1.28 1.28 0 01-.56-1.039v-7.157c0-2.459 2-4.458 4.458-4.458h1.54c2.459 0 4.458 1.999 4.458 4.458v7.157c0 .42-.2.8-.56 1.04-.56.36-.88.98-.88 1.639v6.897c0 .88.5 1.68 1.28 2.059.88.44 5.518 2.759 9.796 6.278.34.28.54.68.54 1.139z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            fillRule: "nonzero",
            d: "M49 77.766c1.1 0 1.979-.88 1.979-1.979v-2.659h.22c3.738 0 6.797-3.038 6.797-6.797a6.792 6.792 0 00-6.797-6.797H46.8a2.85 2.85 0 01-2.84-2.84c0-1.558 1.28-2.818 2.84-2.818h7.736c1.1 0 1.98-.88 1.98-1.98 0-1.099-.88-1.978-1.98-1.978H50.96v-2.62c0-1.099-.88-1.978-1.98-1.978-1.099 0-1.978.88-1.978 1.979v2.619h-.2c-3.739 0-6.798 3.038-6.798 6.797 0 3.738 3.04 6.797 6.798 6.797h4.398a2.85 2.85 0 012.839 2.839 2.85 2.85 0 01-2.84 2.839h-7.896c-1.1 0-1.98.88-1.98 1.979 0 1.1.88 1.98 1.98 1.98h3.719v2.658c0 1.08.88 1.96 1.979 1.96z"
          })]
        })
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "98",
    height: "100",
    fill: "none",
    viewBox: "0 0 98 100",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M49 0l44 25v50l-44 25L5 75V25L49 0z",
      opacity: "0.05"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#808087",
      d: "M64.413 42.4V47.3c0 1.1.88 1.979 1.98 1.979s1.979-.88 1.979-1.98v-4.897a5.38 5.38 0 00-1.98-4.199c-3.758-3.078-7.756-5.317-9.635-6.297v-4.978c.92-.96 1.439-2.239 1.439-3.599v-7.157c0-4.638-3.778-8.416-8.416-8.416h-1.54c-4.638 0-8.416 3.778-8.416 8.416v7.157c0 1.36.52 2.64 1.439 3.6v4.957c-1.88.98-5.878 3.219-9.636 6.297a5.409 5.409 0 00-1.98 4.199v4.898c0 1.1.88 1.979 1.98 1.979s1.98-.88 1.98-1.98v-4.897c0-.44.199-.86.539-1.14 4.278-3.518 8.896-5.857 9.796-6.277.78-.38 1.28-1.2 1.28-2.06v-6.897c0-.66-.34-1.279-.88-1.639a1.28 1.28 0 01-.56-1.04v-7.157c0-2.458 2-4.458 4.458-4.458h1.54c2.459 0 4.458 2 4.458 4.458v7.157c0 .42-.2.8-.56 1.04-.56.36-.88.98-.88 1.64v6.897c0 .88.5 1.679 1.28 2.059.88.44 5.517 2.759 9.796 6.277.34.28.54.7.54 1.16z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#5F5F65",
      fillRule: "evenodd",
      d: "M96.027 94.4A1.971 1.971 0 0098 92.42v-4.898a5.38 5.38 0 00-1.98-4.198c-3.758-3.079-7.756-5.318-9.636-6.297v-4.978a5.183 5.183 0 001.44-3.599v-7.157c0-4.638-3.779-8.416-8.417-8.416h-1.54c-4.637 0-8.416 3.778-8.416 8.416v7.157c0 1.36.52 2.639 1.44 3.599v4.978c-1.88.98-5.878 3.218-9.636 6.297a5.41 5.41 0 00-1.98 4.198v4.898c0 1.1.88 1.98 1.98 1.98H96.027zm-1.986-3.959v-2.919c0-.46-.2-.86-.54-1.14-4.278-3.518-8.916-5.837-9.796-6.277a2.29 2.29 0 01-1.28-2.059V71.15c0-.66.32-1.28.88-1.64.36-.24.56-.62.56-1.039v-7.157c0-2.459-1.999-4.458-4.458-4.458h-1.54c-2.458 0-4.457 1.999-4.457 4.458v7.157c0 .42.22.8.56 1.04.54.36.879.98.879 1.639v6.897c0 .88-.48 1.68-1.28 2.06-.9.42-5.517 2.758-9.795 6.277-.34.28-.54.7-.54 1.14v2.918H94.04zM36.752 94.4a1.971 1.971 0 001.972-1.98v-4.898a5.38 5.38 0 00-1.979-4.198c-3.758-3.079-7.757-5.318-9.636-6.297v-4.978a5.183 5.183 0 001.44-3.599v-7.157c0-4.638-3.78-8.416-8.417-8.416h-1.54c-4.638 0-8.416 3.778-8.416 8.416v7.157c0 1.36.52 2.639 1.44 3.599v4.978c-1.88.98-5.878 3.218-9.637 6.297A5.41 5.41 0 000 87.522v4.898c0 1.1.88 1.98 1.98 1.98H36.751zm-1.986-3.959v-2.919c0-.46-.2-.86-.54-1.14-4.278-3.518-8.916-5.837-9.796-6.277a2.29 2.29 0 01-1.28-2.059V71.15c0-.66.32-1.28.88-1.64.36-.24.56-.62.56-1.039v-7.157c0-2.459-2-4.458-4.458-4.458h-1.54c-2.459 0-4.458 1.999-4.458 4.458v7.157c0 .42.22.8.56 1.04.54.36.88.98.88 1.639v6.897c0 .88-.48 1.68-1.28 2.06-.9.42-5.518 2.758-9.796 6.277-.34.28-.54.7-.54 1.14v2.918h30.808z",
      clipRule: "evenodd"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#808087",
      d: "M49 77.766c1.1 0 1.979-.88 1.979-1.979v-2.659h.22c3.738 0 6.797-3.038 6.797-6.797a6.792 6.792 0 00-6.797-6.797H46.8a2.85 2.85 0 01-2.84-2.84c0-1.558 1.28-2.818 2.84-2.818h7.736c1.1 0 1.98-.88 1.98-1.98 0-1.099-.88-1.978-1.98-1.978H50.96v-2.62c0-1.099-.88-1.978-1.98-1.978-1.099 0-1.978.88-1.978 1.979v2.619h-.2c-3.739 0-6.798 3.038-6.798 6.797 0 3.738 3.04 6.797 6.798 6.797h4.398a2.85 2.85 0 012.839 2.839 2.85 2.85 0 01-2.84 2.839h-7.896c-1.1 0-1.98.88-1.98 1.979 0 1.1.88 1.98 1.98 1.98h3.719v2.658c0 1.08.88 1.96 1.979 1.96z"
    })]
  });
}
;// CONCATENATED MODULE: ./components/tournament/images/tournament-phase.js


function ImageTournamentPhase({
  isActive = false
}) {
  if (isActive) {
    return /*#__PURE__*/jsx_runtime_.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "94",
      height: "100",
      viewBox: "0 0 94 100",
      children: /*#__PURE__*/jsx_runtime_.jsx("g", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "none",
        strokeWidth: "1",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
            fill: "#FFF",
            fillRule: "nonzero",
            opacity: "0.1",
            transform: "translate(3)",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M44 0L88 25 88 75 44 100 0 75 0 25z"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            fillRule: "nonzero",
            d: "M47 0L91 25 91 75 47 100 3 75 3 25z",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            fillRule: "nonzero",
            d: "M47.4994 19.9999L73.9994 34.9999 73.9994 64.9999 47.4994 79.9999 20.9994 64.9999 20.9994 34.9999z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            fillRule: "nonzero",
            d: "M2.766 77.786H22.834000000000003V93.205H2.766z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            fillRule: "nonzero",
            d: "M70.746 65.198H90.814V93.20599999999999H70.746z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            fillRule: "nonzero",
            d: "M36.966 52.78H57.034000000000006V93.205H36.966z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#232326",
            fillRule: "nonzero",
            d: "M33.6865 10.3075L28.3594 10.3075 28.3594 17.8774 32.9151 26.008 39.5037 29.4425 47.1436 33.0873 53.6621 29.4425 60.6713 26.008 65.5076 17.8774 65.5076 9.4664 60.2508 9.4664 58.0779 7.2935 35.5084 7.2935z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFA91E",
            fillRule: "nonzero",
            d: "M23.93 75.44H2.51c-1.1 0-1.98.88-1.98 1.98v16.6c0 1.1.88 1.98 1.98 1.98h21.42c1.1 0 1.98-.88 1.98-1.98v-16.6c0-1.1-.88-1.98-1.98-1.98zm-1.98 16.6H4.49V79.4h17.48v12.64h-.02z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            d: "M59.7 52.996h-3.96V92.04H38.26V52.996H34.3V94c0 1.1.88 1.98 1.98 1.98h21.44c1.1 0 1.98-.88 1.98-1.98V52.996z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            d: "M52.255 32.946a11.815 11.815 0 002.372-2.034c6.428-1.124 9.84-5.427 11.575-9.719 1.773-4.38 1.888-8.907 1.888-10.536 0-.797-.38-1.428-.773-1.82A2.59 2.59 0 0065.5 8.07h-4.004a65.343 65.343 0 00.008-.224c0-.797-.38-1.428-.773-1.82a2.59 2.59 0 00-1.816-.767H35.084c-.705 0-1.458.256-1.995.898a2.621 2.621 0 00-.593 1.768l.006.145h-4.003a2.59 2.59 0 00-1.816.768c-.393.391-.773 1.022-.773 1.82 0 1.628.116 6.154 1.888 10.535 1.735 4.291 5.147 8.594 11.574 9.719.706.78 1.496 1.472 2.374 2.035v4.329h-.492a7.104 7.104 0 00-.808.013 6.821 6.821 0 00-1.9.407c-.727.275-1.557.756-2.205 1.594-.665.86-1.022 1.95-1.022 3.228v1.005h-.392a1.962 1.962 0 100 3.924H59.073a1.962 1.962 0 000-3.925h-.39v-1.004c0-1.278-.357-2.367-1.021-3.228-.648-.838-1.479-1.32-2.206-1.594a6.821 6.821 0 00-1.9-.408 7.104 7.104 0 00-.807-.013h-.495v-4.329zm-11.194 8.25a1.242 1.242 0 00-.056-.002c-.06-.001-.155 0-.273.008a2.912 2.912 0 00-.796.164c-.253.096-.402.21-.489.323-.07.091-.203.31-.203.829v1.005h15.515v-1.005c0-.52-.133-.738-.203-.829-.087-.113-.237-.227-.49-.323a2.912 2.912 0 00-.795-.164 3.146 3.146 0 00-.33-.007 2.015 2.015 0 01-.14.005h-11.6c-.046 0-.092-.002-.139-.005h-.001zM36.499 9.183c.19 2.637.724 7.437 2.105 11.882.799 2.574 1.842 4.895 3.165 6.599.12.115.227.245.315.387 1.38 1.623 2.972 2.508 4.916 2.508 1.945 0 3.537-.886 4.919-2.511.087-.14.19-.267.31-.381 1.323-1.704 2.367-4.026 3.166-6.602 1.38-4.445 1.915-9.245 2.105-11.882H36.5zM48.33 34.397a10.05 10.05 0 01-2.66 0v2.879h2.66v-2.88zm12.852-22.402h2.952c-.09 1.895-.42 4.885-1.57 7.726-.934 2.31-2.37 4.452-4.65 5.859.474-1.095.88-2.226 1.23-3.35 1.12-3.608 1.72-7.382 2.038-10.235zM34.856 22.23c.349 1.124.755 2.254 1.229 3.35-2.28-1.408-3.715-3.55-4.65-5.858-1.149-2.842-1.479-5.832-1.569-7.727h2.951c.317 2.854.919 6.627 2.039 10.235z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFF",
            fillRule: "nonzero",
            d: "M55.719 52.988a1.99 1.99 0 113.98 0 1.99 1.99 0 01-3.98 0zM34.3 52.988a1.99 1.99 0 113.98 0 1.99 1.99 0 01-3.98 0z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "#FFA91E",
            fillRule: "nonzero",
            d: "M91.49 96c1.1 0 1.98-.88 1.98-1.98V63.96c0-1.1-.88-1.98-1.98-1.98H70.07c-1.1 0-1.98.88-1.98 1.98V94c0 1.1.88 1.98 1.98 1.98h21.42V96zM72.05 65.94h17.48v26.1H72.05v-26.1z"
          })]
        })
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "94",
    height: "100",
    fill: "none",
    viewBox: "0 0 94 100",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M47 0l44 25v50l-44 25L3 75V25L47 0z",
      opacity: "0.05"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#5F5F65",
      d: "M23.93 75.44H2.51c-1.1 0-1.98.88-1.98 1.98v16.6c0 1.1.88 1.98 1.98 1.98h21.42c1.1 0 1.98-.88 1.98-1.98v-16.6c0-1.1-.88-1.98-1.98-1.98zm-1.98 16.6H4.49V79.4h17.48v12.64h-.02z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#808087",
      fillRule: "evenodd",
      d: "M59.7 52.996h-3.96V92.04H38.26V52.996H34.3V94c0 1.1.88 1.98 1.98 1.98h21.44c1.1 0 1.98-.88 1.98-1.98V52.996zM52.255 32.946a11.815 11.815 0 002.372-2.034c6.428-1.124 9.84-5.427 11.575-9.719 1.773-4.38 1.888-8.907 1.888-10.536 0-.797-.38-1.428-.773-1.82A2.59 2.59 0 0065.5 8.07h-4.004a65.863 65.863 0 00.008-.224c0-.797-.38-1.428-.773-1.82a2.59 2.59 0 00-1.816-.767H35.084c-.705 0-1.458.256-1.995.898a2.621 2.621 0 00-.593 1.768l.006.145h-4.003a2.59 2.59 0 00-1.816.768c-.393.391-.773 1.022-.773 1.82 0 1.628.116 6.154 1.888 10.535 1.735 4.291 5.147 8.594 11.574 9.719.706.78 1.496 1.472 2.374 2.035v4.329h-.492a7.104 7.104 0 00-.808.013 6.821 6.821 0 00-1.9.407c-.727.275-1.557.756-2.205 1.594-.665.86-1.022 1.95-1.022 3.228v1.005h-.392a1.962 1.962 0 100 3.924H59.073a1.962 1.962 0 100-3.925h-.39v-1.004c0-1.278-.357-2.367-1.021-3.228-.648-.838-1.479-1.32-2.206-1.594a6.821 6.821 0 00-1.9-.408 7.104 7.104 0 00-.807-.013h-.495v-4.329zm-11.194 8.25a1.242 1.242 0 00-.056-.002c-.06-.001-.155 0-.273.008a2.912 2.912 0 00-.796.164c-.253.096-.402.21-.489.323-.07.091-.203.31-.203.829v1.005h15.515v-1.005c0-.52-.133-.738-.203-.829-.087-.113-.237-.227-.49-.323a2.912 2.912 0 00-.795-.164 3.146 3.146 0 00-.33-.007 2.015 2.015 0 01-.14.005h-11.6c-.046 0-.092-.002-.139-.005h-.001zM36.499 9.182c.19 2.638.724 7.438 2.105 11.883.799 2.574 1.842 4.895 3.165 6.599.12.115.227.245.315.387 1.38 1.623 2.972 2.508 4.916 2.508 1.945 0 3.537-.886 4.919-2.511.087-.14.19-.267.31-.381 1.323-1.704 2.367-4.026 3.166-6.602 1.38-4.445 1.915-9.245 2.105-11.883H36.5zM48.33 34.397a10.05 10.05 0 01-2.66 0v2.879h2.66v-2.88zm12.852-22.402h2.952c-.09 1.895-.42 4.885-1.57 7.726-.934 2.31-2.37 4.452-4.65 5.859.474-1.095.88-2.226 1.23-3.35 1.12-3.608 1.72-7.382 2.038-10.235zM34.856 22.23c.349 1.124.755 2.254 1.229 3.35-2.28-1.408-3.715-3.55-4.65-5.858-1.149-2.842-1.479-5.832-1.569-7.727h2.951c.317 2.854.919 6.627 2.039 10.235z",
      clipRule: "evenodd"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#808087",
      d: "M55.719 52.988a1.99 1.99 0 113.98 0 1.99 1.99 0 01-3.98 0zM34.3 52.988a1.99 1.99 0 113.98 0 1.99 1.99 0 01-3.98 0z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#5F5F65",
      d: "M91.49 96c1.1 0 1.98-.88 1.98-1.98V63.96c0-1.1-.88-1.98-1.98-1.98H70.07c-1.1 0-1.98.88-1.98 1.98V94c0 1.1.88 1.98 1.98 1.98h21.42V96zM72.05 65.94h17.48v26.1H72.05v-26.1z"
    })]
  });
}
;// CONCATENATED MODULE: ./components/tournament/tournament-phases.js









const StatusLabel = ({
  children,
  className,
  isActive = false
}) => {
  const classes = external_clsx_default()('py-1 px-2 bg-opacity-5 bg-white rounded-full inline-flex gap-1 items-center whitespace-nowrap', className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes,
    children: [/*#__PURE__*/jsx_runtime_.jsx(record, {
      className: "text-gray-700"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: external_clsx_default()('text-xs', {
        'text-gray-500': !isActive,
        'text-white': isActive
      }),
      children: children
    })]
  });
};

const StatusItem = ({
  image,
  label,
  description,
  isActive = false
}) => {
  const Image = image;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col gap-4 items-center max-w-[124px]",
    children: [/*#__PURE__*/jsx_runtime_.jsx(StatusLabel, {
      className: "sm:hidden",
      active: isActive,
      children: label
    }), isActive ? /*#__PURE__*/jsx_runtime_.jsx(Image, {
      isActive: isActive
    }) : /*#__PURE__*/jsx_runtime_.jsx(Image, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_clsx_default()('text-xs text-center', {
        'text-gray-700': !isActive,
        'text-white': isActive
      }),
      children: description
    })]
  });
};

function TournamentPhases({
  status,
  participant,
  tournament
}) {
  console.log(status);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "hidden sm:flex justify-between items-center gap-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx(StatusLabel, {
        isActive: status === 'registration',
        children: "Registration Phase"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "bg-opacity-5 bg-white h-[1px] flex-1"
      }), /*#__PURE__*/jsx_runtime_.jsx(StatusLabel, {
        isActive: status === 'pending_qualification',
        children: "Eligibility"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "bg-opacity-5 bg-white h-[1px] flex-1"
      }), /*#__PURE__*/jsx_runtime_.jsx(StatusLabel, {
        isActive: status === 'ended' || status === 'in_progress',
        children: "Tournament Phase"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-6 flex justify-between flex-col items-center gap-6 sm:flex-row",
      children: [/*#__PURE__*/jsx_runtime_.jsx(StatusItem, {
        label: "Registration Phase",
        description: "To register, you must be the captain of the team.",
        image: ImageRegistrationPhase,
        isActive: status === 'registration'
      }), /*#__PURE__*/jsx_runtime_.jsx(StatusItem, {
        label: "Eligibility",
        description: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [status === 'pending_qualification' && 'Follow our sponsors twitter accounts to be eligible.', status === 'pending_teammates_payment' && 'All team players must make a payment to continue.', status === 'pending_payment' && 'You need to pay for this tournament.']
        }),
        image: ImageEligibilityPhase,
        isActive: status === 'pending_qualification'
      }), /*#__PURE__*/jsx_runtime_.jsx(StatusItem, {
        label: "Tournament Phase",
        description: "Self-report your match scores here every round.",
        image: ImageTournamentPhase,
        isActive: status === 'ended' || status === 'in_progress'
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/tournament/tournament-status.js











const QualificationButton = ({
  onClickPayment,
  tournament,
  participant
}) => {
  if (tournament.ticketPrice > 0 && !participant.isPaid) {
    return /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
      type: "primary",
      className: "w-full mt-6",
      onClick: onClickPayment,
      children: "Proceed to payment"
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
    type: "primary",
    className: "w-full mt-6",
    disabled: true,
    children: tournament.ticketPrice > 0 && !participant.isTeammatesPaid ? 'Waiting for your teammates payment' : 'Verify Eligibility'
  });
};

function TournamentStatus({
  className,
  onClickRegister,
  onClickPayment,
  onStarted = f => f,
  tournament,
  participant,
  user
}) {
  const {
    status = 'registration'
  } = participant || {};
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [status === 'pending_start' && /*#__PURE__*/jsx_runtime_.jsx(Countdown, {
      date: tournament.startAt,
      onSuccess: onStarted
    }), ['registration', 'pending_qualification', 'ended'].includes(status) && /*#__PURE__*/jsx_runtime_.jsx(TournamentPhases, {
      status: status,
      participant: participant,
      tournament: tournament
    }), !user && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-6",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/signin",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          type: "primary",
          className: "w-full",
          children: "Sign in to continue"
        })
      })
    }), (status === 'finished' || status === 'in_progress') && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-6",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        type: "primary",
        className: "w-full",
        disabled: true,
        children: "Registration ended"
      })
    }), user && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [status === 'registration' && /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        type: "primary",
        className: "w-full mt-6",
        onClick: onClickRegister,
        children: "Register with your team"
      }), status === 'pending_qualification' && /*#__PURE__*/jsx_runtime_.jsx(QualificationButton, {
        status: status,
        participant: participant,
        tournament: tournament,
        onClickPayment: onClickPayment
      })]
    })]
  });
}
;// CONCATENATED MODULE: external "@headlessui/react"
const react_namespaceObject = require("@headlessui/react");
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(3802);
;// CONCATENATED MODULE: ./components/team/team-select-menu.js








function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function TeamSelectMenu({
  items = [],
  onChange
}) {
  var _selectedItem$team$lo;

  const {
    0: selectedItem,
    1: setSelectedItem
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => onChange(selectedItem), [selectedItem]);
  return /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Listbox, {
    value: selectedItem,
    onChange: setSelectedItem,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-1 relative",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.Listbox.Button, {
        className: "relative w-full bg-dark-400 border border-[#34343C] pl-3 pr-10 py-2 text-left focus:outline-none sm:text-sm",
        children: [selectedItem && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: (_selectedItem$team$lo = selectedItem.team.logo) !== null && _selectedItem$team$lo !== void 0 ? _selectedItem$team$lo : '/assets/images/agent-default.svg',
            className: "flex-shrink-0 h-6 w-6 rounded-full",
            width: 24,
            height: 24,
            alt: ""
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "ml-3 block truncate text-white",
            children: selectedItem.team.name
          })]
        }), !selectedItem && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "h-6 flex items-center text-white",
          children: "Select team"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
          children: /*#__PURE__*/jsx_runtime_.jsx(esm/* SelectorIcon */.Ta4, {
            className: "h-5 w-5 text-gray-600",
            "aria-hidden": "true"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Transition, {
        as: external_react_.Fragment,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Listbox.Options, {
          className: "absolute z-10 mt-1 w-full bg-dark-900 shadow-lg max-h-56 text-base ring-1 ring-black ring-opacity-20 overflow-auto focus:outline-none sm:text-sm",
          children: items.map(item => /*#__PURE__*/jsx_runtime_.jsx(react_namespaceObject.Listbox.Option, {
            className: ({
              active
            }) => classNames(active ? 'text-white bg-dark-500' : 'text-[#A7A7AD]', 'select-none relative py-2 pl-3 pr-9 cursor-pointer focus:outline-none'),
            value: item,
            children: ({
              selected,
              active
            }) => {
              var _item$team$logo;

              return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                    alt: "",
                    src: (_item$team$logo = item.team.logo) !== null && _item$team$logo !== void 0 ? _item$team$logo : '/assets/images/agent-default.svg',
                    className: "flex-shrink-0 h-8 w-8",
                    width: 32,
                    height: 32
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: classNames(selected ? 'font-bold' : 'font-normal', 'ml-3 block truncate'),
                    children: item.team.name
                  })]
                }), selected ? /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: classNames(active ? 'text-white' : 'text-[#A7A7AD]', 'absolute inset-y-0 right-0 flex items-center pr-4'),
                  children: /*#__PURE__*/jsx_runtime_.jsx(esm/* CheckIcon */.nQG, {
                    className: "h-5 w-5",
                    "aria-hidden": "true"
                  })
                }) : null]
              });
            }
          }, item.teamId))
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/ui/modal/index.js + 4 modules
var modal = __webpack_require__(9214);
// EXTERNAL MODULE: ./icons/crosshair.js
var crosshair = __webpack_require__(1116);
// EXTERNAL MODULE: ./components/ui/message/message.js
var message_message = __webpack_require__(2087);
;// CONCATENATED MODULE: ./containers/modal-select-team.js
const modal_select_team_excluded = ["onClose", "onClickCreateTeam", "onSelectedTeam", "tournament"];

function modal_select_team_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_select_team_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_select_team_ownKeys(Object(source), true).forEach(function (key) { modal_select_team_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_select_team_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_select_team_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modal_select_team_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_select_team_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_select_team_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












function ModalSelectTeam(_ref) {
  let {
    onClose = f => f,
    onClickCreateTeam,
    onSelectedTeam,
    tournament
  } = _ref,
      props = modal_select_team_objectWithoutProperties(_ref, modal_select_team_excluded);

  const {
    0: selectedTeam,
    1: setSelectedTeam
  } = (0,external_react_.useState)(null);
  const {
    data: items
  } = (0,external_react_query_.useQuery)('my-teams-captain', () => api_service/* default.getMyTeams */.Z.getMyTeams({
    captain: true
  }));
  const {
    mutateAsync: registerAsync,
    isLoading
  } = (0,external_react_query_.useMutation)(data => api_service/* default.registerInTournament */.Z.registerInTournament(tournament.id, data));
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)(null);

  const handleClickRegister = () => {
    if (!selectedTeam) {
      return;
    }

    setMessage(null);

    if (selectedTeam && selectedTeam.team.players.length !== tournament.teamSize) {
      setMessage(`This tournament requires exactly ${tournament.teamSize} players per team!`);
      return;
    }

    registerAsync({
      teamId: selectedTeam.teamId
    }).then(() => {
      onSelectedTeam(selectedTeam);
      onClose();
    }).catch(err => setMessage(err.message));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default */.Z, modal_select_team_objectSpread(modal_select_team_objectSpread({
    width: 600,
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(crosshair/* default */.Z, {
        size: 18
      }),
      iconClass: "text-primary-500",
      title: "Select your Team"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default.Body */.Z.Body, {
      children: [items && items.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mb-3",
          children: /*#__PURE__*/jsx_runtime_.jsx(TeamSelectMenu, {
            items: items,
            onChange: setSelectedTeam
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-center text-gray-500",
          children: "*You can still update your team at any time before the tournament start!"
        })]
      }), items && items.length === 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center text-gray-500",
        children: "You don't have any teams"
      }), message && /*#__PURE__*/jsx_runtime_.jsx(message_message/* default */.Z, {
        className: "mt-4",
        onClose: () => setMessage(null),
        children: message
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default.Footer */.Z.Footer, {
      className: "justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: onClose,
        outlined: true,
        children: "Cancel"
      }), items && items.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          onClick: onClickCreateTeam,
          className: "mr-2",
          outlined: true,
          children: "Create another team"
        }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          onClick: handleClickRegister,
          disabled: !selectedTeam,
          shined: true,
          loading: isLoading,
          children: "Register"
        })]
      }), items && items.length === 0 && /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        shined: true,
        onClick: onClickCreateTeam,
        children: "Create your first team"
      })]
    })]
  }));
}
// EXTERNAL MODULE: ./containers/modal-create-team.js
var modal_create_team = __webpack_require__(1879);
// EXTERNAL MODULE: ./components/ui/label/index.js + 4 modules
var label = __webpack_require__(5127);
// EXTERNAL MODULE: ./components/ui/rank-division/index.js + 1 modules
var rank_division = __webpack_require__(8833);
// EXTERNAL MODULE: ./components/user/index.js + 1 modules
var components_user = __webpack_require__(2931);
;// CONCATENATED MODULE: ./components/tournament/tournament-selected-team.js
const tournament_selected_team_excluded = ["className", "team", "tournament", "onClickPayment"];

function tournament_selected_team_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function tournament_selected_team_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tournament_selected_team_ownKeys(Object(source), true).forEach(function (key) { tournament_selected_team_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tournament_selected_team_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tournament_selected_team_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tournament_selected_team_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = tournament_selected_team_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function tournament_selected_team_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const UserItem = ({
  onClickPayment,
  user,
  isCaptain,
  isPaid,
  isFree = false,
  hasControl
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between items-center py-2.5 px-4 min-w-max",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_user/* default */.Z, {
        user: user,
        status: "online",
        className: "min-w-[240px]",
        isCaptain: isCaptain
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(label/* default */.Z, {
          size: "small",
          rounded: true,
          className: external_clsx_default()('uppercase font-bold px-3 bg-opacity-20', {
            'text-success-500 bg-success-500': isPaid || isFree,
            'text-primary-100 bg-primary-100': !isPaid && !isFree
          }),
          children: isFree ? 'Approved' : isPaid ? 'Paid' : 'Waiting for payment'
        }), !isFree && !isPaid && /*#__PURE__*/jsx_runtime_.jsx(label/* default */.Z, {
          onClick: () => onClickPayment(user),
          size: "small",
          rounded: true,
          className: "bg-yellow-500 text-white cursor-pointer",
          children: "Pay"
        })]
      })]
    })
  });
};

function TournamentSelectedTeam(_ref) {
  let {
    className,
    team,
    tournament,
    onClickPayment
  } = _ref,
      props = tournament_selected_team_objectWithoutProperties(_ref, tournament_selected_team_excluded);

  const classes = external_clsx_default()('p-4 md:pt-6 lg:p-8 lg:pt-6', className);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(block/* default */.Z, tournament_selected_team_objectSpread(tournament_selected_team_objectSpread({
      className: classes
    }, props), {}, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center md:flex-row md:items-start",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-[88px] h-[88px] mr-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/agent-default.svg",
            height: 88,
            width: 88,
            alt: ""
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-1 text-center md:text-left",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "font-semibold text-white text-3xl",
            children: team.name
          }), /*#__PURE__*/jsx_runtime_.jsx(rank_division/* default */.Z, {
            className: "mt-1",
            division: team.division
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-center mt-4 md:mt-0 md:text-right",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(label/* default.Group */.Z.Group, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(label/* default.Stats */.Z.Stats, {
              rounded: true,
              icon: /*#__PURE__*/jsx_runtime_.jsx(crosshair/* default */.Z, {
                size: 18
              }),
              w: 0,
              l: 0
            }), /*#__PURE__*/jsx_runtime_.jsx(label/* default.Stats */.Z.Stats, {
              rounded: true,
              icon: /*#__PURE__*/jsx_runtime_.jsx(trophy/* default */.Z, {}),
              w: 0,
              g: 0
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-4",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "team-info__teammate custom-scroll pb-4 overflow-x-auto mt-2",
          children: team.players.map(({
            user,
            isPaid,
            isCaptain
          }) => /*#__PURE__*/jsx_runtime_.jsx(UserItem, {
            isPaid: isPaid,
            isCaptain: isCaptain,
            isFree: tournament.ticketPrice === 0,
            onClickPayment: onClickPayment,
            user: user
          }, user.id))
        })
      })]
    }))
  });
}
// EXTERNAL MODULE: ./icons/credit-card.js
var credit_card = __webpack_require__(4973);
;// CONCATENATED MODULE: ./icons/check.js
const check_excluded = ["size"];

function check_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function check_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { check_ownKeys(Object(source), true).forEach(function (key) { check_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { check_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function check_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function check_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = check_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function check_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Icon(_ref) {
  let {
    size = 12
  } = _ref,
      props = check_objectWithoutProperties(_ref, check_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("svg", check_objectSpread(check_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 12 13"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "0.889",
      d: "M10.125 3.377l-5.25 5.25L2.25 6.002"
    })
  }));
}

/* harmony default export */ const check = (Icon);
// EXTERNAL MODULE: ./icons/close.js
var icons_close = __webpack_require__(7321);
// EXTERNAL MODULE: ./components/spinner/index.js
var spinner = __webpack_require__(7322);
;// CONCATENATED MODULE: ./containers/modal-payment.js
const modal_payment_excluded = ["onClose", "onSuccess", "description", "title", "payableAmount", "paymentAsync"];

function modal_payment_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = modal_payment_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function modal_payment_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function modal_payment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_payment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_payment_ownKeys(Object(source), true).forEach(function (key) { modal_payment_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_payment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_payment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const SuccessModalContent = ({
  onClose
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(check, {
        size: 18
      }),
      iconClass: "text-primary-500",
      title: "Your payment is Confirmed! Thank you!"
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Footer */.Z.Footer, {
      className: "justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: onClose,
        type: "outline",
        children: "Close"
      })
    })]
  });
};

const ErrorModalContent = ({
  onClose,
  message
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(icons_close/* default */.Z, {
        size: 18
      }),
      iconClass: "text-primary-500",
      title: "Payment error"
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Body */.Z.Body, {
      className: "text-center font-roboto text-gray-500",
      children: message
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Footer */.Z.Footer, {
      className: "justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        onClick: onClose,
        type: "outline",
        children: "Close"
      })
    })]
  });
};

const ChooseModalContent = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(credit_card/* default */.Z, {
        size: 18
      }),
      iconClass: "text-primary-500",
      title: "Chose your payment method"
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Body */.Z.Body, {
      className: "text-center font-roboto text-gray-500",
      children: "We now supports more payment methods and faster payouts with our Wallet"
    }), /*#__PURE__*/jsx_runtime_.jsx(modal/* default.Footer */.Z.Footer, {
      className: "justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/my-account/wallet",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          type: "primary",
          shined: true,
          children: "Pay with our wallet"
        })
      })
    })]
  });
};

const PayModalContent = ({
  amount,
  wallet,
  onClose,
  onSuccess,
  onFailure,
  paymentAsync,
  description = null,
  title = null
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);

  const handleConfirm = () => {
    setIsLoading(true);
    paymentAsync().then(onSuccess).catch(onFailure).finally(() => setIsLoading(false));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(modal/* default.Header */.Z.Header, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(credit_card/* default */.Z, {
        size: 18
      }),
      iconClass: "text-primary-500",
      title: title !== null && title !== void 0 ? title : 'Pay with our Wallet'
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default.Body */.Z.Body, {
      className: "text-center font-roboto text-gray-500",
      children: [description, /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Available balance: ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-green-500 font-bold",
          children: ["$", wallet.amount / 100, " USD"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["You are about to pay: ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("strong", {
          className: "text-white",
          children: ["$", amount, " USD"]
        }), " for the entry player ticket."]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default.Footer */.Z.Footer, {
      className: "justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        type: "outline",
        onClick: onClose,
        children: "Cancel"
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        type: "primary",
        onClick: handleConfirm,
        loading: isLoading,
        shined: true,
        children: "Confirm"
      })]
    })]
  });
};

const initialState = {
  status: 'loading',
  error: null,
  wallet: null,
  receipt: null,
  payableAmount: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'ERROR':
      return modal_payment_objectSpread(modal_payment_objectSpread({}, state), {}, {
        status: 'error',
        error: action.payload
      });

    case 'SUCCESS':
      return modal_payment_objectSpread(modal_payment_objectSpread({}, state), {}, {
        status: 'success'
      });

    case 'PAYMENT':
      return modal_payment_objectSpread(modal_payment_objectSpread({}, state), {}, {
        status: 'payment'
      }, action.payload);

    case 'CHOOSE_PAYMENT':
      return modal_payment_objectSpread(modal_payment_objectSpread({}, state), {}, {
        status: 'choose_payment'
      });

    default:
      throw new Error();
  }
}

function ModalPayment(_ref) {
  let {
    onClose = f => f,
    onSuccess,
    description = null,
    title = null,
    payableAmount = 0,
    paymentAsync
  } = _ref,
      props = modal_payment_objectWithoutProperties(_ref, modal_payment_excluded);

  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(reducer, initialState);
  const {
    data: wallet,
    isLoading
  } = (0,external_react_query_.useQuery)('wallet', api_service/* default.getWallet */.Z.getWallet, {
    retry: false,
    refetchInterval: false,
    refetchOnWindowFocus: false
  });
  (0,external_react_.useEffect)(() => {
    if (!isLoading && !wallet) {
      dispatch({
        type: 'CHOOSE_PAYMENT'
      });
      return;
    }

    if (!isLoading && wallet) {
      dispatch({
        type: 'PAYMENT',
        payload: {
          wallet,
          payableAmount
        }
      });
    }
  }, [isLoading, wallet]);

  const handleSuccess = (...args) => {
    dispatch({
      type: 'SUCCESS'
    });
    onSuccess(...args);
  };

  const handleFailure = err => {
    dispatch({
      type: 'ERROR',
      payload: err.message
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal/* default */.Z, modal_payment_objectSpread(modal_payment_objectSpread({
    onClose: onClose,
    shined: true
  }, props), {}, {
    children: [state.status === 'loading' && /*#__PURE__*/jsx_runtime_.jsx(spinner/* default */.Z, {
      className: "py-8"
    }), state.status === 'choose_payment' && /*#__PURE__*/jsx_runtime_.jsx(ChooseModalContent, {}), state.status === 'payment' && /*#__PURE__*/jsx_runtime_.jsx(PayModalContent, {
      amount: state.payableAmount,
      wallet: state.wallet,
      onSuccess: handleSuccess,
      onFailure: handleFailure,
      onClose: onClose,
      paymentAsync: paymentAsync,
      description: description,
      title: title
    }), state.status === 'success' && /*#__PURE__*/jsx_runtime_.jsx(SuccessModalContent, {
      onClose: onClose
    }), state.status === 'error' && /*#__PURE__*/jsx_runtime_.jsx(ErrorModalContent, {
      onClose: onClose,
      message: state.error
    })]
  }));
}
// EXTERNAL MODULE: ./components/team/team-avatars.js
var team_avatars = __webpack_require__(4116);
// EXTERNAL MODULE: ./hooks/use-socket.js
var use_socket = __webpack_require__(6998);
// EXTERNAL MODULE: ./icons/minus.js
var minus = __webpack_require__(8666);
// EXTERNAL MODULE: ./icons/plus.js
var plus = __webpack_require__(9061);
// EXTERNAL MODULE: ./containers/modal-alert.js
var modal_alert = __webpack_require__(7230);
// EXTERNAL MODULE: ./icons/game-controller.js
var game_controller = __webpack_require__(9031);
// EXTERNAL MODULE: ./containers/modal-chat-rules.js
var modal_chat_rules = __webpack_require__(674);
// EXTERNAL MODULE: ./hooks/use-lock-body-scroll.js
var use_lock_body_scroll = __webpack_require__(714);
// EXTERNAL MODULE: ./hooks/use-portal.js + 1 modules
var use_portal = __webpack_require__(4556);
// EXTERNAL MODULE: ./icons/paper-plane-tilt.js
var paper_plane_tilt = __webpack_require__(455);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(2268);
// EXTERNAL MODULE: ./components/online-chat/online-chat-message.js
var online_chat_message = __webpack_require__(5686);
;// CONCATENATED MODULE: ./components/online-chat/online-chat-tournament.js
















function OnlineChatTournament({
  className,
  matchId,
  isVisible = true,
  onToggleVisible = f => f
}) {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: messages,
    1: setMessages
  } = (0,external_react_.useState)([]);
  const {
    0: showRules,
    1: setShowRules
  } = (0,external_react_.useState)(false);
  const isSmallDevice = (0,external_beautiful_react_hooks_.useMediaQuery)('(max-width: 1279px)');
  const io = (0,use_socket/* default */.Z)();
  const el = (0,use_portal/* default */.Z)('online-chat');
  const classes = external_clsx_default()('online-chat', {
    'online-chat--visible': isVisible
  }, className);
  (0,external_react_.useEffect)(() => {
    api_service/* default.getTournamentMessages */.Z.getTournamentMessages(matchId).then(setMessages);
    const matchMessagesId = `tournament_messages:${matchId}`;
    io.on(matchMessagesId, res => {
      if (res.action === 'NEW') {
        setMessages(messages => [...messages, res.payload]);
      }
    });
    return () => {
      io.off(matchMessagesId);
    };
  }, []);
  (0,use_lock_body_scroll/* default */.Z)(isSmallDevice && isVisible);

  const handleClickRules = event => {
    event.stopPropagation();
    setShowRules(!showRules);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formData = new window.FormData(form);
    const message = formData.get('message');
    setIsLoading(true);
    api_service/* default.createTournamentMessage */.Z.createTournamentMessage(matchId, {
      message
    }).then(resultData => {
      // setMessages(messages => [
      //   ...messages,
      //   resultData
      // ])
      form.reset();
    }).finally(() => setIsLoading(false));
  };

  if (!el) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showRules && /*#__PURE__*/jsx_runtime_.jsx(modal_chat_rules/* default */.Z, {
      onClose: () => setShowRules(false)
    }), /*#__PURE__*/(0,external_react_dom_.createPortal)( /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes,
      children: [isVisible && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "online-chat__bg",
        onClick: onToggleVisible
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "online-chat__content online-chat__content_tournament",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
          className: "online-chat__header",
          onClick: onToggleVisible,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-gray-500 uppercase",
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              className: "text-white",
              children: "online"
            }), " chat"]
          }), isVisible && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              onClick: handleClickRules,
              size: "x-small",
              type: "secondary",
              outlined: true,
              children: "Chat rules"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              onClick: onToggleVisible,
              className: "online-chat__header-close",
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_close/* default */.Z, {
                size: 24
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "online-chat__messages custom-scroll",
          children: messages.length > 0 && messages.map(({
            id,
            createdAt,
            user,
            message
          }) => /*#__PURE__*/jsx_runtime_.jsx(online_chat_message/* default */.Z, {
            user: user,
            createdAt: createdAt,
            children: message
          }, id))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "online-chat__write",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            onSubmit: handleSubmit,
            className: "flex justify-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              name: "message",
              className: "flex-1",
              placeholder: "Start typing...",
              disabled: isLoading,
              required: true
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              disabled: isLoading,
              className: "online-chat__submit",
              children: /*#__PURE__*/jsx_runtime_.jsx(paper_plane_tilt/* default */.Z, {
                size: 24
              })
            })]
          })
        })]
      })]
    }), el)]
  });
}
;// CONCATENATED MODULE: ./components/tournament/tournament-match.js
const tournament_match_excluded = ["team", "className", "specialRequests"],
      _excluded2 = ["onChange", "initialValue", "className"];

function tournament_match_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function tournament_match_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tournament_match_ownKeys(Object(source), true).forEach(function (key) { tournament_match_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tournament_match_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tournament_match_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tournament_match_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = tournament_match_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function tournament_match_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















const WaitingTeam = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "col-span-8 sm:col-span-3 inline-flex flex-col items-center justify-center w-full h-full space-y-2",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-[100px] h-[100px]",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "97",
        height: "100",
        fill: "none",
        viewBox: "0 0 97 110",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#fff",
          d: "M48.4 0l48.4 27.5v55L48.4 110 0 82.5v-55L48.4 0z",
          opacity: "0.05"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#232326",
          d: "M48.949 22l29.15 16.5v33L48.949 88l-29.15-16.5v-33L48.949 22z"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#fff",
          d: "M47.85 21.999c-10.92 0-19.8 8.88-19.8 19.8a2.475 2.475 0 004.95 0c0-8.187 6.663-14.85 14.85-14.85s14.85 6.663 14.85 14.85c0 6.183-3.426 9.222-7.796 12.969l-.159.134c-4.252 3.648-9.37 8.033-9.37 16.597v2.475a2.475 2.475 0 004.95 0v-2.475c0-6.182 3.425-9.222 7.796-12.969l.158-.134c4.252-3.653 9.37-8.029 9.37-16.597 0-10.92-8.88-19.8-19.8-19.8zM47.85 91.299a3.712 3.712 0 100-7.425 3.712 3.712 0 000 7.425z"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "font-semibold text-white text-xl text-center mt-2",
      children: "Waiting..."
    })]
  });
};

const TeamItem = _ref => {
  var _team$logo;

  let {
    team,
    className,
    specialRequests = null
  } = _ref,
      props = tournament_match_objectWithoutProperties(_ref, tournament_match_excluded);

  const classes = external_clsx_default()('col-span-8 sm:col-span-3 inline-flex flex-col items-center justify-center w-full h-full space-y-2', className);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", tournament_match_objectSpread(tournament_match_objectSpread({
      className: classes
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-[100px] h-[100px]",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: (_team$logo = team.logo) !== null && _team$logo !== void 0 ? _team$logo : '/assets/images/agent-default.svg',
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "font-semibold cursor-pointer text-white text-xl text-center",
        children: team.name
      }), /*#__PURE__*/jsx_runtime_.jsx(rank_division/* default */.Z, {
        division: team.division
      }), /*#__PURE__*/jsx_runtime_.jsx(team_avatars/* default */.Z, {
        users: team.players
      }), specialRequests ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-success-500 text-sm cursor-pointer",
        children: "see requests"
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "italic text-sm text-[#868698]",
        children: "no requests"
      })]
    }))
  });
};

const MatchScore = _ref2 => {
  let {
    onChange = f => f,
    initialValue = [0, 0],
    className
  } = _ref2,
      props = tournament_match_objectWithoutProperties(_ref2, _excluded2);

  const classes = external_clsx_default()(className);
  const {
    0: score,
    1: setScore
  } = (0,external_react_.useState)(initialValue);

  const handleChange = (index, val) => () => {
    const newValue = score[index] + val;

    if (newValue < 0 || newValue > 10) {
      return;
    }

    const updated = [...score];
    updated[index] = newValue;
    setScore(updated);

    if (onChange) {
      onChange(updated);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", tournament_match_objectSpread(tournament_match_objectSpread({
      className: classes
    }, props), {}, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "team-card-match__score flex justify-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "team-card-match__score-inc flex",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            onClick: handleChange(0, 1),
            className: "px-4",
            size: "small",
            type: "accent",
            disabled: score[0] >= 10,
            children: /*#__PURE__*/jsx_runtime_.jsx(plus/* default */.Z, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "team-card-match__score-dec flex",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            onClick: handleChange(0, -1),
            className: "px-4",
            size: "small",
            type: "secondary",
            disabled: score[0] <= 0,
            children: /*#__PURE__*/jsx_runtime_.jsx(minus/* default */.Z, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "team-card-match__score-val",
          children: score[0]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "team-card-match__score-sep",
        children: ":"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "team-card-match__score flex justify-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "team-card-match__score-inc flex",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            onClick: handleChange(1, 1),
            className: "px-4",
            size: "small",
            type: "accent",
            disabled: score[1] >= 10,
            children: /*#__PURE__*/jsx_runtime_.jsx(plus/* default */.Z, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "team-card-match__score-dec flex",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            onClick: handleChange(1, -1),
            className: "px-4",
            size: "small",
            type: "secondary",
            disabled: score[1] <= 0,
            children: /*#__PURE__*/jsx_runtime_.jsx(minus/* default */.Z, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "team-card-match__score-val",
          children: score[1]
        })]
      })]
    }))
  });
};

function TournamentMatch({
  tournament,
  participant,
  myTeam
}) {
  const io = (0,use_socket/* default */.Z)();
  const {
    0: opponentTeam,
    1: setOpponentTeam
  } = (0,external_react_.useState)(null);
  const {
    0: isFinished,
    1: setIsFinished
  } = (0,external_react_.useState)(false);
  const {
    0: scores,
    1: setScores
  } = (0,external_react_.useState)([0, 0]);
  const {
    data: matchData,
    mutate: getMatch
  } = (0,external_react_query_.useMutation)(() => api_service/* default.getTournamentMatch */.Z.getTournamentMatch(tournament.id));
  const {
    isLoading,
    mutateAsync: reportAsync
  } = (0,external_react_query_.useMutation)(data => api_service/* default.reportTournamentMatch */.Z.reportTournamentMatch(tournament.id, data));
  const {
    0: showNewOponentModal,
    1: setShowNewOponentModal
  } = (0,external_react_.useState)(false);
  const {
    0: showReportedModal,
    1: setShowReportedModal
  } = (0,external_react_.useState)(false);
  const {
    0: isMeCaptain,
    1: setIsMeCaptain
  } = (0,external_react_.useState)(false);
  const {
    user
  } = (0,use_auth/* useAuth */.a)();
  const {
    0: isVisibleChat,
    1: setIsVisibleChat
  } = (0,external_react_.useState)(true);
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    if (myTeam.players.find(item => (user === null || user === void 0 ? void 0 : user.id) === item.user.id && item.isCaptain)) {
      setIsMeCaptain(true);
    }
  }, [myTeam]);
  (0,external_react_.useEffect)(() => {
    getMatch();
    io.emit('tournament', tournament.id, myTeam.id);
    io.on('tournament_match_refetch', () => getMatch());
    io.on('tournament_oponent_joined', () => setShowNewOponentModal(true));
  }, []);
  (0,external_react_.useEffect)(() => {
    if ((matchData === null || matchData === void 0 ? void 0 : matchData.state) === 'complete') {
      setIsFinished(true);
    }

    if (matchData !== null && matchData !== void 0 && matchData.opponent) {
      setOpponentTeam(matchData.opponent);
    }
  }, [matchData]);

  const handleFinalize = () => {
    setMessage(null);
    reportAsync({
      matchId: matchData.id,
      teamId: participant.team.id,
      score: scores[0],
      opponentScore: scores[1]
    }).then(data => {
      getMatch();

      if ((data === null || data === void 0 ? void 0 : data.state) === 'pending') {
        setShowReportedModal(true);
      }
    }).catch(err => setMessage(err.message));
  };

  if (isFinished) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-white text-center mt-6",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "font-bold text-5xl",
        children: "Finished"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: "Thank you for competing in this tournament"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          marginTop: 24,
          marginBottom: -40,
          width: 88,
          height: 128,
          display: 'inline-block',
          background: 'url(/assets/images/tournament-past.svg)'
        }
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [(matchData === null || matchData === void 0 ? void 0 : matchData.id) && /*#__PURE__*/jsx_runtime_.jsx(OnlineChatTournament, {
      matchId: matchData.id,
      isVisible: isVisibleChat,
      onToggleVisible: () => setIsVisibleChat(!isVisibleChat)
    }), showNewOponentModal && /*#__PURE__*/jsx_runtime_.jsx(modal_alert/* default */.Z, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(game_controller/* default */.Z, {
        size: 18
      }),
      title: "New opponent is up",
      description: "Tip: You can click on the opponent\u2019s logo to view their  roster without leaving this page",
      onClose: () => setShowNewOponentModal(false)
    }), showReportedModal && /*#__PURE__*/jsx_runtime_.jsx(modal_alert/* default */.Z, {
      icon: /*#__PURE__*/jsx_runtime_.jsx(game_controller/* default */.Z, {
        size: 18
      }),
      title: "Match reported",
      description: "We are waiting for your opponent to also finalize this match. If they do not report in 2 minutes, your report will be processed automaticaly",
      onClose: () => setShowReportedModal(false)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-8",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inline-grid grid-cols-8 gap-y-10 sm:gap-x-10 flex-1 w-full h-full",
        children: [/*#__PURE__*/jsx_runtime_.jsx(TeamItem, {
          team: myTeam
        }), !opponentTeam && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-span-8 sm:col-span-2 inline-flex w-full h-full font-bold text-5xl items-center justify-center px-20 text-white",
          children: "VS"
        }), opponentTeam && /*#__PURE__*/jsx_runtime_.jsx(MatchScore, {
          className: "col-span-8 sm:col-span-2 inline-flex w-full h-full font-bold text-5xl items-center justify-center",
          onChange: setScores
        }), opponentTeam && /*#__PURE__*/jsx_runtime_.jsx(TeamItem, {
          className: "flex-1 md:flex-auto",
          team: opponentTeam
        }), !opponentTeam && /*#__PURE__*/jsx_runtime_.jsx(WaitingTeam, {})]
      }), message && /*#__PURE__*/jsx_runtime_.jsx(message_message/* default */.Z, {
        className: "mt-6",
        onClose: () => setMessage(null),
        children: message
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-6",
        children: [!opponentTeam && /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          type: "primary",
          className: "w-full",
          disabled: true,
          children: "Waiting for the tournament to start"
        }), opponentTeam && isMeCaptain && /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          type: "primary",
          className: "w-full",
          disabled: scores[0] === 0 && scores[1] === 0,
          onClick: handleFinalize,
          loading: isLoading,
          children: "Finalize the match"
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./containers/tab-tournament-overview.js
























const TabTournamentOverview = ({
  tournament
}) => {
  const {
    0: showSelectTeam,
    1: setShowSelectTeam
  } = (0,external_react_.useState)(false);
  const {
    0: showModalCreateTeam,
    1: setShowModalCreateTeam
  } = (0,external_react_.useState)(false);
  const {
    0: isStarted,
    1: setIsStarted
  } = (0,external_react_.useState)(false);
  const {
    0: payTournament,
    1: setPayTournament
  } = (0,external_react_.useState)(null);
  const {
    0: payForFriend,
    1: setPayForFriend
  } = (0,external_react_.useState)(null);
  const queryClient = (0,external_react_query_.useQueryClient)();
  const {
    user
  } = (0,use_auth/* useAuth */.a)();
  const io = (0,use_socket/* default */.Z)();
  const {
    data: participant,
    isLoading,
    isSuccess,
    isError,
    isIdle,
    refetch
  } = (0,external_react_query_.useQuery)(['tournament-participant', {
    id: tournament.id
  }], () => api_service/* default.getTournamentParticipant */.Z.getTournamentParticipant(tournament.id).catch(() => null), {
    enabled: !!user,
    retry: false,
    refetchOnWindowFocus: false
  });
  (0,external_react_.useEffect)(() => {
    io.emit('tournament', tournament.id);
    io.on('tournament_started', refetch);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showSelectTeam && /*#__PURE__*/jsx_runtime_.jsx(ModalSelectTeam, {
      onClose: () => setShowSelectTeam(false),
      onClickCreateTeam: () => {
        setShowSelectTeam(false);
        setShowModalCreateTeam(true);
      },
      onSelectedTeam: () => {
        queryClient.refetchQueries(['tournament-participant', {
          id: tournament.id
        }]);
      },
      tournament: tournament
    }), showModalCreateTeam && /*#__PURE__*/jsx_runtime_.jsx(modal_create_team/* default */.Z, {
      onClose: () => setShowModalCreateTeam(false)
    }), payTournament && /*#__PURE__*/jsx_runtime_.jsx(ModalPayment, {
      onClose: () => setPayTournament(null),
      onSuccess: () => queryClient.refetchQueries(['tournament-status', {
        id: tournament.id
      }]),
      paymentAsync: async () => api_service/* default.payTournament */.Z.payTournament(payTournament.id, {
        amount: payTournament.ticketPrice
      }),
      payableAmount: tournament.ticketPrice
    }), payForFriend && /*#__PURE__*/jsx_runtime_.jsx(ModalPayment, {
      onClose: () => setPayForFriend(null),
      onSuccess: () => queryClient.refetchQueries(['tournament-status', {
        id: tournament.id
      }]),
      paymentAsync: async () => api_service/* default.payTournamentForFriend */.Z.payTournamentForFriend(payForFriend.id, tournament.id, tournament.ticketPrice),
      description: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-center mb-4",
        children: /*#__PURE__*/jsx_runtime_.jsx(components_user/* default */.Z, {
          user: payForFriend
        })
      }),
      title: "Pay for a friend",
      payableAmount: tournament.ticketPrice
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-4",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-4 grid gap-4 lg:grid-cols-12",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "lg:col-span-4 lg:order-1",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(block/* default */.Z, {
            className: "p-4 md:pt-6 lg:p-8 lg:pt-6",
            children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default.Header */.Z.Header, {
              title: "Tournament",
              titleSecondary: "Details",
              icon: /*#__PURE__*/jsx_runtime_.jsx(hexagon/* default */.Z, {
                style: {
                  color: 'rgba(0, 113, 238, 1)'
                },
                icon: /*#__PURE__*/jsx_runtime_.jsx(info/* default */.Z, {})
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(TournamentDetails, {
              className: "mt-4",
              tournament: tournament
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "lg:col-span-8",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(block/* default */.Z, {
            className: "p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8",
            children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default.Header */.Z.Header, {
              title: "Tournament",
              titleSecondary: "Status",
              icon: /*#__PURE__*/jsx_runtime_.jsx(hexagon/* default */.Z, {
                style: {
                  color: 'rgba(0, 113, 238, 1)'
                },
                icon: /*#__PURE__*/jsx_runtime_.jsx(trophy/* default */.Z, {})
              })
            }), (isSuccess || isIdle) && (!participant || ['pending_start', 'pending_qualification', 'in_progress', 'ended'].includes(participant.status)) && !isStarted && /*#__PURE__*/jsx_runtime_.jsx(TournamentStatus, {
              className: "mt-4",
              onClickRegister: () => setShowSelectTeam(true),
              onStarted: () => setIsStarted(true),
              onClickPayment: () => setPayTournament(tournament),
              tournament: tournament,
              participant: participant,
              user: user
            }), ((participant === null || participant === void 0 ? void 0 : participant.status) === 'match' || isStarted) && /*#__PURE__*/jsx_runtime_.jsx(TournamentMatch, {
              myTeam: participant.team,
              tournament: tournament,
              participant: participant
            }), isError && /*#__PURE__*/jsx_runtime_.jsx(message_message/* default */.Z, {
              className: "mt-4",
              children: "Something went wrong"
            }), isLoading && /*#__PURE__*/jsx_runtime_.jsx(spinner/* default */.Z, {
              className: "py-10"
            })]
          }), (participant === null || participant === void 0 ? void 0 : participant.team) && /*#__PURE__*/jsx_runtime_.jsx(TournamentSelectedTeam, {
            team: participant.team,
            tournament: tournament,
            onClickPayment: setPayForFriend,
            className: "mt-4"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const tab_tournament_overview = (TabTournamentOverview);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./containers/tab-tournament-brackets.js


function TabTournamentBrackets({
  active = false,
  url
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-4",
      children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
        src: `https://challonge.com/${url}/module?multiplier=1&amp;match_width_multiplier=1&amp;show_final_results=0&amp;show_standings=0&amp;theme=2&amp;subdomain=`,
        width: "100%",
        height: "480",
        frameBorder: "0",
        scrolling: "auto",
        allowtransparency: "true",
        className: "bg-gray-800"
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/ui/match-history/match-history.js


function MatchHistory() {
  return /*#__PURE__*/_jsxs("div", {
    className: "ui-match-history",
    children: [/*#__PURE__*/_jsx("div", {
      className: "ui-match-history__w",
      children: "W"
    }), /*#__PURE__*/_jsx("div", {
      className: "ui-match-history__l",
      children: "L"
    }), /*#__PURE__*/_jsx("div", {
      className: "ui-match-history__l",
      children: "L"
    }), /*#__PURE__*/_jsx("div", {
      className: "ui-match-history__w",
      children: "W"
    })]
  });
}
;// CONCATENATED MODULE: ./components/ui/match-history/index.js

// EXTERNAL MODULE: ./components/ui/table/table-rows.js
var table_rows = __webpack_require__(9626);
// EXTERNAL MODULE: ./components/spinner/spinner.js
var spinner_spinner = __webpack_require__(7946);
;// CONCATENATED MODULE: ./containers/tab-tournament-standings.js













const tab_tournament_standings_TeamItem = ({
  name,
  image
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      width: 30,
      height: 30,
      src: image,
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ml-2",
      children: name
    })]
  });
};

function TabTournamentStandings({
  tournament
}) {
  const {
    data: items = [],
    isLoading
  } = (0,external_react_query_.useQuery)(['tournament-participants', {
    id: tournament.id
  }], () => api_service/* default.getTournamentParticipants */.Z.getTournamentParticipants(tournament.id));
  const columns = (0,external_react_.useMemo)(() => [{
    Header: 'team name',
    accessor: 'team_name'
  }, {
    Header: 'rank division',
    accessor: 'rank_division'
  } // {
  //   Header: 'match history',
  //   accessor: 'match_history'
  // }
  ], []);
  const data = items.map(item => {
    var _item$team$logo;

    return {
      team_name: /*#__PURE__*/jsx_runtime_.jsx(tab_tournament_standings_TeamItem, {
        name: item.team.name,
        image: (_item$team$logo = item.team.logo) !== null && _item$team$logo !== void 0 ? _item$team$logo : '/assets/images/avatar.svg'
      }),
      rank_division: /*#__PURE__*/jsx_runtime_.jsx(rank_division/* default */.Z, {
        size: "large",
        division: item.team.division
      })
    };
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-4",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(block/* default */.Z, {
        className: "p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8",
        shined: true,
        children: [isLoading && /*#__PURE__*/jsx_runtime_.jsx(spinner_spinner/* default */.Z, {}), !isLoading && /*#__PURE__*/jsx_runtime_.jsx(table_rows/* default */.Z, {
          columns: columns,
          data: data
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/countdown/index.js

// EXTERNAL MODULE: ./components/ui/message/index.js
var message = __webpack_require__(325);
;// CONCATENATED MODULE: ./icons/paperclip.js
const paperclip_excluded = ["size"];

function paperclip_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function paperclip_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { paperclip_ownKeys(Object(source), true).forEach(function (key) { paperclip_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { paperclip_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function paperclip_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function paperclip_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = paperclip_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function paperclip_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconPaperclip(_ref) {
  let {
    size = 14
  } = _ref,
      props = paperclip_objectWithoutProperties(_ref, paperclip_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("svg", paperclip_objectSpread(paperclip_objectSpread({
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
      d: "M12 22l11.975-11.525a3.5 3.5 0 00-4.95-4.95L6.757 17.757a6 6 0 108.486 8.486l10.256-10.244"
    })
  }));
}
;// CONCATENATED MODULE: ./containers/tab-tournament-rules.js












function TabTournamentRules({
  tournament
}) {
  const {
    0: showMessage,
    1: setShowMessage
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mt-4",
      children: [showMessage && /*#__PURE__*/jsx_runtime_.jsx(message/* default */.Z, {
        onClose: () => setShowMessage(false),
        type: "warning",
        children: "This is some dynamic announcement WARNING message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper mattis nibh. Vestibulum varius sem id tortor dictum, a ullamcorper ante volutpat. Nam mattis blandit gravida. Donec id libero et elit venenatis euismod"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-4 grid gap-4 lg:grid-cols-12",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(block/* default */.Z, {
          className: "p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8",
          children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default.Header */.Z.Header, {
            title: "Tournament",
            titleSecondary: "Rules",
            icon: /*#__PURE__*/jsx_runtime_.jsx(hexagon/* default */.Z, {
              style: {
                color: 'rgba(0, 113, 238, 1)'
              },
              icon: /*#__PURE__*/jsx_runtime_.jsx(trophy/* default */.Z, {})
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mt-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "text-gray-500 whitespace-pre-line",
              children: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper mattis nibh. Vestibulum varius sem id tortor dictum, a ullamcorper ante volutpat. Nam mattis blandit gravida. Donec id libero et elit venenatis euismod. Mauris sapien lacus, eleifend ut ultricies et, gravida eget risus.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Donec sit amet luctus diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec ante tincidunt, auctor felis id, aliquam mauris. Mauris malesuada quam vel lorem vulputate, id venenatis nisl ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Nullam massa elit, convallis non volutpat cursus, condimentum sit amet ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras bibendum laoreet tortor ac egestas. Donec interdum euismodmattis."]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(block/* default */.Z, {
          className: "p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default.Header */.Z.Header, {
            title: "Documents",
            icon: /*#__PURE__*/jsx_runtime_.jsx(hexagon/* default */.Z, {
              style: {
                color: 'rgba(0, 113, 238, 1)'
              },
              icon: /*#__PURE__*/jsx_runtime_.jsx(info/* default */.Z, {})
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mt-4",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "space-y-2",
              children: tournament.ruleLink && /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: tournament.ruleLink,
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default.Link */.Z.Link, {
                  className: "text-left",
                  icon: /*#__PURE__*/jsx_runtime_.jsx(IconPaperclip, {}),
                  children: tournament.ruleLink
                })
              })
            })
          })]
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./pages/tournament/[...slug].js


















function TournamentPage({
  tournament
}) {
  const queryClient = (0,external_react_query_.useQueryClient)();
  const router = (0,router_.useRouter)();
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,external_react_.useState)('overview');
  (0,external_react_.useEffect)(() => {
    var _router$query;

    if ((_router$query = router.query) !== null && _router$query !== void 0 && _router$query.slug && router.query.slug.length > 1) {
      setActiveTab(router.query.slug[1]);
    }
  }, [router.query]);

  const handleClickTab = key => {
    router.replace(`/tournament/${tournament.id}/${key}`);
    setActiveTab(key);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Tournament"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-20"
      }), /*#__PURE__*/jsx_runtime_.jsx(tournament_header, {
        tournament: tournament
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(tabs/* default */.Z, {
          activeKey: activeTab,
          onTabClick: handleClickTab,
          className: "tab-tournament",
          size: "large",
          defaultActiveKey: "overview",
          children: [/*#__PURE__*/jsx_runtime_.jsx(tabs/* default.Item */.Z.Item, {
            tab: "Overview",
            children: /*#__PURE__*/jsx_runtime_.jsx(tab_tournament_overview, {
              tournament: tournament
            })
          }, "overview"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(tabs/* default.Item */.Z.Item, {
            tab: "Bracket",
            children: [tournament.state === 'pending' && /*#__PURE__*/jsx_runtime_.jsx(Countdown, {
              date: tournament.startAt,
              className: "my-16",
              onSuccess: () => queryClient.refetchQueries(['tournament', {
                id: tournament.id
              }])
            }), tournament.state !== 'pending' && /*#__PURE__*/jsx_runtime_.jsx(TabTournamentBrackets, {
              url: tournament.challongeUrl
            })]
          }, "bracket"), /*#__PURE__*/(0,jsx_runtime_.jsxs)(tabs/* default.Item */.Z.Item, {
            tab: "Teams",
            children: [tournament.state === 'pending' && /*#__PURE__*/jsx_runtime_.jsx(Countdown, {
              date: tournament.startAt,
              className: "my-16",
              onSuccess: () => queryClient.refetchQueries(['tournament', {
                id: tournament.id
              }])
            }), tournament.state !== 'pending' && /*#__PURE__*/jsx_runtime_.jsx(TabTournamentStandings, {
              tournament: tournament
            })]
          }, "teams"), /*#__PURE__*/jsx_runtime_.jsx(tabs/* default.Item */.Z.Item, {
            tab: "Tournament rules",
            children: /*#__PURE__*/jsx_runtime_.jsx(TabTournamentRules, {
              tournament: tournament
            })
          }, "rules")]
        }), /*#__PURE__*/jsx_runtime_.jsx(section_featured_teams/* default */.Z, {
          className: "mt-4"
        })]
      })]
    })]
  });
}
async function getServerSideProps({
  params
}) {
  const {
    slug
  } = params;
  const id = slug[0];
  const tournament = await api_service/* default.getTournament */.Z.getTournament(id);
  return {
    props: {
      tournament
    }
  };
}

/***/ }),

/***/ 3642:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "spinner_wrap__2GU6t",
	"spinner": "spinner_spinner__1CPhb"
};


/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 1767:
/***/ ((module) => {

"use strict";
module.exports = require("beautiful-react-hooks");

/***/ }),

/***/ 3536:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 8349:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 2461:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 2289:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 8104:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 1224:
/***/ ((module) => {

"use strict";
module.exports = require("rc-tabs");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9867:
/***/ ((module) => {

"use strict";
module.exports = require("react-clipboard.js");

/***/ }),

/***/ 2268:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 2662:
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

/***/ }),

/***/ 5183:
/***/ ((module) => {

"use strict";
module.exports = require("react-phone-input-2");

/***/ }),

/***/ 2585:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 906:
/***/ ((module) => {

"use strict";
module.exports = require("react-table");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7069:
/***/ ((module) => {

"use strict";
module.exports = require("socket.io-client");

/***/ }),

/***/ 4074:
/***/ ((module) => {

"use strict";
module.exports = require("swiper");

/***/ }),

/***/ 2156:
/***/ ((module) => {

"use strict";
module.exports = require("swiper/react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,2089,3802,1317,2982,8182,7068,7113,6998,9471,2381,9505,1116,9214,1287,3577,5223,2087,8600,3960,826,4116,1642,5075,1879,4180,9626,7230], () => (__webpack_exec__(2368)));
module.exports = __webpack_exports__;

})();