import SoccerField from "./soccer_field";
import { keyUpHandler,keyDownHandler, upPressed, downPressed, leftPressed, rightPressed, upPressed2, downPressed2, leftPressed2, rightPressed2 } from "./events_util";
import { drawScore, gameOver, playAgain, getDistance } from "./game.js";
import Player from './player';
import Ball from './ball';

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasScore = document.getElementById("scoreCanvas");
let ctxBoard = canvasScore.getContext("2d");

let h = canvas.height;
let w = canvas.width;
let x = w / 2;
let y = h / 2;

let rand = Math.floor((Math.random() - 0.5) * 10);
let ballX = x + rand;
let ballY = y + rand;

let playerX = x - 150;
let playerY = y;

let playerTwoX = x + 150;
let playerTwoY = y;

let player3X = x + 200;
let player3Y = y + 100;

let keeperOneX = 125;
let keeperTwoX = w - 125;
let keeperY = y - 20;

let ballVelocity = {
  x: 10,
  y: 8
};

let computerPlayerVelocity = {
  x: 4,
  y: 4
};

let playerVelocity = {
  x: 5,
  y: 5
};

let dx = 1;

let ballRadius = 15;
let playerRadius = 35;
let playerTwoRadius = 35;
let computerRadius = 35;

let goalsPlayerOne = 0;
let goalsPlayerTwo = 0;

const deleteHumanPlayer = () => {
  playerTwoX = 0;
  playerTwoY = 0;
  playerTwoRadius = 0;
  $("#welcome").addClass("hide");
  goalsPlayerOne = 0;
  goalsPlayerTwo = 0;
  draw();
};

const deleteComputerPlayer = () => {
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

$("body").keydown(keyDownHandler);
$("body").keyup(keyUpHandler);
$("#reset").click(playAgain);
$("#computer").click(() => deleteHumanPlayer());
$("#human").click(() => deleteComputerPlayer());

const playerMove = () => {
  if (upPressed2 && playerTwoY > playerRadius + 5) {
      playerTwoY -= playerVelocity.y;
  } else if (downPressed2 && playerTwoY < h - playerRadius - 5) {
      playerTwoY += playerVelocity.y;
  } else if (leftPressed2 && playerTwoX > playerRadius + 55) {
      playerTwoX -= playerVelocity.x;
  } else if (rightPressed2 && playerTwoX < w - playerRadius - 55) {
      playerTwoX += playerVelocity.x;
  }

  if (upPressed && playerY > playerRadius + 5) {
      playerY -= playerVelocity.y;
  } else if (downPressed && playerY < h - playerRadius - 5) {
      playerY += playerVelocity.y;
  } else if(leftPressed && playerX > playerRadius + 55) {
      playerX -= playerVelocity.x;
  } else if(rightPressed && playerX < w - playerRadius - 55) {
      playerX += playerVelocity.x;
  }
};

  const moveKeepers = () => {
    if (keeperY > y + 125 || keeperY < y - 125) {
      dx = -dx;
    }
  };

  const draw = () => {
    ctxBoard.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
    drawScore(ctxBoard, goalsPlayerOne, goalsPlayerTwo);
    let field = new SoccerField(ctx, h, w);
    field.draw();
    let ball = new Ball(ctx, ballX, ballY, ballRadius, ballVelocity);
    let player1 = new Player(ctx, playerX, playerY, playerRadius, playerVelocity, "A");
    let player2 = new Player(ctx, playerTwoX, playerTwoY, playerTwoRadius, playerVelocity, "B");
    let player3 = new Player(ctx, player3X, player3Y, computerRadius, computerPlayerVelocity, "B");
    let goalkeeper1 = new Player(ctx, keeperOneX, keeperY, playerRadius, playerVelocity, "A");
    let goalkeeper2 = new Player(ctx, keeperTwoX, keeperY, playerRadius, playerVelocity, "B");
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

    if (getDistance(goalkeeper1, player1)) {
      playerX += 5;
    }
    if (getDistance(goalkeeper2, player1)) {
      playerX -= 15;
    }
    if (getDistance(goalkeeper2, player2)) {
      playerTwoX -= 5;
    }
    if (getDistance(goalkeeper1, player2)) {
      playerTwoX += 15;
    }
    if (getDistance(player1, player2)) {
      playerTwoX += 5;
      playerX -= 5;
    }
    if (getDistance(goalkeeper2, player3)) {
      player3X -= 5;
    }
    if (getDistance(goalkeeper1, player3)) {
      player3X += 15;
    }
    if (getDistance(player1, player3)) {
      player3X += 5;
      playerX -= 5;
    }

    // player3d.moveComputer(ball, x, y);
      ballX += ballVelocity.x;
      ballY += ballVelocity.y;
      player3X += computerPlayerVelocity.x;
      player3Y += computerPlayerVelocity.y;
      keeperY += dx;

      gameOver(goalsPlayerOne, goalsPlayerTwo);

      requestAnimationFrame(draw);


  };
