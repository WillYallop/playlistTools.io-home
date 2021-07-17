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

/***/ "./src/js/components/home/tools.js":
/*!*****************************************!*\
  !*** ./src/js/components/home/tools.js ***!
  \*****************************************/
/***/ (() => {

eval("const parentEle = document.getElementById('pt_toolsListCol'); // Touch device\n\nfunction isTouchDevice() {\n  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;\n} // Update active pagination\n\n\nfunction updateActivePagination(index) {\n  var paginationConEle = document.getElementById('pt_sliderPagination');\n\n  for (var i = 0; i < paginationConEle.children.length; i++) {\n    let child = paginationConEle.children[i];\n    if (child.classList.contains('active')) child.classList.remove('active');\n  }\n\n  paginationConEle.children[index].classList.add('active');\n} // Slide new image into view\n\n\nfunction translateSliderSlide(index) {\n  var sliderEle = document.getElementById('pt_sliderCon');\n  var largeSlideWidth = undefined;\n\n  for (var i = 0; i < sliderEle.children.length; i++) {\n    var child = sliderEle.children[i];\n    if (child.classList.contains('active')) largeSlideWidth = child.offsetWidth - 40, child.classList.remove('active');\n    if (i === index) child.classList.add('active');\n  }\n\n  var smallSliderWidth = largeSlideWidth * 0.8;\n  var sliderWidth = sliderEle.scrollWidth;\n  var slides = 4;\n  sliderWidth -= Math.abs(largeSlideWidth - smallSliderWidth);\n  var averagelideWidth = sliderWidth / slides;\n  var translateX = -Math.abs(index * averagelideWidth);\n  sliderEle.style.transform = `translateX(${translateX}px)`;\n} // Select new feature select elemenet\n\n\nfunction selectFeature(target) {\n  for (var i = 0; i < parentEle.children.length; i++) {\n    var child = parentEle.children[i];\n    if (child.classList.contains('active')) child.classList.remove('active'), child.attributes['aria-pressed'].value = 'false';\n  } // Set this child to active\n\n\n  target.classList.add('active');\n  target.attributes['aria-pressed'].value = 'true';\n} // Add event listeners\n\n\nfunction addListener(target, index) {\n  if (!isTouchDevice()) {\n    target.addEventListener('keypress', e => {\n      e.preventDefault();\n      var code = e.keyCode;\n\n      if (code === 32 || code === 13) {\n        selectFeature(target);\n        translateSliderSlide(index);\n        updateActivePagination(index);\n      }\n    });\n    target.addEventListener('click', e => {\n      selectFeature(target);\n      translateSliderSlide(index);\n      updateActivePagination(index);\n    });\n  }\n} // Add event listeners for pagination\n\n\nfunction paginationListeners() {\n  var paginationConEle = document.getElementById('pt_sliderPagination');\n\n  for (var i = 0; i < paginationConEle.children.length; i++) {\n    var child = paginationConEle.children[i];\n    child.addEventListener('click', e => {\n      var index = parseInt(e.target.attributes['index'].value);\n      selectFeature(parentEle.children[index]);\n      translateSliderSlide(index);\n      updateActivePagination(index);\n    }, false);\n  }\n}\n\npaginationListeners();\n\nif (isTouchDevice()) {\n  var slideConEle = document.getElementById('pt_slideCon');\n  var sliderConEle = document.getElementById('pt_sliderCon');\n  var slides = 4;\n  var prevScreenX = undefined;\n  var slideActive = false;\n  slideConEle.addEventListener('touchstart', e => {\n    e.preventDefault();\n    prevScreenX = e.changedTouches[0].screenX;\n  });\n  slideConEle.addEventListener('touchmove', e => {\n    e.preventDefault();\n\n    if (prevScreenX != undefined) {\n      let newScreenX = e.changedTouches[0].screenX; // Work out what slide we are currently on\n\n      for (var i = 0; i < sliderConEle.children.length; i++) {\n        let child = sliderConEle.children[i];\n        if (child.classList.contains('active')) activeSlide = i;\n      } // see direction\n\n\n      if (newScreenX > prevScreenX) {\n        // Right swipe\n        // dec current slide\n        if (!slideActive) {\n          if (activeSlide - 1 >= 0) {\n            selectFeature(parentEle.children[activeSlide - 1]);\n            translateSliderSlide(activeSlide - 1);\n            updateActivePagination(activeSlide - 1);\n          }\n\n          slideActive = true;\n        }\n      } else {\n        // Left swipe\n        // inc current slide \n        if (!slideActive) {\n          if (activeSlide + 1 < slides) {\n            selectFeature(parentEle.children[activeSlide + 1]);\n            translateSliderSlide(activeSlide + 1);\n            updateActivePagination(activeSlide + 1);\n          }\n\n          slideActive = true;\n        }\n      }\n    }\n  });\n  slideConEle.addEventListener('touchend', e => {\n    prevScreenX = undefined;\n    slideActive = false;\n  });\n} // For features, add event listeners\n\n\nfor (var i = 0; i < parentEle.children.length; i++) {\n  addListener(parentEle.children[i], i);\n}\n\n//# sourceURL=webpack://playlist-tools-home/./src/js/components/home/tools.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/components/home/tools.js"]();
/******/ 	
/******/ })()
;