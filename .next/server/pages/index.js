/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/styles.css */ \"./public/styles.css\");\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\_app.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFFZCxTQUFTQSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN0RCxxQkFBTyw4REFBQ0QsU0FBUztRQUFFLEdBQUdDLFNBQVM7Ozs7O1lBQUk7Q0FDcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Uby1kby1MaXN0LVJlYWN0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vcHVibGljL3N0eWxlcy5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/components/App.jsx":
/*!**********************************!*\
  !*** ./pages/components/App.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction App() {\n    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: lista , 1: setLista  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    function inputUsuario(event) {\n        setInput(event.target.value);\n    }\n    function addLista() {\n        setLista((prevItens)=>{\n            return [\n                ...prevItens,\n                input\n            ];\n        });\n        setInput(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Line-Up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: inputUsuario,\n                        value: input,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addLista,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: lista.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: item\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    )\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\components\\\\App.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF3QztBQUV4QyxTQUFTRSxHQUFHLEdBQUc7SUFDYixNQUFNLEVBSFIsR0FHU0MsS0FBSyxHQUhkLEdBR2dCQyxRQUFRLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sRUFKUixHQUlTSSxLQUFLLEdBSmQsR0FJZ0JDLFFBQVEsTUFBSUwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFHdEMsU0FBU00sWUFBWSxDQUFDQyxLQUFLLEVBQUU7UUFDM0JKLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzlCO0lBRUQsU0FBU0MsUUFBUSxHQUFHO1FBQ2xCTCxRQUFRLENBQUMsQ0FBQ00sU0FBUyxHQUFLO1lBQ3RCLE9BQU87bUJBQUlBLFNBQVM7Z0JBQUVULEtBQUs7YUFBQyxDQUFDO1NBQzlCLENBQUMsQ0FBQztRQUNIQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDZDtJQUVELHFCQUNFLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOzswQkFDeEIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxTQUFTOzBCQUN0Qiw0RUFBQ0MsSUFBRTs4QkFBQyxTQUFPOzs7Ozt3QkFBSzs7Ozs7b0JBQ1o7MEJBQ04sOERBQUNGLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOztrQ0FDbkIsOERBQUNYLE9BQUs7d0JBQUNhLFFBQVEsRUFBRVQsWUFBWTt3QkFBRUcsS0FBSyxFQUFFUCxLQUFLO3dCQUFFYyxJQUFJLEVBQUMsTUFBTTs7Ozs7NEJBQUc7a0NBQzNELDhEQUFDQyxRQUFNO3dCQUFDQyxPQUFPLEVBQUVSLFFBQVE7a0NBQ3ZCLDRFQUFDUyxNQUFJO3NDQUFDLEtBQUc7Ozs7O2dDQUFPOzs7Ozs0QkFDVDs7Ozs7O29CQUNMOzBCQUNOLDhEQUFDUCxLQUFHOzBCQUNGLDRFQUFDUSxJQUFFOzhCQUNBaEIsS0FBSyxDQUFDaUIsR0FBRyxDQUFDLENBQUNDLElBQUksaUJBQ2QsOERBQUNDLElBQUU7c0NBQUVELElBQUk7Ozs7O2dDQUFNO29CQUNoQixDQUFDOzs7Ozt3QkFDQzs7Ozs7b0JBQ0Q7Ozs7OztZQUNGLENBQ047Q0FDSDtBQUVELGlFQUFlckIsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG8tZG8tTGlzdC1SZWFjdC8uL3BhZ2VzL2NvbXBvbmVudHMvQXBwLmpzeD9iZDhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xpc3RhLCBzZXRMaXN0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBpbnB1dFVzdWFyaW8oZXZlbnQpIHtcclxuICAgIHNldElucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRMaXN0YSgpIHtcclxuICAgIHNldExpc3RhKChwcmV2SXRlbnMpID0+IHtcclxuICAgICAgcmV0dXJuIFsuLi5wcmV2SXRlbnMsIGlucHV0XTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW5wdXQoXCJcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XHJcbiAgICAgICAgPGgxPkxpbmUtVXA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtpbnB1dFVzdWFyaW99IHZhbHVlPXtpbnB1dH0gdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkTGlzdGF9PlxyXG4gICAgICAgICAgPHNwYW4+QWRkPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bGlzdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaT57aXRlbX08L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwIiwiaW5wdXQiLCJzZXRJbnB1dCIsImxpc3RhIiwic2V0TGlzdGEiLCJpbnB1dFVzdWFyaW8iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYWRkTGlzdGEiLCJwcmV2SXRlbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2hhbmdlIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/App.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/components/App */ \"./pages/components/App.jsx\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_app */ \"./pages/_app.js\");\n\n\n\n\n //stylesheet\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_components_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mylen\\\\Documents\\\\lineup-app\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 30\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNPO0FBQ1M7QUFDZixDQUFTLFlBQVk7QUFHaEQsU0FBU0ksUUFBUSxHQUFHO0lBQUUscUJBQU8sOERBQUNGLDZEQUFHOzs7O1lBQUc7Q0FBRTtBQUFFLGlFQUFlRSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG8tZG8tTGlzdC1SZWFjdC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuLi9wYWdlcy9jb21wb25lbnRzL0FwcFwiO1xyXG5pbXBvcnQgTXlBcHAgZnJvbSBcIi4vX2FwcFwiOyAgICAgICAgIC8vc3R5bGVzaGVldFxyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkgeyByZXR1cm4gPEFwcCAvPiB9ICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkFwcCIsIk15QXBwIiwiSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./public/styles.css":
/*!***************************!*\
  !*** ./public/styles.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();