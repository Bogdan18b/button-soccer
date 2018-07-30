import SoccerField from "./soccer_field";
import { keyUpHandler,keyDownHandler, upPressed, downPressed, leftPressed, rightPressed, upPressed2, downPressed2, leftPressed2, rightPressed2 } from "./events_util";
import { drawScore, gameOver, playAgain } from "./game.js";
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
  x: 2,
  y: 2.5
};

let playerVelocity = {
  x: 3,
  y: 3
};

let dx = 0.5;

let ballRadius = 3;
let playerRadius = 8;

let goalsPlayerOne = 0;
let goalsPlayerTwo = 0;



const getDistance = (x1, y1, x2, y2) => {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.getElementById("reset").addEventListener("click", playAgain);


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

  let keeperOneX = 35;
  let keeperTwoX = w - 35;
  let keeperY = y - 20;

  const moveKeepers = () => {
    if (keeperY > y + 20 || keeperY < y - 20) {
      dx = -dx;
    }
  };

  const score = () => {
    if (ballX > w - 10 - ballRadius && ballY + ballVelocity.y > 50 + ballRadius && ballY + ballVelocity.y < 90 + ballRadius) {
      goalsPlayerOne++;
      ballX = x + rand;
      ballY = y + rand;
    } else if (ballY + ballVelocity.y > 50 + ballRadius && ballY + ballVelocity.y < 90 + ballRadius && ballX + ballVelocity.x < 10 + ballRadius) {
      goalsPlayerTwo++;
      ballX = x + rand;
      ballY = y + rand;
    }
  };

  const draw = () => {

    ctxBoard.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
    drawScore(ctxBoard, goalsPlayerOne, goalsPlayerTwo);
    SoccerField(ctx, h, w);
    let ball = new Ball(ctx, ballX, ballY, ballRadius, ballVelocity);
    let player1 = new Player(ctx, playerX, playerY, playerRadius, "#FF0000", "#0000FF", {x:3, y: 3});
    let player2 = new Player(ctx, playerTwoX, playerTwoY, playerRadius, "#FFFFFF", "#FF0000", {x:3, y: 3});
    let goalkeeper1 = new Player(ctx, keeperOneX, keeperY, playerRadius, "#FF0000", "#0000FF", {x:0.5, y: 0.5});
    let goalkeeper2 = new Player(ctx, keeperTwoX, keeperY, playerRadius, "#FFFFFF", "#FF0000", {x:0.5, y: 0.5});
    player1.draw();
    player2.draw();
    goalkeeper1.draw();
    goalkeeper2.draw();
    ball.onField(w, h);
    playerMove();
    score();
    gameOver(goalsPlayerOne, goalsPlayerTwo);

    if (getDistance(playerX, playerY, ballX, ballY) < playerRadius + ballRadius) {
      ballVelocity.y = -ballVelocity.y;
      ballVelocity.x = -ballVelocity.x;
    }
    if (getDistance(playerTwoX, playerTwoY, ballX, ballY) < playerRadius + ballRadius) {
      ballVelocity.y = -ballVelocity.y;
      ballVelocity.x = -ballVelocity.x;
    }
    if (getDistance(keeperOneX, keeperY, ballX, ballY) < playerRadius + ballRadius) {
      ballVelocity.y = -ballVelocity.y;
    }
    if (getDistance(keeperTwoX, keeperY, ballX, ballY) < playerRadius + ballRadius) {
      ballVelocity.y = -ballVelocity.y;
    }
    if (getDistance(keeperTwoX, keeperY, playerX, playerY) < 2 * playerRadius) {
      playerX -= 15;
    }
    if (getDistance(keeperOneX, keeperY, playerX, playerY) < 2 * playerRadius) {
      playerX += 5;
    }
    if (getDistance(keeperTwoX, keeperY, playerTwoX, playerTwoY) < 2 * playerRadius) {
      playerTwoX -= 5;
    }
    if (getDistance(keeperOneX, keeperY, playerTwoX, playerTwoY) < 2 * playerRadius) {
      playerTwoX += 15;
    }
    if (getDistance(playerX, playerY, playerTwoX, playerTwoY) < 2 * playerRadius) {
      playerTwoX += 5;
      playerX -= 5;
    }

     moveKeepers();

      ballX += ballVelocity.x;
      ballY += ballVelocity.y;
      keeperY += dx;

      requestAnimationFrame(draw);

  };

draw();
