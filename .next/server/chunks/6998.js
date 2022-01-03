"use strict";
exports.id = 6998;
exports.ids = [6998];
exports.modules = {

/***/ 6998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ SocketProvider),
/* harmony export */   "Z": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7069);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7068);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @typedef {import('socket.io-client').Socket} Socket
 */




const {
  createContext,
  useContext,
  useEffect,
  useMemo
} = __webpack_require__(9297);

const Context = createContext();
function SocketProvider({
  children
}) {
  const {
    user
  } = (0,_use_auth__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .a)();
  /** @type {Socket} */

  const socket = useMemo(() => {
    if (false) {}

    return null;
  }, []);
  useEffect(() => {
    if (false) {}

    return () => {
      socket.off();
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!(user !== null && user !== void 0 && user.id)) {
      return;
    }

    socket.auth = {
      userId: user.id
    };
    socket.connect();
  }, [user]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Context.Provider, {
    value: socket,
    children: children
  });
}
/**
 *
 * @returns {Socket}
 */

function useSocket() {
  return useContext(Context);
}

/***/ })

};
;