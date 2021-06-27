/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleNavDropdown\": () => (/* binding */ handleNavDropdown),\n/* harmony export */   \"updateDropdownMaxHeight\": () => (/* binding */ updateDropdownMaxHeight)\n/* harmony export */ });\nfunction handleNavDropdown() {\n  var btn = document.getElementById('pt_toolDropDownBtn');\n  btn.addEventListener('click', function () {\n    var toolDropdownEle = document.getElementById('pt_toolDropdownRow');\n    var offsetHeight = document.getElementById('pt_toolDropdownRowWrapper').offsetHeight;\n\n    if (toolDropdownEle.classList.contains('closed')) {\n      // Open menu\n      toolDropdownEle.classList.remove('closed');\n      toolDropdownEle.style.maxHeight = \"\".concat(offsetHeight, \"px\");\n      btn.attributes['aria-expanded'].value = true;\n    } else {\n      // Close menu\n      toolDropdownEle.classList.add('closed');\n      toolDropdownEle.style.maxHeight = \"0px\";\n      btn.attributes['aria-expanded'].value = false;\n    }\n  });\n} // If the nav is open and the user resizes\n\n\nfunction updateDropdownMaxHeight() {\n  var toolDropdownEle = document.getElementById('pt_toolDropdownRow');\n  var offsetHeight = document.getElementById('pt_toolDropdownRowWrapper').offsetHeight;\n\n  if (!toolDropdownEle.classList.contains('closed')) {\n    toolDropdownEle.style.maxHeight = \"\".concat(offsetHeight, \"px\");\n  }\n}\n\n\n\n//# sourceURL=webpack://playlist-tools-home/./src/js/header.js?");

/***/ }),

/***/ "./src/js/home/index.js":
/*!******************************!*\
  !*** ./src/js/home/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header */ \"./src/js/header.js\");\n // Add event listener to dropdown\n\n(0,_header__WEBPACK_IMPORTED_MODULE_0__.handleNavDropdown)(); // On resize\n\nwindow.addEventListener('resize', function () {\n  (0,_header__WEBPACK_IMPORTED_MODULE_0__.updateDropdownMaxHeight)();\n});\n\n//# sourceURL=webpack://playlist-tools-home/./src/js/home/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/home/index.js");
/******/ 	
/******/ })()
;