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

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

eval("function handleNavDropdown() {\n  var btn = document.getElementById('pt_toolDropDownBtn');\n  btn.addEventListener('click', () => {\n    var toolDropdownEle = document.getElementById('pt_toolDropdownRow');\n    var offsetHeight = document.getElementById('pt_toolDropdownRowWrapper').offsetHeight;\n\n    if (toolDropdownEle.classList.contains('closed')) {\n      // Open menu\n      toolDropdownEle.classList.remove('closed');\n      toolDropdownEle.style.maxHeight = `${offsetHeight}px`;\n      btn.attributes['aria-expanded'].value = true; // Loop over links and update tabindex\n\n      let linkElement = document.getElementsByClassName('setTabIndex');\n\n      if (linkElement != undefined) {\n        for (let i = 0; i < linkElement.length; i++) {\n          linkElement[i].attributes['tabindex'].value = '0';\n        }\n      }\n    } else {\n      // Close menu\n      toolDropdownEle.classList.add('closed');\n      toolDropdownEle.style.maxHeight = `0px`;\n      btn.attributes['aria-expanded'].value = false; // Loop over links and update tabindex\n\n      let linkElement = document.getElementsByClassName('setTabIndex');\n\n      if (linkElement != undefined) {\n        for (let i = 0; i < linkElement.length; i++) {\n          linkElement[i].attributes['tabindex'].value = '-1';\n        }\n      }\n    }\n  });\n} // If the nav is open and the user resizes\n\n\nfunction updateDropdownMaxHeight() {\n  var toolDropdownEle = document.getElementById('pt_toolDropdownRow');\n  var offsetHeight = document.getElementById('pt_toolDropdownRowWrapper').offsetHeight;\n\n  if (!toolDropdownEle.classList.contains('closed')) {\n    toolDropdownEle.style.maxHeight = `${offsetHeight}px`;\n  }\n} // Add event listener to dropdown\n\n\nhandleNavDropdown(); // On resize\n\nwindow.addEventListener('resize', () => {\n  updateDropdownMaxHeight();\n});\n\n//# sourceURL=webpack://playlist-tools-home/./src/js/components/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/components/header.js"]();
/******/ 	
/******/ })()
;