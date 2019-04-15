/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Arrow {\n    constructor(ctx, canvas, posX){\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.posX =  posX;\n        this.dy = -2;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Arrow);\n\n//# sourceURL=webpack:///./src/arrow.js?");

/***/ }),

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Bubble {\n    constructor(ctx, canvas){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        // this.bubblex = canvas.width / 2;\n        this.bubblex = Math.random() * 780;\n        // this.bubbley = canvas.height / 3;\n        this.bubbley = Math.random() * (200 - 50) + 50;\n        this.dx = 2;\n        this.dy = -1;\n        this.grav = 0.1;\n        this.bubbleRadius = 50;\n    }\n    \n    drawBubble(){\n        this.bubbleConstraint();\n        this.ctx.beginPath();\n        this.ctx.arc(this.bubblex, this.bubbley, this.bubbleRadius, 0, Math.PI * 2);\n        this.ctx.strokeStyle = \"#0095DD\";\n        this.ctx.stroke();\n        this.ctx.closePath();\n        this.dy += this.grav;\n        this.bubblex += this.dx;\n        this.bubbley += this.dy;\n    }\n    \n    bubbleConstraint() {\n        \n        if (this.bubblex + this.dx > this.canvas.width - (this.bubbleRadius) || this.bubblex + this.dx < this.bubbleRadius) {\n            this.dx = -(this.dx);\n        }\n    \n        if (this.bubbley + this.dy < this.bubbleRadius || this.bubbley + this.dy > this.canvas.height - this.bubbleRadius) {\n            this.dy = -(this.dy + this.grav);\n        }\n\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble);\n\n//# sourceURL=webpack:///./src/bubble.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n\n\n\n\nvar canvas = document.getElementById(\"myCanvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar bub = new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\nvar bub2 = new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\nvar bub3 = new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\nvar play = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas);\n\n\nfunction draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    bub.drawBubble();\n    bub2.drawBubble();\n    bub3.drawBubble();\n    play.drawPlayer();\n}\n\nsetInterval(draw, 10);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Player{\n    constructor(ctx, canvas) {\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.playerWidth = 20;\n        this.playerHeight = 20;\n        this.playerY = (this.canvas.height - this.playerHeight);\n        this.playerX = (this.canvas.width - this.playerWidth) / 2;\n        this.rightPressed = false;\n        this.leftPressed = false;\n        this.spacePressed = false;\n        document.addEventListener(\"keydown\", this.keyDownHandler.bind(this), false)\n        document.addEventListener(\"keyup\", this.keyUpHandler.bind(this), false)\n        document.addEventListener(\"keydown\", this.shootDownHandler.bind(this), false)\n        document.addEventListener(\"keyup\", this.shootUpHandler.bind(this), false)\n    }\n    \n    drawPlayer() {\n        this.shoot();\n        this.move();\n        this.ctx.beginPath();\n        this.ctx.rect(this.playerX, this.playerY, this.playerWidth, this.playerHeight);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.closePath();\n        \n    }\n\n    shootArrow(){\n            this.ctx.beginPath();\n            this.ctx.moveTo(this.playerX, this.playerY);\n            this.ctx.lineTo(this.playerX, 0);\n            this.ctx.closePath();\n            this.ctx.lineWidth = 0.95;\n            this.ctx.strokeStyle = '#666666';\n            this.ctx.stroke();\n    }\n    \n    shootDownHandler(e) {\n        if( e.key == \" \"){\n            this.spacePressed = true;\n        }\n    }\n\n    shootUpHandler(e) {\n        if( e.key == \" \"){\n            this.spacePressed = false;\n        }\n    }\n\n    keyDownHandler(e) {\n        if (e.key == 'right' || e.key == 'ArrowRight') {\n            this.rightPressed = true;\n        }\n        else if (e.key == 'left' || e.key == 'ArrowLeft'){            \n            this.leftPressed = true;\n        }\n    }\n    \n    keyUpHandler(e){\n        if (e.key == 'right' || e.key == 'ArrowRight') {\n            this.rightPressed = false;\n        }\n        else if (e.key == 'left' || e.key == 'ArrowLeft') {\n            this.leftPressed = false;\n        }\n    }\n\n    \n    shoot(){\n        if (this.spacePressed) {\n            this.shootArrow();\n        }\n    }\n    \n    move(){\n        if(this.rightPressed && this.playerX < (this.canvas.width - this.playerWidth)){\n            this.playerX += 5;\n        }\n        if(this.leftPressed && this.playerX > 0) {\n            this.playerX -= 5;\n        }\n    }\n}\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });