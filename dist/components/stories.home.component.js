/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/home/stories.js":
/*!*******************************************!*\
  !*** ./src/js/components/home/stories.js ***!
  \*******************************************/
/***/ (() => {

eval("// Handle blog links\nconst blogElements = document.querySelectorAll('[blog-link]');\n\nfunction navigateLink(e, att) {\n  if (e.type === 'click' || e.key === 'Enter') {\n    let ref = e.target;\n\n    if (ref) {\n      window.open(att, '_self');\n    }\n  }\n}\n\nfor (var i = 0; i < blogElements.length; i++) {\n  var ele = blogElements[i];\n  ele.addEventListener('click', e => {\n    navigateLink(e, ele.getAttribute('data-href'));\n  });\n  ele.addEventListener('keydown', e => {\n    navigateLink(e, ele.getAttribute('data-href'));\n  });\n}\n\n//# sourceURL=webpack://playlist-tools-home/./src/js/components/home/stories.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/components/home/stories.js"]();
/******/ 	
/******/ })()
;