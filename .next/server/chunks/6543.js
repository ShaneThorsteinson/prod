exports.id = 6543;
exports.ids = [6543];
exports.modules = {

/***/ 6111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ article_card)
});

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/article/article-card/article-card.js
const _excluded = ["id", "image", "date", "title", "className", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ArticleCard = _ref => {
  let {
    id,
    image,
    date,
    title,
    className,
    size = null
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const classes = external_clsx_default()('article-card', {
    'article-card--large': size === 'large'
  }, className);
  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({
    className: classes
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/news/${id}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "article-card__link",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "article-card__image",
          src: image,
          alt: ""
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "article-card__content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "article-card__date",
            children: date
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "article-card__title",
            children: title
          })]
        })]
      })
    })
  }));
};

/* harmony default export */ const article_card = (ArticleCard);
;// CONCATENATED MODULE: ./components/article/article-card/index.js


/***/ }),

/***/ 3250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ section_latest_tweets)
});

// EXTERNAL MODULE: ./components/section/index.js + 3 modules
var section = __webpack_require__(2713);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/twitter/twitter-card.js
const _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const TwitterCard = _ref => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
    className: external_clsx_default()('twitter-card')
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "twitter-card__header",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "twitter-card__name",
        children: "eSportsAgent"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "twitter-card__verified"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "twitter-card__username",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "#",
          children: "@esports_agent"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "twitter-card__time",
        children: "2h ago"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "twitter-card__content",
      children: ["What a start to ", /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#",
        children: "#CDL2021"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Check out the CDL Points Standings after Opening Weekend. How is your team looking?"]
    })]
  }));
};

/* harmony default export */ const twitter_card = (TwitterCard);
// EXTERNAL MODULE: ./icons/twitter.js
var twitter = __webpack_require__(3796);
// EXTERNAL MODULE: ./hooks/use-media.js
var use_media = __webpack_require__(754);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./containers/section-latest-tweets.js








const SectionLatestTweets = () => {
  const tweetsCount = (0,use_media/* default */.Z)(['lg', 'md'], [3, 4], 6);
  const {
    0: tweets,
    1: setTweets
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    const items = new Array(tweetsCount).fill(null);
    setTweets(items);
  }, [tweetsCount]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default.Header */.Z.Header, {
      title: "Latest",
      titleSecondary: "from twitter",
      icon: /*#__PURE__*/jsx_runtime_.jsx(twitter/* default */.Z, {}),
      iconClasses: "text-twitter",
      actions: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#",
        className: "text-xs text-twitter flex items-center",
        children: "@ESPORTS_AGENTS"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(section/* default.Body */.Z.Body, {
      className: "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 lg:gap-2",
      children: tweets.map((_, index) => /*#__PURE__*/jsx_runtime_.jsx(twitter_card, {}, index))
    })]
  });
};

/* harmony default export */ const section_latest_tweets = (SectionLatestTweets);

/***/ }),

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useMedia = (queries, values, defaultValue) => {
  if (true) {
    return defaultValue;
  }

  const presets = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)'
  };
  const mediaQueryLists = queries.map(q => {
    var _presets$q;

    return window.matchMedia((_presets$q = presets[q]) !== null && _presets$q !== void 0 ? _presets$q : q);
  }); // Function that gets value based on matching media query

  const getValue = () => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getValue);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handler = () => setValue(getValue);

    mediaQueryLists.forEach(mql => mql.addListener(handler));
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
  }, []);
  return value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMedia);

/***/ }),

/***/ 8722:
/***/ (() => {



/***/ })

};
;