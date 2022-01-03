"use strict";
exports.id = 9471;
exports.ids = [9471];
exports.modules = {

/***/ 9471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./components/ui/container/index.js + 1 modules
var container = __webpack_require__(9650);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/footer/footer-menu.js
const _excluded = ["children", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const MenuItem = _ref => {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    children: /*#__PURE__*/jsx_runtime_.jsx("a", _objectSpread(_objectSpread({
      href: "#",
      className: external_clsx_default()('footer-menu__link', className)
    }, props), {}, {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: children
      })
    }))
  });
};

const FooterMenu = ({
  className
}) => {
  const classes = external_clsx_default()('footer-menu', className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: classes,
    children: [/*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      children: "Scrim Finder"
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      children: "Tournaments"
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      children: "News"
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      children: "FAQ"
    }), /*#__PURE__*/jsx_runtime_.jsx(MenuItem, {
      children: "About"
    })]
  });
};

/* harmony default export */ const footer_menu = (FooterMenu);
// EXTERNAL MODULE: ./icons/facebook.js
var facebook = __webpack_require__(5281);
// EXTERNAL MODULE: ./icons/twitter.js
var twitter = __webpack_require__(3796);
;// CONCATENATED MODULE: ./icons/twitch.js
const twitch_excluded = ["size"];

function twitch_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function twitch_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { twitch_ownKeys(Object(source), true).forEach(function (key) { twitch_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { twitch_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function twitch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function twitch_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = twitch_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function twitch_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconTwitch(_ref) {
  let {
    size = 14
  } = _ref,
      props = twitch_objectWithoutProperties(_ref, twitch_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("svg", twitch_objectSpread(twitch_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 16"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "currentColor",
      d: "M2.843 2L2 4.157v8.816h3.001V14l1.688.567 1.594-1.594h2.439l3.282-3.283V2H2.844zm10.035 7.127l-1.875 1.876H8l-1.594 1.594v-1.594H3.875V3.125h9.003v6.002zm-1.875-3.844v3.282H9.878V5.283h1.125zm-3.001 0v3.282H6.877V5.283h1.125z"
    })
  }));
}
;// CONCATENATED MODULE: ./icons/youtube.js
const youtube_excluded = ["size"];

function youtube_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function youtube_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { youtube_ownKeys(Object(source), true).forEach(function (key) { youtube_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { youtube_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function youtube_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function youtube_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = youtube_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function youtube_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconYoutube(_ref) {
  let {
    size = 14
  } = _ref,
      props = youtube_objectWithoutProperties(_ref, youtube_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", youtube_objectSpread(youtube_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 14 14"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
      clipPath: "url(#clip0)",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "currentColor",
        d: "M13.708 3.795a1.624 1.624 0 00-.446-.74 1.78 1.78 0 00-.78-.433c-1.096-.289-5.485-.289-5.485-.289-1.83-.02-3.66.07-5.478.274-.293.081-.56.234-.78.443a1.69 1.69 0 00-.454.745A16.97 16.97 0 000 7a16.939 16.939 0 00.285 3.204c.08.28.235.535.452.74.216.207.486.355.782.434 1.11.288 5.478.288 5.478.288 1.832.021 3.663-.07 5.484-.274.293-.075.561-.224.78-.433.216-.206.37-.462.447-.74.201-1.057.299-2.13.292-3.206a15.497 15.497 0 00-.292-3.218zM5.601 8.997V5.003L9.253 7 5.601 8.997z"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "clip0",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#fff",
          d: "M0 0H14V14H0z"
        })
      })
    })]
  }));
}
;// CONCATENATED MODULE: ./components/footer/footer-social.js







const FooterSocial = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: "footer-social space-x-2",
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "footer-social__item",
        href: "#",
        children: /*#__PURE__*/jsx_runtime_.jsx(facebook/* default */.Z, {
          size: 16
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "footer-social__item",
        href: "#",
        children: /*#__PURE__*/jsx_runtime_.jsx(twitter/* default */.Z, {})
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "footer-social__item",
        href: "#",
        children: /*#__PURE__*/jsx_runtime_.jsx(IconTwitch, {
          size: 16
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "footer-social__item",
        href: "#",
        children: /*#__PURE__*/jsx_runtime_.jsx(IconYoutube, {})
      })
    })]
  });
};

/* harmony default export */ const footer_social = (FooterSocial);
;// CONCATENATED MODULE: ./components/footer/footer.js
const footer_excluded = ["className"];

function footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { footer_ownKeys(Object(source), true).forEach(function (key) { footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function footer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = footer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function footer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Footer = _ref => {
  let {
    className
  } = _ref,
      props = footer_objectWithoutProperties(_ref, footer_excluded);

  const privacyLink = 'https://docs.google.com/document/d/1Knc6qa4pH23beFwIVrx1Q-NTKukBVOGqWeLMFGkiIAY/edit';
  return /*#__PURE__*/jsx_runtime_.jsx("footer", footer_objectSpread(footer_objectSpread({
    className: external_clsx_default()('footer', className)
  }, props), {}, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      className: "flex justify-between flex-wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full flex justify-center mb-2 sm:hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "footer__copy-logo",
          src: "/assets/images/logo-gray.png",
          alt: ""
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer__copy",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "footer__copy-logo hidden sm:inline-block",
          src: "/assets/images/logo-gray.png",
          alt: ""
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "footer__copy-text",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "\xA9 2021 eSports Agent"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              rel: "noreferrer",
              href: privacyLink,
              children: "Terms & Conditions"
            }), "  |  ", /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              rel: "noreferrer",
              href: privacyLink,
              children: "Privacy Policy"
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(footer_menu, {
        className: "hidden lg:flex"
      }), /*#__PURE__*/jsx_runtime_.jsx(footer_social, {})]
    })
  }));
};

/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./components/footer/index.js

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/header/header-burger.js
const header_burger_excluded = ["className"];

function header_burger_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function header_burger_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_burger_ownKeys(Object(source), true).forEach(function (key) { header_burger_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_burger_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_burger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_burger_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_burger_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_burger_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const HeaderBurger = _ref => {
  let {
    className
  } = _ref,
      props = header_burger_objectWithoutProperties(_ref, header_burger_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("div", header_burger_objectSpread({
    className: external_clsx_default()('header-burger', className)
  }, props));
};

/* harmony default export */ const header_burger = (HeaderBurger);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/header/header-menu.js
const header_menu_excluded = ["children", "className", "href"];

function header_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function header_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_menu_ownKeys(Object(source), true).forEach(function (key) { header_menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_menu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_menu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_menu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const header_menu_MenuItem = _ref => {
  let {
    children,
    className,
    href = '#'
  } = _ref,
      props = header_menu_objectWithoutProperties(_ref, header_menu_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: href,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", header_menu_objectSpread(header_menu_objectSpread({
        className: external_clsx_default()('header-menu__link', className)
      }, props), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: children
        })
      }))
    })
  });
};

const HeaderMenu = ({
  className
}) => {
  const router = (0,router_.useRouter)();
  const classes = external_clsx_default()('header-menu', className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: classes,
    children: [/*#__PURE__*/jsx_runtime_.jsx(header_menu_MenuItem, {
      className: router.pathname === '/' ? 'header-menu__link--active' : null,
      href: "/",
      children: "Home"
    }), /*#__PURE__*/jsx_runtime_.jsx(header_menu_MenuItem, {
      className: router.pathname.includes('/scrim-finder') ? 'header-menu__link--active' : null,
      href: "/scrim-finder",
      children: "Scrim Finder"
    }), /*#__PURE__*/jsx_runtime_.jsx(header_menu_MenuItem, {
      className: router.pathname.includes('/tournament') ? 'header-menu__link--active' : null,
      href: "/tournament",
      children: "Tournaments"
    }), /*#__PURE__*/jsx_runtime_.jsx(header_menu_MenuItem, {
      className: router.pathname.includes('/faq') ? 'header-menu__link--active' : null,
      href: "/faq",
      children: "FAQ"
    }), /*#__PURE__*/jsx_runtime_.jsx(header_menu_MenuItem, {
      className: router.pathname.includes('/membership') ? 'header-menu__link--active' : null,
      href: "/membership",
      children: "Membership"
    })]
  });
};

/* harmony default export */ const header_menu = (HeaderMenu);
// EXTERNAL MODULE: ./hooks/use-lock-body-scroll.js
var use_lock_body_scroll = __webpack_require__(714);
;// CONCATENATED MODULE: ./components/header/header-menu-mobile.js
const header_menu_mobile_excluded = ["children", "href", "className"];

function header_menu_mobile_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function header_menu_mobile_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_menu_mobile_ownKeys(Object(source), true).forEach(function (key) { header_menu_mobile_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_menu_mobile_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_menu_mobile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_menu_mobile_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_menu_mobile_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_menu_mobile_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const header_menu_mobile_MenuItem = _ref => {
  let {
    children,
    href = '#',
    className
  } = _ref,
      props = header_menu_mobile_objectWithoutProperties(_ref, header_menu_mobile_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: href,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", header_menu_mobile_objectSpread(header_menu_mobile_objectSpread({
        className: external_clsx_default()('header-menu__link h-12', className)
      }, props), {}, {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: children
        })
      }))
    })
  });
};

const HeaderMenuMobile = ({
  onClose,
  className
}) => {
  const classes = external_clsx_default()('header-menu-mobile', className);
  (0,use_lock_body_scroll/* default */.Z)();

  const handleClickWrap = e => {
    if (e.target.classList.contains('header-menu-mobile')) {
      onClose();
    }
  };

  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes,
    onClick: handleClickWrap,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "header-menu-mobile__close",
      onClick: onClose,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
          x: "2.12134",
          y: "19",
          width: "24",
          height: "3",
          transform: "rotate(-45 2.12134 19)",
          fill: "#55555E"
        }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
          x: "4.12134",
          y: "2",
          width: "24",
          height: "3",
          transform: "rotate(45 4.12134 2)",
          fill: "#55555E"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "space-y-4 w-3/4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(header_menu_mobile_MenuItem, {
        className: router.pathname === '/' ? 'header-menu__link--active' : null,
        href: "/",
        children: "Home"
      }), /*#__PURE__*/jsx_runtime_.jsx(header_menu_mobile_MenuItem, {
        className: router.pathname.includes('/scrim-finder') ? 'header-menu__link--active' : null,
        href: "/scrim-finder",
        children: "Scrim Finder"
      }), /*#__PURE__*/jsx_runtime_.jsx(header_menu_mobile_MenuItem, {
        className: router.pathname.includes('/tournament') ? 'header-menu__link--active' : null,
        href: "/tournament",
        children: "Tournaments"
      }), /*#__PURE__*/jsx_runtime_.jsx(header_menu_mobile_MenuItem, {
        className: router.pathname.includes('/faq') ? 'header-menu__link--active' : null,
        href: "/faq",
        children: "FAQ"
      }), /*#__PURE__*/jsx_runtime_.jsx(header_menu_mobile_MenuItem, {
        className: router.pathname.includes('/membership') ? 'header-menu__link--active' : null,
        href: "/membership",
        children: "Membership"
      })]
    })]
  });
};

/* harmony default export */ const header_menu_mobile = (HeaderMenuMobile);
// EXTERNAL MODULE: ./components/ui/button/index.js + 3 modules
var ui_button = __webpack_require__(4658);
;// CONCATENATED MODULE: ./components/header/header-sign.js





const HeaderSign = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_button/* default.Group */.Z.Group, {
      className: "whitespace-nowrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/signup",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            size: "small",
            className: "md:text-base md:px-5 md:h-11",
            outlined: true,
            children: "Sign Up"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/signin",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            size: "small",
            className: "md:text-base md:px-5 md:h-11",
            children: "Sign In"
          })
        })
      })]
    })
  });
};

/* harmony default export */ const header_sign = (HeaderSign);
// EXTERNAL MODULE: ./components/ui/tooltip/index.js + 6 modules
var tooltip = __webpack_require__(8111);
// EXTERNAL MODULE: ./utils/collections.js
var collections = __webpack_require__(5829);
;// CONCATENATED MODULE: ./components/ui/popover/popover.js
const popover_excluded = ["content", "children", "trigger", "placement", "portalClassName"];

function popover_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function popover_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { popover_ownKeys(Object(source), true).forEach(function (key) { popover_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { popover_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function popover_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function popover_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = popover_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function popover_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const defaultProps = {
  trigger: 'click',
  placement: 'bottom',
  portalClassName: ''
};

const Popover = _ref => {
  let {
    content,
    children,
    trigger,
    placement,
    portalClassName
  } = _ref,
      props = popover_objectWithoutProperties(_ref, popover_excluded);

  const textNode = (0,external_react_.useMemo)(() => (0,collections/* getReactNode */.P)(content), [content]);
  return /*#__PURE__*/jsx_runtime_.jsx(tooltip/* default */.Z, popover_objectSpread(popover_objectSpread({
    content: textNode,
    trigger: trigger,
    placement: placement,
    portalClassName: `ui-tooltip-content--popover ${portalClassName}`,
    showArrow: true
  }, props), {}, {
    children: children
  }));
};

Popover.defaultProps = defaultProps;
/* harmony default export */ const popover = (Popover);
;// CONCATENATED MODULE: ./components/ui/popover/index.js

;// CONCATENATED MODULE: ./icons/bell-simple.js
const bell_simple_excluded = ["size"];

function bell_simple_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bell_simple_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bell_simple_ownKeys(Object(source), true).forEach(function (key) { bell_simple_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bell_simple_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bell_simple_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function bell_simple_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = bell_simple_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function bell_simple_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconBellSimple(_ref) {
  let {
    size = 14
  } = _ref,
      props = bell_simple_objectWithoutProperties(_ref, bell_simple_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("svg", bell_simple_objectSpread(bell_simple_objectSpread({
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
      d: "M12 28.5h8M7.025 13a8.987 8.987 0 019.044-9c4.948.037 8.907 4.15 8.907 9.113v.387c0 4.477.936 7.075 1.761 8.495a1 1 0 01-.86 1.505H6.123a1 1 0 01-.86-1.505c.825-1.42 1.762-4.018 1.762-8.495V13z"
    })
  }));
}
// EXTERNAL MODULE: ./components/ui/hexagon/index.js + 2 modules
var hexagon = __webpack_require__(1317);
// EXTERNAL MODULE: ./icons/game-controller.js
var game_controller = __webpack_require__(9031);
// EXTERNAL MODULE: ./hooks/use-socket.js
var use_socket = __webpack_require__(6998);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./hooks/use-auth.js
var use_auth = __webpack_require__(7068);
// EXTERNAL MODULE: ./helpers/api-service.js
var api_service = __webpack_require__(2982);
;// CONCATENATED MODULE: ./components/notifications/notifications.js
const notifications_excluded = ["className"];

function notifications_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function notifications_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { notifications_ownKeys(Object(source), true).forEach(function (key) { notifications_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { notifications_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function notifications_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function notifications_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = notifications_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function notifications_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const NotificationContent = ({
  messages = []
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "notifications-dropdown custom-scroll",
    children: messages.map((message, index) => {
      var _message$id;

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "p-4 flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(hexagon/* default */.Z, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(game_controller/* default */.Z, {}),
          className: "text-[#5A636C] mr-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-roboto text-sm text-gray-500",
          dangerouslySetInnerHTML: {
            __html: message.content
          }
        })]
      }, (_message$id = message === null || message === void 0 ? void 0 : message.id) !== null && _message$id !== void 0 ? _message$id : index);
    })
  });
};

function Notifications(_ref) {
  let {
    className
  } = _ref,
      props = notifications_objectWithoutProperties(_ref, notifications_excluded);

  const {
    0: isUnread,
    1: setIsUnread
  } = (0,external_react_.useState)(false);
  const {
    0: messages,
    1: setMessages
  } = (0,external_react_.useState)([]);
  const {
    user
  } = (0,use_auth/* useAuth */.a)();
  const io = (0,use_socket/* default */.Z)();
  const classes = external_clsx_default()('notifications', {
    'notifications--unread': isUnread
  }, className);
  const {
    data: initialMessages = []
  } = (0,external_react_query_.useQuery)('notifications', api_service/* default.notifications */.Z.notifications, {
    retry: false,
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    enabled: !!(user !== null && user !== void 0 && user.id)
  });

  const pushMessage = msg => {
    setMessages(old => [msg, ...old]);
  };

  const handleVisibleChange = visible => {
    if (visible && messages.find(item => !item.isRead)) {
      // TODO: update the isRead property of messages
      api_service/* default.readNotifications */.Z.readNotifications().then(() => setIsUnread(false));
    }
  };

  (0,external_react_.useEffect)(() => {
    if (initialMessages.length === 0) {
      return;
    }

    setMessages(initialMessages);
  }, [initialMessages]);
  (0,external_react_.useEffect)(() => {
    if (messages.length > 0 && messages.find(item => !item.isRead)) {
      setIsUnread(true);
    }
  }, [messages]);
  (0,external_react_.useEffect)(() => {
    io.on('notification', pushMessage);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(popover, {
    onVisibleChange: handleVisibleChange,
    content: /*#__PURE__*/jsx_runtime_.jsx(NotificationContent, {
      messages: messages
    }),
    placement: "bottomEnd",
    fixed: true,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", notifications_objectSpread(notifications_objectSpread({
      className: classes
    }, props), {}, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "notifications__icon",
        children: /*#__PURE__*/jsx_runtime_.jsx(IconBellSimple, {
          size: 25
        })
      })
    }))
  });
}
;// CONCATENATED MODULE: ./components/notifications/index.js

// EXTERNAL MODULE: ./components/ui/rank-division/index.js + 1 modules
var rank_division = __webpack_require__(8833);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
;// CONCATENATED MODULE: ./components/header/header-user.js
const header_user_excluded = ["user"];

function header_user_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function header_user_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { header_user_ownKeys(Object(source), true).forEach(function (key) { header_user_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { header_user_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function header_user_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function header_user_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = header_user_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function header_user_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const AccountMenu = () => {
  const handleClickLogout = e => {
    e.preventDefault();
    (0,client_.signOut)();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "w-[188px]",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "p-4 text-gray-500 hover:text-gray-100 font-bold border-b border-white border-opacity-5",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/my-account/overview",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: "My Profile"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "p-4 text-gray-500 hover:text-gray-100 font-bold",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        onClick: handleClickLogout,
        href: "#logout",
        children: "Log Out"
      })
    })]
  });
};

const HeaderUser = _ref => {
  let {
    user
  } = _ref,
      props = header_user_objectWithoutProperties(_ref, header_user_excluded);

  const headerAvatarRef = (0,external_react_.useRef)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", header_user_objectSpread(header_user_objectSpread({
    className: "header-user"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Notifications, {}), /*#__PURE__*/jsx_runtime_.jsx(popover, {
      content: /*#__PURE__*/jsx_runtime_.jsx(AccountMenu, {}),
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header-user__profile",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header-user__avatar cursor-pointer",
          ref: headerAvatarRef,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "header-user__wrap-img",
            children: user !== null && user !== void 0 && user.image ? /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: user.image,
              alt: ""
            }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "header-user__no-avatar",
              src: "/assets/images/avatar.svg",
              alt: ""
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "header-user__info",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "header-user__name",
            children: user.name
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "header-user__division",
            children: /*#__PURE__*/jsx_runtime_.jsx(rank_division/* default */.Z, {
              size: "small",
              division: user.division
            })
          })]
        })]
      })
    })]
  }));
};

/* harmony default export */ const header_user = (HeaderUser);
;// CONCATENATED MODULE: ./components/header/header.js













const Header = () => {
  const {
    0: showMenu,
    1: setShowMenu
  } = (0,external_react_.useState)(false);
  const {
    user
  } = (0,use_auth/* useAuth */.a)();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      className: "header",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
        className: "h-20 flex items-center justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "h-[60px] md:h-[76px]",
                src: "/assets/images/logo.png",
                alt: ""
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(header_menu, {
          className: "flex-1 hidden lg:flex"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center",
          children: [user ? /*#__PURE__*/jsx_runtime_.jsx(header_user, {
            user: user
          }) : /*#__PURE__*/jsx_runtime_.jsx(header_sign, {}), /*#__PURE__*/jsx_runtime_.jsx(header_burger, {
            onClick: handleShowMenu,
            className: "lg:hidden md:ml-6 md:mr-7"
          })]
        })]
      })
    }), showMenu && /*#__PURE__*/jsx_runtime_.jsx(header_menu_mobile, {
      onClose: handleShowMenu
    })]
  });
};

/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./components/header/index.js

;// CONCATENATED MODULE: ./components/layout/layout.js






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
  });
};

/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 8833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ rank_divison)
});

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ui/rank-division/rank-divison.js
const _excluded = ["division", "className", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const RankDivision = _ref => {
  var _name$division;

  let {
    division,
    className,
    size
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const name = {
    gold: 'Gold division',
    iron: 'Iron division',
    master: 'Masters division',
    bronze: 'Bronze division',
    platinum: 'Platinum division',
    silver: 'Silver division'
  };
  const classes = external_clsx_default()('ui-rank-division', {
    'ui-rank-division--sm': size === 'small',
    'ui-rank-division--lg': size === 'large'
  }, className);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
    className: classes
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ui-rank-division__icon",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: `/assets/images/divisions/${division}.svg`,
        alt: division
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ui-rank-division__name",
      children: (_name$division = name[division]) !== null && _name$division !== void 0 ? _name$division : division
    })]
  }));
};

/* harmony default export */ const rank_divison = (RankDivision);
;// CONCATENATED MODULE: ./components/ui/rank-division/index.js


/***/ }),

/***/ 8111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ tooltip)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(2268);
// EXTERNAL MODULE: ./hooks/use-portal.js + 1 modules
var use_portal = __webpack_require__(4556);
;// CONCATENATED MODULE: ./hooks/use-resize.js


const useResize = (callback = () => null, immediatelyInvoke = true) => {
  (0,external_react_.useEffect)(() => {
    const fn = () => callback();

    if (immediatelyInvoke) {
      fn();
    }

    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
};

/* harmony default export */ const use_resize = (useResize);
;// CONCATENATED MODULE: ./hooks/use-click-away.js


const useClickAway = (ref, handler = f => f) => {
  (0,external_react_.useEffect)(() => {
    const callback = event => {
      const el = ref.current;
      if (!event || !el || el.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, [ref, handler]);
};

/* harmony default export */ const use_click_away = (useClickAway);
;// CONCATENATED MODULE: ./components/ui/tooltip/placement.js
const defaultTooltipPosition = {
  top: '-1000px',
  left: '-1000px',
  transform: 'none'
};
const getPosition = (placement, rect, offset) => {
  const positions = {
    top: {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, -100%)'
    },
    topStart: {
      top: `${rect.top - offset}px`,
      left: `${rect.left}px`,
      transform: 'translate(0, -100%)'
    },
    topEnd: {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width}px`,
      transform: 'translate(-100%, -100%)'
    },
    bottom: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, 0)'
    },
    bottomStart: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left}px`,
      transform: 'translate(0, 0)'
    },
    bottomEnd: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left + rect.width}px`,
      transform: 'translate(-100%, 0)'
    },
    left: {
      top: `${rect.top + rect.height / 2}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, -50%)'
    },
    leftStart: {
      top: `${rect.top}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, 0)'
    },
    leftEnd: {
      top: `${rect.top + rect.height}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, -100%)'
    },
    right: {
      top: `${rect.top + rect.height / 2}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, -50%)'
    },
    rightStart: {
      top: `${rect.top}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, 0)'
    },
    rightEnd: {
      top: `${rect.top + rect.height}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, -100%)'
    }
  };
  return positions[placement] || positions.top;
};
const getIconPosition = (placement, offset) => {
  const positions = {
    top: {
      top: 'auto',
      right: 'auto',
      left: '50%',
      bottom: `${offset}px`,
      transform: 'translate(-50%, 100%) rotate(-90deg)'
    },
    topStart: {
      top: 'auto',
      right: 'auto',
      left: '5%',
      bottom: `${offset}px`,
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    topEnd: {
      top: 'auto',
      right: '5%',
      left: 'auto',
      bottom: `${offset}px`,
      transform: 'translate(0, 100%) rotate(-90deg)'
    },
    bottom: {
      top: `${offset}px`,
      right: 'auto',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -100%) rotate(90deg)'
    },
    bottomStart: {
      top: `${offset}px`,
      right: 'auto',
      left: '5%',
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    bottomEnd: {
      top: `${offset}px`,
      right: '5%',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(0, -100%) rotate(90deg)'
    },
    left: {
      top: '50%',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, -50%) rotate(180deg)'
    },
    leftStart: {
      top: '10%',
      right: '0',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(100%, 0) rotate(180deg)'
    },
    leftEnd: {
      top: 'auto',
      right: '0',
      left: 'auto',
      bottom: '10%',
      transform: 'translate(100%, 0) rotate(180deg)'
    },
    right: {
      top: '50%',
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, -50%) rotate(0deg)'
    },
    rightStart: {
      top: '10%',
      right: 'auto',
      left: '0',
      bottom: 'auto',
      transform: 'translate(-100%, 0) rotate(0deg)'
    },
    rightEnd: {
      top: 'auto',
      right: 'auto',
      left: '0',
      bottom: '10%',
      transform: 'translate(-100%, 0) rotate(0deg)'
    }
  };
  return positions[placement] || positions.top;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ui/tooltip/tooltip-icon.js




const TooltipIcon = ({
  placement
}) => {
  const {
    transform,
    top,
    left,
    right,
    bottom
  } = (0,external_react_.useMemo)(() => getIconPosition(placement, 2), [placement]);
  return /*#__PURE__*/jsx_runtime_.jsx("span", {
    className: "ui-tooltip-icon",
    style: {
      left,
      top,
      right,
      bottom,
      transform
    }
  });
};

/* harmony default export */ const tooltip_icon = (/*#__PURE__*/external_react_default().memo(TooltipIcon));
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/ui/tooltip/tooltip-content.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const defaultRect = {
  top: -1000,
  left: -1000,
  right: -1000,
  bottom: -1000,
  width: 0,
  height: 0
};

const getRect = (ref, fixed) => {
  if (!ref || !ref.current) return defaultRect;
  const rect = ref.current.getBoundingClientRect();
  return _objectSpread(_objectSpread({}, rect), {}, {
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top,
    top: rect.top + (fixed ? 0 : document.documentElement.scrollTop),
    bottom: rect.bottom + (fixed ? 0 : document.documentElement.scrollTop),
    left: rect.left + (fixed ? 0 : document.documentElement.scrollLeft),
    right: rect.right + (fixed ? 0 : document.documentElement.scrollLeft)
  });
};

const TooltipContent = ({
  children,
  parent,
  visible,
  offset,
  placement,
  className,
  showArrow,
  fixed
}) => {
  const el = (0,use_portal/* default */.Z)('ui-tooltip');
  const selfRef = (0,external_react_.useRef)(null);
  const {
    0: rect,
    1: setRect
  } = (0,external_react_.useState)(defaultTooltipPosition);
  if (!parent) return null;

  const updateRect = () => {
    const position = getPosition(placement, getRect(parent, fixed), offset);
    setRect(position);
  };

  use_resize(updateRect);
  use_click_away(() => updateRect());
  (0,external_react_.useEffect)(() => {
    updateRect();
  }, [visible]);

  const preventHandler = event => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  if (!el) return null;

  if (!visible) {
    return null;
  }

  return /*#__PURE__*/(0,external_react_dom_.createPortal)( /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_clsx_default()('ui-tooltip-content', {
      'ui-tooltip-content--fixed': fixed
    }, className),
    ref: selfRef,
    onClick: preventHandler,
    style: {
      top: rect.top,
      left: rect.left,
      transform: rect.transform
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ui-tooltip-content__inner",
      children: [showArrow && /*#__PURE__*/jsx_runtime_.jsx(tooltip_icon, {
        placement: placement
      }), children]
    })
  }), el);
};

/* harmony default export */ const tooltip_content = (TooltipContent);
;// CONCATENATED MODULE: ./components/ui/tooltip/tooltip.js
const _excluded = ["children", "initialVisible", "content", "offset", "placement", "portalClassName", "enterDelay", "leaveDelay", "trigger", "type", "className", "onVisibleChange", "showArrow", "visible", "fixed"];

function tooltip_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function tooltip_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tooltip_ownKeys(Object(source), true).forEach(function (key) { tooltip_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tooltip_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tooltip_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Tooltip = _ref => {
  let {
    children,
    initialVisible,
    content,
    offset,
    placement,
    portalClassName,
    enterDelay,
    leaveDelay,
    trigger,
    type,
    className,
    onVisibleChange,
    showArrow,
    visible: customVisible,
    fixed
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const timer = (0,external_react_.useRef)();
  const ref = (0,external_react_.useRef)(null);
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(initialVisible);
  const contentProps = {
    type,
    visible,
    offset,
    placement,
    showArrow,
    parent: ref,
    className: portalClassName,
    fixed
  };

  const changeVisible = nextState => {
    const clear = () => {
      clearTimeout(timer.current);
      timer.current = undefined;
    };

    const handler = nextState => {
      setVisible(nextState);
      onVisibleChange(nextState);
      clear();
    };

    clear();

    if (nextState) {
      timer.current = window.setTimeout(() => handler(true), enterDelay);
      return;
    }

    timer.current = window.setTimeout(() => handler(false), leaveDelay);
  };

  const mouseEventHandler = next => trigger === 'hover' && changeVisible(next);

  const clickEventHandler = () => trigger === 'click' && changeVisible(!visible);

  use_click_away(ref, () => trigger === 'click' && changeVisible(false));
  (0,external_react_.useEffect)(() => {
    if (customVisible === undefined) return;
    changeVisible(customVisible);
  }, [customVisible]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", tooltip_objectSpread(tooltip_objectSpread({
    ref: ref,
    className: `ui-tooltip ${className}`,
    onClick: clickEventHandler,
    onMouseEnter: () => mouseEventHandler(true),
    onMouseLeave: () => mouseEventHandler(false)
  }, props), {}, {
    children: [children, /*#__PURE__*/jsx_runtime_.jsx(tooltip_content, tooltip_objectSpread(tooltip_objectSpread({}, contentProps), {}, {
      children: content
    }))]
  }));
};

Tooltip.defaultProps = {
  initialVisible: false,
  showArrow: false,
  type: 'default',
  trigger: 'hover',
  placement: 'top',
  enterDelay: 100,
  leaveDelay: 0,
  offset: 12,
  className: '',
  portalClassName: 'ui-tooltip-content--default',
  onVisibleChange: () => {},
  fixed: false
};
/* harmony default export */ const tooltip = (Tooltip);
;// CONCATENATED MODULE: ./components/ui/tooltip/index.js


/***/ }),

/***/ 5281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconFacebook)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconFacebook(_ref) {
  let {
    size = 14
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 16"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      fill: "currentColor",
      d: "M11.333 2.333A.333.333 0 0011 2H9.333A3.18 3.18 0 006 5v1.8H4.333A.333.333 0 004 7.133v1.734a.333.333 0 00.333.333H6v4.467a.333.333 0 00.333.333h2a.333.333 0 00.334-.333V9.2h1.746a.333.333 0 00.327-.247l.48-1.733a.333.333 0 00-.32-.42H8.667V5a.667.667 0 01.666-.6H11a.333.333 0 00.333-.333V2.333z"
    })
  }));
}

/***/ }),

/***/ 9031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconGameController)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconGameController(_ref) {
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
      d: "M19 13.5h4M9 13.5h4M11 11.5v4M21.502 6.967L10.501 7a6.502 6.502 0 00-6.403 5.371H4.1l-2.045 10.52a3.5 3.5 0 005.922 3.084h0L13.38 20l8.122-.032a6.5 6.5 0 000-13v0z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M27.904 12.339l2.043 10.553a3.5 3.5 0 01-5.921 3.082h0l-5.401-5.995"
    })]
  }));
}

/***/ }),

/***/ 3796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ IconTwitter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function IconTwitter(_ref) {
  let {
    size = 14
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 14 14"
  }, props), {}, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
      fill: "currentColor",
      d: "M13.792 2.88a5.441 5.441 0 01-1.56.428c.567-.34.992-.874 1.194-1.504a5.424 5.424 0 01-1.726.66 2.718 2.718 0 00-4.63 2.479 7.717 7.717 0 01-5.601-2.84 2.716 2.716 0 00-.047 2.649c.211.395.516.731.888.98a2.71 2.71 0 01-1.23-.34v.034a2.718 2.718 0 002.18 2.665c-.401.108-.82.124-1.228.047a2.719 2.719 0 002.538 1.886A5.453 5.453 0 01.547 11.15a7.686 7.686 0 004.165 1.221c4.999 0 7.732-4.14 7.732-7.732 0-.116-.003-.234-.009-.35.532-.385.991-.861 1.356-1.407v-.001z"
    })
  }));
}

/***/ })

};
;