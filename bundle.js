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
      if ((this.y - this.radius < h / 2 - 100 || this.y + this.radius > h / 2 + 100) && this.x + this.radius > w - 50 || (this.y - this.radius < h / 2 - 100 || this.y + this.radius > h / 2 + 100) && this.x - this.radius < 50) {
        this.velocity.x *= -1;
      }
      if (this.y + this.radius > h || this.y - this.radius < 0) {
        this.velocity.y *= -1;
      }
    }
  }, {
    key: "score",
    value: function score(fieldWidth) {
      if (this.x + this.radius > fieldWidth - 50 && this.y + this.radius > 200 && this.y - this.radius < 400) {
        return 1;
      } else if (this.x - this.radius < 50 && this.y + this.radius > 200 && this.y - this.radius < 400) {
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
    //i used switch before i had issues when presseing 2 keys in the same time
    if (e.keyCode === 87) {
        exports.upPressed = upPressed = false;
    } else if (e.keyCode === 83) {
        exports.downPressed = downPressed = false;
    } else if (e.keyCode === 65) {
        exports.leftPressed = leftPressed = false;
    } else if (e.keyCode === 68) {
        exports.rightPressed = rightPressed = false;
    } else if (e.keyCode === 38) {
        exports.upPressed2 = upPressed2 = false;
    } else if (e.keyCode === 40) {
        exports.downPressed2 = downPressed2 = false;
    } else if (e.keyCode === 37) {
        exports.leftPressed2 = leftPressed2 = false;
    } else if (e.keyCode === 39) {
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
  ctx.font = "70px Arial bold";
  ctx.fillStyle = "white";
  ctx.fillText(x, 20, 75);
  ctx.fillText(y, 150, 75);
};

var gameOver = exports.gameOver = function gameOver(goalsPlayerOne, goalsPlayerTwo) {
  if (goalsPlayerOne === 5 || goalsPlayerTwo === 5) {
    var score = {
      x: goalsPlayerOne,
      y: goalsPlayerTwo
    };
    Object.freeze(score);
    $("#final-score").html(score.x + " : " + score.y);
    $("#congrats").removeClass("hide");
  }
};

var playAgain = exports.playAgain = function playAgain() {
  document.location.reload();
};

var getDistance = exports.getDistance = function getDistance(x1, y1, radius1, x2, y2, radius2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;

  var dist = Math.pow(xDistance, 2) + Math.pow(yDistance, 2);
  var rad = Math.pow(radius1 + radius2 + 10, 2);
  return dist <= rad ? true : false;
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

var playerX = x - 150;
var playerY = y;

var playerTwoX = x + 150;
var playerTwoY = y;

var player3X = x + 200;
var player3Y = y + 100;

var keeperOneX = 125;
var keeperTwoX = w - 125;
var keeperY = y - 20;

var ballVelocity = {
  x: 10,
  y: 7
};

var computerPlayerVelocity = {
  x: 4,
  y: 4
};

var playerVelocity = {
  x: 5,
  y: 5
};

var dx = 1;

var ballRadius = 15;
var playerRadius = 35;
var playerTwoRadius = 35;
var computerRadius = 35;

var goalsPlayerOne = 0;
var goalsPlayerTwo = 0;

var deleteHumanPlayer = function deleteHumanPlayer() {
  playerTwoX = 0;
  playerTwoY = 0;
  playerTwoRadius = 0;
  $("#welcome").addClass("hide");
  goalsPlayerOne = 0;
  goalsPlayerTwo = 0;
  draw();
};

var deleteComputerPlayer = function deleteComputerPlayer() {
  player3X = 0;
  player3Y = 0;
  computerRadius = 0;
  computerPlayerVelocity = {
    x: 0,
    y: 0
  };
  $("#welcome").addClass("hide");
  goalsPlayerOne = 0;
  goalsPlayerTwo = 0;
  draw();
};

$("body").keydown(_events_util.keyDownHandler);
$("body").keyup(_events_util.keyUpHandler);
$("#reset").click(_game.playAgain);
$("#computer").click(function () {
  return deleteHumanPlayer();
});
$("#human").click(function () {
  return deleteComputerPlayer();
});

var playerMove = function playerMove() {
  if (_events_util.upPressed2 && playerTwoY > playerRadius + 5) {
    playerTwoY -= playerVelocity.y;
  } else if (_events_util.downPressed2 && playerTwoY < h - playerRadius - 5) {
    playerTwoY += playerVelocity.y;
  } else if (_events_util.leftPressed2 && playerTwoX > playerRadius + 55) {
    playerTwoX -= playerVelocity.x;
  } else if (_events_util.rightPressed2 && playerTwoX < w - playerRadius - 55) {
    playerTwoX += playerVelocity.x;
  }

  if (_events_util.upPressed && playerY > playerRadius + 5) {
    playerY -= playerVelocity.y;
  } else if (_events_util.downPressed && playerY < h - playerRadius - 5) {
    playerY += playerVelocity.y;
  } else if (_events_util.leftPressed && playerX > playerRadius + 55) {
    playerX -= playerVelocity.x;
  } else if (_events_util.rightPressed && playerX < w - playerRadius - 55) {
    playerX += playerVelocity.x;
  }
};

var moveKeepers = function moveKeepers() {
  if (keeperY > y + 125 || keeperY < y - 125) {
    dx = -dx;
  }
};

var draw = function draw() {
  ctxBoard.clearRect(0, 0, w, h);
  ctx.clearRect(0, 0, w, h);
  (0, _game.drawScore)(ctxBoard, goalsPlayerOne, goalsPlayerTwo);
  var field = new _soccer_field2.default(ctx, h, w);
  field.draw();
  var ball = new _ball2.default(ctx, ballX, ballY, ballRadius, ballVelocity);
  var player1 = new _player2.default(ctx, playerX, playerY, playerRadius, playerVelocity, "A");
  var player2 = new _player2.default(ctx, playerTwoX, playerTwoY, playerTwoRadius, playerVelocity, "B");
  var player3 = new _player2.default(ctx, player3X, player3Y, computerRadius, computerPlayerVelocity, "B");
  var goalkeeper1 = new _player2.default(ctx, keeperOneX, keeperY, playerRadius, playerVelocity, "A");
  var goalkeeper2 = new _player2.default(ctx, keeperTwoX, keeperY, playerRadius, playerVelocity, "B");
  ball.onField(w, h);
  player3.onField(x, y);
  playerMove();
  moveKeepers();
  if (ball.score(w) === 1) {
    goalsPlayerOne++;
    ballX = x + rand;
    ballY = y + rand;
  } else if (ball.score(w) === 2) {
    goalsPlayerTwo++;
    ballX = x + rand;
    ballY = y + rand;
  }

  player1.shoot(ball);
  player2.shoot(ball);
  player3.shoot(ball);
  goalkeeper1.shoot(ball);
  goalkeeper2.shoot(ball);

  if ((0, _game.getDistance)(keeperOneX, keeperY, playerRadius, playerX, playerY, playerRadius)) {
    playerX += 5;
  }
  if ((0, _game.getDistance)(keeperTwoX, keeperY, playerRadius, playerX, playerY, playerRadius)) {
    playerX -= 15;
  }
  if ((0, _game.getDistance)(keeperTwoX, keeperY, playerRadius, playerTwoX, playerTwoY, playerTwoRadius)) {
    playerTwoX -= 5;
  }
  if ((0, _game.getDistance)(keeperOneX, keeperY, playerRadius, playerTwoX, playerTwoY, playerTwoRadius)) {
    playerTwoX += 15;
  }
  if ((0, _game.getDistance)(playerX, playerY, playerRadius, playerTwoX, playerTwoY, playerTwoRadius)) {
    playerTwoX += 5;
    playerX -= 5;
  }
  if ((0, _game.getDistance)(keeperTwoX, keeperY, playerRadius, player3X, player3Y, computerRadius)) {
    player3X -= 5;
  }
  if ((0, _game.getDistance)(keeperOneX, keeperY, playerRadius, player3X, player3Y, computerRadius)) {
    player3X += 15;
  }
  if ((0, _game.getDistance)(playerX, playerY, playerRadius, player3X, player3Y, computerRadius)) {
    player3X += 5;
    playerX -= 5;
  }

  // player3d.moveComputer(ball, x, y);
  ballX += ballVelocity.x;
  ballY += ballVelocity.y;
  player3X += computerPlayerVelocity.x;
  player3Y += computerPlayerVelocity.y;
  keeperY += dx;

  (0, _game.gameOver)(goalsPlayerOne, goalsPlayerTwo);

  requestAnimationFrame(draw);
};

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

var _game = __webpack_require__(/*! ./game */ "./lib/game.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(ctx, x, y, radius, velocity, team) {
    _classCallCheck(this, Player);

    this.team = team;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.colors();
    this.draw();
  }

  _createClass(Player, [{
    key: "colors",
    value: function colors() {
      if (this.team === "A") {
        this.fill = "#FF0000";
        this.border = "#0000FF";
      } else {
        this.fill = "#FFFFFF";
        this.border = "#FF0000";
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.fill;
      ctx.fill();
      ctx.lineWidth = 15;
      ctx.strokeStyle = this.border;
      ctx.stroke();
      this.number();
      ctx.closePath();
    }
  }, {
    key: "number",
    value: function number() {
      this.ctx.font = 'bold 30px arial';
      this.ctx.fillStyle = 'navy';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(this.team, this.x, this.y + 10);
    }
  }, {
    key: "shoot",
    value: function shoot(ball) {
      if ((0, _game.getDistance)(this.x, this.y, this.radius, ball.x, ball.y, ball.radius)) {
        ball.velocity.x *= -1;
      }
    }
  }, {
    key: "computerPlayer",
    value: function computerPlayer(ball) {
      this.x += ball.velocity.x;
      this.y += ball.velocity.y;
    }
  }, {
    key: "onField",
    value: function onField(x, y) {
      if (this.x < x - 400 || this.x > x + 400) {
        this.velocity.x *= -1;
      }
      if (this.y < y - 200 || this.y > y + 200) {
        this.velocity.y *= -1;
      }
    }

    // moveComputer(ball, x, y) {
    //   if (this.velocity.x < 0) {
    //     this.velocity.x *= -1;
    //   }
    //   if (this.velocity.y < 0) {
    //     this.velocity.y *= -1;
    //   }
    //   if (ball.x < x && ball.y < y) {
    //     this.x -= this.velocity.x;
    //     this.y -= this.velocity.y;
    //   } else if (ball.x < x && ball.y > y) {
    //     this.x -= this.velocity.x;
    //     this.y += this.velocity.y;
    //   } else if (ball.x > x && ball.y < y) {
    //     this.x += this.velocity.x;
    //     this.y -= this.velocity.y;
    //   } else if (ball.x > x && ball.y > y) {
    //     this.x += this.velocity.x;
    //     this.y += this.velocity.y;
    //   }
    // }

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SoccerField = function () {
  function SoccerField(ctx, height, width) {
    _classCallCheck(this, SoccerField);

    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.x = this.width / 2; // width is 1200px
    this.y = this.height / 2; //height is 600px
    this.square = this.width / 24; // 50px also h/12
  }

  _createClass(SoccerField, [{
    key: "draw",
    value: function draw() {
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = "white";
      this.ctx.fillStyle = "white";
      this.centerLine();
      this.leftSideLine();
      this.rightSideLine();
      this.topLine();
      this.bottomLine();
      this.leftSideBigBox();
      this.rightSideBigBox();
      this.leftSideSmallBox();
      this.rightSideSmallBox();
      this.centerFieldCircle();
      this.leftSideSemicircle();
      this.rightSideSemicircle();
      this.centerFieldDot();
      this.leftSideDot();
      this.rightSideDot();
      this.leftGoal();
      this.rightGoal();
      this.leftTopSide();
      this.leftBottomSide();
      this.rightTopSide();
      this.rightBottomSide();
    }
  }, {
    key: "centerLine",
    value: function centerLine() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, 0);
      this.ctx.lineTo(this.x, this.height);
      this.ctx.stroke();
    }
  }, {
    key: "leftSideLine",
    value: function leftSideLine() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.square, 0);
      this.ctx.lineTo(this.square, this.height);
      this.ctx.stroke();
    }
  }, {
    key: "topLine",
    value: function topLine() {
      this.ctx.beginPath();
      this.ctx.moveTo(20, 1);
      this.ctx.lineTo(this.width - 20, 1);
      this.ctx.stroke();
    }
  }, {
    key: "bottomLine",
    value: function bottomLine() {
      this.ctx.beginPath();
      this.ctx.moveTo(20, this.height - 1);
      this.ctx.lineTo(this.width - 20, this.height - 1);
      this.ctx.stroke();
    }
  }, {
    key: "rightSideLine",
    value: function rightSideLine() {
      this.ctx.beginPath();
      this.ctx.moveTo(23 * this.square, 0);
      this.ctx.lineTo(23 * this.square, this.height);
      this.ctx.stroke();
    }
  }, {
    key: "leftSideBigBox",
    value: function leftSideBigBox() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.square, this.y / 3);
      this.ctx.lineTo(4 * this.square, this.y / 3);
      this.ctx.lineTo(4 * this.square, 5 * this.y / 3);
      this.ctx.lineTo(this.square, 5 * this.y / 3);
      this.ctx.stroke();
    }
  }, {
    key: "leftSideSmallBox",
    value: function leftSideSmallBox() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.square, this.y - 3 * this.square);
      this.ctx.lineTo(2.5 * this.square, this.y - 3 * this.square);
      this.ctx.lineTo(2.5 * this.square, this.y + 3 * this.square);
      this.ctx.lineTo(this.square, this.y + 3 * this.square);
      this.ctx.stroke();
    }
  }, {
    key: "rightSideBigBox",
    value: function rightSideBigBox() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.width - this.square, this.y / 3);
      this.ctx.lineTo(this.width - 4 * this.square, this.y / 3);
      this.ctx.lineTo(this.width - 4 * this.square, 5 * this.y / 3);
      this.ctx.lineTo(this.width - this.square, 5 * this.y / 3);
      this.ctx.stroke();
    }
  }, {
    key: "rightSideSmallBox",
    value: function rightSideSmallBox() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.width - this.square, this.y - 3 * this.square);
      this.ctx.lineTo(this.width - 2.5 * this.square, this.y - 3 * this.square);
      this.ctx.lineTo(this.width - 2.5 * this.square, this.y + 3 * this.square);
      this.ctx.lineTo(this.width - this.square, this.y + 3 * this.square);
      this.ctx.stroke();
    }
  }, {
    key: "centerFieldCircle",
    value: function centerFieldCircle() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 100, 0, Math.PI * 2, false);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }, {
    key: "leftSideSemicircle",
    value: function leftSideSemicircle() {
      this.ctx.beginPath();
      this.ctx.arc(4 * this.square, this.y, 100, Math.PI * 1.5, Math.PI / 2, false);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }, {
    key: "rightSideSemicircle",
    value: function rightSideSemicircle() {
      this.ctx.beginPath();
      this.ctx.arc(this.width - 4 * this.square, this.y, 100, Math.PI / 2, Math.PI * 1.5, false);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }, {
    key: "centerFieldDot",
    value: function centerFieldDot() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "leftSideDot",
    value: function leftSideDot() {
      this.ctx.beginPath();
      this.ctx.arc(3.3 * this.square, this.y, 3, 0, Math.PI * 2, false);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "rightSideDot",
    value: function rightSideDot() {
      this.ctx.beginPath();
      this.ctx.arc(this.width - 3.3 * this.square, this.y, 3, 0, Math.PI * 2, false);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "leftGoal",
    value: function leftGoal() {
      this.ctx.beginPath();
      this.ctx.rect(0, this.y - 2 * this.square, this.square, 4 * this.square);
      this.ctx.stroke();
    }
  }, {
    key: "rightGoal",
    value: function rightGoal() {
      this.ctx.beginPath();
      this.ctx.rect(this.width - this.square, this.y - 2 * this.square, this.square, 4 * this.square);
      this.ctx.stroke();
    }
  }, {
    key: "leftTopSide",
    value: function leftTopSide() {
      this.ctx.beginPath();
      this.ctx.rect(0, 0, this.square - 1, 4 * this.square - 1);
      this.ctx.fillStyle = "navy";
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "leftBottomSide",
    value: function leftBottomSide() {
      this.ctx.beginPath();
      this.ctx.rect(0, this.y + 2 * this.square + 1, this.square - 1, 4 * this.square);
      this.ctx.fillStyle = "navy";
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "rightTopSide",
    value: function rightTopSide() {
      this.ctx.beginPath();
      this.ctx.rect(this.width - this.square + 1, 0, this.square - 1, 4 * this.square - 1);
      this.ctx.fillStyle = "navy";
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "rightBottomSide",
    value: function rightBottomSide() {
      this.ctx.beginPath();
      this.ctx.rect(this.width - this.square + 1, this.y + 2 * this.square + 1, this.square - 1, 4 * this.square); // right bottom side
      this.ctx.fillStyle = "navy";
      this.ctx.fill();
      this.ctx.closePath();
    }
  }]);

  return SoccerField;
}();

exports.default = SoccerField;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map