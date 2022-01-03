"use strict";
(() => {
var exports = {};
exports.id = 9267;
exports.ids = [9267];
exports.modules = {

/***/ 7310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3536);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function PageHeader({
  title,
  descripiton,
  children,
  className
}) {
  const classes = clsx__WEBPACK_IMPORTED_MODULE_0___default()('flex items-center flex-col', className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: classes,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "font-bold text-white leading-none text-center text-[32px] md:text-[38px] lg:text-[43px]",
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "page-header__rect"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "max-w-[700px] text-center text-gray-500",
      children: descripiton
    }), children]
  });
}

/***/ }),

/***/ 5097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TournamentIndexPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9993);
/* harmony import */ var components_page_page_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7310);
/* harmony import */ var components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2713);
/* harmony import */ var components_tournament_tournament_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3460);
/* harmony import */ var components_ui_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9650);
/* harmony import */ var containers_section_featured_teams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(826);
/* harmony import */ var helpers_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2982);
/* harmony import */ var icons_trophy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5114);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












function TournamentIndexPage({
  activeTournaments = [],
  pastTournaments = []
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("title", {
        children: "Tournaments"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_layout__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_ui_container__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        className: "mt-20 pt-10 page-tournaments__container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_page_page_header__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          title: "Tournaments",
          descripiton: "Compete in tournaments to face better competition than scrims! This allows your team to improve at a faster rate. If you want discounted tournaments check out our Prestige Membership!"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_section__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          className: "mt-6",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_section__WEBPACK_IMPORTED_MODULE_2__/* .default.Header */ .Z.Header, {
            title: "Upcoming",
            titleSecondary: "Tournaments",
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(icons_trophy__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {}),
            iconClasses: "text-success-500"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_section__WEBPACK_IMPORTED_MODULE_2__/* .default.Body */ .Z.Body, {
            children: [activeTournaments.length > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: activeTournaments.map(item => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_tournament_tournament_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                  tournament: item
                }, item.id);
              })
            }), activeTournaments.length === 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              className: "text-center text-white font-bold text-2xl",
              children: "No tournaments"
            })]
          })]
        }), pastTournaments.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_section__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          className: "mt-6",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_section__WEBPACK_IMPORTED_MODULE_2__/* .default.Header */ .Z.Header, {
            title: "Past",
            titleSecondary: "Tournaments",
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(icons_trophy__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {}),
            iconClasses: "text-primary-500"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_section__WEBPACK_IMPORTED_MODULE_2__/* .default.Body */ .Z.Body, {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: pastTournaments.map(item => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_tournament_tournament_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                tournament: item
              }, item.id);
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(containers_section_featured_teams__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          className: "mt-6"
        })]
      })
    })]
  });
}
async function getServerSideProps(context) {
  const activeTournaments = await helpers_api_service__WEBPACK_IMPORTED_MODULE_6__/* .default.getTournaments */ .Z.getTournaments({
    state: 'pending,in_progress'
  });
  const pastTournaments = await helpers_api_service__WEBPACK_IMPORTED_MODULE_6__/* .default.getTournaments */ .Z.getTournaments({
    state: 'ended'
  });
  return {
    props: {
      activeTournaments,
      pastTournaments
    }
  };
}

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 8349:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2461:
/***/ ((module) => {

module.exports = require("dayjs/plugin/localizedFormat");

/***/ }),

/***/ 8104:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9867:
/***/ ((module) => {

module.exports = require("react-clipboard.js");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5183:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7069:
/***/ ((module) => {

module.exports = require("socket.io-client");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = require("swiper");

/***/ }),

/***/ 2156:
/***/ ((module) => {

module.exports = require("swiper/react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,2089,1317,2982,8182,7068,7113,6998,9471,2381,9505,1116,9214,1287,826,4180,3460], () => (__webpack_exec__(5097)));
module.exports = __webpack_exports__;

})();