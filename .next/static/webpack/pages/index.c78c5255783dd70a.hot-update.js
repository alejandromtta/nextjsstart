"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Users; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction Users(param) {\n    var user = param.user;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n        className: \"list-group\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Asus\\\\uwu\\\\github\\\\nextjsstart\\\\components\\\\Users.js\",\n            lineNumber: 3,\n            columnNumber: 5\n        },\n        __self: this,\n        children: user.map(function(e, i) {\n            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\uwu\\\\github\\\\nextjsstart\\\\components\\\\Users.js\",\n                    lineNumber: 5,\n                    columnNumber: 20\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                    className: \"list-group-item list-group-item-action\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\uwu\\\\github\\\\nextjsstart\\\\components\\\\Users.js\",\n                        lineNumber: 7,\n                        columnNumber: 16\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\uwu\\\\github\\\\nextjsstart\\\\components\\\\Users.js\",\n                                lineNumber: 8,\n                                columnNumber: 20\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h5\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Asus\\\\uwu\\\\github\\\\nextjsstart\\\\components\\\\Users.js\",\n                                        lineNumber: 9,\n                                        columnNumber: 16\n                                    },\n                                    __self: _this,\n                                    children: e.first_name.concat(\" \".concat(e.last_name))\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Asus\\\\uwu\\\\github\\\\nextjsstart\\\\components\\\\Users.js\",\n                                        lineNumber: 10,\n                                        columnNumber: 16\n                                    },\n                                    __self: _this,\n                                    children: e.email\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: e.avatar,\n                            alt: \"{e.first_name}\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\uwu\\\\github\\\\nextjsstart\\\\components\\\\Users.js\",\n                                lineNumber: 12,\n                                columnNumber: 16\n                            },\n                            __self: _this\n                        })\n                    ]\n                }, i)\n            }, i));\n        })\n    }));\n};\n_c = Users;\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWUsUUFBUSxDQUFDQSxLQUFLLENBQUUsS0FBTSxFQUFDLENBQUM7UUFBUEMsSUFBSSxHQUFMLEtBQU0sQ0FBTEEsSUFBSTs7SUFDcEMsTUFBTSxzRUFDREMsQ0FBRTtRQUFDQyxTQUFTLEVBQUMsQ0FBWTs7Ozs7OztrQkFDdEJGLElBQUksQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFDQyxDQUFDLEVBQUksQ0FBQztZQUNmLE1BQU0sc0VBQUdDLENBQUc7Ozs7Ozs7Z0dBRVBDLENBQUU7b0JBQUNMLFNBQVMsRUFBQyxDQUF3Q007Ozs7Ozs7OzhGQUNqREYsQ0FBRzs7Ozs7Ozs7cUdBQ1BHLENBQUU7Ozs7Ozs7OENBQUVMLENBQUMsQ0FBQ00sVUFBVSxDQUFDQyxNQUFNLENBQUUsQ0FBQyxHQUFjLE9BQVpQLENBQUMsQ0FBQ1EsU0FBUzs7cUdBQ3ZDQyxDQUFDOzs7Ozs7OzhDQUFFVCxDQUFDLENBQUNVLEtBQUs7Ozs7NkZBRVZDLENBQUc7NEJBQUNDLEdBQUcsRUFBRVosQ0FBQyxDQUFDYSxNQUFNOzRCQUFFQyxHQUFHLEVBQUMsQ0FBZ0I7Ozs7Ozs7OzttQkFMbUJiLENBQUM7ZUFGOUNBLENBQUM7UUFVdkIsQ0FBQzs7QUFHUixDQUFDO0tBakJ1Qk4sS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXJzLmpzPzgxOTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMgKHt1c2VyfSl7XHJcbnJldHVybihcclxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICB7dXNlci5tYXAoKGUsaSkgPT57XHJcbiAgICAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cImtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICA8aDU+e2UuZmlyc3RfbmFtZS5jb25jYXQoYCAke2UubGFzdF9uYW1lfWApfTwvaDU+IFxyXG4gICAgICAgICAgICAgICA8cD57ZS5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8aW1nIHNyYz17ZS5hdmF0YXJ9IGFsdD1cIntlLmZpcnN0X25hbWV9XCIvPlxyXG4gICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgIDwvZGl2PilcclxuICAgICAgIH0pfVxyXG4gICAgPC91bD5cclxuKVxyXG59Il0sIm5hbWVzIjpbIlVzZXJzIiwidXNlciIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwiZSIsImkiLCJkaXYiLCJsaSIsImtleSIsImg1IiwiZmlyc3RfbmFtZSIsImNvbmNhdCIsImxhc3RfbmFtZSIsInAiLCJlbWFpbCIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Users.js\n");

/***/ })

});