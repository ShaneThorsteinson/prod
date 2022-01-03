"use strict";
exports.id = 7113;
exports.ids = [7113];
exports.modules = {

/***/ 714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useLockBodyScroll = (isLock = true) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!isLock) {
      return;
    }

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLock]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLockBodyScroll);

/***/ }),

/***/ 4556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ use_portal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./hooks/use-ssr.js


const isBrowser = () => {
  return Boolean( false && 0);
};

const useSSR = () => {
  const {
    0: browser,
    1: setBrowser
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setBrowser(isBrowser());
  }, []);
  return {
    isBrowser: browser,
    isServer: !browser
  };
};

/* harmony default export */ const use_ssr = (useSSR);
// EXTERNAL MODULE: ./utils/collections.js
var collections = __webpack_require__(5829);
;// CONCATENATED MODULE: ./hooks/use-portal.js




const createElement = id => {
  const el = document.createElement('div');
  el.setAttribute('id', id);
  return el;
};

const usePortal = (selectId = (0,collections/* getId */.z)(), getContainer = null) => {
  const id = selectId;
  const {
    isBrowser
  } = use_ssr();
  const {
    0: elSnapshot,
    1: setElSnapshot
  } = (0,external_react_.useState)(isBrowser ? createElement(id) : null);
  (0,external_react_.useEffect)(() => {
    const customContainer = getContainer ? getContainer() : null;
    const parentElement = customContainer || document.body;
    const hasElement = parentElement.querySelector(`#${id}`);
    const el = hasElement || createElement(id);

    if (!hasElement) {
      parentElement.appendChild(el);
    }

    setElSnapshot(el);
  }, []);
  return elSnapshot;
};

/* harmony default export */ const use_portal = (usePortal);

/***/ }),

/***/ 5829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getId),
/* harmony export */   "P": () => (/* binding */ getReactNode)
/* harmony export */ });
const getId = () => {
  return Math.random().toString(32).slice(2, 10);
};
const getReactNode = node => {
  if (!node) return null;
  if (typeof node !== 'function') return node;
  return node();
};

/***/ })

};
;