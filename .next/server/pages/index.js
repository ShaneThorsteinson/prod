"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/ui/button/index.js + 3 modules
var ui_button = __webpack_require__(4658);
// EXTERNAL MODULE: ./icons/crosshair.js
var crosshair = __webpack_require__(1116);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/hero/hero.js






const Hero = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "hero",
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "hero__cover",
      src: "/assets/images/hero.png",
      alt: ""
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "hero__content space-y-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "text-3xl md:text-4xl lg:text-5xl font-bold uppercase",
        children: "WELCOME TO EsportsAgent"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "font-semibold text-xl",
        children: "Your competitive journey starts here. Compete in tournaments and scrims to improve your skill daily!"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/scrim-finder",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            size: "large",
            iconRight: /*#__PURE__*/jsx_runtime_.jsx(crosshair/* default */.Z, {
              size: 18
            }),
            className: "px-11 w-full sm:w-auto",
            shined: true,
            children: "Find Scrim Now"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const hero = (Hero);
;// CONCATENATED MODULE: ./components/hero/index.js

// EXTERNAL MODULE: ./components/layout/index.js
var layout = __webpack_require__(9993);
// EXTERNAL MODULE: ./components/section/index.js + 3 modules
var section = __webpack_require__(2713);
// EXTERNAL MODULE: ./components/tournament/tournament-card.js + 1 modules
var tournament_card = __webpack_require__(3460);
// EXTERNAL MODULE: ./components/ui/container/index.js + 1 modules
var container = __webpack_require__(9650);
// EXTERNAL MODULE: ./icons/trophy.js
var trophy = __webpack_require__(5114);
// EXTERNAL MODULE: ./containers/section-featured-teams.js + 1 modules
var section_featured_teams = __webpack_require__(826);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./helpers/api-service.js
var api_service = __webpack_require__(2982);
;// CONCATENATED MODULE: ./pages/index.js
// import ArticleCard from 'components/article/article-card'




 // import TwitterCard from 'components/twitter/twitter-card'



 // import Link from 'next/link'







function Home({
  tournaments
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "EsportsAgent"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
        className: "mt-20",
        children: [/*#__PURE__*/jsx_runtime_.jsx(hero, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default.Header */.Z.Header, {
            title: "Upcoming",
            titleSecondary: "Tournaments",
            icon: /*#__PURE__*/jsx_runtime_.jsx(trophy/* default */.Z, {}),
            iconClasses: "text-success-500",
            actions: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-full mt-2 md:w-auto",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/tournament",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
                  className: "w-full md:w-auto",
                  size: "small",
                  outlined: true,
                  children: "See all tournaments"
                })
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default.Body */.Z.Body, {
            children: [tournaments.length > 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: tournaments.map(item => {
                return /*#__PURE__*/jsx_runtime_.jsx(tournament_card/* default */.Z, {
                  tournament: item
                }, item.id);
              })
            }), tournaments.length === 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-center text-white font-bold text-2xl",
              children: "No tournaments"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(section_featured_teams/* default */.Z, {})]
      })
    })]
  });
}
async function getServerSideProps(context) {
  const tournaments = await api_service/* default.getTournaments */.Z.getTournaments({
    take: 3,
    state: 'pending,in_progress'
  });
  return {
    props: {
      tournaments
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
var __webpack_exports__ = __webpack_require__.X(0, [1664,2089,1317,2982,8182,7068,7113,6998,9471,2381,9505,1116,9214,1287,826,4180,3460], () => (__webpack_exec__(93)));
module.exports = __webpack_exports__;

})();