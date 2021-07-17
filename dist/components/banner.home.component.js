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

/***/ "./src/js/components/home/banner.js":
/*!******************************************!*\
  !*** ./src/js/components/home/banner.js ***!
  \******************************************/
/***/ (() => {

eval("class GradientAnimation {\n  constructor() {\n    this.parentElement = document.getElementById('pt_canvasParent');\n    this.cnv = document.getElementById(`pt_bannerCanvasBg`);\n    this.ctx = this.cnv.getContext(`2d`);\n    this.circlesNum = 30;\n    this.minRadius = 200;\n    this.maxRadius = 200;\n    this.speed = .005;\n    (window.onresize = () => {\n      this.setCanvasSize();\n      this.createCircles();\n    })();\n    this.drawAnimation();\n  }\n\n  setCanvasSize() {\n    this.w = this.cnv.width = this.parentElement.offsetWidth;\n    this.h = this.cnv.height = this.parentElement.offsetHeight;\n\n    if (this.parentElement.offsetWidth < 600) {\n      this.circlesNum = 15;\n      this.minRadius = 100;\n      this.maxRadius = 100;\n    } else {\n      this.circlesNum = 30;\n      this.minRadius = 200;\n      this.maxRadius = 200;\n    }\n  }\n\n  createCircles() {\n    this.circles = [];\n\n    for (let i = 0; i < this.circlesNum; ++i) {\n      this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));\n    }\n  }\n\n  drawCircles() {\n    this.circles.forEach(circle => circle.draw(this.ctx, this.speed));\n  }\n\n  clearCanvas() {\n    this.ctx.clearRect(0, 0, this.w, this.h);\n  }\n\n  drawAnimation() {\n    this.clearCanvas();\n    this.drawCircles();\n    window.requestAnimationFrame(() => this.drawAnimation());\n  }\n\n}\n\nclass Circle {\n  constructor(w, h, minR, maxR) {\n    this.x = Math.random() * w;\n    this.y = Math.random() * h;\n    this.angle = Math.random() * Math.PI * 2;\n    this.radius = Math.random() * (maxR - minR) + minR;\n    this.firstColor = `rgba(255,255,255,${Math.random() * 100 / 100})`;\n    this.secondColor = `rgba(255,255,255,${Math.random() * 100 / 100})`;\n  }\n\n  draw(ctx, speed) {\n    this.angle += speed;\n    const x = this.x + Math.cos(this.angle) * 200;\n    const y = this.y + Math.sin(this.angle) * 200;\n    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);\n    gradient.addColorStop(0, this.firstColor);\n    gradient.addColorStop(1, this.secondColor);\n    ctx.globalCompositeOperation = `overlay`;\n    ctx.fillStyle = gradient;\n    ctx.beginPath();\n    ctx.arc(x, y, this.radius, 0, Math.PI * 2);\n    ctx.fill();\n  }\n\n}\n\nnew GradientAnimation();\n\n//# sourceURL=webpack://playlist-tools-home/./src/js/components/home/banner.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/components/home/banner.js"]();
/******/ 	
/******/ })()
;