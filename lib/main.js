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

let playerX = y + 40;
let playerY = y;

let playerTwoX = y + 120;
let playerTwoY = y;

let ballVelocity = {
  x: 4.6,
  y: 4.2
};

let playerVelocity = {
  x: 4,
  y: 4
};

let dx = 1;

let ballRadius = 10;
let playerRadius = 35;

let goalsPlayerOne = 0;
let goalsPlayerTwo = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.getElementById("reset").addEventListener("click", playAgain);
document.getElementById("controls").addEventListener("mouseover", () => document.getElementById("instructions").classList.remove("hide"));
document.getElementById("controls").addEventListener("mouseout", () => document.getElementById("instructions").classList.add("hide"));

const playerMove = () => {
  if (upPressed2 && playerTwoY > playerRadius + 5) {
      playerTwoY -= playerVelocity.y;
  } else if (downPressed2 && playerTwoY < h - playerRadius - 5) {
      playerTwoY += playerVelocity.y;
  } else if (leftPressed2 && playerTwoX > playerRadius + 5) {
      playerTwoX -= playerVelocity.x;
  } else if (rightPressed2 && playerTwoX < w - playerRadius - 5) {
      playerTwoX += playerVelocity.x;
  }

  if (upPressed && playerY > playerRadius + 5) {
      playerY -= playerVelocity.y;
  } else if (downPressed && playerY < h - playerRadius - 5) {
      playerY += playerVelocity.y;
  } else if(leftPressed && playerX > playerRadius + 5) {
      playerX -= playerVelocity.x;
  } else if(rightPressed && playerX < w - playerRadius - 5) {
      playerX += playerVelocity.x;
  }
};

  let keeperOneX = 125;
  let keeperTwoX = w - 125;
  let keeperY = y - 20;

  const moveKeepers = () => {
    if (keeperY > y + 125 || keeperY < y - 125) {
      dx = -dx;
    }
  };

  const draw = () => {

    ctxBoard.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
    drawScore(ctxBoard, goalsPlayerOne, goalsPlayerTwo);
    SoccerField(ctx, h, w);
    let ball = new Ball(ctx, ballX, ballY, ballRadius, ballVelocity);
    let player1 = new Player(ctx, playerX, playerY, playerRadius, "#FF0000", "#0000FF", playerVelocity);
    let player2 = new Player(ctx, playerTwoX, playerTwoY, playerRadius, "#FFFFFF", "#FF0000", playerVelocity);
    let goalkeeper1 = new Player(ctx, keeperOneX, keeperY, playerRadius, "#FF0000", "#0000FF", playerVelocity);
    let goalkeeper2 = new Player(ctx, keeperTwoX, keeperY, playerRadius, "#FFFFFF", "#FF0000", playerVelocity);
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

    if (getDistance(playerX, playerY, playerRadius, ballX, ballY, ballRadius) ||
        getDistance(playerTwoX, playerTwoY, playerRadius, ballX, ballY, ballRadius) ||
        getDistance(keeperOneX, keeperY, playerRadius, ballX, ballY, ballRadius) ||
        getDistance(keeperTwoX, keeperY, playerRadius, ballX, ballY, ballRadius)) {
          ballVelocity.y = -ballVelocity.y;
          ballVelocity.x = -ballVelocity.x;
    }

    if (getDistance(keeperTwoX, keeperY, playerRadius, playerX, playerY, playerRadius)) {
      playerX -= 15;
    }
    if (getDistance(keeperOneX, keeperY, playerRadius, playerX, playerY, playerRadius)) {
      playerX += 5;
    }
    if (getDistance(keeperTwoX, keeperY, playerRadius, playerTwoX, playerTwoY, playerRadius)) {
      playerTwoX -= 5;
    }
    if (getDistance(keeperOneX, keeperY, playerRadius, playerTwoX, playerTwoY, playerRadius)) {
      playerTwoX += 15;
    }
    if (getDistance(playerX, playerY, playerRadius, playerTwoX, playerTwoY, playerRadius)) {
      playerTwoX += 5;
      playerX -= 5;
    }

     moveKeepers();

      ballX += ballVelocity.x;
      ballY += ballVelocity.y;
      keeperY += dx;

      gameOver(goalsPlayerOne, goalsPlayerTwo);

      requestAnimationFrame(draw);

  };

draw();
