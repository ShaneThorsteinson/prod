"use strict";
exports.id = 1499;
exports.ids = [1499];
exports.modules = {

/***/ 1499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Map)
});

// EXTERNAL MODULE: external "leaflet"
var external_leaflet_ = __webpack_require__(8329);
// EXTERNAL MODULE: external "react-leaflet"
var external_react_leaflet_ = __webpack_require__(6656);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/map/map.js






function Map() {
  if (true) {
    return null;
  }

  const pinIcon = (0,external_leaflet_.icon)({
    iconUrl: '/assets/images/pin.svg',
    iconSize: [51, 57],
    iconAnchor: [51, 57]
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
        integrity: "sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",
        crossOrigin: ""
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_leaflet_.MapContainer, {
      style: {
        width: '100%',
        height: 460
      },
      center: [39.95, -75.16],
      zoom: 15,
      scrollWheelZoom: false,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_leaflet_.TileLayer, {
        url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_leaflet_.Marker, {
        icon: pinIcon,
        position: [39.95, -75.16]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/map/index.js


/***/ })

};
;