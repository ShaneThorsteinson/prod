exports.id = 9066;
exports.ids = [9066];
exports.modules = {

/***/ 9066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SectionLatestMatches)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(4074);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(2156);
// EXTERNAL MODULE: ./components/section/index.js + 3 modules
var section = __webpack_require__(2713);
// EXTERNAL MODULE: ./components/ui/button/index.js + 3 modules
var ui_button = __webpack_require__(4658);
// EXTERNAL MODULE: ./icons/crosshair.js
var crosshair = __webpack_require__(1116);
// EXTERNAL MODULE: ./icons/arrow-left.js
var arrow_left = __webpack_require__(2515);
// EXTERNAL MODULE: ./icons/arrow-right.js
var arrow_right = __webpack_require__(9020);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(8722);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./components/ui/rank-division/index.js + 1 modules
var rank_division = __webpack_require__(8833);
// EXTERNAL MODULE: ./containers/modal-team-info.js
var modal_team_info = __webpack_require__(7468);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/team/team-card-match-mini.js
const _excluded = ["teamA", "teamB", "score", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const TeamItem = ({
  name,
  logo,
  division,
  onClick
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: onClick,
    className: "flex items-center flex-col cursor-pointer",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-[70px] h-[70px]",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: logo !== null && logo !== void 0 ? logo : '/assets/images/agent-default.svg',
        alt: ""
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "font-semibold text-white",
      children: name
    }), /*#__PURE__*/jsx_runtime_.jsx(rank_division/* default */.Z, {
      className: "mt-1",
      size: "small",
      division: division
    })]
  });
};

function TeamCardMatchMini(_ref) {
  let {
    teamA,
    teamB,
    score,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: showModalTeamInfo,
    1: setShowModalTeamInfo
  } = (0,external_react_.useState)(false);
  const classes = external_clsx_default()('team-card-match-mini', className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showModalTeamInfo && /*#__PURE__*/jsx_runtime_.jsx(modal_team_info/* default */.Z, {
      logo: "/demo/agents-logo-8.png",
      name: "Los Angeles Guerillas",
      onClose: () => setShowModalTeamInfo(false)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
      className: classes
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TeamItem, _objectSpread({
        onClick: () => setShowModalTeamInfo(true)
      }, teamA)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "team-card-match-mini__score",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-success-500",
          children: score.teamA
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: ":"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-primary-500",
          children: score.teamB
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(TeamItem, _objectSpread({
        onClick: () => setShowModalTeamInfo(true)
      }, teamB))]
    }))]
  });
}
// EXTERNAL MODULE: ./helpers/api-service.js
var api_service = __webpack_require__(2982);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./containers/section-latest-matches.js
function section_latest_matches_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function section_latest_matches_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { section_latest_matches_ownKeys(Object(source), true).forEach(function (key) { section_latest_matches_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { section_latest_matches_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function section_latest_matches_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















external_swiper_default().use([external_swiper_.Autoplay]);
function SectionLatestMatches(props) {
  const {
    0: swiper,
    1: setSwiper
  } = (0,external_react_.useState)(null);
  const {
    data: items = []
  } = (0,external_react_query_.useQuery)('completed-matches', api_service/* default.getCompletedMatches */.Z.getCompletedMatches);

  const handleSlidePrev = () => {
    swiper === null || swiper === void 0 ? void 0 : swiper.slidePrev();
  };

  const handleSlideNext = () => {
    swiper === null || swiper === void 0 ? void 0 : swiper.slideNext();
  };

  if (items.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, section_latest_matches_objectSpread(section_latest_matches_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default.Header */.Z.Header, {
      title: "latest",
      titleSecondary: "scrim matches",
      icon: /*#__PURE__*/jsx_runtime_.jsx(crosshair/* default */.Z, {
        size: 14
      }),
      iconClasses: "text-primary-500",
      actions: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_button/* default.Group */.Z.Group, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default.Icon */.Z.Icon, {
          onClick: handleSlidePrev,
          icon: /*#__PURE__*/jsx_runtime_.jsx(arrow_left/* default */.Z, {
            size: 20
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default.Icon */.Z.Icon, {
          onClick: handleSlideNext,
          icon: /*#__PURE__*/jsx_runtime_.jsx(arrow_right/* default */.Z, {
            size: 20
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(section/* default.Body */.Z.Body, {
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Swiper, {
        spaceBetween: 16,
        slidesPerColumnFill: "row",
        slidesPerView: 1,
        slidesPerColumn: 2,
        autoplay: {
          delay: 4000
        },
        breakpoints: {
          700: {
            slidesPerView: 2,
            slidesPerColumn: 2
          },
          1024: {
            slidesPerView: 3,
            slidesPerColumn: 1
          }
        },
        onSwiper: swiper => setSwiper(swiper),
        children: items.map(item => /*#__PURE__*/jsx_runtime_.jsx(react_.SwiperSlide, {
          children: /*#__PURE__*/jsx_runtime_.jsx(TeamCardMatchMini, {
            score: item.score,
            teamA: item.teamA,
            teamB: item.teamB
          })
        }, item.id))
      })
    })]
  }));
}

/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;