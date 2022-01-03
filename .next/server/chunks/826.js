"use strict";
exports.id = 826;
exports.ids = [826];
exports.modules = {

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SectionFeaturedTeamsNull)
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
// EXTERNAL MODULE: ./components/ui/label/index.js + 4 modules
var label = __webpack_require__(5127);
// EXTERNAL MODULE: ./components/ui/rank-division/index.js + 1 modules
var rank_division = __webpack_require__(8833);
// EXTERNAL MODULE: ./containers/modal-team-info.js
var modal_team_info = __webpack_require__(7468);
// EXTERNAL MODULE: ./icons/trophy.js
var trophy = __webpack_require__(5114);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/team/team-card-mini.js
const _excluded = (/* unused pure expression or super */ null && (["logo", "division", "name", "className"]));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const team_card_mini_TeamCardMini = _ref => {
  let {
    logo,
    division,
    name,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    0: showModalTeamInfo,
    1: setShowModalTeamInfo
  } = useState(false);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [showModalTeamInfo && /*#__PURE__*/_jsx(ModalTeamInfo, {
      logo: logo,
      name: name,
      onClose: () => setShowModalTeamInfo(false)
    }), /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      className: clsx('team-card-mini', className),
      onClick: () => setShowModalTeamInfo(true)
    }, props), {}, {
      children: [/*#__PURE__*/_jsx("img", {
        className: "team-card-mini__bg",
        src: logo,
        alt: ""
      }), /*#__PURE__*/_jsx("div", {
        className: "team-card-mini__logo",
        children: /*#__PURE__*/_jsx("img", {
          src: logo,
          alt: ""
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "team-card-mini__content space-y-1",
        children: [/*#__PURE__*/_jsx("div", {
          className: "team-card-mini__name",
          children: name
        }), /*#__PURE__*/_jsx(RankDivision, {
          size: "small",
          division: division
        }), /*#__PURE__*/_jsxs(Label.Group, {
          children: [/*#__PURE__*/_jsx(Label.Stats, {
            icon: /*#__PURE__*/_jsx(IconCrosshair, {
              size: 18
            }),
            w: 22,
            l: 12
          }), /*#__PURE__*/_jsx(Label.Stats, {
            icon: /*#__PURE__*/_jsx(IconTrophy, {}),
            w: 22,
            l: 12
          })]
        })]
      })]
    }))]
  });
};

/* harmony default export */ const team_card_mini = ((/* unused pure expression or super */ null && (team_card_mini_TeamCardMini)));
;// CONCATENATED MODULE: ./containers/section-featured-teams.js
function section_featured_teams_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function section_featured_teams_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { section_featured_teams_ownKeys(Object(source), true).forEach(function (key) { section_featured_teams_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { section_featured_teams_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function section_featured_teams_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













external_swiper_default().use([external_swiper_.Autoplay]);

const SectionFeaturedTeams = props => {
  const {
    0: swiper,
    1: setSwiper
  } = useState(null);

  const handleSlidePrev = () => {
    swiper === null || swiper === void 0 ? void 0 : swiper.slidePrev();
  };

  const handleSlideNext = () => {
    swiper === null || swiper === void 0 ? void 0 : swiper.slideNext();
  };

  return /*#__PURE__*/_jsxs(Section, section_featured_teams_objectSpread(section_featured_teams_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/_jsx(Section.Header, {
      title: "Featured",
      titleSecondary: "Teams",
      icon: /*#__PURE__*/_jsx(IconCrosshair, {
        size: 14
      }),
      iconClasses: "text-primary-500",
      actions: /*#__PURE__*/_jsxs(Button.Group, {
        children: [/*#__PURE__*/_jsx(Button.Icon, {
          onClick: handleSlidePrev,
          icon: /*#__PURE__*/_jsx(IconArrowLeft, {
            size: 20
          })
        }), /*#__PURE__*/_jsx(Button.Icon, {
          onClick: handleSlideNext,
          icon: /*#__PURE__*/_jsx(IconArrowRight, {
            size: 20
          })
        })]
      })
    }), /*#__PURE__*/_jsx(Section.Body, {
      children: /*#__PURE__*/_jsxs(Swiper, {
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
            slidesPerView: 4,
            slidesPerColumn: 1
          }
        },
        onSwiper: swiper => setSwiper(swiper),
        children: [/*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx(TeamCardMini, {
            logo: "/demo/agents-logo-5.png",
            name: "Los Angeles Guerillas",
            division: "gold"
          })
        }), /*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx(TeamCardMini, {
            logo: "/demo/agents-logo-8.png",
            name: "Rogue Gaming White",
            division: "iron"
          })
        }), /*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx(TeamCardMini, {
            logo: "/demo/agents-logo-3.png",
            name: "Codeine Cowboys",
            division: "master"
          })
        }), /*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx(TeamCardMini, {
            logo: "/demo/agents-logo-4.png",
            name: "Anax Esports",
            division: "bronze"
          })
        }), /*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx(TeamCardMini, {
            logo: "/demo/agents-logo-4.png",
            name: "NAME 1",
            division: "bronze"
          })
        }), /*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx(TeamCardMini, {
            logo: "/demo/agents-logo-4.png",
            name: "NAME 2",
            division: "bronze"
          })
        }), /*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx(TeamCardMini, {
            logo: "/demo/agents-logo-4.png",
            name: "NAME 3",
            division: "bronze"
          })
        }), /*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx(TeamCardMini, {
            logo: "/demo/agents-logo-4.png",
            name: "NAME 4",
            division: "bronze"
          })
        })]
      })
    })]
  }));
}; // export default SectionFeaturedTeams


function SectionFeaturedTeamsNull() {
  return null;
}

/***/ })

};
;