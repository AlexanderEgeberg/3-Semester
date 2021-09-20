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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.htm":
/*!***********************!*\
  !*** ./src/index.htm ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.htm";

/***/ }),

/***/ "./src/js/ball.ts":
/*!************************!*\
  !*** ./src/js/ball.ts ***!
  \************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/js/vector.ts");

var Ball = /** @class */ (function () {
    function Ball(position, gameEngine) {
        this.speed = 60;
        this.size = 10;
        this.position = position;
        this.direction = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](0.7, 1);
        this.gameEngine = gameEngine;
        this.height = this.size;
        this.width = this.size;
    }
    // Update method takes care of all logic
    Ball.prototype.update = function (time) {
        //testing for collisions with walls -> change direction
        if (this.position.x <= 0 || this.position.x >= this.gameEngine.canvasWidth - this.size)
            this.direction.x *= -1;
        if (this.position.y <= 0 || this.position.y >= this.gameEngine.canvasHeight - this.size)
            this.direction.y *= -1;
        //testing for Collision with any gameobject
        this.gameEngine.objects.forEach(function (elegameobj) {
        });
        this.position.x += this.direction.x * this.speed * time / 1000;
        this.position.y += this.direction.y * this.speed * time / 1000;
    };
    // draw ball on canvas
    Ball.prototype.draw = function (ctx) {
        ctx.fillStyle = "#0341fc";
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    };
    // in case of any collision this method is called
    Ball.prototype.onColliosion = function (other) {
        // reverse direction if player collides with ball
        if (other == this.gameEngine.player1) {
            this.direction.x *= -1;
        }
        if (other == this.gameEngine.player2) {
            this.direction.x *= -1;
        }
    };
    return Ball;
}());



/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! exports provided: GameEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEngine", function() { return GameEngine; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/js/vector.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.ts");
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball */ "./src/js/ball.ts");



/*
    THis is the main PONG GAME script
*/
var GameEngine = /** @class */ (function () {
    function GameEngine() {
        // array with all gameobjects in the game - If you want more objects in the game add them to this array!
        this.objects = new Array();
        // kepp track of time between loops
        this.date = new Date();
        this.timeZero = this.date.getTime();
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        // listen for keyboard input
        document.addEventListener('keyup', this.keyUp.bind(this));
        document.addEventListener('keydown', this.keyDown.bind(this));
        //ceate gameobjects
        //this.objects.push(new Framerate(new Vector(10,10)));
        this.player1 = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"](new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](20, 10), this, 1);
        this.objects.push(this.player1);
        this.player2 = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"](new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](250, 10), this, 2);
        this.objects.push(this.player2);
        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_2__["Ball"](new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.canvasWidth / 2, this.canvasHeight / 2), this);
        this.objects.push(this.ball);
        this.gameLoop();
    }
    // keyboard event
    GameEngine.prototype.keyDown = function (event) {
        if (event.repeat) {
            return;
        }
        ;
        switch (event.key) {
            case "a":
                this.aKey = true;
                break;
            case "q":
                this.qKey = true;
                break;
            case "o":
                this.oKey = true;
                break;
            case "l":
                this.lKey = true;
                break;
        }
    };
    // keyboard event
    GameEngine.prototype.keyUp = function (event) {
        switch (event.key) {
            case "a":
                this.aKey = false;
                break;
            case "q":
                this.qKey = false;
                break;
            case "o":
                this.oKey = false;
                break;
            case "l":
                this.lKey = false;
                break;
        }
    };
    // a very good explanation of how rectangular collision works: https://silentmatt.com/rectangle-intersection/
    GameEngine.prototype.Collide = function (a, b) {
        if (a.position.x < (b.position.x + b.width) &&
            (a.position.x + a.width) > b.position.x &&
            a.position.y < (b.position.y + a.height) &&
            a.position.y + b.height > b.position.y) {
            return true;
        }
    };
    GameEngine.prototype.CanvasCollide = function (a) {
        if (a.position.x <= 0 || a.position.x >= (this.canvasWidth - 10)) {
            window.location.reload();
            return true;
        }
    };
    // the main game loop
    GameEngine.prototype.gameLoop = function () {
        var _this = this;
        // clear the screen in every update
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#0bbd58";
        this.date = new Date();
        this.timeNow = this.date.getTime();
        var time = this.timeNow - this.timeZero;
        this.timeZero = this.timeNow;
        // run throght all objects
        this.objects.forEach(function (element) {
            //all objects are testeted for collisions on all objects
            _this.objects.forEach(function (other) {
                if (element !== other) {
                    if (_this.Collide(element, other)) {
                        element.onColliosion(other);
                    }
                }
            });
            _this.CanvasCollide(element);
            //every element is updated
            element.update(time);
            // every element is drawn on canvas
            element.draw(_this.ctx);
        });
        // call the main gamelop again (~60fps by default)
        window.requestAnimationFrame(this.gameLoop.bind(this));
    };
    return GameEngine;
}());

//start gameengine
new GameEngine();


/***/ }),

/***/ "./src/js/player.ts":
/*!**************************!*\
  !*** ./src/js/player.ts ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var divPoints = document.getElementById("points");
var canvas = document.getElementById("canvas");
var Player = /** @class */ (function () {
    function Player(position, gameEngine, playerNumber) {
        this.speed = 40;
        this.height = 30;
        this.width = 10;
        this.point = 0;
        this.position = position;
        this.gameEngine = gameEngine;
        this.playerNumber = playerNumber;
    }
    Player.prototype.update = function (time) {
        if (this.playerNumber == 1) {
            if (this.gameEngine.aKey) {
                //move down
                this.position.y += time / 1000 * this.speed;
            }
            if (this.gameEngine.qKey) {
                //move up
                this.position.y -= time / 1000 * this.speed;
            }
        }
        if (this.playerNumber == 2) {
            if (this.gameEngine.oKey) {
                //move down
                this.position.y -= time / 1000 * this.speed;
            }
            if (this.gameEngine.lKey) {
                //move up
                this.position.y += time / 1000 * this.speed;
            }
        }
    };
    Player.prototype.draw = function (ctx) {
        ctx.fillStyle = "#0bbd58";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        //ctx.fillText(this.point + " points", this.position.x, this.position.y);
    };
    Player.prototype.onColliosion = function (other) {
        this.point++;
        console.log(this.point);
        var stringPoints = this.point.toString();
        divPoints.innerHTML = "Points: " + stringPoints;
    };
    return Player;
}());



/***/ }),

/***/ "./src/js/vector.ts":
/*!**************************!*\
  !*** ./src/js/vector.ts ***!
  \**************************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.flipDirection = function () {
        this.x = this.x * -1;
        this.y = this.y * -1;
    };
    return Vector;
}());



/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle.css";

/***/ }),

/***/ 0:
/*!**********************************************************************!*\
  !*** multi ./src/index.htm ./src/scss/styles.scss ./src/js/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.htm */"./src/index.htm");
__webpack_require__(/*! ./src/scss/styles.scss */"./src/scss/styles.scss");
module.exports = __webpack_require__(/*! ./src/js/index.ts */"./src/js/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map