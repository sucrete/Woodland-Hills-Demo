"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./layouts/Header.js":
/*!***************************!*\
  !*** ./layouts/Header.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Header = (param)=>{\n    let { dark } = param;\n    _s();\n    const currentPath = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const activeMenuFuntion = (value)=>value.some((el)=>currentPath.includes(el)) ? \"mil-active\" : \"\";\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mil-top-panel \".concat(dark ? \"mil-dark-2\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    className: \"mil-logo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: dark ? \"img/logo-light.png\" : \"img/logo.png\",\n                        alt: \"Plax\",\n                        width: 83,\n                        height: 32\n                    }, void 0, false, {\n                        fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"mil-top-menu \".concat(toggle ? \"mil-active\" : \"\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat(activeMenuFuntion([\n                                    \"rack-rates\"\n                                ])),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"rack-rates\",\n                                    children: \"Rack Rates\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat(activeMenuFuntion([\n                                    \"services\"\n                                ])),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"services\",\n                                    children: \"Services\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mil-menu-buttons\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"register\",\n                            className: \"mil-btn mil-sm\",\n                            children: \"Book Tee Time\"\n                        }, void 0, false, {\n                            fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mil-menu-btn \".concat(toggle ? \"mil-active\" : \"\"),\n                            onClick: ()=>setToggle(!toggle),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/williamandree/Downloads/Projects/Woodland Hills Demo/layouts/Header.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"Ma7NOFtuHRJewLtQiru/mEATHw8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xheW91dHMvSGVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzZCO0FBQ2lCO0FBQ2I7QUFFakMsTUFBTUcsU0FBUztRQUFDLEVBQUVDLElBQUksRUFBRTs7SUFDdEIsTUFBTUMsY0FBY0osNERBQVdBO0lBQy9CLE1BQU1LLG9CQUFvQixDQUFDQyxRQUN6QkEsTUFBTUMsSUFBSSxDQUFDLENBQUNDLEtBQU9KLFlBQVlLLFFBQVEsQ0FBQ0QsT0FBTyxlQUFlO0lBQ2hFLE1BQU0sQ0FBQ0UsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNyQyxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVyxpQkFBMEMsT0FBekJWLE9BQU8sZUFBZTtrQkFDckQsNEVBQUNTO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDZCxpREFBSUE7b0JBQUNlLE1BQUs7b0JBQUlELFdBQVU7OEJBQ3ZCLDRFQUFDRTt3QkFDQ0MsS0FBS2IsT0FBTyx1QkFBdUI7d0JBQ25DYyxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7Ozs7Ozs4QkFHWiw4REFBQ0M7b0JBQUlQLFdBQVcsZ0JBQTJDLE9BQTNCSCxTQUFTLGVBQWU7OEJBQ3RELDRFQUFDVzs7MENBQ0MsOERBQUNDO2dDQUFHVCxXQUFXLEdBQXFDLE9BQWxDUixrQkFBa0I7b0NBQUM7aUNBQWE7MENBQ2hELDRFQUFDTixpREFBSUE7b0NBQUNlLE1BQUs7OENBQWE7Ozs7Ozs7Ozs7OzBDQUUxQiw4REFBQ1E7Z0NBQUdULFdBQVcsR0FBbUMsT0FBaENSLGtCQUFrQjtvQ0FBQztpQ0FBVzswQ0FDOUMsNEVBQUNOLGlEQUFJQTtvQ0FBQ2UsTUFBSzs4Q0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJNUIsOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2QsaURBQUlBOzRCQUFDZSxNQUFLOzRCQUFXRCxXQUFVO3NDQUFpQjs7Ozs7O3NDQUdqRCw4REFBQ0Q7NEJBQ0NDLFdBQVcsZ0JBQTJDLE9BQTNCSCxTQUFTLGVBQWU7NEJBQ25EYSxTQUFTLElBQU1aLFVBQVUsQ0FBQ0Q7c0NBRTFCLDRFQUFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0F4Q010Qjs7UUFDZ0JGLHdEQUFXQTs7O0tBRDNCRTtBQXlDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXRzL0hlYWRlci5qcz9mMjM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBkYXJrIH0pID0+IHtcbiAgY29uc3QgY3VycmVudFBhdGggPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBhY3RpdmVNZW51RnVudGlvbiA9ICh2YWx1ZSkgPT5cbiAgICB2YWx1ZS5zb21lKChlbCkgPT4gY3VycmVudFBhdGguaW5jbHVkZXMoZWwpKSA/IFwibWlsLWFjdGl2ZVwiIDogXCJcIjtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1pbC10b3AtcGFuZWwgJHtkYXJrID8gXCJtaWwtZGFyay0yXCIgOiBcIlwifWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtaWwtbG9nb1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17ZGFyayA/IFwiaW1nL2xvZ28tbGlnaHQucG5nXCIgOiBcImltZy9sb2dvLnBuZ1wifVxuICAgICAgICAgICAgYWx0PVwiUGxheFwiXG4gICAgICAgICAgICB3aWR0aD17ODN9XG4gICAgICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BtaWwtdG9wLW1lbnUgJHt0b2dnbGUgPyBcIm1pbC1hY3RpdmVcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7YWN0aXZlTWVudUZ1bnRpb24oW1wicmFjay1yYXRlc1wiXSl9YH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJyYWNrLXJhdGVzXCI+UmFjayBSYXRlczwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHthY3RpdmVNZW51RnVudGlvbihbXCJzZXJ2aWNlc1wiXSl9YH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJzZXJ2aWNlc1wiPlNlcnZpY2VzPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWwtbWVudS1idXR0b25zXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cInJlZ2lzdGVyXCIgY2xhc3NOYW1lPVwibWlsLWJ0biBtaWwtc21cIj5cbiAgICAgICAgICAgIEJvb2sgVGVlIFRpbWVcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWlsLW1lbnUtYnRuICR7dG9nZ2xlID8gXCJtaWwtYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJkYXJrIiwiY3VycmVudFBhdGgiLCJhY3RpdmVNZW51RnVudGlvbiIsInZhbHVlIiwic29tZSIsImVsIiwiaW5jbHVkZXMiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYXYiLCJ1bCIsImxpIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./layouts/Header.js\n"));

/***/ })

});