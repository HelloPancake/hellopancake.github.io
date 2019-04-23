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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Bubble {\n    constructor(ctx, canvas, radius, x, y, dx, dy){\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.bubbleX = x;\n        this.bubbleY = y;\n        // this.bubbleX = Math.random() * 500;\n        // this.bubbleY = Math.random() * (200 - 50) + 50;\n        // this.dx = Math.random() < 0.5 ? 2 : -2;\n        // this.dy = Math.random() < 0.5 ? -4 : -2;\n        this.dx = dx;\n        this.dy = dy;\n        this.grav = 0.1;\n        // this.bubbleRadius = 50;\n        this.bubbleRadius = radius;\n        // x, y, radius\n    }\n    \n    drawBubble(){\n        this.bubbleConstraint();\n        this.ctx.beginPath();\n        this.ctx.arc(this.bubbleX, this.bubbleY, this.bubbleRadius, 0, Math.PI * 2);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.lineWidth = 1.5;\n        this.ctx.strokeStyle = \"black\";\n        this.ctx.stroke();\n        this.ctx.closePath();\n        this.dy += this.grav;\n        this.bubbleX += this.dx;\n        this.bubbleY += this.dy;\n    }\n    \n    bubbleConstraint() {\n        if (this.bubbleX + this.dx > this.canvas.width - (this.bubbleRadius) || this.bubbleX + this.dx < this.bubbleRadius) {\n            this.dx = -(this.dx);\n        }\n        if (this.bubbleY + this.dy < this.bubbleRadius || this.bubbleY + this.dy > this.canvas.height - this.bubbleRadius) {\n            this.dy = -(this.dy + this.grav);\n        }  \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble);\n\n//# sourceURL=webpack:///./src/bubble.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Bullet {\n    constructor(ctx, canvas, x) {\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.bulletX = x;\n        this.bulletY = this.canvas.height;\n        this.dy = -3;\n        this.bulletRadius = 5;\n    }\n\n    drawBullet() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.bulletX, this.bulletY, this.bulletRadius, 0, Math.PI * 2);\n        this.ctx.fillStyle = \"#FFFF54\";\n        this.ctx.fill();\n        this.ctx.lineWidth = .7;\n        this.ctx.strokeStyle = \"black\";\n        this.ctx.stroke();\n        this.ctx.closePath();\n        this.bulletY += this.dy;\n\n    }\n\n   \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    // FireBase \n    var config = {\n        apiKey: \"AIzaSyCvfkStiDqUJGxtkQb3aiNjCLQZoFpU55k\",\n        authDomain: \"stardew-cf5c0.firebaseapp.com\",\n        databaseURL: \"https://stardew-cf5c0.firebaseio.com\",\n        projectId: \"stardew-cf5c0\",\n        storageBucket: \"stardew-cf5c0.appspot.com\",\n        messagingSenderId: \"294319781568\"\n    };\n    firebase.initializeApp(config);\n    console.log(firebase);\n    var database = firebase.database();\n    var ref = database.ref('scores');\n    ref.on('value', gotData, errData)\n    \n    \n    function gotData(data) {\n        var scores = data.val();\n        var values = Object.values(scores);\n        console.log(values);\n    \n        // High Scores\n        let sortedScores = values.sort(function (a, b) {\n            if (a.score > b.score) {\n                return 1;\n            }\n            if (a.score < b.score) {\n                return -1;\n            }\n            return 0;\n        }).reverse().slice(0, 5);\n\n        console.log(sortedScores);\n\n\n        for (let i = 0; i < sortedScores.length; i++) {\n            var initials = sortedScores[i].name;\n            var points = sortedScores[i].score;\n            let li = document.createElement('div');\n            let textnode = document.createTextNode(initials + \": \" + points);  \n            li.appendChild(textnode);  \n            document.getElementById(\"scoreList\").appendChild(li);\n        }\n        \n    }\n\n    function errData(err){\n        console.log(err);\n        console.log(\"error\");\n    }\n    \n    // Starting game\n    document.getElementById(\"startButton\").addEventListener(\"click\", () => {\n        document.getElementById('landingMenu').style.display = 'none';\n        const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        setInterval(game.draw, 9);  \n        document.getElementById(\"initialSubmitButton\").addEventListener(\"click\", () => {\n            let name = document.getElementById(\"initialSubmit\").value.slice(0, 8);\n            let data = {\n                name: name,\n                score: game.score\n            }\n            ref.push(data);\n            document.location.reload();\n        })\n    })\n});\n\n\n\n//# sourceURL=webpack:///./src/entry.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\n\n\nclass Game {\n    constructor(){\n        this.canvas = document.getElementById(\"myCanvas\");\n        this.ctx = this.canvas.getContext(\"2d\");\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.canvas);\n        this.draw = this.draw.bind(this);\n        this.bubbleNum = 1;\n        this.bulletNum = 3;\n        this.bubblesArr = [];\n        this.bulletsArr = [];\n        this.score = 0;\n        this.notHit = true;\n        document.addEventListener(\"keydown\", this.shootDownHandler.bind(this), false)\n        for (var i = 0; i < this.bubbleNum; i++) {\n            this.bubblesArr[i] = new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas, 70, Math.random() * 600 + 70, Math.random() * (250) + 100, Math.random() < 0.5 ? 2 : -2, Math.random() < 0.5 ? -3 : -1);\n        }\n    }\n        draw() {\n\n            if(this.notHit){\n                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n                this.player.drawPlayer();\n                this.bubblesArr.forEach(bub => bub.drawBubble());\n                this.playerHitDetection();\n                if(this.bulletsArr.length != 0){\n                        this.bulletsArr.forEach(bullet => bullet.drawBullet());\n                }\n                this.hitBubble();\n                this.drawScore();\n                this.bulletCheck();\n            }\n        }\n        \n        update(){\n            this.hitBubble();\n        }\n        \n        \n        drawScore() {\n            this.ctx.font = \"30px Ubuntu\";\n            this.ctx.fillStyle = \"#90EE90\";\n            this.ctx.fillText(\"Score: \" + this.score, 8, 30);\n        }\n        \n\n        bulletCheck() {\n            for (let b = 0; b < this.bulletsArr.length; b++) {\n                if (this.bulletsArr[b].bulletY < 0) {\n                    if (b == 0) {\n                        this.bulletsArr = this.bulletsArr.slice(1);\n                    }\n                    else if (b == this.bulletsArr.length - 1) {\n                        this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));\n                    }\n                    else {\n                        this.bubblesArr = this.bubblesArr.slice(0, b).concat(this.bubblesArr.slice(b + 1));\n                    }\n                }\n            }\n        }\n\n        hitBubble(){\n                for(var k = 0; k < this.bubblesArr.length; k++){\n                    if(this.bulletsArr.length != 0 ){\n                        for (let b = 0; b < this.bulletsArr.length; b++) {\n                            if (this.bubblesArr[k] != null){\n                            let a = this.bubblesArr[k].bubbleRadius + this.bulletsArr[b].bulletRadius;\n                            let x = this.bubblesArr[k].bubbleX - this.bulletsArr[b].bulletX;\n                            let y = this.bubblesArr[k].bubbleY - this.bulletsArr[b].bulletY;\n                            \n                            if (a >= Math.sqrt((x * x) + ( y * y ))){\n                                if (this.bubblesArr[k].bubbleRadius >= 40)  {\n                                    if(k == 0){\n                                        this.score += (300 - (this.bubblesArr[k].bubbleRadius * 3 ))\n                                        this.bubblesArr.push(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas, this.bubblesArr[k].bubbleRadius - 15, (this.bubblesArr[k].bubbleX + 60), this.bubblesArr[k].bubbleY , 3, -7));\n                                        this.bubblesArr.push(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas, this.bubblesArr[k].bubbleRadius - 15, (this.bubblesArr[k].bubbleX - 60), this.bubblesArr[k].bubbleY, -3, -7));\n                                        this.bubblesArr = this.bubblesArr.slice(1);\n                                        if (b == 0) {\n                                            this.bulletsArr = this.bulletsArr.slice(1);\n                                        }\n                                        else if (b == this.bulletsArr.length - 1){\n                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));\n                                        }\n                                        else {\n                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));\n                                        }\n                                    }\n                                    else {\n                                        this.score += (300 - (this.bubblesArr[k].bubbleRadius * 3))\n                                        this.bubblesArr.push(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas, this.bubblesArr[k].bubbleRadius - 15, (this.bubblesArr[k].bubbleX + 60), this.bubblesArr[k].bubbleY, 3, -7));\n                                        this.bubblesArr.push(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas, this.bubblesArr[k].bubbleRadius - 15, (this.bubblesArr[k].bubbleX - 60), this.bubblesArr[k].bubbleY, -3, -7));\n                                        this.bubblesArr = this.bubblesArr.slice(0, k).concat(this.bubblesArr.slice(k+1));\n                                        if (b == 0) {\n                                            this.bulletsArr = this.bulletsArr.slice(1);\n                                        }\n                                        else if (b == this.bulletsArr.length - 1) {\n                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));\n                                        }\n                                        else {\n                                                this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));\n                                        };\n                                }\n                                \n                            }\n                                else {\n                                    if (k == 0) {\n                                        this.score += (300 - (this.bubblesArr[k].bubbleRadius * 3))\n                                        this.bubblesArr.push(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas, 70, (this.bubblesArr[k].bubbleX + 60), this.bubblesArr[k].bubbleY, 3, -7));\n                                        this.bubblesArr = this.bubblesArr.slice(1);\n                                        if (b == 0) {\n                                            this.bulletsArr = this.bulletsArr.slice(1);\n                                        }\n                                        else if (b == this.bulletsArr.length - 1) {\n                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));\n                                        }\n                                        else {\n                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));\n                                        }\n                                    }\n                                    else {\n                                        this.bubblesArr.push(new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.canvas, 70, (this.bubblesArr[k].bubbleX + 60), this.bubblesArr[k].bubbleY, 3, -7));\n\n                                        this.bubblesArr = this.bubblesArr.slice(0, k).concat(this.bubblesArr.slice(k + 1));\n                                        if (b == 0) {\n                                            this.bulletsArr = this.bulletsArr.slice(1);\n                                        }\n                                        else if (b == this.bulletsArr.length - 1) {\n                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));\n                                        }\n                                        else {\n                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));\n                                        };\n                                    }\n                                }\n                            }\n                        }\n                    }   \n                }\n            }\n        }\n\n        gameOver(){\n            this.notHit = false; \n            document.getElementById(\"retryMenu\").style.display = \"flex\";\n            document.getElementById(\"retryButton\").addEventListener(\"click\", () => {\n                document.getElementById(\"retryMenu\").style.display = 'none';\n                document.location.reload();\n            })\n        }\n\n        playerHitDetection(){\n            for (let k = 0; k < this.bubblesArr.length; k++) {\n                if (this.hitPlayer(this.bubblesArr[k])){\n                    this.gameOver();\n                };  \n            }\n        }\n\n        hitPlayer(bubble){\n                let distX = Math.abs(bubble.bubbleX - this.player.playerX - this.player.playerWidth / 2);\n                let distY = Math.abs(bubble.bubbleY - this.player.playerY - this.player.playerHeight / 2);\n\n                if (distX > (this.player.playerWidth / 2 + bubble.bubbleRadius)) {\n                    return false;\n                }\n                if (distY > (this.player.playerHeight / 2 + bubble.bubbleRadius)) {\n                    return false;\n                }\n\n                if (distX <= (this.player.playerWidth / 2)) {\n                    return true;               \n                }\n                if (distY <= (this.player.playerHeight / 2)) {\n                    return true;\n                }\n\n                let dx = distX - this.player.playerWidth / 2;\n                let dy = distY - this.player.playerHeight / 2;\n                return (dx * dx + dy * dy <= (bubble.bubbleRadius * bubble.bubbleRadius));\n            \n        }\n\n        shootDownHandler(e) {\n            if (e.key == \" \" && this.bulletsArr.length < 3) {\n                this.bulletsArr.push(new _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, this.canvas, this.player.playerX + this.player.playerWidth / 2));\n            }\n        }\n\n      \n\n}     \n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player{\n    constructor(ctx, canvas) {\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.playerWidth = 30;\n        this.playerHeight = 30;\n        this.playerY = (this.canvas.height - this.playerHeight);\n        this.playerX = (this.canvas.width - this.playerWidth) / 2;\n        this.rightPressed = false;\n        this.leftPressed = false;\n        this.spacePressed = false;\n        document.addEventListener(\"keydown\", this.keyDownHandler.bind(this), false);\n        document.addEventListener(\"keyup\", this.keyUpHandler.bind(this), false);\n\n    }\n    \n    drawPlayer() {\n        this.move();\n        // this.shoot();\n        this.ctx.beginPath();\n        this.ctx.rect(this.playerX, this.playerY, this.playerWidth, this.playerHeight);\n        this.ctx.fillStyle = \"#0095DD\";\n        this.ctx.fill();\n        this.ctx.lineWidth = 1.5;\n        this.ctx.strokeStyle = \"black\";\n        this.ctx.stroke();\n        this.ctx.closePath();\n        \n    }\n\n    keyDownHandler(e) {\n        if (e.key == 'right' || e.key == 'ArrowRight') {\n            this.rightPressed = true;\n        }\n        else if (e.key == 'left' || e.key == 'ArrowLeft'){            \n            this.leftPressed = true;\n        }\n    }\n    \n    keyUpHandler(e){\n        if (e.key == 'right' || e.key == 'ArrowRight') {\n            this.rightPressed = false;\n        }\n        else if (e.key == 'left' || e.key == 'ArrowLeft') {\n            this.leftPressed = false;\n        }\n    }\n    \n    move(){\n        if(this.rightPressed && this.playerX < (this.canvas.width - this.playerWidth)){\n            this.playerX += 5;\n        }\n        if(this.leftPressed && this.playerX > 0) {\n            this.playerX -= 5;\n        }\n    }\n}\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });