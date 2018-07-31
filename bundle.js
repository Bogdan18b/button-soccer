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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/ball.js":
/*!*********************!*\
  !*** ./lib/ball.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(ctx, x, y, radius, velocity) {
    _classCallCheck(this, Ball);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.draw();
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "onField",
    value: function onField(w, h) {
      if ((this.y + this.velocity.y < 50 + this.radius || this.y + this.velocity.y > 90 + this.radius) && this.x + this.velocity.x > w - 20 - this.radius || (this.y + this.velocity.y < 50 + this.radius || this.y + this.velocity.y > 90 + this.radius) && this.x + this.velocity.x < 20 + this.radius) {
        this.velocity.x = -this.velocity.x;
      }
      if (this.y + this.velocity.y > h - this.radius || this.y + this.velocity.y < this.radius) {
        this.velocity.y = -this.velocity.y;
      }
    }
  }, {
    key: "score",
    value: function score(fieldWidth) {
      var rand = Math.floor((Math.random() - 0.5) * 10);
      if (this.x > fieldWidth - 10 - this.radius && this.y + this.velocity.y > 50 + this.radius && this.y + this.velocity.y < 90 + this.radius) {
        return 1;
      } else if (this.y + this.velocity.y > 50 + this.radius && this.y + this.velocity.y < 90 + this.radius && this.x + this.velocity.x < 10 + this.radius) {
        return 2;
      }
    }
  }]);

  return Ball;
}();

exports.default = Ball;

/***/ }),

/***/ "./lib/events_util.js":
/*!****************************!*\
  !*** ./lib/events_util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var upPressed = exports.upPressed = false;
var downPressed = exports.downPressed = false;
var leftPressed = exports.leftPressed = false;
var rightPressed = exports.rightPressed = false;
var upPressed2 = exports.upPressed2 = false;
var downPressed2 = exports.downPressed2 = false;
var leftPressed2 = exports.leftPressed2 = false;
var rightPressed2 = exports.rightPressed2 = false;

var keyDownHandler = exports.keyDownHandler = function keyDownHandler(e) {
  e.preventDefault();
  if (e.keyCode === 87) {
    exports.upPressed = upPressed = true;
  } else if (e.keyCode === 83) {
    exports.downPressed = downPressed = true;
  } else if (e.keyCode === 65) {
    exports.leftPressed = leftPressed = true;
  } else if (e.keyCode === 68) {
    exports.rightPressed = rightPressed = true;
  } else if (e.keyCode === 38) {
    exports.upPressed2 = upPressed2 = true;
  } else if (e.keyCode === 40) {
    exports.downPressed2 = downPressed2 = true;
  } else if (e.keyCode === 37) {
    exports.leftPressed2 = leftPressed2 = true;
  } else if (e.keyCode === 39) {
    exports.rightPressed2 = rightPressed2 = true;
  }
};

var keyUpHandler = exports.keyUpHandler = function keyUpHandler(e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 87:
      exports.upPressed = upPressed = false;
    case 83:
      exports.downPressed = downPressed = false;
    case 65:
      exports.leftPressed = leftPressed = false;
    case 68:
      exports.rightPressed = rightPressed = false;
    case 38:
      exports.upPressed2 = upPressed2 = false;
    case 40:
      exports.downPressed2 = downPressed2 = false;
    case 37:
      exports.leftPressed2 = leftPressed2 = false;
    case 39:
      exports.rightPressed2 = rightPressed2 = false;

  }
};

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var drawScore = exports.drawScore = function drawScore(ctx, x, y) {
  ctx.font = "100px Arial bold";
  ctx.fillStyle = "white";
  ctx.fillText(x, 25, 100);
  ctx.fillText(y, 225, 100);
};

var gameOver = exports.gameOver = function gameOver(goalsPlayerOne, goalsPlayerTwo) {
  if (goalsPlayerOne === 5 || goalsPlayerTwo === 5) {
    document.getElementById("congrats").classList.remove("hide");
  }
};

var playAgain = exports.playAgain = function playAgain() {
  document.location.reload();
};

var getDistance = exports.getDistance = function getDistance(x1, y1, radius1, x2, y2, radius2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;

  var dist = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

  return dist < radius1 + radius2 ? true : false;
};

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _soccer_field = __webpack_require__(/*! ./soccer_field */ "./lib/soccer_field.js");

var _soccer_field2 = _interopRequireDefault(_soccer_field);

var _events_util = __webpack_require__(/*! ./events_util */ "./lib/events_util.js");

var _game = __webpack_require__(/*! ./game.js */ "./lib/game.js");

var _player = __webpack_require__(/*! ./player */ "./lib/player.js");

var _player2 = _interopRequireDefault(_player);

var _ball = __webpack_require__(/*! ./ball */ "./lib/ball.js");

var _ball2 = _interopRequireDefault(_ball);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var canvasScore = document.getElementById("scoreCanvas");
var ctxBoard = canvasScore.getContext("2d");

var h = canvas.height;
var w = canvas.width;
var x = w / 2;
var y = h / 2;

var rand = Math.floor((Math.random() - 0.5) * 10);
var ballX = x + rand;
var ballY = y + rand;

var playerX = y + 40;
var playerY = y;

var playerTwoX = y + 120;
var playerTwoY = y;

var ballVelocity = {
  x: 2,
  y: 2.5
};

var playerVelocity = {
  x: 3,
  y: 3
};

var dx = 0.5;

var ballRadius = 3;
var playerRadius = 8;

var goalsPlayerOne = 0;
var goalsPlayerTwo = 0;

document.addEventListener("keydown", _events_util.keyDownHandler, false);
document.addEventListener("keyup", _events_util.keyUpHandler, false);
document.getElementById("reset").addEventListener("click", _game.playAgain);
document.getElementById("controls").addEventListener("mouseover", function () {
  return document.getElementById("instructions").classList.remove("hide");
});
document.getElementById("controls").addEventListener("mouseout", function () {
  return document.getElementById("instructions").classList.add("hide");
});

var playerMove = function playerMove() {
  if (_events_util.upPressed2 && playerTwoY > playerRadius + 5) {
    playerTwoY -= playerVelocity.y;
  } else if (_events_util.downPressed2 && playerTwoY < h - playerRadius - 5) {
    playerTwoY += playerVelocity.y;
  } else if (_events_util.leftPressed2 && playerTwoX > playerRadius + 5) {
    playerTwoX -= playerVelocity.x;
  } else if (_events_util.rightPressed2 && playerTwoX < w - playerRadius - 5) {
    playerTwoX += playerVelocity.x;
  }

  if (_events_util.upPressed && playerY > playerRadius + 5) {
    playerY -= playerVelocity.y;
  } else if (_events_util.downPressed && playerY < h - playerRadius - 5) {
    playerY += playerVelocity.y;
  } else if (_events_util.leftPressed && playerX > playerRadius + 5) {
    playerX -= playerVelocity.x;
  } else if (_events_util.rightPressed && playerX < w - playerRadius - 5) {
    playerX += playerVelocity.x;
  }
};

var keeperOneX = 35;
var keeperTwoX = w - 35;
var keeperY = y - 20;

var moveKeepers = function moveKeepers() {
  if (keeperY > y + 20 || keeperY < y - 20) {
    dx = -dx;
  }
};

var draw = function draw() {

  ctxBoard.clearRect(0, 0, w, h);
  ctx.clearRect(0, 0, w, h);
  (0, _game.drawScore)(ctxBoard, goalsPlayerOne, goalsPlayerTwo);
  (0, _soccer_field2.default)(ctx, h, w);
  var ball = new _ball2.default(ctx, ballX, ballY, ballRadius, ballVelocity);
  var player1 = new _player2.default(ctx, playerX, playerY, playerRadius, "#FF0000", "#0000FF", playerVelocity);
  var player2 = new _player2.default(ctx, playerTwoX, playerTwoY, playerRadius, "#FFFFFF", "#FF0000", playerVelocity);
  var goalkeeper1 = new _player2.default(ctx, keeperOneX, keeperY, playerRadius, "#FF0000", "#0000FF", playerVelocity);
  var goalkeeper2 = new _player2.default(ctx, keeperTwoX, keeperY, playerRadius, "#FFFFFF", "#FF0000", playerVelocity);
  ball.onField(w, h);
  playerMove();

  if (ball.score(w) === 1) {
    goalsPlayerOne++;
    ballX = x + rand;
    ballY = y + rand;
  } else if (ball.score(w) === 2) {
    goalsPlayerTwo++;
    ballX = x + rand;
    ballY = y + rand;
  }

  if ((0, _game.getDistance)(playerX, playerY, playerRadius, ballX, ballY, ballRadius) || (0, _game.getDistance)(playerTwoX, playerTwoY, playerRadius, ballX, ballY, ballRadius) || (0, _game.getDistance)(keeperOneX, keeperY, playerRadius, ballX, ballY, ballRadius) || (0, _game.getDistance)(keeperTwoX, keeperY, playerRadius, ballX, ballY, ballRadius)) {
    ballVelocity.y = -ballVelocity.y;
    ballVelocity.x = -ballVelocity.x;
  }

  if ((0, _game.getDistance)(keeperTwoX, keeperY, playerRadius, playerX, playerY, playerRadius)) {
    playerX -= 15;
  }
  if ((0, _game.getDistance)(keeperOneX, playerRadius, keeperY, playerX, playerY, playerRadius)) {
    playerX += 5;
  }
  if ((0, _game.getDistance)(keeperTwoX, keeperY, playerRadius, playerTwoX, playerTwoY, playerRadius)) {
    playerTwoX -= 5;
  }
  if ((0, _game.getDistance)(keeperOneX, keeperY, playerRadius, playerTwoX, playerTwoY, playerRadius)) {
    playerTwoX += 15;
  }
  if ((0, _game.getDistance)(playerX, playerY, playerRadius, playerTwoX, playerTwoY, playerRadius)) {
    playerTwoX += 5;
    playerX -= 5;
  }

  moveKeepers();

  ballX += ballVelocity.x;
  ballY += ballVelocity.y;
  keeperY += dx;

  (0, _game.gameOver)(goalsPlayerOne, goalsPlayerTwo);

  requestAnimationFrame(draw);
};

draw();

/***/ }),

/***/ "./lib/player.js":
/*!***********************!*\
  !*** ./lib/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(ctx, x, y, radius, fill, border, velocity) {
    _classCallCheck(this, Player);

    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill = fill;
    this.border = border;
    this.velocity = velocity;
    this.draw();
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.fill;
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = this.border;
      ctx.stroke();
      ctx.closePath();
    }
  }, {
    key: "moveGoalkeeper",
    value: function moveGoalkeeper(y) {
      if (this.y > y + 20 || this.y < y - 20) {
        this.velocity.x = -this.velocity.x;
      }
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),

/***/ "./lib/soccer_field.js":
/*!*****************************!*\
  !*** ./lib/soccer_field.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SoccerField = function SoccerField(ctx, h, w) {

  var x = w / 2;
  var y = h / 2;

  ctx.beginPath(); // center line
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 600);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath(); // left side line
  ctx.moveTo(20, 0);
  ctx.lineTo(20, 600);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath(); // top line
  ctx.moveTo(20, 1);
  ctx.lineTo(w - 20, 1);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath(); // bottom line
  ctx.moveTo(20, h - 1);
  ctx.lineTo(w - 20, h - 1);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath(); // right side line
  ctx.moveTo(w - 20, 0);
  ctx.lineTo(w - 20, 600);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath(); // 16 yard left side line
  ctx.moveTo(20, y - 51);
  ctx.lineTo(71, y - 51);
  ctx.lineTo(71, y + 51);
  ctx.lineTo(20, y + 51);
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath(); // 6 yard left side line
  ctx.moveTo(20, y - 27);
  ctx.lineTo(37, y - 27);
  ctx.lineTo(37, y + 27);
  ctx.lineTo(20, y + 27);
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath(); // 16 yard right side line
  ctx.moveTo(w - 20, y - 51);
  ctx.lineTo(w - 71, y - 51);
  ctx.lineTo(w - 71, y + 51);
  ctx.lineTo(w - 20, y + 51);
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath(); // 6 yard right side line
  ctx.moveTo(w - 20, y - 27);
  ctx.lineTo(w - 37, y - 27);
  ctx.lineTo(w - 37, y + 27);
  ctx.lineTo(w - 20, y + 27);
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath(); // center field circle
  ctx.arc(x, y, 20, 0, Math.PI * 2, false);
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath(); // left side semicircle
  ctx.arc(x - 80, y, 20, Math.PI * 1.5, Math.PI / 2, false);
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath(); // right side semicircle
  ctx.arc(w - 70, y, 20, Math.PI / 2, Math.PI * 1.5, false);
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath(); // small center field circle
  ctx.arc(x, y, 2, 0, Math.PI * 2, false);
  ctx.strokeStyle = "white";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath(); // small left side circle
  ctx.arc(50, y, 2, 0, Math.PI * 2, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath(); // small right side circle
  ctx.arc(w - 50, y, 2, 0, Math.PI * 2, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(1, y - 20, 19, 40); //left goal
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(w - 20, y - 20, 19, 40); //right goal
  ctx.strokeStyle = "white";
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(0, 0, 19, y - 21); // left top side
  ctx.fillStyle = "navy";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(0, y + 21, 19, y - 21); // left bottom side
  ctx.fillStyle = "navy";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(w - 19, 0, 19, y - 21); // right top side
  ctx.fillStyle = "navy";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(w - 19, y + 21, 19, y - 21); // right bottom side
  ctx.fillStyle = "navy";
  ctx.fill();
  ctx.closePath();
};

exports.default = SoccerField;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map