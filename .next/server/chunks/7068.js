"use strict";
exports.id = 7068;
exports.ids = [7068];
exports.modules = {

/***/ 7068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4178);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const authContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

async function fetchSession() {
  const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/auth/session');
  const session = res.data;

  if (Object.keys(session).length) {
    return session;
  }

  return null;
}

const Wrapped = ({
  children
}) => {
  const {
    data,
    status,
    refetch
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(['session'], fetchSession, {
    staleTime: 1000 * 60 * 60 * 3,
    // 3 hours
    refetchInterval: 1000 * 60 * 5,
    // 5 minutes
    onSettled: (data, error) => {
      if (data !== null && data !== void 0 && data.token) {
        (0,helpers_storage__WEBPACK_IMPORTED_MODULE_4__/* .setUserToken */ .dP)(data.token);
        return;
      }

      (0,helpers_storage__WEBPACK_IMPORTED_MODULE_4__/* .removeUserToken */ .Ne)();
    }
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(authContext.Provider, {
    value: {
      user: data === null || data === void 0 ? void 0 : data.user,
      token: data === null || data === void 0 ? void 0 : data.token,
      isLoading: status === 'loading',
      refetch
    },
    children: children
  });
};

function AuthProvider({
  children,
  session
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Wrapped, {
    children: children
  });
}
/**
 * @typedef {Object} User
 * @property {string} id
 */

/**
 * @typedef {Object} Auth
 * @property {User} user
 * @property {string} token
 * @property {boolean} isLoading
 * @property {Function} refetch
 * @returns {Auth}
 */

const useAuth = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(authContext);
};

/***/ })

};
;